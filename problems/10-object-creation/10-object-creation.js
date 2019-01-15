/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

let SpiderMan = {
    name: 'Peter Parker',
    age: 16
}

function SpiderHam(name, age){
    this.name = 'Peter Parker';
    this.age = 16;
}

let SpiderHammy = new SpiderHam('Peter Porker', 40);

class ModernSpider {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

let MilesMorales = new ModernSpider('Miles Morales', 14);





