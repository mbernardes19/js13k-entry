import State from './State.js';
import Sprite from './Sprite.js';

export default class Player {
    constructor(name, ctx) {
        this._name = name;
        this._hp = 100;
        this._ctx = ctx;
        this._currentSprite = new Sprite(100, 100, new Image());
        this._initialState = {
            x: 150,
            y: 150,
            hp: 100,
            sprite: this._currentSprite
        }
        this._currentState = this._initialState;
        this._states = [this._initialState];

    }

    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    
    addState(state) {
        this._states.push(state);
    }
    
    drawPlayer() {
        this._ctx.fillStyle = 'red';
        this._ctx.fillRect(this._currentState.x, this._currentState.y, this._currentState.sprite.width, this._currentState.sprite.height);
    }

    drawReverse() {
        this._ctx.fillStyle = 'blue';
        this._ctx.fillRect(this._currentState.x, this._currentState.y, this._currentState.sprite.width, this._currentState.sprite.height);
    }
}