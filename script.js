// The 'board' div in main.
const board = document.getElementById('board');

// This will be changed dynamically
const boardSize = 16; 

createBoard();

function createBoard() {
	// Create a square sized by the boardSize variable
	for (let i = 0; i < boardSize; i++) {
		for (let j = 0; j < boardSize; j++) {
			// create div element and append to board
			const square = document.createElement('div');
			square.classList.add('square')
			square.id = `square-${i},${j}`
			square.addEventListener('mouseenter', () => {
				firstPass(event)
			})
			board.append(square);
		}
	}
}


function firstPass(e) {
	// console.log(e.target)
	// console.log('mousePassing');
	e.target.classList.add('pass1');
}