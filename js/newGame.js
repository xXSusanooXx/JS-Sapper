function newGame() {
	
	createField(this.nOfCellsInRow,this.nOfCellsInColumn,this.widthOfCell);
	setOnClicks(this.nOfCellsInRow,this.nOfCellsInColumn);
	timerBegin();
	var roof=document.getElementById('roof');
	roof.style.display='none';
	var newGameBtn=document.getElementById('new-game');
	newGameBtn.onclick=newGame.bind(this);
}


