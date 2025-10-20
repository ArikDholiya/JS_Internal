//this:
//normal function: inside a Regular Function this will be window object. inside object method, this refers to the object before the dot this is called implecit binding, ex: user.greet(), so inside greet function this keyword referes user object. inside nested function, for normal function this keyword referes window object.  normal function point to immediate parent.

// arrow functions don’t bind their own this. They use the this value from where they were created. means it take this's value as whatever it parent normal function's this's value is
function fun1() {
  let name = "Alice";
  console.log(this); // empty, windo obj.
  return this.name;
}

const arrowFun1 = () => {
  let name = "Alice";
  console.log(this); // empty, windo obj.
  return this.name;
};

fun1();
arrowFun1();
console.log("---------------");
const userObj1 = {
  name: "Alice",
  greet() {
    console.log(this.name); // Alice, this referes to userObj1
    function innerNomrmalFun() {
      console.log(this); //window obj
    }
    innerNomrmalFun();

    const innerArrowFun = () => {
      console.log(this); //userObj1
    };
    innerArrowFun();
  },
};
const userObj2 = {
  name: "Alice",
  greet: () => {
    console.log(this.name); // empty , cause this referes to window obj.
    const inner = () => {
      console.log(this); //window object weather inner is arrow or normal function.
    };
    inner();
  },
};
userObj1.greet();
userObj2.greet();

//ques: output

const userObj3 = {
  name: "Alice",
  logMessage() {
    console.log(this.name);
  },
};
userObj3.logMessage(); // Alice
setTimeout(() => userObj3.logMessage(), 3000); //Alice  //The arrow function ()=>userObj3.logMessage() creates a new function that, when executed after 3s, calls userObj3.logMessage() as a method of userObj3 again.
setTimeout(userObj3.logMessage, 3000); //undefined
//reason:
/*
This is the trap.
Here, you’re passing the function reference itself — not calling it on the object.
When setTimeout executes that function, it does not know anything about userObj3 anymore.
It just calls the function in the global context (or window in browsers, undefined in strict mode).
Hence, inside logMessage, this is not userObj3, so this.name is undefined.
*/

//this in constructor/class

class UserClass {
  constructor(userName) {
    this.firstName = userName;
  }
  getName() {
    const firstName = "Alice";
    console.log(this.firstName); // this refers UserClass, and it access all data which is present in contructor.
  }
}

const userObj4 = new UserClass("Bob");
userObj4.getName(); //Bob

console.log("-----------------");

//ques: what is the result of accessing its ref? why?

function makeUser() {
  return {
    name: "john",
    ref: this,
  };
}
let userObj5 = makeUser();

console.log(userObj5.ref); //window object
//counter Ques: what change should you do for returning name as john.
//answer:

function makeUser1() {
  return {
    name: "john",
    ref() {
      return this.name; // make ref as function. this function will point to its parent object, so it this is pointing to returning  object.
    },
  };
}
let userObj6 = makeUser1();
console.log(userObj6.ref()); //john

console.log("-----------------");
const userObj7 = {
  name: "piyush",
  greet() {
    //normal function
    return `hello, ${this.name}!`; // this will points to userObj7
  },
  farewell: () => {
    //arrow function
    return `goodbye, ${this.name}!`; //inside arrow function, this value is always this of the outer scope. so in this case, we dont have any parent function so this will be pointing to window object
  },
};
console.log(userObj7.greet()); //hello piyush!
console.log(userObj7.farewell()); //goodbye, !

console.log("-----------------");

//ques: create calculator object which reads from user and provide mul and sum methods.

let calculator = {
  read() {
    this.a = +prompt("enter value of number 1", 0);
    this.b = +prompt("enter value of number 2", 0);
  },
  sum() {
    console.log(this.a + this.b);
  },
  mul() {
    console.log(this.a * this.b);
  },
};

calculator.read(); // takes input from user
calculator.sum(); // returns sum of two number
calculator.mul(); // returns multip[lication of two number.

console.log("-----------------");

// ques: whats the output, most tricky
var length = 4;
function callback() {
  console.log(this.length); 
}

const object1 = {
  length: 5,
  method1(fn) {
    fn(); // output: 4, cause fn is independent from object1, so this will be pointing to window
  },
  method2(){
    arguments[0]();   // arguments = [callback, 2, 3], so it will print length of arguments array. so output: 3
    
  }
};
object1.method1(callback);
object1.method2(callback,2,3);

console.log("-----------------");

//question: implement calc
// const result  =  calc.add(10).multiply(20).substact(5).divide(2);

const calc = {
  total: 5,
  add(n){
     this.total += n;
     return this;
  },
  multiply(n){
    this.total *=n;
    return this;
  },
  divide(n){
    this.total /=n;
    return this;
  },
  substract(n){
    this.total -= n;
    return this;
  }
}
const result =  calc.add(10).multiply(20).substract(5).divide(2);
console.log(result.total);
