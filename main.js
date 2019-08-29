import Player from './Player.js';
import State from './State.js';
import Sprite from './Sprite.js';
import GameLoop from './GameLoop.js';
import Grid from './Grid.js';
import Tile from './Tile.js';

const CANVAS_WIDTH = window.innerWidth - (window.innerWidth % 32);
const CANVAS_HEIGHT = window.innerHeight - (window.innerHeight % 32);
const canvas = document.querySelector('canvas');
canvas.width = CANVAS_WIDTH ;
canvas.height = CANVAS_HEIGHT;
const ctx = canvas.getContext('2d');

const grid = new Grid(CANVAS_WIDTH, CANVAS_HEIGHT, ctx);
grid.create();
const tiles = grid.getTiles([2,0],[5,6]);
grid.changeTilesType(tiles, 2);
grid.render();

console.log(grid);

const player1 = new Player('Matheus', ctx);

// const gameLoop = new GameLoop(30);
// window.addEventListener('click', () => gameLoop.rev());

// gameLoop.startGameLoop(loop);


function loop() {
    let i = player1._states.length - 1;
if (!gameLoop.reversed) {
    const newState =
        new State(
            player1._currentState.x + 10,
            player1._currentState.y + 10,
            player1._currentState.hp,
            player1._currentState.sprite 
        )
    player1._currentState = newState;
    player1.addState(newState);
    player1.drawPlayer();
}
else {
    if (i-gameLoop.frameCount >= 0) {
        const existingState = player1._states[i-gameLoop.frameCount];
        player1._currentState = existingState;
        player1.drawReverse();
        gameLoop.frameCount++;
    }
}


}
