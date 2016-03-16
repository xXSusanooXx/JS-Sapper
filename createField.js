function createField(nOfCellsInRow,nOfCellsInColumn,widthOfCell) {

	cleanField();
	var field=document.getElementById("field");

	var topCont=document.getElementById("top-conteiner");

	var totalNumberOfCells=nOfCellsInColumn*nOfCellsInRow;

	topCont.style.width=widthOfCell*nOfCellsInRow;

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
	var field=document.getElementById("field");/*
	for(var i=1;i<=nOfCellsInRow*nOfCellsInColumn;i++)
	{
		field.removeChild(document.getElementById(i));
	}*/
	field.innerHTML='';
}

