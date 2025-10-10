// Reduce is basically working with all element of array but passes only one value 
// Ex - sum of arr , max of arr , min of arr etc.....

const arr = [2,4,5,3,6,1,23,43,66,12,34,46,44,65,78,98,56,43];

// normal way to sum

let output = function(arr){
    let sum = 0;
    for(var i=0;i<arr.length;i++){
        sum += arr[i];
    }

    return sum;
}

console.log(output(arr));

// By reduce code is optimized but there is some different way from map and filter 
// it has 2 arguement one is acc means any type of variable which we want like sum and 
//  2nd is curr means current element of array

output = arr.reduce(function(acc,curr){
 acc+= curr;

 return acc;
},0); // 0 is initial value of acc

console.log(output);

// finding max from arr through reduce

outputMax = arr.reduce(function(acc,curr){
    if(acc < curr)
        acc = curr;

    return acc;
},0);

console.log(outputMax);

// other complicated example

const data = [{firstname : "Priyansh" , lastName : "Radadiya" , Age : 20},
              {firstname : "Khushi" , lastName : "Radadiya" , Age : 18},
              {firstname : "Samarth" , lastName : "Radadiya" , Age : 25},
              {firstname : "Rajal" , lastName : "Radadiya" , Age : 20},
]

// get List of full name - "Priyansh Radadiya"

const dataOutput = data.map((x)=> x.firstname + " " + x.lastName);
console.log(dataOutput);

// get how many have same age and give count of them
// like 20 : 2 , 18 : 1 , 25 : 1
// here we get array in acc so initial value is {} - empty

const AgeData = data.reduce(function(acc,curr){

    if(acc[curr.Age]){
        acc[curr.Age] = ++acc[curr.Age];
    }
    else{
        acc[curr.Age] = 1;
    }
    return acc;
},{});
console.log(AgeData);

// Mixed up 
const DataOutput = data.filter(x => x.Age < 23).map(x => x.firstname);
console.log(DataOutput);