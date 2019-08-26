export default class GameLoop {
    constructor(fps) {
        this.stop = false;
        this.frameCount = 0;
        this.fps = fps;
        this.fpsInterval;
        this.startTime;
        this.now;
        this.then;
        this.elapsed;
        this.reversed = false;
        this._this = this;
    }

    rev() {
        this.reversed = !this.reversed;
    }

    isReversed() {
        return this.reversed === true;
    }

    startGameLoop(gameLoop){

            // draw stuff here
            console.log(typeof gameLoop)
            gameLoop();

            requestAnimationFrame(res => this.startGameLoop(gameLoop));
    }   
}