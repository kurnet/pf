(this["webpackJsonppf-git"]=this["webpackJsonppf-git"]||[]).push([[0],{24:function(e){e.exports=JSON.parse('{"projects":[{"title":"Put To Rest","msg":"This is a mobile game using C++ game engine Cocos2dx, It is a big challenge to migrate a unfinish game project, and restructure and leading a team to review and redesign every of the details, but unfortunately it\'s can\'t stay until release that the startup company that running out of resources, but the game is almost publishable. <br /><br />*the video is capture at the game directly","vid":"pXyidbrz4B8"},{"title":"God Legion","msg":"This is a mobile game using obj-c game engine Cocos2d-iphone. It\'s a first mobile game that I made.<br />Work with a small team that R&D what we need to do and how, from design (study the idea from another game BattleHeart I love to play), to develop what the language is new, and everything from group to build up with content structure, animation, gameplay, to supporting tool for artist.<br /><br /> To be honestly, It\'s is comic IP in HK that help a lot we can get the Top3 at HK game appstore at that moment, and learn much on it.","vid":"lkZtfVtnYe0"},{"title":"Little Fighter Online","msg":"Beginning of my game dev career, A online game by using C++ with dx, that I learn much on the content control and game engine relation with core game play link to small pieces, like characters, animation, action, story telling, sound FX...etc.<br /><br />My main purpose to create content for the game to develop some new system for it, also making useful content supporting tools (VB) what I learn from school to edit every type of content file easier and do the validation.<br /><br />Also study a little on the server side architecture, at DB, python, socket. <br /><br />*this is a fans video for backup and referencethere have another game concept use the same core engine to dev a new game with new feature W3K","vid":"QQr1bBCstYg"},{"title":"War Three Kingdom","msg":"this is an other game using c++ & dx, develop from the base like LFO the early title from the same company, with another topic and develop improved system.<br /><br />More space at Up&Down, fighting system with combo customize, resource digging, and more like MMORPG with crafting system.","vid":"4mvLd6SNFpI"}]}')},29:function(e,t,i){},30:function(e,t,i){},56:function(e,t,i){"use strict";i.r(t);var n,a,o=i(0),s=i.n(o),r=i(16),c=i.n(r),d=(i(29),i(2)),h=i(7),l=i(4),u=i(6),p=i(5),m=(i.p,i(30),i(12)),g=i(8),b=g.default.div(n||(n=Object(m.a)(["\n    display: flex;\n"]))),j=g.default.div(a||(a=Object(m.a)(["\n    flex: ",";\n"])),(function(e){return e.size})),f=i.p+"static/media/LLogo.a95afc06.png",v=i(1),y=function(e){Object(u.a)(i,e);var t=Object(p.a)(i);function i(){var e;Object(d.a)(this,i);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).profile_pic="https://media-exp1.licdn.com/dms/image/C5103AQEGF69gSPnc1Q/profile-displayphoto-shrink_800_800/0/1578796896409?e=1620864000&v=beta&t=ieMrKbn9CGTaztL309nMusPlt9v9_0Ap5lfCKUXzYGw",e.linkedin_link="https://www.linkedin.com/in/pong-shum-4a00326a",e.linkedin_logo="/imgs/Ll-Logo.png",e}return Object(h.a)(i,[{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsxs)(b,{children:[Object(v.jsx)(j,{size:1,children:Object(v.jsx)("img",{alt:"Welcome",src:this.profile_pic,style:{width:200,height:200,borderRadius:100}})}),Object(v.jsxs)(j,{size:2,children:[Object(v.jsx)(b,{style:{height:"50%"}}),Object(v.jsx)(b,{children:Object(v.jsx)("h2",{children:this.props.name})})]})]}),Object(v.jsxs)(b,{children:[Object(v.jsx)(j,{size:1}),Object(v.jsx)(j,{children:Object(v.jsx)("a",{href:this.linkedin_link,target:"_blank",rel:"noreferrer",children:Object(v.jsx)("img",{src:f,style:{width:150}})})}),Object(v.jsx)(j,{size:1})]})]})}}]),i}(s.a.Component),w=i(20),O=i.n(w),x=i(21),k=null,C=function(e){Object(u.a)(i,e);var t=Object(p.a)(i);function i(e){var n;return Object(d.a)(this,i),(n=t.call(this,e)).pause=n.pause.bind(Object(l.a)(n)),n._onReady=n._onReady.bind(Object(l.a)(n)),n}return Object(h.a)(i,[{key:"_onReady",value:function(e){k=e,this.pause()}},{key:"pause",value:function(){k.target.pauseVideo()}},{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(x.a,{videoId:this.props.vid,opts:this.props.opts,onReady:this._onReady,host:"https://www.youtube.com"}),Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:this.props.title}),Object(v.jsx)("div",{className:"small_text",style:{textAlign:"left"},dangerouslySetInnerHTML:{__html:this.props.msg}})]})]})}}]),i}(s.a.Component),_=i(24),H=function(e){Object(u.a)(i,e);var t=Object(p.a)(i);function i(e){var n;return Object(d.a)(this,i),(n=t.call(this,e)).aryPrj=[],n.slideChangeHandler=function(e){console.log(e)},n.state={winWidth:0,winHeight:0,vidWidth:0,vidHeight:0},n.updateDimensions=n.updateDimensions.bind(Object(l.a)(n)),n.refreshVideoComponents=n.refreshVideoComponents.bind(Object(l.a)(n)),n}return Object(h.a)(i,[{key:"refreshVideoComponents",value:function(){var e=this;this.aryPrj=[],_.projects.forEach((function(t,i){e.aryPrj.push(Object(v.jsx)(C,{vid:t.vid,opts:{height:e.state.vidHeight,width:e.state.vidWidth},title:t.title,msg:t.msg},t.vid))}))}},{key:"componentDidMount",value:function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions)}},{key:"updateDimensions",value:function(){var e="undefined"!==typeof window?window.innerWidth:0,t="undefined"!==typeof window?window.innerHeight:0,i=.75*e,n=9*i/16;this.setState({winWidth:e,winHeight:t,vidWidth:i,vidHeight:n})}},{key:"render",value:function(){return this.refreshVideoComponents(),Object(v.jsx)("div",{className:"App",children:Object(v.jsxs)("header",{className:"App-header",children:[Object(v.jsx)(y,{name:"Ho Pong, Shum"}),Object(v.jsx)("div",{style:{width:"80vw",height:2*this.state.vidHeight,backgroundColor:"#282c40",paddingTop:"15px",margin:"10px"},children:Object(v.jsx)(O.a,{hasArrows:"true",onSlideChange:this.slideChangeHandler,children:this.aryPrj})})]})})}}]),i}(s.a.Component),L=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,57)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;i(e),n(e),a(e),o(e),s(e)}))};c.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(H,{})}),document.getElementById("root")),L()}},[[56,1,2]]]);
//# sourceMappingURL=main.1b9d65f0.chunk.js.map