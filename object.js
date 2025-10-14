const user = {
    name: 'Alice',
    age: 25,
    age: 30, // Duplicate key, last one will be considered
    "where do you live": 'Wonderland'
}
console.log(user.name); // Output: Alice
console.log(user["where do you live"]); // Output: Wonderland, because of space in key

user["city"] = "New York"; // Adding new key-value pair
user.study = 'Biology'; // Another way to add new key-value pair
console.log(user); // Output: New York

const property = "firstName";
const value = "John";
const user1 = {
    [property]: value, // Dynamic property name
    age: 28
}

//traverse in opbject
for(key in user){
    console.log(key, user[key]);
}


console.log("-------------------");
//ques: output of below code:
const a={};
const b={key:'b'};
const c={key:'c'};

a[b] = 123;
a[c] = 456;

console.log(a);  // Output: { '[object Object]': 456 }
console.log(a[b]);  // Output: 456
console.log(a[c]);  // Output: 456

console.log("-------------------");
// ques: what is json.stringify and parse
const obj2 = { name: "Alice", age: 25, city: "Wonderland" };
const jsonString = JSON.stringify(obj2); // Convert object to JSON string
console.log(jsonString); // Output: '{"name":"Alice","age":25,"city":"Wonderland"}'
const parsedObj = JSON.parse(jsonString); // Convert JSON string back to object
console.log(parsedObj); // Output: { name: 'Alice', age: 25, city: 'Wonderland' }

// stringify and parse is used to deep clone an object, and also used to store object in local storage

console.log("-------------------");
//ques: output of below code:
const arr1 = [...'hello'];
console.log(arr1);  // Output: ['h', 'e', 'l', 'l', 'o']

const obj1 = {...{a: 1, b: 2}};

console.log(obj1);  // Output: {a: 1, b: 2}

console.log("-------------------");
//ques: what is output of below code:
const obj3= {
    username: 'alice',
    age: 25,
    health: 100,
}
const data1 = JSON.stringify(obj3, ['age', 'health']); // Only include 'age' and 'health' properties
console.log(data1); // Output: '{"age":25,"health":100}' , ignore username property

console.log("------------------");

// ques: what's the output 
const shape = {
    radius: 10,
    diameter(){    //normal function
        return this.radius*2;
    },
    perimeter: ()=>{  //arrow function
        return 2*Math.PI*this.radius;
    }
}
console.log(shape.diameter()); // 20
console.log(shape.perimeter()); //NAN

console.log("------------------");
//ques: destructuring of object

const userObj = {
    name: "Alice",
    age: 25,
    fullName: {
        firstName: "Alice",
        lastName: "Mart",
        childObj:{
            childName: "bob",
            childFriend: {
                friend1: "jiyan",
                friend2: "hiya",
            }
        }
    }
}

const {fullName:{childObj: {childFriend: {friend1}}} }  = userObj;
console.log(friend1);

console.log("------------------");

//ques: what's output:
let bb = {greeting:"hey!"};
let cc;
cc = bb;
bb.greeting = "Hello!";
console.log(cc.greeting); // Hello! , it stores referance.

console.log("------------------");
const obj6= {a:1};
const obj7 = {a:1};
console.log(obj6 == obj7) //false
// console.log({a:1} == {a:1}) //false, both have different memory
// console.log( {a:1} === {a:1}) //false, same reason.

console.log("------------------");
// ques: what's output
let person = {name: "Alice"}
const members = [person]; //creates new memory reference
person = null;
console.log(members)  
//output:
// [
//     {
//         "name": "Alice"
//     }
// ]

console.log("------------------");

//ques: what's output
const valueObj = {number : 10};

function multiply(x = {...valueObj}){
    console.log(x.number *=2);
}

multiply(); //20 // x is clone object, so is refering other object.
multiply(); //20
multiply(valueObj); // 20, it will modify valueObj.
multiply(valueObj); //40
multiply(); //80

console.log("------------------");
//ques: what's the output:
function changeAgeAndReference(person){
    person.age = 30;
    person={
        name: "john",
        age:50,
    }
    return person;

}

const personObj1 = {
    name: 'alex',
    age: 25,
}
const personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1);  // {name: 'alex', age: 30}

console.log(personObj2); //{name: 'john', age: 50}


console.log("------------------");
//IMP Ques: clone object;
let obj8 = {
    name: 'alice',
    age: 34,
    address:{
        city: 'NYC',
        state: 'WA',
    }
}
const cloneObj1 = JSON.parse(JSON.stringify(obj8));
console.log(cloneObj1)
const cloneObj2 = {...obj8} // this will not deep clone after one level. only deep clone to first level
obj8.address.city = "90"
console.log(cloneObj2); 

const cloneObj3 = Object.assign({},obj8);  // this will not deep clone after one level. only deep clone to first level
console.log(cloneObj3); 


// best approach is by reccursive calling.

function deepCloneFunc(obj){
    const result = {};
    for(key in obj){

        if(typeof obj[key] === "object"){
            result[key] = deepCloneFunc(obj[key]);
        }else{
            result[key] = obj[key];
        }
    }
    return result;
}   
const cloneObj4 = deepCloneFunc(obj8);

console.log(cloneObj4);