function debounce(fun, delay){
    let TimerID;

    return function(...args){
        clearTimeout(TimerID);

        TimerID = setTimeout(()=>{
            fun(...args)
        }, delay);
    }
}

let search = (text)=>{
    console.log(text);
}

let debounceSearch = debounce(search, 1000);

debounceSearch('E');
debounceSearch('Er');
debounceSearch('Eri');
debounceSearch('Erik');