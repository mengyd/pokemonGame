"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pokemon_1 = require("./Pokemon");
var functions_1 = require("./functions");
var functions_2 = require("./functions");
var poke1 = new Pokemon_1.Pokemon('Pikachu', 70, 80, 20, 100, 40);
var poke2 = new Pokemon_1.Pokemon('Meowth', 65, 90, 20, 100, 35);
console.log(poke1.getName() + " VS " + poke2.getName());
console.log("**************************");
var end = false;
while (end != true) {
    if (functions_2.turnOrder(poke1, poke2).getName() === poke1.getName()) {
        poke1.attack(poke2);
        if (functions_1.died(poke2)) {
            end = true;
            console.log(poke1.getName() + " has won!");
            break;
        }
        console.log(">>>");
        poke2.attack(poke1);
        if (functions_1.died(poke1)) {
            end = true;
            console.log(poke2.getName() + " has won!");
        }
    }
    else {
        poke2.attack(poke1);
        if (functions_1.died(poke1)) {
            end = true;
            console.log(poke2.getName() + " has won!");
            break;
        }
        console.log(">>>");
        poke1.attack(poke2);
        if (functions_1.died(poke2)) {
            end = true;
            console.log(poke1.getName() + " has won!");
        }
    }
    console.log("---------------------------");
}
