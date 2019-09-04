export default class InputHandler {
    constructor(player) {
        window.addEventListener('keydown',(event) => {
            switch(event.code){
                case 'ArrowUp': {
                    break;
                }
                case 'ArrowDown': {
        
                    break;
                }
                case 'ArrowLeft': {
                    player.moveLeft();
                    player.movedLeft = true;
                    player.movedRight = false;
                    break;
                }
                case 'ArrowRight': {
                    player.moveRight();
                    player.movedRight = true;
                    player.movedLeft = false;
                    break;
                }
            }
        });
    }
}
