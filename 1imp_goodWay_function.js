// Some developer use saparate function with loops and its output but this code is optimized version of that and also reusable functionallity

// A good way to use funcation and code optimization in same functions

const radius = [4, 2, 5, 1];

const calculate = function (radius, calc) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(calc(radius[i]));
    }
    return output;
}

const area = function (radius) {
    return Math.PI * radius * radius;
}

const diameter = function (radius) {
    return 2 * radius;
}

const cicumference = function (radius) {
    return 2 * Math.PI * radius;
}


console.log(calculate(radius, area));
console.log(calculate(radius, diameter));
console.log(calculate(radius, cicumference));

// One more inbuilt function for using function reusability map works with all array element with given arguement function 
// and give same output laike calculate
//  so calculate = map()

console.log(radius.map(area));
console.log(radius.map(diameter));
console.log(radius.map(cicumference));

// How map works
// map has small inbuit function which is acject same as calculate function

// If we call calculate function same as map then we add something in calculate function

// this is known as polly fill map
Array.prototype.calculate = function (calc) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(calc(radius[i]));
    }
    return output;
}

console.log(radius.calculate(area));
console.log(radius.calculate(diameter));
console.log(radius.calculate(cicumference));

Array.prototype.calculateAnything = function(cb){
    let result = [];
    for(let i=0;i<this.length; i++){
        result.push(cb(this[i], i, this));
    }
    return result;

}

console.log(radius.calculateAnything((num, i,arr)=>{
    return num*num;
}));