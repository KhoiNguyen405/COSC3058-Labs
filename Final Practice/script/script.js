document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelector(".nav-links")
    const mainSection = document.querySelector("main");
    const subscribeSection = document.querySelector("#sub-form");
    const activityChoose = document.querySelector("#choose-exe");
    const copyright = document.querySelectorAll(".copyright");
    const dobSelector = document.querySelector("input#dob");

    // Form fields //
    // Required fields
    const fname = document.querySelector("input#fname");
    const lname = document.querySelector("input#lname");
    const email = document.querySelector("input#email");
    const username = document.querySelector("input#username");
    const password = document.querySelector("input#password");
    const pwConfirm = document.querySelector("input#pw-confirm");
    const content = document.querySelectorAll("input[type='checkbox']");
    const contentField = document.querySelector("fieldset#content-select");

    // Optional fields
    const dob = document.querySelector("input#dob");
    const gender = document.querySelectorAll("input[name='gender']");
    const phone = document.querySelector("input#phone-num");

    console.log("Script start");

    /***** General functions to perform on DOMContentLoad *****/
    // Fill in copyright information
    for (let cpHeader of copyright) {
        cpHeader.innerHTML = "&copy; By Nguyen Hoang Anh Khoi @ RMIT Vietnam 2024";
    }

    // Set min and max for date of birth selector
    dobSelector.setAttribute("min", "1900-01-01");
    dobSelector.setAttribute("max", getCurrentDate());


    /**********  Event Handlers **********/
    // Event handler for Nav links
    navLinks.addEventListener("click", function (event) {
        if (event.target.classList.contains("subscribe")) {
            // Case: Subscribe link
            subscribeSection.style.display = "block";
        } else if (event.target.tagName === "A") {
            // Case: Lab page link
            // Do nothing
        } else {
            // Case: Activity links
            resetMainSection();
            displayActivity(event);
        }
    });

    // Event handler for Subscribe form
    subscribeSection.addEventListener("click", handleSubForm);

    // Event handler for Choose Activity section
    activityChoose.addEventListener("click", displayActivity);


    /**********  Helper Functions **********/
    // Helper function to handle Subscribe form
    function handleSubForm(event) {
        if (event.target.id === "close-sub-form") {
            subscribeSection.style.display = "none";
        }

        if (event.target.id === "submit-form") {
            validateSubForm(event);
        }
    }

    // Helper function to validate user inputs in Subscribe form
    function validateSubForm(event) {
        // Prevent default action
        event.preventDefault();

        // Check fname and lname //
        if (fname.value.trim().length == 0) {
            fname.classList.add("error");
        } else {
            fname.classList.remove("error");
        }

        if (lname.value.trim().length == 0) {
            lname.classList.add("error")
        } else {
            lname.classList.remove("error");
        }

        // Check email
        if (!validEmail(email.value)) {
            email.classList.add("error");
        } else {
            email.classList.remove("error");
        }

        // Check username 
        if (username.value.trim().length == 0) {
            username.classList.add("error");
        } else {
            username.classList.remove("error");
        }

        // Check password
        let pw = password.value;
        let hasUppercase = hasLowercase = hasDigit = validLength = false;
        if (pw.length == 0 || pw.indexOf(" ") != -1) {
            validLength = false;
        } else {
            // Check password length
            if (pw.length < 8 || pw.length > 20) {
                validLength = false;
            } else {
                validLength = true;
            }

            // Check for at least 1 uppercase char, 1 lowercase char and 1 digit
            for (let char of pw) {
                if (char === char.toUpperCase()) {
                    hasUppercase = true;
                }
                if (char === char.toLowerCase()) {
                    hasLowercase = true;
                }
                if (!isNaN(char)) {
                    hasDigit = true;
                }
            }

            // Check confirm password matches
            if (pw != pwConfirm.value) {
                pwConfirm.classList.add("error");
            } else {
                pwConfirm.classList.remove("error");
            }
        }

        if (!validLength || !hasUppercase || !hasLowercase || !hasDigit) {
            password.classList.add("error");
        } else {
            password.classList.remove("error");
        }

        // Check content selection
        let contentSelected = false;
        for (let cont of content) {
            if (cont.checked) {
                contentSelected = true;
                break;
            }
        }

        if (!contentSelected) {
            contentField.classList.add("error");
        } else {
            contentField.classList.remove("error");
        }

        // Display validation result
        displayValidationResult();
    }

    // Helper function to display form validation result
    function displayValidationResult() {
        // Case: form has error

        // Case: form has no error
    }

    // Helper function to display chosen activity
    function displayActivity(event) {
        let choseAct = false;
        let chosenActivity = "";

        // Clicked on a Activity button
        if (event.target.classList.contains("html-lang")) {
            // Clicked on the html-lang div
            console.log("Chose HTML");
            choseAct = true;
            chosenActivity = "html-exe";
        }

        if (event.target.classList.contains("css-lang")) {
            // Clicked on the css-lang div
            console.log("Chose CSS");
            choseAct = true;
            chosenActivity = "css-exe";
        }

        if (event.target.classList.contains("js-lang")) {
            // Clicked on the js-lang div
            console.log("Chose JS");
            choseAct = true;
            chosenActivity = "js-exe";
        }

        if (choseAct) {
            activityChoose.style.display = "none";
            let chosenSection = document.querySelector(`#${chosenActivity}`);
            chosenSection.style.display = "block";
        }
    }

    // Helper function to hide all activities in the main section
    function resetMainSection() {
        for (let subSection of mainSection.children) {
            if (subSection.id != "sub-form") {
                subSection.style.display = "none";
            }
        }
    }

    // Helper function to get current date in 'yyyy-mm-dd' format
    function getCurrentDate() {
        const date = new Date();
        let currYear = date.getFullYear();
        let currMonth = date.getMonth() + 1;
        currMonth = currMonth < 10 ? `0${currMonth}` : currMonth;
        let currDay = date.getDate();

        return `${currYear}-${currMonth}-${currDay}`;
    }

    // Helper function to check validity of email
    function validEmail(email) {
        let pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;

        return pattern.test(email);
    }
})