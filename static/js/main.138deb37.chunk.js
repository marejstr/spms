(this["webpackJsonpcsdewas-project-2-marejstr"]=this["webpackJsonpcsdewas-project-2-marejstr"]||[]).push([[0],{177:function(e,t,n){e.exports=n(376)},185:function(e,t,n){},186:function(e,t,n){},371:function(e,t,n){},372:function(e,t,n){},373:function(e,t,n){},374:function(e,t,n){},375:function(e,t,n){},376:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(30),o=n.n(c),l=n(6),u=n(7),s=n.n(u),i=n(10),d=n(12),f=Object(a.createContext)(),p=function(e){var t=Object(a.useState)((function(){var e=localStorage.getItem("historicalValues");return e?JSON.parse(e):[]})),n=Object(l.a)(t,2),c=n[0],o=n[1];Object(a.useEffect)((function(){localStorage.setItem("historicalValues",JSON.stringify(c))}),[c]);var u=function(){var e=Object(d.a)(s.a.mark((function e(t){var n,a,r,l,u,d,f,m;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=Object(i.a)(c),a=!1,r=!0,l=!1,u=void 0,e.prev=5,d=s.a.mark((function e(){var t,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=m.value,!(r=c.find((function(e){return e.symbol===t})))){e.next=14;break}if(!p(new Date(r.updateDate),new Date)){e.next=7;break}console.log("No need to update stock"),e.next=12;break;case 7:return console.log("Updating historical values and replacing old"),e.next=10,v(t,n);case 10:n=e.sent,a=!0;case 12:e.next=19;break;case 14:return console.log("Adding historical values for new stock"),e.next=17,h(t,n);case 17:n=e.sent,a=!0;case 19:case"end":return e.stop()}}),e)})),f=t[Symbol.iterator]();case 8:if(r=(m=f.next()).done){e.next=13;break}return e.delegateYield(d(),"t0",10);case 10:r=!0,e.next=8;break;case 13:e.next=19;break;case 15:e.prev=15,e.t1=e.catch(5),l=!0,u=e.t1;case 19:e.prev=19,e.prev=20,r||null==f.return||f.return();case 22:if(e.prev=22,!l){e.next=25;break}throw u;case 25:return e.finish(22);case 26:return e.finish(19);case 27:a&&o(Object(i.a)(n));case 28:case"end":return e.stop()}}),e,null,[[5,15,19,27],[20,,22,26]])})));return function(t){return e.apply(this,arguments)}}(),p=function(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()},m=function(){var e=Object(d.a)(s.a.mark((function e(t){var n,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="https://sandbox.iexapis.com/stable/stock/"+t+"/chart/5y?token=Tpk_ba7aef68a8924148a189e53d3b72666e",e.next=4,fetch(n);case 4:return a=e.sent,e.next=7,a.json();case 7:return r=e.sent,e.abrupt("return",r);case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(d.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(t);case 2:if(void 0===(n=e.sent)){e.next=6;break}return n[0].hasOwnProperty("uOpen")?a=n.map((function(e){return{date:e.date,value:e.uOpen}})):console.log("Invalid response"),e.abrupt("return",a);case 6:return e.abrupt("return",null);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(d.a)(s.a.mark((function e(t,n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t);case 2:return a=e.sent,e.abrupt("return",[].concat(Object(i.a)(n),[{symbol:t,updateDate:new Date,historicalValues:a}]));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),v=function(){var e=Object(d.a)(s.a.mark((function e(t,n){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t);case 2:return a=e.sent,r=n.filter((function(e){return e.symbol!==t})),e.abrupt("return",[].concat(Object(i.a)(r),[{symbol:t,updateDate:new Date,historicalValues:a}]));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return r.a.createElement(f.Provider,{value:{historicalValues:c,updateStockHistory:u}},e.children)},m=n(83),b=n.n(m),h=function(e,t){switch(t.type){case"ADD_PORTFOLIO":return[].concat(Object(i.a)(e),[{id:b()(),name:t.name,currency:"EUR",stocks:[]}]);case"REMOVE_PORTFOLIO":return e.filter((function(e){return e.id!==t.id}));case"ADD_STOCK":var n=e.find((function(e){return e.id===t.id})).stocks.concat([{id:b()(),symbol:t.symbol.toUpperCase(),initialValue:t.value,latestValue:t.latest,quantity:t.quantity}]),a=e.findIndex((function(e){return e.id===t.id}));return-1===a?(console.log("Could not find portfolio with correct id"),e):[].concat(Object(i.a)(e.slice(0,a)),[Object.assign({},e[a],{stocks:n})],Object(i.a)(e.slice(a+1)));case"REMOVE_STOCKS":var r=e.find((function(e){return e.id===t.id})).stocks;t.stockIds.forEach((function(e){r=r.filter((function(t){return t.id!==e}))}));var c=e.findIndex((function(e){return e.id===t.id}));return-1===c?(console.log("Could not find portfolio with correct id"),e):[].concat(Object(i.a)(e.slice(0,c)),[Object.assign({},e[c],{stocks:r})],Object(i.a)(e.slice(c+1)));case"UPDATE_STOCKS":var o=e.findIndex((function(e){return e.id===t.id}));return-1===o?(console.log("Could not find portfolio with correct id"),e):[].concat(Object(i.a)(e.slice(0,o)),[Object.assign({},e[o],{stocks:t.stocks})],Object(i.a)(e.slice(o+1)));case"CHANGE_CURRENCY":var l=e.findIndex((function(e){return e.id===t.id}));return-1===l?(console.log("Could not find portfolio with correct id"),e):[].concat(Object(i.a)(e.slice(0,l)),[Object.assign({},e[l],{currency:t.currency})],Object(i.a)(e.slice(l+1)));default:return e}},v=Object(a.createContext)(),y=function(e){var t=Object(a.useReducer)(h,[],(function(){var e=localStorage.getItem("portfolios");return e?JSON.parse(e):[]})),n=Object(l.a)(t,2),c=n[0],o=n[1];Object(a.useEffect)((function(){localStorage.setItem("portfolios",JSON.stringify(c))}),[c]);var u=function(){var e=Object(d.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.find((function(e){return e.id===t})),e.next=3,Promise.all(n.stocks.map(function(){var e=Object(d.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t.symbol);case 2:return t.latestValue=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:a=e.sent,o({type:"UPDATE_STOCKS",id:t,stocks:a});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(d.a)(s.a.mark((function e(t,n,a,r){var c,l,u,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.replace(/-/g,""),e.next=3,p(n);case 3:return l=e.sent,e.next=6,f(n,c);case 6:if(null===(u=e.sent)||void 0===u[0]){e.next=17;break}if(!u[0].hasOwnProperty("uClose")){e.next=14;break}return i=u[0].uClose,o({type:"ADD_STOCK",id:t,symbol:n,value:i,latest:l,quantity:r}),e.abrupt("return","");case 14:return e.abrupt("return","Could not find price for the stock");case 15:e.next=18;break;case 17:return e.abrupt("return","No data for stock");case 18:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),f=function(){var e=Object(d.a)(s.a.mark((function e(t,n){var a,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="https://sandbox.iexapis.com/stable/stock/"+t+"/chart/date/"+n+"?chartByDay=true&token=Tpk_ba7aef68a8924148a189e53d3b72666e",e.next=4,fetch(a);case 4:return r=e.sent,e.next=7,r.json();case 7:return c=e.sent,e.abrupt("return",c);case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=Object(d.a)(s.a.mark((function e(t){var n,a,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="https://sandbox.iexapis.com/stable/stock/"+t+"/quote/latestPrice?token=Tpk_ba7aef68a8924148a189e53d3b72666e",e.next=4,fetch(n);case 4:return a=e.sent,e.next=7,a.json();case 7:return r=e.sent,c=r,e.abrupt("return",c);case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(v.Provider,{value:{portfolios:c,dispatch:o,updateStocks:u,addStock:i}},e.children)},E=(n(185),n(186),function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header-text"},"SPMS"),"A stock portfolio website")}),O=n(22),k=(n(371),function(e){var t=Object(a.useContext)(f),n=t.historicalValues,c=t.updateStockHistory,o=Object(a.useState)("modal display-none"),u=Object(l.a)(o,2),s=u[0],i=u[1],d=Object(a.useState)(""),p=Object(l.a)(d,2),m=p[0],b=p[1],h=Object(a.useState)(""),v=Object(l.a)(h,2),y=v[0],E=v[1],k=Object(a.useState)(),j=Object(l.a)(k,2),g=j[0],x=j[1],w=Object(a.useState)([]),S=Object(l.a)(w,2),C=S[0],D=S[1];Object(a.useEffect)((function(){var e=new Date,t=new Date;t.setDate(e.getDate()-30),b(t.toISOString().substring(0,10)),E(e.toISOString().substring(0,10)),x({start:t.toISOString().substring(0,10),end:e.toISOString().substring(0,10)})}),[]),Object(a.useEffect)((function(){e.show?(i("modal display-block"),c(e.symbols)):i("modal display-none")}),[e,c]),Object(a.useEffect)((function(){if(e.symbols[0]){var t=[],a=[],r=!0,c=!1,o=void 0;try{for(var l,u=function(){var e=l.value,a=n.find((function(t){return t.symbol===e}));"undefined"!==typeof a&&t.push(a)},s=e.symbols[Symbol.iterator]();!(r=(l=s.next()).done);r=!0)u()}catch(p){c=!0,o=p}finally{try{r||null==s.return||s.return()}finally{if(c)throw o}}if(t.length===e.symbols.length){for(var i=new Date(g.start),d=new Date(g.end),f=function(){var e={},n=i.toISOString().substring(0,10);e.date=n;var r=!0,c=!1,o=void 0;try{for(var l,u=t[Symbol.iterator]();!(r=(l=u.next()).done);r=!0){var s=l.value,d=s.symbol,f=s.historicalValues.find((function(e){return e.date===n}));f&&(e[d]=parseFloat(f.value))}}catch(p){c=!0,o=p}finally{try{r||null==u.return||u.return()}finally{if(c)throw o}}a.push(e),i.setDate(i.getDate()+1)};i<=d;)f();D(a)}}}),[n,g,e]);var N=["#8ec07c","#fb4934","#fabd2f","#b8bb26","#d3869b","#83a598","#fe8019"];return r.a.createElement("div",{className:s},r.a.createElement("section",{className:"modal-main"},e.symbols.length>0?r.a.createElement("div",null,r.a.createElement(O.e,{className:"line-chart",width:"95%",height:500},r.a.createElement(O.d,{data:C},e.symbols.map((function(e,t){return r.a.createElement(O.c,{key:e,connectNulls:!0,type:"monotone",dataKey:e,dot:!1,stroke:N[t]})})),r.a.createElement(O.b,null),r.a.createElement(O.a,{stroke:"#eee5ce"}),r.a.createElement(O.f,{dataKey:"date",stroke:"#eee5ce"}),r.a.createElement(O.g,{stroke:"#eee5ce"}))),r.a.createElement("hr",null),r.a.createElement("form",{id:"date-form",onSubmit:function(e){e.preventDefault(),x({start:m,end:y})}},r.a.createElement("div",{className:"inline-block"},r.a.createElement("label",null,"Start date:"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",placeholder:"yyyy-mm-dd",value:m,onChange:function(e){return b(e.target.value)},required:!0})),r.a.createElement("div",{className:"inline-block"},r.a.createElement("label",null,"End date:"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",placeholder:"yyyy-mm-dd",value:y,onChange:function(e){return E(e.target.value)},required:!0})),r.a.createElement("input",{type:"submit",value:"Update"})),r.a.createElement("hr",null)):r.a.createElement("h2",null," Please select the stocks to show from the portfolio table "),r.a.createElement("button",{id:"close-button",onClick:function(t){e.handleClose()}},"Close")))}),j=(n(372),function(){var e=Object(a.useContext)(v).dispatch,t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],o=n[1];return r.a.createElement("form",{className:"portfolio-form",onSubmit:function(t){t.preventDefault(),e({type:"ADD_PORTFOLIO",name:c}),o("")}},r.a.createElement("input",{type:"text",placeholder:"Portfolio name",value:c,onChange:function(e){return o(e.target.value)},required:!0}),r.a.createElement("input",{type:"submit",value:"Add portfolio"}))}),g=(n(373),function(e){var t=e.portfolio,n=e.showModal,c=Object(a.useContext)(v),o=c.dispatch,u=c.updateStocks,i=c.addStock,f=Object(a.useState)(""),p=Object(l.a)(f,2),m=p[0],b=p[1],h=Object(a.useState)(""),y=Object(l.a)(h,2),E=y[0],O=y[1],k=Object(a.useState)(""),j=Object(l.a)(k,2),g=j[0],x=j[1],w=Object(a.useState)(""),S=Object(l.a)(w,2),C=S[0],D=S[1],N=Object(a.useState)(),I=Object(l.a)(N,2),P=I[0],R=I[1],T=Object(a.useState)([]),V=Object(l.a)(T,2),q=V[0],A=V[1];Object(a.useEffect)((function(){R(t.currency)}),[t]);var _=function(){var e=Object(d.a)(s.a.mark((function e(n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),D("Loading data..."),e.next=4,i(t.id,m,E,g);case 4:a=e.sent,D(a),""===a&&(b(""),O(""),x(""));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(e){e.preventDefault();var t=e.target,n=t.name,a=t.value;switch(n){case"symbol":b(a),U(a,E,g);break;case"date":O(a),U(m,a,g);break;case"quantity":x(a),U(m,E,a)}},U=function(e,t,n){var a="";e.length>0&&e.length>5?a="Symbol has to be under 6 characters long":Date.parse("Invalid Date"===new Date(t))||isNaN(new Date(t))||!/(\d{4})-(\d{2})-(\d{2})/.test(t)?a="Please enter past date in format: yyyy-mm-dd":n.length>0&&!/^\+?[1-9][\d]*$/.test(n)&&(a="Number of shares has to be a positive whole number"),D(a)},F=function(e){var n=parseFloat(e);return"EUR"===t.currency?Math.round(n/1.11*100)/100:Math.round(100*n)/100};return r.a.createElement("div",{className:"Portfolio"},r.a.createElement("div",{className:"portfolio-header"},r.a.createElement("h1",null,t.name),r.a.createElement("button",{id:"delete-portfolio",onClick:function(){return o({type:"REMOVE_PORTFOLIO",id:t.id})}},"Delete"),r.a.createElement("button",{id:"first-button",onClick:function(){return u(t.id)}},"Refresh"),r.a.createElement("button",{onClick:function(e){o({type:"REMOVE_STOCKS",id:t.id,stockIds:q}),A([])}},"Delete selected"),r.a.createElement("button",{onClick:function(e){var a=[];t.stocks.forEach((function(e){q.includes(e.id)&&a.push(e.symbol)})),n(a)}},"Graph selected"),r.a.createElement("select",{value:P,onChange:function(e){R(e.target.value),o({type:"CHANGE_CURRENCY",id:t.id,currency:e.target.value})}},r.a.createElement("option",{value:"EUR"},"EUR"),r.a.createElement("option",{value:"USD"},"USD"))),r.a.createElement("div",{className:"portfolio-body"},r.a.createElement("table",{className:"table-scroll"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u2713"),r.a.createElement("th",null,"Symbol"),r.a.createElement("th",null,"Purchase value"),r.a.createElement("th",null,"Current value"),r.a.createElement("th",null,"Quantity"),r.a.createElement("th",null,"Total value"))),r.a.createElement("tbody",null,t.stocks.map((function(e){return r.a.createElement("tr",{className:q.includes(e.id)?"selected":"not-selected",key:e.id,onClick:function(){return function(e){q.indexOf(e.id)>=0?A(q.filter((function(t){return t!==e.id}))):A(q.concat(e.id))}(e)}},r.a.createElement("td",null,q.includes(e.id)?"\u2713":""),r.a.createElement("td",null,e.symbol),r.a.createElement("td",null,F(e.initialValue)),r.a.createElement("td",null,F(e.latestValue)),r.a.createElement("td",null,e.quantity),r.a.createElement("td",null,F(e.latestValue*e.quantity)))})))),"Total portfolio value: ",F(function(){var e=0;return t.stocks.forEach((function(t){e+=t.latestValue*t.quantity})),e}())," ",t.currency,r.a.createElement("div",{id:"error-label"},r.a.createElement("label",null,C)),r.a.createElement("form",{onSubmit:_},r.a.createElement("input",{type:"text",name:"symbol",placeholder:"Symbol",title:"Symbol for stock. For example: AAPL",value:m,onChange:M,required:!0}),r.a.createElement("input",{type:"text",name:"date",placeholder:"Date of purchase",title:"Date of purchase in format: yyyy-mm-dd",value:E,onChange:M,required:!0}),r.a.createElement("input",{type:"text",name:"quantity",placeholder:"Number of shares",title:"The number of stocks to be added",value:g,onChange:M,required:!0}),r.a.createElement("input",{disabled:C,type:"submit",value:"Add stock"}),r.a.createElement("br",null))))}),x=(n(374),function(e){var t=Object(a.useContext)(v).portfolios;return t.length?r.a.createElement("div",{className:"portfolio-grid"},t.map((function(t){return r.a.createElement(g,{key:t.id,portfolio:t,showModal:e.showModal})}))):r.a.createElement("h2",null,"No portfolios to show")});var w=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)([]),u=Object(l.a)(o,2),s=u[0],i=u[1];return r.a.createElement("div",{className:"App"},r.a.createElement(y,null,r.a.createElement("div",{className:"top"},r.a.createElement(E,null),r.a.createElement(j,null)),r.a.createElement(x,{showModal:function(e){c(!0),i(e)}})),r.a.createElement(p,null,r.a.createElement(k,{show:n,symbols:s,handleClose:function(){return c(!1)}})))};n(375),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[177,1,2]]]);
//# sourceMappingURL=main.138deb37.chunk.js.map