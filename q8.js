// ? 8. Use Array Destructuring to get all of the names from this Nested Array
// hint: Search about destructuring nested arrays.

const moreStudents = ['Chris', ['Ahmad', 'Antigoni'], ['Toby', 'Sam']];

//! Answer :
const [student1, [student2, student3], [student4, student5]] = moreStudents
console.log(student1);
console.log(student2);
console.log(student3);
console.log(student4);
console.log(student5);
