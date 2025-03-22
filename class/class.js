var user = /** @class */ (function () {
    function user(name, age) {
        this.name = name;
        this.age = age;
    }
    user.prototype.display = function () {
        console.log("".concat(this.name, " is a coder, his age is ").concat(this.age));
    };
    return user;
}());
var user1 = new user('umme', 89);
var user2 = new user('f', 9);
user1.display();
user2.display();
/* -------------------------------------------------------------------------- */
var Person = /** @class */ (function () {
    function Person(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var person = new Person(171280926, 'John', 'Doe');
var person2 = new Person(1712, 'Rony', '--');
console.log(person);
console.log(person2);
