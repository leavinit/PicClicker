(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,image:"images/1.jpg",clicked:!1},{id:2,image:"images/2.jpg",clicked:!1},{id:3,image:"images/3.jpg",clicked:!1},{id:4,image:"images/4.jpg",clicked:!1},{id:5,image:"images/5.jpg",clicked:!1},{id:6,image:"images/6.jpg",clicked:!1},{id:7,image:"images/7.jpg",clicked:!1},{id:8,image:"images/8.jpg",clicked:!1},{id:9,image:"images/9.jpg",clicked:!1},{id:10,image:"images/10.jpg",clicked:!1},{id:11,image:"images/11.jpg",clicked:!1},{id:12,image:"images/12.jpg",clicked:!1}]},,,function(e,a,c){e.exports=c(21)},,,,,,function(e,a,c){},function(e,a,c){},function(e,a,c){},function(e,a,c){},function(e,a,c){},function(e,a,c){},function(e,a,c){"use strict";c.r(a);var t=c(0),i=c.n(t),n=c(2),r=c.n(n),l=c(3),o=c(4),m=c(7),s=c(5),g=c(8);c(15);var d=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)},u=c(6);c(16);var f=function(e){return console.log(e.clicked),i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image,onClick:function(){e.clickHandler()}})))};c(17);var k=function(){return i.a.createElement("div",{className:"jumbotron text-center"},i.a.createElement("h1",{className:"font-weight-bold"},"PicClicker"),i.a.createElement("h3",null,"Don't click on an image more than once to boost your score! Click an image twice? Time to try again."))};c(18);var v=function(e){return i.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},i.a.createElement("a",{className:"navbar-brand",href:"/"},"Score: ",e.gameScore))};var j=function(e){for(var a=[],c=e.length-1;c>=0;c--)for(var t=Math.floor(Math.random()*(c+1)),i=0,n=0;i<=e.length-1;i++)if(void 0===a[i]){if(n===t){a[i]=e[c];break}n++}return a};c(19);function p(e){var a=e.fluid,c=e.children;return i.a.createElement("div",{className:"container".concat(a?"-fluid":"")},c)}var h=function(e){function a(){var e,c;Object(l.a)(this,a);for(var t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];return(c=Object(m.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(i)))).state={gameScore:0,imagesObj:u},c.shuffle=function(){var e=j(c.state.imagesObj);c.setState({imagesObj:e})},c.incrementScore=function(){c.setState({gameScore:c.state.gameScore+1})},c.resetScore=function(){c.setState({gameScore:0})},c.clickHandler=function(){if(c.clicked){c.resetScore();var e=c.state.imagesObj;e.forEach=function(e){return e.clicked=!1},c.setState({imagesObj:e}),c.shuffle()}else{var a=c.state.imagesObj;c.incrementScore(),c.shuffle(),c.clicked=!0,a.forEach=function(e){e.clicked&&(console.log(e.clicked),console.log(e.id))}}},c}return Object(g.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(k,null),i.a.createElement(v,{gameScore:this.state.gameScore}),i.a.createElement(p,null,i.a.createElement(d,null,this.state.imagesObj.map(function(a){return i.a.createElement(f,{key:a.id,id:a.id,image:a.image,clicked:a.clicked,clickHandler:e.clickHandler,reset:e.resetScore})}))))}}]),a}(i.a.Component);c(20);r.a.render(i.a.createElement(h,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.cd190e2c.chunk.js.map