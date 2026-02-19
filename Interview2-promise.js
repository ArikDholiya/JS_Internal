let x = 10;

function test() {
  console.log(x);
  var x = 20;  //use let and check : if var than undefined and if let than reference error
}

test();
/*
Key concept: Temporal Dead Zone (TDZ)

let variables are hoisted

BUT they are not accessible until their declaration is executed

The time between entering the scope and the let declaration is called TDZ

var is hoisted and initialized to undefined

No TDZ with var

"let variables are hoisted but remain in the Temporal Dead Zone until initialized, so accessing them before declaration throws a ReferenceError."
*/

var a = {}, 
    b = { key: 'Sher' }, 
    c = { key: 'Lock' };

a[b] = "Sherlock";
a[c] = "Holmes";

console.log(a[b]); // Holmes


const promise1 = Promise.resolve('First');
const promise2 = Promise.resolve('Second');
// const promise3 = Promise.reject('Third');
const promise4 = Promise.resolve('Fourth');

const runPromises = async () => {
  const res1 = await Promise.all([promise1, promise2]);
  const res2 = await Promise.all([ promise4]);
  console.log("🚀 ~ practice-js.js:43 ~ runPromises ~ res2:", res2);
  
  return [res1, res2];
};

runPromises()
  .then(res => console.log(res))
  .catch(err => console.log(err));


  let count = 0;

function increment() {
  count++;
}

setInterval(increment, 1000);
setTimeout(() => console.log(count), 5000);  //5
