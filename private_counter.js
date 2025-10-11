//ques: how would you implement a private counter in JavaScript using closures?

function createCounter(){
    let _counter = 0; // private variable

    function increment(number){
        _counter += number;
    }
    function getCounter(){
        return _counter;
    }   

    return {
        increment,
        getCounter
    }
}

const counter = createCounter();

console.log(counter.getCounter()); // 0
counter.increment(5);
console.log(counter.getCounter()); // 5
counter.increment(3);
console.log(counter.getCounter()); // 8