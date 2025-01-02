<script>
	let { children, color } = $props();
</script>

<div class="frame">
	<div class="contents">
		<svg
			class="background"
			viewBox="0 0 100 100"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			shape-rendering="geometricPrecision"
		>
			<path
				class="hexagon"
				fill={color}
				d="M8.69873 26.1547L50 2.3094L91.3013 26.1547V73.8453L50 97.6906L8.69873 73.8453V26.1547Z"
			/>
			{#if children}
				<text class="label" x="50%" y="50%">{@render children()}</text>
			{/if}
		</svg>
	</div>
</div>

<style>
	.frame {
		position: absolute;
		width: 100%;
		height: 100%;
		pointer-events: all;
	}

	.contents {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.background {
		position: absolute;
		inset: 0;
		display: grid;
		place-items: center;
	}

	.hexagon {
		transition: fill 0.15s;
		stroke: black;
		stroke-width: 1px;

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
		text-anchor: middle;
		dominant-baseline: mathematical;
		fill: black;
		font-size: 1.75rem;
		font-family: Pasti;
		pointer-events: none;
	}
</style>
