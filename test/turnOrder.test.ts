import {turnOrder} from "../src/functions";
import {Pokemon} from '../src/Pokemon';
import {random100} from '../src/functions';
import {died} from '../src/functions';


let pikachu = new Pokemon('Pikachu', 70, 80, 20, 100, 40);
pikachu.showName();
let meowth = new  Pokemon('Meowth', 65, 90, 20, 100, 35);
meowth.showName();

test("Pikachu should be first", () =>{
    expect(turnOrder(pikachu, meowth)).toBe(pikachu);
});

test("70% rate of hits", () =>{
    expect(meowth.hited(pikachu)).toBe(true);
});

test("60 hp rest if hited", () =>{
    expect(pikachu.attack(meowth)).toBe(60);
});

let poke1 = new Pokemon('poke', 70, 80, 20, 0, 40);
poke1.showName();

test("died", () =>{
    expect(died(poke1)).toBe(true);
})

