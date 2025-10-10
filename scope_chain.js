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

// this is concept of scope if we so scope chain c() is lexically inside a() & a() is lexically inside global 
// so c() finds variable value from a() & global and a() finds variable value from global but global doesn't finds from a() & c()
// It is full stands on execution context  