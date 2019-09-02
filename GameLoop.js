export default class GameLoop {
    constructor() {
        this.stop = false;
        this.frameCount = 0;
        this.fps;
        this.fpsInterval;
        this.currentRenderTime = 0;
        this.lastRenderTime = 0;
        this.reversed = false;
        this._this = this;
        this.loopFunction;
    }

    rev() {
        this.reversed = !this.reversed;
    }

    isReversed() {
        return this.reversed === true;
    }

    loop(currentRenderTime, fps) {
        const fpsInMs = ((1/fps)*1000);
        let frameTime = currentRenderTime - this.lastRenderTime;
        if (frameTime >= fpsInMs) {
            this.lastRenderTime = currentRenderTime; 
            this.update(frameTime);
        }
        window.requestAnimationFrame(time => this.loop(time,fps));
    }

    update(frameTime) {
        this.loopFunction();
    }

    startLoop(fps) {
        window.requestAnimationFrame(time => this.loop(time,fps));
    }
    
}