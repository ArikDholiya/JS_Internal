function throttle(fun, delay){
    let isThrottled = false;

    return function (...args) {
        if (!isThrottled) {
            fun(...args);
            isThrottled = true;

            setTimeout(() => {
                isThrottled = false;
            }, delay);
        }
    }
 
}

let logs = (text)=>{
    console.log(text);
}

let throttleLogs = throttle(logs, 3000);

setInterval(()=>throttleLogs('Hey'), 100);
