// Here are the image link examples:
// Static version: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
// Animated version: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif


// This will trigger when users click on "Generate" button!
const button = document.querySelector('#generate-btn');

// Add a click event listener to the button
button.addEventListener('click', () => {
        // ENTER YOUR CODE HERE!

        // Hints: Follow these steps:
        // Get the value of the input field with the ID 'pokemon-number'
        let pokeNum = document.querySelector("input#pokemon-number").value;

        // Get the checked state of the checkbox with the ID 'animated-images'
        let pokeAnimated = document.querySelector("input#animated-images").checked;

        // Clear the contents of the element with the ID 'container'
        let imgContainer = document.querySelector("#container");
        let pokeDivs = document.querySelectorAll("#container div.pokemon");
        for (let pokeDiv of pokeDivs) {
            imgContainer.removeChild(pokeDiv);
        }

        // Call the generatePokemon function with the retrieved values
        generatePokemon(pokeNum, pokeAnimated);
});

function generatePokemon(pokemonNumber=100, animated=true){
    if (animated==true) {
        var baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/';
        var fileExtension = 'gif';
    } else {
        var baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
        var fileExtension = 'png';
    }
    const container = document.querySelector('#container');
    
    // ENTER YOUR CODE HERE!

    // Hints: Follow these steps:
    // Select the element with the ID 'container'
    // Loop from 1 to the specified pokemonNumber
    for (let i=1; i <= pokemonNumber; i++) {
        // Create a new div element
        let newPokeDiv = document.createElement("div");

        // Add the 'pokemon' class to the div element
        newPokeDiv.classList.add("pokemon");

        // Create a new span element
        let labelSpan = document.createElement("span");

        // Set the inner text of the span element to the current iteration number
        labelSpan.innerText = i;

        // Create a new img element
        let pokeImg = document.createElement("img");

        // Set the src attribute of the img element to the constructed image URL
        pokeImg.src = `${baseURL}${i}.${fileExtension}`;
    
        // Append the img element to the pokemon div
        newPokeDiv.appendChild(pokeImg);

        // Append the label span element to the pokemon div
        newPokeDiv.appendChild(labelSpan);

        // Append the pokemon div to the container element
        container.appendChild(newPokeDiv);
    }
}

