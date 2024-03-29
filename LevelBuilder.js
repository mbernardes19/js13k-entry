export default class LevelBuilder {
    constructor(ctx) {
        this.rows = 9;
        this.columns = 12;
        this.TILE_SIZE = 32;
        this.ctx = ctx;
        this.currentLevel;
    }

    renderLevel(level) {
        this.currentLevel = level;
        const levelGraphics = level.graphical_map;
        for(let i = 0; i < this.columns; i++) {
            for(let j = 0; j < this.rows; j++) {
                    if (levelGraphics[j][i] === 1)
                        this.ctx.fillStyle = 'black'; 
                    if (levelGraphics[j][i] === 2)
                        this.ctx.fillStyle = 'blue'; 
                    if (levelGraphics[j][i] === 3)
                        this.ctx.fillStyle = 'red'; 
                this.ctx.fillRect(this.TILE_SIZE*i, this.TILE_SIZE*j, this.TILE_SIZE, this.TILE_SIZE);
            }
        }
    }
}