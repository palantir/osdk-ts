var wn=Object.defineProperty;var Vn=(e,n,r)=>n in e?wn(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r;var Oe=(e,n,r)=>Vn(e,typeof n!="symbol"?n+"":n,r);import{r as i,R as s,f as Bn,j as t}from"./iframe-BzNCj-A2.js";import{S as Wn}from"./MultiColumnSortDialog-BygAA1fb.js";import{b as Hn,s as Gn,c as Yn,f as Un,d as O,S as Xn,R as Ye,O as Kn,e as zn,C as $n,E as Jn,h as Qn,i as qn,g as J,u as Zn,a as Ue,F as er,j as tr}from"./getFilterLabel-BLJUXERD.js";import{c as X}from"./index-DDBmyy0C.js";import{u as nr,b as rr,c as Xe,P as ir,s as or,K as lr,d as sr,a as ar,e as cr,f as dr,g as ur,v as pr,h as mr}from"./DraggableList-DwLyt4vk.js";import{B as w}from"./Button-ChlEPOBB.js";import{I as fr}from"./Input-BiN9jzD_.js";import{w as yr}from"./withOsdkMetrics-DuFBe2LN.js";import{O as Ae}from"./object-table-DYn4UNQD.js";import{E as u}from"./Employee-BAk2o20h.js";import{u as je}from"./useOsdkClient-nssii9vk.js";import"./preload-helper-CsxyAYTe.js";import"./ActionButton-BoP40rto.js";import"./Dialog-I8TBdt_d.js";import"./cross-B5r2S1Ow.js";import"./svgIconContainer-CGUAQ75z.js";import"./useBaseUiId-BjARRAXf.js";import"./InternalBackdrop-BHy86gHm.js";import"./composite-zukRcom8.js";import"./index-BTfzs6VV.js";import"./index-br0iDOVq.js";import"./index-BAWQzv7R.js";import"./MenuTrigger-CCmw9grt.js";import"./CompositeItem-B0wxNO5S.js";import"./ToolbarRootContext-Bx5GjjCG.js";import"./getDisabledMountTransitionStyles-BYN5t52y.js";import"./getPseudoElementBounds-DaiQ1qM0.js";import"./caret-down-SEW8I41f.js";import"./Switch-m1u1_DOF.js";import"./toNumber-DIvi5yI4.js";import"./PopoverPopup-DfX7osuD.js";import"./useValueChanged-Ax2Nvv6n.js";import"./useControlled-CGt_jbUL.js";import"./assertUnreachable-tCT10eXl.js";import"./index-ClnMgKgk.js";import"./Checkbox-4jGrud6k.js";import"./minus-GzB9cO4M.js";import"./SkeletonBar-BGZETuAa.js";import"./makeExternalStore-xjyYS5uW.js";import"./chevron-down-DJp9wTkG.js";import"./small-cross-CssHaIdJ.js";import"./useRegisterUserAgent-Bb8-0TgG.js";import"./Table-PfsQKN5O.js";import"./LoadingCell-CiXTucbX.js";import"./ColumnConfigDialog-By65ZLsF.js";import"./CollapsiblePanel-C7ckELnE.js";import"./index-BMMSkjFc.js";import"./error-B8qNIRT3.js";import"./Tooltip-BQJIDAI2.js";import"./useEventCallback-DBg6mCvs.js";const V={filterList:"FilterList-module__filterList___wmzCNbkH",filterListCollapsed:"FilterList-module__filterListCollapsed___CGrK9txF",expandedContent:"FilterList-module__expandedContent___aEk2i2At",scrollableContent:"FilterList-module__scrollableContent___F3O1nfAo",hiddenContent:"FilterList-module__hiddenContent___PHKe-yWc",expandButton:"FilterList-module__expandButton___-QlY8-ot",collapsedLabel:"FilterList-module__collapsedLabel___QA0UtRts",addButtonContainer:"FilterList-module__addButtonContainer___kq300FEV",addButton:"FilterList-module__addButton___oD4yvwyZ"},Z={content:"FilterListContent-module__content___fG0EgVp6",dragOverlay:"FilterListContent-module__dragOverlay___Tjd1YpmI"},Ie={errorContainer:"ErrorBoundary-module__errorContainer___FIguBDDu",errorMessage:"ErrorBoundary-module__errorMessage___jUsXUqFA",retryButton:"ErrorBoundary-module__retryButton___PZVWZOm7"};class Cr extends i.Component{constructor(){super(...arguments);Oe(this,"state",{hasError:!1,error:null});Oe(this,"handleRetry",()=>{this.setState({hasError:!1,error:null})})}static getDerivedStateFromError(r){return{hasError:!0,error:r}}componentDidCatch(r,o){var l,c;console.error("[ErrorBoundary]",r),console.error("[ErrorBoundary] Component stack:",o.componentStack),(c=(l=this.props).onError)==null||c.call(l,r)}render(){return this.state.hasError?this.props.fallback?this.props.fallback:s.createElement("div",{className:Ie.errorContainer},s.createElement("p",{className:Ie.errorMessage},this.props.errorMessage??"Something went wrong"),s.createElement(w,{className:Ie.retryButton,onClick:this.handleRetry,"aria-label":"Retry"},"Retry")):this.props.children}}function hr(){return s.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true"},s.createElement("circle",{cx:"5.5",cy:"3.5",r:"1.5"}),s.createElement("circle",{cx:"10.5",cy:"3.5",r:"1.5"}),s.createElement("circle",{cx:"5.5",cy:"8",r:"1.5"}),s.createElement("circle",{cx:"10.5",cy:"8",r:"1.5"}),s.createElement("circle",{cx:"5.5",cy:"12.5",r:"1.5"}),s.createElement("circle",{cx:"10.5",cy:"12.5",r:"1.5"}))}function xe(){return xe=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var o in r)({}).hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},xe.apply(null,arguments)}function Sr({definition:e,filterKey:n,label:r,filterState:o,onFilterStateChanged:l,onFilterRemoved:c,renderInput:d,searchField:a,dragHandleAttributes:h,dragHandleListeners:T,className:A,style:L}){const[v,C]=i.useState({type:"closed"}),[D,M]=i.useState(!1),p=i.useCallback(R=>{l(n,R)},[n,l]),m=i.useCallback(()=>{C(R=>R.type==="closed"?{type:"open",query:""}:{type:"closed"})},[]),y=i.useCallback(R=>{C({type:"open",query:R.target.value})},[]),F=i.useCallback(()=>{C({type:"open",query:""})},[]),k=i.useCallback(()=>{c==null||c(n)},[n,c]),x=i.useCallback(()=>{M(R=>!R)},[]),H=i.useCallback(R=>{R==null||R.focus({preventScroll:!0})},[]),P=i.useMemo(()=>Hn(o),[o]),G=Gn(P),E=Yn(P)&&a!==!1,g=Un(o),b=v.type==="open",_=v.type==="open"?v.query:"",N=v.type==="open"?v.query:void 0;return s.createElement("div",{className:X(O.filterItem,A),style:L,"data-has-selection":g||void 0},s.createElement("div",{className:O.itemHeader},h&&s.createElement(w,xe({className:O.dragHandle,"aria-label":`Reorder ${r}`},h,T),s.createElement(hr,null)),s.createElement("span",{className:O.itemLabel},r),E&&s.createElement(w,{className:O.headerActionButton,onClick:m,"aria-label":"Search values","aria-pressed":b},s.createElement(Xn,null)),c&&s.createElement(w,{className:O.headerActionButton,onClick:k,"aria-label":`Remove ${r} filter`},s.createElement(Ye,null)),G&&s.createElement(w,{className:O.headerActionButton,onClick:x,"aria-label":"More actions","aria-pressed":D},s.createElement(Kn,null))),b&&s.createElement("div",{className:O.searchRow},s.createElement(fr,{type:"text",className:O.searchInput,value:_,onChange:y,placeholder:"Search property values...","aria-label":"Search property values",ref:H}),_&&s.createElement(w,{type:"button",className:O.searchClearButton,onClick:F,"aria-label":"Clear search"},s.createElement(Ye,null))),s.createElement("div",{className:O.itemContent},s.createElement(Cr,{errorMessage:"Error loading filter"},d({definition:e,filterKey:n,filterState:o,onFilterStateChanged:p,searchQuery:N,excludeRowOpen:D}))))}const Pe=i.memo(Sr);function br({id:e,definition:n,filterKey:r,label:o,filterState:l,onFilterStateChanged:c,onFilterRemoved:d,renderInput:a,searchField:h}){const{attributes:T,listeners:A,setNodeRef:L,transform:v,transition:C,isDragging:D}=nr({id:e}),M=i.useMemo(()=>({transform:rr.Transform.toString(v),transition:C??void 0}),[v,C]);return s.createElement("div",{ref:L,style:M,className:X(D&&O.dragging)},s.createElement(Pe,{definition:n,filterKey:r,label:o,filterState:l,onFilterStateChanged:c,onFilterRemoved:d,renderInput:a,searchField:h,dragHandleAttributes:T,dragHandleListeners:A}))}const Tr=i.memo(br),Er=({transform:e})=>({...e,x:0}),gr={distance:8},vr=[Er],Fr={role:"button",tabIndex:-1,"aria-disabled":!0,"aria-pressed":void 0,"aria-roledescription":"sortable","aria-describedby":""};function Rr({filterDefinitions:e,filterStates:n,onFilterStateChanged:r,onFilterRemoved:o,onOrderChange:l,renderInput:c,getFilterKey:d,getFilterLabel:a,enableSorting:h,className:T,style:A}){const[L,v]=i.useState(null),C=i.useMemo(()=>h&&e?e.map(E=>d(E)):[],[h,e,d]),D=Xe(ir,{activationConstraint:gr}),M=Xe(lr,{coordinateGetter:or}),p=sr(D,M),m=L!=null?C.indexOf(String(L)):-1,y=m>=0&&e?e[m]:void 0,F=i.useMemo(()=>y?d(y):void 0,[y,d]),k=i.useCallback(E=>{v(E.active.id)},[]),x=i.useCallback(E=>{v(null);const{active:g,over:b}=E;if(!b||g.id===b.id)return;const _=C.indexOf(String(g.id)),N=C.indexOf(String(b.id));if(_!==-1&&N!==-1){const R=ar(C,_,N);l==null||l(R)}},[C,l]),H=i.useCallback(()=>{v(null)},[]),P=i.useMemo(()=>{const E=g=>{const b=C.indexOf(String(g)),_=b>=0?e==null?void 0:e[b]:void 0;return _?a(_):"filter"};return{onDragStart({active:g}){return`Picked up ${E(g.id)} filter`},onDragOver({over:g}){return g?`Moved to position ${C.indexOf(String(g.id))+1} of ${C.length}`:"Not over a droppable area"},onDragEnd({active:g,over:b}){const _=E(g.id);if(b&&g.id!==b.id){const N=C.indexOf(String(b.id));return`Dropped ${_} filter at position ${N+1}`}return`Dropped ${_} filter back in its original position`},onDragCancel({active:g}){return`Cancelled dragging ${E(g.id)} filter`}}},[e,C,a]),G=i.useMemo(()=>({announcements:P}),[P]);return!e||e.length===0?s.createElement("div",{className:X(Z.content,T),style:A,"data-empty":"true"}):h?s.createElement("div",{className:X(Z.content,T),style:A},s.createElement(cr,{sensors:p,collisionDetection:dr,modifiers:vr,onDragStart:k,onDragEnd:x,onDragCancel:H,accessibility:G},s.createElement(ur,{items:C,strategy:pr},e.map((E,g)=>{const b=C[g],_=d(E),N=a(E),R=n.get(_);return s.createElement(Tr,{key:b,id:b,definition:E,filterKey:_,label:N,filterState:R,onFilterStateChanged:r,onFilterRemoved:o,renderInput:c,searchField:E.searchField})})),s.createElement(mr,{dropAnimation:null,className:Z.dragOverlay},y&&F&&s.createElement(Pe,{definition:y,filterKey:F,label:a(y),filterState:n.get(F),onFilterStateChanged:r,onFilterRemoved:o,renderInput:c,searchField:y.searchField,dragHandleAttributes:Fr})))):s.createElement("div",{className:X(Z.content,T),style:A},e.map(E=>{const g=d(E),b=n.get(g);return s.createElement(Pe,{key:g,definition:E,filterKey:g,label:a(E),filterState:b,onFilterStateChanged:r,onFilterRemoved:o,renderInput:c,searchField:E.searchField})}))}const Y={header:"FilterListHeader-module__header___dkKc0CO-",titleContainer:"FilterListHeader-module__titleContainer___KaePpQIx",title:"FilterListHeader-module__title___xqfWfSzK",titleIcon:"FilterListHeader-module__titleIcon___MQy-dec8",activeCount:"FilterListHeader-module__activeCount___GyBsnsQL",actions:"FilterListHeader-module__actions___YZA7zmGc",collapseButton:"FilterListHeader-module__collapseButton___N1-sj3B3",resetButton:"FilterListHeader-module__resetButton___jLcUypov"};function Lr({title:e,titleIcon:n,collapsed:r=!1,onCollapsedChange:o,showResetButton:l,onReset:c,showActiveFilterCount:d,activeFilterCount:a=0,hasVisibilityChanges:h=!1}){const T=i.useCallback(()=>{o==null||o(!r)},[o,r]);return s.createElement("div",{className:Y.header},s.createElement("div",{className:Y.titleContainer},n&&s.createElement("span",{className:Y.titleIcon},n),e&&s.createElement("span",{className:Y.title},e),d&&a>0&&s.createElement("span",{className:Y.activeCount},"(",a,")")),s.createElement("div",{className:Y.actions},l&&s.createElement(w,{className:Y.resetButton,onClick:c,disabled:a===0&&!h},s.createElement(zn,null)," Reset filters"),o!=null&&s.createElement(w,{className:Y.collapseButton,onClick:T,"aria-expanded":!r,"aria-label":r?"Expand filters":"Collapse filters"},s.createElement($n,null))))}const Ar=i.memo(Lr);function jr(e){const{title:n,titleIcon:r,collapsed:o=!1,onCollapsedChange:l,filterDefinitions:c,filterStates:d,onFilterStateChanged:a,renderInput:h,getFilterKey:T,getFilterLabel:A,activeFilterCount:L,onReset:v,onFilterAdded:C,onFilterRemoved:D,onOrderChange:M,showResetButton:p=!1,showActiveFilterCount:m=!1,hasVisibilityChanges:y,enableSorting:F,className:k,renderAddFilterButton:x}=e,[H,P]=i.useState(null),G=i.useCallback(()=>{l==null||l(!1)},[l]),E=o&&l!=null;return s.createElement("div",{className:X(V.filterList,k)},E&&s.createElement("div",{className:V.filterListCollapsed,"data-collapsed":"true"},s.createElement(w,{className:V.expandButton,onClick:G,"aria-label":"Expand filters"},s.createElement(Jn,null)),s.createElement("span",{className:V.collapsedLabel},n??"Filters")),s.createElement("div",{ref:P,className:X(V.expandedContent,E&&V.hiddenContent),"data-active-count":L},s.createElement(Qn,{value:H},(n||r||p||m||l)&&s.createElement(Ar,{title:n,titleIcon:r,collapsed:o,onCollapsedChange:l,showResetButton:p,onReset:v,showActiveFilterCount:m,activeFilterCount:L,hasVisibilityChanges:y}),s.createElement("div",{className:V.scrollableContent},s.createElement(Rr,{filterDefinitions:c,filterStates:d,onFilterStateChanged:a,onFilterRemoved:D,onOrderChange:M,renderInput:h,getFilterKey:T,getFilterLabel:A,enableSorting:F})),(x!=null||C!=null)&&s.createElement("div",{className:V.addButtonContainer},x?x():s.createElement(w,{type:"button",className:V.addButton,onClick:C},"+ Add filter")))))}const _r={trigger:"AddFilterPopover-module__trigger___8QQBrzPo"};function Mr({hiddenDefinitions:e,onShowFilter:n,renderTrigger:r}){const o=qn();return s.createElement(Wn,{items:e,onItemSelected:n,trigger:r!=null?r():"+ Add filter",triggerClassName:r==null?_r.trigger:void 0,searchPlaceholder:"Search filters",emptyMessage:"No matching filters",collisionBoundary:o})}const kr=i.memo(Mr);function Dr(e,n){const r=i.useMemo(()=>(e==null?void 0:e.map(J))??[],[e]),o=i.useMemo(()=>(e==null?void 0:e.filter(p=>p.isVisible!==!1).map(J))??[],[e]),[l,c]=i.useState(()=>o);i.useEffect(()=>{c(o)},[o]);const d=i.useRef(n);d.current=n;const a=i.useCallback(p=>{if(!d.current)return;const m=new Set(p),y=r.filter(F=>!m.has(F));d.current(p,y)},[r]),h=i.useMemo(()=>{const p=new Map;if(e==null)return p;for(const m of e)p.set(J(m),m);return p},[e]),{visibleDefinitions:T,hiddenDefinitions:A}=i.useMemo(()=>{if(e==null)return{visibleDefinitions:[],hiddenDefinitions:[]};const p=new Set(l),m=[],y=[];for(const F of l){const k=h.get(F);k!=null&&m.push(k)}for(const F of r)if(!p.has(F)){const k=h.get(F);k!=null&&y.push(k)}return{visibleDefinitions:m,hiddenDefinitions:y}},[e,h,l,r]),L=i.useCallback(p=>{c(m=>{if(m.includes(p))return m;const y=[...m,p];return a(y),y})},[a]),v=i.useCallback(p=>{c(m=>{const y=m.filter(F=>F!==p);return a(y),y})},[a]),C=i.useCallback(p=>{c(m=>p.length===m.length&&p.every((y,F)=>y===m[F])?m:(a(p),p))},[a]),D=i.useCallback(()=>{c(p=>o.length===p.length&&o.every((m,y)=>m===p[y])?p:(a(o),o))},[o,a]),M=i.useMemo(()=>l.length!==o.length?!0:!l.every((p,m)=>p===o[m]),[l,o]);return{visibleDefinitions:T,hiddenDefinitions:A,showFilter:L,hideFilter:v,reorderVisible:C,hasVisibilityChanges:M,resetVisibility:D}}const Or={},Ir=[];function xr(e){const{objectType:n,objectSet:r,title:o,titleIcon:l,collapsed:c,onCollapsedChange:d,filterDefinitions:a,addFilterMode:h="uncontrolled",showResetButton:T=!1,onReset:A,showActiveFilterCount:L=!1,showFilteredOutValues:v=!1,className:C,enableSorting:D,onFilterAdded:M,onFilterRemoved:p,onFilterVisibilityChange:m,renderAddFilterButton:y}=e,{filterStates:F,setFilterState:k,clearFilterState:x,perFilterWhereClauses:H,perFilterLinkedFilters:P,perFilterDerivedNarrowings:G,activeFilterCount:E,reset:g}=Zn(e),b=h==="uncontrolled",_=i.useCallback((j,z)=>{if(!m)return;const De=[...j.map($=>({filterKey:$,isVisible:!0})),...z.map($=>({filterKey:$,isVisible:!1}))];m(De)},[m]),{visibleDefinitions:N,hiddenDefinitions:R,showFilter:we,hideFilter:Ve,reorderVisible:Be,hasVisibilityChanges:An,resetVisibility:We}=Dr(a,b?_:void 0),jn=i.useCallback(()=>{g(),We(),A==null||A()},[g,We,A]),_n=i.useMemo(()=>{if(a!=null)return a.filter(j=>j.isVisible!==!1)},[a]),Mn=b?N:_n,kn=i.useCallback(j=>{x(j),b&&Ve(j),p==null||p(j)},[x,b,Ve,p]),He=i.useCallback(j=>{we(j),M==null||M(j,a??[])},[we,M,a]),Dn=i.useCallback(j=>{Be(j)},[Be]),Ge=i.useMemo(()=>R.map(j=>({key:J(j),label:Ue(j)})),[R]),On=i.useMemo(()=>b?R.length===0?void 0:()=>s.createElement(kr,{hiddenDefinitions:Ge,onShowFilter:He,renderTrigger:y}):y,[b,R.length,Ge,He,y]),In=b?kn:p,xn=i.useCallback(({definition:j,filterKey:z,filterState:De,onFilterStateChanged:$,searchQuery:Pn,excludeRowOpen:Nn})=>s.createElement(er,{objectType:n,objectSet:r,definition:j,filterState:De,onFilterStateChanged:$,whereClause:H.get(z)??Or,linkedFilters:P.get(z)??tr,derivedNarrowings:G.get(z)??Ir,showFilteredOutValues:v,searchQuery:Pn,excludeRowOpen:Nn}),[n,r,H,P,G,v]);return s.createElement(jr,{title:o,titleIcon:l,collapsed:c,onCollapsedChange:d,filterDefinitions:Mn,filterStates:F,onFilterStateChanged:k,renderInput:xn,getFilterKey:J,getFilterLabel:Ue,activeFilterCount:E,onReset:jn,showResetButton:T,showActiveFilterCount:L,hasVisibilityChanges:An,enableSorting:D,onFilterRemoved:In,onOrderChange:Dn,className:C,renderAddFilterButton:On})}const f=yr(xr,"FilterList"),{useArgs:En}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:U}=__STORYBOOK_MODULE_TEST__,K={type:"PROPERTY",id:"department",key:"department",label:"Department",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},Ne={type:"PROPERTY",id:"team",key:"team",label:"Team",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},gn={type:"PROPERTY",id:"fullName",key:"fullName",label:"Full Name",filterComponent:"CONTAINS_TEXT",filterState:{type:"CONTAINS_TEXT"}},vn={type:"PROPERTY",id:"firstFullTimeStartDate",key:"firstFullTimeStartDate",label:"Start Date",filterComponent:"DATE_RANGE",filterState:{type:"DATE_RANGE"},clickToFilter:!0},_e={type:"PROPERTY",id:"employeeNumber",key:"employeeNumber",label:"Employee Number",filterComponent:"NUMBER_RANGE",filterState:{type:"NUMBER_RANGE"},clickToFilter:!0},Q={type:"PROPERTY",id:"locationCity",key:"locationCity",label:"Location City",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},Fn={type:"PROPERTY",id:"jobTitle-multi",key:"jobTitle",label:"Job Title",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}},I=[K,Ne,gn,vn,Fn,_e,Q],S={width:320,height:600},B={display:"flex",gap:16},W={flex:1},q={marginTop:8,padding:12,background:"#f5f5f5",borderRadius:4,fontSize:12,overflow:"auto",maxHeight:560},Me={display:"flex",gap:16,height:600},ke={width:320,flexShrink:0},Rn=t.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:t.jsx("path",{d:"M1 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1.5a1 1 0 0 1-.293.707L10 8.914V13a1 1 0 0 1-.553.894l-2 1A1 1 0 0 1 6 14v-5.086L1.293 4.207A1 1 0 0 1 1 3.5V2z"})}),ho={title:"Components/FilterList",component:f,tags:["beta"],args:{title:"Filters",enableSorting:!1,showResetButton:!1,showActiveFilterCount:!1,collapsed:!1,onFilterClauseChanged:U(),onFilterStateChanged:U(),onFilterAdded:U(),onFilterRemoved:U(),onFilterVisibilityChange:U(),onCollapsedChange:U(),onReset:U()},parameters:{msw:{handlers:[...Bn.handlers]},controls:{expanded:!0}},argTypes:{objectType:{description:"The object type definition for the objects being filtered",control:!1},objectSet:{description:"Optional object set to scope aggregation queries",control:!1},filterDefinitions:{description:"Array of filter definitions. If not provided, all filterable properties are auto-discovered.",control:!1},title:{description:"Title displayed in the filter list header",control:"text"},titleIcon:{description:"Icon displayed next to the title",control:!1},filterClause:{description:"The current where clause. If provided, the filter clause is controlled.",control:!1},onFilterClauseChanged:{description:"Called when the filter clause changes. Required in controlled mode.",control:!1,table:{category:"Events"}},onFilterStateChanged:{description:"Called when an individual filter's state changes",control:!1,table:{category:"Events"}},enableSorting:{description:"Enable drag-and-drop reordering of filters",control:"boolean",table:{defaultValue:{summary:"false"}}},collapsed:{description:"Whether the filter list panel is collapsed",control:"boolean"},onCollapsedChange:{description:"Called when the collapsed state changes",control:!1,table:{category:"Events"}},showResetButton:{description:"Show reset filters button in header",control:"boolean",table:{defaultValue:{summary:"false"}}},onReset:{description:"Called when the reset button is clicked",control:!1,table:{category:"Events"}},showActiveFilterCount:{description:"Show count of active filters in header",control:"boolean",table:{defaultValue:{summary:"false"}}},onFilterAdded:{description:"Called when a filter is added. If provided, users can add filters.",control:!1,table:{category:"Events"}},onFilterRemoved:{description:"Called when a filter is removed. If provided, users can remove filters.",control:!1,table:{category:"Events"}},onFilterVisibilityChange:{description:"Called when filter visibility or ordering changes (reorder, add, remove).",control:!1,table:{category:"Events"}},addFilterMode:{description:'Controls how filter add/remove is managed. "uncontrolled" manages visibility internally; "controlled" leaves it to the consumer.',control:"select",options:["controlled","uncontrolled"],table:{category:"Advanced",defaultValue:{summary:'"uncontrolled"'}}},renderAddFilterButton:{description:"Custom render function for the add filter button.",control:!1,table:{category:"Advanced"}},initialFilterStates:{description:"Initial filter states for hydrating from external storage. Merged over definition defaults on mount.",control:!1,table:{category:"Advanced"}},className:{description:"Additional CSS class name",control:"text"}}},ee={parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:({objectType:e,objectSet:n,...r})=>{const o=i.useMemo(()=>[K,Q],[]);return t.jsx("div",{style:S,children:t.jsx(f,{objectType:u,filterDefinitions:o,...r})})}},te={parameters:{docs:{description:{story:"Repro for the integer-typed `NUMBER_RANGE` rounding fix. `employeeNumber` is an `integer` property, so histogram bucket boundaries — `(maxValue - minValue) / 20` — are usually fractional. Click any bar in the histogram. The Min/Max boxes must show whole integers (e.g. `657495073`), not fractional values (e.g. `657495073.4`)."}}},render:({objectType:e,objectSet:n,...r})=>{const o=i.useMemo(()=>[_e],[]);return t.jsx("div",{style:S,children:t.jsx(f,{objectType:u,filterDefinitions:o,...r})})}};function Pr(e){const n=je(),r=i.useMemo(()=>n(u).where({department:"Marketing"}),[n]),o=i.useMemo(()=>[Ne,Q],[]);return t.jsx("div",{style:S,children:t.jsx(f,{objectType:u,objectSet:r,filterDefinitions:o,...e})})}const ne={parameters:{docs:{description:{story:"Pass an `objectSet` prop to scope filter aggregations to a subset of objects. Here the object set is filtered to Marketing department employees, so the listogram counts reflect only that subset."},source:{code:`const client = useOsdkClient();
const objectSet = client(Employee).where({ department: "Marketing" });

<FilterList
  objectType={Employee}
  objectSet={objectSet}
  filterDefinitions={[
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:e=>t.jsx(Pr,{...e})};function Nr(e){const n=i.useMemo(()=>[K,Ne,{...gn,isVisible:!1},{...vn,isVisible:!1},{..._e,isVisible:!1},{...Q,isVisible:!1}],[]);return t.jsx("div",{style:S,children:t.jsx(f,{objectType:u,filterDefinitions:n,addFilterMode:"uncontrolled",...e})})}const re={args:{showResetButton:!0},parameters:{docs:{source:{code:`const filterDefinitions = [
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
/>`}}},render:e=>t.jsx(Nr,{...e})};function wr(e){const[n,r]=i.useState(void 0),o=e.onFilterClauseChanged,l=i.useCallback(c=>{r(c),o==null||o(c)},[o]);return t.jsxs("div",{style:B,children:[t.jsx("div",{style:S,children:t.jsx(f,{objectType:u,filterDefinitions:I,...e,filterClause:n,onFilterClauseChanged:l})}),t.jsxs("div",{style:W,children:[t.jsx("strong",{children:"Filter Clause (JSON):"}),t.jsx("pre",{style:q,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const ie={parameters:{docs:{description:{story:"All filter component types with a controlled where clause. Hover filter items to reveal search and exclude actions."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>`}}},render:e=>t.jsx(wr,{...e})},oe={args:{title:"Employee Filters"},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  titleIcon={<svg>...</svg>}
/>`}}},render:({objectType:e,objectSet:n,...r})=>t.jsx("div",{style:S,children:t.jsx(f,{objectType:u,filterDefinitions:I,titleIcon:Rn,...r})})};function Vr(e){const n=e.onReset,r=i.useCallback(()=>{console.log("Reset clicked"),n==null||n()},[n]);return t.jsx("div",{style:S,children:t.jsx(f,{objectType:u,filterDefinitions:I,...e,onReset:r})})}const le={args:{showResetButton:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showResetButton={true}
  onReset={() => console.log("Reset clicked")}
/>`}}},render:e=>t.jsx(Vr,{...e})},se={args:{showActiveFilterCount:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showActiveFilterCount={true}
/>`}}},render:({objectType:e,objectSet:n,...r})=>t.jsx("div",{style:S,children:t.jsx(f,{objectType:u,filterDefinitions:I,...r})})},ae={args:{enableSorting:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  enableSorting={true}
/>`}}},render:({objectType:e,objectSet:n,...r})=>t.jsx("div",{style:S,children:t.jsx(f,{objectType:u,filterDefinitions:I,...r})})};function Br(e){return t.jsx("div",{style:S,children:t.jsx(f,{objectType:u,filterDefinitions:I,...e})})}const ce={args:{title:"Employee Filters",showActiveFilterCount:!0},parameters:{docs:{description:{story:"Click the collapse button to minimize the filter panel. Active filter count is shown in the collapsed state."},source:{code:`const [collapsed, setCollapsed] = useState(false);

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  collapsed={collapsed}
  onCollapsedChange={setCollapsed}
  showActiveFilterCount={true}
/>`}}},render:e=>{const[,n]=En(),r=e.onCollapsedChange,o=i.useCallback(l=>{n({collapsed:l}),r==null||r(l)},[n,r]);return t.jsx(Br,{...e,onCollapsedChange:o})}},de={parameters:{docs:{source:{code:`const filterDefinitions = [
  { type: "KEYWORD_SEARCH", properties: ["fullName", "department", "jobTitle", "locationCity"], label: "Search" },
  { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:({objectType:e,objectSet:n,...r})=>{const o=i.useMemo(()=>[{type:"KEYWORD_SEARCH",properties:["fullName","department","jobTitle","locationCity"],label:"Search"},K,Q],[]);return t.jsx("div",{style:S,children:t.jsx(f,{objectType:u,filterDefinitions:o,...r})})}};function Wr(e){const n=i.useMemo(()=>[{type:"PROPERTY",id:"department-no-color",key:"department",label:"Department (default colors)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]),r=i.useMemo(()=>[{type:"PROPERTY",id:"department-color",key:"department",label:"Department (custom colors)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},colorMap:{Marketing:"#e74c3c",Operations:"#2ecc71",Finance:"#3498db",Product:"#f39c12"}}],[]);return t.jsxs("div",{style:B,children:[t.jsx("div",{style:S,children:t.jsx(f,{objectType:u,filterDefinitions:n,...e})}),t.jsx("div",{style:S,children:t.jsx(f,{objectType:u,filterDefinitions:r,...e})})]})}const ue={parameters:{docs:{source:{code:`// Without colorMap: all bars use the default theme color
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

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>t.jsx(Wr,{...e})},Ln={Marketing:"Marketing Dept.",Operations:"Ops Team",Finance:"Finance & Accounting",Product:"Product Group"};function Hr(e){const n=i.useMemo(()=>[{type:"PROPERTY",id:"department-default",key:"department",label:"Department (default)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]),r=i.useMemo(()=>[{type:"PROPERTY",id:"department-custom",key:"department",label:"Department (custom render)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},renderValue:o=>Ln[o]??o},{type:"PROPERTY",id:"team-custom",key:"team",label:"Team (custom render)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},renderValue:o=>o.toUpperCase()}],[]);return t.jsxs("div",{style:B,children:[t.jsx("div",{style:S,children:t.jsx(f,{objectType:u,filterDefinitions:n,...e})}),t.jsx("div",{style:S,children:t.jsx(f,{objectType:u,filterDefinitions:r,...e})})]})}const pe={parameters:{docs:{description:{story:"Use `renderValue` to customize how filter values are displayed and searched. The returned string replaces the raw value for display and search matching. Works with LISTOGRAM, MULTI_SELECT, and SINGLE_SELECT components."},source:{code:`const DEPARTMENT_LABELS = {
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

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>t.jsx(Hr,{...e})},Gr={Marketing:"#f97316",Operations:"#3b82f6",Finance:"#10b981",Product:"#a855f7"},Yr={display:"inline-flex",alignItems:"center",gap:8},Ur={display:"inline-block",width:10,height:10,borderRadius:"50%",flexShrink:0};function Xr({value:e}){const n=Gr[e]??"#94a3b8";return t.jsxs("span",{style:Yr,children:[t.jsx("span",{style:{...Ur,background:n}}),t.jsx("span",{children:Ln[e]??e})]})}function Kr(e){const n=i.useMemo(()=>[{type:"PROPERTY",id:"department-swatch",key:"department",label:"Department (JSX)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},renderValue:r=>t.jsx(Xr,{value:r})},{type:"PROPERTY",id:"team-link",key:"team",label:"Team (anchor JSX)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},renderValue:r=>t.jsx("a",{href:`#/team/${encodeURIComponent(r)}`,onClick:o=>o.preventDefault(),style:{color:"#2563eb",textDecoration:"underline"},children:r})}],[]);return t.jsx("div",{style:S,children:t.jsx(f,{objectType:u,filterDefinitions:n,...e})})}const me={parameters:{docs:{description:{story:"`renderValue` may return any `ReactNode`, not just a string. Use this to render avatars, anchors, status pills, or any custom JSX inside listogram rows, dropdown items, and chips. When the function returns non-string JSX, search matching falls back to the raw value."},source:{code:`const filterDefinitions = [
  {
    type: "PROPERTY",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
    renderValue: (value) => <DepartmentSwatch value={value} />,
  },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>t.jsx(Kr,{...e})};function zr(e){const n=i.useMemo(()=>[{type:"PROPERTY",id:"dept-full",key:"department",label:"full: label + bar + count",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"full"}}],[]),r=i.useMemo(()=>[{type:"PROPERTY",id:"dept-count",key:"department",label:"count: label + count (no bar)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"count"}}],[]),o=i.useMemo(()=>[{type:"PROPERTY",id:"dept-minimal",key:"department",label:"minimal: label only",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"}}],[]);return t.jsxs("div",{style:B,children:[t.jsx("div",{style:S,children:t.jsx(f,{objectType:u,filterDefinitions:n,...e})}),t.jsx("div",{style:S,children:t.jsx(f,{objectType:u,filterDefinitions:r,...e})}),t.jsx("div",{style:S,children:t.jsx(f,{objectType:u,filterDefinitions:o,...e})})]})}const fe={parameters:{docs:{source:{code:`// "full" (default): label + colored bar + count number
// "count": label + count number (no bar)
// "minimal": label only (no bar, no count)

const filterDefinitions = [
  { ..., listogramConfig: { displayMode: "full" } },
  { ..., listogramConfig: { displayMode: "count" } },
  { ..., listogramConfig: { displayMode: "minimal" } },
];`}}},render:e=>t.jsx(zr,{...e})};function $r(e){const n=i.useMemo(()=>[{type:"PROPERTY",id:"dept-with-count",key:"department",label:"Department (counts visible)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},{type:"PROPERTY",id:"team-with-count",key:"team",label:"Team (counts visible)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}}],[]),r=i.useMemo(()=>[{type:"PROPERTY",id:"dept-no-count",key:"department",label:"Department (counts hidden)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},showCount:!1},{type:"PROPERTY",id:"team-no-count",key:"team",label:"Team (counts hidden)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},showCount:!1}],[]);return t.jsxs("div",{style:B,children:[t.jsx("div",{style:S,children:t.jsx(f,{objectType:u,filterDefinitions:n,...e})}),t.jsx("div",{style:S,children:t.jsx(f,{objectType:u,filterDefinitions:r,...e})})]})}const ye={parameters:{docs:{description:{story:"Use `showCount: false` on individual filter definitions to hide aggregation counts in LISTOGRAM and MULTI_SELECT inputs. Bar visualizations in LISTOGRAM are preserved."},source:{code:`// showCount defaults to true; set false to hide counts per filter
const filterDefinitions = [
  { ..., filterComponent: "LISTOGRAM", showCount: false },
  { ..., filterComponent: "MULTI_SELECT", showCount: false },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>t.jsx($r,{...e})};function Jr(e){const n=i.useMemo(()=>[{type:"PROPERTY",id:"department-checkbox",key:"department",label:"Department",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},{type:"PROPERTY",id:"team-checkbox",key:"team",label:"Team",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]);return t.jsx("div",{style:S,children:t.jsx(f,{objectType:u,filterDefinitions:n,...e})})}const Ce={parameters:{docs:{description:{story:"Listogram rows always include a checkbox for multi-select. Selecting values checks the checkbox and highlights the row. Use the exclude toggle (three-dot menu) to invert selections."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:e=>t.jsx(Jr,{...e})};function Qr(e){const[n,r]=i.useState(void 0),o=e.onFilterRemoved,l=i.useCallback(a=>{console.log("Removed filter:",a),o==null||o(a)},[o]),c=e.onFilterClauseChanged,d=i.useCallback(a=>{r(a),c==null||c(a)},[c]);return t.jsxs("div",{style:Me,children:[t.jsx("div",{style:ke,children:t.jsx(f,{objectType:u,filterDefinitions:I,...e,onFilterRemoved:l,filterClause:n,onFilterClauseChanged:d})}),t.jsx("div",{style:W,children:t.jsx(Ae,{objectType:u,filter:n})})]})}const he={args:{title:"Employee Filters",showResetButton:!0,showActiveFilterCount:!0,enableSorting:!0},parameters:{docs:{source:{code:`const [filterClause, setFilterClause] = useState(undefined);

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
</div>`}}},render:e=>t.jsx(Qr,{...e})};function qr(e){const n=je(),r=i.useMemo(()=>n(u).where({department:"Marketing"}),[n]),[o,l]=i.useState(void 0),c=e.onFilterClauseChanged,d=i.useCallback(a=>{l(a),c==null||c(a)},[c]);return t.jsxs("div",{style:Me,children:[t.jsx("div",{style:ke,children:t.jsx(f,{objectType:u,objectSet:r,filterDefinitions:I,...e,filterClause:o,onFilterClauseChanged:d})}),t.jsx("div",{style:W,children:t.jsx(Ae,{objectType:u,objectSet:r,filter:o})})]})}const Se={args:{title:"Marketing Employees",showResetButton:!0,showActiveFilterCount:!0},parameters:{docs:{description:{story:"Demonstrates using a pre-filtered objectSet to scope both FilterList aggregations and ObjectTable data to a subset of employees."},source:{code:`const client = useOsdkClient();
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
/>`}}},render:e=>t.jsx(qr,{...e})};function Zr(e){const[n,r]=i.useState(I),o=e.onFilterRemoved,l=i.useCallback(c=>{r(d=>d.filter(a=>"key"in a?a.key!==c:!0)),o==null||o(c)},[o]);return t.jsx("div",{style:S,children:t.jsx(f,{objectType:u,filterDefinitions:n,...e,onFilterRemoved:l})})}const be={name:"Removable Filters",args:{title:"Removable Filters",showActiveFilterCount:!0},parameters:{docs:{description:{story:"When `onFilterRemoved` is provided, each filter item shows a remove button (X) on hover. Clicking it removes the filter from the list."},source:{code:`const [definitions, setDefinitions] = useState(filterDefinitions);

const handleFilterRemoved = (filterKey) => {
  setDefinitions(prev => prev.filter(def => def.key !== filterKey));
};

<FilterList
  objectType={Employee}
  filterDefinitions={definitions}
  onFilterRemoved={handleFilterRemoved}
  title="Removable Filters"
/>`}}},render:e=>t.jsx(Zr,{...e})};function ei(e){const[n,r]=i.useState(void 0),o=i.useMemo(()=>[{type:"STATIC_VALUES",key:"department",label:"Department (static)",filterComponent:"LISTOGRAM",values:["Marketing","Operations","Finance","Product"],filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"}},{type:"STATIC_VALUES",key:"locationCity",label:"Office Location",filterComponent:"SINGLE_SELECT",values:["New York","San Francisco","London","Tokyo"],filterState:{type:"SELECT",selectedValues:[]}},{type:"STATIC_VALUES",key:"team",label:"Team (multi-select)",filterComponent:"MULTI_SELECT",values:["Alpha","Beta","Gamma","Delta"],filterState:{type:"SELECT",selectedValues:[]}},{type:"STATIC_VALUES",id:"custom-status",key:"status",label:"Status (custom clause)",filterComponent:"LISTOGRAM",values:["Active","Inactive"],filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"},toWhereClause:d=>{if(d.type!=="EXACT_MATCH"||d.values.length===0)return;const a=d.values,h=a.includes("Active"),T=a.includes("Inactive");if(h&&T)return{$or:[{employeeStatus:"Active"},{employeeStatus:"Inactive"}]};if(h)return{employeeStatus:"Active"};if(T)return{employeeStatus:"Inactive"}}}],[]),l=e.onFilterClauseChanged,c=i.useCallback(d=>{r(d),l==null||l(d)},[l]);return t.jsxs("div",{style:B,children:[t.jsx("div",{style:S,children:t.jsx(f,{objectType:u,filterDefinitions:o,...e,filterClause:n,onFilterClauseChanged:c})}),t.jsxs("div",{style:W,children:[t.jsx("strong",{children:"Filter Clause (JSON):"}),t.jsx("pre",{style:q,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const Te={parameters:{docs:{description:{story:"Use `STATIC_VALUES` filter definitions to provide a fixed list of values instead of fetching from OSDK aggregation. Supports LISTOGRAM, SINGLE_SELECT, MULTI_SELECT, and TEXT_TAGS components. Optionally provide a `toWhereClause` function for custom clause generation."},source:{code:`const filterDefinitions = [
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
/>`}}},render:e=>t.jsx(ei,{...e})};function ti(e){const[n,r]=i.useState(void 0),[o,l]=i.useState(I),c=e.onFilterRemoved,d=i.useCallback(L=>{l(v=>v.filter(C=>"key"in C?C.key!==L:!0)),c==null||c(L)},[c]),a=e.onReset,h=i.useCallback(()=>{l(I),a==null||a()},[a]),T=e.onFilterClauseChanged,A=i.useCallback(L=>{r(L),T==null||T(L)},[T]);return t.jsxs("div",{style:Me,children:[t.jsx("div",{style:ke,children:t.jsx(f,{objectType:u,filterDefinitions:o,titleIcon:Rn,...e,onReset:h,onFilterRemoved:d,filterClause:n,onFilterClauseChanged:A})}),t.jsx("div",{style:W,children:t.jsx(Ae,{objectType:u,filter:n})})]})}const Ee={name:"Full Featured",args:{title:"Employee Filters",showResetButton:!0,showActiveFilterCount:!0,enableSorting:!0},parameters:{docs:{description:{story:"Demonstrates all filter list features together: collapse, reset, active count, sorting, removable filters, per-filter search, exclude toggle, and controlled where clause driving an ObjectTable."},source:{code:`// All features combined: collapse, sort, search, exclude, remove, reset

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
/>`}}},render:e=>{const[,n]=En(),r=e.onCollapsedChange,o=i.useCallback(l=>{n({collapsed:l}),r==null||r(l)},[n,r]);return t.jsx(ti,{...e,onCollapsedChange:o})}};function ni(e){const[n,r]=i.useState(void 0),o=i.useMemo(()=>[{type:"HAS_LINK",linkName:"lead",label:"Has Manager",filterState:{type:"hasLink",hasLink:!1}}],[]),l=e.onFilterClauseChanged,c=i.useCallback(d=>{r(d),l==null||l(d)},[l]);return t.jsxs("div",{style:B,children:[t.jsx("div",{style:S,children:t.jsx(f,{objectType:u,filterDefinitions:o,...e,filterClause:n,onFilterClauseChanged:c})}),t.jsxs("div",{style:W,children:[t.jsx("strong",{children:"Filter Clause (JSON):"}),t.jsx("pre",{style:q,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const ge={name:"Linked Property Filters",parameters:{docs:{description:{story:"Demonstrates filtering on properties of linked objects. HAS_LINK filters objects based on whether they have a linked object. "},source:{code:`// HAS_LINK and LINKED_PROPERTY filter definitions
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
/>`}}},render:e=>t.jsx(ni,{...e})},ri={type:"PROPERTY",id:"combined-department",key:"department",label:"Department",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},ii={type:"PROPERTY",id:"combined-locationCity",key:"locationCity",label:"Location City",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}},oi={type:"LINKED_PROPERTY",id:"combined-lead-name",linkName:"lead",reverseLinkName:"peeps",linkedPropertyKey:"fullName",linkedFilterComponent:"MULTI_SELECT",linkedFilterState:{type:"SELECT",selectedValues:[]},filterState:{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:[]}},label:"Manager Name"},li=[oi,ri,ii];function si(e){const n=je(),r=i.useMemo(()=>n(u),[n]),[o,l]=i.useState(void 0),[c,d]=i.useState(r),a=e.onFilterClauseChanged,h=i.useCallback(T=>{l(T),a==null||a(T)},[a]);return t.jsxs("div",{style:Me,children:[t.jsx("div",{style:ke,children:t.jsx(f,{...e,objectType:u,objectSet:r,filterDefinitions:li,filterClause:o,onFilterClauseChanged:h,onEffectiveObjectSet:d,showFilteredOutValues:!0})}),t.jsx("div",{style:W,children:t.jsx(Ae,{objectType:u,objectSet:c})})]})}const ve={name:"Combined linked + direct filters (zero-count filtered-out rows)",parameters:{docs:{description:{story:"A linked filter (Manager Name) and direct property filters coexist in one FilterList. Pass the unfiltered scope as `objectSet`; FilterList applies the linked-filter narrowing internally and emits the fully-narrowed `ObjectSet` via `onEffectiveObjectSet` for the table. With `showFilteredOutValues`, direct-facet values absent under the active linked filter render as greyed-out count=0 filtered-out rows."},source:{code:`const baseObjectSet = useMemo(() => client(Employee), [client]);
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
<ObjectTable objectType={Employee} objectSet={effectiveObjectSet} />`}}},render:e=>t.jsx(si,{...e})};function ai({filterState:e,onFilterStateChanged:n}){const r=i.useCallback(l=>{const c=l.target.value;n({type:"custom",customState:{value:c}})},[n]),o=i.useCallback(()=>{n({type:"custom",customState:{value:""}})},[n]);return t.jsxs("div",{style:{padding:"12px 0",display:"flex",gap:"8px"},children:[t.jsx("input",{type:"text",value:e.customState.value,onChange:r,placeholder:"Enter name substring...",style:{flex:1,padding:"6px 8px",fontSize:"14px",border:"1px solid #ccc",borderRadius:"4px"}}),e.customState.value&&t.jsx("button",{onClick:o,style:{padding:"6px 12px",fontSize:"12px",backgroundColor:"#f5f5f5",border:"1px solid #ccc",borderRadius:"4px",cursor:"pointer"},children:"Clear"})]})}function ci(e){const[n,r]=i.useState(void 0),o=i.useMemo(()=>[{type:"CUSTOM",key:"custom-name-contains",label:"Name Contains",filterComponent:"CUSTOM",filterState:{type:"custom",customState:{value:""}},renderInput:({filterState:d,onFilterStateChanged:a})=>t.jsx(ai,{filterState:d,onFilterStateChanged:a}),toWhereClause:d=>{var h;const a=(h=d.customState)==null?void 0:h.value;if(a)return{fullName:{$containsAnyTerm:a}}}}],[]),l=e.onFilterClauseChanged,c=i.useCallback(d=>{r(d),l==null||l(d)},[l]);return t.jsxs("div",{style:B,children:[t.jsx("div",{style:S,children:t.jsx(f,{objectType:u,filterDefinitions:o,...e,filterClause:n,onFilterClauseChanged:c})}),t.jsxs("div",{style:W,children:[t.jsx("strong",{children:"Filter Clause (JSON):"}),t.jsx("pre",{style:q,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const Fe={name:"Custom Filters",parameters:{docs:{description:{story:"Custom filters provide full control over filtering logic and UI. The 'Name Contains' filter uses `renderInput` for a simple custom input. "},source:{code:`// Custom filter with renderInput
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
/>`}}},render:e=>t.jsx(ci,{...e})},di={type:"PROPERTY",id:"department-multi",key:"department",label:"Department",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}},ui={type:"PROPERTY",id:"department-single",key:"department",label:"Department (single)",filterComponent:"SINGLE_SELECT",filterState:{type:"SELECT",selectedValues:[]}},pi=[K,di,ui,_e],Re={name:"No value rendering",parameters:{docs:{description:{story:"Empty/null filter values render via the canonical `<NoValueLabel />` component — italic, muted, with the literal text 'No value' — across listogram buckets, single-select dropdown options, multi-select dropdown options, and multi-select chips. The mock dataset includes one Employee with `department: \"\"` so the No value row is visible in the listogram."}}},render:()=>t.jsx("div",{style:S,children:t.jsx(f,{objectType:u,filterDefinitions:pi})})},mi={type:"PROPERTY",id:"locationCity-single",key:"locationCity",label:"Location City (single)",filterComponent:"SINGLE_SELECT",filterState:{type:"SELECT",selectedValues:[]}},fi={type:"LINKED_PROPERTY",linkName:"lead",reverseLinkName:"peeps",linkedPropertyKey:"department",linkedFilterComponent:"MULTI_SELECT",linkedFilterState:{type:"SELECT",selectedValues:[]},filterState:{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:[]}},label:"Manager Department (linked multi)"},yi={type:"LINKED_PROPERTY",linkName:"lead",reverseLinkName:"peeps",linkedPropertyKey:"locationCity",linkedFilterComponent:"SINGLE_SELECT",linkedFilterState:{type:"SELECT",selectedValues:[]},filterState:{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:[]}},label:"Manager City (linked single)"},Ci=new Map([["department",{type:"EXACT_MATCH",values:["Marketing","Research"]}],["jobTitle-multi",{type:"SELECT",selectedValues:["Marketing Manager","Chief Scientist"]}],["locationCity-single",{type:"SELECT",selectedValues:["Berlin"]}],["linkedProperty:lead:department",{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:["Marketing","Research"]}}],["linkedProperty:lead:locationCity",{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:["Berlin"]}}]]),hi=[K,Fn,mi,fi,yi];function Si(e){const n=je(),r=i.useMemo(()=>n(u),[n]),[o,l]=i.useState(void 0),c=i.useCallback(d=>{l(d)},[]);return t.jsxs("div",{style:B,children:[t.jsx("div",{style:S,children:t.jsx(f,{...e,objectType:u,objectSet:r,filterDefinitions:hi,initialFilterStates:Ci,onFilterClauseChanged:c})}),t.jsxs("div",{style:W,children:[t.jsx("h4",{children:"Active where clause"}),t.jsx("pre",{style:q,children:o?JSON.stringify(o,null,2):"(none)"})]})]})}const Le={name:"With initial filter states",parameters:{docs:{description:{story:"Pass `initialFilterStates` to hydrate filters from saved state (e.g. localStorage or URL params). Selections are restored on mount, including values that currently have zero matching rows — they appear with a count of 0 so users can see and clear them. Demonstrated across LISTOGRAM, MULTI_SELECT, SINGLE_SELECT, and LINKED_PROPERTY filters."},source:{code:`// "Research", "Chief Scientist", and "Berlin" are not in the current
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
/>`}}},render:e=>t.jsx(Si,{...e})};var Ke,ze,$e;ee.parameters={...ee.parameters,docs:{...(Ke=ee.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...($e=(ze=ee.parameters)==null?void 0:ze.docs)==null?void 0:$e.source}}};var Je,Qe,qe;te.parameters={...te.parameters,docs:{...(Je=te.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(qe=(Qe=te.parameters)==null?void 0:Qe.docs)==null?void 0:qe.source}}};var Ze,et,tt;ne.parameters={...ne.parameters,docs:{...(Ze=ne.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(tt=(et=ne.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var nt,rt,it;re.parameters={...re.parameters,docs:{...(nt=re.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(it=(rt=re.parameters)==null?void 0:rt.docs)==null?void 0:it.source}}};var ot,lt,st;ie.parameters={...ie.parameters,docs:{...(ot=ie.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(st=(lt=ie.parameters)==null?void 0:lt.docs)==null?void 0:st.source}}};var at,ct,dt;oe.parameters={...oe.parameters,docs:{...(at=oe.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(dt=(ct=oe.parameters)==null?void 0:ct.docs)==null?void 0:dt.source}}};var ut,pt,mt;le.parameters={...le.parameters,docs:{...(ut=le.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(mt=(pt=le.parameters)==null?void 0:pt.docs)==null?void 0:mt.source}}};var ft,yt,Ct;se.parameters={...se.parameters,docs:{...(ft=se.parameters)==null?void 0:ft.docs,source:{originalSource:`{
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
}`,...(Ct=(yt=se.parameters)==null?void 0:yt.docs)==null?void 0:Ct.source}}};var ht,St,bt;ae.parameters={...ae.parameters,docs:{...(ht=ae.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
}`,...(bt=(St=ae.parameters)==null?void 0:St.docs)==null?void 0:bt.source}}};var Tt,Et,gt;ce.parameters={...ce.parameters,docs:{...(Tt=ce.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
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
}`,...(gt=(Et=ce.parameters)==null?void 0:Et.docs)==null?void 0:gt.source}}};var vt,Ft,Rt;de.parameters={...de.parameters,docs:{...(vt=de.parameters)==null?void 0:vt.docs,source:{originalSource:`{
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
}`,...(Rt=(Ft=de.parameters)==null?void 0:Ft.docs)==null?void 0:Rt.source}}};var Lt,At,jt;ue.parameters={...ue.parameters,docs:{...(Lt=ue.parameters)==null?void 0:Lt.docs,source:{originalSource:`{
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
}`,...(jt=(At=ue.parameters)==null?void 0:At.docs)==null?void 0:jt.source}}};var _t,Mt,kt;pe.parameters={...pe.parameters,docs:{...(_t=pe.parameters)==null?void 0:_t.docs,source:{originalSource:`{
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
}`,...(kt=(Mt=pe.parameters)==null?void 0:Mt.docs)==null?void 0:kt.source}}};var Dt,Ot,It;me.parameters={...me.parameters,docs:{...(Dt=me.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
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
}`,...(It=(Ot=me.parameters)==null?void 0:Ot.docs)==null?void 0:It.source}}};var xt,Pt,Nt;fe.parameters={...fe.parameters,docs:{...(xt=fe.parameters)==null?void 0:xt.docs,source:{originalSource:`{
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
}`,...(Nt=(Pt=fe.parameters)==null?void 0:Pt.docs)==null?void 0:Nt.source}}};var wt,Vt,Bt;ye.parameters={...ye.parameters,docs:{...(wt=ye.parameters)==null?void 0:wt.docs,source:{originalSource:`{
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
}`,...(Bt=(Vt=ye.parameters)==null?void 0:Vt.docs)==null?void 0:Bt.source}}};var Wt,Ht,Gt;Ce.parameters={...Ce.parameters,docs:{...(Wt=Ce.parameters)==null?void 0:Wt.docs,source:{originalSource:`{
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
}`,...(Gt=(Ht=Ce.parameters)==null?void 0:Ht.docs)==null?void 0:Gt.source}}};var Yt,Ut,Xt;he.parameters={...he.parameters,docs:{...(Yt=he.parameters)==null?void 0:Yt.docs,source:{originalSource:`{
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
}`,...(Xt=(Ut=he.parameters)==null?void 0:Ut.docs)==null?void 0:Xt.source}}};var Kt,zt,$t;Se.parameters={...Se.parameters,docs:{...(Kt=Se.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
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
}`,...($t=(zt=Se.parameters)==null?void 0:zt.docs)==null?void 0:$t.source}}};var Jt,Qt,qt;be.parameters={...be.parameters,docs:{...(Jt=be.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
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
}`,...(qt=(Qt=be.parameters)==null?void 0:Qt.docs)==null?void 0:qt.source}}};var Zt,en,tn;Te.parameters={...Te.parameters,docs:{...(Zt=Te.parameters)==null?void 0:Zt.docs,source:{originalSource:`{
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
}`,...(tn=(en=Te.parameters)==null?void 0:en.docs)==null?void 0:tn.source}}};var nn,rn,on;Ee.parameters={...Ee.parameters,docs:{...(nn=Ee.parameters)==null?void 0:nn.docs,source:{originalSource:`{
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
}`,...(on=(rn=Ee.parameters)==null?void 0:rn.docs)==null?void 0:on.source}}};var ln,sn,an;ge.parameters={...ge.parameters,docs:{...(ln=ge.parameters)==null?void 0:ln.docs,source:{originalSource:`{
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
}`,...(an=(sn=ge.parameters)==null?void 0:sn.docs)==null?void 0:an.source}}};var cn,dn,un;ve.parameters={...ve.parameters,docs:{...(cn=ve.parameters)==null?void 0:cn.docs,source:{originalSource:`{
  name: "Combined linked + direct filters (zero-count filtered-out rows)",
  parameters: {
    docs: {
      description: {
        story: "A linked filter (Manager Name) and direct property filters coexist in " + "one FilterList. Pass the unfiltered scope as \`objectSet\`; FilterList " + "applies the linked-filter narrowing internally and emits the fully-" + "narrowed \`ObjectSet\` via \`onEffectiveObjectSet\` for the table. " + "With \`showFilteredOutValues\`, direct-facet values absent under the " + "active linked filter render as greyed-out count=0 filtered-out rows."
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
}`,...(un=(dn=ve.parameters)==null?void 0:dn.docs)==null?void 0:un.source}}};var pn,mn,fn;Fe.parameters={...Fe.parameters,docs:{...(pn=Fe.parameters)==null?void 0:pn.docs,source:{originalSource:`{
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
}`,...(fn=(mn=Fe.parameters)==null?void 0:mn.docs)==null?void 0:fn.source}}};var yn,Cn,hn;Re.parameters={...Re.parameters,docs:{...(yn=Re.parameters)==null?void 0:yn.docs,source:{originalSource:`{
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
}`,...(hn=(Cn=Re.parameters)==null?void 0:Cn.docs)==null?void 0:hn.source}}};var Sn,bn,Tn;Le.parameters={...Le.parameters,docs:{...(Sn=Le.parameters)==null?void 0:Sn.docs,source:{originalSource:`{
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
}`,...(Tn=(bn=Le.parameters)==null?void 0:bn.docs)==null?void 0:Tn.source}}};const So=["Default","IntegerNumberRangeRounding","WithObjectSet","AddFilterMode","WithAllFilterTypes","WithTitleAndIcon","WithResetButton","WithActiveFilterCount","WithSorting","CollapsiblePanel","KeywordSearch","WithColorMap","WithRenderValue","WithRenderValueAsReactNode","WithListogramDisplayModes","WithHiddenCounts","WithCheckbox","CombinedWithObjectTable","CombinedWithFilteredObjectSet","WithRemovableFilters","WithStaticValues","FullFeatured","WithHasLinkFilter","CombinedWithLinkedFilter","WithCustomFilters","NoValueRendering","WithInitialFilterStates"];export{re as AddFilterMode,ce as CollapsiblePanel,Se as CombinedWithFilteredObjectSet,ve as CombinedWithLinkedFilter,he as CombinedWithObjectTable,ee as Default,Ee as FullFeatured,te as IntegerNumberRangeRounding,de as KeywordSearch,Re as NoValueRendering,se as WithActiveFilterCount,ie as WithAllFilterTypes,Ce as WithCheckbox,ue as WithColorMap,Fe as WithCustomFilters,ge as WithHasLinkFilter,ye as WithHiddenCounts,Le as WithInitialFilterStates,fe as WithListogramDisplayModes,ne as WithObjectSet,be as WithRemovableFilters,pe as WithRenderValue,me as WithRenderValueAsReactNode,le as WithResetButton,ae as WithSorting,Te as WithStaticValues,oe as WithTitleAndIcon,So as __namedExportsOrder,ho as default};
