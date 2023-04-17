//parameters are placeholder variables that allow us to
//reuse functions

// example1
// function printYes(){
//     console.log("yes")
// }
//
// printYes();
// printYes();
// printYes();

//example 2: With parameter
// function printText(text){
//     console.log(text)
// }
// printText("happy Thursday");
// printText("I was born yesterday ");

//return statements provide values to the rest of the program
//returned value scan be used by other parts of the code
//console.log does not return values for the rest of your code

//example 3: without return
// function double(n){
//
//     console.log(n*2)
// }
//
// double(21);
// double(66);
// double(911);


//example 4
// function triple(n){
//     return(n*3)
// }
// let lives = triple(3);
// lives -= 1;
// lives += 2;
// console.log(lives);
// console.log(triple(2));

//scope is the part of the program where the binding(value of
//a variable) is visible
//Global scope: created outside {}, accessible everywhere
//local scope: created inside specific {}, accessible only there

//example 5:
// let x=10;
// if (x>1){
//     let y = 20;
//     let z = 30;
//     console.log(x+y+z)
// }
// console.log(x); //y and x are not accessible outside the {}

//example 6: no naming conflict
// function half(n){ //local n
//     return(n/2)
// }
// let n = 10;
// console.log(half(100));
// console.log(n)