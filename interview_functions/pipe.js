function pipe(...fns){
    return function(args1){
        let acc = args1;
        return fns.reduce((acc, fn)=>{
            return fn(acc);
        },acc);
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

const result = pipe(square, multiply3, add2);

console.log(result(2));