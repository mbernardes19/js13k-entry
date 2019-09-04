export default class Object {
    constructor(x, y, width, height) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.x_old = x;
        this.y_old = y;
        this.collided = false;
    }

    getTop() {return this.y;}
    getBottom() {return this.y + this.height;}
    getLeft() {return this.x;}
    getRight() {return this.x + this.width;}
    getOldTop() {return this.y_old;}
    getOldBottom() {return this.y_old + this.height;}
    getOldLeft() {return this.x_old;}
    getOldRight() {return this.x_old + this.width;}
    setTop(y) {this.y = y;}
    setBottom(y) {this.y = y - this.height;}
    setLeft(x) {this.x = x;}
    setRight(x) {this.x = x - this.width;}
    setOldTop(y) {this.y_old = y;}
    setOldBottom(y) {this.y_old = y - this.height;}
    setOldLeft(x) {this.x_old = x;}
    setOldRight(x) {this.x_old = x - this.width;}
}
