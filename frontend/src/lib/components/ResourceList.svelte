<!-- ResourceList.svelte -->
<script lang="ts">
	import BoopableLink from './BoopableLink.svelte';
	import type { Resource } from '$lib/types/Resource';

	export let tag: string;
	export let resources: Resource[];

	console.log(`ResourceList Component - Tag: ${tag}`, resources); // Debugging line
</script>

<div id={encodeURIComponent(tag)} class="resource-group">
	<h2>{tag}</h2>
	<ul>
		{#each resources as resource}
			<li>
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
			</li>
		{/each}
	</ul>
</div>

<style>
	.resource-group h2 {
		margin-bottom: 1rem;
		margin-top: 4rem;
		text-transform: capitalize;
		text-align: center;
	}

	.tag {
		display: inline-block;
		background-color: #f0f0f0;
		padding: 0.25rem 0.5rem;
		margin-right: 0.5rem;
		border-radius: 5px;
	}
</style>
