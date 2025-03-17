let str : string = 'this is a day-2 practice'
// console.log(str)

// let message: string = 'Hello, TypeScript!';

// let h = document
// let heading = document.createElement('h1');
// heading.textContent = message;

// document.body.appendChild(heading);

let counter: number;
counter = 56; // compile error 
// console.log(counter);

// object type 

let person :{
    name : string,
    age: number,
}
person = {
    name: 'salma',
    age: 43
}
//  console.log(person)


//  function

function increment(counter:number) : number {
    return counter++
}

// console.log(increment(1))

// array
let items:(number|null)[] = [1, 2, 3, null];
console.log(items)

// event parameter
// const button = document.getElementById('btn')
// document.addEventListener('click', function (event) {
//     console.log(event)
//     console.log(event.button); 
// });



// NOT operator
const pending: boolean = true;
const notPending = !pending; // false
console.log(notPending); // false

