class Person {
    private static headcount: number = 0;

    constructor( 
       
        private firstName: string,
        private lastName: string, 
        private jobTitle: string
    ) { 
        Person.headcount ++
    }

    
    public get FullName() : string {
       
        return this.firstName + ' ' +this.lastName
    }
    public static getHeadcount() {
        return Person.headcount;
    }
    
}

const person1 = new Person('umme','fdfs','dsfs');
const person2 = new Person('umme','fdfs','dsfs');
const person3 = new Person('umme','fdfs','dsfs');
console.log(Person.getHeadcount()); 








