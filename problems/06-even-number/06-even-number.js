/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */

function isEven(k) {
    return Math.round(k/2)==k/2 ? true : false;
}

//testing numbers up to 10
for(let i=0;i<10;i++){
    console.log(`${i}: ${isEven(i)}`);
}