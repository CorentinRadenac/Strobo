function toggleBgColor()

{   
  document.bgColor = document.bgColor == '#ffffff' ? '#000000' : '#ffffff';
}
var lit = false
var Interval;
function onoff()
{
	lit = !lit;
	if(lit){
		Interval = setInterval('toggleBgColor()', 75);
	}else{
	 clearInterval(Interval);
	 document.bgColor='white'
	}
}