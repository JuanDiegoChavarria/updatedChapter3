

const readline = require('readline-sync');

let diceRolled = []
let eyeColors = ['blue','green','brown','hazel','black'];
let Race = ['Human','Fairy','Goblin','Goliath','Mexican','Asian','Dwarf','Monkey','Giant','God','Angel','Devil','Demon','American'];
let Ability = ['super strenth', ' super vision', 'flying ability']
let character1 = {
//empty to start
}

createChar(character1, diceRolled);
function rolld6(){
    return Math.ceil(Math.random()*6)
}

function rollDice(amount, list){
    for (let i=0; i<amount; i++){
        let roll = rolld6();
        console.log(`You rolled a ${roll}!`);
        list.push(roll);
    }
}
function sum(list){
    let sum=0;
    for (let i=0; i<list.length; i++){
        sum+=list[i]
    }
    console.log(`The total was: ${sum}.`)
    return sum;
}

function rollStat(list){
    list = [];
    rollDice(6, list);
    return sum(list);
}

function pickRandomChoice(choices){
    let randomNum = Math.floor(Math.random()*choices.length)
    return choices[randomNum];
}

function pickRandomChoice2(choices){
    let randomNum = Math.floor(Math.random()*choices.length)
    return choices[randomNum];
}
function createChar(character, list){
    character.name = readline.question("Enter Character Name: ");
    character.eyeColor = pickRandomChoice(eyeColors);
    character.Race = pickRandomChoice2(Race);
    console.log("Rolling Strength")
    character.strength = rollStat(diceRolled);
    console.log("Rolling Speed");
    character.speed = rollStat(diceRolled);
    console.log("Rolling Magic")
    character.magic = rollStat(diceRolled);
    console.log("Rolling Skill")
    character.skill = rollStat(diceRolled);
    console.log("Rolling Intelligence")
    character.intelligence = rollStat(diceRolled);
    console.log("Rolling Wisdom")
    character.wisdom = rollStat(diceRolled);
    console.log("Rolling Durability")
    character.durability = rollStat(diceRolled);
    character.luck = rolld6();
    console.log(character)
}

function displayChar(char){
    console.log('-------------------------');
    console.log(`Name: ${char.name}`);
    console.log(`Race: ${char.race}`);
    console.log(`Eye Color: ${char.eyeColor}`);
    console.log(`STR: ${char.strength}`);
    console.log(`SPE: ${char.speed}`);
    console.log(`DEX: ${char.magic}`);
    console.log(`CON: ${char.skill}`);
    console.log(`INT: ${char.intelligence}`);
    console.log(`WIS: ${char.wisdom}`);
    console.log(`DUR: ${char.durability}`);
    console.log(`LUCK: ${char.luck}`);
    console.log('-------------------------------');
}