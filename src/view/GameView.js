import React from 'react';
import * as PIXI from 'pixi.js';
import { EVT_START_PRESSED, MainMenuContainer } from './GameScene/MainMenu';
import { EVT_GAME_DONE, GameSceneContainer } from './GameScene/GameScene';

export class GameView extends React.Component {
    screenList = [];

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const thisDiv = document.getElementById('gameDiv');

        this.app = new PIXI.Application({
            width: 320,
            height: 480,
        });

        thisDiv.appendChild(this.app.view);

        // const btnPlayNormal = process.env.PUBLIC_URL + '/imgs/btnPlayNormal.png';
        this.mainMenu = new MainMenuContainer(this.app.screen.width, this.app.screen.height);
        this.app.stage.addChild(this.mainMenu);

        this.screenList.push(this.mainMenu);

        this.gameScene = new GameSceneContainer(this.app.screen.width, this.app.screen.height);
        this.screenList.push(this.gameScene);

        this.mainMenu.on(EVT_START_PRESSED, () => {
            this.app.stage.addChild(this.gameScene);
            this.app.stage.removeChild(this.mainMenu);
        });

        this.gameScene.on(EVT_GAME_DONE, () => {
            this.app.stage.addChild(this.mainMenu);
            this.app.stage.removeChild(this.gameScene);
        })

        this.app.ticker.add((dt => {
            for (const screen of this.screenList) {
                if (screen.parent) {
                    screen.update(this.app.ticker.deltaMS);
                }
            }
        }));

    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div>
                <div><h3> Testing pixi.js engine </h3></div>
                <div id='gameDiv'>

                </div>
                <div style={{ textAlign: 'left', margin: '30px', fontSize: 'small' }}>
                    Latest notes: <br />Tried to have 'Scene/Screen' swapping as a flow<br />
                    <ul>
                        <li>Button to start with texture changing</li>
                        <li>Tap/Click to score up to 20 and back main</li>
                    </ul>
                    <br />
                </div>
            </div>
        );
    };
}