// Your code here!
///////////////
// Task #1 - Define a `Pokemon` Class
//  [x] - Construct and initialize a `Pokemon` object by passing in 5 arguments 
//  that corresponds to the following 5 properties in order: `.name`, `.attack`, 
//  `.defense`, `.health`, and `.type`.
/////////////// 

function Pokemon(name,  attack, defense, health, type) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.health = health;
    this.type = type;
    this.takeDamage =  function (number) {
        if(this.health < number){
            return this.health = 0
        }else{
            return this.health = this.health - number;
        }
   

  };
    }

    const charmander = new Pokemon("Charmander", 100, 110, 130, "fire");

///////////////
// Task #2 - `takeDamage()` Method
//  [] - Implement a `takeDamage()` method for the `Pokemon` class which takes 
//  a number as an argument and reduces the `.health` of the `Pokemon` by 
//  that number.
/////////////// 


const squirtle = new Pokemon('Squirtle', 110, 100, 120, 'water');
squirtle.takeDamage(20);
squirtle.takeDamage(100000);
squirtle.health;

// this.takeDamage =  function (number) {
//     return this.health - number;
//   };


// Don't edit this line!
module.exports = Pokemon;
