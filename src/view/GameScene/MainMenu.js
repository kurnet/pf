import { Sprite, Texture } from "pixi.js";
import btnPlayNormal from '../../imgs/btnPlayNormal.png';
import btnPlayPressed from '../../imgs/btnPlayPressed.png';
import { ScreenBaseContainer } from "./SceneBase";

export var EVT_START_PRESSED = "evt_start_pressed";
export class MainMenuContainer extends ScreenBaseContainer {
    screenInited() {
        super.screenInited();

        const texPlayNormal = Texture.from(btnPlayNormal);
        const texPlayPressed = Texture.from(btnPlayPressed);

        const btnPlay = Sprite.from(texPlayNormal);
        this.addChild(btnPlay);

        btnPlay.x = this.screenWidth / 2;
        btnPlay.y = 320;//this.screenHeight * 0.7;

        btnPlay.scale.set(0.5, 0.5);
        btnPlay.anchor.set(0.5, 0.5);
        btnPlay.eventMode = "static";
        btnPlay.cursor = 'pointer';
        btnPlay.on('pointerdown', () => {
            btnPlay.texture = texPlayPressed;
            setTimeout(() => {
                this.emit(EVT_START_PRESSED);

                btnPlay.texture = texPlayNormal;
            }, 300);
        });
    }

}