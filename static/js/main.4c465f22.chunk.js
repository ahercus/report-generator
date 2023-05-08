(this["webpackJsonpyour-app-name"]=this["webpackJsonpyour-app-name"]||[]).push([[0],{110:function(e,t,n){},90:function(e,t,n){"use strict";t.a=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,138)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))}},92:function(e,t,n){"use strict";var a=n(42),r=n(52),i=n(8),c=n(91),o=n(189),s=n(0),l=n(54),u=n.n(l),d=n(3),m=n(14),b=n(49),j=n(198),p=n(199),f=n(200),h=n(191),x=n(194),O=n(195),v=n(186),g=n(196),y=n(192),C=n(190),S=n(197),w=n(187),k=n(2),W=[{name:"English Language Arts",functions:["Reading Comprehension","Writing Skills","Grammar","Vocabulary","Oral Communication","Listening Skills"]},{name:"Mathematics",functions:["Number Sense","Algebraic Skills","Geometry","Data Analysis","Problem Solving","Mathematical Reasoning"]},{name:"Science",functions:["Scientific Method","Lab Skills","Data Interpretation","Critical Thinking","Conceptual Understanding","Scientific Communication"]},{name:"Social Studies",functions:["Historical Knowledge","Geographical Skills","Civic Understanding","Economic Principles","Critical Thinking","Communication Skills"]},{name:"Physical Education",functions:["Motor Skills","Fitness","Teamwork","Sportsmanship","Personal Responsibility","Health and Wellness"]},{name:"Art",functions:["Creativity","Technique","Artistic Expression","Art History","Visual Literacy","Craftsmanship"]},{name:"Music",functions:["Musical Theory","Instrument Skills","Vocal Skills","Ensemble Performance","Music History","Creativity"]}],E=Object(w.a)(j.a)((function(e){var t=e.theme;return{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:t.spacing(2),backgroundColor:t.palette.background.paper,borderRadius:"8px",boxShadow:t.shadows[1],width:"80%",maxWidth:"800px"}})),T=Object(w.a)(j.a)((function(e){var t=e.theme;return{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center","& .MuiTextField-root":{margin:t.spacing(1),minWidth:"200px"},"& .MuiFormControl-root":{margin:t.spacing(1),minWidth:"240px"}}})),A=function(){var e,t,n=(null===(e=document.querySelector(".slider"))||void 0===e?void 0:e.clientWidth)-(null===(t=document.querySelector(".removeButton"))||void 0===t?void 0:t.clientWidth);return n>0?n:0},D=Object(w.a)(j.a)((function(e){var t=e.theme;return{backgroundColor:t.palette.background.paper,borderRadius:"8px",boxShadow:t.shadows[1],padding:t.spacing(1),marginTop:t.spacing(2),minHeight:"100px",overflowY:"auto"}})),G=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(s.useState)(""),l=Object(i.a)(o,2),w=l[0],G=l[1],F=Object(s.useState)(""),M=Object(i.a)(F,2),N=M[0],P=M[1],L=Object(s.useState)(""),R=Object(i.a)(L,2),I=R[0],B=R[1],H=Object(s.useState)(""),V=Object(i.a)(H,2),q=V[0],J=V[1],K=Object(s.useState)({}),U=Object(i.a)(K,2),Y=U[0],_=U[1],z=Object(s.useState)(""),Q=Object(i.a)(z,2),X=Q[0],Z=Q[1],$=Object(s.useState)(!1),ee=Object(i.a)($,2),te=ee[0],ne=ee[1],ae=Object(s.useState)(""),re=Object(i.a)(ae,2),ie=(re[0],re[1]),ce=Object(s.useState)([]),oe=Object(i.a)(ce,2),se=oe[0],le=oe[1],ue=N+" "+I,de=Object(s.useState)(!1),me=Object(i.a)(de,2),be=(me[0],me[1]);Object(s.useEffect)((function(){var e=W.find((function(e){return e.name===n}));e&&le(e.functions.map((function(e,t){return{id:t+1,name:e}})))}),[n]);var je=function(){return Object(k.jsx)(j.a,{sx:{display:"flex",justifyContent:"center",mt:1},children:Object(k.jsx)(p.a,{})})},pe=function(){var e=Object(r.a)(Object(a.a)().mark((function e(t){var r,i,c,o;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),ne(!0),ie(""),Z(""),e.prev=4,r=se.filter((function(e){return e.name})).map((function(e){return"".concat(e.name,": ").concat(Y[e.name]||5)})).join(", "),i={prompt:"Generate a thoughtful and detailed report card comment for ".concat(ue," studying grade ").concat(w," ").concat(n,". Refer to the student's specific performance, based on: ").concat(r,', but do not refer to the actual numbers. Provide relevant recommendations based on their performance. Draw upon the writing style of this sample: "').concat(q,'". Comment:'),max_tokens:150,temperature:.3},c={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat("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")}},e.next=10,u.a.post("https://api.openai.com/v1/engines/text-davinci-003/completions",i,c);case 10:o=e.sent,ne(!1),Z(o.data.choices[0].text.trim()),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(4),ne(!1),ie("Error generating comment: "+e.t0.message),console.error("Error generating comment:",e.t0);case 20:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(t){return e.apply(this,arguments)}}(),fe=Array.from({length:12},(function(e,t){return t+1}));return Object(k.jsxs)(j.a,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[Object(k.jsx)(f.a,{variant:"h4",sx:{mb:2},children:"Teacher Report Card Comment Generator"}),Object(k.jsxs)(E,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:pe,children:[Object(k.jsxs)(T,{children:[Object(k.jsx)(h.a,{label:"First Name",name:"firstName",variant:"outlined",value:N,onChange:function(e){P(e.target.value)}}),Object(k.jsx)(h.a,{label:"Last Name",name:"lastName",variant:"outlined",value:I,onChange:function(e){B(e.target.value)}}),Object(k.jsxs)(x.a,{variant:"outlined",children:[Object(k.jsx)(O.a,{htmlFor:"grade-select",children:"Grade"}),Object(k.jsx)(v.a,{label:"Grade",value:w,onChange:function(e){G(e.target.value)},input:Object(k.jsx)(g.a,{name:"grade",id:"grade-select"}),children:fe.map((function(e){return Object(k.jsx)(y.a,{value:e,children:e},e)}))})]}),Object(k.jsxs)(x.a,{variant:"outlined",children:[Object(k.jsx)(O.a,{htmlFor:"subject-select",children:"Subject"}),Object(k.jsx)(v.a,{label:"Subject",value:n,onChange:function(e){c(e.target.value)},input:Object(k.jsx)(g.a,{name:"subject",id:"subject-select"}),children:W.map((function(e){return Object(k.jsx)(y.a,{value:e.name,children:e.name},e.name)}))})]})]}),n&&Object(k.jsxs)(j.a,{sx:{mt:2,width:"100%"},children:[Object(k.jsx)(f.a,{variant:"h6",children:"Performance Scores:"}),Object(k.jsxs)(j.a,{sx:{display:"flex",justifyContent:"space-between",mt:-1,mb:1,ml:25,mr:A(),flexGrow:1,width:"65%"},children:[Object(k.jsx)(f.a,{variant:"body2",children:"Weak"}),Object(k.jsx)(f.a,{variant:"body2",children:"Developing"}),Object(k.jsx)(f.a,{variant:"body2",children:"Proficient"}),Object(k.jsx)(f.a,{variant:"body2",children:"Excels"})]}),se.map((function(e){return Object(k.jsxs)(j.a,{sx:{mt:2,display:"flex",alignItems:"center"},children:[Object(k.jsx)(h.a,{label:"Competency",value:e.name,placeholder:e.placeholder||"",onChange:function(t){return n=e.id,a=t.target.value,void le(se.map((function(e){return e.id===n?Object(b.a)(Object(b.a)({},e),{},{name:a}):e})));var n,a},sx:{minWidth:"200px",flexGrow:1}}),Object(k.jsx)(C.a,{className:"slider",value:Y[e.name]||5,onChange:function(t,n){return function(e,t){var n=se.find((function(t){return t.id===e}));n&&_(Object(b.a)(Object(b.a)({},Y),{},Object(d.a)({},n.name,t)))}(e.id,n)},step:1,marks:1===e.id?[1,3,5,7].map((function(e){return{value:e,label:""}})):null,min:1,max:7,valueLabelDisplay:"auto",sx:{mx:1,flexGrow:1,width:"100%"},labelPlacement:"top"}),Object(k.jsx)(S.a,{className:"removeButton",variant:"outlined",color:"error",onClick:function(){return t=e.id,void le(se.filter((function(e){return e.id!==t})));var t},sx:{ml:1},disabled:se.length<=1,children:"Remove"})]},e.id)})),Object(k.jsx)(S.a,{sx:{mt:2},variant:"contained",color:"primary",onClick:function(){var e=Math.max.apply(Math,Object(m.a)(se.map((function(e){return e.id}))))+1;le([].concat(Object(m.a)(se),[{id:e,name:"",placeholder:"Add competency"}]))},disabled:se.length>=10,children:"Add Competency"})]}),Object(k.jsx)(h.a,{id:"writing-sample",label:Object(k.jsx)(f.a,{noWrap:!1,children:"[Optional] Paste some of your own writing here. The tool will attempt to emulate your writing style."}),multiline:!0,rows:4,defaultValue:"",onChange:function(e){J(e.target.value)},variant:"outlined",fullWidth:!0,sx:{mt:2}}),Object(k.jsx)(S.a,{sx:{mt:2},type:"submit",variant:"contained",color:"primary",disabled:!N||!I||!w||!n,children:"Generate Comment"}),te&&Object(k.jsx)(je,{})]}),Object(k.jsxs)(j.a,{sx:{mt:4,mb:4,width:"80%",maxWidth:"800px",textAlign:"center"},children:[Object(k.jsx)(f.a,{variant:"h6",children:"Generated Comment:"}),Object(k.jsx)(D,{children:Object(k.jsx)(f.a,{children:X||"No comment generated yet."})}),X&&Object(k.jsx)(S.a,{type:"submit",sx:{mt:2,mx:"auto"},variant:"contained",color:"primary",onClick:function(){navigator.clipboard.writeText(X),be(!0)},children:"Copy to clipboard"})]})]})},F=Object(c.a)({palette:{primary:{main:"#6200ee"},secondary:{main:"#03dac6"},background:{default:"#f5f5f5",paper:"#ffffff"},text:{primary:"#212121",secondary:"#757575"},error:{main:"#b00020"},success:{main:"#4caf50"}},typography:{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif'}});t.a=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),n=t[0],c=(t[1],Object(s.useState)("")),l=Object(i.a)(c,2),d=l[0],m=l[1],b=function(){var e=Object(r.a)(Object(a.a)().mark((function e(t){var r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,u.a.post("https://api.openai.com/v1/tokens",{prompt:n});case 4:r=e.sent,m(r.data.choices[0].text),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error("Error generating text:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(k.jsx)(o.a,{theme:F,children:Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)("form",{onSubmit:b}),Object(k.jsx)("div",{children:Object(k.jsx)("p",{children:d})}),Object(k.jsx)(G,{})]})})}},94:function(e,t,n){"use strict";n.r(t),function(e,t){var a=n(0),r=n.n(a),i=n(27),c=n.n(i),o=(n(110),n(92)),s=n(90),l=n(2);"undefined"===typeof e&&(t.process={env:{NODE_ENV:"development"}}),c.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(o.a,{})}),document.getElementById("root")),Object(s.a)()}.call(this,n(72),n(105))}},[[94,1,2]]]);
//# sourceMappingURL=main.4c465f22.chunk.js.map