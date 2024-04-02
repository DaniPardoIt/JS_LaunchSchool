let string1 = "Polar Bear";
let string2 = "Polar bear";
let string3 = "Penguin";

function caseInsensitiveEqual(string1, string2) {
	return string1.toLowerCase() === string2.toLowerCase();
}

console.log(caseInsensitiveEqual(string1, string2));
console.log(caseInsensitiveEqual(string1, string3))
