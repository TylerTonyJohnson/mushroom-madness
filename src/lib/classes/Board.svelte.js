import Space from '$lib/classes/Space.svelte.js';
import { Tile, NutrientTile, SoilTile, Spore, PackTile } from '$lib/classes/Tile.svelte.js';

export default class Board {
	spaces = $state([]);
	tiles = $state([]);

	constructor(map, teams) {
		// Error handling
		if (!map) {
			console.log('No map provided');
			throw new Error('No map provided to board');
		}
		this.teams = teams;
		this.loadSpaces(map);
		this.loadTiles(map);
	}

	loadSpaces = (map) => {
		this.spaces = map.map((space) => {
			const nextSpace = new Space(space.coordinates);
			// console.log(nextSpace);
			return nextSpace;
		});
	};

	loadTiles = (map) => {
		let teamIndex = 0;

		map.forEach((tile) => {
			let nextTile;

			switch (tile.type) {
				case 'soil':
					nextTile = new SoilTile(tile.coordinates);
					this.tiles.push(nextTile);
					break;
				case 'spore':
					nextTile = new Spore(tile.coordinates, this.teams[teamIndex]);
					this.tiles.push(nextTile);
					teamIndex++;
					break;
				case 'pack':
					nextTile = new PackTile(tile.coordinates);
					this.tiles.push(nextTile);
					break;
				case 'rhys':
					break;
				case 'tomen':
					break;
				case 'nutrient':
					nextTile = new NutrientTile(tile.coordinates, 5);
					this.tiles.push(nextTile);
					break;
				default:
					break;
			}
		});
	};
}
