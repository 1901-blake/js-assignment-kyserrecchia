/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/

function spliceElement(someArr, index) {
    let newArr = [];
    let len;
    for(let i=0; i<index; i++){
        newArr.push(someArr[i]);
    }
    return newArr;
}

console.log(spliceElement([0,1,2,3,4,5,6,7], 4));
