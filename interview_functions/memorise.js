function memorise(fun){
    let cachedData = {};
    return function(...args){
        let cacheKey = JSON.stringify(args);

        if(cachedData[cacheKey]){
            console.log('from cache')
            return cachedData[cacheKey];
        }
        
        cachedData[cacheKey] = fun(...args);
        return cachedData[cacheKey];
    }
}

const  factorial = (num)=>{
    if(num<=1) return 1;

    return num * factorial(num-1);
}

let memFactorial = memorise(factorial);
console.log(memFactorial(5));
console.log(memFactorial(4));
console.log(memFactorial(3));
console.log(memFactorial(5));
console.log(memFactorial(3));
console.log(memFactorial(5));