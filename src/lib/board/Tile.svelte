<script>
	let { tile, zoom, dimensions } = $props();

	const spacing = 80;
	const size = 70;

	const xx = 1;

	const xy = Math.cos(Math.PI * (1 / 3));
	const xz = Math.cos(Math.PI * (2 / 3));
	const yx = 0;
	const yy = Math.sin(Math.PI * (1 / 3));
	const yz = Math.sin(Math.PI * (2 / 3));

	// Pixel calculations
	let pixelCoords = $derived({
		x:
			spacing *
				zoom *
				(tile.coordinates.x * xx + tile.coordinates.y * xy + tile.coordinates.z * xz) +
			dimensions.x / 2,
		y:
			spacing *
				zoom *
				(tile.coordinates.x * yx + tile.coordinates.y * yy + tile.coordinates.z * yz) +
			dimensions.y / 2
	});

	let pixelSize = $derived({
		x: (size * zoom) / (Math.sqrt(3) / 2),
		y: (size * zoom) / (Math.sqrt(3) / 2)
	});

	let pixelColor = $derived(tile.theme.color);
</script>

<svg
	class="frame"
	viewBox="0 0 100 100"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	style={`
            left: ${pixelCoords.x}px; 
            bottom: ${pixelCoords.y}px;
            width: ${pixelSize.x}px;
            height: ${pixelSize.y}px;
            fill: ${pixelColor};
        `}
>
	<path
		class="hexagon"
		d="M8.69873 26.1547L50 2.3094L91.3013 26.1547V73.8453L50 97.6906L8.69873 73.8453V26.1547Z"
	/>
	<text class="label" x="50" y="50">{tile.label}</text>
</svg>

<style>
	.frame {
		position: absolute;
		translate: -50% 50%;
		pointer-events: all;
	}

	.hexagon {
		transition: fill 0.15s;

		&:hover {
			fill: pink;
		}
		&:active {
			fill: lightblue;
		}
		&:focus {
			fill: lightgreen;
		}
	}

	.label {
		font-size: 10px;
		font-family: Arial, sans-serif;
		text-anchor: middle;
		dominant-baseline: mathematical;
		fill: black;
		font-size: 1.75rem;
		font-family: Pasti;
	}
</style>
