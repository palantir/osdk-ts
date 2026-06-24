var Nn=Object.defineProperty;var Pn=(e,n,r)=>n in e?Nn(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r;var Oe=(e,n,r)=>Pn(e,typeof n!="symbol"?n+"":n,r);import{r as i,R as s,f as wn,j as t}from"./iframe-QYK6bhGM.js";import{S as Vn}from"./MultiColumnSortDialog-yfkxsLS1.js";import{s as Bn,a as Wn,b as O,S as Gn,R as We,O as Hn,c as Yn,C as Un,E as Xn,F as Kn,u as $n,g as z,d as zn,e as Ge,f as Jn}from"./getFilterLabel-DbEeu5ar.js";import{c as X}from"./index-DD2A5QfZ.js";import{u as Qn,C as qn,a as He,P as Zn,s as er,K as tr,b as nr,c as rr,D as ir,d as lr,S as or,v as sr,e as ar}from"./DraggableList-DFsW5V4x.js";import{B as P}from"./Button-fRovV2fQ.js";import{I as cr}from"./Input-Btu6mGNR.js";import{w as dr}from"./withOsdkMetrics-CSMmr1uW.js";import{O as Le}from"./object-table-VAheqxdR.js";import{E as u}from"./Employee-BAk2o20h.js";import{u as Ae}from"./useOsdkClient-iw8Ty4vR.js";import"./preload-helper-BxKwgsyB.js";import"./ActionButton-CPE5QROk.js";import"./Dialog-DkoxdGGb.js";import"./cross-Bi9E4lZn.js";import"./svgIconContainer-C9c1EPm3.js";import"./useBaseUiId-KQBvtzXO.js";import"./InternalBackdrop-Q3CsTU02.js";import"./composite-BWFgnTJg.js";import"./index-CZMRx9vu.js";import"./index-CPeJNpfT.js";import"./index-CVQVo08L.js";import"./MenuTrigger-Dqb2tNov.js";import"./CompositeItem-B4nsF4aD.js";import"./ToolbarRootContext-BejsBCOi.js";import"./getDisabledMountTransitionStyles-CVbJQyJt.js";import"./getPseudoElementBounds-v8BjBTxC.js";import"./caret-down-B4TnKUNL.js";import"./Switch-XE3JSkEA.js";import"./toNumber-BfNKCh9g.js";import"./PopoverPopup-DwWYxUtL.js";import"./useValueChanged-B_IHN9Ru.js";import"./useControlled-Bh37ZjWC.js";import"./assertUnreachable-tCT10eXl.js";import"./index-BtwbpoEL.js";import"./Checkbox-BHBNDicS.js";import"./minus-DodjXsMS.js";import"./SkeletonBar-L3UnT1gv.js";import"./makeExternalStore-DYMEhn2H.js";import"./chevron-down-jhrd7Ybc.js";import"./small-cross-BnqYVbdP.js";import"./useRegisterUserAgent-BgVM01fo.js";import"./Table-c0_AvlVP.js";import"./LoadingCell-D5pMVqtf.js";import"./ColumnConfigDialog-Bk5cOlKa.js";import"./CollapsiblePanel-DqtxDDf6.js";import"./index-CL0nkSks.js";import"./error-XCA4il5Y.js";import"./Tooltip-BYcphjA_.js";import"./useEventCallback-C4_9f8ub.js";const V={filterList:"FilterList-module__filterList___wmzCNbkH",filterListCollapsed:"FilterList-module__filterListCollapsed___CGrK9txF",expandedContent:"FilterList-module__expandedContent___aEk2i2At",scrollableContent:"FilterList-module__scrollableContent___F3O1nfAo",hiddenContent:"FilterList-module__hiddenContent___PHKe-yWc",expandButton:"FilterList-module__expandButton___-QlY8-ot",collapsedLabel:"FilterList-module__collapsedLabel___QA0UtRts",addButtonContainer:"FilterList-module__addButtonContainer___kq300FEV",addButton:"FilterList-module__addButton___oD4yvwyZ"},q={content:"FilterListContent-module__content___fG0EgVp6",dragOverlay:"FilterListContent-module__dragOverlay___Tjd1YpmI"},Ie={errorContainer:"ErrorBoundary-module__errorContainer___FIguBDDu",errorMessage:"ErrorBoundary-module__errorMessage___jUsXUqFA",retryButton:"ErrorBoundary-module__retryButton___PZVWZOm7"};class ur extends i.Component{constructor(){super(...arguments);Oe(this,"state",{hasError:!1,error:null});Oe(this,"handleRetry",()=>{this.setState({hasError:!1,error:null})})}static getDerivedStateFromError(r){return{hasError:!0,error:r}}componentDidCatch(r,l){var o,a;console.error("[ErrorBoundary]",r),console.error("[ErrorBoundary] Component stack:",l.componentStack),(a=(o=this.props).onError)==null||a.call(o,r)}render(){return this.state.hasError?this.props.fallback?this.props.fallback:s.createElement("div",{className:Ie.errorContainer},s.createElement("p",{className:Ie.errorMessage},this.props.errorMessage??"Something went wrong"),s.createElement(P,{className:Ie.retryButton,onClick:this.handleRetry,"aria-label":"Retry"},"Retry")):this.props.children}}function pr(){return s.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true"},s.createElement("circle",{cx:"5.5",cy:"3.5",r:"1.5"}),s.createElement("circle",{cx:"10.5",cy:"3.5",r:"1.5"}),s.createElement("circle",{cx:"5.5",cy:"8",r:"1.5"}),s.createElement("circle",{cx:"10.5",cy:"8",r:"1.5"}),s.createElement("circle",{cx:"5.5",cy:"12.5",r:"1.5"}),s.createElement("circle",{cx:"10.5",cy:"12.5",r:"1.5"}))}function xe(){return xe=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var l in r)({}).hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},xe.apply(null,arguments)}function Sn(e){if(e==null)return!1;switch(e.type){case"EXACT_MATCH":return e.values.length>0;case"SELECT":return e.selectedValues.length>0;case"CONTAINS_TEXT":return e.value!=null&&e.value.length>0;case"NUMBER_RANGE":return e.minValue!=null||e.maxValue!=null;case"DATE_RANGE":return e.minValue!=null||e.maxValue!=null;case"TIMELINE":return e.startDate!=null||e.endDate!=null;case"TOGGLE":return e.enabled;case"keywordSearch":return e.searchTerm.length>0;case"hasLink":return e.hasLink;case"linkedProperty":return Sn(e.linkedFilterState);case"custom":return!0;default:return!1}}function mr({definition:e,filterKey:n,label:r,filterState:l,onFilterStateChanged:o,onFilterRemoved:a,renderInput:d,dragHandleAttributes:c,dragHandleListeners:b,className:g,style:R}){const[E,L]=i.useState({type:"closed"}),[h,j]=i.useState(!1),k=i.useCallback(m=>{o(n,m)},[n,o]),p=i.useCallback(()=>{L(m=>m.type==="closed"?{type:"open",query:""}:{type:"closed"})},[]),f=i.useCallback(m=>{L({type:"open",query:m.target.value})},[]),T=i.useCallback(()=>{L({type:"open",query:""})},[]),F=i.useCallback(()=>{a==null||a(n)},[n,a]),_=i.useCallback(()=>{j(m=>!m)},[]),x=i.useCallback(m=>{m==null||m.focus({preventScroll:!0})},[]),Y=Bn(l),w=Wn(l),M=E.type==="open",C=E.type==="open"?E.query:"",v=E.type==="open"?E.query:void 0;return s.createElement("div",{className:X(O.filterItem,g),style:R,"data-has-selection":Sn(l)||void 0},s.createElement("div",{className:O.itemHeader},c&&s.createElement(P,xe({className:O.dragHandle,"aria-label":`Reorder ${r}`},c,b),s.createElement(pr,null)),s.createElement("span",{className:O.itemLabel},r),w&&s.createElement(P,{className:O.headerActionButton,onClick:p,"aria-label":"Search values","aria-pressed":M},s.createElement(Gn,null)),a&&s.createElement(P,{className:O.headerActionButton,onClick:F,"aria-label":`Remove ${r} filter`},s.createElement(We,null)),Y&&s.createElement(P,{className:O.headerActionButton,onClick:_,"aria-label":"More actions","aria-pressed":h},s.createElement(Hn,null))),M&&s.createElement("div",{className:O.searchRow},s.createElement(cr,{type:"text",className:O.searchInput,value:C,onChange:f,placeholder:"Search property values...","aria-label":"Search property values",ref:x}),C&&s.createElement(P,{type:"button",className:O.searchClearButton,onClick:T,"aria-label":"Clear search"},s.createElement(We,null))),s.createElement("div",{className:O.itemContent},s.createElement(ur,{errorMessage:"Error loading filter"},d({definition:e,filterKey:n,filterState:l,onFilterStateChanged:k,searchQuery:v,excludeRowOpen:h}))))}const Ne=i.memo(mr);function fr({id:e,definition:n,filterKey:r,label:l,filterState:o,onFilterStateChanged:a,onFilterRemoved:d,renderInput:c}){const{attributes:b,listeners:g,setNodeRef:R,transform:E,transition:L,isDragging:h}=Qn({id:e}),j=i.useMemo(()=>({transform:qn.Transform.toString(E),transition:L??void 0}),[E,L]);return s.createElement("div",{ref:R,style:j,className:X(h&&O.dragging)},s.createElement(Ne,{definition:n,filterKey:r,label:l,filterState:o,onFilterStateChanged:a,onFilterRemoved:d,renderInput:c,dragHandleAttributes:b,dragHandleListeners:g}))}const yr=i.memo(fr),Cr=({transform:e})=>({...e,x:0}),hr={distance:8},Sr=[Cr],Tr={role:"button",tabIndex:-1,"aria-disabled":!0,"aria-pressed":void 0,"aria-roledescription":"sortable","aria-describedby":""};function br({filterDefinitions:e,filterStates:n,onFilterStateChanged:r,onFilterRemoved:l,onOrderChange:o,renderInput:a,getFilterKey:d,getFilterLabel:c,enableSorting:b,className:g,style:R}){const[E,L]=i.useState(null),h=i.useMemo(()=>b&&e?e.map(C=>d(C)):[],[b,e,d]),j=He(Zn,{activationConstraint:hr}),k=He(tr,{coordinateGetter:er}),p=nr(j,k),f=E!=null?h.indexOf(String(E)):-1,T=f>=0&&e?e[f]:void 0,F=i.useMemo(()=>T?d(T):void 0,[T,d]),_=i.useCallback(C=>{L(C.active.id)},[]),x=i.useCallback(C=>{L(null);const{active:v,over:m}=C;if(!m||v.id===m.id)return;const D=h.indexOf(String(v.id)),N=h.indexOf(String(m.id));if(D!==-1&&N!==-1){const G=rr(h,D,N);o==null||o(G)}},[h,o]),Y=i.useCallback(()=>{L(null)},[]),w=i.useMemo(()=>({onDragStart({active:C}){const v=h.indexOf(String(C.id)),m=v>=0&&e?e[v]:void 0;return`Picked up ${m?c(m):"filter"} filter`},onDragOver({over:C}){return C?`Moved to position ${h.indexOf(String(C.id))+1} of ${h.length}`:"Not over a droppable area"},onDragEnd({active:C,over:v}){const m=h.indexOf(String(C.id)),D=m>=0&&e?e[m]:void 0,N=D?c(D):"filter";if(v&&C.id!==v.id){const G=h.indexOf(String(v.id));return`Dropped ${N} filter at position ${G+1}`}return`Dropped ${N} filter back in its original position`},onDragCancel({active:C}){const v=h.indexOf(String(C.id)),m=v>=0&&e?e[v]:void 0;return`Cancelled dragging ${m?c(m):"filter"} filter`}}),[e,h,c]),M=i.useMemo(()=>({announcements:w}),[w]);return!e||e.length===0?s.createElement("div",{className:X(q.content,g),style:R,"data-empty":"true"}):b?s.createElement("div",{className:X(q.content,g),style:R},s.createElement(ir,{sensors:p,collisionDetection:lr,modifiers:Sr,onDragStart:_,onDragEnd:x,onDragCancel:Y,accessibility:M},s.createElement(or,{items:h,strategy:sr},e.map((C,v)=>{const m=h[v],D=d(C),N=c(C),G=n.get(D);return s.createElement(yr,{key:m,id:m,definition:C,filterKey:D,label:N,filterState:G,onFilterStateChanged:r,onFilterRemoved:l,renderInput:a})})),s.createElement(ar,{dropAnimation:null,className:q.dragOverlay},T&&F&&s.createElement(Ne,{definition:T,filterKey:F,label:c(T),filterState:n.get(F),onFilterStateChanged:r,onFilterRemoved:l,renderInput:a,dragHandleAttributes:Tr})))):s.createElement("div",{className:X(q.content,g),style:R},e.map(C=>{const v=d(C),m=n.get(v);return s.createElement(Ne,{key:v,definition:C,filterKey:v,label:c(C),filterState:m,onFilterStateChanged:r,onFilterRemoved:l,renderInput:a})}))}const H={header:"FilterListHeader-module__header___dkKc0CO-",titleContainer:"FilterListHeader-module__titleContainer___KaePpQIx",title:"FilterListHeader-module__title___xqfWfSzK",titleIcon:"FilterListHeader-module__titleIcon___MQy-dec8",activeCount:"FilterListHeader-module__activeCount___GyBsnsQL",actions:"FilterListHeader-module__actions___YZA7zmGc",collapseButton:"FilterListHeader-module__collapseButton___N1-sj3B3",resetButton:"FilterListHeader-module__resetButton___jLcUypov"};function Er({title:e,titleIcon:n,collapsed:r=!1,onCollapsedChange:l,showResetButton:o,onReset:a,showActiveFilterCount:d,activeFilterCount:c=0,hasVisibilityChanges:b=!1}){const g=i.useCallback(()=>{l==null||l(!r)},[l,r]);return s.createElement("div",{className:H.header},s.createElement("div",{className:H.titleContainer},n&&s.createElement("span",{className:H.titleIcon},n),e&&s.createElement("span",{className:H.title},e),d&&c>0&&s.createElement("span",{className:H.activeCount},"(",c,")")),s.createElement("div",{className:H.actions},o&&s.createElement(P,{className:H.resetButton,onClick:a,disabled:c===0&&!b},s.createElement(Yn,null)," Reset filters"),l!=null&&s.createElement(P,{className:H.collapseButton,onClick:g,"aria-expanded":!r,"aria-label":r?"Expand filters":"Collapse filters"},s.createElement(Un,null))))}const gr=i.memo(Er);function vr(e){const{title:n,titleIcon:r,collapsed:l=!1,onCollapsedChange:o,filterDefinitions:a,filterStates:d,onFilterStateChanged:c,renderInput:b,getFilterKey:g,getFilterLabel:R,activeFilterCount:E,onReset:L,onFilterAdded:h,onFilterRemoved:j,onOrderChange:k,showResetButton:p=!1,showActiveFilterCount:f=!1,hasVisibilityChanges:T,enableSorting:F,className:_,renderAddFilterButton:x}=e,[Y,w]=i.useState(null),M=i.useCallback(()=>{o==null||o(!1)},[o]),C=l&&o!=null;return s.createElement("div",{className:X(V.filterList,_)},C&&s.createElement("div",{className:V.filterListCollapsed,"data-collapsed":"true"},s.createElement(P,{className:V.expandButton,onClick:M,"aria-label":"Expand filters"},s.createElement(Xn,null)),s.createElement("span",{className:V.collapsedLabel},n??"Filters")),s.createElement("div",{ref:w,className:X(V.expandedContent,C&&V.hiddenContent),"data-active-count":E},s.createElement(Kn,{value:Y},(n||r||p||f||o)&&s.createElement(gr,{title:n,titleIcon:r,collapsed:l,onCollapsedChange:o,showResetButton:p,onReset:L,showActiveFilterCount:f,activeFilterCount:E,hasVisibilityChanges:T}),s.createElement("div",{className:V.scrollableContent},s.createElement(br,{filterDefinitions:a,filterStates:d,onFilterStateChanged:c,onFilterRemoved:j,onOrderChange:k,renderInput:b,getFilterKey:g,getFilterLabel:R,enableSorting:F})),(x!=null||h!=null)&&s.createElement("div",{className:V.addButtonContainer},x?x():s.createElement(P,{type:"button",className:V.addButton,onClick:h},"+ Add filter")))))}const Fr={trigger:"AddFilterPopover-module__trigger___8QQBrzPo"};function Rr({hiddenDefinitions:e,onShowFilter:n,renderTrigger:r}){const l=$n();return s.createElement(Vn,{items:e,onItemSelected:n,trigger:r!=null?r():"+ Add filter",triggerClassName:r==null?Fr.trigger:void 0,searchPlaceholder:"Search filters",emptyMessage:"No matching filters",collisionBoundary:l})}const Lr=i.memo(Rr);function Ar(e,n){const r=i.useMemo(()=>(e==null?void 0:e.map(z))??[],[e]),l=i.useMemo(()=>(e==null?void 0:e.filter(p=>p.isVisible!==!1).map(z))??[],[e]),[o,a]=i.useState(()=>l);i.useEffect(()=>{a(l)},[l]);const d=i.useRef(n);d.current=n;const c=i.useCallback(p=>{if(!d.current)return;const f=new Set(p),T=r.filter(F=>!f.has(F));d.current(p,T)},[r]),b=i.useMemo(()=>{const p=new Map;if(e==null)return p;for(const f of e)p.set(z(f),f);return p},[e]),{visibleDefinitions:g,hiddenDefinitions:R}=i.useMemo(()=>{if(e==null)return{visibleDefinitions:[],hiddenDefinitions:[]};const p=new Set(o),f=[],T=[];for(const F of o){const _=b.get(F);_!=null&&f.push(_)}for(const F of r)if(!p.has(F)){const _=b.get(F);_!=null&&T.push(_)}return{visibleDefinitions:f,hiddenDefinitions:T}},[e,b,o,r]),E=i.useCallback(p=>{a(f=>{if(f.includes(p))return f;const T=[...f,p];return c(T),T})},[c]),L=i.useCallback(p=>{a(f=>{const T=f.filter(F=>F!==p);return c(T),T})},[c]),h=i.useCallback(p=>{a(f=>p.length===f.length&&p.every((T,F)=>T===f[F])?f:(c(p),p))},[c]),j=i.useCallback(()=>{a(p=>l.length===p.length&&l.every((f,T)=>f===p[T])?p:(c(l),l))},[l,c]),k=i.useMemo(()=>o.length!==l.length?!0:!o.every((p,f)=>p===l[f]),[o,l]);return{visibleDefinitions:g,hiddenDefinitions:R,showFilter:E,hideFilter:L,reorderVisible:h,hasVisibilityChanges:k,resetVisibility:j}}function jr(e){const{objectType:n,objectSet:r,title:l,titleIcon:o,collapsed:a,onCollapsedChange:d,filterDefinitions:c,addFilterMode:b="uncontrolled",showResetButton:g=!1,onReset:R,showActiveFilterCount:E=!1,className:L,enableSorting:h,onFilterAdded:j,onFilterRemoved:k,onFilterVisibilityChange:p,renderAddFilterButton:f}=e,{filterStates:T,setFilterState:F,clearFilterState:_,perFilterWhereClauses:x,activeFilterCount:Y,reset:w}=zn(e),M=b==="uncontrolled",C=i.useCallback((A,ke)=>{if(!p)return;const De=[...A.map($=>({filterKey:$,isVisible:!0})),...ke.map($=>({filterKey:$,isVisible:!1}))];p(De)},[p]),{visibleDefinitions:v,hiddenDefinitions:m,showFilter:D,hideFilter:N,reorderVisible:G,hasVisibilityChanges:Rn,resetVisibility:we}=Ar(c,M?C:void 0),Ln=i.useCallback(()=>{w(),we(),R==null||R()},[w,we,R]),An=i.useMemo(()=>{if(c!=null)return c.filter(A=>A.isVisible!==!1)},[c]),jn=M?v:An,_n=i.useCallback(A=>{_(A),M&&N(A),k==null||k(A)},[_,M,N,k]),Ve=i.useCallback(A=>{D(A),j==null||j(A,c??[])},[D,j,c]),Mn=i.useCallback(A=>{G(A)},[G]),Be=i.useMemo(()=>m.map(A=>({key:z(A),label:Ge(A)})),[m]),kn=i.useMemo(()=>M?m.length===0?void 0:()=>s.createElement(Lr,{hiddenDefinitions:Be,onShowFilter:Ve,renderTrigger:f}):f,[M,m.length,Be,Ve,f]),Dn=M?_n:k,On=i.useCallback(({definition:A,filterKey:ke,filterState:De,onFilterStateChanged:$,searchQuery:In,excludeRowOpen:xn})=>s.createElement(Jn,{objectType:n,objectSet:r,definition:A,filterState:De,onFilterStateChanged:$,whereClause:x.get(ke)??{},searchQuery:In,excludeRowOpen:xn}),[n,r,x]);return s.createElement(vr,{title:l,titleIcon:o,collapsed:a,onCollapsedChange:d,filterDefinitions:jn,filterStates:T,onFilterStateChanged:F,renderInput:On,getFilterKey:z,getFilterLabel:Ge,activeFilterCount:Y,onReset:Ln,showResetButton:g,showActiveFilterCount:E,hasVisibilityChanges:Rn,enableSorting:h,onFilterRemoved:Dn,onOrderChange:Mn,className:L,renderAddFilterButton:kn})}const y=dr(jr,"FilterList"),{useArgs:Tn}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:U}=__STORYBOOK_MODULE_TEST__,K={type:"PROPERTY",id:"department",key:"department",label:"Department",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},Pe={type:"PROPERTY",id:"team",key:"team",label:"Team",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},bn={type:"PROPERTY",id:"fullName",key:"fullName",label:"Full Name",filterComponent:"CONTAINS_TEXT",filterState:{type:"CONTAINS_TEXT"}},En={type:"PROPERTY",id:"firstFullTimeStartDate",key:"firstFullTimeStartDate",label:"Start Date",filterComponent:"DATE_RANGE",filterState:{type:"DATE_RANGE"},clickToFilter:!0},je={type:"PROPERTY",id:"employeeNumber",key:"employeeNumber",label:"Employee Number",filterComponent:"NUMBER_RANGE",filterState:{type:"NUMBER_RANGE"},clickToFilter:!0},J={type:"PROPERTY",id:"locationCity",key:"locationCity",label:"Location City",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},gn={type:"PROPERTY",id:"jobTitle-multi",key:"jobTitle",label:"Job Title",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}},I=[K,Pe,bn,En,gn,je,J],S={width:320,height:600},B={display:"flex",gap:16},W={flex:1},Q={marginTop:8,padding:12,background:"#f5f5f5",borderRadius:4,fontSize:12,overflow:"auto",maxHeight:560},_e={display:"flex",gap:16,height:600},Me={width:320,flexShrink:0},vn=t.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:t.jsx("path",{d:"M1 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1.5a1 1 0 0 1-.293.707L10 8.914V13a1 1 0 0 1-.553.894l-2 1A1 1 0 0 1 6 14v-5.086L1.293 4.207A1 1 0 0 1 1 3.5V2z"})}),cl={title:"Beta/FilterList",component:y,args:{title:"Filters",enableSorting:!1,showResetButton:!1,showActiveFilterCount:!1,collapsed:!1,onFilterClauseChanged:U(),onFilterStateChanged:U(),onFilterAdded:U(),onFilterRemoved:U(),onFilterVisibilityChange:U(),onCollapsedChange:U(),onReset:U()},parameters:{msw:{handlers:[...wn.handlers]},controls:{expanded:!0}},argTypes:{objectType:{description:"The object type definition for the objects being filtered",control:!1},objectSet:{description:"Optional object set to scope aggregation queries",control:!1},filterDefinitions:{description:"Array of filter definitions. If not provided, all filterable properties are auto-discovered.",control:!1},title:{description:"Title displayed in the filter list header",control:"text"},titleIcon:{description:"Icon displayed next to the title",control:!1},filterClause:{description:"The current where clause. If provided, the filter clause is controlled.",control:!1},onFilterClauseChanged:{description:"Called when the filter clause changes. Required in controlled mode.",control:!1,table:{category:"Events"}},onFilterStateChanged:{description:"Called when an individual filter's state changes",control:!1,table:{category:"Events"}},enableSorting:{description:"Enable drag-and-drop reordering of filters",control:"boolean",table:{defaultValue:{summary:"false"}}},collapsed:{description:"Whether the filter list panel is collapsed",control:"boolean"},onCollapsedChange:{description:"Called when the collapsed state changes",control:!1,table:{category:"Events"}},showResetButton:{description:"Show reset filters button in header",control:"boolean",table:{defaultValue:{summary:"false"}}},onReset:{description:"Called when the reset button is clicked",control:!1,table:{category:"Events"}},showActiveFilterCount:{description:"Show count of active filters in header",control:"boolean",table:{defaultValue:{summary:"false"}}},onFilterAdded:{description:"Called when a filter is added. If provided, users can add filters.",control:!1,table:{category:"Events"}},onFilterRemoved:{description:"Called when a filter is removed. If provided, users can remove filters.",control:!1,table:{category:"Events"}},onFilterVisibilityChange:{description:"Called when filter visibility or ordering changes (reorder, add, remove).",control:!1,table:{category:"Events"}},addFilterMode:{description:'Controls how filter add/remove is managed. "uncontrolled" manages visibility internally; "controlled" leaves it to the consumer.',control:"select",options:["controlled","uncontrolled"],table:{category:"Advanced",defaultValue:{summary:'"uncontrolled"'}}},renderAddFilterButton:{description:"Custom render function for the add filter button.",control:!1,table:{category:"Advanced"}},initialFilterStates:{description:"Initial filter states for hydrating from external storage. Merged over definition defaults on mount.",control:!1,table:{category:"Advanced"}},className:{description:"Additional CSS class name",control:"text"}}},Z={parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:({objectType:e,objectSet:n,...r})=>{const l=i.useMemo(()=>[K,J],[]);return t.jsx("div",{style:S,children:t.jsx(y,{objectType:u,filterDefinitions:l,...r})})}},ee={parameters:{docs:{description:{story:"Repro for the integer-typed `NUMBER_RANGE` rounding fix. `employeeNumber` is an `integer` property, so histogram bucket boundaries — `(maxValue - minValue) / 20` — are usually fractional. Click any bar in the histogram. The Min/Max boxes must show whole integers (e.g. `657495073`), not fractional values (e.g. `657495073.4`)."}}},render:({objectType:e,objectSet:n,...r})=>{const l=i.useMemo(()=>[je],[]);return t.jsx("div",{style:S,children:t.jsx(y,{objectType:u,filterDefinitions:l,...r})})}};function _r(e){const n=Ae(),r=i.useMemo(()=>n(u).where({department:"Marketing"}),[n]),l=i.useMemo(()=>[Pe,J],[]);return t.jsx("div",{style:S,children:t.jsx(y,{objectType:u,objectSet:r,filterDefinitions:l,...e})})}const te={parameters:{docs:{description:{story:"Pass an `objectSet` prop to scope filter aggregations to a subset of objects. Here the object set is filtered to Marketing department employees, so the listogram counts reflect only that subset."},source:{code:`const client = useOsdkClient();
const objectSet = client(Employee).where({ department: "Marketing" });

<FilterList
  objectType={Employee}
  objectSet={objectSet}
  filterDefinitions={[
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:e=>t.jsx(_r,{...e})};function Mr(e){const n=i.useMemo(()=>[K,Pe,{...bn,isVisible:!1},{...En,isVisible:!1},{...je,isVisible:!1},{...J,isVisible:!1}],[]);return t.jsx("div",{style:S,children:t.jsx(y,{objectType:u,filterDefinitions:n,addFilterMode:"uncontrolled",...e})})}const ne={args:{showResetButton:!0},parameters:{docs:{source:{code:`const filterDefinitions = [
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
/>`}}},render:e=>t.jsx(Mr,{...e})};function kr(e){const[n,r]=i.useState(void 0),l=e.onFilterClauseChanged,o=i.useCallback(a=>{r(a),l==null||l(a)},[l]);return t.jsxs("div",{style:B,children:[t.jsx("div",{style:S,children:t.jsx(y,{objectType:u,filterDefinitions:I,...e,filterClause:n,onFilterClauseChanged:o})}),t.jsxs("div",{style:W,children:[t.jsx("strong",{children:"Filter Clause (JSON):"}),t.jsx("pre",{style:Q,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const re={parameters:{docs:{description:{story:"All filter component types with a controlled where clause. Hover filter items to reveal search and exclude actions."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>`}}},render:e=>t.jsx(kr,{...e})},ie={args:{title:"Employee Filters"},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  titleIcon={<svg>...</svg>}
/>`}}},render:({objectType:e,objectSet:n,...r})=>t.jsx("div",{style:S,children:t.jsx(y,{objectType:u,filterDefinitions:I,titleIcon:vn,...r})})};function Dr(e){const n=e.onReset,r=i.useCallback(()=>{console.log("Reset clicked"),n==null||n()},[n]);return t.jsx("div",{style:S,children:t.jsx(y,{objectType:u,filterDefinitions:I,...e,onReset:r})})}const le={args:{showResetButton:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showResetButton={true}
  onReset={() => console.log("Reset clicked")}
/>`}}},render:e=>t.jsx(Dr,{...e})},oe={args:{showActiveFilterCount:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showActiveFilterCount={true}
/>`}}},render:({objectType:e,objectSet:n,...r})=>t.jsx("div",{style:S,children:t.jsx(y,{objectType:u,filterDefinitions:I,...r})})},se={args:{enableSorting:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  enableSorting={true}
/>`}}},render:({objectType:e,objectSet:n,...r})=>t.jsx("div",{style:S,children:t.jsx(y,{objectType:u,filterDefinitions:I,...r})})};function Or(e){return t.jsx("div",{style:S,children:t.jsx(y,{objectType:u,filterDefinitions:I,...e})})}const ae={args:{title:"Employee Filters",showActiveFilterCount:!0},parameters:{docs:{description:{story:"Click the collapse button to minimize the filter panel. Active filter count is shown in the collapsed state."},source:{code:`const [collapsed, setCollapsed] = useState(false);

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  collapsed={collapsed}
  onCollapsedChange={setCollapsed}
  showActiveFilterCount={true}
/>`}}},render:e=>{const[,n]=Tn(),r=e.onCollapsedChange,l=i.useCallback(o=>{n({collapsed:o}),r==null||r(o)},[n,r]);return t.jsx(Or,{...e,onCollapsedChange:l})}},ce={parameters:{docs:{source:{code:`const filterDefinitions = [
  { type: "KEYWORD_SEARCH", properties: ["fullName", "department", "jobTitle", "locationCity"], label: "Search" },
  { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:({objectType:e,objectSet:n,...r})=>{const l=i.useMemo(()=>[{type:"KEYWORD_SEARCH",properties:["fullName","department","jobTitle","locationCity"],label:"Search"},K,J],[]);return t.jsx("div",{style:S,children:t.jsx(y,{objectType:u,filterDefinitions:l,...r})})}};function Ir(e){const n=i.useMemo(()=>[{type:"PROPERTY",id:"department-no-color",key:"department",label:"Department (default colors)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]),r=i.useMemo(()=>[{type:"PROPERTY",id:"department-color",key:"department",label:"Department (custom colors)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},colorMap:{Marketing:"#e74c3c",Operations:"#2ecc71",Finance:"#3498db",Product:"#f39c12"}}],[]);return t.jsxs("div",{style:B,children:[t.jsx("div",{style:S,children:t.jsx(y,{objectType:u,filterDefinitions:n,...e})}),t.jsx("div",{style:S,children:t.jsx(y,{objectType:u,filterDefinitions:r,...e})})]})}const de={parameters:{docs:{source:{code:`// Without colorMap: all bars use the default theme color
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

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>t.jsx(Ir,{...e})},Fn={Marketing:"Marketing Dept.",Operations:"Ops Team",Finance:"Finance & Accounting",Product:"Product Group"};function xr(e){const n=i.useMemo(()=>[{type:"PROPERTY",id:"department-default",key:"department",label:"Department (default)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]),r=i.useMemo(()=>[{type:"PROPERTY",id:"department-custom",key:"department",label:"Department (custom render)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},renderValue:l=>Fn[l]??l},{type:"PROPERTY",id:"team-custom",key:"team",label:"Team (custom render)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},renderValue:l=>l.toUpperCase()}],[]);return t.jsxs("div",{style:B,children:[t.jsx("div",{style:S,children:t.jsx(y,{objectType:u,filterDefinitions:n,...e})}),t.jsx("div",{style:S,children:t.jsx(y,{objectType:u,filterDefinitions:r,...e})})]})}const ue={parameters:{docs:{description:{story:"Use `renderValue` to customize how filter values are displayed and searched. The returned string replaces the raw value for display and search matching. Works with LISTOGRAM, MULTI_SELECT, and SINGLE_SELECT components."},source:{code:`const DEPARTMENT_LABELS = {
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

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>t.jsx(xr,{...e})},Nr={Marketing:"#f97316",Operations:"#3b82f6",Finance:"#10b981",Product:"#a855f7"},Pr={display:"inline-flex",alignItems:"center",gap:8},wr={display:"inline-block",width:10,height:10,borderRadius:"50%",flexShrink:0};function Vr({value:e}){const n=Nr[e]??"#94a3b8";return t.jsxs("span",{style:Pr,children:[t.jsx("span",{style:{...wr,background:n}}),t.jsx("span",{children:Fn[e]??e})]})}function Br(e){const n=i.useMemo(()=>[{type:"PROPERTY",id:"department-swatch",key:"department",label:"Department (JSX)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},renderValue:r=>t.jsx(Vr,{value:r})},{type:"PROPERTY",id:"team-link",key:"team",label:"Team (anchor JSX)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},renderValue:r=>t.jsx("a",{href:`#/team/${encodeURIComponent(r)}`,onClick:l=>l.preventDefault(),style:{color:"#2563eb",textDecoration:"underline"},children:r})}],[]);return t.jsx("div",{style:S,children:t.jsx(y,{objectType:u,filterDefinitions:n,...e})})}const pe={parameters:{docs:{description:{story:"`renderValue` may return any `ReactNode`, not just a string. Use this to render avatars, anchors, status pills, or any custom JSX inside listogram rows, dropdown items, and chips. When the function returns non-string JSX, search matching falls back to the raw value."},source:{code:`const filterDefinitions = [
  {
    type: "PROPERTY",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
    renderValue: (value) => <DepartmentSwatch value={value} />,
  },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>t.jsx(Br,{...e})};function Wr(e){const n=i.useMemo(()=>[{type:"PROPERTY",id:"dept-full",key:"department",label:"full: label + bar + count",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"full"}}],[]),r=i.useMemo(()=>[{type:"PROPERTY",id:"dept-count",key:"department",label:"count: label + count (no bar)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"count"}}],[]),l=i.useMemo(()=>[{type:"PROPERTY",id:"dept-minimal",key:"department",label:"minimal: label only",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"}}],[]);return t.jsxs("div",{style:B,children:[t.jsx("div",{style:S,children:t.jsx(y,{objectType:u,filterDefinitions:n,...e})}),t.jsx("div",{style:S,children:t.jsx(y,{objectType:u,filterDefinitions:r,...e})}),t.jsx("div",{style:S,children:t.jsx(y,{objectType:u,filterDefinitions:l,...e})})]})}const me={parameters:{docs:{source:{code:`// "full" (default): label + colored bar + count number
// "count": label + count number (no bar)
// "minimal": label only (no bar, no count)

const filterDefinitions = [
  { ..., listogramConfig: { displayMode: "full" } },
  { ..., listogramConfig: { displayMode: "count" } },
  { ..., listogramConfig: { displayMode: "minimal" } },
];`}}},render:e=>t.jsx(Wr,{...e})};function Gr(e){const n=i.useMemo(()=>[{type:"PROPERTY",id:"dept-with-count",key:"department",label:"Department (counts visible)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},{type:"PROPERTY",id:"team-with-count",key:"team",label:"Team (counts visible)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}}],[]),r=i.useMemo(()=>[{type:"PROPERTY",id:"dept-no-count",key:"department",label:"Department (counts hidden)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},showCount:!1},{type:"PROPERTY",id:"team-no-count",key:"team",label:"Team (counts hidden)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},showCount:!1}],[]);return t.jsxs("div",{style:B,children:[t.jsx("div",{style:S,children:t.jsx(y,{objectType:u,filterDefinitions:n,...e})}),t.jsx("div",{style:S,children:t.jsx(y,{objectType:u,filterDefinitions:r,...e})})]})}const fe={parameters:{docs:{description:{story:"Use `showCount: false` on individual filter definitions to hide aggregation counts in LISTOGRAM and MULTI_SELECT inputs. Bar visualizations in LISTOGRAM are preserved."},source:{code:`// showCount defaults to true; set false to hide counts per filter
const filterDefinitions = [
  { ..., filterComponent: "LISTOGRAM", showCount: false },
  { ..., filterComponent: "MULTI_SELECT", showCount: false },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>t.jsx(Gr,{...e})};function Hr(e){const n=i.useMemo(()=>[{type:"PROPERTY",id:"department-checkbox",key:"department",label:"Department",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},{type:"PROPERTY",id:"team-checkbox",key:"team",label:"Team",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]);return t.jsx("div",{style:S,children:t.jsx(y,{objectType:u,filterDefinitions:n,...e})})}const ye={parameters:{docs:{description:{story:"Listogram rows always include a checkbox for multi-select. Selecting values checks the checkbox and highlights the row. Use the exclude toggle (three-dot menu) to invert selections."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:e=>t.jsx(Hr,{...e})};function Yr(e){const[n,r]=i.useState(void 0),l=e.onFilterRemoved,o=i.useCallback(c=>{console.log("Removed filter:",c),l==null||l(c)},[l]),a=e.onFilterClauseChanged,d=i.useCallback(c=>{r(c),a==null||a(c)},[a]);return t.jsxs("div",{style:_e,children:[t.jsx("div",{style:Me,children:t.jsx(y,{objectType:u,filterDefinitions:I,...e,onFilterRemoved:o,filterClause:n,onFilterClauseChanged:d})}),t.jsx("div",{style:W,children:t.jsx(Le,{objectType:u,filter:n})})]})}const Ce={args:{title:"Employee Filters",showResetButton:!0,showActiveFilterCount:!0,enableSorting:!0},parameters:{docs:{source:{code:`const [filterClause, setFilterClause] = useState(undefined);

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
</div>`}}},render:e=>t.jsx(Yr,{...e})};function Ur(e){const n=Ae(),r=i.useMemo(()=>n(u).where({department:"Marketing"}),[n]),[l,o]=i.useState(void 0),a=e.onFilterClauseChanged,d=i.useCallback(c=>{o(c),a==null||a(c)},[a]);return t.jsxs("div",{style:_e,children:[t.jsx("div",{style:Me,children:t.jsx(y,{objectType:u,objectSet:r,filterDefinitions:I,...e,filterClause:l,onFilterClauseChanged:d})}),t.jsx("div",{style:W,children:t.jsx(Le,{objectType:u,objectSet:r,filter:l})})]})}const he={args:{title:"Marketing Employees",showResetButton:!0,showActiveFilterCount:!0},parameters:{docs:{description:{story:"Demonstrates using a pre-filtered objectSet to scope both FilterList aggregations and ObjectTable data to a subset of employees."},source:{code:`const client = useOsdkClient();
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
/>`}}},render:e=>t.jsx(Ur,{...e})};function Xr(e){const[n,r]=i.useState(I),l=e.onFilterRemoved,o=i.useCallback(a=>{r(d=>d.filter(c=>"key"in c?c.key!==a:!0)),l==null||l(a)},[l]);return t.jsx("div",{style:S,children:t.jsx(y,{objectType:u,filterDefinitions:n,...e,onFilterRemoved:o})})}const Se={name:"Removable Filters",args:{title:"Removable Filters",showActiveFilterCount:!0},parameters:{docs:{description:{story:"When `onFilterRemoved` is provided, each filter item shows a remove button (X) on hover. Clicking it removes the filter from the list."},source:{code:`const [definitions, setDefinitions] = useState(filterDefinitions);

const handleFilterRemoved = (filterKey) => {
  setDefinitions(prev => prev.filter(def => def.key !== filterKey));
};

<FilterList
  objectType={Employee}
  filterDefinitions={definitions}
  onFilterRemoved={handleFilterRemoved}
  title="Removable Filters"
/>`}}},render:e=>t.jsx(Xr,{...e})};function Kr(e){const[n,r]=i.useState(void 0),l=i.useMemo(()=>[{type:"STATIC_VALUES",key:"department",label:"Department (static)",filterComponent:"LISTOGRAM",values:["Marketing","Operations","Finance","Product"],filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"}},{type:"STATIC_VALUES",key:"locationCity",label:"Office Location",filterComponent:"SINGLE_SELECT",values:["New York","San Francisco","London","Tokyo"],filterState:{type:"SELECT",selectedValues:[]}},{type:"STATIC_VALUES",key:"team",label:"Team (multi-select)",filterComponent:"MULTI_SELECT",values:["Alpha","Beta","Gamma","Delta"],filterState:{type:"SELECT",selectedValues:[]}},{type:"STATIC_VALUES",id:"custom-status",key:"status",label:"Status (custom clause)",filterComponent:"LISTOGRAM",values:["Active","Inactive"],filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"},toWhereClause:d=>{if(d.type!=="EXACT_MATCH"||d.values.length===0)return;const c=d.values,b=c.includes("Active"),g=c.includes("Inactive");if(b&&g)return{$or:[{employeeStatus:"Active"},{employeeStatus:"Inactive"}]};if(b)return{employeeStatus:"Active"};if(g)return{employeeStatus:"Inactive"}}}],[]),o=e.onFilterClauseChanged,a=i.useCallback(d=>{r(d),o==null||o(d)},[o]);return t.jsxs("div",{style:B,children:[t.jsx("div",{style:S,children:t.jsx(y,{objectType:u,filterDefinitions:l,...e,filterClause:n,onFilterClauseChanged:a})}),t.jsxs("div",{style:W,children:[t.jsx("strong",{children:"Filter Clause (JSON):"}),t.jsx("pre",{style:Q,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const Te={parameters:{docs:{description:{story:"Use `STATIC_VALUES` filter definitions to provide a fixed list of values instead of fetching from OSDK aggregation. Supports LISTOGRAM, SINGLE_SELECT, MULTI_SELECT, and TEXT_TAGS components. Optionally provide a `toWhereClause` function for custom clause generation."},source:{code:`const filterDefinitions = [
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
/>`}}},render:e=>t.jsx(Kr,{...e})};function $r(e){const[n,r]=i.useState(void 0),[l,o]=i.useState(I),a=e.onFilterRemoved,d=i.useCallback(E=>{o(L=>L.filter(h=>"key"in h?h.key!==E:!0)),a==null||a(E)},[a]),c=e.onReset,b=i.useCallback(()=>{o(I),c==null||c()},[c]),g=e.onFilterClauseChanged,R=i.useCallback(E=>{r(E),g==null||g(E)},[g]);return t.jsxs("div",{style:_e,children:[t.jsx("div",{style:Me,children:t.jsx(y,{objectType:u,filterDefinitions:l,titleIcon:vn,...e,onReset:b,onFilterRemoved:d,filterClause:n,onFilterClauseChanged:R})}),t.jsx("div",{style:W,children:t.jsx(Le,{objectType:u,filter:n})})]})}const be={name:"Full Featured",args:{title:"Employee Filters",showResetButton:!0,showActiveFilterCount:!0,enableSorting:!0},parameters:{docs:{description:{story:"Demonstrates all filter list features together: collapse, reset, active count, sorting, removable filters, per-filter search, exclude toggle, and controlled where clause driving an ObjectTable."},source:{code:`// All features combined: collapse, sort, search, exclude, remove, reset

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
/>`}}},render:e=>{const[,n]=Tn(),r=e.onCollapsedChange,l=i.useCallback(o=>{n({collapsed:o}),r==null||r(o)},[n,r]);return t.jsx($r,{...e,onCollapsedChange:l})}};function zr(e){const[n,r]=i.useState(void 0),l=i.useMemo(()=>[{type:"HAS_LINK",linkName:"lead",label:"Has Manager",filterState:{type:"hasLink",hasLink:!1}}],[]),o=e.onFilterClauseChanged,a=i.useCallback(d=>{r(d),o==null||o(d)},[o]);return t.jsxs("div",{style:B,children:[t.jsx("div",{style:S,children:t.jsx(y,{objectType:u,filterDefinitions:l,...e,filterClause:n,onFilterClauseChanged:a})}),t.jsxs("div",{style:W,children:[t.jsx("strong",{children:"Filter Clause (JSON):"}),t.jsx("pre",{style:Q,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const Ee={name:"Linked Property Filters",parameters:{docs:{description:{story:"Demonstrates filtering on properties of linked objects. HAS_LINK filters objects based on whether they have a linked object. "},source:{code:`// HAS_LINK and LINKED_PROPERTY filter definitions
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
/>`}}},render:e=>t.jsx(zr,{...e})},Jr={type:"PROPERTY",id:"combined-department",key:"department",label:"Department",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},Qr={type:"PROPERTY",id:"combined-locationCity",key:"locationCity",label:"Location City",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}},qr={type:"LINKED_PROPERTY",id:"combined-lead-name",linkName:"lead",reverseLinkName:"peeps",linkedPropertyKey:"fullName",linkedFilterComponent:"MULTI_SELECT",linkedFilterState:{type:"SELECT",selectedValues:[]},filterState:{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:[]}},label:"Manager Name"},Zr=[qr,Jr,Qr];function ei(e){const n=Ae(),r=i.useMemo(()=>n(u),[n]),[l,o]=i.useState(void 0),a=e.onFilterClauseChanged,d=i.useCallback(c=>{o(c),a==null||a(c)},[a]);return t.jsxs("div",{style:_e,children:[t.jsx("div",{style:Me,children:t.jsx(y,{...e,objectType:u,objectSet:r,filterDefinitions:Zr,filterClause:l,onFilterClauseChanged:d})}),t.jsx("div",{style:W,children:t.jsx(Le,{objectType:u,objectSet:r,filter:l})})]})}const ge={name:"Combined linked + direct filters",parameters:{docs:{description:{story:"A linked filter (Manager Name) and direct property filters coexist in one FilterList. The FilterList emits a `filterClause` that includes linked-filter conditions via `$reverseLink`-tagged entries; the OSDK expands them to pivot+intersect when applying `where(filterClause)` on the ObjectTable's objectSet. Direct property facet counts reflect linked filter selections automatically."},source:{code:`const baseObjectSet = useMemo(() => client(Employee), [client]);

<FilterList
  objectType={Employee}
  objectSet={baseObjectSet}
  filterDefinitions={filterDefinitions}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>
<ObjectTable
  objectType={Employee}
  objectSet={baseObjectSet}
  filter={filterClause}
/>`}}},render:e=>t.jsx(ei,{...e})};function ti({filterState:e,onFilterStateChanged:n}){const r=i.useCallback(o=>{const a=o.target.value;n({type:"custom",customState:{value:a}})},[n]),l=i.useCallback(()=>{n({type:"custom",customState:{value:""}})},[n]);return t.jsxs("div",{style:{padding:"12px 0",display:"flex",gap:"8px"},children:[t.jsx("input",{type:"text",value:e.customState.value,onChange:r,placeholder:"Enter name substring...",style:{flex:1,padding:"6px 8px",fontSize:"14px",border:"1px solid #ccc",borderRadius:"4px"}}),e.customState.value&&t.jsx("button",{onClick:l,style:{padding:"6px 12px",fontSize:"12px",backgroundColor:"#f5f5f5",border:"1px solid #ccc",borderRadius:"4px",cursor:"pointer"},children:"Clear"})]})}function ni(e){const[n,r]=i.useState(void 0),l=i.useMemo(()=>[{type:"CUSTOM",key:"custom-name-contains",label:"Name Contains",filterComponent:"CUSTOM",filterState:{type:"custom",customState:{value:""}},renderInput:({filterState:d,onFilterStateChanged:c})=>t.jsx(ti,{filterState:d,onFilterStateChanged:c}),toWhereClause:d=>{var b;const c=(b=d.customState)==null?void 0:b.value;if(c)return{fullName:{$containsAnyTerm:c}}}}],[]),o=e.onFilterClauseChanged,a=i.useCallback(d=>{r(d),o==null||o(d)},[o]);return t.jsxs("div",{style:B,children:[t.jsx("div",{style:S,children:t.jsx(y,{objectType:u,filterDefinitions:l,...e,filterClause:n,onFilterClauseChanged:a})}),t.jsxs("div",{style:W,children:[t.jsx("strong",{children:"Filter Clause (JSON):"}),t.jsx("pre",{style:Q,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const ve={name:"Custom Filters",parameters:{docs:{description:{story:"Custom filters provide full control over filtering logic and UI. The 'Name Contains' filter uses `renderInput` for a simple custom input. "},source:{code:`// Custom filter with renderInput
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
/>`}}},render:e=>t.jsx(ni,{...e})},ri={type:"PROPERTY",id:"department-multi",key:"department",label:"Department",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}},ii={type:"PROPERTY",id:"department-single",key:"department",label:"Department (single)",filterComponent:"SINGLE_SELECT",filterState:{type:"SELECT",selectedValues:[]}},li=[K,ri,ii,je],Fe={name:"No value rendering",parameters:{docs:{description:{story:"Empty/null filter values render via the canonical `<NoValueLabel />` component — italic, muted, with the literal text 'No value' — across listogram buckets, single-select dropdown options, multi-select dropdown options, and multi-select chips. The mock dataset includes one Employee with `department: \"\"` so the No value row is visible in the listogram."}}},render:()=>t.jsx("div",{style:S,children:t.jsx(y,{objectType:u,filterDefinitions:li})})},oi={type:"PROPERTY",id:"locationCity-single",key:"locationCity",label:"Location City (single)",filterComponent:"SINGLE_SELECT",filterState:{type:"SELECT",selectedValues:[]}},si={type:"LINKED_PROPERTY",linkName:"lead",linkedPropertyKey:"department",linkedFilterComponent:"MULTI_SELECT",linkedFilterState:{type:"SELECT",selectedValues:[]},filterState:{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:[]}},label:"Manager Department (linked multi)"},ai={type:"LINKED_PROPERTY",linkName:"lead",linkedPropertyKey:"locationCity",linkedFilterComponent:"SINGLE_SELECT",linkedFilterState:{type:"SELECT",selectedValues:[]},filterState:{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:[]}},label:"Manager City (linked single)"},ci=new Map([["department",{type:"EXACT_MATCH",values:["Marketing","Research"]}],["jobTitle-multi",{type:"SELECT",selectedValues:["Marketing Manager","Chief Scientist"]}],["locationCity-single",{type:"SELECT",selectedValues:["Berlin"]}],["linkedProperty:lead:department",{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:["Marketing","Research"]}}],["linkedProperty:lead:locationCity",{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:["Berlin"]}}]]),di=[K,gn,oi,si,ai];function ui(e){const n=Ae(),r=i.useMemo(()=>n(u),[n]),[l,o]=i.useState(void 0),a=i.useCallback(d=>{o(d)},[]);return t.jsxs("div",{style:B,children:[t.jsx("div",{style:S,children:t.jsx(y,{...e,objectType:u,objectSet:r,filterDefinitions:di,initialFilterStates:ci,onFilterClauseChanged:a})}),t.jsxs("div",{style:W,children:[t.jsx("h4",{children:"Active where clause"}),t.jsx("pre",{style:Q,children:l?JSON.stringify(l,null,2):"(none)"})]})]})}const Re={name:"With initial filter states",parameters:{docs:{description:{story:"Pass `initialFilterStates` to hydrate filters from saved state (e.g. localStorage or URL params). Selections are restored on mount, including values that currently have zero matching rows — they appear with a count of 0 so users can see and clear them. Demonstrated across LISTOGRAM, MULTI_SELECT, SINGLE_SELECT, and LINKED_PROPERTY filters."},source:{code:`// "Research", "Chief Scientist", and "Berlin" are not in the current
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
/>`}}},render:e=>t.jsx(ui,{...e})};var Ye,Ue,Xe;Z.parameters={...Z.parameters,docs:{...(Ye=Z.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(Xe=(Ue=Z.parameters)==null?void 0:Ue.docs)==null?void 0:Xe.source}}};var Ke,$e,ze;ee.parameters={...ee.parameters,docs:{...(Ke=ee.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(ze=($e=ee.parameters)==null?void 0:$e.docs)==null?void 0:ze.source}}};var Je,Qe,qe;te.parameters={...te.parameters,docs:{...(Je=te.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(qe=(Qe=te.parameters)==null?void 0:Qe.docs)==null?void 0:qe.source}}};var Ze,et,tt;ne.parameters={...ne.parameters,docs:{...(Ze=ne.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(tt=(et=ne.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var nt,rt,it;re.parameters={...re.parameters,docs:{...(nt=re.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(it=(rt=re.parameters)==null?void 0:rt.docs)==null?void 0:it.source}}};var lt,ot,st;ie.parameters={...ie.parameters,docs:{...(lt=ie.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
}`,...(st=(ot=ie.parameters)==null?void 0:ot.docs)==null?void 0:st.source}}};var at,ct,dt;le.parameters={...le.parameters,docs:{...(at=le.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(dt=(ct=le.parameters)==null?void 0:ct.docs)==null?void 0:dt.source}}};var ut,pt,mt;oe.parameters={...oe.parameters,docs:{...(ut=oe.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(mt=(pt=oe.parameters)==null?void 0:pt.docs)==null?void 0:mt.source}}};var ft,yt,Ct;se.parameters={...se.parameters,docs:{...(ft=se.parameters)==null?void 0:ft.docs,source:{originalSource:`{
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
}`,...(Ct=(yt=se.parameters)==null?void 0:yt.docs)==null?void 0:Ct.source}}};var ht,St,Tt;ae.parameters={...ae.parameters,docs:{...(ht=ae.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
}`,...(Tt=(St=ae.parameters)==null?void 0:St.docs)==null?void 0:Tt.source}}};var bt,Et,gt;ce.parameters={...ce.parameters,docs:{...(bt=ce.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(gt=(Et=ce.parameters)==null?void 0:Et.docs)==null?void 0:gt.source}}};var vt,Ft,Rt;de.parameters={...de.parameters,docs:{...(vt=de.parameters)==null?void 0:vt.docs,source:{originalSource:`{
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
}`,...(Rt=(Ft=de.parameters)==null?void 0:Ft.docs)==null?void 0:Rt.source}}};var Lt,At,jt;ue.parameters={...ue.parameters,docs:{...(Lt=ue.parameters)==null?void 0:Lt.docs,source:{originalSource:`{
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
}`,...(jt=(At=ue.parameters)==null?void 0:At.docs)==null?void 0:jt.source}}};var _t,Mt,kt;pe.parameters={...pe.parameters,docs:{...(_t=pe.parameters)==null?void 0:_t.docs,source:{originalSource:`{
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
}`,...(kt=(Mt=pe.parameters)==null?void 0:Mt.docs)==null?void 0:kt.source}}};var Dt,Ot,It;me.parameters={...me.parameters,docs:{...(Dt=me.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
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
}`,...(It=(Ot=me.parameters)==null?void 0:Ot.docs)==null?void 0:It.source}}};var xt,Nt,Pt;fe.parameters={...fe.parameters,docs:{...(xt=fe.parameters)==null?void 0:xt.docs,source:{originalSource:`{
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
}`,...(Pt=(Nt=fe.parameters)==null?void 0:Nt.docs)==null?void 0:Pt.source}}};var wt,Vt,Bt;ye.parameters={...ye.parameters,docs:{...(wt=ye.parameters)==null?void 0:wt.docs,source:{originalSource:`{
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
}`,...(Bt=(Vt=ye.parameters)==null?void 0:Vt.docs)==null?void 0:Bt.source}}};var Wt,Gt,Ht;Ce.parameters={...Ce.parameters,docs:{...(Wt=Ce.parameters)==null?void 0:Wt.docs,source:{originalSource:`{
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
}`,...(Ht=(Gt=Ce.parameters)==null?void 0:Gt.docs)==null?void 0:Ht.source}}};var Yt,Ut,Xt;he.parameters={...he.parameters,docs:{...(Yt=he.parameters)==null?void 0:Yt.docs,source:{originalSource:`{
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
}`,...(Xt=(Ut=he.parameters)==null?void 0:Ut.docs)==null?void 0:Xt.source}}};var Kt,$t,zt;Se.parameters={...Se.parameters,docs:{...(Kt=Se.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
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
}`,...(zt=($t=Se.parameters)==null?void 0:$t.docs)==null?void 0:zt.source}}};var Jt,Qt,qt;Te.parameters={...Te.parameters,docs:{...(Jt=Te.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
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
}`,...(qt=(Qt=Te.parameters)==null?void 0:Qt.docs)==null?void 0:qt.source}}};var Zt,en,tn;be.parameters={...be.parameters,docs:{...(Zt=be.parameters)==null?void 0:Zt.docs,source:{originalSource:`{
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
}`,...(tn=(en=be.parameters)==null?void 0:en.docs)==null?void 0:tn.source}}};var nn,rn,ln;Ee.parameters={...Ee.parameters,docs:{...(nn=Ee.parameters)==null?void 0:nn.docs,source:{originalSource:`{
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
}`,...(ln=(rn=Ee.parameters)==null?void 0:rn.docs)==null?void 0:ln.source}}};var on,sn,an;ge.parameters={...ge.parameters,docs:{...(on=ge.parameters)==null?void 0:on.docs,source:{originalSource:`{
  name: "Combined linked + direct filters",
  parameters: {
    docs: {
      description: {
        story: "A linked filter (Manager Name) and direct property filters coexist in " + "one FilterList. The FilterList emits a \`filterClause\` that includes " + "linked-filter conditions via \`$reverseLink\`-tagged entries; the OSDK " + "expands them to pivot+intersect when applying \`where(filterClause)\` " + "on the ObjectTable's objectSet. Direct property facet counts reflect " + "linked filter selections automatically."
      },
      source: {
        code: \`const baseObjectSet = useMemo(() => client(Employee), [client]);

<FilterList
  objectType={Employee}
  objectSet={baseObjectSet}
  filterDefinitions={filterDefinitions}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>
<ObjectTable
  objectType={Employee}
  objectSet={baseObjectSet}
  filter={filterClause}
/>\`
      }
    }
  },
  render: args => <CombinedWithLinkedFilterStory {...args} />
}`,...(an=(sn=ge.parameters)==null?void 0:sn.docs)==null?void 0:an.source}}};var cn,dn,un;ve.parameters={...ve.parameters,docs:{...(cn=ve.parameters)==null?void 0:cn.docs,source:{originalSource:`{
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
}`,...(un=(dn=ve.parameters)==null?void 0:dn.docs)==null?void 0:un.source}}};var pn,mn,fn;Fe.parameters={...Fe.parameters,docs:{...(pn=Fe.parameters)==null?void 0:pn.docs,source:{originalSource:`{
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
}`,...(fn=(mn=Fe.parameters)==null?void 0:mn.docs)==null?void 0:fn.source}}};var yn,Cn,hn;Re.parameters={...Re.parameters,docs:{...(yn=Re.parameters)==null?void 0:yn.docs,source:{originalSource:`{
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
}`,...(hn=(Cn=Re.parameters)==null?void 0:Cn.docs)==null?void 0:hn.source}}};const dl=["Default","IntegerNumberRangeRounding","WithObjectSet","AddFilterMode","WithAllFilterTypes","WithTitleAndIcon","WithResetButton","WithActiveFilterCount","WithSorting","CollapsiblePanel","KeywordSearch","WithColorMap","WithRenderValue","WithRenderValueAsReactNode","WithListogramDisplayModes","WithHiddenCounts","WithCheckbox","CombinedWithObjectTable","CombinedWithFilteredObjectSet","WithRemovableFilters","WithStaticValues","FullFeatured","WithHasLinkFilter","CombinedWithLinkedFilter","WithCustomFilters","NoValueRendering","WithInitialFilterStates"];export{ne as AddFilterMode,ae as CollapsiblePanel,he as CombinedWithFilteredObjectSet,ge as CombinedWithLinkedFilter,Ce as CombinedWithObjectTable,Z as Default,be as FullFeatured,ee as IntegerNumberRangeRounding,ce as KeywordSearch,Fe as NoValueRendering,oe as WithActiveFilterCount,re as WithAllFilterTypes,ye as WithCheckbox,de as WithColorMap,ve as WithCustomFilters,Ee as WithHasLinkFilter,fe as WithHiddenCounts,Re as WithInitialFilterStates,me as WithListogramDisplayModes,te as WithObjectSet,Se as WithRemovableFilters,ue as WithRenderValue,pe as WithRenderValueAsReactNode,le as WithResetButton,se as WithSorting,Te as WithStaticValues,ie as WithTitleAndIcon,dl as __namedExportsOrder,cl as default};
