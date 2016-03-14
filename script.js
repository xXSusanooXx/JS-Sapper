var field=document.getElementById("field");

var nOfCellsInRow=15,
	nOfCellsInColumn=10,
	widthOfCell=30;

var totalNumberOfCells=nOfCellsInColumn*nOfCellsInRow;

field.style.width=nOfCellsInRow*widthOfCell;
field.style.height=nOfCellsInColumn*widthOfCell;

for(var i=1;i<=totalNumberOfCells;i++)
{
	var cell = document.createElement('input'); 
	cell.type = 'submit';
	cell.id=i;
	cell.className='cell';
	cell.value='';
	field.appendChild(cell);
	var r=getRandomInt(1,6);
	if(r===1)
	{
		cell.classList.add('hide-mine');
		cell.onclick=clickOnMine;
	}
}/*
for(var i=0;i<4;i++)
{
	var element=document.getElementById(46+i);
	element.classList.add('hide-mine');
	element.onclick=clickOnMine;
}
for(var i=0;i<3;i++)
{
	var element=document.getElementById(4+i*nOfCellsInRow);
	element.classList.add('hide-mine');
	element.onclick=clickOnMine;
}*/
var topCells=[],
	bottomCells=[],
	leftCells=[],
	rightCells=[];

setBorderCells();
function setBorderCells(){
	for(var i=1;i<=nOfCellsInRow;i++)
	{
		topCells[i-1]=i;
		bottomCells[i-1]=totalNumberOfCells-nOfCellsInRow+i;
	}
	for(var i=1;i<nOfCellsInColumn-1;i++)
	{
		leftCells[i-1]=nOfCellsInRow*i+1;
		rightCells[i-1]=nOfCellsInRow*(i+1);
	}
}
for(var i=1;i<=totalNumberOfCells;i++)
{
	var cell = document.getElementById(i); 
	if(!cell.classList.contains('hide-mine'))
	{
		cell.onclick=clickOnSafeCell;
	}
}

function getNearingCells(whoCalls){
	id=parseInt(whoCalls.id);
	var cells=[];
	if(topCells.indexOf(id)!==-1)
	{
		if(id===1)
		{
			cells[0]=document.getElementById(id+1);
			cells[1]=document.getElementById(id+nOfCellsInRow);
			cells[2]=document.getElementById(id+nOfCellsInRow+1);
			return cells;
		}
		if(id===nOfCellsInRow)
		{
			cells[0]=document.getElementById(id-1);
			cells[1]=document.getElementById(id+nOfCellsInRow);
			cells[2]=document.getElementById(id+nOfCellsInRow-1);
			return cells;
		}
		cells[0]=document.getElementById(id-1);
		cells[1]=document.getElementById(id+1);
		for(var i=0;i<3;i++)
		{
			cells[i+2]=document.getElementById(id+nOfCellsInRow-1+i);
		}
		return cells;
	}

	if(bottomCells.indexOf(id)!==-1)
	{
		if(id===totalNumberOfCells-nOfCellsInRow+1)
		{
			cells[0]=document.getElementById(id+1);
			cells[1]=document.getElementById(id-nOfCellsInRow);
			cells[2]=document.getElementById(id-nOfCellsInRow+1);
			return cells;
		}
		if(id===totalNumberOfCells)
		{
			cells[0]=document.getElementById(id-1);
			cells[1]=document.getElementById(id-nOfCellsInRow);
			cells[2]=document.getElementById(id-nOfCellsInRow-1);
			return cells;
		}
		cells[0]=document.getElementById(id-1);
		cells[1]=document.getElementById(id+1);
		for(var i=0;i<3;i++)
		{
			cells[i+2]=document.getElementById(id-nOfCellsInRow-1+i);
		}
		return cells;
	}
	if(leftCells.indexOf(id)!==-1)
	{
		cells[0]=document.getElementById(id-nOfCellsInRow);
		cells[1]=document.getElementById(id+nOfCellsInRow);
		cells[2]=document.getElementById(id+1);
		cells[3]=document.getElementById(id-nOfCellsInRow+1);
		cells[4]=document.getElementById(id+nOfCellsInRow+1);
		return cells;
	}
	if(rightCells.indexOf(id)!==-1)
	{
		cells[0]=document.getElementById(id-nOfCellsInRow);
		cells[1]=document.getElementById(id+nOfCellsInRow);
		cells[2]=document.getElementById(id-1);
		cells[3]=document.getElementById(id-nOfCellsInRow-1);
		cells[4]=document.getElementById(id+nOfCellsInRow-1);
		return cells;
	}
	return getAllNearingCells(whoCalls);
}
function getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clickOnMine(){
	var mines=document.getElementsByClassName('hide-mine');
	for(var i=0;i<mines.length;i++)
	{
		mines[i].classList.add('activeted-mine');
		mines[i].disable='disabled';
	}
	this.classList.add('clicked');
	alert('Game Over');
}
function clickByWheel(){

}
function clickOnSafeCell(){
	var cells=getNearingCells(this);
	var value=getNumberOfMines(cells);
	this.classList.add('clicked');
	if(value===0)
	{
		this.value=value;
		for(var i=0;i<cells.length;i++)
		{
			if(!cells[i].classList.contains('clicked'))
			{
			cells[i].onclick();
			}
		}
		
	}
	this.value=value;	
	
}
function getNumberOfMines(ar){
	var nOfMines=0;
	for(var i=0;i<ar.length;i++)
	{
		if(ar[i].classList.contains('hide-mine'))
		{
			nOfMines++;
		}
	}
	return nOfMines;
}
function getAllNearingCells(whoCalls){
	var id=parseInt(whoCalls.id);
	var cells=[];
	for(var i=0;i<3;i++)
	{
		cells[i]=document.getElementById(id-nOfCellsInRow-1+i);
	}
	for(var i=0;i<3;i++)
	{
		cells[i+3]=document.getElementById(id+nOfCellsInRow-1+i);
	}
	cells[6]=document.getElementById(id-1);
	cells[7]=document.getElementById(id+1);
	return cells;	
}
