import { Sprite, Text, TextStyle } from "pixi.js";
import { ScreenBaseContainer } from "./SceneBase";
import { Easing, Group, Tween } from "tweedle.js";

export const EVT_GAME_DONE = "evt_game_done";

export class GameSceneContainer extends ScreenBaseContainer {
    constructor(w, h) {
        super(w, h);
        this.reset();
    }

    screenInited() {
        super.screenInited();
        this.bunny = Sprite.from('https://pixijs.com/assets/bunny.png');
        this.addChild(this.bunny);

        const bunny = this.bunny;
        // center the sprite's anchor point
        bunny.anchor.set(0.5)

        // move the sprite to the center of the screen
        bunny.x = this.screenWidth / 2
        bunny.y = this.screenHeight / 2
        bunny.eventMode = "static";
        bunny.cursor = 'pointer';

        this.elapsed = 0.0;
        /*
        let elapsed = 0.0;
        this.app.ticker.add((delta) => {
            elapsed += delta;
            bunny.x = this.screenWidth / 2 + Math.cos(elapsed/50.0) * 100.0;
        });
        */

        bunny.on('pointerdown', this.onClickOnSprite.bind(this));


        const style = new TextStyle({
            fill: "#ffffff"
        });
        this.txtTick = new Text('Ticking', style);
        this.addChild(this.txtTick);


        const scoreStyle = { ...style };
        this.txtScore = new Text(`Score : ${this.gameData.score}`, scoreStyle);
        this.txtScore.anchor.set(1.0, 0);
        this.txtScore.x = 320;
        this.addChild(this.txtScore);
        
        this.state.started = true;
    }

    addedToScreen() {
        this.reset();
        this.state.started = true;
        this.txtScore.text = `Score : ${this.gameData.score}`;
        this.txtTick.text = "Ticking";
    }

    reset() {
        this.state = { started: true, ended: false };
        this.ticking = 0;
        this.secondPassed = 0;

        this.gameData = {
            score: 0,
        };
    }

    update(dt) {
        if(this.state.started){
            this.ticking += dt;
            if (this.ticking >= 1000) {
                this.secondPassed++;
                this.txtTick.text = `${this.secondPassed}`;
                this.ticking -= 1000;
            }
            this.elapsed += 1;
            this.bunny.x = this.screenWidth / 2 + Math.cos(this.elapsed / 50.0) * 100.0;
        }

        Group.shared.update();
    }

    onClickOnSprite() {
        if(this.state.started){
            this.scoreUp();
            const bunnyScale = this.bunny.scale;
    
            new Tween(bunnyScale).to({x: 1.5, y: 1.5}, 150).onComplete(()=>{
                new Tween(bunnyScale).to({x: 1, y: 1}, 150).easing(Easing.Quadratic.InOut).start();
            }).easing(Easing.Quadratic.InOut).start();
    
            if (this.gameData.score >= 20 && !this.state.ended) {
                //this.emit(EVT_GAME_DONE);
                this.state.ended = true;
                this.state.started = false;
                // try to use tween as timeout benefit from 'this'
                new Tween().to({}, 1000).onComplete(()=>{
                    this.emit(EVT_GAME_DONE);
                }).start();
            }

        }
    }

    scoreUp() {
        this.gameData.score++;
        this.txtScore.text = `Score : ${this.gameData.score}`;
    }


}