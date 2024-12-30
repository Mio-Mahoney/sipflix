<script lang="ts">
	let Input: string;

	function validation() {
		console.log(Input);
	}
</script>

<input class="text-black" bind:value={Input} on:keydown={validation} />
