const readline = require("readline-sync");
let items = [];
let cost = [];
let ordered = []
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
    boughtSandwich = 1
    cost.push(5.25);
    ordered.push('chicken')
} else if(answer1 == 'beef') {
    boughtSandwich = 1
    cost.push(6.25);
    ordered.push('beef')
} else  {
    boughtSandwich = 1
    cost.push(5.75);
    ordered.push('tofu')
}
console.log(cost);

let answer2 = readline.question("would you like a beverage? \n Your answer: ");
items.push(answer2);
if(answer2 == "yes"){
    let answer3 = readline.question("what type of beverage do you want? \n Your answer: ");
    items.push(answer3);
    if (answer3 == 'cocacola'){
        cost.push(3.00);
        ordered.push('cocacola')
    }if(answer3 == 'sprite'){
        cost.push(2.50);
        ordered.push('sprite')
    }else if (answer3 == 'pepsi'){
        cost.push(2.50);
        ordered.push('pepsi')
    }
    console.log(cost);
    let answer4 = readline.question("what size do you want your cup to be? \n Your answer: ");
    items.push(answer4);
    if(answer4 == 'small') {
        boughtDrink = 1
        cost.push(1.00);
        ordered.push('small')
    }if(answer4 == 'medium') {
        boughtDrink = 1
        cost.push(1.75);
        ordered.push('medium')
    }if(answer4 == 'large') {
        boughtDrink = 1
        cost.push(2.25);
        ordered.push('large')
    }else if (answer4 == 'no') {
        console.log("no drink");
    }
}
console.log(cost);

let answer5 = readline.question("Do you want french fries? \n Your answer: ");
items.push(answer5);
if (answer5 = 'yes'){
    let answer6 = readline.question("what size do you want them ? \n Your answer: ");
    items.push(answer6);
    if (answer6 == 'small') {
        let answer7 = readline.question("do you want to mega size them ? \n Your answer: ");
        items.push(answer7);
        if(answer7 == 'yes'){
            boughtFries = 1
            cost.push(2.00);
            ordered.push('mega sized fries')
        }else if(answer7 == 'no mega size option');
    }else if(answer6 =='medium'){
        boughtFries = 1
        cost.push(1.50);
        ordered.push('medium')
    }else if(answer6 == 'large'){
        boughtFries = 1
        cost.push(2.00);
        ordered.push('large')
    }else if (answer5 == 'no') {
        console.log("no french fries");
    };
};
console.log(cost)

cost.push()
{
    let ketchup = readline.question("How much ketchup packets would you like? ($0.25 each): ")
    cost.push(ketchup * 0.25)
    ordered.push(` and ${ketchup} ketchup packets.`)
}

let total = 0;
for(let i = 0; i < cost.length; i++) {
    total += cost[i]
}

if (boughtSandwich + boughtDrink + boughtFries === 3) {
    cost = total - 1
}
cost = cost + (cost * 0.07);
cost = cost.toFixed(2);

console.log(`Your order is a ${ordered}`)
console.log(`Your total is then, $${cost}!`)