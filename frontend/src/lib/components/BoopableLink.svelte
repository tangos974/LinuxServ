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
	class="boopable-link"
	{href}
	{target}
	rel="noopener noreferrer"
	use:boop={{ ...boopParams, setter: setIsBooped }}
	{...$$restProps}
>
	<slot />
</a>
