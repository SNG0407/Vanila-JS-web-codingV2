

/* #3-2 Making a JS Clock part Two 
#3-2 Making a JS Clock part Two  */
const ClockContainer = document.querySelector(".js-clock"),
	ClockTitle = ClockContainer.querySelector("h1");


function getTime(){
	const date = new Date();
	//console.log(date);
	const minutes = date.getMinutes();
	const hours = date.getHours();
	const seconds = date.getSeconds();
	ClockTitle.innerText = `${hours}:${
		minutes < 10 ? `0${minutes}` : minutes
	}:${
		seconds <10 ? `0${seconds}` : seconds
	}`;
}
/* 스트링 안에 if 함수 넣는 법 
${function < 10 ? '0${seconds}' : seconds}
함수가 어떤 조건 ex: <10 = 10보다 작다
? = then 그렇다면 
`0${seconds}` seconds 앞에 0을 함께 출력한다
: = else 조건이 틀렸다면
seconds : seconds를 출력한다
*/
function init(){
 getTime();
 setInterval(getTime, 1000);
}

init();









/* #3-1 Making a JS Clock part One  



const ClockContainer = document.querySelector(".js-clock"),
	ClockTitle = ClockContainer.querySelector("h1");


function getTime(){
	const date = new Date();
	console.log(date);
	const minutes = date.getMinutes();
	const hours = date.getHours();
	const seconds = date.getSeconds();
	const day = date.getDay();
	const years = date.getFullYear();
	const month = date.getMonth();
	const time = date.getTime();
	ClockTitle.innerText = `${hours}:${minutes}:${seconds}
	${years}.${month}.${day}
	${time}`;
}


function init(){
 getTime();
}

init();
#3-1 Making a JS Clock part One   */