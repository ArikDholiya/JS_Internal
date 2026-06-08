
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


  const debounce = function(cb, delay){
    let timer;

    return function(...args){
      clearTimeout(timer);
      timer = setTimeout(()=>cb(...args), delay);
    }
  }

  const throttle  = function(cb, interval){
    let lastCall = 0;
    return function(...args){
        if(Date.now() - lastCall > interval){
          lastCall = Date.now();
          cb(...args);
        }
    }
  }

  