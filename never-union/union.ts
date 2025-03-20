// let dtr: never = ' kj'
// console.log(dtr)



// function raiseError(message:string):never {
//     throw new Error(message);
// }


// function add(a: number | string, b: number | string):  number | string {
//     if (typeof a === "number" && typeof b === "number") {
//         return a + b;
//     }  if (typeof a === 'string' && typeof b === 'string') {
//         return a.concat(b);
//     }
//     throw new Error('Parameters must be numbers or strings');
// }

// console.log(add(5,'7'))


// enum requestData {
//     Jan,
//     Feb,
//     Mar,
//     Apr,
//     May,
//     Jun,
//     Jul,
//     Aug,
//     Sep,
//     Oct,
//     Nov,
//     Dec
// }

enum requestData{
    Jan= 0,     
    Feb= 1,     
    Mar= 2,     
    Apr= 3,     
   
}
// console.log(requestData)

/* ------------------------------- string enum ------------------------------ */

enum requestData2{
    Jan= 'one',     
    Feb= 'two',     
    Mar= 'three',     
    Apr= 'four',     
   
}
console.log(requestData2)


let mouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown' | 'mouseover';
mouseEvent = 'click'; // valid
mouseEvent = 'dblclick'; // valid
mouseEvent = 'mouseup'; // valid
mouseEvent = 'mousedown'; // valid
mouseEvent = 'mouseover'; // compiler error

/* ------------------------- TypeScript Type Aliases ------------------------ */

type alphanumeric = string | number;

let input: alphanumeric;
input = 100; // valid
input = 'Hi'; // valid
// input = false; // Compiler error

// 2) Object types

type person = {
    name: string;
    age: number;
}
let person1:person = {
    name: 'John',
    age: 25
}
console.log(person1.name)

// 4) Intersection Types

type Personal = {
    name: string;
    age: number;
  };
  
  type Contact = {
    email: string;
    phone: string;
  };

  type Candidate = Personal & Contact

  let candidate : Candidate={
    name: "Joe",
    age: 25,
    email: "joe@example.com",
    phone: "(408)-123-4567"
  }
  console.log(candidate.phone)

  /* ------------------------------- switch case ------------------------------ */

  let targetId = 'btnDelete';

switch (targetId) {
    case 'btnUpdate':
        console.log('Update');
        break;
    case 'btnDelete':
        console.log('Delete');
        break;
    case 'btnNew':
        console.log('New');
        break;
        default: 
        console.log('Default');
       break;
}