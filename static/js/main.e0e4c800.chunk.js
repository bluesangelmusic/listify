(this.webpackJsonplistify=this.webpackJsonplistify||[]).push([[0],{129:function(e,n){function t(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=129},130:function(e,n){function t(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=130},216:function(e,n,t){"use strict";t.r(n);var a,o,l,r,i,c,u,s,b,m,d=t(0),p=t.n(d),f=t(74),h=t.n(f),g=t(2),v=t(21),y=t(3),w=y.a.button(a||(a=Object(g.a)(["\n  background: white;\n  color: #001659;\n  border: 1px solid #001659;\n  padding: 0.5em 1em;\n"]))),x=y.a.div(o||(o=Object(g.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.3);\n"]))),O=y.a.div(l||(l=Object(g.a)(["\n  position: absolute;\n  top: 30%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  min-width: 400px;\n  background: white;\n  box-shadow: 0 7px 10px #777;\n  padding: 2rem;\n"]))),j=y.a.code(r||(r=Object(g.a)(["\n  background: #f0f0ff;\n  font-family: 'Courier New', Courier, monospace;\n  max-height: 10em;\n  overflow: auto;\n  display: block;\n  padding: 1rem;\n"]))),E=Object(y.a)(w)(i||(i=Object(g.a)(["\n  margin: 1rem auto;\n"]))),k=function(e){return p.a.createElement(x,{onClick:e.dismiss},p.a.createElement(O,{onClick:function(e){return e.stopPropagation()}},p.a.createElement(j,null,e.children),p.a.createElement("form",{action:"https://codepen.io/pen/define",method:"POST",target:"_blank"},p.a.createElement("input",{type:"hidden",name:"data",value:JSON.stringify({title:"Listify Preview",html:e.children})}),p.a.createElement(E,null,"Preview on CodePen"))))},C=t(12),M=p.a.createContext({state:{},setProp:function(){return null}}),P=function(e){var n=Object(d.useState)({}),t=Object(v.a)(n,2),a=t[0],o=t[1],l=Object(d.useCallback)((function(e,n){o((function(t){var a=Object(C.a)({},t);return a[e]=n,a}))}),[]);return p.a.createElement(M.Provider,{value:{state:a,setProp:l}},p.a.createElement("form",{onSubmit:function(n){n.preventDefault(),e.onSubmit(a)}},e.children))},S=y.a.div(c||(c=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-bottom: 1em;\n"]))),A=function(e){var n=Object(d.useContext)(M),t=n.state,a=n.setProp,o=Object(d.useMemo)((function(){return e.default}),[e.default]);return Object(d.useEffect)((function(){a(e.label,o)}),[a,e.label,o]),p.a.createElement("input",{id:e.label,type:"text",name:e.label,value:t[e.label]||"",onChange:function(n){return a(e.label,n.target.value)},placeholder:e.placeholder})},B=function(e){var n=Object(d.useContext)(M),t=n.state,a=n.setProp,o=Object(d.useMemo)((function(){return e.default||"1"}),[e.default]);return Object(d.useEffect)((function(){a(e.label,o)}),[a,e.label,o]),p.a.createElement("input",{id:e.label,type:"number",name:e.label,value:e.label in t?t[e.label]:o,onChange:function(n){n.target.validity.badInput||(n.target.value.length?a(e.label,n.target.value):a(e.label,o))},placeholder:e.placeholder})},F=function(e){var n=Object(d.useContext)(M),t=n.state,a=n.setProp,o=Object(d.useMemo)((function(){return e.default}),[e.default]);return Object(d.useEffect)((function(){a(e.label,o)}),[a,e.label,o]),p.a.createElement("select",{id:e.label,name:e.label,value:t[e.label]||"",onChange:function(n){return a(e.label,n.target.value)}},e.options.map((function(e){return p.a.createElement("option",{key:e.value,value:e.value},e.label||e.value)})))},N=function(e){var n=Object(d.useContext)(M),t=n.state,a=n.setProp,o=Object(d.useMemo)((function(){return e.default}),[e.default]);return Object(d.useEffect)((function(){a(e.label,o)}),[a,e.label,o]),p.a.createElement(p.a.Fragment,null,e.options.map((function(n){return p.a.createElement("label",{key:"".concat(e.label,"-").concat(n.value),htmlFor:"".concat(e.label,"-").concat(n.value)},p.a.createElement("input",{id:"".concat(e.label,"-").concat(n.value),type:"radio",name:e.label,value:n.value,onChange:function(n){return a(e.label,n.target.value)},checked:(null===t||void 0===t?void 0:t[e.label])===n.value})," ".concat(n.label||n.value))})))},D=function(e){var n=Object(d.useContext)(M),t=n.state,a=n.setProp,o=Object(d.useMemo)((function(){return e.default}),[e.default]);return Object(d.useEffect)((function(){a(e.label,o)}),[a,e.label,o]),p.a.createElement("textarea",{id:e.label,name:e.label,value:t[e.label]||"",onChange:function(n){return a(e.label,n.target.value)},placeholder:e.placeholder})},T=t(80),I=function(e){var n=Object(d.useContext)(M),t=n.state,a=n.setProp,o=Object(d.useMemo)((function(){return e.options.reduce((function(e,n){return n.checked&&e.push(n.value),e}),[])}),[e.options]);return Object(d.useEffect)((function(){a(e.label,o)}),[a,e.label,o]),p.a.createElement(p.a.Fragment,null,e.options.map((function(n){return p.a.createElement("label",{key:"".concat(e.label,"-").concat(n.value),htmlFor:"".concat(e.label,"-").concat(n.value)},p.a.createElement("input",{id:"".concat(e.label,"-").concat(n.value),type:"checkbox",name:e.label,value:n.value,onChange:function(o){o.target.checked?a(e.label,[].concat(Object(T.a)(t[e.label]),[n.value])):a(e.label,t[e.label].filter((function(e){return e!==n.value})))},checked:((null===t||void 0===t?void 0:t[e.label])||[]).includes(n.value)})," ".concat(n.label||n.value))})))},U=t(29),z=t(218),L=y.a.div(u||(u=Object(g.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  gap: 0.5em;\n  margin-bottom: 0.3em;\n"]))),q=Object(y.a)(w)(s||(s=Object(g.a)(["\n  border: none;\n  padding: 0;\n  font-weight: bold;\n  font-size: 1em;\n"]))),W=function(e){var n=Object(d.useContext)(M),t=n.state,a=n.setProp,o=Object(d.useMemo)((function(){return(e.defaults||[]).reduce((function(e,n){return e[Object(z.a)()]=n,e}),{})}),[e.defaults]);return Object(d.useEffect)((function(){a(e.label,o)}),[a,e.label,o]),p.a.createElement(p.a.Fragment,null,Object.keys((null===t||void 0===t?void 0:t[e.label])||{}).map((function(n){return p.a.createElement(L,{key:n},p.a.createElement(q,{type:"button",onClick:function(){var o=Object(C.a)({},t[e.label]);delete o[n],a(e.label,o)}},"\xd7"),p.a.createElement("input",{id:n,type:"text",name:"".concat(e.label,"-").concat(n),value:t[e.label][n],onChange:function(o){var l=Object(C.a)({},t[e.label]);l[n]=o.target.value,a(e.label,l)},placeholder:e.placeholder}))})),p.a.createElement(L,null,p.a.createElement(q,{type:"button",onClick:function(){a(e.label,Object(C.a)(Object(C.a)({},null===t||void 0===t?void 0:t[e.label]),{},Object(U.a)({},Object(z.a)(),"")))}},"+")))},_=function(e){var n;switch(e.type){case"text":n=p.a.createElement(A,e);break;case"number":n=p.a.createElement(B,e);break;case"select":n=p.a.createElement(F,e);break;case"radio":n=p.a.createElement(N,e);break;case"textarea":n=p.a.createElement(D,e);break;case"check":n=p.a.createElement(I,e);break;case"text-array":n=p.a.createElement(W,e);break;default:return null}return p.a.createElement(S,{key:e.label},p.a.createElement("label",{htmlFor:e.label},e.label),n)},J=t(78),H=t(79),G=t.n(H),K=y.a.div(b||(b=Object(g.a)(["\n  width: 90%;\n  max-width: 800px;\n  margin: auto;\n  padding: 2rem;\n  background: white;\n  box-shadow: 0 3px 4px #ccc;\n  margin: 5rem auto;\n"]))),Y=Object(y.a)(w)(m||(m=Object(g.a)(["\n  font-size: 1rem;\n  color: white;\n  background: #001659;\n  margin-top: 3rem;\n"]))),Q=function(){var e=Object(d.useState)(""),n=Object(v.a)(e,2),t=n[0],a=n[1],o=Object(d.useState)(!1),l=Object(v.a)(o,2),r=l[0],i=l[1],c=Object(d.useCallback)((function(){return i(!0)}),[]),u=Object(d.useCallback)((function(){return i(!1)}),[]),s=Object(d.useCallback)((function(e){a(G.a.render("style.\n  .bam-content.bam-content.bam-content {\n    font-size: 85.5%;\n    --blue: #001659;\n  }\n\n  .bam-content.bam-content.bam-content * {\n    box-sizing: border-box;\n  }\n\n  .bam-content a,\n  .bam-content a:focus,\n  .bam-content a:hover,\n  .bam-content a:active,\n  .bam-content a:visited {\n    color: var(--blue);\n  }\n\n  .bam-content ul {\n    margin-left: 2em;\n    max-width: 80%;\n  }\n\n  .bam-content ul li {\n    margin-bottom: 0.3em;\n    list-style-image: url('https://bluesangelmusic.s3.us-east-2.amazonaws.com/wp-content/uploads/2021/06/30142017/jojo-bullet.png');\n  }\n\n  .bam-content {\n    width: 90%;\n    max-width: 1200px;\n    margin: auto;\n    font-family: 'Segoe UI', Helvetica, sans-serif !important;\n  }\n\n  .bam-content p {\n    padding: 0 1em 1em;\n    margin: 0;\n  }\n\n  .bam-content small {\n    line-height: 1;\n    padding-top: 100px;\n  }\n\n  .bam-content .bg-gray-light {\n    background-color: hsl(225, 25%, 98%);\n  }\n\n  .bam-content .bg-gray {\n    background-color: hsl(225, 25%, 92%);\n  }\n\n  .bam-content .bam-wrapper {\n    border-radius: 25px;\n    border: 1px solid #eee;\n    max-width: 1200px;\n    margin: 0 auto 0.5em;\n    overflow: hidden;\n    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);\n  }\n\n  .bam-content .bam-container {\n    padding: 2em;\n    width: 100%;\n  }\n\n  .bam-content .cols-60-40 {\n    display: grid;\n    grid-template-columns: 6fr minmax(350px, 4fr);\n    grid-template-areas: 'content photo';\n  }\n\n  .bam-content .cols-60-40 > p {\n    grid-area: content;\n  }\n\n  .bam-content .cols-60-40 > img {\n    grid-area: photo;\n    margin: 0 auto;\n    width: 90%;\n    height: auto;\n  }\n\n  @media (max-width: 800px) {\n    .bam-content .cols-60-40 {\n      grid-template-columns: 1fr;\n      grid-template-areas: 'photo' 'content';\n    }\n  }\n\n  .bam-content .bam-heading img {\n    margin-bottom: 0.5em;\n    padding: 0;\n    box-shadow: 1px;\n    max-width: 100%;\n    border-radius: 25px;\n  }\n\n  .bam-content h1,\n  .bam-content h2,\n  .bam-content h3,\n  .bam-content h4,\n  .bam-content h5 {\n    color: var(--blue);\n    padding: 0.5em 0 1.3em;\n  }\n\n  .bam-content h1 {\n    text-align: center;\n  }\n\n  .bam-content .emphasis {\n    color: var(--blue);\n    text-align: center;\n    font-weight: bold;\n  }\n\n  .bam-content .bam-container > *:last-child {\n    margin-bottom: 0em;\n  }\ndiv.bam-content\n  header.bam-heading\n    img(\n      src=\"https://bluesangelmusic.s3.us-east-2.amazonaws.com/wp-content/uploads/2021/06/30142022/hero.jpg\"\n      alt=\"Blues Angel Music\"\n    )\n  div.bam-wrapper\n    section.bam-container.bg-gray-light\n      h1 #{Title}\n      case Condition\n        when 'used'\n          p.emphasis\n            | Tested and 100% functional! We ask that you observe its pictures closely and invite you to contact us with\n            | any additional questions you may have.\n        when 'as-is'\n          p.emphasis\n            | Product could not be tested and is being sold as-is and cannot be returned. We ask that you observe its\n            | pictures closely and invite you to contact us with any additional questions you may have.\n      p #{Description}\n    section.bam-container.bg-gray\n      h2 Specs & Features\n      ul\n        each val in Specs\n          li= val\n  div.bam-wrapper\n    section.bam-container.bg-gray\n      h2 Fast & Quality Shipping!\n      ul\n        li\n          | All orders are shipped within 1 business day in the continental U.S. of received payment. (Expedited and HI\n          | and AK shipping available for additional cost)\n        li All items are shipped insured\n        li \n          | We ship most of our items in custom-made/double-walled boxes, as many original manufacturer's shipping\n          | boxes are not strong enough to withstand multiple shipments, and have already been used at least once to\n          | ship to us. Your item may not come in the original manufacturer's box. We do our very best to ensure that\n          | your instrument arrives safely and securely. See our feedback for positive comments on how well we ship!\n        li\n          | Large Packaged Items such as Guitars, Basses, Amps, Drums, and Keyboards being shipped to Post Office Boxes\n          | will incur additional charges.\n        li Orders over $50.00 require a signature*\n      small\n        | *If you do not wish to have a signature for your item you must submit to us that you do not wish to have a\n        | signature on your item. You assume any and all responsibility in the event your purchased item is lost during\n        | shipment or stolen from your home.\n  div.bam-wrapper\n    section.bam-container.bg-gray\n      h2 About Us\n      div.cols-60-40\n        p\n          | Blues Angel Music (BAM) was founded in August of 1997. From a one-man, 1,000 square foot beginning into a\n          | 15,000 square foot, full-line music store, complete with a fully-staffed school of music, Blues Angel Music\n          | provides an impressive selection of new, used, and vintage gear for the beginner and the professional\n          | musician alike. In addition to our selection of new, used, and vintage gear, and Blues Angel Music\u2019s School\n          | of Music. We have been named a NAMM (National Association of Music Merchants) Top 100 Dealer 11 years\n          | running and we\u2019ve also been voted Best of the Bay. These awards are due to our friendly staff of experts\n          | who are eager to provide information and advice relating to any of the instruments and accessories we\n          | offer. It is the goal at Blues Angel Music to be the \u201cgo-to\u201d spot for aspiring musicians as well as gigging\n          | professionals.\n        img(\n          src='https://bluesangelmusic.s3.us-east-2.amazonaws.com/wp-content/uploads/2021/06/30142019/storefront.jpg'\n          alt=\"Blues Angel Music's brick-and-mortar store is located in Pensacola, FL.\"\n        )".toString(),e)),c()}),[c]);return p.a.createElement(K,null,p.a.createElement(P,{onSubmit:s},J.map((function(e){return p.a.createElement(_,Object.assign({key:e.label},e))})),p.a.createElement(Y,{type:"submit"},"Generate HTML")),r&&p.a.createElement(k,{dismiss:u},t))};h.a.render(p.a.createElement(p.a.StrictMode,null,p.a.createElement(Q,null)),document.getElementById("root"))},71:function(e,n){},78:function(e){e.exports=JSON.parse('[{"label":"Title","type":"text"},{"label":"Condition","type":"radio","options":[{"label":"New","value":"new"},{"label":"Used","value":"used"},{"label":"As-is","value":"as-is"}]},{"label":"Description","type":"textarea"},{"label":"Specs","type":"text-array","defaults":["","","","",""]}]')},90:function(e,n){}},[[216,1,2]]]);
//# sourceMappingURL=main.e0e4c800.chunk.js.map