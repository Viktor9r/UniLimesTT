(this["webpackJsonpreact-starter-pack"]=this["webpackJsonpreact-starter-pack"]||[]).push([[0],{22:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var i=n(8),r=n(10),a=n(15),c=n.n(a),s=(n(22),n(12)),o=n(0),u=n(1),d=n(2),l=n(3),h=n(5),g=n(16),p=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={selectedFigure:"",figureSize:"",isFigureCreated:!1,correctInput:!0,figuresArray:[]},e.createFigure=function(){var t,n,i,r,a,c;window.addEventListener("resize",(function(){n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)}),!1),function(){t=new h.m,n=new h.j(75,window.innerWidth/window.innerHeight,.1,1e3),i=new h.s({antialias:!0});e.state.selectedFigure,e.state.figuresArray;i.setPixelRatio(window.devicePixelRatio),i.setSize(window.innerWidth,window.innerHeight),n.position.setZ(30),document.body.appendChild(i.domElement),"Box"===e.state.selectedFigure?a=new h.b(1,1,1,11):"Sphere"===e.state.selectedFigure?a=new h.n(15,32,16):"Circle"===e.state.selectedFigure&&(a=new h.c(5,32));var o=new h.i({color:16737095});c=new h.h(a,o);var u=new h.k(16777215),d=new h.a(16777215),l=Array(3).fill().map((function(){return h.g.randFloatSpread(10)})),p=Object(s.a)(l,3),w=p[0],j=p[1],f=p[2];c.position.set(w,j,f),u.position.set(20,20,20);var b=new h.e(200,50);t.add(u,d,b),t.add(c),n.position.z=5,r=new g.a(n,i.domElement)}(),function e(){requestAnimationFrame(e),c.rotation.x+=.01,c.rotation.y+=.01,r.update(),i.render(t,n)}()},e.handleFigureChange=function(t){e.setState({selectedFigure:t.target.value}),e.state.figuresArray.push(t.target.value.toLowerCase()),console.log(e.state.figuresArray)},e.handleInputChange=function(t){"1234567890".includes(t.target.value)?e.setState({figureSize:t.target.value[1],correctInput:!0}):e.setState({correctInput:!1})},e.clearState=function(){e.setState({selectedFigure:"",figureSize:"",correctInput:!0})},e.handleSubmit=function(t){t.preventDefault(),e.state.correctInput&&(e.createFigure(),e.clearState()),console.log("inc")},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(i.jsxs)("select",{value:this.state.selectedFigure,name:"Figure",className:"figure-selector",onChange:this.handleFigureChange,required:!0,children:[Object(i.jsx)("option",{value:"",children:"Choose a figure"}),Object(i.jsx)("option",{value:"Box",children:"Box"}),Object(i.jsx)("option",{value:"Sphere",children:"Sphere"}),Object(i.jsx)("option",{value:"Circle",children:"Circle"})]}),Object(i.jsx)("input",{name:"Scale",className:"figure-size",required:!0,onChange:this.handleInputChange}),Object(i.jsx)("button",{type:"submit",className:"submitForm",children:"Create"}),Object(i.jsx)("div",{children:this.state.selectedFigure}),Object(i.jsx)("div",{children:this.state.figureSize})]})})}}]),n}(r.Component);c.a.render(Object(i.jsx)(p,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.06f6333b.chunk.js.map