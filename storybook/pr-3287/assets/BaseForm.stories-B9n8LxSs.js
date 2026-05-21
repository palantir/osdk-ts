import{r as l,j as u,R as x,f as Yo}from"./iframe-BqSobOjs.js";import{E as yo}from"./Employee-BAk2o20h.js";import{B as z}from"./BaseForm-CLHBOeJV.js";import{c as w}from"./index-L1wTDGqM.js";import{i as Xe,S as To,L as Po,a as Jo,b as vo,c as zo,d as Qo,e as Zo,f as er,g as nr,D as q,T as tr,r as xo,B as or,h as rr,F as ar,j as sr,A as ir,k as lr,s as dr,v as mr,l as Kn,m as cr,I as an,n as ur,O as oe,o as No,p as Do,P as pr,q as Ln,t as fr,u as Cr,w as hr,x as Sr,y as br,z as Er,H as gr,C as yr,E as Tr,G as Pr,J as vr,K as xr,M as Nr}from"./html-Li4hCnP9.js";import{s as Dr}from"./index-Dmw5mkmL.js";import{R as ue,r as Or}from"./index-CDBVc2Go.js";import{S as Rr}from"./small-cross-Cz-s3IOk.js";import{I as wn}from"./svgIconContainer-DgnMBskL.js";import{u as Oo}from"./useOsdkClient-Dz_AketL.js";import"./preload-helper-Dp1pzeXC.js";import"./ActionButton-BzrQsBY7.js";import"./Button-Zje7J_lk.js";import"./useBaseUiId-Dp_kYV1S.js";import"./SkeletonBar-fsduxo0X.js";import"./Tooltip-BLcJAY5k.js";import"./InternalBackdrop-BYMeP7M_.js";import"./composite-DfJCZyGn.js";import"./getDisabledMountTransitionStyles-B6CVhBf6.js";import"./ToolbarRootContext-DRoLsPMn.js";import"./PopoverPopup-C8MLFvM4.js";import"./info-sign-kLacitQn.js";import"./DropdownField-DL8T-hja.js";import"./toNumber-BmW-2qr4.js";import"./Input-GUrmuab8.js";import"./useControlled-9AVv5K6I.js";import"./useValueChanged-D2pZ8qWZ.js";import"./caret-down-CDW-Sg4_.js";import"./cross-CnGN68mu.js";import"./getPseudoElementBounds-JEaCRQOJ.js";import"./CompositeItem-CTpBLKUN.js";import"./makeExternalStore-B5IsxxjS.js";import"./chevron-up-BB11Jexa.js";import"./chevron-down-B8BcgL7Y.js";import"./useEventCallback-CysBZKYk.js";import"./Switch-BsEFLCTz.js";import"./iconLoader-CA_nZi9T.js";import"./CompositeRoot-CvRJGIGW.js";import"./CollapsiblePanel-DbqIEyss.js";import"./error-LlycrbnK.js";import"./index-bCpJ3h2u.js";function Ir(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function sn(e,n){return sn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,t){return a.__proto__=t,a},sn(e,n)}function Ro(){return typeof window<"u"&&window.document!=null}function kn(e,n){const t=((e==null?void 0:e.getRootNode(n))??document).activeElement;return t instanceof HTMLElement?t:null}const _r=['a[href]:not([tabindex="-1"])','button:not([disabled]):not([tabindex="-1"])','details:not([tabindex="-1"])','input:not([disabled]):not([tabindex="-1"])','select:not([disabled]):not([tabindex="-1"])','textarea:not([disabled]):not([tabindex="-1"])','[tabindex]:not([tabindex="-1"])'].join(",");function Fr(e){return Array.from(e.querySelectorAll(_r))}const X="[Blueprint]",Ar=X+" <Spinner> Classes.SMALL/LARGE are ignored if size prop is set.",Kr=X+" <Dialog> iconName is ignored if title is omitted.",Lr=X+" <Dialog> isCloseButtonShown prop is ignored if title is omitted.",wr=X+" <Overlay2> was used outside of a <OverlaysProvider> context. This will no longer be supported in Blueprint v6. See https://github.com/palantir/blueprint/wiki/Overlay2-migration",kr=X+" <Overlay2> cannot use childRef and childRefs props simultaneously",Br=X+" <Overlay2> requires childRefs prop when rendering multiple child elements",Mr=X+" <Overlay2> requires each child element to have a unique key prop when childRefs is used";function Bn(e){return e.key==="Enter"||e.key===" "}function Ur(e){return e!=null&&typeof e!="function"}function Wr(e){return typeof e=="function"}function Io(e,n){Ur(e)?e.current=n:Wr(e)&&e(n)}function re(...e){return n=>{e.forEach(a=>{Io(a,n)})}}function P(e){return e===null?null:typeof e.current>"u"?e:e.current}function _o(e,n=[]){l.useEffect(()=>{Xe("production")||e()},n)}const jr={defaultTabIndex:void 0,disabledTabIndex:-1};function Vr(e,n,a,t=jr){const{defaultTabIndex:o,disabledTabIndex:r}=t,{active:i,onClick:s,onFocus:d,onKeyDown:m,onKeyUp:f,onBlur:C,tabIndex:b=o}=n,[S,I]=l.useState(),[g,A]=l.useState(!1),$=l.useRef(null),se=l.useCallback(T=>{g&&A(!1),C==null||C(T)},[g,C]),ie=l.useCallback(T=>{Bn(T)&&(T.preventDefault(),T.key!==S&&A(!0)),I(T.key),m==null||m(T)},[S,m]),He=l.useCallback(T=>{var _;Bn(T)&&(A(!1),(_=$.current)==null||_.click()),I(void 0),f==null||f(T)},[f,$]);return[e&&(i||g),{onBlur:se,onClick:e?s:void 0,onFocus:e?d:void 0,onKeyDown:ie,onKeyUp:He,ref:re($,a),tabIndex:e?b:r}]}var V;(function(e){e[e.SMALL=20]="SMALL",e[e.STANDARD=50]="STANDARD",e[e.LARGE=100]="LARGE"})(V||(V={}));const L=45,Mn=`M 50,50 m 0,-${L} a ${L},${L} 0 1 1 0,${L*2} a ${L},${L} 0 1 1 0,-${L*2}`,Z=280,qr=10,Xr=4,$r=16,Fo=e=>{const{className:n="",intent:a,value:t,tagName:o="div",size:r,...i}=e;_o(()=>{const C=r!=null,b=n.indexOf(To)>=0||n.indexOf(Po)>=0;C&&b&&console.warn(Ar)},[n,r]);const s=Gr(r,n),d=Math.min($r,Xr*V.LARGE/s),m=Z-Z*(t==null?.25:nr(t,0,1)),f=w(Jo,vo(a),{[zo]:t!=null},n);return l.createElement(o,{"aria-label":"loading","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":t===void 0?void 0:t*100,className:f,role:"progressbar",...i},l.createElement(o,{className:Qo},u.jsxs("svg",{width:s,height:s,strokeWidth:d.toFixed(2),viewBox:Hr(d),children:[u.jsx("path",{className:Zo,d:Mn}),u.jsx("path",{className:er,d:Mn,pathLength:Z,strokeDasharray:`${Z} ${Z}`,strokeDashoffset:m})]})))};Fo.displayName=`${q}.Spinner`;const Gr=(e,n)=>e==null?n.indexOf(To)>=0?V.SMALL:n.indexOf(Po)>=0?V.LARGE:V.STANDARD:Math.max(qr,e),Hr=e=>{const n=L+e/2,a=(50-n).toFixed(2),t=(n*2).toFixed(2);return`${a} ${a} ${t} ${t}`},Yr=Ro()?l.useLayoutEffect:l.useEffect,Ao=l.forwardRef(({children:e,tagName:n="div",title:a,className:t,ellipsize:o=!1,...r},i)=>{const s=l.useRef(),d=l.useMemo(()=>re(s,i),[i]),[m,f]=l.useState(""),[C,b]=l.useState();return Yr(()=>{var S;((S=s.current)==null?void 0:S.textContent)!=null&&(b(o&&s.current.scrollWidth>s.current.clientWidth),f(s.current.textContent))},[s,e,o]),l.createElement(n,{...r,className:w({[tr]:o},t),ref:d,title:a??(C?m:void 0)},e)});Ao.displayName=`${q}.Text`;const $e=l.forwardRef((e,n)=>{const a=Ko(e,n);return u.jsx("button",{type:"button",...xo(e),...a,children:Lo(e)})});$e.displayName=`${q}.Button`;const Jr=l.forwardRef((e,n)=>{const{href:a}=e,t=Ko(e,n,{defaultTabIndex:0,disabledTabIndex:-1});return u.jsx("a",{role:"button",...xo(e),...t,"aria-disabled":t.disabled,href:t.disabled?void 0:a,children:Lo(e)})});Jr.displayName=`${q}.AnchorButton`;function Ko(e,n,a){const{alignText:t,fill:o,large:r,loading:i=!1,minimal:s,outlined:d,size:m="medium",small:f,variant:C="solid"}=e,b=e.disabled||i,[S,I]=Vr(!b,e,n,a),g=w(or,{[ir]:S,[sr]:b,[ar]:o,[rr]:i},lr(t),vo(e.intent),dr(m,{large:r,small:f}),mr(C,{minimal:s,outlined:d}),e.className);return{...I,className:g,disabled:b}}function Lo(e){const{children:n,ellipsizeText:a,endIcon:t,icon:o,loading:r,rightIcon:i,text:s,textClassName:d}=e,m=!Kn(s)||!Kn(n);return u.jsxs(u.Fragment,{children:[r&&u.jsx(Fo,{className:cr,size:V.SMALL}),u.jsx(an,{icon:o}),m&&u.jsxs(Ao,{className:w(ur,d),ellipsize:a,tagName:"span",children:[s,n]}),u.jsx(an,{icon:t??i})]})}function Ve(){return Ve=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)({}).hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},Ve.apply(null,arguments)}function mn(e,n){if(e==null)return{};var a={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(n.indexOf(t)!==-1)continue;a[t]=e[t]}return a}function cn(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,sn(e,n)}function zr(e,n){return e.classList?!!n&&e.classList.contains(n):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+n+" ")!==-1}function Qr(e,n){e.classList?e.classList.add(n):zr(e,n)||(typeof e.className=="string"?e.className=e.className+" "+n:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+n))}function Un(e,n){return e.replace(new RegExp("(^|\\s)"+n+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function Zr(e,n){e.classList?e.classList.remove(n):typeof e.className=="string"?e.className=Un(e.className,n):e.setAttribute("class",Un(e.className&&e.className.baseVal||"",n))}const Wn={disabled:!1},qe=x.createContext(null);var wo=function(n){return n.scrollTop},ee="unmounted",U="exited",W="entering",J="entered",ln="exiting",F=(function(e){cn(n,e);function n(t,o){var r;r=e.call(this,t,o)||this;var i=o,s=i&&!i.isMounting?t.enter:t.appear,d;return r.appearStatus=null,t.in?s?(d=U,r.appearStatus=W):d=J:t.unmountOnExit||t.mountOnEnter?d=ee:d=U,r.state={status:d},r.nextCallback=null,r}n.getDerivedStateFromProps=function(o,r){var i=o.in;return i&&r.status===ee?{status:U}:null};var a=n.prototype;return a.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},a.componentDidUpdate=function(o){var r=null;if(o!==this.props){var i=this.state.status;this.props.in?i!==W&&i!==J&&(r=W):(i===W||i===J)&&(r=ln)}this.updateStatus(!1,r)},a.componentWillUnmount=function(){this.cancelNextCallback()},a.getTimeouts=function(){var o=this.props.timeout,r,i,s;return r=i=s=o,o!=null&&typeof o!="number"&&(r=o.exit,i=o.enter,s=o.appear!==void 0?o.appear:i),{exit:r,enter:i,appear:s}},a.updateStatus=function(o,r){if(o===void 0&&(o=!1),r!==null)if(this.cancelNextCallback(),r===W){if(this.props.unmountOnExit||this.props.mountOnEnter){var i=this.props.nodeRef?this.props.nodeRef.current:ue.findDOMNode(this);i&&wo(i)}this.performEnter(o)}else this.performExit();else this.props.unmountOnExit&&this.state.status===U&&this.setState({status:ee})},a.performEnter=function(o){var r=this,i=this.props.enter,s=this.context?this.context.isMounting:o,d=this.props.nodeRef?[s]:[ue.findDOMNode(this),s],m=d[0],f=d[1],C=this.getTimeouts(),b=s?C.appear:C.enter;if(!o&&!i||Wn.disabled){this.safeSetState({status:J},function(){r.props.onEntered(m)});return}this.props.onEnter(m,f),this.safeSetState({status:W},function(){r.props.onEntering(m,f),r.onTransitionEnd(b,function(){r.safeSetState({status:J},function(){r.props.onEntered(m,f)})})})},a.performExit=function(){var o=this,r=this.props.exit,i=this.getTimeouts(),s=this.props.nodeRef?void 0:ue.findDOMNode(this);if(!r||Wn.disabled){this.safeSetState({status:U},function(){o.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:ln},function(){o.props.onExiting(s),o.onTransitionEnd(i.exit,function(){o.safeSetState({status:U},function(){o.props.onExited(s)})})})},a.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},a.safeSetState=function(o,r){r=this.setNextCallback(r),this.setState(o,r)},a.setNextCallback=function(o){var r=this,i=!0;return this.nextCallback=function(s){i&&(i=!1,r.nextCallback=null,o(s))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},a.onTransitionEnd=function(o,r){this.setNextCallback(r);var i=this.props.nodeRef?this.props.nodeRef.current:ue.findDOMNode(this),s=o==null&&!this.props.addEndListener;if(!i||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var d=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],m=d[0],f=d[1];this.props.addEndListener(m,f)}o!=null&&setTimeout(this.nextCallback,o)},a.render=function(){var o=this.state.status;if(o===ee)return null;var r=this.props,i=r.children;r.in,r.mountOnEnter,r.unmountOnExit,r.appear,r.enter,r.exit,r.timeout,r.addEndListener,r.onEnter,r.onEntering,r.onEntered,r.onExit,r.onExiting,r.onExited,r.nodeRef;var s=mn(r,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return x.createElement(qe.Provider,{value:null},typeof i=="function"?i(o,s):x.cloneElement(x.Children.only(i),s))},n})(x.Component);F.contextType=qe;F.propTypes={};function Y(){}F.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Y,onEntering:Y,onEntered:Y,onExit:Y,onExiting:Y,onExited:Y};F.UNMOUNTED=ee;F.EXITED=U;F.ENTERING=W;F.ENTERED=J;F.EXITING=ln;var ea=function(n,a){return n&&a&&a.split(" ").forEach(function(t){return Qr(n,t)})},nn=function(n,a){return n&&a&&a.split(" ").forEach(function(t){return Zr(n,t)})},ne=(function(e){cn(n,e);function n(){for(var t,o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return t=e.call.apply(e,[this].concat(r))||this,t.appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(s,d){var m=t.resolveArguments(s,d),f=m[0],C=m[1];t.removeClasses(f,"exit"),t.addClass(f,C?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(s,d)},t.onEntering=function(s,d){var m=t.resolveArguments(s,d),f=m[0],C=m[1],b=C?"appear":"enter";t.addClass(f,b,"active"),t.props.onEntering&&t.props.onEntering(s,d)},t.onEntered=function(s,d){var m=t.resolveArguments(s,d),f=m[0],C=m[1],b=C?"appear":"enter";t.removeClasses(f,b),t.addClass(f,b,"done"),t.props.onEntered&&t.props.onEntered(s,d)},t.onExit=function(s){var d=t.resolveArguments(s),m=d[0];t.removeClasses(m,"appear"),t.removeClasses(m,"enter"),t.addClass(m,"exit","base"),t.props.onExit&&t.props.onExit(s)},t.onExiting=function(s){var d=t.resolveArguments(s),m=d[0];t.addClass(m,"exit","active"),t.props.onExiting&&t.props.onExiting(s)},t.onExited=function(s){var d=t.resolveArguments(s),m=d[0];t.removeClasses(m,"exit"),t.addClass(m,"exit","done"),t.props.onExited&&t.props.onExited(s)},t.resolveArguments=function(s,d){return t.props.nodeRef?[t.props.nodeRef.current,s]:[s,d]},t.getClassNames=function(s){var d=t.props.classNames,m=typeof d=="string",f=m&&d?d+"-":"",C=m?""+f+s:d[s],b=m?C+"-active":d[s+"Active"],S=m?C+"-done":d[s+"Done"];return{baseClassName:C,activeClassName:b,doneClassName:S}},t}var a=n.prototype;return a.addClass=function(o,r,i){var s=this.getClassNames(r)[i+"ClassName"],d=this.getClassNames("enter"),m=d.doneClassName;r==="appear"&&i==="done"&&m&&(s+=" "+m),i==="active"&&o&&wo(o),s&&(this.appliedClasses[r][i]=s,ea(o,s))},a.removeClasses=function(o,r){var i=this.appliedClasses[r],s=i.base,d=i.active,m=i.done;this.appliedClasses[r]={},s&&nn(o,s),d&&nn(o,d),m&&nn(o,m)},a.render=function(){var o=this.props;o.classNames;var r=mn(o,["classNames"]);return x.createElement(F,Ve({},r,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},n})(x.Component);ne.defaultProps={classNames:""};ne.propTypes={};function un(e,n){var a=function(r){return n&&l.isValidElement(r)?n(r):r},t=Object.create(null);return e&&l.Children.map(e,function(o){return o}).forEach(function(o){t[o.key]=a(o)}),t}function na(e,n){e=e||{},n=n||{};function a(f){return f in n?n[f]:e[f]}var t=Object.create(null),o=[];for(var r in e)r in n?o.length&&(t[r]=o,o=[]):o.push(r);var i,s={};for(var d in n){if(t[d])for(i=0;i<t[d].length;i++){var m=t[d][i];s[t[d][i]]=a(m)}s[d]=a(d)}for(i=0;i<o.length;i++)s[o[i]]=a(o[i]);return s}function j(e,n,a){return a[n]!=null?a[n]:e.props[n]}function ta(e,n){return un(e.children,function(a){return l.cloneElement(a,{onExited:n.bind(null,a),in:!0,appear:j(a,"appear",e),enter:j(a,"enter",e),exit:j(a,"exit",e)})})}function oa(e,n,a){var t=un(e.children),o=na(n,t);return Object.keys(o).forEach(function(r){var i=o[r];if(l.isValidElement(i)){var s=r in n,d=r in t,m=n[r],f=l.isValidElement(m)&&!m.props.in;d&&(!s||f)?o[r]=l.cloneElement(i,{onExited:a.bind(null,i),in:!0,exit:j(i,"exit",e),enter:j(i,"enter",e)}):!d&&s&&!f?o[r]=l.cloneElement(i,{in:!1}):d&&s&&l.isValidElement(m)&&(o[r]=l.cloneElement(i,{onExited:a.bind(null,i),in:m.props.in,exit:j(i,"exit",e),enter:j(i,"enter",e)}))}}),o}var ra=Object.values||function(e){return Object.keys(e).map(function(n){return e[n]})},aa={component:"div",childFactory:function(n){return n}},pn=(function(e){cn(n,e);function n(t,o){var r;r=e.call(this,t,o)||this;var i=r.handleExited.bind(Ir(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}var a=n.prototype;return a.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},a.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(o,r){var i=r.children,s=r.handleExited,d=r.firstRender;return{children:d?ta(o,s):oa(o,i,s),firstRender:!1}},a.handleExited=function(o,r){var i=un(this.props.children);o.key in i||(o.props.onExited&&o.props.onExited(r),this.mounted&&this.setState(function(s){var d=Ve({},s.children);return delete d[o.key],{children:d}}))},a.render=function(){var o=this.props,r=o.component,i=o.childFactory,s=mn(o,["component","childFactory"]),d=this.state.contextValue,m=ra(this.state.children).map(i);return delete s.appear,delete s.enter,delete s.exit,r===null?x.createElement(qe.Provider,{value:d},m):x.createElement(qe.Provider,{value:d},x.createElement(r,s,m))},n})(x.Component);pn.propTypes={};pn.defaultProps=aa;const sa=l.createContext({hasProvider:!1,stack:{current:[]}}),te=[],We=[],ia=e=>{e(te),We.forEach(n=>n())},tn={getSnapshot:()=>te,subscribe:e=>(We.push(e),()=>{const n=We.indexOf(e);We.splice(n,1)})};function la(){const e=Dr.useSyncExternalStore(tn.subscribe,tn.getSnapshot,tn.getSnapshot),n=l.useCallback(()=>e[e.length-1],[e]),a=l.useCallback(i=>{const s=e.findIndex(d=>d.id===i);return e.slice(s)},[e]),t=l.useCallback(()=>{ia(i=>i.splice(0,i.length))},[]),o=l.useCallback(i=>{te.push(i),i.props.usePortal&&i.props.hasBackdrop&&document.body.classList.add(oe)},[]);return{closeOverlay:l.useCallback(i=>{const s=e.filter(m=>m.props.usePortal&&m.props.hasBackdrop&&m.id!==i),d=te.findIndex(m=>m.id===i);d>-1&&te.splice(d,1),s.length===0&&document.body.classList.remove(oe)},[e]),getLastOpened:n,getThisOverlayAndDescendants:a,openOverlay:o,resetStack:t}}function da(){const{stack:e,hasProvider:n}=l.useContext(sa),a=la(),t=l.useCallback(()=>e.current[e.current.length-1],[e]),o=l.useCallback(d=>{const m=e.current.findIndex(f=>f.id===d);return m===-1?[]:e.current.slice(m)},[e]),r=l.useCallback(()=>{e.current=[]},[e]),i=l.useCallback(d=>{e.current.push(d),d.props.usePortal&&d.props.hasBackdrop&&document.body.classList.add(oe)},[e]),s=l.useCallback(d=>{const m=e.current.filter(C=>C.props.usePortal&&C.props.hasBackdrop&&C.id!==d),f=e.current.findIndex(C=>C.id===d);f>-1&&e.current.splice(f,1),m.length===0&&document.body.classList.remove(oe)},[e]);return n?{closeOverlay:s,getLastOpened:t,getThisOverlayAndDescendants:o,openOverlay:i,resetStack:r}:(Xe("development")&&console.error(wr),a)}function ma(e){const n=l.useRef();return l.useEffect(()=>{n.current=e},[e]),n.current}function on(e){const n=P(e);return(n!=null?Fr(n):[]).filter(t=>!t.classList.contains(No)&&!t.classList.contains(Do))}const ca=l.createContext({});function ko({className:e,stopPropagationEvents:n,container:a,onChildrenMount:t,children:o}){const r=l.useContext(ca),i=a??r.portalContainer??(typeof document<"u"?document.body:void 0),[s,d]=l.useState(),m=l.useCallback(()=>{const f=document.createElement("div");return f.classList.add(pr),rn(f.classList,e),rn(f.classList,r.portalClassName),jn(f,n),f},[e,r.portalClassName,n]);return l.useEffect(()=>{if(i==null)return;const f=m();return i.appendChild(f),d(f),()=>{Vn(f,n),f.remove(),d(void 0)}},[i,m,n]),l.useEffect(()=>{s!=null&&(t==null||t())},[s,t]),l.useEffect(()=>{if(s!=null)return rn(s.classList,e),()=>ua(s.classList,e)},[e,s]),l.useEffect(()=>{if(s!=null)return jn(s,n),()=>Vn(s,n)},[s,n]),typeof document>"u"||s==null?null:Or.createPortal(o,s)}ko.displayName=`${q}.Portal`;function ua(e,n){n!=null&&n!==""&&e.remove(...n.split(" "))}function rn(e,n){n!=null&&n!==""&&e.add(...n.split(" "))}function jn(e,n){n==null||n.forEach(a=>e.addEventListener(a,Bo))}function Vn(e,n){n==null||n.forEach(a=>e.removeEventListener(a,Bo))}function Bo(e){e.stopPropagation()}const fn=l.forwardRef((e,n)=>{const{autoFocus:a=!0,backdropClassName:t,backdropProps:o={},canEscapeKeyClose:r=!0,canOutsideClickClose:i=!0,childRef:s,childRefs:d,children:m,className:f,enforceFocus:C=!0,hasBackdrop:b=!0,isOpen:S=!1,lazy:I=Ro(),onClose:g,onClosed:A,onClosing:$,onOpened:se,onOpening:ie,portalClassName:He,portalContainer:hn,shouldReturnFocusOnClose:T=!0,transitionDuration:_=300,transitionName:G=Ln,usePortal:le=!0}=e;pa(e);const{closeOverlay:Sn,getLastOpened:K,getThisOverlayAndDescendants:bn,openOverlay:En}=da(),[de,Ye]=l.useState(!1),[Uo,Wo]=l.useState(!1),[gn,yn]=l.useState(!1),Tn=l.useRef(null),v=l.useRef(null),Pn=l.useRef(null),Je=l.useRef(null),ze=l.useRef(null),vn=l.useRef(null),N=l.useCallback(c=>requestAnimationFrame(()=>{var R;const h=c??P(v),y=kn(h);if(h==null||y==null)return;!h.contains(y)&&((R=P(Je))==null||R.focus({preventScroll:!0}),Ye(!1))}),[]),xn=l.useCallback(c=>{c!=null&&gn&&(yn(!1),Ye(!0),N(c))},[N,gn]),jo=l.useMemo(()=>re(v,xn),[xn]),D=fa(),Qe=l.useRef(null),B=l.useCallback(c=>{const h=c.composed?c.composedPath()[0]:c.target,y=P(v);y!=null&&h instanceof Node&&!y.contains(h)&&(c.preventDefault(),c.stopImmediatePropagation(),N())},[N]),M=l.useCallback(c=>{const h=c.composed?c.composedPath()[0]:c.target;bn(D).some(({containerElement:R})=>{const ce=P(R);return(ce==null?void 0:ce.contains(h))&&!ce.isSameNode(h)})||g==null||g(c)},[bn,D,g]),Ze=l.useCallback(c=>{if(c.key==="Escape"&&r){const h=K();(h==null?void 0:h.id)===D&&(g==null||g(c),c.stopPropagation(),c.preventDefault())}},[r,K,D,g]),Vo=l.useMemo(()=>re(n,Qe),[n]);l.useImperativeHandle(Vo,()=>({bringFocusInsideOverlay:N,containerElement:v,handleDocumentFocus:B,handleDocumentMousedown:M,id:D,props:{autoFocus:a,enforceFocus:C,hasBackdrop:b,usePortal:le}}),[a,N,C,B,M,b,D,le]);const qo=l.useCallback(c=>{c.key==="Escape"&&r&&(g==null||g(c),c.stopPropagation(),c.preventDefault())},[r,g]),Nn=l.useCallback(()=>{if(Qe.current==null)return;const c=K();(c==null?void 0:c.handleDocumentFocus)!==void 0&&document.removeEventListener("focus",c.handleDocumentFocus,!0),En(Qe.current),a&&(P(v)!=null?(Ye(!0),N()):yn(!0)),Io(Tn,kn(P(v)))},[a,N,K,En]),me=l.useCallback(()=>{var h;document.removeEventListener("focus",B,!0),document.removeEventListener("mousedown",M),Sn(D);const c=K();c!==void 0&&c.props.autoFocus&&c.props.enforceFocus&&((h=c.bringFocusInsideOverlay)==null||h.call(c),c.handleDocumentFocus!==void 0&&document.addEventListener("focus",c.handleDocumentFocus,!0))},[Sn,K,B,M,D]),en=ma(S)??!1;l.useEffect(()=>{S&&Wo(!0),!en&&S&&Nn(),en&&!S&&me()},[S,Nn,me,en]),l.useEffect(()=>{if(!(!S||!(i&&!b)))return document.addEventListener("mousedown",M),()=>{document.removeEventListener("mousedown",M)}},[M,S,i,b]),l.useEffect(()=>{if(!(!S||a!==!1||!r))return document.addEventListener("keydown",Ze),()=>{document.removeEventListener("keydown",Ze)}},[Ze,S,a,r]),l.useEffect(()=>{if(!S||!C)return;const c=K();if((c==null?void 0:c.id)===D)return document.addEventListener("focus",B,!0),()=>{document.removeEventListener("focus",B,!0)}},[B,C,S,K,D]);const Dn=l.useRef(me);Dn.current=me,l.useEffect(()=>()=>{Dn.current()},[]);const On=l.useCallback(c=>{const h=P(Tn);T&&h instanceof HTMLElement&&h.focus(),A==null||A(c)},[A,T]),H=l.useCallback(()=>{},[]),Rn=l.useCallback(c=>{if(s!=null)return s;if(d!=null){const h=c.key;if(h==null){Xe("production")||console.error(Mr);return}return d[h]}},[s,d]),Xo=l.useCallback(c=>{if(c==null||fr(c))return null;const h=Rn(c),y=Cr(c)?c.props:{},O=hr(c,"span",{className:w(y.className,Sr),ref:h===void 0?vn:void 0,tabIndex:C||a?0:void 0}),R=h??vn;return u.jsx(ne,{addEndListener:H,classNames:G,nodeRef:R,onEntered:pe(se,R),onEntering:pe(ie,R),onExited:pe(On,R),onExiting:pe($,R),timeout:_,children:O})},[a,C,Rn,H,On,$,se,ie,_,G]),In=l.useCallback(c=>{var h;i&&(g==null||g(c)),C&&N(),(h=o==null?void 0:o.onMouseDown)==null||h.call(o,c)},[o,N,i,C,g]),_n=l.useCallback((c,h)=>u.jsx(ne,{addEndListener:H,classNames:G,nodeRef:h.ref,timeout:_,unmountOnExit:!0,children:u.jsx("div",{tabIndex:0,...h})},c),[H,_,G]),$o=l.useCallback(c=>{if(!C||de)return;const h=P(v),y=P(ze);c.relatedTarget!=null&&(h!=null&&h.contains(c.relatedTarget))&&c.relatedTarget!==y&&(y==null||y.focus({preventScroll:!0}))},[C,de]),Go=l.useCallback(c=>{var h;if(C&&c.shiftKey&&c.key==="Tab"){const y=on(v).pop();y!=null?y.focus():(h=P(ze))==null||h.focus({preventScroll:!0})}},[C]),Ho=l.useCallback(c=>{var y;const h=P(Je);if(c.relatedTarget!=null&&((y=P(v))!=null&&y.contains(c.relatedTarget))&&c.relatedTarget!==h){const O=on(v).shift();!de&&O!=null&&O!==c.relatedTarget?O.focus():h==null||h.focus({preventScroll:!0})}else{const O=on(v).pop();O!=null?O.focus():h==null||h.focus({preventScroll:!0})}},[de]),Fn=l.useMemo(()=>b&&S?u.jsx(ne,{classNames:G,nodeRef:Pn,timeout:_,addEndListener:H,children:u.jsx("div",{...o,className:w(br,t,o==null?void 0:o.className),onMouseDown:In,ref:Pn})},"__backdrop"):null,[t,o,In,H,b,S,_,G]);if(I&&!Uo)return null;const Q=S?l.Children.map(m,Xo)??[]:[];Fn!==null&&Q.unshift(Fn),S&&(a||C)&&Q.length>0&&(Q.unshift(_n("__start",{className:No,onFocus:$o,onKeyDown:Go,ref:Je})),C&&Q.push(_n("__end",{className:Do,onFocus:Ho,ref:ze})));const An=u.jsx("div",{"aria-live":"polite",className:w(Ln,{[oe]:S,[Er]:!le},f),onKeyDown:qo,ref:jo,children:u.jsx(pn,{appear:!0,component:null,children:Q})});return le?u.jsx(ko,{className:He,container:hn,children:An}):An});fn.displayName=`${q}.Overlay2`;function pa({childRef:e,childRefs:n,children:a}){const t=l.Children.count(a);l.useEffect(()=>{Xe("production")||(e!=null&&n!=null&&console.error(kr),t>1&&n==null&&console.error(Br))},[e,n,t])}function fa(){const e=l.useId();return`${fn.displayName}-${e}`}function pe(e,n){return()=>{(n==null?void 0:n.current)!=null&&(e==null||e(n.current))}}const Cn=e=>{const{canOutsideClickClose:n=!0,children:a,className:t,containerRef:o,icon:r,isCloseButtonShown:i,isOpen:s=!1,onClose:d,role:m="dialog",style:f,title:C,titleTagName:b=gr,...S}=e,I=l.useRef(null),g=l.useMemo(()=>`title-${yr("bp-dialog")}`,[]);return _o(()=>{C==null&&(e.icon!=null&&console.warn(Kr),e.isCloseButtonShown!=null&&console.warn(Lr))},[C,e.icon,e.isCloseButtonShown]),u.jsx(fn,{...S,isOpen:s,canOutsideClickClose:n,className:Tr,childRef:I,hasBackdrop:!0,onClose:d,children:u.jsx("div",{className:Pr,ref:re(o,I),children:u.jsxs("div",{"aria-describedby":S["aria-describedby"],"aria-labelledby":S["aria-labelledby"]||(C!=null?g:void 0),"aria-modal":S.enforceFocus??!0,className:w(Nr,t),role:m,style:f,children:[C!=null&&u.jsxs("div",{className:vr,children:[u.jsx(an,{icon:r,size:wn.STANDARD,"aria-hidden":!0,tabIndex:-1}),u.jsx(b,{id:g,children:C}),i!==!1&&u.jsx($e,{"aria-label":"Close",className:xr,icon:u.jsx(Rr,{size:wn.STANDARD}),onClick:d,variant:"minimal"})]}),a]})})})};Cn.displayName=`${q}.Dialog`;const{fn:Ca}=__STORYBOOK_MODULE_TEST__;function p(e){return{type:"field",definition:e}}const Ge=["Low","Medium","High"],k=["Engineering","Marketing","Sales","Finance","Operations","Legal"],dn=["Urgent","Review","Follow-up","Archived","Pinned"],qn=["usr_ada","usr_grace","usr_katherine"],Mo={usr_ada:{name:"Ada Lovelace",team:"Computation"},usr_grace:{name:"Grace Hopper",team:"Compilers"},usr_katherine:{name:"Katherine Johnson",team:"Flight dynamics"}},ae=[p({fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Name",isRequired:!0,fieldComponentProps:{placeholder:"Enter a name"}}),p({fieldKey:"description",fieldComponent:"TEXT_AREA",label:"Description",fieldComponentProps:{placeholder:"Enter a description",rows:3}}),p({fieldKey:"quantity",fieldComponent:"NUMBER_INPUT",label:"Quantity",isRequired:!0,fieldComponentProps:{min:0,max:1e3,step:1,placeholder:"0"}}),p({fieldKey:"priority",fieldComponent:"DROPDOWN",label:"Priority",fieldComponentProps:{items:Ge,placeholder:"Select priority"}}),p({fieldKey:"isActive",fieldComponent:"RADIO_BUTTONS",label:"Is Active",fieldComponentProps:{options:[{label:"True",value:!0},{label:"False",value:!1}]}}),p({fieldKey:"startDate",fieldComponent:"DATETIME_PICKER",label:"Start Date",fieldComponentProps:{placeholder:"Select a date"}}),p({fieldKey:"document",fieldComponent:"FILE_PICKER",label:"Document",fieldComponentProps:{accept:".pdf,.doc,.docx"}}),p({fieldKey:"notes",fieldComponent:"CUSTOM",label:"Notes",fieldComponentProps:{customRenderer:e=>u.jsx("textarea",{value:e.value!=null?String(e.value):"",onChange:n=>{var a;return(a=e.onChange)==null?void 0:a.call(e,n.target.value)},className:"osdkCustomTextarea",placeholder:"Custom rendered notes field"})}})],ha=[],Sa=3e3,je={current:void 0},ba=Ca().mockName("onSubmit");function E(e){var n;ba(e),(n=je.current)==null||n.call(je,"Submitted successfully")}function Ea(){const[e,n]=l.useState(),a=l.useCallback(t=>{n(t),setTimeout(()=>n(void 0),Sa)},[]);return je.current=a,e==null?null:u.jsx("div",{className:"osdkSubmitToast",children:e})}const Fs={title:"Experimental/ActionForm/Building Blocks/BaseForm",component:z,decorators:[e=>u.jsxs(u.Fragment,{children:[u.jsx(Ea,{}),u.jsx("div",{className:"osdkFormCard",children:u.jsx(e,{})})]})],parameters:{msw:{handlers:[...Yo.handlers]},controls:{expanded:!0},docs:{description:{component:"BaseForm is the lower-level form renderer used by ActionForm. Use it directly when you already have form content definitions or need custom form composition."}}},argTypes:{formTitle:{description:"Optional title displayed at the top of the form.",control:"text"},formContent:{description:"Ordered list of form content items (fields or sections) to render.",control:!1},onSubmit:{description:"Called when the form is submitted. Receives the current form state.",control:!1,table:{category:"Events"}},isSubmitDisabled:{description:"Whether the submit button is disabled.",control:"boolean",defaultValue:!1,table:{defaultValue:{summary:"false"}}},isPending:{description:'Whether the form is in a pending state. Shows "Submitting…" and disables the button.',control:"boolean",defaultValue:!1,table:{defaultValue:{summary:"false"}}},isLoading:{description:"Whether the form is loading. Shows a loading message when true and no field definitions are provided.",control:"boolean",defaultValue:!1,table:{defaultValue:{summary:"false"}}},className:{description:"Additional CSS class name for the form.",control:"text"}}},fe={args:{formContent:ae,onSubmit:E},parameters:{docs:{source:{code:`import { BaseForm } from "@osdk/react-components/experimental";

const formContent = [
  {
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Name",
    isRequired: true,
    fieldComponentProps: { placeholder: "Enter a name" },
  },
  {
    fieldKey: "description",
    fieldComponent: "TEXT_AREA",
    label: "Description",
    fieldComponentProps: { placeholder: "Enter a description", rows: 3 },
  },
  {
    fieldKey: "quantity",
    fieldComponent: "NUMBER_INPUT",
    label: "Quantity",
    isRequired: true,
    fieldComponentProps: { min: 0, max: 1000, step: 1 },
  },
  {
    fieldKey: "priority",
    fieldComponent: "DROPDOWN",
    label: "Priority",
    fieldComponentProps: {
      items: ["Low", "Medium", "High"],
      placeholder: "Select priority",
    },
  },
  {
    fieldKey: "isActive",
    fieldComponent: "RADIO_BUTTONS",
    label: "Is Active",
    fieldComponentProps: {
      options: [
        { label: "True", value: true },
        { label: "False", value: false },
      ],
    },
  },
  {
    fieldKey: "startDate",
    fieldComponent: "DATETIME_PICKER",
    label: "Start Date",
    fieldComponentProps: { placeholder: "Select a date" },
  },
  {
    fieldKey: "document",
    fieldComponent: "FILE_PICKER",
    label: "Document",
    fieldComponentProps: { accept: ".pdf,.doc,.docx" },
  },
  {
    fieldKey: "notes",
    fieldComponent: "CUSTOM",
    label: "Notes",
    fieldComponentProps: {
      customRenderer: (props) => (
        <textarea
          value={props.value ?? ""}
          onChange={(e) => props.onChange?.(e.target.value)}
          placeholder="Custom rendered notes field"
        />
      ),
    },
  },
];

<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},Ce={parameters:{docs:{source:{code:`const [formState, setFormState] = useState({});

const handleFieldValueChange = (fieldKey, value) => {
  setFormState((prev) => ({ ...prev, [fieldKey]: value }));
};

return (
  <div>
    <div>
      <strong>Current State:</strong>
      <pre>{JSON.stringify(formState, null, 2)}</pre>
    </div>
    <BaseForm
      formContent={formContent}
      formState={formState}
      onFieldValueChange={handleFieldValueChange}
      onSubmit={(state) => console.log("Submitted:", state)}
    />
  </div>
);`}}},render:()=>u.jsx(ga,{})};function ga(){const[e,n]=l.useState({}),a=l.useCallback((t,o)=>{n(r=>({...r,[t]:o}))},[]);return u.jsxs("div",{children:[u.jsxs("div",{className:"osdkFormStorySpacing",children:[u.jsx("strong",{children:"Current Form State:"}),u.jsx("pre",{className:"osdkCodeOutput",children:JSON.stringify(e,(t,o)=>o instanceof File?`File: ${o.name}`:o,2)})]}),u.jsx(z,{formContent:ae,formState:e,onFieldValueChange:a,onSubmit:E})]})}const he={args:{formTitle:"Create New Order",formContent:ae,onSubmit:E},parameters:{docs:{source:{code:`<BaseForm
  formTitle="Create New Order"
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},Se={args:{formContent:ha,isLoading:!0,onSubmit:E},parameters:{docs:{source:{code:`<BaseForm
  formContent={[]}
  isLoading={true}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},be={args:{formContent:ae,isSubmitDisabled:!0,onSubmit:E},parameters:{docs:{source:{code:`<BaseForm
  formContent={formContent}
  isSubmitDisabled={true}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},Ee={args:{formContent:ae,isPending:!0,onSubmit:E},parameters:{docs:{source:{code:`<BaseForm
  formContent={formContent}
  isPending={true}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},ya=[p({fieldKey:"isRemote",fieldComponent:"SWITCH",label:"Remote employee",helperText:"Use a switch for boolean settings that map to on/off state.",fieldComponentProps:{}})],ge={args:{formTitle:"Update employee",formContent:ya,onSubmit:E},parameters:{docs:{source:{code:`const formContent = [
  {
    fieldKey: "isRemote",
    fieldComponent: "SWITCH",
    label: "Remote employee",
    fieldComponentProps: {},
  },
];

<BaseForm
  formTitle="Update employee"
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},Ta=[p({fieldKey:"structPayload",fieldComponent:"UNSUPPORTED",label:"Struct payload",isRequired:!0,fieldComponentProps:{}}),p({fieldKey:"geoshape",fieldComponent:"UNSUPPORTED",label:"Geoshape",fieldComponentProps:{}})],ye={args:{formTitle:"Unsupported field types",formContent:Ta,onSubmit:E},parameters:{docs:{source:{code:`const formContent = [
  {
    fieldKey: "structPayload",
    fieldComponent: "UNSUPPORTED",
    label: "Struct payload",
    isRequired: true,
    fieldComponentProps: {},
  },
  {
    fieldKey: "geoshape",
    fieldComponent: "UNSUPPORTED",
    label: "Geoshape",
    fieldComponentProps: {},
  },
];

// Unsupported fields render a disabled message.
// Use fieldComponent: "CUSTOM" when you need to collect a value for these types.
<BaseForm
  formTitle="Unsupported field types"
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},Pa=[p({fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Name",isRequired:!0,fieldComponentProps:{placeholder:"Required field"}}),p({fieldKey:"username",fieldComponent:"TEXT_INPUT",label:"Username",fieldComponentProps:{minLength:3,maxLength:20,placeholder:"3-20 characters"}}),p({fieldKey:"quantity",fieldComponent:"NUMBER_INPUT",label:"Quantity",fieldComponentProps:{min:0,max:100,step:1,placeholder:"0-100"}}),p({fieldKey:"startDate",fieldComponent:"DATETIME_PICKER",label:"Start Date",fieldComponentProps:{min:new Date(2024,0,1),max:new Date(2026,11,31),placeholder:"2024-2026 only"}}),p({fieldKey:"document",fieldComponent:"FILE_PICKER",label:"Document",fieldComponentProps:{maxSize:1048576}})],Te={args:{formContent:Pa,onSubmit:E},parameters:{docs:{source:{code:`const formContent = [
  {
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Name",
    isRequired: true,
    fieldComponentProps: { placeholder: "Required field" },
  },
  {
    fieldKey: "username",
    fieldComponent: "TEXT_INPUT",
    label: "Username",
    fieldComponentProps: { minLength: 3, maxLength: 20 },
  },
  {
    fieldKey: "quantity",
    fieldComponent: "NUMBER_INPUT",
    label: "Quantity",
    fieldComponentProps: { min: 0, max: 100 },
  },
  {
    fieldKey: "startDate",
    fieldComponent: "DATETIME_PICKER",
    label: "Start Date",
    fieldComponentProps: {
      min: new Date(2024, 0, 1),
      max: new Date(2026, 11, 31),
    },
  },
  {
    fieldKey: "document",
    fieldComponent: "FILE_PICKER",
    label: "Document",
    fieldComponentProps: { maxSize: 1048576 },
  },
];

// Validation fires on blur, revalidates on change.
// Submit button shows error summary tooltip when invalid.
<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},va=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,xa=[p({fieldKey:"email",fieldComponent:"TEXT_INPUT",label:"Email",isRequired:!0,validate:async e=>{if(!(typeof e!="string"||e.length===0))return va.test(e)?void 0:"Enter a valid email address"},fieldComponentProps:{placeholder:"user@example.com"}})],Pe={args:{formContent:xa,onSubmit:E},parameters:{docs:{source:{code:`const formContent = [
  {
    fieldKey: "email",
    fieldComponent: "TEXT_INPUT",
    label: "Email",
    isRequired: true,
    validate: async (value) => {
      if (typeof value !== "string" || value.length === 0) return undefined;
      const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      return emailRegex.test(value) ? undefined : "Enter a valid email address";
    },
    fieldComponentProps: { placeholder: "user@example.com" },
  },
];

<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},Na=[p({fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Name",isRequired:!0,onValidationError:e=>{if(e.type==="required")return"Please provide your name"},fieldComponentProps:{placeholder:"Your name"}}),p({fieldKey:"age",fieldComponent:"NUMBER_INPUT",label:"Age",onValidationError:e=>{if(e.type==="min")return`You must be at least ${String(e.min)} years old`;if(e.type==="max")return`Age cannot exceed ${String(e.max)}`},fieldComponentProps:{min:18,max:120,placeholder:"18-120"}})],ve={args:{formContent:Na,onSubmit:E},parameters:{docs:{source:{code:`const formContent = [
  {
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Name",
    isRequired: true,
    onValidationError: (error) => {
      if (error.type === "required") return "Please provide your name";
      return undefined; // fall back to default
    },
    fieldComponentProps: { placeholder: "Your name" },
  },
  {
    fieldKey: "age",
    fieldComponent: "NUMBER_INPUT",
    label: "Age",
    onValidationError: (error) => {
      if (error.type === "min") return \`You must be at least \${error.min} years old\`;
      if (error.type === "max") return \`Age cannot exceed \${error.max}\`;
      return undefined;
    },
    fieldComponentProps: { min: 18, max: 120 },
  },
];

<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},xe={parameters:{docs:{source:{code:`const client = useOsdkClient();
const employeeObjectSet = client(Employee);

const formContent = [
  {
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Name",
    isRequired: true,
    fieldComponentProps: { placeholder: "Enter a name" },
  },
  {
    fieldKey: "employees",
    fieldComponent: "OBJECT_SET",
    label: "Employees",
    fieldComponentProps: { value: employeeObjectSet },
  },
];

<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}},render:()=>u.jsx(Da,{})};function Da(){const e=Oo(),n=l.useMemo(()=>e(yo),[e]),a=l.useMemo(()=>[p({fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Name",isRequired:!0,fieldComponentProps:{placeholder:"Enter a name"}}),p({fieldKey:"employees",fieldComponent:"OBJECT_SET",label:"Employees",fieldComponentProps:{value:n}})],[n]);return u.jsx(z,{formContent:a,onSubmit:E})}const Oa=[p({fieldKey:"department",fieldComponent:"DROPDOWN",label:"Department (Select)",fieldComponentProps:{items:k,placeholder:"Select department..."}}),p({fieldKey:"team",fieldComponent:"DROPDOWN",label:"Team (Searchable)",fieldComponentProps:{items:k,isSearchable:!0,placeholder:"Search teams..."}})],Ne={args:{formContent:Oa,onSubmit:E},parameters:{docs:{source:{code:`const formContent = [
  {
    fieldKey: "department",
    fieldComponent: "DROPDOWN",
    label: "Department (Select)",
    fieldComponentProps: {
      items: ["Engineering", "Marketing", "Sales", "Finance", "Operations", "Legal"],
      placeholder: "Select department...",
    },
  },
  {
    fieldKey: "team",
    fieldComponent: "DROPDOWN",
    label: "Team (Searchable)",
    fieldComponentProps: {
      items: ["Engineering", "Marketing", "Sales", "Finance", "Operations", "Legal"],
      isSearchable: true,
      placeholder: "Search teams...",
    },
  },
];

// Side-by-side comparison: plain Select vs searchable Combobox.
<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},Ra=[p({fieldKey:"categories",fieldComponent:"DROPDOWN",label:"Categories (Select)",isRequired:!0,fieldComponentProps:{items:dn,isMultiple:!0,placeholder:"Select categories..."}}),p({fieldKey:"tags",fieldComponent:"DROPDOWN",label:"Tags (Searchable)",fieldComponentProps:{items:dn,isMultiple:!0,isSearchable:!0,placeholder:"Search tags..."}})],De={args:{formContent:Ra,onSubmit:E},parameters:{docs:{source:{code:`const formContent = [
  {
    fieldKey: "categories",
    fieldComponent: "DROPDOWN",
    label: "Categories (Select)",
    fieldComponentProps: {
      items: ["Urgent", "Review", "Follow-up", "Archived", "Pinned"],
      isMultiple: true,
      placeholder: "Select categories...",
    },
  },
  {
    fieldKey: "tags",
    fieldComponent: "DROPDOWN",
    label: "Tags (Searchable)",
    fieldComponentProps: {
      items: ["Urgent", "Review", "Follow-up", "Archived", "Pinned"],
      isMultiple: true,
      isSearchable: true,
      placeholder: "Search tags...",
    },
  },
];

// Side-by-side comparison: plain multi-Select vs searchable multi-Combobox.
<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},Ia=[p({fieldKey:"assigneeUserId",fieldComponent:"DROPDOWN",label:"Assignee",fieldComponentProps:{items:qn,itemToStringLabel:Xn,renderItemLabel:$n,isSearchable:!0,placeholder:"Search users..."}}),p({fieldKey:"reviewerUserIds",fieldComponent:"DROPDOWN",label:"Reviewers",fieldComponentProps:{items:qn,itemToStringLabel:Xn,renderItemLabel:$n,isMultiple:!0,isSearchable:!0,placeholder:"Search reviewers..."}})],Oe={args:{formContent:Ia,onSubmit:E},parameters:{docs:{source:{code:`const userIds = ["usr_ada", "usr_grace", "usr_katherine"];

const usersById = {
  usr_ada: { name: "Ada Lovelace", team: "Computation" },
  usr_grace: { name: "Grace Hopper", team: "Compilers" },
  usr_katherine: { name: "Katherine Johnson", team: "Flight dynamics" },
};

const formContent = [
  {
    fieldKey: "assigneeUserId",
    fieldComponent: "DROPDOWN",
    label: "Assignee",
    fieldComponentProps: {
      items: userIds,
      itemToStringLabel: (userId) => usersById[userId]?.name ?? userId,
      renderItemLabel: (userId) => (
        <span>
          <strong>{usersById[userId]?.name ?? userId}</strong>
          <span>{usersById[userId]?.team}</span>
        </span>
      ),
      isSearchable: true,
    },
  },
];

<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},_a=[p({fieldKey:"scheduledAt",fieldComponent:"DATETIME_PICKER",label:"Scheduled At (date + time)",fieldComponentProps:{showTime:!0,placeholder:"Select date and time"}}),p({fieldKey:"deadline",fieldComponent:"DATETIME_PICKER",label:"Deadline (date only)",fieldComponentProps:{placeholder:"Select date"}})],Re={args:{formContent:_a,onSubmit:E},parameters:{docs:{source:{code:`const formContent = [
  {
    fieldKey: "scheduledAt",
    fieldComponent: "DATETIME_PICKER",
    label: "Scheduled At (date + time)",
    fieldComponentProps: {
      showTime: true,
      placeholder: "Select date and time",
    },
  },
  {
    fieldKey: "deadline",
    fieldComponent: "DATETIME_PICKER",
    label: "Deadline (date only)",
    fieldComponentProps: {
      placeholder: "Select date",
    },
  },
];

// showTime: true adds a time picker alongside the date calendar.
// Without showTime, only the date is selectable.
<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},Fa=[p({fieldKey:"scheduledAt",fieldComponent:"DATETIME_PICKER",label:"Scheduled At",fieldComponentProps:{showTime:!0,placeholder:"Select date and time"}}),p({fieldKey:"deadline",fieldComponent:"DATETIME_PICKER",label:"Deadline",fieldComponentProps:{placeholder:"Select date"}}),p({fieldKey:"meetingWindow",fieldComponent:"DATE_RANGE_INPUT",label:"Meeting Window",fieldComponentProps:{showTime:!0,placeholderStart:"Start",placeholderEnd:"End"}}),p({fieldKey:"department",fieldComponent:"DROPDOWN",label:"Department",isRequired:!0,fieldComponentProps:{items:k,placeholder:"Select department..."}}),p({fieldKey:"team",fieldComponent:"DROPDOWN",label:"Team",fieldComponentProps:{items:k,isSearchable:!0,placeholder:"Search teams..."}})];function Aa(){const[e,n]=l.useState(!1),a=l.useCallback(()=>{n(!0)},[]),t=l.useCallback(()=>{n(!1)},[]);return u.jsxs(u.Fragment,{children:[u.jsx($e,{text:"Open dialog",onClick:a}),u.jsx(Cn,{className:"osdkBlueprintDialogForm",isOpen:e,onClose:t,title:"Action form",children:u.jsx(z,{formContent:Fa,onSubmit:E})})]})}const Ie={render:()=>u.jsx(Aa,{}),parameters:{docs:{source:{code:`function BlueprintDialogBaseForm() {
  return (
    <Dialog isOpen={true} title="Action form">
      <BaseForm formContent={formContent} onSubmit={handleSubmit} />
    </Dialog>
  );
}`}}}},Ka=[p({fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Full Name",isRequired:!0,fieldComponentProps:{placeholder:"Enter full name"}}),p({fieldKey:"email",fieldComponent:"TEXT_INPUT",label:"Email",isRequired:!0,fieldComponentProps:{placeholder:"user@example.com"}}),p({fieldKey:"department",fieldComponent:"DROPDOWN",label:"Department",fieldComponentProps:{items:k,placeholder:"Select department..."}}),p({fieldKey:"startDate",fieldComponent:"DATETIME_PICKER",label:"Start Date",fieldComponentProps:{placeholder:"Select a date"}}),p({fieldKey:"priority",fieldComponent:"DROPDOWN",label:"Priority",fieldComponentProps:{items:Ge,placeholder:"Select priority"}}),p({fieldKey:"isActive",fieldComponent:"RADIO_BUTTONS",label:"Status",fieldComponentProps:{options:[{label:"Active",value:!0},{label:"Inactive",value:!1}]}}),p({fieldKey:"bio",fieldComponent:"TEXT_AREA",label:"Bio",fieldComponentProps:{placeholder:"Tell us about yourself",rows:3}}),p({fieldKey:"tags",fieldComponent:"DROPDOWN",label:"Tags",fieldComponentProps:{items:dn,isMultiple:!0,isSearchable:!0,placeholder:"Search tags..."}}),p({fieldKey:"document",fieldComponent:"FILE_PICKER",label:"Resume",fieldComponentProps:{accept:".pdf,.doc,.docx"}}),p({fieldKey:"notes",fieldComponent:"TEXT_AREA",label:"Additional Notes",fieldComponentProps:{placeholder:"Any extra details",rows:2}})];function La(){const[e,n]=l.useState(!1),a=l.useCallback(()=>{n(!0)},[]),t=l.useCallback(()=>{n(!1)},[]);return u.jsxs(u.Fragment,{children:[u.jsx($e,{text:"Open dialog",onClick:a}),u.jsx(Cn,{className:"osdkBlueprintDialogForm",isOpen:e,onClose:t,title:"New employee",children:u.jsx(z,{formContent:Ka,onSubmit:E})})]})}const _e={render:()=>u.jsx(La,{}),parameters:{docs:{description:{story:"When the form has many fields inside a height-constrained container like a dialog, the fields area scrolls while the footer stays pinned at the bottom."},source:{code:`// The footer pins automatically when the form overflows its container.
// No extra CSS or props needed — just place BaseForm inside a
// height-constrained parent (dialog, panel, sidebar).
<Dialog isOpen={true} title="New employee">
  <BaseForm formContent={manyFields} onSubmit={handleSubmit} />
</Dialog>`}}}},wa=[p({fieldKey:"vacationDates",fieldComponent:"DATE_RANGE_INPUT",label:"Vacation Dates (date only)",fieldComponentProps:{placeholderStart:"Start date",placeholderEnd:"End date"}}),p({fieldKey:"meetingWindow",fieldComponent:"DATE_RANGE_INPUT",label:"Meeting Window (date + time)",fieldComponentProps:{showTime:!0,placeholderStart:"Start",placeholderEnd:"End"}})],Fe={args:{formContent:wa,onSubmit:E},parameters:{docs:{source:{code:`const formContent = [
  {
    fieldKey: "vacationDates",
    fieldComponent: "DATE_RANGE_INPUT",
    label: "Vacation Dates (date only)",
    fieldComponentProps: {
      placeholderStart: "Start date",
      placeholderEnd: "End date",
    },
  },
  {
    fieldKey: "meetingWindow",
    fieldComponent: "DATE_RANGE_INPUT",
    label: "Meeting Window (date + time)",
    fieldComponentProps: {
      showTime: true,
      placeholderStart: "Start",
      placeholderEnd: "End",
    },
  },
];

// DATE_RANGE_INPUT renders two inputs (start/end) with
// a shared calendar popover. showTime adds time pickers.
<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},ka=[p({fieldKey:"attachments",fieldComponent:"FILE_PICKER",label:"Attachments",fieldComponentProps:{isMulti:!0,accept:[".pdf",".png",".jpg"],maxSize:5242880,text:"No files selected",buttonText:"Choose Files"}}),p({fieldKey:"singleFile",fieldComponent:"FILE_PICKER",label:"Cover Image (single file)",fieldComponentProps:{accept:".png,.jpg",text:"No file chosen"}})],Ae={args:{formContent:ka,onSubmit:E},parameters:{docs:{source:{code:`const formContent = [
  {
    fieldKey: "attachments",
    fieldComponent: "FILE_PICKER",
    label: "Attachments",
    fieldComponentProps: {
      isMulti: true,
      accept: [".pdf", ".png", ".jpg"],
      maxSize: 5242880,     // 5 MB
      text: "No files selected",
      buttonText: "Choose Files",
    },
  },
  {
    fieldKey: "singleFile",
    fieldComponent: "FILE_PICKER",
    label: "Cover Image (single file)",
    fieldComponentProps: {
      accept: ".png,.jpg",
    },
  },
];

// isMulti: true allows selecting multiple files.
// maxSize validates individual file sizes (in bytes).
// accept filters file types in the browser file dialog.
<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},Ba=[p({fieldKey:"email",fieldComponent:"TEXT_INPUT",label:"Email",isRequired:!0,helperText:u.jsxs("span",{children:["We'll use this to send you a confirmation."," ",u.jsx("a",{href:"#privacy",style:{color:"inherit"},children:"Privacy policy"})]}),helperTextPlacement:"tooltip",fieldComponentProps:{placeholder:"you@example.com"}}),p({fieldKey:"bio",fieldComponent:"TEXT_AREA",label:"Bio",helperText:u.jsxs("span",{children:["Write a short bio. ",u.jsx("strong",{children:"Markdown"})," is supported."]}),helperTextPlacement:"bottom",fieldComponentProps:{placeholder:"Tell us about yourself",rows:3}}),p({fieldKey:"department",fieldComponent:"DROPDOWN",label:"Department",helperText:"Select the department you belong to",helperTextPlacement:"tooltip",fieldComponentProps:{items:k,placeholder:"Select department"}})],Ke={args:{formContent:Ba,onSubmit:E},parameters:{docs:{source:{code:`const fieldDefinitions = [
  {
    fieldKey: "email",
    fieldComponent: "TEXT_INPUT",
    label: "Email",
    isRequired: true,
    helperText: (
      <span>
        We'll use this to send you a confirmation.{" "}
        <a href="#privacy">Privacy policy</a>
      </span>
    ),
    helperTextPlacement: "tooltip",
    fieldComponentProps: { placeholder: "you@example.com" },
  },
  {
    fieldKey: "bio",
    fieldComponent: "TEXT_AREA",
    label: "Bio",
    helperText: (
      <span>
        Write a short bio. <strong>Markdown</strong> is supported.
      </span>
    ),
    helperTextPlacement: "bottom",
    fieldComponentProps: { placeholder: "Tell us about yourself", rows: 3 },
  },
  {
    fieldKey: "department",
    fieldComponent: "DROPDOWN",
    label: "Department",
    helperText: "Select the department you belong to",
    helperTextPlacement: "tooltip",
    fieldComponentProps: {
      items: ["Engineering", "Marketing", "Sales"],
      placeholder: "Select department",
    },
  },
];

// helperText accepts React.ReactNode — plain strings, JSX with links,
// bold text, or any valid React node.
// "tooltip" (default) shows an info icon next to the label.
// "bottom" renders the text below the label, above the input.
<BaseForm
  fieldDefinitions={fieldDefinitions}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},Ma=[p({fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Name",isRequired:!0,fieldComponentProps:{placeholder:"Enter a name",defaultValue:"Jane Doe"}}),p({fieldKey:"quantity",fieldComponent:"NUMBER_INPUT",label:"Quantity",fieldComponentProps:{min:0,max:1e3,step:1,defaultValue:42}}),p({fieldKey:"priority",fieldComponent:"DROPDOWN",label:"Priority",fieldComponentProps:{items:Ge,placeholder:"Select priority"}})],Le={args:{formContent:Ma,onSubmit:E},parameters:{docs:{source:{code:`const formContent = [
  {
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Name",
    isRequired: true,
    fieldComponentProps: {
      placeholder: "Enter a name",
      defaultValue: "Jane Doe",
    },
  },
  {
    fieldKey: "quantity",
    fieldComponent: "NUMBER_INPUT",
    label: "Quantity",
    fieldComponentProps: {
      min: 0, max: 1000, step: 1,
      defaultValue: 42,
    },
  },
  {
    fieldKey: "priority",
    fieldComponent: "DROPDOWN",
    label: "Priority",
    fieldComponentProps: {
      items: ["Low", "Medium", "High"],
      placeholder: "Select priority",
    },
  },
];

// defaultValue inside fieldComponentProps pre-populates fields
// in uncontrolled mode. The "Priority" dropdown has no default
// for comparison.
<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},Ua=[p({fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Name",isRequired:!0,fieldComponentProps:{placeholder:"Enter a name"}}),p({fieldKey:"employee",fieldComponent:"OBJECT_SELECT",label:"Employee",fieldComponentProps:{objectType:{type:"object",apiName:"Employee"},placeholder:"Search employees…"}})],Wa=[p({fieldKey:"department",fieldComponent:"DROPDOWN",label:"Department",fieldComponentProps:{items:k,placeholder:"Select department..."}}),{type:"section",key:"personal",definition:{title:"Personal Information",description:"Basic details about the employee",fields:[{fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Full Name",isRequired:!0,fieldComponentProps:{placeholder:"Enter full name"}},{fieldKey:"email",fieldComponent:"TEXT_INPUT",label:"Email",fieldComponentProps:{placeholder:"user@example.com"}}]}},{type:"section",key:"settings",definition:{title:"Settings",collapsedByDefault:!0,fields:[{fieldKey:"isActive",fieldComponent:"RADIO_BUTTONS",label:"Active",fieldComponentProps:{options:[{label:"Yes",value:!0},{label:"No",value:!1}]}},{fieldKey:"priority",fieldComponent:"DROPDOWN",label:"Priority",fieldComponentProps:{items:Ge,placeholder:"Select priority"}}]}}],we={args:{formContent:Ua,onSubmit:E},parameters:{docs:{source:{code:`const fieldDefinitions = [
  {
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Name",
    isRequired: true,
    fieldComponentProps: { placeholder: "Enter a name" },
  },
  {
    fieldKey: "employee",
    fieldComponent: "OBJECT_SELECT",
    label: "Employee",
    fieldComponentProps: {
      objectType: { type: "object" as const, apiName: "Employee" },
      placeholder: "Search employees…",
    },
  },
];

// OBJECT_SELECT renders a searchable dropdown that queries
// the Foundry ontology for objects matching the search term.
<BaseForm
  fieldDefinitions={fieldDefinitions}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}};function ja(){const e=Oo(),n=l.useMemo(()=>e(yo).where({department:"Marketing"}),[e]),a=l.useMemo(()=>[p({fieldKey:"employee",fieldComponent:"OBJECT_SELECT",label:"Marketing employee",helperText:"This selector is scoped by an ObjectSet.",fieldComponentProps:{objectSet:n,placeholder:"Search Marketing employees…"}})],[n]);return u.jsx(z,{formContent:a,onSubmit:E})}const ke={render:()=>u.jsx(ja,{}),parameters:{docs:{source:{code:`function ScopedEmployeeForm() {
  const client = useOsdkClient();
  const marketingEmployees = useMemo(
    () => client(Employee).where({ department: "Marketing" }),
    [client],
  );

  const formContent = [
    {
      type: "field",
      definition: {
        fieldKey: "employee",
        fieldComponent: "OBJECT_SELECT",
        label: "Marketing employee",
        helperText: "This selector is scoped by an ObjectSet.",
        fieldComponentProps: {
          objectSet: marketingEmployees,
          placeholder: "Search Marketing employees…",
        },
      },
    },
  ];

  return <BaseForm formContent={formContent} onSubmit={handleSubmit} />;
}`}}}},Be={args:{formContent:Wa,onSubmit:E}},Va=[{type:"section",key:"contact",definition:{title:"Contact Details",style:"minimal",description:"How to reach the employee",fields:[{fieldKey:"phone",fieldComponent:"TEXT_INPUT",label:"Phone",fieldComponentProps:{placeholder:"+1 (555) 000-0000"}},{fieldKey:"email",fieldComponent:"TEXT_INPUT",label:"Email",fieldComponentProps:{placeholder:"user@example.com"}}]}},{type:"section",key:"address",definition:{title:"Address",style:"minimal",fields:[{fieldKey:"street",fieldComponent:"TEXT_INPUT",label:"Street",fieldComponentProps:{placeholder:"123 Main St"}},{fieldKey:"city",fieldComponent:"TEXT_INPUT",label:"City",fieldComponentProps:{placeholder:"Springfield"}}]}}],Me={args:{formContent:Va,onSubmit:E}},qa=[{type:"section",key:"employee",definition:{title:"Employee Details",columnCount:2,fields:[{fieldKey:"firstName",fieldComponent:"TEXT_INPUT",label:"First Name",fieldComponentProps:{placeholder:"First"}},{fieldKey:"lastName",fieldComponent:"TEXT_INPUT",label:"Last Name",fieldComponentProps:{placeholder:"Last"}},{fieldKey:"email",fieldComponent:"TEXT_INPUT",label:"Email",fieldComponentProps:{placeholder:"user@example.com"}},{fieldKey:"department",fieldComponent:"DROPDOWN",label:"Department",fieldComponentProps:{items:k,placeholder:"Select..."}}]}}],Ue={args:{formContent:qa,onSubmit:E}};function Xn(e){var n;return typeof e!="string"?String(e):((n=Mo[e])==null?void 0:n.name)??e}function $n(e){const n=String(e),a=Mo[n];return u.jsxs("span",{className:"osdkRichDropdownLabel",children:[u.jsx("strong",{children:(a==null?void 0:a.name)??n}),(a==null?void 0:a.team)!=null?u.jsx("span",{className:"osdkRichDropdownDescription",children:a.team}):null]})}var Gn,Hn,Yn;fe.parameters={...fe.parameters,docs:{...(Gn=fe.parameters)==null?void 0:Gn.docs,source:{originalSource:`{
  args: {
    formContent,
    onSubmit: handleSubmit
  },
  parameters: {
    docs: {
      source: {
        code: \`import { BaseForm } from "@osdk/react-components/experimental";

const formContent = [
  {
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Name",
    isRequired: true,
    fieldComponentProps: { placeholder: "Enter a name" },
  },
  {
    fieldKey: "description",
    fieldComponent: "TEXT_AREA",
    label: "Description",
    fieldComponentProps: { placeholder: "Enter a description", rows: 3 },
  },
  {
    fieldKey: "quantity",
    fieldComponent: "NUMBER_INPUT",
    label: "Quantity",
    isRequired: true,
    fieldComponentProps: { min: 0, max: 1000, step: 1 },
  },
  {
    fieldKey: "priority",
    fieldComponent: "DROPDOWN",
    label: "Priority",
    fieldComponentProps: {
      items: ["Low", "Medium", "High"],
      placeholder: "Select priority",
    },
  },
  {
    fieldKey: "isActive",
    fieldComponent: "RADIO_BUTTONS",
    label: "Is Active",
    fieldComponentProps: {
      options: [
        { label: "True", value: true },
        { label: "False", value: false },
      ],
    },
  },
  {
    fieldKey: "startDate",
    fieldComponent: "DATETIME_PICKER",
    label: "Start Date",
    fieldComponentProps: { placeholder: "Select a date" },
  },
  {
    fieldKey: "document",
    fieldComponent: "FILE_PICKER",
    label: "Document",
    fieldComponentProps: { accept: ".pdf,.doc,.docx" },
  },
  {
    fieldKey: "notes",
    fieldComponent: "CUSTOM",
    label: "Notes",
    fieldComponentProps: {
      customRenderer: (props) => (
        <textarea
          value={props.value ?? ""}
          onChange={(e) => props.onChange?.(e.target.value)}
          placeholder="Custom rendered notes field"
        />
      ),
    },
  },
];

<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>\`
      }
    }
  }
}`,...(Yn=(Hn=fe.parameters)==null?void 0:Hn.docs)==null?void 0:Yn.source}}};var Jn,zn,Qn;Ce.parameters={...Ce.parameters,docs:{...(Jn=Ce.parameters)==null?void 0:Jn.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`const [formState, setFormState] = useState({});

const handleFieldValueChange = (fieldKey, value) => {
  setFormState((prev) => ({ ...prev, [fieldKey]: value }));
};

return (
  <div>
    <div>
      <strong>Current State:</strong>
      <pre>{JSON.stringify(formState, null, 2)}</pre>
    </div>
    <BaseForm
      formContent={formContent}
      formState={formState}
      onFieldValueChange={handleFieldValueChange}
      onSubmit={(state) => console.log("Submitted:", state)}
    />
  </div>
);\`
      }
    }
  },
  render: () => <ControlledFormStory />
}`,...(Qn=(zn=Ce.parameters)==null?void 0:zn.docs)==null?void 0:Qn.source}}};var Zn,et,nt;he.parameters={...he.parameters,docs:{...(Zn=he.parameters)==null?void 0:Zn.docs,source:{originalSource:`{
  args: {
    formTitle: "Create New Order",
    formContent,
    onSubmit: handleSubmit
  },
  parameters: {
    docs: {
      source: {
        code: \`<BaseForm
  formTitle="Create New Order"
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>\`
      }
    }
  }
}`,...(nt=(et=he.parameters)==null?void 0:et.docs)==null?void 0:nt.source}}};var tt,ot,rt;Se.parameters={...Se.parameters,docs:{...(tt=Se.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  args: {
    formContent: EMPTY_FORM_CONTENT,
    isLoading: true,
    onSubmit: handleSubmit
  },
  parameters: {
    docs: {
      source: {
        code: \`<BaseForm
  formContent={[]}
  isLoading={true}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>\`
      }
    }
  }
}`,...(rt=(ot=Se.parameters)==null?void 0:ot.docs)==null?void 0:rt.source}}};var at,st,it;be.parameters={...be.parameters,docs:{...(at=be.parameters)==null?void 0:at.docs,source:{originalSource:`{
  args: {
    formContent,
    isSubmitDisabled: true,
    onSubmit: handleSubmit
  },
  parameters: {
    docs: {
      source: {
        code: \`<BaseForm
  formContent={formContent}
  isSubmitDisabled={true}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>\`
      }
    }
  }
}`,...(it=(st=be.parameters)==null?void 0:st.docs)==null?void 0:it.source}}};var lt,dt,mt;Ee.parameters={...Ee.parameters,docs:{...(lt=Ee.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  args: {
    formContent,
    isPending: true,
    onSubmit: handleSubmit
  },
  parameters: {
    docs: {
      source: {
        code: \`<BaseForm
  formContent={formContent}
  isPending={true}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>\`
      }
    }
  }
}`,...(mt=(dt=Ee.parameters)==null?void 0:dt.docs)==null?void 0:mt.source}}};var ct,ut,pt;ge.parameters={...ge.parameters,docs:{...(ct=ge.parameters)==null?void 0:ct.docs,source:{originalSource:`{
  args: {
    formTitle: "Update employee",
    formContent: switchFormContent,
    onSubmit: handleSubmit
  },
  parameters: {
    docs: {
      source: {
        code: \`const formContent = [
  {
    fieldKey: "isRemote",
    fieldComponent: "SWITCH",
    label: "Remote employee",
    fieldComponentProps: {},
  },
];

<BaseForm
  formTitle="Update employee"
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>\`
      }
    }
  }
}`,...(pt=(ut=ge.parameters)==null?void 0:ut.docs)==null?void 0:pt.source}}};var ft,Ct,ht;ye.parameters={...ye.parameters,docs:{...(ft=ye.parameters)==null?void 0:ft.docs,source:{originalSource:`{
  args: {
    formTitle: "Unsupported field types",
    formContent: unsupportedFormContent,
    onSubmit: handleSubmit
  },
  parameters: {
    docs: {
      source: {
        code: \`const formContent = [
  {
    fieldKey: "structPayload",
    fieldComponent: "UNSUPPORTED",
    label: "Struct payload",
    isRequired: true,
    fieldComponentProps: {},
  },
  {
    fieldKey: "geoshape",
    fieldComponent: "UNSUPPORTED",
    label: "Geoshape",
    fieldComponentProps: {},
  },
];

// Unsupported fields render a disabled message.
// Use fieldComponent: "CUSTOM" when you need to collect a value for these types.
<BaseForm
  formTitle="Unsupported field types"
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>\`
      }
    }
  }
}`,...(ht=(Ct=ye.parameters)==null?void 0:Ct.docs)==null?void 0:ht.source}}};var St,bt,Et;Te.parameters={...Te.parameters,docs:{...(St=Te.parameters)==null?void 0:St.docs,source:{originalSource:`{
  args: {
    formContent: validationFormContent,
    onSubmit: handleSubmit
  },
  parameters: {
    docs: {
      source: {
        code: \`const formContent = [
  {
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Name",
    isRequired: true,
    fieldComponentProps: { placeholder: "Required field" },
  },
  {
    fieldKey: "username",
    fieldComponent: "TEXT_INPUT",
    label: "Username",
    fieldComponentProps: { minLength: 3, maxLength: 20 },
  },
  {
    fieldKey: "quantity",
    fieldComponent: "NUMBER_INPUT",
    label: "Quantity",
    fieldComponentProps: { min: 0, max: 100 },
  },
  {
    fieldKey: "startDate",
    fieldComponent: "DATETIME_PICKER",
    label: "Start Date",
    fieldComponentProps: {
      min: new Date(2024, 0, 1),
      max: new Date(2026, 11, 31),
    },
  },
  {
    fieldKey: "document",
    fieldComponent: "FILE_PICKER",
    label: "Document",
    fieldComponentProps: { maxSize: 1048576 },
  },
];

// Validation fires on blur, revalidates on change.
// Submit button shows error summary tooltip when invalid.
<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>\`
      }
    }
  }
}`,...(Et=(bt=Te.parameters)==null?void 0:bt.docs)==null?void 0:Et.source}}};var gt,yt,Tt;Pe.parameters={...Pe.parameters,docs:{...(gt=Pe.parameters)==null?void 0:gt.docs,source:{originalSource:`{
  args: {
    formContent: customValidateFormContent,
    onSubmit: handleSubmit
  },
  parameters: {
    docs: {
      source: {
        code: \`const formContent = [
  {
    fieldKey: "email",
    fieldComponent: "TEXT_INPUT",
    label: "Email",
    isRequired: true,
    validate: async (value) => {
      if (typeof value !== "string" || value.length === 0) return undefined;
      const emailRegex = /^[^\\\\s@]+@[^\\\\s@]+\\\\.[^\\\\s@]+$/;
      return emailRegex.test(value) ? undefined : "Enter a valid email address";
    },
    fieldComponentProps: { placeholder: "user@example.com" },
  },
];

<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>\`
      }
    }
  }
}`,...(Tt=(yt=Pe.parameters)==null?void 0:yt.docs)==null?void 0:Tt.source}}};var Pt,vt,xt;ve.parameters={...ve.parameters,docs:{...(Pt=ve.parameters)==null?void 0:Pt.docs,source:{originalSource:`{
  args: {
    formContent: customErrorFormContent,
    onSubmit: handleSubmit
  },
  parameters: {
    docs: {
      source: {
        code: \`const formContent = [
  {
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Name",
    isRequired: true,
    onValidationError: (error) => {
      if (error.type === "required") return "Please provide your name";
      return undefined; // fall back to default
    },
    fieldComponentProps: { placeholder: "Your name" },
  },
  {
    fieldKey: "age",
    fieldComponent: "NUMBER_INPUT",
    label: "Age",
    onValidationError: (error) => {
      if (error.type === "min") return \\\`You must be at least \\\${error.min} years old\\\`;
      if (error.type === "max") return \\\`Age cannot exceed \\\${error.max}\\\`;
      return undefined;
    },
    fieldComponentProps: { min: 18, max: 120 },
  },
];

<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>\`
      }
    }
  }
}`,...(xt=(vt=ve.parameters)==null?void 0:vt.docs)==null?void 0:xt.source}}};var Nt,Dt,Ot;xe.parameters={...xe.parameters,docs:{...(Nt=xe.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`const client = useOsdkClient();
const employeeObjectSet = client(Employee);

const formContent = [
  {
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Name",
    isRequired: true,
    fieldComponentProps: { placeholder: "Enter a name" },
  },
  {
    fieldKey: "employees",
    fieldComponent: "OBJECT_SET",
    label: "Employees",
    fieldComponentProps: { value: employeeObjectSet },
  },
];

<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>\`
      }
    }
  },
  render: () => <ObjectSetFieldStory />
}`,...(Ot=(Dt=xe.parameters)==null?void 0:Dt.docs)==null?void 0:Ot.source}}};var Rt,It,_t;Ne.parameters={...Ne.parameters,docs:{...(Rt=Ne.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
  args: {
    formContent: singleSelectDropdownFormContent,
    onSubmit: handleSubmit
  },
  parameters: {
    docs: {
      source: {
        code: \`const formContent = [
  {
    fieldKey: "department",
    fieldComponent: "DROPDOWN",
    label: "Department (Select)",
    fieldComponentProps: {
      items: ["Engineering", "Marketing", "Sales", "Finance", "Operations", "Legal"],
      placeholder: "Select department...",
    },
  },
  {
    fieldKey: "team",
    fieldComponent: "DROPDOWN",
    label: "Team (Searchable)",
    fieldComponentProps: {
      items: ["Engineering", "Marketing", "Sales", "Finance", "Operations", "Legal"],
      isSearchable: true,
      placeholder: "Search teams...",
    },
  },
];

// Side-by-side comparison: plain Select vs searchable Combobox.
<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>\`
      }
    }
  }
}`,...(_t=(It=Ne.parameters)==null?void 0:It.docs)==null?void 0:_t.source}}};var Ft,At,Kt;De.parameters={...De.parameters,docs:{...(Ft=De.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
  args: {
    formContent: multiSelectDropdownFormContent,
    onSubmit: handleSubmit
  },
  parameters: {
    docs: {
      source: {
        code: \`const formContent = [
  {
    fieldKey: "categories",
    fieldComponent: "DROPDOWN",
    label: "Categories (Select)",
    fieldComponentProps: {
      items: ["Urgent", "Review", "Follow-up", "Archived", "Pinned"],
      isMultiple: true,
      placeholder: "Select categories...",
    },
  },
  {
    fieldKey: "tags",
    fieldComponent: "DROPDOWN",
    label: "Tags (Searchable)",
    fieldComponentProps: {
      items: ["Urgent", "Review", "Follow-up", "Archived", "Pinned"],
      isMultiple: true,
      isSearchable: true,
      placeholder: "Search tags...",
    },
  },
];

// Side-by-side comparison: plain multi-Select vs searchable multi-Combobox.
<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>\`
      }
    }
  }
}`,...(Kt=(At=De.parameters)==null?void 0:At.docs)==null?void 0:Kt.source}}};var Lt,wt,kt;Oe.parameters={...Oe.parameters,docs:{...(Lt=Oe.parameters)==null?void 0:Lt.docs,source:{originalSource:`{
  args: {
    formContent: richDropdownLabelFormContent,
    onSubmit: handleSubmit
  },
  parameters: {
    docs: {
      source: {
        code: \`const userIds = ["usr_ada", "usr_grace", "usr_katherine"];

const usersById = {
  usr_ada: { name: "Ada Lovelace", team: "Computation" },
  usr_grace: { name: "Grace Hopper", team: "Compilers" },
  usr_katherine: { name: "Katherine Johnson", team: "Flight dynamics" },
};

const formContent = [
  {
    fieldKey: "assigneeUserId",
    fieldComponent: "DROPDOWN",
    label: "Assignee",
    fieldComponentProps: {
      items: userIds,
      itemToStringLabel: (userId) => usersById[userId]?.name ?? userId,
      renderItemLabel: (userId) => (
        <span>
          <strong>{usersById[userId]?.name ?? userId}</strong>
          <span>{usersById[userId]?.team}</span>
        </span>
      ),
      isSearchable: true,
    },
  },
];

<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>\`
      }
    }
  }
}`,...(kt=(wt=Oe.parameters)==null?void 0:wt.docs)==null?void 0:kt.source}}};var Bt,Mt,Ut;Re.parameters={...Re.parameters,docs:{...(Bt=Re.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
  args: {
    formContent: dateTimeFormContent,
    onSubmit: handleSubmit
  },
  parameters: {
    docs: {
      source: {
        code: \`const formContent = [
  {
    fieldKey: "scheduledAt",
    fieldComponent: "DATETIME_PICKER",
    label: "Scheduled At (date + time)",
    fieldComponentProps: {
      showTime: true,
      placeholder: "Select date and time",
    },
  },
  {
    fieldKey: "deadline",
    fieldComponent: "DATETIME_PICKER",
    label: "Deadline (date only)",
    fieldComponentProps: {
      placeholder: "Select date",
    },
  },
];

// showTime: true adds a time picker alongside the date calendar.
// Without showTime, only the date is selectable.
<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>\`
      }
    }
  }
}`,...(Ut=(Mt=Re.parameters)==null?void 0:Mt.docs)==null?void 0:Ut.source}}};var Wt,jt,Vt;Ie.parameters={...Ie.parameters,docs:{...(Wt=Ie.parameters)==null?void 0:Wt.docs,source:{originalSource:`{
  render: () => <BlueprintDialogBaseForm />,
  parameters: {
    docs: {
      source: {
        code: \`function BlueprintDialogBaseForm() {
  return (
    <Dialog isOpen={true} title="Action form">
      <BaseForm formContent={formContent} onSubmit={handleSubmit} />
    </Dialog>
  );
}\`
      }
    }
  }
}`,...(Vt=(jt=Ie.parameters)==null?void 0:jt.docs)==null?void 0:Vt.source}}};var qt,Xt,$t;_e.parameters={..._e.parameters,docs:{...(qt=_e.parameters)==null?void 0:qt.docs,source:{originalSource:`{
  render: () => <ScrollableDialogBaseForm />,
  parameters: {
    docs: {
      description: {
        story: "When the form has many fields inside a height-constrained container like a dialog, the fields area scrolls while the footer stays pinned at the bottom."
      },
      source: {
        code: \`// The footer pins automatically when the form overflows its container.
// No extra CSS or props needed — just place BaseForm inside a
// height-constrained parent (dialog, panel, sidebar).
<Dialog isOpen={true} title="New employee">
  <BaseForm formContent={manyFields} onSubmit={handleSubmit} />
</Dialog>\`
      }
    }
  }
}`,...($t=(Xt=_e.parameters)==null?void 0:Xt.docs)==null?void 0:$t.source}}};var Gt,Ht,Yt;Fe.parameters={...Fe.parameters,docs:{...(Gt=Fe.parameters)==null?void 0:Gt.docs,source:{originalSource:`{
  args: {
    formContent: dateRangeFormContent,
    onSubmit: handleSubmit
  },
  parameters: {
    docs: {
      source: {
        code: \`const formContent = [
  {
    fieldKey: "vacationDates",
    fieldComponent: "DATE_RANGE_INPUT",
    label: "Vacation Dates (date only)",
    fieldComponentProps: {
      placeholderStart: "Start date",
      placeholderEnd: "End date",
    },
  },
  {
    fieldKey: "meetingWindow",
    fieldComponent: "DATE_RANGE_INPUT",
    label: "Meeting Window (date + time)",
    fieldComponentProps: {
      showTime: true,
      placeholderStart: "Start",
      placeholderEnd: "End",
    },
  },
];

// DATE_RANGE_INPUT renders two inputs (start/end) with
// a shared calendar popover. showTime adds time pickers.
<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>\`
      }
    }
  }
}`,...(Yt=(Ht=Fe.parameters)==null?void 0:Ht.docs)==null?void 0:Yt.source}}};var Jt,zt,Qt;Ae.parameters={...Ae.parameters,docs:{...(Jt=Ae.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
  args: {
    formContent: multiFilePickerFormContent,
    onSubmit: handleSubmit
  },
  parameters: {
    docs: {
      source: {
        code: \`const formContent = [
  {
    fieldKey: "attachments",
    fieldComponent: "FILE_PICKER",
    label: "Attachments",
    fieldComponentProps: {
      isMulti: true,
      accept: [".pdf", ".png", ".jpg"],
      maxSize: 5242880,     // 5 MB
      text: "No files selected",
      buttonText: "Choose Files",
    },
  },
  {
    fieldKey: "singleFile",
    fieldComponent: "FILE_PICKER",
    label: "Cover Image (single file)",
    fieldComponentProps: {
      accept: ".png,.jpg",
    },
  },
];

// isMulti: true allows selecting multiple files.
// maxSize validates individual file sizes (in bytes).
// accept filters file types in the browser file dialog.
<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>\`
      }
    }
  }
}`,...(Qt=(zt=Ae.parameters)==null?void 0:zt.docs)==null?void 0:Qt.source}}};var Zt,eo,no;Ke.parameters={...Ke.parameters,docs:{...(Zt=Ke.parameters)==null?void 0:Zt.docs,source:{originalSource:`{
  args: {
    formContent: helperTextFormContent,
    onSubmit: handleSubmit
  },
  parameters: {
    docs: {
      source: {
        code: \`const fieldDefinitions = [
  {
    fieldKey: "email",
    fieldComponent: "TEXT_INPUT",
    label: "Email",
    isRequired: true,
    helperText: (
      <span>
        We'll use this to send you a confirmation.{" "}
        <a href="#privacy">Privacy policy</a>
      </span>
    ),
    helperTextPlacement: "tooltip",
    fieldComponentProps: { placeholder: "you@example.com" },
  },
  {
    fieldKey: "bio",
    fieldComponent: "TEXT_AREA",
    label: "Bio",
    helperText: (
      <span>
        Write a short bio. <strong>Markdown</strong> is supported.
      </span>
    ),
    helperTextPlacement: "bottom",
    fieldComponentProps: { placeholder: "Tell us about yourself", rows: 3 },
  },
  {
    fieldKey: "department",
    fieldComponent: "DROPDOWN",
    label: "Department",
    helperText: "Select the department you belong to",
    helperTextPlacement: "tooltip",
    fieldComponentProps: {
      items: ["Engineering", "Marketing", "Sales"],
      placeholder: "Select department",
    },
  },
];

// helperText accepts React.ReactNode — plain strings, JSX with links,
// bold text, or any valid React node.
// "tooltip" (default) shows an info icon next to the label.
// "bottom" renders the text below the label, above the input.
<BaseForm
  fieldDefinitions={fieldDefinitions}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>\`
      }
    }
  }
}`,...(no=(eo=Ke.parameters)==null?void 0:eo.docs)==null?void 0:no.source}}};var to,oo,ro;Le.parameters={...Le.parameters,docs:{...(to=Le.parameters)==null?void 0:to.docs,source:{originalSource:`{
  args: {
    formContent: defaultValueFormContent,
    onSubmit: handleSubmit
  },
  parameters: {
    docs: {
      source: {
        code: \`const formContent = [
  {
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Name",
    isRequired: true,
    fieldComponentProps: {
      placeholder: "Enter a name",
      defaultValue: "Jane Doe",
    },
  },
  {
    fieldKey: "quantity",
    fieldComponent: "NUMBER_INPUT",
    label: "Quantity",
    fieldComponentProps: {
      min: 0, max: 1000, step: 1,
      defaultValue: 42,
    },
  },
  {
    fieldKey: "priority",
    fieldComponent: "DROPDOWN",
    label: "Priority",
    fieldComponentProps: {
      items: ["Low", "Medium", "High"],
      placeholder: "Select priority",
    },
  },
];

// defaultValue inside fieldComponentProps pre-populates fields
// in uncontrolled mode. The "Priority" dropdown has no default
// for comparison.
<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>\`
      }
    }
  }
}`,...(ro=(oo=Le.parameters)==null?void 0:oo.docs)==null?void 0:ro.source}}};var ao,so,io;we.parameters={...we.parameters,docs:{...(ao=we.parameters)==null?void 0:ao.docs,source:{originalSource:`{
  args: {
    formContent: objectSelectFormContent,
    onSubmit: handleSubmit
  },
  parameters: {
    docs: {
      source: {
        code: \`const fieldDefinitions = [
  {
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Name",
    isRequired: true,
    fieldComponentProps: { placeholder: "Enter a name" },
  },
  {
    fieldKey: "employee",
    fieldComponent: "OBJECT_SELECT",
    label: "Employee",
    fieldComponentProps: {
      objectType: { type: "object" as const, apiName: "Employee" },
      placeholder: "Search employees\\u2026",
    },
  },
];

// OBJECT_SELECT renders a searchable dropdown that queries
// the Foundry ontology for objects matching the search term.
<BaseForm
  fieldDefinitions={fieldDefinitions}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>\`
      }
    }
  }
}`,...(io=(so=we.parameters)==null?void 0:so.docs)==null?void 0:io.source}}};var lo,mo,co;ke.parameters={...ke.parameters,docs:{...(lo=ke.parameters)==null?void 0:lo.docs,source:{originalSource:`{
  render: () => <ScopedObjectSelectStory />,
  parameters: {
    docs: {
      source: {
        code: \`function ScopedEmployeeForm() {
  const client = useOsdkClient();
  const marketingEmployees = useMemo(
    () => client(Employee).where({ department: "Marketing" }),
    [client],
  );

  const formContent = [
    {
      type: "field",
      definition: {
        fieldKey: "employee",
        fieldComponent: "OBJECT_SELECT",
        label: "Marketing employee",
        helperText: "This selector is scoped by an ObjectSet.",
        fieldComponentProps: {
          objectSet: marketingEmployees,
          placeholder: "Search Marketing employees…",
        },
      },
    },
  ];

  return <BaseForm formContent={formContent} onSubmit={handleSubmit} />;
}\`
      }
    }
  }
}`,...(co=(mo=ke.parameters)==null?void 0:mo.docs)==null?void 0:co.source}}};var uo,po,fo;Be.parameters={...Be.parameters,docs:{...(uo=Be.parameters)==null?void 0:uo.docs,source:{originalSource:`{
  args: {
    formContent: sectionFormContent,
    onSubmit: handleSubmit
  }
}`,...(fo=(po=Be.parameters)==null?void 0:po.docs)==null?void 0:fo.source}}};var Co,ho,So;Me.parameters={...Me.parameters,docs:{...(Co=Me.parameters)==null?void 0:Co.docs,source:{originalSource:`{
  args: {
    formContent: minimalSectionFormContent,
    onSubmit: handleSubmit
  }
}`,...(So=(ho=Me.parameters)==null?void 0:ho.docs)==null?void 0:So.source}}};var bo,Eo,go;Ue.parameters={...Ue.parameters,docs:{...(bo=Ue.parameters)==null?void 0:bo.docs,source:{originalSource:`{
  args: {
    formContent: gridSectionFormContent,
    onSubmit: handleSubmit
  }
}`,...(go=(Eo=Ue.parameters)==null?void 0:Eo.docs)==null?void 0:go.source}}};const As=["Default","Controlled","WithCustomTitle","Loading","SubmitDisabled","Pending","WithSwitch","WithUnsupportedFields","WithValidation","WithCustomValidation","WithCustomErrorMessages","WithObjectSetField","WithDropdown","WithMultiSelectDropdown","WithRichDropdownLabels","WithDateTimePicker","InsideBlueprintDialog","ScrollableDialogForm","WithDateRangePicker","WithMultiFilePicker","WithHelperText","WithDefaultValues","WithObjectSelect","WithScopedObjectSelect","WithSections","WithMinimalSections","WithGridSection"];export{Ce as Controlled,fe as Default,Ie as InsideBlueprintDialog,Se as Loading,Ee as Pending,_e as ScrollableDialogForm,be as SubmitDisabled,ve as WithCustomErrorMessages,he as WithCustomTitle,Pe as WithCustomValidation,Fe as WithDateRangePicker,Re as WithDateTimePicker,Le as WithDefaultValues,Ne as WithDropdown,Ue as WithGridSection,Ke as WithHelperText,Me as WithMinimalSections,Ae as WithMultiFilePicker,De as WithMultiSelectDropdown,we as WithObjectSelect,xe as WithObjectSetField,Oe as WithRichDropdownLabels,ke as WithScopedObjectSelect,Be as WithSections,ge as WithSwitch,ye as WithUnsupportedFields,Te as WithValidation,As as __namedExportsOrder,Fs as default};
