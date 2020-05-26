const gameBoard = (() => {

	let board; // Local variable to the gameboard module
	
	const newGame = function() { 
		board = [["", "", ""], ["", "", ""], ["", "", ""]];
	}
	
	const fillArray = (symbol, position) => {
		const boardElement = document.querySelector(".game-container");

		boardElement.children[position].textContent = mark.toUpperCase();
		switch(position) {
			case 0:
				board[0][0] = symbol;
			break;
			case 1:
				board[0][1] = symbol;
			break;
			case 2:
				board[0][2] = symbol;
			break;
			case 3:
				board[1][0] = symbol;
			break;
			case 4:
				board[1][1] = symbol;
			break;
			case 5:
				board[1][2] = symbol;
			break;
			case 6:
				board[2][0] = symbol;
			break;
			case 7:
				board[2][1] = symbol;
			break;
			case 8:
				board[2][2] = symbol;
			break;
		}
		
	}
	
})();

const displayController = (() => {

})();

const gameController = (() => {

})();

const Player = (name, symbol) => {

};

// Fill board takes the clicked target and uses it to create a paragraph element which will contain the players symbol
const fillBoard = (e) => {
	currentSquare = e.target
	textElement = document.createElement("p")
	textElement.textContent = "X"
	currentSquare.appendChild(textElement)
}


// When any of the grid elements are clicked then the fillBoard function is called
document.querySelectorAll(".board-cell").forEach(cell => cell.addEventListener("click", fillBoard));
