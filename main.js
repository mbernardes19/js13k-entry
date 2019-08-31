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

const rows = 4;
const columns = 4;

const gameLoop = new GameLoop();
gameLoop.startLoop(1)


const level = [
    [1,1,1,1],
    [1,2,2,1],
    [1,3,3,1],
    [1,2,1,1]
];

drawLevel(level);


function drawLevel(level) {
    for(let i = 0; i < columns; i++) {
        for(let j = 0; j < rows; j++) {
                if (level[i][j] === 1)
                    ctx.fillStyle = 'black'; 
                if (level[i][j] === 2)
                    ctx.fillStyle = 'blue'; 
                if (level[i][j] === 3)
                    ctx.fillStyle = 'red'; 
            ctx.fillRect(32*j, 32*i, 32, 32);
        }
    }
}





