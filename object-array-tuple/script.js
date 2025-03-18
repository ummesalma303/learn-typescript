var str = 'this is a day-2 practice';
// console.log(str)
// let message: string = 'Hello, TypeScript!';
// let h = document
// let heading = document.createElement('h1');
// heading.textContent = message;
// document.body.appendChild(heading);
var counter;
counter = 56; // compile error 
// console.log(counter);
// object type 
var person;
person = {
    name: 'salma',
    age: 43
};
//  console.log(person)
//  function
function increment(counter) {
    return counter++;
}
// console.log(increment(1))
// array
var items = [1, 2, 3, null];
console.log(items);
// event parameter
// const button = document.getElementById('btn')
// document.addEventListener('click', function (event) {
//     console.log(event)
//     console.log(event.button); 
// });
// NOT operator
var pending = true;
var notPending = !pending; // false
console.log(notPending); // false
var employee;
employee = {
    name: 'umme',
    age: 999
};
console.log(employee);
// array
// let skills:string[] = [];
// skills[0] = "Problem Solving";
// skills[1] = "Programming";
// skills.push('Software Design');
var skills;
skills = ['Problem Sovling', 'Software Design', 'Programming'];
skills.push(100);
console.log(skills.length);
/* ---------------------------------- Array --------------------------------- */
var color = [255, 0, "0"];
console.log(color);
/* ---------------------------------- tuple --------------------------------- */
// let bgColor, headerColor: [number, number, number, number?];
// bgColor = [0, 255, 255, 0.5];
// headerColor = [0, 255, 255];
// console.log(bgColor,headerColor)
// let bgColor: [number, number, number, number?];
// bgColor = [0, 255,  0.5];
// // headerColor = [0, 255, 255];
// console.log(bgColor)
/* ---------------------------------- void ---------------------------------- */
function log(message) {
    console.log("messsage");
}
log('mmmmmmm');
var useless = undefined;
useless = 1; // error
console.log(useless);
