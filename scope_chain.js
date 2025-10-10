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
console.log(b);

// this is concept of scope if we so scope chain c() is lexically inside a() & a() is lexically inside global 
// so c() finds variable value from a() & global and a() finds variable value from global but global doesn't finds from a() & c()
// It is full stands on execution context  