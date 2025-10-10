
// Hoisting is mechanism where function and variables declaration are moved to top on their containing scope 
// during compilation phase before code is executed

// It means you can use variable and funcaion call before they are formally declared 
// main concept of Execution context 


// before initiallization undefined nd function working as it is
console.log(a);
view();
console.log(fun);

var a = 7;

function view(){
    console.log("Namaste Javascript");
}

var fun = () =>{
    console.log("Namaste Javascript");
}


// After initiallization it works nomally
console.log(a);
view();
console.log(fun);