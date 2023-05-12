// 2.4.1 Intro to Arrays

//create
let students =['Adam','Brad','Casey','David'];
let values = [1,2,3,4];

//accessing items in an array
console.log(students);
console.log(students[0])//beginning item has index 0
console.log(students[1])
console.log(students[2])
console.log(students[3])

 // formatting items in array
console.log('Student:' + students[0])
console.log('Student:' + students[1])
console.log('Student:' + students[2])
console.log('Student:' + students[3])

// //formatting items in array #2
console.log(`Student 2: ${students[0]}`)
console.log(`Student 2: ${students[1]}`)
console.log(`Student 2: ${students[2]}`)
console.log(`Student 2: ${students[3]}`)

// //changing an item
students[1]= 'Stephanie';
console.log(students);

// //push adds to the end
students.push('Eve');
console.log(students);
students.push('Eve,georgia');
console.log(students);


// //pop removes the last item
students.pop();
console.log(students);
//
// //shift removes the beginning item
students.shift();
console.log(students);
//
// //unshift adds and item to the beginning
students.unshift('zeke')
console.log(students)
students.unshift('Yvonne','Xavier')
console.log(students)

// //length of array = # items in it
numStudents = students.length;
console.log(numStudents);
//
// //how to access the Last item
let lastStudent = students[students.length - 1];
console.log(lastStudent);

//slice up a piece of original array
let fruits = ['apple', 'banana','orange','lemon','grape'];
let citrus = fruits.slice(2,4);
console.log(citrus)
// 1st number (2) is the starting index. Include it.
// 2nd number (4) is the stop BEFORE index. Exclude it
