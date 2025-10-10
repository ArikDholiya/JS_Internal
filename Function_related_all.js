// DIFFERENCE BETWEEN FUNCTION STATEMENT & EXPRESSION
// DIFFERENCE OF HOISTING - If we called both function before it's declaration a() is run as it is 
// but here b is variable before asign function so that it initiallize by undefined at memory allocation phase so it generate error

a();// work normally
b();// gives error - b is not funtion


// Function Statement also known as funtion declaration - normal way 
function a()
{
    console.log("a called");
}

// Function Expression - Funtion returns it value in any variable
var b = function(){
    console.log("b called");
}

// works nomally
a();
b();

// anonymous funtion - A function without name is called..
// It gives Syntax error - Function statement require function name
//  use - we can use anonymous function where it returns value to function like in expression
function() {

}

// Named function Expression - same as function expression but funcation has it's own name
var b = function xyz(){
    console.log("b called");
}

xyz(); // it gives Reference error 

// Different between arguement & parameters
// Arguement - We can pass at time of function call Ex. - a(1,2,3);
// Parameters - We can pass at time of declaration of function Ex - function a(param1,param2,param3){}

// First-class Function - A first-class function in JavaScript refers to a function that can be treated like any other variable.