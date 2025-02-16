<script lang="ts">
	import ModeSelection from "$lib/ModeSelect.svelte";
</script>

<h1 class="text-center m-10 text-[96px]">SipFlix</h1>

<div class="flex justify-center">
	<input
		class="h-12 rounded-full w-1/2 text-black pl-12 border-4 outline-none"
		type="text"
	/>
</div>
<div class="justify-center items-center flex w-full">
	<ModeSelection />
</div>
