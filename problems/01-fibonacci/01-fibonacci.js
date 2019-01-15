/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */

function fib(n) {
    //inapplicable case returns -1 as incorrect input flag
    if(n<=0){
        return -1;
    }
    //base cases
    if(n==1 || n==2){
        return 1;
    }
    //all the rest
    if(n>2){
        return fib(n-1) + fib(n-2);
    }
}

//test first ten!
for(let i=0; i<10; i++){
    console.log(`fib(${i}): ${fib(i)}`);
}