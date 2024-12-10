// * ==================================2=====================================

/*
 todo: 1. Take the object from question 1  
 todo: 2. put all the values into an array with 2 ways that you’ve learned
*/

const obj = { number: 6043, age: 21, pt: 96 };

// First solution
const arrayOne = Object.values(obj)
console.log(arrayOne);

// second solution
const arrayTwo = []
for (const itm in obj){
    arrayTwo.push(obj[itm])
}
console.log(arrayTwo);
