var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, firstName) {
        var _this = _super.call(this, name, age) || this;
        _this.firstName = firstName;
        return _this;
    }
    Employee.prototype.display = function () {
        console.log("".concat(this.name, " is a coder, his age is ").concat(this.age, " userId ").concat(this.firstName));
    };
    return Employee;
}(user));
var user1 = new Employee('ghj', 76, "23,87987");
// console.log()
user1.display();
