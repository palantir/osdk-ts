var Vl=Object.defineProperty;var Gl=(e,n,t)=>n in e?Vl(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var ct=(e,n,t)=>Gl(e,typeof n!="symbol"?n+"":n,t);import{R as a,O as Bl,c as Hl,r,j as C,f as Wl}from"./iframe-psxkTTLB.js";import{S as $l,M as Ul,a as Xl,b as Yl,c as Kl,d as zl,e as Ot}from"./MultiColumnSortDialog-l_3PGWF7.js";import{c as w}from"./index-B7z_A-zP.js";import{I as V,S as Ae}from"./svgIconContainer-CDWf64NW.js";import{S as ul,I as ae,f as Ql,c as ql,u as dl,a as Jl,b as Zl,d as ea}from"./Input-DatOKSiW.js";import{C as ml}from"./cross-UE9QZ1Si.js";import{C as ta}from"./chevron-down-w1yA2t_w.js";import{T as na,a as la}from"./CollapsiblePanel-rPz9M-KA.js";import{u as aa,C as ra,a as jt,P as sa,s as oa,K as ia,b as ca,c as ua,D as da,d as ma,S as pa,v as Ca,e as fa}from"./DraggableList-Dz8dDJeg.js";import{B as H}from"./Button-BlMF7lsg.js";import{d as ht}from"./debounce-BGa0UfSo.js";import{u as ha}from"./useControlled-Di51YBZf.js";import{f as ga,g as ya,u as Ea,b as ba,a as _a,c as Ta,m as va,d as Aa,n as La,e as pl}from"./useBaseUiId-DAwDNDeH.js";import{v as Sa}from"./InternalBackdrop-BJVq4xKC.js";import{n as Ia,o as Ra,d as ve,a as B,b as et,C as F,h as Ma,m as Cl}from"./toNumber-BNWHUQII.js";import{C as fl}from"./ColumnConfigDialog-IWQJ01ZB.js";import{S as ut}from"./SkeletonBar-Czwl11aZ.js";import{a as ka,d as wt,m as Na}from"./makeExternalStore-D0RApzol.js";import{w as xa}from"./withOsdkMetrics-C8JyAUQC.js";import{O as _t}from"./object-table-CQz5Z0In.js";import{E as N}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Dialog-C4Rr0uTK.js";import"./composite-DqtGjlZ_.js";import"./index-B2ojow9X.js";import"./index-C-5E0q5l.js";import"./ToolbarRootContext-BCbjpkX-.js";import"./getPseudoElementBounds-CqHzZQm-.js";import"./CompositeItem-CmqSSYb5.js";import"./getDisabledMountTransitionStyles-CrhRtnRu.js";import"./small-cross-BremmyxU.js";import"./index-BvguwfTe.js";import"./PopoverPopup-BUqYGLMh.js";import"./minus-BphgxVs2.js";import"./useRegisterUserAgent-XCKankp1.js";import"./Table-DVkfewnZ.js";import"./LoadingCell-Bom3dDdf.js";import"./index-CYtMM2Uh.js";import"./error-3R0xQCWr.js";function ue(e,n){const{where:t,withProperties:l,intersectWith:s,aggregate:o,dedupeIntervalMs:i}=n,u="objectSet"in n?n.objectSet:void 0,{observableClient:c}=a.useContext(Bl),m=c.canonicalizeOptions({where:t,withProperties:l,aggregate:o,intersectWith:s}),d=u?JSON.stringify(Hl(u)):void 0,p=a.useRef(u);p.current=u;const{subscribe:E,getSnapShot:f}=a.useMemo(()=>{const _=p.current;return _?ka(h=>c.observeAggregation({type:e,objectSet:_,where:m.where,withProperties:m.withProperties,intersectWith:m.intersectWith,aggregate:m.aggregate,dedupeInterval:i??2e3},h),wt({hookType:"useOsdkAggregation",objectType:e.apiName,where:m.where,aggregate:m.aggregate})):Na(h=>c.observeAggregation({type:e,where:m.where,withProperties:m.withProperties,intersectWith:m.intersectWith,aggregate:m.aggregate,dedupeInterval:i??2e3},h),wt({hookType:"useOsdkAggregation",objectType:e.apiName,where:m.where,aggregate:m.aggregate}))},[c,e.apiName,e.type,d,m.where,m.withProperties,m.intersectWith,m.aggregate,i]),y=a.useSyncExternalStore(E,f),T=a.useCallback(async()=>{await c.invalidateObjectType(e.apiName)},[c,e.apiName]);return a.useMemo(()=>({data:y==null?void 0:y.result,isLoading:Ra(y,!0),error:Ia(y,"Failed to execute aggregation"),refetch:T}),[y,T])}const hl=r.forwardRef((e,n)=>{const t=(e.size??V.STANDARD)>=V.LARGE,s=`${-1*(t?V.LARGE:V.STANDARD)/.05/2}`,o={transformOrigin:"center"};return C.jsx(Ae,{iconName:"disable",ref:n,...e,children:C.jsx("path",{d:t?"M200 400C89.6 400 0 310.4 0 200S89.6 0 200 0S400 89.6 400 200S310.4 400 200 400M40 200C40 288.4 111.6 360 200 360C237 360 271 347.4 298 326.2L73.8 102A158 158 0 0 0 40 200M200 40C163 40 129 52.6 102 73.8L326.2 298A158 158 0 0 0 360 200C360 111.6 288.4 40 200 40":"M159.8 320.2C71.4 320.2 -0.2 248.6 -0.2 160.2S71.4 0.2 159.8 0.2S319.8 71.8 319.8 160.2S248.2 320.2 159.8 320.2M39.8 160.2C39.8 226.4 93.6 280.2 159.8 280.2C185.8 280.2 209.6 271.8 229.2 257.8L62.2 90.8C48.2 110.4 39.8 134.2 39.8 160.2M159.8 40.2C133.8 40.2 110 48.6 90.4 62.6L257.4000000000001 229.6C271.4 210 279.8000000000001 186.2 279.8000000000001 160.2C279.8000000000001 93.8 226.2000000000001 40.1999999999999 159.8000000000001 40.1999999999999",fillRule:"evenodd",transform:`scale(0.05, -0.05) translate(${s}, ${s})`,style:o})})});hl.displayName="Blueprint6.Icon.Disable";const gl=r.forwardRef((e,n)=>{const t=(e.size??V.STANDARD)>=V.LARGE,s=`${-1*(t?V.LARGE:V.STANDARD)/.05/2}`,o={transformOrigin:"center"};return C.jsx(Ae,{iconName:"double-chevron-left",ref:n,...e,children:C.jsx("path",{d:t?"M108.2 200L214 305.8C217.8 309.4 220 314.4 220 320A20.06 20.06 0 0 1 185.8 334.2L65.8 214.2C62.2 210.6 60 205.6 60 200S62.2 189.4 65.8 185.8L185.8 65.8A20.06 20.06 0 0 1 214.2 94.2zM228.2 200L334 305.8C337.8 309.4 340 314.4 340 320A20.06 20.06 0 0 1 305.8 334.2L185.8 214.2C182.2 210.6 180 205.6 180 200S182.2 189.4 185.8 185.8L305.8 65.8A20.06 20.06 0 0 1 334.2000000000001 94.2z":"M88.2 160L154 225.8C157.8 229.4 160 234.4 160 240A20.06 20.06 0 0 1 125.8 254.2L45.8 174.2C42.2 170.6 40 165.6 40 160S42.2 149.4 45.8 145.8L125.8 65.8A20.06 20.06 0 0 1 154.2 94.2zM188.2 160L254 225.8C257.8 229.4 260 234.4 260 240A20.06 20.06 0 0 1 225.8 254.2L145.8 174.2C142.2 170.6 140 165.6 140 160S142.2 149.4 145.8 145.8L225.8 65.8A20.06 20.06 0 0 1 254.2 94.2z",fillRule:"evenodd",transform:`scale(0.05, -0.05) translate(${s}, ${s})`,style:o})})});gl.displayName="Blueprint6.Icon.DoubleChevronLeft";const yl=r.forwardRef((e,n)=>{const t=(e.size??V.STANDARD)>=V.LARGE,s=`${-1*(t?V.LARGE:V.STANDARD)/.05/2}`,o={transformOrigin:"center"};return C.jsx(Ae,{iconName:"double-chevron-right",ref:n,...e,children:C.jsx("path",{d:t?"M220 200C220 205.6 217.8 210.6 214.2 214.2L94.2 334.2000000000001A20.06 20.06 0 0 1 65.8 305.8L171.8 200L66 94.2000000000001C62.2 90.6 60 85.6 60 80A20.06 20.06 0 0 1 94.2 65.8L214.2 185.8C217.8 189.4 220 194.4 220 200M334.2000000000001 214.2L214.2 334.2000000000001A20.06 20.06 0 0 1 185.8 305.8L291.8 200L186 94.2000000000001C182.2 90.6 180 85.6 180 80A20.06 20.06 0 0 1 214.2 65.8L334.2000000000001 185.8C337.8 189.4 340 194.4 340 200S337.8 210.6 334.2000000000001 214.2":"M180 160C180 165.6 177.8 170.6 174.2 174.2L94.2 254.2A20.06 20.06 0 0 1 65.8 225.8L131.8 160L66 94.2C62.2 90.6 60 85.6 60 80A20.06 20.06 0 0 1 94.2 65.8L174.2 145.8C177.8 149.4 180 154.4 180 160M274.2000000000001 174.2L194.2 254.2A20.06 20.06 0 0 1 165.8 225.8L231.8 160L166 94.2C162.2 90.6 160 85.6 160 80A20.06 20.06 0 0 1 194.2 65.8L274.2000000000001 145.8C277.8 149.4 280 154.4 280 160S277.8 170.6 274.2000000000001 174.2",fillRule:"evenodd",transform:`scale(0.05, -0.05) translate(${s}, ${s})`,style:o})})});yl.displayName="Blueprint6.Icon.DoubleChevronRight";const El=r.forwardRef((e,n)=>{const t=(e.size??V.STANDARD)>=V.LARGE,s=`${-1*(t?V.LARGE:V.STANDARD)/.05/2}`,o={transformOrigin:"center"};return C.jsx(Ae,{iconName:"more",ref:n,...e,children:C.jsx("path",{d:t?"M70 240A50 50 0 1 0 70 140A50 50 0 0 0 70 240M210 240A50 50 0 1 0 210 140A50 50 0 0 0 210 240M350 240A50 50 0 1 0 350 140A50 50 0 0 0 350 240":"M40 200A40 40 0 1 0 40 120A40 40 0 0 0 40 200M160 200A40 40 0 1 0 160 120A40 40 0 0 0 160 200M280 200A40 40 0 1 0 280 120A40 40 0 0 0 280 200",fillRule:"evenodd",transform:`scale(0.05, -0.05) translate(${s}, ${s})`,style:o})})});El.displayName="Blueprint6.Icon.More";const bl=r.forwardRef((e,n)=>{const t=(e.size??V.STANDARD)>=V.LARGE,s=`${-1*(t?V.LARGE:V.STANDARD)/.05/2}`,o={transformOrigin:"center"};return C.jsx(Ae,{iconName:"reset",ref:n,...e,children:C.jsx("path",{d:t?"M120 280C120 269 111 260 100 260H20C9 260 0 269 0 280V360C0 371 9 380 20 380S40 371 40 360V319C76.4 368 134.2 400 200 400C310.4 400 400 310.4 400 200S310.4 0 200 0S0 89.6 0 200C0 211 9 220 20 220S40 211 40 200C40 111.6 111.6 40 200 40S360 111.6 360 200S288.4 360 200 360C149.4 360 104.6 336.6 75.2 300H100C111 300 120 291 120 280":"M120 220C120 209 111 200 100 200H20C9 200 0 209 0 220V300C0 311 9 320 20 320S40 311 40 300V265.2A159 159 0 0 0 160 320C248.4 320 320 248.4 320 160C320 78.8 259.6 12 181.2 1.6C180.8 1.6 180.4 1.4 180 1.4C173.4 0.6 166.8 0 160 0C71.6 0 0 71.6 0 160C0 171 9 180 20 180S40 171 40 160C40 93.8 93.8 40 160 40C174.1999999999999 40 187.4 43 200 47.6V47.4C246.6 63.8 280 107.8 280 160C280 226.2 226.2 280 160 280C124.6 280 92.8 264.4000000000001 70.8 240H100C111 240 120 231 120 220",fillRule:"evenodd",transform:`scale(0.05, -0.05) translate(${s}, ${s})`,style:o})})});bl.displayName="Blueprint6.Icon.Reset";function de(e){throw new Error(`Unhandled value: ${String(e)}`)}function Pt(){return a.createElement(ml,{size:14})}function Fa(){return a.createElement(ul,{size:14})}function Da(){return a.createElement(El,{size:14})}function Oa(){return a.createElement(ta,{size:10})}function ja(){return a.createElement(gl,{size:14})}function wa(){return a.createElement(yl,{size:14})}function Pa(){return a.createElement(bl,{size:12})}function Vt(){return a.createElement(na,{size:12})}function Va(){return a.createElement(hl,{color:"currentColor",size:12})}const J={filterList:"FilterList-module__filterList___wmzCNbkH",filterListCollapsed:"FilterList-module__filterListCollapsed___CGrK9txF",expandedContent:"FilterList-module__expandedContent___aEk2i2At",scrollableContent:"FilterList-module__scrollableContent___F3O1nfAo",hiddenContent:"FilterList-module__hiddenContent___PHKe-yWc",expandButton:"FilterList-module__expandButton___-QlY8-ot",collapsedLabel:"FilterList-module__collapsedLabel___QA0UtRts",addButtonContainer:"FilterList-module__addButtonContainer___kq300FEV",addButton:"FilterList-module__addButton___oD4yvwyZ"},Me={content:"FilterListContent-module__content___fG0EgVp6",dragOverlay:"FilterListContent-module__dragOverlay___Tjd1YpmI"},dt={errorContainer:"ErrorBoundary-module__errorContainer___FIguBDDu",errorMessage:"ErrorBoundary-module__errorMessage___jUsXUqFA",retryButton:"ErrorBoundary-module__retryButton___PZVWZOm7"};class Ga extends r.Component{constructor(){super(...arguments);ct(this,"state",{hasError:!1,error:null});ct(this,"handleRetry",()=>{this.setState({hasError:!1,error:null})})}static getDerivedStateFromError(t){return{hasError:!0,error:t}}componentDidCatch(t,l){var s,o;console.error("[ErrorBoundary]",t),console.error("[ErrorBoundary] Component stack:",l.componentStack),(o=(s=this.props).onError)==null||o.call(s,t)}render(){return this.state.hasError?this.props.fallback?this.props.fallback:a.createElement("div",{className:dt.errorContainer},a.createElement("p",{className:dt.errorMessage},this.props.errorMessage??"Something went wrong"),a.createElement(H,{className:dt.retryButton,onClick:this.handleRetry,"aria-label":"Retry"},"Retry")):this.props.children}}function Ba(e){if(!e)return!1;switch(e.type){case"SELECT":case"EXACT_MATCH":return!0;case"CONTAINS_TEXT":case"NUMBER_RANGE":case"DATE_RANGE":case"TOGGLE":case"hasLink":case"linkedProperty":case"keywordSearch":case"TIMELINE":case"custom":return!1;default:return!1}}function _l(e){if(!e)return!1;switch(e.type){case"SELECT":case"EXACT_MATCH":case"CONTAINS_TEXT":case"TIMELINE":return!0;case"NUMBER_RANGE":case"DATE_RANGE":case"TOGGLE":case"hasLink":case"linkedProperty":case"keywordSearch":case"custom":return!1;default:return!1}}function Ha(e,n,t){const l=n.trim();if(!l)return e;const s=l.toLowerCase();return e.filter(o=>t(o).toLowerCase().includes(s))}function Tl(e){if(!e)return!1;switch(e.type){case"SELECT":return e.selectedValues.length>0;case"EXACT_MATCH":return e.values.length>0;case"CONTAINS_TEXT":return e.value!==void 0&&e.value!=="";case"NUMBER_RANGE":return e.minValue!==void 0||e.maxValue!==void 0||e.includeNull===!0;case"DATE_RANGE":return e.minValue!==void 0||e.maxValue!==void 0||e.includeNull===!0;case"TOGGLE":return e.enabled;case"hasLink":return e.hasLink;case"linkedProperty":return Tl(e.linkedFilterState);case"keywordSearch":return e.searchTerm!==void 0&&e.searchTerm!=="";case"TIMELINE":return e.startDate!==void 0||e.endDate!==void 0;case"custom":return!0;default:return!1}}function Wa(){return a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true"},a.createElement("circle",{cx:"5.5",cy:"3.5",r:"1.5"}),a.createElement("circle",{cx:"10.5",cy:"3.5",r:"1.5"}),a.createElement("circle",{cx:"5.5",cy:"8",r:"1.5"}),a.createElement("circle",{cx:"10.5",cy:"8",r:"1.5"}),a.createElement("circle",{cx:"5.5",cy:"12.5",r:"1.5"}),a.createElement("circle",{cx:"10.5",cy:"12.5",r:"1.5"}))}const U={filterItem:"FilterListItem-module__filterItem___fDBkbb7u",itemHeader:"FilterListItem-module__itemHeader___jp4epXg-",itemLabel:"FilterListItem-module__itemLabel___cEnbqE59",itemContent:"FilterListItem-module__itemContent___PfVHHhIy",dragHandle:"FilterListItem-module__dragHandle___BwFrILWs",headerActionButton:"FilterListItem-module__headerActionButton___x10Z2Kx0",searchRow:"FilterListItem-module__searchRow___4fUrAgAm",searchInput:"FilterListItem-module__searchInput___v-qwznpk",searchClearButton:"FilterListItem-module__searchClearButton___HXHweIEa",excludeRow:"FilterListItem-module__excludeRow___6hctgE28",excludeRowVisible:"FilterListItem-module__excludeRowVisible___whT6lGyR",excludeCountLabel:"FilterListItem-module__excludeCountLabel___7IQFUJIY",clearAllButton:"FilterListItem-module__clearAllButton___rIGM4EMy",dragging:"FilterListItem-module__dragging___S5-LGyfS"};function gt(){return gt=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)({}).hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},gt.apply(null,arguments)}function vl(e){if(e==null)return!1;switch(e.type){case"EXACT_MATCH":return e.values.length>0;case"SELECT":return e.selectedValues.length>0;case"CONTAINS_TEXT":return e.value!=null&&e.value.length>0;case"NUMBER_RANGE":return e.minValue!=null||e.maxValue!=null;case"DATE_RANGE":return e.minValue!=null||e.maxValue!=null;case"TIMELINE":return e.startDate!=null||e.endDate!=null;case"TOGGLE":return e.enabled;case"keywordSearch":return e.searchTerm.length>0;case"hasLink":return e.hasLink;case"linkedProperty":return vl(e.linkedFilterState);case"custom":return!0;default:return!1}}function $a({definition:e,filterKey:n,label:t,filterState:l,onFilterStateChanged:s,onFilterRemoved:o,renderInput:i,dragHandleAttributes:u,dragHandleListeners:c,className:m,style:d}){const[p,E]=r.useState({type:"closed"}),[f,y]=r.useState(!1),T=r.useCallback(A=>{s(n,A)},[n,s]),_=r.useCallback(()=>{E(A=>A.type==="closed"?{type:"open",query:""}:{type:"closed"})},[]),h=r.useCallback(A=>{E({type:"open",query:A.target.value})},[]),b=r.useCallback(()=>{E({type:"open",query:""})},[]),L=r.useCallback(()=>{o==null||o(n)},[n,o]),v=r.useCallback(()=>{y(A=>!A)},[]),S=r.useCallback(A=>{A==null||A.focus({preventScroll:!0})},[]),x=_l(l),I=Ba(l),R=p.type==="open",M=p.type==="open"?p.query:"",g=p.type==="open"?p.query:void 0;return a.createElement("div",{className:w(U.filterItem,m),style:d,"data-has-selection":vl(l)||void 0},a.createElement("div",{className:U.itemHeader},u&&a.createElement(H,gt({className:U.dragHandle,"aria-label":`Reorder ${t}`},u,c),a.createElement(Wa,null)),a.createElement("span",{className:U.itemLabel},t),I&&a.createElement(H,{className:U.headerActionButton,onClick:_,"aria-label":"Search values","aria-pressed":R},a.createElement(Fa,null)),o&&a.createElement(H,{className:U.headerActionButton,onClick:L,"aria-label":`Remove ${t} filter`},a.createElement(Pt,null)),x&&a.createElement(H,{className:U.headerActionButton,onClick:v,"aria-label":"More actions","aria-pressed":f},a.createElement(Da,null))),R&&a.createElement("div",{className:U.searchRow},a.createElement(ae,{type:"text",className:U.searchInput,value:M,onChange:h,placeholder:"Search property values...","aria-label":"Search property values",ref:S}),M&&a.createElement(H,{type:"button",className:U.searchClearButton,onClick:b,"aria-label":"Clear search"},a.createElement(Pt,null))),a.createElement("div",{className:U.itemContent},a.createElement(Ga,{errorMessage:"Error loading filter"},i({definition:e,filterKey:n,filterState:l,onFilterStateChanged:T,searchQuery:g,excludeRowOpen:f}))))}const yt=r.memo($a);function Ua({id:e,definition:n,filterKey:t,label:l,filterState:s,onFilterStateChanged:o,onFilterRemoved:i,renderInput:u}){const{attributes:c,listeners:m,setNodeRef:d,transform:p,transition:E,isDragging:f}=aa({id:e}),y=r.useMemo(()=>({transform:ra.Transform.toString(p),transition:E??void 0}),[p,E]);return a.createElement("div",{ref:d,style:y,className:w(f&&U.dragging)},a.createElement(yt,{definition:n,filterKey:t,label:l,filterState:s,onFilterStateChanged:o,onFilterRemoved:i,renderInput:u,dragHandleAttributes:c,dragHandleListeners:m}))}const Xa=r.memo(Ua),Ya=({transform:e})=>({...e,x:0}),Ka={distance:8},za=[Ya],Qa={role:"button",tabIndex:-1,"aria-disabled":!0,"aria-pressed":void 0,"aria-roledescription":"sortable","aria-describedby":""};function qa({filterDefinitions:e,filterStates:n,onFilterStateChanged:t,onFilterRemoved:l,onOrderChange:s,renderInput:o,getFilterKey:i,getFilterLabel:u,enableSorting:c,className:m,style:d}){const[p,E]=r.useState(null),f=r.useMemo(()=>c&&e?e.map(M=>i(M)):[],[c,e,i]),y=jt(sa,{activationConstraint:Ka}),T=jt(ia,{coordinateGetter:oa}),_=ca(y,T),h=p!=null?f.indexOf(String(p)):-1,b=h>=0&&e?e[h]:void 0,L=r.useMemo(()=>b?i(b):void 0,[b,i]),v=r.useCallback(M=>{E(M.active.id)},[]),S=r.useCallback(M=>{E(null);const{active:g,over:A}=M;if(!A||g.id===A.id)return;const k=f.indexOf(String(g.id)),P=f.indexOf(String(A.id));if(k!==-1&&P!==-1){const O=ua(f,k,P);s==null||s(O)}},[f,s]),x=r.useCallback(()=>{E(null)},[]),I=r.useMemo(()=>({onDragStart({active:M}){const g=f.indexOf(String(M.id)),A=g>=0&&e?e[g]:void 0;return`Picked up ${A?u(A):"filter"} filter`},onDragOver({over:M}){return M?`Moved to position ${f.indexOf(String(M.id))+1} of ${f.length}`:"Not over a droppable area"},onDragEnd({active:M,over:g}){const A=f.indexOf(String(M.id)),k=A>=0&&e?e[A]:void 0,P=k?u(k):"filter";if(g&&M.id!==g.id){const O=f.indexOf(String(g.id));return`Dropped ${P} filter at position ${O+1}`}return`Dropped ${P} filter back in its original position`},onDragCancel({active:M}){const g=f.indexOf(String(M.id)),A=g>=0&&e?e[g]:void 0;return`Cancelled dragging ${A?u(A):"filter"} filter`}}),[e,f,u]),R=r.useMemo(()=>({announcements:I}),[I]);return!e||e.length===0?a.createElement("div",{className:w(Me.content,m),style:d,"data-empty":"true"}):c?a.createElement("div",{className:w(Me.content,m),style:d},a.createElement(da,{sensors:_,collisionDetection:ma,modifiers:za,onDragStart:v,onDragEnd:S,onDragCancel:x,accessibility:R},a.createElement(pa,{items:f,strategy:Ca},e.map((M,g)=>{const A=f[g],k=i(M),P=u(M),O=n.get(k);return a.createElement(Xa,{key:A,id:A,definition:M,filterKey:k,label:P,filterState:O,onFilterStateChanged:t,onFilterRemoved:l,renderInput:o})})),a.createElement(fa,{dropAnimation:null,className:Me.dragOverlay},b&&L&&a.createElement(yt,{definition:b,filterKey:L,label:u(b),filterState:n.get(L),onFilterStateChanged:t,onFilterRemoved:l,renderInput:o,dragHandleAttributes:Qa})))):a.createElement("div",{className:w(Me.content,m),style:d},e.map(M=>{const g=i(M),A=n.get(g);return a.createElement(yt,{key:g,definition:M,filterKey:g,label:u(M),filterState:A,onFilterStateChanged:t,onFilterRemoved:l,renderInput:o})}))}const ne={header:"FilterListHeader-module__header___dkKc0CO-",titleContainer:"FilterListHeader-module__titleContainer___KaePpQIx",title:"FilterListHeader-module__title___xqfWfSzK",titleIcon:"FilterListHeader-module__titleIcon___MQy-dec8",activeCount:"FilterListHeader-module__activeCount___GyBsnsQL",actions:"FilterListHeader-module__actions___YZA7zmGc",collapseButton:"FilterListHeader-module__collapseButton___N1-sj3B3",resetButton:"FilterListHeader-module__resetButton___jLcUypov"};function Ja({title:e,titleIcon:n,collapsed:t=!1,onCollapsedChange:l,showResetButton:s,onReset:o,showActiveFilterCount:i,activeFilterCount:u=0,hasVisibilityChanges:c=!1}){const m=r.useCallback(()=>{l==null||l(!t)},[l,t]);return a.createElement("div",{className:ne.header},a.createElement("div",{className:ne.titleContainer},n&&a.createElement("span",{className:ne.titleIcon},n),e&&a.createElement("span",{className:ne.title},e),i&&u>0&&a.createElement("span",{className:ne.activeCount},"(",u,")")),a.createElement("div",{className:ne.actions},s&&a.createElement(H,{className:ne.resetButton,onClick:o,disabled:u===0&&!c},a.createElement(Pa,null)," Reset filters"),l!=null&&a.createElement(H,{className:ne.collapseButton,onClick:m,"aria-expanded":!t,"aria-label":t?"Expand filters":"Collapse filters"},a.createElement(ja,null))))}const Za=r.memo(Ja);function er(e){const{title:n,titleIcon:t,collapsed:l=!1,onCollapsedChange:s,filterDefinitions:o,filterStates:i,onFilterStateChanged:u,renderInput:c,getFilterKey:m,getFilterLabel:d,activeFilterCount:p,onReset:E,onFilterAdded:f,onFilterRemoved:y,onOrderChange:T,showResetButton:_=!1,showActiveFilterCount:h=!1,hasVisibilityChanges:b,enableSorting:L,className:v,renderAddFilterButton:S}=e,x=r.useCallback(()=>{s==null||s(!1)},[s]),I=l&&s!=null;return a.createElement("div",{className:w(J.filterList,v)},I&&a.createElement("div",{className:J.filterListCollapsed,"data-collapsed":"true"},a.createElement(H,{className:J.expandButton,onClick:x,"aria-label":"Expand filters"},a.createElement(wa,null)),a.createElement("span",{className:J.collapsedLabel},n??"Filters")),a.createElement("div",{className:w(J.expandedContent,I&&J.hiddenContent),"data-active-count":p},(n||t||_||h||s)&&a.createElement(Za,{title:n,titleIcon:t,collapsed:l,onCollapsedChange:s,showResetButton:_,onReset:E,showActiveFilterCount:h,activeFilterCount:p,hasVisibilityChanges:b}),a.createElement("div",{className:J.scrollableContent},a.createElement(qa,{filterDefinitions:o,filterStates:i,onFilterStateChanged:u,onFilterRemoved:y,onOrderChange:T,renderInput:c,getFilterKey:m,getFilterLabel:d,enableSorting:L})),(S!=null||f!=null)&&a.createElement("div",{className:J.addButtonContainer},S?S():a.createElement(H,{type:"button",className:J.addButton,onClick:f},"+ Add filter"))))}const tr={trigger:"AddFilterPopover-module__trigger___8QQBrzPo"};function nr({hiddenDefinitions:e,onShowFilter:n,renderTrigger:t}){return a.createElement($l,{items:e,onItemSelected:n,trigger:t!=null?t():"+ Add filter",triggerClassName:t==null?tr.trigger:void 0,searchPlaceholder:"Search filters",emptyMessage:"No matching filters"})}const lr=r.memo(nr),Ee={textInput:"ContainsTextInput-module__textInput___VE1JFstL",inputGroup:"ContainsTextInput-module__inputGroup___ww0O5kep",searchIcon:"ContainsTextInput-module__searchIcon___O-6jW-zD",input:"ContainsTextInput-module__input___GP3qIOWL",clearButton:"ContainsTextInput-module__clearButton___4A9AsUvv"};function ar({value:e,onChange:n,placeholder:t="Search...",debounceMs:l=300,className:s,style:o,renderSearchIcon:i,renderClearIcon:u}){const[c,m]=r.useState(e??""),d=r.useRef(n);d.current=n;const p=r.useMemo(()=>ht(y=>{d.current(y.length>0?y:void 0)},l),[l]);r.useEffect(()=>()=>{p.cancel()},[p]),r.useEffect(()=>{m(e??""),p.cancel()},[e,p]);const E=r.useCallback(y=>{m(y.target.value),p(y.target.value)},[p]),f=r.useCallback(()=>{m(""),p.cancel(),d.current(void 0)},[p]);return a.createElement("div",{className:w(Ee.textInput,s),style:o,"data-has-value":!!c},a.createElement("div",{className:Ee.inputGroup},i?i():a.createElement("span",{className:Ee.searchIcon},a.createElement(ul,null)),a.createElement(ae,{type:"text",className:Ee.input,value:c,onChange:E,placeholder:t,"aria-label":t}),c&&a.createElement(H,{type:"button",className:Ee.clearButton,onClick:f,"aria-label":"Clear search"},u?u():a.createElement(ml,null))))}const Tt=r.memo(ar),Al=r.createContext(void 0);function rr(){const e=r.useContext(Al);if(e===void 0)throw new Error(ga(63));return e}let Gt=(function(e){return e.checked="data-checked",e.unchecked="data-unchecked",e.disabled="data-disabled",e.readonly="data-readonly",e.required="data-required",e.valid="data-valid",e.invalid="data-invalid",e.touched="data-touched",e.dirty="data-dirty",e.filled="data-filled",e.focused="data-focused",e})({});const Ll={...Ql,checked(e){return e?{[Gt.checked]:""}:{[Gt.unchecked]:""}}},sr=r.forwardRef(function(n,t){const{checked:l,className:s,defaultChecked:o,id:i,inputRef:u,name:c,nativeButton:m=!1,onCheckedChange:d,readOnly:p=!1,required:E=!1,disabled:f=!1,render:y,uncheckedValue:T,..._}=n,{clearErrors:h}=ql(),{state:b,setTouched:L,setDirty:v,validityData:S,setFilled:x,setFocused:I,shouldValidateOnChange:R,validationMode:M,disabled:g,name:A,validation:k}=dl(),{labelId:P}=Jl(),O=g||f,te=A??c,oe=ya(d),z=r.useRef(null),Se=Ea(z,u,k.inputRef),pe=r.useRef(null),Ie=ba(),he=Zl({id:i,implicit:!1,controlRef:pe}),[X,ge]=ha({controlled:l,default:!!o,name:"Switch",state:"checked"});ea({id:Ie,commit:k.commit,value:X,controlRef:pe,name:te,getValue:()=>X}),_a(()=>{z.current&&x(z.current.checked)},[z,x]),la(X,()=>{h(te),v(X!==S.initialValue),x(X),R()?k.commit(X):k.commit(X,!0)});const{getButtonProps:st,buttonRef:ot}=Ta({disabled:O,native:m}),it={id:Ie,role:"switch","aria-checked":X,"aria-readonly":p||void 0,"aria-labelledby":P,onFocus(){O||I(!0)},onBlur(){const $=z.current;!$||O||(L(!0),I(!1),M==="onBlur"&&k.commit($.checked))},onClick($){var ie;p||O||($.preventDefault(),(ie=z==null?void 0:z.current)==null||ie.click())}},G=r.useMemo(()=>va({checked:X,disabled:O,id:he,name:te,required:E,style:Sa,tabIndex:-1,type:"checkbox","aria-hidden":!0,ref:Se,onChange($){if($.nativeEvent.defaultPrevented)return;const ie=$.target.checked,Re=Aa(La,$.nativeEvent);oe==null||oe(ie,Re),!Re.isCanceled&&ge(ie)},onFocus(){var $;($=pe.current)==null||$.focus()}},k.getInputValidationProps),[X,O,Se,he,te,oe,E,ge,k]),Ce=r.useMemo(()=>({...b,checked:X,disabled:O,readOnly:p,required:E}),[b,X,O,p,E]),ye=pl("span",n,{state:Ce,ref:[t,pe,ot],props:[it,k.getValidationProps,_,st],stateAttributesMapping:Ll});return C.jsxs(Al.Provider,{value:Ce,children:[ye,!X&&te&&T!==void 0&&C.jsx("input",{type:"hidden",name:te,value:T}),C.jsx("input",{...G})]})}),or=r.forwardRef(function(n,t){const{render:l,className:s,...o}=n,{state:i}=dl(),u=rr(),c={...i,...u};return pl("span",n,{state:c,ref:t,stateAttributesMapping:Ll,props:o})}),Bt={osdkSwitchRoot:"Switch-module__osdkSwitchRoot___Jp9OHtZ1",osdkSwitchThumb:"Switch-module__osdkSwitchThumb___eXBSyINB"};function tt(){return tt=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)({}).hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},tt.apply(null,arguments)}function ir({className:e,thumbProps:n,...t}){return a.createElement(sr,tt({className:w(Bt.osdkSwitchRoot,e)},t),a.createElement(or,tt({},n,{className:w(Bt.osdkSwitchThumb,n==null?void 0:n.className)})))}const mt={toggleInput:"ToggleInput-module__toggleInput___bbjujXUD",toggleLabel:"ToggleInput-module__toggleLabel___9rnff5JB",labelText:"ToggleInput-module__labelText___jfty2eJo"};function cr({enabled:e,onChange:n,label:t,className:l,style:s}){const o=w(mt.toggleInput,l);return a.createElement("div",{className:o,style:s,"data-enabled":e},a.createElement("label",{className:mt.toggleLabel},a.createElement(ir,{checked:e,onCheckedChange:n}),t&&a.createElement("span",{className:mt.labelText},t)))}const vt=r.memo(cr),pt=20;function ur(e,n,t,l){if(e.length===0)return[];const s=t(n.min),i=t(n.max)-s;if(i===0){const m=e.reduce((d,p)=>d+p.count,0);return[{min:n.min,max:n.max,count:m}]}const u=i/pt,c=new Array(pt).fill(0);for(const{value:m,count:d}of e){const p=Math.min(Math.floor((t(m)-s)/u),pt-1);c[p]+=d}return c.map((m,d)=>({min:l(s+d*u),max:l(s+(d+1)*u),count:m}))}function dr(e){return Math.max(...e.map(n=>n.count),1)}const Y={rangeInput:"RangeInput-module__rangeInput___5IlnpUfs",histogramContainer:"RangeInput-module__histogramContainer___suD4IT5D",histogramBar:"RangeInput-module__histogramBar___togsImv0",rangeInputs:"RangeInput-module__rangeInputs___6f6mnjwL",inputWrapper:"RangeInput-module__inputWrapper___1sk8iEjt",inputLabel:"RangeInput-module__inputLabel___-fR6-r3z",input:"RangeInput-module__input___e4XWn2rB",separator:"RangeInput-module__separator___ml1GvZvm"},W={loadingMessage:"shared-module__loadingMessage___l0c3ANEV",errorMessage:"shared-module__errorMessage___9SeAT7P8",emptyMessage:"shared-module__emptyMessage___z7gK6NAb",tagContainer:"shared-module__tagContainer___iwrGoxe0",tag:"shared-module__tag___p4pKeKBG",tagRemove:"shared-module__tagRemove___fcKemFM7"};function Sl(e,n){const t=r.useRef(e);return n||(t.current=e),t.current}function nt(){return nt=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)({}).hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},nt.apply(null,arguments)}const Ht=300;function mr({valueCountPairs:e,isLoading:n,minValue:t,maxValue:l,onChange:s,showHistogram:o=!0,className:i,style:u,config:c}){const m=r.useId(),d=r.useId(),[p,E]=r.useState(c.formatValue(t)),[f,y]=r.useState(c.formatValue(l)),T=r.useRef(s);T.current=s;const _=r.useRef(t);_.current=t;const h=r.useRef(l);h.current=l;const b=r.useMemo(()=>ht(A=>{const k=c.parseValue(A);T.current(k,h.current)},Ht),[c]),L=r.useMemo(()=>ht(A=>{const k=c.parseValue(A);T.current(_.current,k)},Ht),[c]);r.useEffect(()=>{E(c.formatValue(t)),b.cancel()},[t,c,b]),r.useEffect(()=>{y(c.formatValue(l)),L.cancel()},[l,c,L]),r.useEffect(()=>()=>{b.cancel(),L.cancel()},[b,L]);const v=Sl(e,n),S=r.useMemo(()=>{if(v.length===0)return{min:void 0,max:void 0};const A=v.reduce((P,O)=>Math.min(P,c.toNumber(O.value)),1/0),k=v.reduce((P,O)=>Math.max(P,c.toNumber(O.value)),-1/0);return{min:c.fromNumber(A),max:c.fromNumber(k)}},[v,c]),x=r.useMemo(()=>({dataMin:S.min,dataMax:S.max}),[S.min,S.max]),I=r.useMemo(()=>!o||v.length===0||S.min===void 0||S.max===void 0?[]:ur(v,{min:S.min,max:S.max},c.toNumber,c.fromNumber),[o,v,S,c]),R=r.useMemo(()=>dr(I),[I]),M=r.useCallback(A=>{const k=A.target.value;E(k),b(k)},[b]),g=r.useCallback(A=>{const k=A.target.value;y(k),L(k)},[L]);return a.createElement("div",{className:w(Y.rangeInput,i),style:u,"data-loading":n},o&&I.length===0&&!n&&a.createElement("div",{className:W.emptyMessage},"No values available"),o&&I.length>0&&a.createElement("div",{className:Y.histogramContainer},I.map((A,k)=>{const P=A.count/R*100,O=(t===void 0||c.toNumber(A.max)>=c.toNumber(t))&&(l===void 0||c.toNumber(A.min)<=c.toNumber(l));return a.createElement("div",{key:k,className:Y.histogramBar,"data-in-range":O,style:{height:`${Math.max(P,2)}%`},title:c.formatTooltip(A.min,A.max,A.count)})})),a.createElement("div",{className:Y.rangeInputs},a.createElement("div",{className:Y.inputWrapper},a.createElement("label",{htmlFor:m,className:Y.inputLabel},c.minLabel),a.createElement(ae,nt({id:m,type:c.inputType,className:Y.input,value:p,onChange:M,placeholder:x.dataMin!==void 0&&c.formatPlaceholder?c.formatPlaceholder(x.dataMin):void 0},c.inputProps))),a.createElement("span",{className:Y.separator,"aria-hidden":"true"},"–"),a.createElement("div",{className:Y.inputWrapper},a.createElement("label",{htmlFor:d,className:Y.inputLabel},c.maxLabel),a.createElement(ae,nt({id:d,type:c.inputType,className:Y.input,value:f,onChange:g,placeholder:x.dataMax!==void 0&&c.formatPlaceholder?c.formatPlaceholder(x.dataMax):void 0},c.inputProps)))))}const Il=r.memo(mr);function Et(){return Et=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)({}).hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},Et.apply(null,arguments)}const pr={inputType:"date",formatValue:B,parseValue:ve,toNumber:e=>e.getTime(),fromNumber:e=>new Date(e),minLabel:"From",maxLabel:"To",formatTooltip:(e,n,t)=>`${B(e)} - ${B(n)}: ${t.toLocaleString()}`};function Cr(e){return a.createElement(Il,Et({},e,{config:pr}))}const Rl=r.memo(Cr),fr={linkedProperty:"LinkedPropertyInput-module__linkedProperty___aWk3D3GM"},Q={listogram:"ListogramInput-module__listogram___QdvKag0g",container:"ListogramInput-module__container___hMngsxor",row:"ListogramInput-module__row___rps-rpjo",label:"ListogramInput-module__label___hQ3nLEpx",emptyLabel:"ListogramInput-module__emptyLabel___4JpVowj8",bar:"ListogramInput-module__bar___iUqTfYSm",barFill:"ListogramInput-module__barFill___za7KWtcm",viewAllButton:"ListogramInput-module__viewAllButton___CxQzJRxu",checkbox:"ListogramInput-module__checkbox___M-faPyIy",count:"ListogramInput-module__count___81M2s4eq"},Ct={container:"ListogramSkeleton-module__container___OhztnRu9",row:"ListogramSkeleton-module__row___-JgFlzSX",flexBar:"ListogramSkeleton-module__flexBar___ohU5Nawa"},hr=[{textWidth:"50%"},{textWidth:"35%"},{textWidth:"60%"}];function gr(){return a.createElement("div",{className:Ct.container},hr.map((e,n)=>a.createElement("div",{key:n,className:Ct.row},a.createElement(ut,{height:"var(--osdk-filter-skeleton-text-height)",maxWidth:e.textWidth,className:Ct.flexBar}),a.createElement(ut,{width:"var(--osdk-filter-listogram-bar-width)",height:"var(--osdk-filter-listogram-bar-height)"}),a.createElement(ut,{width:"var(--osdk-filter-skeleton-count-width)",height:"var(--osdk-filter-skeleton-text-height)"}))))}function yr({values:e,maxCount:n,isLoading:t,error:l,selectedValues:s,onChange:o,colorMap:i,displayMode:u="full",showCount:c=!0,isExcluding:m,className:d,style:p,maxVisibleItems:E,searchQuery:f,renderValue:y}){const[T,_]=r.useState(!1),h=Sl(e,t),b=r.useMemo(()=>new Set(s),[s]),L=r.useCallback(R=>{b.has(R)?o(s.filter(M=>M!==R)):o([...s,R])},[s,b,o]),v=r.useMemo(()=>f?Ha(h,f,R=>(y==null?void 0:y(R.value))??R.value):h,[h,f,y]),S=r.useMemo(()=>{const R=v.filter(g=>b.has(g.value)),M=v.filter(g=>!b.has(g.value));return[...R,...M]},[v,b]),x=r.useMemo(()=>T||!E?S:S.slice(0,E),[S,E,T]),I=E!=null&&S.length>E;return a.createElement("div",{className:w(Q.listogram,d),style:p,"data-loading":t&&v.length>0},l&&a.createElement("div",{className:W.errorMessage},"Error loading values: ",l.message),!l&&v.length===0&&t&&a.createElement(gr,null),!l&&v.length===0&&!t&&a.createElement("div",{className:W.emptyMessage},"No values available"),v.length>0&&a.createElement("div",{className:Q.container},x.map(({value:R,count:M})=>{const g=n>0?M/n*100:0,A=i==null?void 0:i[R],k=R==="",P=k?"No value":(y==null?void 0:y(R))??R;return a.createElement(H,{key:R,className:Q.row,onClick:()=>L(R),"aria-pressed":b.has(R),style:A||g>0?{"--osdk-filter-listogram-bar-fill-scale":g/100,...A?{"--osdk-filter-listogram-row-bar-color":A}:void 0}:void 0},a.createElement("span",{className:Q.checkbox,onClick:O=>O.stopPropagation()},a.createElement(fl,{checked:b.has(R),onCheckedChange:()=>L(R),isExcluding:m})),a.createElement("span",{className:w(Q.label,k&&Q.emptyLabel),"data-excluding":m&&b.has(R)||void 0},P),c&&u!=="minimal"&&a.createElement("span",{className:Q.count},M.toLocaleString()),u==="full"&&a.createElement("span",{className:Q.bar},a.createElement("span",{className:Q.barFill})))}),I&&!T&&a.createElement(H,{type:"button",className:Q.viewAllButton,onClick:()=>_(!0)},"View all (",S.length,")")))}const At=r.memo(yr),ke={multiDate:"MultiDateInput-module__multiDate___iR6FxhLx",clearAll:"MultiDateInput-module__clearAll___D8NKeHuy",calendarContainer:"MultiDateInput-module__calendarContainer___w1g1yBwS",input:"MultiDateInput-module__input___TcOQZD9Z"};function Er({selectedDates:e,onChange:n,className:t,style:l,minDate:s,maxDate:o,showClearAll:i=!0}){const u=r.useCallback(p=>{const E=B(p);e.some(y=>B(y)===E)||n([...e,p].sort((y,T)=>y.getTime()-T.getTime()))},[e,n]),c=r.useCallback(p=>{const E=B(p);n(e.filter(f=>B(f)!==E))},[e,n]),m=r.useCallback(()=>{n([])},[n]),d=r.useCallback(p=>{const E=ve(p.target.value);E&&(u(E),p.target.value="")},[u]);return a.createElement("div",{className:w(ke.multiDate,t),style:l},e.length>0&&a.createElement("div",{className:W.tagContainer},e.map(p=>a.createElement("span",{key:p.toISOString(),className:W.tag},et(p),a.createElement(H,{className:W.tagRemove,onClick:()=>c(p),"aria-label":`Remove ${et(p)}`},"×"))),i&&e.length>1&&a.createElement(H,{className:ke.clearAll,onClick:m,"aria-label":"Clear all dates"},"Clear all")),a.createElement("div",{className:ke.calendarContainer},a.createElement(ae,{type:"date",className:ke.input,onChange:d,min:s?B(s):void 0,max:o?B(o):void 0,"aria-label":"Add date"})))}const Ml=r.memo(Er),ft={multiSelect:"MultiSelectInput-module__multiSelect___QW1VndMR",itemLabel:"MultiSelectInput-module__itemLabel___Kkk-GsEl",itemCount:"MultiSelectInput-module__itemCount___YAf51fvo"};function br({values:e,isLoading:n,error:t,selectedValues:l,onChange:s,className:o,style:i,placeholder:u="Select values...",showCounts:c=!0,ariaLabel:m="Search values",renderValue:d}){const p=r.useCallback(h=>{s(h??[])},[s]),E=r.useMemo(()=>e.map(({value:h})=>h),[e]),f=r.useMemo(()=>new Map(e.map(({value:h,count:b})=>[h,b])),[e]),y=r.useMemo(()=>d?(h,b)=>d(h).toLowerCase().includes(b.toLowerCase()):void 0,[d]),T=r.useCallback(h=>a.createElement(F.Item,{key:h,value:h},a.createElement(F.ItemIndicator,null),a.createElement("span",{className:ft.itemLabel},d?d(h):h),c&&a.createElement("span",{className:ft.itemCount},"(",(f.get(h)??0).toLocaleString(),")")),[f,c,d]),_=r.useCallback(h=>a.createElement(a.Fragment,null,h.map(b=>a.createElement(F.Chip,{key:b,"aria-label":b},d?d(b):b,a.createElement(F.ChipRemove,null))),a.createElement(F.Input,{placeholder:h.length>0?"":u,"aria-label":m})),[u,m,d]);return a.createElement("div",{className:w(ft.multiSelect,o),style:i,"data-loading":n},t&&a.createElement("div",{className:W.errorMessage},"Error loading options: ",t.message),!t&&e.length===0&&a.createElement("div",{className:W.emptyMessage},n?"Loading options...":"No options available"),(e.length>0||n)&&a.createElement(F.Root,{multiple:!0,value:l,onValueChange:p,items:E,filter:y},n&&a.createElement("div",{className:W.loadingMessage},"Updating..."),a.createElement(F.Chips,null,a.createElement(F.Value,null,_)),a.createElement(F.Portal,null,a.createElement(F.Positioner,null,a.createElement(F.Popup,null,a.createElement(F.Empty,null,"No matching options"),a.createElement(F.List,null,T))))))}const Lt=r.memo(br),be={nullWrapper:"NullValueWrapper-module__nullWrapper___hfIurJcX",nullValueRow:"NullValueWrapper-module__nullValueRow___sHIqcE89",nullLabel:"NullValueWrapper-module__nullLabel___D-f1K2Aq",nullLabelText:"NullValueWrapper-module__nullLabelText___jzAptlbZ",count:"NullValueWrapper-module__count___-Rsq7EuS"};function _r({nullCount:e,isLoading:n,error:t,includeNull:l=!1,onIncludeNullChange:s,showNullCount:o=!0,children:i,className:u,style:c}){const m=r.useCallback(()=>{s(!l)},[l,s]);return a.createElement("div",{className:w(be.nullWrapper,u),style:c},i,a.createElement("div",{className:be.nullValueRow,"data-checked":l,"data-loading":n},a.createElement("label",{className:be.nullLabel},a.createElement(fl,{checked:l,onCheckedChange:m}),a.createElement("span",{className:be.nullLabelText},"No value")),o&&!t&&a.createElement("span",{className:be.count},e.toLocaleString())),t&&a.createElement("div",{className:W.errorMessage},"Failed to load null count"))}const lt=r.memo(_r);function bt(){return bt=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)({}).hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},bt.apply(null,arguments)}function Tr(e){return e!==void 0?String(e):""}function vr(e){if(e==="")return;const n=parseFloat(e);return isNaN(n)?void 0:n}const Ar={inputType:"number",formatValue:Tr,parseValue:vr,toNumber:e=>e,fromNumber:e=>e,minLabel:"Min",maxLabel:"Max",formatTooltip:(e,n,t)=>`${e.toFixed(1)} - ${n.toFixed(1)}: ${t.toLocaleString()}`,formatPlaceholder:e=>e.toFixed(0),inputProps:{step:"any"}};function Lr(e){return a.createElement(Il,bt({},e,{config:Ar}))}const kl=r.memo(Lr),Ne={singleDate:"SingleDateInput-module__singleDate___vuPq29dO",dateContainer:"SingleDateInput-module__dateContainer___8nbNGHTi",input:"SingleDateInput-module__input___SijNvgB7",clearButton:"SingleDateInput-module__clearButton___q1-uPMWI"};function Sr({selectedDate:e,onChange:n,className:t,style:l,minDate:s,maxDate:o,placeholder:i="Select a date...",showClearButton:u=!0}){const c=r.useCallback(d=>{const p=ve(d.target.value);n(p)},[n]),m=r.useCallback(()=>{n(void 0)},[n]);return a.createElement("div",{className:w(Ne.singleDate,t),style:l},a.createElement("div",{className:Ne.dateContainer},a.createElement(ae,{type:"date",className:Ne.input,value:B(e),onChange:c,min:s?B(s):void 0,max:o?B(o):void 0,placeholder:i,"aria-label":"Select date"}),u&&e!==void 0&&a.createElement(H,{className:Ne.clearButton,onClick:m,"aria-label":"Clear date"},"×")))}const Nl=r.memo(Sr),_e={singleSelect:"SingleSelectInput-module__singleSelect___c08JWaD4",selectContainer:"SingleSelectInput-module__selectContainer___QBp8RBCT",clearButton:"SingleSelectInput-module__clearButton___mnHKL2FB",itemLabel:"SingleSelectInput-module__itemLabel___17C5AHWx",itemCount:"SingleSelectInput-module__itemCount___QuWz2Ynl"};function Ir({values:e,isLoading:n,error:t,selectedValue:l,onChange:s,className:o,style:i,placeholder:u="Select a value...",showClearButton:c=!0,showCounts:m=!1,ariaLabel:d="Select value",renderValue:p}){const E=r.useCallback(h=>{s(h??void 0)},[s]),f=r.useMemo(()=>e.map(({value:h})=>h),[e]),y=r.useMemo(()=>new Map(e.map(({value:h,count:b})=>[h,b])),[e]),T=r.useMemo(()=>p?(h,b)=>p(h).toLowerCase().includes(b.toLowerCase()):void 0,[p]),_=r.useCallback(h=>a.createElement(F.Item,{key:h,value:h},a.createElement(F.ItemIndicator,null),a.createElement("span",{className:_e.itemLabel},p?p(h):h),m&&a.createElement("span",{className:_e.itemCount},"(",(y.get(h)??0).toLocaleString(),")")),[y,m,p]);return a.createElement("div",{className:w(_e.singleSelect,o),style:i,"data-loading":n},n&&a.createElement("div",{className:W.loadingMessage},"Loading options..."),t&&a.createElement("div",{className:W.errorMessage},"Error loading options: ",t.message),!n&&!t&&e.length===0&&a.createElement("div",{className:W.emptyMessage},"No options available"),(e.length>0||n)&&a.createElement("div",{className:_e.selectContainer},a.createElement(F.Root,{value:l??null,onValueChange:E,items:f,filter:T},a.createElement(F.SearchInput,{placeholder:u,"aria-label":d}),c&&l!==void 0&&a.createElement(F.Clear,{className:_e.clearButton}),a.createElement(F.Portal,null,a.createElement(F.Positioner,null,a.createElement(F.Popup,null,a.createElement(F.Empty,null,"No matching options"),a.createElement(F.List,null,_)))))))}const St=r.memo(Ir),Wt={textTags:"TextTagsInput-module__textTags___3hHCVJWH",input:"TextTagsInput-module__input___Z1Od1KUG"},$t=/[,\n]/,Rr=r.memo(function({tag:e,onRemove:n}){const t=r.useCallback(()=>{n(e)},[e,n]);return a.createElement("span",{className:W.tag},e,a.createElement(H,{type:"button",className:W.tagRemove,onClick:t,"aria-label":`Remove ${e}`},"×"))});function Mr({suggestions:e,isLoading:n,error:t,tags:l,onChange:s,className:o,style:i,placeholder:u="Add a tag...",allowCustomTags:c=!0,suggestionLimit:m=10,ariaLabel:d="Add tag"}){const[p,E]=r.useState(""),f=r.useMemo(()=>{if(!m)return[];const v=p.toLowerCase();return e.filter(S=>(!p.trim()||S.value.toLowerCase().includes(v))&&!l.includes(S.value)).slice(0,m)},[e,p,l,m]),y=r.useCallback(v=>{const S=v.trim();S&&!l.includes(S)&&s([...l,S]),E("")},[l,s]),T=r.useCallback(v=>{s(l.filter(S=>S!==v))},[l,s]),_=r.useCallback(v=>{s(v??[])},[s]),h=r.useCallback(v=>{E(v)},[]),b=r.useCallback(v=>{if(v.key==="Enter"&&p.trim()){if(f.length>0)return;v.preventDefault(),c&&y(p)}else v.key==="Backspace"&&!p&&l.length>0&&T(l[l.length-1])},[p,l,y,T,c,f]),L=r.useCallback(v=>{const S=v.clipboardData.getData("text");if($t.test(S)){v.preventDefault();const x=S.split($t).map(I=>I.trim()).filter(I=>I&&!l.includes(I));x.length>0&&s([...l,...x])}},[l,s]);return a.createElement("div",{className:w(Wt.textTags,o),style:i,"data-loading":n},t&&a.createElement("div",{className:W.errorMessage},"Error loading suggestions: ",t.message),a.createElement(F.Root,{multiple:!0,value:l,onValueChange:_,inputValue:p,onInputValueChange:h},l.length>0&&a.createElement("div",{className:W.tagContainer},l.map(v=>a.createElement(Rr,{key:v,tag:v,onRemove:T}))),a.createElement(F.SearchInput,{className:Wt.input,placeholder:l.length>0?"":u,onKeyDown:b,onPaste:L,"aria-label":d}),a.createElement(F.Portal,null,a.createElement(F.Positioner,null,a.createElement(F.Popup,null,f.length===0?c&&p.trim()?a.createElement(F.Empty,null,'Press Enter to add "',p,'"'):a.createElement(F.Empty,null,m?"No suggestions":"Type to add a tag"):f.map(({value:v,count:S})=>a.createElement(F.Item,{key:v,value:v},v," (",S.toLocaleString(),")")))))),n&&!!m&&a.createElement("div",{className:W.loadingMessage},"Loading suggestions..."))}const It=r.memo(Mr),fe={timeline:"TimelineInput-module__timeline___43N82HCH",labels:"TimelineInput-module__labels___Co8bihV9",clearButton:"TimelineInput-module__clearButton___6TCIW46Z",brush:"TimelineInput-module__brush___DCoA1XWA",input:"TimelineInput-module__input___yAEKg6Mr"};function kr({startDate:e,endDate:n,onChange:t,className:l,minDate:s,maxDate:o}){const i=r.useCallback(p=>{const E=ve(p.target.value);t(E,n)},[t,n]),u=r.useCallback(p=>{const E=ve(p.target.value);t(e,E)},[t,e]),c=r.useCallback(()=>{t(void 0,void 0)},[t]),m=r.useMemo(()=>n??o,[n,o]),d=r.useMemo(()=>e??s,[e,s]);return a.createElement("div",{className:w(fe.timeline,l)},a.createElement("div",{className:fe.labels},a.createElement("span",null,et(e,"—")),a.createElement("span",null,"to"),a.createElement("span",null,et(n,"—")),(e||n)&&a.createElement(H,{type:"button",onClick:c,"aria-label":"Clear range",className:fe.clearButton},"×")),a.createElement("div",{className:fe.brush},a.createElement(ae,{type:"date",className:fe.input,value:B(e),onChange:i,min:s?B(s):void 0,max:m?B(m):void 0,"aria-label":"Start date"}),a.createElement("span",null,"—"),a.createElement(ae,{type:"date",className:fe.input,value:B(n),onChange:u,min:d?B(d):void 0,max:o?B(o):void 0,"aria-label":"End date"})))}const xl=r.memo(kr);function re(e,n,t,l){const s=r.useMemo(()=>({$select:{$count:"unordered"},$groupBy:{[n]:{$exact:{$includeNullValue:!0}}}}),[n]),o=r.useMemo(()=>({aggregate:s,where:l==null?void 0:l.where,objectSet:t}),[s,l==null?void 0:l.where,t]),{data:i,isLoading:u,error:c}=ue(e,o),m=r.useMemo(()=>{if(!i)return{data:[],maxCount:0};const d=[];let p=0;for(const f of i){const y=f.$group[n],T=f.$count??0;y==null?d.push({value:"",count:T,isNull:!0}):d.push({value:String(y),count:T}),p=Math.max(p,T)}return((l==null?void 0:l.sortBy)??"count")==="count"?d.sort((f,y)=>y.count-f.count||f.value.localeCompare(y.value)):d.sort((f,y)=>f.value.localeCompare(y.value)),l!=null&&l.limit&&d.length>l.limit?{data:d.slice(0,l.limit),maxCount:p}:{data:d,maxCount:p}},[i,n,l==null?void 0:l.limit,l==null?void 0:l.sortBy]);return{data:m.data,maxCount:m.maxCount,isLoading:u,error:c??null}}function Rt(e){return{$select:{$count:"unordered"},$groupBy:{[e]:"exact"}}}function Mt(){return{$select:{$count:"unordered"}}}function kt(e){return{[e]:{$isNull:!0}}}function Nt(e){if(e!==void 0)return String(e)}function le(e){return e===void 0?[]:e.map(n=>String(n))}function Nr({objectSet:e,definition:n,filterState:t,onFilterStateChanged:l,searchQuery:s,className:o,style:i}){const u=r.useMemo(()=>e.pivotTo(n.linkName),[e,n.linkName]),c=u.$objectSetInternals.def,m=n.linkedPropertyKey,d=(t==null?void 0:t.type)==="linkedProperty"?t.linkedFilterState:void 0,p=(d==null?void 0:d.isExcluding)??!1,E=d==null?void 0:d.includeNull,f=r.useCallback(g=>{l({type:"linkedProperty",linkedFilterState:g})},[l]),y=r.useCallback(g=>{f({type:"SELECT",selectedValues:g,isExcluding:p})},[f,p]),T=r.useCallback(g=>{f({type:"SELECT",selectedValues:g!==void 0?[g]:[],isExcluding:p})},[f,p]),_=r.useCallback(g=>{f({type:"CONTAINS_TEXT",value:g})},[f]),h=r.useCallback(g=>{f({type:"TOGGLE",enabled:g})},[f]),b=r.useCallback((g,A)=>{f({type:"NUMBER_RANGE",minValue:g,maxValue:A,includeNull:E})},[f,E]),L=r.useCallback((g,A)=>{f({type:"DATE_RANGE",minValue:g,maxValue:A,includeNull:E})},[f,E]),v=r.useCallback(g=>{f({type:"EXACT_MATCH",values:g,isExcluding:p})},[f,p]),S=r.useCallback(g=>{f({type:"SELECT",selectedValues:g!==void 0?[g]:[],isExcluding:p})},[f,p]),x=r.useCallback(g=>{f({type:"SELECT",selectedValues:g})},[f]),I=r.useCallback((g,A)=>{f({type:"TIMELINE",startDate:g,endDate:A,isExcluding:p})},[f,p]),R=r.useCallback(g=>{(d==null?void 0:d.type)==="NUMBER_RANGE"?f({...d,includeNull:g}):(d==null?void 0:d.type)==="DATE_RANGE"?f({...d,includeNull:g}):f({type:"NUMBER_RANGE",minValue:void 0,maxValue:void 0,includeNull:g})},[f,d]),M=(()=>{switch(n.linkedFilterComponent){case"MULTI_SELECT":{const g=(d==null?void 0:d.type)==="SELECT"?le(d.selectedValues):[];return a.createElement(Fr,{objectType:c,objectSet:u,propertyKey:m,selectedValues:g,onChange:y,showCount:n.showCount})}case"SINGLE_SELECT":{const g=(d==null?void 0:d.type)==="SELECT"?Nt(d.selectedValues[0]):void 0;return a.createElement(Dr,{objectType:c,objectSet:u,propertyKey:m,selectedValue:g,onChange:T,showCount:n.showCount})}case"CONTAINS_TEXT":{const g=(d==null?void 0:d.type)==="CONTAINS_TEXT"?d.value:void 0;return a.createElement(Tt,{value:g,onChange:_,placeholder:`Search ${String(n.linkedPropertyKey)}...`})}case"TOGGLE":{const g=(d==null?void 0:d.type)==="TOGGLE"?d.enabled:!1;return a.createElement(vt,{enabled:g,onChange:h})}case"NUMBER_RANGE":{const g=(d==null?void 0:d.type)==="NUMBER_RANGE"?d:void 0;return a.createElement(wr,{objectType:c,objectSet:u,propertyKey:m,minValue:g==null?void 0:g.minValue,maxValue:g==null?void 0:g.maxValue,includeNull:g==null?void 0:g.includeNull,onChange:b,onNullChange:R})}case"DATE_RANGE":{const g=(d==null?void 0:d.type)==="DATE_RANGE"?d:void 0;return a.createElement(Pr,{objectType:c,objectSet:u,propertyKey:m,minValue:g==null?void 0:g.minValue,maxValue:g==null?void 0:g.maxValue,includeNull:g==null?void 0:g.includeNull,onChange:L,onNullChange:R})}case"LISTOGRAM":{const g=(d==null?void 0:d.type)==="EXACT_MATCH"?d:void 0,A=g?le(g.values):[];return a.createElement(Or,{objectType:c,objectSet:u,propertyKey:m,selectedValues:A,onChange:v,searchQuery:s,showCount:n.showCount})}case"TEXT_TAGS":{const g=(d==null?void 0:d.type)==="EXACT_MATCH"?d:void 0,A=g?le(g.values):[];return a.createElement(jr,{objectType:c,objectSet:u,propertyKey:m,tags:A,onChange:v})}case"SINGLE_DATE":{const g=(d==null?void 0:d.type)==="SELECT"&&d.selectedValues[0]instanceof Date?d.selectedValues[0]:void 0;return a.createElement(Nl,{selectedDate:g,onChange:S,showClearButton:!0})}case"MULTI_DATE":{const g=(d==null?void 0:d.type)==="SELECT"?d.selectedValues.filter(A=>A instanceof Date):[];return a.createElement(Ml,{selectedDates:g,onChange:x,showClearAll:!0})}case"TIMELINE":{const g=(d==null?void 0:d.type)==="TIMELINE"?d:void 0;return a.createElement(xl,{startDate:g==null?void 0:g.startDate,endDate:g==null?void 0:g.endDate,onChange:I})}default:return de(n.linkedFilterComponent)}})();return a.createElement("div",{className:w(fr.linkedProperty,o),style:i},M)}const xr=r.memo(Nr);function Fr({objectType:e,objectSet:n,propertyKey:t,selectedValues:l,onChange:s,showCount:o}){const{data:i,isLoading:u,error:c}=re(e,t,n);return a.createElement(Lt,{values:i,isLoading:u,error:c,selectedValues:l,onChange:s,showCounts:o})}function Dr({objectType:e,objectSet:n,propertyKey:t,selectedValue:l,onChange:s,showCount:o}){const{data:i,isLoading:u,error:c}=re(e,t,n);return a.createElement(St,{values:i,isLoading:u,error:c,selectedValue:l,onChange:s,showCounts:o,ariaLabel:`Select ${t}`})}function Or({objectType:e,objectSet:n,propertyKey:t,selectedValues:l,onChange:s,searchQuery:o,showCount:i}){const{data:u,maxCount:c,isLoading:m,error:d}=re(e,t,n);return a.createElement(At,{values:u,maxCount:c,isLoading:m,error:d,selectedValues:l,onChange:s,searchQuery:o,showCount:i})}function jr({objectType:e,objectSet:n,propertyKey:t,tags:l,onChange:s}){const o=r.useMemo(()=>({limit:50}),[]),{data:i,isLoading:u,error:c}=re(e,t,n,o);return a.createElement(It,{suggestions:i,isLoading:u,error:c,tags:l,onChange:s,suggestionLimit:10})}function Fl(e,n,t){const l=r.useMemo(()=>Rt(n),[n]),s=r.useMemo(()=>({aggregate:l,objectSet:t}),[l,t]),{data:o,isLoading:i}=ue(e,s),u=r.useMemo(()=>Mt(),[]),c=r.useMemo(()=>kt(n),[n]),m=r.useMemo(()=>({where:c,aggregate:u,objectSet:t}),[c,u,t]),{data:d,isLoading:p}=ue(e,m),E=r.useMemo(()=>{if(!d)return 0;const f=d;return"$count"in f&&typeof f.$count=="number"?f.$count:0},[d]);return{aggregateData:o,histLoading:i,nullCount:E,nullLoading:p}}function wr({objectType:e,objectSet:n,propertyKey:t,minValue:l,maxValue:s,includeNull:o,onChange:i,onNullChange:u}){const{aggregateData:c,histLoading:m,nullCount:d,nullLoading:p}=Fl(e,t,n),E=r.useMemo(()=>{if(!c)return[];const f=[];for(const y of c){const T=y.$group[t];if(T!=null){const _=parseFloat(String(T));isNaN(_)||f.push({value:_,count:y.$count??0})}}return f},[c,t]);return a.createElement(lt,{nullCount:d,isLoading:p,includeNull:o,onIncludeNullChange:u},a.createElement(kl,{valueCountPairs:E,isLoading:m,minValue:l,maxValue:s,onChange:i}))}function Pr({objectType:e,objectSet:n,propertyKey:t,minValue:l,maxValue:s,includeNull:o,onChange:i,onNullChange:u}){const{aggregateData:c,histLoading:m,nullCount:d,nullLoading:p}=Fl(e,t,n),E=r.useMemo(()=>{if(!c)return[];const f=[];for(const y of c){const T=y.$group[t];if(T!=null){const _=new Date(String(T));isNaN(_.getTime())||f.push({value:_,count:y.$count??0})}}return f},[c,t]);return a.createElement(lt,{nullCount:d,isLoading:p,includeNull:o,onIncludeNullChange:u},a.createElement(Rl,{valueCountPairs:E,isLoading:m,minValue:l,maxValue:s,onChange:i}))}const Z={excludeDropdownContainer:"ExcludeDropdown-module__excludeDropdownContainer___16Eyv1BU",trigger:"ExcludeDropdown-module__trigger___346CrPQn",triggerLabel:"ExcludeDropdown-module__triggerLabel___OBppf5WL",positioner:"ExcludeDropdown-module__positioner___LVlsNlR4",popup:"ExcludeDropdown-module__popup___Svl-sCH5",menuItem:"ExcludeDropdown-module__menuItem___w59fRAgh",menuItemCheck:"ExcludeDropdown-module__menuItemCheck___kQ1o9GJk"};function Vr({isExcluding:e,onToggleExclude:n}){const t=e?"Excluding":"Keeping",l=r.useCallback(()=>{e&&n()},[e,n]),s=r.useCallback(()=>{e||n()},[e,n]);return a.createElement("div",{className:Z.excludeDropdownContainer},a.createElement(Ul,null,a.createElement(Xl,{className:Z.trigger,"aria-label":t,"data-excluding":e||void 0},e&&a.createElement(Va,null),a.createElement("span",{className:Z.triggerLabel},t),a.createElement(Oa,null)),a.createElement(Yl,null,a.createElement(Kl,{className:Z.positioner,sideOffset:4},a.createElement(zl,{className:Z.popup},a.createElement(Ot,{className:Z.menuItem,onClick:l},a.createElement("span",{className:Z.menuItemCheck},!e&&a.createElement(Vt,null)),"Keeping"),a.createElement(Ot,{className:Z.menuItem,onClick:s},a.createElement("span",{className:Z.menuItemCheck},e&&a.createElement(Vt,null)),"Excluding"))))))}const Gr=r.memo(Vr);function Br(e){return e?e.type==="EXACT_MATCH"?e.values.length:e.type==="SELECT"?e.selectedValues.length:0:0}function Hr({excludeRowOpen:e,filterState:n,onFilterStateChanged:t,totalValueCount:l,onClearAll:s,children:o}){const i=r.useCallback(()=>{n&&t({...n,isExcluding:!n.isExcluding})},[n,t]),u=(n==null?void 0:n.isExcluding)??!1,c=r.useMemo(()=>Br(n),[n]);return _l(n)?a.createElement(a.Fragment,null,a.createElement("div",{"data-exclude-row":!0,className:w(U.excludeRow,{[U.excludeRowVisible]:e??!1})},a.createElement(Gr,{isExcluding:u,onToggleExclude:i}),l!=null&&l>0&&a.createElement("span",{className:U.excludeCountLabel,title:"Approximate count of unique values"},c.toLocaleString()," of"," ",l.toLocaleString()," values"),s&&c>0&&a.createElement(H,{className:U.clearAllButton,onClick:s},"Clear all")),o):a.createElement(a.Fragment,null,o)}const q=r.memo(Hr);function Wr({propertyKey:e,filterState:n,onFilterStateChanged:t}){const l=r.useMemo(()=>(n==null?void 0:n.type)==="CONTAINS_TEXT"?n.value:void 0,[n]),s=r.useCallback(o=>{t({type:"CONTAINS_TEXT",value:o})},[t]);return a.createElement(Tt,{value:l,onChange:s,placeholder:"Search..."})}const $r=r.memo(Wr);function Ur({objectType:e,objectSet:n,propertyKey:t,filterState:l,onFilterStateChanged:s,whereClause:o}){const i=(l==null?void 0:l.type)==="DATE_RANGE"?l:void 0,u=l==null?void 0:l.includeNull,c=r.useCallback(I=>{s({type:"DATE_RANGE",minValue:i==null?void 0:i.minValue,maxValue:i==null?void 0:i.maxValue,includeNull:I})},[s,i==null?void 0:i.minValue,i==null?void 0:i.maxValue]),m=r.useCallback((I,R)=>{s({type:"DATE_RANGE",minValue:I,maxValue:R,includeNull:u})},[s,u]),d=r.useMemo(()=>Rt(t),[t]),p=r.useMemo(()=>({aggregate:d,objectSet:n,where:o}),[d,n,o]),{data:E,isLoading:f}=ue(e,p),y=r.useMemo(()=>{if(!E)return[];const I=[];for(const R of E){const M=R.$group[t];if(M!=null){const g=new Date(String(M));isNaN(g.getTime())||I.push({value:g,count:R.$count??0})}}return I},[E,t]),T=r.useMemo(()=>Mt(),[]),_=r.useMemo(()=>({$and:[kt(t),o]}),[t,o]),h=r.useMemo(()=>({where:_,aggregate:T,objectSet:n}),[_,T,n]),{data:b,isLoading:L,error:v}=ue(e,h),S=r.useMemo(()=>{if(!b)return 0;const I=b;return"$count"in I&&typeof I.$count=="number"?I.$count:0},[b]),x=f||L;return a.createElement(lt,{nullCount:S,isLoading:x,error:v,includeNull:u,onIncludeNullChange:c},a.createElement(Rl,{valueCountPairs:y,isLoading:x,minValue:i==null?void 0:i.minValue,maxValue:i==null?void 0:i.maxValue,onChange:m}))}const Xr=r.memo(Ur);function Yr({objectType:e,objectSet:n,propertyKey:t,filterState:l,onFilterStateChanged:s,whereClause:o,colorMap:i,displayMode:u,showCount:c,maxVisibleItems:m,searchQuery:d,excludeRowOpen:p,renderValue:E}){const f=r.useMemo(()=>(l==null?void 0:l.type)==="EXACT_MATCH"?le(l.values):[],[l]),y=(l==null?void 0:l.isExcluding)??!1,T=r.useCallback(()=>{s({type:"EXACT_MATCH",values:[],isExcluding:y})},[s,y]),_=r.useCallback(I=>{s({type:"EXACT_MATCH",values:I,isExcluding:y})},[s,y]),h=u==="minimal"?"value":"count",b=r.useMemo(()=>({where:o,sortBy:h}),[o,h]),{data:L,maxCount:v,isLoading:S,error:x}=re(e,t,n,b);return a.createElement(q,{excludeRowOpen:p,filterState:l,onFilterStateChanged:s,totalValueCount:L.length,onClearAll:T},a.createElement(At,{values:L,maxCount:v,isLoading:S,error:x,selectedValues:f,onChange:_,colorMap:i,displayMode:u,showCount:c,isExcluding:y,maxVisibleItems:m,searchQuery:d,renderValue:E}))}const Kr=r.memo(Yr);function zr({filterState:e,onFilterStateChanged:n}){const t=r.useMemo(()=>(e==null?void 0:e.type)==="SELECT"?e.selectedValues.filter(o=>o instanceof Date):[],[e]),l=(e==null?void 0:e.isExcluding)??!1,s=r.useCallback(o=>{n({type:"SELECT",selectedValues:o,isExcluding:l})},[n,l]);return a.createElement(Ml,{selectedDates:t,onChange:s})}const Qr=r.memo(zr);function qr({objectType:e,objectSet:n,propertyKey:t,filterState:l,onFilterStateChanged:s,whereClause:o,excludeRowOpen:i,renderValue:u,showCount:c}){const m=r.useMemo(()=>(l==null?void 0:l.type)==="SELECT"?le(l.selectedValues):[],[l]),d=(l==null?void 0:l.isExcluding)??!1,p=r.useCallback(()=>{s({type:"SELECT",selectedValues:[],isExcluding:d})},[s,d]),E=r.useCallback(h=>{s({type:"SELECT",selectedValues:h,isExcluding:d})},[s,d]),f=r.useMemo(()=>({where:o}),[o]),{data:y,isLoading:T,error:_}=re(e,t,n,f);return a.createElement(q,{excludeRowOpen:i,filterState:l,onFilterStateChanged:s,totalValueCount:y.length,onClearAll:p},a.createElement(Lt,{values:y,isLoading:T,error:_,selectedValues:m,onChange:E,showCounts:c,ariaLabel:`Search ${t} values`,renderValue:u}))}const Jr=r.memo(qr);function Zr({objectType:e,objectSet:n,propertyKey:t,filterState:l,onFilterStateChanged:s,whereClause:o}){const i=(l==null?void 0:l.type)==="NUMBER_RANGE"?l:void 0,u=l==null?void 0:l.includeNull,c=r.useCallback(I=>{s({type:"NUMBER_RANGE",minValue:i==null?void 0:i.minValue,maxValue:i==null?void 0:i.maxValue,includeNull:I})},[s,i==null?void 0:i.minValue,i==null?void 0:i.maxValue]),m=r.useCallback((I,R)=>{s({type:"NUMBER_RANGE",minValue:I,maxValue:R,includeNull:u})},[s,u]),d=r.useMemo(()=>Rt(t),[t]),p=r.useMemo(()=>({aggregate:d,objectSet:n,where:o}),[d,n,o]),{data:E,isLoading:f}=ue(e,p),y=r.useMemo(()=>{if(!E)return[];const I=[];for(const R of E){const M=R.$group[t];if(M!=null){const g=parseFloat(String(M));isNaN(g)||I.push({value:g,count:R.$count??0})}}return I},[E,t]),T=r.useMemo(()=>Mt(),[]),_=r.useMemo(()=>({$and:[kt(t),o]}),[t,o]),h=r.useMemo(()=>({where:_,aggregate:T,objectSet:n}),[_,T,n]),{data:b,isLoading:L,error:v}=ue(e,h),S=r.useMemo(()=>{if(!b)return 0;const I=b;return"$count"in I&&typeof I.$count=="number"?I.$count:0},[b]),x=f||L;return a.createElement(lt,{nullCount:S,isLoading:x,error:v,includeNull:u,onIncludeNullChange:c},a.createElement(kl,{valueCountPairs:y,isLoading:x,minValue:i==null?void 0:i.minValue,maxValue:i==null?void 0:i.maxValue,onChange:m}))}const es=r.memo(Zr);function ts({filterState:e,onFilterStateChanged:n}){const t=r.useMemo(()=>(e==null?void 0:e.type)==="SELECT"&&e.selectedValues[0]instanceof Date?e.selectedValues[0]:void 0,[e]),l=(e==null?void 0:e.isExcluding)??!1,s=r.useCallback(o=>{n({type:"SELECT",selectedValues:o!==void 0?[o]:[],isExcluding:l})},[n,l]);return a.createElement(Nl,{selectedDate:t,onChange:s})}const ns=r.memo(ts);function ls({objectType:e,objectSet:n,propertyKey:t,filterState:l,onFilterStateChanged:s,whereClause:o,excludeRowOpen:i,renderValue:u,showCount:c}){const m=r.useMemo(()=>(l==null?void 0:l.type)==="SELECT"?Nt(l.selectedValues[0]):void 0,[l]),d=(l==null?void 0:l.isExcluding)??!1,p=r.useCallback(()=>{s({type:"SELECT",selectedValues:[],isExcluding:d})},[s,d]),E=r.useCallback(h=>{s({type:"SELECT",selectedValues:h!==void 0?[h]:[],isExcluding:d})},[s,d]),f=r.useMemo(()=>({where:o}),[o]),{data:y,isLoading:T,error:_}=re(e,t,n,f);return a.createElement(q,{excludeRowOpen:i,filterState:l,onFilterStateChanged:s,totalValueCount:y.length,onClearAll:p},a.createElement(St,{values:y,isLoading:T,error:_,selectedValue:m,onChange:E,showCounts:c,ariaLabel:`Select ${t}`,renderValue:u}))}const as=r.memo(ls);function rs({objectType:e,objectSet:n,propertyKey:t,filterState:l,onFilterStateChanged:s,whereClause:o,excludeRowOpen:i}){const u=r.useMemo(()=>(l==null?void 0:l.type)==="EXACT_MATCH"?le(l.values):[],[l]),c=(l==null?void 0:l.isExcluding)??!1,m=r.useCallback(()=>{s({type:"EXACT_MATCH",values:[],isExcluding:c})},[s,c]),d=r.useCallback(T=>{s({type:"EXACT_MATCH",values:T,isExcluding:c})},[s,c]),p=r.useMemo(()=>({where:o}),[o]),{data:E,isLoading:f,error:y}=re(e,t,n,p);return a.createElement(q,{excludeRowOpen:i,filterState:l,onFilterStateChanged:s,totalValueCount:E.length,onClearAll:m},a.createElement(It,{suggestions:E,isLoading:f,error:y,tags:u,onChange:d}))}const ss=r.memo(rs);function os({filterState:e,onFilterStateChanged:n}){const{startDate:t,endDate:l}=r.useMemo(()=>(e==null?void 0:e.type)==="TIMELINE"?{startDate:e.startDate,endDate:e.endDate}:{startDate:void 0,endDate:void 0},[e]),s=(e==null?void 0:e.isExcluding)??!1,o=r.useCallback((i,u)=>{n({type:"TIMELINE",startDate:i,endDate:u,isExcluding:s})},[n,s]);return a.createElement(xl,{startDate:t,endDate:l,onChange:o})}const is=r.memo(os);function cs({filterState:e,onFilterStateChanged:n}){const t=(e==null?void 0:e.type)==="TOGGLE"?e.enabled:!1,l=r.useCallback(s=>{n({type:"TOGGLE",enabled:s})},[n]);return a.createElement(vt,{enabled:t,onChange:l})}const us=r.memo(cs);function ds({objectType:e,objectSet:n,definition:t,filterState:l,onFilterStateChanged:s,whereClause:o,searchQuery:i,excludeRowOpen:u}){var c,m;switch(t.filterComponent){case"CONTAINS_TEXT":return a.createElement(q,{excludeRowOpen:u,filterState:l,onFilterStateChanged:s},a.createElement($r,{propertyKey:t.key,filterState:l,onFilterStateChanged:s}));case"TOGGLE":return a.createElement(us,{filterState:l,onFilterStateChanged:s});case"NUMBER_RANGE":return a.createElement(es,{objectType:e,objectSet:n,propertyKey:t.key,filterState:l,onFilterStateChanged:s,whereClause:o});case"DATE_RANGE":return a.createElement(Xr,{objectType:e,objectSet:n,propertyKey:t.key,filterState:l,onFilterStateChanged:s,whereClause:o});case"SINGLE_SELECT":return a.createElement(as,{objectType:e,objectSet:n,propertyKey:t.key,filterState:l,onFilterStateChanged:s,whereClause:o,excludeRowOpen:u,renderValue:t.renderValue,showCount:t.showCount});case"MULTI_SELECT":return a.createElement(Jr,{objectType:e,objectSet:n,propertyKey:t.key,filterState:l,onFilterStateChanged:s,whereClause:o,excludeRowOpen:u,renderValue:t.renderValue,showCount:t.showCount});case"SINGLE_DATE":return a.createElement(ns,{filterState:l,onFilterStateChanged:s});case"MULTI_DATE":return a.createElement(Qr,{filterState:l,onFilterStateChanged:s});case"LISTOGRAM":return a.createElement(Kr,{objectType:e,objectSet:n,propertyKey:t.key,filterState:l,onFilterStateChanged:s,whereClause:o,colorMap:t.colorMap,displayMode:(c=t.listogramConfig)==null?void 0:c.displayMode,showCount:t.showCount,maxVisibleItems:((m=t.listogramConfig)==null?void 0:m.maxVisibleItems)??5,searchQuery:i,excludeRowOpen:u,renderValue:t.renderValue});case"TEXT_TAGS":return a.createElement(ss,{objectType:e,objectSet:n,propertyKey:t.key,filterState:l,onFilterStateChanged:s,whereClause:o,excludeRowOpen:u});case"TIMELINE":return a.createElement(q,{excludeRowOpen:u,filterState:l,onFilterStateChanged:s},a.createElement(is,{filterState:l,onFilterStateChanged:s}));default:return a.createElement("div",{"data-unsupported":"true"},"Unsupported filter component: ",t.filterComponent)}}const ms=r.memo(ds);function ps(e,n,t){const l=r.useMemo(()=>(e==null?void 0:e.type)==="EXACT_MATCH"?le(e.values):[],[e]),s=r.useCallback(()=>{n({type:"EXACT_MATCH",values:[],isExcluding:t})},[n,t]),o=r.useCallback(i=>{n({type:"EXACT_MATCH",values:i,isExcluding:t})},[n,t]);return{selectedValues:l,handleClearAll:s,handleChange:o}}function Cs(e,n,t){const l=r.useMemo(()=>(e==null?void 0:e.type)==="SELECT"?Nt(e.selectedValues[0]):void 0,[e]),s=r.useMemo(()=>(e==null?void 0:e.type)==="SELECT"?le(e.selectedValues):[],[e]),o=r.useCallback(()=>{n({type:"SELECT",selectedValues:[],isExcluding:t})},[n,t]),i=r.useCallback(c=>{n({type:"SELECT",selectedValues:c!==void 0?[c]:[],isExcluding:t})},[n,t]),u=r.useCallback(c=>{n({type:"SELECT",selectedValues:c,isExcluding:t})},[n,t]);return{selectedValue:l,selectedValues:s,handleClearAll:o,handleSingleChange:i,handleMultiChange:u}}function fs({definition:e,filterState:n,onFilterStateChanged:t,searchQuery:l,excludeRowOpen:s}){var m,d;const o=r.useMemo(()=>e.values.map(p=>({value:p,count:0})),[e.values]),i=(n==null?void 0:n.isExcluding)??!1,u=ps(n,t,i),c=Cs(n,t,i);switch(e.filterComponent){case"LISTOGRAM":return a.createElement(q,{excludeRowOpen:s,filterState:n,onFilterStateChanged:t,totalValueCount:o.length,onClearAll:u.handleClearAll},a.createElement(At,{values:o,maxCount:0,isLoading:!1,error:null,selectedValues:u.selectedValues,onChange:u.handleChange,colorMap:e.colorMap,displayMode:(m=e.listogramConfig)==null?void 0:m.displayMode,showCount:e.showCount,isExcluding:i,maxVisibleItems:((d=e.listogramConfig)==null?void 0:d.maxVisibleItems)??5,searchQuery:l,renderValue:e.renderValue}));case"SINGLE_SELECT":return a.createElement(q,{excludeRowOpen:s,filterState:n,onFilterStateChanged:t,totalValueCount:o.length,onClearAll:c.handleClearAll},a.createElement(St,{values:o,isLoading:!1,error:null,selectedValue:c.selectedValue,onChange:c.handleSingleChange,showCounts:e.showCount,ariaLabel:`Select ${e.key}`,renderValue:e.renderValue}));case"MULTI_SELECT":return a.createElement(q,{excludeRowOpen:s,filterState:n,onFilterStateChanged:t,totalValueCount:o.length,onClearAll:c.handleClearAll},a.createElement(Lt,{values:o,isLoading:!1,error:null,selectedValues:c.selectedValues,onChange:c.handleMultiChange,showCounts:e.showCount,ariaLabel:`Search ${e.key} values`,renderValue:e.renderValue}));case"TEXT_TAGS":return a.createElement(q,{excludeRowOpen:s,filterState:n,onFilterStateChanged:t,totalValueCount:o.length,onClearAll:u.handleClearAll},a.createElement(It,{suggestions:o,isLoading:!1,error:null,tags:u.selectedValues,onChange:u.handleChange}));default:return de(e.filterComponent)}}const hs=r.memo(fs);function gs({objectType:e,objectSet:n,definition:t,filterState:l,onFilterStateChanged:s,whereClause:o,searchQuery:i,excludeRowOpen:u}){return a.createElement(Es,{objectType:e,objectSet:n,definition:t,filterState:l,onFilterStateChanged:s,whereClause:o,searchQuery:i,excludeRowOpen:u})}const ys=r.memo(gs);function Es({objectType:e,objectSet:n,definition:t,filterState:l,onFilterStateChanged:s,whereClause:o,searchQuery:i,excludeRowOpen:u}){switch(t.type){case"HAS_LINK":return a.createElement(bs,{filterState:l,onFilterStateChanged:s});case"LINKED_PROPERTY":return n==null?a.createElement(a.Fragment,null):a.createElement(xr,{objectSet:n,definition:t,filterState:l,onFilterStateChanged:s,searchQuery:i});case"KEYWORD_SEARCH":return a.createElement(_s,{filterState:l,onFilterStateChanged:s,placeholder:t.label??"Search..."});case"CUSTOM":{if(!t.renderInput)return a.createElement("div",{"data-unsupported":"true"},"Custom filter missing renderInput");const c=(l==null?void 0:l.type)==="custom"?l:t.filterState;return a.createElement(a.Fragment,null,t.renderInput({objectType:e,objectSet:n,filterState:c,onFilterStateChanged:m=>s(m)}))}case"PROPERTY":return a.createElement(ms,{objectType:e,objectSet:n,definition:t,filterState:l,onFilterStateChanged:s,whereClause:o,searchQuery:i,excludeRowOpen:u});case"STATIC_VALUES":return a.createElement(hs,{definition:t,filterState:l,onFilterStateChanged:s,searchQuery:i,excludeRowOpen:u});default:return a.createElement("div",{"data-unsupported":"true"},"Unsupported filter type")}}const bs=r.memo(function({filterState:e,onFilterStateChanged:n}){const t=(e==null?void 0:e.type)==="hasLink"?e.hasLink:!1,l=r.useCallback(s=>{n({type:"hasLink",hasLink:s})},[n]);return a.createElement(vt,{enabled:t,onChange:l})}),_s=r.memo(function({filterState:e,onFilterStateChanged:n,placeholder:t}){const l=(e==null?void 0:e.type)==="keywordSearch"?e.searchTerm:void 0,s=(e==null?void 0:e.type)==="keywordSearch"?e.operator:"AND",o=r.useCallback(i=>{n({type:"keywordSearch",searchTerm:i??"",operator:s})},[n,s]);return a.createElement(Tt,{value:l,onChange:o,placeholder:t})});function ee(e){switch(e.type){case"PROPERTY":return e.id??e.key;case"HAS_LINK":return e.id??`hasLink:${e.linkName}`;case"LINKED_PROPERTY":return e.id??`linkedProperty:${e.linkName}:${e.linkedPropertyKey}`;case"KEYWORD_SEARCH":return e.id??`keywordSearch-${Array.isArray(e.properties)?e.properties.join("-"):"all"}`;case"CUSTOM":return e.id??e.key;case"STATIC_VALUES":return e.id??e.key;default:return de(e)}}function Ts(e){return typeof e=="object"&&e!=null&&"__compound"in e}const vs={byte:{min:-128,max:127},short:{min:-32768,max:32767},integer:{min:-2147483648,max:2147483647},long:{min:Number.MIN_SAFE_INTEGER,max:Number.MAX_SAFE_INTEGER}};function Ut(e,n){if(n===void 0)return e;const t=vs[n];return t===void 0?e:Math.max(t.min,Math.min(t.max,e))}function Te(e,n){return n==="datetime"?B(e):e.toISOString()}function As(e,n){switch(e.type){case"CONTAINS_TEXT":return e.value?{$containsAnyTerm:e.value}:void 0;case"TOGGLE":return e.enabled;case"DATE_RANGE":{const t=[];return e.minValue!==void 0&&t.push({$gte:Te(e.minValue,n)}),e.maxValue!==void 0&&t.push({$lte:Te(e.maxValue,n)}),t.length===0&&!e.includeNull?void 0:t.length===0&&e.includeNull?{$isNull:!0}:t.length===1&&!e.includeNull?t[0]:{__compound:!0,conditions:t,includeNull:e.includeNull??!1}}case"NUMBER_RANGE":{const t=[];return e.minValue!==void 0&&t.push({$gte:Ut(e.minValue,n)}),e.maxValue!==void 0&&t.push({$lte:Ut(e.maxValue,n)}),t.length===0&&!e.includeNull?void 0:t.length===0&&e.includeNull?{$isNull:!0}:t.length===1&&!e.includeNull?t[0]:{__compound:!0,conditions:t,includeNull:e.includeNull??!1}}case"EXACT_MATCH":return Kt(e.values);case"SELECT":{if(e.selectedValues.length===0)return;const t=e.selectedValues.map(l=>l instanceof Date?Te(l,n):l);return Kt(t)}case"TIMELINE":{const t=[];return e.startDate!==void 0&&t.push({$gte:Te(e.startDate,n)}),e.endDate!==void 0&&t.push({$lte:Te(e.endDate,n)}),t.length===0?void 0:t.length===1?t[0]:{__compound:!0,conditions:t,includeNull:!1}}case"hasLink":case"linkedProperty":case"keywordSearch":case"custom":return;default:return de(e)}}function Xt(e,n,t){const l=As(n,t);if(l===void 0)return;const s="isExcluding"in n&&n.isExcluding;if(Ts(l)){const o=l.conditions.map(u=>({[e]:u}));let i=o.length===1?o[0]:{$and:o};return l.includeNull&&(i={$or:[i,{[e]:{$isNull:!0}}]}),s?{$not:i}:i}else{const o={[e]:l};return s?{$not:o}:o}}function Yt(e,n,t,l){var o;if(!e||e.length===0)return{};const s=[];for(const i of e){const u=ee(i);if(u===l)continue;const c=n.get(u);if(c)switch(i.type){case"PROPERTY":{const m=(o=t==null?void 0:t.get(i.key))==null?void 0:o.type,d=Xt(i.key,c,m);d!==void 0&&s.push(d);break}case"HAS_LINK":{if(c.type!=="hasLink"||!c.hasLink)break;s.push({[i.linkName]:{$isNotNull:!0}});break}case"LINKED_PROPERTY":break;case"KEYWORD_SEARCH":{if(c.type!=="keywordSearch"||!c.searchTerm)break;const m=c.searchTerm.trim();if(!m)break;const d=i.properties;let p;if(d==="all")if(t&&t.size>0){p=[];for(const[T,_]of t)_.type==="string"&&!_.multiplicity&&p.push(T)}else break;else p=d;if(p.length===0)break;const E=c.operator==="AND"?"$containsAllTerms":"$containsAnyTerm",f=p.map(T=>({[T]:{[E]:m}}));let y;f.length===1?y=f[0]:y={$or:f},s.push(c.isExcluding?{$not:y}:y);break}case"CUSTOM":{if(c.type!=="custom")break;const m=i.toWhereClause(c);m&&Object.keys(m).length>0&&s.push(m);break}case"STATIC_VALUES":{if(i.toWhereClause){const m=i.toWhereClause(c);m&&Object.keys(m).length>0&&s.push(m)}else{const m=Xt(i.key,c);m!==void 0&&s.push(m)}break}default:de(i)}}return s.length===0?{}:s.length===1?s[0]:{$and:s}}function Kt(e){if(e.length===0)return;const n=e.filter(s=>s!==""),t=n.length<e.length,l=n.length===0?void 0:n.length===1?n[0]:{$in:n};return t?l===void 0?{$isNull:!0}:{__compound:!0,conditions:[l],includeNull:!0}:l}function zt(e){const n=new Map;if(!e)return n;for(const t of e){const l=ee(t);switch(t.type){case"PROPERTY":{const s=t.filterState;s&&n.set(l,s);break}case"HAS_LINK":case"KEYWORD_SEARCH":case"CUSTOM":{const s=t.defaultFilterState;s&&n.set(l,s);break}case"STATIC_VALUES":{const s=t.filterState;s&&n.set(l,s);break}case"LINKED_PROPERTY":{const s=t.defaultLinkedFilterState;s&&n.set(l,{type:"linkedProperty",linkedFilterState:s});break}default:de(t)}}return n}function Ls(e){const{objectType:n,filterDefinitions:t,onFilterStateChanged:l,onFilterClauseChanged:s,initialFilterStates:o}=e,{metadata:i}=Ma(n),u=r.useRef(s);u.current=s;const c=r.useMemo(()=>{const h=new Map;if(i!=null&&i.properties)for(const[b,L]of Object.entries(i.properties))typeof L.type=="string"&&h.set(b,{type:L.type,multiplicity:L.multiplicity===!0});return h},[i==null?void 0:i.properties]),[m,d]=r.useState(()=>{const h=zt(t);if(o)for(const[b,L]of o)h.set(b,L);return h}),p=r.useCallback((h,b)=>{d(v=>{const S=new Map(v);return S.set(h,b),S});const L=t==null?void 0:t.find(v=>ee(v)===h);L&&(l==null||l(L,b))},[t,l]),E=r.useCallback(h=>{d(b=>{const L=new Map(b);return L.delete(h),L})},[]),f=r.useMemo(()=>Yt(t,m,c),[t,m,c]);r.useEffect(()=>{var h;(h=u.current)==null||h.call(u,f)},[f]);const y=r.useMemo(()=>{const h=new Map;if(!t)return h;for(const b of t){const L=ee(b);h.set(L,Yt(t,m,c,L))}return h},[t,m,c]),T=r.useMemo(()=>{let h=0;for(const b of m.values())Tl(b)&&h++;return h},[m]),_=r.useCallback(()=>{d(zt(t))},[t]);return r.useMemo(()=>({filterStates:m,setFilterState:p,clearFilterState:E,whereClause:f,perFilterWhereClauses:y,activeFilterCount:T,reset:_}),[m,p,E,f,y,T,_])}function Ss(e,n){const t=r.useMemo(()=>(e==null?void 0:e.map(ee))??[],[e]),l=r.useMemo(()=>(e==null?void 0:e.filter(_=>_.isVisible!==!1).map(ee))??[],[e]),[s,o]=r.useState(()=>l);r.useEffect(()=>{o(l)},[l]);const i=r.useRef(n);i.current=n;const u=r.useCallback(_=>{if(!i.current)return;const h=new Set(_),b=t.filter(L=>!h.has(L));i.current(_,b)},[t]),c=r.useMemo(()=>{const _=new Map;if(e==null)return _;for(const h of e)_.set(ee(h),h);return _},[e]),{visibleDefinitions:m,hiddenDefinitions:d}=r.useMemo(()=>{if(e==null)return{visibleDefinitions:[],hiddenDefinitions:[]};const _=new Set(s),h=[],b=[];for(const L of s){const v=c.get(L);v!=null&&h.push(v)}for(const L of t)if(!_.has(L)){const v=c.get(L);v!=null&&b.push(v)}return{visibleDefinitions:h,hiddenDefinitions:b}},[e,c,s,t]),p=r.useCallback(_=>{o(h=>{if(h.includes(_))return h;const b=[...h,_];return u(b),b})},[u]),E=r.useCallback(_=>{o(h=>{const b=h.filter(L=>L!==_);return u(b),b})},[u]),f=r.useCallback(_=>{o(h=>_.length===h.length&&_.every((b,L)=>b===h[L])?h:(u(_),_))},[u]),y=r.useCallback(()=>{o(_=>l.length===_.length&&l.every((h,b)=>h===_[b])?_:(u(l),l))},[l,u]),T=r.useMemo(()=>s.length!==l.length?!0:!s.every((_,h)=>_===l[h]),[s,l]);return{visibleDefinitions:m,hiddenDefinitions:d,showFilter:p,hideFilter:E,reorderVisible:f,hasVisibilityChanges:T,resetVisibility:y}}function Qt(e){if("label"in e&&e.label)return e.label;switch(e.type){case"PROPERTY":return e.key;case"HAS_LINK":case"LINKED_PROPERTY":return e.linkName;case"KEYWORD_SEARCH":return"Search";case"CUSTOM":return e.key;case"STATIC_VALUES":return e.key;default:return de(e)}}function Is(e){const{objectType:n,objectSet:t,title:l,titleIcon:s,collapsed:o,onCollapsedChange:i,filterDefinitions:u,addFilterMode:c="uncontrolled",showResetButton:m=!1,onReset:d,showActiveFilterCount:p=!1,className:E,enableSorting:f,onFilterAdded:y,onFilterRemoved:T,onFilterVisibilityChange:_,renderAddFilterButton:h}=e,{filterStates:b,setFilterState:L,clearFilterState:v,perFilterWhereClauses:S,activeFilterCount:x,reset:I}=Ls(e),R=c==="uncontrolled",M=r.useCallback((G,Ce)=>{if(!_)return;const ye=[...G.map($=>({filterKey:$,isVisible:!0})),...Ce.map($=>({filterKey:$,isVisible:!1}))];_(ye)},[_]),{visibleDefinitions:g,hiddenDefinitions:A,showFilter:k,hideFilter:P,reorderVisible:O,hasVisibilityChanges:te,resetVisibility:oe}=Ss(u,R?M:void 0),z=r.useCallback(()=>{I(),oe(),d==null||d()},[I,oe,d]),Se=r.useMemo(()=>{if(u!=null)return u.filter(G=>G.isVisible!==!1)},[u]),pe=R?g:Se,Ie=r.useCallback(G=>{v(G),R&&P(G),T==null||T(G)},[v,R,P,T]),he=r.useCallback(G=>{k(G),y==null||y(G,u??[])},[k,y,u]),X=r.useCallback(G=>{O(G)},[O]),ge=r.useMemo(()=>A.map(G=>({key:ee(G),label:Qt(G)})),[A]),st=r.useMemo(()=>R?A.length===0?void 0:()=>a.createElement(lr,{hiddenDefinitions:ge,onShowFilter:he,renderTrigger:h}):h,[R,A.length,ge,he,h]),ot=R?Ie:T,it=r.useCallback(({definition:G,filterKey:Ce,filterState:ye,onFilterStateChanged:$,searchQuery:ie,excludeRowOpen:Re})=>a.createElement(ys,{objectType:n,objectSet:t,definition:G,filterState:ye,onFilterStateChanged:$,whereClause:S.get(Ce)??{},searchQuery:ie,excludeRowOpen:Re}),[n,t,S]);return a.createElement(er,{title:l,titleIcon:s,collapsed:o,onCollapsedChange:i,filterDefinitions:pe,filterStates:b,onFilterStateChanged:L,renderInput:it,getFilterKey:ee,getFilterLabel:Qt,activeFilterCount:x,onReset:z,showResetButton:m,showActiveFilterCount:p,hasVisibilityChanges:te,enableSorting:f,onFilterRemoved:ot,onOrderChange:X,className:E,renderAddFilterButton:st})}const D=xa(Is,"FilterList"),{useArgs:Dl}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:ce}=__STORYBOOK_MODULE_TEST__,at={type:"PROPERTY",id:"department",key:"department",label:"Department",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},xt={type:"PROPERTY",id:"team",key:"team",label:"Team",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},Ol={type:"PROPERTY",id:"fullName",key:"fullName",label:"Full Name",filterComponent:"CONTAINS_TEXT",filterState:{type:"CONTAINS_TEXT"}},jl={type:"PROPERTY",id:"firstFullTimeStartDate",key:"firstFullTimeStartDate",label:"Start Date",filterComponent:"DATE_RANGE",filterState:{type:"DATE_RANGE"}},wl={type:"PROPERTY",id:"employeeNumber",key:"employeeNumber",label:"Employee Number",filterComponent:"NUMBER_RANGE",filterState:{type:"NUMBER_RANGE"}},Le={type:"PROPERTY",id:"locationCity",key:"locationCity",label:"Location City",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},Rs={type:"PROPERTY",id:"jobTitle-multi",key:"jobTitle",label:"Job Title",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}},K=[at,xt,Ol,jl,Rs,wl,Le],j={width:320,height:600},se={display:"flex",gap:16},me={flex:1},rt={marginTop:8,padding:12,background:"#f5f5f5",borderRadius:4,fontSize:12,overflow:"auto",maxHeight:560},Ft={display:"flex",gap:16,height:600},Dt={width:320,flexShrink:0},Pl=C.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:C.jsx("path",{d:"M1 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1.5a1 1 0 0 1-.293.707L10 8.914V13a1 1 0 0 1-.553.894l-2 1A1 1 0 0 1 6 14v-5.086L1.293 4.207A1 1 0 0 1 1 3.5V2z"})}),Oo={title:"Experimental/FilterList",tags:["experimental"],component:D,args:{title:"Filters",enableSorting:!1,showResetButton:!1,showActiveFilterCount:!1,collapsed:!1,onFilterClauseChanged:ce(),onFilterStateChanged:ce(),onFilterAdded:ce(),onFilterRemoved:ce(),onFilterVisibilityChange:ce(),onCollapsedChange:ce(),onReset:ce()},parameters:{msw:{handlers:[...Wl.handlers]},controls:{expanded:!0}},argTypes:{objectType:{description:"The object type definition for the objects being filtered",control:!1},objectSet:{description:"Optional object set to scope aggregation queries",control:!1},filterDefinitions:{description:"Array of filter definitions. If not provided, all filterable properties are auto-discovered.",control:!1},title:{description:"Title displayed in the filter list header",control:"text"},titleIcon:{description:"Icon displayed next to the title",control:!1},filterClause:{description:"The current where clause. If provided, the filter clause is controlled.",control:!1},onFilterClauseChanged:{description:"Called when the filter clause changes. Required in controlled mode.",control:!1,table:{category:"Events"}},onFilterStateChanged:{description:"Called when an individual filter's state changes",control:!1,table:{category:"Events"}},enableSorting:{description:"Enable drag-and-drop reordering of filters",control:"boolean",table:{defaultValue:{summary:"false"}}},collapsed:{description:"Whether the filter list panel is collapsed",control:"boolean"},onCollapsedChange:{description:"Called when the collapsed state changes",control:!1,table:{category:"Events"}},showResetButton:{description:"Show reset filters button in header",control:"boolean",table:{defaultValue:{summary:"false"}}},onReset:{description:"Called when the reset button is clicked",control:!1,table:{category:"Events"}},showActiveFilterCount:{description:"Show count of active filters in header",control:"boolean",table:{defaultValue:{summary:"false"}}},onFilterAdded:{description:"Called when a filter is added. If provided, users can add filters.",control:!1,table:{category:"Events"}},onFilterRemoved:{description:"Called when a filter is removed. If provided, users can remove filters.",control:!1,table:{category:"Events"}},onFilterVisibilityChange:{description:"Called when filter visibility or ordering changes (reorder, add, remove).",control:!1,table:{category:"Events"}},addFilterMode:{description:'Controls how filter add/remove is managed. "uncontrolled" manages visibility internally; "controlled" leaves it to the consumer.',control:"select",options:["controlled","uncontrolled"],table:{category:"Advanced",defaultValue:{summary:'"uncontrolled"'}}},renderAddFilterButton:{description:"Custom render function for the add filter button.",control:!1,table:{category:"Advanced"}},initialFilterStates:{description:"Initial filter states for hydrating from external storage. Merged over definition defaults on mount.",control:!1,table:{category:"Advanced"}},className:{description:"Additional CSS class name",control:"text"}}},xe={parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:({objectType:e,objectSet:n,...t})=>{const l=r.useMemo(()=>[at,Le],[]);return C.jsx("div",{style:j,children:C.jsx(D,{objectType:N,filterDefinitions:l,...t})})}};function Ms(e){const n=Cl(),t=r.useMemo(()=>n(N).where({department:"Marketing"}),[n]),l=r.useMemo(()=>[xt,Le],[]);return C.jsx("div",{style:j,children:C.jsx(D,{objectType:N,objectSet:t,filterDefinitions:l,...e})})}const Fe={parameters:{docs:{description:{story:"Pass an `objectSet` prop to scope filter aggregations to a subset of objects. Here the object set is filtered to Marketing department employees, so the listogram counts reflect only that subset."},source:{code:`const client = useOsdkClient();
const objectSet = client(Employee).where({ department: "Marketing" });

<FilterList
  objectType={Employee}
  objectSet={objectSet}
  filterDefinitions={[
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:e=>C.jsx(Ms,{...e})};function ks(e){const n=r.useMemo(()=>[at,xt,{...Ol,isVisible:!1},{...jl,isVisible:!1},{...wl,isVisible:!1},{...Le,isVisible:!1}],[]);return C.jsx("div",{style:j,children:C.jsx(D,{objectType:N,filterDefinitions:n,addFilterMode:"uncontrolled",...e})})}const De={args:{showResetButton:!0},parameters:{docs:{source:{code:`const filterDefinitions = [
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
/>`}}},render:e=>C.jsx(ks,{...e})};function Ns(e){const[n,t]=r.useState(void 0),l=e.onFilterClauseChanged,s=r.useCallback(o=>{t(o),l==null||l(o)},[l]);return C.jsxs("div",{style:se,children:[C.jsx("div",{style:j,children:C.jsx(D,{objectType:N,filterDefinitions:K,...e,filterClause:n,onFilterClauseChanged:s})}),C.jsxs("div",{style:me,children:[C.jsx("strong",{children:"Filter Clause (JSON):"}),C.jsx("pre",{style:rt,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const Oe={parameters:{docs:{description:{story:"All filter component types with a controlled where clause. Hover filter items to reveal search and exclude actions."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>`}}},render:e=>C.jsx(Ns,{...e})},je={args:{title:"Employee Filters"},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  titleIcon={<svg>...</svg>}
/>`}}},render:({objectType:e,objectSet:n,...t})=>C.jsx("div",{style:j,children:C.jsx(D,{objectType:N,filterDefinitions:K,titleIcon:Pl,...t})})};function xs(e){const n=e.onReset,t=r.useCallback(()=>{console.log("Reset clicked"),n==null||n()},[n]);return C.jsx("div",{style:j,children:C.jsx(D,{objectType:N,filterDefinitions:K,...e,onReset:t})})}const we={args:{showResetButton:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showResetButton={true}
  onReset={() => console.log("Reset clicked")}
/>`}}},render:e=>C.jsx(xs,{...e})},Pe={args:{showActiveFilterCount:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showActiveFilterCount={true}
/>`}}},render:({objectType:e,objectSet:n,...t})=>C.jsx("div",{style:j,children:C.jsx(D,{objectType:N,filterDefinitions:K,...t})})},Ve={args:{enableSorting:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  enableSorting={true}
/>`}}},render:({objectType:e,objectSet:n,...t})=>C.jsx("div",{style:j,children:C.jsx(D,{objectType:N,filterDefinitions:K,...t})})};function Fs(e){return C.jsx("div",{style:j,children:C.jsx(D,{objectType:N,filterDefinitions:K,...e})})}const Ge={args:{title:"Employee Filters",showActiveFilterCount:!0},parameters:{docs:{description:{story:"Click the collapse button to minimize the filter panel. Active filter count is shown in the collapsed state."},source:{code:`const [collapsed, setCollapsed] = useState(false);

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  collapsed={collapsed}
  onCollapsedChange={setCollapsed}
  showActiveFilterCount={true}
/>`}}},render:e=>{const[,n]=Dl(),t=e.onCollapsedChange,l=r.useCallback(s=>{n({collapsed:s}),t==null||t(s)},[n,t]);return C.jsx(Fs,{...e,onCollapsedChange:l})}},Be={parameters:{docs:{source:{code:`const filterDefinitions = [
  { type: "KEYWORD_SEARCH", properties: ["fullName", "department", "jobTitle", "locationCity"], label: "Search" },
  { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:({objectType:e,objectSet:n,...t})=>{const l=r.useMemo(()=>[{type:"KEYWORD_SEARCH",properties:["fullName","department","jobTitle","locationCity"],label:"Search"},at,Le],[]);return C.jsx("div",{style:j,children:C.jsx(D,{objectType:N,filterDefinitions:l,...t})})}};function Ds(e){const n=r.useMemo(()=>[{type:"PROPERTY",id:"department-no-color",key:"department",label:"Department (default colors)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]),t=r.useMemo(()=>[{type:"PROPERTY",id:"department-color",key:"department",label:"Department (custom colors)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},colorMap:{Marketing:"#e74c3c",Operations:"#2ecc71",Finance:"#3498db",Product:"#f39c12"}}],[]);return C.jsxs("div",{style:se,children:[C.jsx("div",{style:j,children:C.jsx(D,{objectType:N,filterDefinitions:n,...e})}),C.jsx("div",{style:j,children:C.jsx(D,{objectType:N,filterDefinitions:t,...e})})]})}const He={parameters:{docs:{source:{code:`// Without colorMap: all bars use the default theme color
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

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>C.jsx(Ds,{...e})},Os={Marketing:"Marketing Dept.",Operations:"Ops Team",Finance:"Finance & Accounting",Product:"Product Group"};function js(e){const n=r.useMemo(()=>[{type:"PROPERTY",id:"department-default",key:"department",label:"Department (default)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]),t=r.useMemo(()=>[{type:"PROPERTY",id:"department-custom",key:"department",label:"Department (custom render)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},renderValue:l=>Os[l]??l},{type:"PROPERTY",id:"team-custom",key:"team",label:"Team (custom render)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},renderValue:l=>l.toUpperCase()}],[]);return C.jsxs("div",{style:se,children:[C.jsx("div",{style:j,children:C.jsx(D,{objectType:N,filterDefinitions:n,...e})}),C.jsx("div",{style:j,children:C.jsx(D,{objectType:N,filterDefinitions:t,...e})})]})}const We={parameters:{docs:{description:{story:"Use `renderValue` to customize how filter values are displayed and searched. The returned string replaces the raw value for display and search matching. Works with LISTOGRAM, MULTI_SELECT, and SINGLE_SELECT components."},source:{code:`const DEPARTMENT_LABELS = {
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

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>C.jsx(js,{...e})};function ws(e){const n=r.useMemo(()=>[{type:"PROPERTY",id:"dept-full",key:"department",label:"full: label + bar + count",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"full"}}],[]),t=r.useMemo(()=>[{type:"PROPERTY",id:"dept-count",key:"department",label:"count: label + count (no bar)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"count"}}],[]),l=r.useMemo(()=>[{type:"PROPERTY",id:"dept-minimal",key:"department",label:"minimal: label only",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"}}],[]);return C.jsxs("div",{style:se,children:[C.jsx("div",{style:j,children:C.jsx(D,{objectType:N,filterDefinitions:n,...e})}),C.jsx("div",{style:j,children:C.jsx(D,{objectType:N,filterDefinitions:t,...e})}),C.jsx("div",{style:j,children:C.jsx(D,{objectType:N,filterDefinitions:l,...e})})]})}const $e={parameters:{docs:{source:{code:`// "full" (default): label + colored bar + count number
// "count": label + count number (no bar)
// "minimal": label only (no bar, no count)

const filterDefinitions = [
  { ..., listogramConfig: { displayMode: "full" } },
  { ..., listogramConfig: { displayMode: "count" } },
  { ..., listogramConfig: { displayMode: "minimal" } },
];`}}},render:e=>C.jsx(ws,{...e})};function Ps(e){const n=r.useMemo(()=>[{type:"PROPERTY",id:"dept-with-count",key:"department",label:"Department (counts visible)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},{type:"PROPERTY",id:"team-with-count",key:"team",label:"Team (counts visible)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}}],[]),t=r.useMemo(()=>[{type:"PROPERTY",id:"dept-no-count",key:"department",label:"Department (counts hidden)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},showCount:!1},{type:"PROPERTY",id:"team-no-count",key:"team",label:"Team (counts hidden)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},showCount:!1}],[]);return C.jsxs("div",{style:se,children:[C.jsx("div",{style:j,children:C.jsx(D,{objectType:N,filterDefinitions:n,...e})}),C.jsx("div",{style:j,children:C.jsx(D,{objectType:N,filterDefinitions:t,...e})})]})}const Ue={parameters:{docs:{description:{story:"Use `showCount: false` on individual filter definitions to hide aggregation counts in LISTOGRAM and MULTI_SELECT inputs. Bar visualizations in LISTOGRAM are preserved."},source:{code:`// showCount defaults to true; set false to hide counts per filter
const filterDefinitions = [
  { ..., filterComponent: "LISTOGRAM", showCount: false },
  { ..., filterComponent: "MULTI_SELECT", showCount: false },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>C.jsx(Ps,{...e})};function Vs(e){const n=r.useMemo(()=>[{type:"PROPERTY",id:"department-checkbox",key:"department",label:"Department",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},{type:"PROPERTY",id:"team-checkbox",key:"team",label:"Team",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]);return C.jsx("div",{style:j,children:C.jsx(D,{objectType:N,filterDefinitions:n,...e})})}const Xe={parameters:{docs:{description:{story:"Listogram rows always include a checkbox for multi-select. Selecting values checks the checkbox and highlights the row. Use the exclude toggle (three-dot menu) to invert selections."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:e=>C.jsx(Vs,{...e})};function Gs(e){const[n,t]=r.useState(void 0),l=e.onFilterRemoved,s=r.useCallback(u=>{console.log("Removed filter:",u),l==null||l(u)},[l]),o=e.onFilterClauseChanged,i=r.useCallback(u=>{t(u),o==null||o(u)},[o]);return C.jsxs("div",{style:Ft,children:[C.jsx("div",{style:Dt,children:C.jsx(D,{objectType:N,filterDefinitions:K,...e,onFilterRemoved:s,filterClause:n,onFilterClauseChanged:i})}),C.jsx("div",{style:me,children:C.jsx(_t,{objectType:N,filter:n})})]})}const Ye={args:{title:"Employee Filters",showResetButton:!0,showActiveFilterCount:!0,enableSorting:!0},parameters:{docs:{source:{code:`const [filterClause, setFilterClause] = useState(undefined);

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
</div>`}}},render:e=>C.jsx(Gs,{...e})};function Bs(e){const n=Cl(),t=r.useMemo(()=>n(N).where({department:"Marketing"}),[n]),[l,s]=r.useState(void 0),o=e.onFilterClauseChanged,i=r.useCallback(u=>{s(u),o==null||o(u)},[o]);return C.jsxs("div",{style:Ft,children:[C.jsx("div",{style:Dt,children:C.jsx(D,{objectType:N,objectSet:t,filterDefinitions:K,...e,filterClause:l,onFilterClauseChanged:i})}),C.jsx("div",{style:me,children:C.jsx(_t,{objectType:N,objectSet:t,filter:l})})]})}const Ke={args:{title:"Marketing Employees",showResetButton:!0,showActiveFilterCount:!0},parameters:{docs:{description:{story:"Demonstrates using a pre-filtered objectSet to scope both FilterList aggregations and ObjectTable data to a subset of employees."},source:{code:`const client = useOsdkClient();
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
/>`}}},render:e=>C.jsx(Bs,{...e})};function Hs(e){const[n,t]=r.useState(K),l=e.onFilterRemoved,s=r.useCallback(o=>{t(i=>i.filter(u=>"key"in u?u.key!==o:!0)),l==null||l(o)},[l]);return C.jsx("div",{style:j,children:C.jsx(D,{objectType:N,filterDefinitions:n,...e,onFilterRemoved:s})})}const ze={name:"Removable Filters",args:{title:"Removable Filters",showActiveFilterCount:!0},parameters:{docs:{description:{story:"When `onFilterRemoved` is provided, each filter item shows a remove button (X) on hover. Clicking it removes the filter from the list."},source:{code:`const [definitions, setDefinitions] = useState(filterDefinitions);

const handleFilterRemoved = (filterKey) => {
  setDefinitions(prev => prev.filter(def => def.key !== filterKey));
};

<FilterList
  objectType={Employee}
  filterDefinitions={definitions}
  onFilterRemoved={handleFilterRemoved}
  title="Removable Filters"
/>`}}},render:e=>C.jsx(Hs,{...e})};function Ws(e){const[n,t]=r.useState(void 0),l=r.useMemo(()=>[{type:"STATIC_VALUES",key:"department",label:"Department (static)",filterComponent:"LISTOGRAM",values:["Marketing","Operations","Finance","Product"],filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"}},{type:"STATIC_VALUES",key:"locationCity",label:"Office Location",filterComponent:"SINGLE_SELECT",values:["New York","San Francisco","London","Tokyo"],filterState:{type:"SELECT",selectedValues:[]}},{type:"STATIC_VALUES",key:"team",label:"Team (multi-select)",filterComponent:"MULTI_SELECT",values:["Alpha","Beta","Gamma","Delta"],filterState:{type:"SELECT",selectedValues:[]}},{type:"STATIC_VALUES",id:"custom-status",key:"status",label:"Status (custom clause)",filterComponent:"LISTOGRAM",values:["Active","Inactive"],filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"},toWhereClause:i=>{if(i.type!=="EXACT_MATCH"||i.values.length===0)return;const u=i.values,c=u.includes("Active"),m=u.includes("Inactive");if(c&&m)return{$or:[{employeeStatus:"Active"},{employeeStatus:"Inactive"}]};if(c)return{employeeStatus:"Active"};if(m)return{employeeStatus:"Inactive"}}}],[]),s=e.onFilterClauseChanged,o=r.useCallback(i=>{t(i),s==null||s(i)},[s]);return C.jsxs("div",{style:se,children:[C.jsx("div",{style:j,children:C.jsx(D,{objectType:N,filterDefinitions:l,...e,filterClause:n,onFilterClauseChanged:o})}),C.jsxs("div",{style:me,children:[C.jsx("strong",{children:"Filter Clause (JSON):"}),C.jsx("pre",{style:rt,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const Qe={parameters:{docs:{description:{story:"Use `STATIC_VALUES` filter definitions to provide a fixed list of values instead of fetching from OSDK aggregation. Supports LISTOGRAM, SINGLE_SELECT, MULTI_SELECT, and TEXT_TAGS components. Optionally provide a `toWhereClause` function for custom clause generation."},source:{code:`const filterDefinitions = [
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
/>`}}},render:e=>C.jsx(Ws,{...e})};function $s(e){const[n,t]=r.useState(void 0),[l,s]=r.useState(K),o=e.onFilterRemoved,i=r.useCallback(p=>{s(E=>E.filter(f=>"key"in f?f.key!==p:!0)),o==null||o(p)},[o]),u=e.onReset,c=r.useCallback(()=>{s(K),u==null||u()},[u]),m=e.onFilterClauseChanged,d=r.useCallback(p=>{t(p),m==null||m(p)},[m]);return C.jsxs("div",{style:Ft,children:[C.jsx("div",{style:Dt,children:C.jsx(D,{objectType:N,filterDefinitions:l,titleIcon:Pl,...e,onReset:c,onFilterRemoved:i,filterClause:n,onFilterClauseChanged:d})}),C.jsx("div",{style:me,children:C.jsx(_t,{objectType:N,filter:n})})]})}const qe={name:"Full Featured",args:{title:"Employee Filters",showResetButton:!0,showActiveFilterCount:!0,enableSorting:!0},parameters:{docs:{description:{story:"Demonstrates all filter list features together: collapse, reset, active count, sorting, removable filters, per-filter search, exclude toggle, and controlled where clause driving an ObjectTable."},source:{code:`// All features combined: collapse, sort, search, exclude, remove, reset

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
/>`}}},render:e=>{const[,n]=Dl(),t=e.onCollapsedChange,l=r.useCallback(s=>{n({collapsed:s}),t==null||t(s)},[n,t]);return C.jsx($s,{...e,onCollapsedChange:l})}};function Us(e){const[n,t]=r.useState(void 0),l=r.useMemo(()=>[{type:"HAS_LINK",linkName:"lead",label:"Has Manager",filterState:{type:"hasLink",hasLink:!1}}],[]),s=e.onFilterClauseChanged,o=r.useCallback(i=>{t(i),s==null||s(i)},[s]);return C.jsxs("div",{style:se,children:[C.jsx("div",{style:j,children:C.jsx(D,{objectType:N,filterDefinitions:l,...e,filterClause:n,onFilterClauseChanged:o})}),C.jsxs("div",{style:me,children:[C.jsx("strong",{children:"Filter Clause (JSON):"}),C.jsx("pre",{style:rt,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const Je={name:"Linked Property Filters",parameters:{docs:{description:{story:"Demonstrates filtering on properties of linked objects. HAS_LINK filters objects based on whether they have a linked object. "},source:{code:`// HAS_LINK and LINKED_PROPERTY filter definitions
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
/>`}}},render:e=>C.jsx(Us,{...e})};function Xs({filterState:e,onFilterStateChanged:n}){const t=r.useCallback(s=>{const o=s.target.value;n({type:"custom",customState:{value:o}})},[n]),l=r.useCallback(()=>{n({type:"custom",customState:{value:""}})},[n]);return C.jsxs("div",{style:{padding:"12px 0",display:"flex",gap:"8px"},children:[C.jsx("input",{type:"text",value:e.customState.value,onChange:t,placeholder:"Enter name substring...",style:{flex:1,padding:"6px 8px",fontSize:"14px",border:"1px solid #ccc",borderRadius:"4px"}}),e.customState.value&&C.jsx("button",{onClick:l,style:{padding:"6px 12px",fontSize:"12px",backgroundColor:"#f5f5f5",border:"1px solid #ccc",borderRadius:"4px",cursor:"pointer"},children:"Clear"})]})}function Ys(e){const[n,t]=r.useState(void 0),l=r.useMemo(()=>[{type:"CUSTOM",key:"custom-name-contains",label:"Name Contains",filterComponent:"CUSTOM",filterState:{type:"custom",customState:{value:""}},renderInput:({filterState:i,onFilterStateChanged:u})=>C.jsx(Xs,{filterState:i,onFilterStateChanged:u}),toWhereClause:i=>{var c;const u=(c=i.customState)==null?void 0:c.value;if(u)return{fullName:{$containsAnyTerm:u}}}}],[]),s=e.onFilterClauseChanged,o=r.useCallback(i=>{t(i),s==null||s(i)},[s]);return C.jsxs("div",{style:se,children:[C.jsx("div",{style:j,children:C.jsx(D,{objectType:N,filterDefinitions:l,...e,filterClause:n,onFilterClauseChanged:o})}),C.jsxs("div",{style:me,children:[C.jsx("strong",{children:"Filter Clause (JSON):"}),C.jsx("pre",{style:rt,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const Ze={name:"Custom Filters",parameters:{docs:{description:{story:"Custom filters provide full control over filtering logic and UI. The 'Name Contains' filter uses `renderInput` for a simple custom input. "},source:{code:`// Custom filter with renderInput
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
/>`}}},render:e=>C.jsx(Ys,{...e})};var qt,Jt,Zt;xe.parameters={...xe.parameters,docs:{...(qt=xe.parameters)==null?void 0:qt.docs,source:{originalSource:`{
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
}`,...(Zt=(Jt=xe.parameters)==null?void 0:Jt.docs)==null?void 0:Zt.source}}};var en,tn,nn;Fe.parameters={...Fe.parameters,docs:{...(en=Fe.parameters)==null?void 0:en.docs,source:{originalSource:`{
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
}`,...(nn=(tn=Fe.parameters)==null?void 0:tn.docs)==null?void 0:nn.source}}};var ln,an,rn;De.parameters={...De.parameters,docs:{...(ln=De.parameters)==null?void 0:ln.docs,source:{originalSource:`{
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
}`,...(rn=(an=De.parameters)==null?void 0:an.docs)==null?void 0:rn.source}}};var sn,on,cn;Oe.parameters={...Oe.parameters,docs:{...(sn=Oe.parameters)==null?void 0:sn.docs,source:{originalSource:`{
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
}`,...(cn=(on=Oe.parameters)==null?void 0:on.docs)==null?void 0:cn.source}}};var un,dn,mn;je.parameters={...je.parameters,docs:{...(un=je.parameters)==null?void 0:un.docs,source:{originalSource:`{
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
}`,...(mn=(dn=je.parameters)==null?void 0:dn.docs)==null?void 0:mn.source}}};var pn,Cn,fn;we.parameters={...we.parameters,docs:{...(pn=we.parameters)==null?void 0:pn.docs,source:{originalSource:`{
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
}`,...(fn=(Cn=we.parameters)==null?void 0:Cn.docs)==null?void 0:fn.source}}};var hn,gn,yn;Pe.parameters={...Pe.parameters,docs:{...(hn=Pe.parameters)==null?void 0:hn.docs,source:{originalSource:`{
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
}`,...(yn=(gn=Pe.parameters)==null?void 0:gn.docs)==null?void 0:yn.source}}};var En,bn,_n;Ve.parameters={...Ve.parameters,docs:{...(En=Ve.parameters)==null?void 0:En.docs,source:{originalSource:`{
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
}`,...(_n=(bn=Ve.parameters)==null?void 0:bn.docs)==null?void 0:_n.source}}};var Tn,vn,An;Ge.parameters={...Ge.parameters,docs:{...(Tn=Ge.parameters)==null?void 0:Tn.docs,source:{originalSource:`{
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
    const argsOnCollapsedChange = args.onCollapsedChange;
    const handleCollapsedChange = useCallback((collapsed: boolean) => {
      updateArgs({
        collapsed
      });
      argsOnCollapsedChange?.(collapsed);
    }, [updateArgs, argsOnCollapsedChange]);
    return <CollapsiblePanelStory {...args} onCollapsedChange={handleCollapsedChange} />;
  }
}`,...(An=(vn=Ge.parameters)==null?void 0:vn.docs)==null?void 0:An.source}}};var Ln,Sn,In;Be.parameters={...Be.parameters,docs:{...(Ln=Be.parameters)==null?void 0:Ln.docs,source:{originalSource:`{
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
}`,...(In=(Sn=Be.parameters)==null?void 0:Sn.docs)==null?void 0:In.source}}};var Rn,Mn,kn;He.parameters={...He.parameters,docs:{...(Rn=He.parameters)==null?void 0:Rn.docs,source:{originalSource:`{
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
}`,...(kn=(Mn=He.parameters)==null?void 0:Mn.docs)==null?void 0:kn.source}}};var Nn,xn,Fn;We.parameters={...We.parameters,docs:{...(Nn=We.parameters)==null?void 0:Nn.docs,source:{originalSource:`{
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
}`,...(Fn=(xn=We.parameters)==null?void 0:xn.docs)==null?void 0:Fn.source}}};var Dn,On,jn;$e.parameters={...$e.parameters,docs:{...(Dn=$e.parameters)==null?void 0:Dn.docs,source:{originalSource:`{
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
}`,...(jn=(On=$e.parameters)==null?void 0:On.docs)==null?void 0:jn.source}}};var wn,Pn,Vn;Ue.parameters={...Ue.parameters,docs:{...(wn=Ue.parameters)==null?void 0:wn.docs,source:{originalSource:`{
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
}`,...(Vn=(Pn=Ue.parameters)==null?void 0:Pn.docs)==null?void 0:Vn.source}}};var Gn,Bn,Hn;Xe.parameters={...Xe.parameters,docs:{...(Gn=Xe.parameters)==null?void 0:Gn.docs,source:{originalSource:`{
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
}`,...(Hn=(Bn=Xe.parameters)==null?void 0:Bn.docs)==null?void 0:Hn.source}}};var Wn,$n,Un;Ye.parameters={...Ye.parameters,docs:{...(Wn=Ye.parameters)==null?void 0:Wn.docs,source:{originalSource:`{
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
}`,...(Un=($n=Ye.parameters)==null?void 0:$n.docs)==null?void 0:Un.source}}};var Xn,Yn,Kn;Ke.parameters={...Ke.parameters,docs:{...(Xn=Ke.parameters)==null?void 0:Xn.docs,source:{originalSource:`{
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
}`,...(Kn=(Yn=Ke.parameters)==null?void 0:Yn.docs)==null?void 0:Kn.source}}};var zn,Qn,qn;ze.parameters={...ze.parameters,docs:{...(zn=ze.parameters)==null?void 0:zn.docs,source:{originalSource:`{
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
}`,...(qn=(Qn=ze.parameters)==null?void 0:Qn.docs)==null?void 0:qn.source}}};var Jn,Zn,el;Qe.parameters={...Qe.parameters,docs:{...(Jn=Qe.parameters)==null?void 0:Jn.docs,source:{originalSource:`{
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
}`,...(el=(Zn=Qe.parameters)==null?void 0:Zn.docs)==null?void 0:el.source}}};var tl,nl,ll;qe.parameters={...qe.parameters,docs:{...(tl=qe.parameters)==null?void 0:tl.docs,source:{originalSource:`{
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
    const argsOnCollapsedChange = args.onCollapsedChange;
    const handleCollapsedChange = useCallback((collapsed: boolean) => {
      updateArgs({
        collapsed
      });
      argsOnCollapsedChange?.(collapsed);
    }, [updateArgs, argsOnCollapsedChange]);
    return <FullFeaturedStory {...args} onCollapsedChange={handleCollapsedChange} />;
  }
}`,...(ll=(nl=qe.parameters)==null?void 0:nl.docs)==null?void 0:ll.source}}};var al,rl,sl;Je.parameters={...Je.parameters,docs:{...(al=Je.parameters)==null?void 0:al.docs,source:{originalSource:`{
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
}`,...(sl=(rl=Je.parameters)==null?void 0:rl.docs)==null?void 0:sl.source}}};var ol,il,cl;Ze.parameters={...Ze.parameters,docs:{...(ol=Ze.parameters)==null?void 0:ol.docs,source:{originalSource:`{
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
}`,...(cl=(il=Ze.parameters)==null?void 0:il.docs)==null?void 0:cl.source}}};const jo=["Default","WithObjectSet","AddFilterMode","WithAllFilterTypes","WithTitleAndIcon","WithResetButton","WithActiveFilterCount","WithSorting","CollapsiblePanel","KeywordSearch","WithColorMap","WithRenderValue","WithListogramDisplayModes","WithHiddenCounts","WithCheckbox","CombinedWithObjectTable","CombinedWithFilteredObjectSet","WithRemovableFilters","WithStaticValues","FullFeatured","WithHasLinkFilter","WithCustomFilters"];export{De as AddFilterMode,Ge as CollapsiblePanel,Ke as CombinedWithFilteredObjectSet,Ye as CombinedWithObjectTable,xe as Default,qe as FullFeatured,Be as KeywordSearch,Pe as WithActiveFilterCount,Oe as WithAllFilterTypes,Xe as WithCheckbox,He as WithColorMap,Ze as WithCustomFilters,Je as WithHasLinkFilter,Ue as WithHiddenCounts,$e as WithListogramDisplayModes,Fe as WithObjectSet,ze as WithRemovableFilters,We as WithRenderValue,we as WithResetButton,Ve as WithSorting,Qe as WithStaticValues,je as WithTitleAndIcon,jo as __namedExportsOrder,Oo as default};
