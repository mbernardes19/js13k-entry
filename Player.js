import State from './State.js';
import Sprite from './Sprite.js';

export default class Player {
    constructor(name, ctx) {
        this._name = name;
        this._hp = 100;
        const canvas = document.createElement('canvas')
        document.body.append(canvas);
        canvas.width = 500;
        canvas.height = 500;
        this._ctx = canvas.getContext('2d');
        this._currentSprite = new Sprite(100, 100, new Image());
        this._initialState = {
            x: 150,
            y: 150,
            hp: 100,
            sprite: this._currentSprite
        }
        this._currentState = this._initialState;
        this._states = [this._initialState];
        this.speed = 20;
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
        if (this._states.length > 2) {
            this._ctx.clearRect(this._states[this._states.length-2].x,this._states[this._states.length-2].y,100,100);
//            this._ctx.globalAlpha = 1.0;
        }
        this._ctx.fillStyle = 'red';
        this._ctx.fillRect(this._currentState.x, this._currentState.y, this._currentState.sprite.width, this._currentState.sprite.height);
    }
                                                                                                                                                                                                  
    drawPlayerReverse() {
        this._ctx.fillStyle = 'blue';
        this._ctx.fillRect(this._currentState.x, this._currentState.y, this._currentState.sprite.width, this._currentState.sprite.height);
    }

    moveLeft() {
        const newState = new State(
            this._currentState.x - this.speed,
            this._currentState.y,
            this._currentState.hp,
            this._currentState.sprite 
        )
        this.currentState = newState;
        this.addState(newState);
        console.log(this.currentState);
    }

    moveRight() {
        const newState = new State(
            this._currentState.x + this.speed,
            this._currentState.y,
            this._currentState.hp,
            this._currentState.sprite 
        )
        this.currentState = newState;
        this.addState(newState);
        console.log(this.currentState);
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