import React from 'react';
import {Row, Col} from './GridElement';
import ll_logo from '../imgs/LLogo.png';

export class Profile extends React.Component{
    profile_pic = "https://media-exp1.licdn.com/dms/image/C5103AQEGF69gSPnc1Q/profile-displayphoto-shrink_800_800/0/1578796896409?e=1620864000&v=beta&t=ieMrKbn9CGTaztL309nMusPlt9v9_0Ap5lfCKUXzYGw";
    linkedin_link = "https://www.linkedin.com/in/pong-shum-4a00326a";
    linkedin_logo = "/imgs/Ll-Logo.png";

    render(){
        return(
            <div>
                <Row>
                    <Col size={1}>
                        <img alt="Welcome" src={this.profile_pic} style={{width: 200, height: 200, borderRadius: 200/ 2}}/>
                    </Col>
                    <Col size={2}>
                        <Row style={{height: '50%'}}></Row>
                        <Row><h2>{this.props.name}</h2></Row>
                    </Col>
                </Row>
                <Row>
                    <Col size={1}></Col>
                    <Col>
                        <a href={this.linkedin_link} target="_blank" rel="noreferrer" >
                            <img alt="linkedin" src={ll_logo} style={{width:150}} />
                        </a>
                    </Col>
                    <Col size={1}></Col>
                </Row>
            </div>
        );
    }
}