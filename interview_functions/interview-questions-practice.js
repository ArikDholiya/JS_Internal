let x = 10;

function checkHoisting() {
  console.log(x);
  let x = 20; //reference error
}

checkHoisting();

// -------------------
foo(); //first. intially function will take priority in variable and function 

var foo;

function foo() {
  console.log('First');
}

foo = function() {
  console.log('Second');
};

foo(); //second


// -------------------
const user = new User('Alice');  

class User {
  constructor(name) {
    this.name = name;
  }
}

console.log(user.name); //reference error. class is not hoisted

// -------------------
const a = [];
const b = [];
const c = a;

console.log(a == b); //flase
console.log(a === b); // false
console.log(a === c); //true

// -------------------
console.log('1: Start');

setTimeout(() => {
  console.log('2: Timeout');
}, 0);

Promise.resolve().then(() => {
  console.log('3: Promise');
});

console.log('4: End');

// -------------------
setTimeout(() => console.log('A: Macrotask 1'), 0);

Promise.resolve().then(() => {
  console.log('B: Microtask 1');
  setTimeout(() => console.log('C: Macrotask 2'), 0);
});

Promise.resolve().then(() => console.log('D: Microtask 2'));

// -------------------
const user = {
  name: 'Alice',
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
};

setTimeout(user.greet, 1000);


console.log(0.1 + 0.2 === 0.3); //false
console.log(typeof null); //object
console.log(typeof (0 / 0)); //number

// What will be the order of execution?

console.log("start");

async function foo1() {
  console.log("A");
  await foo2();
  console.log("B");
}

async function foo2() {
  console.log("C");
}

setTimeout(() => {
  console.log("D");
}, 0);

foo1();

new Promise((resolve) => {
  console.log("E");
  resolve();
}).then(() => {
  console.log("F");
});

console.log("end");


//output
//start A c e end b f d
