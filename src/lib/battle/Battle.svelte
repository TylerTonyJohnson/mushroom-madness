<script>
	import Team from '$lib/classes/Team.svelte';

	import Board from '$lib/board/Board.svelte';
	import Controls from '$lib/battle/Controls.svelte';

	import map from '$lib/board/map.json';
	import ThemeTypes from '$lib/interface/themes';

	// Create the players
	const teams = $state([]);
	teams.push(new Team('Player 1', ThemeTypes.Red));
	teams.push(new Team('Player 2', ThemeTypes.Blue));
	teams.push(new Team('Player 3', ThemeTypes.Yellow));
	teams.push(new Team('Player 4', ThemeTypes.Purple));
	teams.push(new Team('Player 5', ThemeTypes.Orange));
	teams.push(new Team('Player 6', ThemeTypes.Green));

	let currentTeam = $state(teams[0]);
	let controls = $state({ zoom: 1, pan: { x: 0, y: 0 } });

	// Create a map
	let battleDimensions = $state({ x: 0, y: 0 });
	let minDimensions = $derived(Math.min(battleDimensions.x, battleDimensions.y));

	// Create the tiles

	// Send the map and tiles to the board

	let boardSize = $derived(minDimensions * controls.zoom);
	let boardOffset = $derived({
		x: battleDimensions.x / 2 + controls.pan.x,
		y: battleDimensions.y / 2 + controls.pan.y
	});

	// HANDLE CONTROLS

	

	// Zoom

	function handleZoom(event) {
		controls.zoom = Math.max(0.1, controls.zoom - event.deltaY / 1000);
	}

	// Pan

	let isPanning = $state(false);

	function handlePointerDown(event) {
		if (event.button !== 1) return;
		isPanning = true;
	}

	function handlePointerUp(event) {
		isPanning = false;
	}

	function handlePointerMove(event) {
		if (!isPanning) return;

		controls.pan.x += event.movementX;
		controls.pan.y += event.movementY;
	}
</script>

<div
	class="frame"
	bind:clientWidth={battleDimensions.x}
	bind:clientHeight={battleDimensions.y}
	onwheel={handleZoom}
	onpointerdown={handlePointerDown}
	onpointerup={handlePointerUp}
	onpointermove={handlePointerMove}
>
	<div
		class="board-container"
		style={`
			height: ${boardSize}px;
			left: ${boardOffset.x}px;
			top: ${boardOffset.y}px;`}
	>
		<Board {map} {teams} />
	</div>
	<div class="controls-container">
		<Controls {teams} {currentTeam} />
	</div>
</div>

<style>
	.frame {
		width: 100%;
		height: 100%;
		background-color: #493d36;
		border: solid teal 5px;
	}

	.board-container {
		position: absolute;
		aspect-ratio: 1 / 1;
		translate: -50% -50%;
		pointer-events: none;
		border: solid green 5px;
	}

	.controls-container {
		position: absolute;
		inset: 0;
		pointer-events: none;
		/* background-color: blue; */
	}
</style>
