<script lang="ts">
	import ResourceList from '$lib/components/ResourceList.svelte';
	import { onMount } from 'svelte';
	import type { Resource } from '$lib/types/Resource';
	import BoopableLink from '$lib/components/BoopableLink.svelte';

	let groupedResources: Map<string, Resource[]> = new Map();
	let selectedTags: Set<string> = new Set(); // Keeps track of selected tags
	let tags: Set<string> = new Set();

	// States for handling tag filter UI
	let showTagFilter = false;

	onMount(async () => {
		try {
			const response = await fetch('/resources.json');
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const data: Resource[] = await response.json();

			// Group resources by their first tag
			groupedResources = data.reduce((map, resource) => {
				const firstTag = resource.tags[0] || 'Uncategorized';
				if (!map.has(firstTag)) {
					map.set(firstTag, []);
				}
				map.get(firstTag)!.push(resource);
				return map;
			}, new Map<string, Resource[]>());

			// Collect all unique tags
			tags = new Set(data.flatMap((resource) => resource.tags));
		} catch (error) {
			console.error('Failed to fetch resources:', error);
		}
	});

	// Reactive store for filtered resources
	$: filteredGroupedResources =
		selectedTags.size === 0
			? groupedResources // Show all groups when no tags are selected
			: filterResources(); // Apply filtering only when tags are selected

	// Filter resources based on selected tags
	function filterResources() {
		if (selectedTags.size === 0) {
			// Show all if no tags are selected
			return groupedResources;
		}

		const filtered = new Map<string, Resource[]>();
		for (const [groupTag, resources] of groupedResources) {
			const filteredResources = resources.filter((resource) =>
				resource.tags.some((t) => selectedTags.has(t))
			);
			if (filteredResources.length > 0) {
				filtered.set(groupTag, filteredResources);
			}
		}
		return filtered;
	}

	// Toggle tag filter UI
	function toggleTagFilter() {
		showTagFilter = !showTagFilter;
	}

	// Add a tag to the filter
	function addTag(tag: string) {
		selectedTags.add(tag);
		selectedTags = new Set(selectedTags); // Trigger reactivity
	}

	// Remove a tag from the filter
	function removeTag(tag: string) {
		selectedTags.delete(tag);
		selectedTags = new Set(selectedTags); // Trigger reactivity
	}

	// Helper function for checkbox changes
	function handleCheckboxChange(e: Event, tag: string) {
		const target = e.target as HTMLInputElement | null;
		if (target) {
			if (target.checked) {
				addTag(tag);
			} else {
				removeTag(tag);
			}
		}
	}
</script>

<header>
	<div class="header-content">
		<p>
			Below is my entirely personal - absolutely not exhaustive - reading list. It's a work in
			progress - potentially forever, as I keep adding books I want to read or have read, videos I
			found particularly interesting, etc. Being a DevOps engineer with an interest in MLOps,
			resources tend to relate to those two areas.
		</p>
		<p>
			Heavily inspired by
			<BoopableLink
				boopParams={{ isBooped: true, y: 3, timing: 150 }}
				href="https://matt.might.net/articles/what-cs-majors-should-know/"
				>What every computer science major should know</BoopableLink
			>
			Should I call it 'What every DevOps engineer should know'?
		</p>
	</div>
</header>

<div class="main-content" style="display: flex;">
	<!-- Navigation Panel -->
	<nav class="nav-panel">
		<!-- Navigation Links -->
		<div class="navigation-links">
			<h3>Navigate To</h3>
			<ul>
				{#each Array.from(filteredGroupedResources.keys()) as groupTag}
					<li>
						<a href={`#${encodeURIComponent(groupTag)}`}>{groupTag}</a>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Filter by Tags -->
		<div class="filter-section">
			<h3>
				Filter by
				<button on:click={toggleTagFilter}>{showTagFilter ? '−' : '+'}</button>
			</h3>
			{#if showTagFilter}
				<div class="tag-filter">
					<ul class="tags-list">
						{#each Array.from(tags) as tag}
							<li>
								<label>
									<input
										type="checkbox"
										checked={selectedTags.has(tag)}
										on:change={(e) => handleCheckboxChange(e, tag)}
									/>
									{tag}
								</label>
							</li>
						{/each}
					</ul>
				</div>
			{/if}
		</div>

		<!-- Display Selected Tags -->
		{#if selectedTags.size > 0}
			<div class="selected-tags">
				<h4>Selected Tags:</h4>
				<ul>
					{#each Array.from(selectedTags) as tag}
						<li>
							<span>{tag}</span>
							<button on:click={() => removeTag(tag)}>×</button>
						</li>
					{/each}
				</ul>
			</div>
		{/if}
	</nav>

	<!-- Filtered Resource Lists -->
	<section class="resource-list">
		{#each Array.from(filteredGroupedResources.entries()) as [tag, resources]}
			<ResourceList {tag} {resources} />
		{/each}
	</section>
</div>
