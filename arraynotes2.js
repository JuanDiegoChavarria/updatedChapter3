//arrays are 'pass by reference'
//this means you can accidentally change an array
//if you change another array that it's equal to

// let nums = [5,4,3,2,1];
// let newNums = nums;
// newNums[0]= 12;
// console.log('nums: ' + nums);
// console.log('newNums: ' +newNums);

//option 1: use a for loop to push individual items
//into a new array, one at a time
// let Vals = [5,4,3,2,1];
// let newVals = [];
// for (let i = 0; i < vals.length; i++){
//     newVals.push(Vals[i]);
// }
// newVals[0]=12;
// console.log('Vals: '+Vals);
// console.log('newVals: ' + newVals);

//option2 make a shallow copy
//Note: only works for 1d arrays
//Note: you cannot edit items as you can copy them over
// let ages = [5,4,3,2,1,];
// let newAges = [...ages];
// newAges[0]=12;
// console.log('ages: ' +ages);
// console.log('newAges: ' + newAges)


//let's write a function to do the above
// let values = [5, 4, 3, 2, 1]
// compareArrays(values)
// function compareArrays(arr){
//     let newVals = []
//     for (let i=0; i<arr.length; i++) {
//         newVals.push(arr[i]);
//     }
//     newVals[0]=12
//     console.log('vals: ' + vals)
//     console.log('newVals: ' + newVals)
// }

//updating a top 3 list
// let highScores = [107, 99, 98]
// let newScore = 101
// let newHighScores = []
// for (let i=0; i<highScores.length; i++){
//     if (highScores[i]>= newScore){
//         newHighScores.push(highScores[i])
//     } else {
//         newHighScores.push(newScore)
//         newScore=0
//     }
// }
// console.log(newHighScores)