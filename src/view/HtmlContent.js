import React from 'react';

export class MyHtmlContent extends React.Component{
    
    constructor(props){
        super(props);
    }
    
    render(){
        let msgText = "";
        if(this.props.msg instanceof Array){
            this.props.msg.forEach(txtLine =>{
                msgText += txtLine;
            });
        }else{
            msgText = this.props.msg;
        }
        

        return (
            <div>
                <div>
                    <h1>{this.props.title}</h1>
                    <div className="small_text" style={{ textAlign: "left" }} dangerouslySetInnerHTML={{ __html: msgText}}></div>
                </div>
            </div>
        );
    }


}