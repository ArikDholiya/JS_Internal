//Question: optimise below code using closure

/*
function find(index){
    let a=[];
    for(let i=0;i<100000;i++){
        a[i] = i*i;
    }
    return a[index];
}

console.time(6);
console.log(find(6));
console.timeEnd(6);

console.time(7);
find(7);
console.timeEnd(7);
*/

// answerwith using closure
function find(){
    let a=[];
    for(let i=0;i<1000000;i++){
        a[i] = i*i;
    }
    return function(index){
        return a[index];
    };
}
const findIndex = find();
console.time(6);
console.log(findIndex(6));
console.timeEnd(6);
console.time(7);
findIndex(7);
console.timeEnd(7);

