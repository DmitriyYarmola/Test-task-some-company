!function(e){function t(t){for(var a,o,c=t[0],l=t[1],u=t[2],m=0,d=[];m<c.length;m++)o=c[m],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(p&&p(t);d.length;)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,c=1;c<n.length;c++){var l=n[c];0!==r[l]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={0:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var p=l;i.push([241,1]),n()}({241:function(e,t,n){n(242),e.exports=n(538)},538:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"announcements",(function(){return S}));var r,i,o,c,l,u,p,m,d,s,f,g,E,x,y,b,h,v,j,O,w,C,P,A,N=n(0),k=n.n(N),T=n(25),z=n.n(T),D=n(121),V=n(58),I=n(93),S=function(e){return e.AnnouncementRootReducer.announcements},_=function(){return(_=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},M=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var a=Array(e),r=0;for(t=0;t<n;t++)for(var i=arguments[t],o=0,c=i.length;o<c;o++,r++)a[r]=i[o];return a},R={announcements:[{title:"test",description:"test descr",createdAt:"11 2032 09 15:55",id:1}]},U=function(e){return{type:"CREATE_ANNOUNCEMENT",payload:e}},q=function(e){return{type:"DELETE_ANNOUNCEMENT",payload:e}},F=function(e){return{type:"EDIT_ANNOUNCEMENT",payload:e}},L=Object(I.b)({AnnouncementRootReducer:function(e,t){switch(void 0===e&&(e=R),t.type){case"CREATE_ANNOUNCEMENT":return _(_({},e),{announcements:M([t.payload],e.announcements)});case"DELETE_ANNOUNCEMENT":return _(_({},e),{announcements:M(e.announcements.filter((function(e){return e.id!==t.payload})))});case"EDIT_ANNOUNCEMENT":return _(_({},e),{announcements:M(e.announcements.map((function(e){return e.id===t.payload.id?t.payload:e})))});default:return e}}}),J=Object(I.c)(L),B=n(5),G=n(6),H=n(542),K=n(539),Q=n(541),W=n(169),X=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Y=G.a.div(r||(r=X(["\n\tposition: absolute;\n\tz-index: 5;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tbackground: rgba(0, 0, 0, 0.5);\n"],["\n\tposition: absolute;\n\tz-index: 5;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tbackground: rgba(0, 0, 0, 0.5);\n"]))),Z=G.a.div(i||(i=X(["\n\twidth: max-content;\n\theight: max-content;\n\tbackground: rgba(255, 255, 255, 1);\n\tposition: absolute;\n\tz-index: 10;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\tborder-radius: 5px;\n\tpadding: 15px;\n"],["\n\twidth: max-content;\n\theight: max-content;\n\tbackground: rgba(255, 255, 255, 1);\n\tposition: absolute;\n\tz-index: 10;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\tborder-radius: 5px;\n\tpadding: 15px;\n"]))),$=function(e){var t=e.children,n=Object(B.h)().state;return console.log("state",n),k.a.createElement(Y,null,k.a.createElement(Z,null,t))},ee=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},te=G.a.div(o||(o=ee(["\n\tdisplay: grid;\n\tgrid-template-columns: repeat(2, max-content);\n\tgrid-column-gap: 15px;\n\tjustify-content: center;\n"],["\n\tdisplay: grid;\n\tgrid-template-columns: repeat(2, max-content);\n\tgrid-column-gap: 15px;\n\tjustify-content: center;\n"]))),ne=G.a.div(c||(c=ee(["\n\tfont-size: 25px;\n\tmargin: 0 auto;\n\twidth: max-content;\n\tmargin-bottom: 15px;\n"],["\n\tfont-size: 25px;\n\tmargin: 0 auto;\n\twidth: max-content;\n\tmargin-bottom: 15px;\n"]))),ae=function(e){var t=e.onSubmit,n=e.onCancel;return k.a.createElement($,null,k.a.createElement(ne,null,"Create announcement"),k.a.createElement(K.a,{name:"create",initialValues:{remember:!0},onFinish:t},k.a.createElement(K.a.Item,{name:"title",rules:[{required:!0,message:"Please input title of announcement!"}]},k.a.createElement(Q.a,{placeholder:"input title"})),k.a.createElement(K.a.Item,{name:"description",rules:[{required:!0,message:"Please input description of announcement!"}]},k.a.createElement(Q.a,{placeholder:"input description"})),k.a.createElement(K.a.Item,null,k.a.createElement(te,null,k.a.createElement(W.a,{type:"primary",htmlType:"submit"},"Create"),k.a.createElement(W.a,{type:"primary",danger:!0,onClick:n},"Cancel")))))},re=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},ie=G.a.div(l||(l=re(["\n\tdisplay: grid;\n\tgrid-template-columns: repeat(2, max-content);\n\tgrid-column-gap: 15px;\n\tjustify-content: center;\n"],["\n\tdisplay: grid;\n\tgrid-template-columns: repeat(2, max-content);\n\tgrid-column-gap: 15px;\n\tjustify-content: center;\n"]))),oe=G.a.div(u||(u=re(["\n\tfont-size: 25px;\n\tmargin: 0 auto;\n\twidth: max-content;\n\tmargin-bottom: 15px;\n"],["\n\tfont-size: 25px;\n\tmargin: 0 auto;\n\twidth: max-content;\n\tmargin-bottom: 15px;\n"]))),ce=function(e){var t=e.onSubmit,n=e.onCancel,a=e.initialValues;return k.a.createElement($,null,k.a.createElement(oe,null,"Edit announcement"),k.a.createElement(K.a,{name:"create",initialValues:a,onFinish:t},k.a.createElement(K.a.Item,{name:"title",rules:[{required:!0,message:"Please input title of announcement!"}]},k.a.createElement(Q.a,{placeholder:"input title"})),k.a.createElement(K.a.Item,{name:"description",rules:[{required:!0,message:"Please input description of announcement!"}]},k.a.createElement(Q.a,{placeholder:"input description"})),k.a.createElement(K.a.Item,null,k.a.createElement(ie,null,k.a.createElement(W.a,{type:"primary",danger:!0,onClick:n},"Cancel"),k.a.createElement(W.a,{type:"primary",htmlType:"submit"},"Done")))))},le=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},ue=G.a.span(p||(p=le(["\n\tfont-weight: bold;\n\tfont-size: 25px;\n"],["\n\tfont-weight: bold;\n\tfont-size: 25px;\n"]))),pe=G.a.div(m||(m=le(["\n\tdisplay: grid;\n\tgrid-template-columns: repeat(2, max-content);\n\tgrid-column-gap: 15px;\n\tjustify-content: center;\n\tmargin-top: 15px;\n"],["\n\tdisplay: grid;\n\tgrid-template-columns: repeat(2, max-content);\n\tgrid-column-gap: 15px;\n\tjustify-content: center;\n\tmargin-top: 15px;\n"]))),me=G.a.div(d||(d=le([""],[""]))),de=function(e){var t=e.onCancel,n=e.onDone;return k.a.createElement($,null,k.a.createElement(me,null,k.a.createElement(ue,null,"Are you sure?"),k.a.createElement(pe,null,k.a.createElement(W.a,{type:"dashed",danger:!0,onClick:t},"Cancel"),k.a.createElement(W.a,{type:"dashed",onClick:n},"Done"))))},se=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},fe=G.a.div(s||(s=se(["\n\tdisplay: grid;\n\tgrid-template-columns: repeat(2, max-content);\n\tgrid-column-gap: 15px;\n\tjustify-content: center;\n"],["\n\tdisplay: grid;\n\tgrid-template-columns: repeat(2, max-content);\n\tgrid-column-gap: 15px;\n\tjustify-content: center;\n"]))),ge=G.a.div(f||(f=se(["\n\tfont-size: 25px;\n\tmargin: 0 auto;\n\twidth: max-content;\n\tmargin-bottom: 15px;\n"],["\n\tfont-size: 25px;\n\tmargin: 0 auto;\n\twidth: max-content;\n\tmargin-bottom: 15px;\n"]))),Ee=G.a.div(g||(g=se([""],[""]))),xe=G.a.div(E||(E=se(["\n\tfont-size: 20px;\n"],["\n\tfont-size: 20px;\n"]))),ye=G.a.div(x||(x=se(["\n\twidth: max-content;\n\tmargin: 0 auto 15px;\n"],["\n\twidth: max-content;\n\tmargin: 0 auto 15px;\n"]))),be=function(e){var t=e.onClose,n=e.initialValues,a=e.similar;return k.a.createElement($,null,k.a.createElement(ge,null,"View announcement"),k.a.createElement(K.a,{name:"create",initialValues:n},k.a.createElement(K.a.Item,null,k.a.createElement(Ee,null,"Title: ",n.title)),k.a.createElement(K.a.Item,null,k.a.createElement(Ee,null,"Description: ",n.description)),k.a.createElement(K.a.Item,null,k.a.createElement(Ee,null,"Created at ",n.createdAt)),k.a.createElement(k.a.Fragment,null,k.a.createElement(xe,null,"Similar announcements:"),0!==a.length?a.map((function(e,t){return t<=2&&k.a.createElement(K.a.Item,{key:e.id},k.a.createElement(Ee,null,"Title: ",e.title),k.a.createElement(Ee,null,"Description: ",e.description))})):k.a.createElement(ye,null,"Items not found")),k.a.createElement(K.a.Item,null,k.a.createElement(fe,null,k.a.createElement(W.a,{type:"primary",danger:!0,onClick:t},"Close")))))},he=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},ve=G.a.div(y||(y=he([""],[""]))),je=function(e){var t=e.onChange,n=e.value;return k.a.createElement(ve,null,k.a.createElement(Q.a,{onChange:function(e){t(e.currentTarget.value)},value:n,placeholder:"search announcement"}))},Oe=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},we=G.a.div(b||(b=Oe(["\n\tdisplay: grid;\n\tgrid-template-columns: repeat(2, 300px);\n\tgrid-column-gap: 15px;\n\tmargin: 5px;\n\tborder: 1px solid rgba(232, 232, 232, 1);\n\twidth: max-content;\n\tborder-radius: 5px;\n\tpadding: 15px;\n"],["\n\tdisplay: grid;\n\tgrid-template-columns: repeat(2, 300px);\n\tgrid-column-gap: 15px;\n\tmargin: 5px;\n\tborder: 1px solid rgba(232, 232, 232, 1);\n\twidth: max-content;\n\tborder-radius: 5px;\n\tpadding: 15px;\n"]))),Ce=G.a.span(h||(h=Oe(["\n\ttext-align: left;\n\tfont-size: 20px;\n"],["\n\ttext-align: left;\n\tfont-size: 20px;\n"]))),Pe=G.a.div(v||(v=Oe(["\n\tdisplay: grid;\n\tgrid-template-columns: repeat(3, max-content);\n\tgrid-column-gap: 15px;\n\tjustify-content: end;\n"],["\n\tdisplay: grid;\n\tgrid-template-columns: repeat(3, max-content);\n\tgrid-column-gap: 15px;\n\tjustify-content: end;\n"]))),Ae=function(e){var t=e.id,n=e.title,a=e.description,r=e.createdAt,i=e.onDelete,o=e.onEdit,c=e.onView;return k.a.createElement(we,null,k.a.createElement(Ce,null,n),k.a.createElement(Pe,null,k.a.createElement(W.a,{type:"dashed",onClick:function(){return c(t,n,a,r)}},"View"),k.a.createElement(W.a,{type:"dashed",onClick:function(){return o(t,n,a)}},"Edit"),k.a.createElement(W.a,{type:"dashed",danger:!0,onClick:function(){return i(t)}},"Delete")))},Ne=function(e){var t=e.onClick,n=e.text;return k.a.createElement(W.a,{type:"primary",onClick:t},n)},ke=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Te=(G.a.div(j||(j=ke(["\n\tdisplay: grid;\n\tjustify-content: center;\n"],["\n\tdisplay: grid;\n\tjustify-content: center;\n"]))),G.a.div(O||(O=ke(["\n\tdisplay: grid;\n\tgrid-template-columns: max-content 300px;\n\tjustify-content: center;\n\tcolumn-gap: 600px;\n\tmargin-bottom: 25px;\n"],["\n\tdisplay: grid;\n\tgrid-template-columns: max-content 300px;\n\tjustify-content: center;\n\tcolumn-gap: 600px;\n\tmargin-bottom: 25px;\n"])))),ze=G.a.div(w||(w=ke(["\n\tdisplay: grid;\n\tjustify-content: center;\n"],["\n\tdisplay: grid;\n\tjustify-content: center;\n"]))),De=G.a.div(C||(C=ke(["\n\tfont-size: 25px;\n"],["\n\tfont-size: 25px;\n"]))),Ve=function(e){var t=e.announcements,n=Object(N.useState)(""),a=n[0],r=n[1],i=Object(N.useState)([]),o=i[0],c=i[1],l=Object(B.g)();Object(N.useEffect)((function(){var e=t.filter((function(e){return e.title.toLowerCase().includes(a)}));c(e)}),[t,a]);var u=function(e,t,n){l.push({pathname:"/edit",state:{initialValues:{id:e,title:t,description:n}}})},p=function(e){l.push({pathname:"/delete",state:{id:e}})},m=Object(N.useCallback)((function(e,n,a,r){var i=t.filter((function(t){return function(e,t,n,a){for(var r=t.split(" "),i=n.split(" "),o=a.id!==e,c=r.length>i.length?r.length:i.length,l=0;l<c;l++)for(var u=a.title.split(" "),p=a.description.split(" "),m=u.length>p.length?u.length:p.length,d=0;d<m;d++){var s=u[d]===r[l],f=u[d]===i[l],g=p[d]===r[l],E=p[d]===i[l];if(s&&E&&o&&f&&g)return a}}(e,n,a,t)}));l.push({pathname:"/view",state:{id:e,title:n,description:a,createdAt:r,similar:i}})}),[t,l]),d=o.map((function(e){return k.a.createElement(Ae,{key:e.id,description:e.description,title:e.title,createdAt:e.createdAt,onDelete:p,onEdit:u,onView:m,id:e.id})}));return k.a.createElement(k.a.Fragment,null,k.a.createElement(Te,null,k.a.createElement(Ne,{onClick:function(){l.push({pathname:"/create"})},text:"Create announcement"}),k.a.createElement(je,{onChange:function(e){return r(e)},value:a})),k.a.createElement(ze,null,0!==o.length?d:k.a.createElement(De,null,"Announcements not found")))},Ie=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Se=G.a.div(P||(P=Ie(["\n\tmargin-top: 25px;\n"],["\n\tmargin-top: 25px;\n"]))),_e=[{exact:!1,Component:function(){var e=Object(V.c)(a.announcements);return k.a.createElement(Se,null,k.a.createElement(Ve,{announcements:e}))},path:"/"}],Me=[{exact:!1,Component:function(){var e=Object(B.g)(),t=Object(V.b)();return k.a.createElement(ae,{onSubmit:function(n){var a={title:n.title,description:n.description,createdAt:(new Date).toLocaleString(),id:Date.now()};t(U(a)),e.push("/"),H.b.success("Announcement created successful")},onCancel:function(){e.push("/")}})},path:"/create"},{exact:!0,Component:function(){var e=Object(B.g)(),t=Object(B.h)(),n=Object(V.b)(),a=t.state;if(!a)return k.a.createElement(B.a,{to:"/"});return k.a.createElement(ce,{onSubmit:function(t){var r={title:t.title,description:t.description,id:a.initialValues.id,createdAt:a.initialValues.createdAt};n(F(r)),e.push("/"),H.b.success("Announcement edited successful")},onCancel:function(){e.push("/")},initialValues:a.initialValues})},path:"/edit"},{exact:!0,Component:function(){var e=Object(B.g)(),t=Object(B.h)().state;if(!t)return k.a.createElement(B.a,{to:"/"});var n=t.id,a=t.title,r=t.description,i=t.createdAt,o=t.similar;return k.a.createElement(be,{onClose:function(){e.push("/")},initialValues:{id:n,title:a,description:r,createdAt:i},similar:o})},path:"/view"},{exact:!0,Component:function(){var e=Object(B.h)(),t=Object(B.g)(),n=Object(V.b)(),a=e.state;if(!a)return k.a.createElement(B.a,{to:"/"});return k.a.createElement(de,{onDone:function(){n(q(a.id)),t.push("/")},onCancel:function(){t.push("/")}})},path:"/delete"}],Re=(n(537),function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}),Ue=G.a.div(A||(A=Re(["\n\twidth: 100%;\n\tmax-width: 1200px;\n\tmargin: 0 auto;\n"],["\n\twidth: 100%;\n\tmax-width: 1200px;\n\tmargin: 0 auto;\n"])));z.a.render(k.a.createElement(D.a,null,k.a.createElement(V.a,{store:J},k.a.createElement((function(){return k.a.createElement(Ue,null,k.a.createElement(B.b,{render:function(e){return k.a.createElement(B.d,{location:e.location},_e.map((function(e){var t=e.path,n=e.Component,a=e.exact;return k.a.createElement(B.b,{path:t,key:t,exact:a,render:function(){return k.a.createElement(n,null)}})})))}}),k.a.createElement(B.b,{render:function(e){return k.a.createElement(B.d,{location:e.location},Me.map((function(e){var t=e.path,n=e.Component,a=e.exact;return k.a.createElement(B.b,{path:t,key:t,exact:a,render:function(){return k.a.createElement(n,null)}})})))}}))}),null))),document.querySelector("#app"))}});