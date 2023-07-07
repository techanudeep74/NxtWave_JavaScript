let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodoButtonEl = document.getElementById("addTodoButton");

let todoList = [
{
    text: "Learn HTML",
    uniqueNo: 1
},
{
    text: "Learn CSS",
    uniqueNo: 2
},
{
    text: "Learn JavaScript",
    uniqueNo:3
}
];

function onAddTodo(){
    let todosCount = todoList.length;
    todosCount = todosCount + 1;

    let userInputElementEl = document.getElementById("todoUserInput");
    let userInputValue = userInputElementEl.value;

    if(userInputValue === ""){
        alert("Enter a Valid Text");
        return;
    }
    
    let newTodo = {
        text: userInputValue,
        uniqueNo: todosCount
    };
    createAndAppendTodo(newTodo);
    userInputElementEl.value = "";
}

addTodoButtonEl.onclick = function(){
    onAddTodo();
}

function createAndAppendTodo(todo) {
let checkboxId = "checkbox" + todo.uniqueNo;
let labelId = "label" + todo.uniqueNo;
let todoId = "todo" + todo.uniqueNo;

let todoElement = document.createElement("li");
todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
todoElement.id = todoId;
todoItemsContainer.appendChild(todoElement);

let inputElement = document.createElement("input");
inputElement.type = "checkbox";
inputElement.id = checkboxId;

inputElement.onclick = function(){
    onTodoStatusChange(checkboxId, labelId);
};

inputElement.classList.add("checkbox-input");
todoElement.appendChild(inputElement);

let labelContainer = document.createElement("div");
labelContainer.classList.add("label-container", "d-flex", "flex-row");
todoElement.appendChild(labelContainer);

let labelElement = document.createElement("label");
labelElement.setAttribute("for", checkboxId);
labelElement.classList.add("checkbox-label");
labelElement.id = labelId;
labelElement.textContent = todo.text;
labelContainer.appendChild(labelElement);

let deleteIconContainer = document.createElement("div");
deleteIconContainer.classList.add("delete-icon-container");
labelContainer.appendChild(deleteIconContainer);

let deleteIcon = document.createElement("i");
deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");

deleteIcon.onclick = function(){
    onDeleteTodo(todoId);
};

deleteIconContainer.appendChild(deleteIcon);
}

for (let todo of todoList) {
    createAndAppendTodo(todo);
}

function onTodoStatusChange(checkboxId, labelId){

    let checkboxElementEl = document.getElementById(checkboxId);

    let labelElementEl = document.getElementById(labelId);
    labelElementEl.classList.toggle("checked");

    // if(checkboxElementEl.checked === true){
    //     labelElementEl.classList.add("checked");
    // }else{
    //     labelElementEl.classList.remove("checked");
    // }

}

function onDeleteTodo(todoId){
    let todoElementEl = document.getElementById(todoId);
    todoItemsContainer.removeChild(todoElementEl);
}