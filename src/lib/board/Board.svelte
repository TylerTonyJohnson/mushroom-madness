<!-- THIS IS FOR ALL THE INTERACTIONS DURING PLAY -->

<script>
	import Board from '$lib/classes/Board.svelte';

	import Space from '$lib/board/Space.svelte';
	import Tile from '$lib/board/Tile.svelte';

	let { map, teams } = $props();

	// INITIALIZE
	let board = new Board(map, teams);
</script>

<div class="frame">
	<div class="spaces-container">
		{#each board.spaces as space}
			<Space {space} />
		{/each}
	</div>

	<div class="tiles-container">
		{#each board.tiles as tile}
			<Tile {tile} />
		{/each}
	</div>
</div>

<style>
	.frame {
		position: relative;
		width: 100%;
		height: 100%;
		pointer-events: all;
		border: solid pink 5px;
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
