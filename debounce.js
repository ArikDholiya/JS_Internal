//Ques1: create a button UI and add debounce as below:
//  --> show  "Button clicked! [x]times"  in console on button click
//  --> increase "triggered [y] times" only if button is not clicked in last 800ms

const button = document.querySelector(".increament_btn");
const incrementPressed = document.querySelector(".increment_pressed");
const triggeredTimes = document.querySelector(".triggered_times");

var pressedCount =0;
var triggeredCount =0;

function debounce(func, delay){
    let timerId;
    return function(...args){
        if(timerId){
            clearTimeout(timerId);
        }
        timerId = setTimeout(()=>{
            func(...args);
        }, delay);
    }
}

const debounceCounter = debounce(function(){
        triggeredCount++;
        triggeredTimes.textContent = triggeredCount;
        console.log(`Button clicked! ${pressedCount} times`);
    }, 800);
button.addEventListener("click", function(){
    pressedCount++;
    incrementPressed.textContent = pressedCount;
    debounceCounter();
});


//ques2: implement throttle function

//  --> show  "Button clicked! [x]times"  in console on button click
//  --> increase "triggered [y] times" at every 800ms interval on button click

const throttle = function(func, limit){
    let inThrottle=false;
    return function(...args){
        if(!inThrottle){
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }

    }
}

const throttleCounter = throttle(function(){
    triggeredCount++;
    triggeredTimes.textContent = triggeredCount;
    console.log(`Button clicked! ${pressedCount} times`);
}, 800);
// button.addEventListener("click", function(){
//     pressedCount++;
//     incrementPressed.textContent = pressedCount;
//     throttleCounter();
// })