//call is used with function when we want to attach object to any funciton.
//apply is also used to bind object with function, only differenc from call is it takes argument is form of array.
//bind: it returns function which we can call later, and it also takes arguments as call takes. 

const obj1 = { name: "Alice"}
function sayHello(age, gender){
    console.log("hello", this.name, "he/she is a", age,"and he/she is", gender, "old!" );
}
sayHello(14, "Male"); //hello undefined he/she is a 14 and he/she is Male old!
sayHello.call(obj1, 23, "Female"); //hello Alice he/she is a 23 and he/she is Female old!

sayHello.apply(obj1, [25,"Male"]); //hello Alice he/she is a 25 and he/she is Male old!
const bindFunc = sayHello.bind(obj1, 34, "Femal"); //biund provides new funciton which we can call later
bindFunc();

console.log("-------------------");

const age = 10;

var person1 = {
    name: "alice",
    age: 20,
    getAge: function(){
        console.log(this.age);
    }
}
var person2 = {age:24};
person1.getAge.call(person2); // output: 24, person2's age
person1.getAge.bind(person2)() //24


//ques: whats the output:
var status = "1";
setTimeout(() => {
    const status = "2"
    const data = {
        status: "3",
        getStatus(){
            return this.status;
        }
    }
    console.log(data.getStatus()); //3
    console.log(data.getStatus.call(this)); //1 not 2, cause this will never point to function, and setTImeout is takes function, so this will pointitng to window
}, 0);

//ques: call printAnimal such that it will print all animals in object.
const animals = [
    {species: "lion", name: "king"},
    {species: "whale", name: "queen"}
];
function printAnimals(i){
    this.print = function(){
        console.log("#"+ i +  " " +this.species + ":" + this.name);
    }
    this.print();
}
animals.forEach((obj,ind)=>{
    printAnimals.call(obj, ind);
})

//ques: append an array to another array

const array1 = ["a", "b"];
const array2 = [1,2,3];

array1.push.apply(array1,array2);
console.log(array1);

//ques: find min/max in array.
const array3 = [1,3,5,6,8,9,79];
console.log(Math.max(1,3)); //3
console.log(Math.max.apply(null, array3)); //79
console.log(Math.min.apply(null, array3)); //1

//ques: bound function
function f(){
    console.log(this);
}
const userObj2 = {
    g: f.bind(null),
}
userObj2.g();  //window object. 
// if strict mode is present than null. f.bind(null) forces this to be null, but in non-strict mode, JavaScript automatically substitutes the global object when this is null or undefined.

//ques: bind chaining
function f1(){
    console.log(this.name);
}
f1 = f1.bind({name:"john"}).bind({name:"Anm"});
f1();  // function will only bind one time once it bounds one time than it will always bounded with it, it will not override


//ques: change checkpassword method to log proper message at method calling
function checkpassword(success, failure){
    let password = prompt("enter password", "");
    if(password === "1234"){
        success();
    }else{
        failure()
    }
}

let userObj3 = {
    name: "Alice",
    loginSuccess(){
        console.log(`${this.name} is logged in successfully`);
    },
    loginFailed: ()=>{
        console.log(`${this.name} is failed to logged-in`);
    }
}
// checkpassword(userObj3.loginSuccess, userObj3.loginFailed); //fix calling arguments to print login status.
// checkpassword(userObj3.loginSuccess.bind(userObj3), userObj3.loginFailed.bind(userObj3)); //success will show name, failur will not, cause it is arrow function.

//follow up ques: how to pass login with different arguments.
let userObj4 = {
    name: "Alice",
    login(result){
        console.log(this.name + (result ? " login successfull" : " login failed"));
    }
}
// checkpassword(?,?);
// checkpassword(userObj4.login.bind(userObj4,true),userObj4.login.bind(userObj4,false) );

console.log("-----------------");
// ques: explicit binding with arrow function
const age1 =10;
var person = {
    name:'piyush',
    age1: 20,
    getAgeArrow:()=>{
        console.log(this.age1);
    },
    getAge(){
        console.log(this.age1);
    }
}
var person2 = {age1: 24};
person.getAge.call(person2); //24
person.getAgeArrow.call(person2); // undefined, cauase arrow function will pointing to window object

console.log("-----------------");
//ques: polyfill for call method

Function.prototype.myCall = function(context = {}, ...args){
    if(typeof this !== 'function'){
        throw new Error(this, " its not callable");
    }
    context.fn = this;
    context.fn(...args);

}
person.getAge.myCall(person2); //24 

console.log("-----------------");
//ques: polyfill for apply method

Function.prototype.myApply = function(context={}, args=[]){
    if(typeof this !== 'function'){
        throw new Error(this," its not callable");
    }
    if(!Array.isArray(args)){
        throw new TypeError("CreateListFromArrayLike called on non-object");
    }

    context.fn = this;
    context.fn(...args);
}

console.log("-----------------");
//ques: polyfill for bind method

Function.prototype.myBind = function(context={}, ...args){
    if(typeof context !== 'function'){
        throw new Error(this, ' its not callable');
    }
    context.fn = this;
    return function(...newArgs){
        context.fn(...args, ...newArgs);
    }   
}
