// Create variables for HTML elements
var voice = document.getElementById("voice");
var placeholder = document.getElementById("placeholder");
var water = document.getElementById("water");
var outside = document.getElementById("outside");
var stretch = document.getElementById("stretch");
var emoji = '🌼';

// Declare speech synthesis variable 
var synth = window.speechSynthesis;

// Given a word, speech synthesis will speak it 
function speak(word) {
    utterance = new SpeechSynthesisUtterance(word);
    utterance.pitch = 1.0;
    utterance.rate = 1.1;
    synth.speak(utterance);
}

// Speak water and display it on page 
water.onclick = function() {
    speak("My favorite is" + water.innerHTML);
    placeholder.innerHTML = "→ My favorite is: " + water.innerHTML;
}

// Speak outside and display it on page 
outside.onclick = function() {
    speak("My favorite is" + outside.innerHTML);
    placeholder.innerHTML = "→ My favorite is: " + outside.innerHTML;
}

// Speak stretch and display it on page 
stretch.onclick = function() {
    speak("My favorite is" + stretch.innerHTML);
    placeholder.innerHTML = "→ My favorite is: " + stretch.innerHTML;
}

// Declare recognition object 
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var recognition = new SpeechRecognition();

// Adjust settings to recognize single English word
recognition.continuous = false;
recognition.interimResults = false;
recognition.lang = 'en-US';
recognition.maxAlternatives = 1;

// Start recognition when you click on the "tell us your favorite" button
voice.onclick = function() {
    recognition.start();
}

// When word is recognized, speak it and display it on page
recognition.onresult = function(event) {
    var favorite = event.results[0][0].transcript;
    speak("My favorite is" + favorite);
    placeholder.innerHTML = "→ My favorite is: " + favorite + " " + emoji;
}
