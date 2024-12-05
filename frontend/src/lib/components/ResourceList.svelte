<!-- ResourceList.svelte -->
<script lang="ts">
	import BoopableLink from './BoopableLink.svelte';
	import type { Resource } from '$lib/types/Resource';

	export let tag: string;
	export let resources: Resource[];

	// State for toggling additional resources
	let expandedResourceIndex: number | null = null;

	function toggleAdditionalResources(index: number) {
		expandedResourceIndex = expandedResourceIndex === index ? null : index;
	}
</script>

<div id={encodeURIComponent(tag)} class="resource-group">
	<h2>{tag}</h2>
	<div class="resource-list">
		{#each resources as resource, index}
			<div class="resource-item">
				<div class="resource-main">
					<BoopableLink href={resource.link} boopParams={{ isBooped: true, y: 3, timing: 150 }}>
						<strong>{resource.title}</strong>
					</BoopableLink>
					<p><em>By {resource.author}</em></p>
					<p>{resource.Description}</p>
					<p>
						Tags:
						{#each resource.tags as resourceTag}
							<span class="tag">{resourceTag}</span>
						{/each}
					</p>
				</div>

				<div class="resource-extra">
					{#if resource.additional_resources}
						<button on:click={() => toggleAdditionalResources(index)}>
							{expandedResourceIndex === index
								? 'Hide Additional Resources'
								: 'Show Additional Resources'}
						</button>
						{#if expandedResourceIndex === index}
							<ul class="additional-resources">
								{#each Object.entries(resource.additional_resources) as [title, link]}
									<li>
										<a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
									</li>
								{/each}
							</ul>
						{/if}
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.resource-group {
		margin-top: 4rem;
	}

	.resource-group h2 {
		margin-bottom: 1rem;
		text-transform: capitalize;
		text-align: center;
	}

	.resource-list {
		display: grid;
		grid-template-columns: 1fr 300px; /* Fixed width for the extra column */
		gap: 2rem; /* Space between the main content and the extra column */
	}

	.resource-main p {
		margin: 0rem 0;
		margin-left: 1rem;
	}

	.resource-item {
		display: contents;
	}

	.resource-main {
		flex: 1; /* Take up available space */
	}

	.resource-extra {
		flex-basis: 250px; /* Fixed width for the additional resources */
		display: flex;
		flex-direction: column;
		align-items: flex-start; /* Align button and list at the top */
	}

	.tag {
		display: inline-block;
		background-color: #f0f0f0;
		padding: 0.25rem 0.5rem;
		margin-right: 0.5rem;
		border-radius: 5px;
	}

	button {
		margin-top: 1rem;
		background-color: #007acc;
		color: white;
		border: none;
		border-radius: 5px;
		padding: 0.5rem 1rem;
		font-size: 0.9rem;
		cursor: pointer;
		transition: all 0.3s ease;
	}

	button:hover {
		background-color: #005fa3;
		transform: scale(1.05);
	}

	button:focus {
		outline: none;
		box-shadow: 0 0 0 3px rgba(0, 122, 204, 0.5);
	}

	.additional-resources {
		margin-top: 1rem;
		padding-left: 1.5rem;
	}

	.additional-resources li {
		margin-bottom: 0.5rem;
	}

	.additional-resources a {
		color: #007acc;
		text-decoration: none;
	}

	.additional-resources a:hover {
		text-decoration: underline;
	}
</style>
