var Gl=Object.defineProperty;var Bl=(e,t,n)=>t in e?Gl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ot=(e,t,n)=>Bl(e,typeof t!="symbol"?t+"":t,n);import{R as r,O as Wl,c as Hl,r as a,j as f,f as $l}from"./iframe-BIk6y3D2.js";import{S as Ul,M as Xl,a as Yl,b as Kl,c as zl,d as Ql,e as Ot}from"./MultiColumnSortDialog-B81Yi4-k.js";import{c as P}from"./index-BrxLtgxq.js";import{I as V,S as _e}from"./svgIconContainer-ClEpVk-E.js";import{S as dl,I as re,f as ql,c as Jl,u as ml,a as Zl,b as er,d as tr}from"./Input-DrTecCg5.js";import{C as pl}from"./cross-Wh0LPwEp.js";import{C as nr}from"./chevron-down-c1DUM2ML.js";import{T as lr,a as rr}from"./useValueChanged-DLdCeCAm.js";import{u as ar,C as sr,a as jt,P as or,s as ir,K as cr,b as ur,c as dr,D as mr,d as pr,S as fr,v as Cr,e as hr}from"./DraggableList-D5mqy23n.js";import{B}from"./Button-lxjb9aa4.js";import{r as gr,t as wt,i as yr,O as _t}from"./object-table-DS2pSuMC.js";import{u as Er}from"./useControlled-ZaEmo-cv.js";import{f as _r,g as Tr,u as br,b as vr,a as Ar,c as Lr,m as Sr,d as Ir,n as Mr,e as fl}from"./useBaseUiId-BfuB2Dn3.js";import{v as Rr}from"./InternalBackdrop-C_nIJDqS.js";import{l as kr,m as Nr,d as Ee,a as G,b as qe,C as D,h as xr,k as Cl}from"./DropdownField-Cf0nqc4z.js";import{C as hl}from"./ColumnConfigDialog-q2GsfEdZ.js";import{S as it}from"./SkeletonBar-DO4vSGz5.js";import{a as Fr,d as Pt,m as Dr}from"./makeExternalStore-Vi1LFpx3.js";import{w as Or}from"./withOsdkMetrics-Ddwytk8G.js";import{E as F}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Dialog-DwRU3NRA.js";import"./composite-CxTcUga1.js";import"./index-B2SBv7wx.js";import"./index-CZA_PHWc.js";import"./ToolbarRootContext-DvR5WIlE.js";import"./getPseudoElementBounds-_jWJCQPo.js";import"./CompositeItem-DrrHs1Co.js";import"./getDisabledMountTransitionStyles-DHoM9ICy.js";import"./caret-down-DhvKBbl3.js";import"./Table-DSAtAp-3.js";import"./LoadingCell-DTpCoq3o.js";import"./index-CM6sKWBT.js";import"./error-C4_9KtpJ.js";import"./PopoverPopup-CTfFgo3E.js";import"./index-C6SWBR8c.js";import"./minus-O03Xim5U.js";import"./useRegisterUserAgent-CgqSjgLH.js";function ce(e,t){const{where:n,withProperties:l,intersectWith:s,aggregate:o,dedupeIntervalMs:i}=t,d="objectSet"in t?t.objectSet:void 0,{observableClient:c}=r.useContext(Wl),m=c.canonicalizeOptions({where:n,withProperties:l,aggregate:o,intersectWith:s}),u=d?JSON.stringify(Hl(d)):void 0,p=r.useRef(d);p.current=d;const{subscribe:y,getSnapShot:C}=r.useMemo(()=>{const L=p.current;return L?Fr(E=>c.observeAggregation({type:e,objectSet:L,where:m.where,withProperties:m.withProperties,intersectWith:m.intersectWith,aggregate:m.aggregate,dedupeInterval:i??2e3},E),Pt({hookType:"useOsdkAggregation",objectType:e.apiName,where:m.where,aggregate:m.aggregate})):Dr(E=>c.observeAggregation({type:e,where:m.where,withProperties:m.withProperties,intersectWith:m.intersectWith,aggregate:m.aggregate,dedupeInterval:i??2e3},E),Pt({hookType:"useOsdkAggregation",objectType:e.apiName,where:m.where,aggregate:m.aggregate}))},[c,e.apiName,e.type,u,m.where,m.withProperties,m.intersectWith,m.aggregate,i]),h=r.useSyncExternalStore(y,C),_=r.useCallback(async()=>{await c.invalidateObjectType(e.apiName)},[c,e.apiName]);return r.useMemo(()=>({data:h==null?void 0:h.result,isLoading:Nr(h,!0),error:kr(h,"Failed to execute aggregation"),refetch:_}),[h,_])}const gl=a.forwardRef((e,t)=>{const n=(e.size??V.STANDARD)>=V.LARGE,s=`${-1*(n?V.LARGE:V.STANDARD)/.05/2}`,o={transformOrigin:"center"};return f.jsx(_e,{iconName:"disable",ref:t,...e,children:f.jsx("path",{d:n?"M200 400C89.6 400 0 310.4 0 200S89.6 0 200 0S400 89.6 400 200S310.4 400 200 400M40 200C40 288.4 111.6 360 200 360C237 360 271 347.4 298 326.2L73.8 102A158 158 0 0 0 40 200M200 40C163 40 129 52.6 102 73.8L326.2 298A158 158 0 0 0 360 200C360 111.6 288.4 40 200 40":"M159.8 320.2C71.4 320.2 -0.2 248.6 -0.2 160.2S71.4 0.2 159.8 0.2S319.8 71.8 319.8 160.2S248.2 320.2 159.8 320.2M39.8 160.2C39.8 226.4 93.6 280.2 159.8 280.2C185.8 280.2 209.6 271.8 229.2 257.8L62.2 90.8C48.2 110.4 39.8 134.2 39.8 160.2M159.8 40.2C133.8 40.2 110 48.6 90.4 62.6L257.4000000000001 229.6C271.4 210 279.8000000000001 186.2 279.8000000000001 160.2C279.8000000000001 93.8 226.2000000000001 40.1999999999999 159.8000000000001 40.1999999999999",fillRule:"evenodd",transform:`scale(0.05, -0.05) translate(${s}, ${s})`,style:o})})});gl.displayName="Blueprint6.Icon.Disable";const yl=a.forwardRef((e,t)=>{const n=(e.size??V.STANDARD)>=V.LARGE,s=`${-1*(n?V.LARGE:V.STANDARD)/.05/2}`,o={transformOrigin:"center"};return f.jsx(_e,{iconName:"double-chevron-left",ref:t,...e,children:f.jsx("path",{d:n?"M108.2 200L214 305.8C217.8 309.4 220 314.4 220 320A20.06 20.06 0 0 1 185.8 334.2L65.8 214.2C62.2 210.6 60 205.6 60 200S62.2 189.4 65.8 185.8L185.8 65.8A20.06 20.06 0 0 1 214.2 94.2zM228.2 200L334 305.8C337.8 309.4 340 314.4 340 320A20.06 20.06 0 0 1 305.8 334.2L185.8 214.2C182.2 210.6 180 205.6 180 200S182.2 189.4 185.8 185.8L305.8 65.8A20.06 20.06 0 0 1 334.2000000000001 94.2z":"M88.2 160L154 225.8C157.8 229.4 160 234.4 160 240A20.06 20.06 0 0 1 125.8 254.2L45.8 174.2C42.2 170.6 40 165.6 40 160S42.2 149.4 45.8 145.8L125.8 65.8A20.06 20.06 0 0 1 154.2 94.2zM188.2 160L254 225.8C257.8 229.4 260 234.4 260 240A20.06 20.06 0 0 1 225.8 254.2L145.8 174.2C142.2 170.6 140 165.6 140 160S142.2 149.4 145.8 145.8L225.8 65.8A20.06 20.06 0 0 1 254.2 94.2z",fillRule:"evenodd",transform:`scale(0.05, -0.05) translate(${s}, ${s})`,style:o})})});yl.displayName="Blueprint6.Icon.DoubleChevronLeft";const El=a.forwardRef((e,t)=>{const n=(e.size??V.STANDARD)>=V.LARGE,s=`${-1*(n?V.LARGE:V.STANDARD)/.05/2}`,o={transformOrigin:"center"};return f.jsx(_e,{iconName:"double-chevron-right",ref:t,...e,children:f.jsx("path",{d:n?"M220 200C220 205.6 217.8 210.6 214.2 214.2L94.2 334.2000000000001A20.06 20.06 0 0 1 65.8 305.8L171.8 200L66 94.2000000000001C62.2 90.6 60 85.6 60 80A20.06 20.06 0 0 1 94.2 65.8L214.2 185.8C217.8 189.4 220 194.4 220 200M334.2000000000001 214.2L214.2 334.2000000000001A20.06 20.06 0 0 1 185.8 305.8L291.8 200L186 94.2000000000001C182.2 90.6 180 85.6 180 80A20.06 20.06 0 0 1 214.2 65.8L334.2000000000001 185.8C337.8 189.4 340 194.4 340 200S337.8 210.6 334.2000000000001 214.2":"M180 160C180 165.6 177.8 170.6 174.2 174.2L94.2 254.2A20.06 20.06 0 0 1 65.8 225.8L131.8 160L66 94.2C62.2 90.6 60 85.6 60 80A20.06 20.06 0 0 1 94.2 65.8L174.2 145.8C177.8 149.4 180 154.4 180 160M274.2000000000001 174.2L194.2 254.2A20.06 20.06 0 0 1 165.8 225.8L231.8 160L166 94.2C162.2 90.6 160 85.6 160 80A20.06 20.06 0 0 1 194.2 65.8L274.2000000000001 145.8C277.8 149.4 280 154.4 280 160S277.8 170.6 274.2000000000001 174.2",fillRule:"evenodd",transform:`scale(0.05, -0.05) translate(${s}, ${s})`,style:o})})});El.displayName="Blueprint6.Icon.DoubleChevronRight";const _l=a.forwardRef((e,t)=>{const n=(e.size??V.STANDARD)>=V.LARGE,s=`${-1*(n?V.LARGE:V.STANDARD)/.05/2}`,o={transformOrigin:"center"};return f.jsx(_e,{iconName:"more",ref:t,...e,children:f.jsx("path",{d:n?"M70 240A50 50 0 1 0 70 140A50 50 0 0 0 70 240M210 240A50 50 0 1 0 210 140A50 50 0 0 0 210 240M350 240A50 50 0 1 0 350 140A50 50 0 0 0 350 240":"M40 200A40 40 0 1 0 40 120A40 40 0 0 0 40 200M160 200A40 40 0 1 0 160 120A40 40 0 0 0 160 200M280 200A40 40 0 1 0 280 120A40 40 0 0 0 280 200",fillRule:"evenodd",transform:`scale(0.05, -0.05) translate(${s}, ${s})`,style:o})})});_l.displayName="Blueprint6.Icon.More";const Tl=a.forwardRef((e,t)=>{const n=(e.size??V.STANDARD)>=V.LARGE,s=`${-1*(n?V.LARGE:V.STANDARD)/.05/2}`,o={transformOrigin:"center"};return f.jsx(_e,{iconName:"reset",ref:t,...e,children:f.jsx("path",{d:n?"M120 280C120 269 111 260 100 260H20C9 260 0 269 0 280V360C0 371 9 380 20 380S40 371 40 360V319C76.4 368 134.2 400 200 400C310.4 400 400 310.4 400 200S310.4 0 200 0S0 89.6 0 200C0 211 9 220 20 220S40 211 40 200C40 111.6 111.6 40 200 40S360 111.6 360 200S288.4 360 200 360C149.4 360 104.6 336.6 75.2 300H100C111 300 120 291 120 280":"M120 220C120 209 111 200 100 200H20C9 200 0 209 0 220V300C0 311 9 320 20 320S40 311 40 300V265.2A159 159 0 0 0 160 320C248.4 320 320 248.4 320 160C320 78.8 259.6 12 181.2 1.6C180.8 1.6 180.4 1.4 180 1.4C173.4 0.6 166.8 0 160 0C71.6 0 0 71.6 0 160C0 171 9 180 20 180S40 171 40 160C40 93.8 93.8 40 160 40C174.1999999999999 40 187.4 43 200 47.6V47.4C246.6 63.8 280 107.8 280 160C280 226.2 226.2 280 160 280C124.6 280 92.8 264.4000000000001 70.8 240H100C111 240 120 231 120 220",fillRule:"evenodd",transform:`scale(0.05, -0.05) translate(${s}, ${s})`,style:o})})});Tl.displayName="Blueprint6.Icon.Reset";function ue(e){throw new Error(`Unhandled value: ${String(e)}`)}function Vt(){return r.createElement(pl,{size:14})}function jr(){return r.createElement(dl,{size:14})}function wr(){return r.createElement(_l,{size:14})}function Pr(){return r.createElement(nr,{size:10})}function Vr(){return r.createElement(yl,{size:14})}function Gr(){return r.createElement(El,{size:14})}function Br(){return r.createElement(Tl,{size:12})}function Gt(){return r.createElement(lr,{size:12})}function Wr(){return r.createElement(gl,{color:"currentColor",size:12})}const ee={filterList:"FilterList-module__filterList___wmzCNbkH",filterListCollapsed:"FilterList-module__filterListCollapsed___CGrK9txF",expandedContent:"FilterList-module__expandedContent___aEk2i2At",scrollableContent:"FilterList-module__scrollableContent___F3O1nfAo",hiddenContent:"FilterList-module__hiddenContent___PHKe-yWc",expandButton:"FilterList-module__expandButton___-QlY8-ot",collapsedLabel:"FilterList-module__collapsedLabel___QA0UtRts",addButtonContainer:"FilterList-module__addButtonContainer___kq300FEV",addButton:"FilterList-module__addButton___oD4yvwyZ"},Se={content:"FilterListContent-module__content___fG0EgVp6",dragOverlay:"FilterListContent-module__dragOverlay___Tjd1YpmI"},ct={errorContainer:"ErrorBoundary-module__errorContainer___FIguBDDu",errorMessage:"ErrorBoundary-module__errorMessage___jUsXUqFA",retryButton:"ErrorBoundary-module__retryButton___PZVWZOm7"};class Hr extends a.Component{constructor(){super(...arguments);ot(this,"state",{hasError:!1,error:null});ot(this,"handleRetry",()=>{this.setState({hasError:!1,error:null})})}static getDerivedStateFromError(n){return{hasError:!0,error:n}}componentDidCatch(n,l){var s,o;console.error("[ErrorBoundary]",n),console.error("[ErrorBoundary] Component stack:",l.componentStack),(o=(s=this.props).onError)==null||o.call(s,n)}render(){return this.state.hasError?this.props.fallback?this.props.fallback:r.createElement("div",{className:ct.errorContainer},r.createElement("p",{className:ct.errorMessage},this.props.errorMessage??"Something went wrong"),r.createElement(B,{className:ct.retryButton,onClick:this.handleRetry,"aria-label":"Retry"},"Retry")):this.props.children}}function $r(e){if(!e)return!1;switch(e.type){case"SELECT":case"EXACT_MATCH":return!0;case"CONTAINS_TEXT":case"NUMBER_RANGE":case"DATE_RANGE":case"TOGGLE":case"hasLink":case"linkedProperty":case"keywordSearch":case"TIMELINE":case"custom":return!1;default:return!1}}function bl(e){if(!e)return!1;switch(e.type){case"SELECT":case"EXACT_MATCH":case"CONTAINS_TEXT":case"TIMELINE":return!0;case"NUMBER_RANGE":case"DATE_RANGE":case"TOGGLE":case"hasLink":case"linkedProperty":case"keywordSearch":case"custom":return!1;default:return!1}}function Ur(e,t,n){const l=t.trim();if(!l)return e;const s=l.toLowerCase();return e.filter(o=>n(o).toLowerCase().includes(s))}function vl(e){if(!e)return!1;switch(e.type){case"SELECT":return e.selectedValues.length>0;case"EXACT_MATCH":return e.values.length>0;case"CONTAINS_TEXT":return e.value!==void 0&&e.value!=="";case"NUMBER_RANGE":return e.minValue!==void 0||e.maxValue!==void 0||e.includeNull===!0;case"DATE_RANGE":return e.minValue!==void 0||e.maxValue!==void 0||e.includeNull===!0;case"TOGGLE":return e.enabled;case"hasLink":return e.hasLink;case"linkedProperty":return vl(e.linkedFilterState);case"keywordSearch":return e.searchTerm!==void 0&&e.searchTerm!=="";case"TIMELINE":return e.startDate!==void 0||e.endDate!==void 0;case"custom":return!0;default:return!1}}function Xr(){return r.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true"},r.createElement("circle",{cx:"5.5",cy:"3.5",r:"1.5"}),r.createElement("circle",{cx:"10.5",cy:"3.5",r:"1.5"}),r.createElement("circle",{cx:"5.5",cy:"8",r:"1.5"}),r.createElement("circle",{cx:"10.5",cy:"8",r:"1.5"}),r.createElement("circle",{cx:"5.5",cy:"12.5",r:"1.5"}),r.createElement("circle",{cx:"10.5",cy:"12.5",r:"1.5"}))}const U={filterItem:"FilterListItem-module__filterItem___fDBkbb7u",itemHeader:"FilterListItem-module__itemHeader___jp4epXg-",itemLabel:"FilterListItem-module__itemLabel___cEnbqE59",itemContent:"FilterListItem-module__itemContent___PfVHHhIy",dragHandle:"FilterListItem-module__dragHandle___BwFrILWs",headerActionButton:"FilterListItem-module__headerActionButton___x10Z2Kx0",searchRow:"FilterListItem-module__searchRow___4fUrAgAm",searchInput:"FilterListItem-module__searchInput___v-qwznpk",searchClearButton:"FilterListItem-module__searchClearButton___HXHweIEa",excludeRow:"FilterListItem-module__excludeRow___6hctgE28",excludeRowVisible:"FilterListItem-module__excludeRowVisible___whT6lGyR",excludeCountLabel:"FilterListItem-module__excludeCountLabel___7IQFUJIY",clearAllButton:"FilterListItem-module__clearAllButton___rIGM4EMy",dragging:"FilterListItem-module__dragging___S5-LGyfS"};function Ct(){return Ct=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)({}).hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},Ct.apply(null,arguments)}function Al(e){if(e==null)return!1;switch(e.type){case"EXACT_MATCH":return e.values.length>0;case"SELECT":return e.selectedValues.length>0;case"CONTAINS_TEXT":return e.value!=null&&e.value.length>0;case"NUMBER_RANGE":return e.minValue!=null||e.maxValue!=null;case"DATE_RANGE":return e.minValue!=null||e.maxValue!=null;case"TIMELINE":return e.startDate!=null||e.endDate!=null;case"TOGGLE":return e.enabled;case"keywordSearch":return e.searchTerm.length>0;case"hasLink":return e.hasLink;case"linkedProperty":return Al(e.linkedFilterState);case"custom":return!0;default:return!1}}function Yr({definition:e,filterKey:t,label:n,filterState:l,onFilterStateChanged:s,onFilterRemoved:o,renderInput:i,dragHandleAttributes:d,dragHandleListeners:c,className:m,style:u}){const[p,y]=a.useState({type:"closed"}),[C,h]=a.useState(!1),_=a.useCallback(T=>{s(t,T)},[t,s]),L=a.useCallback(()=>{y(T=>T.type==="closed"?{type:"open",query:""}:{type:"closed"})},[]),E=a.useCallback(T=>{y({type:"open",query:T.target.value})},[]),v=a.useCallback(()=>{y({type:"open",query:""})},[]),R=a.useCallback(()=>{o==null||o(t)},[t,o]),b=a.useCallback(()=>{h(T=>!T)},[]),S=a.useCallback(T=>{T==null||T.focus({preventScroll:!0})},[]),I=bl(l),A=$r(l),k=p.type==="open",O=p.type==="open"?p.query:"",g=p.type==="open"?p.query:void 0;return r.createElement("div",{className:P(U.filterItem,m),style:u,"data-has-selection":Al(l)||void 0},r.createElement("div",{className:U.itemHeader},d&&r.createElement(B,Ct({className:U.dragHandle,"aria-label":`Reorder ${n}`},d,c),r.createElement(Xr,null)),r.createElement("span",{className:U.itemLabel},n),A&&r.createElement(B,{className:U.headerActionButton,onClick:L,"aria-label":"Search values","aria-pressed":k},r.createElement(jr,null)),o&&r.createElement(B,{className:U.headerActionButton,onClick:R,"aria-label":`Remove ${n} filter`},r.createElement(Vt,null)),I&&r.createElement(B,{className:U.headerActionButton,onClick:b,"aria-label":"More actions","aria-pressed":C},r.createElement(wr,null))),k&&r.createElement("div",{className:U.searchRow},r.createElement(re,{type:"text",className:U.searchInput,value:O,onChange:E,placeholder:"Search property values...","aria-label":"Search property values",ref:S}),O&&r.createElement(B,{type:"button",className:U.searchClearButton,onClick:v,"aria-label":"Clear search"},r.createElement(Vt,null))),r.createElement("div",{className:U.itemContent},r.createElement(Hr,{errorMessage:"Error loading filter"},i({definition:e,filterKey:t,filterState:l,onFilterStateChanged:_,searchQuery:g,excludeRowOpen:C}))))}const ht=a.memo(Yr);function Kr({id:e,definition:t,filterKey:n,label:l,filterState:s,onFilterStateChanged:o,onFilterRemoved:i,renderInput:d}){const{attributes:c,listeners:m,setNodeRef:u,transform:p,transition:y,isDragging:C}=ar({id:e}),h=a.useMemo(()=>({transform:sr.Transform.toString(p),transition:y??void 0}),[p,y]);return r.createElement("div",{ref:u,style:h,className:P(C&&U.dragging)},r.createElement(ht,{definition:t,filterKey:n,label:l,filterState:s,onFilterStateChanged:o,onFilterRemoved:i,renderInput:d,dragHandleAttributes:c,dragHandleListeners:m}))}const zr=a.memo(Kr),Qr=({transform:e})=>({...e,x:0}),qr={distance:8},Jr=[Qr],Zr={role:"button",tabIndex:-1,"aria-disabled":!0,"aria-pressed":void 0,"aria-roledescription":"sortable","aria-describedby":""};function ea({filterDefinitions:e,filterStates:t,onFilterStateChanged:n,onFilterRemoved:l,renderInput:s,getFilterKey:o,getFilterLabel:i,enableSorting:d,className:c,style:m}){const[u,p]=a.useState(null),[y,C]=a.useState(null),h=a.useMemo(()=>{if(!d||!u||!e)return e;const T=new Map(e.map(N=>[o(N),N])),M=[];for(const N of u){const x=T.get(N);x&&(M.push(x),T.delete(N))}for(const N of T.values())M.push(N);return M},[d,u,e,o]),_=a.useMemo(()=>d&&h?h.map(T=>o(T)):[],[d,h,o]),L=jt(or,{activationConstraint:qr}),E=jt(cr,{coordinateGetter:ir}),v=ur(L,E),R=y!=null?_.indexOf(String(y)):-1,b=R>=0&&h?h[R]:void 0,S=a.useMemo(()=>b?o(b):void 0,[b,o]),I=a.useCallback(T=>{C(T.active.id)},[]),A=a.useCallback(T=>{C(null);const{active:M,over:N}=T;if(!N||M.id===N.id)return;const x=_.indexOf(String(M.id)),$=_.indexOf(String(N.id));x!==-1&&$!==-1&&p(dr(_,x,$))},[_]),k=a.useCallback(()=>{C(null)},[]),O=a.useMemo(()=>({onDragStart({active:T}){const M=_.indexOf(String(T.id)),N=M>=0&&h?h[M]:void 0;return`Picked up ${N?i(N):"filter"} filter`},onDragOver({over:T}){return T?`Moved to position ${_.indexOf(String(T.id))+1} of ${_.length}`:"Not over a droppable area"},onDragEnd({active:T,over:M}){const N=_.indexOf(String(T.id)),x=N>=0&&h?h[N]:void 0,$=x?i(x):"filter";if(M&&T.id!==M.id){const Q=_.indexOf(String(M.id));return`Dropped ${$} filter at position ${Q+1}`}return`Dropped ${$} filter back in its original position`},onDragCancel({active:T}){const M=_.indexOf(String(T.id)),N=M>=0&&h?h[M]:void 0;return`Cancelled dragging ${N?i(N):"filter"} filter`}}),[h,_,i]),g=a.useMemo(()=>({announcements:O}),[O]);return!h||h.length===0?r.createElement("div",{className:P(Se.content,c),style:m,"data-empty":"true"}):d?r.createElement("div",{className:P(Se.content,c),style:m},r.createElement(mr,{sensors:v,collisionDetection:pr,modifiers:Jr,onDragStart:I,onDragEnd:A,onDragCancel:k,accessibility:g},r.createElement(fr,{items:_,strategy:Cr},h.map((T,M)=>{const N=_[M],x=o(T),$=i(T),Q=t.get(x);return r.createElement(zr,{key:N,id:N,definition:T,filterKey:x,label:$,filterState:Q,onFilterStateChanged:n,onFilterRemoved:l,renderInput:s})})),r.createElement(hr,{dropAnimation:null,className:Se.dragOverlay},b&&S&&r.createElement(ht,{definition:b,filterKey:S,label:i(b),filterState:t.get(S),onFilterStateChanged:n,onFilterRemoved:l,renderInput:s,dragHandleAttributes:Zr})))):r.createElement("div",{className:P(Se.content,c),style:m},h.map(T=>{const M=o(T),N=t.get(M);return r.createElement(ht,{key:M,definition:T,filterKey:M,label:i(T),filterState:N,onFilterStateChanged:n,onFilterRemoved:l,renderInput:s})}))}const ne={header:"FilterListHeader-module__header___dkKc0CO-",titleContainer:"FilterListHeader-module__titleContainer___KaePpQIx",title:"FilterListHeader-module__title___xqfWfSzK",titleIcon:"FilterListHeader-module__titleIcon___MQy-dec8",activeCount:"FilterListHeader-module__activeCount___GyBsnsQL",actions:"FilterListHeader-module__actions___YZA7zmGc",collapseButton:"FilterListHeader-module__collapseButton___N1-sj3B3",resetButton:"FilterListHeader-module__resetButton___jLcUypov"};function ta({title:e,titleIcon:t,collapsed:n=!1,onCollapsedChange:l,showResetButton:s,onReset:o,showActiveFilterCount:i,activeFilterCount:d=0,hasVisibilityChanges:c=!1}){const m=a.useCallback(()=>{l==null||l(!n)},[l,n]);return r.createElement("div",{className:ne.header},r.createElement("div",{className:ne.titleContainer},t&&r.createElement("span",{className:ne.titleIcon},t),e&&r.createElement("span",{className:ne.title},e),i&&d>0&&r.createElement("span",{className:ne.activeCount},"(",d,")")),r.createElement("div",{className:ne.actions},s&&r.createElement(B,{className:ne.resetButton,onClick:o,disabled:d===0&&!c},r.createElement(Br,null)," Reset filters"),l!=null&&r.createElement(B,{className:ne.collapseButton,onClick:m,"aria-expanded":!n,"aria-label":n?"Expand filters":"Collapse filters"},r.createElement(Vr,null))))}const na=a.memo(ta);function la(e){const{title:t,titleIcon:n,collapsed:l=!1,onCollapsedChange:s,filterDefinitions:o,filterStates:i,onFilterStateChanged:d,renderInput:c,getFilterKey:m,getFilterLabel:u,activeFilterCount:p,onReset:y,onFilterAdded:C,onFilterRemoved:h,showResetButton:_=!1,showActiveFilterCount:L=!1,hasVisibilityChanges:E,enableSorting:v,className:R,renderAddFilterButton:b}=e,S=a.useCallback(()=>{s==null||s(!1)},[s]),I=l&&s!=null;return r.createElement("div",{className:P(ee.filterList,R)},I&&r.createElement("div",{className:ee.filterListCollapsed,"data-collapsed":"true"},r.createElement(B,{className:ee.expandButton,onClick:S,"aria-label":"Expand filters"},r.createElement(Gr,null)),r.createElement("span",{className:ee.collapsedLabel},t??"Filters")),r.createElement("div",{className:P(ee.expandedContent,I&&ee.hiddenContent),"data-active-count":p},(t||n||_||L||s)&&r.createElement(na,{title:t,titleIcon:n,collapsed:l,onCollapsedChange:s,showResetButton:_,onReset:y,showActiveFilterCount:L,activeFilterCount:p,hasVisibilityChanges:E}),r.createElement("div",{className:ee.scrollableContent},r.createElement(ea,{filterDefinitions:o,filterStates:i,onFilterStateChanged:d,onFilterRemoved:h,renderInput:c,getFilterKey:m,getFilterLabel:u,enableSorting:v})),(b!=null||C!=null)&&r.createElement("div",{className:ee.addButtonContainer},b?b():r.createElement(B,{type:"button",className:ee.addButton,onClick:C},"+ Add filter"))))}const ra={trigger:"AddFilterPopover-module__trigger___8QQBrzPo"};function aa({hiddenDefinitions:e,onShowFilter:t,renderTrigger:n}){return r.createElement(Ul,{items:e,onItemSelected:t,trigger:n!=null?n():"+ Add filter",triggerClassName:n==null?ra.trigger:void 0,searchPlaceholder:"Search filters",emptyMessage:"No matching filters"})}const sa=a.memo(aa);var ut=function(){return gr.Date.now()},oa="Expected a function",ia=Math.max,ca=Math.min;function gt(e,t,n){var l,s,o,i,d,c,m=0,u=!1,p=!1,y=!0;if(typeof e!="function")throw new TypeError(oa);t=wt(t)||0,yr(n)&&(u=!!n.leading,p="maxWait"in n,o=p?ia(wt(n.maxWait)||0,t):o,y="trailing"in n?!!n.trailing:y);function C(I){var A=l,k=s;return l=s=void 0,m=I,i=e.apply(k,A),i}function h(I){return m=I,d=setTimeout(E,t),u?C(I):i}function _(I){var A=I-c,k=I-m,O=t-A;return p?ca(O,o-k):O}function L(I){var A=I-c,k=I-m;return c===void 0||A>=t||A<0||p&&k>=o}function E(){var I=ut();if(L(I))return v(I);d=setTimeout(E,_(I))}function v(I){return d=void 0,y&&l?C(I):(l=s=void 0,i)}function R(){d!==void 0&&clearTimeout(d),m=0,l=c=s=d=void 0}function b(){return d===void 0?i:v(ut())}function S(){var I=ut(),A=L(I);if(l=arguments,s=this,c=I,A){if(d===void 0)return h(c);if(p)return clearTimeout(d),d=setTimeout(E,t),C(c)}return d===void 0&&(d=setTimeout(E,t)),i}return S.cancel=R,S.flush=b,S}const Ce={textInput:"ContainsTextInput-module__textInput___VE1JFstL",inputGroup:"ContainsTextInput-module__inputGroup___ww0O5kep",searchIcon:"ContainsTextInput-module__searchIcon___O-6jW-zD",input:"ContainsTextInput-module__input___GP3qIOWL",clearButton:"ContainsTextInput-module__clearButton___4A9AsUvv"};function ua({value:e,onChange:t,placeholder:n="Search...",debounceMs:l=300,className:s,style:o,renderSearchIcon:i,renderClearIcon:d}){const[c,m]=a.useState(e??""),u=a.useRef(t);u.current=t;const p=a.useMemo(()=>gt(h=>{u.current(h.length>0?h:void 0)},l),[l]);a.useEffect(()=>()=>{p.cancel()},[p]),a.useEffect(()=>{m(e??""),p.cancel()},[e,p]);const y=a.useCallback(h=>{m(h.target.value),p(h.target.value)},[p]),C=a.useCallback(()=>{m(""),p.cancel(),u.current(void 0)},[p]);return r.createElement("div",{className:P(Ce.textInput,s),style:o,"data-has-value":!!c},r.createElement("div",{className:Ce.inputGroup},i?i():r.createElement("span",{className:Ce.searchIcon},r.createElement(dl,null)),r.createElement(re,{type:"text",className:Ce.input,value:c,onChange:y,placeholder:n,"aria-label":n}),c&&r.createElement(B,{type:"button",className:Ce.clearButton,onClick:C,"aria-label":"Clear search"},d?d():r.createElement(pl,null))))}const Tt=a.memo(ua),Ll=a.createContext(void 0);function da(){const e=a.useContext(Ll);if(e===void 0)throw new Error(_r(63));return e}let Bt=(function(e){return e.checked="data-checked",e.unchecked="data-unchecked",e.disabled="data-disabled",e.readonly="data-readonly",e.required="data-required",e.valid="data-valid",e.invalid="data-invalid",e.touched="data-touched",e.dirty="data-dirty",e.filled="data-filled",e.focused="data-focused",e})({});const Sl={...ql,checked(e){return e?{[Bt.checked]:""}:{[Bt.unchecked]:""}}},ma=a.forwardRef(function(t,n){const{checked:l,className:s,defaultChecked:o,id:i,inputRef:d,name:c,nativeButton:m=!1,onCheckedChange:u,readOnly:p=!1,required:y=!1,disabled:C=!1,render:h,uncheckedValue:_,...L}=t,{clearErrors:E}=Jl(),{state:v,setTouched:R,setDirty:b,validityData:S,setFilled:I,setFocused:A,shouldValidateOnChange:k,validationMode:O,disabled:g,name:T,validation:M}=ml(),{labelId:N}=Zl(),x=g||C,$=T??c,Q=Tr(u),q=a.useRef(null),be=br(q,d,M.inputRef),oe=a.useRef(null),pe=vr(),ve=er({id:i,implicit:!1,controlRef:oe}),[X,Ae]=Er({controlled:l,default:!!o,name:"Switch",state:"checked"});tr({id:pe,commit:M.commit,value:X,controlRef:oe,name:$,getValue:()=>X}),Ar(()=>{q.current&&I(q.current.checked)},[q,I]),rr(X,()=>{E($),b(X!==S.initialValue),I(X),k()?M.commit(X):M.commit(X,!0)});const{getButtonProps:H,buttonRef:lt}=Lr({disabled:x,native:m}),rt={id:pe,role:"switch","aria-checked":X,"aria-readonly":p||void 0,"aria-labelledby":N,onFocus(){x||A(!0)},onBlur(){const Y=q.current;!Y||x||(R(!0),A(!1),O==="onBlur"&&M.commit(Y.checked))},onClick(Y){var fe;p||x||(Y.preventDefault(),(fe=q==null?void 0:q.current)==null||fe.click())}},at=a.useMemo(()=>Sr({checked:X,disabled:x,id:ve,name:$,required:y,style:Rr,tabIndex:-1,type:"checkbox","aria-hidden":!0,ref:be,onChange(Y){if(Y.nativeEvent.defaultPrevented)return;const fe=Y.target.checked,Dt=Ir(Mr,Y.nativeEvent);Q==null||Q(fe,Dt),!Dt.isCanceled&&Ae(fe)},onFocus(){var Y;(Y=oe.current)==null||Y.focus()}},M.getInputValidationProps),[X,x,be,ve,$,Q,y,Ae,M]),Le=a.useMemo(()=>({...v,checked:X,disabled:x,readOnly:p,required:y}),[v,X,x,p,y]),st=fl("span",t,{state:Le,ref:[n,oe,lt],props:[rt,M.getValidationProps,L,H],stateAttributesMapping:Sl});return f.jsxs(Ll.Provider,{value:Le,children:[st,!X&&$&&_!==void 0&&f.jsx("input",{type:"hidden",name:$,value:_}),f.jsx("input",{...at})]})}),pa=a.forwardRef(function(t,n){const{render:l,className:s,...o}=t,{state:i}=ml(),d=da(),c={...i,...d};return fl("span",t,{state:c,ref:n,stateAttributesMapping:Sl,props:o})}),Wt={osdkSwitchRoot:"Switch-module__osdkSwitchRoot___Jp9OHtZ1",osdkSwitchThumb:"Switch-module__osdkSwitchThumb___eXBSyINB"};function Je(){return Je=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)({}).hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},Je.apply(null,arguments)}function fa({className:e,thumbProps:t,...n}){return r.createElement(ma,Je({className:P(Wt.osdkSwitchRoot,e)},n),r.createElement(pa,Je({},t,{className:P(Wt.osdkSwitchThumb,t==null?void 0:t.className)})))}const dt={toggleInput:"ToggleInput-module__toggleInput___bbjujXUD",toggleLabel:"ToggleInput-module__toggleLabel___9rnff5JB",labelText:"ToggleInput-module__labelText___jfty2eJo"};function Ca({enabled:e,onChange:t,label:n,className:l,style:s}){const o=P(dt.toggleInput,l);return r.createElement("div",{className:o,style:s,"data-enabled":e},r.createElement("label",{className:dt.toggleLabel},r.createElement(fa,{checked:e,onCheckedChange:t}),n&&r.createElement("span",{className:dt.labelText},n)))}const bt=a.memo(Ca),mt=20;function ha(e,t,n,l){if(e.length===0)return[];const s=n(t.min),i=n(t.max)-s;if(i===0){const m=e.reduce((u,p)=>u+p.count,0);return[{min:t.min,max:t.max,count:m}]}const d=i/mt,c=new Array(mt).fill(0);for(const{value:m,count:u}of e){const p=Math.min(Math.floor((n(m)-s)/d),mt-1);c[p]+=u}return c.map((m,u)=>({min:l(s+u*d),max:l(s+(u+1)*d),count:m}))}function ga(e){return Math.max(...e.map(t=>t.count),1)}const K={rangeInput:"RangeInput-module__rangeInput___5IlnpUfs",histogramContainer:"RangeInput-module__histogramContainer___suD4IT5D",histogramBar:"RangeInput-module__histogramBar___togsImv0",rangeInputs:"RangeInput-module__rangeInputs___6f6mnjwL",inputWrapper:"RangeInput-module__inputWrapper___1sk8iEjt",inputLabel:"RangeInput-module__inputLabel___-fR6-r3z",input:"RangeInput-module__input___e4XWn2rB",separator:"RangeInput-module__separator___ml1GvZvm"},W={loadingMessage:"shared-module__loadingMessage___l0c3ANEV",errorMessage:"shared-module__errorMessage___9SeAT7P8",emptyMessage:"shared-module__emptyMessage___z7gK6NAb",tagContainer:"shared-module__tagContainer___iwrGoxe0",tag:"shared-module__tag___p4pKeKBG",tagRemove:"shared-module__tagRemove___fcKemFM7"};function Il(e,t){const n=a.useRef(e);return t||(n.current=e),n.current}function Ze(){return Ze=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)({}).hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},Ze.apply(null,arguments)}const Ht=300;function ya({valueCountPairs:e,isLoading:t,minValue:n,maxValue:l,onChange:s,showHistogram:o=!0,className:i,style:d,config:c}){const m=a.useId(),u=a.useId(),[p,y]=a.useState(c.formatValue(n)),[C,h]=a.useState(c.formatValue(l)),_=a.useRef(s);_.current=s;const L=a.useRef(n);L.current=n;const E=a.useRef(l);E.current=l;const v=a.useMemo(()=>gt(T=>{const M=c.parseValue(T);_.current(M,E.current)},Ht),[c]),R=a.useMemo(()=>gt(T=>{const M=c.parseValue(T);_.current(L.current,M)},Ht),[c]);a.useEffect(()=>{y(c.formatValue(n)),v.cancel()},[n,c,v]),a.useEffect(()=>{h(c.formatValue(l)),R.cancel()},[l,c,R]),a.useEffect(()=>()=>{v.cancel(),R.cancel()},[v,R]);const b=Il(e,t),S=a.useMemo(()=>{if(b.length===0)return{min:void 0,max:void 0};const T=b.reduce((N,x)=>Math.min(N,c.toNumber(x.value)),1/0),M=b.reduce((N,x)=>Math.max(N,c.toNumber(x.value)),-1/0);return{min:c.fromNumber(T),max:c.fromNumber(M)}},[b,c]),I=a.useMemo(()=>({dataMin:S.min,dataMax:S.max}),[S.min,S.max]),A=a.useMemo(()=>!o||b.length===0||S.min===void 0||S.max===void 0?[]:ha(b,{min:S.min,max:S.max},c.toNumber,c.fromNumber),[o,b,S,c]),k=a.useMemo(()=>ga(A),[A]),O=a.useCallback(T=>{const M=T.target.value;y(M),v(M)},[v]),g=a.useCallback(T=>{const M=T.target.value;h(M),R(M)},[R]);return r.createElement("div",{className:P(K.rangeInput,i),style:d,"data-loading":t},o&&A.length===0&&!t&&r.createElement("div",{className:W.emptyMessage},"No values available"),o&&A.length>0&&r.createElement("div",{className:K.histogramContainer},A.map((T,M)=>{const N=T.count/k*100,x=(n===void 0||c.toNumber(T.max)>=c.toNumber(n))&&(l===void 0||c.toNumber(T.min)<=c.toNumber(l));return r.createElement("div",{key:M,className:K.histogramBar,"data-in-range":x,style:{height:`${Math.max(N,2)}%`},title:c.formatTooltip(T.min,T.max,T.count)})})),r.createElement("div",{className:K.rangeInputs},r.createElement("div",{className:K.inputWrapper},r.createElement("label",{htmlFor:m,className:K.inputLabel},c.minLabel),r.createElement(re,Ze({id:m,type:c.inputType,className:K.input,value:p,onChange:O,placeholder:I.dataMin!==void 0&&c.formatPlaceholder?c.formatPlaceholder(I.dataMin):void 0},c.inputProps))),r.createElement("span",{className:K.separator,"aria-hidden":"true"},"–"),r.createElement("div",{className:K.inputWrapper},r.createElement("label",{htmlFor:u,className:K.inputLabel},c.maxLabel),r.createElement(re,Ze({id:u,type:c.inputType,className:K.input,value:C,onChange:g,placeholder:I.dataMax!==void 0&&c.formatPlaceholder?c.formatPlaceholder(I.dataMax):void 0},c.inputProps)))))}const Ml=a.memo(ya);function yt(){return yt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)({}).hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},yt.apply(null,arguments)}const Ea={inputType:"date",formatValue:G,parseValue:Ee,toNumber:e=>e.getTime(),fromNumber:e=>new Date(e),minLabel:"From",maxLabel:"To",formatTooltip:(e,t,n)=>`${G(e)} - ${G(t)}: ${n.toLocaleString()}`};function _a(e){return r.createElement(Ml,yt({},e,{config:Ea}))}const Rl=a.memo(_a),Ta={linkedProperty:"LinkedPropertyInput-module__linkedProperty___aWk3D3GM"},J={listogram:"ListogramInput-module__listogram___QdvKag0g",container:"ListogramInput-module__container___hMngsxor",row:"ListogramInput-module__row___rps-rpjo",label:"ListogramInput-module__label___hQ3nLEpx",emptyLabel:"ListogramInput-module__emptyLabel___4JpVowj8",bar:"ListogramInput-module__bar___iUqTfYSm",barFill:"ListogramInput-module__barFill___za7KWtcm",viewAllButton:"ListogramInput-module__viewAllButton___CxQzJRxu",checkbox:"ListogramInput-module__checkbox___M-faPyIy",count:"ListogramInput-module__count___81M2s4eq"},pt={container:"ListogramSkeleton-module__container___OhztnRu9",row:"ListogramSkeleton-module__row___-JgFlzSX",flexBar:"ListogramSkeleton-module__flexBar___ohU5Nawa"},ba=[{textWidth:"50%"},{textWidth:"35%"},{textWidth:"60%"}];function va(){return r.createElement("div",{className:pt.container},ba.map((e,t)=>r.createElement("div",{key:t,className:pt.row},r.createElement(it,{height:"var(--osdk-filter-skeleton-text-height)",maxWidth:e.textWidth,className:pt.flexBar}),r.createElement(it,{width:"var(--osdk-filter-listogram-bar-width)",height:"var(--osdk-filter-listogram-bar-height)"}),r.createElement(it,{width:"var(--osdk-filter-skeleton-count-width)",height:"var(--osdk-filter-skeleton-text-height)"}))))}function Aa({values:e,maxCount:t,isLoading:n,error:l,selectedValues:s,onChange:o,colorMap:i,displayMode:d="full",showCount:c=!0,isExcluding:m,className:u,style:p,maxVisibleItems:y,searchQuery:C,renderValue:h}){const[_,L]=a.useState(!1),E=Il(e,n),v=a.useMemo(()=>new Set(s),[s]),R=a.useCallback(k=>{v.has(k)?o(s.filter(O=>O!==k)):o([...s,k])},[s,v,o]),b=a.useMemo(()=>C?Ur(E,C,k=>(h==null?void 0:h(k.value))??k.value):E,[E,C,h]),S=a.useMemo(()=>{const k=b.filter(g=>v.has(g.value)),O=b.filter(g=>!v.has(g.value));return[...k,...O]},[b,v]),I=a.useMemo(()=>_||!y?S:S.slice(0,y),[S,y,_]),A=y!=null&&S.length>y;return r.createElement("div",{className:P(J.listogram,u),style:p,"data-loading":n&&b.length>0},l&&r.createElement("div",{className:W.errorMessage},"Error loading values: ",l.message),!l&&b.length===0&&n&&r.createElement(va,null),!l&&b.length===0&&!n&&r.createElement("div",{className:W.emptyMessage},"No values available"),b.length>0&&r.createElement("div",{className:J.container},I.map(({value:k,count:O})=>{const g=t>0?O/t*100:0,T=i==null?void 0:i[k],M=k==="",N=M?"No value":(h==null?void 0:h(k))??k;return r.createElement(B,{key:k,className:J.row,onClick:()=>R(k),"aria-pressed":v.has(k),style:T||g>0?{"--osdk-filter-listogram-bar-fill-scale":g/100,...T?{"--osdk-filter-listogram-row-bar-color":T}:void 0}:void 0},r.createElement("span",{className:J.checkbox,onClick:x=>x.stopPropagation()},r.createElement(hl,{checked:v.has(k),onCheckedChange:()=>R(k),isExcluding:m})),r.createElement("span",{className:P(J.label,M&&J.emptyLabel),"data-excluding":m&&v.has(k)||void 0},N),c&&d!=="minimal"&&r.createElement("span",{className:J.count},O.toLocaleString()),d==="full"&&r.createElement("span",{className:J.bar},r.createElement("span",{className:J.barFill})))}),A&&!_&&r.createElement(B,{type:"button",className:J.viewAllButton,onClick:()=>L(!0)},"View all (",S.length,")")))}const vt=a.memo(Aa),Ie={multiDate:"MultiDateInput-module__multiDate___iR6FxhLx",clearAll:"MultiDateInput-module__clearAll___D8NKeHuy",calendarContainer:"MultiDateInput-module__calendarContainer___w1g1yBwS",input:"MultiDateInput-module__input___TcOQZD9Z"};function La({selectedDates:e,onChange:t,className:n,style:l,minDate:s,maxDate:o,showClearAll:i=!0}){const d=a.useCallback(p=>{const y=G(p);e.some(h=>G(h)===y)||t([...e,p].sort((h,_)=>h.getTime()-_.getTime()))},[e,t]),c=a.useCallback(p=>{const y=G(p);t(e.filter(C=>G(C)!==y))},[e,t]),m=a.useCallback(()=>{t([])},[t]),u=a.useCallback(p=>{const y=Ee(p.target.value);y&&(d(y),p.target.value="")},[d]);return r.createElement("div",{className:P(Ie.multiDate,n),style:l},e.length>0&&r.createElement("div",{className:W.tagContainer},e.map(p=>r.createElement("span",{key:p.toISOString(),className:W.tag},qe(p),r.createElement(B,{className:W.tagRemove,onClick:()=>c(p),"aria-label":`Remove ${qe(p)}`},"×"))),i&&e.length>1&&r.createElement(B,{className:Ie.clearAll,onClick:m,"aria-label":"Clear all dates"},"Clear all")),r.createElement("div",{className:Ie.calendarContainer},r.createElement(re,{type:"date",className:Ie.input,onChange:u,min:s?G(s):void 0,max:o?G(o):void 0,"aria-label":"Add date"})))}const kl=a.memo(La),ft={multiSelect:"MultiSelectInput-module__multiSelect___QW1VndMR",itemLabel:"MultiSelectInput-module__itemLabel___Kkk-GsEl",itemCount:"MultiSelectInput-module__itemCount___YAf51fvo"};function Sa({values:e,isLoading:t,error:n,selectedValues:l,onChange:s,className:o,style:i,placeholder:d="Select values...",showCounts:c=!0,ariaLabel:m="Search values",renderValue:u}){const p=a.useCallback(E=>{s(E??[])},[s]),y=a.useMemo(()=>e.map(({value:E})=>E),[e]),C=a.useMemo(()=>new Map(e.map(({value:E,count:v})=>[E,v])),[e]),h=a.useMemo(()=>u?(E,v)=>u(E).toLowerCase().includes(v.toLowerCase()):void 0,[u]),_=a.useCallback(E=>r.createElement(D.Item,{key:E,value:E},r.createElement(D.ItemIndicator,null),r.createElement("span",{className:ft.itemLabel},u?u(E):E),c&&r.createElement("span",{className:ft.itemCount},"(",(C.get(E)??0).toLocaleString(),")")),[C,c,u]),L=a.useCallback(E=>r.createElement(r.Fragment,null,E.map(v=>r.createElement(D.Chip,{key:v,"aria-label":v},u?u(v):v,r.createElement(D.ChipRemove,null))),r.createElement(D.Input,{placeholder:E.length>0?"":d,"aria-label":m})),[d,m,u]);return r.createElement("div",{className:P(ft.multiSelect,o),style:i,"data-loading":t},n&&r.createElement("div",{className:W.errorMessage},"Error loading options: ",n.message),!n&&e.length===0&&r.createElement("div",{className:W.emptyMessage},t?"Loading options...":"No options available"),(e.length>0||t)&&r.createElement(D.Root,{multiple:!0,value:l,onValueChange:p,items:y,filter:h},t&&r.createElement("div",{className:W.loadingMessage},"Updating..."),r.createElement(D.Chips,null,r.createElement(D.Value,null,L)),r.createElement(D.Portal,null,r.createElement(D.Positioner,null,r.createElement(D.Popup,null,r.createElement(D.Empty,null,"No matching options"),r.createElement(D.List,null,_))))))}const At=a.memo(Sa),he={nullWrapper:"NullValueWrapper-module__nullWrapper___hfIurJcX",nullValueRow:"NullValueWrapper-module__nullValueRow___sHIqcE89",nullLabel:"NullValueWrapper-module__nullLabel___D-f1K2Aq",nullLabelText:"NullValueWrapper-module__nullLabelText___jzAptlbZ",count:"NullValueWrapper-module__count___-Rsq7EuS"};function Ia({nullCount:e,isLoading:t,error:n,includeNull:l=!1,onIncludeNullChange:s,showNullCount:o=!0,children:i,className:d,style:c}){const m=a.useCallback(()=>{s(!l)},[l,s]);return r.createElement("div",{className:P(he.nullWrapper,d),style:c},i,r.createElement("div",{className:he.nullValueRow,"data-checked":l,"data-loading":t},r.createElement("label",{className:he.nullLabel},r.createElement(hl,{checked:l,onCheckedChange:m}),r.createElement("span",{className:he.nullLabelText},"No value")),o&&!n&&r.createElement("span",{className:he.count},e.toLocaleString())),n&&r.createElement("div",{className:W.errorMessage},"Failed to load null count"))}const et=a.memo(Ia);function Et(){return Et=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)({}).hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},Et.apply(null,arguments)}function Ma(e){return e!==void 0?String(e):""}function Ra(e){if(e==="")return;const t=parseFloat(e);return isNaN(t)?void 0:t}const ka={inputType:"number",formatValue:Ma,parseValue:Ra,toNumber:e=>e,fromNumber:e=>e,minLabel:"Min",maxLabel:"Max",formatTooltip:(e,t,n)=>`${e.toFixed(1)} - ${t.toFixed(1)}: ${n.toLocaleString()}`,formatPlaceholder:e=>e.toFixed(0),inputProps:{step:"any"}};function Na(e){return r.createElement(Ml,Et({},e,{config:ka}))}const Nl=a.memo(Na),Me={singleDate:"SingleDateInput-module__singleDate___vuPq29dO",dateContainer:"SingleDateInput-module__dateContainer___8nbNGHTi",input:"SingleDateInput-module__input___SijNvgB7",clearButton:"SingleDateInput-module__clearButton___q1-uPMWI"};function xa({selectedDate:e,onChange:t,className:n,style:l,minDate:s,maxDate:o,placeholder:i="Select a date...",showClearButton:d=!0}){const c=a.useCallback(u=>{const p=Ee(u.target.value);t(p)},[t]),m=a.useCallback(()=>{t(void 0)},[t]);return r.createElement("div",{className:P(Me.singleDate,n),style:l},r.createElement("div",{className:Me.dateContainer},r.createElement(re,{type:"date",className:Me.input,value:G(e),onChange:c,min:s?G(s):void 0,max:o?G(o):void 0,placeholder:i,"aria-label":"Select date"}),d&&e!==void 0&&r.createElement(B,{className:Me.clearButton,onClick:m,"aria-label":"Clear date"},"×")))}const xl=a.memo(xa),ge={singleSelect:"SingleSelectInput-module__singleSelect___c08JWaD4",selectContainer:"SingleSelectInput-module__selectContainer___QBp8RBCT",clearButton:"SingleSelectInput-module__clearButton___mnHKL2FB",itemLabel:"SingleSelectInput-module__itemLabel___17C5AHWx",itemCount:"SingleSelectInput-module__itemCount___QuWz2Ynl"};function Fa({values:e,isLoading:t,error:n,selectedValue:l,onChange:s,className:o,style:i,placeholder:d="Select a value...",showClearButton:c=!0,showCounts:m=!1,ariaLabel:u="Select value",renderValue:p}){const y=a.useCallback(E=>{s(E??void 0)},[s]),C=a.useMemo(()=>e.map(({value:E})=>E),[e]),h=a.useMemo(()=>new Map(e.map(({value:E,count:v})=>[E,v])),[e]),_=a.useMemo(()=>p?(E,v)=>p(E).toLowerCase().includes(v.toLowerCase()):void 0,[p]),L=a.useCallback(E=>r.createElement(D.Item,{key:E,value:E},r.createElement(D.ItemIndicator,null),r.createElement("span",{className:ge.itemLabel},p?p(E):E),m&&r.createElement("span",{className:ge.itemCount},"(",(h.get(E)??0).toLocaleString(),")")),[h,m,p]);return r.createElement("div",{className:P(ge.singleSelect,o),style:i,"data-loading":t},t&&r.createElement("div",{className:W.loadingMessage},"Loading options..."),n&&r.createElement("div",{className:W.errorMessage},"Error loading options: ",n.message),!t&&!n&&e.length===0&&r.createElement("div",{className:W.emptyMessage},"No options available"),(e.length>0||t)&&r.createElement("div",{className:ge.selectContainer},r.createElement(D.Root,{value:l??null,onValueChange:y,items:C,filter:_},r.createElement(D.SearchInput,{placeholder:d,"aria-label":u}),c&&l!==void 0&&r.createElement(D.Clear,{className:ge.clearButton}),r.createElement(D.Portal,null,r.createElement(D.Positioner,null,r.createElement(D.Popup,null,r.createElement(D.Empty,null,"No matching options"),r.createElement(D.List,null,L)))))))}const Lt=a.memo(Fa),$t={textTags:"TextTagsInput-module__textTags___3hHCVJWH",input:"TextTagsInput-module__input___Z1Od1KUG"},Ut=/[,\n]/,Da=a.memo(function({tag:e,onRemove:t}){const n=a.useCallback(()=>{t(e)},[e,t]);return r.createElement("span",{className:W.tag},e,r.createElement(B,{type:"button",className:W.tagRemove,onClick:n,"aria-label":`Remove ${e}`},"×"))});function Oa({suggestions:e,isLoading:t,error:n,tags:l,onChange:s,className:o,style:i,placeholder:d="Add a tag...",allowCustomTags:c=!0,suggestionLimit:m=10,ariaLabel:u="Add tag"}){const[p,y]=a.useState(""),C=a.useMemo(()=>{if(!m)return[];const b=p.toLowerCase();return e.filter(S=>(!p.trim()||S.value.toLowerCase().includes(b))&&!l.includes(S.value)).slice(0,m)},[e,p,l,m]),h=a.useCallback(b=>{const S=b.trim();S&&!l.includes(S)&&s([...l,S]),y("")},[l,s]),_=a.useCallback(b=>{s(l.filter(S=>S!==b))},[l,s]),L=a.useCallback(b=>{s(b??[])},[s]),E=a.useCallback(b=>{y(b)},[]),v=a.useCallback(b=>{if(b.key==="Enter"&&p.trim()){if(C.length>0)return;b.preventDefault(),c&&h(p)}else b.key==="Backspace"&&!p&&l.length>0&&_(l[l.length-1])},[p,l,h,_,c,C]),R=a.useCallback(b=>{const S=b.clipboardData.getData("text");if(Ut.test(S)){b.preventDefault();const I=S.split(Ut).map(A=>A.trim()).filter(A=>A&&!l.includes(A));I.length>0&&s([...l,...I])}},[l,s]);return r.createElement("div",{className:P($t.textTags,o),style:i,"data-loading":t},n&&r.createElement("div",{className:W.errorMessage},"Error loading suggestions: ",n.message),r.createElement(D.Root,{multiple:!0,value:l,onValueChange:L,inputValue:p,onInputValueChange:E},l.length>0&&r.createElement("div",{className:W.tagContainer},l.map(b=>r.createElement(Da,{key:b,tag:b,onRemove:_}))),r.createElement(D.SearchInput,{className:$t.input,placeholder:l.length>0?"":d,onKeyDown:v,onPaste:R,"aria-label":u}),r.createElement(D.Portal,null,r.createElement(D.Positioner,null,r.createElement(D.Popup,null,C.length===0?c&&p.trim()?r.createElement(D.Empty,null,'Press Enter to add "',p,'"'):r.createElement(D.Empty,null,m?"No suggestions":"Type to add a tag"):C.map(({value:b,count:S})=>r.createElement(D.Item,{key:b,value:b},b," (",S.toLocaleString(),")")))))),t&&!!m&&r.createElement("div",{className:W.loadingMessage},"Loading suggestions..."))}const St=a.memo(Oa),me={timeline:"TimelineInput-module__timeline___43N82HCH",labels:"TimelineInput-module__labels___Co8bihV9",clearButton:"TimelineInput-module__clearButton___6TCIW46Z",brush:"TimelineInput-module__brush___DCoA1XWA",input:"TimelineInput-module__input___yAEKg6Mr"};function ja({startDate:e,endDate:t,onChange:n,className:l,minDate:s,maxDate:o}){const i=a.useCallback(p=>{const y=Ee(p.target.value);n(y,t)},[n,t]),d=a.useCallback(p=>{const y=Ee(p.target.value);n(e,y)},[n,e]),c=a.useCallback(()=>{n(void 0,void 0)},[n]),m=a.useMemo(()=>t??o,[t,o]),u=a.useMemo(()=>e??s,[e,s]);return r.createElement("div",{className:P(me.timeline,l)},r.createElement("div",{className:me.labels},r.createElement("span",null,qe(e,"—")),r.createElement("span",null,"to"),r.createElement("span",null,qe(t,"—")),(e||t)&&r.createElement(B,{type:"button",onClick:c,"aria-label":"Clear range",className:me.clearButton},"×")),r.createElement("div",{className:me.brush},r.createElement(re,{type:"date",className:me.input,value:G(e),onChange:i,min:s?G(s):void 0,max:m?G(m):void 0,"aria-label":"Start date"}),r.createElement("span",null,"—"),r.createElement(re,{type:"date",className:me.input,value:G(t),onChange:d,min:u?G(u):void 0,max:o?G(o):void 0,"aria-label":"End date"})))}const Fl=a.memo(ja);function ae(e,t,n,l){const s=a.useMemo(()=>({$select:{$count:"unordered"},$groupBy:{[t]:{$exact:{$includeNullValue:!0}}}}),[t]),o=a.useMemo(()=>({aggregate:s,where:l==null?void 0:l.where,objectSet:n}),[s,l==null?void 0:l.where,n]),{data:i,isLoading:d,error:c}=ce(e,o),m=a.useMemo(()=>{if(!i)return{data:[],maxCount:0};const u=[];let p=0;for(const C of i){const h=C.$group[t],_=C.$count??0;h==null?u.push({value:"",count:_,isNull:!0}):u.push({value:String(h),count:_}),p=Math.max(p,_)}return((l==null?void 0:l.sortBy)??"count")==="count"?u.sort((C,h)=>h.count-C.count||C.value.localeCompare(h.value)):u.sort((C,h)=>C.value.localeCompare(h.value)),l!=null&&l.limit&&u.length>l.limit?{data:u.slice(0,l.limit),maxCount:p}:{data:u,maxCount:p}},[i,t,l==null?void 0:l.limit,l==null?void 0:l.sortBy]);return{data:m.data,maxCount:m.maxCount,isLoading:d,error:c??null}}function It(e){return{$select:{$count:"unordered"},$groupBy:{[e]:"exact"}}}function Mt(){return{$select:{$count:"unordered"}}}function Rt(e){return{[e]:{$isNull:!0}}}function kt(e){if(e!==void 0)return String(e)}function le(e){return e===void 0?[]:e.map(t=>String(t))}function wa({objectSet:e,definition:t,filterState:n,onFilterStateChanged:l,searchQuery:s,className:o,style:i}){const d=a.useMemo(()=>e.pivotTo(t.linkName),[e,t.linkName]),c=d.$objectSetInternals.def,m=t.linkedPropertyKey,u=(n==null?void 0:n.type)==="linkedProperty"?n.linkedFilterState:void 0,p=(u==null?void 0:u.isExcluding)??!1,y=u==null?void 0:u.includeNull,C=a.useCallback(g=>{l({type:"linkedProperty",linkedFilterState:g})},[l]),h=a.useCallback(g=>{C({type:"SELECT",selectedValues:g,isExcluding:p})},[C,p]),_=a.useCallback(g=>{C({type:"SELECT",selectedValues:g!==void 0?[g]:[],isExcluding:p})},[C,p]),L=a.useCallback(g=>{C({type:"CONTAINS_TEXT",value:g})},[C]),E=a.useCallback(g=>{C({type:"TOGGLE",enabled:g})},[C]),v=a.useCallback((g,T)=>{C({type:"NUMBER_RANGE",minValue:g,maxValue:T,includeNull:y})},[C,y]),R=a.useCallback((g,T)=>{C({type:"DATE_RANGE",minValue:g,maxValue:T,includeNull:y})},[C,y]),b=a.useCallback(g=>{C({type:"EXACT_MATCH",values:g,isExcluding:p})},[C,p]),S=a.useCallback(g=>{C({type:"SELECT",selectedValues:g!==void 0?[g]:[],isExcluding:p})},[C,p]),I=a.useCallback(g=>{C({type:"SELECT",selectedValues:g})},[C]),A=a.useCallback((g,T)=>{C({type:"TIMELINE",startDate:g,endDate:T,isExcluding:p})},[C,p]),k=a.useCallback(g=>{(u==null?void 0:u.type)==="NUMBER_RANGE"?C({...u,includeNull:g}):(u==null?void 0:u.type)==="DATE_RANGE"?C({...u,includeNull:g}):C({type:"NUMBER_RANGE",minValue:void 0,maxValue:void 0,includeNull:g})},[C,u]),O=(()=>{switch(t.linkedFilterComponent){case"MULTI_SELECT":{const g=(u==null?void 0:u.type)==="SELECT"?le(u.selectedValues):[];return r.createElement(Va,{objectType:c,objectSet:d,propertyKey:m,selectedValues:g,onChange:h,showCount:t.showCount})}case"SINGLE_SELECT":{const g=(u==null?void 0:u.type)==="SELECT"?kt(u.selectedValues[0]):void 0;return r.createElement(Ga,{objectType:c,objectSet:d,propertyKey:m,selectedValue:g,onChange:_,showCount:t.showCount})}case"CONTAINS_TEXT":{const g=(u==null?void 0:u.type)==="CONTAINS_TEXT"?u.value:void 0;return r.createElement(Tt,{value:g,onChange:L,placeholder:`Search ${String(t.linkedPropertyKey)}...`})}case"TOGGLE":{const g=(u==null?void 0:u.type)==="TOGGLE"?u.enabled:!1;return r.createElement(bt,{enabled:g,onChange:E})}case"NUMBER_RANGE":{const g=(u==null?void 0:u.type)==="NUMBER_RANGE"?u:void 0;return r.createElement(Ha,{objectType:c,objectSet:d,propertyKey:m,minValue:g==null?void 0:g.minValue,maxValue:g==null?void 0:g.maxValue,includeNull:g==null?void 0:g.includeNull,onChange:v,onNullChange:k})}case"DATE_RANGE":{const g=(u==null?void 0:u.type)==="DATE_RANGE"?u:void 0;return r.createElement($a,{objectType:c,objectSet:d,propertyKey:m,minValue:g==null?void 0:g.minValue,maxValue:g==null?void 0:g.maxValue,includeNull:g==null?void 0:g.includeNull,onChange:R,onNullChange:k})}case"LISTOGRAM":{const g=(u==null?void 0:u.type)==="EXACT_MATCH"?u:void 0,T=g?le(g.values):[];return r.createElement(Ba,{objectType:c,objectSet:d,propertyKey:m,selectedValues:T,onChange:b,searchQuery:s,showCount:t.showCount})}case"TEXT_TAGS":{const g=(u==null?void 0:u.type)==="EXACT_MATCH"?u:void 0,T=g?le(g.values):[];return r.createElement(Wa,{objectType:c,objectSet:d,propertyKey:m,tags:T,onChange:b})}case"SINGLE_DATE":{const g=(u==null?void 0:u.type)==="SELECT"&&u.selectedValues[0]instanceof Date?u.selectedValues[0]:void 0;return r.createElement(xl,{selectedDate:g,onChange:S,showClearButton:!0})}case"MULTI_DATE":{const g=(u==null?void 0:u.type)==="SELECT"?u.selectedValues.filter(T=>T instanceof Date):[];return r.createElement(kl,{selectedDates:g,onChange:I,showClearAll:!0})}case"TIMELINE":{const g=(u==null?void 0:u.type)==="TIMELINE"?u:void 0;return r.createElement(Fl,{startDate:g==null?void 0:g.startDate,endDate:g==null?void 0:g.endDate,onChange:A})}default:return ue(t.linkedFilterComponent)}})();return r.createElement("div",{className:P(Ta.linkedProperty,o),style:i},O)}const Pa=a.memo(wa);function Va({objectType:e,objectSet:t,propertyKey:n,selectedValues:l,onChange:s,showCount:o}){const{data:i,isLoading:d,error:c}=ae(e,n,t);return r.createElement(At,{values:i,isLoading:d,error:c,selectedValues:l,onChange:s,showCounts:o})}function Ga({objectType:e,objectSet:t,propertyKey:n,selectedValue:l,onChange:s,showCount:o}){const{data:i,isLoading:d,error:c}=ae(e,n,t);return r.createElement(Lt,{values:i,isLoading:d,error:c,selectedValue:l,onChange:s,showCounts:o,ariaLabel:`Select ${n}`})}function Ba({objectType:e,objectSet:t,propertyKey:n,selectedValues:l,onChange:s,searchQuery:o,showCount:i}){const{data:d,maxCount:c,isLoading:m,error:u}=ae(e,n,t);return r.createElement(vt,{values:d,maxCount:c,isLoading:m,error:u,selectedValues:l,onChange:s,searchQuery:o,showCount:i})}function Wa({objectType:e,objectSet:t,propertyKey:n,tags:l,onChange:s}){const o=a.useMemo(()=>({limit:50}),[]),{data:i,isLoading:d,error:c}=ae(e,n,t,o);return r.createElement(St,{suggestions:i,isLoading:d,error:c,tags:l,onChange:s,suggestionLimit:10})}function Dl(e,t,n){const l=a.useMemo(()=>It(t),[t]),s=a.useMemo(()=>({aggregate:l,objectSet:n}),[l,n]),{data:o,isLoading:i}=ce(e,s),d=a.useMemo(()=>Mt(),[]),c=a.useMemo(()=>Rt(t),[t]),m=a.useMemo(()=>({where:c,aggregate:d,objectSet:n}),[c,d,n]),{data:u,isLoading:p}=ce(e,m),y=a.useMemo(()=>{if(!u)return 0;const C=u;return"$count"in C&&typeof C.$count=="number"?C.$count:0},[u]);return{aggregateData:o,histLoading:i,nullCount:y,nullLoading:p}}function Ha({objectType:e,objectSet:t,propertyKey:n,minValue:l,maxValue:s,includeNull:o,onChange:i,onNullChange:d}){const{aggregateData:c,histLoading:m,nullCount:u,nullLoading:p}=Dl(e,n,t),y=a.useMemo(()=>{if(!c)return[];const C=[];for(const h of c){const _=h.$group[n];if(_!=null){const L=parseFloat(String(_));isNaN(L)||C.push({value:L,count:h.$count??0})}}return C},[c,n]);return r.createElement(et,{nullCount:u,isLoading:p,includeNull:o,onIncludeNullChange:d},r.createElement(Nl,{valueCountPairs:y,isLoading:m,minValue:l,maxValue:s,onChange:i}))}function $a({objectType:e,objectSet:t,propertyKey:n,minValue:l,maxValue:s,includeNull:o,onChange:i,onNullChange:d}){const{aggregateData:c,histLoading:m,nullCount:u,nullLoading:p}=Dl(e,n,t),y=a.useMemo(()=>{if(!c)return[];const C=[];for(const h of c){const _=h.$group[n];if(_!=null){const L=new Date(String(_));isNaN(L.getTime())||C.push({value:L,count:h.$count??0})}}return C},[c,n]);return r.createElement(et,{nullCount:u,isLoading:p,includeNull:o,onIncludeNullChange:d},r.createElement(Rl,{valueCountPairs:y,isLoading:m,minValue:l,maxValue:s,onChange:i}))}const te={excludeDropdownContainer:"ExcludeDropdown-module__excludeDropdownContainer___16Eyv1BU",trigger:"ExcludeDropdown-module__trigger___346CrPQn",triggerLabel:"ExcludeDropdown-module__triggerLabel___OBppf5WL",positioner:"ExcludeDropdown-module__positioner___LVlsNlR4",popup:"ExcludeDropdown-module__popup___Svl-sCH5",menuItem:"ExcludeDropdown-module__menuItem___w59fRAgh",menuItemCheck:"ExcludeDropdown-module__menuItemCheck___kQ1o9GJk"};function Ua({isExcluding:e,onToggleExclude:t}){const n=e?"Excluding":"Keeping",l=a.useCallback(()=>{e&&t()},[e,t]),s=a.useCallback(()=>{e||t()},[e,t]);return r.createElement("div",{className:te.excludeDropdownContainer},r.createElement(Xl,null,r.createElement(Yl,{className:te.trigger,"aria-label":n,"data-excluding":e||void 0},e&&r.createElement(Wr,null),r.createElement("span",{className:te.triggerLabel},n),r.createElement(Pr,null)),r.createElement(Kl,null,r.createElement(zl,{className:te.positioner,sideOffset:4},r.createElement(Ql,{className:te.popup},r.createElement(Ot,{className:te.menuItem,onClick:l},r.createElement("span",{className:te.menuItemCheck},!e&&r.createElement(Gt,null)),"Keeping"),r.createElement(Ot,{className:te.menuItem,onClick:s},r.createElement("span",{className:te.menuItemCheck},e&&r.createElement(Gt,null)),"Excluding"))))))}const Xa=a.memo(Ua);function Ya(e){return e?e.type==="EXACT_MATCH"?e.values.length:e.type==="SELECT"?e.selectedValues.length:0:0}function Ka({excludeRowOpen:e,filterState:t,onFilterStateChanged:n,totalValueCount:l,onClearAll:s,children:o}){const i=a.useCallback(()=>{t&&n({...t,isExcluding:!t.isExcluding})},[t,n]),d=(t==null?void 0:t.isExcluding)??!1,c=a.useMemo(()=>Ya(t),[t]);return bl(t)?r.createElement(r.Fragment,null,r.createElement("div",{"data-exclude-row":!0,className:P(U.excludeRow,{[U.excludeRowVisible]:e??!1})},r.createElement(Xa,{isExcluding:d,onToggleExclude:i}),l!=null&&l>0&&r.createElement("span",{className:U.excludeCountLabel,title:"Approximate count of unique values"},c.toLocaleString()," of"," ",l.toLocaleString()," values"),s&&c>0&&r.createElement(B,{className:U.clearAllButton,onClick:s},"Clear all")),o):r.createElement(r.Fragment,null,o)}const Z=a.memo(Ka);function za({propertyKey:e,filterState:t,onFilterStateChanged:n}){const l=a.useMemo(()=>(t==null?void 0:t.type)==="CONTAINS_TEXT"?t.value:void 0,[t]),s=a.useCallback(o=>{n({type:"CONTAINS_TEXT",value:o})},[n]);return r.createElement(Tt,{value:l,onChange:s,placeholder:"Search..."})}const Qa=a.memo(za);function qa({objectType:e,objectSet:t,propertyKey:n,filterState:l,onFilterStateChanged:s,whereClause:o}){const i=(l==null?void 0:l.type)==="DATE_RANGE"?l:void 0,d=l==null?void 0:l.includeNull,c=a.useCallback(A=>{s({type:"DATE_RANGE",minValue:i==null?void 0:i.minValue,maxValue:i==null?void 0:i.maxValue,includeNull:A})},[s,i==null?void 0:i.minValue,i==null?void 0:i.maxValue]),m=a.useCallback((A,k)=>{s({type:"DATE_RANGE",minValue:A,maxValue:k,includeNull:d})},[s,d]),u=a.useMemo(()=>It(n),[n]),p=a.useMemo(()=>({aggregate:u,objectSet:t,where:o}),[u,t,o]),{data:y,isLoading:C}=ce(e,p),h=a.useMemo(()=>{if(!y)return[];const A=[];for(const k of y){const O=k.$group[n];if(O!=null){const g=new Date(String(O));isNaN(g.getTime())||A.push({value:g,count:k.$count??0})}}return A},[y,n]),_=a.useMemo(()=>Mt(),[]),L=a.useMemo(()=>({$and:[Rt(n),o]}),[n,o]),E=a.useMemo(()=>({where:L,aggregate:_,objectSet:t}),[L,_,t]),{data:v,isLoading:R,error:b}=ce(e,E),S=a.useMemo(()=>{if(!v)return 0;const A=v;return"$count"in A&&typeof A.$count=="number"?A.$count:0},[v]),I=C||R;return r.createElement(et,{nullCount:S,isLoading:I,error:b,includeNull:d,onIncludeNullChange:c},r.createElement(Rl,{valueCountPairs:h,isLoading:I,minValue:i==null?void 0:i.minValue,maxValue:i==null?void 0:i.maxValue,onChange:m}))}const Ja=a.memo(qa);function Za({objectType:e,objectSet:t,propertyKey:n,filterState:l,onFilterStateChanged:s,whereClause:o,colorMap:i,displayMode:d,showCount:c,maxVisibleItems:m,searchQuery:u,excludeRowOpen:p,renderValue:y}){const C=a.useMemo(()=>(l==null?void 0:l.type)==="EXACT_MATCH"?le(l.values):[],[l]),h=(l==null?void 0:l.isExcluding)??!1,_=a.useCallback(()=>{s({type:"EXACT_MATCH",values:[],isExcluding:h})},[s,h]),L=a.useCallback(A=>{s({type:"EXACT_MATCH",values:A,isExcluding:h})},[s,h]),E=d==="minimal"?"value":"count",v=a.useMemo(()=>({where:o,sortBy:E}),[o,E]),{data:R,maxCount:b,isLoading:S,error:I}=ae(e,n,t,v);return r.createElement(Z,{excludeRowOpen:p,filterState:l,onFilterStateChanged:s,totalValueCount:R.length,onClearAll:_},r.createElement(vt,{values:R,maxCount:b,isLoading:S,error:I,selectedValues:C,onChange:L,colorMap:i,displayMode:d,showCount:c,isExcluding:h,maxVisibleItems:m,searchQuery:u,renderValue:y}))}const es=a.memo(Za);function ts({filterState:e,onFilterStateChanged:t}){const n=a.useMemo(()=>(e==null?void 0:e.type)==="SELECT"?e.selectedValues.filter(o=>o instanceof Date):[],[e]),l=(e==null?void 0:e.isExcluding)??!1,s=a.useCallback(o=>{t({type:"SELECT",selectedValues:o,isExcluding:l})},[t,l]);return r.createElement(kl,{selectedDates:n,onChange:s})}const ns=a.memo(ts);function ls({objectType:e,objectSet:t,propertyKey:n,filterState:l,onFilterStateChanged:s,whereClause:o,excludeRowOpen:i,renderValue:d,showCount:c}){const m=a.useMemo(()=>(l==null?void 0:l.type)==="SELECT"?le(l.selectedValues):[],[l]),u=(l==null?void 0:l.isExcluding)??!1,p=a.useCallback(()=>{s({type:"SELECT",selectedValues:[],isExcluding:u})},[s,u]),y=a.useCallback(E=>{s({type:"SELECT",selectedValues:E,isExcluding:u})},[s,u]),C=a.useMemo(()=>({where:o}),[o]),{data:h,isLoading:_,error:L}=ae(e,n,t,C);return r.createElement(Z,{excludeRowOpen:i,filterState:l,onFilterStateChanged:s,totalValueCount:h.length,onClearAll:p},r.createElement(At,{values:h,isLoading:_,error:L,selectedValues:m,onChange:y,showCounts:c,ariaLabel:`Search ${n} values`,renderValue:d}))}const rs=a.memo(ls);function as({objectType:e,objectSet:t,propertyKey:n,filterState:l,onFilterStateChanged:s,whereClause:o}){const i=(l==null?void 0:l.type)==="NUMBER_RANGE"?l:void 0,d=l==null?void 0:l.includeNull,c=a.useCallback(A=>{s({type:"NUMBER_RANGE",minValue:i==null?void 0:i.minValue,maxValue:i==null?void 0:i.maxValue,includeNull:A})},[s,i==null?void 0:i.minValue,i==null?void 0:i.maxValue]),m=a.useCallback((A,k)=>{s({type:"NUMBER_RANGE",minValue:A,maxValue:k,includeNull:d})},[s,d]),u=a.useMemo(()=>It(n),[n]),p=a.useMemo(()=>({aggregate:u,objectSet:t,where:o}),[u,t,o]),{data:y,isLoading:C}=ce(e,p),h=a.useMemo(()=>{if(!y)return[];const A=[];for(const k of y){const O=k.$group[n];if(O!=null){const g=parseFloat(String(O));isNaN(g)||A.push({value:g,count:k.$count??0})}}return A},[y,n]),_=a.useMemo(()=>Mt(),[]),L=a.useMemo(()=>({$and:[Rt(n),o]}),[n,o]),E=a.useMemo(()=>({where:L,aggregate:_,objectSet:t}),[L,_,t]),{data:v,isLoading:R,error:b}=ce(e,E),S=a.useMemo(()=>{if(!v)return 0;const A=v;return"$count"in A&&typeof A.$count=="number"?A.$count:0},[v]),I=C||R;return r.createElement(et,{nullCount:S,isLoading:I,error:b,includeNull:d,onIncludeNullChange:c},r.createElement(Nl,{valueCountPairs:h,isLoading:I,minValue:i==null?void 0:i.minValue,maxValue:i==null?void 0:i.maxValue,onChange:m}))}const ss=a.memo(as);function os({filterState:e,onFilterStateChanged:t}){const n=a.useMemo(()=>(e==null?void 0:e.type)==="SELECT"&&e.selectedValues[0]instanceof Date?e.selectedValues[0]:void 0,[e]),l=(e==null?void 0:e.isExcluding)??!1,s=a.useCallback(o=>{t({type:"SELECT",selectedValues:o!==void 0?[o]:[],isExcluding:l})},[t,l]);return r.createElement(xl,{selectedDate:n,onChange:s})}const is=a.memo(os);function cs({objectType:e,objectSet:t,propertyKey:n,filterState:l,onFilterStateChanged:s,whereClause:o,excludeRowOpen:i,renderValue:d,showCount:c}){const m=a.useMemo(()=>(l==null?void 0:l.type)==="SELECT"?kt(l.selectedValues[0]):void 0,[l]),u=(l==null?void 0:l.isExcluding)??!1,p=a.useCallback(()=>{s({type:"SELECT",selectedValues:[],isExcluding:u})},[s,u]),y=a.useCallback(E=>{s({type:"SELECT",selectedValues:E!==void 0?[E]:[],isExcluding:u})},[s,u]),C=a.useMemo(()=>({where:o}),[o]),{data:h,isLoading:_,error:L}=ae(e,n,t,C);return r.createElement(Z,{excludeRowOpen:i,filterState:l,onFilterStateChanged:s,totalValueCount:h.length,onClearAll:p},r.createElement(Lt,{values:h,isLoading:_,error:L,selectedValue:m,onChange:y,showCounts:c,ariaLabel:`Select ${n}`,renderValue:d}))}const us=a.memo(cs);function ds({objectType:e,objectSet:t,propertyKey:n,filterState:l,onFilterStateChanged:s,whereClause:o,excludeRowOpen:i}){const d=a.useMemo(()=>(l==null?void 0:l.type)==="EXACT_MATCH"?le(l.values):[],[l]),c=(l==null?void 0:l.isExcluding)??!1,m=a.useCallback(()=>{s({type:"EXACT_MATCH",values:[],isExcluding:c})},[s,c]),u=a.useCallback(_=>{s({type:"EXACT_MATCH",values:_,isExcluding:c})},[s,c]),p=a.useMemo(()=>({where:o}),[o]),{data:y,isLoading:C,error:h}=ae(e,n,t,p);return r.createElement(Z,{excludeRowOpen:i,filterState:l,onFilterStateChanged:s,totalValueCount:y.length,onClearAll:m},r.createElement(St,{suggestions:y,isLoading:C,error:h,tags:d,onChange:u}))}const ms=a.memo(ds);function ps({filterState:e,onFilterStateChanged:t}){const{startDate:n,endDate:l}=a.useMemo(()=>(e==null?void 0:e.type)==="TIMELINE"?{startDate:e.startDate,endDate:e.endDate}:{startDate:void 0,endDate:void 0},[e]),s=(e==null?void 0:e.isExcluding)??!1,o=a.useCallback((i,d)=>{t({type:"TIMELINE",startDate:i,endDate:d,isExcluding:s})},[t,s]);return r.createElement(Fl,{startDate:n,endDate:l,onChange:o})}const fs=a.memo(ps);function Cs({filterState:e,onFilterStateChanged:t}){const n=(e==null?void 0:e.type)==="TOGGLE"?e.enabled:!1,l=a.useCallback(s=>{t({type:"TOGGLE",enabled:s})},[t]);return r.createElement(bt,{enabled:n,onChange:l})}const hs=a.memo(Cs);function gs({objectType:e,objectSet:t,definition:n,filterState:l,onFilterStateChanged:s,whereClause:o,searchQuery:i,excludeRowOpen:d}){var c,m;switch(n.filterComponent){case"CONTAINS_TEXT":return r.createElement(Z,{excludeRowOpen:d,filterState:l,onFilterStateChanged:s},r.createElement(Qa,{propertyKey:n.key,filterState:l,onFilterStateChanged:s}));case"TOGGLE":return r.createElement(hs,{filterState:l,onFilterStateChanged:s});case"NUMBER_RANGE":return r.createElement(ss,{objectType:e,objectSet:t,propertyKey:n.key,filterState:l,onFilterStateChanged:s,whereClause:o});case"DATE_RANGE":return r.createElement(Ja,{objectType:e,objectSet:t,propertyKey:n.key,filterState:l,onFilterStateChanged:s,whereClause:o});case"SINGLE_SELECT":return r.createElement(us,{objectType:e,objectSet:t,propertyKey:n.key,filterState:l,onFilterStateChanged:s,whereClause:o,excludeRowOpen:d,renderValue:n.renderValue,showCount:n.showCount});case"MULTI_SELECT":return r.createElement(rs,{objectType:e,objectSet:t,propertyKey:n.key,filterState:l,onFilterStateChanged:s,whereClause:o,excludeRowOpen:d,renderValue:n.renderValue,showCount:n.showCount});case"SINGLE_DATE":return r.createElement(is,{filterState:l,onFilterStateChanged:s});case"MULTI_DATE":return r.createElement(ns,{filterState:l,onFilterStateChanged:s});case"LISTOGRAM":return r.createElement(es,{objectType:e,objectSet:t,propertyKey:n.key,filterState:l,onFilterStateChanged:s,whereClause:o,colorMap:n.colorMap,displayMode:(c=n.listogramConfig)==null?void 0:c.displayMode,showCount:n.showCount,maxVisibleItems:((m=n.listogramConfig)==null?void 0:m.maxVisibleItems)??5,searchQuery:i,excludeRowOpen:d,renderValue:n.renderValue});case"TEXT_TAGS":return r.createElement(ms,{objectType:e,objectSet:t,propertyKey:n.key,filterState:l,onFilterStateChanged:s,whereClause:o,excludeRowOpen:d});case"TIMELINE":return r.createElement(Z,{excludeRowOpen:d,filterState:l,onFilterStateChanged:s},r.createElement(fs,{filterState:l,onFilterStateChanged:s}));default:return r.createElement("div",{"data-unsupported":"true"},"Unsupported filter component: ",n.filterComponent)}}const ys=a.memo(gs);function Es(e,t,n){const l=a.useMemo(()=>(e==null?void 0:e.type)==="EXACT_MATCH"?le(e.values):[],[e]),s=a.useCallback(()=>{t({type:"EXACT_MATCH",values:[],isExcluding:n})},[t,n]),o=a.useCallback(i=>{t({type:"EXACT_MATCH",values:i,isExcluding:n})},[t,n]);return{selectedValues:l,handleClearAll:s,handleChange:o}}function _s(e,t,n){const l=a.useMemo(()=>(e==null?void 0:e.type)==="SELECT"?kt(e.selectedValues[0]):void 0,[e]),s=a.useMemo(()=>(e==null?void 0:e.type)==="SELECT"?le(e.selectedValues):[],[e]),o=a.useCallback(()=>{t({type:"SELECT",selectedValues:[],isExcluding:n})},[t,n]),i=a.useCallback(c=>{t({type:"SELECT",selectedValues:c!==void 0?[c]:[],isExcluding:n})},[t,n]),d=a.useCallback(c=>{t({type:"SELECT",selectedValues:c,isExcluding:n})},[t,n]);return{selectedValue:l,selectedValues:s,handleClearAll:o,handleSingleChange:i,handleMultiChange:d}}function Ts({definition:e,filterState:t,onFilterStateChanged:n,searchQuery:l,excludeRowOpen:s}){var m,u;const o=a.useMemo(()=>e.values.map(p=>({value:p,count:0})),[e.values]),i=(t==null?void 0:t.isExcluding)??!1,d=Es(t,n,i),c=_s(t,n,i);switch(e.filterComponent){case"LISTOGRAM":return r.createElement(Z,{excludeRowOpen:s,filterState:t,onFilterStateChanged:n,totalValueCount:o.length,onClearAll:d.handleClearAll},r.createElement(vt,{values:o,maxCount:0,isLoading:!1,error:null,selectedValues:d.selectedValues,onChange:d.handleChange,colorMap:e.colorMap,displayMode:(m=e.listogramConfig)==null?void 0:m.displayMode,showCount:e.showCount,isExcluding:i,maxVisibleItems:((u=e.listogramConfig)==null?void 0:u.maxVisibleItems)??5,searchQuery:l,renderValue:e.renderValue}));case"SINGLE_SELECT":return r.createElement(Z,{excludeRowOpen:s,filterState:t,onFilterStateChanged:n,totalValueCount:o.length,onClearAll:c.handleClearAll},r.createElement(Lt,{values:o,isLoading:!1,error:null,selectedValue:c.selectedValue,onChange:c.handleSingleChange,showCounts:e.showCount,ariaLabel:`Select ${e.key}`,renderValue:e.renderValue}));case"MULTI_SELECT":return r.createElement(Z,{excludeRowOpen:s,filterState:t,onFilterStateChanged:n,totalValueCount:o.length,onClearAll:c.handleClearAll},r.createElement(At,{values:o,isLoading:!1,error:null,selectedValues:c.selectedValues,onChange:c.handleMultiChange,showCounts:e.showCount,ariaLabel:`Search ${e.key} values`,renderValue:e.renderValue}));case"TEXT_TAGS":return r.createElement(Z,{excludeRowOpen:s,filterState:t,onFilterStateChanged:n,totalValueCount:o.length,onClearAll:d.handleClearAll},r.createElement(St,{suggestions:o,isLoading:!1,error:null,tags:d.selectedValues,onChange:d.handleChange}));default:return ue(e.filterComponent)}}const bs=a.memo(Ts);function vs({objectType:e,objectSet:t,definition:n,filterState:l,onFilterStateChanged:s,whereClause:o,searchQuery:i,excludeRowOpen:d}){return r.createElement(Ls,{objectType:e,objectSet:t,definition:n,filterState:l,onFilterStateChanged:s,whereClause:o,searchQuery:i,excludeRowOpen:d})}const As=a.memo(vs);function Ls({objectType:e,objectSet:t,definition:n,filterState:l,onFilterStateChanged:s,whereClause:o,searchQuery:i,excludeRowOpen:d}){switch(n.type){case"HAS_LINK":return r.createElement(Ss,{filterState:l,onFilterStateChanged:s});case"LINKED_PROPERTY":return t==null?r.createElement(r.Fragment,null):r.createElement(Pa,{objectSet:t,definition:n,filterState:l,onFilterStateChanged:s,searchQuery:i});case"KEYWORD_SEARCH":return r.createElement(Is,{filterState:l,onFilterStateChanged:s,placeholder:n.label??"Search..."});case"CUSTOM":{if(!n.renderInput)return r.createElement("div",{"data-unsupported":"true"},"Custom filter missing renderInput");const c=(l==null?void 0:l.type)==="custom"?l:n.filterState;return r.createElement(r.Fragment,null,n.renderInput({objectType:e,objectSet:t,filterState:c,onFilterStateChanged:m=>s(m)}))}case"PROPERTY":return r.createElement(ys,{objectType:e,objectSet:t,definition:n,filterState:l,onFilterStateChanged:s,whereClause:o,searchQuery:i,excludeRowOpen:d});case"STATIC_VALUES":return r.createElement(bs,{definition:n,filterState:l,onFilterStateChanged:s,searchQuery:i,excludeRowOpen:d});default:return r.createElement("div",{"data-unsupported":"true"},"Unsupported filter type")}}const Ss=a.memo(function({filterState:e,onFilterStateChanged:t}){const n=(e==null?void 0:e.type)==="hasLink"?e.hasLink:!1,l=a.useCallback(s=>{t({type:"hasLink",hasLink:s})},[t]);return r.createElement(bt,{enabled:n,onChange:l})}),Is=a.memo(function({filterState:e,onFilterStateChanged:t,placeholder:n}){const l=(e==null?void 0:e.type)==="keywordSearch"?e.searchTerm:void 0,s=(e==null?void 0:e.type)==="keywordSearch"?e.operator:"AND",o=a.useCallback(i=>{t({type:"keywordSearch",searchTerm:i??"",operator:s})},[t,s]);return r.createElement(Tt,{value:l,onChange:o,placeholder:n})});function ie(e){switch(e.type){case"PROPERTY":return e.id??e.key;case"HAS_LINK":return e.id??`hasLink:${e.linkName}`;case"LINKED_PROPERTY":return e.id??`linkedProperty:${e.linkName}:${e.linkedPropertyKey}`;case"KEYWORD_SEARCH":return e.id??`keywordSearch-${Array.isArray(e.properties)?e.properties.join("-"):"all"}`;case"CUSTOM":return e.id??e.key;case"STATIC_VALUES":return e.id??e.key;default:return ue(e)}}function Ms(e){return typeof e=="object"&&e!=null&&"__compound"in e}const Rs={byte:{min:-128,max:127},short:{min:-32768,max:32767},integer:{min:-2147483648,max:2147483647},long:{min:Number.MIN_SAFE_INTEGER,max:Number.MAX_SAFE_INTEGER}};function Xt(e,t){if(t===void 0)return e;const n=Rs[t];return n===void 0?e:Math.max(n.min,Math.min(n.max,e))}function ye(e,t){return t==="datetime"?G(e):e.toISOString()}function ks(e,t){switch(e.type){case"CONTAINS_TEXT":return e.value?{$containsAnyTerm:e.value}:void 0;case"TOGGLE":return e.enabled;case"DATE_RANGE":{const n=[];return e.minValue!==void 0&&n.push({$gte:ye(e.minValue,t)}),e.maxValue!==void 0&&n.push({$lte:ye(e.maxValue,t)}),n.length===0&&!e.includeNull?void 0:n.length===0&&e.includeNull?{$isNull:!0}:n.length===1&&!e.includeNull?n[0]:{__compound:!0,conditions:n,includeNull:e.includeNull??!1}}case"NUMBER_RANGE":{const n=[];return e.minValue!==void 0&&n.push({$gte:Xt(e.minValue,t)}),e.maxValue!==void 0&&n.push({$lte:Xt(e.maxValue,t)}),n.length===0&&!e.includeNull?void 0:n.length===0&&e.includeNull?{$isNull:!0}:n.length===1&&!e.includeNull?n[0]:{__compound:!0,conditions:n,includeNull:e.includeNull??!1}}case"EXACT_MATCH":return zt(e.values);case"SELECT":{if(e.selectedValues.length===0)return;const n=e.selectedValues.map(l=>l instanceof Date?ye(l,t):l);return zt(n)}case"TIMELINE":{const n=[];return e.startDate!==void 0&&n.push({$gte:ye(e.startDate,t)}),e.endDate!==void 0&&n.push({$lte:ye(e.endDate,t)}),n.length===0?void 0:n.length===1?n[0]:{__compound:!0,conditions:n,includeNull:!1}}case"hasLink":case"linkedProperty":case"keywordSearch":case"custom":return;default:return ue(e)}}function Yt(e,t,n){const l=ks(t,n);if(l===void 0)return;const s="isExcluding"in t&&t.isExcluding;if(Ms(l)){const o=l.conditions.map(d=>({[e]:d}));let i=o.length===1?o[0]:{$and:o};return l.includeNull&&(i={$or:[i,{[e]:{$isNull:!0}}]}),s?{$not:i}:i}else{const o={[e]:l};return s?{$not:o}:o}}function Kt(e,t,n,l){var o;if(!e||e.length===0)return{};const s=[];for(const i of e){const d=ie(i);if(d===l)continue;const c=t.get(d);if(c)switch(i.type){case"PROPERTY":{const m=(o=n==null?void 0:n.get(i.key))==null?void 0:o.type,u=Yt(i.key,c,m);u!==void 0&&s.push(u);break}case"HAS_LINK":{if(c.type!=="hasLink"||!c.hasLink)break;s.push({[i.linkName]:{$isNotNull:!0}});break}case"LINKED_PROPERTY":break;case"KEYWORD_SEARCH":{if(c.type!=="keywordSearch"||!c.searchTerm)break;const m=c.searchTerm.trim();if(!m)break;const u=i.properties;let p;if(u==="all")if(n&&n.size>0){p=[];for(const[_,L]of n)L.type==="string"&&!L.multiplicity&&p.push(_)}else break;else p=u;if(p.length===0)break;const y=c.operator==="AND"?"$containsAllTerms":"$containsAnyTerm",C=p.map(_=>({[_]:{[y]:m}}));let h;C.length===1?h=C[0]:h={$or:C},s.push(c.isExcluding?{$not:h}:h);break}case"CUSTOM":{if(c.type!=="custom")break;const m=i.toWhereClause(c);m&&Object.keys(m).length>0&&s.push(m);break}case"STATIC_VALUES":{if(i.toWhereClause){const m=i.toWhereClause(c);m&&Object.keys(m).length>0&&s.push(m)}else{const m=Yt(i.key,c);m!==void 0&&s.push(m)}break}default:ue(i)}}return s.length===0?{}:s.length===1?s[0]:{$and:s}}function zt(e){if(e.length===0)return;const t=e.filter(s=>s!==""),n=t.length<e.length,l=t.length===0?void 0:t.length===1?t[0]:{$in:t};return n?l===void 0?{$isNull:!0}:{__compound:!0,conditions:[l],includeNull:!0}:l}function Qt(e){const t=new Map;if(!e)return t;for(const n of e){const l=ie(n);switch(n.type){case"PROPERTY":{const s=n.filterState;s&&t.set(l,s);break}case"HAS_LINK":case"KEYWORD_SEARCH":case"CUSTOM":{const s=n.defaultFilterState;s&&t.set(l,s);break}case"STATIC_VALUES":{const s=n.filterState;s&&t.set(l,s);break}case"LINKED_PROPERTY":{const s=n.defaultLinkedFilterState;s&&t.set(l,{type:"linkedProperty",linkedFilterState:s});break}default:ue(n)}}return t}function Ns(e){const{objectType:t,filterDefinitions:n,onFilterStateChanged:l,onFilterClauseChanged:s,initialFilterStates:o}=e,{metadata:i}=xr(t),d=a.useRef(s);d.current=s;const c=a.useMemo(()=>{const E=new Map;if(i!=null&&i.properties)for(const[v,R]of Object.entries(i.properties))typeof R.type=="string"&&E.set(v,{type:R.type,multiplicity:R.multiplicity===!0});return E},[i==null?void 0:i.properties]),[m,u]=a.useState(()=>{const E=Qt(n);if(o)for(const[v,R]of o)E.set(v,R);return E}),p=a.useCallback((E,v)=>{u(b=>{const S=new Map(b);return S.set(E,v),S});const R=n==null?void 0:n.find(b=>ie(b)===E);R&&(l==null||l(R,v))},[n,l]),y=a.useCallback(E=>{u(v=>{const R=new Map(v);return R.delete(E),R})},[]),C=a.useMemo(()=>Kt(n,m,c),[n,m,c]);a.useEffect(()=>{var E;(E=d.current)==null||E.call(d,C)},[C]);const h=a.useMemo(()=>{const E=new Map;if(!n)return E;for(const v of n){const R=ie(v);E.set(R,Kt(n,m,c,R))}return E},[n,m,c]),_=a.useMemo(()=>{let E=0;for(const v of m.values())vl(v)&&E++;return E},[m]),L=a.useCallback(()=>{u(Qt(n))},[n]);return a.useMemo(()=>({filterStates:m,setFilterState:p,clearFilterState:y,whereClause:C,perFilterWhereClauses:h,activeFilterCount:_,reset:L}),[m,p,y,C,h,_,L])}function xs(e,t,n){const[l,s]=a.useState(()=>new Map),{visibleDefinitions:o,hiddenDefinitions:i}=a.useMemo(()=>{if(e==null)return{visibleDefinitions:[],hiddenDefinitions:[]};const p=[],y=[];for(const C of e){const h=t(C);l.get(h)??n(C)?p.push(C):y.push(C)}return{visibleDefinitions:p,hiddenDefinitions:y}},[e,t,n,l]),d=a.useCallback(p=>{s(y=>{const C=new Map(y);return C.set(p,!0),C})},[]),c=a.useCallback(p=>{s(y=>{const C=new Map(y);return C.set(p,!1),C})},[]),m=l.size>0,u=a.useCallback(()=>{s(new Map)},[]);return{visibleDefinitions:o,hiddenDefinitions:i,showFilter:d,hideFilter:c,hasVisibilityChanges:m,resetVisibility:u}}function qt(e){if("label"in e&&e.label)return e.label;switch(e.type){case"PROPERTY":return e.key;case"HAS_LINK":case"LINKED_PROPERTY":return e.linkName;case"KEYWORD_SEARCH":return"Search";case"CUSTOM":return e.key;case"STATIC_VALUES":return e.key;default:return ue(e)}}function Fs(e){const{objectType:t,objectSet:n,title:l,titleIcon:s,collapsed:o,onCollapsedChange:i,filterDefinitions:d,addFilterMode:c="uncontrolled",showResetButton:m=!1,onReset:u,showActiveFilterCount:p=!1,className:y,enableSorting:C,onFilterAdded:h,onFilterRemoved:_,renderAddFilterButton:L}=e,{filterStates:E,setFilterState:v,clearFilterState:R,perFilterWhereClauses:b,activeFilterCount:S,reset:I}=Ns(e),A=c==="uncontrolled",k=a.useCallback(H=>H.isVisible!==!1,[]),{visibleDefinitions:O,hiddenDefinitions:g,showFilter:T,hideFilter:M,hasVisibilityChanges:N,resetVisibility:x}=xs(d,ie,k),$=a.useCallback(()=>{I(),x(),u==null||u()},[I,x,u]),Q=a.useMemo(()=>{if(d!=null)return d.filter(H=>H.isVisible!==!1)},[d]),q=A?O:Q,be=a.useCallback(H=>{R(H),A&&M(H),_==null||_(H)},[R,A,M,_]),oe=a.useCallback(H=>{T(H),h==null||h(H,d??[])},[T,h,d]),pe=a.useMemo(()=>g.map(H=>({key:ie(H),label:qt(H)})),[g]),ve=a.useMemo(()=>A?g.length===0?void 0:()=>r.createElement(sa,{hiddenDefinitions:pe,onShowFilter:oe,renderTrigger:L}):L,[A,g.length,pe,oe,L]),X=A?be:_,Ae=a.useCallback(({definition:H,filterKey:lt,filterState:rt,onFilterStateChanged:at,searchQuery:Le,excludeRowOpen:st})=>r.createElement(As,{objectType:t,objectSet:n,definition:H,filterState:rt,onFilterStateChanged:at,whereClause:b.get(lt)??{},searchQuery:Le,excludeRowOpen:st}),[t,n,b]);return r.createElement(la,{title:l,titleIcon:s,collapsed:o,onCollapsedChange:i,filterDefinitions:q,filterStates:E,onFilterStateChanged:v,renderInput:Ae,getFilterKey:ie,getFilterLabel:qt,activeFilterCount:S,onReset:$,showResetButton:m,showActiveFilterCount:p,hasVisibilityChanges:N,enableSorting:C,onFilterRemoved:X,className:y,renderAddFilterButton:ve})}const j=Or(Fs,"FilterList"),{useArgs:Ol}=__STORYBOOK_MODULE_PREVIEW_API__,tt={type:"PROPERTY",id:"department",key:"department",label:"Department",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},Nt={type:"PROPERTY",id:"team",key:"team",label:"Team",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},jl={type:"PROPERTY",id:"fullName",key:"fullName",label:"Full Name",filterComponent:"CONTAINS_TEXT",filterState:{type:"CONTAINS_TEXT"}},wl={type:"PROPERTY",id:"firstFullTimeStartDate",key:"firstFullTimeStartDate",label:"Start Date",filterComponent:"DATE_RANGE",filterState:{type:"DATE_RANGE"}},Pl={type:"PROPERTY",id:"employeeNumber",key:"employeeNumber",label:"Employee Number",filterComponent:"NUMBER_RANGE",filterState:{type:"NUMBER_RANGE"}},Te={type:"PROPERTY",id:"locationCity",key:"locationCity",label:"Location City",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},Ds={type:"PROPERTY",id:"jobTitle-multi",key:"jobTitle",label:"Job Title",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}},z=[tt,Nt,jl,wl,Ds,Pl,Te],w={width:320,height:600},se={display:"flex",gap:16},de={flex:1},nt={marginTop:8,padding:12,background:"#f5f5f5",borderRadius:4,fontSize:12,overflow:"auto",maxHeight:560},xt={display:"flex",gap:16,height:600},Ft={width:320,flexShrink:0},Vl=f.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:f.jsx("path",{d:"M1 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1.5a1 1 0 0 1-.293.707L10 8.914V13a1 1 0 0 1-.553.894l-2 1A1 1 0 0 1 6 14v-5.086L1.293 4.207A1 1 0 0 1 1 3.5V2z"})}),Go={title:"Experimental/FilterList",tags:["experimental"],component:j,args:{title:"Filters",enableSorting:!1,showResetButton:!1,showActiveFilterCount:!1,collapsed:!1},parameters:{msw:{handlers:[...$l.handlers]},controls:{expanded:!0}},argTypes:{objectType:{description:"The object type definition for the objects being filtered",control:!1},objectSet:{description:"Optional object set to scope aggregation queries",control:!1},filterDefinitions:{description:"Array of filter definitions. If not provided, all filterable properties are auto-discovered.",control:!1},title:{description:"Title displayed in the filter list header",control:"text"},titleIcon:{description:"Icon displayed next to the title",control:!1},filterClause:{description:"The current where clause. If provided, the filter clause is controlled.",control:!1},onFilterClauseChanged:{description:"Called when the filter clause changes. Required in controlled mode.",control:!1,table:{category:"Events"}},onFilterStateChanged:{description:"Called when an individual filter's state changes",control:!1,table:{category:"Events"}},enableSorting:{description:"Enable drag-and-drop reordering of filters",control:"boolean",table:{defaultValue:{summary:"false"}}},collapsed:{description:"Whether the filter list panel is collapsed",control:"boolean"},onCollapsedChange:{description:"Called when the collapsed state changes",control:!1,table:{category:"Events"}},showResetButton:{description:"Show reset filters button in header",control:"boolean",table:{defaultValue:{summary:"false"}}},onReset:{description:"Called when the reset button is clicked",control:!1,table:{category:"Events"}},showActiveFilterCount:{description:"Show count of active filters in header",control:"boolean",table:{defaultValue:{summary:"false"}}},onFilterAdded:{description:"Called when a filter is added. If provided, users can add filters.",control:!1,table:{category:"Events"}},onFilterRemoved:{description:"Called when a filter is removed. If provided, users can remove filters.",control:!1,table:{category:"Events"}},addFilterMode:{description:'Controls how filter add/remove is managed. "uncontrolled" manages visibility internally; "controlled" leaves it to the consumer.',control:"select",options:["controlled","uncontrolled"],table:{category:"Advanced",defaultValue:{summary:'"uncontrolled"'}}},renderAddFilterButton:{description:"Custom render function for the add filter button.",control:!1,table:{category:"Advanced"}},initialFilterStates:{description:"Initial filter states for hydrating from external storage. Merged over definition defaults on mount.",control:!1,table:{category:"Advanced"}},className:{description:"Additional CSS class name",control:"text"}}},Re={parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:({objectType:e,objectSet:t,...n})=>{const l=a.useMemo(()=>[tt,Te],[]);return f.jsx("div",{style:w,children:f.jsx(j,{objectType:F,filterDefinitions:l,...n})})}};function Os(e){const t=Cl(),n=a.useMemo(()=>t(F).where({department:"Marketing"}),[t]),l=a.useMemo(()=>[Nt,Te],[]);return f.jsx("div",{style:w,children:f.jsx(j,{objectType:F,objectSet:n,filterDefinitions:l,...e})})}const ke={parameters:{docs:{description:{story:"Pass an `objectSet` prop to scope filter aggregations to a subset of objects. Here the object set is filtered to Marketing department employees, so the listogram counts reflect only that subset."},source:{code:`const client = useOsdkClient();
const objectSet = client(Employee).where({ department: "Marketing" });

<FilterList
  objectType={Employee}
  objectSet={objectSet}
  filterDefinitions={[
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:e=>f.jsx(Os,{...e})};function js(e){const t=a.useMemo(()=>[tt,Nt,{...jl,isVisible:!1},{...wl,isVisible:!1},{...Pl,isVisible:!1},{...Te,isVisible:!1}],[]);return f.jsx("div",{style:w,children:f.jsx(j,{objectType:F,filterDefinitions:t,addFilterMode:"uncontrolled",...e})})}const Ne={args:{showResetButton:!0},parameters:{docs:{source:{code:`const filterDefinitions = [
  { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  { type: "PROPERTY", key: "fullName", label: "Full Name", filterComponent: "CONTAINS_TEXT", filterState: { type: "CONTAINS_TEXT" }, isVisible: false },
  { type: "PROPERTY", key: "firstFullTimeStartDate", label: "Start Date", filterComponent: "DATE_RANGE", filterState: { type: "DATE_RANGE" }, isVisible: false },
  { type: "PROPERTY", key: "employeeNumber", label: "Employee Number", filterComponent: "NUMBER_RANGE", filterState: { type: "NUMBER_RANGE" }, isVisible: false },
  { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] }, isVisible: false },
];

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  addFilterMode="uncontrolled"
  showResetButton={true}
/>`}}},render:e=>f.jsx(js,{...e})};function ws(e){const[t,n]=a.useState(void 0);return f.jsxs("div",{style:se,children:[f.jsx("div",{style:w,children:f.jsx(j,{objectType:F,filterDefinitions:z,filterClause:t,onFilterClauseChanged:n,...e})}),f.jsxs("div",{style:de,children:[f.jsx("strong",{children:"Filter Clause (JSON):"}),f.jsx("pre",{style:nt,children:t?JSON.stringify(t,null,2):"(no active filters)"})]})]})}const xe={parameters:{docs:{description:{story:"All filter component types with a controlled where clause. Hover filter items to reveal search and exclude actions."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>`}}},render:e=>f.jsx(ws,{...e})},Fe={args:{title:"Employee Filters"},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  titleIcon={<svg>...</svg>}
/>`}}},render:({objectType:e,objectSet:t,...n})=>f.jsx("div",{style:w,children:f.jsx(j,{objectType:F,filterDefinitions:z,titleIcon:Vl,...n})})};function Ps(e){const t=a.useCallback(()=>{console.log("Reset clicked")},[]);return f.jsx("div",{style:w,children:f.jsx(j,{objectType:F,filterDefinitions:z,onReset:t,...e})})}const De={args:{showResetButton:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showResetButton={true}
  onReset={() => console.log("Reset clicked")}
/>`}}},render:e=>f.jsx(Ps,{...e})},Oe={args:{showActiveFilterCount:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showActiveFilterCount={true}
/>`}}},render:({objectType:e,objectSet:t,...n})=>f.jsx("div",{style:w,children:f.jsx(j,{objectType:F,filterDefinitions:z,...n})})},je={args:{enableSorting:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  enableSorting={true}
/>`}}},render:({objectType:e,objectSet:t,...n})=>f.jsx("div",{style:w,children:f.jsx(j,{objectType:F,filterDefinitions:z,...n})})};function Vs(e){return f.jsx("div",{style:w,children:f.jsx(j,{objectType:F,filterDefinitions:z,...e})})}const we={args:{title:"Employee Filters",showActiveFilterCount:!0},parameters:{docs:{description:{story:"Click the collapse button to minimize the filter panel. Active filter count is shown in the collapsed state."},source:{code:`const [collapsed, setCollapsed] = useState(false);

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  collapsed={collapsed}
  onCollapsedChange={setCollapsed}
  showActiveFilterCount={true}
/>`}}},render:e=>{const[,t]=Ol(),n=a.useCallback(l=>t({collapsed:l}),[t]);return f.jsx(Vs,{...e,onCollapsedChange:n})}},Pe={parameters:{docs:{source:{code:`const filterDefinitions = [
  { type: "KEYWORD_SEARCH", properties: ["fullName", "department", "jobTitle", "locationCity"], label: "Search" },
  { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:({objectType:e,objectSet:t,...n})=>{const l=a.useMemo(()=>[{type:"KEYWORD_SEARCH",properties:["fullName","department","jobTitle","locationCity"],label:"Search"},tt,Te],[]);return f.jsx("div",{style:w,children:f.jsx(j,{objectType:F,filterDefinitions:l,...n})})}};function Gs(e){const t=a.useMemo(()=>[{type:"PROPERTY",id:"department-no-color",key:"department",label:"Department (default colors)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]),n=a.useMemo(()=>[{type:"PROPERTY",id:"department-color",key:"department",label:"Department (custom colors)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},colorMap:{Marketing:"#e74c3c",Operations:"#2ecc71",Finance:"#3498db",Product:"#f39c12"}}],[]);return f.jsxs("div",{style:se,children:[f.jsx("div",{style:w,children:f.jsx(j,{objectType:F,filterDefinitions:t,...e})}),f.jsx("div",{style:w,children:f.jsx(j,{objectType:F,filterDefinitions:n,...e})})]})}const Ve={parameters:{docs:{source:{code:`// Without colorMap: all bars use the default theme color
// With colorMap: each value gets a distinct color for its bar

const filterDefinitions = [
  {
    type: "PROPERTY",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
    colorMap: {
      Marketing: "#e74c3c",
      Operations: "#2ecc71",
      Finance: "#3498db",
      Product: "#f39c12",
    },
  },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>f.jsx(Gs,{...e})},Bs={Marketing:"Marketing Dept.",Operations:"Ops Team",Finance:"Finance & Accounting",Product:"Product Group"};function Ws(e){const t=a.useMemo(()=>[{type:"PROPERTY",id:"department-default",key:"department",label:"Department (default)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]),n=a.useMemo(()=>[{type:"PROPERTY",id:"department-custom",key:"department",label:"Department (custom render)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},renderValue:l=>Bs[l]??l},{type:"PROPERTY",id:"team-custom",key:"team",label:"Team (custom render)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},renderValue:l=>l.toUpperCase()}],[]);return f.jsxs("div",{style:se,children:[f.jsx("div",{style:w,children:f.jsx(j,{objectType:F,filterDefinitions:t,...e})}),f.jsx("div",{style:w,children:f.jsx(j,{objectType:F,filterDefinitions:n,...e})})]})}const Ge={parameters:{docs:{description:{story:"Use `renderValue` to customize how filter values are displayed and searched. The returned string replaces the raw value for display and search matching. Works with LISTOGRAM, MULTI_SELECT, and SINGLE_SELECT components."},source:{code:`const DEPARTMENT_LABELS = {
  Marketing: "Marketing Dept.",
  Operations: "Ops Team",
  Finance: "Finance & Accounting",
  Product: "Product Group",
};

const filterDefinitions = [
  {
    type: "PROPERTY",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
    renderValue: (value) => DEPARTMENT_LABELS[value] ?? value,
  },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>f.jsx(Ws,{...e})};function Hs(e){const t=a.useMemo(()=>[{type:"PROPERTY",id:"dept-full",key:"department",label:"full: label + bar + count",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"full"}}],[]),n=a.useMemo(()=>[{type:"PROPERTY",id:"dept-count",key:"department",label:"count: label + count (no bar)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"count"}}],[]),l=a.useMemo(()=>[{type:"PROPERTY",id:"dept-minimal",key:"department",label:"minimal: label only",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"}}],[]);return f.jsxs("div",{style:se,children:[f.jsx("div",{style:w,children:f.jsx(j,{objectType:F,filterDefinitions:t,...e})}),f.jsx("div",{style:w,children:f.jsx(j,{objectType:F,filterDefinitions:n,...e})}),f.jsx("div",{style:w,children:f.jsx(j,{objectType:F,filterDefinitions:l,...e})})]})}const Be={parameters:{docs:{source:{code:`// "full" (default): label + colored bar + count number
// "count": label + count number (no bar)
// "minimal": label only (no bar, no count)

const filterDefinitions = [
  { ..., listogramConfig: { displayMode: "full" } },
  { ..., listogramConfig: { displayMode: "count" } },
  { ..., listogramConfig: { displayMode: "minimal" } },
];`}}},render:e=>f.jsx(Hs,{...e})};function $s(e){const t=a.useMemo(()=>[{type:"PROPERTY",id:"dept-with-count",key:"department",label:"Department (counts visible)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},{type:"PROPERTY",id:"team-with-count",key:"team",label:"Team (counts visible)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}}],[]),n=a.useMemo(()=>[{type:"PROPERTY",id:"dept-no-count",key:"department",label:"Department (counts hidden)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},showCount:!1},{type:"PROPERTY",id:"team-no-count",key:"team",label:"Team (counts hidden)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},showCount:!1}],[]);return f.jsxs("div",{style:se,children:[f.jsx("div",{style:w,children:f.jsx(j,{objectType:F,filterDefinitions:t,...e})}),f.jsx("div",{style:w,children:f.jsx(j,{objectType:F,filterDefinitions:n,...e})})]})}const We={parameters:{docs:{description:{story:"Use `showCount: false` on individual filter definitions to hide aggregation counts in LISTOGRAM and MULTI_SELECT inputs. Bar visualizations in LISTOGRAM are preserved."},source:{code:`// showCount defaults to true; set false to hide counts per filter
const filterDefinitions = [
  { ..., filterComponent: "LISTOGRAM", showCount: false },
  { ..., filterComponent: "MULTI_SELECT", showCount: false },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>f.jsx($s,{...e})};function Us(e){const t=a.useMemo(()=>[{type:"PROPERTY",id:"department-checkbox",key:"department",label:"Department",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},{type:"PROPERTY",id:"team-checkbox",key:"team",label:"Team",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]);return f.jsx("div",{style:w,children:f.jsx(j,{objectType:F,filterDefinitions:t,...e})})}const He={parameters:{docs:{description:{story:"Listogram rows always include a checkbox for multi-select. Selecting values checks the checkbox and highlights the row. Use the exclude toggle (three-dot menu) to invert selections."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:e=>f.jsx(Us,{...e})};function Xs(e){const[t,n]=a.useState(void 0),l=a.useCallback(s=>{console.log("Removed filter:",s)},[]);return f.jsxs("div",{style:xt,children:[f.jsx("div",{style:Ft,children:f.jsx(j,{objectType:F,filterDefinitions:z,onFilterRemoved:l,filterClause:t,onFilterClauseChanged:n,...e})}),f.jsx("div",{style:de,children:f.jsx(_t,{objectType:F,filter:t})})]})}const $e={args:{title:"Employee Filters",showResetButton:!0,showActiveFilterCount:!0,enableSorting:!0},parameters:{docs:{source:{code:`const [filterClause, setFilterClause] = useState(undefined);

<div style={{ display: "flex", gap: 16, height: 600 }}>
  <div style={{ width: 320 }}>
    <FilterList
      objectType={Employee}
      filterDefinitions={filterDefinitions}
      title="Employee Filters"
      showResetButton={true}
      showActiveFilterCount={true}
      enableSorting={true}
      onFilterRemoved={handleFilterRemoved}
      filterClause={filterClause}
      onFilterClauseChanged={setFilterClause}
    />
  </div>
  <div style={{ flex: 1 }}>
    <ObjectTable objectType={Employee} filter={filterClause} />
  </div>
</div>`}}},render:e=>f.jsx(Xs,{...e})};function Ys(e){const t=Cl(),n=a.useMemo(()=>t(F).where({department:"Marketing"}),[t]),[l,s]=a.useState(void 0);return f.jsxs("div",{style:xt,children:[f.jsx("div",{style:Ft,children:f.jsx(j,{objectType:F,objectSet:n,filterDefinitions:z,filterClause:l,onFilterClauseChanged:s,...e})}),f.jsx("div",{style:de,children:f.jsx(_t,{objectType:F,objectSet:n,filter:l})})]})}const Ue={args:{title:"Marketing Employees",showResetButton:!0,showActiveFilterCount:!0},parameters:{docs:{description:{story:"Demonstrates using a pre-filtered objectSet to scope both FilterList aggregations and ObjectTable data to a subset of employees."},source:{code:`const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({ department: "Marketing" });

<FilterList
  objectType={Employee}
  objectSet={employeeObjectSet}
  filterDefinitions={filterDefinitions}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>
<ObjectTable
  objectType={Employee}
  objectSet={employeeObjectSet}
  filter={filterClause}
/>`}}},render:e=>f.jsx(Ys,{...e})};function Ks(e){const[t,n]=a.useState(z),l=a.useCallback(s=>{n(o=>o.filter(i=>"key"in i?i.key!==s:!0))},[]);return f.jsx("div",{style:w,children:f.jsx(j,{objectType:F,filterDefinitions:t,onFilterRemoved:l,...e})})}const Xe={name:"Removable Filters",args:{title:"Removable Filters",showActiveFilterCount:!0},parameters:{docs:{description:{story:"When `onFilterRemoved` is provided, each filter item shows a remove button (X) on hover. Clicking it removes the filter from the list."},source:{code:`const [definitions, setDefinitions] = useState(filterDefinitions);

const handleFilterRemoved = (filterKey) => {
  setDefinitions(prev => prev.filter(def => def.key !== filterKey));
};

<FilterList
  objectType={Employee}
  filterDefinitions={definitions}
  onFilterRemoved={handleFilterRemoved}
  title="Removable Filters"
/>`}}},render:e=>f.jsx(Ks,{...e})};function zs(e){const[t,n]=a.useState(void 0),l=a.useMemo(()=>[{type:"STATIC_VALUES",key:"department",label:"Department (static)",filterComponent:"LISTOGRAM",values:["Marketing","Operations","Finance","Product"],filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"}},{type:"STATIC_VALUES",key:"locationCity",label:"Office Location",filterComponent:"SINGLE_SELECT",values:["New York","San Francisco","London","Tokyo"],filterState:{type:"SELECT",selectedValues:[]}},{type:"STATIC_VALUES",key:"team",label:"Team (multi-select)",filterComponent:"MULTI_SELECT",values:["Alpha","Beta","Gamma","Delta"],filterState:{type:"SELECT",selectedValues:[]}},{type:"STATIC_VALUES",id:"custom-status",key:"status",label:"Status (custom clause)",filterComponent:"LISTOGRAM",values:["Active","Inactive"],filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"},toWhereClause:s=>{if(s.type!=="EXACT_MATCH"||s.values.length===0)return;const o=s.values,i=o.includes("Active"),d=o.includes("Inactive");if(i&&d)return{$or:[{employeeStatus:"Active"},{employeeStatus:"Inactive"}]};if(i)return{employeeStatus:"Active"};if(d)return{employeeStatus:"Inactive"}}}],[]);return f.jsxs("div",{style:se,children:[f.jsx("div",{style:w,children:f.jsx(j,{objectType:F,filterDefinitions:l,filterClause:t,onFilterClauseChanged:n,...e})}),f.jsxs("div",{style:de,children:[f.jsx("strong",{children:"Filter Clause (JSON):"}),f.jsx("pre",{style:nt,children:t?JSON.stringify(t,null,2):"(no active filters)"})]})]})}const Ye={parameters:{docs:{description:{story:"Use `STATIC_VALUES` filter definitions to provide a fixed list of values instead of fetching from OSDK aggregation. Supports LISTOGRAM, SINGLE_SELECT, MULTI_SELECT, and TEXT_TAGS components. Optionally provide a `toWhereClause` function for custom clause generation."},source:{code:`const filterDefinitions = [
  {
    type: "STATIC_VALUES",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    values: ["Marketing", "Operations", "Finance", "Product"],
    filterState: { type: "EXACT_MATCH", values: [] },
    listogramConfig: { displayMode: "minimal" },
  },
  {
    type: "STATIC_VALUES",
    key: "locationCity",
    label: "Office Location",
    filterComponent: "SINGLE_SELECT",
    values: ["New York", "San Francisco", "London", "Tokyo"],
    filterState: { type: "SELECT", selectedValues: [] },
  },
  {
    type: "STATIC_VALUES",
    key: "team",
    label: "Team",
    filterComponent: "MULTI_SELECT",
    values: ["Alpha", "Beta", "Gamma", "Delta"],
    filterState: { type: "SELECT", selectedValues: [] },
  },
  {
    type: "STATIC_VALUES",
    key: "status",
    label: "Status",
    filterComponent: "LISTOGRAM",
    values: ["Active", "Inactive"],
    filterState: { type: "EXACT_MATCH", values: [] },
    toWhereClause: (state) => {
      // Custom WHERE clause mapping
      if (state.type === "EXACT_MATCH" && state.values.includes("Active")) {
        return { employeeStatus: "Active" };
      }
      return undefined;
    },
  },
];

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>`}}},render:e=>f.jsx(zs,{...e})};function Qs(e){const[t,n]=a.useState(void 0),[l,s]=a.useState(z),o=a.useCallback(d=>{s(c=>c.filter(m=>"key"in m?m.key!==d:!0))},[]),i=a.useCallback(()=>{s(z)},[]);return f.jsxs("div",{style:xt,children:[f.jsx("div",{style:Ft,children:f.jsx(j,{objectType:F,filterDefinitions:l,titleIcon:Vl,onReset:i,onFilterRemoved:o,filterClause:t,onFilterClauseChanged:n,...e})}),f.jsx("div",{style:de,children:f.jsx(_t,{objectType:F,filter:t})})]})}const Ke={name:"Full Featured",args:{title:"Employee Filters",showResetButton:!0,showActiveFilterCount:!0,enableSorting:!0},parameters:{docs:{description:{story:"Demonstrates all filter list features together: collapse, reset, active count, sorting, removable filters, per-filter search, exclude toggle, and controlled where clause driving an ObjectTable."},source:{code:`// All features combined: collapse, sort, search, exclude, remove, reset

<FilterList
  objectType={Employee}
  filterDefinitions={definitions}
  title="Employee Filters"
  titleIcon={<FilterIcon />}
  collapsed={collapsed}
  onCollapsedChange={setCollapsed}
  showResetButton={true}
  showActiveFilterCount={true}
  onReset={handleReset}
  onFilterRemoved={handleFilterRemoved}
  enableSorting={true}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>`}}},render:e=>{const[,t]=Ol(),n=a.useCallback(l=>t({collapsed:l}),[t]);return f.jsx(Qs,{...e,onCollapsedChange:n})}};function qs(e){const[t,n]=a.useState(void 0),l=a.useMemo(()=>[{type:"HAS_LINK",linkName:"lead",label:"Has Manager",filterState:{type:"hasLink",hasLink:!1}}],[]);return f.jsxs("div",{style:se,children:[f.jsx("div",{style:w,children:f.jsx(j,{objectType:F,filterDefinitions:l,filterClause:t,onFilterClauseChanged:n,...e})}),f.jsxs("div",{style:de,children:[f.jsx("strong",{children:"Filter Clause (JSON):"}),f.jsx("pre",{style:nt,children:t?JSON.stringify(t,null,2):"(no active filters)"})]})]})}const ze={name:"Linked Property Filters",parameters:{docs:{description:{story:"Demonstrates filtering on properties of linked objects. HAS_LINK filters objects based on whether they have a linked object. "},source:{code:`// HAS_LINK and LINKED_PROPERTY filter definitions
const filterDefinitions = [
  {
    type: "HAS_LINK",
    linkName: "lead",
    label: "Has Manager",
    filterState: { type: "hasLink", hasLink: false },
  },
];

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>`}}},render:e=>f.jsx(qs,{...e})};function Js({filterState:e,onFilterStateChanged:t}){const n=a.useCallback(s=>{const o=s.target.value;t({type:"custom",customState:{value:o}})},[t]),l=a.useCallback(()=>{t({type:"custom",customState:{value:""}})},[t]);return f.jsxs("div",{style:{padding:"12px 0",display:"flex",gap:"8px"},children:[f.jsx("input",{type:"text",value:e.customState.value,onChange:n,placeholder:"Enter name substring...",style:{flex:1,padding:"6px 8px",fontSize:"14px",border:"1px solid #ccc",borderRadius:"4px"}}),e.customState.value&&f.jsx("button",{onClick:l,style:{padding:"6px 12px",fontSize:"12px",backgroundColor:"#f5f5f5",border:"1px solid #ccc",borderRadius:"4px",cursor:"pointer"},children:"Clear"})]})}function Zs(e){const[t,n]=a.useState(void 0),l=a.useMemo(()=>[{type:"CUSTOM",key:"custom-name-contains",label:"Name Contains",filterComponent:"CUSTOM",filterState:{type:"custom",customState:{value:""}},renderInput:({filterState:s,onFilterStateChanged:o})=>f.jsx(Js,{filterState:s,onFilterStateChanged:o}),toWhereClause:s=>{var i;const o=(i=s.customState)==null?void 0:i.value;if(o)return{fullName:{$containsAnyTerm:o}}}}],[]);return f.jsxs("div",{style:se,children:[f.jsx("div",{style:w,children:f.jsx(j,{objectType:F,filterDefinitions:l,filterClause:t,onFilterClauseChanged:n,...e})}),f.jsxs("div",{style:de,children:[f.jsx("strong",{children:"Filter Clause (JSON):"}),f.jsx("pre",{style:nt,children:t?JSON.stringify(t,null,2):"(no active filters)"})]})]})}const Qe={name:"Custom Filters",parameters:{docs:{description:{story:"Custom filters provide full control over filtering logic and UI. The 'Name Contains' filter uses `renderInput` for a simple custom input. "},source:{code:`// Custom filter with renderInput
const nameContainsFilter = {
  type: "CUSTOM",
  key: "custom-name-contains",
  label: "Name Contains",
  filterComponent: "CUSTOM",
  filterState: { type: "custom", customState: { value: "" } },
  renderInput: ({ filterState, onFilterStateChanged }) => (
    <input
      type="text"
      value={filterState.customState.value}
      onChange={(e) =>
        onFilterStateChanged({
          type: "custom",
          customState: { value: e.target.value },
        })
      }
      placeholder="Enter name substring..."
    />
  ),
  toWhereClause: (state) => {
    const value = state.customState.value;
    if (!value) return undefined;
    return { fullName: { $containsAnyTerm: value } };
  },
};

<FilterList
  objectType={Employee}
  filterDefinitions={[nameContainsFilter]}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>`}}},render:e=>f.jsx(Zs,{...e})};var Jt,Zt,en;Re.parameters={...Re.parameters,docs:{...(Jt=Re.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>\`
      }
    }
  },
  render: ({
    objectType: _ot,
    objectSet: _os,
    ...args
  }) => {
    const filterDefinitions = useMemo((): FilterDefinitionUnion<Employee>[] => [departmentFilter, locationCityFilter], []);
    return <div style={SIDEBAR_STYLE}>
        <FilterList objectType={Employee} filterDefinitions={filterDefinitions} {...args} />
      </div>;
  }
}`,...(en=(Zt=Re.parameters)==null?void 0:Zt.docs)==null?void 0:en.source}}};var tn,nn,ln;ke.parameters={...ke.parameters,docs:{...(tn=ke.parameters)==null?void 0:tn.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Pass an \`objectSet\` prop to scope filter aggregations to a subset of objects. " + "Here the object set is filtered to Marketing department employees, " + "so the listogram counts reflect only that subset."
      },
      source: {
        code: \`const client = useOsdkClient();
const objectSet = client(Employee).where({ department: "Marketing" });

<FilterList
  objectType={Employee}
  objectSet={objectSet}
  filterDefinitions={[
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>\`
      }
    }
  },
  render: args => <WithObjectSetStory {...args} />
}`,...(ln=(nn=ke.parameters)==null?void 0:nn.docs)==null?void 0:ln.source}}};var rn,an,sn;Ne.parameters={...Ne.parameters,docs:{...(rn=Ne.parameters)==null?void 0:rn.docs,source:{originalSource:`{
  args: {
    showResetButton: true
  },
  parameters: {
    docs: {
      source: {
        code: \`const filterDefinitions = [
  { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  { type: "PROPERTY", key: "fullName", label: "Full Name", filterComponent: "CONTAINS_TEXT", filterState: { type: "CONTAINS_TEXT" }, isVisible: false },
  { type: "PROPERTY", key: "firstFullTimeStartDate", label: "Start Date", filterComponent: "DATE_RANGE", filterState: { type: "DATE_RANGE" }, isVisible: false },
  { type: "PROPERTY", key: "employeeNumber", label: "Employee Number", filterComponent: "NUMBER_RANGE", filterState: { type: "NUMBER_RANGE" }, isVisible: false },
  { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] }, isVisible: false },
];

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  addFilterMode="uncontrolled"
  showResetButton={true}
/>\`
      }
    }
  },
  render: args => <AddFilterModeStory {...args} />
}`,...(sn=(an=Ne.parameters)==null?void 0:an.docs)==null?void 0:sn.source}}};var on,cn,un;xe.parameters={...xe.parameters,docs:{...(on=xe.parameters)==null?void 0:on.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "All filter component types with a controlled where clause. " + "Hover filter items to reveal search and exclude actions."
      },
      source: {
        code: \`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>\`
      }
    }
  },
  render: args => <WithAllFilterTypesStory {...args} />
}`,...(un=(cn=xe.parameters)==null?void 0:cn.docs)==null?void 0:un.source}}};var dn,mn,pn;Fe.parameters={...Fe.parameters,docs:{...(dn=Fe.parameters)==null?void 0:dn.docs,source:{originalSource:`{
  args: {
    title: "Employee Filters"
  },
  parameters: {
    docs: {
      source: {
        code: \`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  titleIcon={<svg>...</svg>}
/>\`
      }
    }
  },
  render: ({
    objectType: _ot,
    objectSet: _os,
    ...args
  }) => {
    return <div style={SIDEBAR_STYLE}>
        <FilterList objectType={Employee} filterDefinitions={sharedFilterDefinitions} titleIcon={FILTER_ICON} {...args} />
      </div>;
  }
}`,...(pn=(mn=Fe.parameters)==null?void 0:mn.docs)==null?void 0:pn.source}}};var fn,Cn,hn;De.parameters={...De.parameters,docs:{...(fn=De.parameters)==null?void 0:fn.docs,source:{originalSource:`{
  args: {
    showResetButton: true
  },
  parameters: {
    docs: {
      source: {
        code: \`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showResetButton={true}
  onReset={() => console.log("Reset clicked")}
/>\`
      }
    }
  },
  render: args => <WithResetButtonStory {...args} />
}`,...(hn=(Cn=De.parameters)==null?void 0:Cn.docs)==null?void 0:hn.source}}};var gn,yn,En;Oe.parameters={...Oe.parameters,docs:{...(gn=Oe.parameters)==null?void 0:gn.docs,source:{originalSource:`{
  args: {
    showActiveFilterCount: true
  },
  parameters: {
    docs: {
      source: {
        code: \`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showActiveFilterCount={true}
/>\`
      }
    }
  },
  render: ({
    objectType: _ot,
    objectSet: _os,
    ...args
  }) => {
    return <div style={SIDEBAR_STYLE}>
        <FilterList objectType={Employee} filterDefinitions={sharedFilterDefinitions} {...args} />
      </div>;
  }
}`,...(En=(yn=Oe.parameters)==null?void 0:yn.docs)==null?void 0:En.source}}};var _n,Tn,bn;je.parameters={...je.parameters,docs:{...(_n=je.parameters)==null?void 0:_n.docs,source:{originalSource:`{
  args: {
    enableSorting: true
  },
  parameters: {
    docs: {
      source: {
        code: \`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  enableSorting={true}
/>\`
      }
    }
  },
  render: ({
    objectType: _ot,
    objectSet: _os,
    ...args
  }) => {
    return <div style={SIDEBAR_STYLE}>
        <FilterList objectType={Employee} filterDefinitions={sharedFilterDefinitions} {...args} />
      </div>;
  }
}`,...(bn=(Tn=je.parameters)==null?void 0:Tn.docs)==null?void 0:bn.source}}};var vn,An,Ln;we.parameters={...we.parameters,docs:{...(vn=we.parameters)==null?void 0:vn.docs,source:{originalSource:`{
  args: {
    title: "Employee Filters",
    showActiveFilterCount: true
  },
  parameters: {
    docs: {
      description: {
        story: "Click the collapse button to minimize the filter panel. " + "Active filter count is shown in the collapsed state."
      },
      source: {
        code: \`const [collapsed, setCollapsed] = useState(false);

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  collapsed={collapsed}
  onCollapsedChange={setCollapsed}
  showActiveFilterCount={true}
/>\`
      }
    }
  },
  render: args => {
    const [, updateArgs] = useArgs<Partial<EmployeeFilterListProps>>();
    const handleCollapsedChange = useCallback((collapsed: boolean) => updateArgs({
      collapsed
    }), [updateArgs]);
    return <CollapsiblePanelStory {...args} onCollapsedChange={handleCollapsedChange} />;
  }
}`,...(Ln=(An=we.parameters)==null?void 0:An.docs)==null?void 0:Ln.source}}};var Sn,In,Mn;Pe.parameters={...Pe.parameters,docs:{...(Sn=Pe.parameters)==null?void 0:Sn.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`const filterDefinitions = [
  { type: "KEYWORD_SEARCH", properties: ["fullName", "department", "jobTitle", "locationCity"], label: "Search" },
  { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />\`
      }
    }
  },
  render: ({
    objectType: _ot,
    objectSet: _os,
    ...args
  }) => {
    const filterDefinitions = useMemo((): FilterDefinitionUnion<Employee>[] => [{
      type: "KEYWORD_SEARCH",
      properties: ["fullName", "department", "jobTitle", "locationCity"],
      label: "Search"
    }, departmentFilter, locationCityFilter], []);
    return <div style={SIDEBAR_STYLE}>
        <FilterList objectType={Employee} filterDefinitions={filterDefinitions} {...args} />
      </div>;
  }
}`,...(Mn=(In=Pe.parameters)==null?void 0:In.docs)==null?void 0:Mn.source}}};var Rn,kn,Nn;Ve.parameters={...Ve.parameters,docs:{...(Rn=Ve.parameters)==null?void 0:Rn.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`// Without colorMap: all bars use the default theme color
// With colorMap: each value gets a distinct color for its bar

const filterDefinitions = [
  {
    type: "PROPERTY",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
    colorMap: {
      Marketing: "#e74c3c",
      Operations: "#2ecc71",
      Finance: "#3498db",
      Product: "#f39c12",
    },
  },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />\`
      }
    }
  },
  render: args => <WithColorMapStory {...args} />
}`,...(Nn=(kn=Ve.parameters)==null?void 0:kn.docs)==null?void 0:Nn.source}}};var xn,Fn,Dn;Ge.parameters={...Ge.parameters,docs:{...(xn=Ge.parameters)==null?void 0:xn.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Use \`renderValue\` to customize how filter values are displayed and searched. " + "The returned string replaces the raw value for display and search matching. " + "Works with LISTOGRAM, MULTI_SELECT, and SINGLE_SELECT components."
      },
      source: {
        code: \`const DEPARTMENT_LABELS = {
  Marketing: "Marketing Dept.",
  Operations: "Ops Team",
  Finance: "Finance & Accounting",
  Product: "Product Group",
};

const filterDefinitions = [
  {
    type: "PROPERTY",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
    renderValue: (value) => DEPARTMENT_LABELS[value] ?? value,
  },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />\`
      }
    }
  },
  render: args => <WithRenderValueStory {...args} />
}`,...(Dn=(Fn=Ge.parameters)==null?void 0:Fn.docs)==null?void 0:Dn.source}}};var On,jn,wn;Be.parameters={...Be.parameters,docs:{...(On=Be.parameters)==null?void 0:On.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`// "full" (default): label + colored bar + count number
// "count": label + count number (no bar)
// "minimal": label only (no bar, no count)

const filterDefinitions = [
  { ..., listogramConfig: { displayMode: "full" } },
  { ..., listogramConfig: { displayMode: "count" } },
  { ..., listogramConfig: { displayMode: "minimal" } },
];\`
      }
    }
  },
  render: args => <WithListogramDisplayModesStory {...args} />
}`,...(wn=(jn=Be.parameters)==null?void 0:jn.docs)==null?void 0:wn.source}}};var Pn,Vn,Gn;We.parameters={...We.parameters,docs:{...(Pn=We.parameters)==null?void 0:Pn.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Use \`showCount: false\` on individual filter definitions to hide " + "aggregation counts in LISTOGRAM and MULTI_SELECT inputs. " + "Bar visualizations in LISTOGRAM are preserved."
      },
      source: {
        code: \`// showCount defaults to true; set false to hide counts per filter
const filterDefinitions = [
  { ..., filterComponent: "LISTOGRAM", showCount: false },
  { ..., filterComponent: "MULTI_SELECT", showCount: false },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />\`
      }
    }
  },
  render: args => <WithHiddenCountsStory {...args} />
}`,...(Gn=(Vn=We.parameters)==null?void 0:Vn.docs)==null?void 0:Gn.source}}};var Bn,Wn,Hn;He.parameters={...He.parameters,docs:{...(Bn=He.parameters)==null?void 0:Bn.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Listogram rows always include a checkbox for multi-select. " + "Selecting values checks the checkbox and highlights the row. " + "Use the exclude toggle (three-dot menu) to invert selections."
      },
      source: {
        code: \`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>\`
      }
    }
  },
  render: args => <WithCheckboxStory {...args} />
}`,...(Hn=(Wn=He.parameters)==null?void 0:Wn.docs)==null?void 0:Hn.source}}};var $n,Un,Xn;$e.parameters={...$e.parameters,docs:{...($n=$e.parameters)==null?void 0:$n.docs,source:{originalSource:`{
  args: {
    title: "Employee Filters",
    showResetButton: true,
    showActiveFilterCount: true,
    enableSorting: true
  },
  parameters: {
    docs: {
      source: {
        code: \`const [filterClause, setFilterClause] = useState(undefined);

<div style={{ display: "flex", gap: 16, height: 600 }}>
  <div style={{ width: 320 }}>
    <FilterList
      objectType={Employee}
      filterDefinitions={filterDefinitions}
      title="Employee Filters"
      showResetButton={true}
      showActiveFilterCount={true}
      enableSorting={true}
      onFilterRemoved={handleFilterRemoved}
      filterClause={filterClause}
      onFilterClauseChanged={setFilterClause}
    />
  </div>
  <div style={{ flex: 1 }}>
    <ObjectTable objectType={Employee} filter={filterClause} />
  </div>
</div>\`
      }
    }
  },
  render: args => <CombinedWithObjectTableStory {...args} />
}`,...(Xn=(Un=$e.parameters)==null?void 0:Un.docs)==null?void 0:Xn.source}}};var Yn,Kn,zn;Ue.parameters={...Ue.parameters,docs:{...(Yn=Ue.parameters)==null?void 0:Yn.docs,source:{originalSource:`{
  args: {
    title: "Marketing Employees",
    showResetButton: true,
    showActiveFilterCount: true
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates using a pre-filtered objectSet to scope both FilterList aggregations " + "and ObjectTable data to a subset of employees."
      },
      source: {
        code: \`const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({ department: "Marketing" });

<FilterList
  objectType={Employee}
  objectSet={employeeObjectSet}
  filterDefinitions={filterDefinitions}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>
<ObjectTable
  objectType={Employee}
  objectSet={employeeObjectSet}
  filter={filterClause}
/>\`
      }
    }
  },
  render: args => <CombinedWithFilteredObjectSetStory {...args} />
}`,...(zn=(Kn=Ue.parameters)==null?void 0:Kn.docs)==null?void 0:zn.source}}};var Qn,qn,Jn;Xe.parameters={...Xe.parameters,docs:{...(Qn=Xe.parameters)==null?void 0:Qn.docs,source:{originalSource:`{
  name: "Removable Filters",
  args: {
    title: "Removable Filters",
    showActiveFilterCount: true
  },
  parameters: {
    docs: {
      description: {
        story: "When \`onFilterRemoved\` is provided, each filter item shows a remove button (X) on hover. " + "Clicking it removes the filter from the list."
      },
      source: {
        code: \`const [definitions, setDefinitions] = useState(filterDefinitions);

const handleFilterRemoved = (filterKey) => {
  setDefinitions(prev => prev.filter(def => def.key !== filterKey));
};

<FilterList
  objectType={Employee}
  filterDefinitions={definitions}
  onFilterRemoved={handleFilterRemoved}
  title="Removable Filters"
/>\`
      }
    }
  },
  render: args => <WithRemovableFiltersStory {...args} />
}`,...(Jn=(qn=Xe.parameters)==null?void 0:qn.docs)==null?void 0:Jn.source}}};var Zn,el,tl;Ye.parameters={...Ye.parameters,docs:{...(Zn=Ye.parameters)==null?void 0:Zn.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Use \`STATIC_VALUES\` filter definitions to provide a fixed list of values " + "instead of fetching from OSDK aggregation. Supports LISTOGRAM, SINGLE_SELECT, " + "MULTI_SELECT, and TEXT_TAGS components. Optionally provide a \`toWhereClause\` " + "function for custom clause generation."
      },
      source: {
        code: \`const filterDefinitions = [
  {
    type: "STATIC_VALUES",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    values: ["Marketing", "Operations", "Finance", "Product"],
    filterState: { type: "EXACT_MATCH", values: [] },
    listogramConfig: { displayMode: "minimal" },
  },
  {
    type: "STATIC_VALUES",
    key: "locationCity",
    label: "Office Location",
    filterComponent: "SINGLE_SELECT",
    values: ["New York", "San Francisco", "London", "Tokyo"],
    filterState: { type: "SELECT", selectedValues: [] },
  },
  {
    type: "STATIC_VALUES",
    key: "team",
    label: "Team",
    filterComponent: "MULTI_SELECT",
    values: ["Alpha", "Beta", "Gamma", "Delta"],
    filterState: { type: "SELECT", selectedValues: [] },
  },
  {
    type: "STATIC_VALUES",
    key: "status",
    label: "Status",
    filterComponent: "LISTOGRAM",
    values: ["Active", "Inactive"],
    filterState: { type: "EXACT_MATCH", values: [] },
    toWhereClause: (state) => {
      // Custom WHERE clause mapping
      if (state.type === "EXACT_MATCH" && state.values.includes("Active")) {
        return { employeeStatus: "Active" };
      }
      return undefined;
    },
  },
];

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>\`
      }
    }
  },
  render: args => <WithStaticValuesStory {...args} />
}`,...(tl=(el=Ye.parameters)==null?void 0:el.docs)==null?void 0:tl.source}}};var nl,ll,rl;Ke.parameters={...Ke.parameters,docs:{...(nl=Ke.parameters)==null?void 0:nl.docs,source:{originalSource:`{
  name: "Full Featured",
  args: {
    title: "Employee Filters",
    showResetButton: true,
    showActiveFilterCount: true,
    enableSorting: true
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates all filter list features together: collapse, reset, active count, sorting, " + "removable filters, per-filter search, exclude toggle, and controlled where clause " + "driving an ObjectTable."
      },
      source: {
        code: \`// All features combined: collapse, sort, search, exclude, remove, reset

<FilterList
  objectType={Employee}
  filterDefinitions={definitions}
  title="Employee Filters"
  titleIcon={<FilterIcon />}
  collapsed={collapsed}
  onCollapsedChange={setCollapsed}
  showResetButton={true}
  showActiveFilterCount={true}
  onReset={handleReset}
  onFilterRemoved={handleFilterRemoved}
  enableSorting={true}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>\`
      }
    }
  },
  render: args => {
    const [, updateArgs] = useArgs<Partial<EmployeeFilterListProps>>();
    const handleCollapsedChange = useCallback((collapsed: boolean) => updateArgs({
      collapsed
    }), [updateArgs]);
    return <FullFeaturedStory {...args} onCollapsedChange={handleCollapsedChange} />;
  }
}`,...(rl=(ll=Ke.parameters)==null?void 0:ll.docs)==null?void 0:rl.source}}};var al,sl,ol;ze.parameters={...ze.parameters,docs:{...(al=ze.parameters)==null?void 0:al.docs,source:{originalSource:`{
  name: "Linked Property Filters",
  parameters: {
    docs: {
      description: {
        story: "Demonstrates filtering on properties of linked objects. " + "HAS_LINK filters objects based on whether they have a linked object. "
      },
      source: {
        code: \`// HAS_LINK and LINKED_PROPERTY filter definitions
const filterDefinitions = [
  {
    type: "HAS_LINK",
    linkName: "lead",
    label: "Has Manager",
    filterState: { type: "hasLink", hasLink: false },
  },
];

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>\`
      }
    }
  },
  render: args => <WithLinkedPropertyFiltersStory {...args} />
}`,...(ol=(sl=ze.parameters)==null?void 0:sl.docs)==null?void 0:ol.source}}};var il,cl,ul;Qe.parameters={...Qe.parameters,docs:{...(il=Qe.parameters)==null?void 0:il.docs,source:{originalSource:`{
  name: "Custom Filters",
  parameters: {
    docs: {
      description: {
        story: "Custom filters provide full control over filtering logic and UI. " + "The 'Name Contains' filter uses \`renderInput\` for a simple custom input. "
      },
      source: {
        code: \`// Custom filter with renderInput
const nameContainsFilter = {
  type: "CUSTOM",
  key: "custom-name-contains",
  label: "Name Contains",
  filterComponent: "CUSTOM",
  filterState: { type: "custom", customState: { value: "" } },
  renderInput: ({ filterState, onFilterStateChanged }) => (
    <input
      type="text"
      value={filterState.customState.value}
      onChange={(e) =>
        onFilterStateChanged({
          type: "custom",
          customState: { value: e.target.value },
        })
      }
      placeholder="Enter name substring..."
    />
  ),
  toWhereClause: (state) => {
    const value = state.customState.value;
    if (!value) return undefined;
    return { fullName: { $containsAnyTerm: value } };
  },
};

<FilterList
  objectType={Employee}
  filterDefinitions={[nameContainsFilter]}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>\`
      }
    }
  },
  render: args => <WithCustomFiltersStory {...args} />
}`,...(ul=(cl=Qe.parameters)==null?void 0:cl.docs)==null?void 0:ul.source}}};const Bo=["Default","WithObjectSet","AddFilterMode","WithAllFilterTypes","WithTitleAndIcon","WithResetButton","WithActiveFilterCount","WithSorting","CollapsiblePanel","KeywordSearch","WithColorMap","WithRenderValue","WithListogramDisplayModes","WithHiddenCounts","WithCheckbox","CombinedWithObjectTable","CombinedWithFilteredObjectSet","WithRemovableFilters","WithStaticValues","FullFeatured","WithHasLinkFilter","WithCustomFilters"];export{Ne as AddFilterMode,we as CollapsiblePanel,Ue as CombinedWithFilteredObjectSet,$e as CombinedWithObjectTable,Re as Default,Ke as FullFeatured,Pe as KeywordSearch,Oe as WithActiveFilterCount,xe as WithAllFilterTypes,He as WithCheckbox,Ve as WithColorMap,Qe as WithCustomFilters,ze as WithHasLinkFilter,We as WithHiddenCounts,Be as WithListogramDisplayModes,ke as WithObjectSet,Xe as WithRemovableFilters,Ge as WithRenderValue,De as WithResetButton,je as WithSorting,Ye as WithStaticValues,Fe as WithTitleAndIcon,Bo as __namedExportsOrder,Go as default};
