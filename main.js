import Player from './Player.js';
import State from './State.js';
import Sprite from './Sprite.js';
import GameLoop from './GameLoop.js';
import Grid from './Grid.js';
import Tile from './Tile.js';
import InputHandler from './InputHandler.js';
import LevelBuilder from './LevelBuilder.js';


const CANVAS_WIDTH = 384;
const CANVAS_HEIGHT = 288;
const canvas = document.querySelector('canvas');
canvas.width = CANVAS_WIDTH ;
canvas.height = CANVAS_HEIGHT;
const ctx = canvas.getContext('2d');


// PLAYER //
const player1 = new Player('Santiael', ctx);

// GAME LOOP //
const gameLoop = new GameLoop();
gameLoop.startLoop(1);

// LEVEL BUILDER //
const levelBuilder = new LevelBuilder(ctx);

insertLevel().then(lvl => {
    levelBuilder.renderLevel(lvl.graphical_map);
});

// INPUT HANDLER //
const inputHandler = new InputHandler(player1);






// HELPER FUNCTIONS // 

function getLevel(number) {
    return fetch(`./lvls/lvl${number}.json`)
            .then(res => res.json())
}

async function insertLevel() {
    const level = getLevel('01');
    return await level;
}