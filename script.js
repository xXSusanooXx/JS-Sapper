var field=document.getElementById("field");

var nOfCells=100,nOfMines=13,widthOfCell=30;

field.style.width=Math.sqrt(nOfCells)*widthOfCell;
field.style.height=Math.sqrt(nOfCells)*widthOfCell;

for(var i=0;i<nOfCells;i++)
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
	else
	{
		cell.onclick=clickOnSafeCell;
	}

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
	alert('Game Over');
}
function clickOnSafeCell(){
	var nOfMines = 0;
	for(var i=0;i<3;i++)
	{
		var element=document.getElementById(parseInt(this.id)-11+i);
		if(element.classList.contains('hide-mine'))
		{
			nOfMines++;
		}
	}
	for(var i=0;i<3;i++)
	{
		element=document.getElementById(parseInt(this.id)+9+i);
		if(element.classList.contains('hide-mine'))
		{
			nOfMines++;
		}
	}
		element = document.getElementById(parseInt(this.id)-1);
	if(element.classList.contains('hide-mine'))
	{
		nOfMines++;
	}
		element=document.getElementById(parseInt(this.id)+1);
	if(element.classList.contains('hide-mine'))
	{
		nOfMines++;
	}
	this.value=nOfMines;

}
