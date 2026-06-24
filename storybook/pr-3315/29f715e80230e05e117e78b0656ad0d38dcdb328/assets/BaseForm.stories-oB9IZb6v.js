import{r as l,j as p,R as N,f as or}from"./iframe-C-hy2wdy.js";import{E as un}from"./Employee-BAk2o20h.js";import{B as X,F as rr,S as ar}from"./SubmissionOutputPanel-BEqe4Jsx.js";import{u as pn}from"./useOsdkClient-B0-v4GK7.js";import{c as B}from"./index-BialtY4S.js";import{i as Je,S as _o,L as Fo,a as sr,b as Ao,c as ir,d as lr,e as dr,f as mr,g as cr,D as q,T as ur,r as Ko,B as pr,h as fr,F as Cr,j as hr,A as br,k as Sr,s as Er,v as yr,l as kn,m as gr,I as dn,n as Tr,O as re,o as Lo,p as Bo,P as Pr,q as Un,t as vr,u as Nr,w as xr,x as Dr,y as Rr,z as Or,H as Ir,C as _r,E as Fr,G as Ar,J as Kr,K as Lr,M as Br}from"./html-DH9tTT6W.js";import{s as wr}from"./index-CfOOXbFm.js";import{R as pe,r as kr}from"./index-D9lCKnb7.js";import{S as Ur}from"./small-cross-BJKae6WT.js";import{I as Mn}from"./svgIconContainer-DENES-tb.js";import"./preload-helper-Dp1pzeXC.js";import"./ActionButton-HBbJNPLY.js";import"./Button-C_wdHEKp.js";import"./useBaseUiId-G0BgJb_q.js";import"./SkeletonBar-CPHROABu.js";import"./Tooltip-oUZs4xpc.js";import"./InternalBackdrop-D6F8afFb.js";import"./composite-DuV_q_V8.js";import"./getDisabledMountTransitionStyles-DIBtmSue.js";import"./ToolbarRootContext-zUUlKgBB.js";import"./PopoverPopup-B-MSqfqS.js";import"./info-sign-BAY1OCoe.js";import"./useEventCallback-CvFdqSS3.js";import"./toNumber-BrIv9iXR.js";import"./Input-BqhvvaK2.js";import"./useControlled-BcH7nnYc.js";import"./useValueChanged-D-uBWd9Q.js";import"./caret-down-DQDznwk1.js";import"./cross-rNO-BqqK.js";import"./getPseudoElementBounds-htS1zhx8.js";import"./CompositeItem-tcE-R7Zm.js";import"./makeExternalStore-BNKAFYVp.js";import"./chevron-up-du_ZIDDt.js";import"./chevron-down-pweWOAgK.js";import"./Switch-BuQMPU5d.js";import"./iconLoader-2h0M_Gfc.js";import"./CompositeRoot-kCwuSx-U.js";import"./CollapsiblePanel-DQ6L1wVR.js";import"./error-CxoFdxIw.js";import"./index-C_JV041G.js";function Mr(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function mn(e,n){return mn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,t){return o.__proto__=t,o},mn(e,n)}function wo(){return typeof window<"u"&&window.document!=null}function Wn(e,n){const t=((e==null?void 0:e.getRootNode(n))??document).activeElement;return t instanceof HTMLElement?t:null}const Wr=['a[href]:not([tabindex="-1"])','button:not([disabled]):not([tabindex="-1"])','details:not([tabindex="-1"])','input:not([disabled]):not([tabindex="-1"])','select:not([disabled]):not([tabindex="-1"])','textarea:not([disabled]):not([tabindex="-1"])','[tabindex]:not([tabindex="-1"])'].join(",");function jr(e){return Array.from(e.querySelectorAll(Wr))}const G="[Blueprint]",Vr=G+" <Spinner> Classes.SMALL/LARGE are ignored if size prop is set.",Xr=G+" <Dialog> iconName is ignored if title is omitted.",qr=G+" <Dialog> isCloseButtonShown prop is ignored if title is omitted.",Gr=G+" <Overlay2> was used outside of a <OverlaysProvider> context. This will no longer be supported in Blueprint v6. See https://github.com/palantir/blueprint/wiki/Overlay2-migration",$r=G+" <Overlay2> cannot use childRef and childRefs props simultaneously",Hr=G+" <Overlay2> requires childRefs prop when rendering multiple child elements",Jr=G+" <Overlay2> requires each child element to have a unique key prop when childRefs is used";function jn(e){return e.key==="Enter"||e.key===" "}function Yr(e){return e!=null&&typeof e!="function"}function zr(e){return typeof e=="function"}function ko(e,n){Yr(e)?e.current=n:zr(e)&&e(n)}function ae(...e){return n=>{e.forEach(o=>{ko(o,n)})}}function P(e){return e===null?null:typeof e.current>"u"?e:e.current}function Uo(e,n=[]){l.useEffect(()=>{Je("production")||e()},n)}const Qr={defaultTabIndex:void 0,disabledTabIndex:-1};function Zr(e,n,o,t=Qr){const{defaultTabIndex:r,disabledTabIndex:a}=t,{active:i,onClick:s,onFocus:d,onKeyDown:m,onKeyUp:f,onBlur:C,tabIndex:E=r}=n,[b,I]=l.useState(),[y,A]=l.useState(!1),$=l.useRef(null),ie=l.useCallback(T=>{y&&A(!1),C==null||C(T)},[y,C]),le=l.useCallback(T=>{jn(T)&&(T.preventDefault(),T.key!==b&&A(!0)),I(T.key),m==null||m(T)},[b,m]),ze=l.useCallback(T=>{var _;jn(T)&&(A(!1),(_=$.current)==null||_.click()),I(void 0),f==null||f(T)},[f,$]);return[e&&(i||y),{onBlur:ie,onClick:e?s:void 0,onFocus:e?d:void 0,onKeyDown:le,onKeyUp:ze,ref:ae($,o),tabIndex:e?E:a}]}var V;(function(e){e[e.SMALL=20]="SMALL",e[e.STANDARD=50]="STANDARD",e[e.LARGE=100]="LARGE"})(V||(V={}));const L=45,Vn=`M 50,50 m 0,-${L} a ${L},${L} 0 1 1 0,${L*2} a ${L},${L} 0 1 1 0,-${L*2}`,ee=280,ea=10,na=4,ta=16,Mo=e=>{const{className:n="",intent:o,value:t,tagName:r="div",size:a,...i}=e;Uo(()=>{const C=a!=null,E=n.indexOf(_o)>=0||n.indexOf(Fo)>=0;C&&E&&console.warn(Vr)},[n,a]);const s=oa(a,n),d=Math.min(ta,na*V.LARGE/s),m=ee-ee*(t==null?.25:cr(t,0,1)),f=B(sr,Ao(o),{[ir]:t!=null},n);return l.createElement(r,{"aria-label":"loading","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":t===void 0?void 0:t*100,className:f,role:"progressbar",...i},l.createElement(r,{className:lr},p.jsxs("svg",{width:s,height:s,strokeWidth:d.toFixed(2),viewBox:ra(d),children:[p.jsx("path",{className:dr,d:Vn}),p.jsx("path",{className:mr,d:Vn,pathLength:ee,strokeDasharray:`${ee} ${ee}`,strokeDashoffset:m})]})))};Mo.displayName=`${q}.Spinner`;const oa=(e,n)=>e==null?n.indexOf(_o)>=0?V.SMALL:n.indexOf(Fo)>=0?V.LARGE:V.STANDARD:Math.max(ea,e),ra=e=>{const n=L+e/2,o=(50-n).toFixed(2),t=(n*2).toFixed(2);return`${o} ${o} ${t} ${t}`},aa=wo()?l.useLayoutEffect:l.useEffect,Wo=l.forwardRef(({children:e,tagName:n="div",title:o,className:t,ellipsize:r=!1,...a},i)=>{const s=l.useRef(),d=l.useMemo(()=>ae(s,i),[i]),[m,f]=l.useState(""),[C,E]=l.useState();return aa(()=>{var b;((b=s.current)==null?void 0:b.textContent)!=null&&(E(r&&s.current.scrollWidth>s.current.clientWidth),f(s.current.textContent))},[s,e,r]),l.createElement(n,{...a,className:B({[ur]:r},t),ref:d,title:o??(C?m:void 0)},e)});Wo.displayName=`${q}.Text`;const Ye=l.forwardRef((e,n)=>{const o=jo(e,n);return p.jsx("button",{type:"button",...Ko(e),...o,children:Vo(e)})});Ye.displayName=`${q}.Button`;const sa=l.forwardRef((e,n)=>{const{href:o}=e,t=jo(e,n,{defaultTabIndex:0,disabledTabIndex:-1});return p.jsx("a",{role:"button",...Ko(e),...t,"aria-disabled":t.disabled,href:t.disabled?void 0:o,children:Vo(e)})});sa.displayName=`${q}.AnchorButton`;function jo(e,n,o){const{alignText:t,fill:r,large:a,loading:i=!1,minimal:s,outlined:d,size:m="medium",small:f,variant:C="solid"}=e,E=e.disabled||i,[b,I]=Zr(!E,e,n,o),y=B(pr,{[br]:b,[hr]:E,[Cr]:r,[fr]:i},Sr(t),Ao(e.intent),Er(m,{large:a,small:f}),yr(C,{minimal:s,outlined:d}),e.className);return{...I,className:y,disabled:E}}function Vo(e){const{children:n,ellipsizeText:o,endIcon:t,icon:r,loading:a,rightIcon:i,text:s,textClassName:d}=e,m=!kn(s)||!kn(n);return p.jsxs(p.Fragment,{children:[a&&p.jsx(Mo,{className:gr,size:V.SMALL}),p.jsx(dn,{icon:r}),m&&p.jsxs(Wo,{className:B(Tr,d),ellipsize:o,tagName:"span",children:[s,n]}),p.jsx(dn,{icon:t??i})]})}function Ge(){return Ge=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var t in o)({}).hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},Ge.apply(null,arguments)}function fn(e,n){if(e==null)return{};var o={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(n.indexOf(t)!==-1)continue;o[t]=e[t]}return o}function Cn(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,mn(e,n)}function ia(e,n){return e.classList?!!n&&e.classList.contains(n):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+n+" ")!==-1}function la(e,n){e.classList?e.classList.add(n):ia(e,n)||(typeof e.className=="string"?e.className=e.className+" "+n:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+n))}function Xn(e,n){return e.replace(new RegExp("(^|\\s)"+n+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function da(e,n){e.classList?e.classList.remove(n):typeof e.className=="string"?e.className=Xn(e.className,n):e.setAttribute("class",Xn(e.className&&e.className.baseVal||"",n))}const qn={disabled:!1},$e=N.createContext(null);var Xo=function(n){return n.scrollTop},ne="unmounted",M="exited",W="entering",z="entered",cn="exiting",F=(function(e){Cn(n,e);function n(t,r){var a;a=e.call(this,t,r)||this;var i=r,s=i&&!i.isMounting?t.enter:t.appear,d;return a.appearStatus=null,t.in?s?(d=M,a.appearStatus=W):d=z:t.unmountOnExit||t.mountOnEnter?d=ne:d=M,a.state={status:d},a.nextCallback=null,a}n.getDerivedStateFromProps=function(r,a){var i=r.in;return i&&a.status===ne?{status:M}:null};var o=n.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(r){var a=null;if(r!==this.props){var i=this.state.status;this.props.in?i!==W&&i!==z&&(a=W):(i===W||i===z)&&(a=cn)}this.updateStatus(!1,a)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var r=this.props.timeout,a,i,s;return a=i=s=r,r!=null&&typeof r!="number"&&(a=r.exit,i=r.enter,s=r.appear!==void 0?r.appear:i),{exit:a,enter:i,appear:s}},o.updateStatus=function(r,a){if(r===void 0&&(r=!1),a!==null)if(this.cancelNextCallback(),a===W){if(this.props.unmountOnExit||this.props.mountOnEnter){var i=this.props.nodeRef?this.props.nodeRef.current:pe.findDOMNode(this);i&&Xo(i)}this.performEnter(r)}else this.performExit();else this.props.unmountOnExit&&this.state.status===M&&this.setState({status:ne})},o.performEnter=function(r){var a=this,i=this.props.enter,s=this.context?this.context.isMounting:r,d=this.props.nodeRef?[s]:[pe.findDOMNode(this),s],m=d[0],f=d[1],C=this.getTimeouts(),E=s?C.appear:C.enter;if(!r&&!i||qn.disabled){this.safeSetState({status:z},function(){a.props.onEntered(m)});return}this.props.onEnter(m,f),this.safeSetState({status:W},function(){a.props.onEntering(m,f),a.onTransitionEnd(E,function(){a.safeSetState({status:z},function(){a.props.onEntered(m,f)})})})},o.performExit=function(){var r=this,a=this.props.exit,i=this.getTimeouts(),s=this.props.nodeRef?void 0:pe.findDOMNode(this);if(!a||qn.disabled){this.safeSetState({status:M},function(){r.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:cn},function(){r.props.onExiting(s),r.onTransitionEnd(i.exit,function(){r.safeSetState({status:M},function(){r.props.onExited(s)})})})},o.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(r,a){a=this.setNextCallback(a),this.setState(r,a)},o.setNextCallback=function(r){var a=this,i=!0;return this.nextCallback=function(s){i&&(i=!1,a.nextCallback=null,r(s))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},o.onTransitionEnd=function(r,a){this.setNextCallback(a);var i=this.props.nodeRef?this.props.nodeRef.current:pe.findDOMNode(this),s=r==null&&!this.props.addEndListener;if(!i||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var d=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],m=d[0],f=d[1];this.props.addEndListener(m,f)}r!=null&&setTimeout(this.nextCallback,r)},o.render=function(){var r=this.state.status;if(r===ne)return null;var a=this.props,i=a.children;a.in,a.mountOnEnter,a.unmountOnExit,a.appear,a.enter,a.exit,a.timeout,a.addEndListener,a.onEnter,a.onEntering,a.onEntered,a.onExit,a.onExiting,a.onExited,a.nodeRef;var s=fn(a,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return N.createElement($e.Provider,{value:null},typeof i=="function"?i(r,s):N.cloneElement(N.Children.only(i),s))},n})(N.Component);F.contextType=$e;F.propTypes={};function Y(){}F.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Y,onEntering:Y,onEntered:Y,onExit:Y,onExiting:Y,onExited:Y};F.UNMOUNTED=ne;F.EXITED=M;F.ENTERING=W;F.ENTERED=z;F.EXITING=cn;var ma=function(n,o){return n&&o&&o.split(" ").forEach(function(t){return la(n,t)})},rn=function(n,o){return n&&o&&o.split(" ").forEach(function(t){return da(n,t)})},te=(function(e){Cn(n,e);function n(){for(var t,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=e.call.apply(e,[this].concat(a))||this,t.appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(s,d){var m=t.resolveArguments(s,d),f=m[0],C=m[1];t.removeClasses(f,"exit"),t.addClass(f,C?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(s,d)},t.onEntering=function(s,d){var m=t.resolveArguments(s,d),f=m[0],C=m[1],E=C?"appear":"enter";t.addClass(f,E,"active"),t.props.onEntering&&t.props.onEntering(s,d)},t.onEntered=function(s,d){var m=t.resolveArguments(s,d),f=m[0],C=m[1],E=C?"appear":"enter";t.removeClasses(f,E),t.addClass(f,E,"done"),t.props.onEntered&&t.props.onEntered(s,d)},t.onExit=function(s){var d=t.resolveArguments(s),m=d[0];t.removeClasses(m,"appear"),t.removeClasses(m,"enter"),t.addClass(m,"exit","base"),t.props.onExit&&t.props.onExit(s)},t.onExiting=function(s){var d=t.resolveArguments(s),m=d[0];t.addClass(m,"exit","active"),t.props.onExiting&&t.props.onExiting(s)},t.onExited=function(s){var d=t.resolveArguments(s),m=d[0];t.removeClasses(m,"exit"),t.addClass(m,"exit","done"),t.props.onExited&&t.props.onExited(s)},t.resolveArguments=function(s,d){return t.props.nodeRef?[t.props.nodeRef.current,s]:[s,d]},t.getClassNames=function(s){var d=t.props.classNames,m=typeof d=="string",f=m&&d?d+"-":"",C=m?""+f+s:d[s],E=m?C+"-active":d[s+"Active"],b=m?C+"-done":d[s+"Done"];return{baseClassName:C,activeClassName:E,doneClassName:b}},t}var o=n.prototype;return o.addClass=function(r,a,i){var s=this.getClassNames(a)[i+"ClassName"],d=this.getClassNames("enter"),m=d.doneClassName;a==="appear"&&i==="done"&&m&&(s+=" "+m),i==="active"&&r&&Xo(r),s&&(this.appliedClasses[a][i]=s,ma(r,s))},o.removeClasses=function(r,a){var i=this.appliedClasses[a],s=i.base,d=i.active,m=i.done;this.appliedClasses[a]={},s&&rn(r,s),d&&rn(r,d),m&&rn(r,m)},o.render=function(){var r=this.props;r.classNames;var a=fn(r,["classNames"]);return N.createElement(F,Ge({},a,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},n})(N.Component);te.defaultProps={classNames:""};te.propTypes={};function hn(e,n){var o=function(a){return n&&l.isValidElement(a)?n(a):a},t=Object.create(null);return e&&l.Children.map(e,function(r){return r}).forEach(function(r){t[r.key]=o(r)}),t}function ca(e,n){e=e||{},n=n||{};function o(f){return f in n?n[f]:e[f]}var t=Object.create(null),r=[];for(var a in e)a in n?r.length&&(t[a]=r,r=[]):r.push(a);var i,s={};for(var d in n){if(t[d])for(i=0;i<t[d].length;i++){var m=t[d][i];s[t[d][i]]=o(m)}s[d]=o(d)}for(i=0;i<r.length;i++)s[r[i]]=o(r[i]);return s}function j(e,n,o){return o[n]!=null?o[n]:e.props[n]}function ua(e,n){return hn(e.children,function(o){return l.cloneElement(o,{onExited:n.bind(null,o),in:!0,appear:j(o,"appear",e),enter:j(o,"enter",e),exit:j(o,"exit",e)})})}function pa(e,n,o){var t=hn(e.children),r=ca(n,t);return Object.keys(r).forEach(function(a){var i=r[a];if(l.isValidElement(i)){var s=a in n,d=a in t,m=n[a],f=l.isValidElement(m)&&!m.props.in;d&&(!s||f)?r[a]=l.cloneElement(i,{onExited:o.bind(null,i),in:!0,exit:j(i,"exit",e),enter:j(i,"enter",e)}):!d&&s&&!f?r[a]=l.cloneElement(i,{in:!1}):d&&s&&l.isValidElement(m)&&(r[a]=l.cloneElement(i,{onExited:o.bind(null,i),in:m.props.in,exit:j(i,"exit",e),enter:j(i,"enter",e)}))}}),r}var fa=Object.values||function(e){return Object.keys(e).map(function(n){return e[n]})},Ca={component:"div",childFactory:function(n){return n}},bn=(function(e){Cn(n,e);function n(t,r){var a;a=e.call(this,t,r)||this;var i=a.handleExited.bind(Mr(a));return a.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},a}var o=n.prototype;return o.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},o.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(r,a){var i=a.children,s=a.handleExited,d=a.firstRender;return{children:d?ua(r,s):pa(r,i,s),firstRender:!1}},o.handleExited=function(r,a){var i=hn(this.props.children);r.key in i||(r.props.onExited&&r.props.onExited(a),this.mounted&&this.setState(function(s){var d=Ge({},s.children);return delete d[r.key],{children:d}}))},o.render=function(){var r=this.props,a=r.component,i=r.childFactory,s=fn(r,["component","childFactory"]),d=this.state.contextValue,m=fa(this.state.children).map(i);return delete s.appear,delete s.enter,delete s.exit,a===null?N.createElement($e.Provider,{value:d},m):N.createElement($e.Provider,{value:d},N.createElement(a,s,m))},n})(N.Component);bn.propTypes={};bn.defaultProps=Ca;const ha=l.createContext({hasProvider:!1,stack:{current:[]}}),oe=[],Xe=[],ba=e=>{e(oe),Xe.forEach(n=>n())},an={getSnapshot:()=>oe,subscribe:e=>(Xe.push(e),()=>{const n=Xe.indexOf(e);Xe.splice(n,1)})};function Sa(){const e=wr.useSyncExternalStore(an.subscribe,an.getSnapshot,an.getSnapshot),n=l.useCallback(()=>e[e.length-1],[e]),o=l.useCallback(i=>{const s=e.findIndex(d=>d.id===i);return e.slice(s)},[e]),t=l.useCallback(()=>{ba(i=>i.splice(0,i.length))},[]),r=l.useCallback(i=>{oe.push(i),i.props.usePortal&&i.props.hasBackdrop&&document.body.classList.add(re)},[]);return{closeOverlay:l.useCallback(i=>{const s=e.filter(m=>m.props.usePortal&&m.props.hasBackdrop&&m.id!==i),d=oe.findIndex(m=>m.id===i);d>-1&&oe.splice(d,1),s.length===0&&document.body.classList.remove(re)},[e]),getLastOpened:n,getThisOverlayAndDescendants:o,openOverlay:r,resetStack:t}}function Ea(){const{stack:e,hasProvider:n}=l.useContext(ha),o=Sa(),t=l.useCallback(()=>e.current[e.current.length-1],[e]),r=l.useCallback(d=>{const m=e.current.findIndex(f=>f.id===d);return m===-1?[]:e.current.slice(m)},[e]),a=l.useCallback(()=>{e.current=[]},[e]),i=l.useCallback(d=>{e.current.push(d),d.props.usePortal&&d.props.hasBackdrop&&document.body.classList.add(re)},[e]),s=l.useCallback(d=>{const m=e.current.filter(C=>C.props.usePortal&&C.props.hasBackdrop&&C.id!==d),f=e.current.findIndex(C=>C.id===d);f>-1&&e.current.splice(f,1),m.length===0&&document.body.classList.remove(re)},[e]);return n?{closeOverlay:s,getLastOpened:t,getThisOverlayAndDescendants:r,openOverlay:i,resetStack:a}:(Je("development")&&console.error(Gr),o)}function ya(e){const n=l.useRef();return l.useEffect(()=>{n.current=e},[e]),n.current}function sn(e){const n=P(e);return(n!=null?jr(n):[]).filter(t=>!t.classList.contains(Lo)&&!t.classList.contains(Bo))}const ga=l.createContext({});function qo({className:e,stopPropagationEvents:n,container:o,onChildrenMount:t,children:r}){const a=l.useContext(ga),i=o??a.portalContainer??(typeof document<"u"?document.body:void 0),[s,d]=l.useState(),m=l.useCallback(()=>{const f=document.createElement("div");return f.classList.add(Pr),ln(f.classList,e),ln(f.classList,a.portalClassName),Gn(f,n),f},[e,a.portalClassName,n]);return l.useEffect(()=>{if(i==null)return;const f=m();return i.appendChild(f),d(f),()=>{$n(f,n),f.remove(),d(void 0)}},[i,m,n]),l.useEffect(()=>{s!=null&&(t==null||t())},[s,t]),l.useEffect(()=>{if(s!=null)return ln(s.classList,e),()=>Ta(s.classList,e)},[e,s]),l.useEffect(()=>{if(s!=null)return Gn(s,n),()=>$n(s,n)},[s,n]),typeof document>"u"||s==null?null:kr.createPortal(r,s)}qo.displayName=`${q}.Portal`;function Ta(e,n){n!=null&&n!==""&&e.remove(...n.split(" "))}function ln(e,n){n!=null&&n!==""&&e.add(...n.split(" "))}function Gn(e,n){n==null||n.forEach(o=>e.addEventListener(o,Go))}function $n(e,n){n==null||n.forEach(o=>e.removeEventListener(o,Go))}function Go(e){e.stopPropagation()}const Sn=l.forwardRef((e,n)=>{const{autoFocus:o=!0,backdropClassName:t,backdropProps:r={},canEscapeKeyClose:a=!0,canOutsideClickClose:i=!0,childRef:s,childRefs:d,children:m,className:f,enforceFocus:C=!0,hasBackdrop:E=!0,isOpen:b=!1,lazy:I=wo(),onClose:y,onClosed:A,onClosing:$,onOpened:ie,onOpening:le,portalClassName:ze,portalContainer:yn,shouldReturnFocusOnClose:T=!0,transitionDuration:_=300,transitionName:H=Un,usePortal:de=!0}=e;Pa(e);const{closeOverlay:gn,getLastOpened:K,getThisOverlayAndDescendants:Tn,openOverlay:Pn}=Ea(),[me,Qe]=l.useState(!1),[Ho,Jo]=l.useState(!1),[vn,Nn]=l.useState(!1),xn=l.useRef(null),v=l.useRef(null),Dn=l.useRef(null),Ze=l.useRef(null),en=l.useRef(null),Rn=l.useRef(null),x=l.useCallback(c=>requestAnimationFrame(()=>{var O;const h=c??P(v),g=Wn(h);if(h==null||g==null)return;!h.contains(g)&&((O=P(Ze))==null||O.focus({preventScroll:!0}),Qe(!1))}),[]),On=l.useCallback(c=>{c!=null&&vn&&(Nn(!1),Qe(!0),x(c))},[x,vn]),Yo=l.useMemo(()=>ae(v,On),[On]),D=va(),nn=l.useRef(null),k=l.useCallback(c=>{const h=c.composed?c.composedPath()[0]:c.target,g=P(v);g!=null&&h instanceof Node&&!g.contains(h)&&(c.preventDefault(),c.stopImmediatePropagation(),x())},[x]),U=l.useCallback(c=>{const h=c.composed?c.composedPath()[0]:c.target;Tn(D).some(({containerElement:O})=>{const ue=P(O);return(ue==null?void 0:ue.contains(h))&&!ue.isSameNode(h)})||y==null||y(c)},[Tn,D,y]),tn=l.useCallback(c=>{if(c.key==="Escape"&&a){const h=K();(h==null?void 0:h.id)===D&&(y==null||y(c),c.stopPropagation(),c.preventDefault())}},[a,K,D,y]),zo=l.useMemo(()=>ae(n,nn),[n]);l.useImperativeHandle(zo,()=>({bringFocusInsideOverlay:x,containerElement:v,handleDocumentFocus:k,handleDocumentMousedown:U,id:D,props:{autoFocus:o,enforceFocus:C,hasBackdrop:E,usePortal:de}}),[o,x,C,k,U,E,D,de]);const Qo=l.useCallback(c=>{c.key==="Escape"&&a&&(y==null||y(c),c.stopPropagation(),c.preventDefault())},[a,y]),In=l.useCallback(()=>{if(nn.current==null)return;const c=K();(c==null?void 0:c.handleDocumentFocus)!==void 0&&document.removeEventListener("focus",c.handleDocumentFocus,!0),Pn(nn.current),o&&(P(v)!=null?(Qe(!0),x()):Nn(!0)),ko(xn,Wn(P(v)))},[o,x,K,Pn]),ce=l.useCallback(()=>{var h;document.removeEventListener("focus",k,!0),document.removeEventListener("mousedown",U),gn(D);const c=K();c!==void 0&&c.props.autoFocus&&c.props.enforceFocus&&((h=c.bringFocusInsideOverlay)==null||h.call(c),c.handleDocumentFocus!==void 0&&document.addEventListener("focus",c.handleDocumentFocus,!0))},[gn,K,k,U,D]),on=ya(b)??!1;l.useEffect(()=>{b&&Jo(!0),!on&&b&&In(),on&&!b&&ce()},[b,In,ce,on]),l.useEffect(()=>{if(!(!b||!(i&&!E)))return document.addEventListener("mousedown",U),()=>{document.removeEventListener("mousedown",U)}},[U,b,i,E]),l.useEffect(()=>{if(!(!b||o!==!1||!a))return document.addEventListener("keydown",tn),()=>{document.removeEventListener("keydown",tn)}},[tn,b,o,a]),l.useEffect(()=>{if(!b||!C)return;const c=K();if((c==null?void 0:c.id)===D)return document.addEventListener("focus",k,!0),()=>{document.removeEventListener("focus",k,!0)}},[k,C,b,K,D]);const _n=l.useRef(ce);_n.current=ce,l.useEffect(()=>()=>{_n.current()},[]);const Fn=l.useCallback(c=>{const h=P(xn);T&&h instanceof HTMLElement&&h.focus(),A==null||A(c)},[A,T]),J=l.useCallback(()=>{},[]),An=l.useCallback(c=>{if(s!=null)return s;if(d!=null){const h=c.key;if(h==null){Je("production")||console.error(Jr);return}return d[h]}},[s,d]),Zo=l.useCallback(c=>{if(c==null||vr(c))return null;const h=An(c),g=Nr(c)?c.props:{},R=xr(c,"span",{className:B(g.className,Dr),ref:h===void 0?Rn:void 0,tabIndex:C||o?0:void 0}),O=h??Rn;return p.jsx(te,{addEndListener:J,classNames:H,nodeRef:O,onEntered:fe(ie,O),onEntering:fe(le,O),onExited:fe(Fn,O),onExiting:fe($,O),timeout:_,children:R})},[o,C,An,J,Fn,$,ie,le,_,H]),Kn=l.useCallback(c=>{var h;i&&(y==null||y(c)),C&&x(),(h=r==null?void 0:r.onMouseDown)==null||h.call(r,c)},[r,x,i,C,y]),Ln=l.useCallback((c,h)=>p.jsx(te,{addEndListener:J,classNames:H,nodeRef:h.ref,timeout:_,unmountOnExit:!0,children:p.jsx("div",{tabIndex:0,...h})},c),[J,_,H]),er=l.useCallback(c=>{if(!C||me)return;const h=P(v),g=P(en);c.relatedTarget!=null&&(h!=null&&h.contains(c.relatedTarget))&&c.relatedTarget!==g&&(g==null||g.focus({preventScroll:!0}))},[C,me]),nr=l.useCallback(c=>{var h;if(C&&c.shiftKey&&c.key==="Tab"){const g=sn(v).pop();g!=null?g.focus():(h=P(en))==null||h.focus({preventScroll:!0})}},[C]),tr=l.useCallback(c=>{var g;const h=P(Ze);if(c.relatedTarget!=null&&((g=P(v))!=null&&g.contains(c.relatedTarget))&&c.relatedTarget!==h){const R=sn(v).shift();!me&&R!=null&&R!==c.relatedTarget?R.focus():h==null||h.focus({preventScroll:!0})}else{const R=sn(v).pop();R!=null?R.focus():h==null||h.focus({preventScroll:!0})}},[me]),Bn=l.useMemo(()=>E&&b?p.jsx(te,{classNames:H,nodeRef:Dn,timeout:_,addEndListener:J,children:p.jsx("div",{...r,className:B(Rr,t,r==null?void 0:r.className),onMouseDown:Kn,ref:Dn})},"__backdrop"):null,[t,r,Kn,J,E,b,_,H]);if(I&&!Ho)return null;const Z=b?l.Children.map(m,Zo)??[]:[];Bn!==null&&Z.unshift(Bn),b&&(o||C)&&Z.length>0&&(Z.unshift(Ln("__start",{className:Lo,onFocus:er,onKeyDown:nr,ref:Ze})),C&&Z.push(Ln("__end",{className:Bo,onFocus:tr,ref:en})));const wn=p.jsx("div",{"aria-live":"polite",className:B(Un,{[re]:b,[Or]:!de},f),onKeyDown:Qo,ref:Yo,children:p.jsx(bn,{appear:!0,component:null,children:Z})});return de?p.jsx(qo,{className:ze,container:yn,children:wn}):wn});Sn.displayName=`${q}.Overlay2`;function Pa({childRef:e,childRefs:n,children:o}){const t=l.Children.count(o);l.useEffect(()=>{Je("production")||(e!=null&&n!=null&&console.error($r),t>1&&n==null&&console.error(Hr))},[e,n,t])}function va(){const e=l.useId();return`${Sn.displayName}-${e}`}function fe(e,n){return()=>{(n==null?void 0:n.current)!=null&&(e==null||e(n.current))}}const En=e=>{const{canOutsideClickClose:n=!0,children:o,className:t,containerRef:r,icon:a,isCloseButtonShown:i,isOpen:s=!1,onClose:d,role:m="dialog",style:f,title:C,titleTagName:E=Ir,...b}=e,I=l.useRef(null),y=l.useMemo(()=>`title-${_r("bp-dialog")}`,[]);return Uo(()=>{C==null&&(e.icon!=null&&console.warn(Xr),e.isCloseButtonShown!=null&&console.warn(qr))},[C,e.icon,e.isCloseButtonShown]),p.jsx(Sn,{...b,isOpen:s,canOutsideClickClose:n,className:Fr,childRef:I,hasBackdrop:!0,onClose:d,children:p.jsx("div",{className:Ar,ref:ae(r,I),children:p.jsxs("div",{"aria-describedby":b["aria-describedby"],"aria-labelledby":b["aria-labelledby"]||(C!=null?y:void 0),"aria-modal":b.enforceFocus??!0,className:B(Br,t),role:m,style:f,children:[C!=null&&p.jsxs("div",{className:Kr,children:[p.jsx(dn,{icon:a,size:Mn.STANDARD,"aria-hidden":!0,tabIndex:-1}),p.jsx(E,{id:y,children:C}),i!==!1&&p.jsx(Ye,{"aria-label":"Close",className:Lr,icon:p.jsx(Ur,{size:Mn.STANDARD}),onClick:d,variant:"minimal"})]}),o]})})})};En.displayName=`${q}.Dialog`;const{fn:Na}=__STORYBOOK_MODULE_TEST__;function u(e){return{type:"field",definition:e}}const se=["Low","Medium","High"],w=["Engineering","Marketing","Sales","Finance","Operations","Legal"],He=["Urgent","Review","Follow-up","Archived","Pinned"],Hn=["usr_ada","usr_grace","usr_katherine"],$o={usr_ada:{name:"Ada Lovelace",team:"Computation"},usr_grace:{name:"Grace Hopper",team:"Compilers"},usr_katherine:{name:"Katherine Johnson",team:"Flight dynamics"}},Q=[u({fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Name",isRequired:!0,fieldComponentProps:{placeholder:"Enter a name"}}),u({fieldKey:"description",fieldComponent:"TEXT_AREA",label:"Description",fieldComponentProps:{placeholder:"Enter a description",rows:3}}),u({fieldKey:"quantity",fieldComponent:"NUMBER_INPUT",label:"Quantity",isRequired:!0,fieldComponentProps:{min:0,max:1e3,step:1,placeholder:"0"}}),u({fieldKey:"priority",fieldComponent:"DROPDOWN",label:"Priority",fieldComponentProps:{items:se,placeholder:"Select priority"}}),u({fieldKey:"isActive",fieldComponent:"RADIO_BUTTONS",label:"Is Active",fieldComponentProps:{options:[{label:"True",value:!0},{label:"False",value:!1}]}}),u({fieldKey:"startDate",fieldComponent:"DATETIME_PICKER",label:"Start Date",fieldComponentProps:{placeholder:"Select a date"}}),u({fieldKey:"document",fieldComponent:"FILE_PICKER",label:"Document",fieldComponentProps:{accept:".pdf,.doc,.docx"}}),u({fieldKey:"notes",fieldComponent:"CUSTOM",label:"Notes",fieldComponentProps:{customRenderer:e=>p.jsx("textarea",{value:e.value!=null?String(e.value):"",onChange:n=>{var o;return(o=e.onChange)==null?void 0:o.call(e,n.target.value)},className:"osdkCustomTextarea",placeholder:"Custom rendered notes field"})}})],xa=[],qe={current:void 0},Da=Na().mockName("onSubmit");function S(e){var n;Da(e),(n=qe.current)==null||n.call(qe,{status:"success",submittedValues:e,response:{message:"onSubmit completed"}})}function Ra(){const[e,n]=l.useState({status:"idle"});return qe.current=n,p.jsx(ar,{idleMessage:"Submit the form to see submitted values.",snapshot:e})}const Xs={title:"Experimental/ActionForm/BaseForm",component:X,decorators:[e=>p.jsx(rr,{output:p.jsx(Ra,{}),children:p.jsx(e,{})})],parameters:{msw:{handlers:[...or.handlers]},controls:{expanded:!0},docs:{description:{component:"BaseForm is the lower-level form renderer used by ActionForm. Use it directly when you already have form content definitions or need custom form composition."}}},argTypes:{formTitle:{description:"Optional title displayed at the top of the form.",control:"text"},formContent:{description:"Ordered list of form content items (fields or sections) to render.",control:!1},onSubmit:{description:"Called when the form is submitted. Receives the current form state.",control:!1,table:{category:"Events"}},isSubmitDisabled:{description:"Whether the submit button is disabled.",control:"boolean",defaultValue:!1,table:{defaultValue:{summary:"false"}}},isPending:{description:'Whether the form is in a pending state. Shows "Submitting…" and disables the button.',control:"boolean",defaultValue:!1,table:{defaultValue:{summary:"false"}}},isLoading:{description:"Whether the form is loading. Shows a loading message when true and no field definitions are provided.",control:"boolean",defaultValue:!1,table:{defaultValue:{summary:"false"}}},className:{description:"Additional CSS class name for the form.",control:"text"},submitButtonText:{description:"Text displayed in the submit button.",control:"text",table:{defaultValue:{summary:"Submit"}}},submitButtonVariant:{description:"Visual variant of the submit button.",control:"select",options:["primary","secondary"],table:{defaultValue:{summary:"primary"}}}}},Ce={args:{formContent:Q,onSubmit:S},parameters:{docs:{source:{code:`import { BaseForm } from "@osdk/react-components/experimental";

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
/>`}}}},he={parameters:{docs:{source:{code:`const [formState, setFormState] = useState({});

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
);`}}},render:()=>p.jsx(Oa,{})};function Oa(){const[e,n]=l.useState({}),o=l.useCallback((t,r)=>{n(a=>({...a,[t]:r}))},[]);return p.jsxs("div",{children:[p.jsxs("div",{className:"osdkFormStorySpacing",children:[p.jsx("strong",{children:"Current Form State:"}),p.jsx("pre",{className:"osdkCodeOutput",children:JSON.stringify(e,(t,r)=>r instanceof File?`File: ${r.name}`:r,2)})]}),p.jsx(X,{formContent:Q,formState:e,onFieldValueChange:o,onSubmit:S})]})}const be={args:{formTitle:"Create New Order",formContent:Q,onSubmit:S},parameters:{docs:{source:{code:`<BaseForm
  formTitle="Create New Order"
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},Se={args:{formContent:xa,isLoading:!0,onSubmit:S},parameters:{docs:{source:{code:`<BaseForm
  formContent={[]}
  isLoading={true}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},Ee={args:{formContent:Q,isSubmitDisabled:!0,onSubmit:S},parameters:{docs:{source:{code:`<BaseForm
  formContent={formContent}
  isSubmitDisabled={true}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},Ia={name:"Locked employee",description:"Locked multi-line description",quantity:42,priority:"Medium",tags:["Urgent","Pinned"],isActive:!0,isRemote:!0,scheduledAt:new Date(2026,0,15,9,30),vacationDates:[new Date(2026,0,15),new Date(2026,0,31)],custom:"Requires approval"},_a=["Requires approval","Ready to submit"];function Fa(e){const n=e.value!=null?String(e.value):void 0;return p.jsx("div",{className:"osdkCustomChoiceGroup",role:"group","aria-label":"Custom status","aria-disabled":e.disabled===!0||void 0,children:_a.map(o=>p.jsx("button",{type:"button",disabled:e.disabled,className:o===n?"osdkCustomChoiceButton osdkCustomChoiceButtonSelected":"osdkCustomChoiceButton",onClick:()=>{var t;return(t=e.onChange)==null?void 0:t.call(e,o)},children:o},o))})}function Aa(){const e=pn(),n=l.useMemo(()=>e(un),[e]),[o,t]=l.useState(Ia),r=l.useCallback((i,s)=>{t(d=>({...d,[i]:s}))},[]),a=l.useMemo(()=>[u({fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Name",disabled:!0,fieldComponentProps:{placeholder:"Enter a name"}}),u({fieldKey:"description",fieldComponent:"TEXT_AREA",label:"Description",disabled:!0,fieldComponentProps:{placeholder:"Enter a description",rows:3}}),u({fieldKey:"quantity",fieldComponent:"NUMBER_INPUT",label:"Quantity",disabled:!0,fieldComponentProps:{min:0,max:1e3,step:1,placeholder:"0"}}),u({fieldKey:"priority",fieldComponent:"DROPDOWN",label:"Priority (select)",disabled:!0,fieldComponentProps:{items:se,placeholder:"Select priority"}}),u({fieldKey:"tags",fieldComponent:"DROPDOWN",label:"Tags (searchable multi-select)",disabled:!0,fieldComponentProps:{items:He,isMultiple:!0,isSearchable:!0,placeholder:"Search tags..."}}),u({fieldKey:"isActive",fieldComponent:"RADIO_BUTTONS",label:"Is Active",disabled:!0,fieldComponentProps:{options:[{label:"True",value:!0},{label:"False",value:!1}]}}),u({fieldKey:"isRemote",fieldComponent:"SWITCH",label:"Remote employee",disabled:!0,fieldComponentProps:{}}),u({fieldKey:"scheduledAt",fieldComponent:"DATETIME_PICKER",label:"Scheduled At",disabled:!0,fieldComponentProps:{showTime:!0,placeholder:"Select date and time"}}),u({fieldKey:"vacationDates",fieldComponent:"DATE_RANGE_INPUT",label:"Vacation Dates",disabled:!0,fieldComponentProps:{placeholderStart:"Start date",placeholderEnd:"End date"}}),u({fieldKey:"document",fieldComponent:"FILE_PICKER",label:"Document",disabled:!0,fieldComponentProps:{accept:".pdf,.doc,.docx"}}),u({fieldKey:"employee",fieldComponent:"OBJECT_SELECT",label:"Employee",disabled:!0,fieldComponentProps:{objectType:{type:"object",apiName:"Employee"},placeholder:"Search employees…"}}),u({fieldKey:"employees",fieldComponent:"OBJECT_SET",label:"Employees",disabled:!0,fieldComponentProps:{value:n}}),u({fieldKey:"custom",fieldComponent:"CUSTOM",label:"Custom field",disabled:!0,fieldComponentProps:{customRenderer:Fa}})],[n]);return p.jsx(X,{formTitle:"Disabled fields",formContent:a,formState:o,onFieldValueChange:r,onSubmit:S})}const ye={render:()=>p.jsx(Aa,{}),parameters:{docs:{description:{story:"Shows every BaseForm field renderer in a disabled state. Disabled fields keep their current values in form state but block user edits."},source:{code:`const formContent = [
  {
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Name",
    disabled: true,
    fieldComponentProps: { placeholder: "Enter a name" },
  },
  {
    fieldKey: "priority",
    fieldComponent: "DROPDOWN",
    label: "Priority",
    disabled: true,
    fieldComponentProps: {
      items: ["Low", "Medium", "High"],
      placeholder: "Select priority",
    },
  },
  // Repeat disabled: true for TEXT_AREA, NUMBER_INPUT, RADIO_BUTTONS,
  // SWITCH, DATETIME_PICKER, DATE_RANGE_INPUT, FILE_PICKER,
  // OBJECT_SELECT, OBJECT_SET, and CUSTOM.
];

<BaseForm
  formTitle="Disabled fields"
  formContent={formContent}
  formState={formState}
  onFieldValueChange={handleFieldValueChange}
  onSubmit={handleSubmit}
/>`}}}},ge={args:{formContent:Q,isPending:!0,onSubmit:S},parameters:{docs:{source:{code:`<BaseForm
  formContent={formContent}
  isPending={true}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},Te={args:{formContent:Q,onSubmit:S,submitButtonText:"Save employee",submitButtonVariant:"secondary"},parameters:{docs:{source:{code:`<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
  submitButtonText="Save employee"
  submitButtonVariant="secondary"
/>`}}}},Ka=[u({fieldKey:"isRemote",fieldComponent:"SWITCH",label:"Remote employee",helperText:"Use a switch for boolean settings that map to on/off state.",fieldComponentProps:{}})],Pe={args:{formTitle:"Update employee",formContent:Ka,onSubmit:S},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},La=[u({fieldKey:"structPayload",fieldComponent:"UNSUPPORTED",label:"Struct payload",isRequired:!0,fieldComponentProps:{}}),u({fieldKey:"geoshape",fieldComponent:"UNSUPPORTED",label:"Geoshape",fieldComponentProps:{}})],ve={args:{formTitle:"Unsupported field types",formContent:La,onSubmit:S},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},Ba=[u({fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Name",isRequired:!0,fieldComponentProps:{placeholder:"Required field"}}),u({fieldKey:"username",fieldComponent:"TEXT_INPUT",label:"Username",fieldComponentProps:{minLength:3,maxLength:20,placeholder:"3-20 characters"}}),u({fieldKey:"quantity",fieldComponent:"NUMBER_INPUT",label:"Quantity",fieldComponentProps:{min:0,max:100,step:1,placeholder:"0-100"}}),u({fieldKey:"startDate",fieldComponent:"DATETIME_PICKER",label:"Start Date",fieldComponentProps:{min:new Date(2024,0,1),max:new Date(2026,11,31),placeholder:"2024-2026 only"}}),u({fieldKey:"document",fieldComponent:"FILE_PICKER",label:"Document",fieldComponentProps:{maxSize:1048576}})],Ne={args:{formContent:Ba,onSubmit:S},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},wa=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,ka=[u({fieldKey:"email",fieldComponent:"TEXT_INPUT",label:"Email",isRequired:!0,validate:async e=>{if(!(typeof e!="string"||e.length===0))return wa.test(e)?void 0:"Enter a valid email address"},fieldComponentProps:{placeholder:"user@example.com"}})],xe={args:{formContent:ka,onSubmit:S},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},Ua=[u({fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Name",isRequired:!0,onValidationError:e=>{if(e.type==="required")return"Please provide your name"},fieldComponentProps:{placeholder:"Your name"}}),u({fieldKey:"age",fieldComponent:"NUMBER_INPUT",label:"Age",onValidationError:e=>{if(e.type==="min")return`You must be at least ${String(e.min)} years old`;if(e.type==="max")return`Age cannot exceed ${String(e.max)}`},fieldComponentProps:{min:18,max:120,placeholder:"18-120"}})],De={args:{formContent:Ua,onSubmit:S},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},Re={parameters:{docs:{source:{code:`const client = useOsdkClient();
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
/>`}}},render:()=>p.jsx(Ma,{})};function Ma(){const e=pn(),n=l.useMemo(()=>e(un),[e]),o=l.useMemo(()=>[u({fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Name",isRequired:!0,fieldComponentProps:{placeholder:"Enter a name"}}),u({fieldKey:"employees",fieldComponent:"OBJECT_SET",label:"Employees",fieldComponentProps:{value:n}})],[n]);return p.jsx(X,{formContent:o,onSubmit:S})}const Wa=[u({fieldKey:"department",fieldComponent:"DROPDOWN",label:"Department (Select)",fieldComponentProps:{items:w,placeholder:"Select department..."}}),u({fieldKey:"team",fieldComponent:"DROPDOWN",label:"Team (Searchable)",fieldComponentProps:{items:w,isSearchable:!0,placeholder:"Search teams..."}})],Oe={args:{formContent:Wa,onSubmit:S},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},ja=[u({fieldKey:"categories",fieldComponent:"DROPDOWN",label:"Categories (Select)",isRequired:!0,fieldComponentProps:{items:He,isMultiple:!0,placeholder:"Select categories..."}}),u({fieldKey:"tags",fieldComponent:"DROPDOWN",label:"Tags (Searchable)",fieldComponentProps:{items:He,isMultiple:!0,isSearchable:!0,placeholder:"Search tags..."}})],Ie={args:{formContent:ja,onSubmit:S},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},Va=[u({fieldKey:"assigneeUserId",fieldComponent:"DROPDOWN",label:"Assignee",fieldComponentProps:{items:Hn,itemToStringLabel:Jn,renderItemLabel:Yn,isSearchable:!0,placeholder:"Search users..."}}),u({fieldKey:"reviewerUserIds",fieldComponent:"DROPDOWN",label:"Reviewers",fieldComponentProps:{items:Hn,itemToStringLabel:Jn,renderItemLabel:Yn,isMultiple:!0,isSearchable:!0,placeholder:"Search reviewers..."}})],_e={args:{formContent:Va,onSubmit:S},parameters:{docs:{source:{code:`const userIds = ["usr_ada", "usr_grace", "usr_katherine"];

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
      placeholder: "Search users...",
    },
  },
];

<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},Xa=[u({fieldKey:"scheduledAt",fieldComponent:"DATETIME_PICKER",label:"Scheduled At (date + time)",fieldComponentProps:{showTime:!0,placeholder:"Select date and time"}}),u({fieldKey:"deadline",fieldComponent:"DATETIME_PICKER",label:"Deadline (date only)",fieldComponentProps:{placeholder:"Select date"}})],Fe={args:{formContent:Xa,onSubmit:S},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},qa=[u({fieldKey:"scheduledAt",fieldComponent:"DATETIME_PICKER",label:"Scheduled At",fieldComponentProps:{showTime:!0,placeholder:"Select date and time"}}),u({fieldKey:"deadline",fieldComponent:"DATETIME_PICKER",label:"Deadline",fieldComponentProps:{placeholder:"Select date"}}),u({fieldKey:"meetingWindow",fieldComponent:"DATE_RANGE_INPUT",label:"Meeting Window",fieldComponentProps:{showTime:!0,placeholderStart:"Start",placeholderEnd:"End"}}),u({fieldKey:"department",fieldComponent:"DROPDOWN",label:"Department",isRequired:!0,fieldComponentProps:{items:w,placeholder:"Select department..."}}),u({fieldKey:"team",fieldComponent:"DROPDOWN",label:"Team",fieldComponentProps:{items:w,isSearchable:!0,placeholder:"Search teams..."}})];function Ga(){const[e,n]=l.useState(!1),o=l.useCallback(()=>{n(!0)},[]),t=l.useCallback(()=>{n(!1)},[]);return p.jsxs(p.Fragment,{children:[p.jsx(Ye,{text:"Open dialog",onClick:o}),p.jsx(En,{className:"osdkBlueprintDialogForm",isOpen:e,onClose:t,title:"Action form",children:p.jsx(X,{formContent:qa,onSubmit:S})})]})}const Ae={render:()=>p.jsx(Ga,{}),parameters:{docs:{source:{code:`function BlueprintDialogBaseForm() {
  return (
    <Dialog isOpen={true} title="Action form">
      <BaseForm formContent={formContent} onSubmit={handleSubmit} />
    </Dialog>
  );
}`}}}},$a=[u({fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Full Name",isRequired:!0,fieldComponentProps:{placeholder:"Enter full name"}}),u({fieldKey:"email",fieldComponent:"TEXT_INPUT",label:"Email",isRequired:!0,fieldComponentProps:{placeholder:"user@example.com"}}),u({fieldKey:"department",fieldComponent:"DROPDOWN",label:"Department",fieldComponentProps:{items:w,placeholder:"Select department..."}}),u({fieldKey:"startDate",fieldComponent:"DATETIME_PICKER",label:"Start Date",fieldComponentProps:{placeholder:"Select a date"}}),u({fieldKey:"priority",fieldComponent:"DROPDOWN",label:"Priority",fieldComponentProps:{items:se,placeholder:"Select priority"}}),u({fieldKey:"isActive",fieldComponent:"RADIO_BUTTONS",label:"Status",fieldComponentProps:{options:[{label:"Active",value:!0},{label:"Inactive",value:!1}]}}),u({fieldKey:"bio",fieldComponent:"TEXT_AREA",label:"Bio",fieldComponentProps:{placeholder:"Tell us about yourself",rows:3}}),u({fieldKey:"tags",fieldComponent:"DROPDOWN",label:"Tags",fieldComponentProps:{items:He,isMultiple:!0,isSearchable:!0,placeholder:"Search tags..."}}),u({fieldKey:"document",fieldComponent:"FILE_PICKER",label:"Resume",fieldComponentProps:{accept:".pdf,.doc,.docx"}}),u({fieldKey:"notes",fieldComponent:"TEXT_AREA",label:"Additional Notes",fieldComponentProps:{placeholder:"Any extra details",rows:2}})];function Ha(){const[e,n]=l.useState(!1),o=l.useCallback(()=>{n(!0)},[]),t=l.useCallback(()=>{n(!1)},[]);return p.jsxs(p.Fragment,{children:[p.jsx(Ye,{text:"Open dialog",onClick:o}),p.jsx(En,{className:"osdkBlueprintDialogForm",isOpen:e,onClose:t,title:"New employee",children:p.jsx(X,{formContent:$a,onSubmit:S})})]})}const Ke={render:()=>p.jsx(Ha,{}),parameters:{docs:{description:{story:"When the form has many fields inside a height-constrained container like a dialog, the fields area scrolls while the footer stays pinned at the bottom."},source:{code:`// The footer pins automatically when the form overflows its container.
// No extra CSS or props needed — just place BaseForm inside a
// height-constrained parent (dialog, panel, sidebar).
<Dialog isOpen={true} title="New employee">
  <BaseForm formContent={manyFields} onSubmit={handleSubmit} />
</Dialog>`}}}},Ja=[u({fieldKey:"vacationDates",fieldComponent:"DATE_RANGE_INPUT",label:"Vacation Dates (date only)",fieldComponentProps:{placeholderStart:"Start date",placeholderEnd:"End date"}}),u({fieldKey:"meetingWindow",fieldComponent:"DATE_RANGE_INPUT",label:"Meeting Window (date + time)",fieldComponentProps:{showTime:!0,placeholderStart:"Start",placeholderEnd:"End"}})],Le={args:{formContent:Ja,onSubmit:S},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},Ya=[u({fieldKey:"attachments",fieldComponent:"FILE_PICKER",label:"Attachments",fieldComponentProps:{isMulti:!0,accept:[".pdf",".png",".jpg"],maxSize:5242880,text:"No files selected",buttonText:"Choose Files"}}),u({fieldKey:"singleFile",fieldComponent:"FILE_PICKER",label:"Cover Image (single file)",fieldComponentProps:{accept:".png,.jpg",text:"No file chosen"}})],Be={args:{formContent:Ya,onSubmit:S},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},za=[u({fieldKey:"email",fieldComponent:"TEXT_INPUT",label:"Email",isRequired:!0,helperText:p.jsxs("span",{children:["We'll use this to send you a confirmation."," ",p.jsx("a",{href:"#privacy",style:{color:"inherit"},children:"Privacy policy"})]}),helperTextPlacement:"tooltip",fieldComponentProps:{placeholder:"you@example.com"}}),u({fieldKey:"bio",fieldComponent:"TEXT_AREA",label:"Bio",helperText:p.jsxs("span",{children:["Write a short bio. ",p.jsx("strong",{children:"Markdown"})," is supported."]}),helperTextPlacement:"bottom",fieldComponentProps:{placeholder:"Tell us about yourself",rows:3}}),u({fieldKey:"department",fieldComponent:"DROPDOWN",label:"Department",helperText:"Select the department you belong to",helperTextPlacement:"tooltip",fieldComponentProps:{items:w,placeholder:"Select department"}})],we={args:{formContent:za,onSubmit:S},parameters:{docs:{source:{code:`const formContent = [
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
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},Qa=[u({fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Name",isRequired:!0,fieldComponentProps:{placeholder:"Enter a name",defaultValue:"Jane Doe"}}),u({fieldKey:"quantity",fieldComponent:"NUMBER_INPUT",label:"Quantity",fieldComponentProps:{min:0,max:1e3,step:1,defaultValue:42}}),u({fieldKey:"priority",fieldComponent:"DROPDOWN",label:"Priority",fieldComponentProps:{items:se,placeholder:"Select priority"}})],ke={args:{formContent:Qa,onSubmit:S},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},Za=[u({fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Name",isRequired:!0,fieldComponentProps:{placeholder:"Enter a name"}}),u({fieldKey:"employee",fieldComponent:"OBJECT_SELECT",label:"Employee",fieldComponentProps:{objectType:{type:"object",apiName:"Employee"},placeholder:"Search employees…"}})],es=[u({fieldKey:"department",fieldComponent:"DROPDOWN",label:"Department",fieldComponentProps:{items:w,placeholder:"Select department..."}}),{type:"section",key:"personal",definition:{title:"Personal Information",description:"Basic details about the employee",fields:[{fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Full Name",isRequired:!0,fieldComponentProps:{placeholder:"Enter full name"}},{fieldKey:"email",fieldComponent:"TEXT_INPUT",label:"Email",fieldComponentProps:{placeholder:"user@example.com"}}]}},{type:"section",key:"settings",definition:{title:"Settings",collapsedByDefault:!0,fields:[{fieldKey:"isActive",fieldComponent:"RADIO_BUTTONS",label:"Active",fieldComponentProps:{options:[{label:"Yes",value:!0},{label:"No",value:!1}]}},{fieldKey:"priority",fieldComponent:"DROPDOWN",label:"Priority",fieldComponentProps:{items:se,placeholder:"Select priority"}}]}}],Ue={args:{formContent:Za,onSubmit:S},parameters:{docs:{source:{code:`const formContent = [
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
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}};function ns(){const e=pn(),n=l.useMemo(()=>e(un).where({department:"Marketing"}),[e]),o=l.useMemo(()=>[u({fieldKey:"employee",fieldComponent:"OBJECT_SELECT",label:"Marketing employee",helperText:"This selector is scoped by an ObjectSet.",fieldComponentProps:{objectSet:n,placeholder:"Search Marketing employees…"}})],[n]);return p.jsx(X,{formContent:o,onSubmit:S})}const Me={render:()=>p.jsx(ns,{}),parameters:{docs:{source:{code:`function ScopedEmployeeForm() {
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
}`}}}},We={args:{formContent:es,onSubmit:S}},ts=[{type:"section",key:"contact",definition:{title:"Contact Details",style:"minimal",description:"How to reach the employee",fields:[{fieldKey:"phone",fieldComponent:"TEXT_INPUT",label:"Phone",fieldComponentProps:{placeholder:"+1 (555) 000-0000"}},{fieldKey:"email",fieldComponent:"TEXT_INPUT",label:"Email",fieldComponentProps:{placeholder:"user@example.com"}}]}},{type:"section",key:"address",definition:{title:"Address",style:"minimal",fields:[{fieldKey:"street",fieldComponent:"TEXT_INPUT",label:"Street",fieldComponentProps:{placeholder:"123 Main St"}},{fieldKey:"city",fieldComponent:"TEXT_INPUT",label:"City",fieldComponentProps:{placeholder:"Springfield"}}]}}],je={args:{formContent:ts,onSubmit:S}},os=[{type:"section",key:"employee",definition:{title:"Employee Details",columnCount:2,fields:[{fieldKey:"firstName",fieldComponent:"TEXT_INPUT",label:"First Name",fieldComponentProps:{placeholder:"First"}},{fieldKey:"lastName",fieldComponent:"TEXT_INPUT",label:"Last Name",fieldComponentProps:{placeholder:"Last"}},{fieldKey:"email",fieldComponent:"TEXT_INPUT",label:"Email",fieldComponentProps:{placeholder:"user@example.com"}},{fieldKey:"department",fieldComponent:"DROPDOWN",label:"Department",fieldComponentProps:{items:w,placeholder:"Select..."}}]}}],Ve={args:{formContent:os,onSubmit:S}};function Jn(e){var n;return typeof e!="string"?String(e):((n=$o[e])==null?void 0:n.name)??e}function Yn(e){const n=String(e),o=$o[n];return p.jsxs("span",{className:"osdkRichDropdownLabel",children:[p.jsx("strong",{children:(o==null?void 0:o.name)??n}),(o==null?void 0:o.team)!=null?p.jsx("span",{className:"osdkRichDropdownDescription",children:o.team}):null]})}var zn,Qn,Zn;Ce.parameters={...Ce.parameters,docs:{...(zn=Ce.parameters)==null?void 0:zn.docs,source:{originalSource:`{
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
}`,...(Zn=(Qn=Ce.parameters)==null?void 0:Qn.docs)==null?void 0:Zn.source}}};var et,nt,tt;he.parameters={...he.parameters,docs:{...(et=he.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(tt=(nt=he.parameters)==null?void 0:nt.docs)==null?void 0:tt.source}}};var ot,rt,at;be.parameters={...be.parameters,docs:{...(ot=be.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(at=(rt=be.parameters)==null?void 0:rt.docs)==null?void 0:at.source}}};var st,it,lt;Se.parameters={...Se.parameters,docs:{...(st=Se.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(lt=(it=Se.parameters)==null?void 0:it.docs)==null?void 0:lt.source}}};var dt,mt,ct;Ee.parameters={...Ee.parameters,docs:{...(dt=Ee.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(ct=(mt=Ee.parameters)==null?void 0:mt.docs)==null?void 0:ct.source}}};var ut,pt,ft;ye.parameters={...ye.parameters,docs:{...(ut=ye.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  render: () => <DisabledFieldsStory />,
  parameters: {
    docs: {
      description: {
        story: "Shows every BaseForm field renderer in a disabled state. Disabled fields keep their current values in form state but block user edits."
      },
      source: {
        code: \`const formContent = [
  {
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Name",
    disabled: true,
    fieldComponentProps: { placeholder: "Enter a name" },
  },
  {
    fieldKey: "priority",
    fieldComponent: "DROPDOWN",
    label: "Priority",
    disabled: true,
    fieldComponentProps: {
      items: ["Low", "Medium", "High"],
      placeholder: "Select priority",
    },
  },
  // Repeat disabled: true for TEXT_AREA, NUMBER_INPUT, RADIO_BUTTONS,
  // SWITCH, DATETIME_PICKER, DATE_RANGE_INPUT, FILE_PICKER,
  // OBJECT_SELECT, OBJECT_SET, and CUSTOM.
];

<BaseForm
  formTitle="Disabled fields"
  formContent={formContent}
  formState={formState}
  onFieldValueChange={handleFieldValueChange}
  onSubmit={handleSubmit}
/>\`
      }
    }
  }
}`,...(ft=(pt=ye.parameters)==null?void 0:pt.docs)==null?void 0:ft.source}}};var Ct,ht,bt;ge.parameters={...ge.parameters,docs:{...(Ct=ge.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
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
}`,...(bt=(ht=ge.parameters)==null?void 0:ht.docs)==null?void 0:bt.source}}};var St,Et,yt;Te.parameters={...Te.parameters,docs:{...(St=Te.parameters)==null?void 0:St.docs,source:{originalSource:`{
  args: {
    formContent,
    onSubmit: handleSubmit,
    submitButtonText: "Save employee",
    submitButtonVariant: "secondary"
  },
  parameters: {
    docs: {
      source: {
        code: \`<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
  submitButtonText="Save employee"
  submitButtonVariant="secondary"
/>\`
      }
    }
  }
}`,...(yt=(Et=Te.parameters)==null?void 0:Et.docs)==null?void 0:yt.source}}};var gt,Tt,Pt;Pe.parameters={...Pe.parameters,docs:{...(gt=Pe.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(Pt=(Tt=Pe.parameters)==null?void 0:Tt.docs)==null?void 0:Pt.source}}};var vt,Nt,xt;ve.parameters={...ve.parameters,docs:{...(vt=ve.parameters)==null?void 0:vt.docs,source:{originalSource:`{
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
}`,...(xt=(Nt=ve.parameters)==null?void 0:Nt.docs)==null?void 0:xt.source}}};var Dt,Rt,Ot;Ne.parameters={...Ne.parameters,docs:{...(Dt=Ne.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
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
}`,...(Ot=(Rt=Ne.parameters)==null?void 0:Rt.docs)==null?void 0:Ot.source}}};var It,_t,Ft;xe.parameters={...xe.parameters,docs:{...(It=xe.parameters)==null?void 0:It.docs,source:{originalSource:`{
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
}`,...(Ft=(_t=xe.parameters)==null?void 0:_t.docs)==null?void 0:Ft.source}}};var At,Kt,Lt;De.parameters={...De.parameters,docs:{...(At=De.parameters)==null?void 0:At.docs,source:{originalSource:`{
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
}`,...(Lt=(Kt=De.parameters)==null?void 0:Kt.docs)==null?void 0:Lt.source}}};var Bt,wt,kt;Re.parameters={...Re.parameters,docs:{...(Bt=Re.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
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
}`,...(kt=(wt=Re.parameters)==null?void 0:wt.docs)==null?void 0:kt.source}}};var Ut,Mt,Wt;Oe.parameters={...Oe.parameters,docs:{...(Ut=Oe.parameters)==null?void 0:Ut.docs,source:{originalSource:`{
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
}`,...(Wt=(Mt=Oe.parameters)==null?void 0:Mt.docs)==null?void 0:Wt.source}}};var jt,Vt,Xt;Ie.parameters={...Ie.parameters,docs:{...(jt=Ie.parameters)==null?void 0:jt.docs,source:{originalSource:`{
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
}`,...(Xt=(Vt=Ie.parameters)==null?void 0:Vt.docs)==null?void 0:Xt.source}}};var qt,Gt,$t;_e.parameters={..._e.parameters,docs:{...(qt=_e.parameters)==null?void 0:qt.docs,source:{originalSource:`{
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
      placeholder: "Search users...",
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
}`,...($t=(Gt=_e.parameters)==null?void 0:Gt.docs)==null?void 0:$t.source}}};var Ht,Jt,Yt;Fe.parameters={...Fe.parameters,docs:{...(Ht=Fe.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
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
}`,...(Yt=(Jt=Fe.parameters)==null?void 0:Jt.docs)==null?void 0:Yt.source}}};var zt,Qt,Zt;Ae.parameters={...Ae.parameters,docs:{...(zt=Ae.parameters)==null?void 0:zt.docs,source:{originalSource:`{
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
}`,...(Zt=(Qt=Ae.parameters)==null?void 0:Qt.docs)==null?void 0:Zt.source}}};var eo,no,to;Ke.parameters={...Ke.parameters,docs:{...(eo=Ke.parameters)==null?void 0:eo.docs,source:{originalSource:`{
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
}`,...(to=(no=Ke.parameters)==null?void 0:no.docs)==null?void 0:to.source}}};var oo,ro,ao;Le.parameters={...Le.parameters,docs:{...(oo=Le.parameters)==null?void 0:oo.docs,source:{originalSource:`{
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
}`,...(ao=(ro=Le.parameters)==null?void 0:ro.docs)==null?void 0:ao.source}}};var so,io,lo;Be.parameters={...Be.parameters,docs:{...(so=Be.parameters)==null?void 0:so.docs,source:{originalSource:`{
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
}`,...(lo=(io=Be.parameters)==null?void 0:io.docs)==null?void 0:lo.source}}};var mo,co,uo;we.parameters={...we.parameters,docs:{...(mo=we.parameters)==null?void 0:mo.docs,source:{originalSource:`{
  args: {
    formContent: helperTextFormContent,
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
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>\`
      }
    }
  }
}`,...(uo=(co=we.parameters)==null?void 0:co.docs)==null?void 0:uo.source}}};var po,fo,Co;ke.parameters={...ke.parameters,docs:{...(po=ke.parameters)==null?void 0:po.docs,source:{originalSource:`{
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
}`,...(Co=(fo=ke.parameters)==null?void 0:fo.docs)==null?void 0:Co.source}}};var ho,bo,So;Ue.parameters={...Ue.parameters,docs:{...(ho=Ue.parameters)==null?void 0:ho.docs,source:{originalSource:`{
  args: {
    formContent: objectSelectFormContent,
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
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>\`
      }
    }
  }
}`,...(So=(bo=Ue.parameters)==null?void 0:bo.docs)==null?void 0:So.source}}};var Eo,yo,go;Me.parameters={...Me.parameters,docs:{...(Eo=Me.parameters)==null?void 0:Eo.docs,source:{originalSource:`{
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
}`,...(go=(yo=Me.parameters)==null?void 0:yo.docs)==null?void 0:go.source}}};var To,Po,vo;We.parameters={...We.parameters,docs:{...(To=We.parameters)==null?void 0:To.docs,source:{originalSource:`{
  args: {
    formContent: sectionFormContent,
    onSubmit: handleSubmit
  }
}`,...(vo=(Po=We.parameters)==null?void 0:Po.docs)==null?void 0:vo.source}}};var No,xo,Do;je.parameters={...je.parameters,docs:{...(No=je.parameters)==null?void 0:No.docs,source:{originalSource:`{
  args: {
    formContent: minimalSectionFormContent,
    onSubmit: handleSubmit
  }
}`,...(Do=(xo=je.parameters)==null?void 0:xo.docs)==null?void 0:Do.source}}};var Ro,Oo,Io;Ve.parameters={...Ve.parameters,docs:{...(Ro=Ve.parameters)==null?void 0:Ro.docs,source:{originalSource:`{
  args: {
    formContent: gridSectionFormContent,
    onSubmit: handleSubmit
  }
}`,...(Io=(Oo=Ve.parameters)==null?void 0:Oo.docs)==null?void 0:Io.source}}};const qs=["Default","Controlled","WithCustomTitle","Loading","SubmitDisabled","DisabledFields","Pending","WithCustomSubmitButton","WithSwitch","WithUnsupportedFields","WithValidation","WithCustomValidation","WithCustomErrorMessages","WithObjectSetField","WithDropdown","WithMultiSelectDropdown","WithRichDropdownLabels","WithDateTimePicker","InsideBlueprintDialog","ScrollableDialogForm","WithDateRangePicker","WithMultiFilePicker","WithHelperText","WithDefaultValues","WithObjectSelect","WithScopedObjectSelect","WithSections","WithMinimalSections","WithGridSection"];export{he as Controlled,Ce as Default,ye as DisabledFields,Ae as InsideBlueprintDialog,Se as Loading,ge as Pending,Ke as ScrollableDialogForm,Ee as SubmitDisabled,De as WithCustomErrorMessages,Te as WithCustomSubmitButton,be as WithCustomTitle,xe as WithCustomValidation,Le as WithDateRangePicker,Fe as WithDateTimePicker,ke as WithDefaultValues,Oe as WithDropdown,Ve as WithGridSection,we as WithHelperText,je as WithMinimalSections,Be as WithMultiFilePicker,Ie as WithMultiSelectDropdown,Ue as WithObjectSelect,Re as WithObjectSetField,_e as WithRichDropdownLabels,Me as WithScopedObjectSelect,We as WithSections,Pe as WithSwitch,ve as WithUnsupportedFields,Ne as WithValidation,qs as __namedExportsOrder,Xs as default};
