


/*   */
/*   */
/*   */
/*   */
/*   */
/*   */
/*   */
/*   */
/*   */
/*   */
/* #2-7 DOM If else Function practice part Two  #2-7 DOM If else Function practice part Two  */


const title = document.querySelector("#tit");

const CLICKED_CLASS = "clicked";

function handleClick(){
	title.classList.toggle(CLICKED_CLASS);
}
init();
function init(){
	title.addEventListener("click", handleClick);
}
init();


/*
function handleClick(){
	const hasClass = title.classList.contains(CLICKED_CLASS);
	if(hasClass){
		title.classList.remove(CLICKED_CLASS);
	} else{
		title.classList.add(CLICKED_CLASS);
	}
}
*/

 

/* 
function handleClick(){
	const CurrentClass = title.className;
	if(CurrentClass !== CLICKED_CLASS){
		title.className = CLICKED_CLASS;
	} else{
		title.className ="";
	}
}	
*/
















/* #2-6 
const title = document.querySelector("#tit");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "rgb(127, 60, 63)";
const theother_color = "rgb(50, 228, 61)";

function handleClick(){
	const currentColor = title.style.color;
	if(currentColor === BASE_COLOR){
		title.style.color = OTHER_COLOR;
	} else if(currentColor === OTHER_COLOR){
		title.style.color = theother_color;
	} else if(currentColor === theother_color){
		title.style.color = BASE_COLOR;
	}

	console.log(`current color is this ${currentColor}`);
}

function init(){
	title.style.color = BASE_COLOR;
	title.addEventListener("click", handleClick);

}

init();   

function handleOffline(){
	console.log("Offline");
}

window.addEventListener("offline", handleOffline);
#2-6  */







/* #2-5 첫번째 조건문!! If, else, and, or   

if(10 === 5){
	console.log("good");
} else if(10>5){
	console.log("Wow")
}
 else{
	console.log("bad");
}

// && = and // 
if(20===5  ||   "nicolas" === "nicolas"){
	console.log("yes");
} else{
	console.log("no");
}

const age = prompt("How are you");

if(age >= 18 && age <= 21){
	console.log("you can drink but you should not");
} else if(age > 21){
	console.log("go ahead");
} else{
	console.log("Too young");
}
 #2-5 첫번째 조건문!! If, else, and, or
*/










/*  #2-4 Events and event handlers
const title = document.querySelector("tit");
function handleClick(event){
tit.style.color = "blue";
}

//handleResize() = 바로 함수 부르겠다. * handleResize = 원할 때 부르겠다.
tit.addEventListener("click", handleClick); 
// #2-4 Events and event handlers  */








/*#2-3 Modifying the DOM with JS / 
const title = document.querySelector("#tit");
//tit.innerHTML = "HI?";
tit.style.color = "blue";
document.title = 'I dont know';
//console.dir(document)
#2-3 Modifying the DOM with JS */






/*#2-2 JS DOM Functions  

// 아이디태그로 html요소 불러오기 
console.log(document.getElementById("tit"));

const title = document.getElementById("tit");
//console.log(title)
 tit.innerHTML = "HI?"

#2-2 JS DOM Functions   */













/* #2.1.1 More Function Fun

// ``의 쓰임 & 함수 사용 
function sayhello (name, age){
	console.log("hello " + name +" you are "+ age + " years old ");
	return `Hello ${name} I am ${age} years old too`
}

 const greetKim = sayhello("KIM", 23)

console.log(greetKim)

// 산수 함수
const calculator = {
	plus: function(a,b){
		return a+b;
	}
}

const plus = calculator.plus(5,5)
console.log(plus)

 #2.1.1 More Function Fun */



 





/*
const title = document. querySelector("#tit")

const BASE-COLOR = "#34495e";

function handeClick(){
	console.log(title.style.color)
}

function inti(){
	title.style.color = BASE-COLOR;
	title.addEventListener("click", handeClick)
}

inti();
*/
