<!-- THIS IS FOR ALL THE INTERACTIONS DURING PLAY -->

<script>
	import Board from '$lib/classes/Board.svelte';

	import Space from '$lib/board/Space.svelte';
	import Tile from '$lib/board/Tile.svelte';

	let { map, teams } = $props();

	// Keep track of dimensions
	let zoom = $state(1);
	let dimensions = $state({ x: 0, y: 0 });

	// Spaces

	// Tiles

	// INITIALIZE
	let board = new Board(map, teams);

	// Functions

	function handleScroll(event) {
		zoom = Math.max(0.1, zoom - event.deltaY / 1000);
	}
</script>

<div
	class="frame"
	onwheel={handleScroll}
	bind:clientWidth={dimensions.x}
	bind:clientHeight={dimensions.y}
>
	{#if dimensions.x > 0 && dimensions.y > 0}
		<div class="spaces-container">
			{#each board.spaces as space}
				<Space {space} {zoom} {dimensions} />
			{/each}
		</div>

		<div class="tiles-container">
			{#each board.tiles as tile}
				<Tile {tile} {zoom} {dimensions} />
			{/each}
		</div>
	{/if}
</div>

<style>
	.frame {
		width: 100%;
		height: 100%;
		pointer-events: all;
	}

	.spaces-container {
		position: absolute;
		inset: 0;
		pointer-events: none;
	}

	.tiles-container {
		position: absolute;
		inset: 0;
		pointer-events: none;
	}
</style>
