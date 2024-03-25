// Modify these code to complete your tasks

var button = document.getElementById("enter"); // Get reference to the button element with id "enter"
var input = document.getElementById("userinput"); // Get reference to the input element with id "userinput"
var ul = document.querySelector("ul"); // Get reference to the unordered list (ul) element


function inputLength() {
	return input.value.length; // Return the length of input value
}

function createListElement() {
	var trashButton = createTrashButton();
	var li = document.createElement("li"); // Create a new list item (li) element
	li.appendChild(document.createTextNode(input.value)); // Create a text node for the list item text and append it to the list item
	li.appendChild(trashButton);
	ul.appendChild(li); // Append the list item to the unordered list (ul)
	input.value = ""; // Clear the input value after adding the list item
}

function addListAfterClick() {
	if (inputLength() > 0) { // Check if input value has length greater than 0
		createListElement(); // Call the createListElement() function to add a new list item
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) { // Check if input value has length greater than 0 and Enter key is pressed
		createListElement(); // Call the createListElement() function to add a new list item
	}
}

function createTrashButton() {
	// Create new trash button element
	var trashButton = document.createElement("span");
	trashButton.appendChild(document.createTextNode("🗑️"));
	trashButton.classList.add("trash");

	return trashButton;
}

function deleteItemAfterClick(event) {
	if (event.target.tagName === "SPAN") {
		event.target.parentNode.remove();
	}
}

function highlightItemOnMouseover(event) {
	if (event.target.tagName === "SPAN") {
		event.target.parentNode.style.color = "red";
	}
}

function unhighlightItemOnMouseout(event) {
	if (event.target.tagName === "SPAN") {
		event.target.parentNode.style.color = "black";
	}
}

button.addEventListener("click", addListAfterClick); // Add event listener to the button for click event to add a new list item
input.addEventListener("keypress", addListAfterKeypress); // Add event listener to the input for keypress event to add a new list item
ul.addEventListener("click", deleteItemAfterClick); // Add event listener to trash button to delete list item
ul.addEventListener("mouseover", highlightItemOnMouseover); // Add event listener to mouseover on trash button to highlight list text
ul.addEventListener("mouseout", unhighlightItemOnMouseout); // Add event listener to mouseout on trash button to unhighlight list text