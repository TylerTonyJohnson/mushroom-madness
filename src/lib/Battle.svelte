<script>
	import Biome from './biome/Biome.svelte';
	import Tiles from './biome/Tiles.svelte';
	import Controls from './Controls.svelte';

	const players = [
		{ name: 'Player 1', color: 'blue' },
		{ name: 'Player 2', color: 'red' }
	];

	function announce(player) {
		console.log(`${player.name} has been clicked!`);
	}
</script>

<div class="frame">
	<div class="biome-container">
		<Biome />
	</div>
	<div class="tiles-container">
		<Tiles />
	</div>
	<div class="controls-container">
		<Controls />
	</div>
</div>

<style>
	.frame {
		width: 100%;
		height: 100%;
	}

	.biome-container,
    .tiles-container,
	.controls-container {
		position: absolute;
		inset: 0;
	}

    .biome-container {
        pointer-events: none;
        /* background-color: black; */
    }

    .tiles-container {
        pointer-events: none;
        /* background-color: blue; */
    }

    .controls-container {
        pointer-events: none;
        /* background-color: red; */
    }
</style>
