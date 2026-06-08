function curry(fn){
    return function curried(...args){
        if(args.length >= fn.length){
            return fn(...args);
        }
        else{
            return function(...nextArgs){
                return curried(...args, ...nextArgs)
            }
        }
    }
}

// A simple function that takes 3 arguments
const sum = (a, b, c) => a + b + c;

const curriedSum = curry(sum);

// Test cases:
console.log(curriedSum(1)(2)(3)); // Expected: 6
console.log(curriedSum(1, 2)(3)); // Expected: 6 (if your curry is flexible)
console.log(curriedSum(1, 2, 3)); // Expected: 6