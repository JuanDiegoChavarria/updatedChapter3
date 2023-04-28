const readline=require('readline-sync');

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
    return Math.ceil(Math.random()*6)
}
