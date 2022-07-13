
let languageCode = prompt('Insert one of the 4 language codes: es, de, en, or fr');
let helloWorldIntroText = "Hello World translated in";
let translateText;
let language;

if (languageCode === "es") {
    language = 'Spanish';
    translateText = 'Hola mundo';
    console.log(helloWorldIntroText + ' ' + language + ' is: ' + translateText);
} else if (languageCode === "de") {
    language = "German";
    translateText = 'Hallo welt';
    console.log(helloWorldIntroText + ' ' + language + ' is: ' + translateText);
} else if (languageCode === "en") {
    language = "English"
    translateText = 'Hello world';
    console.log(helloWorldIntroText + ' ' + language + ' is: ' + translateText);
} else if (languageCode === "fr") {
    language = "French"
    translateText = 'Bonjour le monde';
    console.log(helloWorldIntroText + ' ' + language + ' is: ' + translateText);
} else {
    language = "English"
    translateText = 'Hello world';
    console.log(helloWorldIntroText + ' ' + language + ' is: ' + translateText);
}