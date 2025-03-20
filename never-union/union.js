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
var requestData;
(function (requestData) {
    requestData[requestData["Jan"] = 0] = "Jan";
    requestData[requestData["Feb"] = 1] = "Feb";
    requestData[requestData["Mar"] = 2] = "Mar";
    requestData[requestData["Apr"] = 3] = "Apr";
})(requestData || (requestData = {}));
// console.log(requestData)
/* ------------------------------- string enum ------------------------------ */
var requestData2;
(function (requestData2) {
    requestData2["Jan"] = "one";
    requestData2["Feb"] = "two";
    requestData2["Mar"] = "three";
    requestData2["Apr"] = "four";
})(requestData2 || (requestData2 = {}));
console.log(requestData2);
var mouseEvent;
mouseEvent = 'click'; // valid
mouseEvent = 'dblclick'; // valid
mouseEvent = 'mouseup'; // valid
mouseEvent = 'mousedown'; // valid
mouseEvent = 'mouseover'; // compiler error
var input;
input = 100; // valid
input = 'Hi'; // valid
var person1 = {
    name: 'John',
    age: 25
};
console.log(person1.name);
var candidate = {
    name: "Joe",
    age: 25,
    email: "joe@example.com",
    phone: "(408)-123-4567"
};
console.log(candidate.phone);
/* ------------------------------- switch case ------------------------------ */
var targetId = 'btnDelete';
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
