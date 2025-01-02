<script>
	import Hexagon from '$lib/board/Hexagon.svelte';

	let { space } = $props();

	const spacing = 5;
	const size = 5;

	const color = space?.theme?.color || 'magenta';
</script>

{#if space}
	<div
		class="frame"
		style={`
            left: ${space.pixelCoordinates.x * spacing + 50}%; 
            bottom: ${space.pixelCoordinates.y * spacing + 50}%;
            width: ${space.pixelSize.x * size}%;
            height: ${space.pixelSize.y * size}%;
        `}
	>
		<Hexagon {color} />
	</div>
{/if}

<style>
	.frame {
		position: absolute;
		translate: -50% 50%;
		pointer-events: all;
	}
</style>
