let nestedArray = [
  ["title", "Duke"],
  ["name", "Nukem"],
  ["age", 33],
];

let object = Object.fromEntries(nestedArray);
console.log( object );

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }
