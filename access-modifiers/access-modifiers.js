/* ------------------------- private modifier ------------------------- */
var Person = /** @class */ (function () {
    function Person(ssn, firstName, lastName, country) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
        this.country = country;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName, " and he live ").concat(this.country);
    };
    Person.prototype.getSsn = function () {
        return "".concat(this.ssn, " ");
    };
    return Person;
}());
var person1 = new Person('153-07-3130', 'John', 'Doe', 'bd');
// console.log(person1.getFullName())
var ss = person1.ssn = 'sssssssss';
var firstName = person1.firstName = 'sssssssss'; // is not support change and access
var bd = person1.bd = 'sssssssss'; // it's only not support modified but it allowed access outer scope
// console.log(person1.ssn)
// console.log(person1.firstName)
// console.log(person1.country)
/* -------------------------------- protected modifiers ------------------------------- */
var Person4 = /** @class */ (function () {
    function Person4(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person4.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person4;
}());
var person = new Person4('9990', 'John', 'Doe', 'bd');
console.log(person.ssn);
