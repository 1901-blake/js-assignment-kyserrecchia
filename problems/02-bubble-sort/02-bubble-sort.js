/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */

//helper swap function
function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

//done with do-while to avoid unnecessary swapping
function bubbleSort(numArray) {
    let len = numArray.length;
    let swapped;
    do {
        swapped = false;
        for(let i=0;i<len;i++){
            if(numArray[i]>numArray[i+1]){
                swap(numArray,i,i+1);
                swapped = true;
            }
        }
    }
    while(swapped)
}

//random unsorted example array
let arrayEx = [2333, 33, 67, 17, 11, 21, 99, 109, 45, 43, 244];


bubbleSort(arrayEx);

for(let i=0; i<arrayEx.length;i++){
    console.log(arrayEx[i]);
}