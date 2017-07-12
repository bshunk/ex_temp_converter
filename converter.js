let input = document.getElementById("input");
let c = document.getElementById("C");
let f =  document.getElementById("F");
let output = document.getElementById("output");
let converter = document.getElementById("converter");
let clear = document.getElementById("clear");

function toCelsius() {

};

function toFahrenheit() {

};

function clearInput() {
	input.value = "";
};

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent)
};

// Assign a function to be executed when the button is clicked
converter.addEventListener("click", determineConverter);
clear.addEventListener("click", clearInput);
input.addEventListener("keyup", function(e) {
	if (e.keyCode === 13) {
		determineConverter()
	}
});

