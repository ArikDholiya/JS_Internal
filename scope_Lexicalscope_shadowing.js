// Easy Way to Remember
// Scope → "Where can I use this variable?"
// Lexical Scope → "Who can see whom based on structure?"
// Shadowing → "Inner variable hides outer one"
// Closure = a function + its lexical environment (the variables it remembers).
// -> A closure keeps access to variables from its lexical scope, even after the outer function is done.

// Illegal Shadowing (Important Interview Question)
/*
let a = 10;

{
  var a = 20; // ❌ SyntaxError
}
*/
// 👉 Why?
// let is block-scoped
// var is function-scoped
// This creates con
// flict → JS doesn't allow itx



function test() {
    var funcs = [];
  
    for (var i = 0; i < 3; i++) {
      funcs.push(function () {
        console.log(i);
      });
    }
  
    return funcs;
  }
  
  const result = test();
  
  result[0](); // 3
  result[1](); // 3
  result[2](); // 3