import ControllerButton from './ControllerButton.js';

export default class InputHandler {
    constructor(player, collider) {
        this.player = player;
        this.left = new ControllerButton();
        this.right = new ControllerButton();
        this.collider = collider;
    }

    keyDownUp = (event) => {
        const down = event.type === 'keydown' ? true : false;

        switch(event.code){
            case 'ArrowUp': {
                break;
            }
            case 'ArrowDown': {
    
                break;
            }
            case 'ArrowLeft': {
                this.left.getInput(down);
                if (!this.collider.collideObject(this.player)){
                    this.player.moveLeft();
                    this.player.movedLeft = true;
                    this.player.movedRight = false;
                }
                break;
            }
            case 'ArrowRight': {
                this.right.getInput(down);
                this.player.moveRight();
                this.player.movedRight = true;
                this.player.movedLeft = false;
                break;
            }
        }
    }
    runEvents(){
        window.addEventListener('keydown', this.keyDownUp);
        window.addEventListener('keyup', this.keyDownUp);
    }
}