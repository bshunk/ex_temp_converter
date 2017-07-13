let input = document.getElementById("input");
let c = document.getElementById("c");
let f =  document.getElementById("f");
let output = document.getElementById("output");
let converter = document.getElementById("converter");
let clear = document.getElementById("clear");

function toCelsius() {
	console.log("celsius is running");
	// c = (f - 32) * 5 / 9
	// output.innerHTML = c;
	// return c;
};

function toFahrenheit() {
	console.log("fahrenehit is running");
	// f = c * 9 / 5 + 32
	// output.innerHTML = f;
	// return f;
};

function clearInput() {
	input.value = "";
	// document.getElementById("f").checked = false;
	// document.getElementById("c").checked = false;
	// output.innerHTML = "";
};

function checkInput() {
	if (input.value && (c.checked || f.checked)) {
		determineConverter()
	}
};

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {	
	if (c.checked) {
	  toFahrenheit();
	} else {
		toCelsius()
	}
};

// Assign a function to be executed when the button is clicked
converter.addEventListener("click", checkInput);
clear.addEventListener("click", clearInput);
input.addEventListener("keyup", function(e) {
	if (e.keyCode === 13) {
		checkInput()
	}
});

