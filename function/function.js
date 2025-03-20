// optional parameter
function multiply(a, b, c) {
    if (typeof c !== 'undefined') {
        console.log(c);
        return a * b * c;
    }
    return a * b;
}
console.log(multiply(4, 5, 2));
/* ---------------------- TypeScript Default Parameters --------------------- */
function multiply2(a, b) {
    if (b === void 0) { b = 'l'; }
    return a + b;
}
console.log(multiply2("umme"));
/* ----------------------- TypeScript Rest Parameters ----------------------- */
var arr = [4, 5, 56];
function getTotal() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = numbers.reduce(function (a, b) { return a + b; }, 0);
    console.log('----------', total);
}
getTotal(4, 5, 56);
function getStr() {
    //    const total = numbers.reduce((a,b) => a+b  ,0)
    var str = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        str[_i] = arguments[_i];
    }
    return str.join(',');
}
console.log(getStr('apple', ' banana'));
// function add(a: string, b: string, c?: string): string;
function add(a, b) {
    if (a === 'number') {
        return a + b;
    }
    else {
    }
    // throw new Error('Invalid arguments');
    //    return a+b+c
}
// console.log(add(10, 20));  // 30
console.log(add('number', 'world!')); // 'Hello, world!
// console.log(add('Hello, ', 'world!'));  // 'Hello, world!
