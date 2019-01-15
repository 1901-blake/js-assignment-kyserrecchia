/* 4. Factorial
Define function: factorial(k)
Use recursion to compute and return the factorial of some k.  */

function factorial(k) {
    //inapplicable case returns -1 as incorrect input flag
    if(k<0){
        return -1;
    }
    if(k==0 || k==1){
        return 1;
    }
    if(k>1){
        return factorial(k-1)*k;
    }
}

//test first twenty
for(let i=0; i<20; i++){
    console.log(factorial(i));
}