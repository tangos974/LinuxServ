<!-- src/routes/+page.svelte -->
<script>
    import '../styles/app.css';
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

    onMount(() => {
        goto('/about');
    });
</script>