//Ques: evaluate +-*/

// evaluate("sum")(1)(2) // 3
// evaluate("subtract")(5)(3) // 2
// evaluate("multiply")(2)(3) // 6
// evaluate("divide")(6)(3) // 2

function evaluate(operation) {
  return function (a) {
    return function (b) {
      switch (operation) {
        case "sum":
          return a + b;
        case "subtract":
          return a - b;
        case "multiply":
          return a * b;
        case "divide":
          return a / b;
      }
    };
  };
}

//implement infinite funtion currying in javascript example add(1)(2)(3)(4)....(n)().

function add(x) {
  return function (y) {
    if (y) return add(x + y);
    return x;
  };
}

const sum = add(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)();

console.log(sum); // 55

//difference between currying and partial application in javascript with example

// Currying is the process of transforming a function that takes multiple arguments into a sequence of functions that each take a single argument.

//partial application is the process of fixing a certain number of arguments of a function, producing another function of smaller arity(number of parameter function receives).
// Example of Currying
function multiply(a) {
  return function (b) {
    return a * b;
  };
}
const curriedMultiply = multiply(2)(3); // 6
// Example of Partial Application
function sumPartial(a) {
  return function (b) {
    return a + b;
  };
}
const addFive = sumPartial(5); // Partially applied function
const result = addFive(3); // 8

//ques: manipulate dom using currying function
function updateElementText(id) {
  return function (text) {
    document.querySelector(`#${id}`).textContent = text;
  };
}
const updateHeader = updateElementText("header");
updateHeader("Hello World");

const ex1 = (a,e,f) => (b) => (c)=>(d) =>a + b+c +d;
// console.log(" functionlength !!!!", ex1.length); 

//IMP Ques: implement curry() which convert normal function to currying function

function curry(fn) {
  console.log("!!!",fn.length); //6 is equal to sumEx1's number of parameters
  return function curriedFUnc(...args){ // first time it is 1 
    if(args.length >= fn.length){
      return fn(...args);

    }else {
      return function(...next){ // next is 2nd time it is 2, so it passes [...args, ...next] = [1,2]
        console.log("next args!!!", args,next);
        return curriedFUnc(...args,...next);
      }
    }

  }
}

const sumEx1 = (a, b, c,d,e,f) => a + b + c + d + e + f;

const curriedSum = curry(sumEx1);
console.log(curriedSum(1)(2)(3)(4)(5)(6)); // 6
