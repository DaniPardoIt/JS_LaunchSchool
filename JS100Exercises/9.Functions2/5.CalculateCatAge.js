
function catAge( age ){
	let catAge = 0;
	for( let i = 0; i < age; i += 1 ){
		switch( i ){
			case 0:
				catAge += 15;
				break;
			
			case 1:
				catAge += 9;
				break;

			default: 
			catAge += 4;
			break;
		}
	}

	console.log(`Cat Age: ${catAge}`);
	return catAge;
}


catAge(0); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32