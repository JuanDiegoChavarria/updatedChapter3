
//1
// function positive(n){
//     let pop = [];
//     for (let i = 1; i <= n; i++){
//         pop.push(i);
//     }
//     console.log(pop);
// }
// positive(32);


//2
// function lastElement(arr){
//     console.log( )
//         if(arr[arr.length - 1] <= 0){
//             console.log('invalid')
//         }
//
// } lastElement( ['a', 'b', 'c', 'd' ,'e'] )
// lastElement( [7, 5, 3, 1, 0, -2] )


//3
// function replace(CertainNum, x) {
//     let number = [];
//     for (let i = 0; i < CertainNum.length;i++){
//         number.push(CertainNum[i]);
//         number[i] = x;
//     }
//     console.log(number)
// }
// replace([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 123);


//4
// function replace(certainnum, x) {
//     let number = [];
//     for (let i = 0; i < certainnum.length;i++){
//         number.push(certainnum[i]);
//         number[i] = x;
//     }
//     console.log(number)
//     //don't know how to make a new original one
// }
// replace([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 123);


//5
// function comparing(arr) {
//     let lastval = arr.length - 0;
//     let firstval = arr[0];
//     let comparedarr = [];
//
//     if (lastval > firstval){
//         for (let i = 0; i < arr.length;i++){
//             comparedarr.push(arr[i]);
//             comparedarr[i] = lastval;
//         }
//
//         console.log(comparedarr);
//     } else if (lastval < firstval){
//     for (let i = 0; i < arr.length;i++){
//
//         comparedarr.push(arr[i]);
//         comparedarr[i] = firstval;
//     }
//     console.log(comparedarr);
// }
// }
// comparing([1, 2, 3 ,3  4,]);
// function everySecond(arr){
//     for (let i = 2; i<arr.length; i=i+2){
//         console.log(arr[i])
//     }
// } everySecond([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]);
//7 function
    // biggerThanFour(arr){
    // for (let i =0; i<arr.length; i++)
    // { let item = arr[i];
    // if (item > 4){
    // console.log(item);
    // }
    // }
    // }
// biggerThanFour([-10, -5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]);
// 8
// function biggerThanNum(arr, num){
// for (let i =0; i<arr.length; i++){
// let item = arr[i];
// if (item > num){
// console.log(item);
// }
// }
// }
// biggerThanNum([-10, -5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60], 20);