import{g as I,R,j as M}from"./index-3_Kq42s4.js";/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var y=Object.getOwnPropertySymbols,$=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;function L(n){if(n==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(n)}function T(){try{if(!Object.assign)return!1;var n=new String("abc");if(n[5]="de",Object.getOwnPropertyNames(n)[0]==="5")return!1;for(var i={},l=0;l<10;l++)i["_"+String.fromCharCode(l)]=l;var a=Object.getOwnPropertyNames(i).map(function(t){return i[t]});if(a.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(t){o[t]=t}),Object.keys(Object.assign({},o)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var U=T()?Object.assign:function(n,i){for(var l,a=L(n),o,t=1;t<arguments.length;t++){l=Object(arguments[t]);for(var u in l)$.call(l,u)&&(a[u]=l[u]);if(y){o=y(l);for(var s=0;s<o.length;s++)D.call(l,o[s])&&(a[o[s]]=l[o[s]])}}return a};const W=I(U),_=({url:n,allowFullScreen:i,position:l,display:a,height:o,width:t,overflow:u,styles:s,onLoad:b,onMouseOver:j,onMouseOut:O,scrolling:g,id:m,frameBorder:f,ariaHidden:h,sandbox:p,allow:d,className:w,title:v,ariaLabel:P,ariaLabelledby:k,name:x,target:E,loading:S,importance:N,referrerpolicy:q,allowpaymentrequest:A,src:C,key:F})=>{const c=W({src:C||n,target:E||null,style:{position:l||null,display:a||"initial",overflow:u||null},scrolling:g||null,allowpaymentrequest:A||null,importance:N||null,sandbox:p&&[...p].join(" ")||null,loading:S||null,styles:s||null,name:x||null,className:w||null,allowFullScreen:"allowFullScreen",referrerpolicy:q||null,title:v||null,allow:d||null,id:m||null,"aria-labelledby":k||null,"aria-hidden":h||null,"aria-label":P||null,width:t||null,height:o||null,onLoad:b||null,onMouseOver:j||null,onMouseOut:O||null,key:F||"iframe"});let e=Object.create(null);for(let r of Object.keys(c))c[r]!=null&&(e[r]=c[r]);for(let r of Object.keys(e.style))e.style[r]==null&&delete e.style[r];if(e.styles)for(let r of Object.keys(e.styles))e.styles.hasOwnProperty(r)&&(e.style[r]=e.styles[r]),Object.keys(e.styles).pop()==r&&delete e.styles;if(i)if("allow"in e){const r=e.allow.replace("fullscreen","");e.allow=`fullscreen ${r.trim()}`.trim()}else e.allow="fullscreen";return f>=0&&(e.style.hasOwnProperty("border")||(e.style.border=f)),R.createElement("iframe",Object.assign({},e))},G=()=>M.jsx(_,{url:"https://player.twitch.tv/?channel=valorant&parent=localhost",width:"640px",height:"378px",display:"block",position:"relative"});export{G as default};