var wn=Object.defineProperty;var Vn=(e,n,r)=>n in e?wn(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r;var Oe=(e,n,r)=>Vn(e,typeof n!="symbol"?n+"":n,r);import{r as i,R as a,f as Bn,j as t}from"./iframe-BqSobOjs.js";import{S as Wn}from"./MultiColumnSortDialog-D70Lf8hL.js";import{s as Hn,a as Gn,b as D,S as Yn,R as Ge,O as Un,c as Xn,C as Kn,E as zn,F as $n,u as Jn,g as $,d as Qn,e as Ye,f as qn,h as Zn}from"./getFilterLabel-Cg3Qjfdc.js";import{c as X}from"./index-L1wTDGqM.js";import{u as er,C as tr,a as Ue,P as nr,s as rr,K as ir,b as lr,c as or,D as sr,d as ar,S as cr,v as dr,e as ur}from"./DraggableList-DQUkxlfh.js";import{B as N}from"./Button-Zje7J_lk.js";import{I as pr}from"./Input-GUrmuab8.js";import{w as mr}from"./withOsdkMetrics-D4GiNPF8.js";import{O as Ae}from"./object-table-BE05H-6R.js";import{E as u}from"./Employee-BAk2o20h.js";import{u as je}from"./useOsdkClient-Dz_AketL.js";import"./preload-helper-Dp1pzeXC.js";import"./ActionButton-BzrQsBY7.js";import"./Dialog-CmNBNiQI.js";import"./cross-CnGN68mu.js";import"./svgIconContainer-DgnMBskL.js";import"./useBaseUiId-Dp_kYV1S.js";import"./InternalBackdrop-BYMeP7M_.js";import"./composite-DfJCZyGn.js";import"./index-CDBVc2Go.js";import"./index-bCpJ3h2u.js";import"./index-Dmw5mkmL.js";import"./MenuTrigger-DyuLHkf2.js";import"./CompositeItem-CTpBLKUN.js";import"./ToolbarRootContext-DRoLsPMn.js";import"./getDisabledMountTransitionStyles-B6CVhBf6.js";import"./getPseudoElementBounds-JEaCRQOJ.js";import"./caret-down-CDW-Sg4_.js";import"./Switch-BsEFLCTz.js";import"./toNumber-BmW-2qr4.js";import"./PopoverPopup-C8MLFvM4.js";import"./useValueChanged-D2pZ8qWZ.js";import"./useControlled-9AVv5K6I.js";import"./assertUnreachable-tCT10eXl.js";import"./index-BtwbpoEL.js";import"./Checkbox-nbGiM0Gc.js";import"./minus-BnWXFqps.js";import"./SkeletonBar-fsduxo0X.js";import"./makeExternalStore-B5IsxxjS.js";import"./chevron-down-B8BcgL7Y.js";import"./small-cross-Cz-s3IOk.js";import"./useRegisterUserAgent-BB-OJR3x.js";import"./Table-BONDtU2C.js";import"./LoadingCell-75Lvf3tA.js";import"./ColumnConfigDialog-KhfIMgsl.js";import"./CollapsiblePanel-DbqIEyss.js";import"./index-Hc2ZCWn_.js";import"./error-LlycrbnK.js";import"./Tooltip-BLcJAY5k.js";import"./DropdownField-DL8T-hja.js";const w={filterList:"FilterList-module__filterList___wmzCNbkH",filterListCollapsed:"FilterList-module__filterListCollapsed___CGrK9txF",expandedContent:"FilterList-module__expandedContent___aEk2i2At",scrollableContent:"FilterList-module__scrollableContent___F3O1nfAo",hiddenContent:"FilterList-module__hiddenContent___PHKe-yWc",expandButton:"FilterList-module__expandButton___-QlY8-ot",collapsedLabel:"FilterList-module__collapsedLabel___QA0UtRts",addButtonContainer:"FilterList-module__addButtonContainer___kq300FEV",addButton:"FilterList-module__addButton___oD4yvwyZ"},Z={content:"FilterListContent-module__content___fG0EgVp6",dragOverlay:"FilterListContent-module__dragOverlay___Tjd1YpmI"},Ie={errorContainer:"ErrorBoundary-module__errorContainer___FIguBDDu",errorMessage:"ErrorBoundary-module__errorMessage___jUsXUqFA",retryButton:"ErrorBoundary-module__retryButton___PZVWZOm7"};class fr extends i.Component{constructor(){super(...arguments);Oe(this,"state",{hasError:!1,error:null});Oe(this,"handleRetry",()=>{this.setState({hasError:!1,error:null})})}static getDerivedStateFromError(r){return{hasError:!0,error:r}}componentDidCatch(r,l){var o,c;console.error("[ErrorBoundary]",r),console.error("[ErrorBoundary] Component stack:",l.componentStack),(c=(o=this.props).onError)==null||c.call(o,r)}render(){return this.state.hasError?this.props.fallback?this.props.fallback:a.createElement("div",{className:Ie.errorContainer},a.createElement("p",{className:Ie.errorMessage},this.props.errorMessage??"Something went wrong"),a.createElement(N,{className:Ie.retryButton,onClick:this.handleRetry,"aria-label":"Retry"},"Retry")):this.props.children}}function yr(){return a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true"},a.createElement("circle",{cx:"5.5",cy:"3.5",r:"1.5"}),a.createElement("circle",{cx:"10.5",cy:"3.5",r:"1.5"}),a.createElement("circle",{cx:"5.5",cy:"8",r:"1.5"}),a.createElement("circle",{cx:"10.5",cy:"8",r:"1.5"}),a.createElement("circle",{cx:"5.5",cy:"12.5",r:"1.5"}),a.createElement("circle",{cx:"10.5",cy:"12.5",r:"1.5"}))}function xe(){return xe=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var l in r)({}).hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},xe.apply(null,arguments)}function Tn(e){if(e==null)return!1;switch(e.type){case"EXACT_MATCH":return e.values.length>0;case"SELECT":return e.selectedValues.length>0;case"CONTAINS_TEXT":return e.value!=null&&e.value.length>0;case"NUMBER_RANGE":return e.minValue!=null||e.maxValue!=null;case"DATE_RANGE":return e.minValue!=null||e.maxValue!=null;case"TIMELINE":return e.startDate!=null||e.endDate!=null;case"TOGGLE":return e.enabled;case"keywordSearch":return e.searchTerm.length>0;case"hasLink":return e.hasLink;case"linkedProperty":return Tn(e.linkedFilterState);case"custom":return!0;default:return!1}}function Cr({definition:e,filterKey:n,label:r,filterState:l,onFilterStateChanged:o,onFilterRemoved:c,renderInput:d,dragHandleAttributes:s,dragHandleListeners:E,className:g,style:L}){const[v,R]=i.useState({type:"closed"}),[h,O]=i.useState(!1),_=i.useCallback(C=>{o(n,C)},[n,o]),p=i.useCallback(()=>{R(C=>C.type==="closed"?{type:"open",query:""}:{type:"closed"})},[]),m=i.useCallback(C=>{R({type:"open",query:C.target.value})},[]),S=i.useCallback(()=>{R({type:"open",query:""})},[]),F=i.useCallback(()=>{c==null||c(n)},[n,c]),j=i.useCallback(()=>{O(C=>!C)},[]),x=i.useCallback(C=>{C==null||C.focus({preventScroll:!0})},[]),W=Hn(l),P=Gn(l),H=v.type==="open",y=v.type==="open"?v.query:"",b=v.type==="open"?v.query:void 0;return a.createElement("div",{className:X(D.filterItem,g),style:L,"data-has-selection":Tn(l)||void 0},a.createElement("div",{className:D.itemHeader},s&&a.createElement(N,xe({className:D.dragHandle,"aria-label":`Reorder ${r}`},s,E),a.createElement(yr,null)),a.createElement("span",{className:D.itemLabel},r),P&&a.createElement(N,{className:D.headerActionButton,onClick:p,"aria-label":"Search values","aria-pressed":H},a.createElement(Yn,null)),c&&a.createElement(N,{className:D.headerActionButton,onClick:F,"aria-label":`Remove ${r} filter`},a.createElement(Ge,null)),W&&a.createElement(N,{className:D.headerActionButton,onClick:j,"aria-label":"More actions","aria-pressed":h},a.createElement(Un,null))),H&&a.createElement("div",{className:D.searchRow},a.createElement(pr,{type:"text",className:D.searchInput,value:y,onChange:m,placeholder:"Search property values...","aria-label":"Search property values",ref:x}),y&&a.createElement(N,{type:"button",className:D.searchClearButton,onClick:S,"aria-label":"Clear search"},a.createElement(Ge,null))),a.createElement("div",{className:D.itemContent},a.createElement(fr,{errorMessage:"Error loading filter"},d({definition:e,filterKey:n,filterState:l,onFilterStateChanged:_,searchQuery:b,excludeRowOpen:h}))))}const Ne=i.memo(Cr);function hr({id:e,definition:n,filterKey:r,label:l,filterState:o,onFilterStateChanged:c,onFilterRemoved:d,renderInput:s}){const{attributes:E,listeners:g,setNodeRef:L,transform:v,transition:R,isDragging:h}=er({id:e}),O=i.useMemo(()=>({transform:tr.Transform.toString(v),transition:R??void 0}),[v,R]);return a.createElement("div",{ref:L,style:O,className:X(h&&D.dragging)},a.createElement(Ne,{definition:n,filterKey:r,label:l,filterState:o,onFilterStateChanged:c,onFilterRemoved:d,renderInput:s,dragHandleAttributes:E,dragHandleListeners:g}))}const Sr=i.memo(hr),br=({transform:e})=>({...e,x:0}),Tr={distance:8},Er=[br],gr={role:"button",tabIndex:-1,"aria-disabled":!0,"aria-pressed":void 0,"aria-roledescription":"sortable","aria-describedby":""};function vr({filterDefinitions:e,filterStates:n,onFilterStateChanged:r,onFilterRemoved:l,onOrderChange:o,renderInput:c,getFilterKey:d,getFilterLabel:s,enableSorting:E,className:g,style:L}){const[v,R]=i.useState(null),h=i.useMemo(()=>E&&e?e.map(y=>d(y)):[],[E,e,d]),O=Ue(nr,{activationConstraint:Tr}),_=Ue(ir,{coordinateGetter:rr}),p=lr(O,_),m=v!=null?h.indexOf(String(v)):-1,S=m>=0&&e?e[m]:void 0,F=i.useMemo(()=>S?d(S):void 0,[S,d]),j=i.useCallback(y=>{R(y.active.id)},[]),x=i.useCallback(y=>{R(null);const{active:b,over:C}=y;if(!C||b.id===C.id)return;const M=h.indexOf(String(b.id)),k=h.indexOf(String(C.id));if(M!==-1&&k!==-1){const G=or(h,M,k);o==null||o(G)}},[h,o]),W=i.useCallback(()=>{R(null)},[]),P=i.useMemo(()=>({onDragStart({active:y}){const b=h.indexOf(String(y.id)),C=b>=0&&e?e[b]:void 0;return`Picked up ${C?s(C):"filter"} filter`},onDragOver({over:y}){return y?`Moved to position ${h.indexOf(String(y.id))+1} of ${h.length}`:"Not over a droppable area"},onDragEnd({active:y,over:b}){const C=h.indexOf(String(y.id)),M=C>=0&&e?e[C]:void 0,k=M?s(M):"filter";if(b&&y.id!==b.id){const G=h.indexOf(String(b.id));return`Dropped ${k} filter at position ${G+1}`}return`Dropped ${k} filter back in its original position`},onDragCancel({active:y}){const b=h.indexOf(String(y.id)),C=b>=0&&e?e[b]:void 0;return`Cancelled dragging ${C?s(C):"filter"} filter`}}),[e,h,s]),H=i.useMemo(()=>({announcements:P}),[P]);return!e||e.length===0?a.createElement("div",{className:X(Z.content,g),style:L,"data-empty":"true"}):E?a.createElement("div",{className:X(Z.content,g),style:L},a.createElement(sr,{sensors:p,collisionDetection:ar,modifiers:Er,onDragStart:j,onDragEnd:x,onDragCancel:W,accessibility:H},a.createElement(cr,{items:h,strategy:dr},e.map((y,b)=>{const C=h[b],M=d(y),k=s(y),G=n.get(M);return a.createElement(Sr,{key:C,id:C,definition:y,filterKey:M,label:k,filterState:G,onFilterStateChanged:r,onFilterRemoved:l,renderInput:c})})),a.createElement(ur,{dropAnimation:null,className:Z.dragOverlay},S&&F&&a.createElement(Ne,{definition:S,filterKey:F,label:s(S),filterState:n.get(F),onFilterStateChanged:r,onFilterRemoved:l,renderInput:c,dragHandleAttributes:gr})))):a.createElement("div",{className:X(Z.content,g),style:L},e.map(y=>{const b=d(y),C=n.get(b);return a.createElement(Ne,{key:b,definition:y,filterKey:b,label:s(y),filterState:C,onFilterStateChanged:r,onFilterRemoved:l,renderInput:c})}))}const Y={header:"FilterListHeader-module__header___dkKc0CO-",titleContainer:"FilterListHeader-module__titleContainer___KaePpQIx",title:"FilterListHeader-module__title___xqfWfSzK",titleIcon:"FilterListHeader-module__titleIcon___MQy-dec8",activeCount:"FilterListHeader-module__activeCount___GyBsnsQL",actions:"FilterListHeader-module__actions___YZA7zmGc",collapseButton:"FilterListHeader-module__collapseButton___N1-sj3B3",resetButton:"FilterListHeader-module__resetButton___jLcUypov"};function Fr({title:e,titleIcon:n,collapsed:r=!1,onCollapsedChange:l,showResetButton:o,onReset:c,showActiveFilterCount:d,activeFilterCount:s=0,hasVisibilityChanges:E=!1}){const g=i.useCallback(()=>{l==null||l(!r)},[l,r]);return a.createElement("div",{className:Y.header},a.createElement("div",{className:Y.titleContainer},n&&a.createElement("span",{className:Y.titleIcon},n),e&&a.createElement("span",{className:Y.title},e),d&&s>0&&a.createElement("span",{className:Y.activeCount},"(",s,")")),a.createElement("div",{className:Y.actions},o&&a.createElement(N,{className:Y.resetButton,onClick:c,disabled:s===0&&!E},a.createElement(Xn,null)," Reset filters"),l!=null&&a.createElement(N,{className:Y.collapseButton,onClick:g,"aria-expanded":!r,"aria-label":r?"Expand filters":"Collapse filters"},a.createElement(Kn,null))))}const Rr=i.memo(Fr);function Lr(e){const{title:n,titleIcon:r,collapsed:l=!1,onCollapsedChange:o,filterDefinitions:c,filterStates:d,onFilterStateChanged:s,renderInput:E,getFilterKey:g,getFilterLabel:L,activeFilterCount:v,onReset:R,onFilterAdded:h,onFilterRemoved:O,onOrderChange:_,showResetButton:p=!1,showActiveFilterCount:m=!1,hasVisibilityChanges:S,enableSorting:F,className:j,renderAddFilterButton:x}=e,[W,P]=i.useState(null),H=i.useCallback(()=>{o==null||o(!1)},[o]),y=l&&o!=null;return a.createElement("div",{className:X(w.filterList,j)},y&&a.createElement("div",{className:w.filterListCollapsed,"data-collapsed":"true"},a.createElement(N,{className:w.expandButton,onClick:H,"aria-label":"Expand filters"},a.createElement(zn,null)),a.createElement("span",{className:w.collapsedLabel},n??"Filters")),a.createElement("div",{ref:P,className:X(w.expandedContent,y&&w.hiddenContent),"data-active-count":v},a.createElement($n,{value:W},(n||r||p||m||o)&&a.createElement(Rr,{title:n,titleIcon:r,collapsed:l,onCollapsedChange:o,showResetButton:p,onReset:R,showActiveFilterCount:m,activeFilterCount:v,hasVisibilityChanges:S}),a.createElement("div",{className:w.scrollableContent},a.createElement(vr,{filterDefinitions:c,filterStates:d,onFilterStateChanged:s,onFilterRemoved:O,onOrderChange:_,renderInput:E,getFilterKey:g,getFilterLabel:L,enableSorting:F})),(x!=null||h!=null)&&a.createElement("div",{className:w.addButtonContainer},x?x():a.createElement(N,{type:"button",className:w.addButton,onClick:h},"+ Add filter")))))}const Ar={trigger:"AddFilterPopover-module__trigger___8QQBrzPo"};function jr({hiddenDefinitions:e,onShowFilter:n,renderTrigger:r}){const l=Jn();return a.createElement(Wn,{items:e,onItemSelected:n,trigger:r!=null?r():"+ Add filter",triggerClassName:r==null?Ar.trigger:void 0,searchPlaceholder:"Search filters",emptyMessage:"No matching filters",collisionBoundary:l})}const _r=i.memo(jr);function Mr(e,n){const r=i.useMemo(()=>(e==null?void 0:e.map($))??[],[e]),l=i.useMemo(()=>(e==null?void 0:e.filter(p=>p.isVisible!==!1).map($))??[],[e]),[o,c]=i.useState(()=>l);i.useEffect(()=>{c(l)},[l]);const d=i.useRef(n);d.current=n;const s=i.useCallback(p=>{if(!d.current)return;const m=new Set(p),S=r.filter(F=>!m.has(F));d.current(p,S)},[r]),E=i.useMemo(()=>{const p=new Map;if(e==null)return p;for(const m of e)p.set($(m),m);return p},[e]),{visibleDefinitions:g,hiddenDefinitions:L}=i.useMemo(()=>{if(e==null)return{visibleDefinitions:[],hiddenDefinitions:[]};const p=new Set(o),m=[],S=[];for(const F of o){const j=E.get(F);j!=null&&m.push(j)}for(const F of r)if(!p.has(F)){const j=E.get(F);j!=null&&S.push(j)}return{visibleDefinitions:m,hiddenDefinitions:S}},[e,E,o,r]),v=i.useCallback(p=>{c(m=>{if(m.includes(p))return m;const S=[...m,p];return s(S),S})},[s]),R=i.useCallback(p=>{c(m=>{const S=m.filter(F=>F!==p);return s(S),S})},[s]),h=i.useCallback(p=>{c(m=>p.length===m.length&&p.every((S,F)=>S===m[F])?m:(s(p),p))},[s]),O=i.useCallback(()=>{c(p=>l.length===p.length&&l.every((m,S)=>m===p[S])?p:(s(l),l))},[l,s]),_=i.useMemo(()=>o.length!==l.length?!0:!o.every((p,m)=>p===l[m]),[o,l]);return{visibleDefinitions:g,hiddenDefinitions:L,showFilter:v,hideFilter:R,reorderVisible:h,hasVisibilityChanges:_,resetVisibility:O}}const kr={};function Dr(e){const{objectType:n,objectSet:r,title:l,titleIcon:o,collapsed:c,onCollapsedChange:d,filterDefinitions:s,addFilterMode:E="uncontrolled",showResetButton:g=!1,onReset:L,showActiveFilterCount:v=!1,showFilteredOutValues:R=!1,className:h,enableSorting:O,onFilterAdded:_,onFilterRemoved:p,onFilterVisibilityChange:m,renderAddFilterButton:S}=e,{filterStates:F,setFilterState:j,clearFilterState:x,perFilterWhereClauses:W,perFilterLinkedFilters:P,activeFilterCount:H,reset:y}=Qn(e),b=E==="uncontrolled",C=i.useCallback((A,q)=>{if(!m)return;const De=[...A.map(z=>({filterKey:z,isVisible:!0})),...q.map(z=>({filterKey:z,isVisible:!1}))];m(De)},[m]),{visibleDefinitions:M,hiddenDefinitions:k,showFilter:G,hideFilter:we,reorderVisible:Ve,hasVisibilityChanges:An,resetVisibility:Be}=Mr(s,b?C:void 0),jn=i.useCallback(()=>{y(),Be(),L==null||L()},[y,Be,L]),_n=i.useMemo(()=>{if(s!=null)return s.filter(A=>A.isVisible!==!1)},[s]),Mn=b?M:_n,kn=i.useCallback(A=>{x(A),b&&we(A),p==null||p(A)},[x,b,we,p]),We=i.useCallback(A=>{G(A),_==null||_(A,s??[])},[G,_,s]),Dn=i.useCallback(A=>{Ve(A)},[Ve]),He=i.useMemo(()=>k.map(A=>({key:$(A),label:Ye(A)})),[k]),On=i.useMemo(()=>b?k.length===0?void 0:()=>a.createElement(_r,{hiddenDefinitions:He,onShowFilter:We,renderTrigger:S}):S,[b,k.length,He,We,S]),In=b?kn:p,xn=i.useCallback(({definition:A,filterKey:q,filterState:De,onFilterStateChanged:z,searchQuery:Nn,excludeRowOpen:Pn})=>a.createElement(qn,{objectType:n,objectSet:r,definition:A,filterState:De,onFilterStateChanged:z,whereClause:W.get(q)??kr,linkedFilters:P.get(q)??Zn,showFilteredOutValues:R,searchQuery:Nn,excludeRowOpen:Pn}),[n,r,W,P,R]);return a.createElement(Lr,{title:l,titleIcon:o,collapsed:c,onCollapsedChange:d,filterDefinitions:Mn,filterStates:F,onFilterStateChanged:j,renderInput:xn,getFilterKey:$,getFilterLabel:Ye,activeFilterCount:H,onReset:jn,showResetButton:g,showActiveFilterCount:v,hasVisibilityChanges:An,enableSorting:O,onFilterRemoved:In,onOrderChange:Dn,className:h,renderAddFilterButton:On})}const f=mr(Dr,"FilterList"),{useArgs:En}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:U}=__STORYBOOK_MODULE_TEST__,K={type:"PROPERTY",id:"department",key:"department",label:"Department",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},Pe={type:"PROPERTY",id:"team",key:"team",label:"Team",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},gn={type:"PROPERTY",id:"fullName",key:"fullName",label:"Full Name",filterComponent:"CONTAINS_TEXT",filterState:{type:"CONTAINS_TEXT"}},vn={type:"PROPERTY",id:"firstFullTimeStartDate",key:"firstFullTimeStartDate",label:"Start Date",filterComponent:"DATE_RANGE",filterState:{type:"DATE_RANGE"},clickToFilter:!0},_e={type:"PROPERTY",id:"employeeNumber",key:"employeeNumber",label:"Employee Number",filterComponent:"NUMBER_RANGE",filterState:{type:"NUMBER_RANGE"},clickToFilter:!0},J={type:"PROPERTY",id:"locationCity",key:"locationCity",label:"Location City",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},Fn={type:"PROPERTY",id:"jobTitle-multi",key:"jobTitle",label:"Job Title",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}},I=[K,Pe,gn,vn,Fn,_e,J],T={width:320,height:600},V={display:"flex",gap:16},B={flex:1},Q={marginTop:8,padding:12,background:"#f5f5f5",borderRadius:4,fontSize:12,overflow:"auto",maxHeight:560},Me={display:"flex",gap:16,height:600},ke={width:320,flexShrink:0},Rn=t.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:t.jsx("path",{d:"M1 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1.5a1 1 0 0 1-.293.707L10 8.914V13a1 1 0 0 1-.553.894l-2 1A1 1 0 0 1 6 14v-5.086L1.293 4.207A1 1 0 0 1 1 3.5V2z"})}),ml={title:"Experimental/FilterList",tags:["experimental"],component:f,args:{title:"Filters",enableSorting:!1,showResetButton:!1,showActiveFilterCount:!1,collapsed:!1,onFilterClauseChanged:U(),onFilterStateChanged:U(),onFilterAdded:U(),onFilterRemoved:U(),onFilterVisibilityChange:U(),onCollapsedChange:U(),onReset:U()},parameters:{msw:{handlers:[...Bn.handlers]},controls:{expanded:!0}},argTypes:{objectType:{description:"The object type definition for the objects being filtered",control:!1},objectSet:{description:"Optional object set to scope aggregation queries",control:!1},filterDefinitions:{description:"Array of filter definitions. If not provided, all filterable properties are auto-discovered.",control:!1},title:{description:"Title displayed in the filter list header",control:"text"},titleIcon:{description:"Icon displayed next to the title",control:!1},filterClause:{description:"The current where clause. If provided, the filter clause is controlled.",control:!1},onFilterClauseChanged:{description:"Called when the filter clause changes. Required in controlled mode.",control:!1,table:{category:"Events"}},onFilterStateChanged:{description:"Called when an individual filter's state changes",control:!1,table:{category:"Events"}},enableSorting:{description:"Enable drag-and-drop reordering of filters",control:"boolean",table:{defaultValue:{summary:"false"}}},collapsed:{description:"Whether the filter list panel is collapsed",control:"boolean"},onCollapsedChange:{description:"Called when the collapsed state changes",control:!1,table:{category:"Events"}},showResetButton:{description:"Show reset filters button in header",control:"boolean",table:{defaultValue:{summary:"false"}}},onReset:{description:"Called when the reset button is clicked",control:!1,table:{category:"Events"}},showActiveFilterCount:{description:"Show count of active filters in header",control:"boolean",table:{defaultValue:{summary:"false"}}},onFilterAdded:{description:"Called when a filter is added. If provided, users can add filters.",control:!1,table:{category:"Events"}},onFilterRemoved:{description:"Called when a filter is removed. If provided, users can remove filters.",control:!1,table:{category:"Events"}},onFilterVisibilityChange:{description:"Called when filter visibility or ordering changes (reorder, add, remove).",control:!1,table:{category:"Events"}},addFilterMode:{description:'Controls how filter add/remove is managed. "uncontrolled" manages visibility internally; "controlled" leaves it to the consumer.',control:"select",options:["controlled","uncontrolled"],table:{category:"Advanced",defaultValue:{summary:'"uncontrolled"'}}},renderAddFilterButton:{description:"Custom render function for the add filter button.",control:!1,table:{category:"Advanced"}},initialFilterStates:{description:"Initial filter states for hydrating from external storage. Merged over definition defaults on mount.",control:!1,table:{category:"Advanced"}},className:{description:"Additional CSS class name",control:"text"}}},ee={parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:({objectType:e,objectSet:n,...r})=>{const l=i.useMemo(()=>[K,J],[]);return t.jsx("div",{style:T,children:t.jsx(f,{objectType:u,filterDefinitions:l,...r})})}},te={parameters:{docs:{description:{story:"Repro for the integer-typed `NUMBER_RANGE` rounding fix. `employeeNumber` is an `integer` property, so histogram bucket boundaries — `(maxValue - minValue) / 20` — are usually fractional. Click any bar in the histogram. The Min/Max boxes must show whole integers (e.g. `657495073`), not fractional values (e.g. `657495073.4`)."}}},render:({objectType:e,objectSet:n,...r})=>{const l=i.useMemo(()=>[_e],[]);return t.jsx("div",{style:T,children:t.jsx(f,{objectType:u,filterDefinitions:l,...r})})}};function Or(e){const n=je(),r=i.useMemo(()=>n(u).where({department:"Marketing"}),[n]),l=i.useMemo(()=>[Pe,J],[]);return t.jsx("div",{style:T,children:t.jsx(f,{objectType:u,objectSet:r,filterDefinitions:l,...e})})}const ne={parameters:{docs:{description:{story:"Pass an `objectSet` prop to scope filter aggregations to a subset of objects. Here the object set is filtered to Marketing department employees, so the listogram counts reflect only that subset."},source:{code:`const client = useOsdkClient();
const objectSet = client(Employee).where({ department: "Marketing" });

<FilterList
  objectType={Employee}
  objectSet={objectSet}
  filterDefinitions={[
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:e=>t.jsx(Or,{...e})};function Ir(e){const n=i.useMemo(()=>[K,Pe,{...gn,isVisible:!1},{...vn,isVisible:!1},{..._e,isVisible:!1},{...J,isVisible:!1}],[]);return t.jsx("div",{style:T,children:t.jsx(f,{objectType:u,filterDefinitions:n,addFilterMode:"uncontrolled",...e})})}const re={args:{showResetButton:!0},parameters:{docs:{source:{code:`const filterDefinitions = [
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
/>`}}},render:e=>t.jsx(Ir,{...e})};function xr(e){const[n,r]=i.useState(void 0),l=e.onFilterClauseChanged,o=i.useCallback(c=>{r(c),l==null||l(c)},[l]);return t.jsxs("div",{style:V,children:[t.jsx("div",{style:T,children:t.jsx(f,{objectType:u,filterDefinitions:I,...e,filterClause:n,onFilterClauseChanged:o})}),t.jsxs("div",{style:B,children:[t.jsx("strong",{children:"Filter Clause (JSON):"}),t.jsx("pre",{style:Q,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const ie={parameters:{docs:{description:{story:"All filter component types with a controlled where clause. Hover filter items to reveal search and exclude actions."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>`}}},render:e=>t.jsx(xr,{...e})},le={args:{title:"Employee Filters"},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  titleIcon={<svg>...</svg>}
/>`}}},render:({objectType:e,objectSet:n,...r})=>t.jsx("div",{style:T,children:t.jsx(f,{objectType:u,filterDefinitions:I,titleIcon:Rn,...r})})};function Nr(e){const n=e.onReset,r=i.useCallback(()=>{console.log("Reset clicked"),n==null||n()},[n]);return t.jsx("div",{style:T,children:t.jsx(f,{objectType:u,filterDefinitions:I,...e,onReset:r})})}const oe={args:{showResetButton:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showResetButton={true}
  onReset={() => console.log("Reset clicked")}
/>`}}},render:e=>t.jsx(Nr,{...e})},se={args:{showActiveFilterCount:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showActiveFilterCount={true}
/>`}}},render:({objectType:e,objectSet:n,...r})=>t.jsx("div",{style:T,children:t.jsx(f,{objectType:u,filterDefinitions:I,...r})})},ae={args:{enableSorting:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  enableSorting={true}
/>`}}},render:({objectType:e,objectSet:n,...r})=>t.jsx("div",{style:T,children:t.jsx(f,{objectType:u,filterDefinitions:I,...r})})};function Pr(e){return t.jsx("div",{style:T,children:t.jsx(f,{objectType:u,filterDefinitions:I,...e})})}const ce={args:{title:"Employee Filters",showActiveFilterCount:!0},parameters:{docs:{description:{story:"Click the collapse button to minimize the filter panel. Active filter count is shown in the collapsed state."},source:{code:`const [collapsed, setCollapsed] = useState(false);

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  collapsed={collapsed}
  onCollapsedChange={setCollapsed}
  showActiveFilterCount={true}
/>`}}},render:e=>{const[,n]=En(),r=e.onCollapsedChange,l=i.useCallback(o=>{n({collapsed:o}),r==null||r(o)},[n,r]);return t.jsx(Pr,{...e,onCollapsedChange:l})}},de={parameters:{docs:{source:{code:`const filterDefinitions = [
  { type: "KEYWORD_SEARCH", properties: ["fullName", "department", "jobTitle", "locationCity"], label: "Search" },
  { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:({objectType:e,objectSet:n,...r})=>{const l=i.useMemo(()=>[{type:"KEYWORD_SEARCH",properties:["fullName","department","jobTitle","locationCity"],label:"Search"},K,J],[]);return t.jsx("div",{style:T,children:t.jsx(f,{objectType:u,filterDefinitions:l,...r})})}};function wr(e){const n=i.useMemo(()=>[{type:"PROPERTY",id:"department-no-color",key:"department",label:"Department (default colors)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]),r=i.useMemo(()=>[{type:"PROPERTY",id:"department-color",key:"department",label:"Department (custom colors)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},colorMap:{Marketing:"#e74c3c",Operations:"#2ecc71",Finance:"#3498db",Product:"#f39c12"}}],[]);return t.jsxs("div",{style:V,children:[t.jsx("div",{style:T,children:t.jsx(f,{objectType:u,filterDefinitions:n,...e})}),t.jsx("div",{style:T,children:t.jsx(f,{objectType:u,filterDefinitions:r,...e})})]})}const ue={parameters:{docs:{source:{code:`// Without colorMap: all bars use the default theme color
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

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>t.jsx(wr,{...e})},Ln={Marketing:"Marketing Dept.",Operations:"Ops Team",Finance:"Finance & Accounting",Product:"Product Group"};function Vr(e){const n=i.useMemo(()=>[{type:"PROPERTY",id:"department-default",key:"department",label:"Department (default)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]),r=i.useMemo(()=>[{type:"PROPERTY",id:"department-custom",key:"department",label:"Department (custom render)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},renderValue:l=>Ln[l]??l},{type:"PROPERTY",id:"team-custom",key:"team",label:"Team (custom render)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},renderValue:l=>l.toUpperCase()}],[]);return t.jsxs("div",{style:V,children:[t.jsx("div",{style:T,children:t.jsx(f,{objectType:u,filterDefinitions:n,...e})}),t.jsx("div",{style:T,children:t.jsx(f,{objectType:u,filterDefinitions:r,...e})})]})}const pe={parameters:{docs:{description:{story:"Use `renderValue` to customize how filter values are displayed and searched. The returned string replaces the raw value for display and search matching. Works with LISTOGRAM, MULTI_SELECT, and SINGLE_SELECT components."},source:{code:`const DEPARTMENT_LABELS = {
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

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>t.jsx(Vr,{...e})},Br={Marketing:"#f97316",Operations:"#3b82f6",Finance:"#10b981",Product:"#a855f7"},Wr={display:"inline-flex",alignItems:"center",gap:8},Hr={display:"inline-block",width:10,height:10,borderRadius:"50%",flexShrink:0};function Gr({value:e}){const n=Br[e]??"#94a3b8";return t.jsxs("span",{style:Wr,children:[t.jsx("span",{style:{...Hr,background:n}}),t.jsx("span",{children:Ln[e]??e})]})}function Yr(e){const n=i.useMemo(()=>[{type:"PROPERTY",id:"department-swatch",key:"department",label:"Department (JSX)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},renderValue:r=>t.jsx(Gr,{value:r})},{type:"PROPERTY",id:"team-link",key:"team",label:"Team (anchor JSX)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},renderValue:r=>t.jsx("a",{href:`#/team/${encodeURIComponent(r)}`,onClick:l=>l.preventDefault(),style:{color:"#2563eb",textDecoration:"underline"},children:r})}],[]);return t.jsx("div",{style:T,children:t.jsx(f,{objectType:u,filterDefinitions:n,...e})})}const me={parameters:{docs:{description:{story:"`renderValue` may return any `ReactNode`, not just a string. Use this to render avatars, anchors, status pills, or any custom JSX inside listogram rows, dropdown items, and chips. When the function returns non-string JSX, search matching falls back to the raw value."},source:{code:`const filterDefinitions = [
  {
    type: "PROPERTY",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
    renderValue: (value) => <DepartmentSwatch value={value} />,
  },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>t.jsx(Yr,{...e})};function Ur(e){const n=i.useMemo(()=>[{type:"PROPERTY",id:"dept-full",key:"department",label:"full: label + bar + count",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"full"}}],[]),r=i.useMemo(()=>[{type:"PROPERTY",id:"dept-count",key:"department",label:"count: label + count (no bar)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"count"}}],[]),l=i.useMemo(()=>[{type:"PROPERTY",id:"dept-minimal",key:"department",label:"minimal: label only",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"}}],[]);return t.jsxs("div",{style:V,children:[t.jsx("div",{style:T,children:t.jsx(f,{objectType:u,filterDefinitions:n,...e})}),t.jsx("div",{style:T,children:t.jsx(f,{objectType:u,filterDefinitions:r,...e})}),t.jsx("div",{style:T,children:t.jsx(f,{objectType:u,filterDefinitions:l,...e})})]})}const fe={parameters:{docs:{source:{code:`// "full" (default): label + colored bar + count number
// "count": label + count number (no bar)
// "minimal": label only (no bar, no count)

const filterDefinitions = [
  { ..., listogramConfig: { displayMode: "full" } },
  { ..., listogramConfig: { displayMode: "count" } },
  { ..., listogramConfig: { displayMode: "minimal" } },
];`}}},render:e=>t.jsx(Ur,{...e})};function Xr(e){const n=i.useMemo(()=>[{type:"PROPERTY",id:"dept-with-count",key:"department",label:"Department (counts visible)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},{type:"PROPERTY",id:"team-with-count",key:"team",label:"Team (counts visible)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}}],[]),r=i.useMemo(()=>[{type:"PROPERTY",id:"dept-no-count",key:"department",label:"Department (counts hidden)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},showCount:!1},{type:"PROPERTY",id:"team-no-count",key:"team",label:"Team (counts hidden)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},showCount:!1}],[]);return t.jsxs("div",{style:V,children:[t.jsx("div",{style:T,children:t.jsx(f,{objectType:u,filterDefinitions:n,...e})}),t.jsx("div",{style:T,children:t.jsx(f,{objectType:u,filterDefinitions:r,...e})})]})}const ye={parameters:{docs:{description:{story:"Use `showCount: false` on individual filter definitions to hide aggregation counts in LISTOGRAM and MULTI_SELECT inputs. Bar visualizations in LISTOGRAM are preserved."},source:{code:`// showCount defaults to true; set false to hide counts per filter
const filterDefinitions = [
  { ..., filterComponent: "LISTOGRAM", showCount: false },
  { ..., filterComponent: "MULTI_SELECT", showCount: false },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>t.jsx(Xr,{...e})};function Kr(e){const n=i.useMemo(()=>[{type:"PROPERTY",id:"department-checkbox",key:"department",label:"Department",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},{type:"PROPERTY",id:"team-checkbox",key:"team",label:"Team",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]);return t.jsx("div",{style:T,children:t.jsx(f,{objectType:u,filterDefinitions:n,...e})})}const Ce={parameters:{docs:{description:{story:"Listogram rows always include a checkbox for multi-select. Selecting values checks the checkbox and highlights the row. Use the exclude toggle (three-dot menu) to invert selections."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:e=>t.jsx(Kr,{...e})};function zr(e){const[n,r]=i.useState(void 0),l=e.onFilterRemoved,o=i.useCallback(s=>{console.log("Removed filter:",s),l==null||l(s)},[l]),c=e.onFilterClauseChanged,d=i.useCallback(s=>{r(s),c==null||c(s)},[c]);return t.jsxs("div",{style:Me,children:[t.jsx("div",{style:ke,children:t.jsx(f,{objectType:u,filterDefinitions:I,...e,onFilterRemoved:o,filterClause:n,onFilterClauseChanged:d})}),t.jsx("div",{style:B,children:t.jsx(Ae,{objectType:u,filter:n})})]})}const he={args:{title:"Employee Filters",showResetButton:!0,showActiveFilterCount:!0,enableSorting:!0},parameters:{docs:{source:{code:`const [filterClause, setFilterClause] = useState(undefined);

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
</div>`}}},render:e=>t.jsx(zr,{...e})};function $r(e){const n=je(),r=i.useMemo(()=>n(u).where({department:"Marketing"}),[n]),[l,o]=i.useState(void 0),c=e.onFilterClauseChanged,d=i.useCallback(s=>{o(s),c==null||c(s)},[c]);return t.jsxs("div",{style:Me,children:[t.jsx("div",{style:ke,children:t.jsx(f,{objectType:u,objectSet:r,filterDefinitions:I,...e,filterClause:l,onFilterClauseChanged:d})}),t.jsx("div",{style:B,children:t.jsx(Ae,{objectType:u,objectSet:r,filter:l})})]})}const Se={args:{title:"Marketing Employees",showResetButton:!0,showActiveFilterCount:!0},parameters:{docs:{description:{story:"Demonstrates using a pre-filtered objectSet to scope both FilterList aggregations and ObjectTable data to a subset of employees."},source:{code:`const client = useOsdkClient();
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
/>`}}},render:e=>t.jsx($r,{...e})};function Jr(e){const[n,r]=i.useState(I),l=e.onFilterRemoved,o=i.useCallback(c=>{r(d=>d.filter(s=>"key"in s?s.key!==c:!0)),l==null||l(c)},[l]);return t.jsx("div",{style:T,children:t.jsx(f,{objectType:u,filterDefinitions:n,...e,onFilterRemoved:o})})}const be={name:"Removable Filters",args:{title:"Removable Filters",showActiveFilterCount:!0},parameters:{docs:{description:{story:"When `onFilterRemoved` is provided, each filter item shows a remove button (X) on hover. Clicking it removes the filter from the list."},source:{code:`const [definitions, setDefinitions] = useState(filterDefinitions);

const handleFilterRemoved = (filterKey) => {
  setDefinitions(prev => prev.filter(def => def.key !== filterKey));
};

<FilterList
  objectType={Employee}
  filterDefinitions={definitions}
  onFilterRemoved={handleFilterRemoved}
  title="Removable Filters"
/>`}}},render:e=>t.jsx(Jr,{...e})};function Qr(e){const[n,r]=i.useState(void 0),l=i.useMemo(()=>[{type:"STATIC_VALUES",key:"department",label:"Department (static)",filterComponent:"LISTOGRAM",values:["Marketing","Operations","Finance","Product"],filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"}},{type:"STATIC_VALUES",key:"locationCity",label:"Office Location",filterComponent:"SINGLE_SELECT",values:["New York","San Francisco","London","Tokyo"],filterState:{type:"SELECT",selectedValues:[]}},{type:"STATIC_VALUES",key:"team",label:"Team (multi-select)",filterComponent:"MULTI_SELECT",values:["Alpha","Beta","Gamma","Delta"],filterState:{type:"SELECT",selectedValues:[]}},{type:"STATIC_VALUES",id:"custom-status",key:"status",label:"Status (custom clause)",filterComponent:"LISTOGRAM",values:["Active","Inactive"],filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"},toWhereClause:d=>{if(d.type!=="EXACT_MATCH"||d.values.length===0)return;const s=d.values,E=s.includes("Active"),g=s.includes("Inactive");if(E&&g)return{$or:[{employeeStatus:"Active"},{employeeStatus:"Inactive"}]};if(E)return{employeeStatus:"Active"};if(g)return{employeeStatus:"Inactive"}}}],[]),o=e.onFilterClauseChanged,c=i.useCallback(d=>{r(d),o==null||o(d)},[o]);return t.jsxs("div",{style:V,children:[t.jsx("div",{style:T,children:t.jsx(f,{objectType:u,filterDefinitions:l,...e,filterClause:n,onFilterClauseChanged:c})}),t.jsxs("div",{style:B,children:[t.jsx("strong",{children:"Filter Clause (JSON):"}),t.jsx("pre",{style:Q,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const Te={parameters:{docs:{description:{story:"Use `STATIC_VALUES` filter definitions to provide a fixed list of values instead of fetching from OSDK aggregation. Supports LISTOGRAM, SINGLE_SELECT, MULTI_SELECT, and TEXT_TAGS components. Optionally provide a `toWhereClause` function for custom clause generation."},source:{code:`const filterDefinitions = [
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
/>`}}},render:e=>t.jsx(Qr,{...e})};function qr(e){const[n,r]=i.useState(void 0),[l,o]=i.useState(I),c=e.onFilterRemoved,d=i.useCallback(v=>{o(R=>R.filter(h=>"key"in h?h.key!==v:!0)),c==null||c(v)},[c]),s=e.onReset,E=i.useCallback(()=>{o(I),s==null||s()},[s]),g=e.onFilterClauseChanged,L=i.useCallback(v=>{r(v),g==null||g(v)},[g]);return t.jsxs("div",{style:Me,children:[t.jsx("div",{style:ke,children:t.jsx(f,{objectType:u,filterDefinitions:l,titleIcon:Rn,...e,onReset:E,onFilterRemoved:d,filterClause:n,onFilterClauseChanged:L})}),t.jsx("div",{style:B,children:t.jsx(Ae,{objectType:u,filter:n})})]})}const Ee={name:"Full Featured",args:{title:"Employee Filters",showResetButton:!0,showActiveFilterCount:!0,enableSorting:!0},parameters:{docs:{description:{story:"Demonstrates all filter list features together: collapse, reset, active count, sorting, removable filters, per-filter search, exclude toggle, and controlled where clause driving an ObjectTable."},source:{code:`// All features combined: collapse, sort, search, exclude, remove, reset

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
/>`}}},render:e=>{const[,n]=En(),r=e.onCollapsedChange,l=i.useCallback(o=>{n({collapsed:o}),r==null||r(o)},[n,r]);return t.jsx(qr,{...e,onCollapsedChange:l})}};function Zr(e){const[n,r]=i.useState(void 0),l=i.useMemo(()=>[{type:"HAS_LINK",linkName:"lead",label:"Has Manager",filterState:{type:"hasLink",hasLink:!1}}],[]),o=e.onFilterClauseChanged,c=i.useCallback(d=>{r(d),o==null||o(d)},[o]);return t.jsxs("div",{style:V,children:[t.jsx("div",{style:T,children:t.jsx(f,{objectType:u,filterDefinitions:l,...e,filterClause:n,onFilterClauseChanged:c})}),t.jsxs("div",{style:B,children:[t.jsx("strong",{children:"Filter Clause (JSON):"}),t.jsx("pre",{style:Q,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const ge={name:"Linked Property Filters",parameters:{docs:{description:{story:"Demonstrates filtering on properties of linked objects. HAS_LINK filters objects based on whether they have a linked object. "},source:{code:`// HAS_LINK and LINKED_PROPERTY filter definitions
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
/>`}}},render:e=>t.jsx(Zr,{...e})},ei={type:"PROPERTY",id:"combined-department",key:"department",label:"Department",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},ti={type:"PROPERTY",id:"combined-locationCity",key:"locationCity",label:"Location City",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}},ni={type:"LINKED_PROPERTY",id:"combined-lead-name",linkName:"lead",reverseLinkName:"peeps",linkedPropertyKey:"fullName",linkedFilterComponent:"MULTI_SELECT",linkedFilterState:{type:"SELECT",selectedValues:[]},filterState:{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:[]}},label:"Manager Name"},ri=[ni,ei,ti];function ii(e){const n=je(),r=i.useMemo(()=>n(u),[n]),[l,o]=i.useState(void 0),[c,d]=i.useState(r),s=e.onFilterClauseChanged,E=i.useCallback(g=>{o(g),s==null||s(g)},[s]);return t.jsxs("div",{style:Me,children:[t.jsx("div",{style:ke,children:t.jsx(f,{...e,objectType:u,objectSet:r,filterDefinitions:ri,filterClause:l,onFilterClauseChanged:E,onEffectiveObjectSet:d,showFilteredOutValues:!0})}),t.jsx("div",{style:B,children:t.jsx(Ae,{objectType:u,objectSet:c})})]})}const ve={name:"Combined linked + direct filters (zero-count ghosts)",parameters:{docs:{description:{story:"A linked filter (Manager Name) and direct property filters coexist in one FilterList. Pass the unfiltered scope as `objectSet`; FilterList applies the linked-filter narrowing internally and emits the fully-narrowed `ObjectSet` via `onEffectiveObjectSet` for the table. With `showFilteredOutValues`, direct-facet values absent under the active linked filter render as greyed-out count=0 ghost rows."},source:{code:`const baseObjectSet = useMemo(() => client(Employee), [client]);
const [effectiveObjectSet, setEffectiveObjectSet] = useState(baseObjectSet);

<FilterList
  objectType={Employee}
  objectSet={baseObjectSet}
  filterDefinitions={filterDefinitions}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
  onEffectiveObjectSet={setEffectiveObjectSet}
  showFilteredOutValues
/>
<ObjectTable objectType={Employee} objectSet={effectiveObjectSet} />`}}},render:e=>t.jsx(ii,{...e})};function li({filterState:e,onFilterStateChanged:n}){const r=i.useCallback(o=>{const c=o.target.value;n({type:"custom",customState:{value:c}})},[n]),l=i.useCallback(()=>{n({type:"custom",customState:{value:""}})},[n]);return t.jsxs("div",{style:{padding:"12px 0",display:"flex",gap:"8px"},children:[t.jsx("input",{type:"text",value:e.customState.value,onChange:r,placeholder:"Enter name substring...",style:{flex:1,padding:"6px 8px",fontSize:"14px",border:"1px solid #ccc",borderRadius:"4px"}}),e.customState.value&&t.jsx("button",{onClick:l,style:{padding:"6px 12px",fontSize:"12px",backgroundColor:"#f5f5f5",border:"1px solid #ccc",borderRadius:"4px",cursor:"pointer"},children:"Clear"})]})}function oi(e){const[n,r]=i.useState(void 0),l=i.useMemo(()=>[{type:"CUSTOM",key:"custom-name-contains",label:"Name Contains",filterComponent:"CUSTOM",filterState:{type:"custom",customState:{value:""}},renderInput:({filterState:d,onFilterStateChanged:s})=>t.jsx(li,{filterState:d,onFilterStateChanged:s}),toWhereClause:d=>{var E;const s=(E=d.customState)==null?void 0:E.value;if(s)return{fullName:{$containsAnyTerm:s}}}}],[]),o=e.onFilterClauseChanged,c=i.useCallback(d=>{r(d),o==null||o(d)},[o]);return t.jsxs("div",{style:V,children:[t.jsx("div",{style:T,children:t.jsx(f,{objectType:u,filterDefinitions:l,...e,filterClause:n,onFilterClauseChanged:c})}),t.jsxs("div",{style:B,children:[t.jsx("strong",{children:"Filter Clause (JSON):"}),t.jsx("pre",{style:Q,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const Fe={name:"Custom Filters",parameters:{docs:{description:{story:"Custom filters provide full control over filtering logic and UI. The 'Name Contains' filter uses `renderInput` for a simple custom input. "},source:{code:`// Custom filter with renderInput
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
/>`}}},render:e=>t.jsx(oi,{...e})},si={type:"PROPERTY",id:"department-multi",key:"department",label:"Department",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}},ai={type:"PROPERTY",id:"department-single",key:"department",label:"Department (single)",filterComponent:"SINGLE_SELECT",filterState:{type:"SELECT",selectedValues:[]}},ci=[K,si,ai,_e],Re={name:"No value rendering",parameters:{docs:{description:{story:"Empty/null filter values render via the canonical `<NoValueLabel />` component — italic, muted, with the literal text 'No value' — across listogram buckets, single-select dropdown options, multi-select dropdown options, and multi-select chips. The mock dataset includes one Employee with `department: \"\"` so the No value row is visible in the listogram."}}},render:()=>t.jsx("div",{style:T,children:t.jsx(f,{objectType:u,filterDefinitions:ci})})},di={type:"PROPERTY",id:"locationCity-single",key:"locationCity",label:"Location City (single)",filterComponent:"SINGLE_SELECT",filterState:{type:"SELECT",selectedValues:[]}},ui={type:"LINKED_PROPERTY",linkName:"lead",reverseLinkName:"peeps",linkedPropertyKey:"department",linkedFilterComponent:"MULTI_SELECT",linkedFilterState:{type:"SELECT",selectedValues:[]},filterState:{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:[]}},label:"Manager Department (linked multi)"},pi={type:"LINKED_PROPERTY",linkName:"lead",reverseLinkName:"peeps",linkedPropertyKey:"locationCity",linkedFilterComponent:"SINGLE_SELECT",linkedFilterState:{type:"SELECT",selectedValues:[]},filterState:{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:[]}},label:"Manager City (linked single)"},mi=new Map([["department",{type:"EXACT_MATCH",values:["Marketing","Research"]}],["jobTitle-multi",{type:"SELECT",selectedValues:["Marketing Manager","Chief Scientist"]}],["locationCity-single",{type:"SELECT",selectedValues:["Berlin"]}],["linkedProperty:lead:department",{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:["Marketing","Research"]}}],["linkedProperty:lead:locationCity",{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:["Berlin"]}}]]),fi=[K,Fn,di,ui,pi];function yi(e){const n=je(),r=i.useMemo(()=>n(u),[n]),[l,o]=i.useState(void 0),c=i.useCallback(d=>{o(d)},[]);return t.jsxs("div",{style:V,children:[t.jsx("div",{style:T,children:t.jsx(f,{...e,objectType:u,objectSet:r,filterDefinitions:fi,initialFilterStates:mi,onFilterClauseChanged:c})}),t.jsxs("div",{style:B,children:[t.jsx("h4",{children:"Active where clause"}),t.jsx("pre",{style:Q,children:l?JSON.stringify(l,null,2):"(none)"})]})]})}const Le={name:"With initial filter states",parameters:{docs:{description:{story:"Pass `initialFilterStates` to hydrate filters from saved state (e.g. localStorage or URL params). Selections are restored on mount, including values that currently have zero matching rows — they appear with a count of 0 so users can see and clear them. Demonstrated across LISTOGRAM, MULTI_SELECT, SINGLE_SELECT, and LINKED_PROPERTY filters."},source:{code:`// "Research", "Chief Scientist", and "Berlin" are not in the current
// dataset — they represent saved selections with zero matching rows
// today. The filter list still shows them so users can see and clear them.
const savedStates = new Map([
  // Direct property filters
  ["department", { type: "EXACT_MATCH", values: ["Marketing", "Research"] }],
  ["jobTitle-multi", { type: "SELECT", selectedValues: ["Marketing Manager", "Chief Scientist"] }],
  ["locationCity-single", { type: "SELECT", selectedValues: ["Berlin"] }],
  // Linked property filters
  ["linkedProperty:lead:department", {
    type: "linkedProperty",
    linkedFilterState: { type: "SELECT", selectedValues: ["Marketing", "Research"] },
  }],
  ["linkedProperty:lead:locationCity", {
    type: "linkedProperty",
    linkedFilterState: { type: "SELECT", selectedValues: ["Berlin"] },
  }],
]);

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  initialFilterStates={savedStates}
  onFilterClauseChanged={handleFilterClauseChanged}
/>`}}},render:e=>t.jsx(yi,{...e})};var Xe,Ke,ze;ee.parameters={...ee.parameters,docs:{...(Xe=ee.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(ze=(Ke=ee.parameters)==null?void 0:Ke.docs)==null?void 0:ze.source}}};var $e,Je,Qe;te.parameters={...te.parameters,docs:{...($e=te.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Repro for the integer-typed \`NUMBER_RANGE\` rounding fix. " + "\`employeeNumber\` is an \`integer\` property, so histogram bucket " + "boundaries — \`(maxValue - minValue) / 20\` — are usually fractional. " + "Click any bar in the histogram. The Min/Max boxes must show whole " + "integers (e.g. \`657495073\`), not fractional values " + "(e.g. \`657495073.4\`)."
      }
    }
  },
  render: ({
    objectType: _ot,
    objectSet: _os,
    ...args
  }) => {
    const filterDefinitions = useMemo((): FilterDefinitionUnion<Employee>[] => [employeeNumberFilter], []);
    return <div style={SIDEBAR_STYLE}>
        <FilterList objectType={Employee} filterDefinitions={filterDefinitions} {...args} />
      </div>;
  }
}`,...(Qe=(Je=te.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var qe,Ze,et;ne.parameters={...ne.parameters,docs:{...(qe=ne.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(et=(Ze=ne.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,nt,rt;re.parameters={...re.parameters,docs:{...(tt=re.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(rt=(nt=re.parameters)==null?void 0:nt.docs)==null?void 0:rt.source}}};var it,lt,ot;ie.parameters={...ie.parameters,docs:{...(it=ie.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
}`,...(ot=(lt=ie.parameters)==null?void 0:lt.docs)==null?void 0:ot.source}}};var st,at,ct;le.parameters={...le.parameters,docs:{...(st=le.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(ct=(at=le.parameters)==null?void 0:at.docs)==null?void 0:ct.source}}};var dt,ut,pt;oe.parameters={...oe.parameters,docs:{...(dt=oe.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(pt=(ut=oe.parameters)==null?void 0:ut.docs)==null?void 0:pt.source}}};var mt,ft,yt;se.parameters={...se.parameters,docs:{...(mt=se.parameters)==null?void 0:mt.docs,source:{originalSource:`{
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
}`,...(yt=(ft=se.parameters)==null?void 0:ft.docs)==null?void 0:yt.source}}};var Ct,ht,St;ae.parameters={...ae.parameters,docs:{...(Ct=ae.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
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
}`,...(St=(ht=ae.parameters)==null?void 0:ht.docs)==null?void 0:St.source}}};var bt,Tt,Et;ce.parameters={...ce.parameters,docs:{...(bt=ce.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(Et=(Tt=ce.parameters)==null?void 0:Tt.docs)==null?void 0:Et.source}}};var gt,vt,Ft;de.parameters={...de.parameters,docs:{...(gt=de.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(Ft=(vt=de.parameters)==null?void 0:vt.docs)==null?void 0:Ft.source}}};var Rt,Lt,At;ue.parameters={...ue.parameters,docs:{...(Rt=ue.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
}`,...(At=(Lt=ue.parameters)==null?void 0:Lt.docs)==null?void 0:At.source}}};var jt,_t,Mt;pe.parameters={...pe.parameters,docs:{...(jt=pe.parameters)==null?void 0:jt.docs,source:{originalSource:`{
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
}`,...(Mt=(_t=pe.parameters)==null?void 0:_t.docs)==null?void 0:Mt.source}}};var kt,Dt,Ot;me.parameters={...me.parameters,docs:{...(kt=me.parameters)==null?void 0:kt.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "\`renderValue\` may return any \`ReactNode\`, not just a string. " + "Use this to render avatars, anchors, status pills, or any " + "custom JSX inside listogram rows, dropdown items, and chips. " + "When the function returns non-string JSX, search matching " + "falls back to the raw value."
      },
      source: {
        code: \`const filterDefinitions = [
  {
    type: "PROPERTY",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
    renderValue: (value) => <DepartmentSwatch value={value} />,
  },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />\`
      }
    }
  },
  render: args => <WithRenderValueReactNodeStory {...args} />
}`,...(Ot=(Dt=me.parameters)==null?void 0:Dt.docs)==null?void 0:Ot.source}}};var It,xt,Nt;fe.parameters={...fe.parameters,docs:{...(It=fe.parameters)==null?void 0:It.docs,source:{originalSource:`{
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
}`,...(Nt=(xt=fe.parameters)==null?void 0:xt.docs)==null?void 0:Nt.source}}};var Pt,wt,Vt;ye.parameters={...ye.parameters,docs:{...(Pt=ye.parameters)==null?void 0:Pt.docs,source:{originalSource:`{
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
}`,...(Vt=(wt=ye.parameters)==null?void 0:wt.docs)==null?void 0:Vt.source}}};var Bt,Wt,Ht;Ce.parameters={...Ce.parameters,docs:{...(Bt=Ce.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
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
}`,...(Ht=(Wt=Ce.parameters)==null?void 0:Wt.docs)==null?void 0:Ht.source}}};var Gt,Yt,Ut;he.parameters={...he.parameters,docs:{...(Gt=he.parameters)==null?void 0:Gt.docs,source:{originalSource:`{
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
}`,...(Ut=(Yt=he.parameters)==null?void 0:Yt.docs)==null?void 0:Ut.source}}};var Xt,Kt,zt;Se.parameters={...Se.parameters,docs:{...(Xt=Se.parameters)==null?void 0:Xt.docs,source:{originalSource:`{
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
}`,...(zt=(Kt=Se.parameters)==null?void 0:Kt.docs)==null?void 0:zt.source}}};var $t,Jt,Qt;be.parameters={...be.parameters,docs:{...($t=be.parameters)==null?void 0:$t.docs,source:{originalSource:`{
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
}`,...(Qt=(Jt=be.parameters)==null?void 0:Jt.docs)==null?void 0:Qt.source}}};var qt,Zt,en;Te.parameters={...Te.parameters,docs:{...(qt=Te.parameters)==null?void 0:qt.docs,source:{originalSource:`{
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
}`,...(en=(Zt=Te.parameters)==null?void 0:Zt.docs)==null?void 0:en.source}}};var tn,nn,rn;Ee.parameters={...Ee.parameters,docs:{...(tn=Ee.parameters)==null?void 0:tn.docs,source:{originalSource:`{
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
}`,...(rn=(nn=Ee.parameters)==null?void 0:nn.docs)==null?void 0:rn.source}}};var ln,on,sn;ge.parameters={...ge.parameters,docs:{...(ln=ge.parameters)==null?void 0:ln.docs,source:{originalSource:`{
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
}`,...(sn=(on=ge.parameters)==null?void 0:on.docs)==null?void 0:sn.source}}};var an,cn,dn;ve.parameters={...ve.parameters,docs:{...(an=ve.parameters)==null?void 0:an.docs,source:{originalSource:`{
  name: "Combined linked + direct filters (zero-count ghosts)",
  parameters: {
    docs: {
      description: {
        story: "A linked filter (Manager Name) and direct property filters coexist in " + "one FilterList. Pass the unfiltered scope as \`objectSet\`; FilterList " + "applies the linked-filter narrowing internally and emits the fully-" + "narrowed \`ObjectSet\` via \`onEffectiveObjectSet\` for the table. " + "With \`showFilteredOutValues\`, direct-facet values absent under the " + "active linked filter render as greyed-out count=0 ghost rows."
      },
      source: {
        code: \`const baseObjectSet = useMemo(() => client(Employee), [client]);
const [effectiveObjectSet, setEffectiveObjectSet] = useState(baseObjectSet);

<FilterList
  objectType={Employee}
  objectSet={baseObjectSet}
  filterDefinitions={filterDefinitions}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
  onEffectiveObjectSet={setEffectiveObjectSet}
  showFilteredOutValues
/>
<ObjectTable objectType={Employee} objectSet={effectiveObjectSet} />\`
      }
    }
  },
  render: args => <CombinedWithLinkedFilterStory {...args} />
}`,...(dn=(cn=ve.parameters)==null?void 0:cn.docs)==null?void 0:dn.source}}};var un,pn,mn;Fe.parameters={...Fe.parameters,docs:{...(un=Fe.parameters)==null?void 0:un.docs,source:{originalSource:`{
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
}`,...(mn=(pn=Fe.parameters)==null?void 0:pn.docs)==null?void 0:mn.source}}};var fn,yn,Cn;Re.parameters={...Re.parameters,docs:{...(fn=Re.parameters)==null?void 0:fn.docs,source:{originalSource:`{
  name: "No value rendering",
  parameters: {
    docs: {
      description: {
        story: "Empty/null filter values render via the canonical \`<NoValueLabel />\` " + "component — italic, muted, with the literal text 'No value' — across " + "listogram buckets, single-select dropdown options, multi-select dropdown " + "options, and multi-select chips. The mock dataset includes one Employee " + "with \`department: \\"\\"\` so the No value row is visible in the listogram."
      }
    }
  },
  render: () => <div style={SIDEBAR_STYLE}>
      <FilterList objectType={Employee} filterDefinitions={NO_VALUE_FILTER_DEFINITIONS} />
    </div>
}`,...(Cn=(yn=Re.parameters)==null?void 0:yn.docs)==null?void 0:Cn.source}}};var hn,Sn,bn;Le.parameters={...Le.parameters,docs:{...(hn=Le.parameters)==null?void 0:hn.docs,source:{originalSource:`{
  name: "With initial filter states",
  parameters: {
    docs: {
      description: {
        story: "Pass \`initialFilterStates\` to hydrate filters from saved state " + "(e.g. localStorage or URL params). Selections are restored on " + "mount, including values that currently have zero matching rows " + "— they appear with a count of 0 so users can see and clear them. " + "Demonstrated across LISTOGRAM, MULTI_SELECT, SINGLE_SELECT, " + "and LINKED_PROPERTY filters."
      },
      source: {
        code: \`// "Research", "Chief Scientist", and "Berlin" are not in the current
// dataset — they represent saved selections with zero matching rows
// today. The filter list still shows them so users can see and clear them.
const savedStates = new Map([
  // Direct property filters
  ["department", { type: "EXACT_MATCH", values: ["Marketing", "Research"] }],
  ["jobTitle-multi", { type: "SELECT", selectedValues: ["Marketing Manager", "Chief Scientist"] }],
  ["locationCity-single", { type: "SELECT", selectedValues: ["Berlin"] }],
  // Linked property filters
  ["linkedProperty:lead:department", {
    type: "linkedProperty",
    linkedFilterState: { type: "SELECT", selectedValues: ["Marketing", "Research"] },
  }],
  ["linkedProperty:lead:locationCity", {
    type: "linkedProperty",
    linkedFilterState: { type: "SELECT", selectedValues: ["Berlin"] },
  }],
]);

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  initialFilterStates={savedStates}
  onFilterClauseChanged={handleFilterClauseChanged}
/>\`
      }
    }
  },
  render: args => <WithInitialFilterStatesStory {...args} />
}`,...(bn=(Sn=Le.parameters)==null?void 0:Sn.docs)==null?void 0:bn.source}}};const fl=["Default","IntegerNumberRangeRounding","WithObjectSet","AddFilterMode","WithAllFilterTypes","WithTitleAndIcon","WithResetButton","WithActiveFilterCount","WithSorting","CollapsiblePanel","KeywordSearch","WithColorMap","WithRenderValue","WithRenderValueAsReactNode","WithListogramDisplayModes","WithHiddenCounts","WithCheckbox","CombinedWithObjectTable","CombinedWithFilteredObjectSet","WithRemovableFilters","WithStaticValues","FullFeatured","WithHasLinkFilter","CombinedWithLinkedFilter","WithCustomFilters","NoValueRendering","WithInitialFilterStates"];export{re as AddFilterMode,ce as CollapsiblePanel,Se as CombinedWithFilteredObjectSet,ve as CombinedWithLinkedFilter,he as CombinedWithObjectTable,ee as Default,Ee as FullFeatured,te as IntegerNumberRangeRounding,de as KeywordSearch,Re as NoValueRendering,se as WithActiveFilterCount,ie as WithAllFilterTypes,Ce as WithCheckbox,ue as WithColorMap,Fe as WithCustomFilters,ge as WithHasLinkFilter,ye as WithHiddenCounts,Le as WithInitialFilterStates,fe as WithListogramDisplayModes,ne as WithObjectSet,be as WithRemovableFilters,pe as WithRenderValue,me as WithRenderValueAsReactNode,oe as WithResetButton,ae as WithSorting,Te as WithStaticValues,le as WithTitleAndIcon,fl as __namedExportsOrder,ml as default};
