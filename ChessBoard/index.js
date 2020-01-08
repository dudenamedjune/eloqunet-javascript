const chessBoard = (height, width) => {
	let row = ' ';
	let offsetRow = '';
	do {
		row += '# ';
		offsetRow += '# '
		width -= 1;
	} while(width !== 0); 
	row += '\n';
	offsetRow += '\n';
	let board = '';
	for(i = 1; i < height + 1; i++) {
		if(i % 2) {
			board += row;
		} else {
			board += offsetRow;
		}
	}
	return board.slice(1, board.length - 2);
}
console.log(chessBoard(8, 4));
