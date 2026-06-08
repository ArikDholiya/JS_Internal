function promiseAllSettled(promises) {
    let settledPromise = [];
    let count =0;

    if(promises.length === 0) return Promise.resolve([]);

    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            Promise.resolve(promise)
            .then((res) => {
                settledPromise[index] = res;
            })
            .catch((error) => {
                settledPromise[index] = error;
            })
            .finally(()=>{
                count++;
                if(promises.length === count) resolve(settledPromise);
            })
        })
    })
}

const p1 = Promise.resolve("Success");
const p2 = Promise.reject("Failed");
const p3 = new Promise((res) =>
  setTimeout(() => res("After 1 sec"), 1000)
);

promiseAllSettled([p1, p2, p3]).then((res) => {
  console.log(res);
});