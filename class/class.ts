class user {
     name:string;
    age: number;
    constructor(name,age) {
        this.name = name;
        this.age = age
    }
    display():void{
        console.log(`${this.name} is a coder, his age is ${this.age}`)
    }
}

let user1 = new user('umme',89)
let user2 = new user('f',9)
user1.display()
user2.display()


/* -------------------------------------------------------------------------- */

class Person {
    ssn;
    firstName;
    lastName;

    constructor(ssn:number, firstName:string, lastName:string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

let person = new Person(171280926, 'John', 'Doe');
let person2 = new Person(1712, 'Rony', '--');
console.log(person)
console.log(person2)