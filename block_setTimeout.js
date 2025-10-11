//Ques : block scope and set timeout

function a(){

    for(var i=0;i<5;i++){
        setTimeout(()=>{
            console.log(i);
        }, i*1000);
    }
}
a();  // prints 5 five times because var is function scoped and by the time the timeout executes, the loop has completed and i is 5.


// Solution 1: Using let instead of var
function a(){

    for(let i=0;i<5;i++){
        setTimeout(()=>{
            console.log(i);
        }, i*1000);
    }
}
a(); // prints 0,1,2,3,4 each after 1 second because let is block scoped and preserves the value of i at each iteration.

// Solution 2: Using an IIFE (Immediately Invoked Function Expression)
function a(){

    for(var i=0;i<5;i++){
        (function(i){
            setTimeout(()=>{
                console.log(i);
            }, i*1000);
        })(i);
    }
}
a(); // prints 0,1,2,3,4 each after 1 second because the IIFE creates a new scope for each iteration, preserving the value of i.

//solution 3: Using a separate function to create a new scope
function a(){

    for(var i=0;i<5;i++){
         function fn1(i){
            setTimeout(()=>{
                console.log(i);
            }, i*1000);
        }
        fn1(i);
       
    }
}
a(); // prints 0,1,2,3,4 each after 1 second because we created a new function scope with fn1 and passed i as an argument, preserving its value at each iteration.