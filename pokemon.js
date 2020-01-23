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
        // Check if health is less than number.
        if(this.health < number){
            // if less than return health as 0.
            return this.health = 0
        }else{
            // if not return the precise difference
            return this.health = this.health - number;
        }
   

  };
  this.attackOpponent = function (opponent){
    //   This should:
    //      Grab the opponents defense
    //      Subtract it from the attacker's attack.
    //      Update the defense with the difference (This is the Damage) 
    //      Return the new defense
    return opponent
  }
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
// squirtle.takeDamage(100000);
// squirtle.health;

///////////////
// Task #3 - `takeDamage()` Method
//  [] - Implement an `attackOpponent()` method for the `Pokemon` class 
//  which takes a `Pokemon` object as an argument (the opponent being attacked). 
//  This method should call the `takeDamage()` method of the opposing `Pokemon` and provide the appropriate damage as an argument.
/////////////// 






// Don't edit this line!
module.exports = Pokemon;
