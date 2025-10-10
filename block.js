// Interview Question 
// what is a block in JS ?
// ANS. We can use block at a place wehre JS get only one statment but we can pass multiple statment at there so 
// block is wrapping or grouping that multiple data in single statement

// Like after if JS consider One statment 
if(true) true;
// but if we want insert more statement we can use block
if(true)
{                                                         //   This
    console.log("This is block of multiple statement "); //    is
    console.log("Thank you"); //                        //     a                     
}                                                      //      block



// Block-Scope
// There are some variables which are put into blocks which are only using in block and they have saprated memory space 
// in source call block scope
// There are two type of variable which hse block Scope :  1) let   2) const
// But var has only global scope if we declare in block or global so It shadowing same variable or says override variable 

// Ex block scope
{
    var a=10;
    let b=20;  // these two are scope variable which can not access outside block
    const c=30;//
}
console.log(b); // It generates error
console.log(c); // same as above

// shadowing ex
var a=100;
{
    var a=10;
}
console.log(a); // output 10
// it is a shadowing in which whereever you decalre your var but all var is store at same global space or scope
//  so it shadows value of same variable

// In case on let
let a = 100;  // other scope not global also because const and let has other scope like script
{
    let a =10; // block scope  
}
console.log(a); // Output : 100
// Because a=10 is stores at block scope so it is removed after block execution 


// illigall shadowing
// you can not take same let variable inside block with var type it generates error
let l1 = 20;
{ 
  var l1 = 300;  //Synttax error l1 is already declare
} 

// valid
var l2 = 20;
{ 
  let l2 = 300;  //OK 
} 