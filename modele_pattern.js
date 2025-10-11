//Ques : what is module pattern in javascript ?

// modele_pattern is a design pattern used to create encapsulated and reusable code in JavaScript. It allows you to create private and public members within a module, helping to avoid polluting the global namespace and providing a way to organize code.
var module = function () {
  function privateFunc() {
    console.log("I am private");
  }

  function publicFunc() {
    console.log("I am public");
    privateFunc();
  }

  return {
    publicFunc,
  };
};

const myModule = module();
myModule.publicFunc(); // I am public \n I am private
// myModule.privateFunc(); // Error: privateFunc is not defined
