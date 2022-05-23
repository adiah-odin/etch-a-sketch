// The 'board' div in main.
const board = document.getElementById('board');

// This will be changed dynamically
let boardSize = 16; 
const clearBtn = document.getElementById('clear');
const sizeBtn = document.getElementById('size');

createBoard(boardSize);

function createBoard(size) {
	// remove any child elements of board first
	while (board.firstChild) {
		board.removeChild(board.firstChild);
	}
	// Create a square sized by the boardSize variable
	for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {
			// set the custom property of the board size
			board.style.setProperty('--board-size', size);

			// create div element and append to board
			const square = document.createElement('div');
			square.classList.add('square');
			square.id = `square-${i},${j}`;
			square.dataset.pass = 0;
			square.addEventListener('mouseenter', () => {
				switchColor(event.target)
			});
			board.append(square);
		}
	}
}


function switchColor(square) {
	// console.log(e.target)
	// console.log('mousePassing');
	let passNumber = square.dataset.pass
	if (passNumber < 10) {
		square.classList.remove(`pass${passNumber}`);
		square.dataset.pass++;
		square.classList.add(`pass${square.dataset.pass}`)

	}

	// if (!e.target.classList.contains('pass1')) {
	// 	e.target.classList.add('pass1');
	// } else if (!e.target.classList.contains('pass2')) {
	// 	e.target.classList.add('pass2');
	// }
}

function resetColors() {
	// a regular expression to match all occurrences of pass 
	var classRegx = new RegExp('pass' + '[^ ]*[ ]?', 'g');
	const squares = document.querySelectorAll('.square');
	squares.forEach(square => {
		square.className = square.className.replace(classRegx, '');
	})
}

clearBtn.onclick = resetColors;


function resize() {
	let boardSize = parseInt(prompt("Enter a board size (max 100)"));

	if (typeof(boardSize) !== 'number' || boardSize < 16 || boardSize > 100) {
		alert("Please enter an integer between 16 and 100");
		return;
	}

	createBoard(boardSize);

}

sizeBtn.onclick = resize;