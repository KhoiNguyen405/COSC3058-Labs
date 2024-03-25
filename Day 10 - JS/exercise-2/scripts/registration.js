//this is the main function 
function checkForm() {
    //collecting user inputs 
    firstname = document.getElementById("firstname").value;
    surname = document.getElementById("surname").value;
    age = document.getElementById("age").value;
    //calls another function IsNumeric 
    ageNumeric = IsNumeric(age);
    address = document.getElementById("address").value;
    phone = document.getElementById("phone").value;
    //calls another function IsNumeric 
    phoneNumeric = IsNumeric(phone);
    email = document.getElementById("email").value;
    //calls another function checkEmail
    emailResult = checkEmail(email);
    password = document.getElementById("password").value;
    customer = document.getElementById("customer").value;

    // Hide all error blocks
    let errorBlocks = document.querySelectorAll(".error");
    errorBlocks.forEach(block => {
        block.style.display = "none";
    });

    //Enter your code here: checking for empty inputs and displaying error 
    // Check First Name
    if (firstname === "") {
        document.getElementById("firstnameError").style.display = "block";
        return false;
    }

    // Check Surname
    if (surname === "") {
        document.getElementById("surnameError").style.display = "block";
        return false;
    }

    // Check Age
    if (!ageNumeric || age < 16 || age > 90) {
        document.getElementById("ageError").style.display = "block";
        return false;
    }

    // Check Home Address
    if (address === "") {
        document.getElementById("addressError").style.display = "block";
        return false;
    }

    // Check Phone Number
    if (!phoneNumeric) {
        document.getElementById("phoneError").style.display = "block";
        return false;
    }

    // Check Email
    if (!emailResult) {
        document.getElementById("emailError").style.display = "block";
        return false;
    }

    // Check Password
    if (password.length < 8 || password.length > 20) {
        document.getElementById("passwordError").style.display = "block";
        return false;
    }

    // Check Type of Customer
    if (customer === "choose your customer type") {
        document.getElementById("customerError").style.display = "block";
        return false;
    }
}

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



