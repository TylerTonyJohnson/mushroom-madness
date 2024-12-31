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

	// Create a map

	// Create the tiles

	// Send the map and tiles to the board
</script>

<div class="frame">
	<div class="board-container">
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
	}

	.board-container {
		position: absolute;
		inset: 0;
		pointer-events: none;
		/* background-color: red; */
	}

	.controls-container {
		position: absolute;
		inset: 0;
		pointer-events: none;
		/* background-color: blue; */
	}
</style>
