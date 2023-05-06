    const readline = require("readline-sync");
let items = [];
let cost1 = [];
let cost2 = [];
let cost3 = [];
let cost4 = [];
let cost5 = [];
            let menu = ['Chicken: $5.25','Beef: $6.25','Tofu: $5.75'];
            console.log(`${menu}`);
            let beverages = ['CocaCola: $3.00','Sprite: $2.50','Pepsi: $2.50'];
            console.log(`${beverages}`);
            let sizes = ['Small Cup: $1.00','Medium Cup: $1.75','Large Cup: $2.25'];
            console.log(`${sizes}`);
            let fries = ['Small Fries: $1.00','Medium Fries: $1.50','Large Fries: $2.00'];
            console.log(`${fries}`);
            let ketchupPackets =['0.25 per packet'];
            console.log(`${ketchupPackets}`)
            let answer1 = readline.question("what type of sandwich do you want? \n Your answer: ");
    items.push(answer1);
    if(answer1 == 'chicken') {
        cost1.push(5.25);
    } else if(answer1 == 'beef') {
        cost1.push(6.25);
    } else  {
        cost1.push(5.75);
    }
    console.log(cost1);

            let answer2 = readline.question("would you like a beverage? \n Your answer: ");
    items.push(answer2);
    if(answer2 == "yes"){
        let answer3 = readline.question("what type of beverage do you want? \n Your answer: ");
        items.push(answer3);
        if (answer3 == 'cocacola'){
            cost2.push(3.00);
        }if(answer3 == 'sprite'){
            cost2.push(2.50);
        }else if (answer3 == 'pepsi'){
            cost2.push(2.50);
        }
        console.log(cost2);
        let answer4 = readline.question("what size do you want your cup to be? \n Your answer: ");
        items.push(answer4);
        if(answer4 == 'small') {
            cost3.push(1.00);
        }if(answer4 == 'medium') {
            cost3.push(1.75);
        }if(answer4 == 'large') {
            cost3.push(2.25);
        }else if (answer4 == 'no') {
            console.log("no drink");
        }
    }
    console.log(cost3);

    let answer5 = readline.question("Do you want french fries? \n Your answer: ");
    items.push(answer5);
    if (answer5 = 'yes'){
        let answer6 = readline.question("what size do you want them ? \n Your answer: ");
        items.push(answer6);
        if (answer6 == 'small') {
                let answer7 = readline.question("do you want to mega size them ? \n Your answer: ");
                items.push(answer7);
            if(answer7 == 'yes'){
                cost4.push(2.00);
            }else if(answer7 == 'no mega size option');
        }else if(answer6 =='medium'){
            cost4.push(1.50);
        }else if(answer6 == 'large'){
            cost4.push(2.00);
        }else if (answer5 == 'no') {
            console.log("no french fries");
        };
    };
    console.log(cost4)

    let value1 = [cost1];
    let value2 = [cost2];
    let value3 = [cost3];
    let value4 = [cost4];
        console.log(`${value1} + ${value2} + ${value3} + ${value4} = ${value1+value2+value3+value4}`);
    console.log(`your total is ${value1+value2+value3+value4}`);
    let answer8 = readline.question("Do you want ketchup packets? \n Your answer: ");
    items.push(answer8);
    if (answer8 == "yes"){
        let answer9 = readline.question("how many ketchup packets? \n Your answer: ");
        items.push(answer9);
    }if (answer9 == 1,2,3,4,5,6,7,8,9,10){
        cost5.push(0.25)
    }





