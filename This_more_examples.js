
const calc = {
    total: 5,
    add(n){
       this.total += n;
       return this;
    },
    multiply(n){
      this.total *=n;
      return this;
    },
    divide(n){
      this.total /=n;
      return this;
    },
    substract(n){
      this.total -= n;
      return this;
    }
  }
  const result =  calc.add(10).multiply(20).substract(5).divide(2);
  console.log(result.total);
  