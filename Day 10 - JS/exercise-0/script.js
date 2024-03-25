console.log("Hello world!");

/*
Exercise section 1 [Query Selector Challenges Solution]
Use querySelector or querySelectorAll to select:
- Banner image.
- H1 text.
- All list items.
- Done items.
- Not-done items 
- All buttons
- Done button.
- Not-done button.
*/
// Add your js code below here!
let bannerImg     = document.querySelector("img.banner");
let headerText    = document.querySelector("h1");
let listItems     = document.querySelectorAll("li");
let doneItems     = document.querySelectorAll("li.done");
let notDoneItems  = document.querySelectorAll("li.not-done");
let buttonElems   = document.querySelectorAll("button");
let doneButton    = document.querySelector("button#done-all-btn");
let notDoneButton = document.querySelector("button#not-done-all-btn");


/*
Exercise section 2 [Manipulating Element Challenges]
Using JS to make these changes:
- Get h1 text and change its text value and color.
- Get second list item text and change its value.
- Get the image link url and change it to another link.
- Change all list items to be done.
- Change all list items from done to be not done and vice versa.
*/
// Add your js code below here!
// - Change h1 text value and color
headerText.style.color = "#E61E2A";
headerText.innerText = "My Personal Todo-List";

// - Change second list item text value
listItems[1].innerText = "Play one round of your favourite multiplayer game.";

// - Change image link url
bannerImg.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/RMIT_University_Logo.svg/2560px-RMIT_University_Logo.svg.png";

// - Change all list items to be done
/*
for (let listItem of listItems) {
    listItem.className = "done";
}
*/

// - Change list items from done to not-done and vice versa
/*
for (let listItem of listItems) {
    if (listItem.className === "done") {
        listItem.setAttribute("class", "not-done");
    } else {
        listItem.setAttribute("class", "done");
    }
}
*/
listItems.forEach(listItem => {
    listItem.classList.toggle("not-done");
    listItem.classList.toggle("done");
});


/*
Exercise section 3 [EventListener Challenges]
Using addEventListener() to handle these events:
- Clicking on the button “Done All” makes all list items to be done.
- Clicking on the button “Not Done All” makes all list items to be done.
- Clicking on any item list will make the item toggle from done to not done or vice versa.
*/
// Add your js code below here!
// - EventHandler for "Done All" button
doneButton.addEventListener("click", function() {
    listItems.forEach(item => {
        item.classList.remove("not-done");
        item.classList.add("done");
    });
});

// - EventHandler for "Not Done All" button
notDoneButton.addEventListener("click", function() {
    listItems.forEach(item => {
        item.classList.remove("done");
        item.classList.add("not-done");
    });
});

// - EventHandler for list items
listItems.forEach(item => {
    item.addEventListener("click", function() {
        item.classList.toggle("done");
        item.classList.toggle("not-done");
    });
});

