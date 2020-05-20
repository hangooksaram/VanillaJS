const toDoForm = document.querySelector('.toDoForm');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.js-toDoList');

const TODO_LS = 'toDos'

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "delete";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
}

function saveToDo(text){
    localStorage.setItem(TODO_LS, text);
}

function loadToDo(){
    const toDos = localStorage.getItem(TODO_LS);
    if(toDos !== null){

    }else{
    }
}

function handleSubmit(e){
    e.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function init(){
    loadToDo();
    toDoForm.addEventListener('submit', handleSubmit);
};

init();