/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */

function substring(someStr, j, k) {
    let newStr = "";
    for(let i=j; i<k; i++){
        newStr += someStr[i];
    }

    return newStr;
}

console.log(substring('hello', 0, 3));