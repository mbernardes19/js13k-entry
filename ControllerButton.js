export default class ControllerButton {
    constructor(){
        this.active = this.down = false;
    }

    getInput(input){
        if (input !== this.down) {
            this.down = input;
            this.active = input;
        }
    }
}
