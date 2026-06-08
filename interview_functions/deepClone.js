function deepClone(obj){
    if(typeof obj !== 'object' || obj ===null) return obj;

    if(Array.isArray(obj)){
        let copy = [];

        for(let i=0;i<obj.length; i++){
            copy[i] = deepClone(obj[i]);
        }

        return copy;
    }

    const copy = {};
    for(let key in obj){
        copy[key] = deepClone(obj[key]);
    }

    return copy;
}

const original = {
  name: "Priyansh",
  age: 25,
  skills: ["HTML", "CSS", "JavaScript"],
  address: {
    city: "Ahmedabad",
    state: "Gujarat"
  },
  projects: [
    { title: "Portfolio", completed: true },
    { title: "E-commerce", completed: false }
  ]
};

const cloned = deepClone(original);
cloned.name = 'Aric';
console.log(cloned);

console.log(original);