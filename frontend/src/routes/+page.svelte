<script lang="ts">
	import Search from "$lib/Search.svelte";
	import { id } from "$lib/store";
	import Thumbnail from "$lib/Thumbnail.svelte";
	import Loading from "$lib/Loading.svelte";
</script>

<h1
	class="text-center font-display font-semibold m-10 text-neon-carrot-600 text-[96px]"
>
	SipFlix
</h1>

<div class="flex justify-center">
	<Search />
</div>
{#if $id}
	<Thumbnail />
	<div class="justify-center items-center flex w-full">
		<Loading />
	</div>
{/if}
