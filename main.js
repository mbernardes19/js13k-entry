import Player from './Player.js';
import State from './State.js';
import Sprite from './Sprite.js';
import GameLoop from './GameLoop.js';
import Grid from './Grid.js';
import Tile from './Tile.js';
import InputHandler from './InputHandler.js';
import LevelBuilder from './LevelBuilder.js';
import Collider from './Collider.js';


const CANVAS_WIDTH = 384;
const CANVAS_HEIGHT = 288;
const canvas = document.querySelector('canvas');
canvas.width = CANVAS_WIDTH ;
canvas.height = CANVAS_HEIGHT;
const ctx = canvas.getContext('2d');

canvas.style.transform = "scale(1.5)";
canvas.style.position = "relative";
canvas.style.top = '100px';


// PLAYER //
const player1 = new Player('Santiael', ctx);

// GAME LOOP //
const gameLoop = new GameLoop();
const levelBuilder = new LevelBuilder(ctx);
gameLoop.startLoop(30);

let level = {
    "player_initial_position": {
        x: 32,
        y: 160
    },
    "graphical_map":[
        [1,1,1,1,1,1,1,1,1,1,1,1],
        [1,2,2,2,2,2,2,3,2,2,2,1],
        [1,3,3,2,2,2,3,3,1,2,3,1],
        [1,2,1,1,1,1,1,1,1,1,1,1],
        [1,2,1,1,1,1,1,1,1,1,1,1],
        [1,2,1,1,1,1,1,1,1,1,1,1],
        [2,2,2,2,2,2,2,2,2,2,2,2],
        [2,2,2,2,2,2,2,2,2,2,2,2],
        [2,2,2,2,2,2,2,2,2,2,2,2]
    ],
    "collision_map": []

}

const collider = new Collider(level.graphical_map, 12, 9)
player1.x = level.player_initial_position.x;
player1.y = level.player_initial_position.y;
player1._initialState = new State(player1.x, player1.y, player1._initialState.hp, player1._initialState.sprite)

canvas.addEventListener('click', () => {
    gameLoop.reversed = !gameLoop.reversed;
})

gameLoop.loopFunction = () => {
    collider.collideObject(player1);

    let i = player1._states.length - 1;

    if (!gameLoop.isReversed()) {
        levelBuilder.renderLevel(level);
        player1.drawPlayer();
        gameLoop.frameCount = 0;
    }
    else {
        levelBuilder.renderLevel(level);
        if (i-gameLoop.frameCount >= 0) {
            const existingState = player1._states[i-gameLoop.frameCount];
            player1._currentState = existingState;
            player1.drawPlayerReverse();
            gameLoop.frameCount++;
        }
        else {
            player1.drawPlayerReverse();
        }
    }
    
};

// LEVEL BUILDER //




// INPUT HANDLER //
const inputHandler = new InputHandler(player1, collider);
inputHandler.runEvents();






// HELPER FUNCTIONS // 

function getLevel(number) {
    return fetch(`./lvls/lvl${number}.json`)
            .then(res => res.json())
}

async function insertLevel() {
    const level = getLevel('01');
    return await level;
}