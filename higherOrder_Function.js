// Higher Order Function - A function takes other function as arguement and returns a function as arguement is known as higherOrder function
// Here b is higher order function and fun a as argument so it is callback function

function a(){
    console.log("Namaste");
}

function b(a){
    a();
} 