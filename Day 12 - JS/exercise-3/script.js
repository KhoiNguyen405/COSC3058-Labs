// Define dice images
const diceImages = [
  'assets/dice-red-1.png',
  'assets/dice-red-2.png',
  'assets/dice-red-3.png',
  'assets/dice-red-4.png',
  'assets/dice-red-5.png',
  'assets/dice-red-6.png',
];

// Define spinning sound effect
const spinSFX = 'assets/spin.mp3';

// Get elements from the DOM
const betSelect = document.getElementById('bet');
const rollButton = document.getElementById('roll');
const dicesDiv = document.getElementById('dices');
const resultDiv = document.getElementById('result');

// ADD YOUR CODE HERE
// Add event listener to roll button
rollButton.addEventListener("click", rollDices);


function rollDices() {
  // ADD YOUR CODE HERE

  /* Roll three dices (random numbers) */
  let diceA = rollOneDice();
  let diceB = rollOneDice();
  let diceC = rollOneDice();


  /* Display dices on the screen */
  displayDices(diceA, diceB, diceC);


  /* Calculate sum of dices */
  let sumDices = diceA + diceB + diceC;


  /* Determine the result based on the sum and the user's bet */
  let resultMsg = "";

  if (diceA == diceB && diceA == diceC) {
    // All 3 dices have same value
    resultMsg = `You lose (three of a kind) (Sum: ${sumDices})`;
    resultDiv.classList.add("lose");
    resultDiv.classList.remove("win");
  } else {
    if ((betSelect.value === "small" && sumDices >= 4 && sumDices <= 10)     // User bet small and wins
      || (betSelect.value === "big" && sumDices >= 11 && sumDices <= 17))    // User bet big and wins
    {
      resultMsg = `You win (Sum: ${sumDices})`;
      resultDiv.classList.add("win");
      resultDiv.classList.remove("lose");
    } else {
      // User loses
      resultMsg = `You lose (Sum: ${sumDices})`;
      resultDiv.classList.add("lose");
      resultDiv.classList.remove("win");
    }
  }


  /* Display the result and the sum on the screen */
  resultDiv.innerText = resultMsg;


  /* Play the sound effect of spinning */
  let audioEffect = new Audio(spinSFX);
  audioEffect.play();
}


// Randomly generate number between 1 and 6 inclusive
function rollOneDice() {
  return Math.floor(Math.random() * 5) + 1;
}


// Display images for each rolled dice
function displayDices(diceA, diceB, diceC) {
  // Clear dices div
  dicesDiv.innerHTML = "";

  // Create new element for dice image
  let imgDiceA = document.createElement("img");
  let imgDiceB = document.createElement("img");
  let imgDiceC = document.createElement("img");

  imgDiceA.setAttribute("src", diceImages[diceA - 1]);
  imgDiceB.setAttribute("src", diceImages[diceB - 1]);
  imgDiceC.setAttribute("src", diceImages[diceC - 1]);

  imgDiceA.classList.add("dice");
  imgDiceB.classList.add("dice");
  imgDiceC.classList.add("dice");

  // Append dice images to dices div
  dicesDiv.append(imgDiceA, imgDiceB, imgDiceC);
}