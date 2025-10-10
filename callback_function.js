// callback function - A function which we passed inside other funcation is known as ..
// here function b is callback function
function a(cb)
{
    return cb();
}

a(function b(){

})

// Clouser with event listener for data hiding
function attech(){
    let count =0;
    document.getElementById("clickMe").addEventListener("click",function xyz(){
        console.log("Button Clicked",++count);
    })
}

attech();
// by that fucntion callback , clouser and also data hiding also which is good way here count variable is inside 
// clouser of attech in memory allocation