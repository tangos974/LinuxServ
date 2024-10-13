<!-- src/lib/components/AboutPic.svelte -->
<script lang="ts">
    import BoopableLink from './BoopableLink.svelte';
    export let image: string;
    export let altText: string;
    export let description: { text: string; link?: string; isLinked?: boolean }[];
</script>

<div class="card border-0 d-flex flex-row align-items-center p-4 mx-auto" style="max-width: 700px;">
    <img src={image} alt={altText} class="rounded-circle" style="width: 250px; height: 250px; object-fit: cover;" />
    <div class="card-body ms-4">
        <p class="card-text">
            {#each description as part}
                {#if part.isLinked}
                    <BoopableLink href={part.link ?? "javascript:void(0)"} boopParams={{ isBooped: true, scale: 1.1, timing: 200 }}>
                        {part.text}
                    </BoopableLink>
                {:else}
                    {part.text}
                {/if}
            {/each}
        </p>
    </div>
</div>