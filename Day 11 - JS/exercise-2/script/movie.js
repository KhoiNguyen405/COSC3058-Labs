document.addEventListener('DOMContentLoaded', function(){
    
    const list = document.querySelector('#movie-list ul');
    const forms = document.forms;

    // Enter your code here: delete movies
    list.addEventListener("click", function(event) {
        if (event.target.classList.contains("delete")) {
            let listItem = event.target.parentNode;
            list.removeChild(listItem);
        }
    });

    // Enter your code here: add movies
    forms[0].addEventListener("click", function(event) {
        if (event.target.tagName === "BUTTON") {
            event.preventDefault();
            let movieName = forms[0].children[0].value; 
            
            if (movieName.trim().length != 0) {
                let movieToAdd = createNewMovieEntry(movieName);
                list.appendChild(movieToAdd);
            }
        }
    });

    
});

// Helper function to create new li element for new movie
function createNewMovieEntry(movieName) {
    let newEntry = document.createElement("li");

    let nameSpan = document.createElement("span");
    nameSpan.classList.add("name");
    nameSpan.appendChild(document.createTextNode(movieName));

    let deleteSpan = document.createElement("span");
    deleteSpan.classList.add("delete");
    deleteSpan.appendChild(document.createTextNode("delete"));

    newEntry.append(nameSpan, deleteSpan);

    return newEntry;
}

