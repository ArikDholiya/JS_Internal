const arr = [2,3,4,5];

const double = function(x){
    return x*2;
}

const triple = function(x){
    return x*3;
}

const binary = function(x){
    return x.toString(2);
}



let output = arr.map(double);
console.log(output);

output = arr.map(triple);
console.log(output);

output = arr.map(binary);
console.log(output);

// Second way 

let output2 = arr.map((x) => x*2);
console.log(output2);

output2 = arr.map((x) => x*3);
console.log(output2)

output2 = arr.map((x) => x.toString(2));
console.log(output2);
