function myFunction() {
	// Get the value of the input field with id="form-search"
	let inputedWord = document.getElementById("form-search").value;

	//Check if user typed something and alert
	if (inputedWord) {
		alert(`You typed "${inputedWord}"`);
	} else {
		alert("Please type something");
	}
}
