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
