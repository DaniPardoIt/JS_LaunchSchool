function repeat( i, str ){
	let ret = '';
	while( i > 0 ){
		ret = ret.concat('', str);
		i -= 1;
	}
}

repeat(3, "ha");
