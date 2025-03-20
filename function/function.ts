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
