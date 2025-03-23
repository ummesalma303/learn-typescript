let inputAge:number = 56
class Person {
    constructor( public age: number,
        public firstName: string,
        public lastName?: string ) { }

    
    public get FullName() : string {
        return this.firstName + ' ' +this.lastName
    }
    
}

const person1 = new Person(34, 'umme', 'fffff');
person1.age = inputAge
console.log(person1.FullName)