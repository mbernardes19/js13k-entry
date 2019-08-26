import Player from './Player.js';

export default class State {
    constructor(x, y, hp, sprite) {
        this._x = x;
        this._y = y;
        this._hp = hp;
        this._sprite = sprite;
    }

    get x() {
        return this._x;
    }
    set x(x) {
        this._x = x;
    }
    get y() {
        return this._y;
    }
    set y(y) {
        this._y = y;
    }
    get hp() {
        return this._hp;
    }
    set hp(hp) {
        this._hp = hp;
    }
    get sprite() {
        return this._sprite;
    }
    set sprite(sprite) {
        this._sprite = sprite;
    }
}