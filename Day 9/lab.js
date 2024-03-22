/* Part 1 */
console.log("Day 9 - Part 1");
/* Activity 1 */
console.log("Activity 1: ");

let x = 10;
let y = 20;

function swapNum(x, y) {
    console.log("Initial values: x = " + x + " and y = " + y);
    let temp = x;
    x = y;
    y = temp;

    console.log("Updated values: x = " + x + " and y = " + y);
}

swapNum(x, y);
console.log("");

/* Activity 2 */
console.log("Activity 2: ");

let myName = "Jerry"  
let myAnimals = "Koala 🐨, Snail 🐌, Penguin 🐧"
let animalCount = 3

// Using template literals (ie. `` with ${expression} )
let outputString = `${myName} loves ${animalCount} animals, which are ${myAnimals}!`;

console.log(outputString);
console.log("");

/* Activity 3 */
console.log("Activity 3: ");
console.log("Go to https://codehs.com/editor/2684007 and paste code below");
console.log(
`
// Challenge 1
let n = 3;

for (let i=0; i < n; i++) {
    move();   
}

// Challenge 2
while (frontIsClear()) {
    move();
}

// Challenge 3
for (let i=0; i < 4; i++) {
    putBallInCorner();
}

// Challenge 4
let m = 2

for (let i=0; i < 4; i++) {
    for (let j=0; j < m; j++) {
        putBall();
        move();   
    } 
    turnLeft();
}

// Challenge 5
while (frontIsClear()) {
    putBall();
    moveDiagonal();
}
putBall();

// Challenge 6
while (frontIsClear()) {
    putBall();
    turnLeft();
    move();
    putBall();
    turnRight();
    move();
}
putBall();

// Helper Functions
function turnRight() {
    turnLeft();
    turnLeft();
    turnLeft();
}

function putBallInCorner() {
    while (frontIsClear()) {
        move();
    }
    putBall();
    turnLeft();
}

function moveDiagonal() {
    move();
    turnLeft();
    move();
    turnRight();
}
`
);
console.log("");

/* Activity 4 */
console.log("Activity 4: ");
console.log("");

let theHouse = { money: 1000 };
let thePlayer = { money: 100 };

/*
playGame(theHouse, thePlayer); // Uncomment this line to play the game in browser console.
*/

function playGame(house, player) {
    let numRound = 1;
    let continueGame = true;

    showBalance(house, player);
    console.log("Try your luck to win all the money of the house!");

    while (player.money > 0 && house.money > 0 && continueGame) {
        // Play a round
        console.log(`Round ${numRound}:`);
        playRound(house, player);
        showBalance(house, player);
        numRound++;
        
        // Continue playing?
        if (prompt("Would you like to continue playing? (true/false)") == "false") {
            continueGame = false;
        }
    }
    
    // Display final results
    if (thePlayer.money <= 0) {
        console.log("You have lost all of your money... Better luck next time!");
    } else if (theHouse.money <= 0) {
        console.log("You won all of the house's money! Congratulations!");
    } else {
        console.log("Good game!");
    }
}

/* Helper function to play 1 round */
function playRound(house, player) {
    // Player bet
    let bet = parseInt(prompt("How much do you want to bet?"));
    console.log(`You have bet \$${bet}.`);
    let choice = prompt("Do you want to bet big or small? (big/small)");
    console.log(`You have bet ${choice}.`);

    // Dice rolls
    let dice1 = rollDice();
    let dice2 = rollDice();
    let dice3 = rollDice();
    let sumDice = dice1 + dice2 + dice3;

    // Results
    console.log(`The dices are ${dice1} ${dice2} ${dice3}`);
    if (dice1 == dice2 == dice3) {
        console.log(`All 3 dices have the same value! You lost! (-\$${bet})`);
        houseWins(house, player, bet);
    } else {
        console.log(`The sum of 3 dices is ${sumDice}`);
        if (sumDice >= 4 && sumDice <= 10 && choice === "small") {
            console.log(`You won! (+\$${bet})`);
            playerWins(house, player, bet);
        } else if (sumDice >= 11 && sumDice <= 17 && choice === "big") {
            console.log(`You won! (+\$${bet})`);
            playerWins(house, player, bet);
        } else {
            console.log(`You lost! (-\$${bet})`);
            houseWins(house, player, bet);
        }
    }
}

/* Helper function to show balance of the house and the player */
function showBalance(house, player) {
    console.log(`The house has \$${house.money} \nThe player has \$${player.money}`);
}

/* Helper function to return a dice roll */
function rollDice() {
    return Math.floor(Math.random() * 5) + 1;
}

/* Helper functions to adjust house and player's money based on who won */
function houseWins(house, player, bet) {
    house.money = house.money + bet;
    player.money = player.money - bet;
}

function playerWins(house, player, bet) {
    house.money = house.money - bet;
    player.money = player.money + bet;
}
