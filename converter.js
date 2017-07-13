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
	outputTemp(cTemp, "&deg;C")
};


// defines function toFahrenheit
function toFahrenheit() {
	
	// formula saying let fTemp equal the converted celsius temp
	let fTemp = (input.value * (9/5)) + 32
	
	// calls outputTemp and passes in fTemp
	outputTemp(fTemp, "&deg;F")
};


// defines function outputTemp
function outputTemp(temp, degree) {

	// outputs value into the DOM
	output.innerHTML = `${temp} ${degree}`

	// executes colors function
	colors(temp, degree)
}


// defines function colorOutput
function colors(t, d) {

	console.log("D is equal to ", d);
	
	//evaluates the expression D
	switch(d) {

		// matching the expression's value to a case clause
		case "&deg;F":

			// condition checking to see if temp is greater than 90 degrees
			if (t > 90){

				// if true, adds the class "red" to the output value and links to css
				output.classList.add("red")

			// otherwise if temp is less than 32 degrees
			} else if (t < 32) {

				// adds the class "blue" to the output value and links to css
				output.classList.add("blue")
			
			// otherwise if flase
			} else {

				// adds the class "blue" to the output value and links to css
				output.classList.add("green")
			}

			// stopping point for the case so either another can start or switch ends
			break;

		// matching the expression's value to the case clause
		case "&deg;C":

			// condition checking to see if the value is greater than 32
			if (t > 32) {

				// if true, adds the class list "red" to the output so it will link with css
				output.classList.add("red")

			// otherwise if false
			} else if (t < 0) {

				// adds the class list "blue" to the output so it will link with css
				output.classList.add("blue")

			// otherwise if false
			} else {

				// adds the class list "green" to the output so it will link with css
				output.classList.add("green")
			}

			// stopping point for the case so either another can start or switch ends
			break;
	}
};


// defines function clearInput
function clearEverything() {

	// clears the input value to an empty string
	input.value = "";

	// clears the innerHTML to an empty string
	output.innerHTML = "";
	
	// sets fahrenheit radio btn to fals which unchecks it
	f.checked = false;

	// sets celsius radoi btn to false which unchecks it
	c.checked = false;

	// removes the colors classes once cleared
	output.classList.remove("red", "blue", "green");
	
};


// defines function checkInput
function checkInput() {

	// condition checking to see if the input has value and c or f is checked
	if (input.value && (c.checked || f.checked)) {
	
		// if true, execute determine converter function
		determineConverter()
	}
};


// This function should determine which conversion should happen based on which radio button is selected.

// defines function determineConverter
function determineConverter() {

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
clear.addEventListener("click", clearEverything);

// adds event listener of keyup to the input and runs the event function
input.addEventListener("keyup", function(e) {

	// condition checkin to see if the keycode is 13 or enter
	if (e.keyCode === 13) {

		// if true execute checkInput function
		checkInput()
	}
});







