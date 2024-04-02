
function extractLanguage(locale) {
  return locale.split("_")[0];
}

function extractRegion(locale) {
  let tmp = locale.split("_")[1];
	let region = tmp.split(".")[0];
	
  return region;
}

function localGreet(locale) {
  console.log( greet( extractLanguage( locale ), extractRegion( locale ) ) );
}

function greet(languageCode, region) {
	switch( languageCode ){
		case "en":
			switch( region ){
				case "US": return "Hey!";
				case "GB": return "Hello!";
				case "AU": return "Howdy!";
			}
		break;

		case "fr": return "Salut!";
		case "es": return "Hola!";
		case "it": return "Ciao!";
	}
}

localGreet("en_US.UTF-8");
localGreet("en_GB.UTF-8");
localGreet("en_AU.UTF-8");
localGreet("fr_FR.UTF-8");
localGreet("fr_CA.UTF-8");
localGreet("es_ES.UTF-8");
