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