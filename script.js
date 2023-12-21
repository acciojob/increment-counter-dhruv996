//your JS code here. If required.
let p=document.querySelector("#counter");
let btn=document.querySelector("#incrementBtn");
btn.addEventListener("click",onclick);
 let i=0;
 let currentValue = parseInt(p.innerText);
function onclick(){
	
	alert(currentValue);
	currentValue++;
	p.innerText=currentValue ;	
	
}
