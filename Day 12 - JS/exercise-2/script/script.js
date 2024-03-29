// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Define error messages
    const nameError = "Please enter your name";
    const emailError = "Please enter your email address";
    const mobileError = "Please enter your mobile number";
    const countryError = "Please select your country";
    const genderError = "Please select your gender";

    // Retrieving the values of form elements 
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var country = document.contactForm.country.value;
    var gender = document.contactForm.gender.value;
    var hobbies = [];
    var checkboxes = document.getElementsByName("hobbies[]");
    for(var i=0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            // Populate hobbies array with selected values
            hobbies.push(checkboxes[i].value);
        }
    }
    
	// Enter your code here
    // Clear error messages
    let errorDivs = document.querySelectorAll(".error");
    for (let div of errorDivs) {
        div.innerHTML = "";
    }

    // Check name
    if (name.trim().length == 0) {
        printError("nameErr", nameError);
    }

    // Check email address
    if (!checkEmail(email)) {
        printError("emailErr", emailError);
    }

    // Check mobile number
    if (!checkNum(mobile) || mobile.length < 10) {
        printError("mobileErr", mobileError);
    }

    // Check country selection
    if (country === "Select") {
        printError("countryErr", countryError);
    }

    // Check gender selection
    if (gender === "") {
        printError("genderErr", genderError);
    }

    return false;
    
}

function checkEmail(email) {
    let pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;

    return pattern.test(email);
}

function checkNum(mobileNum) {
    let mystring = mobileNum;
    return mystring.match(/^\d+$/);
}