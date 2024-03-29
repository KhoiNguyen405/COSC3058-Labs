document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelector(".nav-links")
    const mainSection = document.querySelector("main");
    const subscribeSection = document.querySelector("#sub-form");
    const activityChoose = document.querySelector("#choose-exe");
    const copyright = document.querySelectorAll(".copyright");

    console.log("Running");

    // Fill in copyright information
    for (let cpHeader of copyright) {
        cpHeader.innerHTML = "&copy; By Nguyen Hoang Anh Khoi @ RMIT Vietnam 2024";
    }

    /**********  Event Handlers **********/
    // Event handler for Nav links
    navLinks.addEventListener("click", function(event) {
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
            validateSubForm();
        }
    }

    // Helper function to validate user inputs in Subscribe form
    function validateSubForm() {

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
})