console.log("Hello world!");

// Add your js code below here!
document.querySelector("#item-list").addEventListener("click", function(e) {
    e.target.classList.toggle("completed");
});