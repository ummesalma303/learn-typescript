class user {
    name:string;
   age: number;
   constructor(name:string,age:number) {
       this.name = name;
       this.age = age
   }
   display():void{
       console.log(`${this.name} is a coder, his age is ${this.age}`)
   }
}


class Employee extends user {
    firstName: string;
    constructor(name:string,age:number, firstName: string ) {
       super(name,age)
       this.firstName = firstName
    }
    display():void{
        console.log(`${this.name} is a coder, his age is ${this.age} userId ${this.firstName}`)
    }
}

let user1 = new Employee('ghj',76,"23,87987");
// console.log()
user1.display()