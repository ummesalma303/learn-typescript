var inputAge = 56;
var Person = /** @class */ (function () {
    function Person(age, firstName, lastName) {
        this.age = age;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Object.defineProperty(Person.prototype, "FullName", {
        get: function () {
            return this.firstName + ' ' + this.lastName;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var person1 = new Person(34, 'umme', 'fffff');
person1.age = inputAge;
console.log(person1.FullName);
