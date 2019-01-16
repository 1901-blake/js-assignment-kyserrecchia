/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/

function printShape(shape, height, character) {
    shape = shape.toLowerCase();

    switch(shape){
        case 'square':
            squareFunc(height, character);
            break;

        case 'triangle':
            triangleFunc(height, character);
            break;

        case 'diamond':
            diamondFunc(height, character);
            break;
    }
}

function squareFunc(height, character){
    let str = "";
    //make string
    for(let i=0; i<height; i++){
        str += character;
    }
    //print it height number of times
    for(let i=0; i<height; i++){
        console.log(str);
    }
}

//test case for squareFunc
// printShape("Square", 3, "%");

//two for-loop version here, probably less efficient
// function triangleFunc(height, character){
//     let str = "";
//     for(let i=1; i<height+1; i++){
//         for(let j=0; j<i; j++){
//             str += character;
//         }
//         console.log(str);
//         str = "";
//     }
// }

function triangleFunc(height, character){
    let str = "";
    for(let i=0; i<height; i++){
        str += character;
        console.log(str);
    }
}
//test case for triangleFunc
// printShape("Triangle", 3, "$");

function diamondFunc(height, character){
    let str = "";
    let spaceStr = "";
    let charStr = "";
    let bottomHalfStringArr = [];
    let offset = Math.floor(height/2);

    for(let i=0; i<=Math.floor(height/2); i++){
        for(let j=0; j<offset; j++){
            spaceStr += " ";
           
        }
        str += spaceStr;
        for(let k=0; k<(2*i + 1); k++){
            charStr += character;
        }
        str += charStr;
        console.log(str);
        //clear strings
        spaceStr = "";
        charStr = "";
        bottomHalfStringArr.push(str);
        str = "";
        //fix offset
        offset--;
    }
    bottomHalfStringArr.pop();
    let len = bottomHalfStringArr.length;
    for(let i=0; i<len; i++){
        console.log(bottomHalfStringArr.pop());
    }
    
}

printShape("Diamond", 7, "*");