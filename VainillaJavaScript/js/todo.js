const toDoForm  = document.querySelector(".js-toDoFrom"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
let toDos = [];

//html에서 지우기
function deleteToDos(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    // console.log(event.target.parentNode);
    //local에서 지우기
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
    console.log(cleanToDos);
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function filterFn(toDo) {
    return toDo.id === 1;
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "x";
    delBtn.addEventListener("click", deleteToDos);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    //리스트 생성
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        })
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();