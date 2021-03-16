import React from 'react';
import Youtube from 'react-youtube';

export class MyVid extends React.Component{
    
    _target = null;

    constructor(props){
        super(props);

        this.pause = this.pause.bind(this);
        this._onReady = this._onReady.bind(this);

    }

    _onReady(event){
        this._target = event.target;
        this.pause();
    }

    pause(){
        if(this._target){
            this._target.pauseVideo();
        }
    }

    render(){
        return (
            <div>
                <Youtube videoId={this.props.vid} opts={this.props.opts} onReady={this._onReady}/>
                <div>
                    <h1>{this.props.title}</h1>
                    <div className="small_text" style={{ textAlign: "left" }} dangerouslySetInnerHTML={{ __html: this.props.msg}}></div>
                </div>
            </div>
        );
    }


}