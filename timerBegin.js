function timerBegin(){
	clearInterval(this.id);
	var el = document.getElementById("timer");
	el.value=0;
	var timerId=setInterval(function() {
  	el.value=parseInt(el.value)+1;
	}, 1000);
	this.id=timerId;
	
}