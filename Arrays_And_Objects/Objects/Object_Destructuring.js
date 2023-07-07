let person = {
    name: "Sarala",
    age: 65,
    occupation: "Doctor", 
    dept: "Ayush Department",
    dispensary: "Palnadu",
    state: "Andhra Pradesh"
}
let {name} = person;
console.log(name);
let {age} = person;
console.log(age);
let {dept} = person;
let {occupation, state} = person;
console.log(occupation);
console.log(state);