const readLine = require('readline-sync');

let diceRolled = []
let eyeColors = ['blue','green','brown','hazel','black'];
let race = ['werewolf','vampire','','giant','dwarf','elf'];
let job = ['Black Smith','stone mason','miner','swords men','king','prince']
let specialSkill = ['wall vision', 'super jump','flight','mind control']
let character1 = {
//empty to start
}


createChar(character1,diceRolled);

function rolld6(){
    return Math.ceil(Math.random*6)
}

function rollDice(amount, list){
    for(let i=0; i<amount; i++){
        let roll = rolld6();
        console.log(`You rolled a ${roll}!`)
        list.push(roll)
    }
}

function sum(list){
    let sum=0
    for (let i=0; i<list.length; i++){
        sum += list[i];
    }
    console.log(`the total was: ${sum}.`)
    return sum;
}

function rollStat(list){
    list = [];
    rollDice(4, list);
    return sum(list)
}
function pickRandomChoice(choices){
    let randomNum = Math.floor(Math.random()*choices.length)
    return choices[randomNum]
}
function pickRandomChoice2(choices){
    let randomNum = Math.floor(Math.random()*choices.length)
    return choices[randomNum]
}
function pickRandomChoice3(choices){
    let randomNum = Math.floor(Math.random()*choices.length)
    return choices[randomNum]
}
function pickRandomChoice4(choices){
    let randomNum = Math.floor(Math.random()*choices.length)
    return choices[randomNum]
}


function createChar(list, character){
    character.name = readLine.question("Enter Character Name: ");
    character.race = pickRandomChoice2(race);
    character.eyeColor = pickRandomChoice(eyeColors);
    character.job = pickRandomChoice3(job);
    character.specialSkill = pickRandomChoice4(specialSkill)
    console.log('Rolling STR')
    character.strength= rollStat(diceRolled);
    console.log('Rolling DEX')
    character.dexterity= rollStat(diceRolled);
    console.log('Rolling CON')
    character.constitution= rollStat(diceRolled);
    console.log('Rolling INT')
    character.intelligence= rollStat(diceRolled);
    console.log('Rolling WIS')
    character.wisdom= rollStat(diceRolled);
    console.log('Rolling CHA')
    character.charisma= rollStat(diceRolled);
    character.luck = rolld6();
    displayChar(character)
}

function displayChar(char){
    console.log(`Name: ${char.name}`);
    console.log(`Race: ${char.race}`)
    console.log(`Job: ${char.job}`)
    console.log(`Eye color: ${char.eyeColor}`)
    console.log(`Special Skill: ${char.specialSkill}`)
    console.log(`STR: ${char.strength}`);
    console.log(`DEX: ${char.dexterity}`);
    console.log(`CON: ${char.constitution}`);
    console.log(`INT: ${char.intelligence}`);
    console.log(`WIS: ${char.wisdom}`);
    console.log(`CHA: ${char.charisma}`);
    console.log(`LUCK: ${char.luck}`)

}
console.log('---------------------------------')