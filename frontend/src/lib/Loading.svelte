<script>
    import { onMount } from "svelte";

    let fillLevel = 0;

    onMount(() => {
        const interval = setInterval(() => {
            fillLevel = (fillLevel + 10) % 110; // Loop from 0 to 100
        }, 500); // Adjust speed here

        return () => clearInterval(interval);
    });
</script>

<div
    class="relative w-16 h-24 border-4 border-yellow-700 rounded-b-lg overflow-hidden"
>
    <!-- Beer Liquid -->
    <div
        class="absolute bottom-0 w-full bg-yellow-500 transition-all duration-500"
        style="height: {fillLevel}%"
    >
        {#if fillLevel > 2}
            {#each Array(5).fill(0) as _, i}
                <div
                    class="absolute w-2 h-2 bg-white rounded-full opacity-70 animate-bubble"
                    style="
            bottom: {Math.random() * fillLevel}%;
            left: {Math.random() * 100}%;
            animation-delay: {i * 0.3}s;
          "
                ></div>
            {/each}
        {/if}
    </div>

    <!-- Foam (Moves with Beer) -->
    <div
        class="absolute left-0 w-full bg-white rounded-b-full transition-all duration-500"
        style="bottom: {fillLevel}%; height: 8px;"
    ></div>

    <!-- Bubbles -->
</div>

<style>
    @keyframes bubble {
        0% {
            transform: translateY(0);
            opacity: 0.5;
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100%);
            opacity: 0;
        }
    }

    .animate-bubble {
        animation: bubble 2s infinite linear;
    }
</style>
