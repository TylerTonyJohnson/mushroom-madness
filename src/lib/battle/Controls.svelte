<script>
	let { teams, currentTeam } = $props();
</script>

<div class="frame">
	<div class="teams-container">
		{#each teams as team, i}
			<button
				class="team"
				class:active={team === currentTeam}
				style="background-color: {team.theme.color};"
				onclick={() => (currentTeam = team)}
			>
				<span>{team.name}</span>
			</button>
		{/each}
	</div>
</div>

<style>
	.frame {
		width: 100%;
		height: 100%;
		pointer-events: none;

		display: flex;
		justify-content: center;
		align-items: end;

		/* background-color: red; */
	}

	.teams-container {
		display: flex;
		gap: 10px;
		/* background-color: blue; */
	}

	.team {
		width: 100px;
		height: 100px;
		/* background-color: purple; */

		display: grid;
		place-items: center;

		color: #d1e3e5;
		text-shadow: 0 0 5px black;
		border: solid black 3px;

		transition: scale 0.15s linear;

		&:not(.active) {
			scale: 0.8;
		}
	}
</style>
