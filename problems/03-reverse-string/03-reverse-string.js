/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */

//simplest solution I could think of
//just make a new string and dump into it from the first in reverse
function reverseStr(someStr) {
    let len = someStr.length;
    let newStr = "";
    for(let i=len-1;i>=0;i--){
        newStr += someStr[i];
    }
    return newStr;
}

console.log(reverseStr("!won desrever s'tI"));      