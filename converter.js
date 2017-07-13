// created variables to hold elements
let input = document.getElementById("input");
let c = document.getElementById("c");
let f =  document.getElementById("f");
let output = document.getElementById("output");
let converter = document.getElementById("converter");
let clear = document.getElementById("clear");

// defines function toCelsius
function toCelsius() {

	// formula saying let celsius equal the converted fahrenheit temp
	let cTemp = (input.value - 32) * (5/9);
	
	// calls outputTemp to run and passes in 
	outputTemp(cTemp, "C&deg;")
};

// defines function toFahrenheit
function toFahrenheit() {
	
	// formula saying let fTemp equal the converted celsius temp
	let fTemp = (input.value * (9/5)) + 32
	
	// calls outputTemp and passes in fTemp
	outputTemp(fTemp, "F&deg;")
};

// defines function outputTemp
function outputTemp(temp, degree) {
	output.innerHTML = `"${temp}${degree}"`
}

// defines function clearInput
function clearInput() {
	// sets the input value to an open string
	input.value = "";
	// document.getElementById("f").checked = false;
	// document.getElementById("c").checked = false;
	// output.innerHTML = "";
};

// defines function checkInput
function checkInput() {
	// condition checking to see if the input has value and c or f is checked
	if (input.value && (c.checked || f.checked)) {
		// if true, execute determine converter function
		determineConverter()
	}
};

// This function should determine which conversion should
// happen based on which radio button is selected.

// defines function determineConverter and expects clickEvent to be passed in (from line )
function determineConverter(clickEvent) {

	// condition checking to see if c element is checked
	if (c.checked) {

		// if true, run toFahrenheit function
	  toFahrenheit();
	
	// otherwise if false
	} else {
	
		// run toCelsius function
		toCelsius()
	}
};

// Assign a function to be executed when the button is clicked

// adds an event listener of click to the convert button and runs checkInput
converter.addEventListener("click", checkInput);

// adds an event listener of click to the clear button and runs clearInput
clear.addEventListener("click", clearInput);

// adds event listener of keyup to the input and runs the event function
input.addEventListener("keyup", function(e) {

	// condition checkin to see if the keycode is 13 or enter
	if (e.keyCode === 13) {

		// if true execute checkInput function
		checkInput()
	}
});







