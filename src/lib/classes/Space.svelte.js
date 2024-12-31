export default class Space {
	constructor(coordinates) {

        // Error handling
        if (!coordinates) {
            console.log('No coordinates provided');
            throw new Error('No coordinates provided to space');
        }

		this.coordinates = coordinates;
	}
}
