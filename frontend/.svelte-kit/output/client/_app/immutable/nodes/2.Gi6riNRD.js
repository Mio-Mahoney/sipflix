import{b as d,t as u}from"../chunks/disclose-version.0nJNXell.js";import"../chunks/legacy.CC3T_ZGA.js";import{q as t,S as m,T as y,U as k,y as g,V as b,W as S,M as n,X as A,R as _,P as x,G as I,I as L}from"../chunks/runtime.Kh19ytKz.js";import{b as M,l as N,e as T}from"../chunks/events.CL4lJWCx.js";function V(e){if(t){var a=!1,s=()=>{if(!a){if(a=!0,e.hasAttribute("value")){var l=e.value;i(e,"value",null),e.value=l}if(e.hasAttribute("checked")){var r=e.checked;i(e,"checked",null),e.checked=r}}};e.__on_r=s,m(s),M()}}function i(e,a,s,l){var r=e.__attributes??(e.__attributes={});t&&(r[a]=e.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&e.nodeName==="LINK")||r[a]!==(r[a]=s)&&(a==="style"&&"__styles"in e&&(e.__styles={}),a==="loading"&&(e[y]=s),e.removeAttribute(a))}function q(e,a,s=a){var l=k();N(e,"input",r=>{var o=r?e.defaultValue:e.value;if(o=v(e)?f(o):o,s(o),l&&o!==(o=a())){var h=e.selectionStart,c=e.selectionEnd;e.value=o??"",c!==null&&(e.selectionStart=h,e.selectionEnd=Math.min(c,e.value.length))}}),(t&&e.defaultValue!==e.value||g(a)==null&&e.value)&&s(v(e)?f(e.value):e.value),b(()=>{var r=a();v(e)&&r===f(e.value)||e.type==="date"&&!r&&!e.value||r!==e.value&&(e.value=r??"")})}function v(e){var a=e.type;return a==="number"||a==="range"}function f(e){return e===""?null:+e}var w=u('<input class="text-black">');function E(e){let a=A();function s(){console.log(n(a))}var l=w();V(l),q(l,()=>n(a),r=>S(a,r)),T("keydown",l,s),d(e,l)}var G=u('<h1>Welcome to SipFlix!</h1> <div class="flex justify-center items-center gap-x-5">Search a movie:<!></div>',1);function B(e){var a=G(),s=_(x(a),2),l=_(I(s));E(l),L(s),d(e,a)}export{B as component};