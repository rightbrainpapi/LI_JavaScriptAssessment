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
    this.initHealth = health
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
    //     [x]  Grab the opponents defense
    //     [x]  Subtract it from the attacker's attack to get the difference (this is the damage points)
    //     [x]  Call the opponent.takeDamage with the damage points as an arguement.
    //     [x]  Return the opponents health
    //     [x]  Account for cases where defense is greater than the attack
    var damage;
    if (this.attack > opponent.defense){ // Determined the damaged points by the opponense defense from the attackers attack save it in a variable 
        damage = this.attack - opponent.defense; // call the opponents takeDamage with the newly determined damage points as an arguement 
        opponent.takeDamage(damage);
      return opponent.health
    }
    else {
        return opponent.health = opponent.health - 1; // this can be refactored to opponent.takeDamage(1)
    }
    

   
  };
  this.display = function(){
    //   This should return a tring with the:
    //      []`.name` in all caps
    //      []`.type` in all caps and parenthesis
    //      []`.health` with a forward-slash "/"
    //      [] followed by the `.health` the `Pokemon` was initialized with

    nameUp = this.name.toUpperCase();
    typeUp = this.type.toUpperCase();
    currentHealth = this.health;
   initHealth = this.initHealth



    return `${nameUp} (${typeUp}) ${currentHealth}/${initHealth}`
  }
    }

    var charmander = new Pokemon("Charmander", 100, 110, 130, "fire");

///////////////
// Task #2 - `takeDamage()` Method
//  [x] - Implement a `takeDamage()` method for the `Pokemon` class which takes 
//  a number as an argument and reduces the `.health` of the `Pokemon` by 
//  that number.
/////////////// 


var squirtle = new Pokemon('Squirtle', 110, 100, 120, 'water');


///////////////
// Task #2.1 - `takeDamage()` Method
//  [x] - should have a method called takeDamage() which takes 
//  a number as an argument and reduces the health 
//  of the pokemon who called it by that number.
/////////////// 

squirtle.takeDamage(20);
squirtle.takeDamage(100000);
// squirtle.health;


///////////////
// Task #3 - `attackOpponent()` Method
//  [] - Implement an `attackOpponent()` method for the `Pokemon` class 
//  which takes a `Pokemon` object as an argument (the opponent being attacked). 
//  This method should call the `takeDamage()` method of the opposing `Pokemon` and provide the appropriate damage as an argument.
/////////////// 

charmander = new Pokemon("Charmander", 100, 110, 130, "fire");
squirtle = new Pokemon('Squirtle', 110, 100, 100, 'water');

charmander.attackOpponent(squirtle);

///////////////
// Task #4 - `display()` Method
//  [] - Implement a `display()` method for the `Pokemon` class which takes no 
//  arguments and returns a string with the Pokemon's `.name` in all caps, `.type` 
//  in all caps and in parenthesis, and `.health` with a forward-slash, " / ", followed by the `.health` the `Pokemon` was initialized with.
/////////////// 


const bulbasaur = new Pokemon("bulbasaur", 7, 9, 35, "grass/poison");
bulbasaur.display()





// Don't edit this line!
module.exports = Pokemon;
