(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},16:function(e,a,t){},18:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(8),i=t.n(s),l=(t(14),t(1)),o=t(2),u=t(3),d=t(5),c=t(4),m=t(6),p=(t(16),t(18),function(e){function a(){return Object(o.a)(this,a),Object(d.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(u.a)(a,[{key:"renderIsQualified",value:function(e){return e?void 0:r.a.createElement("div",{className:"danger"},r.a.createElement("p",null,r.a.createElement("strong",null,"OBS!")," ",r.a.createElement("br",null),"Du \xe4r ej beh\xf6rig f\xf6r vidare studier. ",r.a.createElement("br",null),"F\xf6r att n\xe5 en h\xf6gskolef\xf6rberedande examen ska du ha minst 90 procent godk\xe4nda betyg p\xe5 en utbildning som omfattar 2500 gymnasiepo\xe4ng. Betygen i kurserna svenska/svenska som andraspr\xe5k 1, 2, 3, engelska 5, 6 och matematik 1 samt gymnasiearbetet ska vara godk\xe4nda. En h\xf6gskolef\xf6rberedande examen ger grundl\xe4ggande beh\xf6righet till h\xf6gskoleutbildning p\xe5 grundniv\xe5."))}},{key:"render",value:function(){return r.a.createElement("div",{className:"calculatedGrade"},r.a.createElement("div",null,this.renderIsQualified(this.props.isQualified)),r.a.createElement("div",null,r.a.createElement("div",null,"Klarade po\xe4ng:  ",r.a.createElement("span",{className:"floatRight"},this.props.passedPoints))),r.a.createElement("div",null,r.a.createElement("div",null,"Ditt meritv\xe4rde \xe4r: ",r.a.createElement("span",{className:"floatRight"},Math.round(10*this.props.grade)/10))),r.a.createElement("div",null,"Ditt totala meritv\xe4rde \xe4r:",r.a.createElement("div",{className:"floatRight"},Math.round(10*this.props.totalGrade)/10)))}}]),a}(n.Component)),g={Naturvetenskapsprogrammet:[{name:"Engelska 5",points:100,grade:"F",required:!0},{name:"Engelska 6",points:100,grade:"F",required:!1},{name:"Historia 1b",points:100,grade:"F",required:!1},{name:"Idrott och h\xe4lsa 1",points:100,grade:"F",required:!1},{name:"Matematik 1c",points:100,grade:"F",required:!0},{name:"Matematik 2c",points:100,grade:"F",required:!1},{name:"Matematik 3c",points:100,grade:"F",required:!1},{name:"Religionskunskap 1",points:50,grade:"F",required:!1},{name:"Samh\xe4llskunskap 1b",points:100,grade:"F",required:!1},{name:"Svenska 1 / Svenska som andraspr\xe5k 1",points:100,grade:"F",required:!0},{name:"Svenska 2 / Svenska som andraspr\xe5k 2",points:100,grade:"F",required:!1},{name:"Svenska 1 / Svenska som andraspr\xe5k 1",points:100,grade:"F",required:!1},{name:"Biologi 1",points:100,grade:"F",required:!1},{name:"Kemi 1",points:100,grade:"F",required:!1},{name:"Fysik 1a",points:150,grade:"F",required:!1},{name:"Moderna spr\xe5k",points:100,grade:"F",required:!1}],"Samh\xe4llsvetenskapsprogrammet":[{name:"Engelska 5",points:100,grade:"F",required:!0},{name:"Engelska 6",points:100,grade:"F",required:!1},{name:"Historia 1b",points:100,grade:"F",required:!1},{name:"Idrott och h\xe4lsa 1",points:100,grade:"F",required:!1},{name:"Matematik 1b",points:100,grade:"F",required:!0},{name:"Matematik 2b",points:100,grade:"F",required:!1},{name:"Naturkunskap 1b",points:100,grade:"F",required:!1},{name:"Religionskunskap 1",points:50,grade:"F",required:!1},{name:"Samh\xe4llskunskap 1b",points:100,grade:"F",required:!1},{name:"Svenska 1 / Svenska som andraspr\xe5k 1",points:100,grade:"F",required:!0},{name:"Svenska 2 / Svenska som andraspr\xe5k 2",points:100,grade:"F",required:!1},{name:"Svenska 3 / Svenska som andraspr\xe5k 3",points:100,grade:"F",required:!1},{name:"Filosofi 1",points:50,grade:"F",required:!1},{name:"Psykologi 1",points:50,grade:"F",required:!1},{name:"Moderna spr\xe5k",points:200,grade:"F",required:!1}]},h=function(e){function a(){return Object(o.a)(this,a),Object(d.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"course"},r.a.createElement("div",null,r.a.createElement("input",{alt:"Kursnamn",className:"name",type:"text",value:this.props.course.name,onChange:this.props.handleCourseChange})),r.a.createElement("div",null,r.a.createElement("input",{alt:"Antal po\xe4ng",type:"number",min:"0",max:"200",value:this.props.course.points,onChange:this.props.handleCourseChange})),r.a.createElement("div",null,r.a.createElement("select",{name:"Betyg",value:this.props.course.grade,onChange:this.props.handleCourseChange},r.a.createElement("option",{value:"A"},"A"),r.a.createElement("option",{value:"B"},"B"),r.a.createElement("option",{value:"C"},"C"),r.a.createElement("option",{value:"D"},"D"),r.a.createElement("option",{value:"E"},"E"),r.a.createElement("option",{value:"F"},"F"))),r.a.createElement("div",null,r.a.createElement("button",{className:"small-button",onClick:function(){return e.props.delete()}},r.a.createElement("i",{className:"item far fa-trash-alt"}))))}}]),a}(n.Component),v=function(e){function a(e){var t;Object(o.a)(this,a),(t=Object(d.a)(this,Object(c.a)(a).call(this,e))).educations=g;var n=t.educations.Naturvetenskapsprogrammet;return console.log(t.educations[0]),console.log(n),t.state={courses:n,selected:"Naturvetenskapsprogrammet",calculatedGrade:!1,meritPoints:0,totalGrade:0,isQualified:!1,passedPoints:0},t.handleEducationChange=t.handleEducationChange.bind(Object(l.a)(Object(l.a)(t))),t.handleCourseChange=t.handleCourseChange.bind(Object(l.a)(Object(l.a)(t))),t.handleMeritPointsChange=t.handleMeritPointsChange.bind(Object(l.a)(Object(l.a)(t))),t.calculateGrade=t.calculateGrade.bind(Object(l.a)(Object(l.a)(t))),t.renderCalculatedGrade=t.renderCalculatedGrade.bind(Object(l.a)(Object(l.a)(t))),t}return Object(m.a)(a,e),Object(u.a)(a,[{key:"delete",value:function(e){var a=this.state.courses;a[e].required&&alert("Notera att du beh\xf6ver vara godk\xe4nd i kursen f\xf6r att f\xe5 h\xf6gskolebeh\xf6righet!"),a.splice(e,1),this.setState({courses:a})}},{key:"handleMeritPointsChange",value:function(e){var a=parseFloat(e.target.value);a<0||isNaN(a)?a="":a>2.5&&(a=2.5),this.setState({meritPoints:a})}},{key:"handleTotalGradeUpdate",value:function(e){var a=parseFloat(e.target.value),t=a+this.state.calculatedGrade;console.log("totalt: ",t),this.setState({meritPoints:a,totalGrade:t})}},{key:"handleEducationChange",value:function(e){var a=e.target.value,t=this.educations[a];console.log(t),this.setState({courses:t,selected:e.target.value})}},{key:"handleCourseChange",value:function(e,a){var t=this.state.courses.slice(),n=t[a];n.required&&"Betyg"!==e.target.name?alert("Kursen \xe4r obligatorisk f\xf6r att f\xe5 h\xf6gskolebeh\xf6righet!"):("Antal po\xe4ng"===e.target.alt?n.points=Number(e.target.value):"Kursnamn"===e.target.alt?n.name=e.target.value:"Betyg"===e.target.name&&(n.grade=e.target.value),t[a]=n,this.setState({courses:t}))}},{key:"addCourse",value:function(){var e=this.state.courses.slice();e.push({name:"Kursnamn",points:100,grade:"F",required:!1}),this.setState({courses:e})}},{key:"renderCourse",value:function(e){var a=this;return r.a.createElement(h,{course:this.state.courses[e],delete:function(){return a.delete(e)},handleCourseChange:function(t){return a.handleCourseChange(t,e)}})}},{key:"renderCourses",value:function(){var e=this;return r.a.createElement("div",{className:"coursesGrid"},r.a.createElement("div",{className:"course course-heading"},r.a.createElement("div",null,"Kursnamn"),r.a.createElement("div",null,"Po\xe4ng"),r.a.createElement("div",null,"Betyg")),this.state.courses.map(function(a,t){return r.a.createElement("div",{key:t},e.renderCourse(t))}))}},{key:"calculateGrade",value:function(){var e=0,a=0,t=!0,n=0,r=!0,s=!1,i=void 0;try{for(var l,o=this.state.courses[Symbol.iterator]();!(r=(l=o.next()).done);r=!0){var u=l.value;switch(e+=u.points,u.grade){case"A":a+=20*u.points,n+=u.points;break;case"B":a+=17.5*u.points,n+=u.points;break;case"C":a+=15*u.points,n+=u.points;break;case"D":a+=12.5*u.points,n+=u.points;break;case"E":a+=10*u.points,n+=u.points;break;case"F":u.required&&(t=!1)}}}catch(m){s=!0,i=m}finally{try{r||null==o.return||o.return()}finally{if(s)throw i}}var d=a/e;console.log("merit",this.state.meritPoints);var c=d+this.state.meritPoints;console.log(this.state),n<2250&&(t=!1),this.setState({calculatedGrade:d,totalGrade:c,isQualified:t,passedPoints:n})}},{key:"renderCalculatedGrade",value:function(){return!1!==this.state.calculatedGrade?r.a.createElement(p,{grade:this.state.calculatedGrade,meritPoints:this.state.meritPoints,totalGrade:this.state.totalGrade,isQualified:this.state.isQualified,passedPoints:this.state.passedPoints}):void 0}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"grid card"},r.a.createElement("div",null,"V\xe4lj program:",r.a.createElement("select",{className:"margin floatRight",value:this.state.selected,onChange:this.handleEducationChange},Object.keys(this.educations).map(function(e,a){return r.a.createElement("option",{key:a,value:e},e)}))),r.a.createElement("div",null,this.renderCourses()),r.a.createElement("div",null,r.a.createElement("button",{className:"small-button floatRight",onClick:function(){return e.addCourse()}},r.a.createElement("i",{className:"fas fa-plus"}))),r.a.createElement("div",null,"L\xe4gg till meritpo\xe4ng:",r.a.createElement("input",{className:"merit-points",alt:"Antal po\xe4ng",type:"number",min:"0",max:"2.5",value:this.state.meritPoints,onChange:this.handleMeritPointsChange})),r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("button",{className:"calculate floatRight",onClick:this.calculateGrade},"Ber\xe4kna meritv\xe4rde")),r.a.createElement("div",null,this.renderCalculatedGrade())))}}]),a}(n.Component),k=function(e){function a(){return Object(o.a)(this,a),Object(d.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(v,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,t){e.exports=t(20)}},[[9,2,1]]]);
//# sourceMappingURL=main.15a0ba22.chunk.js.map