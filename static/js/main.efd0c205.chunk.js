(this["webpackJsonpreact-starter-pack"]=this["webpackJsonpreact-starter-pack"]||[]).push([[0],{22:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var i=n(8),r=n(10),a=n(15),o=n.n(a),c=(n(22),n(12)),s=n(0),u=n(1),d=n(2),l=n(3),h=n(5),g=n(16),p=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={selectedFigure:"",figureSize:"",isFigureCreated:!1,correctInput:!0,figuresArray:[]},e.createFigure=function(){var t,n,i,r,a;window.addEventListener("resize",(function(){n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)}),!1),function(){t=new h.l,n=new h.i(75,window.innerWidth/window.innerHeight,.1,1e3),i=new h.q({antialias:!0});e.state.selectedFigure,e.state.figuresArray;i.setPixelRatio(window.devicePixelRatio),i.setSize(window.innerWidth,window.innerHeight),n.position.setZ(30),document.body.appendChild(i.domElement);var o=new h.b(1,1,1,11),s=new h.h({color:16737095});r=new h.g(o,s);var u=new h.j(16777215),d=new h.a(16777215),l=Array(3).fill().map((function(){return h.f.randFloatSpread(10)})),p=Object(c.a)(l,3),w=p[0],j=p[1],f=p[2];r.position.set(w,j,f),u.position.set(20,20,20);var b=new h.d(200,50);t.add(u,d,b),t.add(r),n.position.z=5,a=new g.a(n,i.domElement)}(),function e(){requestAnimationFrame(e),r.rotation.x+=.01,r.rotation.y+=.01,a.update(),i.render(t,n)}()},e.handleFigureChange=function(t){e.setState({selectedFigure:t.target.value}),e.state.figuresArray.push(t.target.value.toLowerCase()),console.log(e.state.figuresArray)},e.handleInputChange=function(t){"1234567890".includes(t.target.value)?e.setState({figureSize:t.target.value[1],correctInput:!0}):e.setState({correctInput:!1})},e.clearState=function(){e.setState({selectedFigure:"",figureSize:"",correctInput:!0})},e.handleSubmit=function(t){t.preventDefault(),e.state.correctInput&&(e.createFigure(),e.clearState()),console.log("inc")},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(i.jsxs)("select",{value:this.state.selectedFigure,name:"Figure",className:"figure-selector",onChange:this.handleFigureChange,required:!0,children:[Object(i.jsx)("option",{value:"",children:"Choose a figure"}),Object(i.jsx)("option",{value:"Box",children:"Box"}),Object(i.jsx)("option",{value:"Sphere",children:"Sphere"}),Object(i.jsx)("option",{value:"Piramyde",children:"Piramyde"})]}),Object(i.jsx)("input",{name:"Scale",className:"figure-size",required:!0,onChange:this.handleInputChange}),Object(i.jsx)("button",{type:"submit",className:"submitForm",children:"Create"}),Object(i.jsx)("div",{children:this.state.selectedFigure}),Object(i.jsx)("div",{children:this.state.figureSize})]})})}}]),n}(r.Component);o.a.render(Object(i.jsx)(p,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.efd0c205.chunk.js.map