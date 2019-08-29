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
                    break;
                }
                case 'ArrowRight': {
                    player.moveRight();
                    break;
                }
            }
        });
    }
}
