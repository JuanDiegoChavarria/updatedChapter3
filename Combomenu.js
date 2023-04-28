    const readline = require("readline-sync");
let items = [];
let cost = [];
            let menu = ['Chicken: $5.25','Beef: $6.25','Tofu: $5.75']
            console.log(`${menu}`)
            let beverages = ['CocaCola: $3.00','Sprite: $2.50','Pepsi: $2.50']
            console.log(`${beverages}`)
            let sizes = ['Small: $1.00','Medium: $1.75','Large: $2.25']
            console.log(`${sizes}`)
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
    items.push()
    if(answer2 == "yes"){
        let answer3 = readline.question("what type of beverage do you want? \n Your answer: ");
        items.push()
        console.log(answer3)
        let answer4 = readline.question("what size beverage do you want it? \n Your answer: ");
        items.push(answer4)
        console.log(answer4)

    } else {
        console.log("no drink")
    }

    if(answer2 == 'small') {
        cost.push(1)
    } else if(answer2 == 'medium') {
        cost.push(1.75)
    } else if(answer2 == 'large') {
        cost.push(2.25)
    } else {
        cost.push(0)
    }
    console.log(cost)

    let menuPrices = {
        Chicken: 5.25,
        Beef: 6.25,
        Tofu: 5.75,
    }

    let beveragePrices = {
        CocaCola: 3.00,
        Sprite:2.50,
        Pepsi:2.50,
    }

    let sizePrices = {
        Small: 1.00,
        Medium: 1.75,
        Large: 2.75,
    }
