export default class ThemeTypes {
	constructor(type) {
		this.name = type.name;
		this.color = type.color;
	}

	static Soil = new ThemeTypes({
		name: 'soil',
		color: '#A2ACA3'
	});

	static Pack = new ThemeTypes({
		name: 'pack',
		color: '#324B45'
	});

	static Red = new ThemeTypes({
		name: 'red',
		color: '#B95256'
	});

	static Blue = new ThemeTypes({
		name: 'blue',
		color: '#2D5E97'
	});

	static Purple = new ThemeTypes({
		name: 'purple',
		color: '#4D4156'
	});

	static Yellow = new ThemeTypes({
		name: 'yellow',
		color: '#F3AA25'
	});

	static Orange = new ThemeTypes({
		name: 'orange',
		color: '#FF8050'
	});

	static Green = new ThemeTypes({
		name: 'green',
		color: '#41614C'
	});
}
