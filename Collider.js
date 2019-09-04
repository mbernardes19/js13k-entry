export default class Collider {
    constructor(collisionMap, columns, rows){
        this.collisionMap = collisionMap;
        this.columns = columns;
        this.rows = rows;
    }

    collideObject(object) {
        object.collided = false;
        let bottom, top, right, left, value;

        top = Math.floor(object.getTop() / 32);
        left = Math.floor(object.getLeft() / 32);
        right = Math.floor(object.getRight() / 32);
        // console.log('Top: ',top,' Left: ', left,' Right: ',right);
        value = this.collisionMap[top][left];
        this.collide(value, object, left * 32, top * 32)
    }

    collide(value, object, tile_x, tile_y) {
        switch(value){
            case 2: {
                this.collidePlatformRight(object, tile_x + 32)
                break;
            }
        }

    }

    collidePlatformTop(object, tile_y) {
        if (object.getBottom() > tileTop && object.getOldBottom() <= tileTop) {
            
        }

    }

    collidePlatformLeft(object, tileLeft) {
        if (object.getRight() > tileLeft && object.getOldRight() <= tileLeft) {
            object.setRight(tileLeft);
            //console.log('colidiu left!');
            return true;
        }
        return false;
    }

    collidePlatformRight(object, tileRight) {
        console.log('Object Left: ', object.getLeft(), 'Tile Right: ', tileRight)
        if (object.getLeft() < tileRight && object.getOldLeft() >= tileRight) {
            object.setLeft(tileRight);
            object.collided = true;
            //console.log('colidiu right!');
            //console.log('x_old : ', object.x_old);
            //console.log('x : ', object.x);
            //console.log('tileRight: ', tileRight);
            return true;
        }
        return false;

    }
}