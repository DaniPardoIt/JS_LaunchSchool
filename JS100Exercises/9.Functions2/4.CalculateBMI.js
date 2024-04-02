
function calculateBMI( cm, kg ){
	let bmi = kg / (cm/100)**2;
	console.log(`BMI: ${bmi}`);
}

calculateBMI(180, 80); // "24.69"