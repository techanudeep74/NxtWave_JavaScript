let myContainer = document.getElementById('bgContainer');
let technologiesArray = ["Artificial Intelligence", "Virtual Reality"];

function createAndAppendTechnology(technology){
  let technologyItem = document.createElement("p");
  technologyItem.textContent = technology;
  myContainer.appendChild(technologyItem);
}

for(let technology of technologiesArray) {
  createAndAppendTechnology(technology);
}