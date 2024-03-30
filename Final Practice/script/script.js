document.addEventListener("DOMContentLoaded", function () {
    // Useful DOM element selectors //
    const htmlSelector = document.querySelector("html");
    const navLinks = document.querySelector(".nav-links")
    const mainSection = document.querySelector("main");
    const subscribeSection = document.querySelector("#sub-form");
    const activityChoose = document.querySelector("#choose-exe");
    const copyright = document.querySelectorAll(".copyright");
    const dobSelector = document.querySelector("input#dob");
    const errorMsgField = document.querySelector("#error-messages");
    const changeMode = document.querySelector("#change-mode");
    const darkMode = document.querySelector("#dark-mode");
    const lightMode = document.querySelector("#light-mode");
    const activityDivs = document.querySelector("#choose-container").children;
    const footer = document.querySelector("footer");

    // Required form fields //
    const fname = document.querySelector("input#fname");
    const lname = document.querySelector("input#lname");
    const email = document.querySelector("input#email");
    const username = document.querySelector("input#username");
    const password = document.querySelector("input#password");
    const pwConfirm = document.querySelector("input#pw-confirm");
    const content = document.querySelectorAll("input[type='checkbox']");
    const contentField = document.querySelector("fieldset#content-select");

    // Form error messages //
    const fnameError = "First name is required";
    const lnameError = "Last name is required";
    const emailError = "Invalid email";
    const usernameError = "Username is required";
    const pwLengthError = "Password must not contain whitespace and the length must be between 8 and 20 characters";
    const pwUppercaseError = "Password must contain at least 1 uppercase character";
    const pwLowercaseError = "Password must contain at least 1 lowercase character";
    const pwDigitError = "Password must contain at least 1 digit";
    const pwConfirmError = "Passwords do not match";
    const contentFieldError = "Please choose at least 1 content to subscribe";

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

    // Event handler for Dark/Light mode switching
    changeMode.addEventListener("click", changeBrightness);


    /**********  Helper Functions **********/
    // Helper function to handle Subscribe form
    function handleSubForm(event) {
        if (event.target.id === "close-sub-form") {
            // Reset error messages
            errorMsgField.innerHTML = "";
            fname.classList.remove("error");
            lname.classList.remove("error");
            email.classList.remove("error");
            username.classList.remove("error");
            password.classList.remove("error");
            pwConfirm.classList.remove("error");
            contentField.classList.remove("error");

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

        let errorMsgs = [];

        // Check fname and lname
        if (fname.value.trim().length == 0) {
            fname.classList.add("error");
            errorMsgs.push(fnameError);
        } else {
            fname.classList.remove("error");
            removeError(errorMsgs, fnameError);
        }

        if (lname.value.trim().length == 0) {
            lname.classList.add("error");
            errorMsgs.push(lnameError);
        } else {
            lname.classList.remove("error");
            removeError(errorMsgs, lnameError);
        }

        // Check email
        if (!validEmail(email.value)) {
            email.classList.add("error");
            errorMsgs.push(emailError);
        } else {
            email.classList.remove("error");
            removeError(errorMsgs, emailError);
        }

        // Check username 
        if (username.value.trim().length == 0) {
            username.classList.add("error");
            errorMsgs.push(usernameError);
        } else {
            username.classList.remove("error");
            removeError(errorMsgs, usernameError);
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
        }

        if (!validLength) {
            password.classList.add("error");
            errorMsgs.push(pwLengthError);
        } else {
            password.classList.remove("error");
            removeError(errorMsgs, pwLengthError);
        }
        if (!hasUppercase) {
            password.classList.add("error");
            errorMsgs.push(pwUppercaseError);
        } else {
            password.classList.remove("error");
            removeError(errorMsgs, pwUppercaseError);
        }
        if (!hasLowercase) {
            password.classList.add("error");
            errorMsgs.push(pwLowercaseError);
        } else {
            password.classList.remove("error");
            removeError(errorMsgs, pwLowercaseError);
        }
        if (!hasDigit) {
            password.classList.add("error");
            errorMsgs.push(pwDigitError);
        } else {
            password.classList.remove("error");
            removeError(errorMsgs, pwDigitError);
        }

        // Check confirm password matches
        if (pw != pwConfirm.value) {
            pwConfirm.classList.add("error");
            errorMsgs.push(pwConfirmError);
        } else {
            pwConfirm.classList.remove("error");
            removeError(errorMsgs, pwConfirmError);
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
            errorMsgs.push(contentFieldError);
        } else {
            contentField.classList.remove("error");
            removeError(errorMsgs, contentFieldError);
        }

        // Display validation result
        displayValidationResult(errorMsgs);
    }

    // Helper function to display form validation result
    function displayValidationResult(errorMsgs) {
        // Clear error message field
        errorMsgField.innerHTML = "";

        if (errorMsgs.length > 0) {
            // Form has error
            let errorList = document.createElement("ul");
            errorList.classList.add("error-list");

            for (let err of errorMsgs) {
                let errorItem = document.createElement("li");
                errorItem.appendChild(document.createTextNode(err));
                errorList.appendChild(errorItem);
            }
            errorMsgField.appendChild(errorList);
        } else {
            // Form is valid
            let successMsg = `Success! Thank you for subscribing ${fname.value} ${lname.value}. `
            successMsg += `A confirmation email will be sent to your email at ${email.value} shortly.`;
            alert(successMsg);
        }
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

    // Helper function to remove error message from list
    function removeError(arr, msg) {
        let msgIndex = arr.indexOf(msg);

        if (msgIndex != -1) {
            arr.splice(msgIndex, 1);
        }
    }

    // Helper function to change between dark/light mode
    function changeBrightness(event) {
        // Dark mode colors
        const darkBgColor = "var(--dark-bg-color)";
        const darkDivColor = "var(--dark-div-bg-color)";
        const darkDivHoverColor = "var(--dark-div-hover-color)";
        const darkFontColor = "var(--dark-font-color)";

        // Light mode colors
        const lightBgColor = "var(--light-bg-color)";
        const lightDivColor = "var(--light-div-bg-color)";
        const lightDivHoverColor = "var(--light-div-hover-color)";
        const lightFontColor = "var(--light-font-color)";
        
        if (event.target.id === "dark-mode") {
            // Change from dark -> light
            darkMode.style.display = "none";
            lightMode.style.display = "inline";
            htmlSelector.style.color = lightFontColor;
            htmlSelector.style.backgroundColor = lightBgColor;
            navLinks.style.backgroundColor = lightDivColor;
            for (let div of activityDivs) {
                div.style.backgroundColor = lightDivColor;
            }
            footer.style.backgroundColor = lightDivColor;
        }

        if (event.target.id === "light-mode") {
            // Change from light -> dark
            lightMode.style.display = "none";
            darkMode.style.display = "inline";
            htmlSelector.style.color = darkFontColor;
            htmlSelector.style.backgroundColor = darkBgColor;
            navLinks.style.backgroundColor = darkDivColor;
            for (let div of activityDivs) {
                div.style.backgroundColor = darkDivColor;
            }
            footer.style.backgroundColor = darkDivColor;
        }
    }
})