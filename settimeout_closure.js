// Settimeout is different for var and let 

// Understanding with ex of var
function a(){
    for(var i=1;i<=5;i++)
    {
        setTimeout(function(){
            console.log(i);
        }, i*1000)
    }
}
// output : it gives output 6 6 6 6 6 
// Reason : var type variable has globl scope and javascript doesn't wait for timeout so for loop works for 5 times in 1st second
//          after 5 settimeout block print and also it doesn't hold value of i but it holds reference of i so it prints all time 6.
//  in-short : var has global scope so all changing in i is do at global or overrid to i

// if we want to work with var
function a(){
    for(var i=1;i<=5;i++)
    {
        function f1(i){
            setTimeout(function(){
               console.log(i);
            }, i*1000)
        }
        close(i);
    }
}
// Here we saw we can use i as parameter and parameter also have generally block scope so we can get output 1 2 3 4 5


// Understanding with ex of let
function a(){
    for(let i=1;i<=5;i++)
    {
        setTimeout(function(){
            console.log(i);
        }, i*1000)
    }
}
// output : it gives output 1 2 3 4 5
// Reason : we know let has block scope so all time settimeout refering different memory location so it prints different values
