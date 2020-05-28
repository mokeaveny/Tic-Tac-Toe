const gameBoard = (() => {

	let board; // Local variable to the gameboard module
	
	const newGame = function() { 
		board = ["", "", "", "", "", "", "", "", ""];
	}

	// Getter and setter functions so the values stored inside the gameBoard can be accessed and set from other classes.
	const getCell = function(index) {
		return board[index];
	}

	const setCell = function(index, symbol) {
		board[index] = symbol;
	}

	const getBoard = function() {
		return board
	}
		
	return {
		newGame,
		getCell,
		setCell,
		getBoard
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

		// When any of the grid elements are clicked then the fillBoard function is called
		document.querySelectorAll(".board-cell").forEach(cell => cell.addEventListener("click", gameController.fillBoard));
		
		// Reset function that removes the grid and the title on the page so the display is reset
		const reset = function() {
			parent.removeChild(titleBar);
			parent.removeChild(gameContainer);
			gameController.newGame()
		}

		// Add an event listener to the reset button that renders the page again and clears the values within the board array
		resetButton.addEventListener("click", reset);
		
	}

	newGame = function() {
		render()
	}

	return {
		newGame
	}

})();

const gameController = (() => {
	const newGame = function() {
		gameBoard.newGame()
		displayController.newGame()
	}

	// Fill board takes the clicked target and uses it to create a paragraph element which will contain the players symbol
	const fillBoard = (e) => {
		currentSquare = e.target
		textElement = document.createElement("p")
		textElement.textContent = "X"
		currentSquare.appendChild(textElement)
		boardIndex = currentSquare.getAttribute("board-index")
		gameBoard.setCell(boardIndex, textElement.textContent)
		console.log(gameBoard.getCell(boardIndex));
	}

	return {
		newGame,
		fillBoard
	}

})();

const Player = (name, symbol) => {

};

gameController.newGame();
