
function extractLanguage(locale) {
  return locale.split("_")[0];
}

function extractRegion(locale) {
  let tmp = locale.split("_")[1];
	let region = tmp.split(".")[0];
	
  return region;
}

function localGreet(locale) {
	let region = extractRegion(locale);
	let language = extractLanguage(locale);

	switch( region ){
		case "US": return "Hey!";
		case "GB": return "Hello!";
		case "AU": return "Howdy!";
		default: return greet(language);
	}
}

function greet(languageCode) {
	switch( languageCode ){
		case "en":return "Hi!";
		case "fr": return "Salut!";
		case "es": return "Hola!";
		case "it": return "Ciao!";
		default: 'Yee';
	}
}

localGreet("en_US.UTF-8");
localGreet("en_GB.UTF-8");
localGreet("en_AU.UTF-8");
localGreet("fr_FR.UTF-8");
localGreet("fr_CA.UTF-8");
localGreet("es_ES.UTF-8");
