var field=document.getElementById("field");

var topCont=document.getElementById("top-conteiner");


var nOfCellsInRow=20,
	nOfCellsInColumn=15,
	widthOfCell=25;


var totalNumberOfCells=nOfCellsInColumn*nOfCellsInRow;


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




