// interface Person {
//     firstName: string;
//     lastName: string;
//     age: number;
// }

// const user: Person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 25,
    
// };

// console.log(user.firstName);

/* -------------------------------- function -------------------------------- */
interface MathOperation {(num1: number, num2: number): number}
const add: MathOperation = (a, b) => a + b;
console.log(add(5,10))

/* ---------------------------------- class --------------------------------- */
interface Json {
    toJson(): string;
} 

class Person implements Json {
    constructor(public firstName: string, public lastName: string) {}
    toJson(): string {
      return JSON.stringify(this);
    }
  }
  let person = new Person('John', 'Doe');
console.log(person);

/* -------------------------------- type ------------------------------------------ */

type student ={
    name:string,
    age:number
}
type data ={
   address: string,
   village: string
}

let study: student | data={
    name:'jhon',
    age:90,
    village: 'dsf'
}
console.log(study)

/* -------------------------------- interface ------------------------------- */


interface data1 {
    name:string,
    age:number
}
interface data1 {
   address: string,
   village: string
}
interface data1 {
   role: number,
   class: number
}

interface allData extends data1{}
const study1:allData = {
    name:'jhon',
    age:90,
    address: 'sdds',
    village: 'dsf',
    role:89,
    class:8
}
// console.log(study1)

/* ---------------------------------- class --------------------------------- */
interface myData {
    role: number,
    grade: number
 }
class myName implements myData {
    constructor(public role: number, public grade: number) {}
}

const me = new myName(9,5)
console.log(me)
