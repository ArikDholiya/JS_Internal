function once(fun){
    let isCalled = false;

    return function(...args){
        if(!isCalled){
            fun(...args);
            isCalled = true;
        }
    }
}

let init = ()=>{
    console.log('Initialized');
}

let onceInit = once(init);

onceInit();
onceInit();
onceInit();

let twiceInit = once(init);

twiceInit();
twiceInit();
twiceInit();
