
function removeLastChar( str ){
	let substr = str.substring(0, str.length - 1);
	console.log(substr);
	return substr;
}

removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'