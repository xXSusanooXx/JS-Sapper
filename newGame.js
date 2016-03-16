function newGame() {
	var id;
	createField(this.nOfCellsInRow,this.nOfCellsInColumn,this.widthOfCell);
	setOnClicks(this.nOfCellsInRow,this.nOfCellsInColumn);
	timerBegin();
}


