const gameBoard = (() => {

	let board; // Local variable to the gameboard module
	
	const newGame = function() { 
		board = ["", "", "", "", "", "", "", "", ""];
	}

	// Getter and setter functions so the values stored inside the gameBoard can be accessed and set from other classes.
	const getCell = function(index) {
		return board[i];
	}

	const setCell = function(index) {
		board[i] = "SET CELL";
	}
		
	return {
		newGame,
		getCell,
		setCell
	}
	
})();

const displayController = (() => {

	parent = document.querySelector("body");

	render = function() {
		titleBar = document.createElement("h1");
		titleBar.textContent = "Tic Tac Toe"
		parent.append(titleBar);

		gameContainer = document.createElement("div");
		gameContainer.classList.add("game-container");
	
	parent.append(gameContainer);

		for(i = 0; i < 9; i++){
			boardCell = document.createElement("div");
			boardCell.setAttribute("board-index", `${i}`);
			boardCell.classList.add("board-cell");
			gameContainer.append(boardCell);
		}
		
		resetButton = document.createElement("button");
		resetButton.textContent = "Restart Game";
		gameContainer.append(resetButton);
		
	}

	newGame = function() {
		render()
	}

	return {
		render,
		newGame
	}

})();

const gameController = (() => {
	const newGame = function() {
		gameBoard.newGame()
		displayController.newGame()
	}

	return {
		newGame
	}

})();

const Player = (name, symbol) => {

};

let board = ["", "", "", "", "", "", "", "", ""]

// Fill board takes the clicked target and uses it to create a paragraph element which will contain the players symbol
const fillBoard = (e) => {
	currentSquare = e.target
	textElement = document.createElement("p")
	textElement.textContent = "X"
	currentSquare.appendChild(textElement)
	boardIndex = currentSquare.getAttribute("board-index")
	board[boardIndex] = textElement.textContent
}


// When any of the grid elements are clicked then the fillBoard function is called
document.querySelectorAll(".board-cell").forEach(cell => cell.addEventListener("click", fillBoard));

gameController.newGame();
