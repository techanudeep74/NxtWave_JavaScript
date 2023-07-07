let bgContainerE1 = document.createElement("div");
bgContainerE1.classList.add("bg-container");
document.body.appendChild(bgContainerE1);

let headingElementEl = document.createElement("h1");
headingElementEl.classList.add("heading");
headingElementEl.textContent = "D-Mart Vegetable Items";
bgContainerE1.appendChild(headingElementEl);

let listContainerElementEl = document.createElement("ul");
listContainerElementEl.classList.add("list-container");
bgContainerE1.appendChild(listContainerElementEl);

let groceryItems = ["Beetroot", "Carrot", "Onion", "Pepper", "Raddish", "Tomato"];
for (let groceryItem of groceryItems){
    let listItemsEl = document.createElement("li");
    listItemsEl.textContent = groceryItem;
    listContainerElementEl.appendChild(listItemsEl);
}

let checkboxInputEl = document.createElement("input");
checkboxInputEl.type = "checkbox";
checkboxInputEl.id = "deliveryMode";
bgContainerE1.appendChild(checkboxInputEl);

let labelEl = document.createElement("label");
labelEl.setAttribute("for", "deliveryMode");
labelEl.classList.add("delivery-text");
labelEl.textContent = "Home Delivery";
bgContainerE1.appendChild(labelEl);

let breakEl = document.createElement("br");
bgContainerE1.appendChild(breakEl);

let buttonEl = document.createElement("button");
buttonEl.classList.add("button", "btn-primary");
buttonEl.textContent = "Proceed To Pay";
bgContainerE1.appendChild(buttonEl);