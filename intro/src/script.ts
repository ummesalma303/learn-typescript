let hello:string = 'hello world';
// console.log(hello)

let age:number = 35.989;
console.log(typeof age)
console.log(age.toFixed())


/* ---------------------------------- func ---------------------------------- */
function myFunction(a:any, b:number) {
  // console.log()
  return a + b
}

// function myFunction(a:number, b:number) { //correct
//   return a*b
// }

console.log(myFunction("8",5))

/* ---------------------------------- array --------------------------------- */

let fruits : string[] = ['apple', 'jk']; // only string
console.log(fruits)

let vegetables : (string | number)[] = ['spinach', 54]; 
console.log(fruits, vegetables)


let obj: object = { x: 0 };

console.log(obj)