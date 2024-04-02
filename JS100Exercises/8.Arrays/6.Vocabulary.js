let vocabulary = [
  ["happy", "cheerful", "merry", "glad"],
  ["tired", "sleepy", "fatigued", "drained"],
  ["excited", "eager", "enthused", "animated"],
];

vocabulary.forEach( synonyms => {
	synonyms.forEach( word => {
		console.log( word )
	} )
} )