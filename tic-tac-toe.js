const gameBoard = (() => {
	const board = ["X", "X", "O", "O", "X", "O", "O", "X", "X"];

	function handleCellClick() {
		console.log("Do something")
	}

	document.querySelectorAll(".board-cell").forEach(boardCell => boardCell.addEventListener("click", handleCellClick));
	document.querySelector(".game-restart").addEventListener("click", restartGame);
})();

const displayController = (() => {

})();

const gameController = (() => {

})();

const Player = (name, symbol) => {

}; 