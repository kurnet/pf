import React from 'react';
import * as PIXI from 'pixi.js';
import btnPlayNormal from '../imgs/btnPlayNormal.png';
import btnPlayPressed from '../imgs/btnPlayPressed.png';

export class GameView extends React.Component{

    constructor(props){
        super(props);
        this.state = {click: 0};
        this.ticking = 0;
        this.secondPassed = 0;

        this.gameData = {
            score: 0,
        }

    }

    componentDidMount(){
        const thisDiv = document.getElementById('gameDiv');

        this.app = new PIXI.Application({
            width: 320,
            height: 480
        });

        thisDiv.appendChild(this.app.view);

        const bunny = PIXI.Sprite.from('https://pixijs.com/assets/bunny.png');
        this.app.stage.addChild(bunny);

        // center the sprite's anchor point
        bunny.anchor.set(0.5)

        // move the sprite to the center of the screen
        bunny.x = this.app.screen.width / 2
        bunny.y = this.app.screen.height / 2
        bunny.eventMode = "static";
        bunny.cursor = 'pointer';

        let elapsed = 0.0;
        this.app.ticker.add((delta) => {
            elapsed += delta;
            bunny.x = this.app.screen.width / 2 + Math.cos(elapsed/50.0) * 100.0;
        });

        bunny.on('pointerdown', this.onClickOnSprite.bind(this));

        // const btnPlayNormal = process.env.PUBLIC_URL + '/imgs/btnPlayNormal.png';

        const texPlayNormal = PIXI.Texture.from(btnPlayNormal);
        const texPlayPressed = PIXI.Texture.from(btnPlayPressed);
        
        const btnPlay = PIXI.Sprite.from(texPlayNormal);
        this.app.stage.addChild(btnPlay);
        btnPlay.x = this.app.screen.width / 2;
        btnPlay.y = this.app.screen.height * 0.7;
        btnPlay.scale.set(0.5, 0.5);
        btnPlay.anchor.set(0.5, 0.5);
        btnPlay.eventMode = "static";
        btnPlay.cursor = 'pointer';
        btnPlay.on('pointerdown', ()=>{
            btnPlay.texture = texPlayPressed;
            setTimeout(() => {
                btnPlay.texture = texPlayNormal;
            }, 300);
        });
        
        const style = new PIXI.TextStyle({
            fill: "#ffffff"
        });
        const txtTick = new PIXI.Text('Ticking', style);
        this.app.stage.addChild(txtTick);

        this.app.ticker.add((dt=>{
            this.ticking += this.app.ticker.deltaMS;
            if(this.ticking >= 1000){
                this.secondPassed++;
                txtTick.text = `${this.secondPassed}`;
                this.ticking -= 1000;
            }
        }));

        const scoreStyle = {...style};
        this.txtScore = new PIXI.Text(`Score : ${this.gameData.score}`, scoreStyle);
        this.txtScore.anchor.set(1.0, 0);
        this.txtScore.x = 320;
        this.app.stage.addChild(this.txtScore);
    }

    onClickOnSprite(){
        console.log('Clicked');
        this.scoreUp();
    }

    componentWillUnmount(){
    }

    scoreUp(){
        this.gameData.score++;
        this.txtScore.text = `Score : ${this.gameData.score}`;
    }

    render() {
        return (
            <div>
                <div><h3> Testing pixi.js engine </h3></div>
                <div id='gameDiv'>
                    
                </div>
            </div>
        );
    };
}