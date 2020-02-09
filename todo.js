const toDoform = document.querySelector(".js-toDoForm"),
    toDoinput = toDoform.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODO_LS = 'toDos';

const toDos = [];

function saveToDos(){
    localStorage.setItem(TODO_LS,JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "❌";
    const span = document.createElement("span");
    const newId = toDos.length +1;

    span.innerText = text;
    li.appendChild(span);
    li.appendChild(deleteButton);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId,
    };

    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const curretnValue = toDoinput.value;
    paintToDo(curretnValue);
    toDoinput.value = "";
}

function loadToDos(){
    const loadedTodo = localStorage.getItem(TODO_LS);
    if (loadedTodo !== null){
        const parsedToDos = JSON.parse(loadedTodo);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    } 
}
function init(){
    loadToDos();
    toDoform.addEventListener("submit",handleSubmit);
}
init();