function validate() {
    
    var fname = document.getElementById('fname');
    var lname = document.getElementById('lname');
    var address = document.getElementById('address');
    var email = document.getElementById('email');
    var mobile = document.getElementById('mobile');
    var course = document.getElementById('course');
    var gender = document.querySelectorAll('input[name="gender"]');

    // Enter your code here
    // Check fname and lname
    if (fname.value.trim().length == 0) {
        alert("First Name is required");
        return false;
    }

    if (lname.value.trim().length == 0) {
        alert("Last Name is required");
        return false;
    }

    // Check address
    if (address.value.trim().length == 0) {
        alert("Address is required");
        return false;
    }

    // Check gender
    let genderChecked = false;

    for (let gen of gender) {
        if (gen.checked) {
            genderChecked = true;
            break;
        }
    }

    if (!genderChecked) {
        alert("Gender is required");
        return false;
    }

    // Check email
    if (email.value.trim().length == 0) { // Check for non-empty input
        alert("Email is required");
        return false;
    }

    if (!checkEmail(email.value)) { // Check format
        alert("Proper email format is required");
        return false;
    }

    // Check phone number
    if (mobile.value.trim().length == 0) { // Check for non-empty input
        alert("Phone number is required");
        return false;
    }

    if (!IsNumeric(mobile.value)) { // Check phone number is numeric
        alert("Phone number must be only numbers");
        return false;
    }

    // Check course
    if (course.value === "select course") {
        alert("Course choice is required");
        return false;
    }


    // Validation completed
    alert("Registration completed");

    // Equivalent to event.preventDefault()
    return false;   
}

/*

    missing  validations
     - phone is a number
     - email in proper fortmat

    look at day 10- additional examples and try these on your own

*/

//checks via reg ex if age and phone numbers are numbers
function IsNumeric(numstr) {
    mystring = numstr;
    if (mystring.match(/^\d+$/)) {
        return true;
    } else {
        return false;
    }
}

//checks if email is in proper email format
function checkEmail(inputvalue) {
    var pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
    if (pattern.test(inputvalue)) {
        return true;
    } else {
        return false;
    }
}