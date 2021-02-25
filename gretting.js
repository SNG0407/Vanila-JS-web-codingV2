
const greetForm = document.querySelector(".js-form"),
	input = greetForm.querySelector("input"),
	greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
 SHOWING_CN = "showing";

function saveName(text){
	localStorage.setItem(USER_LS, text);
}


function handleSubmit(event){
	event.preventDefault();
	const currentValue = input.value;
	paintGreeting(currentValue);
	saveName(currentValue);

}

function askForName(){
	greetForm.classList.add(SHOWING_CN);
	greetForm.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
	greetForm.classList.remove(SHOWING_CN);
	greeting.classList.add(SHOWING_CN);
	greeting.innerText = `Hello ${text}`;

}

function loadName(){
	const currentUser = localStorage.getItem(USER_LS);
	if(currentUser === null){
		askForName();
		//console.log(currentUser);
	} else{
		paintGreeting(currentUser);
	}
}



const deleteButton = document.querySelector('.js-nameButton');
function deleteItem() {
  localStorage.removeItem("currentUser");
  greeting.classList.remove(SHOWING_CN);
  location.reload()
	loadName();
}


 function init(){
 	loadName();
	 
 }

 init(); 
