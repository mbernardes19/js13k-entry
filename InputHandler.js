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
                    player.movedLeft = true;
                    player.movedRight = false;
                    player.drawPlayer();
                    break;
                }
                case 'ArrowRight': {
                    player.movedRight = true;
                    player.movedLeft = false;
                    player.drawPlayer();
                    break;
                }
            }
        });
    }
}
