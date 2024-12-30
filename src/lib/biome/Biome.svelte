<script>
	import Space from './Space.svelte';
	import map from './map.json';

	let zoom = $state(1);
	let dimensions = $state({ x: 0, y: 0 });

	const spaces = map;

	function handleScroll(event) {
		zoom = Math.max(0.1, zoom + event.deltaY / 1000);
	}
</script>

<div
	class="frame"
	bind:clientWidth={dimensions.x}
	bind:clientHeight={dimensions.y}
	onwheel={handleScroll}
>
	<div class="controls">
		<label>
			<span>ZOOM</span>
			<input type="number" bind:value={zoom} />
		</label>
	</div>
	<div class="spaces">
		{#each spaces as space, i}
			<Space {space} {dimensions} {zoom} />
		{/each}
	</div>
	<div class="tiles"></div>
</div>

<style>
	.frame {
		width: 100%;
		height: 100%;
		background-color: teal;
		overflow: hidden;
	}

	.controls,
	.spaces,
	.tiles {
		position: absolute;
		inset: 0;
		pointer-events: none;
	}
</style>
