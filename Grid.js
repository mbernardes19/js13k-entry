import Tile from "./Tile.js";

export default class Grid {
    constructor(width, height, ctx) {
        this.width = width;
        this.height = height;
        this.tileSize = 32;
        this.tiles = [];
        this.columns = Math.trunc(this.width / this.tileSize);
        this.rows = Math.trunc(this.height / this.tileSize);
        this.ctx = ctx;
    }

    defineGrid() {
        // const totalTiles = this.columns * this.rows;
        for(let i = 0; i < this.columns; i++) {
            for(let j = 0; j < this.rows; j++) {
                if (j <= this.rows - 5) {
                    const tile = new Tile(this.tileSize);
                    tile.defineTileType(1);
                    tile.column = j;
                    tile.row = i;
                    this.tiles.push(tile);
                } else {
                    const tile = new Tile(this.tileSize);
                    tile.defineTileType(3);
                    tile.column = j;
                    tile.row = i;
                    this.tiles.push(tile);
                }
                
            }
        }
    }

    render() {
        this.tiles.map(tile => {
            this.ctx.fillStyle = tile.backgroundColor;
            this.ctx.fillRect(tile.row*32, tile.column*32, tile.size, tile.size);
            this.ctx.strokeStyle = 'black';
            this.ctx.strokeRect(tile.row*32, tile.column*32, tile.size, tile.size);
        })
        
    }
}