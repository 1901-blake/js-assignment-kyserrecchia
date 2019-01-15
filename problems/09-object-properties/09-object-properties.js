/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */

function objectProperties(someObj) {
    Object.keys(someObj).forEach(key => {
        console.log(`key: ${key}, value: ${someObj[key]}`);
    })
}

let dog = {
    breed: "St. Bernard",
    age: 2,
    weight: 140
}

objectProperties(dog);