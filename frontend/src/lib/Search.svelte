<script lang="ts">
	import { Globe } from "lucide-svelte";
	import type { FormEventHandler } from "svelte/elements";

	const oninput: FormEventHandler<HTMLInputElement> = (ev) => {
		console.log(ev);
	};
</script>

<div class="w-[800px] max-w-[95%] relative">
	<div class="absolute top-3 left-3 text-neon-carrot-600">
		<Globe />
	</div>
	<input
		{oninput}
		class="h-12 rounded-full w-full bg-neon-carrot-200 text-neon-carrot-700 pl-12 border-4 border-neon-carrot-500 outline-none"
		placeholder="Paste in a youtube link..."
		type="text"
	/>
</div>
