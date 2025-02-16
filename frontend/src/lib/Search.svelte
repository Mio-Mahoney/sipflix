<script lang="ts">
	import { Globe } from "lucide-svelte";
	import type { FormEventHandler } from "svelte/elements";
	import { id } from "./store";

	const pattern = /(\w{11})&?.*$/g;
	let invalid = false;

	const oninput: FormEventHandler<HTMLInputElement> = (ev) => {
		const is_link = pattern.exec(ev.currentTarget.value);

		if (!is_link) {
			invalid = true;
		} else {
			invalid = false;
			ev.currentTarget.disabled = true;
			id.set(is_link[1]);
		}
	};
</script>

<div class="w-[800px] max-w-[95%] relative">
	<input
		{oninput}
		class="h-12 data-[invalid=true]:border-red-400 peer disabled:text-neon-carrot-400 rounded-full w-full bg-neon-carrot-200 text-neon-carrot-700 pl-12 border-4 neon-carrot-500 border-neon-carrot-200 transition outline-none"
		placeholder="Paste in a youtube link..."
		data-invalid={invalid}
		type="text"
	/>
	<div
		class="absolute top-3 left-3 text-neon-carrot-600 peer-disabled:text-neon-carrot-400"
	>
		<Globe />
	</div>
	<div
		class="w-full opacity-0 peer-data-[invalid=true]:opacity-100 transition text-xs text-red-400 text-center"
	>
		That doesn't look like a youtube link!
	</div>
</div>
