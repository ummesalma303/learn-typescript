// optional parameter
function multiply(a: number, b: number, c?: number): number {

    if (typeof c !== 'undefined') {
        console.log(c)
        return a * b * c;
    }
    return a * b;
}

console.log(multiply(4,5,2))

/* ---------------------- TypeScript Default Parameters --------------------- */

function multiply2(a: string, b: string='l'): string {

    
    return a + b;
}

console.log(multiply2("umme"))


/* ----------------------- TypeScript Rest Parameters ----------------------- */
const arr = [4,5,56]
function getTotal(...numbers: number[]): void {
   const total = numbers.reduce((a,b) => a+b  ,0)
    console.log('----------',total)
}
getTotal(4,5,56)




function getStr(...str: string[]): string {
//    const total = numbers.reduce((a,b) => a+b  ,0)
   
    return str.join(',')
}

console.log(getStr('apple', ' banana'))
/* --------------------- TypeScript Function Overloading -------------------- */

// function add(a: number, b: number): number;
function add(a: string, b: string): string;
// function add(a: string, b: string, c?: string): string;


function add(a: any, b: any, ): any {
    if (a === 'number' ) {
        return a + b;
    } else {
       
    }
    // throw new Error('Invalid arguments');
//    return a+b+c
}

// console.log(add(10, 20));  // 30
console.log(add('number', 'world!'));  // 'Hello, world!
// console.log(add('Hello, ', 'world!'));  // 'Hello, world!



