export default class Sprite {
    constructor(width, height, img) {
        this._width = width;
        this._height = height;
        this._img = img;
    }

    get width() {
        return this._width;
    }
    set width(width) {
        this._width = width;
    }
    get height() {
        return this._height;
    }
    set height(height) {
        this._height = height;
    }
    get img() {
        return this._img;
    }
    set img(img) {
        this._img = img;
    }
}