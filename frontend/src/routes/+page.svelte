<script lang="ts">
	import { Search, Button } from "flowbite-svelte";

	function toConsole(output: String) {
		console.log(output);
	}
</script>

<h1 class="text-center">Welcome to SipFlix!</h1>

<div class="flex justify-center items-center gap-x-5 h-screen">
	<h1 class="absolute top-[40%] text-xl w-max">Search a movie</h1>
	<div class="w-[50%]">
		<Search size="lg">
			<Button class="gap-x-10">Search</Button>
		</Search>
	</div>
</div>
