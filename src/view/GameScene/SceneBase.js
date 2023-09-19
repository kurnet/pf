import { Container } from "pixi.js";

export class ScreenBaseContainer extends Container {
    constructor(w, h) {
        super();
        this.screenWidth = w;
        this.screenHeight = h;

        this.once('added', this.screenInited);
    }

    screenInited() {
        this.on('added', this.addedToScreen);
    }

    addedToScreen() { }

    update(dt) { }
}