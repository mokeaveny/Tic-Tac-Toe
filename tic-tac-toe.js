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

	const checkWin = function () {
		// Checks top row
		compareBoardSymbols(0, 1, 2);
		// Checks middle row
		compareBoardSymbols(3, 4, 5);
		// Checks boottom row
		compareBoardSymbols(6, 7, 8);
		// Checks first column
		compareBoardSymbols(0, 3, 6);
		// Checks second column
		compareBoardSymbols(1, 4, 7);
		// Checks third column
		compareBoardSymbols(2, 5, 8);
		// Checks diagonal, top left to bottom right
		compareBoardSymbols(0, 4, 8);
		// Checks diagonal, top right to bottom left
		compareBoardSymbols(2, 4, 6);

		checkTie();
	}

	const compareBoardSymbols = function(p1, p2, p3) {
		currentPlayer = gameController.getCurrentPlayer()
		if (board[p1] == currentPlayer.symbol && board[p2] == currentPlayer.symbol && board[p3] == currentPlayer.symbol)
		{
			console.log("WON");
		}
	}

	const checkTie = function() {

		tie = true;

		// Loops through every element in the array to see if any of them are still empty. If one is still empty then it isn't a tie.
		for(i = 0; i < 9; i++) {
			if (board[i] == "") {
				tie = false
			}
		}

		if(tie == true) {
			console.log("TIE");
		}
	}
		
	return {
		newGame,
		getCell,
		setCell,
		getBoard,
		checkWin
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

		p1 = Player("p1", "X");
		p2 = Player("p2", "O");
		currentPlayer = p1;
		console.log(currentPlayer);

		console.log(p1.symbol);
		console.log(p2.symbol);

		gameBoard.newGame()
		displayController.newGame()
	}

	const switchPlayer = function() {
		if (currentPlayer == p1) {
			currentPlayer = p2;
		}
		else {
			currentPlayer = p1;
		}
	}

	const getCurrentPlayer = function() {
		return currentPlayer
	}

	// Fill board takes the clicked target and uses it to create a paragraph element which will contain the players symbol
	const fillBoard = (e) => {
		currentSquare = e.target
		boardIndex = currentSquare.getAttribute("board-index")
		currentSymbol = gameBoard.getCell(boardIndex)

		if (currentSymbol == "") {
			textElement = document.createElement("p")
			textElement.textContent = currentPlayer.symbol;
			currentSquare.appendChild(textElement)
			gameBoard.setCell(boardIndex, textElement.textContent)
			gameBoard.checkWin();
			// Once the symbol has been placed then the player is swapped so that they can then make a move
			switchPlayer()
			console.log(gameBoard.getCell(boardIndex));
		}
	}

	return {
		newGame,
		fillBoard,
		getCurrentPlayer
	}

})();

const Player = function(theName, theSymbol) {
	name = theName;
	symbol = theSymbol;
	
	return {
		name,
		symbol
	}
};

gameController.newGame();
