<!-- src/lib/components/BoopableLink.svelte -->
<script lang="ts">
	import boop from '../boop';
	export let href: string;
	export let target: string = '_blank';
	export let boopParams: {
		isBooped: boolean;
		x?: number;
		y?: number;
		rotation?: number;
		scale?: number;
		timing?: number;
	} = { isBooped: true };

	function setIsBooped(val: boolean) {
		boopParams.isBooped = val;
	}
</script>

<a
	{href}
	{target}
	rel="noopener noreferrer"
	use:boop={{ ...boopParams, setter: setIsBooped }}
	class="text-decoration-none"
	{...$$restProps}
>
	<slot />
</a>

<style>
	a {
		color: #000000;
		text-decoration: none;
		position: relative;
		transition:
			color 0.3s ease,
			padding-right 0.3s ease;
		padding-right: 0;
	}

	a:hover {
		color: #0056b3;
		padding-right: 0.5rem; /* Add padding on hover for the arrow space */
	}

	a::after {
		content: '⤴';
		position: absolute;
		transform: translateX(-5px);
		transition:
			transform 0.3s ease,
			opacity 0.3s ease;
		opacity: 0;
	}

	a:hover::after {
		transform: translateX(0);
		opacity: 1;
	}
</style>
