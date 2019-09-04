import State from './State.js';
import Sprite from './Sprite.js';
import Object from './Object.js';

export default class Player extends Object {
    constructor(name, ctx) {
        super(64, 128,32,32);
        this._name = name;
        this._hp = 100;
        this._ctx = ctx;
        this._currentSprite = new Sprite(32, 32, new Image());
        this._initialState = {
            x: 64,
            y: 128,
            hp: 100,
            sprite: this._currentSprite
        }
        this._currentState = this._initialState;
        this._states = [this._initialState];
        this.speed = 20;
        this.movedLeft = false;
        this.movedRight = false;
    }

    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }

    get currentState() {
        return this._currentState;
    }

    set currentState(state) {
        this._currentState = state;
    }

    get currentSprite() {
        return this._currentSprite;
    }

    set currentSprite(sprite) {
        this._currentSprite = sprite;
    }
    
    addState(state) {
        this._states.push(state);
    }
    
    drawPlayer() {
        this._ctx.fillStyle = 'red';
        const newState = new State(this.x,this.y,this.hp, this.currentSprite);
        this.addState(newState);
        this.currentState = newState;
        this._ctx.fillRect(this._currentState.x, this._currentState.y, this._currentState.sprite.width, this._currentState.sprite.height);

        this.movedLeft = false;
        this.movedRight = false;
    }
                                                                                                                                                                                                  
    drawPlayerReverse() {
        this._ctx.fillStyle = 'blue';
        this._ctx.fillRect(this._currentState.x, this._currentState.y, this._currentState.sprite.width, this._currentState.sprite.height);
    }

    moveRight() {
        this.x_old = this.x;
        this.x = this.x + this.speed;
    }

    moveLeft() {
        this.x_old = this.x;
        this.x = this.x - this.speed;
    }

    update(gameLoop) {
        let i = this._states.length - 1;
        if (!gameLoop.reversed) {
            /*const newState =
                new State(
                    this._currentState.x + 10,
                    this._currentState.y + 10,
                    this._currentState.hp,
                    this._currentState.sprite 
                )
            this._currentState = newState;
            this.addState(newState);
            this.drawPlayer();*/

            this.drawPlayer();
        }
        else {
            if (i-gameLoop.frameCount >= 0) {
                /*const existingState = this._states[i-gameLoop.frameCount];
                this._currentState = existingState;
                this.drawReverse();
                gameLoop.frameCount++;*/
                this.drawPlayerReverse();
            }
        }
    }
}