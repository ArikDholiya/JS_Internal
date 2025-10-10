const arr = [2,3,4,5];

const output = arr.filter((x) => x%2 === 1);
console.log(output);

const data = [{firstname : "Priyansh" , lastName : "Radadiya" , Age : 20},
              {firstname : "Khushi" , lastName : "Radadiya" , Age : 18},
              {firstname : "Samarth" , lastName : "Radadiya" , Age : 25},
              {firstname : "Rajal" , lastName : "Radadiya" , Age : 20},
]

// find the first name of people whoose age is less than 23
const DataOutput = data.filter(x => x.Age < 23).map(x => x.firstname);

console.log(DataOutput);