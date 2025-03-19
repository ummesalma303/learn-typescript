let str : string = 'this is a day-2 practice'
// console.log(str)

// let message: string = 'Hello, TypeScript!';

// let h = document
// let heading = document.createElement('h1');
// heading.textContent = message;

// document.body.appendChild(heading);

let counter: number;
counter = 56; // compile error 
// console.log(counter);

// object type 

let person :{
    name : string,
    age: number,
}
person = {
    name: 'salma',
    age: 43
}
//  console.log(person)


//  function

function increment(counter:number) : number {
    return counter++
}

// console.log(increment(1))

// array
let items:(number|null)[] = [1, 2, 3, null];
// console.log(items)

// event parameter
// const button = document.getElementById('btn')
// document.addEventListener('click', function (event) {
//     console.log(event)
//     console.log(event.button); 
// });



// NOT operator
const pending: boolean = true;
const notPending = !pending; // false
// console.log(notPending); // false

let employee:object;
employee={
    name: 'umme',
    age: 999
}
// console.log(employee)

// array
// let skills:string[] = [];
// skills[0] = "Problem Solving";
// skills[1] = "Programming";
// skills.push('Software Design');

let skills:( string|number)[];
skills = ['Problem Sovling','Software Design','Programming'];
skills.push(100)
// console.log(skills.length);

/* ---------------------------------- Array --------------------------------- */
let color: [number, number, string] = [255, 0, "0"];
// console.log(color)

/* ---------------------------------- tuple --------------------------------- */
// let bgColor, headerColor: [number, number, number, number?];
// bgColor = [0, 255, 255, 0.5];
// headerColor = [0, 255, 255];
// console.log(bgColor,headerColor)


// let bgColor: [number, number, number, number?];
// bgColor = [0, 255,  0.5];
// // headerColor = [0, 255, 255];
// console.log(bgColor)

/* ---------------------------------- void ---------------------------------- */
function log(message): void {
    // console.log("messsage");
}

log('mmmmmmm')

// let useless: void = undefined;

// useless = 1; // error
// console.log(useless)



/* ---------------------------------- unknown ---------------------------------- */

// let result: unknown;

// result = 1;
// result = 'hello';
// result = false;
// result = Symbol();
// result = { name: 'John' };
// result = [1, 2, 3];
// console.log(result)



// let result: unknown;
// result = [1,2,3];

// const total = result.reduce((a: number, b:number ) => a + b, 0);
// console.log(total);




const fetchData = async (url: string): Promise<unknown> => {
    const response = await fetch(url);
    return await response.json();
};

const showPosts = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try {
        const posts = await fetchData(url); // unknown type
        
        (
            posts as { userId: number; id: number; title: string; body: string }[]
        ).map((post):void => {
            // return console.log(post.title)
        });
    } catch (err) {
        console.log(err);
    }
};

showPosts();

/* --------------------- TypeScript String Literal Types -------------------- */

let click: 'click';
click = 'click'; 
console.log(click)

let mouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';
mouseEvent = 'click';
mouseEvent = 'dblclick';
console.log(mouseEvent)