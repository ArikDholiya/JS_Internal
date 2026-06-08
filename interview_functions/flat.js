function flat(arr){
    let flatterArray = [];
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            flatterArray =  flatterArray.concat(flat(arr[i])); // flatterArray = [...flatterArray , ...flat(arr[i])];
        }else{
            flatterArray.push(arr[i]);
        }
    }

    return flatterArray;
}

let arr = [1,2,3,[4,5,[6,7,[8,9]]]];
console.log(flat(arr))