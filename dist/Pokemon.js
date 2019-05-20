"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("./functions");
var Pokemon = /** @class */ (function () {
    function Pokemon(name, speed, accuracy, evasion, life, hitpoints) {
        this.name = name;
        this.speed = speed;
        this.accuracy = accuracy;
        this.evasion = evasion;
        this.life = life;
        this.hitpoints = hitpoints;
    }
    Pokemon.prototype.getName = function () {
        return this.name;
    };
    Pokemon.prototype.setName = function (name) {
        this.name = name;
    };
    Pokemon.prototype.showName = function () {
        console.log(this.name);
    };
    Pokemon.prototype.getSpeed = function () {
        return this.speed;
    };
    Pokemon.prototype.getAccuracy = function () {
        return this.accuracy;
    };
    Pokemon.prototype.getEvasion = function () {
        return this.evasion;
    };
    Pokemon.prototype.getLife = function () {
        return this.life;
    };
    Pokemon.prototype.setLife = function (life) {
        this.life = life;
    };
    Pokemon.prototype.getHitpoints = function () {
        return this.hitpoints;
    };
    Pokemon.prototype.hited = function (enemy) {
        if (functions_1.random100() < this.accuracy - enemy.getEvasion()) {
            console.log("Hited !");
            return true;
        }
        console.log("Missed !");
        return false;
    };
    Pokemon.prototype.attack = function (enemy) {
        console.log(this.name + "(hp:" + this.life + ") attcks " + enemy.getName() + "(hp:" + enemy.getLife() + ")");
        if (this.hited(enemy)) {
            enemy.setLife(enemy.getLife() - this.hitpoints);
        }
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
