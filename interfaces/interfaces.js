// interface Person {
//     firstName: string;
//     lastName: string;
//     age: number;
// }
var add = function (a, b) { return a + b; };
console.log(add(5, 10));
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.toJson = function () {
        return JSON.stringify(this);
    };
    return Person;
}());
var person = new Person('John', 'Doe');
console.log(person);
var study = {
    name: 'jhon',
    age: 90,
    village: 'dsf'
};
console.log(study);
var study1 = {
    name: 'jhon',
    age: 90,
    address: 'sdds',
    village: 'dsf',
    role: 89,
    class: 8
};
var myName = /** @class */ (function () {
    function myName(role, grade) {
        this.role = role;
        this.grade = grade;
    }
    return myName;
}());
var me = new myName(9, 5);
console.log(me);
