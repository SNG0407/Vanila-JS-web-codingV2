const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
let toDos = [];


function deleteTodo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        console.log(toDo.id, Number(li.id));
        return toDo.id !== parseInt(li.id); 
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function printToDo(text){
    console.log(text);
    const li = document.createElement("li");
    const span = document.createElement("span");
    const newId = toDos.length +1;
    const delBtn = document.createElement("button");
    delBtn.innerText = "❎";
    delBtn.addEventListener("click", deleteTodo)
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span); 
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = { //객체 만들기
        text: text,
        id:newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    printToDo(currentValue);
    toDoInput.value = "";
}


function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        console.log(loadedToDos);
        const parsedToDos = JSON.parse(loadedToDos);
        console.log(parsedToDos);
        parsedToDos.forEach(function(toDo){
            printToDo(toDo.text);
        })
    }
}




function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}
init();