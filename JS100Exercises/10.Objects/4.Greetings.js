
let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  greet: (destination) => {
		console.log(`Hej, ${destination}!`);
	}
};

jane.greet('Bobby'); // Hej, Bobby!
