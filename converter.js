let input = document.getElementById("input");
let c = document.getElementById("C");
let f =  document.getElementById("F");
let output = document.getElementById("output");
let converter = document.getElementById("converter");
let clear = document.getElementById("clear");

function toCelsius(fTemp) {
	// c = (f - 32) * 5 / 9
	let cTemp = (fTemp - 32) * (5/9);
	output.innerHTML = cTemp;
	return cTemp;
};

function toFahrenheit(cTemp) {
	// f = c * 9 / 5 + 32
	let fTemp = (cTemp * (9 / 5)) + 32
	output.innerHTML = fTemp;
	return fTemp;
};

function clearInput() {
	input.value = "";
	// document.getElementById("f").checked = false;
	// document.getElementById("c").checked = false;
	// output.innerHTML = "";
};

function checkInput() {
	console.log("checkInput running")
	if (input.value) {
		console.log("input has value")
	} else {
		console.log("ERROR")
	}
};

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent)

 //  var convTemp = document.getElementById("input").value;
	// if (document.getElementById("f").checked) {
	//   toFahrenheit(convTemp);
	// } else if (document.getElementById("c").checked) {
	//   toCelsius(convTemp);
	// }
};

// Assign a function to be executed when the button is clicked
converter.addEventListener("click", checkInput);
clear.addEventListener("click", clearInput);
input.addEventListener("keyup", function(e) {
	if (e.keyCode === 13) {
		checkInput()
	}
});

