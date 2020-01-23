// Your code here!
///////////////
// Task1 
//  [x] - Construct and initialize a `Pokemon` object by passing in 5 arguments 
//  that corresponds to the following 5 properties in order: `.name`, `.attack`, `.defense`, `.health`, and `.type`.
/////////////// 

function Pokemon(name,  attack, defense, health, type) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.health = health;
    this.type = type;
    }

    const charmander = new Pokemon("Charmander", 100, 110, 130, "fire");


// Don't edit this line!
module.exports = Pokemon;
