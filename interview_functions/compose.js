function compose(...fns){
    return function(args1){
        let acc = args1;
        
        return fns.reduceRight((acc, fn)=>{
            return fn(acc);
        },acc);

        // alternative
        // for(let i=fn.length-1;i>=0;i--){
        //     acc = fns[i](acc);
        // }
        // return acc;
    }
}

function add2(x) {
  return x + 2;
}

function multiply3(x) {
  return x * 3;
}

function square(x) {
  return x * x;
}

const result = compose(square, multiply3, add2);

console.log(result(2));