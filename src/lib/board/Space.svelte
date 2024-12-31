<script>
	let { space, dimensions, zoom } = $props();

	const spacing = 80;
	const size = 82;

	const xx = 1;

	const xy = Math.cos(Math.PI * (1 / 3));
	const xz = Math.cos(Math.PI * (2 / 3));
	const yx = 0;
	const yy = Math.sin(Math.PI * (1 / 3));
	const yz = Math.sin(Math.PI * (2 / 3));

	let pixelCoords = $derived({
		x:
			spacing *
				zoom *
				(space.coordinates.x * xx + space.coordinates.y * xy + space.coordinates.z * xz) +
			dimensions.x / 2,
		y:
			spacing *
				zoom *
				(space.coordinates.x * yx + space.coordinates.y * yy + space.coordinates.z * yz) +
			dimensions.y / 2
	});

	let pixelSize = $derived({
		x: (size * zoom) / (Math.sqrt(3) / 2),
		y: (size * zoom) / (Math.sqrt(3) / 2)
	});

	let pixalColor = $derived('#4E555B');
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
            fill: ${pixalColor};
        `}
>
	<path
		class="hexagon"
		d="M8.69873 26.1547L50 2.3094L91.3013 26.1547V73.8453L50 97.6906L8.69873 73.8453V26.1547Z"
	/>
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
</style>
