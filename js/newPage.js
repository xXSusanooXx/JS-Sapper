var nOfCellsInRow=9,nOfCellsInColumn=9,widthOfCell=25;
newGame();

var beg=document.getElementById('beginner');

beg.nOfCellsInRow=9;
beg.nOfCellsInColumn=9;
beg.widthOfCell=25;

beg.onclick=newGame;

var int=document.getElementById('intermediate');

int.nOfCellsInRow=16;
int.nOfCellsInColumn=16;
int.widthOfCell=25;

int.onclick=newGame;

var exp=document.getElementById('expert');

exp.nOfCellsInRow=30;
exp.nOfCellsInColumn=16;
exp.widthOfCell=25;
exp.onclick=newGame;
/*Люди, если кто-то пойдет проверять мой код, пожалуйста, не пугайтесь. Он страшен. Меня на пол пути осенило,
 и я понял что все нужно было начинать совсем не так... Но я захотел доделать, чтобы хоть как-то работало...
 В ближайшее время переделаю,, и залью...*/
