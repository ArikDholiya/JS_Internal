// scope chain with lexical

// output = 10;
function a(){
    c();
    function c(){
        console.log(b);
    }
}

var b = 10;



// output = Error of not-definded;
function a(){
    c();
    function c(){
        var b = 10; 
    }
}
function outer(){
    let count =0;
    function inner (){
        count++;
        console.log(count);
    }
    return inner;
}
const fn = outer();
fn(); // 1
fn(); // 2
fn(); // 3


// console.log(insideFunc); // Error : not defined
// this is concept of scope if we so scope chain c() is lexically inside a() & a() is lexically inside global 
// so c() finds variable value from a() & global and a() finds variable value from global but global doesn't finds from a() & c()
// It is full stands on execution context  

var e=1;
function sum(a){

    return function(b){
        return function(c){
            return a+b+c+e;
        }
    }
}
// console.log(sum(2)(3)(4)); // 10


function createBase(num){
    return function(x){
        console.log(num +x);
    }
}
var addSix = createBase(6);
// addSix(10);
// addSix(21);