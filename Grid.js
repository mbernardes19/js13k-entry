import Tile from "./Tile.js";

export default class Grid {
    constructor(width, height, ctx) {
        this.width = width;
        this.height = height;
        this.tileSize = 32;
        this.tileIds = 0;
        this.tiles = [];
        this.columns = Math.trunc(this.width / this.tileSize);
        this.rows = Math.trunc(this.height / this.tileSize);
        this.ctx = ctx;
    }

    create() {
        for(let i = 0; i < this.columns; i++) {
            for(let j = 0; j < this.rows; j++) {
                    const tile = new Tile(this.tileSize);
                    tile.defineTileType(1);
                    tile.column = i;
                    tile.row = j;
                    tile.id = this.tileIds; 
                    this.tiles.push(tile);
                    this.tileIds++;
                }
                
            }
        }

        getTiles([columnStart, rowStart], [columnEnd, rowEnd]) {
            const tileStart = this.tiles.find(tile => tile.column === columnStart && tile.row === rowStart);
            const tileEnd = this.tiles.find(tile => tile.column === columnEnd && tile.row === rowEnd);
            const areaLength = tileStart.id > tileEnd.id ? tileStart.id - tileEnd.id + 1 : tileEnd.id - tileStart.id + 1;
            const tiles = [];

            // console.log('tileStartId: ', tileStart.id, 'tileEndId: ', tileEnd.id, 'areaLength: ', areaLength);
            let idx = tileStart.id;    
            for(let i = 0; i < areaLength; i++) {
                if (idx >= tileStart.id && idx <= tileEnd.id) {
                    tiles.push(this.tiles[idx]);
                }
                idx++;
            }
            return tiles;
        }

        changeTilesType(tilesArr, tileTypeNum) {
            tilesArr.map(tile => tile.defineTileType(tileTypeNum));
        }

    render() {
        this.tiles.map(tile => {
            this.ctx.fillStyle = tile.backgroundColor;
            this.ctx.fillRect(tile.column*32, tile.row*32, tile.size, tile.size);
            this.ctx.strokeStyle = 'black';
            this.ctx.strokeRect(tile.column*32, tile.row*32, tile.size, tile.size);
            this.ctx.fillStyle = 'white';
            this.ctx.font = '10px Arial';
            this.ctx.fillText(`${tile.column}, ${tile.row}`,tile.column*32, (tile.row+1)*(32));
        })
        
    }
}