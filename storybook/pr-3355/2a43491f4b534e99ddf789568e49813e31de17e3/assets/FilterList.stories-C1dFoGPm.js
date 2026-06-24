var Nn=Object.defineProperty;var wn=(e,n,r)=>n in e?Nn(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r;var Oe=(e,n,r)=>wn(e,typeof n!="symbol"?n+"":n,r);import{r as i,R as s,f as Vn,j as t}from"./iframe-Bxjk0MIU.js";import{S as Bn}from"./MultiColumnSortDialog-B31a9C-x.js";import{g as Wn,s as Hn,a as Gn,f as Yn,b as I,S as Un,R as Ge,O as Xn,c as Kn,C as zn,E as $n,F as Jn,u as Qn,d as $,e as qn,h as Ye,i as Zn,j as er}from"./getFilterLabel-DTqiwUqZ.js";import{c as X}from"./index-CvQXSN1P.js";import{u as tr,C as nr,a as Ue,P as rr,s as ir,K as lr,b as or,c as sr,D as ar,d as cr,S as dr,v as ur,e as pr}from"./DraggableList-CM_Mxyl5.js";import{B as w}from"./Button-CADz28U3.js";import{I as mr}from"./Input-CqQC8uzz.js";import{w as fr}from"./withOsdkMetrics-aeANrjsm.js";import{O as Ae}from"./object-table-6c37TCNS.js";import{E as u}from"./Employee-BAk2o20h.js";import{u as je}from"./useOsdkClient-BY6VFk17.js";import"./preload-helper-CAu4VSwH.js";import"./ActionButton-B9oxV4BI.js";import"./Dialog--TlmNvFE.js";import"./cross-lFmji8x1.js";import"./svgIconContainer-Bmm2fo-V.js";import"./useBaseUiId-YRc7PuUW.js";import"./InternalBackdrop-CAjhOG-s.js";import"./composite-wGzABSgC.js";import"./index-D6at_jGX.js";import"./index-BN-RZQSG.js";import"./index-CaHJxcnp.js";import"./MenuTrigger-Csg07_Q2.js";import"./CompositeItem-CvMFjM4G.js";import"./ToolbarRootContext-dsUhSqjo.js";import"./getDisabledMountTransitionStyles-CxuyLeOf.js";import"./getPseudoElementBounds-Civ4hPs-.js";import"./caret-down-BfsoVB-3.js";import"./Switch-BDRvtx0T.js";import"./toNumber-pGGOgdyd.js";import"./PopoverPopup-Bv101-ll.js";import"./useValueChanged-CRHv0gxZ.js";import"./useControlled-CKrFK6HP.js";import"./assertUnreachable-tCT10eXl.js";import"./index-BtwbpoEL.js";import"./Checkbox-AQtFic51.js";import"./minus-mYg52Cvq.js";import"./SkeletonBar-Bo9A7jaX.js";import"./makeExternalStore-DuAZTyzL.js";import"./chevron-down-DwSQ4sBm.js";import"./small-cross-C_v-dp1F.js";import"./useRegisterUserAgent-DAD_wSEu.js";import"./Table-JNE6ILVX.js";import"./LoadingCell-DdP2D447.js";import"./ColumnConfigDialog-3bdY9ccf.js";import"./CollapsiblePanel-dn2qwXC-.js";import"./index-OL0ALref.js";import"./error-DzvqTm1X.js";import"./Tooltip-BXc9qgb3.js";import"./useEventCallback-Dmx52eXc.js";const V={filterList:"FilterList-module__filterList___wmzCNbkH",filterListCollapsed:"FilterList-module__filterListCollapsed___CGrK9txF",expandedContent:"FilterList-module__expandedContent___aEk2i2At",scrollableContent:"FilterList-module__scrollableContent___F3O1nfAo",hiddenContent:"FilterList-module__hiddenContent___PHKe-yWc",expandButton:"FilterList-module__expandButton___-QlY8-ot",collapsedLabel:"FilterList-module__collapsedLabel___QA0UtRts",addButtonContainer:"FilterList-module__addButtonContainer___kq300FEV",addButton:"FilterList-module__addButton___oD4yvwyZ"},Z={content:"FilterListContent-module__content___fG0EgVp6",dragOverlay:"FilterListContent-module__dragOverlay___Tjd1YpmI"},Ie={errorContainer:"ErrorBoundary-module__errorContainer___FIguBDDu",errorMessage:"ErrorBoundary-module__errorMessage___jUsXUqFA",retryButton:"ErrorBoundary-module__retryButton___PZVWZOm7"};class yr extends i.Component{constructor(){super(...arguments);Oe(this,"state",{hasError:!1,error:null});Oe(this,"handleRetry",()=>{this.setState({hasError:!1,error:null})})}static getDerivedStateFromError(r){return{hasError:!0,error:r}}componentDidCatch(r,l){var o,c;console.error("[ErrorBoundary]",r),console.error("[ErrorBoundary] Component stack:",l.componentStack),(c=(o=this.props).onError)==null||c.call(o,r)}render(){return this.state.hasError?this.props.fallback?this.props.fallback:s.createElement("div",{className:Ie.errorContainer},s.createElement("p",{className:Ie.errorMessage},this.props.errorMessage??"Something went wrong"),s.createElement(w,{className:Ie.retryButton,onClick:this.handleRetry,"aria-label":"Retry"},"Retry")):this.props.children}}function Cr(){return s.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true"},s.createElement("circle",{cx:"5.5",cy:"3.5",r:"1.5"}),s.createElement("circle",{cx:"10.5",cy:"3.5",r:"1.5"}),s.createElement("circle",{cx:"5.5",cy:"8",r:"1.5"}),s.createElement("circle",{cx:"10.5",cy:"8",r:"1.5"}),s.createElement("circle",{cx:"5.5",cy:"12.5",r:"1.5"}),s.createElement("circle",{cx:"10.5",cy:"12.5",r:"1.5"}))}function xe(){return xe=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var l in r)({}).hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},xe.apply(null,arguments)}function hr({definition:e,filterKey:n,label:r,filterState:l,onFilterStateChanged:o,onFilterRemoved:c,renderInput:d,searchField:a,dragHandleAttributes:S,dragHandleListeners:E,className:L,style:R}){const[g,h]=i.useState({type:"closed"}),[O,M]=i.useState(!1),p=i.useCallback(A=>{o(n,A)},[n,o]),m=i.useCallback(()=>{h(A=>A.type==="closed"?{type:"open",query:""}:{type:"closed"})},[]),y=i.useCallback(A=>{h({type:"open",query:A.target.value})},[]),F=i.useCallback(()=>{h({type:"open",query:""})},[]),k=i.useCallback(()=>{c==null||c(n)},[n,c]),P=i.useCallback(()=>{M(A=>!A)},[]),H=i.useCallback(A=>{A==null||A.focus({preventScroll:!0})},[]),N=i.useMemo(()=>Wn(l),[l]),Y=Hn(N),T=Gn(N)&&a!==!1,C=Yn(l),v=g.type==="open",_=g.type==="open"?g.query:"",D=g.type==="open"?g.query:void 0;return s.createElement("div",{className:X(I.filterItem,L),style:R,"data-has-selection":C||void 0},s.createElement("div",{className:I.itemHeader},S&&s.createElement(w,xe({className:I.dragHandle,"aria-label":`Reorder ${r}`},S,E),s.createElement(Cr,null)),s.createElement("span",{className:I.itemLabel},r),T&&s.createElement(w,{className:I.headerActionButton,onClick:m,"aria-label":"Search values","aria-pressed":v},s.createElement(Un,null)),c&&s.createElement(w,{className:I.headerActionButton,onClick:k,"aria-label":`Remove ${r} filter`},s.createElement(Ge,null)),Y&&s.createElement(w,{className:I.headerActionButton,onClick:P,"aria-label":"More actions","aria-pressed":O},s.createElement(Xn,null))),v&&s.createElement("div",{className:I.searchRow},s.createElement(mr,{type:"text",className:I.searchInput,value:_,onChange:y,placeholder:"Search property values...","aria-label":"Search property values",ref:H}),_&&s.createElement(w,{type:"button",className:I.searchClearButton,onClick:F,"aria-label":"Clear search"},s.createElement(Ge,null))),s.createElement("div",{className:I.itemContent},s.createElement(yr,{errorMessage:"Error loading filter"},d({definition:e,filterKey:n,filterState:l,onFilterStateChanged:p,searchQuery:D,excludeRowOpen:O}))))}const Pe=i.memo(hr);function Sr({id:e,definition:n,filterKey:r,label:l,filterState:o,onFilterStateChanged:c,onFilterRemoved:d,renderInput:a,searchField:S}){const{attributes:E,listeners:L,setNodeRef:R,transform:g,transition:h,isDragging:O}=tr({id:e}),M=i.useMemo(()=>({transform:nr.Transform.toString(g),transition:h??void 0}),[g,h]);return s.createElement("div",{ref:R,style:M,className:X(O&&I.dragging)},s.createElement(Pe,{definition:n,filterKey:r,label:l,filterState:o,onFilterStateChanged:c,onFilterRemoved:d,renderInput:a,searchField:S,dragHandleAttributes:E,dragHandleListeners:L}))}const br=i.memo(Sr),Tr=({transform:e})=>({...e,x:0}),Er={distance:8},gr=[Tr],vr={role:"button",tabIndex:-1,"aria-disabled":!0,"aria-pressed":void 0,"aria-roledescription":"sortable","aria-describedby":""};function Fr({filterDefinitions:e,filterStates:n,onFilterStateChanged:r,onFilterRemoved:l,onOrderChange:o,renderInput:c,getFilterKey:d,getFilterLabel:a,enableSorting:S,className:E,style:L}){const[R,g]=i.useState(null),h=i.useMemo(()=>S&&e?e.map(T=>d(T)):[],[S,e,d]),O=Ue(rr,{activationConstraint:Er}),M=Ue(lr,{coordinateGetter:ir}),p=or(O,M),m=R!=null?h.indexOf(String(R)):-1,y=m>=0&&e?e[m]:void 0,F=i.useMemo(()=>y?d(y):void 0,[y,d]),k=i.useCallback(T=>{g(T.active.id)},[]),P=i.useCallback(T=>{g(null);const{active:C,over:v}=T;if(!v||C.id===v.id)return;const _=h.indexOf(String(C.id)),D=h.indexOf(String(v.id));if(_!==-1&&D!==-1){const A=sr(h,_,D);o==null||o(A)}},[h,o]),H=i.useCallback(()=>{g(null)},[]),N=i.useMemo(()=>{const T=C=>{const v=h.indexOf(String(C)),_=v>=0?e==null?void 0:e[v]:void 0;return _?a(_):"filter"};return{onDragStart({active:C}){return`Picked up ${T(C.id)} filter`},onDragOver({over:C}){return C?`Moved to position ${h.indexOf(String(C.id))+1} of ${h.length}`:"Not over a droppable area"},onDragEnd({active:C,over:v}){const _=T(C.id);if(v&&C.id!==v.id){const D=h.indexOf(String(v.id));return`Dropped ${_} filter at position ${D+1}`}return`Dropped ${_} filter back in its original position`},onDragCancel({active:C}){return`Cancelled dragging ${T(C.id)} filter`}}},[e,h,a]),Y=i.useMemo(()=>({announcements:N}),[N]);return!e||e.length===0?s.createElement("div",{className:X(Z.content,E),style:L,"data-empty":"true"}):S?s.createElement("div",{className:X(Z.content,E),style:L},s.createElement(ar,{sensors:p,collisionDetection:cr,modifiers:gr,onDragStart:k,onDragEnd:P,onDragCancel:H,accessibility:Y},s.createElement(dr,{items:h,strategy:ur},e.map((T,C)=>{const v=h[C],_=d(T),D=a(T),A=n.get(_);return s.createElement(br,{key:v,id:v,definition:T,filterKey:_,label:D,filterState:A,onFilterStateChanged:r,onFilterRemoved:l,renderInput:c,searchField:T.searchField})})),s.createElement(pr,{dropAnimation:null,className:Z.dragOverlay},y&&F&&s.createElement(Pe,{definition:y,filterKey:F,label:a(y),filterState:n.get(F),onFilterStateChanged:r,onFilterRemoved:l,renderInput:c,searchField:y.searchField,dragHandleAttributes:vr})))):s.createElement("div",{className:X(Z.content,E),style:L},e.map(T=>{const C=d(T),v=n.get(C);return s.createElement(Pe,{key:C,definition:T,filterKey:C,label:a(T),filterState:v,onFilterStateChanged:r,onFilterRemoved:l,renderInput:c,searchField:T.searchField})}))}const G={header:"FilterListHeader-module__header___dkKc0CO-",titleContainer:"FilterListHeader-module__titleContainer___KaePpQIx",title:"FilterListHeader-module__title___xqfWfSzK",titleIcon:"FilterListHeader-module__titleIcon___MQy-dec8",activeCount:"FilterListHeader-module__activeCount___GyBsnsQL",actions:"FilterListHeader-module__actions___YZA7zmGc",collapseButton:"FilterListHeader-module__collapseButton___N1-sj3B3",resetButton:"FilterListHeader-module__resetButton___jLcUypov"};function Rr({title:e,titleIcon:n,collapsed:r=!1,onCollapsedChange:l,showResetButton:o,onReset:c,showActiveFilterCount:d,activeFilterCount:a=0,hasVisibilityChanges:S=!1}){const E=i.useCallback(()=>{l==null||l(!r)},[l,r]);return s.createElement("div",{className:G.header},s.createElement("div",{className:G.titleContainer},n&&s.createElement("span",{className:G.titleIcon},n),e&&s.createElement("span",{className:G.title},e),d&&a>0&&s.createElement("span",{className:G.activeCount},"(",a,")")),s.createElement("div",{className:G.actions},o&&s.createElement(w,{className:G.resetButton,onClick:c,disabled:a===0&&!S},s.createElement(Kn,null)," Reset filters"),l!=null&&s.createElement(w,{className:G.collapseButton,onClick:E,"aria-expanded":!r,"aria-label":r?"Expand filters":"Collapse filters"},s.createElement(zn,null))))}const Lr=i.memo(Rr);function Ar(e){const{title:n,titleIcon:r,collapsed:l=!1,onCollapsedChange:o,filterDefinitions:c,filterStates:d,onFilterStateChanged:a,renderInput:S,getFilterKey:E,getFilterLabel:L,activeFilterCount:R,onReset:g,onFilterAdded:h,onFilterRemoved:O,onOrderChange:M,showResetButton:p=!1,showActiveFilterCount:m=!1,hasVisibilityChanges:y,enableSorting:F,className:k,renderAddFilterButton:P}=e,[H,N]=i.useState(null),Y=i.useCallback(()=>{o==null||o(!1)},[o]),T=l&&o!=null;return s.createElement("div",{className:X(V.filterList,k)},T&&s.createElement("div",{className:V.filterListCollapsed,"data-collapsed":"true"},s.createElement(w,{className:V.expandButton,onClick:Y,"aria-label":"Expand filters"},s.createElement($n,null)),s.createElement("span",{className:V.collapsedLabel},n??"Filters")),s.createElement("div",{ref:N,className:X(V.expandedContent,T&&V.hiddenContent),"data-active-count":R},s.createElement(Jn,{value:H},(n||r||p||m||o)&&s.createElement(Lr,{title:n,titleIcon:r,collapsed:l,onCollapsedChange:o,showResetButton:p,onReset:g,showActiveFilterCount:m,activeFilterCount:R,hasVisibilityChanges:y}),s.createElement("div",{className:V.scrollableContent},s.createElement(Fr,{filterDefinitions:c,filterStates:d,onFilterStateChanged:a,onFilterRemoved:O,onOrderChange:M,renderInput:S,getFilterKey:E,getFilterLabel:L,enableSorting:F})),(P!=null||h!=null)&&s.createElement("div",{className:V.addButtonContainer},P?P():s.createElement(w,{type:"button",className:V.addButton,onClick:h},"+ Add filter")))))}const jr={trigger:"AddFilterPopover-module__trigger___8QQBrzPo"};function _r({hiddenDefinitions:e,onShowFilter:n,renderTrigger:r}){const l=Qn();return s.createElement(Bn,{items:e,onItemSelected:n,trigger:r!=null?r():"+ Add filter",triggerClassName:r==null?jr.trigger:void 0,searchPlaceholder:"Search filters",emptyMessage:"No matching filters",collisionBoundary:l})}const Mr=i.memo(_r);function kr(e,n){const r=i.useMemo(()=>(e==null?void 0:e.map($))??[],[e]),l=i.useMemo(()=>(e==null?void 0:e.filter(p=>p.isVisible!==!1).map($))??[],[e]),[o,c]=i.useState(()=>l);i.useEffect(()=>{c(l)},[l]);const d=i.useRef(n);d.current=n;const a=i.useCallback(p=>{if(!d.current)return;const m=new Set(p),y=r.filter(F=>!m.has(F));d.current(p,y)},[r]),S=i.useMemo(()=>{const p=new Map;if(e==null)return p;for(const m of e)p.set($(m),m);return p},[e]),{visibleDefinitions:E,hiddenDefinitions:L}=i.useMemo(()=>{if(e==null)return{visibleDefinitions:[],hiddenDefinitions:[]};const p=new Set(o),m=[],y=[];for(const F of o){const k=S.get(F);k!=null&&m.push(k)}for(const F of r)if(!p.has(F)){const k=S.get(F);k!=null&&y.push(k)}return{visibleDefinitions:m,hiddenDefinitions:y}},[e,S,o,r]),R=i.useCallback(p=>{c(m=>{if(m.includes(p))return m;const y=[...m,p];return a(y),y})},[a]),g=i.useCallback(p=>{c(m=>{const y=m.filter(F=>F!==p);return a(y),y})},[a]),h=i.useCallback(p=>{c(m=>p.length===m.length&&p.every((y,F)=>y===m[F])?m:(a(p),p))},[a]),O=i.useCallback(()=>{c(p=>l.length===p.length&&l.every((m,y)=>m===p[y])?p:(a(l),l))},[l,a]),M=i.useMemo(()=>o.length!==l.length?!0:!o.every((p,m)=>p===l[m]),[o,l]);return{visibleDefinitions:E,hiddenDefinitions:L,showFilter:R,hideFilter:g,reorderVisible:h,hasVisibilityChanges:M,resetVisibility:O}}const Dr={};function Or(e){const{objectType:n,objectSet:r,title:l,titleIcon:o,collapsed:c,onCollapsedChange:d,filterDefinitions:a,addFilterMode:S="uncontrolled",showResetButton:E=!1,onReset:L,showActiveFilterCount:R=!1,showFilteredOutValues:g=!1,className:h,enableSorting:O,onFilterAdded:M,onFilterRemoved:p,onFilterVisibilityChange:m,renderAddFilterButton:y}=e,{filterStates:F,setFilterState:k,clearFilterState:P,perFilterWhereClauses:H,perFilterLinkedFilters:N,activeFilterCount:Y,reset:T}=qn(e),C=S==="uncontrolled",v=i.useCallback((j,q)=>{if(!m)return;const De=[...j.map(z=>({filterKey:z,isVisible:!0})),...q.map(z=>({filterKey:z,isVisible:!1}))];m(De)},[m]),{visibleDefinitions:_,hiddenDefinitions:D,showFilter:A,hideFilter:we,reorderVisible:Ve,hasVisibilityChanges:Ln,resetVisibility:Be}=kr(a,C?v:void 0),An=i.useCallback(()=>{T(),Be(),L==null||L()},[T,Be,L]),jn=i.useMemo(()=>{if(a!=null)return a.filter(j=>j.isVisible!==!1)},[a]),_n=C?_:jn,Mn=i.useCallback(j=>{P(j),C&&we(j),p==null||p(j)},[P,C,we,p]),We=i.useCallback(j=>{A(j),M==null||M(j,a??[])},[A,M,a]),kn=i.useCallback(j=>{Ve(j)},[Ve]),He=i.useMemo(()=>D.map(j=>({key:$(j),label:Ye(j)})),[D]),Dn=i.useMemo(()=>C?D.length===0?void 0:()=>s.createElement(Mr,{hiddenDefinitions:He,onShowFilter:We,renderTrigger:y}):y,[C,D.length,He,We,y]),On=C?Mn:p,In=i.useCallback(({definition:j,filterKey:q,filterState:De,onFilterStateChanged:z,searchQuery:xn,excludeRowOpen:Pn})=>s.createElement(Zn,{objectType:n,objectSet:r,definition:j,filterState:De,onFilterStateChanged:z,whereClause:H.get(q)??Dr,linkedFilters:N.get(q)??er,showFilteredOutValues:g,searchQuery:xn,excludeRowOpen:Pn}),[n,r,H,N,g]);return s.createElement(Ar,{title:l,titleIcon:o,collapsed:c,onCollapsedChange:d,filterDefinitions:_n,filterStates:F,onFilterStateChanged:k,renderInput:In,getFilterKey:$,getFilterLabel:Ye,activeFilterCount:Y,onReset:An,showResetButton:E,showActiveFilterCount:R,hasVisibilityChanges:Ln,enableSorting:O,onFilterRemoved:On,onOrderChange:kn,className:h,renderAddFilterButton:Dn})}const f=fr(Or,"FilterList"),{useArgs:Tn}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:U}=__STORYBOOK_MODULE_TEST__,K={type:"PROPERTY",id:"department",key:"department",label:"Department",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},Ne={type:"PROPERTY",id:"team",key:"team",label:"Team",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},En={type:"PROPERTY",id:"fullName",key:"fullName",label:"Full Name",filterComponent:"CONTAINS_TEXT",filterState:{type:"CONTAINS_TEXT"}},gn={type:"PROPERTY",id:"firstFullTimeStartDate",key:"firstFullTimeStartDate",label:"Start Date",filterComponent:"DATE_RANGE",filterState:{type:"DATE_RANGE"},clickToFilter:!0},_e={type:"PROPERTY",id:"employeeNumber",key:"employeeNumber",label:"Employee Number",filterComponent:"NUMBER_RANGE",filterState:{type:"NUMBER_RANGE"},clickToFilter:!0},J={type:"PROPERTY",id:"locationCity",key:"locationCity",label:"Location City",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},vn={type:"PROPERTY",id:"jobTitle-multi",key:"jobTitle",label:"Job Title",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}},x=[K,Ne,En,gn,vn,_e,J],b={width:320,height:600},B={display:"flex",gap:16},W={flex:1},Q={marginTop:8,padding:12,background:"#f5f5f5",borderRadius:4,fontSize:12,overflow:"auto",maxHeight:560},Me={display:"flex",gap:16,height:600},ke={width:320,flexShrink:0},Fn=t.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:t.jsx("path",{d:"M1 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1.5a1 1 0 0 1-.293.707L10 8.914V13a1 1 0 0 1-.553.894l-2 1A1 1 0 0 1 6 14v-5.086L1.293 4.207A1 1 0 0 1 1 3.5V2z"})}),fl={title:"Beta/FilterList",component:f,args:{title:"Filters",enableSorting:!1,showResetButton:!1,showActiveFilterCount:!1,collapsed:!1,onFilterClauseChanged:U(),onFilterStateChanged:U(),onFilterAdded:U(),onFilterRemoved:U(),onFilterVisibilityChange:U(),onCollapsedChange:U(),onReset:U()},parameters:{msw:{handlers:[...Vn.handlers]},controls:{expanded:!0}},argTypes:{objectType:{description:"The object type definition for the objects being filtered",control:!1},objectSet:{description:"Optional object set to scope aggregation queries",control:!1},filterDefinitions:{description:"Array of filter definitions. If not provided, all filterable properties are auto-discovered.",control:!1},title:{description:"Title displayed in the filter list header",control:"text"},titleIcon:{description:"Icon displayed next to the title",control:!1},filterClause:{description:"The current where clause. If provided, the filter clause is controlled.",control:!1},onFilterClauseChanged:{description:"Called when the filter clause changes. Required in controlled mode.",control:!1,table:{category:"Events"}},onFilterStateChanged:{description:"Called when an individual filter's state changes",control:!1,table:{category:"Events"}},enableSorting:{description:"Enable drag-and-drop reordering of filters",control:"boolean",table:{defaultValue:{summary:"false"}}},collapsed:{description:"Whether the filter list panel is collapsed",control:"boolean"},onCollapsedChange:{description:"Called when the collapsed state changes",control:!1,table:{category:"Events"}},showResetButton:{description:"Show reset filters button in header",control:"boolean",table:{defaultValue:{summary:"false"}}},onReset:{description:"Called when the reset button is clicked",control:!1,table:{category:"Events"}},showActiveFilterCount:{description:"Show count of active filters in header",control:"boolean",table:{defaultValue:{summary:"false"}}},onFilterAdded:{description:"Called when a filter is added. If provided, users can add filters.",control:!1,table:{category:"Events"}},onFilterRemoved:{description:"Called when a filter is removed. If provided, users can remove filters.",control:!1,table:{category:"Events"}},onFilterVisibilityChange:{description:"Called when filter visibility or ordering changes (reorder, add, remove).",control:!1,table:{category:"Events"}},addFilterMode:{description:'Controls how filter add/remove is managed. "uncontrolled" manages visibility internally; "controlled" leaves it to the consumer.',control:"select",options:["controlled","uncontrolled"],table:{category:"Advanced",defaultValue:{summary:'"uncontrolled"'}}},renderAddFilterButton:{description:"Custom render function for the add filter button.",control:!1,table:{category:"Advanced"}},initialFilterStates:{description:"Initial filter states for hydrating from external storage. Merged over definition defaults on mount.",control:!1,table:{category:"Advanced"}},className:{description:"Additional CSS class name",control:"text"}}},ee={parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:({objectType:e,objectSet:n,...r})=>{const l=i.useMemo(()=>[K,J],[]);return t.jsx("div",{style:b,children:t.jsx(f,{objectType:u,filterDefinitions:l,...r})})}},te={parameters:{docs:{description:{story:"Repro for the integer-typed `NUMBER_RANGE` rounding fix. `employeeNumber` is an `integer` property, so histogram bucket boundaries — `(maxValue - minValue) / 20` — are usually fractional. Click any bar in the histogram. The Min/Max boxes must show whole integers (e.g. `657495073`), not fractional values (e.g. `657495073.4`)."}}},render:({objectType:e,objectSet:n,...r})=>{const l=i.useMemo(()=>[_e],[]);return t.jsx("div",{style:b,children:t.jsx(f,{objectType:u,filterDefinitions:l,...r})})}};function Ir(e){const n=je(),r=i.useMemo(()=>n(u).where({department:"Marketing"}),[n]),l=i.useMemo(()=>[Ne,J],[]);return t.jsx("div",{style:b,children:t.jsx(f,{objectType:u,objectSet:r,filterDefinitions:l,...e})})}const ne={parameters:{docs:{description:{story:"Pass an `objectSet` prop to scope filter aggregations to a subset of objects. Here the object set is filtered to Marketing department employees, so the listogram counts reflect only that subset."},source:{code:`const client = useOsdkClient();
const objectSet = client(Employee).where({ department: "Marketing" });

<FilterList
  objectType={Employee}
  objectSet={objectSet}
  filterDefinitions={[
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:e=>t.jsx(Ir,{...e})};function xr(e){const n=i.useMemo(()=>[K,Ne,{...En,isVisible:!1},{...gn,isVisible:!1},{..._e,isVisible:!1},{...J,isVisible:!1}],[]);return t.jsx("div",{style:b,children:t.jsx(f,{objectType:u,filterDefinitions:n,addFilterMode:"uncontrolled",...e})})}const re={args:{showResetButton:!0},parameters:{docs:{source:{code:`const filterDefinitions = [
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
/>`}}},render:e=>t.jsx(xr,{...e})};function Pr(e){const[n,r]=i.useState(void 0),l=e.onFilterClauseChanged,o=i.useCallback(c=>{r(c),l==null||l(c)},[l]);return t.jsxs("div",{style:B,children:[t.jsx("div",{style:b,children:t.jsx(f,{objectType:u,filterDefinitions:x,...e,filterClause:n,onFilterClauseChanged:o})}),t.jsxs("div",{style:W,children:[t.jsx("strong",{children:"Filter Clause (JSON):"}),t.jsx("pre",{style:Q,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const ie={parameters:{docs:{description:{story:"All filter component types with a controlled where clause. Hover filter items to reveal search and exclude actions."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>`}}},render:e=>t.jsx(Pr,{...e})},le={args:{title:"Employee Filters"},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  titleIcon={<svg>...</svg>}
/>`}}},render:({objectType:e,objectSet:n,...r})=>t.jsx("div",{style:b,children:t.jsx(f,{objectType:u,filterDefinitions:x,titleIcon:Fn,...r})})};function Nr(e){const n=e.onReset,r=i.useCallback(()=>{console.log("Reset clicked"),n==null||n()},[n]);return t.jsx("div",{style:b,children:t.jsx(f,{objectType:u,filterDefinitions:x,...e,onReset:r})})}const oe={args:{showResetButton:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showResetButton={true}
  onReset={() => console.log("Reset clicked")}
/>`}}},render:e=>t.jsx(Nr,{...e})},se={args:{showActiveFilterCount:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showActiveFilterCount={true}
/>`}}},render:({objectType:e,objectSet:n,...r})=>t.jsx("div",{style:b,children:t.jsx(f,{objectType:u,filterDefinitions:x,...r})})},ae={args:{enableSorting:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  enableSorting={true}
/>`}}},render:({objectType:e,objectSet:n,...r})=>t.jsx("div",{style:b,children:t.jsx(f,{objectType:u,filterDefinitions:x,...r})})};function wr(e){return t.jsx("div",{style:b,children:t.jsx(f,{objectType:u,filterDefinitions:x,...e})})}const ce={args:{title:"Employee Filters",showActiveFilterCount:!0},parameters:{docs:{description:{story:"Click the collapse button to minimize the filter panel. Active filter count is shown in the collapsed state."},source:{code:`const [collapsed, setCollapsed] = useState(false);

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  collapsed={collapsed}
  onCollapsedChange={setCollapsed}
  showActiveFilterCount={true}
/>`}}},render:e=>{const[,n]=Tn(),r=e.onCollapsedChange,l=i.useCallback(o=>{n({collapsed:o}),r==null||r(o)},[n,r]);return t.jsx(wr,{...e,onCollapsedChange:l})}},de={parameters:{docs:{source:{code:`const filterDefinitions = [
  { type: "KEYWORD_SEARCH", properties: ["fullName", "department", "jobTitle", "locationCity"], label: "Search" },
  { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:({objectType:e,objectSet:n,...r})=>{const l=i.useMemo(()=>[{type:"KEYWORD_SEARCH",properties:["fullName","department","jobTitle","locationCity"],label:"Search"},K,J],[]);return t.jsx("div",{style:b,children:t.jsx(f,{objectType:u,filterDefinitions:l,...r})})}};function Vr(e){const n=i.useMemo(()=>[{type:"PROPERTY",id:"department-no-color",key:"department",label:"Department (default colors)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]),r=i.useMemo(()=>[{type:"PROPERTY",id:"department-color",key:"department",label:"Department (custom colors)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},colorMap:{Marketing:"#e74c3c",Operations:"#2ecc71",Finance:"#3498db",Product:"#f39c12"}}],[]);return t.jsxs("div",{style:B,children:[t.jsx("div",{style:b,children:t.jsx(f,{objectType:u,filterDefinitions:n,...e})}),t.jsx("div",{style:b,children:t.jsx(f,{objectType:u,filterDefinitions:r,...e})})]})}const ue={parameters:{docs:{source:{code:`// Without colorMap: all bars use the default theme color
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

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>t.jsx(Vr,{...e})},Rn={Marketing:"Marketing Dept.",Operations:"Ops Team",Finance:"Finance & Accounting",Product:"Product Group"};function Br(e){const n=i.useMemo(()=>[{type:"PROPERTY",id:"department-default",key:"department",label:"Department (default)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]),r=i.useMemo(()=>[{type:"PROPERTY",id:"department-custom",key:"department",label:"Department (custom render)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},renderValue:l=>Rn[l]??l},{type:"PROPERTY",id:"team-custom",key:"team",label:"Team (custom render)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},renderValue:l=>l.toUpperCase()}],[]);return t.jsxs("div",{style:B,children:[t.jsx("div",{style:b,children:t.jsx(f,{objectType:u,filterDefinitions:n,...e})}),t.jsx("div",{style:b,children:t.jsx(f,{objectType:u,filterDefinitions:r,...e})})]})}const pe={parameters:{docs:{description:{story:"Use `renderValue` to customize how filter values are displayed and searched. The returned string replaces the raw value for display and search matching. Works with LISTOGRAM, MULTI_SELECT, and SINGLE_SELECT components."},source:{code:`const DEPARTMENT_LABELS = {
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

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>t.jsx(Br,{...e})},Wr={Marketing:"#f97316",Operations:"#3b82f6",Finance:"#10b981",Product:"#a855f7"},Hr={display:"inline-flex",alignItems:"center",gap:8},Gr={display:"inline-block",width:10,height:10,borderRadius:"50%",flexShrink:0};function Yr({value:e}){const n=Wr[e]??"#94a3b8";return t.jsxs("span",{style:Hr,children:[t.jsx("span",{style:{...Gr,background:n}}),t.jsx("span",{children:Rn[e]??e})]})}function Ur(e){const n=i.useMemo(()=>[{type:"PROPERTY",id:"department-swatch",key:"department",label:"Department (JSX)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},renderValue:r=>t.jsx(Yr,{value:r})},{type:"PROPERTY",id:"team-link",key:"team",label:"Team (anchor JSX)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},renderValue:r=>t.jsx("a",{href:`#/team/${encodeURIComponent(r)}`,onClick:l=>l.preventDefault(),style:{color:"#2563eb",textDecoration:"underline"},children:r})}],[]);return t.jsx("div",{style:b,children:t.jsx(f,{objectType:u,filterDefinitions:n,...e})})}const me={parameters:{docs:{description:{story:"`renderValue` may return any `ReactNode`, not just a string. Use this to render avatars, anchors, status pills, or any custom JSX inside listogram rows, dropdown items, and chips. When the function returns non-string JSX, search matching falls back to the raw value."},source:{code:`const filterDefinitions = [
  {
    type: "PROPERTY",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
    renderValue: (value) => <DepartmentSwatch value={value} />,
  },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>t.jsx(Ur,{...e})};function Xr(e){const n=i.useMemo(()=>[{type:"PROPERTY",id:"dept-full",key:"department",label:"full: label + bar + count",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"full"}}],[]),r=i.useMemo(()=>[{type:"PROPERTY",id:"dept-count",key:"department",label:"count: label + count (no bar)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"count"}}],[]),l=i.useMemo(()=>[{type:"PROPERTY",id:"dept-minimal",key:"department",label:"minimal: label only",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"}}],[]);return t.jsxs("div",{style:B,children:[t.jsx("div",{style:b,children:t.jsx(f,{objectType:u,filterDefinitions:n,...e})}),t.jsx("div",{style:b,children:t.jsx(f,{objectType:u,filterDefinitions:r,...e})}),t.jsx("div",{style:b,children:t.jsx(f,{objectType:u,filterDefinitions:l,...e})})]})}const fe={parameters:{docs:{source:{code:`// "full" (default): label + colored bar + count number
// "count": label + count number (no bar)
// "minimal": label only (no bar, no count)

const filterDefinitions = [
  { ..., listogramConfig: { displayMode: "full" } },
  { ..., listogramConfig: { displayMode: "count" } },
  { ..., listogramConfig: { displayMode: "minimal" } },
];`}}},render:e=>t.jsx(Xr,{...e})};function Kr(e){const n=i.useMemo(()=>[{type:"PROPERTY",id:"dept-with-count",key:"department",label:"Department (counts visible)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},{type:"PROPERTY",id:"team-with-count",key:"team",label:"Team (counts visible)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}}],[]),r=i.useMemo(()=>[{type:"PROPERTY",id:"dept-no-count",key:"department",label:"Department (counts hidden)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},showCount:!1},{type:"PROPERTY",id:"team-no-count",key:"team",label:"Team (counts hidden)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},showCount:!1}],[]);return t.jsxs("div",{style:B,children:[t.jsx("div",{style:b,children:t.jsx(f,{objectType:u,filterDefinitions:n,...e})}),t.jsx("div",{style:b,children:t.jsx(f,{objectType:u,filterDefinitions:r,...e})})]})}const ye={parameters:{docs:{description:{story:"Use `showCount: false` on individual filter definitions to hide aggregation counts in LISTOGRAM and MULTI_SELECT inputs. Bar visualizations in LISTOGRAM are preserved."},source:{code:`// showCount defaults to true; set false to hide counts per filter
const filterDefinitions = [
  { ..., filterComponent: "LISTOGRAM", showCount: false },
  { ..., filterComponent: "MULTI_SELECT", showCount: false },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>t.jsx(Kr,{...e})};function zr(e){const n=i.useMemo(()=>[{type:"PROPERTY",id:"department-checkbox",key:"department",label:"Department",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},{type:"PROPERTY",id:"team-checkbox",key:"team",label:"Team",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]);return t.jsx("div",{style:b,children:t.jsx(f,{objectType:u,filterDefinitions:n,...e})})}const Ce={parameters:{docs:{description:{story:"Listogram rows always include a checkbox for multi-select. Selecting values checks the checkbox and highlights the row. Use the exclude toggle (three-dot menu) to invert selections."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:e=>t.jsx(zr,{...e})};function $r(e){const[n,r]=i.useState(void 0),l=e.onFilterRemoved,o=i.useCallback(a=>{console.log("Removed filter:",a),l==null||l(a)},[l]),c=e.onFilterClauseChanged,d=i.useCallback(a=>{r(a),c==null||c(a)},[c]);return t.jsxs("div",{style:Me,children:[t.jsx("div",{style:ke,children:t.jsx(f,{objectType:u,filterDefinitions:x,...e,onFilterRemoved:o,filterClause:n,onFilterClauseChanged:d})}),t.jsx("div",{style:W,children:t.jsx(Ae,{objectType:u,filter:n})})]})}const he={args:{title:"Employee Filters",showResetButton:!0,showActiveFilterCount:!0,enableSorting:!0},parameters:{docs:{source:{code:`const [filterClause, setFilterClause] = useState(undefined);

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
</div>`}}},render:e=>t.jsx($r,{...e})};function Jr(e){const n=je(),r=i.useMemo(()=>n(u).where({department:"Marketing"}),[n]),[l,o]=i.useState(void 0),c=e.onFilterClauseChanged,d=i.useCallback(a=>{o(a),c==null||c(a)},[c]);return t.jsxs("div",{style:Me,children:[t.jsx("div",{style:ke,children:t.jsx(f,{objectType:u,objectSet:r,filterDefinitions:x,...e,filterClause:l,onFilterClauseChanged:d})}),t.jsx("div",{style:W,children:t.jsx(Ae,{objectType:u,objectSet:r,filter:l})})]})}const Se={args:{title:"Marketing Employees",showResetButton:!0,showActiveFilterCount:!0},parameters:{docs:{description:{story:"Demonstrates using a pre-filtered objectSet to scope both FilterList aggregations and ObjectTable data to a subset of employees."},source:{code:`const client = useOsdkClient();
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
/>`}}},render:e=>t.jsx(Jr,{...e})};function Qr(e){const[n,r]=i.useState(x),l=e.onFilterRemoved,o=i.useCallback(c=>{r(d=>d.filter(a=>"key"in a?a.key!==c:!0)),l==null||l(c)},[l]);return t.jsx("div",{style:b,children:t.jsx(f,{objectType:u,filterDefinitions:n,...e,onFilterRemoved:o})})}const be={name:"Removable Filters",args:{title:"Removable Filters",showActiveFilterCount:!0},parameters:{docs:{description:{story:"When `onFilterRemoved` is provided, each filter item shows a remove button (X) on hover. Clicking it removes the filter from the list."},source:{code:`const [definitions, setDefinitions] = useState(filterDefinitions);

const handleFilterRemoved = (filterKey) => {
  setDefinitions(prev => prev.filter(def => def.key !== filterKey));
};

<FilterList
  objectType={Employee}
  filterDefinitions={definitions}
  onFilterRemoved={handleFilterRemoved}
  title="Removable Filters"
/>`}}},render:e=>t.jsx(Qr,{...e})};function qr(e){const[n,r]=i.useState(void 0),l=i.useMemo(()=>[{type:"STATIC_VALUES",key:"department",label:"Department (static)",filterComponent:"LISTOGRAM",values:["Marketing","Operations","Finance","Product"],filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"}},{type:"STATIC_VALUES",key:"locationCity",label:"Office Location",filterComponent:"SINGLE_SELECT",values:["New York","San Francisco","London","Tokyo"],filterState:{type:"SELECT",selectedValues:[]}},{type:"STATIC_VALUES",key:"team",label:"Team (multi-select)",filterComponent:"MULTI_SELECT",values:["Alpha","Beta","Gamma","Delta"],filterState:{type:"SELECT",selectedValues:[]}},{type:"STATIC_VALUES",id:"custom-status",key:"status",label:"Status (custom clause)",filterComponent:"LISTOGRAM",values:["Active","Inactive"],filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"},toWhereClause:d=>{if(d.type!=="EXACT_MATCH"||d.values.length===0)return;const a=d.values,S=a.includes("Active"),E=a.includes("Inactive");if(S&&E)return{$or:[{employeeStatus:"Active"},{employeeStatus:"Inactive"}]};if(S)return{employeeStatus:"Active"};if(E)return{employeeStatus:"Inactive"}}}],[]),o=e.onFilterClauseChanged,c=i.useCallback(d=>{r(d),o==null||o(d)},[o]);return t.jsxs("div",{style:B,children:[t.jsx("div",{style:b,children:t.jsx(f,{objectType:u,filterDefinitions:l,...e,filterClause:n,onFilterClauseChanged:c})}),t.jsxs("div",{style:W,children:[t.jsx("strong",{children:"Filter Clause (JSON):"}),t.jsx("pre",{style:Q,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const Te={parameters:{docs:{description:{story:"Use `STATIC_VALUES` filter definitions to provide a fixed list of values instead of fetching from OSDK aggregation. Supports LISTOGRAM, SINGLE_SELECT, MULTI_SELECT, and TEXT_TAGS components. Optionally provide a `toWhereClause` function for custom clause generation."},source:{code:`const filterDefinitions = [
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
/>`}}},render:e=>t.jsx(qr,{...e})};function Zr(e){const[n,r]=i.useState(void 0),[l,o]=i.useState(x),c=e.onFilterRemoved,d=i.useCallback(R=>{o(g=>g.filter(h=>"key"in h?h.key!==R:!0)),c==null||c(R)},[c]),a=e.onReset,S=i.useCallback(()=>{o(x),a==null||a()},[a]),E=e.onFilterClauseChanged,L=i.useCallback(R=>{r(R),E==null||E(R)},[E]);return t.jsxs("div",{style:Me,children:[t.jsx("div",{style:ke,children:t.jsx(f,{objectType:u,filterDefinitions:l,titleIcon:Fn,...e,onReset:S,onFilterRemoved:d,filterClause:n,onFilterClauseChanged:L})}),t.jsx("div",{style:W,children:t.jsx(Ae,{objectType:u,filter:n})})]})}const Ee={name:"Full Featured",args:{title:"Employee Filters",showResetButton:!0,showActiveFilterCount:!0,enableSorting:!0},parameters:{docs:{description:{story:"Demonstrates all filter list features together: collapse, reset, active count, sorting, removable filters, per-filter search, exclude toggle, and controlled where clause driving an ObjectTable."},source:{code:`// All features combined: collapse, sort, search, exclude, remove, reset

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
/>`}}},render:e=>{const[,n]=Tn(),r=e.onCollapsedChange,l=i.useCallback(o=>{n({collapsed:o}),r==null||r(o)},[n,r]);return t.jsx(Zr,{...e,onCollapsedChange:l})}};function ei(e){const[n,r]=i.useState(void 0),l=i.useMemo(()=>[{type:"HAS_LINK",linkName:"lead",label:"Has Manager",filterState:{type:"hasLink",hasLink:!1}}],[]),o=e.onFilterClauseChanged,c=i.useCallback(d=>{r(d),o==null||o(d)},[o]);return t.jsxs("div",{style:B,children:[t.jsx("div",{style:b,children:t.jsx(f,{objectType:u,filterDefinitions:l,...e,filterClause:n,onFilterClauseChanged:c})}),t.jsxs("div",{style:W,children:[t.jsx("strong",{children:"Filter Clause (JSON):"}),t.jsx("pre",{style:Q,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const ge={name:"Linked Property Filters",parameters:{docs:{description:{story:"Demonstrates filtering on properties of linked objects. HAS_LINK filters objects based on whether they have a linked object. "},source:{code:`// HAS_LINK and LINKED_PROPERTY filter definitions
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
/>`}}},render:e=>t.jsx(ei,{...e})},ti={type:"PROPERTY",id:"combined-department",key:"department",label:"Department",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},ni={type:"PROPERTY",id:"combined-locationCity",key:"locationCity",label:"Location City",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}},ri={type:"LINKED_PROPERTY",id:"combined-lead-name",linkName:"lead",reverseLinkName:"peeps",linkedPropertyKey:"fullName",linkedFilterComponent:"MULTI_SELECT",linkedFilterState:{type:"SELECT",selectedValues:[]},filterState:{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:[]}},label:"Manager Name"},ii=[ri,ti,ni];function li(e){const n=je(),r=i.useMemo(()=>n(u),[n]),[l,o]=i.useState(void 0),[c,d]=i.useState(r),a=e.onFilterClauseChanged,S=i.useCallback(E=>{o(E),a==null||a(E)},[a]);return t.jsxs("div",{style:Me,children:[t.jsx("div",{style:ke,children:t.jsx(f,{...e,objectType:u,objectSet:r,filterDefinitions:ii,filterClause:l,onFilterClauseChanged:S,onEffectiveObjectSet:d,showFilteredOutValues:!0})}),t.jsx("div",{style:W,children:t.jsx(Ae,{objectType:u,objectSet:c})})]})}const ve={name:"Combined linked + direct filters (zero-count filtered-out rows)",parameters:{docs:{description:{story:"A linked filter (Manager Name) and direct property filters coexist in one FilterList. Pass the unfiltered scope as `objectSet`; FilterList applies the linked-filter narrowing internally and emits the fully-narrowed `ObjectSet` via `onEffectiveObjectSet` for the table. With `showFilteredOutValues`, direct-facet values absent under the active linked filter render as greyed-out count=0 filtered-out rows."},source:{code:`const baseObjectSet = useMemo(() => client(Employee), [client]);
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
<ObjectTable objectType={Employee} objectSet={effectiveObjectSet} />`}}},render:e=>t.jsx(li,{...e})};function oi({filterState:e,onFilterStateChanged:n}){const r=i.useCallback(o=>{const c=o.target.value;n({type:"custom",customState:{value:c}})},[n]),l=i.useCallback(()=>{n({type:"custom",customState:{value:""}})},[n]);return t.jsxs("div",{style:{padding:"12px 0",display:"flex",gap:"8px"},children:[t.jsx("input",{type:"text",value:e.customState.value,onChange:r,placeholder:"Enter name substring...",style:{flex:1,padding:"6px 8px",fontSize:"14px",border:"1px solid #ccc",borderRadius:"4px"}}),e.customState.value&&t.jsx("button",{onClick:l,style:{padding:"6px 12px",fontSize:"12px",backgroundColor:"#f5f5f5",border:"1px solid #ccc",borderRadius:"4px",cursor:"pointer"},children:"Clear"})]})}function si(e){const[n,r]=i.useState(void 0),l=i.useMemo(()=>[{type:"CUSTOM",key:"custom-name-contains",label:"Name Contains",filterComponent:"CUSTOM",filterState:{type:"custom",customState:{value:""}},renderInput:({filterState:d,onFilterStateChanged:a})=>t.jsx(oi,{filterState:d,onFilterStateChanged:a}),toWhereClause:d=>{var S;const a=(S=d.customState)==null?void 0:S.value;if(a)return{fullName:{$containsAnyTerm:a}}}}],[]),o=e.onFilterClauseChanged,c=i.useCallback(d=>{r(d),o==null||o(d)},[o]);return t.jsxs("div",{style:B,children:[t.jsx("div",{style:b,children:t.jsx(f,{objectType:u,filterDefinitions:l,...e,filterClause:n,onFilterClauseChanged:c})}),t.jsxs("div",{style:W,children:[t.jsx("strong",{children:"Filter Clause (JSON):"}),t.jsx("pre",{style:Q,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const Fe={name:"Custom Filters",parameters:{docs:{description:{story:"Custom filters provide full control over filtering logic and UI. The 'Name Contains' filter uses `renderInput` for a simple custom input. "},source:{code:`// Custom filter with renderInput
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
/>`}}},render:e=>t.jsx(si,{...e})},ai={type:"PROPERTY",id:"department-multi",key:"department",label:"Department",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}},ci={type:"PROPERTY",id:"department-single",key:"department",label:"Department (single)",filterComponent:"SINGLE_SELECT",filterState:{type:"SELECT",selectedValues:[]}},di=[K,ai,ci,_e],Re={name:"No value rendering",parameters:{docs:{description:{story:"Empty/null filter values render via the canonical `<NoValueLabel />` component — italic, muted, with the literal text 'No value' — across listogram buckets, single-select dropdown options, multi-select dropdown options, and multi-select chips. The mock dataset includes one Employee with `department: \"\"` so the No value row is visible in the listogram."}}},render:()=>t.jsx("div",{style:b,children:t.jsx(f,{objectType:u,filterDefinitions:di})})},ui={type:"PROPERTY",id:"locationCity-single",key:"locationCity",label:"Location City (single)",filterComponent:"SINGLE_SELECT",filterState:{type:"SELECT",selectedValues:[]}},pi={type:"LINKED_PROPERTY",linkName:"lead",reverseLinkName:"peeps",linkedPropertyKey:"department",linkedFilterComponent:"MULTI_SELECT",linkedFilterState:{type:"SELECT",selectedValues:[]},filterState:{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:[]}},label:"Manager Department (linked multi)"},mi={type:"LINKED_PROPERTY",linkName:"lead",reverseLinkName:"peeps",linkedPropertyKey:"locationCity",linkedFilterComponent:"SINGLE_SELECT",linkedFilterState:{type:"SELECT",selectedValues:[]},filterState:{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:[]}},label:"Manager City (linked single)"},fi=new Map([["department",{type:"EXACT_MATCH",values:["Marketing","Research"]}],["jobTitle-multi",{type:"SELECT",selectedValues:["Marketing Manager","Chief Scientist"]}],["locationCity-single",{type:"SELECT",selectedValues:["Berlin"]}],["linkedProperty:lead:department",{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:["Marketing","Research"]}}],["linkedProperty:lead:locationCity",{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:["Berlin"]}}]]),yi=[K,vn,ui,pi,mi];function Ci(e){const n=je(),r=i.useMemo(()=>n(u),[n]),[l,o]=i.useState(void 0),c=i.useCallback(d=>{o(d)},[]);return t.jsxs("div",{style:B,children:[t.jsx("div",{style:b,children:t.jsx(f,{...e,objectType:u,objectSet:r,filterDefinitions:yi,initialFilterStates:fi,onFilterClauseChanged:c})}),t.jsxs("div",{style:W,children:[t.jsx("h4",{children:"Active where clause"}),t.jsx("pre",{style:Q,children:l?JSON.stringify(l,null,2):"(none)"})]})]})}const Le={name:"With initial filter states",parameters:{docs:{description:{story:"Pass `initialFilterStates` to hydrate filters from saved state (e.g. localStorage or URL params). Selections are restored on mount, including values that currently have zero matching rows — they appear with a count of 0 so users can see and clear them. Demonstrated across LISTOGRAM, MULTI_SELECT, SINGLE_SELECT, and LINKED_PROPERTY filters."},source:{code:`// "Research", "Chief Scientist", and "Berlin" are not in the current
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
/>`}}},render:e=>t.jsx(Ci,{...e})};var Xe,Ke,ze;ee.parameters={...ee.parameters,docs:{...(Xe=ee.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(Ot=(Dt=me.parameters)==null?void 0:Dt.docs)==null?void 0:Ot.source}}};var It,xt,Pt;fe.parameters={...fe.parameters,docs:{...(It=fe.parameters)==null?void 0:It.docs,source:{originalSource:`{
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
}`,...(Pt=(xt=fe.parameters)==null?void 0:xt.docs)==null?void 0:Pt.source}}};var Nt,wt,Vt;ye.parameters={...ye.parameters,docs:{...(Nt=ye.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
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
}`,...(bn=(Sn=Le.parameters)==null?void 0:Sn.docs)==null?void 0:bn.source}}};const yl=["Default","IntegerNumberRangeRounding","WithObjectSet","AddFilterMode","WithAllFilterTypes","WithTitleAndIcon","WithResetButton","WithActiveFilterCount","WithSorting","CollapsiblePanel","KeywordSearch","WithColorMap","WithRenderValue","WithRenderValueAsReactNode","WithListogramDisplayModes","WithHiddenCounts","WithCheckbox","CombinedWithObjectTable","CombinedWithFilteredObjectSet","WithRemovableFilters","WithStaticValues","FullFeatured","WithHasLinkFilter","CombinedWithLinkedFilter","WithCustomFilters","NoValueRendering","WithInitialFilterStates"];export{re as AddFilterMode,ce as CollapsiblePanel,Se as CombinedWithFilteredObjectSet,ve as CombinedWithLinkedFilter,he as CombinedWithObjectTable,ee as Default,Ee as FullFeatured,te as IntegerNumberRangeRounding,de as KeywordSearch,Re as NoValueRendering,se as WithActiveFilterCount,ie as WithAllFilterTypes,Ce as WithCheckbox,ue as WithColorMap,Fe as WithCustomFilters,ge as WithHasLinkFilter,ye as WithHiddenCounts,Le as WithInitialFilterStates,fe as WithListogramDisplayModes,ne as WithObjectSet,be as WithRemovableFilters,pe as WithRenderValue,me as WithRenderValueAsReactNode,oe as WithResetButton,ae as WithSorting,Te as WithStaticValues,le as WithTitleAndIcon,yl as __namedExportsOrder,fl as default};
