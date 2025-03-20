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

