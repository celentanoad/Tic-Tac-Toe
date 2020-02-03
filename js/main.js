
/*------Constants------*/

const WIN_CONDITIONS = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8]];

/*------Variables (state)------*/

// Variables might include (board/turn/winner)

let board;
let turn;
let winner;

/*------Cached Element References------*/

// You might choose to put your game status here
const replayEl = document.querySelector("button");
const messageEl = document.getElementById("message");
let squares = {
    square0: document.getElementById("0"),
    square1: document.getElementById("1"),
    square2: document.getElementById("2"),
    square3: document.getElementById("3"),
    square4: document.getElementById("4"),
    square5: document.getElementById("5"),
    square6: document.getElementById("6"),
    square7: document.getElementById("7"),
    square8: document.getElementById("8"),
}


/*------Event Listeners------*/
// This is where you should put the event listener
// for a mouse-click

document.querySelector("section.board").addEventListener("click", squareClick);
replayEl.addEventListener("click", replay);
/*------Functions------*/

init(); 

// Some functions you might choose to use:
// Initialization function:
// Where you set your initial state, setting up 
// what the board will look like upon loading

function init() {
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    turn = 1;
    winner = null;
    render();

}



// On-Click function:
// Set up what happens when one of the elements
// is clicked

function squareClick(event) {
    let clickedSquare = parseInt(event.target.id);
    if (board[clickedSquare] !== 0 || isGameOver()) return;
    board.splice(clickedSquare, 1, turn);
    turn *= -1;
    winner = checkWinner();
    render();
}

// Check winner function:
// Checks the current state of the board for
// a winner and changes the state of the winner
// variable if so

function checkWinner() {
        //iterate through board, create array for Xs and array for Os.
        //check both arrays in WIN_CONDITIONS and see if there's a match
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
        if (Math.abs(board[WIN_CONDITIONS[i][0]] + board[WIN_CONDITIONS[i][1]] + board[WIN_CONDITIONS[i][2]]) === 3) return board[WIN_CONDITIONS[i][0]];
    }
    if (board.includes(0)) return null;
    return "T";
}

function isGameOver() {
    if (winner !== null) return true;
    
}
    // Render function:
    // Displays the current state of the board
    // on the page, updating the elements to reflect
    // either X or O depending on whose turn it is
    
function render() {
    for (let i = 0; i < board.length; i++) {
        if (board[i] === 1) {
            document.getElementById(i).textContent = "X";
        }
        if (board[i] === -1) {
            document.getElementById(i).textContent = "O";
        }
        if (board[i] === 0) {
            document.getElementById(i).textContent = "";
        }
    }
    replayEl.style.visibility = isGameOver() ? "visible" : "hidden";
    renderMessage();
}
    
function renderMessage() {
    if (winner === null) {
        turn === 1 ?  messageEl.textContent = "Your turn, Player One" : messageEl.textContent = "Your turn, Player Two";
        
    }

    if (winner !== null) {
        return winner === 1 ? messageEl.textContent = "Congratulations, Player 1! You Win!"
        : winner === -1 ? messageEl.textContent = "Congratulations, Player 2! You Win!"
        : messageEl.textContent = "Draw!";
    }
    
  
    //include conditionals to change message based on turn
    //possibly use a switch statement? Do some research first
    
    
}

function replay() {
    init();
}