//Ques: make code only run once in javascript ?

let view;

function   likeTheVideo() {
    view = 'NOTHING';
    console.log('you liked video of', view);

}
likeTheVideo(); // you liked video of NOTHING
likeTheVideo(); // you liked video of NOTHING

// Solution: Using a closure to ensure the function runs only once
function likeTheVideoOnce(){
    let liked = false;

    return function(view){
        if(liked){
            console.log('you already liked the video of', view);
        }else{
            liked = true;
            console.log('you liked video of', view);
        }
    }
}

const likeOnce = likeTheVideoOnce();

likeOnce('JavaScript Tutorial'); // you liked video of JavaScript Tutorial
likeOnce('JavaScript Tutorial'); // you already liked the video of JavaScript Tutorial


//Ques: once polyfill

function once(func, context){
    let called = false;
    let result; 
    return function(){
        if(func){
            called = true;
            result = func.apply(context || this, arguments);
            // result = func.call(context || this, ...arguments);
            func = null;
        }
        return result;
    }

}

const initialize = once(function(a,b){
    console.log('Initialization done', a,b);
    return 42;
});
const result1 = initialize(1,2); // Initialization done 1 2
const result2= initialize(1,2); 
console.log(result1 , result2);  // 42 42

