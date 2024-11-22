<!-- src/lib/components/AboutHeader.svelte -->
<script lang="ts">
	import BoopableLink from './BoopableLink.svelte';
	export let name: string;
	export let info: { text: string; link?: string; isLinked?: boolean }[][];
	export let socialLinks: { name: string; link: string }[];
</script>

<div class="text-center">
	<h1 class="display-4 text-primary mb-3">{name}</h1>

	<div class="mb-4">
		{#each socialLinks as link}
			<BoopableLink
				href={link.link}
				boopParams={{ isBooped: true, rotation: 3, timing: 150 }}
				class="mx-2"
			>
				{link.name}
			</BoopableLink>
		{/each}
	</div>

	<ul class="list-unstyled mb-5">
		{#each info as sentence}
			<li class="mb-1">
				{#each sentence as part}
					{#if part.isLinked}
						<BoopableLink
							href={part.link ?? 'javascript:void(0)'}
							boopParams={{ isBooped: true, y: 3, timing: 150 }}
						>
							{part.text}
						</BoopableLink>
					{:else}
						{part.text}
					{/if}
				{/each}
			</li>
		{/each}
	</ul>
</div>
