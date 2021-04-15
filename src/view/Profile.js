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
                        <img alt="Welcome" src={this.profile_pic} style={{width: '30vw', height: '30wv', borderRadius: 200/ 2}}/>
                    </Col>
                    <Col size={4}>
                        <Row style={{height: '30%'}}></Row>
                        <Row>
                            <Col size={3}>
                                <h2>{this.props.name}</h2>
                            </Col>
                            <Col size={1} style={{ alignSelf : 'center' }}>
                                <a href={this.linkedin_link} target="_blank" rel="noreferrer" >
                                    <img alt="linkedin" src={ll_logo} style={{width:150}} />
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ fontSize : 'medium', textAlign : 'left', width : '90vw' }}> I am a programmer, and being a programmer/developer in Hong Kong over 10 years. 
                        I feel excited to study new technology and technology always has to keep learning.<p />
In my career I mostly work with Game projects and always challenge myself and feel enjoyed. But it won't be limited to games dev. I got some experience in Mobile Applications development.<p />
Personally, I like to make tools for helping solve problems, simplify processes and learning. And I believe that I am a fast learner to handle the new things.
Additionally I have experience to leading a small team (10-) coding and managing with team together to develop mobile game which it happy to work with a team and grow together. 
                    </Col>
                </Row>
                <Row>
                    <Col size={1}></Col>
                    <Col>
                        
                    </Col>
                    <Col size={1}></Col>
                </Row>
            </div>
        );
    }
}