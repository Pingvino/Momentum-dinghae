const formToDo = document.querySelector("#todo-form");
const inputToDo = document.querySelector("#todo-input");
const listToDo = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveTodos()
{
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function delToDo(event) {
    const li = event.target.parentElement;

    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveTodos();
}

function checkToDo(event) {
    const li = event.target.parentElement;
    const isChecked = event.target.checked;
    // console.log(event);
    if(isChecked)
    {
        li.classList.add("checked");
    }
    else
    {
        li.classList.remove("checked");
    }
    toDos.forEach(toDo => {
        if(toDo.id === parseInt(li.id))
        {
            toDo.selected = isChecked;
            console.log(toDo.selected);
        }
    });
    console.log(toDos);

    saveTodos();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const isSelected = newToDo.selected;
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = isSelected;
    if(isSelected)
    {
        li.classList.add("checked");
    }
    else
    {
        li.classList.remove("checked");
    }
    checkBox.addEventListener("click", checkToDo);
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.className = "delToDo";
    button.addEventListener("click",delToDo);
    li.appendChild(checkBox);
    li.appendChild(span);
    li.appendChild(button);
    listToDo.appendChild(li);
    
}

function submitToDo(event)
{
    event.preventDefault();
    // console.log(event);
    const newToDo = inputToDo.value;
    inputToDo.value = "";
    const newTodoObj = 
    {
        text: newToDo,
        id: Date.now(),
        selected: false,
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveTodos();
}

formToDo.onsubmit = submitToDo;

const saveToDos = localStorage.getItem(TODOS_KEY);

if(saveToDos !== null)
{
    const parsedToDos = JSON.parse(saveToDos);
    toDos = parsedToDos;
    // console.log(toDos);
    parsedToDos.forEach(paintToDo);
}