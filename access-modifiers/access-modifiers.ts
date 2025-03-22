/* ------------------------- private modifier ------------------------- */
class Person {
  
  constructor(public ssn: string,
    private firstName: string,
    private lastName: string, 
    readonly country: string, ){ }
  public getFullName():string{
    return `${this.firstName} ${this.lastName} and he live ${this.country}`;
  }
  public getSsn():string{
    return `${this.ssn} `;
  }
}

const person1 = new Person('153-07-3130', 'John', 'Doe','bd');
// console.log(person1.getFullName())
let ss = person1.ssn = 'sssssssss'
let firstName = person1.firstName = 'sssssssss' // is not support change and access
let bd = person1.bd = 'sssssssss' // it's only not support modified but it allowed access outer scope
// console.log(person1.ssn)
// console.log(person1.firstName)
// console.log(person1.country)


/* -------------------------------- protected modifiers ------------------------------- */
class Person4 {
  protected ssn: string;
  private firstName: string;
  private lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person4('9990', 'John', 'Doe','bd');
console.log(person.ssn)