<script lang="ts">
	import Movieselection from "$lib/movieselection.svelte";
	import Search from "$lib/Search.svelte";
</script>

<h1 class="text-center m-10 text-neon-carrot-600 text-[96px]">SipFlix</h1>

<div class="flex justify-center">
	<Search />
</div>
<div class="justify-center items-center flex w-full">
	<Movieselection />
</div>
