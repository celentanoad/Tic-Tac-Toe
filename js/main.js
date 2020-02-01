
/*------Constants------*/

const WIN_CONDITIONS = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8]];

/*------Variables (state)------*/

// Variables might include (board/turn/winner)

let board;
let turn;
let playerOne;
let playerTwo;
let playerOneMoves;
let PlayerTwoMoves;
let winner;
let availableSpaces;



/*------Cached Element References------*/

// You might choose to put your game status here
const messageEl = document.getElementById("message");
const boardEl = document.querySelectorAll(".board");


/*------Event Listeners------*/

boardEl.addEventListener("click", whenClicked);
// This is where you should put the event listener
// for a mouse-click

/*------Functions------*/

init(); 

// Some functions you might choose to use:

function init() {


// Initialization function:
// Where you set your initial state, setting up 
// what the board will look like upon loading
    messageEl.textContent = "Let's play Tic-Tac-Toe!";
    playerOneMoves = [];
    playerTwoMoves = [];
    turn = 0;
    clearBoard();
    nextTurn();
    render();


}

function nextTurn() {
    turn = 0;


    turn = 1;

}

function whenClicked(event) {
    if (event.target.tagName !== "div" || checkWinner())
    return;
    let selection = event.target.tagName;
    //how to make selection = to id??
    selection.textContent = "X";


    render();
}
// On-Click function:
// Set up what happens when one of the elements
// is clicked

function checkWinner() {

}

// Check winner function:
// Checks the current state of the board for
// a winner and changes the state of the winner
// variable if so

function render() {

    renderMessage();
}
// Render function:
// Displays the current state of the board
// on the page, updating the elements to reflect
// either X or O depending on whose turn it is

function renderMessage() {
    if (playerOne === winner) {
        messageEl.textContent = "You Win!";
    }
    else if (playerTwo === winner) {
        messageEl.textContent = "You Lose :(";
    }

    else if (turn = 1) {
        messageEl.textContent = "Player One's Turn";
    }

    else (turn = - 1) {
        messageEl.textContent = "Player Two's Turn";
    }
    
}

function clearBoard() {
    availableSpaces = [0, 1, 2, 3, 4, 5, 6, 7, 8];
}