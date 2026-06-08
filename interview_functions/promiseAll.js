function promiseAll(promises) {
    let resolvedPromise = [];
    let count = 0;

    if(promises.length === 0) return Promise.resolve([]);

    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            Promise.resolve(promise)
            .then((res) => {
                resolvedPromise[index] = res;
                count++;

                if (promises.length === count) return resolve(resolvedPromise);
            })
            .catch((error) => reject(error));
        })
    })
}

const p1 = Promise.resolve("API Data");
const p2 = new Promise((res) => setTimeout(() => res("User Data"), 1000));
const p3 = 100; // normal value

promiseAll([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
  
const a1 = Promise.resolve("Success");
const a2 = Promise.reject("Failed");
const a3 = Promise.resolve("Done");

promiseAll([a1, a2, a3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));