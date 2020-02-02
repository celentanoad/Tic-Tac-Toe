
/*------Constants------*/

const WIN_CONDITIONS = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8]];
const colors = {
    "1": "red",
    "-1": "blue",
    "null": "white",
}

/*------Variables (state)------*/

// Variables might include (board/turn/winner)

let board;
let turn;
let winner;



/*------Cached Element References------*/

// You might choose to put your game status here
const messageEl = document.getElementById("message");
let squares = {
    square0: document.getElementById("sq0"),
    square1: document.getElementById("sq1"),
    square2: document.getElementById("sq2"),
    square3: document.getElementById("sq3"),
    square4: document.getElementById("sq4"),
    square5: document.getElementById("sq5"),
    square6: document.getElementById("sq6"),
    square7: document.getElementById("sq7"),
    square8: document.getElementById("sq8"),
}


/*------Event Listeners------*/
// document.querySelectorAll(".board").addEventListener("click", whenClicked);
// squareEl.addEventListener("click", squareClick);
// This is where you should put the event listener
// for a mouse-click

// squares.addEventListener("click", squareClick);
document.querySelector("section.board").addEventListener("click", squareClick);

/*------Functions------*/

init(); 

// Some functions you might choose to use:
// Initialization function:
// Where you set your initial state, setting up 
// what the board will look like upon loading

function init() {
    board = [];
    turn = 1;
    winner = null;
    render();
}



// On-Click function:
// Set up what happens when one of the elements
// is clicked

function squareClick(event) {
    let clickedSquare = event.target.id;
    
        clickedSquare.textContent = "x";
    }
    turn *= -1;
    render();

    console.log(clickedSquare);
}
    
//     let selection = this;
//     if (selection.tagName !== "div") return;
//     selection.textContent = "X";
//     console.log(selection);
//     //how to make selection = to id??
//     turn = turn * -1
//     render();
// }

// Check winner function:
// Checks the current state of the board for
// a winner and changes the state of the winner
// variable if so

function checkWinner() {
        
    
}
    
    // Render function:
    // Displays the current state of the board
    // on the page, updating the elements to reflect
    // either X or O depending on whose turn it is
    
function render() {
//iterate through square obj to make each square = specific board index
    for (let key in squares) {
        board.push(key);
    }        

    renderMessage();
}
    
function renderMessage() {
    if (winner === null) {
        if (turn === 1) {
            messageEl.textContent = "Your turn, Player One";
        } //switch this to a ternary statement!
        if (turn === -1) {
            messageEl.textContent = "Your turn, Player Two";
        }
        if (turn === 0) {
            messageEl.textContent = "Let's play Tic-Tac-Toe!";
        }
    }

    if (winner === 1) {
        messageEl.textContent = "Congratulations, Player 1! You Win!";
    }
    if (winner === -1) {
        messageEl.textContent = "Congratulations, Player 2! You Win!";
    }

    if (winner === "T") {
        messageEl.textContent = "Draw!";
    }
    //include conditionals to change message based on turn
    //possibly use a switch statement? Do some research first
    
    
}