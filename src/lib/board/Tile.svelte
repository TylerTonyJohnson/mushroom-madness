<script>
	import Hexagon from '$lib/board/Hexagon.svelte';

	const spacing = 5;
	const size = 4.5;

	let { tile } = $props();

	const color = tile?.theme?.color || 'magenta';

	// Event handlers
	const handleClick = () => {
		tile.flip();
	};
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<button
	class="frame"
	class:revealed={tile.currentSide === 'front'}
	onclick={handleClick}
	style={`
		left: ${tile.pixelCoordinates.x * spacing + 50}%; 
		bottom: ${tile.pixelCoordinates.y * spacing + 50}%;
		width: ${tile.pixelSize.x * size}%;
		height: ${tile.pixelSize.y * size}%;
	`}
>
	<div class="contents">
		<div class="front">
			<Hexagon {color}>{tile?.label}</Hexagon>
		</div>
		<div class="back">
			<Hexagon {color} />
		</div>
	</div>
</button>

<style>
	.frame {
		position: absolute;
		translate: -50% 50%;
		pointer-events: all;
		background-color: transparent;
		perspective: 200px;
	}

	.contents {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		transform-style: preserve-3d;
		transition: transform 0.5s;
	}

	:not(.revealed) .contents {
		transform: rotateY(180deg);
	}

	.front,
	.back {
		position: absolute;
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
		border-radius: 50%;
	}

	.front {
		/* background-color: white; */
	}

	.back {
		/* background-color: black; */
		transform: rotateY(180deg);
	}

	.label {
		font-size: 10px;
		font-family: Arial, sans-serif;
		text-anchor: middle;
		dominant-baseline: mathematical;
		fill: black;
		font-size: 1.75rem;
		font-family: Pasti;
		pointer-events: none;
	}
</style>
