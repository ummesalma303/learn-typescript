var Person = /** @class */ (function () {
    function Person(firstName, lastName, jobTitle) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        Person.headcount++;
    }
    Object.defineProperty(Person.prototype, "FullName", {
        get: function () {
            return this.firstName + ' ' + this.lastName;
        },
        enumerable: false,
        configurable: true
    });
    Person.getHeadcount = function () {
        return Person.headcount;
    };
    Person.headcount = 0;
    return Person;
}());
var person1 = new Person('umme', 'fdfs', 'dsfs');
var person2 = new Person('umme', 'fdfs', 'dsfs');
var person3 = new Person('umme', 'fdfs', 'dsfs');
console.log(Person.getHeadcount());
