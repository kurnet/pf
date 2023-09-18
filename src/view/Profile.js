import React from 'react';
import {Row, Col} from './GridElement';
import ll_logo from '../imgs/LLogo.png';
import pro_pic from '../imgs/ppic.jpg';
import MediaQuery, { useMediaQuery } from 'react-responsive'

import '../App.css';

export class Profile extends React.Component{
    isTabletOrMobile = false;

    profile_pic = "https://media-exp1.licdn.com/dms/image/C5103AQEGF69gSPnc1Q/profile-displayphoto-shrink_800_800/0/1578796896409?e=1620864000&v=beta&t=ieMrKbn9CGTaztL309nMusPlt9v9_0Ap5lfCKUXzYGw";
    linkedin_link = "https://www.linkedin.com/in/pong-shum-4a00326a";
    linkedin_logo = "/imgs/Ll-Logo.png";

    render(){
        //this.isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
        
        return(
            <div className="Profile">
                <Row className='profile-header'>
                    <Col size={1}>
                        <img className='profile-pic' src={pro_pic} />
                    </Col>
                    <MediaQuery maxWidth={720}>
                        <Col size={1}>
                            <Row>
                                <Col>
                                    <span className="name no-wrap">{this.props.name}</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <a href={this.linkedin_link} target="_blank" rel="noreferrer" >
                                        <img alt="linkedin" src={ll_logo} style={{width:80}} />
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </MediaQuery>
                    <MediaQuery minWidth={721}>
                        <Col size={3}>
                            <h2 className="name">{this.props.name}</h2>
                        </Col>
                        <Col size={1}>
                            <a href={this.linkedin_link} target="_blank" rel="noreferrer" >
                                <img alt="linkedin" src={ll_logo} style={{width:150}} />
                            </a>
                        </Col>
                    </MediaQuery>
                </Row>
                <Row>
                    <Col style={{ fontSize : 'medium', textAlign : 'left', width : '90vw' }}>
                        Welcome to my projects list about my past experience!<br />Please feel free to understand what I've done in my past, Thanks!<p />
                    I have been a programmer/developer in Hong Kong for over 10 years and started my journey in the UK recently just over 2
years ago. I feel excited there a lot about game dev and technology from a new place. <p />
In my career I mostly work with Game projects and always feel challenged and enjoyed. But it won't be limited to games dev. I
have experience in Mobile Applications development too. <p />
Also I like to make tools to help solve problems, simplify processes and learn. I believe that I am a fast learner to handle new
things.<p />
Additionally, I enjoy working as a team member. It always makes me feel energized, but also I could work independently and
review with a team to get the job done well. <p />
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