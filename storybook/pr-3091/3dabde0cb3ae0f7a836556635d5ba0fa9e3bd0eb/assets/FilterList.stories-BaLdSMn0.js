var Yn=Object.defineProperty;var Gn=(e,n,r)=>n in e?Yn(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r;var De=(e,n,r)=>Gn(e,typeof n!="symbol"?n+"":n,r);import{r as i,R as l,f as Wn,j as t}from"./iframe-An7_ok4C.js";import{S as Un}from"./MultiColumnSortDialog-CVXxEKRs.js";import{b as Xn,s as Kn,c as $n,f as zn,d as D,S as Jn,R as Ye,O as Qn,e as qn,C as Zn,E as er,h as tr,i as nr,g as K,u as rr,a as Ge,F as ir,j as or}from"./getFilterLabel-BT5Hqq2Z.js";import{c as $}from"./index-CsV4dS7f.js";import{u as sr,b as lr,c as We,P as ar,s as cr,K as dr,d as pr,a as ur,e as mr,f as fr,g as yr,v as Cr,h as hr}from"./DraggableList-CFNgk54j.js";import{B as N}from"./Button-BM9yKjC0.js";import{I as Sr}from"./Input-Ccvg9OTC.js";import{w as Er}from"./withOsdkMetrics-CsEZPBhW.js";import{O as gn}from"./object-table-MDanzBw-.js";import{E as m}from"./Employee-BAk2o20h.js";import{u as je}from"./useOsdkClient-BVi78b7z.js";import"./preload-helper-RtOdUqdU.js";import"./ActionButton-DuPLC2_6.js";import"./Dialog-G9WZrXcI.js";import"./cross-SIcxHuYm.js";import"./svgIconContainer-B6gElZ5n.js";import"./useBaseUiId-DFBpAm_h.js";import"./InternalBackdrop-CP8kJ_VP.js";import"./composite-C9JiOFOF.js";import"./index-DfNXtine.js";import"./index-B6sK19yI.js";import"./index-Ce69MtrK.js";import"./MenuTrigger-TPI_OH_h.js";import"./CompositeItem-DpyuKUKM.js";import"./ToolbarRootContext-DKP64O-4.js";import"./getDisabledMountTransitionStyles-DSoIsw5V.js";import"./getPseudoElementBounds-BLAVuF0e.js";import"./caret-down-ChNeoUMz.js";import"./chevron-down-DwPJLpiv.js";import"./useValueChanged-Dl388Q1L.js";import"./Switch-BYjoZCFy.js";import"./toNumber-C5xxX2hr.js";import"./PopoverPopup-BI1Ajqls.js";import"./useControlled-DpcT0DFF.js";import"./assertUnreachable-tCT10eXl.js";import"./index-ClnMgKgk.js";import"./Checkbox-D2tILyh6.js";import"./minus-NP1uxGH9.js";import"./SkeletonBar-CoGZCSPy.js";import"./makeExternalStore-rNNfmP1e.js";import"./small-cross-CSFvpByU.js";import"./Table-Bz8Txux5.js";import"./useEventCallback-D5d6OBxJ.js";import"./LoadingCell-YAt8KIIw.js";import"./ColumnConfigDialog-BoxDxvWz.js";import"./CollapsiblePanel-Cvk0OUM1.js";import"./index-DUjZV3m5.js";import"./error-eGR5PXEA.js";import"./BaseCbacBanner-DE4-FZMs.js";import"./Tooltip-C9QDOcx4.js";import"./DropdownField-BrViNUXb.js";import"./useShape-B0HjDz_i.js";const w={filterList:"FilterList-module__filterList___wmzCNbkH",filterListCollapsed:"FilterList-module__filterListCollapsed___CGrK9txF",expandedContent:"FilterList-module__expandedContent___aEk2i2At",scrollableContent:"FilterList-module__scrollableContent___F3O1nfAo",hiddenContent:"FilterList-module__hiddenContent___PHKe-yWc",expandButton:"FilterList-module__expandButton___-QlY8-ot",collapsedLabel:"FilterList-module__collapsedLabel___QA0UtRts",addButtonContainer:"FilterList-module__addButtonContainer___kq300FEV",addButton:"FilterList-module__addButton___oD4yvwyZ"},te={content:"FilterListContent-module__content___fG0EgVp6",dragOverlay:"FilterListContent-module__dragOverlay___Tjd1YpmI"},Ie={errorContainer:"ErrorBoundary-module__errorContainer___FIguBDDu",errorMessage:"ErrorBoundary-module__errorMessage___jUsXUqFA",retryButton:"ErrorBoundary-module__retryButton___PZVWZOm7"};class Tr extends i.Component{constructor(){super(...arguments);De(this,"state",{hasError:!1,error:null});De(this,"handleRetry",()=>{this.setState({hasError:!1,error:null})})}static getDerivedStateFromError(r){return{hasError:!0,error:r}}componentDidCatch(r,o){var s,c;console.error("[ErrorBoundary]",r),console.error("[ErrorBoundary] Component stack:",o.componentStack),(c=(s=this.props).onError)==null||c.call(s,r)}render(){return this.state.hasError?this.props.fallback?this.props.fallback:l.createElement("div",{className:Ie.errorContainer},l.createElement("p",{className:Ie.errorMessage},this.props.errorMessage??"Something went wrong"),l.createElement(N,{className:Ie.retryButton,onClick:this.handleRetry,"aria-label":"Retry"},"Retry")):this.props.children}}function br(){return l.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true"},l.createElement("circle",{cx:"5.5",cy:"3.5",r:"1.5"}),l.createElement("circle",{cx:"10.5",cy:"3.5",r:"1.5"}),l.createElement("circle",{cx:"5.5",cy:"8",r:"1.5"}),l.createElement("circle",{cx:"10.5",cy:"8",r:"1.5"}),l.createElement("circle",{cx:"5.5",cy:"12.5",r:"1.5"}),l.createElement("circle",{cx:"10.5",cy:"12.5",r:"1.5"}))}function Oe(){return Oe=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var o in r)({}).hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},Oe.apply(null,arguments)}function gr({definition:e,filterKey:n,label:r,filterState:o,onFilterStateChanged:s,onFilterRemoved:c,renderInput:d,searchField:a,dragHandleAttributes:f,dragHandleListeners:y,className:S,style:v}){const[R,_]=i.useState({type:"closed"}),[L,k]=i.useState(!1),p=i.useCallback(T=>{s(n,T)},[n,s]),C=i.useCallback(()=>{_(T=>T.type==="closed"?{type:"open",query:""}:{type:"closed"})},[]),g=i.useCallback(T=>{_({type:"open",query:T.target.value})},[]),F=i.useCallback(()=>{_({type:"open",query:""})},[]),M=i.useCallback(()=>{c==null||c(n)},[n,c]),O=i.useCallback(()=>{k(T=>!T)},[]),B=i.useCallback(T=>{T==null||T.focus({preventScroll:!0})},[]),I=i.useMemo(()=>Xn(o),[o]),U=Kn(I),H=$n(I)&&a!==!1,Y=zn(o),u=R.type==="open",E=R.type==="open"?R.query:"",A=R.type==="open"?R.query:void 0;return l.createElement("div",{className:$(D.filterItem,S),style:v,"data-has-selection":Y||void 0},l.createElement("div",{className:D.itemHeader},f&&l.createElement(N,Oe({className:D.dragHandle,"aria-label":`Reorder ${r}`},f,y),l.createElement(br,null)),l.createElement("span",{className:D.itemLabel},r),H&&l.createElement(N,{className:D.headerActionButton,onClick:C,"aria-label":"Search values","aria-pressed":u},l.createElement(Jn,null)),c&&l.createElement(N,{className:D.headerActionButton,onClick:M,"aria-label":`Remove ${r} filter`},l.createElement(Ye,null)),U&&l.createElement(N,{className:D.headerActionButton,onClick:O,"aria-label":"More actions","aria-pressed":L},l.createElement(Qn,null))),u&&l.createElement("div",{className:D.searchRow},l.createElement(Sr,{type:"text",className:D.searchInput,value:E,onChange:g,placeholder:"Search property values...","aria-label":"Search property values",ref:B}),E&&l.createElement(N,{type:"button",className:D.searchClearButton,onClick:F,"aria-label":"Clear search"},l.createElement(Ye,null))),l.createElement("div",{className:D.itemContent},l.createElement(Tr,{errorMessage:"Error loading filter"},d({definition:e,filterKey:n,filterState:o,onFilterStateChanged:p,searchQuery:A,excludeRowOpen:L}))))}const Ne=i.memo(gr);function vr({id:e,definition:n,filterKey:r,label:o,filterState:s,onFilterStateChanged:c,onFilterRemoved:d,renderInput:a,searchField:f}){const{attributes:y,listeners:S,setNodeRef:v,transform:R,transition:_,isDragging:L}=sr({id:e}),k=i.useMemo(()=>({transform:lr.Transform.toString(R),transition:_??void 0}),[R,_]);return l.createElement("div",{ref:v,style:k,className:$(L&&D.dragging)},l.createElement(Ne,{definition:n,filterKey:r,label:o,filterState:s,onFilterStateChanged:c,onFilterRemoved:d,renderInput:a,searchField:f,dragHandleAttributes:y,dragHandleListeners:S}))}const Rr=i.memo(vr),Lr=({transform:e})=>({...e,x:0}),Fr={distance:8},Ar=[Lr],_r={role:"button",tabIndex:-1,"aria-disabled":!0,"aria-pressed":void 0,"aria-roledescription":"sortable","aria-describedby":""};function jr({filterDefinitions:e,filterStates:n,onFilterStateChanged:r,onFilterRemoved:o,onOrderChange:s,renderInput:c,getFilterKey:d,getFilterLabel:a,getEmptyDisplayState:f,enableSorting:y,className:S,style:v}){const[R,_]=i.useState(null),L=i.useMemo(()=>y&&e?e.map(u=>d(u)):[],[y,e,d]),k=We(ar,{activationConstraint:Fr}),p=We(dr,{coordinateGetter:cr}),C=pr(k,p),g=R!=null?L.indexOf(String(R)):-1,F=g>=0&&e?e[g]:void 0,M=i.useMemo(()=>F?d(F):void 0,[F,d]),O=i.useMemo(()=>{const u=new Map;if(!f||!e)return u;for(const E of e){const A=f(E);A!=null&&u.set(d(E),A)}return u},[e,f,d]),B=i.useCallback(u=>{_(u.active.id)},[]),I=i.useCallback(u=>{_(null);const{active:E,over:A}=u;if(!A||E.id===A.id)return;const T=L.indexOf(String(E.id)),x=L.indexOf(String(A.id));if(T!==-1&&x!==-1){const Q=ur(L,T,x);s==null||s(Q)}},[L,s]),U=i.useCallback(()=>{_(null)},[]),H=i.useMemo(()=>{const u=E=>{const A=L.indexOf(String(E)),T=A>=0?e==null?void 0:e[A]:void 0;return T?a(T):"filter"};return{onDragStart({active:E}){return`Picked up ${u(E.id)} filter`},onDragOver({over:E}){return E?`Moved to position ${L.indexOf(String(E.id))+1} of ${L.length}`:"Not over a droppable area"},onDragEnd({active:E,over:A}){const T=u(E.id);if(A&&E.id!==A.id){const x=L.indexOf(String(A.id));return`Dropped ${T} filter at position ${x+1}`}return`Dropped ${T} filter back in its original position`},onDragCancel({active:E}){return`Cancelled dragging ${u(E.id)} filter`}}},[e,L,a]),Y=i.useMemo(()=>({announcements:H}),[H]);return!e||e.length===0?l.createElement("div",{className:$(te.content,S),style:v,"data-empty":"true"}):y?l.createElement("div",{className:$(te.content,S),style:v},l.createElement(mr,{sensors:C,collisionDetection:fr,modifiers:Ar,onDragStart:B,onDragEnd:I,onDragCancel:U,accessibility:Y},l.createElement(yr,{items:L,strategy:Cr},e.map((u,E)=>{const A=L[E],T=d(u),x=a(u),Q=n.get(T)??O.get(T);return l.createElement(Rr,{key:A,id:A,definition:u,filterKey:T,label:x,filterState:Q,onFilterStateChanged:r,onFilterRemoved:o,renderInput:c,searchField:u.searchField})})),l.createElement(hr,{dropAnimation:null,className:te.dragOverlay},F&&M&&l.createElement(Ne,{definition:F,filterKey:M,label:a(F),filterState:n.get(M)??O.get(M),onFilterStateChanged:r,onFilterRemoved:o,renderInput:c,searchField:F.searchField,dragHandleAttributes:_r})))):l.createElement("div",{className:$(te.content,S),style:v},e.map(u=>{const E=d(u),A=n.get(E)??O.get(E);return l.createElement(Ne,{key:E,definition:u,filterKey:E,label:a(u),filterState:A,onFilterStateChanged:r,onFilterRemoved:o,renderInput:c,searchField:u.searchField})}))}const G={header:"FilterListHeader-module__header___dkKc0CO-",titleContainer:"FilterListHeader-module__titleContainer___KaePpQIx",title:"FilterListHeader-module__title___xqfWfSzK",titleIcon:"FilterListHeader-module__titleIcon___MQy-dec8",activeCount:"FilterListHeader-module__activeCount___GyBsnsQL",actions:"FilterListHeader-module__actions___YZA7zmGc",collapseButton:"FilterListHeader-module__collapseButton___N1-sj3B3",resetButton:"FilterListHeader-module__resetButton___jLcUypov"};function Mr({title:e,titleIcon:n,collapsed:r=!1,onCollapsedChange:o,showResetButton:s,onReset:c,showActiveFilterCount:d,activeFilterCount:a=0,canReset:f,hasVisibilityChanges:y=!1}){const S=i.useCallback(()=>{o==null||o(!r)},[o,r]),v=f!=null?!f:a===0&&!y;return l.createElement("div",{className:G.header},l.createElement("div",{className:G.titleContainer},n&&l.createElement("span",{className:G.titleIcon},n),e&&l.createElement("span",{className:G.title},e),d&&a>0&&l.createElement("span",{className:G.activeCount},"(",a,")")),l.createElement("div",{className:G.actions},s&&l.createElement(N,{className:G.resetButton,onClick:c,disabled:v},l.createElement(qn,null)," Reset filters"),o!=null&&l.createElement(N,{className:G.collapseButton,onClick:S,"aria-expanded":!r,"aria-label":r?"Expand filters":"Collapse filters"},l.createElement(Zn,null))))}const kr=i.memo(Mr);function Dr(e){const{title:n,titleIcon:r,collapsed:o=!1,onCollapsedChange:s,filterDefinitions:c,filterStates:d,onFilterStateChanged:a,renderInput:f,getFilterKey:y,getFilterLabel:S,getEmptyDisplayState:v,activeFilterCount:R,onReset:_,onFilterAdded:L,onFilterRemoved:k,onOrderChange:p,showResetButton:C=!1,showActiveFilterCount:g=!1,canReset:F,hasVisibilityChanges:M,enableSorting:O,className:B,renderAddFilterButton:I}=e,[U,H]=i.useState(null),Y=i.useCallback(()=>{s==null||s(!1)},[s]),u=o&&s!=null;return l.createElement("div",{className:$(w.filterList,B)},u&&l.createElement("div",{className:w.filterListCollapsed,"data-collapsed":"true"},l.createElement(N,{className:w.expandButton,onClick:Y,"aria-label":"Expand filters"},l.createElement(er,null)),l.createElement("span",{className:w.collapsedLabel},n??"Filters")),l.createElement("div",{ref:H,className:$(w.expandedContent,u&&w.hiddenContent),"data-active-count":R},l.createElement(tr,{value:U},(n||r||C||g||s)&&l.createElement(kr,{title:n,titleIcon:r,collapsed:o,onCollapsedChange:s,showResetButton:C,onReset:_,showActiveFilterCount:g,activeFilterCount:R,canReset:F,hasVisibilityChanges:M}),l.createElement("div",{className:w.scrollableContent},l.createElement(jr,{filterDefinitions:c,filterStates:d,onFilterStateChanged:a,onFilterRemoved:k,onOrderChange:p,renderInput:f,getFilterKey:y,getFilterLabel:S,getEmptyDisplayState:v,enableSorting:O})),(I!=null||L!=null)&&l.createElement("div",{className:w.addButtonContainer},I?I():l.createElement(N,{type:"button",className:w.addButton,onClick:L},"+ Add filter")))))}const Ir={trigger:"AddFilterPopover-module__trigger___8QQBrzPo"};function Or({hiddenDefinitions:e,onShowFilter:n,renderTrigger:r}){const o=nr();return l.createElement(Un,{items:e,onItemSelected:n,trigger:r!=null?r():"+ Add filter",triggerClassName:r==null?Ir.trigger:void 0,searchPlaceholder:"Search filters",emptyMessage:"No matching filters",collisionBoundary:o})}const Nr=i.memo(Or);function Pr(e,n){const r=i.useMemo(()=>(e==null?void 0:e.map(K))??[],[e]),o=i.useMemo(()=>(e==null?void 0:e.filter(p=>p.isVisible!==!1).map(K))??[],[e]),[s,c]=i.useState(()=>o);i.useEffect(()=>{c(o)},[o]);const d=i.useRef(n);d.current=n;const a=i.useCallback(p=>{if(!d.current)return;const C=new Set(p),g=r.filter(F=>!C.has(F));d.current(p,g)},[r]),f=i.useMemo(()=>{const p=new Map;if(e==null)return p;for(const C of e)p.set(K(C),C);return p},[e]),{visibleDefinitions:y,hiddenDefinitions:S}=i.useMemo(()=>{if(e==null)return{visibleDefinitions:[],hiddenDefinitions:[]};const p=new Set(s),C=[],g=[];for(const F of s){const M=f.get(F);M!=null&&C.push(M)}for(const F of r)if(!p.has(F)){const M=f.get(F);M!=null&&g.push(M)}return{visibleDefinitions:C,hiddenDefinitions:g}},[e,f,s,r]),v=i.useCallback(p=>{c(C=>{if(C.includes(p))return C;const g=[...C,p];return a(g),g})},[a]),R=i.useCallback(p=>{c(C=>{const g=C.filter(F=>F!==p);return a(g),g})},[a]),_=i.useCallback(p=>{c(C=>p.length===C.length&&p.every((g,F)=>g===C[F])?C:(a(p),p))},[a]),L=i.useCallback(()=>{c(p=>o.length===p.length&&o.every((C,g)=>C===p[g])?p:(a(o),o))},[o,a]),k=i.useMemo(()=>s.length!==o.length?!0:!s.every((p,C)=>p===o[C]),[s,o]);return{visibleDefinitions:y,hiddenDefinitions:S,showFilter:v,hideFilter:R,reorderVisible:_,hasVisibilityChanges:k,resetVisibility:L}}function Ue(e){switch(e){case"MULTI_SELECT":case"SINGLE_SELECT":return{type:"SELECT",selectedValues:[]};case"LISTOGRAM":case"TEXT_TAGS":return{type:"EXACT_MATCH",values:[]};case"CONTAINS_TEXT":return{type:"CONTAINS_TEXT",value:void 0};case"TIMELINE":return{type:"TIMELINE",startDate:void 0,endDate:void 0};case"NUMBER_RANGE":case"DATE_RANGE":case"SINGLE_DATE":case"MULTI_DATE":case"TOGGLE":return;default:return}}function xr(e){switch(e.type){case"PROPERTY":case"STATIC_VALUES":return Ue(e.filterComponent);case"LINKED_PROPERTY":{const n=Ue(e.linkedFilterComponent);return n==null?void 0:{type:"linkedProperty",linkedFilterState:n}}case"HAS_LINK":return{type:"hasLink",hasLink:!1};case"KEYWORD_SEARCH":case"CUSTOM":return;default:return}}const wr={};function Vr(e){const{objectType:n,objectSet:r,title:o,titleIcon:s,collapsed:c,onCollapsedChange:d,filterDefinitions:a,addFilterMode:f="uncontrolled",showResetButton:y=!1,onReset:S,showActiveFilterCount:v=!1,showFilteredOutValues:R=!1,className:_,enableSorting:L,onFilterAdded:k,onFilterRemoved:p,onFilterVisibilityChange:C,renderAddFilterButton:g}=e,{filterStates:F,setFilterState:M,clearFilterState:O,perFilterWhereClauses:B,perFilterLinkedFilters:I,activeFilterCount:U,hasChangesFromInitial:H,reset:Y}=rr(e),u=f==="uncontrolled",E=i.useCallback((j,ee)=>{if(!C)return;const ke=[...j.map(q=>({filterKey:q,isVisible:!0})),...ee.map(q=>({filterKey:q,isVisible:!1}))];C(ke)},[C]),{visibleDefinitions:A,hiddenDefinitions:T,showFilter:x,hideFilter:Q,reorderVisible:we,hasVisibilityChanges:kn,resetVisibility:Ve}=Pr(a,u?E:void 0),Dn=i.useCallback(()=>{Y(),Ve(),S==null||S()},[Y,Ve,S]),In=i.useMemo(()=>{if(a!=null)return a.filter(j=>j.isVisible!==!1)},[a]),On=u?A:In,Nn=i.useCallback(j=>{O(j),u&&Q(j),p==null||p(j)},[O,u,Q,p]),Be=i.useCallback(j=>{x(j),k==null||k(j,a??[])},[x,k,a]),Pn=i.useCallback(j=>{we(j)},[we]),He=i.useMemo(()=>T.map(j=>({key:K(j),label:Ge(j)})),[T]),xn=i.useMemo(()=>u?T.length===0?void 0:()=>l.createElement(Nr,{hiddenDefinitions:He,onShowFilter:Be,renderTrigger:g}):g,[u,T.length,He,Be,g]),wn=u?Nn:p,Vn=i.useCallback(({definition:j,filterKey:ee,filterState:ke,onFilterStateChanged:q,searchQuery:Bn,excludeRowOpen:Hn})=>l.createElement(ir,{objectType:n,objectSet:r,definition:j,filterState:ke,onFilterStateChanged:q,whereClause:B.get(ee)??wr,linkedFilters:I.get(ee)??or,showFilteredOutValues:R,searchQuery:Bn,excludeRowOpen:Hn}),[n,r,B,I,R]);return l.createElement(Dr,{title:o,titleIcon:s,collapsed:c,onCollapsedChange:d,filterDefinitions:On,filterStates:F,onFilterStateChanged:M,renderInput:Vn,getFilterKey:K,getFilterLabel:Ge,getEmptyDisplayState:xr,activeFilterCount:U,onReset:Dn,showResetButton:y,showActiveFilterCount:v,canReset:H||kn,enableSorting:L,onFilterRemoved:wn,onOrderChange:Pn,className:_,renderAddFilterButton:xn})}const h=Er(Vr,"FilterList"),{useArgs:vn}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:X}=__STORYBOOK_MODULE_TEST__,J={type:"PROPERTY",id:"department",key:"department",label:"Department",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},Pe={type:"PROPERTY",id:"team",key:"team",label:"Team",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},Rn={type:"PROPERTY",id:"fullName",key:"fullName",label:"Full Name",filterComponent:"CONTAINS_TEXT",filterState:{type:"CONTAINS_TEXT"}},Ln={type:"PROPERTY",id:"firstFullTimeStartDate",key:"firstFullTimeStartDate",label:"Start Date",filterComponent:"DATE_RANGE",filterState:{type:"DATE_RANGE"},clickToFilter:!0,formatDate:e=>e.toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric"})},Me={type:"PROPERTY",id:"employeeNumber",key:"employeeNumber",label:"Employee Number",filterComponent:"NUMBER_RANGE",filterState:{type:"NUMBER_RANGE"},clickToFilter:!0},Z={type:"PROPERTY",id:"locationCity",key:"locationCity",label:"Location City",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},xe={type:"PROPERTY",id:"jobTitle-multi",key:"jobTitle",label:"Job Title",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}},V=[J,Pe,Rn,Ln,xe,Me,Z],b={width:320,height:600},P={display:"flex",gap:16},W={flex:1},z={marginTop:8,padding:12,background:"#f5f5f5",borderRadius:4,fontSize:12,overflow:"auto",maxHeight:560},Fn={display:"flex",gap:16,height:600},An={width:320,flexShrink:0},_n=t.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:t.jsx("path",{d:"M1 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1.5a1 1 0 0 1-.293.707L10 8.914V13a1 1 0 0 1-.553.894l-2 1A1 1 0 0 1 6 14v-5.086L1.293 4.207A1 1 0 0 1 1 3.5V2z"})}),Lo={title:"Components/FilterList",component:h,tags:["beta"],args:{title:"Filters",enableSorting:!1,showResetButton:!1,showActiveFilterCount:!1,collapsed:!1,onFilterClauseChanged:X(),onFilterStateChanged:X(),onFilterAdded:X(),onFilterRemoved:X(),onFilterVisibilityChange:X(),onCollapsedChange:X(),onReset:X()},parameters:{msw:{handlers:[...Wn.handlers]},controls:{expanded:!0}},argTypes:{objectType:{description:"The object type definition for the objects being filtered",control:!1},objectSet:{description:"Optional object set to scope aggregation queries",control:!1},filterDefinitions:{description:"Array of filter definitions. If not provided, all filterable properties are auto-discovered.",control:!1},title:{description:"Title displayed in the filter list header",control:"text"},titleIcon:{description:"Icon displayed next to the title",control:!1},filterClause:{description:"The current where clause. If provided, the filter clause is controlled.",control:!1},onFilterClauseChanged:{description:"Called when the filter clause changes. Required in controlled mode.",control:!1,table:{category:"Events"}},onFilterStateChanged:{description:"Called when an individual filter's state changes",control:!1,table:{category:"Events"}},enableSorting:{description:"Enable drag-and-drop reordering of filters",control:"boolean",table:{defaultValue:{summary:"false"}}},collapsed:{description:"Whether the filter list panel is collapsed",control:"boolean"},onCollapsedChange:{description:"Called when the collapsed state changes",control:!1,table:{category:"Events"}},showResetButton:{description:"Show reset filters button in header",control:"boolean",table:{defaultValue:{summary:"false"}}},onReset:{description:"Called when the reset button is clicked",control:!1,table:{category:"Events"}},showActiveFilterCount:{description:"Show count of active filters in header",control:"boolean",table:{defaultValue:{summary:"false"}}},onFilterAdded:{description:"Called when a filter is added. If provided, users can add filters.",control:!1,table:{category:"Events"}},onFilterRemoved:{description:"Called when a filter is removed. If provided, users can remove filters.",control:!1,table:{category:"Events"}},onFilterVisibilityChange:{description:"Called when filter visibility or ordering changes (reorder, add, remove).",control:!1,table:{category:"Events"}},addFilterMode:{description:'Controls how filter add/remove is managed. "uncontrolled" manages visibility internally; "controlled" leaves it to the consumer.',control:"select",options:["controlled","uncontrolled"],table:{category:"Advanced",defaultValue:{summary:'"uncontrolled"'}}},renderAddFilterButton:{description:"Custom render function for the add filter button.",control:!1,table:{category:"Advanced"}},initialFilterStates:{description:"Initial filter states for hydrating from external storage. Merged over definition defaults on mount.",control:!1,table:{category:"Advanced"}},className:{description:"Additional CSS class name",control:"text"}}},ne={parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:({objectType:e,objectSet:n,...r})=>{const o=i.useMemo(()=>[J,Z],[]);return t.jsx("div",{style:b,children:t.jsx(h,{objectType:m,filterDefinitions:o,...r})})}},re={parameters:{docs:{description:{story:"Repro for the integer-typed `NUMBER_RANGE` rounding fix. `employeeNumber` is an `integer` property, so histogram bucket boundaries — `(maxValue - minValue) / 20` — are usually fractional. Click any bar in the histogram. The Min/Max boxes must show whole integers (e.g. `657495073`), not fractional values (e.g. `657495073.4`)."}}},render:({objectType:e,objectSet:n,...r})=>{const o=i.useMemo(()=>[Me],[]);return t.jsx("div",{style:b,children:t.jsx(h,{objectType:m,filterDefinitions:o,...r})})}};function Br(e){const n=je(),r=i.useMemo(()=>n(m).where({department:"Marketing"}),[n]),o=i.useMemo(()=>[Pe,Z],[]);return t.jsx("div",{style:b,children:t.jsx(h,{objectType:m,objectSet:r,filterDefinitions:o,...e})})}const ie={parameters:{docs:{description:{story:"Pass an `objectSet` prop to scope filter aggregations to a subset of objects. Here the object set is filtered to Marketing department employees, so the listogram counts reflect only that subset."},source:{code:`const client = useOsdkClient();
const objectSet = client(Employee).where({ department: "Marketing" });

<FilterList
  objectType={Employee}
  objectSet={objectSet}
  filterDefinitions={[
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:e=>t.jsx(Br,{...e})};function Hr(e){const n=i.useMemo(()=>[J,Pe,{...Rn,isVisible:!1},{...Ln,isVisible:!1},{...Me,isVisible:!1},{...Z,isVisible:!1}],[]);return t.jsx("div",{style:b,children:t.jsx(h,{objectType:m,filterDefinitions:n,addFilterMode:"uncontrolled",...e})})}const oe={args:{showResetButton:!0},parameters:{docs:{source:{code:`const filterDefinitions = [
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
/>`}}},render:e=>t.jsx(Hr,{...e})};function Yr(e){const[n,r]=i.useState(void 0),o=e.onFilterClauseChanged,s=i.useCallback(c=>{r(c),o==null||o(c)},[o]);return t.jsxs("div",{style:P,children:[t.jsx("div",{style:b,children:t.jsx(h,{objectType:m,filterDefinitions:V,...e,filterClause:n,onFilterClauseChanged:s})}),t.jsxs("div",{style:W,children:[t.jsx("strong",{children:"Filter Clause (JSON):"}),t.jsx("pre",{style:z,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const se={parameters:{docs:{description:{story:"All filter component types with a controlled where clause. Hover filter items to reveal search and exclude actions."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>`}}},render:e=>t.jsx(Yr,{...e})},le={args:{title:"Employee Filters"},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  titleIcon={<svg>...</svg>}
/>`}}},render:({objectType:e,objectSet:n,...r})=>t.jsx("div",{style:b,children:t.jsx(h,{objectType:m,filterDefinitions:V,titleIcon:_n,...r})})};function Gr(e){const n=e.onReset,r=i.useCallback(()=>{console.log("Reset clicked"),n==null||n()},[n]);return t.jsx("div",{style:b,children:t.jsx(h,{objectType:m,filterDefinitions:V,...e,onReset:r})})}const ae={args:{showResetButton:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showResetButton={true}
  onReset={() => console.log("Reset clicked")}
/>`}}},render:e=>t.jsx(Gr,{...e})},ce={args:{showActiveFilterCount:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showActiveFilterCount={true}
/>`}}},render:({objectType:e,objectSet:n,...r})=>t.jsx("div",{style:b,children:t.jsx(h,{objectType:m,filterDefinitions:V,...r})})},de={args:{enableSorting:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  enableSorting={true}
/>`}}},render:({objectType:e,objectSet:n,...r})=>t.jsx("div",{style:b,children:t.jsx(h,{objectType:m,filterDefinitions:V,...r})})};function Wr(e){return t.jsx("div",{style:b,children:t.jsx(h,{objectType:m,filterDefinitions:V,...e})})}const pe={args:{title:"Employee Filters",showActiveFilterCount:!0},parameters:{docs:{description:{story:"Click the collapse button to minimize the filter panel. Active filter count is shown in the collapsed state."},source:{code:`const [collapsed, setCollapsed] = useState(false);

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  collapsed={collapsed}
  onCollapsedChange={setCollapsed}
  showActiveFilterCount={true}
/>`}}},render:e=>{const[,n]=vn(),r=e.onCollapsedChange,o=i.useCallback(s=>{n({collapsed:s}),r==null||r(s)},[n,r]);return t.jsx(Wr,{...e,onCollapsedChange:o})}},ue={parameters:{docs:{source:{code:`const filterDefinitions = [
  { type: "KEYWORD_SEARCH", properties: ["fullName", "department", "jobTitle", "locationCity"], label: "Search" },
  { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:({objectType:e,objectSet:n,...r})=>{const o=i.useMemo(()=>[{type:"KEYWORD_SEARCH",properties:["fullName","department","jobTitle","locationCity"],label:"Search"},J,Z],[]);return t.jsx("div",{style:b,children:t.jsx(h,{objectType:m,filterDefinitions:o,...r})})}};function Ur(e){const n=i.useMemo(()=>[{type:"PROPERTY",id:"department-no-color",key:"department",label:"Department (default colors)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]),r=i.useMemo(()=>[{type:"PROPERTY",id:"department-color",key:"department",label:"Department (custom colors)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},colorMap:{Marketing:"#e74c3c",Operations:"#2ecc71",Finance:"#3498db",Product:"#f39c12"}}],[]);return t.jsxs("div",{style:P,children:[t.jsx("div",{style:b,children:t.jsx(h,{objectType:m,filterDefinitions:n,...e})}),t.jsx("div",{style:b,children:t.jsx(h,{objectType:m,filterDefinitions:r,...e})})]})}const me={parameters:{docs:{source:{code:`// Without colorMap: all bars use the default theme color
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

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>t.jsx(Ur,{...e})},jn={Marketing:"Marketing Dept.",Operations:"Ops Team",Finance:"Finance & Accounting",Product:"Product Group"};function Xr(e){const n=i.useMemo(()=>[{type:"PROPERTY",id:"department-default",key:"department",label:"Department (default)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]),r=i.useMemo(()=>[{type:"PROPERTY",id:"department-custom",key:"department",label:"Department (custom render)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},renderValue:o=>jn[o]??o},{type:"PROPERTY",id:"team-custom",key:"team",label:"Team (custom render)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},renderValue:o=>o.toUpperCase()}],[]);return t.jsxs("div",{style:P,children:[t.jsx("div",{style:b,children:t.jsx(h,{objectType:m,filterDefinitions:n,...e})}),t.jsx("div",{style:b,children:t.jsx(h,{objectType:m,filterDefinitions:r,...e})})]})}const fe={parameters:{docs:{description:{story:"Use `renderValue` to customize how filter values are displayed and searched. The returned string replaces the raw value for display and search matching. Works with LISTOGRAM, MULTI_SELECT, and SINGLE_SELECT components."},source:{code:`const DEPARTMENT_LABELS = {
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

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>t.jsx(Xr,{...e})},Kr={Marketing:"#f97316",Operations:"#3b82f6",Finance:"#10b981",Product:"#a855f7"},$r={display:"inline-flex",alignItems:"center",gap:8},zr={display:"inline-block",width:10,height:10,borderRadius:"50%",flexShrink:0};function Jr({value:e}){const n=Kr[e]??"#94a3b8";return t.jsxs("span",{style:$r,children:[t.jsx("span",{style:{...zr,background:n}}),t.jsx("span",{children:jn[e]??e})]})}function Qr(e){const n=i.useMemo(()=>[{type:"PROPERTY",id:"department-swatch",key:"department",label:"Department (JSX)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},renderValue:r=>t.jsx(Jr,{value:r})},{type:"PROPERTY",id:"team-link",key:"team",label:"Team (anchor JSX)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},renderValue:r=>t.jsx("a",{href:`#/team/${encodeURIComponent(r)}`,onClick:o=>o.preventDefault(),style:{color:"#2563eb",textDecoration:"underline"},children:r})}],[]);return t.jsx("div",{style:b,children:t.jsx(h,{objectType:m,filterDefinitions:n,...e})})}const ye={parameters:{docs:{description:{story:"`renderValue` may return any `ReactNode`, not just a string. Use this to render avatars, anchors, status pills, or any custom JSX inside listogram rows, dropdown items, and chips. When the function returns non-string JSX, search matching falls back to the raw value."},source:{code:`const filterDefinitions = [
  {
    type: "PROPERTY",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
    renderValue: (value) => <DepartmentSwatch value={value} />,
  },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>t.jsx(Qr,{...e})};function qr(e){const n=i.useMemo(()=>[{type:"PROPERTY",id:"dept-full",key:"department",label:"full: label + bar + count",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"full"}}],[]),r=i.useMemo(()=>[{type:"PROPERTY",id:"dept-count",key:"department",label:"count: label + count (no bar)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"count"}}],[]),o=i.useMemo(()=>[{type:"PROPERTY",id:"dept-minimal",key:"department",label:"minimal: label only",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"}}],[]);return t.jsxs("div",{style:P,children:[t.jsx("div",{style:b,children:t.jsx(h,{objectType:m,filterDefinitions:n,...e})}),t.jsx("div",{style:b,children:t.jsx(h,{objectType:m,filterDefinitions:r,...e})}),t.jsx("div",{style:b,children:t.jsx(h,{objectType:m,filterDefinitions:o,...e})})]})}const Ce={parameters:{docs:{source:{code:`// "full" (default): label + colored bar + count number
// "count": label + count number (no bar)
// "minimal": label only (no bar, no count)

const filterDefinitions = [
  { ..., listogramConfig: { displayMode: "full" } },
  { ..., listogramConfig: { displayMode: "count" } },
  { ..., listogramConfig: { displayMode: "minimal" } },
];`}}},render:e=>t.jsx(qr,{...e})};function Zr(e){const n=i.useMemo(()=>[{type:"PROPERTY",id:"dept-with-count",key:"department",label:"Department (counts visible)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},{type:"PROPERTY",id:"team-with-count",key:"team",label:"Team (counts visible)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}}],[]),r=i.useMemo(()=>[{type:"PROPERTY",id:"dept-no-count",key:"department",label:"Department (counts hidden)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},showCount:!1},{type:"PROPERTY",id:"team-no-count",key:"team",label:"Team (counts hidden)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},showCount:!1}],[]);return t.jsxs("div",{style:P,children:[t.jsx("div",{style:b,children:t.jsx(h,{objectType:m,filterDefinitions:n,...e})}),t.jsx("div",{style:b,children:t.jsx(h,{objectType:m,filterDefinitions:r,...e})})]})}const he={parameters:{docs:{description:{story:"Use `showCount: false` on individual filter definitions to hide aggregation counts in LISTOGRAM and MULTI_SELECT inputs. Bar visualizations in LISTOGRAM are preserved."},source:{code:`// showCount defaults to true; set false to hide counts per filter
const filterDefinitions = [
  { ..., filterComponent: "LISTOGRAM", showCount: false },
  { ..., filterComponent: "MULTI_SELECT", showCount: false },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>t.jsx(Zr,{...e})};function ei(e){const n=i.useMemo(()=>[{type:"PROPERTY",id:"department-checkbox",key:"department",label:"Department",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},{type:"PROPERTY",id:"team-checkbox",key:"team",label:"Team",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]);return t.jsx("div",{style:b,children:t.jsx(h,{objectType:m,filterDefinitions:n,...e})})}const Se={parameters:{docs:{description:{story:"Listogram rows always include a checkbox for multi-select. Selecting values checks the checkbox and highlights the row. Use the exclude toggle (three-dot menu) to invert selections."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:e=>t.jsx(ei,{...e})};function ti(e){const[n,r]=i.useState(V),o=e.onFilterRemoved,s=i.useCallback(c=>{r(d=>d.filter(a=>"key"in a?a.key!==c:!0)),o==null||o(c)},[o]);return t.jsx("div",{style:b,children:t.jsx(h,{objectType:m,filterDefinitions:n,...e,onFilterRemoved:s})})}const Ee={name:"Removable Filters",args:{title:"Removable Filters",showActiveFilterCount:!0},parameters:{docs:{description:{story:"When `onFilterRemoved` is provided, each filter item shows a remove button (X) on hover. Clicking it removes the filter from the list."},source:{code:`const [definitions, setDefinitions] = useState(filterDefinitions);

const handleFilterRemoved = (filterKey) => {
  setDefinitions(prev => prev.filter(def => def.key !== filterKey));
};

<FilterList
  objectType={Employee}
  filterDefinitions={definitions}
  onFilterRemoved={handleFilterRemoved}
  title="Removable Filters"
/>`}}},render:e=>t.jsx(ti,{...e})};function ni(e){const[n,r]=i.useState(void 0),o=i.useMemo(()=>[{type:"STATIC_VALUES",key:"department",label:"Department (static)",filterComponent:"LISTOGRAM",values:["Marketing","Operations","Finance","Product"],filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"}},{type:"STATIC_VALUES",key:"locationCity",label:"Office Location",filterComponent:"SINGLE_SELECT",values:["New York","San Francisco","London","Tokyo"],filterState:{type:"SELECT",selectedValues:[]}},{type:"STATIC_VALUES",key:"team",label:"Team (multi-select)",filterComponent:"MULTI_SELECT",values:["Alpha","Beta","Gamma","Delta"],filterState:{type:"SELECT",selectedValues:[]}},{type:"STATIC_VALUES",id:"custom-status",key:"status",label:"Status (custom clause)",filterComponent:"LISTOGRAM",values:["Active","Inactive"],filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"},toWhereClause:d=>{if(d.type!=="EXACT_MATCH"||d.values.length===0)return;const a=d.values,f=a.includes("Active"),y=a.includes("Inactive");if(f&&y)return{$or:[{employeeStatus:"Active"},{employeeStatus:"Inactive"}]};if(f)return{employeeStatus:"Active"};if(y)return{employeeStatus:"Inactive"}}}],[]),s=e.onFilterClauseChanged,c=i.useCallback(d=>{r(d),s==null||s(d)},[s]);return t.jsxs("div",{style:P,children:[t.jsx("div",{style:b,children:t.jsx(h,{objectType:m,filterDefinitions:o,...e,filterClause:n,onFilterClauseChanged:c})}),t.jsxs("div",{style:W,children:[t.jsx("strong",{children:"Filter Clause (JSON):"}),t.jsx("pre",{style:z,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const Te={parameters:{docs:{description:{story:"Use `STATIC_VALUES` filter definitions to provide a fixed list of values instead of fetching from OSDK aggregation. Supports LISTOGRAM, SINGLE_SELECT, MULTI_SELECT, and TEXT_TAGS components. Optionally provide a `toWhereClause` function for custom clause generation."},source:{code:`const filterDefinitions = [
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
/>`}}},render:e=>t.jsx(ni,{...e})};function ri(e){const[n,r]=i.useState(void 0),[o,s]=i.useState(V),c=e.onFilterRemoved,d=i.useCallback(v=>{s(R=>R.filter(_=>"key"in _?_.key!==v:!0)),c==null||c(v)},[c]),a=e.onReset,f=i.useCallback(()=>{s(V),a==null||a()},[a]),y=e.onFilterClauseChanged,S=i.useCallback(v=>{r(v),y==null||y(v)},[y]);return t.jsxs("div",{style:Fn,children:[t.jsx("div",{style:An,children:t.jsx(h,{objectType:m,filterDefinitions:o,titleIcon:_n,...e,onReset:f,onFilterRemoved:d,filterClause:n,onFilterClauseChanged:S})}),t.jsx("div",{style:W,children:t.jsx(gn,{objectType:m,filter:n})})]})}const be={name:"Full Featured",args:{title:"Employee Filters",showResetButton:!0,showActiveFilterCount:!0,enableSorting:!0},parameters:{docs:{description:{story:"Demonstrates all filter list features together: collapse, reset, active count, sorting, removable filters, per-filter search, exclude toggle, and controlled where clause driving an ObjectTable."},source:{code:`// All features combined: collapse, sort, search, exclude, remove, reset

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
/>`}}},render:e=>{const[,n]=vn(),r=e.onCollapsedChange,o=i.useCallback(s=>{n({collapsed:s}),r==null||r(s)},[n,r]);return t.jsx(ri,{...e,onCollapsedChange:o})}};function ii(e){const n=je(),r=i.useMemo(()=>n(m),[n]),[o,s]=i.useState(void 0),c=i.useMemo(()=>[{type:"HAS_LINK",linkName:"lead",label:"Has Manager",filterState:{type:"hasLink",hasLink:!1}},{type:"LINKED_PROPERTY",linkName:"lead",reverseLinkName:"peeps",linkedPropertyKey:"department",linkedFilterComponent:"MULTI_SELECT",linkedFilterState:{type:"SELECT",selectedValues:[]},filterState:{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:[]}},label:"Manager Department"}],[]),d=e.onFilterClauseChanged,a=i.useCallback(f=>{s(f),d==null||d(f)},[d]);return t.jsxs("div",{style:P,children:[t.jsx("div",{style:b,children:t.jsx(h,{objectType:m,objectSet:r,filterDefinitions:c,...e,filterClause:o,onFilterClauseChanged:a})}),t.jsxs("div",{style:W,children:[t.jsx("strong",{children:"Filter Clause (JSON):"}),t.jsx("p",{children:"Note: LINKED_PROPERTY filter is not applied through where clause"}),t.jsx("pre",{style:z,children:o?JSON.stringify(o,null,2):"(no active filters)"})]})]})}const ge={name:"Linked Property Filters",parameters:{docs:{description:{story:"Demonstrates filtering on properties of linked objects. HAS_LINK filters objects based on whether they have a linked object. LINKED_PROPERTY filters on a property of the linked object and exposes the same overflow (…) controls as direct property filters — the inline Keeping/Excluding dropdown and Clear all."},source:{code:`// HAS_LINK and LINKED_PROPERTY filter definitions
const filterDefinitions = [
  {
    type: "HAS_LINK",
    linkName: "lead",
    label: "Has Manager",
    filterState: { type: "hasLink", hasLink: false },
  },
  {
    type: "LINKED_PROPERTY",
    linkName: "lead",
    reverseLinkName: "peeps",
    linkedPropertyKey: "department",
    linkedFilterComponent: "MULTI_SELECT",
    linkedFilterState: { type: "SELECT", selectedValues: [] },
    filterState: {
      type: "linkedProperty",
      linkedFilterState: { type: "SELECT", selectedValues: [] },
    },
    label: "Manager Department",
  },
];

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>`}}},render:e=>t.jsx(ii,{...e})},oi={type:"PROPERTY",id:"combined-department",key:"department",label:"Department",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},si={type:"PROPERTY",id:"combined-locationCity",key:"locationCity",label:"Location City",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}},li={type:"LINKED_PROPERTY",id:"combined-lead-name",linkName:"lead",reverseLinkName:"peeps",linkedPropertyKey:"fullName",linkedFilterComponent:"MULTI_SELECT",linkedFilterState:{type:"SELECT",selectedValues:[]},filterState:{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:[]}},searchField:!1,label:"Manager Name"},ai=[li,oi,si],ci=[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"locationCity"}},{locator:{type:"rdp",id:"managerName",creator:e=>e.pivotTo("lead").selectProperty("fullName")},renderHeader:()=>"Manager Name",renderCell:e=>"managerName"in e?t.jsx("span",{children:e.managerName}):t.jsx("span",{style:{color:"#999"},children:"No Manager"})}];function di(e){const n=je(),r=i.useMemo(()=>n(m),[n]),[o,s]=i.useState(void 0),[c,d]=i.useState(r),a=e.onFilterClauseChanged,f=i.useCallback(y=>{s(y),a==null||a(y)},[a]);return t.jsxs("div",{style:Fn,children:[t.jsx("div",{style:An,children:t.jsx(h,{...e,objectType:m,objectSet:r,filterDefinitions:ai,filterClause:o,onFilterClauseChanged:f,onEffectiveObjectSet:d,showFilteredOutValues:!0})}),t.jsx("div",{style:W,children:t.jsx(gn,{objectType:m,objectSet:c,columnDefinitions:ci})})]})}const ve={name:"Combined with Object Table",parameters:{docs:{description:{story:'A linked filter (Manager Name) and direct property filters coexist in one FilterList alongside an ObjectTable. Pass the unfiltered scope as `objectSet`; FilterList applies the linked-filter narrowing internally and emits the fully-narrowed `ObjectSet` via `onEffectiveObjectSet` for the table. The table surfaces the linked manager via a derived-property `Manager Name` column (`pivotTo("lead").selectProperty("fullName")`). With `showFilteredOutValues`, direct-facet values absent under the active linked filter render as greyed-out count=0 filtered-out rows.'},source:{code:`const baseObjectSet = useMemo(() => client(Employee), [client]);
const [effectiveObjectSet, setEffectiveObjectSet] = useState(baseObjectSet);

const filterDefinitions: FilterDefinitionUnion<Employee>[] = [
  {
    type: "LINKED_PROPERTY",
    id: "combined-lead-name",
    linkName: "lead",
    reverseLinkName: "peeps",
    linkedPropertyKey: "fullName",
    linkedFilterComponent: "MULTI_SELECT",
    linkedFilterState: { type: "SELECT", selectedValues: [] },
    filterState: {
      type: "linkedProperty",
      linkedFilterState: { type: "SELECT", selectedValues: [] },
    },
    searchField: false,
    label: "Manager Name",
  },
  {
    type: "PROPERTY",
    id: "combined-department",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
  },
  {
    type: "PROPERTY",
    id: "combined-locationCity",
    key: "locationCity",
    label: "Location City",
    filterComponent: "MULTI_SELECT",
    filterState: { type: "SELECT", selectedValues: [] },
  },
];

type RDPs = { managerName: "string" };
const columnDefinitions: ColumnDefinition<Employee, RDPs>[] = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  { locator: { type: "property", id: "locationCity" } },
  {
    locator: {
      type: "rdp",
      id: "managerName",
      creator: (baseObjectSet) =>
        baseObjectSet.pivotTo("lead").selectProperty("fullName"),
    },
    renderHeader: () => "Manager Name",
    renderCell: (object) =>
      "managerName" in object
        ? <span>{object.managerName}</span>
        : <span style={{ color: "#999" }}>No Manager</span>,
  },
];

<FilterList
  objectType={Employee}
  objectSet={baseObjectSet}
  filterDefinitions={filterDefinitions}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
  onEffectiveObjectSet={setEffectiveObjectSet}
  showFilteredOutValues
/>
<ObjectTable
  objectType={Employee}
  objectSet={effectiveObjectSet}
  columnDefinitions={columnDefinitions}
/>`}}},render:e=>t.jsx(di,{...e})};function pi({filterState:e,onFilterStateChanged:n}){const r=i.useCallback(s=>{const c=s.target.value;n({type:"custom",customState:{value:c}})},[n]),o=i.useCallback(()=>{n({type:"custom",customState:{value:""}})},[n]);return t.jsxs("div",{style:{padding:"12px 0",display:"flex",gap:"8px"},children:[t.jsx("input",{type:"text",value:e.customState.value,onChange:r,placeholder:"Enter name substring...",style:{flex:1,padding:"6px 8px",fontSize:"14px",border:"1px solid #ccc",borderRadius:"4px"}}),e.customState.value&&t.jsx("button",{onClick:o,style:{padding:"6px 12px",fontSize:"12px",backgroundColor:"#f5f5f5",border:"1px solid #ccc",borderRadius:"4px",cursor:"pointer"},children:"Clear"})]})}function ui(e){const[n,r]=i.useState(void 0),o=i.useMemo(()=>[{type:"CUSTOM",key:"custom-name-contains",label:"Name Contains",filterComponent:"CUSTOM",filterState:{type:"custom",customState:{value:""}},renderInput:({filterState:d,onFilterStateChanged:a})=>t.jsx(pi,{filterState:d,onFilterStateChanged:a}),toWhereClause:d=>{var f;const a=(f=d.customState)==null?void 0:f.value;if(a)return{fullName:{$containsAnyTerm:a}}}}],[]),s=e.onFilterClauseChanged,c=i.useCallback(d=>{r(d),s==null||s(d)},[s]);return t.jsxs("div",{style:P,children:[t.jsx("div",{style:b,children:t.jsx(h,{objectType:m,filterDefinitions:o,...e,filterClause:n,onFilterClauseChanged:c})}),t.jsxs("div",{style:W,children:[t.jsx("strong",{children:"Filter Clause (JSON):"}),t.jsx("pre",{style:z,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const Re={name:"Custom Filters",parameters:{docs:{description:{story:"Custom filters provide full control over filtering logic and UI. The 'Name Contains' filter uses `renderInput` for a simple custom input. "},source:{code:`// Custom filter with renderInput
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
/>`}}},render:e=>t.jsx(ui,{...e})},mi={type:"PROPERTY",id:"department-multi",key:"department",label:"Department",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}},fi={type:"PROPERTY",id:"department-single",key:"department",label:"Department (single)",filterComponent:"SINGLE_SELECT",filterState:{type:"SELECT",selectedValues:[]}},yi=[J,mi,fi,Me],Le={name:"No value rendering",parameters:{docs:{description:{story:"Empty/null filter values render via the canonical `<NoValueLabel />` component — italic, muted, with the literal text 'No value' — across listogram buckets, single-select dropdown options, multi-select dropdown options, and multi-select chips. The mock dataset includes one Employee with `department: \"\"` so the No value row is visible in the listogram."}}},render:()=>t.jsx("div",{style:b,children:t.jsx(h,{objectType:m,filterDefinitions:yi})})},Ci={type:"PROPERTY",id:"locationCity-single",key:"locationCity",label:"Location City (single)",filterComponent:"SINGLE_SELECT",filterState:{type:"SELECT",selectedValues:[]}},hi={type:"LINKED_PROPERTY",linkName:"lead",reverseLinkName:"peeps",linkedPropertyKey:"department",linkedFilterComponent:"MULTI_SELECT",linkedFilterState:{type:"SELECT",selectedValues:[]},filterState:{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:[]}},label:"Manager Department (linked multi)"},Si={type:"LINKED_PROPERTY",linkName:"lead",reverseLinkName:"peeps",linkedPropertyKey:"locationCity",linkedFilterComponent:"SINGLE_SELECT",linkedFilterState:{type:"SELECT",selectedValues:[]},filterState:{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:[]}},label:"Manager City (linked single)"},Ei=new Map([["department",{type:"EXACT_MATCH",values:["Marketing","Research"]}],["jobTitle-multi",{type:"SELECT",selectedValues:["Marketing Manager","Chief Scientist"]}],["locationCity-single",{type:"SELECT",selectedValues:["Berlin"]}],["linkedProperty:lead:department",{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:["Marketing","Research"]}}],["linkedProperty:lead:locationCity",{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:["Berlin"]}}]]),Ti=[J,xe,Ci,hi,Si];function bi(e){const n=je(),r=i.useMemo(()=>n(m),[n]),[o,s]=i.useState(void 0),c=i.useCallback(d=>{s(d)},[]);return t.jsxs("div",{style:P,children:[t.jsx("div",{style:b,children:t.jsx(h,{...e,objectType:m,objectSet:r,filterDefinitions:Ti,initialFilterStates:Ei,onFilterClauseChanged:c})}),t.jsxs("div",{style:W,children:[t.jsx("h4",{children:"Active where clause"}),t.jsx("pre",{style:z,children:o?JSON.stringify(o,null,2):"(none)"})]})]})}const Fe={name:"With initial filter states",parameters:{docs:{description:{story:"Pass `initialFilterStates` to hydrate filters from saved state (e.g. localStorage or URL params). Selections are restored on mount, including values that currently have zero matching rows — they appear with a count of 0 so users can see and clear them. Demonstrated across LISTOGRAM, MULTI_SELECT, SINGLE_SELECT, and LINKED_PROPERTY filters."},source:{code:`// "Research", "Chief Scientist", and "Berlin" are not in the current
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
/>`}}},render:e=>t.jsx(bi,{...e})},Xe=[J,xe],gi=new Map([["department",{type:"EXACT_MATCH",values:["Engineering"]}],["jobTitle-multi",{type:"SELECT",selectedValues:["Software Engineer"]}]]);function Ke(e){const n=[...e.keys()].sort(),r={};for(const o of n){const s=e.get(o);s!==void 0&&(r[o]=s)}return JSON.stringify(r,null,2)}function Mn({initialFilterStates:e,storyArgs:n}){const r=i.useMemo(()=>{const y=new Map;for(const S of Xe)S.type==="PROPERTY"&&S.filterState&&y.set(K(S),S.filterState);if(e)for(const[S,v]of e)y.set(S,v);return y},[e]),[o,s]=i.useState(()=>new Map(r)),c=n.onFilterStateChanged,d=i.useCallback((y,S)=>{s(v=>{const R=new Map(v);return R.set(K(y),S),R}),c==null||c(y,S)},[c]),a=n.onReset,f=i.useCallback(()=>{s(new Map(r)),a==null||a()},[a,r]);return t.jsxs("div",{style:P,children:[t.jsx("div",{style:b,children:t.jsx(h,{...n,objectType:m,filterDefinitions:Xe,initialFilterStates:e,showResetButton:!0,onFilterStateChanged:d,onReset:f})}),t.jsxs("div",{style:W,children:[t.jsx("h4",{children:"Filter state dump"}),t.jsx("pre",{"data-testid":"filter-state-dump",style:z,children:Ke(o)}),t.jsx("h4",{children:"Initial snapshot"}),t.jsx("pre",{"data-testid":"filter-state-initial",style:z,children:Ke(r)})]})]})}function vi(e){return t.jsx(Mn,{storyArgs:e})}const Ae={args:{showResetButton:!0},parameters:{docs:{description:{story:"Reset button is disabled-by-default until the user diverges from the initial (empty string) snapshot. After clicking reset the filter state returns to the initial snapshot and the button disables itself again."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showResetButton={true}
/>`}}},render:e=>t.jsx(vi,{...e})};function Ri(e){return t.jsx(Mn,{storyArgs:e,initialFilterStates:gi})}const _e={args:{showResetButton:!0},parameters:{docs:{description:{story:"Reset button stays disabled on mount even though there are active selections, because the live filter state matches the initial snapshot. Changing a selection enables the button; clicking it restores the initial snapshot, not an empty state."},source:{code:`const savedStates = new Map([
  ["department", { type: "EXACT_MATCH", values: ["Engineering"] }],
  ["jobTitle-multi", { type: "SELECT", selectedValues: ["Software Engineer"] }],
]);

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  initialFilterStates={savedStates}
  showResetButton={true}
/>`}}},render:e=>t.jsx(Ri,{...e})};var $e,ze,Je;ne.parameters={...ne.parameters,docs:{...($e=ne.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Je=(ze=ne.parameters)==null?void 0:ze.docs)==null?void 0:Je.source}}};var Qe,qe,Ze;re.parameters={...re.parameters,docs:{...(Qe=re.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(Ze=(qe=re.parameters)==null?void 0:qe.docs)==null?void 0:Ze.source}}};var et,tt,nt;ie.parameters={...ie.parameters,docs:{...(et=ie.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(nt=(tt=ie.parameters)==null?void 0:tt.docs)==null?void 0:nt.source}}};var rt,it,ot;oe.parameters={...oe.parameters,docs:{...(rt=oe.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(ot=(it=oe.parameters)==null?void 0:it.docs)==null?void 0:ot.source}}};var st,lt,at;se.parameters={...se.parameters,docs:{...(st=se.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(at=(lt=se.parameters)==null?void 0:lt.docs)==null?void 0:at.source}}};var ct,dt,pt;le.parameters={...le.parameters,docs:{...(ct=le.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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
}`,...(pt=(dt=le.parameters)==null?void 0:dt.docs)==null?void 0:pt.source}}};var ut,mt,ft;ae.parameters={...ae.parameters,docs:{...(ut=ae.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(ft=(mt=ae.parameters)==null?void 0:mt.docs)==null?void 0:ft.source}}};var yt,Ct,ht;ce.parameters={...ce.parameters,docs:{...(yt=ce.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
}`,...(ht=(Ct=ce.parameters)==null?void 0:Ct.docs)==null?void 0:ht.source}}};var St,Et,Tt;de.parameters={...de.parameters,docs:{...(St=de.parameters)==null?void 0:St.docs,source:{originalSource:`{
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
}`,...(Tt=(Et=de.parameters)==null?void 0:Et.docs)==null?void 0:Tt.source}}};var bt,gt,vt;pe.parameters={...pe.parameters,docs:{...(bt=pe.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(vt=(gt=pe.parameters)==null?void 0:gt.docs)==null?void 0:vt.source}}};var Rt,Lt,Ft;ue.parameters={...ue.parameters,docs:{...(Rt=ue.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
}`,...(Ft=(Lt=ue.parameters)==null?void 0:Lt.docs)==null?void 0:Ft.source}}};var At,_t,jt;me.parameters={...me.parameters,docs:{...(At=me.parameters)==null?void 0:At.docs,source:{originalSource:`{
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
}`,...(jt=(_t=me.parameters)==null?void 0:_t.docs)==null?void 0:jt.source}}};var Mt,kt,Dt;fe.parameters={...fe.parameters,docs:{...(Mt=fe.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
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
}`,...(Dt=(kt=fe.parameters)==null?void 0:kt.docs)==null?void 0:Dt.source}}};var It,Ot,Nt;ye.parameters={...ye.parameters,docs:{...(It=ye.parameters)==null?void 0:It.docs,source:{originalSource:`{
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
}`,...(Nt=(Ot=ye.parameters)==null?void 0:Ot.docs)==null?void 0:Nt.source}}};var Pt,xt,wt;Ce.parameters={...Ce.parameters,docs:{...(Pt=Ce.parameters)==null?void 0:Pt.docs,source:{originalSource:`{
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
}`,...(wt=(xt=Ce.parameters)==null?void 0:xt.docs)==null?void 0:wt.source}}};var Vt,Bt,Ht;he.parameters={...he.parameters,docs:{...(Vt=he.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
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
}`,...(Ht=(Bt=he.parameters)==null?void 0:Bt.docs)==null?void 0:Ht.source}}};var Yt,Gt,Wt;Se.parameters={...Se.parameters,docs:{...(Yt=Se.parameters)==null?void 0:Yt.docs,source:{originalSource:`{
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
}`,...(Wt=(Gt=Se.parameters)==null?void 0:Gt.docs)==null?void 0:Wt.source}}};var Ut,Xt,Kt;Ee.parameters={...Ee.parameters,docs:{...(Ut=Ee.parameters)==null?void 0:Ut.docs,source:{originalSource:`{
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
}`,...(Kt=(Xt=Ee.parameters)==null?void 0:Xt.docs)==null?void 0:Kt.source}}};var $t,zt,Jt;Te.parameters={...Te.parameters,docs:{...($t=Te.parameters)==null?void 0:$t.docs,source:{originalSource:`{
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
}`,...(Jt=(zt=Te.parameters)==null?void 0:zt.docs)==null?void 0:Jt.source}}};var Qt,qt,Zt;be.parameters={...be.parameters,docs:{...(Qt=be.parameters)==null?void 0:Qt.docs,source:{originalSource:`{
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
}`,...(Zt=(qt=be.parameters)==null?void 0:qt.docs)==null?void 0:Zt.source}}};var en,tn,nn;ge.parameters={...ge.parameters,docs:{...(en=ge.parameters)==null?void 0:en.docs,source:{originalSource:`{
  name: "Linked Property Filters",
  parameters: {
    docs: {
      description: {
        story: "Demonstrates filtering on properties of linked objects. " + "HAS_LINK filters objects based on whether they have a linked object. " + "LINKED_PROPERTY filters on a property of the linked object and " + "exposes the same overflow (…) controls as direct property filters — " + "the inline Keeping/Excluding dropdown and Clear all."
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
  {
    type: "LINKED_PROPERTY",
    linkName: "lead",
    reverseLinkName: "peeps",
    linkedPropertyKey: "department",
    linkedFilterComponent: "MULTI_SELECT",
    linkedFilterState: { type: "SELECT", selectedValues: [] },
    filterState: {
      type: "linkedProperty",
      linkedFilterState: { type: "SELECT", selectedValues: [] },
    },
    label: "Manager Department",
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
}`,...(nn=(tn=ge.parameters)==null?void 0:tn.docs)==null?void 0:nn.source}}};var rn,on,sn;ve.parameters={...ve.parameters,docs:{...(rn=ve.parameters)==null?void 0:rn.docs,source:{originalSource:`{
  name: "Combined with Object Table",
  parameters: {
    docs: {
      description: {
        story: "A linked filter (Manager Name) and direct property filters coexist in " + "one FilterList alongside an ObjectTable. Pass the unfiltered scope as " + "\`objectSet\`; FilterList applies the linked-filter narrowing internally " + "and emits the fully-narrowed \`ObjectSet\` via \`onEffectiveObjectSet\` for " + "the table. The table surfaces the linked manager via a derived-property " + "\`Manager Name\` column (\`pivotTo(\\"lead\\").selectProperty(\\"fullName\\")\`). " + "With \`showFilteredOutValues\`, direct-facet values absent under the " + "active linked filter render as greyed-out count=0 filtered-out rows."
      },
      source: {
        code: \`const baseObjectSet = useMemo(() => client(Employee), [client]);
const [effectiveObjectSet, setEffectiveObjectSet] = useState(baseObjectSet);

const filterDefinitions: FilterDefinitionUnion<Employee>[] = [
  {
    type: "LINKED_PROPERTY",
    id: "combined-lead-name",
    linkName: "lead",
    reverseLinkName: "peeps",
    linkedPropertyKey: "fullName",
    linkedFilterComponent: "MULTI_SELECT",
    linkedFilterState: { type: "SELECT", selectedValues: [] },
    filterState: {
      type: "linkedProperty",
      linkedFilterState: { type: "SELECT", selectedValues: [] },
    },
    searchField: false,
    label: "Manager Name",
  },
  {
    type: "PROPERTY",
    id: "combined-department",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
  },
  {
    type: "PROPERTY",
    id: "combined-locationCity",
    key: "locationCity",
    label: "Location City",
    filterComponent: "MULTI_SELECT",
    filterState: { type: "SELECT", selectedValues: [] },
  },
];

type RDPs = { managerName: "string" };
const columnDefinitions: ColumnDefinition<Employee, RDPs>[] = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  { locator: { type: "property", id: "locationCity" } },
  {
    locator: {
      type: "rdp",
      id: "managerName",
      creator: (baseObjectSet) =>
        baseObjectSet.pivotTo("lead").selectProperty("fullName"),
    },
    renderHeader: () => "Manager Name",
    renderCell: (object) =>
      "managerName" in object
        ? <span>{object.managerName}</span>
        : <span style={{ color: "#999" }}>No Manager</span>,
  },
];

<FilterList
  objectType={Employee}
  objectSet={baseObjectSet}
  filterDefinitions={filterDefinitions}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
  onEffectiveObjectSet={setEffectiveObjectSet}
  showFilteredOutValues
/>
<ObjectTable
  objectType={Employee}
  objectSet={effectiveObjectSet}
  columnDefinitions={columnDefinitions}
/>\`
      }
    }
  },
  render: args => <CombinedWithObjectTableStory {...args} />
}`,...(sn=(on=ve.parameters)==null?void 0:on.docs)==null?void 0:sn.source}}};var ln,an,cn;Re.parameters={...Re.parameters,docs:{...(ln=Re.parameters)==null?void 0:ln.docs,source:{originalSource:`{
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
}`,...(cn=(an=Re.parameters)==null?void 0:an.docs)==null?void 0:cn.source}}};var dn,pn,un;Le.parameters={...Le.parameters,docs:{...(dn=Le.parameters)==null?void 0:dn.docs,source:{originalSource:`{
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
}`,...(un=(pn=Le.parameters)==null?void 0:pn.docs)==null?void 0:un.source}}};var mn,fn,yn;Fe.parameters={...Fe.parameters,docs:{...(mn=Fe.parameters)==null?void 0:mn.docs,source:{originalSource:`{
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
}`,...(yn=(fn=Fe.parameters)==null?void 0:fn.docs)==null?void 0:yn.source}}};var Cn,hn,Sn;Ae.parameters={...Ae.parameters,docs:{...(Cn=Ae.parameters)==null?void 0:Cn.docs,source:{originalSource:`{
  args: {
    showResetButton: true
  },
  parameters: {
    docs: {
      description: {
        story: "Reset button is disabled-by-default until the user diverges from " + "the initial (empty string) snapshot. After clicking reset the filter " + "state returns to the initial snapshot and the button disables " + "itself again."
      },
      source: {
        code: \`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showResetButton={true}
/>\`
      }
    }
  },
  render: args => <WithResetButtonEmptyInitialStory {...args} />
}`,...(Sn=(hn=Ae.parameters)==null?void 0:hn.docs)==null?void 0:Sn.source}}};var En,Tn,bn;_e.parameters={..._e.parameters,docs:{...(En=_e.parameters)==null?void 0:En.docs,source:{originalSource:`{
  args: {
    showResetButton: true
  },
  parameters: {
    docs: {
      description: {
        story: "Reset button stays disabled on mount even though there are active " + "selections, because the live filter state matches the initial " + "snapshot. Changing a selection enables the button; clicking it " + "restores the initial snapshot, not an empty state."
      },
      source: {
        code: \`const savedStates = new Map([
  ["department", { type: "EXACT_MATCH", values: ["Engineering"] }],
  ["jobTitle-multi", { type: "SELECT", selectedValues: ["Software Engineer"] }],
]);

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  initialFilterStates={savedStates}
  showResetButton={true}
/>\`
      }
    }
  },
  render: args => <WithResetButtonNonEmptyInitialStory {...args} />
}`,...(bn=(Tn=_e.parameters)==null?void 0:Tn.docs)==null?void 0:bn.source}}};const Fo=["Default","IntegerNumberRangeRounding","WithObjectSet","AddFilterMode","WithAllFilterTypes","WithTitleAndIcon","WithResetButton","WithActiveFilterCount","WithSorting","CollapsiblePanel","KeywordSearch","WithColorMap","WithRenderValue","WithRenderValueAsReactNode","WithListogramDisplayModes","WithHiddenCounts","WithCheckbox","WithRemovableFilters","WithStaticValues","FullFeatured","WithLinkedPropertyFilters","CombinedWithObjectTable","WithCustomFilters","NoValueRendering","WithInitialFilterStates","WithResetButtonEmptyInitial","WithResetButtonNonEmptyInitial"];export{oe as AddFilterMode,pe as CollapsiblePanel,ve as CombinedWithObjectTable,ne as Default,be as FullFeatured,re as IntegerNumberRangeRounding,ue as KeywordSearch,Le as NoValueRendering,ce as WithActiveFilterCount,se as WithAllFilterTypes,Se as WithCheckbox,me as WithColorMap,Re as WithCustomFilters,he as WithHiddenCounts,Fe as WithInitialFilterStates,ge as WithLinkedPropertyFilters,Ce as WithListogramDisplayModes,ie as WithObjectSet,Ee as WithRemovableFilters,fe as WithRenderValue,ye as WithRenderValueAsReactNode,ae as WithResetButton,Ae as WithResetButtonEmptyInitial,_e as WithResetButtonNonEmptyInitial,de as WithSorting,Te as WithStaticValues,le as WithTitleAndIcon,Fo as __namedExportsOrder,Lo as default};
