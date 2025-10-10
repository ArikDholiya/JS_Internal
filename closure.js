// clouser : A function that has access to variables in its parent scope, even after the parent function has completed execution
// Ex

function x(){
    var a=7;

    function y(){
        console.log(a); // It returns value but doesnt take value but it takes reference so if we change value of a in 
        // x() funtion so it print last updated value of a
    }
    a=100;
    return y;  // It doesn't return only function y but also return lexical value of a from their parent function which have strong relation....
}

var z = x();

console.log(z); // it return y function

z(); // output : 100 but !7         //     9... so when we call z() function it execute y function and give value of a which is clouser and
                                    //      whenever we runs z() function it get reference of a variable and its clouser