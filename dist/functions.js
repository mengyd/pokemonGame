"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function turnOrder(poke1, poke2) {
    if (poke1.getSpeed() > poke2.getSpeed()) {
        return poke1;
    }
    return poke2;
}
exports.turnOrder = turnOrder;
function random100() {
    return Math.floor(Math.random() * 100);
}
exports.random100 = random100;
function died(poke) {
    if (poke.getLife() > 0) {
        return false;
    }
    return true;
}
exports.died = died;
