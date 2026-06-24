var Dn=Object.defineProperty;var In=(e,n,r)=>n in e?Dn(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r;var _e=(e,n,r)=>In(e,typeof n!="symbol"?n+"":n,r);import{r as i,R as s,f as On,j as t}from"./iframe-DszJazu2.js";import{S as xn}from"./MultiColumnSortDialog-B9-Cbg7C.js";import{s as Pn,a as Nn,b as I,S as wn,R as Be,O as Vn,c as Bn,C as Wn,E as Gn,F as Hn,u as Yn,g as z,d as Un,e as We,f as Xn}from"./getFilterLabel-Bz6tJHrH.js";import{c as X}from"./index-Ba8E2uBZ.js";import{u as Kn,C as $n,a as Ge,P as zn,s as Jn,K as Qn,b as qn,c as Zn,D as er,d as tr,S as nr,v as rr,e as ir}from"./DraggableList-UtpHf3Ew.js";import{B as N}from"./Button-CitqSRfE.js";import{I as or}from"./Input-DmxxNVOR.js";import{w as lr}from"./withOsdkMetrics-CV_f_k9F.js";import{O as De}from"./object-table-C3MfNEid.js";import{E as p}from"./Employee-BAk2o20h.js";import{u as Ie}from"./useOsdkClient-DnbDozY6.js";import"./preload-helper-Bzu0i3_D.js";import"./ActionButton-DxlIYjOU.js";import"./Dialog-KQcDGSXn.js";import"./cross-BBAUnA0Z.js";import"./svgIconContainer-CEdnDZiu.js";import"./useBaseUiId-uQFZhVSw.js";import"./InternalBackdrop-fpeEhJV5.js";import"./composite-aIxXXaZF.js";import"./index-DjghywXo.js";import"./index-gwcYQEqp.js";import"./index-tYVYl-lA.js";import"./MenuTrigger-5CaoTm2y.js";import"./CompositeItem-uiLx_b_4.js";import"./ToolbarRootContext-kbbri2LF.js";import"./getDisabledMountTransitionStyles-BsbgMzNm.js";import"./getPseudoElementBounds-DOf0j5Ba.js";import"./caret-down-Br7Z2MUP.js";import"./Switch-BaDMycbF.js";import"./toNumber-DjI9EmcE.js";import"./PopoverPopup-COXrFcU1.js";import"./useValueChanged-CY5SBVEP.js";import"./useControlled-n_Yv0c_i.js";import"./assertUnreachable-tCT10eXl.js";import"./index-BtwbpoEL.js";import"./Checkbox-CSPTuM4K.js";import"./minus-B1UoTyUl.js";import"./SkeletonBar-BlP9kFyJ.js";import"./makeExternalStore-CHANE3U0.js";import"./chevron-down-DKM3dFlz.js";import"./small-cross-BZchENDe.js";import"./useRegisterUserAgent-DRGVi_Uv.js";import"./Table-CJSIoEFK.js";import"./LoadingCell-EK2Yyg26.js";import"./ColumnConfigDialog-DOxeMAFz.js";import"./CollapsiblePanel-DTyj6qEr.js";import"./index-BWYwqrEl.js";import"./error-Bsv4MnOe.js";import"./Tooltip-CloQ9Kwc.js";import"./useEventCallback-iwap7EE_.js";const V={filterList:"FilterList-module__filterList___wmzCNbkH",filterListCollapsed:"FilterList-module__filterListCollapsed___CGrK9txF",expandedContent:"FilterList-module__expandedContent___aEk2i2At",scrollableContent:"FilterList-module__scrollableContent___F3O1nfAo",hiddenContent:"FilterList-module__hiddenContent___PHKe-yWc",expandButton:"FilterList-module__expandButton___-QlY8-ot",collapsedLabel:"FilterList-module__collapsedLabel___QA0UtRts",addButtonContainer:"FilterList-module__addButtonContainer___kq300FEV",addButton:"FilterList-module__addButton___oD4yvwyZ"},q={content:"FilterListContent-module__content___fG0EgVp6",dragOverlay:"FilterListContent-module__dragOverlay___Tjd1YpmI"},je={errorContainer:"ErrorBoundary-module__errorContainer___FIguBDDu",errorMessage:"ErrorBoundary-module__errorMessage___jUsXUqFA",retryButton:"ErrorBoundary-module__retryButton___PZVWZOm7"};class sr extends i.Component{constructor(){super(...arguments);_e(this,"state",{hasError:!1,error:null});_e(this,"handleRetry",()=>{this.setState({hasError:!1,error:null})})}static getDerivedStateFromError(r){return{hasError:!0,error:r}}componentDidCatch(r,o){var l,c;console.error("[ErrorBoundary]",r),console.error("[ErrorBoundary] Component stack:",o.componentStack),(c=(l=this.props).onError)==null||c.call(l,r)}render(){return this.state.hasError?this.props.fallback?this.props.fallback:s.createElement("div",{className:je.errorContainer},s.createElement("p",{className:je.errorMessage},this.props.errorMessage??"Something went wrong"),s.createElement(N,{className:je.retryButton,onClick:this.handleRetry,"aria-label":"Retry"},"Retry")):this.props.children}}function ar(){return s.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true"},s.createElement("circle",{cx:"5.5",cy:"3.5",r:"1.5"}),s.createElement("circle",{cx:"10.5",cy:"3.5",r:"1.5"}),s.createElement("circle",{cx:"5.5",cy:"8",r:"1.5"}),s.createElement("circle",{cx:"10.5",cy:"8",r:"1.5"}),s.createElement("circle",{cx:"5.5",cy:"12.5",r:"1.5"}),s.createElement("circle",{cx:"10.5",cy:"12.5",r:"1.5"}))}function Me(){return Me=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var o in r)({}).hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},Me.apply(null,arguments)}function fn(e){if(e==null)return!1;switch(e.type){case"EXACT_MATCH":return e.values.length>0;case"SELECT":return e.selectedValues.length>0;case"CONTAINS_TEXT":return e.value!=null&&e.value.length>0;case"NUMBER_RANGE":return e.minValue!=null||e.maxValue!=null;case"DATE_RANGE":return e.minValue!=null||e.maxValue!=null;case"TIMELINE":return e.startDate!=null||e.endDate!=null;case"TOGGLE":return e.enabled;case"keywordSearch":return e.searchTerm.length>0;case"hasLink":return e.hasLink;case"linkedProperty":return fn(e.linkedFilterState);case"custom":return!0;default:return!1}}function cr({definition:e,filterKey:n,label:r,filterState:o,onFilterStateChanged:l,onFilterRemoved:c,renderInput:d,dragHandleAttributes:a,dragHandleListeners:E,className:g,style:R}){const[b,A]=i.useState({type:"closed"}),[h,_]=i.useState(!1),k=i.useCallback(m=>{l(n,m)},[n,l]),u=i.useCallback(()=>{A(m=>m.type==="closed"?{type:"open",query:""}:{type:"closed"})},[]),f=i.useCallback(m=>{A({type:"open",query:m.target.value})},[]),T=i.useCallback(()=>{A({type:"open",query:""})},[]),F=i.useCallback(()=>{c==null||c(n)},[n,c]),j=i.useCallback(()=>{_(m=>!m)},[]),x=i.useCallback(m=>{m==null||m.focus({preventScroll:!0})},[]),Y=Pn(o),w=Nn(o),M=b.type==="open",C=b.type==="open"?b.query:"",v=b.type==="open"?b.query:void 0;return s.createElement("div",{className:X(I.filterItem,g),style:R,"data-has-selection":fn(o)||void 0},s.createElement("div",{className:I.itemHeader},a&&s.createElement(N,Me({className:I.dragHandle,"aria-label":`Reorder ${r}`},a,E),s.createElement(ar,null)),s.createElement("span",{className:I.itemLabel},r),w&&s.createElement(N,{className:I.headerActionButton,onClick:u,"aria-label":"Search values","aria-pressed":M},s.createElement(wn,null)),c&&s.createElement(N,{className:I.headerActionButton,onClick:F,"aria-label":`Remove ${r} filter`},s.createElement(Be,null)),Y&&s.createElement(N,{className:I.headerActionButton,onClick:j,"aria-label":"More actions","aria-pressed":h},s.createElement(Vn,null))),M&&s.createElement("div",{className:I.searchRow},s.createElement(or,{type:"text",className:I.searchInput,value:C,onChange:f,placeholder:"Search property values...","aria-label":"Search property values",ref:x}),C&&s.createElement(N,{type:"button",className:I.searchClearButton,onClick:T,"aria-label":"Clear search"},s.createElement(Be,null))),s.createElement("div",{className:I.itemContent},s.createElement(sr,{errorMessage:"Error loading filter"},d({definition:e,filterKey:n,filterState:o,onFilterStateChanged:k,searchQuery:v,excludeRowOpen:h}))))}const ke=i.memo(cr);function dr({id:e,definition:n,filterKey:r,label:o,filterState:l,onFilterStateChanged:c,onFilterRemoved:d,renderInput:a}){const{attributes:E,listeners:g,setNodeRef:R,transform:b,transition:A,isDragging:h}=Kn({id:e}),_=i.useMemo(()=>({transform:$n.Transform.toString(b),transition:A??void 0}),[b,A]);return s.createElement("div",{ref:R,style:_,className:X(h&&I.dragging)},s.createElement(ke,{definition:n,filterKey:r,label:o,filterState:l,onFilterStateChanged:c,onFilterRemoved:d,renderInput:a,dragHandleAttributes:E,dragHandleListeners:g}))}const ur=i.memo(dr),pr=({transform:e})=>({...e,x:0}),mr={distance:8},fr=[pr],yr={role:"button",tabIndex:-1,"aria-disabled":!0,"aria-pressed":void 0,"aria-roledescription":"sortable","aria-describedby":""};function Cr({filterDefinitions:e,filterStates:n,onFilterStateChanged:r,onFilterRemoved:o,onOrderChange:l,renderInput:c,getFilterKey:d,getFilterLabel:a,enableSorting:E,className:g,style:R}){const[b,A]=i.useState(null),h=i.useMemo(()=>E&&e?e.map(C=>d(C)):[],[E,e,d]),_=Ge(zn,{activationConstraint:mr}),k=Ge(Qn,{coordinateGetter:Jn}),u=qn(_,k),f=b!=null?h.indexOf(String(b)):-1,T=f>=0&&e?e[f]:void 0,F=i.useMemo(()=>T?d(T):void 0,[T,d]),j=i.useCallback(C=>{A(C.active.id)},[]),x=i.useCallback(C=>{A(null);const{active:v,over:m}=C;if(!m||v.id===m.id)return;const D=h.indexOf(String(v.id)),P=h.indexOf(String(m.id));if(D!==-1&&P!==-1){const W=Zn(h,D,P);l==null||l(W)}},[h,l]),Y=i.useCallback(()=>{A(null)},[]),w=i.useMemo(()=>({onDragStart({active:C}){const v=h.indexOf(String(C.id)),m=v>=0&&e?e[v]:void 0;return`Picked up ${m?a(m):"filter"} filter`},onDragOver({over:C}){return C?`Moved to position ${h.indexOf(String(C.id))+1} of ${h.length}`:"Not over a droppable area"},onDragEnd({active:C,over:v}){const m=h.indexOf(String(C.id)),D=m>=0&&e?e[m]:void 0,P=D?a(D):"filter";if(v&&C.id!==v.id){const W=h.indexOf(String(v.id));return`Dropped ${P} filter at position ${W+1}`}return`Dropped ${P} filter back in its original position`},onDragCancel({active:C}){const v=h.indexOf(String(C.id)),m=v>=0&&e?e[v]:void 0;return`Cancelled dragging ${m?a(m):"filter"} filter`}}),[e,h,a]),M=i.useMemo(()=>({announcements:w}),[w]);return!e||e.length===0?s.createElement("div",{className:X(q.content,g),style:R,"data-empty":"true"}):E?s.createElement("div",{className:X(q.content,g),style:R},s.createElement(er,{sensors:u,collisionDetection:tr,modifiers:fr,onDragStart:j,onDragEnd:x,onDragCancel:Y,accessibility:M},s.createElement(nr,{items:h,strategy:rr},e.map((C,v)=>{const m=h[v],D=d(C),P=a(C),W=n.get(D);return s.createElement(ur,{key:m,id:m,definition:C,filterKey:D,label:P,filterState:W,onFilterStateChanged:r,onFilterRemoved:o,renderInput:c})})),s.createElement(ir,{dropAnimation:null,className:q.dragOverlay},T&&F&&s.createElement(ke,{definition:T,filterKey:F,label:a(T),filterState:n.get(F),onFilterStateChanged:r,onFilterRemoved:o,renderInput:c,dragHandleAttributes:yr})))):s.createElement("div",{className:X(q.content,g),style:R},e.map(C=>{const v=d(C),m=n.get(v);return s.createElement(ke,{key:v,definition:C,filterKey:v,label:a(C),filterState:m,onFilterStateChanged:r,onFilterRemoved:o,renderInput:c})}))}const G={header:"FilterListHeader-module__header___dkKc0CO-",titleContainer:"FilterListHeader-module__titleContainer___KaePpQIx",title:"FilterListHeader-module__title___xqfWfSzK",titleIcon:"FilterListHeader-module__titleIcon___MQy-dec8",activeCount:"FilterListHeader-module__activeCount___GyBsnsQL",actions:"FilterListHeader-module__actions___YZA7zmGc",collapseButton:"FilterListHeader-module__collapseButton___N1-sj3B3",resetButton:"FilterListHeader-module__resetButton___jLcUypov"};function hr({title:e,titleIcon:n,collapsed:r=!1,onCollapsedChange:o,showResetButton:l,onReset:c,showActiveFilterCount:d,activeFilterCount:a=0,hasVisibilityChanges:E=!1}){const g=i.useCallback(()=>{o==null||o(!r)},[o,r]);return s.createElement("div",{className:G.header},s.createElement("div",{className:G.titleContainer},n&&s.createElement("span",{className:G.titleIcon},n),e&&s.createElement("span",{className:G.title},e),d&&a>0&&s.createElement("span",{className:G.activeCount},"(",a,")")),s.createElement("div",{className:G.actions},l&&s.createElement(N,{className:G.resetButton,onClick:c,disabled:a===0&&!E},s.createElement(Bn,null)," Reset filters"),o!=null&&s.createElement(N,{className:G.collapseButton,onClick:g,"aria-expanded":!r,"aria-label":r?"Expand filters":"Collapse filters"},s.createElement(Wn,null))))}const Sr=i.memo(hr);function Tr(e){const{title:n,titleIcon:r,collapsed:o=!1,onCollapsedChange:l,filterDefinitions:c,filterStates:d,onFilterStateChanged:a,renderInput:E,getFilterKey:g,getFilterLabel:R,activeFilterCount:b,onReset:A,onFilterAdded:h,onFilterRemoved:_,onOrderChange:k,showResetButton:u=!1,showActiveFilterCount:f=!1,hasVisibilityChanges:T,enableSorting:F,className:j,renderAddFilterButton:x}=e,[Y,w]=i.useState(null),M=i.useCallback(()=>{l==null||l(!1)},[l]),C=o&&l!=null;return s.createElement("div",{className:X(V.filterList,j)},C&&s.createElement("div",{className:V.filterListCollapsed,"data-collapsed":"true"},s.createElement(N,{className:V.expandButton,onClick:M,"aria-label":"Expand filters"},s.createElement(Gn,null)),s.createElement("span",{className:V.collapsedLabel},n??"Filters")),s.createElement("div",{ref:w,className:X(V.expandedContent,C&&V.hiddenContent),"data-active-count":b},s.createElement(Hn,{value:Y},(n||r||u||f||l)&&s.createElement(Sr,{title:n,titleIcon:r,collapsed:o,onCollapsedChange:l,showResetButton:u,onReset:A,showActiveFilterCount:f,activeFilterCount:b,hasVisibilityChanges:T}),s.createElement("div",{className:V.scrollableContent},s.createElement(Cr,{filterDefinitions:c,filterStates:d,onFilterStateChanged:a,onFilterRemoved:_,onOrderChange:k,renderInput:E,getFilterKey:g,getFilterLabel:R,enableSorting:F})),(x!=null||h!=null)&&s.createElement("div",{className:V.addButtonContainer},x?x():s.createElement(N,{type:"button",className:V.addButton,onClick:h},"+ Add filter")))))}const Er={trigger:"AddFilterPopover-module__trigger___8QQBrzPo"};function br({hiddenDefinitions:e,onShowFilter:n,renderTrigger:r}){const o=Yn();return s.createElement(xn,{items:e,onItemSelected:n,trigger:r!=null?r():"+ Add filter",triggerClassName:r==null?Er.trigger:void 0,searchPlaceholder:"Search filters",emptyMessage:"No matching filters",collisionBoundary:o})}const gr=i.memo(br);function vr(e,n){const r=i.useMemo(()=>(e==null?void 0:e.map(z))??[],[e]),o=i.useMemo(()=>(e==null?void 0:e.filter(u=>u.isVisible!==!1).map(z))??[],[e]),[l,c]=i.useState(()=>o);i.useEffect(()=>{c(o)},[o]);const d=i.useRef(n);d.current=n;const a=i.useCallback(u=>{if(!d.current)return;const f=new Set(u),T=r.filter(F=>!f.has(F));d.current(u,T)},[r]),E=i.useMemo(()=>{const u=new Map;if(e==null)return u;for(const f of e)u.set(z(f),f);return u},[e]),{visibleDefinitions:g,hiddenDefinitions:R}=i.useMemo(()=>{if(e==null)return{visibleDefinitions:[],hiddenDefinitions:[]};const u=new Set(l),f=[],T=[];for(const F of l){const j=E.get(F);j!=null&&f.push(j)}for(const F of r)if(!u.has(F)){const j=E.get(F);j!=null&&T.push(j)}return{visibleDefinitions:f,hiddenDefinitions:T}},[e,E,l,r]),b=i.useCallback(u=>{c(f=>{if(f.includes(u))return f;const T=[...f,u];return a(T),T})},[a]),A=i.useCallback(u=>{c(f=>{const T=f.filter(F=>F!==u);return a(T),T})},[a]),h=i.useCallback(u=>{c(f=>u.length===f.length&&u.every((T,F)=>T===f[F])?f:(a(u),u))},[a]),_=i.useCallback(()=>{c(u=>o.length===u.length&&o.every((f,T)=>f===u[T])?u:(a(o),o))},[o,a]),k=i.useMemo(()=>l.length!==o.length?!0:!l.every((u,f)=>u===o[f]),[l,o]);return{visibleDefinitions:g,hiddenDefinitions:R,showFilter:b,hideFilter:A,reorderVisible:h,hasVisibilityChanges:k,resetVisibility:_}}function Fr(e){const{objectType:n,objectSet:r,title:o,titleIcon:l,collapsed:c,onCollapsedChange:d,filterDefinitions:a,addFilterMode:E="uncontrolled",showResetButton:g=!1,onReset:R,showActiveFilterCount:b=!1,className:A,enableSorting:h,onFilterAdded:_,onFilterRemoved:k,onFilterVisibilityChange:u,renderAddFilterButton:f}=e,{filterStates:T,setFilterState:F,clearFilterState:j,perFilterWhereClauses:x,activeFilterCount:Y,reset:w}=Un(e),M=E==="uncontrolled",C=i.useCallback((L,Ae)=>{if(!u)return;const Le=[...L.map($=>({filterKey:$,isVisible:!0})),...Ae.map($=>({filterKey:$,isVisible:!1}))];u(Le)},[u]),{visibleDefinitions:v,hiddenDefinitions:m,showFilter:D,hideFilter:P,reorderVisible:W,hasVisibilityChanges:bn,resetVisibility:Ne}=vr(a,M?C:void 0),gn=i.useCallback(()=>{w(),Ne(),R==null||R()},[w,Ne,R]),vn=i.useMemo(()=>{if(a!=null)return a.filter(L=>L.isVisible!==!1)},[a]),Fn=M?v:vn,Rn=i.useCallback(L=>{j(L),M&&P(L),k==null||k(L)},[j,M,P,k]),we=i.useCallback(L=>{D(L),_==null||_(L,a??[])},[D,_,a]),An=i.useCallback(L=>{W(L)},[W]),Ve=i.useMemo(()=>m.map(L=>({key:z(L),label:We(L)})),[m]),Ln=i.useMemo(()=>M?m.length===0?void 0:()=>s.createElement(gr,{hiddenDefinitions:Ve,onShowFilter:we,renderTrigger:f}):f,[M,m.length,Ve,we,f]),_n=M?Rn:k,jn=i.useCallback(({definition:L,filterKey:Ae,filterState:Le,onFilterStateChanged:$,searchQuery:Mn,excludeRowOpen:kn})=>s.createElement(Xn,{objectType:n,objectSet:r,definition:L,filterState:Le,onFilterStateChanged:$,whereClause:x.get(Ae)??{},searchQuery:Mn,excludeRowOpen:kn}),[n,r,x]);return s.createElement(Tr,{title:o,titleIcon:l,collapsed:c,onCollapsedChange:d,filterDefinitions:Fn,filterStates:T,onFilterStateChanged:F,renderInput:jn,getFilterKey:z,getFilterLabel:We,activeFilterCount:Y,onReset:gn,showResetButton:g,showActiveFilterCount:b,hasVisibilityChanges:bn,enableSorting:h,onFilterRemoved:_n,onOrderChange:An,className:A,renderAddFilterButton:Ln})}const y=lr(Fr,"FilterList"),{useArgs:yn}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:U}=__STORYBOOK_MODULE_TEST__,K={type:"PROPERTY",id:"department",key:"department",label:"Department",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},Oe={type:"PROPERTY",id:"team",key:"team",label:"Team",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},Cn={type:"PROPERTY",id:"fullName",key:"fullName",label:"Full Name",filterComponent:"CONTAINS_TEXT",filterState:{type:"CONTAINS_TEXT"}},hn={type:"PROPERTY",id:"firstFullTimeStartDate",key:"firstFullTimeStartDate",label:"Start Date",filterComponent:"DATE_RANGE",filterState:{type:"DATE_RANGE"},clickToFilter:!0},Re={type:"PROPERTY",id:"employeeNumber",key:"employeeNumber",label:"Employee Number",filterComponent:"NUMBER_RANGE",filterState:{type:"NUMBER_RANGE"},clickToFilter:!0},J={type:"PROPERTY",id:"locationCity",key:"locationCity",label:"Location City",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},Sn={type:"PROPERTY",id:"jobTitle-multi",key:"jobTitle",label:"Job Title",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}},O=[K,Oe,Cn,hn,Sn,Re,J],S={width:320,height:600},B={display:"flex",gap:16},H={flex:1},Q={marginTop:8,padding:12,background:"#f5f5f5",borderRadius:4,fontSize:12,overflow:"auto",maxHeight:560},xe={display:"flex",gap:16,height:600},Pe={width:320,flexShrink:0},Tn=t.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:t.jsx("path",{d:"M1 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1.5a1 1 0 0 1-.293.707L10 8.914V13a1 1 0 0 1-.553.894l-2 1A1 1 0 0 1 6 14v-5.086L1.293 4.207A1 1 0 0 1 1 3.5V2z"})}),eo={title:"Beta/FilterList",component:y,args:{title:"Filters",enableSorting:!1,showResetButton:!1,showActiveFilterCount:!1,collapsed:!1,onFilterClauseChanged:U(),onFilterStateChanged:U(),onFilterAdded:U(),onFilterRemoved:U(),onFilterVisibilityChange:U(),onCollapsedChange:U(),onReset:U()},parameters:{msw:{handlers:[...On.handlers]},controls:{expanded:!0}},argTypes:{objectType:{description:"The object type definition for the objects being filtered",control:!1},objectSet:{description:"Optional object set to scope aggregation queries",control:!1},filterDefinitions:{description:"Array of filter definitions. If not provided, all filterable properties are auto-discovered.",control:!1},title:{description:"Title displayed in the filter list header",control:"text"},titleIcon:{description:"Icon displayed next to the title",control:!1},filterClause:{description:"The current where clause. If provided, the filter clause is controlled.",control:!1},onFilterClauseChanged:{description:"Called when the filter clause changes. Required in controlled mode.",control:!1,table:{category:"Events"}},onFilterStateChanged:{description:"Called when an individual filter's state changes",control:!1,table:{category:"Events"}},enableSorting:{description:"Enable drag-and-drop reordering of filters",control:"boolean",table:{defaultValue:{summary:"false"}}},collapsed:{description:"Whether the filter list panel is collapsed",control:"boolean"},onCollapsedChange:{description:"Called when the collapsed state changes",control:!1,table:{category:"Events"}},showResetButton:{description:"Show reset filters button in header",control:"boolean",table:{defaultValue:{summary:"false"}}},onReset:{description:"Called when the reset button is clicked",control:!1,table:{category:"Events"}},showActiveFilterCount:{description:"Show count of active filters in header",control:"boolean",table:{defaultValue:{summary:"false"}}},onFilterAdded:{description:"Called when a filter is added. If provided, users can add filters.",control:!1,table:{category:"Events"}},onFilterRemoved:{description:"Called when a filter is removed. If provided, users can remove filters.",control:!1,table:{category:"Events"}},onFilterVisibilityChange:{description:"Called when filter visibility or ordering changes (reorder, add, remove).",control:!1,table:{category:"Events"}},addFilterMode:{description:'Controls how filter add/remove is managed. "uncontrolled" manages visibility internally; "controlled" leaves it to the consumer.',control:"select",options:["controlled","uncontrolled"],table:{category:"Advanced",defaultValue:{summary:'"uncontrolled"'}}},renderAddFilterButton:{description:"Custom render function for the add filter button.",control:!1,table:{category:"Advanced"}},initialFilterStates:{description:"Initial filter states for hydrating from external storage. Merged over definition defaults on mount.",control:!1,table:{category:"Advanced"}},className:{description:"Additional CSS class name",control:"text"}}},Z={parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:({objectType:e,objectSet:n,...r})=>{const o=i.useMemo(()=>[K,J],[]);return t.jsx("div",{style:S,children:t.jsx(y,{objectType:p,filterDefinitions:o,...r})})}},ee={parameters:{docs:{description:{story:"Repro for the integer-typed `NUMBER_RANGE` rounding fix. `employeeNumber` is an `integer` property, so histogram bucket boundaries — `(maxValue - minValue) / 20` — are usually fractional. Click any bar in the histogram. The Min/Max boxes must show whole integers (e.g. `657495073`), not fractional values (e.g. `657495073.4`)."}}},render:({objectType:e,objectSet:n,...r})=>{const o=i.useMemo(()=>[Re],[]);return t.jsx("div",{style:S,children:t.jsx(y,{objectType:p,filterDefinitions:o,...r})})}};function Rr(e){const n=Ie(),r=i.useMemo(()=>n(p).where({department:"Marketing"}),[n]),o=i.useMemo(()=>[Oe,J],[]);return t.jsx("div",{style:S,children:t.jsx(y,{objectType:p,objectSet:r,filterDefinitions:o,...e})})}const te={parameters:{docs:{description:{story:"Pass an `objectSet` prop to scope filter aggregations to a subset of objects. Here the object set is filtered to Marketing department employees, so the listogram counts reflect only that subset."},source:{code:`const client = useOsdkClient();
const objectSet = client(Employee).where({ department: "Marketing" });

<FilterList
  objectType={Employee}
  objectSet={objectSet}
  filterDefinitions={[
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:e=>t.jsx(Rr,{...e})};function Ar(e){const n=i.useMemo(()=>[K,Oe,{...Cn,isVisible:!1},{...hn,isVisible:!1},{...Re,isVisible:!1},{...J,isVisible:!1}],[]);return t.jsx("div",{style:S,children:t.jsx(y,{objectType:p,filterDefinitions:n,addFilterMode:"uncontrolled",...e})})}const ne={args:{showResetButton:!0},parameters:{docs:{source:{code:`const filterDefinitions = [
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
/>`}}},render:e=>t.jsx(Ar,{...e})};function Lr(e){const[n,r]=i.useState(void 0),o=e.onFilterClauseChanged,l=i.useCallback(c=>{r(c),o==null||o(c)},[o]);return t.jsxs("div",{style:B,children:[t.jsx("div",{style:S,children:t.jsx(y,{objectType:p,filterDefinitions:O,...e,filterClause:n,onFilterClauseChanged:l})}),t.jsxs("div",{style:H,children:[t.jsx("strong",{children:"Filter Clause (JSON):"}),t.jsx("pre",{style:Q,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const re={parameters:{docs:{description:{story:"All filter component types with a controlled where clause. Hover filter items to reveal search and exclude actions."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>`}}},render:e=>t.jsx(Lr,{...e})},ie={args:{title:"Employee Filters"},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  titleIcon={<svg>...</svg>}
/>`}}},render:({objectType:e,objectSet:n,...r})=>t.jsx("div",{style:S,children:t.jsx(y,{objectType:p,filterDefinitions:O,titleIcon:Tn,...r})})};function _r(e){const n=e.onReset,r=i.useCallback(()=>{console.log("Reset clicked"),n==null||n()},[n]);return t.jsx("div",{style:S,children:t.jsx(y,{objectType:p,filterDefinitions:O,...e,onReset:r})})}const oe={args:{showResetButton:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showResetButton={true}
  onReset={() => console.log("Reset clicked")}
/>`}}},render:e=>t.jsx(_r,{...e})},le={args:{showActiveFilterCount:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showActiveFilterCount={true}
/>`}}},render:({objectType:e,objectSet:n,...r})=>t.jsx("div",{style:S,children:t.jsx(y,{objectType:p,filterDefinitions:O,...r})})},se={args:{enableSorting:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  enableSorting={true}
/>`}}},render:({objectType:e,objectSet:n,...r})=>t.jsx("div",{style:S,children:t.jsx(y,{objectType:p,filterDefinitions:O,...r})})};function jr(e){return t.jsx("div",{style:S,children:t.jsx(y,{objectType:p,filterDefinitions:O,...e})})}const ae={args:{title:"Employee Filters",showActiveFilterCount:!0},parameters:{docs:{description:{story:"Click the collapse button to minimize the filter panel. Active filter count is shown in the collapsed state."},source:{code:`const [collapsed, setCollapsed] = useState(false);

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  collapsed={collapsed}
  onCollapsedChange={setCollapsed}
  showActiveFilterCount={true}
/>`}}},render:e=>{const[,n]=yn(),r=e.onCollapsedChange,o=i.useCallback(l=>{n({collapsed:l}),r==null||r(l)},[n,r]);return t.jsx(jr,{...e,onCollapsedChange:o})}},ce={parameters:{docs:{source:{code:`const filterDefinitions = [
  { type: "KEYWORD_SEARCH", properties: ["fullName", "department", "jobTitle", "locationCity"], label: "Search" },
  { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:({objectType:e,objectSet:n,...r})=>{const o=i.useMemo(()=>[{type:"KEYWORD_SEARCH",properties:["fullName","department","jobTitle","locationCity"],label:"Search"},K,J],[]);return t.jsx("div",{style:S,children:t.jsx(y,{objectType:p,filterDefinitions:o,...r})})}};function Mr(e){const n=i.useMemo(()=>[{type:"PROPERTY",id:"department-no-color",key:"department",label:"Department (default colors)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]),r=i.useMemo(()=>[{type:"PROPERTY",id:"department-color",key:"department",label:"Department (custom colors)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},colorMap:{Marketing:"#e74c3c",Operations:"#2ecc71",Finance:"#3498db",Product:"#f39c12"}}],[]);return t.jsxs("div",{style:B,children:[t.jsx("div",{style:S,children:t.jsx(y,{objectType:p,filterDefinitions:n,...e})}),t.jsx("div",{style:S,children:t.jsx(y,{objectType:p,filterDefinitions:r,...e})})]})}const de={parameters:{docs:{source:{code:`// Without colorMap: all bars use the default theme color
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

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>t.jsx(Mr,{...e})},En={Marketing:"Marketing Dept.",Operations:"Ops Team",Finance:"Finance & Accounting",Product:"Product Group"};function kr(e){const n=i.useMemo(()=>[{type:"PROPERTY",id:"department-default",key:"department",label:"Department (default)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]),r=i.useMemo(()=>[{type:"PROPERTY",id:"department-custom",key:"department",label:"Department (custom render)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},renderValue:o=>En[o]??o},{type:"PROPERTY",id:"team-custom",key:"team",label:"Team (custom render)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},renderValue:o=>o.toUpperCase()}],[]);return t.jsxs("div",{style:B,children:[t.jsx("div",{style:S,children:t.jsx(y,{objectType:p,filterDefinitions:n,...e})}),t.jsx("div",{style:S,children:t.jsx(y,{objectType:p,filterDefinitions:r,...e})})]})}const ue={parameters:{docs:{description:{story:"Use `renderValue` to customize how filter values are displayed and searched. The returned string replaces the raw value for display and search matching. Works with LISTOGRAM, MULTI_SELECT, and SINGLE_SELECT components."},source:{code:`const DEPARTMENT_LABELS = {
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

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>t.jsx(kr,{...e})},Dr={Marketing:"#f97316",Operations:"#3b82f6",Finance:"#10b981",Product:"#a855f7"},Ir={display:"inline-flex",alignItems:"center",gap:8},Or={display:"inline-block",width:10,height:10,borderRadius:"50%",flexShrink:0};function xr({value:e}){const n=Dr[e]??"#94a3b8";return t.jsxs("span",{style:Ir,children:[t.jsx("span",{style:{...Or,background:n}}),t.jsx("span",{children:En[e]??e})]})}function Pr(e){const n=i.useMemo(()=>[{type:"PROPERTY",id:"department-swatch",key:"department",label:"Department (JSX)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},renderValue:r=>t.jsx(xr,{value:r})},{type:"PROPERTY",id:"team-link",key:"team",label:"Team (anchor JSX)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},renderValue:r=>t.jsx("a",{href:`#/team/${encodeURIComponent(r)}`,onClick:o=>o.preventDefault(),style:{color:"#2563eb",textDecoration:"underline"},children:r})}],[]);return t.jsx("div",{style:S,children:t.jsx(y,{objectType:p,filterDefinitions:n,...e})})}const pe={parameters:{docs:{description:{story:"`renderValue` may return any `ReactNode`, not just a string. Use this to render avatars, anchors, status pills, or any custom JSX inside listogram rows, dropdown items, and chips. When the function returns non-string JSX, search matching falls back to the raw value."},source:{code:`const filterDefinitions = [
  {
    type: "PROPERTY",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
    renderValue: (value) => <DepartmentSwatch value={value} />,
  },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>t.jsx(Pr,{...e})};function Nr(e){const n=i.useMemo(()=>[{type:"PROPERTY",id:"dept-full",key:"department",label:"full: label + bar + count",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"full"}}],[]),r=i.useMemo(()=>[{type:"PROPERTY",id:"dept-count",key:"department",label:"count: label + count (no bar)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"count"}}],[]),o=i.useMemo(()=>[{type:"PROPERTY",id:"dept-minimal",key:"department",label:"minimal: label only",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"}}],[]);return t.jsxs("div",{style:B,children:[t.jsx("div",{style:S,children:t.jsx(y,{objectType:p,filterDefinitions:n,...e})}),t.jsx("div",{style:S,children:t.jsx(y,{objectType:p,filterDefinitions:r,...e})}),t.jsx("div",{style:S,children:t.jsx(y,{objectType:p,filterDefinitions:o,...e})})]})}const me={parameters:{docs:{source:{code:`// "full" (default): label + colored bar + count number
// "count": label + count number (no bar)
// "minimal": label only (no bar, no count)

const filterDefinitions = [
  { ..., listogramConfig: { displayMode: "full" } },
  { ..., listogramConfig: { displayMode: "count" } },
  { ..., listogramConfig: { displayMode: "minimal" } },
];`}}},render:e=>t.jsx(Nr,{...e})};function wr(e){const n=i.useMemo(()=>[{type:"PROPERTY",id:"dept-with-count",key:"department",label:"Department (counts visible)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},{type:"PROPERTY",id:"team-with-count",key:"team",label:"Team (counts visible)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}}],[]),r=i.useMemo(()=>[{type:"PROPERTY",id:"dept-no-count",key:"department",label:"Department (counts hidden)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},showCount:!1},{type:"PROPERTY",id:"team-no-count",key:"team",label:"Team (counts hidden)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},showCount:!1}],[]);return t.jsxs("div",{style:B,children:[t.jsx("div",{style:S,children:t.jsx(y,{objectType:p,filterDefinitions:n,...e})}),t.jsx("div",{style:S,children:t.jsx(y,{objectType:p,filterDefinitions:r,...e})})]})}const fe={parameters:{docs:{description:{story:"Use `showCount: false` on individual filter definitions to hide aggregation counts in LISTOGRAM and MULTI_SELECT inputs. Bar visualizations in LISTOGRAM are preserved."},source:{code:`// showCount defaults to true; set false to hide counts per filter
const filterDefinitions = [
  { ..., filterComponent: "LISTOGRAM", showCount: false },
  { ..., filterComponent: "MULTI_SELECT", showCount: false },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>t.jsx(wr,{...e})};function Vr(e){const n=i.useMemo(()=>[{type:"PROPERTY",id:"department-checkbox",key:"department",label:"Department",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},{type:"PROPERTY",id:"team-checkbox",key:"team",label:"Team",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]);return t.jsx("div",{style:S,children:t.jsx(y,{objectType:p,filterDefinitions:n,...e})})}const ye={parameters:{docs:{description:{story:"Listogram rows always include a checkbox for multi-select. Selecting values checks the checkbox and highlights the row. Use the exclude toggle (three-dot menu) to invert selections."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:e=>t.jsx(Vr,{...e})};function Br(e){const[n,r]=i.useState(void 0),o=e.onFilterRemoved,l=i.useCallback(a=>{console.log("Removed filter:",a),o==null||o(a)},[o]),c=e.onFilterClauseChanged,d=i.useCallback(a=>{r(a),c==null||c(a)},[c]);return t.jsxs("div",{style:xe,children:[t.jsx("div",{style:Pe,children:t.jsx(y,{objectType:p,filterDefinitions:O,...e,onFilterRemoved:l,filterClause:n,onFilterClauseChanged:d})}),t.jsx("div",{style:H,children:t.jsx(De,{objectType:p,filter:n})})]})}const Ce={args:{title:"Employee Filters",showResetButton:!0,showActiveFilterCount:!0,enableSorting:!0},parameters:{docs:{source:{code:`const [filterClause, setFilterClause] = useState(undefined);

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
</div>`}}},render:e=>t.jsx(Br,{...e})};function Wr(e){const n=Ie(),r=i.useMemo(()=>n(p).where({department:"Marketing"}),[n]),[o,l]=i.useState(void 0),c=e.onFilterClauseChanged,d=i.useCallback(a=>{l(a),c==null||c(a)},[c]);return t.jsxs("div",{style:xe,children:[t.jsx("div",{style:Pe,children:t.jsx(y,{objectType:p,objectSet:r,filterDefinitions:O,...e,filterClause:o,onFilterClauseChanged:d})}),t.jsx("div",{style:H,children:t.jsx(De,{objectType:p,objectSet:r,filter:o})})]})}const he={args:{title:"Marketing Employees",showResetButton:!0,showActiveFilterCount:!0},parameters:{docs:{description:{story:"Demonstrates using a pre-filtered objectSet to scope both FilterList aggregations and ObjectTable data to a subset of employees."},source:{code:`const client = useOsdkClient();
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
/>`}}},render:e=>t.jsx(Wr,{...e})};function Gr(e){const[n,r]=i.useState(O),o=e.onFilterRemoved,l=i.useCallback(c=>{r(d=>d.filter(a=>"key"in a?a.key!==c:!0)),o==null||o(c)},[o]);return t.jsx("div",{style:S,children:t.jsx(y,{objectType:p,filterDefinitions:n,...e,onFilterRemoved:l})})}const Se={name:"Removable Filters",args:{title:"Removable Filters",showActiveFilterCount:!0},parameters:{docs:{description:{story:"When `onFilterRemoved` is provided, each filter item shows a remove button (X) on hover. Clicking it removes the filter from the list."},source:{code:`const [definitions, setDefinitions] = useState(filterDefinitions);

const handleFilterRemoved = (filterKey) => {
  setDefinitions(prev => prev.filter(def => def.key !== filterKey));
};

<FilterList
  objectType={Employee}
  filterDefinitions={definitions}
  onFilterRemoved={handleFilterRemoved}
  title="Removable Filters"
/>`}}},render:e=>t.jsx(Gr,{...e})};function Hr(e){const[n,r]=i.useState(void 0),o=i.useMemo(()=>[{type:"STATIC_VALUES",key:"department",label:"Department (static)",filterComponent:"LISTOGRAM",values:["Marketing","Operations","Finance","Product"],filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"}},{type:"STATIC_VALUES",key:"locationCity",label:"Office Location",filterComponent:"SINGLE_SELECT",values:["New York","San Francisco","London","Tokyo"],filterState:{type:"SELECT",selectedValues:[]}},{type:"STATIC_VALUES",key:"team",label:"Team (multi-select)",filterComponent:"MULTI_SELECT",values:["Alpha","Beta","Gamma","Delta"],filterState:{type:"SELECT",selectedValues:[]}},{type:"STATIC_VALUES",id:"custom-status",key:"status",label:"Status (custom clause)",filterComponent:"LISTOGRAM",values:["Active","Inactive"],filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"},toWhereClause:d=>{if(d.type!=="EXACT_MATCH"||d.values.length===0)return;const a=d.values,E=a.includes("Active"),g=a.includes("Inactive");if(E&&g)return{$or:[{employeeStatus:"Active"},{employeeStatus:"Inactive"}]};if(E)return{employeeStatus:"Active"};if(g)return{employeeStatus:"Inactive"}}}],[]),l=e.onFilterClauseChanged,c=i.useCallback(d=>{r(d),l==null||l(d)},[l]);return t.jsxs("div",{style:B,children:[t.jsx("div",{style:S,children:t.jsx(y,{objectType:p,filterDefinitions:o,...e,filterClause:n,onFilterClauseChanged:c})}),t.jsxs("div",{style:H,children:[t.jsx("strong",{children:"Filter Clause (JSON):"}),t.jsx("pre",{style:Q,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const Te={parameters:{docs:{description:{story:"Use `STATIC_VALUES` filter definitions to provide a fixed list of values instead of fetching from OSDK aggregation. Supports LISTOGRAM, SINGLE_SELECT, MULTI_SELECT, and TEXT_TAGS components. Optionally provide a `toWhereClause` function for custom clause generation."},source:{code:`const filterDefinitions = [
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
/>`}}},render:e=>t.jsx(Hr,{...e})};function Yr(e){const[n,r]=i.useState(void 0),[o,l]=i.useState(O),c=e.onFilterRemoved,d=i.useCallback(b=>{l(A=>A.filter(h=>"key"in h?h.key!==b:!0)),c==null||c(b)},[c]),a=e.onReset,E=i.useCallback(()=>{l(O),a==null||a()},[a]),g=e.onFilterClauseChanged,R=i.useCallback(b=>{r(b),g==null||g(b)},[g]);return t.jsxs("div",{style:xe,children:[t.jsx("div",{style:Pe,children:t.jsx(y,{objectType:p,filterDefinitions:o,titleIcon:Tn,...e,onReset:E,onFilterRemoved:d,filterClause:n,onFilterClauseChanged:R})}),t.jsx("div",{style:H,children:t.jsx(De,{objectType:p,filter:n})})]})}const Ee={name:"Full Featured",args:{title:"Employee Filters",showResetButton:!0,showActiveFilterCount:!0,enableSorting:!0},parameters:{docs:{description:{story:"Demonstrates all filter list features together: collapse, reset, active count, sorting, removable filters, per-filter search, exclude toggle, and controlled where clause driving an ObjectTable."},source:{code:`// All features combined: collapse, sort, search, exclude, remove, reset

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
/>`}}},render:e=>{const[,n]=yn(),r=e.onCollapsedChange,o=i.useCallback(l=>{n({collapsed:l}),r==null||r(l)},[n,r]);return t.jsx(Yr,{...e,onCollapsedChange:o})}};function Ur(e){const[n,r]=i.useState(void 0),o=i.useMemo(()=>[{type:"HAS_LINK",linkName:"lead",label:"Has Manager",filterState:{type:"hasLink",hasLink:!1}}],[]),l=e.onFilterClauseChanged,c=i.useCallback(d=>{r(d),l==null||l(d)},[l]);return t.jsxs("div",{style:B,children:[t.jsx("div",{style:S,children:t.jsx(y,{objectType:p,filterDefinitions:o,...e,filterClause:n,onFilterClauseChanged:c})}),t.jsxs("div",{style:H,children:[t.jsx("strong",{children:"Filter Clause (JSON):"}),t.jsx("pre",{style:Q,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const be={name:"Linked Property Filters",parameters:{docs:{description:{story:"Demonstrates filtering on properties of linked objects. HAS_LINK filters objects based on whether they have a linked object. "},source:{code:`// HAS_LINK and LINKED_PROPERTY filter definitions
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
/>`}}},render:e=>t.jsx(Ur,{...e})};function Xr({filterState:e,onFilterStateChanged:n}){const r=i.useCallback(l=>{const c=l.target.value;n({type:"custom",customState:{value:c}})},[n]),o=i.useCallback(()=>{n({type:"custom",customState:{value:""}})},[n]);return t.jsxs("div",{style:{padding:"12px 0",display:"flex",gap:"8px"},children:[t.jsx("input",{type:"text",value:e.customState.value,onChange:r,placeholder:"Enter name substring...",style:{flex:1,padding:"6px 8px",fontSize:"14px",border:"1px solid #ccc",borderRadius:"4px"}}),e.customState.value&&t.jsx("button",{onClick:o,style:{padding:"6px 12px",fontSize:"12px",backgroundColor:"#f5f5f5",border:"1px solid #ccc",borderRadius:"4px",cursor:"pointer"},children:"Clear"})]})}function Kr(e){const[n,r]=i.useState(void 0),o=i.useMemo(()=>[{type:"CUSTOM",key:"custom-name-contains",label:"Name Contains",filterComponent:"CUSTOM",filterState:{type:"custom",customState:{value:""}},renderInput:({filterState:d,onFilterStateChanged:a})=>t.jsx(Xr,{filterState:d,onFilterStateChanged:a}),toWhereClause:d=>{var E;const a=(E=d.customState)==null?void 0:E.value;if(a)return{fullName:{$containsAnyTerm:a}}}}],[]),l=e.onFilterClauseChanged,c=i.useCallback(d=>{r(d),l==null||l(d)},[l]);return t.jsxs("div",{style:B,children:[t.jsx("div",{style:S,children:t.jsx(y,{objectType:p,filterDefinitions:o,...e,filterClause:n,onFilterClauseChanged:c})}),t.jsxs("div",{style:H,children:[t.jsx("strong",{children:"Filter Clause (JSON):"}),t.jsx("pre",{style:Q,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const ge={name:"Custom Filters",parameters:{docs:{description:{story:"Custom filters provide full control over filtering logic and UI. The 'Name Contains' filter uses `renderInput` for a simple custom input. "},source:{code:`// Custom filter with renderInput
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
/>`}}},render:e=>t.jsx(Kr,{...e})},$r={type:"PROPERTY",id:"department-multi",key:"department",label:"Department",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}},zr={type:"PROPERTY",id:"department-single",key:"department",label:"Department (single)",filterComponent:"SINGLE_SELECT",filterState:{type:"SELECT",selectedValues:[]}},Jr=[K,$r,zr,Re],ve={name:"No value rendering",parameters:{docs:{description:{story:"Empty/null filter values render via the canonical `<NoValueLabel />` component — italic, muted, with the literal text 'No value' — across listogram buckets, single-select dropdown options, multi-select dropdown options, and multi-select chips. The mock dataset includes one Employee with `department: \"\"` so the No value row is visible in the listogram."}}},render:()=>t.jsx("div",{style:S,children:t.jsx(y,{objectType:p,filterDefinitions:Jr})})},Qr={type:"PROPERTY",id:"locationCity-single",key:"locationCity",label:"Location City (single)",filterComponent:"SINGLE_SELECT",filterState:{type:"SELECT",selectedValues:[]}},qr={type:"LINKED_PROPERTY",linkName:"lead",linkedPropertyKey:"department",linkedFilterComponent:"MULTI_SELECT",linkedFilterState:{type:"SELECT",selectedValues:[]},filterState:{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:[]}},label:"Manager Department (linked multi)"},Zr={type:"LINKED_PROPERTY",linkName:"lead",linkedPropertyKey:"locationCity",linkedFilterComponent:"SINGLE_SELECT",linkedFilterState:{type:"SELECT",selectedValues:[]},filterState:{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:[]}},label:"Manager City (linked single)"},ei=new Map([["department",{type:"EXACT_MATCH",values:["Marketing","Research"]}],["jobTitle-multi",{type:"SELECT",selectedValues:["Marketing Manager","Chief Scientist"]}],["locationCity-single",{type:"SELECT",selectedValues:["Berlin"]}],["linkedProperty:lead:department",{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:["Marketing","Research"]}}],["linkedProperty:lead:locationCity",{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:["Berlin"]}}]]),ti=[K,Sn,Qr,qr,Zr];function ni(e){const n=Ie(),r=i.useMemo(()=>n(p),[n]),[o,l]=i.useState(void 0),c=i.useCallback(d=>{l(d)},[]);return t.jsxs("div",{style:B,children:[t.jsx("div",{style:S,children:t.jsx(y,{...e,objectType:p,objectSet:r,filterDefinitions:ti,initialFilterStates:ei,onFilterClauseChanged:c})}),t.jsxs("div",{style:H,children:[t.jsx("h4",{children:"Active where clause"}),t.jsx("pre",{style:Q,children:o?JSON.stringify(o,null,2):"(none)"})]})]})}const Fe={name:"With initial filter states",parameters:{docs:{description:{story:"Pass `initialFilterStates` to hydrate filters from saved state (e.g. localStorage or URL params). Selections are restored on mount, including values that currently have zero matching rows — they appear with a count of 0 so users can see and clear them. Demonstrated across LISTOGRAM, MULTI_SELECT, SINGLE_SELECT, and LINKED_PROPERTY filters."},source:{code:`// "Research", "Chief Scientist", and "Berlin" are not in the current
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
/>`}}},render:e=>t.jsx(ni,{...e})};var He,Ye,Ue;Z.parameters={...Z.parameters,docs:{...(He=Z.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Ue=(Ye=Z.parameters)==null?void 0:Ye.docs)==null?void 0:Ue.source}}};var Xe,Ke,$e;ee.parameters={...ee.parameters,docs:{...(Xe=ee.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...($e=(Ke=ee.parameters)==null?void 0:Ke.docs)==null?void 0:$e.source}}};var ze,Je,Qe;te.parameters={...te.parameters,docs:{...(ze=te.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Qe=(Je=te.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var qe,Ze,et;ne.parameters={...ne.parameters,docs:{...(qe=ne.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(et=(Ze=ne.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,nt,rt;re.parameters={...re.parameters,docs:{...(tt=re.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(rt=(nt=re.parameters)==null?void 0:nt.docs)==null?void 0:rt.source}}};var it,ot,lt;ie.parameters={...ie.parameters,docs:{...(it=ie.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
}`,...(lt=(ot=ie.parameters)==null?void 0:ot.docs)==null?void 0:lt.source}}};var st,at,ct;oe.parameters={...oe.parameters,docs:{...(st=oe.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(ct=(at=oe.parameters)==null?void 0:at.docs)==null?void 0:ct.source}}};var dt,ut,pt;le.parameters={...le.parameters,docs:{...(dt=le.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(pt=(ut=le.parameters)==null?void 0:ut.docs)==null?void 0:pt.source}}};var mt,ft,yt;se.parameters={...se.parameters,docs:{...(mt=se.parameters)==null?void 0:mt.docs,source:{originalSource:`{
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
}`,...(yt=(ft=se.parameters)==null?void 0:ft.docs)==null?void 0:yt.source}}};var Ct,ht,St;ae.parameters={...ae.parameters,docs:{...(Ct=ae.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
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
}`,...(St=(ht=ae.parameters)==null?void 0:ht.docs)==null?void 0:St.source}}};var Tt,Et,bt;ce.parameters={...ce.parameters,docs:{...(Tt=ce.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
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
}`,...(bt=(Et=ce.parameters)==null?void 0:Et.docs)==null?void 0:bt.source}}};var gt,vt,Ft;de.parameters={...de.parameters,docs:{...(gt=de.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(Ft=(vt=de.parameters)==null?void 0:vt.docs)==null?void 0:Ft.source}}};var Rt,At,Lt;ue.parameters={...ue.parameters,docs:{...(Rt=ue.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
}`,...(Lt=(At=ue.parameters)==null?void 0:At.docs)==null?void 0:Lt.source}}};var _t,jt,Mt;pe.parameters={...pe.parameters,docs:{...(_t=pe.parameters)==null?void 0:_t.docs,source:{originalSource:`{
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
}`,...(Mt=(jt=pe.parameters)==null?void 0:jt.docs)==null?void 0:Mt.source}}};var kt,Dt,It;me.parameters={...me.parameters,docs:{...(kt=me.parameters)==null?void 0:kt.docs,source:{originalSource:`{
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
}`,...(It=(Dt=me.parameters)==null?void 0:Dt.docs)==null?void 0:It.source}}};var Ot,xt,Pt;fe.parameters={...fe.parameters,docs:{...(Ot=fe.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
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
}`,...(Pt=(xt=fe.parameters)==null?void 0:xt.docs)==null?void 0:Pt.source}}};var Nt,wt,Vt;ye.parameters={...ye.parameters,docs:{...(Nt=ye.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
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
}`,...(Vt=(wt=ye.parameters)==null?void 0:wt.docs)==null?void 0:Vt.source}}};var Bt,Wt,Gt;Ce.parameters={...Ce.parameters,docs:{...(Bt=Ce.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
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
}`,...(Gt=(Wt=Ce.parameters)==null?void 0:Wt.docs)==null?void 0:Gt.source}}};var Ht,Yt,Ut;he.parameters={...he.parameters,docs:{...(Ht=he.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
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
}`,...(Ut=(Yt=he.parameters)==null?void 0:Yt.docs)==null?void 0:Ut.source}}};var Xt,Kt,$t;Se.parameters={...Se.parameters,docs:{...(Xt=Se.parameters)==null?void 0:Xt.docs,source:{originalSource:`{
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
}`,...($t=(Kt=Se.parameters)==null?void 0:Kt.docs)==null?void 0:$t.source}}};var zt,Jt,Qt;Te.parameters={...Te.parameters,docs:{...(zt=Te.parameters)==null?void 0:zt.docs,source:{originalSource:`{
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
}`,...(Qt=(Jt=Te.parameters)==null?void 0:Jt.docs)==null?void 0:Qt.source}}};var qt,Zt,en;Ee.parameters={...Ee.parameters,docs:{...(qt=Ee.parameters)==null?void 0:qt.docs,source:{originalSource:`{
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
}`,...(en=(Zt=Ee.parameters)==null?void 0:Zt.docs)==null?void 0:en.source}}};var tn,nn,rn;be.parameters={...be.parameters,docs:{...(tn=be.parameters)==null?void 0:tn.docs,source:{originalSource:`{
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
}`,...(rn=(nn=be.parameters)==null?void 0:nn.docs)==null?void 0:rn.source}}};var on,ln,sn;ge.parameters={...ge.parameters,docs:{...(on=ge.parameters)==null?void 0:on.docs,source:{originalSource:`{
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
}`,...(sn=(ln=ge.parameters)==null?void 0:ln.docs)==null?void 0:sn.source}}};var an,cn,dn;ve.parameters={...ve.parameters,docs:{...(an=ve.parameters)==null?void 0:an.docs,source:{originalSource:`{
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
}`,...(dn=(cn=ve.parameters)==null?void 0:cn.docs)==null?void 0:dn.source}}};var un,pn,mn;Fe.parameters={...Fe.parameters,docs:{...(un=Fe.parameters)==null?void 0:un.docs,source:{originalSource:`{
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
}`,...(mn=(pn=Fe.parameters)==null?void 0:pn.docs)==null?void 0:mn.source}}};const to=["Default","IntegerNumberRangeRounding","WithObjectSet","AddFilterMode","WithAllFilterTypes","WithTitleAndIcon","WithResetButton","WithActiveFilterCount","WithSorting","CollapsiblePanel","KeywordSearch","WithColorMap","WithRenderValue","WithRenderValueAsReactNode","WithListogramDisplayModes","WithHiddenCounts","WithCheckbox","CombinedWithObjectTable","CombinedWithFilteredObjectSet","WithRemovableFilters","WithStaticValues","FullFeatured","WithHasLinkFilter","WithCustomFilters","NoValueRendering","WithInitialFilterStates"];export{ne as AddFilterMode,ae as CollapsiblePanel,he as CombinedWithFilteredObjectSet,Ce as CombinedWithObjectTable,Z as Default,Ee as FullFeatured,ee as IntegerNumberRangeRounding,ce as KeywordSearch,ve as NoValueRendering,le as WithActiveFilterCount,re as WithAllFilterTypes,ye as WithCheckbox,de as WithColorMap,ge as WithCustomFilters,be as WithHasLinkFilter,fe as WithHiddenCounts,Fe as WithInitialFilterStates,me as WithListogramDisplayModes,te as WithObjectSet,Se as WithRemovableFilters,ue as WithRenderValue,pe as WithRenderValueAsReactNode,oe as WithResetButton,se as WithSorting,Te as WithStaticValues,ie as WithTitleAndIcon,to as __namedExportsOrder,eo as default};
