let input = document.getElementById("input");
let c = document.getElementById("C");
let f =  document.getElementById("F");
let output = document.getElementById("output");
let converter = document.getElementById("converter");
let clear = document.getElementById("clear");

function toCelsius(fValue) {
	// °C = (°F - 32) x 5/9
	let cValue = (fValue - 32) * (5/9);
	output.innerHTML = cValue;
	return cValue;
};

function toFahrenheit(cValue) {
	// °F = °C x 9/5 + 32
	let fValue = (cValue * (9 / 5)) + 32
	output.innerHTML = fValue;
	return fValue;
};

function clearInput() {
	input.value = "";
	document.getElementById("f").checked = false;
	document.getElementById("c").checked = false;
	output.innerHTML = "";
	// document.getElementById("F").checked = false;
	// document.getElementById("C").checked = false;
	// output.innerHTML = "";
	
};

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent)
  var toConvert = document.getElementById("input").value;
	if (document.getElementById("f").checked) {
	  toFahrenheit(toConvert);
	} else if (document.getElementById("c").checked) {
	  toCelsius(toConvert);
	}
};

// Assign a function to be executed when the button is clicked
converter.addEventListener("click", determineConverter);
clear.addEventListener("click", clearInput);
input.addEventListener("keyup", function(e) {
	if (e.keyCode === 13) {
		determineConverter()
	}
});

