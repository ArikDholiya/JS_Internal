//ques : memoize polifill  || implement memoize/caching function

const memoize = (fn) => {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args); 
    if (!cache[key]) {
      const result = fn.call(this, ...args);
      cache[key] = result;
    }
    return cache[key];
  };
};
const clusyproduct = memoize((n1, n2, n3) => {
  for (let i = 0; i < 1e8; i++) {}
  return n1 * n2 * n3;
});

console.time("Time1: 5");
console.log(clusyproduct(5, 6, 7));
console.timeEnd("Time1: 5");

console.time("Time2: 5");
console.log(clusyproduct(5,6,7));
console.timeEnd("Time2: 5");
