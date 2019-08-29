export default class Tile {
    constructor(size) {
        this.id;
        this.size = size;
        this.typeNum;
        this.typeName;
        this.column;
        this.row;
        this.backgroundColor;
    }

    defineTileType(typeNum) {
        switch(typeNum){
            case 1: {
                this.typeName = 'platform';
                this.backgroundColor = '#E8620E';
                break;
            }
            case 2: {
                this.typeName = 'sky';
                this.backgroundColor = '#39CEEB';
                break;
            }
            case 3: {
                this.typeName = 'land';
                this.backgroundColor = '#38BA5F';
                break;
            }
        }
    }
}