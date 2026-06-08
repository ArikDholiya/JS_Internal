function promiseRace(promises) {
    if(promises.length === 0) return Promise.resolve([]);
    
    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            Promise.resolve(promise)
            .then((res) => {
                resolve(res);
            })
            .catch((error) => reject(error));
        })
    })
}

const p1 = Promise.resolve("API Data");
const p2 = new Promise((res) => setTimeout(() => res("User Data"), 1000));
const p3 = 100; // normal value

promiseRace([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
  
const a1 = Promise.resolve("Success");
const a2 = Promise.reject("Failed");
const a3 = Promise.resolve("Done");

promiseRace([a1, a2, a3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));