function clone(obj) {
  let objClone = {};

	Object.entries( obj ).forEach( ([key, value]) => {
		if( typeof value === 'object' ){
			objClone[key] = clone( value );
		}else{
			objClone[key] = value;
		}
	} )

	console.log( 'objClone', objClone );
	return objClone;
}

let person = {
  title: "Duke",
  name: {
    value: "Nukem",
    isStageName: true,
  },
  age: 33,
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age); // 34
console.log(clonedPerson.age); // 33

person.name.isStageName = false;
console.log(person.name.isStageName); // false
console.log(clonedPerson.name.isStageName); // false

console.log( 'person', person )
console.log( 'clonedPerson', clonedPerson );
