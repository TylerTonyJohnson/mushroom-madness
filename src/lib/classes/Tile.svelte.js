// What different types of tiles are there? There's team ones and then there's the types. The type is defined by the team

// Team: neutral, red, blue, purple, yellow, orange, green
// Type: soil, pack, rhys, tomen

import ThemeTypes from "$lib/interface/themes";


export class Tile {
	constructor(coordinates, type, team) {
		this.coordinates = coordinates;
		this.type = type || null;
		this.team = team || 'neutral';
		this.currentSide = 'front';
	}
}

export class SoilTile extends Tile {
    constructor(coordinates) {
        super(coordinates, "soil", "neutral");
        this.theme = ThemeTypes.Soil;
        // this.label = "SOIL";
    }
}

export class PackTile extends Tile {
    constructor(coordinates) {
        super(coordinates, "pack", "neutral");
        this.theme = ThemeTypes.Pack;
        // this.label = "PACK";
    }
}

export class NutrientTile extends Tile {
    constructor(coordinates, value) {
        super(coordinates, "nutrient", "neutral");
        this.nutrients = value || 1;
        this.theme = ThemeTypes.Soil;
        this.label = `${this.nutrients}N`;
    }
}

export class Spore extends Tile {
    constructor(coordinates, team) {
        super(coordinates, "spore", team);
        this.team = team;
        this.theme = team.theme;
        this.label = "SPORE";
    }
}