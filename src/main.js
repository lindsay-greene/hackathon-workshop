// Create variables for HTML elements
var entry = document.getElementById("entry");
var placeholder = document.getElementById("placeholder");
var cake = document.getElementById("cake");
var pie = document.getElementById("pie");
var icecream = document.getElementById("icecream");

// Declare recognition object and set to recognize one English word
var recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

// Start recognition when you click on the "tell us your favorite" button
entry.onclick = function() {
    recognition.start();
}

// When a word is recognized, display it on the page
recognition.onresult = function(event) {
    var favorite = event.results[0][0].transcript;
    placeholder.innerHTML = "My favorite is: " + favorite;
}



