
function PromisePolyfil(executor){
    let onFulfilledCallbacks = []
    let onRejectedCallbacks = []
    let state = "pending"
    let value

    function resolve(val){
        if(state !== "pending") return;
        
        state = "fulfilled";
        value = val;

        onFulfilledCallbacks.forEach((callback)=>{
            callback(value);
        });
    }

    function reject(err){
        if(state !== "pending") return;
        
        state = "rejected";
        value = err;

        onRejectedCallbacks.forEach((callback)=>{
            callback(value);
        });
    }

    this.then = function(onFulfilled, onRejected){
        if(state == "fulfilled"){
            onFulfilled(value);
        }
        if(state == "rejected"){
            onRejected(value);
        }

        onFulfilledCallbacks.push(onFulfilled);
        return this;
    }
    
    this.catch = function(onRejected){
        if(state == "rejected"){
            onRejected(value);
        }

        onRejectedCallbacks.push(onRejected);
        return this;
    }
    executor(resolve, reject);
}
const examplePromise = new PromisePolyfil((resolve, reject)=>{
    setTimeout(()=>{
        resolve(2)
    }, 2000);
});

examplePromise.then((res)=>(console.log(res))).catch(err=>console.log(err));