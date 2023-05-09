const readline = require("readline-sync");
    let items = [];
    let cost = [];
    let menu = ['Chicken: $5.25','Beef: $6.25','Tofu: $5.75']
    console.log(`${menu}`)
    let beverages = ['CocaCola: $3.00','Sprite: $2.50','Pepsi: $2.50']
    console.log(`${beverages}`)
    let sizes = ['Small: $1.00','Medium: $1.75','Large: $2.25']
    console.log(`${sizes}`)
    let fries = ['Small: $1.00','Medium: $1.50','Large: $2.00']
    console.log(`${fries}`)
    let answer1 = readline.question("what type of sandwich do you want? \n Your answer: ")
    items.push(answer1)
    if(answer1 == 'chicken') {
        cost.push(5.25)
    } else if(answer1 == 'beef') {
        cost.push(6.25)
    } else  {
        cost.push(5.75)
    }
    console.log(cost)

    let answer2 = readline.question("would you like a beverage? \n Your answer: ")
    items.push(answer2)
    if(answer2 == "yes"){
        let answer3 = readline.question("what type of beverage do you want? \n Your answer: ");
        items.push(answer3)
        if (answer3 == 'cocacola'){
            cost.push(3.00)
        }if(answer3 == 'sprite'){
            cost.push(2.50)
        }else if (answer3 == 'pepsi'){
            cost.push(2.50)
        }
        console.log(cost)
        let answer4 = readline.question("what size beverage do you want it? \n Your answer: ");
        items.push(answer4)
        if(answer4 == 'small') {
            cost.push(1)
        }if(answer4 == 'medium') {
            cost.push(1.75)
        }if(answer4 == 'large') {
            cost.push(2.25)
        }else if (answer4 == 'no') {
            console.log("no drink")
        }
    }
    console.log(cost)

    let answer5 = readline.question("Do you want french fries? \n Your answer: ");
    items.push(answer5)
    if (answer5 = 'yes'){
        let answer6 = readline.question("what size do you want them ? \n Your answer: ");
        items.push(answer6)
        if (answer6 == 'small') {
            let answer7 = readline.question("do you want to mega size them ? \n Your answer: ");
            items.push(answer7)
            if(answer7 == 'yes'){
                cost.push(2.00)
            }else if(answer7 == 'no mega size option');
        }else if(answer6 =='medium'){
            cost.push(1.50)
        }else if(answer6 == 'large'){
            cost.push(2)
        }else if (answer4 == 'no') {
            cost.push('no french fries')
        }
    };
        console.log(cost)