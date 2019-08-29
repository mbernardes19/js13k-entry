import Player from './Player.js';
import State from './State.js';
import Sprite from './Sprite.js';
import GameLoop from './GameLoop.js';
import Grid from './Grid.js';
import Tile from './Tile.js';
import InputHandler from './InputHandler.js';

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

const player1 = new Player('Matheus');
const input = new InputHandler(player1);

 const gameLoop = new GameLoop(30);
 window.addEventListener('click', () => gameLoop.rev());

 gameLoop.startGameLoop(loop);


function loop() {
    player1.update(gameLoop, input);


}
