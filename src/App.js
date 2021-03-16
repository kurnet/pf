import React from 'react';
import Slider from "@farbenmeer/react-spring-slider";

import pdata from './data/prj.json';

import './App.css';
import { Profile } from './view/Profile';
import { MyVid } from './view/ProductVideo';


export class App extends React.Component{
  aryPrj = [];
  arySlideRef = [];

  _lastIndex = 0;

  constructor(props){
    super(props);
    this.state = {
      winWidth : 0,
      winHeight : 0,
      vidWidth: 0,
      vidHeight: 0
    };

    this.updateDimensions = this.updateDimensions.bind(this);
    this.refreshVideoComponents = this.refreshVideoComponents.bind(this);

    for (let vi = 0; vi < 10; ++vi){
      this.arySlideRef[vi] = React.createRef();
    }

  }

  refreshVideoComponents(){
    this.aryPrj = [];
  }
  
  componentDidMount(){
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);

  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions(){
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

    let vidW = windowWidth * 0.75;
    let vidH = vidW * 9 / 16;

    this.setState({ winWidth: windowWidth, winHeight: windowHeight, vidWidth : vidW, vidHeight : vidH });
  }

  slideChangeHandler = (index) => {
    if(this.arySlideRef[this._lastIndex].current){
      this.arySlideRef[this._lastIndex].current.pause();
    }
    this._lastIndex = index;
  };

  render() {
    this.refreshVideoComponents();
    return (
      <div className="App">
        <header className="App-header">
          <Profile name="Ho Pong, Shum"/>
          <div style={{width: '80vw', height: this.state.vidHeight * 3, backgroundColor : '#282c40', paddingTop : '15px', margin : '10px'}} >
            <Slider hasArrows="true" onSlideChange={this.slideChangeHandler}>
              {pdata.projects.map( (item, index) => {
                return <MyVid key={item.vid} vid={item.vid} opts={{height: this.state.vidHeight, width: this.state.vidWidth }} title={item.title} msg={item.msg} ref={this.arySlideRef[index]}/>
              })}
            </Slider>
          </div>

        </header>
      </div>
    );
  }
}

export default App;
