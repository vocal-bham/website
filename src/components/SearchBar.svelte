<script lang="ts">
    export let value: string = "";

    export let placeholder: string = "";
</script>

<input class="search-bar" type="search" bind:value {...$$restProps} />