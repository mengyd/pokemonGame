import {Pokemon} from './Pokemon';
import {died} from './functions';
import {turnOrder} from './functions';

let poke1 = new Pokemon('Pikachu', 70, 80, 20, 100, 40);
let poke2 = new  Pokemon('Meowth', 65, 90, 20, 100, 35);

console.log(poke1.getName() + " VS " + poke2.getName());
console.log("**************************")

let end = false;

while(end != true){
    if (turnOrder(poke1, poke2).getName() === poke1.getName()){
        poke1.attack(poke2);
        if(died(poke2)){
            end = true;
            console.log(poke1.getName() + " has won!");
            break;
        }
        
        console.log(">>>");
        
        poke2.attack(poke1);
        if(died(poke1)){
            end = true;
            console.log(poke2.getName() + " has won!");
        }
    }else{
        poke2.attack(poke1);
        if(died(poke1)){
            end = true;
            console.log(poke2.getName() + " has won!");
            break;
        }
        
        console.log(">>>");
        
        poke1.attack(poke2);
        if(died(poke2)){
            end = true;
            console.log(poke1.getName() + " has won!");
        }
    }
    
    console.log("---------------------------");
}
