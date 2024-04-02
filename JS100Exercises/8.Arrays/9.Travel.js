let destinations = [
  "Prague",
  "London",
  "Sydney",
  "Belfast",
  "Rome",
  "Aruba",
  "Paris",
  "Bora Bora",
  "Barcelona",
  "Rio de Janeiro",
  "Marrakesh",
  "New York City",
];

function contains( destination ){
	return destinations.indexOf( destination ) !== -1;
}

console.log( contains("Madrid") )
console.log( contains("Barcelona") );
console.log( contains("London") );