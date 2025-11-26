Array.prototype.myMap = function(callback){
    const result = [];
    for(let i=0;i<this.length; i++){
        result.push(callback(this[i], i, this));
    }
    return result;
}

Array.prototype.myFilter = function(callback){
    const result = [];
    for(let i=0;i<this.length;i++){
        if(callback(this[i], i, this)){
            result.push(this[i]);
        }
    }
    return result;
}



Array.prototype.myReduce = function(callback, initialValue){
    const arr = this;
    const initialIndex = initialValue ? 0 : 1;
    let accumulator = initialValue ? initialValue : arr[0]; 

    for(let i= initialIndex; i<arr.length; i++){
        accumulator = callback(accumulator, arr[i], i, arr);
    }
    return accumulator;
}