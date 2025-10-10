
// Core concept :
// It is also hoisting for internal because like var it defines undefinded at memory allocation but 
// let only execute after initiallization otherwise it generates reference error

// So it is a concept of Temporal dead jone

// Reference error in console
console.log(a);

let a =10;
var b = 100;


// Correct way

let a1 =10;
console.log(a);
var b = 100;

// different between const & let

// let - we can initiallize at anywhere after declare
let a2;
a2=100; // It is correct

// const - We can not initiallize at anywhere we only intiallize at time of declaration
const c = 1000;


// some theory for const

// SyntaxError - missing initiallization error
const c2 ; 

// type error
const c1 = 10;
c1=20;