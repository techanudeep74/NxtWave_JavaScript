let todoItemsContainerE1 = document.getElementById("todoItemsContainer");

let todoElement = document.createElement("li");
todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
todoItemsContainerE1.appendChild(todoElement);

let inputElementE1 = document.createElement("input");
inputElementE1.type = "checkbox";
inputElementE1.id = "checkboxInput";
inputElementE1.classList.add("checkbox-input");
todoElement.appendChild(inputElementE1);

let labelContainer = document.createElement("div");
labelContainer.classList.add("label-container", "d-flex", "flex-row");
todoElement.appendChild(labelContainer);

let labelElement = document.createElement("label");
labelElement.setAttribute("for", "checkboxInput");
labelElement.classList.add("checkbox-label");
labelElement.textContent = "Learn HTML";
labelContainer.appendChild(labelElement);

let deleteIconContainer = document.createElement("div");
deleteIconContainer.classList.add("delete-icon-container");
labelContainer.appendChild(deleteIconContainer);

let deleteIcon = document.createElement("i");
deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
deleteIconContainer.appendChild(deleteIcon);
