// These types of function are known as constructor function and we can use for encaptualition by that our data is also hiding from other function 
// because count hse block scope only


function Counter(){
    var count =0;
    this.incrementcouter = function(){
        count++;
    }
    this.decrementcouter = function(){
        count--;
    }
}

// to access

var counter1 = new Counter();
counter1.incrementcouter();
counter1.decrementcouter();