function createField(nOfCellsInRow,nOfCellsInColumn,widthOfCell) {

	cleanField();
	var field=document.getElementById("field");

	var topCont=document.getElementById("top-conteiner");

	var totalNumberOfCells=nOfCellsInColumn*nOfCellsInRow;

	topCont.style.width=widthOfCell*nOfCellsInRow;

	var roof=document.getElementById('roof');

	roof.style.width=nOfCellsInRow*widthOfCell;
	roof.style.height=nOfCellsInColumn*widthOfCell;
	roof.style.bottom=nOfCellsInColumn*widthOfCell+48;//страшный быдло-код

	field.style.width=nOfCellsInRow*widthOfCell;
	field.style.height=nOfCellsInColumn*widthOfCell;

	for(var i=1;i<=totalNumberOfCells;i++)
	{
		var cell = document.createElement('input');
		cell.style.width=widthOfCell;
		cell.style.height=widthOfCell; 
		cell.type = 'submit';
		cell.id=i;
		cell.className='cell';
		cell.value='';
		field.appendChild(cell);
	}
}

function cleanField(){
	var field=document.getElementById("field");
	field.innerHTML='';
}

