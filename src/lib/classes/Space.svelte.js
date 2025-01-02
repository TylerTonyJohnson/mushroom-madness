import ThemeTypes from '$lib/interface/themes';

export default class Space {
	coordinates = $state();

	pixelCoordinates = $derived({
		x:
			this.coordinates.x * Space.conversion.x.x +
			this.coordinates.y * Space.conversion.x.y +
			this.coordinates.z * Space.conversion.x.z,
		y:
			this.coordinates.x * Space.conversion.y.x +
			this.coordinates.y * Space.conversion.y.y +
			this.coordinates.z * Space.conversion.y.z
	});

	pixelSize = $derived({
		x: 1 / (Math.sqrt(3) / 2),
		y: 1 / (Math.sqrt(3) / 2)
	});

	constructor(coordinates) {
		this.coordinates = coordinates;
		this.theme = ThemeTypes.Space;
	}

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
