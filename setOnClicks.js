function setOnClicks(nOfCellsInRow,nOfCellsInColumn){
	var topCells=[],
	bottomCells=[],
	leftCells=[],
	rightCells=[];

	var totalNumberOfCells=nOfCellsInColumn*nOfCellsInRow;
	
	var nOfMines=0;

	var nOfMinesBtn = document.getElementById('nOfMines');

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
		var r = getRandomInt(1,10);
		if(r===1)
		{
			nOfMines++;
			cell.onclick=clickOnMine;
			cell.classList.add('hide-mine');
		}
		else
		{
			cell.onclick=clickOnSafeCell;
			cell.classList.add('safe-cell');
		}
		cell.oncontextmenu=clickByRightButton;
	}

	function numberOfMinesDecrement(){
		nOfMinesBtn.value=parseInt(nOfMinesBtn.value)-1;
	}
	function numberOfMinesIncrement(){
		nOfMinesBtn.value=parseInt(nOfMinesBtn.value)+1;
	}

	nOfMinesBtn.value=nOfMines;

	function clickOnMine(){
		if(!this.classList.contains('marked-cell'))
		{
			var mines=document.getElementsByClassName('hide-mine');
			for(var i=0;i<mines.length;i++)
			{
				mines[i].classList.add('activeted-mine');
			}
			alert('Game Over!');
		}
	}

	function clickOnSafeCell(){
		if(!this.classList.contains('marked-cell'))
		{
			var cells=getNearingCells(this);
			var value=getNumberOfMines(cells);
			this.classList.add('clicked');
			if(value===0)
			{
				for(var i=0;i<cells.length;i++)
				{
					if(!cells[i].classList.contains('clicked'))
					{
						cells[i].onclick();
					}
				}
			}
			else
			{	
				color(this,value);
				this.value=value;
			}
			this.onclick=null;
		}
		function color(element,value){
			switch(value)
			{
				case 1:
				element.classList.add('one');
				break;
				case 2:
				element.classList.add('two');
				break;
				case 3:
				element.classList.add('three');
				break;
				default:;	
			}
		}
	}

	function clickByRightButton(){
		if(!this.classList.contains('clicked'))
		{
			if(!this.classList.contains('marked-cell'))
			{	
				numberOfMinesDecrement();
				this.classList.add('marked-cell');
				this.value='•';
			}
			else
			{
				numberOfMinesIncrement();
				this.classList.remove('marked-cell');
				this.value='';
			}
			

		}
		return false;
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
}