let str = "launch school tech & talk";

function capitalizeString(string) {
	let words = string.split(" ");
	for( let i=0; i<words.length; i++ ) {
		words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
	}

	return words.join(' ');
}

console.log(capitalizeString(str));