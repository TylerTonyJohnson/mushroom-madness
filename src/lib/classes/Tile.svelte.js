// What different types of tiles are there? There's team ones and then there's the types. The type is defined by the team

// Team: neutral, red, blue, purple, yellow, orange, green
// Type: soil, pack, rhys, tomen

import ThemeTypes from '$lib/interface/themes';

export class Tile {
	coordinates = $state();
	pixelCoordinates = $derived({
		x:
			this.coordinates.x * Tile.conversion.x.x +
			this.coordinates.y * Tile.conversion.x.y +
			this.coordinates.z * Tile.conversion.x.z,
		y:
			this.coordinates.x * Tile.conversion.y.x +
			this.coordinates.y * Tile.conversion.y.y +
			this.coordinates.z * Tile.conversion.y.z
	});

	pixelSize = $derived({
		x: 1 / (Math.sqrt(3) / 2),
		y: 1 / (Math.sqrt(3) / 2)
	});

	currentSide = $state();

	constructor(coordinates, type, team) {
		this.coordinates = coordinates;
		this.type = type || null;
		this.team = team || 'neutral';
		this.currentSide = 'front';
	}

	flip = () => {
		this.currentSide = this.currentSide === 'front' ? 'back' : 'front';
	};

	static conversion = {
		x: {
			x: 1,
			y: Math.cos(Math.PI * (1 / 3)),
			z: Math.cos(Math.PI * (2 / 3))
		},
		y: {
			x: 0,
			y: Math.sin(Math.PI * (1 / 3)),
			z: Math.sin(Math.PI * (2 / 3))
		}
	};
}

// Unknown actual values
export class SoilTile extends Tile {
	constructor(coordinates) {
		super(coordinates, 'soil', 'neutral');
		this.theme = ThemeTypes.Soil;
		this.label = "SOIL";
	}
}

export class PackTile extends Tile {
	constructor(coordinates) {
		super(coordinates, 'pack', 'neutral');
		this.theme = ThemeTypes.Pack;
		this.label = "PACK";
	}
}

export class NutrientTile extends Tile {
	constructor(coordinates, value) {
		super(coordinates, 'nutrient', 'neutral');
		this.nutrients = value || 1;
		this.theme = ThemeTypes.Soil;
		this.label = `${this.nutrients}N`;
	}
}

export class Spore extends Tile {
	constructor(coordinates, team) {
		super(coordinates, 'spore', team);
		this.team = team;
		this.theme = team.theme;
		this.label = 'SPORE';
	}
}
