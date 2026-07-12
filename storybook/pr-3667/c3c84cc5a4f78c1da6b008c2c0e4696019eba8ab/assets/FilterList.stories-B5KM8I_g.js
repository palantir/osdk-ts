var Bn=Object.defineProperty;var Hn=(t,n,r)=>n in t?Bn(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r;var Me=(t,n,r)=>Hn(t,typeof n!="symbol"?n+"":n,r);import{r as i,j as e,f as Yn}from"./iframe-CwoAXq9w.js";import{S as Gn}from"./MultiColumnSortDialog-B4XjOval.js";import{b as Wn,s as Un,c as Xn,f as Kn,d as D,S as $n,R as Be,O as zn,e as Jn,C as qn,E as Qn,h as Zn,i as er,g as X,u as tr,a as He,F as nr,j as rr}from"./getFilterLabel-DE1uw4j5.js";import{c as K}from"./index-D9Zjfa1o.js";import{u as ir,b as sr,c as or,d as Ye,s as lr,K as ar,P as cr,a as dr,e as pr,f as ur,g as mr,v as fr,h as yr}from"./DraggableList-BfFuXdsC.js";import{B as I}from"./Button-DW8xrm3Y.js";import{I as hr}from"./Input-0AZJ2Hid.js";import{w as Cr}from"./withOsdkMetrics-CapMcR8H.js";import{O as En}from"./object-table-Qoo5nmSx.js";import{E as p}from"./Employee-BAk2o20h.js";import{u as je}from"./useOsdkClient-CdnXHgNl.js";import"./preload-helper-BikimO2v.js";import"./ActionButton-DBVvxxNx.js";import"./Dialog-C5BiYfIA.js";import"./cross-Bc5p1FSk.js";import"./svgIconContainer-BJEqVzej.js";import"./useBaseUiId-BboOs85c.js";import"./InternalBackdrop-CIVHg3Ds.js";import"./composite-c9bCA0hK.js";import"./index-D967pqEx.js";import"./index-Dka6Ak-A.js";import"./index-XNv1uUQZ.js";import"./MenuTrigger-Do5YrGO0.js";import"./CompositeItem-BaOK_hwt.js";import"./ToolbarRootContext-CNH3IivW.js";import"./getDisabledMountTransitionStyles-Dr9HbiZ5.js";import"./getPseudoElementBounds-Dk6C1cLo.js";import"./caret-down-CIuQc6pr.js";import"./chevron-down-CFoBp37B.js";import"./useValueChanged-BdslLfQh.js";import"./Switch-DP95Eg86.js";import"./toNumber-IsBXMsK9.js";import"./PopoverPopup-DE2J03HK.js";import"./useControlled-CoAQv9N8.js";import"./assertUnreachable-tCT10eXl.js";import"./index-ClnMgKgk.js";import"./Checkbox-bk2JvKKj.js";import"./minus-DK0B5VIQ.js";import"./SkeletonBar-CPqAoycC.js";import"./makeExternalStore-CX6C8tTz.js";import"./small-cross-DZl_aikX.js";import"./Table-C8HW5nJU.js";import"./useEventCallback-OyEgmEDC.js";import"./LoadingCell-BUhXwdTk.js";import"./ColumnConfigDialog-DGPs6Oz5.js";import"./CollapsiblePanel-px4q1VBP.js";import"./index-UeX6jYz5.js";import"./error-TyY4lHoh.js";import"./BaseCbacBanner-CzHf0FHH.js";import"./Tooltip-DP49belO.js";import"./DropdownField-Bw9GeLPL.js";const N={filterList:"FilterList-module__filterList___wmzCNbkH",filterListCollapsed:"FilterList-module__filterListCollapsed___CGrK9txF",expandedContent:"FilterList-module__expandedContent___aEk2i2At",scrollableContent:"FilterList-module__scrollableContent___F3O1nfAo",hiddenContent:"FilterList-module__hiddenContent___PHKe-yWc",expandButton:"FilterList-module__expandButton___-QlY8-ot",collapsedLabel:"FilterList-module__collapsedLabel___QA0UtRts",addButtonContainer:"FilterList-module__addButtonContainer___kq300FEV",addButton:"FilterList-module__addButton___oD4yvwyZ"},Z={content:"FilterListContent-module__content___fG0EgVp6",dragOverlay:"FilterListContent-module__dragOverlay___Tjd1YpmI"},ke={errorContainer:"ErrorBoundary-module__errorContainer___FIguBDDu",errorMessage:"ErrorBoundary-module__errorMessage___jUsXUqFA",retryButton:"ErrorBoundary-module__retryButton___PZVWZOm7"};class Sr extends i.Component{constructor(){super(...arguments);Me(this,"state",{hasError:!1,error:null});Me(this,"handleRetry",()=>{this.setState({hasError:!1,error:null})})}static getDerivedStateFromError(r){return{hasError:!0,error:r}}componentDidCatch(r,s){var o,a;console.error("[ErrorBoundary]",r),console.error("[ErrorBoundary] Component stack:",s.componentStack),(a=(o=this.props).onError)==null||a.call(o,r)}render(){return this.state.hasError?this.props.fallback?this.props.fallback:e.jsxs("div",{className:ke.errorContainer,children:[e.jsx("p",{className:ke.errorMessage,children:this.props.errorMessage??"Something went wrong"}),e.jsx(I,{className:ke.retryButton,onClick:this.handleRetry,"aria-label":"Retry",children:"Retry"})]}):this.props.children}}function Tr(){return e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true",children:[e.jsx("circle",{cx:"5.5",cy:"3.5",r:"1.5"}),e.jsx("circle",{cx:"10.5",cy:"3.5",r:"1.5"}),e.jsx("circle",{cx:"5.5",cy:"8",r:"1.5"}),e.jsx("circle",{cx:"10.5",cy:"8",r:"1.5"}),e.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5"}),e.jsx("circle",{cx:"10.5",cy:"12.5",r:"1.5"})]})}function Er({definition:t,filterKey:n,label:r,filterState:s,onFilterStateChanged:o,onFilterRemoved:a,renderInput:c,searchField:l,dragHandleAttributes:u,dragHandleListeners:f,className:S,style:v}){const[g,F]=i.useState({type:"closed"}),[L,d]=i.useState(!1),m=i.useCallback(M=>{o(n,M)},[n,o]),h=i.useCallback(()=>{F(M=>M.type==="closed"?{type:"open",query:""}:{type:"closed"})},[]),R=i.useCallback(M=>{F({type:"open",query:M.target.value})},[]),_=i.useCallback(()=>{F({type:"open",query:""})},[]),G=i.useCallback(()=>{a==null||a(n)},[n,a]),w=i.useCallback(()=>{d(M=>!M)},[]),V=i.useCallback(M=>{M==null||M.focus({preventScroll:!0})},[]),k=i.useMemo(()=>Wn(s),[s]),W=Un(k),E=Xn(k)&&l!==!1,C=W,T=Kn(s),j=g.type==="open",x=g.type==="open"?g.query:"",B=g.type==="open"?g.query:void 0;return e.jsxs("div",{className:K(D.filterItem,S),style:v,"data-has-selection":T||void 0,children:[e.jsxs("div",{className:D.itemHeader,children:[u&&e.jsx(I,{className:D.dragHandle,"aria-label":`Reorder ${r}`,...u,...f,children:e.jsx(Tr,{})}),e.jsx("span",{className:D.itemLabel,children:r}),E&&e.jsx(I,{className:D.headerActionButton,onClick:h,"aria-label":"Search values","aria-pressed":j,children:e.jsx($n,{})}),a&&e.jsx(I,{className:D.headerActionButton,onClick:G,"aria-label":`Remove ${r} filter`,children:e.jsx(Be,{})}),C&&e.jsx(I,{className:D.headerActionButton,onClick:w,"aria-label":"More actions","aria-pressed":L,children:e.jsx(zn,{})})]}),j&&e.jsxs("div",{className:D.searchRow,children:[e.jsx(hr,{type:"text",className:D.searchInput,value:x,onChange:R,placeholder:"Search property values...","aria-label":"Search property values",ref:V}),x&&e.jsx(I,{type:"button",className:D.searchClearButton,onClick:_,"aria-label":"Clear search",children:e.jsx(Be,{})})]}),e.jsx("div",{className:D.itemContent,children:e.jsx(Sr,{errorMessage:"Error loading filter",children:c({definition:t,filterKey:n,filterState:s,onFilterStateChanged:m,searchQuery:B,excludeRowOpen:L})})})]})}const De=i.memo(Er);function br({id:t,definition:n,filterKey:r,label:s,filterState:o,onFilterStateChanged:a,onFilterRemoved:c,renderInput:l,searchField:u}){const{attributes:f,listeners:S,setNodeRef:v,transform:g,transition:F,isDragging:L}=ir({id:t});return e.jsx("div",{ref:v,style:i.useMemo(()=>({transform:sr.Transform.toString(g),transition:F??void 0}),[g,F]),className:K(L&&D.dragging),children:e.jsx(De,{definition:n,filterKey:r,label:s,filterState:o,onFilterStateChanged:a,onFilterRemoved:c,renderInput:l,searchField:u,dragHandleAttributes:f,dragHandleListeners:S})})}const gr=i.memo(br),vr=({transform:t})=>({...t,x:0}),Lr={distance:8},Rr=[vr],Fr={role:"button",tabIndex:-1,"aria-disabled":!0,"aria-pressed":void 0,"aria-roledescription":"sortable","aria-describedby":""};function jr({filterDefinitions:t,filterStates:n,onFilterStateChanged:r,onFilterRemoved:s,onOrderChange:o,renderInput:a,getFilterKey:c,getFilterLabel:l,getEmptyDisplayState:u,enableSorting:f,className:S,style:v}){const[g,F]=i.useState(null),L=i.useMemo(()=>f&&t?t.map(E=>c(E)):[],[f,t,c]),d=or(Ye(cr,{activationConstraint:Lr}),Ye(ar,{coordinateGetter:lr})),m=g!=null?L.indexOf(String(g)):-1,h=m>=0&&t?t[m]:void 0,R=i.useMemo(()=>h?c(h):void 0,[h,c]),_=i.useMemo(()=>{const E=new Map;if(!u||!t)return E;for(const C of t){const T=u(C);T!=null&&E.set(c(C),T)}return E},[t,u,c]),G=i.useCallback(E=>{F(E.active.id)},[]),w=i.useCallback(E=>{F(null);const{active:C,over:T}=E;if(!T||C.id===T.id)return;const j=L.indexOf(String(C.id)),x=L.indexOf(String(T.id));if(j!==-1&&x!==-1){const B=dr(L,j,x);o==null||o(B)}},[L,o]),V=i.useCallback(()=>{F(null)},[]),k=i.useMemo(()=>{const E=C=>{const T=L.indexOf(String(C)),j=T>=0?t==null?void 0:t[T]:void 0;return j?l(j):"filter"};return{onDragStart({active:C}){return`Picked up ${E(C.id)} filter`},onDragOver({over:C}){return C?`Moved to position ${L.indexOf(String(C.id))+1} of ${L.length}`:"Not over a droppable area"},onDragEnd({active:C,over:T}){const j=E(C.id);return T&&C.id!==T.id?`Dropped ${j} filter at position ${L.indexOf(String(T.id))+1}`:`Dropped ${j} filter back in its original position`},onDragCancel({active:C}){return`Cancelled dragging ${E(C.id)} filter`}}},[t,L,l]),W=i.useMemo(()=>({announcements:k}),[k]);return!t||t.length===0?e.jsx("div",{className:K(Z.content,S),style:v,"data-empty":"true"}):f?e.jsx("div",{className:K(Z.content,S),style:v,children:e.jsxs(pr,{sensors:d,collisionDetection:ur,modifiers:Rr,onDragStart:G,onDragEnd:w,onDragCancel:V,accessibility:W,children:[e.jsx(mr,{items:L,strategy:fr,children:t.map((E,C)=>{const T=L[C],j=c(E);return e.jsx(gr,{id:T,definition:E,filterKey:j,label:l(E),filterState:n.get(j)??_.get(j),onFilterStateChanged:r,onFilterRemoved:s,renderInput:a,searchField:E.searchField},T)})}),e.jsx(yr,{dropAnimation:null,className:Z.dragOverlay,children:h&&R&&e.jsx(De,{definition:h,filterKey:R,label:l(h),filterState:n.get(R)??_.get(R),onFilterStateChanged:r,onFilterRemoved:s,renderInput:a,searchField:h.searchField,dragHandleAttributes:Fr})})]})}):e.jsx("div",{className:K(Z.content,S),style:v,children:t.map(E=>{const C=c(E),T=n.get(C)??_.get(C);return e.jsx(De,{definition:E,filterKey:C,label:l(E),filterState:T,onFilterStateChanged:r,onFilterRemoved:s,renderInput:a,searchField:E.searchField},C)})})}const H={header:"FilterListHeader-module__header___dkKc0CO-",titleContainer:"FilterListHeader-module__titleContainer___KaePpQIx",title:"FilterListHeader-module__title___xqfWfSzK",titleIcon:"FilterListHeader-module__titleIcon___MQy-dec8",activeCount:"FilterListHeader-module__activeCount___GyBsnsQL",actions:"FilterListHeader-module__actions___YZA7zmGc",collapseButton:"FilterListHeader-module__collapseButton___N1-sj3B3",resetButton:"FilterListHeader-module__resetButton___jLcUypov"};function Ar({title:t,titleIcon:n,collapsed:r=!1,onCollapsedChange:s,showResetButton:o,onReset:a,showActiveFilterCount:c,activeFilterCount:l=0,canReset:u,hasVisibilityChanges:f=!1}){const S=s!=null,v=i.useCallback(()=>{s==null||s(!r)},[s,r]),g=u!=null?!u:l===0&&!f;return e.jsxs("div",{className:H.header,children:[e.jsxs("div",{className:H.titleContainer,children:[n&&e.jsx("span",{className:H.titleIcon,children:n}),t&&e.jsx("span",{className:H.title,children:t}),c&&l>0&&e.jsxs("span",{className:H.activeCount,children:["(",l,")"]})]}),e.jsxs("div",{className:H.actions,children:[o&&e.jsxs(I,{className:H.resetButton,onClick:a,disabled:g,children:[e.jsx(Jn,{})," Reset filters"]}),S&&e.jsx(I,{className:H.collapseButton,onClick:v,"aria-expanded":!r,"aria-label":r?"Expand filters":"Collapse filters",children:e.jsx(qn,{})})]})]})}const _r=i.memo(Ar);function Mr(t){const{title:n,titleIcon:r,collapsed:s=!1,onCollapsedChange:o,filterDefinitions:a,filterStates:c,onFilterStateChanged:l,renderInput:u,getFilterKey:f,getFilterLabel:S,getEmptyDisplayState:v,activeFilterCount:g,onReset:F,onFilterAdded:L,onFilterRemoved:d,onOrderChange:m,showResetButton:h=!1,showActiveFilterCount:R=!1,canReset:_,hasVisibilityChanges:G,enableSorting:w,className:V,renderAddFilterButton:k}=t,[W,E]=i.useState(null),C=n||r||h||R||o,T=k!=null||L!=null,j=i.useCallback(()=>{o==null||o(!1)},[o]),x=s&&o!=null;return e.jsxs("div",{className:K(N.filterList,V),children:[x&&e.jsxs("div",{className:N.filterListCollapsed,"data-collapsed":"true",children:[e.jsx(I,{className:N.expandButton,onClick:j,"aria-label":"Expand filters",children:e.jsx(Qn,{})}),e.jsx("span",{className:N.collapsedLabel,children:n??"Filters"})]}),e.jsx("div",{ref:E,className:K(N.expandedContent,x&&N.hiddenContent),"data-active-count":g,children:e.jsxs(Zn,{value:W,children:[C&&e.jsx(_r,{title:n,titleIcon:r,collapsed:s,onCollapsedChange:o,showResetButton:h,onReset:F,showActiveFilterCount:R,activeFilterCount:g,canReset:_,hasVisibilityChanges:G}),e.jsx("div",{className:N.scrollableContent,children:e.jsx(jr,{filterDefinitions:a,filterStates:c,onFilterStateChanged:l,onFilterRemoved:d,onOrderChange:m,renderInput:u,getFilterKey:f,getFilterLabel:S,getEmptyDisplayState:v,enableSorting:w})}),T&&e.jsx("div",{className:N.addButtonContainer,children:k?k():e.jsx(I,{type:"button",className:N.addButton,onClick:L,children:"+ Add filter"})})]})})]})}const kr={trigger:"AddFilterPopover-module__trigger___8QQBrzPo"};function Dr({hiddenDefinitions:t,onShowFilter:n,renderTrigger:r}){const s=er();return e.jsx(Gn,{items:t,onItemSelected:n,trigger:r!=null?r():"+ Add filter",triggerClassName:r==null?kr.trigger:void 0,searchPlaceholder:"Search filters",emptyMessage:"No matching filters",collisionBoundary:s})}const xr=i.memo(Dr);function Ir(t,n){const r=i.useMemo(()=>(t==null?void 0:t.map(X))??[],[t]),s=i.useMemo(()=>(t==null?void 0:t.filter(d=>d.isVisible!==!1).map(X))??[],[t]),[o,a]=i.useState(()=>s);i.useEffect(()=>{a(s)},[s]);const c=i.useRef(n);c.current=n;const l=i.useCallback(d=>{if(!c.current)return;const m=new Set(d),h=r.filter(R=>!m.has(R));c.current(d,h)},[r]),u=i.useMemo(()=>{const d=new Map;if(t==null)return d;for(const m of t)d.set(X(m),m);return d},[t]),{visibleDefinitions:f,hiddenDefinitions:S}=i.useMemo(()=>{if(t==null)return{visibleDefinitions:[],hiddenDefinitions:[]};const d=new Set(o),m=[],h=[];for(const R of o){const _=u.get(R);_!=null&&m.push(_)}for(const R of r)if(!d.has(R)){const _=u.get(R);_!=null&&h.push(_)}return{visibleDefinitions:m,hiddenDefinitions:h}},[t,u,o,r]),v=i.useCallback(d=>{a(m=>{if(m.includes(d))return m;const h=[...m,d];return l(h),h})},[l]),g=i.useCallback(d=>{a(m=>{const h=m.filter(R=>R!==d);return l(h),h})},[l]),F=i.useCallback(d=>{a(m=>d.length===m.length&&d.every((h,R)=>h===m[R])?m:(l(d),d))},[l]),L=i.useCallback(()=>{a(d=>s.length===d.length&&s.every((m,h)=>m===d[h])?d:(l(s),s))},[s,l]);return{visibleDefinitions:f,hiddenDefinitions:S,showFilter:v,hideFilter:g,reorderVisible:F,hasVisibilityChanges:i.useMemo(()=>o.length!==s.length?!0:!o.every((d,m)=>d===s[m]),[o,s]),resetVisibility:L}}function Ge(t){switch(t){case"MULTI_SELECT":case"SINGLE_SELECT":return{type:"SELECT",selectedValues:[]};case"LISTOGRAM":case"TEXT_TAGS":return{type:"EXACT_MATCH",values:[]};case"CONTAINS_TEXT":return{type:"CONTAINS_TEXT",value:void 0};case"TIMELINE":return{type:"TIMELINE",startDate:void 0,endDate:void 0};case"NUMBER_RANGE":case"DATE_RANGE":case"SINGLE_DATE":case"MULTI_DATE":case"TOGGLE":return;default:return}}function Or(t){switch(t.type){case"PROPERTY":case"STATIC_VALUES":return Ge(t.filterComponent);case"LINKED_PROPERTY":{const n=Ge(t.linkedFilterComponent);return n==null?void 0:{type:"linkedProperty",linkedFilterState:n}}case"HAS_LINK":return{type:"hasLink",hasLink:!1};case"KEYWORD_SEARCH":case"CUSTOM":return;default:return}}const Nr={};function Pr(t){const{objectType:n,objectSet:r,title:s,titleIcon:o,collapsed:a,onCollapsedChange:c,filterDefinitions:l,addFilterMode:u="uncontrolled",showResetButton:f=!1,onReset:S,showActiveFilterCount:v=!1,showFilteredOutValues:g=!1,className:F,enableSorting:L,onFilterAdded:d,onFilterRemoved:m,onFilterVisibilityChange:h,renderAddFilterButton:R}=t,{filterStates:_,setFilterState:G,clearFilterState:w,perFilterWhereClauses:V,perFilterLinkedFilters:k,activeFilterCount:W,hasChangesFromInitial:E,reset:C}=tr(t),T=u==="uncontrolled",j=i.useCallback((A,Q)=>{if(!h)return;const _e=[...A.map(J=>({filterKey:J,isVisible:!0})),...Q.map(J=>({filterKey:J,isVisible:!1}))];h(_e)},[h]),{visibleDefinitions:x,hiddenDefinitions:B,showFilter:M,hideFilter:Oe,reorderVisible:Ne,hasVisibilityChanges:_n,resetVisibility:Pe}=Ir(l,T?j:void 0),Mn=E||_n,kn=i.useCallback(()=>{C(),Pe(),S==null||S()},[C,Pe,S]),Dn=i.useMemo(()=>{if(l!=null)return l.filter(A=>A.isVisible!==!1)},[l]),xn=T?x:Dn,In=i.useCallback(A=>{w(A),T&&Oe(A),m==null||m(A)},[w,T,Oe,m]),we=i.useCallback(A=>{M(A),d==null||d(A,l??[])},[M,d,l]),On=i.useCallback(A=>{Ne(A)},[Ne]),Ve=i.useMemo(()=>B.map(A=>({key:X(A),label:He(A)})),[B]),Nn=i.useMemo(()=>T?B.length===0?void 0:()=>e.jsx(xr,{hiddenDefinitions:Ve,onShowFilter:we,renderTrigger:R}):R,[T,B.length,Ve,we,R]),Pn=T?In:m;return e.jsx(Mr,{title:s,titleIcon:o,collapsed:a,onCollapsedChange:c,filterDefinitions:xn,filterStates:_,onFilterStateChanged:G,renderInput:i.useCallback(({definition:A,filterKey:Q,filterState:_e,onFilterStateChanged:J,searchQuery:wn,excludeRowOpen:Vn})=>e.jsx(nr,{objectType:n,objectSet:r,definition:A,filterState:_e,onFilterStateChanged:J,whereClause:V.get(Q)??Nr,linkedFilters:k.get(Q)??rr,showFilteredOutValues:g,searchQuery:wn,excludeRowOpen:Vn}),[n,r,V,k,g]),getFilterKey:X,getFilterLabel:He,getEmptyDisplayState:Or,activeFilterCount:W,onReset:kn,showResetButton:f,showActiveFilterCount:v,canReset:Mn,enableSorting:L,onFilterRemoved:Pn,onOrderChange:On,className:F,renderAddFilterButton:Nn})}const y=Cr(Pr,"FilterList"),{useArgs:bn}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:U}=__STORYBOOK_MODULE_TEST__,z={type:"PROPERTY",id:"department",key:"department",label:"Department",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},xe={type:"PROPERTY",id:"team",key:"team",label:"Team",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},gn={type:"PROPERTY",id:"fullName",key:"fullName",label:"Full Name",filterComponent:"CONTAINS_TEXT",filterState:{type:"CONTAINS_TEXT"}},vn={type:"PROPERTY",id:"firstFullTimeStartDate",key:"firstFullTimeStartDate",label:"Start Date",filterComponent:"DATE_RANGE",filterState:{type:"DATE_RANGE"},clickToFilter:!0,formatDate:t=>t.toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric"})},Ae={type:"PROPERTY",id:"employeeNumber",key:"employeeNumber",label:"Employee Number",filterComponent:"NUMBER_RANGE",filterState:{type:"NUMBER_RANGE"},clickToFilter:!0},q={type:"PROPERTY",id:"locationCity",key:"locationCity",label:"Location City",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},Ie={type:"PROPERTY",id:"jobTitle-multi",key:"jobTitle",label:"Job Title",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}},P=[z,xe,gn,vn,Ie,Ae,q],b={width:320,height:600},O={display:"flex",gap:16},Y={flex:1},$={marginTop:8,padding:12,background:"#f5f5f5",borderRadius:4,fontSize:12,overflow:"auto",maxHeight:560},Ln={display:"flex",gap:16,height:600},Rn={width:320,flexShrink:0},Fn=e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("path",{d:"M1 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1.5a1 1 0 0 1-.293.707L10 8.914V13a1 1 0 0 1-.553.894l-2 1A1 1 0 0 1 6 14v-5.086L1.293 4.207A1 1 0 0 1 1 3.5V2z"})}),bs={title:"Components/FilterList",component:y,tags:["beta"],args:{title:"Filters",enableSorting:!1,showResetButton:!1,showActiveFilterCount:!1,collapsed:!1,onFilterClauseChanged:U(),onFilterStateChanged:U(),onFilterAdded:U(),onFilterRemoved:U(),onFilterVisibilityChange:U(),onCollapsedChange:U(),onReset:U()},parameters:{msw:{handlers:[...Yn.handlers]},controls:{expanded:!0}},argTypes:{objectType:{description:"The object type definition for the objects being filtered",control:!1},objectSet:{description:"Optional object set to scope aggregation queries",control:!1},filterDefinitions:{description:"Array of filter definitions. If not provided, all filterable properties are auto-discovered.",control:!1},title:{description:"Title displayed in the filter list header",control:"text"},titleIcon:{description:"Icon displayed next to the title",control:!1},filterClause:{description:"The current where clause. If provided, the filter clause is controlled.",control:!1},onFilterClauseChanged:{description:"Called when the filter clause changes. Required in controlled mode.",control:!1,table:{category:"Events"}},onFilterStateChanged:{description:"Called when an individual filter's state changes",control:!1,table:{category:"Events"}},enableSorting:{description:"Enable drag-and-drop reordering of filters",control:"boolean",table:{defaultValue:{summary:"false"}}},collapsed:{description:"Whether the filter list panel is collapsed",control:"boolean"},onCollapsedChange:{description:"Called when the collapsed state changes",control:!1,table:{category:"Events"}},showResetButton:{description:"Show reset filters button in header",control:"boolean",table:{defaultValue:{summary:"false"}}},onReset:{description:"Called when the reset button is clicked",control:!1,table:{category:"Events"}},showActiveFilterCount:{description:"Show count of active filters in header",control:"boolean",table:{defaultValue:{summary:"false"}}},onFilterAdded:{description:"Called when a filter is added. If provided, users can add filters.",control:!1,table:{category:"Events"}},onFilterRemoved:{description:"Called when a filter is removed. If provided, users can remove filters.",control:!1,table:{category:"Events"}},onFilterVisibilityChange:{description:"Called when filter visibility or ordering changes (reorder, add, remove).",control:!1,table:{category:"Events"}},addFilterMode:{description:'Controls how filter add/remove is managed. "uncontrolled" manages visibility internally; "controlled" leaves it to the consumer.',control:"select",options:["controlled","uncontrolled"],table:{category:"Advanced",defaultValue:{summary:'"uncontrolled"'}}},renderAddFilterButton:{description:"Custom render function for the add filter button.",control:!1,table:{category:"Advanced"}},initialFilterStates:{description:"Initial filter states for hydrating from external storage. Merged over definition defaults on mount.",control:!1,table:{category:"Advanced"}},className:{description:"Additional CSS class name",control:"text"}}},ee={parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:({objectType:t,objectSet:n,...r})=>{const s=i.useMemo(()=>[z,q],[]);return e.jsx("div",{style:b,children:e.jsx(y,{objectType:p,filterDefinitions:s,...r})})}},te={parameters:{docs:{description:{story:"Repro for the integer-typed `NUMBER_RANGE` rounding fix. `employeeNumber` is an `integer` property, so histogram bucket boundaries — `(maxValue - minValue) / 20` — are usually fractional. Click any bar in the histogram. The Min/Max boxes must show whole integers (e.g. `657495073`), not fractional values (e.g. `657495073.4`)."}}},render:({objectType:t,objectSet:n,...r})=>{const s=i.useMemo(()=>[Ae],[]);return e.jsx("div",{style:b,children:e.jsx(y,{objectType:p,filterDefinitions:s,...r})})}};function wr(t){const n=je(),r=i.useMemo(()=>n(p).where({department:"Marketing"}),[n]),s=i.useMemo(()=>[xe,q],[]);return e.jsx("div",{style:b,children:e.jsx(y,{objectType:p,objectSet:r,filterDefinitions:s,...t})})}const ne={parameters:{docs:{description:{story:"Pass an `objectSet` prop to scope filter aggregations to a subset of objects. Here the object set is filtered to Marketing department employees, so the listogram counts reflect only that subset."},source:{code:`const client = useOsdkClient();
const objectSet = client(Employee).where({ department: "Marketing" });

<FilterList
  objectType={Employee}
  objectSet={objectSet}
  filterDefinitions={[
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:t=>e.jsx(wr,{...t})};function Vr(t){const n=i.useMemo(()=>[z,xe,{...gn,isVisible:!1},{...vn,isVisible:!1},{...Ae,isVisible:!1},{...q,isVisible:!1}],[]);return e.jsx("div",{style:b,children:e.jsx(y,{objectType:p,filterDefinitions:n,addFilterMode:"uncontrolled",...t})})}const re={args:{showResetButton:!0},parameters:{docs:{source:{code:`const filterDefinitions = [
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
/>`}}},render:t=>e.jsx(Vr,{...t})};function Br(t){const[n,r]=i.useState(void 0),s=t.onFilterClauseChanged,o=i.useCallback(a=>{r(a),s==null||s(a)},[s]);return e.jsxs("div",{style:O,children:[e.jsx("div",{style:b,children:e.jsx(y,{objectType:p,filterDefinitions:P,...t,filterClause:n,onFilterClauseChanged:o})}),e.jsxs("div",{style:Y,children:[e.jsx("strong",{children:"Filter Clause (JSON):"}),e.jsx("pre",{style:$,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const ie={parameters:{docs:{description:{story:"All filter component types with a controlled where clause. Hover filter items to reveal search and exclude actions."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>`}}},render:t=>e.jsx(Br,{...t})},se={args:{title:"Employee Filters"},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  titleIcon={<svg>...</svg>}
/>`}}},render:({objectType:t,objectSet:n,...r})=>e.jsx("div",{style:b,children:e.jsx(y,{objectType:p,filterDefinitions:P,titleIcon:Fn,...r})})};function Hr(t){const n=t.onReset,r=i.useCallback(()=>{console.log("Reset clicked"),n==null||n()},[n]);return e.jsx("div",{style:b,children:e.jsx(y,{objectType:p,filterDefinitions:P,...t,onReset:r})})}const oe={args:{showResetButton:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showResetButton={true}
  onReset={() => console.log("Reset clicked")}
/>`}}},render:t=>e.jsx(Hr,{...t})},le={args:{showActiveFilterCount:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showActiveFilterCount={true}
/>`}}},render:({objectType:t,objectSet:n,...r})=>e.jsx("div",{style:b,children:e.jsx(y,{objectType:p,filterDefinitions:P,...r})})},ae={args:{enableSorting:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  enableSorting={true}
/>`}}},render:({objectType:t,objectSet:n,...r})=>e.jsx("div",{style:b,children:e.jsx(y,{objectType:p,filterDefinitions:P,...r})})};function Yr(t){return e.jsx("div",{style:b,children:e.jsx(y,{objectType:p,filterDefinitions:P,...t})})}const ce={args:{title:"Employee Filters",showActiveFilterCount:!0},parameters:{docs:{description:{story:"Click the collapse button to minimize the filter panel. Active filter count is shown in the collapsed state."},source:{code:`const [collapsed, setCollapsed] = useState(false);

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  collapsed={collapsed}
  onCollapsedChange={setCollapsed}
  showActiveFilterCount={true}
/>`}}},render:t=>{const[,n]=bn(),r=t.onCollapsedChange,s=i.useCallback(o=>{n({collapsed:o}),r==null||r(o)},[n,r]);return e.jsx(Yr,{...t,onCollapsedChange:s})}},de={parameters:{docs:{source:{code:`const filterDefinitions = [
  { type: "KEYWORD_SEARCH", properties: ["fullName", "department", "jobTitle", "locationCity"], label: "Search" },
  { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:({objectType:t,objectSet:n,...r})=>{const s=i.useMemo(()=>[{type:"KEYWORD_SEARCH",properties:["fullName","department","jobTitle","locationCity"],label:"Search"},z,q],[]);return e.jsx("div",{style:b,children:e.jsx(y,{objectType:p,filterDefinitions:s,...r})})}};function Gr(t){const n=i.useMemo(()=>[{type:"PROPERTY",id:"department-no-color",key:"department",label:"Department (default colors)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]),r=i.useMemo(()=>[{type:"PROPERTY",id:"department-color",key:"department",label:"Department (custom colors)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},colorMap:{Marketing:"#e74c3c",Operations:"#2ecc71",Finance:"#3498db",Product:"#f39c12"}}],[]);return e.jsxs("div",{style:O,children:[e.jsx("div",{style:b,children:e.jsx(y,{objectType:p,filterDefinitions:n,...t})}),e.jsx("div",{style:b,children:e.jsx(y,{objectType:p,filterDefinitions:r,...t})})]})}const pe={parameters:{docs:{source:{code:`// Without colorMap: all bars use the default theme color
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

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:t=>e.jsx(Gr,{...t})},jn={Marketing:"Marketing Dept.",Operations:"Ops Team",Finance:"Finance & Accounting",Product:"Product Group"};function Wr(t){const n=i.useMemo(()=>[{type:"PROPERTY",id:"department-default",key:"department",label:"Department (default)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]),r=i.useMemo(()=>[{type:"PROPERTY",id:"department-custom",key:"department",label:"Department (custom render)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},renderValue:s=>jn[s]??s},{type:"PROPERTY",id:"team-custom",key:"team",label:"Team (custom render)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},renderValue:s=>s.toUpperCase()}],[]);return e.jsxs("div",{style:O,children:[e.jsx("div",{style:b,children:e.jsx(y,{objectType:p,filterDefinitions:n,...t})}),e.jsx("div",{style:b,children:e.jsx(y,{objectType:p,filterDefinitions:r,...t})})]})}const ue={parameters:{docs:{description:{story:"Use `renderValue` to customize how filter values are displayed and searched. The returned string replaces the raw value for display and search matching. Works with LISTOGRAM, MULTI_SELECT, and SINGLE_SELECT components."},source:{code:`const DEPARTMENT_LABELS = {
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

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:t=>e.jsx(Wr,{...t})},Ur={Marketing:"#f97316",Operations:"#3b82f6",Finance:"#10b981",Product:"#a855f7"},Xr={display:"inline-flex",alignItems:"center",gap:8},Kr={display:"inline-block",width:10,height:10,borderRadius:"50%",flexShrink:0};function $r({value:t}){const n=Ur[t]??"#94a3b8";return e.jsxs("span",{style:Xr,children:[e.jsx("span",{style:{...Kr,background:n}}),e.jsx("span",{children:jn[t]??t})]})}function zr(t){const n=i.useMemo(()=>[{type:"PROPERTY",id:"department-swatch",key:"department",label:"Department (JSX)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},renderValue:r=>e.jsx($r,{value:r})},{type:"PROPERTY",id:"team-link",key:"team",label:"Team (anchor JSX)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},renderValue:r=>e.jsx("a",{href:`#/team/${encodeURIComponent(r)}`,onClick:s=>s.preventDefault(),style:{color:"#2563eb",textDecoration:"underline"},children:r})}],[]);return e.jsx("div",{style:b,children:e.jsx(y,{objectType:p,filterDefinitions:n,...t})})}const me={parameters:{docs:{description:{story:"`renderValue` may return any `ReactNode`, not just a string. Use this to render avatars, anchors, status pills, or any custom JSX inside listogram rows, dropdown items, and chips. When the function returns non-string JSX, search matching falls back to the raw value."},source:{code:`const filterDefinitions = [
  {
    type: "PROPERTY",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
    renderValue: (value) => <DepartmentSwatch value={value} />,
  },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:t=>e.jsx(zr,{...t})};function Jr(t){const n=i.useMemo(()=>[{type:"PROPERTY",id:"dept-full",key:"department",label:"full: label + bar + count",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"full"}}],[]),r=i.useMemo(()=>[{type:"PROPERTY",id:"dept-count",key:"department",label:"count: label + count (no bar)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"count"}}],[]),s=i.useMemo(()=>[{type:"PROPERTY",id:"dept-minimal",key:"department",label:"minimal: label only",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"}}],[]);return e.jsxs("div",{style:O,children:[e.jsx("div",{style:b,children:e.jsx(y,{objectType:p,filterDefinitions:n,...t})}),e.jsx("div",{style:b,children:e.jsx(y,{objectType:p,filterDefinitions:r,...t})}),e.jsx("div",{style:b,children:e.jsx(y,{objectType:p,filterDefinitions:s,...t})})]})}const fe={parameters:{docs:{source:{code:`// "full" (default): label + colored bar + count number
// "count": label + count number (no bar)
// "minimal": label only (no bar, no count)

const filterDefinitions = [
  { ..., listogramConfig: { displayMode: "full" } },
  { ..., listogramConfig: { displayMode: "count" } },
  { ..., listogramConfig: { displayMode: "minimal" } },
];`}}},render:t=>e.jsx(Jr,{...t})};function qr(t){const n=i.useMemo(()=>[{type:"PROPERTY",id:"dept-with-count",key:"department",label:"Department (counts visible)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},{type:"PROPERTY",id:"team-with-count",key:"team",label:"Team (counts visible)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}}],[]),r=i.useMemo(()=>[{type:"PROPERTY",id:"dept-no-count",key:"department",label:"Department (counts hidden)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},showCount:!1},{type:"PROPERTY",id:"team-no-count",key:"team",label:"Team (counts hidden)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},showCount:!1}],[]);return e.jsxs("div",{style:O,children:[e.jsx("div",{style:b,children:e.jsx(y,{objectType:p,filterDefinitions:n,...t})}),e.jsx("div",{style:b,children:e.jsx(y,{objectType:p,filterDefinitions:r,...t})})]})}const ye={parameters:{docs:{description:{story:"Use `showCount: false` on individual filter definitions to hide aggregation counts in LISTOGRAM and MULTI_SELECT inputs. Bar visualizations in LISTOGRAM are preserved."},source:{code:`// showCount defaults to true; set false to hide counts per filter
const filterDefinitions = [
  { ..., filterComponent: "LISTOGRAM", showCount: false },
  { ..., filterComponent: "MULTI_SELECT", showCount: false },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:t=>e.jsx(qr,{...t})};function Qr(t){const n=i.useMemo(()=>[{type:"PROPERTY",id:"department-checkbox",key:"department",label:"Department",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},{type:"PROPERTY",id:"team-checkbox",key:"team",label:"Team",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]);return e.jsx("div",{style:b,children:e.jsx(y,{objectType:p,filterDefinitions:n,...t})})}const he={parameters:{docs:{description:{story:"Listogram rows always include a checkbox for multi-select. Selecting values checks the checkbox and highlights the row. Use the exclude toggle (three-dot menu) to invert selections."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:t=>e.jsx(Qr,{...t})};function Zr(t){const[n,r]=i.useState(P),s=t.onFilterRemoved,o=i.useCallback(a=>{r(c=>c.filter(l=>"key"in l?l.key!==a:!0)),s==null||s(a)},[s]);return e.jsx("div",{style:b,children:e.jsx(y,{objectType:p,filterDefinitions:n,...t,onFilterRemoved:o})})}const Ce={name:"Removable Filters",args:{title:"Removable Filters",showActiveFilterCount:!0},parameters:{docs:{description:{story:"When `onFilterRemoved` is provided, each filter item shows a remove button (X) on hover. Clicking it removes the filter from the list."},source:{code:`const [definitions, setDefinitions] = useState(filterDefinitions);

const handleFilterRemoved = (filterKey) => {
  setDefinitions(prev => prev.filter(def => def.key !== filterKey));
};

<FilterList
  objectType={Employee}
  filterDefinitions={definitions}
  onFilterRemoved={handleFilterRemoved}
  title="Removable Filters"
/>`}}},render:t=>e.jsx(Zr,{...t})};function ei(t){const[n,r]=i.useState(void 0),s=i.useMemo(()=>[{type:"STATIC_VALUES",key:"department",label:"Department (static)",filterComponent:"LISTOGRAM",values:["Marketing","Operations","Finance","Product"],filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"}},{type:"STATIC_VALUES",key:"locationCity",label:"Office Location",filterComponent:"SINGLE_SELECT",values:["New York","San Francisco","London","Tokyo"],filterState:{type:"SELECT",selectedValues:[]}},{type:"STATIC_VALUES",key:"team",label:"Team (multi-select)",filterComponent:"MULTI_SELECT",values:["Alpha","Beta","Gamma","Delta"],filterState:{type:"SELECT",selectedValues:[]}},{type:"STATIC_VALUES",id:"custom-status",key:"status",label:"Status (custom clause)",filterComponent:"LISTOGRAM",values:["Active","Inactive"],filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"},toWhereClause:c=>{if(c.type!=="EXACT_MATCH"||c.values.length===0)return;const l=c.values,u=l.includes("Active"),f=l.includes("Inactive");if(u&&f)return{$or:[{employeeStatus:"Active"},{employeeStatus:"Inactive"}]};if(u)return{employeeStatus:"Active"};if(f)return{employeeStatus:"Inactive"}}}],[]),o=t.onFilterClauseChanged,a=i.useCallback(c=>{r(c),o==null||o(c)},[o]);return e.jsxs("div",{style:O,children:[e.jsx("div",{style:b,children:e.jsx(y,{objectType:p,filterDefinitions:s,...t,filterClause:n,onFilterClauseChanged:a})}),e.jsxs("div",{style:Y,children:[e.jsx("strong",{children:"Filter Clause (JSON):"}),e.jsx("pre",{style:$,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const Se={parameters:{docs:{description:{story:"Use `STATIC_VALUES` filter definitions to provide a fixed list of values instead of fetching from OSDK aggregation. Supports LISTOGRAM, SINGLE_SELECT, MULTI_SELECT, and TEXT_TAGS components. Optionally provide a `toWhereClause` function for custom clause generation."},source:{code:`const filterDefinitions = [
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
/>`}}},render:t=>e.jsx(ei,{...t})};function ti(t){const[n,r]=i.useState(void 0),[s,o]=i.useState(P),a=t.onFilterRemoved,c=i.useCallback(v=>{o(g=>g.filter(F=>"key"in F?F.key!==v:!0)),a==null||a(v)},[a]),l=t.onReset,u=i.useCallback(()=>{o(P),l==null||l()},[l]),f=t.onFilterClauseChanged,S=i.useCallback(v=>{r(v),f==null||f(v)},[f]);return e.jsxs("div",{style:Ln,children:[e.jsx("div",{style:Rn,children:e.jsx(y,{objectType:p,filterDefinitions:s,titleIcon:Fn,...t,onReset:u,onFilterRemoved:c,filterClause:n,onFilterClauseChanged:S})}),e.jsx("div",{style:Y,children:e.jsx(En,{objectType:p,filter:n})})]})}const Te={name:"Full Featured",args:{title:"Employee Filters",showResetButton:!0,showActiveFilterCount:!0,enableSorting:!0},parameters:{docs:{description:{story:"Demonstrates all filter list features together: collapse, reset, active count, sorting, removable filters, per-filter search, exclude toggle, and controlled where clause driving an ObjectTable."},source:{code:`// All features combined: collapse, sort, search, exclude, remove, reset

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
/>`}}},render:t=>{const[,n]=bn(),r=t.onCollapsedChange,s=i.useCallback(o=>{n({collapsed:o}),r==null||r(o)},[n,r]);return e.jsx(ti,{...t,onCollapsedChange:s})}};function ni(t){const n=je(),r=i.useMemo(()=>n(p),[n]),[s,o]=i.useState(void 0),a=i.useMemo(()=>[{type:"HAS_LINK",linkName:"lead",label:"Has Manager",filterState:{type:"hasLink",hasLink:!1}},{type:"LINKED_PROPERTY",linkName:"lead",reverseLinkName:"peeps",linkedPropertyKey:"department",linkedFilterComponent:"MULTI_SELECT",linkedFilterState:{type:"SELECT",selectedValues:[]},filterState:{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:[]}},label:"Manager Department"}],[]),c=t.onFilterClauseChanged,l=i.useCallback(u=>{o(u),c==null||c(u)},[c]);return e.jsxs("div",{style:O,children:[e.jsx("div",{style:b,children:e.jsx(y,{objectType:p,objectSet:r,filterDefinitions:a,...t,filterClause:s,onFilterClauseChanged:l})}),e.jsxs("div",{style:Y,children:[e.jsx("strong",{children:"Filter Clause (JSON):"}),e.jsx("p",{children:"Note: LINKED_PROPERTY filter is not applied through where clause"}),e.jsx("pre",{style:$,children:s?JSON.stringify(s,null,2):"(no active filters)"})]})]})}const Ee={name:"Linked Property Filters",parameters:{docs:{description:{story:"Demonstrates filtering on properties of linked objects. HAS_LINK filters objects based on whether they have a linked object. LINKED_PROPERTY filters on a property of the linked object and exposes the same overflow (…) controls as direct property filters — the inline Keeping/Excluding dropdown and Clear all."},source:{code:`// HAS_LINK and LINKED_PROPERTY filter definitions
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
/>`}}},render:t=>e.jsx(ni,{...t})},ri={type:"PROPERTY",id:"combined-department",key:"department",label:"Department",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},ii={type:"PROPERTY",id:"combined-locationCity",key:"locationCity",label:"Location City",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}},si={type:"LINKED_PROPERTY",id:"combined-lead-name",linkName:"lead",reverseLinkName:"peeps",linkedPropertyKey:"fullName",linkedFilterComponent:"MULTI_SELECT",linkedFilterState:{type:"SELECT",selectedValues:[]},filterState:{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:[]}},searchField:!1,label:"Manager Name"},oi=[si,ri,ii],li=[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"locationCity"}},{locator:{type:"rdp",id:"managerName",creator:t=>t.pivotTo("lead").selectProperty("fullName")},renderHeader:()=>"Manager Name",renderCell:t=>"managerName"in t?e.jsx("span",{children:t.managerName}):e.jsx("span",{style:{color:"#999"},children:"No Manager"})}];function ai(t){const n=je(),r=i.useMemo(()=>n(p),[n]),[s,o]=i.useState(void 0),[a,c]=i.useState(r),l=t.onFilterClauseChanged,u=i.useCallback(f=>{o(f),l==null||l(f)},[l]);return e.jsxs("div",{style:Ln,children:[e.jsx("div",{style:Rn,children:e.jsx(y,{...t,objectType:p,objectSet:r,filterDefinitions:oi,filterClause:s,onFilterClauseChanged:u,onEffectiveObjectSet:c,showFilteredOutValues:!0})}),e.jsx("div",{style:Y,children:e.jsx(En,{objectType:p,objectSet:a,columnDefinitions:li})})]})}const be={name:"Combined with Object Table",parameters:{docs:{description:{story:'A linked filter (Manager Name) and direct property filters coexist in one FilterList alongside an ObjectTable. Pass the unfiltered scope as `objectSet`; FilterList applies the linked-filter narrowing internally and emits the fully-narrowed `ObjectSet` via `onEffectiveObjectSet` for the table. The table surfaces the linked manager via a derived-property `Manager Name` column (`pivotTo("lead").selectProperty("fullName")`). With `showFilteredOutValues`, direct-facet values absent under the active linked filter render as greyed-out count=0 filtered-out rows.'},source:{code:`const baseObjectSet = useMemo(() => client(Employee), [client]);
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
/>`}}},render:t=>e.jsx(ai,{...t})};function ci({filterState:t,onFilterStateChanged:n}){const r=i.useCallback(o=>{const a=o.target.value;n({type:"custom",customState:{value:a}})},[n]),s=i.useCallback(()=>{n({type:"custom",customState:{value:""}})},[n]);return e.jsxs("div",{style:{padding:"12px 0",display:"flex",gap:"8px"},children:[e.jsx("input",{type:"text",value:t.customState.value,onChange:r,placeholder:"Enter name substring...",style:{flex:1,padding:"6px 8px",fontSize:"14px",border:"1px solid #ccc",borderRadius:"4px"}}),t.customState.value&&e.jsx("button",{onClick:s,style:{padding:"6px 12px",fontSize:"12px",backgroundColor:"#f5f5f5",border:"1px solid #ccc",borderRadius:"4px",cursor:"pointer"},children:"Clear"})]})}function di(t){const[n,r]=i.useState(void 0),s=i.useMemo(()=>[{type:"CUSTOM",key:"custom-name-contains",label:"Name Contains",filterComponent:"CUSTOM",filterState:{type:"custom",customState:{value:""}},renderInput:({filterState:c,onFilterStateChanged:l})=>e.jsx(ci,{filterState:c,onFilterStateChanged:l}),toWhereClause:c=>{var u;const l=(u=c.customState)==null?void 0:u.value;if(l)return{fullName:{$containsAnyTerm:l}}}}],[]),o=t.onFilterClauseChanged,a=i.useCallback(c=>{r(c),o==null||o(c)},[o]);return e.jsxs("div",{style:O,children:[e.jsx("div",{style:b,children:e.jsx(y,{objectType:p,filterDefinitions:s,...t,filterClause:n,onFilterClauseChanged:a})}),e.jsxs("div",{style:Y,children:[e.jsx("strong",{children:"Filter Clause (JSON):"}),e.jsx("pre",{style:$,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const ge={name:"Custom Filters",parameters:{docs:{description:{story:"Custom filters provide full control over filtering logic and UI. The 'Name Contains' filter uses `renderInput` for a simple custom input. "},source:{code:`// Custom filter with renderInput
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
/>`}}},render:t=>e.jsx(di,{...t})},pi={type:"PROPERTY",id:"department-multi",key:"department",label:"Department",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}},ui={type:"PROPERTY",id:"department-single",key:"department",label:"Department (single)",filterComponent:"SINGLE_SELECT",filterState:{type:"SELECT",selectedValues:[]}},mi=[z,pi,ui,Ae],ve={name:"No value rendering",parameters:{docs:{description:{story:"Empty/null filter values render via the canonical `<NoValueLabel />` component — italic, muted, with the literal text 'No value' — across listogram buckets, single-select dropdown options, multi-select dropdown options, and multi-select chips. The mock dataset includes one Employee with `department: \"\"` so the No value row is visible in the listogram."}}},render:()=>e.jsx("div",{style:b,children:e.jsx(y,{objectType:p,filterDefinitions:mi})})},fi={type:"PROPERTY",id:"locationCity-single",key:"locationCity",label:"Location City (single)",filterComponent:"SINGLE_SELECT",filterState:{type:"SELECT",selectedValues:[]}},yi={type:"LINKED_PROPERTY",linkName:"lead",reverseLinkName:"peeps",linkedPropertyKey:"department",linkedFilterComponent:"MULTI_SELECT",linkedFilterState:{type:"SELECT",selectedValues:[]},filterState:{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:[]}},label:"Manager Department (linked multi)"},hi={type:"LINKED_PROPERTY",linkName:"lead",reverseLinkName:"peeps",linkedPropertyKey:"locationCity",linkedFilterComponent:"SINGLE_SELECT",linkedFilterState:{type:"SELECT",selectedValues:[]},filterState:{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:[]}},label:"Manager City (linked single)"},Ci=new Map([["department",{type:"EXACT_MATCH",values:["Marketing","Research"]}],["jobTitle-multi",{type:"SELECT",selectedValues:["Marketing Manager","Chief Scientist"]}],["locationCity-single",{type:"SELECT",selectedValues:["Berlin"]}],["linkedProperty:lead:department",{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:["Marketing","Research"]}}],["linkedProperty:lead:locationCity",{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:["Berlin"]}}]]),Si=[z,Ie,fi,yi,hi];function Ti(t){const n=je(),r=i.useMemo(()=>n(p),[n]),[s,o]=i.useState(void 0),a=i.useCallback(c=>{o(c)},[]);return e.jsxs("div",{style:O,children:[e.jsx("div",{style:b,children:e.jsx(y,{...t,objectType:p,objectSet:r,filterDefinitions:Si,initialFilterStates:Ci,onFilterClauseChanged:a})}),e.jsxs("div",{style:Y,children:[e.jsx("h4",{children:"Active where clause"}),e.jsx("pre",{style:$,children:s?JSON.stringify(s,null,2):"(none)"})]})]})}const Le={name:"With initial filter states",parameters:{docs:{description:{story:"Pass `initialFilterStates` to hydrate filters from saved state (e.g. localStorage or URL params). Selections are restored on mount, including values that currently have zero matching rows — they appear with a count of 0 so users can see and clear them. Demonstrated across LISTOGRAM, MULTI_SELECT, SINGLE_SELECT, and LINKED_PROPERTY filters."},source:{code:`// "Research", "Chief Scientist", and "Berlin" are not in the current
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
/>`}}},render:t=>e.jsx(Ti,{...t})},We=[z,Ie],Ei=new Map([["department",{type:"EXACT_MATCH",values:["Engineering"]}],["jobTitle-multi",{type:"SELECT",selectedValues:["Software Engineer"]}]]);function Ue(t){const n=[...t.keys()].sort(),r={};for(const s of n){const o=t.get(s);o!==void 0&&(r[s]=o)}return JSON.stringify(r,null,2)}function An({initialFilterStates:t,storyArgs:n}){const r=i.useMemo(()=>{const f=new Map;for(const S of We)S.type==="PROPERTY"&&S.filterState&&f.set(X(S),S.filterState);if(t)for(const[S,v]of t)f.set(S,v);return f},[t]),[s,o]=i.useState(()=>new Map(r)),a=n.onFilterStateChanged,c=i.useCallback((f,S)=>{o(v=>{const g=new Map(v);return g.set(X(f),S),g}),a==null||a(f,S)},[a]),l=n.onReset,u=i.useCallback(()=>{o(new Map(r)),l==null||l()},[l,r]);return e.jsxs("div",{style:O,children:[e.jsx("div",{style:b,children:e.jsx(y,{...n,objectType:p,filterDefinitions:We,initialFilterStates:t,showResetButton:!0,onFilterStateChanged:c,onReset:u})}),e.jsxs("div",{style:Y,children:[e.jsx("h4",{children:"Filter state dump"}),e.jsx("pre",{"data-testid":"filter-state-dump",style:$,children:Ue(s)}),e.jsx("h4",{children:"Initial snapshot"}),e.jsx("pre",{"data-testid":"filter-state-initial",style:$,children:Ue(r)})]})]})}function bi(t){return e.jsx(An,{storyArgs:t})}const Re={args:{showResetButton:!0},parameters:{docs:{description:{story:"Reset button is disabled-by-default until the user diverges from the initial (empty string) snapshot. After clicking reset the filter state returns to the initial snapshot and the button disables itself again."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showResetButton={true}
/>`}}},render:t=>e.jsx(bi,{...t})};function gi(t){return e.jsx(An,{storyArgs:t,initialFilterStates:Ei})}const Fe={args:{showResetButton:!0},parameters:{docs:{description:{story:"Reset button stays disabled on mount even though there are active selections, because the live filter state matches the initial snapshot. Changing a selection enables the button; clicking it restores the initial snapshot, not an empty state."},source:{code:`const savedStates = new Map([
  ["department", { type: "EXACT_MATCH", values: ["Engineering"] }],
  ["jobTitle-multi", { type: "SELECT", selectedValues: ["Software Engineer"] }],
]);

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  initialFilterStates={savedStates}
  showResetButton={true}
/>`}}},render:t=>e.jsx(gi,{...t})};var Xe,Ke,$e;ee.parameters={...ee.parameters,docs:{...(Xe=ee.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...($e=(Ke=ee.parameters)==null?void 0:Ke.docs)==null?void 0:$e.source}}};var ze,Je,qe;te.parameters={...te.parameters,docs:{...(ze=te.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(qe=(Je=te.parameters)==null?void 0:Je.docs)==null?void 0:qe.source}}};var Qe,Ze,et;ne.parameters={...ne.parameters,docs:{...(Qe=ne.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(rt=(nt=re.parameters)==null?void 0:nt.docs)==null?void 0:rt.source}}};var it,st,ot;ie.parameters={...ie.parameters,docs:{...(it=ie.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
}`,...(ot=(st=ie.parameters)==null?void 0:st.docs)==null?void 0:ot.source}}};var lt,at,ct;se.parameters={...se.parameters,docs:{...(lt=se.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
}`,...(ct=(at=se.parameters)==null?void 0:at.docs)==null?void 0:ct.source}}};var dt,pt,ut;oe.parameters={...oe.parameters,docs:{...(dt=oe.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(ut=(pt=oe.parameters)==null?void 0:pt.docs)==null?void 0:ut.source}}};var mt,ft,yt;le.parameters={...le.parameters,docs:{...(mt=le.parameters)==null?void 0:mt.docs,source:{originalSource:`{
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
}`,...(yt=(ft=le.parameters)==null?void 0:ft.docs)==null?void 0:yt.source}}};var ht,Ct,St;ae.parameters={...ae.parameters,docs:{...(ht=ae.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
}`,...(St=(Ct=ae.parameters)==null?void 0:Ct.docs)==null?void 0:St.source}}};var Tt,Et,bt;ce.parameters={...ce.parameters,docs:{...(Tt=ce.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
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
}`,...(bt=(Et=ce.parameters)==null?void 0:Et.docs)==null?void 0:bt.source}}};var gt,vt,Lt;de.parameters={...de.parameters,docs:{...(gt=de.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(Lt=(vt=de.parameters)==null?void 0:vt.docs)==null?void 0:Lt.source}}};var Rt,Ft,jt;pe.parameters={...pe.parameters,docs:{...(Rt=pe.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
}`,...(jt=(Ft=pe.parameters)==null?void 0:Ft.docs)==null?void 0:jt.source}}};var At,_t,Mt;ue.parameters={...ue.parameters,docs:{...(At=ue.parameters)==null?void 0:At.docs,source:{originalSource:`{
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
}`,...(Mt=(_t=ue.parameters)==null?void 0:_t.docs)==null?void 0:Mt.source}}};var kt,Dt,xt;me.parameters={...me.parameters,docs:{...(kt=me.parameters)==null?void 0:kt.docs,source:{originalSource:`{
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
}`,...(xt=(Dt=me.parameters)==null?void 0:Dt.docs)==null?void 0:xt.source}}};var It,Ot,Nt;fe.parameters={...fe.parameters,docs:{...(It=fe.parameters)==null?void 0:It.docs,source:{originalSource:`{
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
}`,...(Nt=(Ot=fe.parameters)==null?void 0:Ot.docs)==null?void 0:Nt.source}}};var Pt,wt,Vt;ye.parameters={...ye.parameters,docs:{...(Pt=ye.parameters)==null?void 0:Pt.docs,source:{originalSource:`{
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
}`,...(Vt=(wt=ye.parameters)==null?void 0:wt.docs)==null?void 0:Vt.source}}};var Bt,Ht,Yt;he.parameters={...he.parameters,docs:{...(Bt=he.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
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
}`,...(Yt=(Ht=he.parameters)==null?void 0:Ht.docs)==null?void 0:Yt.source}}};var Gt,Wt,Ut;Ce.parameters={...Ce.parameters,docs:{...(Gt=Ce.parameters)==null?void 0:Gt.docs,source:{originalSource:`{
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
}`,...(Ut=(Wt=Ce.parameters)==null?void 0:Wt.docs)==null?void 0:Ut.source}}};var Xt,Kt,$t;Se.parameters={...Se.parameters,docs:{...(Xt=Se.parameters)==null?void 0:Xt.docs,source:{originalSource:`{
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
}`,...($t=(Kt=Se.parameters)==null?void 0:Kt.docs)==null?void 0:$t.source}}};var zt,Jt,qt;Te.parameters={...Te.parameters,docs:{...(zt=Te.parameters)==null?void 0:zt.docs,source:{originalSource:`{
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
}`,...(qt=(Jt=Te.parameters)==null?void 0:Jt.docs)==null?void 0:qt.source}}};var Qt,Zt,en;Ee.parameters={...Ee.parameters,docs:{...(Qt=Ee.parameters)==null?void 0:Qt.docs,source:{originalSource:`{
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
}`,...(en=(Zt=Ee.parameters)==null?void 0:Zt.docs)==null?void 0:en.source}}};var tn,nn,rn;be.parameters={...be.parameters,docs:{...(tn=be.parameters)==null?void 0:tn.docs,source:{originalSource:`{
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
}`,...(rn=(nn=be.parameters)==null?void 0:nn.docs)==null?void 0:rn.source}}};var sn,on,ln;ge.parameters={...ge.parameters,docs:{...(sn=ge.parameters)==null?void 0:sn.docs,source:{originalSource:`{
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
}`,...(ln=(on=ge.parameters)==null?void 0:on.docs)==null?void 0:ln.source}}};var an,cn,dn;ve.parameters={...ve.parameters,docs:{...(an=ve.parameters)==null?void 0:an.docs,source:{originalSource:`{
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
}`,...(dn=(cn=ve.parameters)==null?void 0:cn.docs)==null?void 0:dn.source}}};var pn,un,mn;Le.parameters={...Le.parameters,docs:{...(pn=Le.parameters)==null?void 0:pn.docs,source:{originalSource:`{
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
}`,...(mn=(un=Le.parameters)==null?void 0:un.docs)==null?void 0:mn.source}}};var fn,yn,hn;Re.parameters={...Re.parameters,docs:{...(fn=Re.parameters)==null?void 0:fn.docs,source:{originalSource:`{
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
}`,...(hn=(yn=Re.parameters)==null?void 0:yn.docs)==null?void 0:hn.source}}};var Cn,Sn,Tn;Fe.parameters={...Fe.parameters,docs:{...(Cn=Fe.parameters)==null?void 0:Cn.docs,source:{originalSource:`{
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
}`,...(Tn=(Sn=Fe.parameters)==null?void 0:Sn.docs)==null?void 0:Tn.source}}};const gs=["Default","IntegerNumberRangeRounding","WithObjectSet","AddFilterMode","WithAllFilterTypes","WithTitleAndIcon","WithResetButton","WithActiveFilterCount","WithSorting","CollapsiblePanel","KeywordSearch","WithColorMap","WithRenderValue","WithRenderValueAsReactNode","WithListogramDisplayModes","WithHiddenCounts","WithCheckbox","WithRemovableFilters","WithStaticValues","FullFeatured","WithLinkedPropertyFilters","CombinedWithObjectTable","WithCustomFilters","NoValueRendering","WithInitialFilterStates","WithResetButtonEmptyInitial","WithResetButtonNonEmptyInitial"];export{re as AddFilterMode,ce as CollapsiblePanel,be as CombinedWithObjectTable,ee as Default,Te as FullFeatured,te as IntegerNumberRangeRounding,de as KeywordSearch,ve as NoValueRendering,le as WithActiveFilterCount,ie as WithAllFilterTypes,he as WithCheckbox,pe as WithColorMap,ge as WithCustomFilters,ye as WithHiddenCounts,Le as WithInitialFilterStates,Ee as WithLinkedPropertyFilters,fe as WithListogramDisplayModes,ne as WithObjectSet,Ce as WithRemovableFilters,ue as WithRenderValue,me as WithRenderValueAsReactNode,oe as WithResetButton,Re as WithResetButtonEmptyInitial,Fe as WithResetButtonNonEmptyInitial,ae as WithSorting,Se as WithStaticValues,se as WithTitleAndIcon,gs as __namedExportsOrder,bs as default};
