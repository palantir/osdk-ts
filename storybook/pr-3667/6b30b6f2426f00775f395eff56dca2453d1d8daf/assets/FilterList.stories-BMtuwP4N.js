var Hn=Object.defineProperty;var Yn=(t,n,r)=>n in t?Hn(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r;var ke=(t,n,r)=>Yn(t,typeof n!="symbol"?n+"":n,r);import{r as i,j as e,f as Gn}from"./iframe-CZjmNuvW.js";import{S as Wn}from"./MultiColumnSortDialog-BBNpecwY.js";import{b as Un,s as Xn,c as Kn,f as $n,d as D,S as zn,R as Be,O as Jn,e as qn,C as Qn,E as Zn,h as er,i as tr,g as X,u as nr,a as He,F as rr,j as ir}from"./getFilterLabel-jOD9DO51.js";import{c as K}from"./index-zekgW7T_.js";import{u as sr,b as or,c as Ye,P as lr,s as ar,K as cr,d as dr,a as pr,e as ur,f as mr,g as fr,v as yr,h as hr}from"./DraggableList-D84Q1leT.js";import{B as O}from"./Button-B6FwUNRJ.js";import{I as Cr}from"./Input-CKRwcQSK.js";import{w as Sr}from"./withOsdkMetrics-CK5h1V6B.js";import{O as En}from"./object-table--4LewK9I.js";import{E as p}from"./Employee-BAk2o20h.js";import{u as Ae}from"./useOsdkClient-D_aq-H_z.js";import"./preload-helper-BwjyFM2k.js";import"./ActionButton-mAMMA7p6.js";import"./Dialog-ClOvmhHN.js";import"./cross-CqtQFt8D.js";import"./svgIconContainer-jJn2f_24.js";import"./useBaseUiId-B329C4dW.js";import"./InternalBackdrop-MnYdtQ6I.js";import"./composite-DhizpSIQ.js";import"./index-DNc_ov5y.js";import"./index-D7QsBhqV.js";import"./index-D9XLT-UB.js";import"./MenuTrigger-DSRUvVhT.js";import"./CompositeItem-CRbq-g-0.js";import"./ToolbarRootContext-Cj-IpAxj.js";import"./getDisabledMountTransitionStyles-DG5obmBt.js";import"./getPseudoElementBounds-0S2-gmLV.js";import"./caret-down-Bdbgi89X.js";import"./chevron-down-CI7WQt4v.js";import"./useValueChanged-CjqOd_Qg.js";import"./Switch-qOW74HPO.js";import"./toNumber-xyP7l8hv.js";import"./PopoverPopup-ssUKowOT.js";import"./useControlled-CZZVahEL.js";import"./assertUnreachable-tCT10eXl.js";import"./index-ClnMgKgk.js";import"./Checkbox-C5iepXhe.js";import"./minus-B8fjxFLy.js";import"./SkeletonBar-DLWoh2A2.js";import"./makeExternalStore-DrgtFWgr.js";import"./small-cross-CmsBdQEB.js";import"./Table-CHpvpSNK.js";import"./useEventCallback-C7nOSH6U.js";import"./LoadingCell-IbLV77ew.js";import"./ColumnConfigDialog-Dn-Ywv81.js";import"./CollapsiblePanel-COUqJsuS.js";import"./index-CI-dN7aE.js";import"./error-CVYkY9YG.js";import"./BaseCbacBanner-Be-_8izY.js";import"./Tooltip-BENnZ7Fn.js";import"./DropdownField-Dyddi5CO.js";const P={filterList:"FilterList-module__filterList___wmzCNbkH",filterListCollapsed:"FilterList-module__filterListCollapsed___CGrK9txF",expandedContent:"FilterList-module__expandedContent___aEk2i2At",scrollableContent:"FilterList-module__scrollableContent___F3O1nfAo",hiddenContent:"FilterList-module__hiddenContent___PHKe-yWc",expandButton:"FilterList-module__expandButton___-QlY8-ot",collapsedLabel:"FilterList-module__collapsedLabel___QA0UtRts",addButtonContainer:"FilterList-module__addButtonContainer___kq300FEV",addButton:"FilterList-module__addButton___oD4yvwyZ"},ee={content:"FilterListContent-module__content___fG0EgVp6",dragOverlay:"FilterListContent-module__dragOverlay___Tjd1YpmI"},De={errorContainer:"ErrorBoundary-module__errorContainer___FIguBDDu",errorMessage:"ErrorBoundary-module__errorMessage___jUsXUqFA",retryButton:"ErrorBoundary-module__retryButton___PZVWZOm7"};class Tr extends i.Component{constructor(){super(...arguments);ke(this,"state",{hasError:!1,error:null});ke(this,"handleRetry",()=>{this.setState({hasError:!1,error:null})})}static getDerivedStateFromError(r){return{hasError:!0,error:r}}componentDidCatch(r,s){var o,a;console.error("[ErrorBoundary]",r),console.error("[ErrorBoundary] Component stack:",s.componentStack),(a=(o=this.props).onError)==null||a.call(o,r)}render(){return this.state.hasError?this.props.fallback?this.props.fallback:e.jsxs("div",{className:De.errorContainer,children:[e.jsx("p",{className:De.errorMessage,children:this.props.errorMessage??"Something went wrong"}),e.jsx(O,{className:De.retryButton,onClick:this.handleRetry,"aria-label":"Retry",children:"Retry"})]}):this.props.children}}function Er(){return e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true",children:[e.jsx("circle",{cx:"5.5",cy:"3.5",r:"1.5"}),e.jsx("circle",{cx:"10.5",cy:"3.5",r:"1.5"}),e.jsx("circle",{cx:"5.5",cy:"8",r:"1.5"}),e.jsx("circle",{cx:"10.5",cy:"8",r:"1.5"}),e.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5"}),e.jsx("circle",{cx:"10.5",cy:"12.5",r:"1.5"})]})}function br({definition:t,filterKey:n,label:r,filterState:s,onFilterStateChanged:o,onFilterRemoved:a,renderInput:c,searchField:l,dragHandleAttributes:m,dragHandleListeners:f,className:S,style:v}){const[b,j]=i.useState({type:"closed"}),[L,k]=i.useState(!1),d=i.useCallback(F=>{o(n,F)},[n,o]),y=i.useCallback(()=>{j(F=>F.type==="closed"?{type:"open",query:""}:{type:"closed"})},[]),g=i.useCallback(F=>{j({type:"open",query:F.target.value})},[]),R=i.useCallback(()=>{j({type:"open",query:""})},[]),M=i.useCallback(()=>{a==null||a(n)},[n,a]),I=i.useCallback(()=>{k(F=>!F)},[]),V=i.useCallback(F=>{F==null||F.focus({preventScroll:!0})},[]),x=i.useMemo(()=>Un(s),[s]),W=Xn(x),B=Kn(x)&&l!==!1,H=W,u=$n(s),C=b.type==="open",E=b.type==="open"?b.query:"",A=b.type==="open"?b.query:void 0;return e.jsxs("div",{className:K(D.filterItem,S),style:v,"data-has-selection":u||void 0,children:[e.jsxs("div",{className:D.itemHeader,children:[m&&e.jsx(O,{className:D.dragHandle,"aria-label":`Reorder ${r}`,...m,...f,children:e.jsx(Er,{})}),e.jsx("span",{className:D.itemLabel,children:r}),B&&e.jsx(O,{className:D.headerActionButton,onClick:y,"aria-label":"Search values","aria-pressed":C,children:e.jsx(zn,{})}),a&&e.jsx(O,{className:D.headerActionButton,onClick:M,"aria-label":`Remove ${r} filter`,children:e.jsx(Be,{})}),H&&e.jsx(O,{className:D.headerActionButton,onClick:I,"aria-label":"More actions","aria-pressed":L,children:e.jsx(Jn,{})})]}),C&&e.jsxs("div",{className:D.searchRow,children:[e.jsx(Cr,{type:"text",className:D.searchInput,value:E,onChange:g,placeholder:"Search property values...","aria-label":"Search property values",ref:V}),E&&e.jsx(O,{type:"button",className:D.searchClearButton,onClick:R,"aria-label":"Clear search",children:e.jsx(Be,{})})]}),e.jsx("div",{className:D.itemContent,children:e.jsx(Tr,{errorMessage:"Error loading filter",children:c({definition:t,filterKey:n,filterState:s,onFilterStateChanged:d,searchQuery:A,excludeRowOpen:L})})})]})}const xe=i.memo(br);function gr({id:t,definition:n,filterKey:r,label:s,filterState:o,onFilterStateChanged:a,onFilterRemoved:c,renderInput:l,searchField:m}){const{attributes:f,listeners:S,setNodeRef:v,transform:b,transition:j,isDragging:L}=sr({id:t}),k=i.useMemo(()=>({transform:or.Transform.toString(b),transition:j??void 0}),[b,j]);return e.jsx("div",{ref:v,style:k,className:K(L&&D.dragging),children:e.jsx(xe,{definition:n,filterKey:r,label:s,filterState:o,onFilterStateChanged:a,onFilterRemoved:c,renderInput:l,searchField:m,dragHandleAttributes:f,dragHandleListeners:S})})}const vr=i.memo(gr),Lr=({transform:t})=>({...t,x:0}),Rr={distance:8},Fr=[Lr],jr={role:"button",tabIndex:-1,"aria-disabled":!0,"aria-pressed":void 0,"aria-roledescription":"sortable","aria-describedby":""};function Ar({filterDefinitions:t,filterStates:n,onFilterStateChanged:r,onFilterRemoved:s,onOrderChange:o,renderInput:a,getFilterKey:c,getFilterLabel:l,getEmptyDisplayState:m,enableSorting:f,className:S,style:v}){const[b,j]=i.useState(null),L=i.useMemo(()=>f&&t?t.map(u=>c(u)):[],[f,t,c]),k=Ye(lr,{activationConstraint:Rr}),d=Ye(cr,{coordinateGetter:ar}),y=dr(k,d),g=b!=null?L.indexOf(String(b)):-1,R=g>=0&&t?t[g]:void 0,M=i.useMemo(()=>R?c(R):void 0,[R,c]),I=i.useMemo(()=>{const u=new Map;if(!m||!t)return u;for(const C of t){const E=m(C);E!=null&&u.set(c(C),E)}return u},[t,m,c]),V=i.useCallback(u=>{j(u.active.id)},[]),x=i.useCallback(u=>{j(null);const{active:C,over:E}=u;if(!E||C.id===E.id)return;const A=L.indexOf(String(C.id)),F=L.indexOf(String(E.id));if(A!==-1&&F!==-1){const J=pr(L,A,F);o==null||o(J)}},[L,o]),W=i.useCallback(()=>{j(null)},[]),B=i.useMemo(()=>{const u=C=>{const E=L.indexOf(String(C)),A=E>=0?t==null?void 0:t[E]:void 0;return A?l(A):"filter"};return{onDragStart({active:C}){return`Picked up ${u(C.id)} filter`},onDragOver({over:C}){return C?`Moved to position ${L.indexOf(String(C.id))+1} of ${L.length}`:"Not over a droppable area"},onDragEnd({active:C,over:E}){const A=u(C.id);if(E&&C.id!==E.id){const F=L.indexOf(String(E.id));return`Dropped ${A} filter at position ${F+1}`}return`Dropped ${A} filter back in its original position`},onDragCancel({active:C}){return`Cancelled dragging ${u(C.id)} filter`}}},[t,L,l]),H=i.useMemo(()=>({announcements:B}),[B]);return!t||t.length===0?e.jsx("div",{className:K(ee.content,S),style:v,"data-empty":"true"}):f?e.jsx("div",{className:K(ee.content,S),style:v,children:e.jsxs(ur,{sensors:y,collisionDetection:mr,modifiers:Fr,onDragStart:V,onDragEnd:x,onDragCancel:W,accessibility:H,children:[e.jsx(fr,{items:L,strategy:yr,children:t.map((u,C)=>{const E=L[C],A=c(u),F=l(u),J=n.get(A)??I.get(A);return e.jsx(vr,{id:E,definition:u,filterKey:A,label:F,filterState:J,onFilterStateChanged:r,onFilterRemoved:s,renderInput:a,searchField:u.searchField},E)})}),e.jsx(hr,{dropAnimation:null,className:ee.dragOverlay,children:R&&M&&e.jsx(xe,{definition:R,filterKey:M,label:l(R),filterState:n.get(M)??I.get(M),onFilterStateChanged:r,onFilterRemoved:s,renderInput:a,searchField:R.searchField,dragHandleAttributes:jr})})]})}):e.jsx("div",{className:K(ee.content,S),style:v,children:t.map(u=>{const C=c(u),E=n.get(C)??I.get(C);return e.jsx(xe,{definition:u,filterKey:C,label:l(u),filterState:E,onFilterStateChanged:r,onFilterRemoved:s,renderInput:a,searchField:u.searchField},C)})})}const Y={header:"FilterListHeader-module__header___dkKc0CO-",titleContainer:"FilterListHeader-module__titleContainer___KaePpQIx",title:"FilterListHeader-module__title___xqfWfSzK",titleIcon:"FilterListHeader-module__titleIcon___MQy-dec8",activeCount:"FilterListHeader-module__activeCount___GyBsnsQL",actions:"FilterListHeader-module__actions___YZA7zmGc",collapseButton:"FilterListHeader-module__collapseButton___N1-sj3B3",resetButton:"FilterListHeader-module__resetButton___jLcUypov"};function _r({title:t,titleIcon:n,collapsed:r=!1,onCollapsedChange:s,showResetButton:o,onReset:a,showActiveFilterCount:c,activeFilterCount:l=0,canReset:m,hasVisibilityChanges:f=!1}){const S=s!=null,v=i.useCallback(()=>{s==null||s(!r)},[s,r]),b=m!=null?!m:l===0&&!f;return e.jsxs("div",{className:Y.header,children:[e.jsxs("div",{className:Y.titleContainer,children:[n&&e.jsx("span",{className:Y.titleIcon,children:n}),t&&e.jsx("span",{className:Y.title,children:t}),c&&l>0&&e.jsxs("span",{className:Y.activeCount,children:["(",l,")"]})]}),e.jsxs("div",{className:Y.actions,children:[o&&e.jsxs(O,{className:Y.resetButton,onClick:a,disabled:b,children:[e.jsx(qn,{})," Reset filters"]}),S&&e.jsx(O,{className:Y.collapseButton,onClick:v,"aria-expanded":!r,"aria-label":r?"Expand filters":"Collapse filters",children:e.jsx(Qn,{})})]})]})}const Mr=i.memo(_r);function kr(t){const{title:n,titleIcon:r,collapsed:s=!1,onCollapsedChange:o,filterDefinitions:a,filterStates:c,onFilterStateChanged:l,renderInput:m,getFilterKey:f,getFilterLabel:S,getEmptyDisplayState:v,activeFilterCount:b,onReset:j,onFilterAdded:L,onFilterRemoved:k,onOrderChange:d,showResetButton:y=!1,showActiveFilterCount:g=!1,canReset:R,hasVisibilityChanges:M,enableSorting:I,className:V,renderAddFilterButton:x}=t,[W,B]=i.useState(null),H=n||r||y||g||o,u=x!=null||L!=null,C=i.useCallback(()=>{o==null||o(!1)},[o]),E=s&&o!=null;return e.jsxs("div",{className:K(P.filterList,V),children:[E&&e.jsxs("div",{className:P.filterListCollapsed,"data-collapsed":"true",children:[e.jsx(O,{className:P.expandButton,onClick:C,"aria-label":"Expand filters",children:e.jsx(Zn,{})}),e.jsx("span",{className:P.collapsedLabel,children:n??"Filters"})]}),e.jsx("div",{ref:B,className:K(P.expandedContent,E&&P.hiddenContent),"data-active-count":b,children:e.jsxs(er,{value:W,children:[H&&e.jsx(Mr,{title:n,titleIcon:r,collapsed:s,onCollapsedChange:o,showResetButton:y,onReset:j,showActiveFilterCount:g,activeFilterCount:b,canReset:R,hasVisibilityChanges:M}),e.jsx("div",{className:P.scrollableContent,children:e.jsx(Ar,{filterDefinitions:a,filterStates:c,onFilterStateChanged:l,onFilterRemoved:k,onOrderChange:d,renderInput:m,getFilterKey:f,getFilterLabel:S,getEmptyDisplayState:v,enableSorting:I})}),u&&e.jsx("div",{className:P.addButtonContainer,children:x?x():e.jsx(O,{type:"button",className:P.addButton,onClick:L,children:"+ Add filter"})})]})})]})}const Dr={trigger:"AddFilterPopover-module__trigger___8QQBrzPo"};function xr({hiddenDefinitions:t,onShowFilter:n,renderTrigger:r}){const s=tr();return e.jsx(Wn,{items:t,onItemSelected:n,trigger:r!=null?r():"+ Add filter",triggerClassName:r==null?Dr.trigger:void 0,searchPlaceholder:"Search filters",emptyMessage:"No matching filters",collisionBoundary:s})}const Ir=i.memo(xr);function Or(t,n){const r=i.useMemo(()=>(t==null?void 0:t.map(X))??[],[t]),s=i.useMemo(()=>(t==null?void 0:t.filter(d=>d.isVisible!==!1).map(X))??[],[t]),[o,a]=i.useState(()=>s);i.useEffect(()=>{a(s)},[s]);const c=i.useRef(n);c.current=n;const l=i.useCallback(d=>{if(!c.current)return;const y=new Set(d),g=r.filter(R=>!y.has(R));c.current(d,g)},[r]),m=i.useMemo(()=>{const d=new Map;if(t==null)return d;for(const y of t)d.set(X(y),y);return d},[t]),{visibleDefinitions:f,hiddenDefinitions:S}=i.useMemo(()=>{if(t==null)return{visibleDefinitions:[],hiddenDefinitions:[]};const d=new Set(o),y=[],g=[];for(const R of o){const M=m.get(R);M!=null&&y.push(M)}for(const R of r)if(!d.has(R)){const M=m.get(R);M!=null&&g.push(M)}return{visibleDefinitions:y,hiddenDefinitions:g}},[t,m,o,r]),v=i.useCallback(d=>{a(y=>{if(y.includes(d))return y;const g=[...y,d];return l(g),g})},[l]),b=i.useCallback(d=>{a(y=>{const g=y.filter(R=>R!==d);return l(g),g})},[l]),j=i.useCallback(d=>{a(y=>d.length===y.length&&d.every((g,R)=>g===y[R])?y:(l(d),d))},[l]),L=i.useCallback(()=>{a(d=>s.length===d.length&&s.every((y,g)=>y===d[g])?d:(l(s),s))},[s,l]),k=i.useMemo(()=>o.length!==s.length?!0:!o.every((d,y)=>d===s[y]),[o,s]);return{visibleDefinitions:f,hiddenDefinitions:S,showFilter:v,hideFilter:b,reorderVisible:j,hasVisibilityChanges:k,resetVisibility:L}}function Ge(t){switch(t){case"MULTI_SELECT":case"SINGLE_SELECT":return{type:"SELECT",selectedValues:[]};case"LISTOGRAM":case"TEXT_TAGS":return{type:"EXACT_MATCH",values:[]};case"CONTAINS_TEXT":return{type:"CONTAINS_TEXT",value:void 0};case"TIMELINE":return{type:"TIMELINE",startDate:void 0,endDate:void 0};case"NUMBER_RANGE":case"DATE_RANGE":case"SINGLE_DATE":case"MULTI_DATE":case"TOGGLE":return;default:return}}function Nr(t){switch(t.type){case"PROPERTY":case"STATIC_VALUES":return Ge(t.filterComponent);case"LINKED_PROPERTY":{const n=Ge(t.linkedFilterComponent);return n==null?void 0:{type:"linkedProperty",linkedFilterState:n}}case"HAS_LINK":return{type:"hasLink",hasLink:!1};case"KEYWORD_SEARCH":case"CUSTOM":return;default:return}}const Pr={};function wr(t){const{objectType:n,objectSet:r,title:s,titleIcon:o,collapsed:a,onCollapsedChange:c,filterDefinitions:l,addFilterMode:m="uncontrolled",showResetButton:f=!1,onReset:S,showActiveFilterCount:v=!1,showFilteredOutValues:b=!1,className:j,enableSorting:L,onFilterAdded:k,onFilterRemoved:d,onFilterVisibilityChange:y,renderAddFilterButton:g}=t,{filterStates:R,setFilterState:M,clearFilterState:I,perFilterWhereClauses:V,perFilterLinkedFilters:x,activeFilterCount:W,hasChangesFromInitial:B,reset:H}=nr(t),u=m==="uncontrolled",C=i.useCallback((_,Z)=>{if(!y)return;const Me=[..._.map(q=>({filterKey:q,isVisible:!0})),...Z.map(q=>({filterKey:q,isVisible:!1}))];y(Me)},[y]),{visibleDefinitions:E,hiddenDefinitions:A,showFilter:F,hideFilter:J,reorderVisible:Ne,hasVisibilityChanges:_n,resetVisibility:Pe}=Or(l,u?C:void 0),Mn=B||_n,kn=i.useCallback(()=>{H(),Pe(),S==null||S()},[H,Pe,S]),Dn=i.useMemo(()=>{if(l!=null)return l.filter(_=>_.isVisible!==!1)},[l]),xn=u?E:Dn,In=i.useCallback(_=>{I(_),u&&J(_),d==null||d(_)},[I,u,J,d]),we=i.useCallback(_=>{F(_),k==null||k(_,l??[])},[F,k,l]),On=i.useCallback(_=>{Ne(_)},[Ne]),Ve=i.useMemo(()=>A.map(_=>({key:X(_),label:He(_)})),[A]),Nn=i.useMemo(()=>u?A.length===0?void 0:()=>e.jsx(Ir,{hiddenDefinitions:Ve,onShowFilter:we,renderTrigger:g}):g,[u,A.length,Ve,we,g]),Pn=u?In:d,wn=i.useCallback(({definition:_,filterKey:Z,filterState:Me,onFilterStateChanged:q,searchQuery:Vn,excludeRowOpen:Bn})=>e.jsx(rr,{objectType:n,objectSet:r,definition:_,filterState:Me,onFilterStateChanged:q,whereClause:V.get(Z)??Pr,linkedFilters:x.get(Z)??ir,showFilteredOutValues:b,searchQuery:Vn,excludeRowOpen:Bn}),[n,r,V,x,b]);return e.jsx(kr,{title:s,titleIcon:o,collapsed:a,onCollapsedChange:c,filterDefinitions:xn,filterStates:R,onFilterStateChanged:M,renderInput:wn,getFilterKey:X,getFilterLabel:He,getEmptyDisplayState:Nr,activeFilterCount:W,onReset:kn,showResetButton:f,showActiveFilterCount:v,canReset:Mn,enableSorting:L,onFilterRemoved:Pn,onOrderChange:On,className:j,renderAddFilterButton:Nn})}const h=Sr(wr,"FilterList"),{useArgs:bn}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:U}=__STORYBOOK_MODULE_TEST__,z={type:"PROPERTY",id:"department",key:"department",label:"Department",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},Ie={type:"PROPERTY",id:"team",key:"team",label:"Team",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},gn={type:"PROPERTY",id:"fullName",key:"fullName",label:"Full Name",filterComponent:"CONTAINS_TEXT",filterState:{type:"CONTAINS_TEXT"}},vn={type:"PROPERTY",id:"firstFullTimeStartDate",key:"firstFullTimeStartDate",label:"Start Date",filterComponent:"DATE_RANGE",filterState:{type:"DATE_RANGE"},clickToFilter:!0,formatDate:t=>t.toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric"})},_e={type:"PROPERTY",id:"employeeNumber",key:"employeeNumber",label:"Employee Number",filterComponent:"NUMBER_RANGE",filterState:{type:"NUMBER_RANGE"},clickToFilter:!0},Q={type:"PROPERTY",id:"locationCity",key:"locationCity",label:"Location City",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},Oe={type:"PROPERTY",id:"jobTitle-multi",key:"jobTitle",label:"Job Title",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}},w=[z,Ie,gn,vn,Oe,_e,Q],T={width:320,height:600},N={display:"flex",gap:16},G={flex:1},$={marginTop:8,padding:12,background:"#f5f5f5",borderRadius:4,fontSize:12,overflow:"auto",maxHeight:560},Ln={display:"flex",gap:16,height:600},Rn={width:320,flexShrink:0},Fn=e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("path",{d:"M1 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1.5a1 1 0 0 1-.293.707L10 8.914V13a1 1 0 0 1-.553.894l-2 1A1 1 0 0 1 6 14v-5.086L1.293 4.207A1 1 0 0 1 1 3.5V2z"})}),gs={title:"Components/FilterList",component:h,tags:["beta"],args:{title:"Filters",enableSorting:!1,showResetButton:!1,showActiveFilterCount:!1,collapsed:!1,onFilterClauseChanged:U(),onFilterStateChanged:U(),onFilterAdded:U(),onFilterRemoved:U(),onFilterVisibilityChange:U(),onCollapsedChange:U(),onReset:U()},parameters:{msw:{handlers:[...Gn.handlers]},controls:{expanded:!0}},argTypes:{objectType:{description:"The object type definition for the objects being filtered",control:!1},objectSet:{description:"Optional object set to scope aggregation queries",control:!1},filterDefinitions:{description:"Array of filter definitions. If not provided, all filterable properties are auto-discovered.",control:!1},title:{description:"Title displayed in the filter list header",control:"text"},titleIcon:{description:"Icon displayed next to the title",control:!1},filterClause:{description:"The current where clause. If provided, the filter clause is controlled.",control:!1},onFilterClauseChanged:{description:"Called when the filter clause changes. Required in controlled mode.",control:!1,table:{category:"Events"}},onFilterStateChanged:{description:"Called when an individual filter's state changes",control:!1,table:{category:"Events"}},enableSorting:{description:"Enable drag-and-drop reordering of filters",control:"boolean",table:{defaultValue:{summary:"false"}}},collapsed:{description:"Whether the filter list panel is collapsed",control:"boolean"},onCollapsedChange:{description:"Called when the collapsed state changes",control:!1,table:{category:"Events"}},showResetButton:{description:"Show reset filters button in header",control:"boolean",table:{defaultValue:{summary:"false"}}},onReset:{description:"Called when the reset button is clicked",control:!1,table:{category:"Events"}},showActiveFilterCount:{description:"Show count of active filters in header",control:"boolean",table:{defaultValue:{summary:"false"}}},onFilterAdded:{description:"Called when a filter is added. If provided, users can add filters.",control:!1,table:{category:"Events"}},onFilterRemoved:{description:"Called when a filter is removed. If provided, users can remove filters.",control:!1,table:{category:"Events"}},onFilterVisibilityChange:{description:"Called when filter visibility or ordering changes (reorder, add, remove).",control:!1,table:{category:"Events"}},addFilterMode:{description:'Controls how filter add/remove is managed. "uncontrolled" manages visibility internally; "controlled" leaves it to the consumer.',control:"select",options:["controlled","uncontrolled"],table:{category:"Advanced",defaultValue:{summary:'"uncontrolled"'}}},renderAddFilterButton:{description:"Custom render function for the add filter button.",control:!1,table:{category:"Advanced"}},initialFilterStates:{description:"Initial filter states for hydrating from external storage. Merged over definition defaults on mount.",control:!1,table:{category:"Advanced"}},className:{description:"Additional CSS class name",control:"text"}}},te={parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:({objectType:t,objectSet:n,...r})=>{const s=i.useMemo(()=>[z,Q],[]);return e.jsx("div",{style:T,children:e.jsx(h,{objectType:p,filterDefinitions:s,...r})})}},ne={parameters:{docs:{description:{story:"Repro for the integer-typed `NUMBER_RANGE` rounding fix. `employeeNumber` is an `integer` property, so histogram bucket boundaries — `(maxValue - minValue) / 20` — are usually fractional. Click any bar in the histogram. The Min/Max boxes must show whole integers (e.g. `657495073`), not fractional values (e.g. `657495073.4`)."}}},render:({objectType:t,objectSet:n,...r})=>{const s=i.useMemo(()=>[_e],[]);return e.jsx("div",{style:T,children:e.jsx(h,{objectType:p,filterDefinitions:s,...r})})}};function Vr(t){const n=Ae(),r=i.useMemo(()=>n(p).where({department:"Marketing"}),[n]),s=i.useMemo(()=>[Ie,Q],[]);return e.jsx("div",{style:T,children:e.jsx(h,{objectType:p,objectSet:r,filterDefinitions:s,...t})})}const re={parameters:{docs:{description:{story:"Pass an `objectSet` prop to scope filter aggregations to a subset of objects. Here the object set is filtered to Marketing department employees, so the listogram counts reflect only that subset."},source:{code:`const client = useOsdkClient();
const objectSet = client(Employee).where({ department: "Marketing" });

<FilterList
  objectType={Employee}
  objectSet={objectSet}
  filterDefinitions={[
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:t=>e.jsx(Vr,{...t})};function Br(t){const n=i.useMemo(()=>[z,Ie,{...gn,isVisible:!1},{...vn,isVisible:!1},{..._e,isVisible:!1},{...Q,isVisible:!1}],[]);return e.jsx("div",{style:T,children:e.jsx(h,{objectType:p,filterDefinitions:n,addFilterMode:"uncontrolled",...t})})}const ie={args:{showResetButton:!0},parameters:{docs:{source:{code:`const filterDefinitions = [
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
/>`}}},render:t=>e.jsx(Br,{...t})};function Hr(t){const[n,r]=i.useState(void 0),s=t.onFilterClauseChanged,o=i.useCallback(a=>{r(a),s==null||s(a)},[s]);return e.jsxs("div",{style:N,children:[e.jsx("div",{style:T,children:e.jsx(h,{objectType:p,filterDefinitions:w,...t,filterClause:n,onFilterClauseChanged:o})}),e.jsxs("div",{style:G,children:[e.jsx("strong",{children:"Filter Clause (JSON):"}),e.jsx("pre",{style:$,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const se={parameters:{docs:{description:{story:"All filter component types with a controlled where clause. Hover filter items to reveal search and exclude actions."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>`}}},render:t=>e.jsx(Hr,{...t})},oe={args:{title:"Employee Filters"},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  titleIcon={<svg>...</svg>}
/>`}}},render:({objectType:t,objectSet:n,...r})=>e.jsx("div",{style:T,children:e.jsx(h,{objectType:p,filterDefinitions:w,titleIcon:Fn,...r})})};function Yr(t){const n=t.onReset,r=i.useCallback(()=>{console.log("Reset clicked"),n==null||n()},[n]);return e.jsx("div",{style:T,children:e.jsx(h,{objectType:p,filterDefinitions:w,...t,onReset:r})})}const le={args:{showResetButton:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showResetButton={true}
  onReset={() => console.log("Reset clicked")}
/>`}}},render:t=>e.jsx(Yr,{...t})},ae={args:{showActiveFilterCount:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showActiveFilterCount={true}
/>`}}},render:({objectType:t,objectSet:n,...r})=>e.jsx("div",{style:T,children:e.jsx(h,{objectType:p,filterDefinitions:w,...r})})},ce={args:{enableSorting:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  enableSorting={true}
/>`}}},render:({objectType:t,objectSet:n,...r})=>e.jsx("div",{style:T,children:e.jsx(h,{objectType:p,filterDefinitions:w,...r})})};function Gr(t){return e.jsx("div",{style:T,children:e.jsx(h,{objectType:p,filterDefinitions:w,...t})})}const de={args:{title:"Employee Filters",showActiveFilterCount:!0},parameters:{docs:{description:{story:"Click the collapse button to minimize the filter panel. Active filter count is shown in the collapsed state."},source:{code:`const [collapsed, setCollapsed] = useState(false);

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  collapsed={collapsed}
  onCollapsedChange={setCollapsed}
  showActiveFilterCount={true}
/>`}}},render:t=>{const[,n]=bn(),r=t.onCollapsedChange,s=i.useCallback(o=>{n({collapsed:o}),r==null||r(o)},[n,r]);return e.jsx(Gr,{...t,onCollapsedChange:s})}},pe={parameters:{docs:{source:{code:`const filterDefinitions = [
  { type: "KEYWORD_SEARCH", properties: ["fullName", "department", "jobTitle", "locationCity"], label: "Search" },
  { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:({objectType:t,objectSet:n,...r})=>{const s=i.useMemo(()=>[{type:"KEYWORD_SEARCH",properties:["fullName","department","jobTitle","locationCity"],label:"Search"},z,Q],[]);return e.jsx("div",{style:T,children:e.jsx(h,{objectType:p,filterDefinitions:s,...r})})}};function Wr(t){const n=i.useMemo(()=>[{type:"PROPERTY",id:"department-no-color",key:"department",label:"Department (default colors)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]),r=i.useMemo(()=>[{type:"PROPERTY",id:"department-color",key:"department",label:"Department (custom colors)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},colorMap:{Marketing:"#e74c3c",Operations:"#2ecc71",Finance:"#3498db",Product:"#f39c12"}}],[]);return e.jsxs("div",{style:N,children:[e.jsx("div",{style:T,children:e.jsx(h,{objectType:p,filterDefinitions:n,...t})}),e.jsx("div",{style:T,children:e.jsx(h,{objectType:p,filterDefinitions:r,...t})})]})}const ue={parameters:{docs:{source:{code:`// Without colorMap: all bars use the default theme color
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

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:t=>e.jsx(Wr,{...t})},jn={Marketing:"Marketing Dept.",Operations:"Ops Team",Finance:"Finance & Accounting",Product:"Product Group"};function Ur(t){const n=i.useMemo(()=>[{type:"PROPERTY",id:"department-default",key:"department",label:"Department (default)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]),r=i.useMemo(()=>[{type:"PROPERTY",id:"department-custom",key:"department",label:"Department (custom render)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},renderValue:s=>jn[s]??s},{type:"PROPERTY",id:"team-custom",key:"team",label:"Team (custom render)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},renderValue:s=>s.toUpperCase()}],[]);return e.jsxs("div",{style:N,children:[e.jsx("div",{style:T,children:e.jsx(h,{objectType:p,filterDefinitions:n,...t})}),e.jsx("div",{style:T,children:e.jsx(h,{objectType:p,filterDefinitions:r,...t})})]})}const me={parameters:{docs:{description:{story:"Use `renderValue` to customize how filter values are displayed and searched. The returned string replaces the raw value for display and search matching. Works with LISTOGRAM, MULTI_SELECT, and SINGLE_SELECT components."},source:{code:`const DEPARTMENT_LABELS = {
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

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:t=>e.jsx(Ur,{...t})},Xr={Marketing:"#f97316",Operations:"#3b82f6",Finance:"#10b981",Product:"#a855f7"},Kr={display:"inline-flex",alignItems:"center",gap:8},$r={display:"inline-block",width:10,height:10,borderRadius:"50%",flexShrink:0};function zr({value:t}){const n=Xr[t]??"#94a3b8";return e.jsxs("span",{style:Kr,children:[e.jsx("span",{style:{...$r,background:n}}),e.jsx("span",{children:jn[t]??t})]})}function Jr(t){const n=i.useMemo(()=>[{type:"PROPERTY",id:"department-swatch",key:"department",label:"Department (JSX)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},renderValue:r=>e.jsx(zr,{value:r})},{type:"PROPERTY",id:"team-link",key:"team",label:"Team (anchor JSX)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},renderValue:r=>e.jsx("a",{href:`#/team/${encodeURIComponent(r)}`,onClick:s=>s.preventDefault(),style:{color:"#2563eb",textDecoration:"underline"},children:r})}],[]);return e.jsx("div",{style:T,children:e.jsx(h,{objectType:p,filterDefinitions:n,...t})})}const fe={parameters:{docs:{description:{story:"`renderValue` may return any `ReactNode`, not just a string. Use this to render avatars, anchors, status pills, or any custom JSX inside listogram rows, dropdown items, and chips. When the function returns non-string JSX, search matching falls back to the raw value."},source:{code:`const filterDefinitions = [
  {
    type: "PROPERTY",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
    renderValue: (value) => <DepartmentSwatch value={value} />,
  },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:t=>e.jsx(Jr,{...t})};function qr(t){const n=i.useMemo(()=>[{type:"PROPERTY",id:"dept-full",key:"department",label:"full: label + bar + count",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"full"}}],[]),r=i.useMemo(()=>[{type:"PROPERTY",id:"dept-count",key:"department",label:"count: label + count (no bar)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"count"}}],[]),s=i.useMemo(()=>[{type:"PROPERTY",id:"dept-minimal",key:"department",label:"minimal: label only",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"}}],[]);return e.jsxs("div",{style:N,children:[e.jsx("div",{style:T,children:e.jsx(h,{objectType:p,filterDefinitions:n,...t})}),e.jsx("div",{style:T,children:e.jsx(h,{objectType:p,filterDefinitions:r,...t})}),e.jsx("div",{style:T,children:e.jsx(h,{objectType:p,filterDefinitions:s,...t})})]})}const ye={parameters:{docs:{source:{code:`// "full" (default): label + colored bar + count number
// "count": label + count number (no bar)
// "minimal": label only (no bar, no count)

const filterDefinitions = [
  { ..., listogramConfig: { displayMode: "full" } },
  { ..., listogramConfig: { displayMode: "count" } },
  { ..., listogramConfig: { displayMode: "minimal" } },
];`}}},render:t=>e.jsx(qr,{...t})};function Qr(t){const n=i.useMemo(()=>[{type:"PROPERTY",id:"dept-with-count",key:"department",label:"Department (counts visible)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},{type:"PROPERTY",id:"team-with-count",key:"team",label:"Team (counts visible)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}}],[]),r=i.useMemo(()=>[{type:"PROPERTY",id:"dept-no-count",key:"department",label:"Department (counts hidden)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},showCount:!1},{type:"PROPERTY",id:"team-no-count",key:"team",label:"Team (counts hidden)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},showCount:!1}],[]);return e.jsxs("div",{style:N,children:[e.jsx("div",{style:T,children:e.jsx(h,{objectType:p,filterDefinitions:n,...t})}),e.jsx("div",{style:T,children:e.jsx(h,{objectType:p,filterDefinitions:r,...t})})]})}const he={parameters:{docs:{description:{story:"Use `showCount: false` on individual filter definitions to hide aggregation counts in LISTOGRAM and MULTI_SELECT inputs. Bar visualizations in LISTOGRAM are preserved."},source:{code:`// showCount defaults to true; set false to hide counts per filter
const filterDefinitions = [
  { ..., filterComponent: "LISTOGRAM", showCount: false },
  { ..., filterComponent: "MULTI_SELECT", showCount: false },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:t=>e.jsx(Qr,{...t})};function Zr(t){const n=i.useMemo(()=>[{type:"PROPERTY",id:"department-checkbox",key:"department",label:"Department",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},{type:"PROPERTY",id:"team-checkbox",key:"team",label:"Team",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]);return e.jsx("div",{style:T,children:e.jsx(h,{objectType:p,filterDefinitions:n,...t})})}const Ce={parameters:{docs:{description:{story:"Listogram rows always include a checkbox for multi-select. Selecting values checks the checkbox and highlights the row. Use the exclude toggle (three-dot menu) to invert selections."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:t=>e.jsx(Zr,{...t})};function ei(t){const[n,r]=i.useState(w),s=t.onFilterRemoved,o=i.useCallback(a=>{r(c=>c.filter(l=>"key"in l?l.key!==a:!0)),s==null||s(a)},[s]);return e.jsx("div",{style:T,children:e.jsx(h,{objectType:p,filterDefinitions:n,...t,onFilterRemoved:o})})}const Se={name:"Removable Filters",args:{title:"Removable Filters",showActiveFilterCount:!0},parameters:{docs:{description:{story:"When `onFilterRemoved` is provided, each filter item shows a remove button (X) on hover. Clicking it removes the filter from the list."},source:{code:`const [definitions, setDefinitions] = useState(filterDefinitions);

const handleFilterRemoved = (filterKey) => {
  setDefinitions(prev => prev.filter(def => def.key !== filterKey));
};

<FilterList
  objectType={Employee}
  filterDefinitions={definitions}
  onFilterRemoved={handleFilterRemoved}
  title="Removable Filters"
/>`}}},render:t=>e.jsx(ei,{...t})};function ti(t){const[n,r]=i.useState(void 0),s=i.useMemo(()=>[{type:"STATIC_VALUES",key:"department",label:"Department (static)",filterComponent:"LISTOGRAM",values:["Marketing","Operations","Finance","Product"],filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"}},{type:"STATIC_VALUES",key:"locationCity",label:"Office Location",filterComponent:"SINGLE_SELECT",values:["New York","San Francisco","London","Tokyo"],filterState:{type:"SELECT",selectedValues:[]}},{type:"STATIC_VALUES",key:"team",label:"Team (multi-select)",filterComponent:"MULTI_SELECT",values:["Alpha","Beta","Gamma","Delta"],filterState:{type:"SELECT",selectedValues:[]}},{type:"STATIC_VALUES",id:"custom-status",key:"status",label:"Status (custom clause)",filterComponent:"LISTOGRAM",values:["Active","Inactive"],filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"},toWhereClause:c=>{if(c.type!=="EXACT_MATCH"||c.values.length===0)return;const l=c.values,m=l.includes("Active"),f=l.includes("Inactive");if(m&&f)return{$or:[{employeeStatus:"Active"},{employeeStatus:"Inactive"}]};if(m)return{employeeStatus:"Active"};if(f)return{employeeStatus:"Inactive"}}}],[]),o=t.onFilterClauseChanged,a=i.useCallback(c=>{r(c),o==null||o(c)},[o]);return e.jsxs("div",{style:N,children:[e.jsx("div",{style:T,children:e.jsx(h,{objectType:p,filterDefinitions:s,...t,filterClause:n,onFilterClauseChanged:a})}),e.jsxs("div",{style:G,children:[e.jsx("strong",{children:"Filter Clause (JSON):"}),e.jsx("pre",{style:$,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const Te={parameters:{docs:{description:{story:"Use `STATIC_VALUES` filter definitions to provide a fixed list of values instead of fetching from OSDK aggregation. Supports LISTOGRAM, SINGLE_SELECT, MULTI_SELECT, and TEXT_TAGS components. Optionally provide a `toWhereClause` function for custom clause generation."},source:{code:`const filterDefinitions = [
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
/>`}}},render:t=>e.jsx(ti,{...t})};function ni(t){const[n,r]=i.useState(void 0),[s,o]=i.useState(w),a=t.onFilterRemoved,c=i.useCallback(v=>{o(b=>b.filter(j=>"key"in j?j.key!==v:!0)),a==null||a(v)},[a]),l=t.onReset,m=i.useCallback(()=>{o(w),l==null||l()},[l]),f=t.onFilterClauseChanged,S=i.useCallback(v=>{r(v),f==null||f(v)},[f]);return e.jsxs("div",{style:Ln,children:[e.jsx("div",{style:Rn,children:e.jsx(h,{objectType:p,filterDefinitions:s,titleIcon:Fn,...t,onReset:m,onFilterRemoved:c,filterClause:n,onFilterClauseChanged:S})}),e.jsx("div",{style:G,children:e.jsx(En,{objectType:p,filter:n})})]})}const Ee={name:"Full Featured",args:{title:"Employee Filters",showResetButton:!0,showActiveFilterCount:!0,enableSorting:!0},parameters:{docs:{description:{story:"Demonstrates all filter list features together: collapse, reset, active count, sorting, removable filters, per-filter search, exclude toggle, and controlled where clause driving an ObjectTable."},source:{code:`// All features combined: collapse, sort, search, exclude, remove, reset

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
/>`}}},render:t=>{const[,n]=bn(),r=t.onCollapsedChange,s=i.useCallback(o=>{n({collapsed:o}),r==null||r(o)},[n,r]);return e.jsx(ni,{...t,onCollapsedChange:s})}};function ri(t){const n=Ae(),r=i.useMemo(()=>n(p),[n]),[s,o]=i.useState(void 0),a=i.useMemo(()=>[{type:"HAS_LINK",linkName:"lead",label:"Has Manager",filterState:{type:"hasLink",hasLink:!1}},{type:"LINKED_PROPERTY",linkName:"lead",reverseLinkName:"peeps",linkedPropertyKey:"department",linkedFilterComponent:"MULTI_SELECT",linkedFilterState:{type:"SELECT",selectedValues:[]},filterState:{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:[]}},label:"Manager Department"}],[]),c=t.onFilterClauseChanged,l=i.useCallback(m=>{o(m),c==null||c(m)},[c]);return e.jsxs("div",{style:N,children:[e.jsx("div",{style:T,children:e.jsx(h,{objectType:p,objectSet:r,filterDefinitions:a,...t,filterClause:s,onFilterClauseChanged:l})}),e.jsxs("div",{style:G,children:[e.jsx("strong",{children:"Filter Clause (JSON):"}),e.jsx("p",{children:"Note: LINKED_PROPERTY filter is not applied through where clause"}),e.jsx("pre",{style:$,children:s?JSON.stringify(s,null,2):"(no active filters)"})]})]})}const be={name:"Linked Property Filters",parameters:{docs:{description:{story:"Demonstrates filtering on properties of linked objects. HAS_LINK filters objects based on whether they have a linked object. LINKED_PROPERTY filters on a property of the linked object and exposes the same overflow (…) controls as direct property filters — the inline Keeping/Excluding dropdown and Clear all."},source:{code:`// HAS_LINK and LINKED_PROPERTY filter definitions
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
/>`}}},render:t=>e.jsx(ri,{...t})},ii={type:"PROPERTY",id:"combined-department",key:"department",label:"Department",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},si={type:"PROPERTY",id:"combined-locationCity",key:"locationCity",label:"Location City",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}},oi={type:"LINKED_PROPERTY",id:"combined-lead-name",linkName:"lead",reverseLinkName:"peeps",linkedPropertyKey:"fullName",linkedFilterComponent:"MULTI_SELECT",linkedFilterState:{type:"SELECT",selectedValues:[]},filterState:{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:[]}},searchField:!1,label:"Manager Name"},li=[oi,ii,si],ai=[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"locationCity"}},{locator:{type:"rdp",id:"managerName",creator:t=>t.pivotTo("lead").selectProperty("fullName")},renderHeader:()=>"Manager Name",renderCell:t=>"managerName"in t?e.jsx("span",{children:t.managerName}):e.jsx("span",{style:{color:"#999"},children:"No Manager"})}];function ci(t){const n=Ae(),r=i.useMemo(()=>n(p),[n]),[s,o]=i.useState(void 0),[a,c]=i.useState(r),l=t.onFilterClauseChanged,m=i.useCallback(f=>{o(f),l==null||l(f)},[l]);return e.jsxs("div",{style:Ln,children:[e.jsx("div",{style:Rn,children:e.jsx(h,{...t,objectType:p,objectSet:r,filterDefinitions:li,filterClause:s,onFilterClauseChanged:m,onEffectiveObjectSet:c,showFilteredOutValues:!0})}),e.jsx("div",{style:G,children:e.jsx(En,{objectType:p,objectSet:a,columnDefinitions:ai})})]})}const ge={name:"Combined with Object Table",parameters:{docs:{description:{story:'A linked filter (Manager Name) and direct property filters coexist in one FilterList alongside an ObjectTable. Pass the unfiltered scope as `objectSet`; FilterList applies the linked-filter narrowing internally and emits the fully-narrowed `ObjectSet` via `onEffectiveObjectSet` for the table. The table surfaces the linked manager via a derived-property `Manager Name` column (`pivotTo("lead").selectProperty("fullName")`). With `showFilteredOutValues`, direct-facet values absent under the active linked filter render as greyed-out count=0 filtered-out rows.'},source:{code:`const baseObjectSet = useMemo(() => client(Employee), [client]);
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
/>`}}},render:t=>e.jsx(ci,{...t})};function di({filterState:t,onFilterStateChanged:n}){const r=i.useCallback(o=>{const a=o.target.value;n({type:"custom",customState:{value:a}})},[n]),s=i.useCallback(()=>{n({type:"custom",customState:{value:""}})},[n]);return e.jsxs("div",{style:{padding:"12px 0",display:"flex",gap:"8px"},children:[e.jsx("input",{type:"text",value:t.customState.value,onChange:r,placeholder:"Enter name substring...",style:{flex:1,padding:"6px 8px",fontSize:"14px",border:"1px solid #ccc",borderRadius:"4px"}}),t.customState.value&&e.jsx("button",{onClick:s,style:{padding:"6px 12px",fontSize:"12px",backgroundColor:"#f5f5f5",border:"1px solid #ccc",borderRadius:"4px",cursor:"pointer"},children:"Clear"})]})}function pi(t){const[n,r]=i.useState(void 0),s=i.useMemo(()=>[{type:"CUSTOM",key:"custom-name-contains",label:"Name Contains",filterComponent:"CUSTOM",filterState:{type:"custom",customState:{value:""}},renderInput:({filterState:c,onFilterStateChanged:l})=>e.jsx(di,{filterState:c,onFilterStateChanged:l}),toWhereClause:c=>{var m;const l=(m=c.customState)==null?void 0:m.value;if(l)return{fullName:{$containsAnyTerm:l}}}}],[]),o=t.onFilterClauseChanged,a=i.useCallback(c=>{r(c),o==null||o(c)},[o]);return e.jsxs("div",{style:N,children:[e.jsx("div",{style:T,children:e.jsx(h,{objectType:p,filterDefinitions:s,...t,filterClause:n,onFilterClauseChanged:a})}),e.jsxs("div",{style:G,children:[e.jsx("strong",{children:"Filter Clause (JSON):"}),e.jsx("pre",{style:$,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const ve={name:"Custom Filters",parameters:{docs:{description:{story:"Custom filters provide full control over filtering logic and UI. The 'Name Contains' filter uses `renderInput` for a simple custom input. "},source:{code:`// Custom filter with renderInput
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
/>`}}},render:t=>e.jsx(pi,{...t})},ui={type:"PROPERTY",id:"department-multi",key:"department",label:"Department",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}},mi={type:"PROPERTY",id:"department-single",key:"department",label:"Department (single)",filterComponent:"SINGLE_SELECT",filterState:{type:"SELECT",selectedValues:[]}},fi=[z,ui,mi,_e],Le={name:"No value rendering",parameters:{docs:{description:{story:"Empty/null filter values render via the canonical `<NoValueLabel />` component — italic, muted, with the literal text 'No value' — across listogram buckets, single-select dropdown options, multi-select dropdown options, and multi-select chips. The mock dataset includes one Employee with `department: \"\"` so the No value row is visible in the listogram."}}},render:()=>e.jsx("div",{style:T,children:e.jsx(h,{objectType:p,filterDefinitions:fi})})},yi={type:"PROPERTY",id:"locationCity-single",key:"locationCity",label:"Location City (single)",filterComponent:"SINGLE_SELECT",filterState:{type:"SELECT",selectedValues:[]}},hi={type:"LINKED_PROPERTY",linkName:"lead",reverseLinkName:"peeps",linkedPropertyKey:"department",linkedFilterComponent:"MULTI_SELECT",linkedFilterState:{type:"SELECT",selectedValues:[]},filterState:{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:[]}},label:"Manager Department (linked multi)"},Ci={type:"LINKED_PROPERTY",linkName:"lead",reverseLinkName:"peeps",linkedPropertyKey:"locationCity",linkedFilterComponent:"SINGLE_SELECT",linkedFilterState:{type:"SELECT",selectedValues:[]},filterState:{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:[]}},label:"Manager City (linked single)"},Si=new Map([["department",{type:"EXACT_MATCH",values:["Marketing","Research"]}],["jobTitle-multi",{type:"SELECT",selectedValues:["Marketing Manager","Chief Scientist"]}],["locationCity-single",{type:"SELECT",selectedValues:["Berlin"]}],["linkedProperty:lead:department",{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:["Marketing","Research"]}}],["linkedProperty:lead:locationCity",{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:["Berlin"]}}]]),Ti=[z,Oe,yi,hi,Ci];function Ei(t){const n=Ae(),r=i.useMemo(()=>n(p),[n]),[s,o]=i.useState(void 0),a=i.useCallback(c=>{o(c)},[]);return e.jsxs("div",{style:N,children:[e.jsx("div",{style:T,children:e.jsx(h,{...t,objectType:p,objectSet:r,filterDefinitions:Ti,initialFilterStates:Si,onFilterClauseChanged:a})}),e.jsxs("div",{style:G,children:[e.jsx("h4",{children:"Active where clause"}),e.jsx("pre",{style:$,children:s?JSON.stringify(s,null,2):"(none)"})]})]})}const Re={name:"With initial filter states",parameters:{docs:{description:{story:"Pass `initialFilterStates` to hydrate filters from saved state (e.g. localStorage or URL params). Selections are restored on mount, including values that currently have zero matching rows — they appear with a count of 0 so users can see and clear them. Demonstrated across LISTOGRAM, MULTI_SELECT, SINGLE_SELECT, and LINKED_PROPERTY filters."},source:{code:`// "Research", "Chief Scientist", and "Berlin" are not in the current
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
/>`}}},render:t=>e.jsx(Ei,{...t})},We=[z,Oe],bi=new Map([["department",{type:"EXACT_MATCH",values:["Engineering"]}],["jobTitle-multi",{type:"SELECT",selectedValues:["Software Engineer"]}]]);function Ue(t){const n=[...t.keys()].sort(),r={};for(const s of n){const o=t.get(s);o!==void 0&&(r[s]=o)}return JSON.stringify(r,null,2)}function An({initialFilterStates:t,storyArgs:n}){const r=i.useMemo(()=>{const f=new Map;for(const S of We)S.type==="PROPERTY"&&S.filterState&&f.set(X(S),S.filterState);if(t)for(const[S,v]of t)f.set(S,v);return f},[t]),[s,o]=i.useState(()=>new Map(r)),a=n.onFilterStateChanged,c=i.useCallback((f,S)=>{o(v=>{const b=new Map(v);return b.set(X(f),S),b}),a==null||a(f,S)},[a]),l=n.onReset,m=i.useCallback(()=>{o(new Map(r)),l==null||l()},[l,r]);return e.jsxs("div",{style:N,children:[e.jsx("div",{style:T,children:e.jsx(h,{...n,objectType:p,filterDefinitions:We,initialFilterStates:t,showResetButton:!0,onFilterStateChanged:c,onReset:m})}),e.jsxs("div",{style:G,children:[e.jsx("h4",{children:"Filter state dump"}),e.jsx("pre",{"data-testid":"filter-state-dump",style:$,children:Ue(s)}),e.jsx("h4",{children:"Initial snapshot"}),e.jsx("pre",{"data-testid":"filter-state-initial",style:$,children:Ue(r)})]})]})}function gi(t){return e.jsx(An,{storyArgs:t})}const Fe={args:{showResetButton:!0},parameters:{docs:{description:{story:"Reset button is disabled-by-default until the user diverges from the initial (empty string) snapshot. After clicking reset the filter state returns to the initial snapshot and the button disables itself again."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showResetButton={true}
/>`}}},render:t=>e.jsx(gi,{...t})};function vi(t){return e.jsx(An,{storyArgs:t,initialFilterStates:bi})}const je={args:{showResetButton:!0},parameters:{docs:{description:{story:"Reset button stays disabled on mount even though there are active selections, because the live filter state matches the initial snapshot. Changing a selection enables the button; clicking it restores the initial snapshot, not an empty state."},source:{code:`const savedStates = new Map([
  ["department", { type: "EXACT_MATCH", values: ["Engineering"] }],
  ["jobTitle-multi", { type: "SELECT", selectedValues: ["Software Engineer"] }],
]);

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  initialFilterStates={savedStates}
  showResetButton={true}
/>`}}},render:t=>e.jsx(vi,{...t})};var Xe,Ke,$e;te.parameters={...te.parameters,docs:{...(Xe=te.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...($e=(Ke=te.parameters)==null?void 0:Ke.docs)==null?void 0:$e.source}}};var ze,Je,qe;ne.parameters={...ne.parameters,docs:{...(ze=ne.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(qe=(Je=ne.parameters)==null?void 0:Je.docs)==null?void 0:qe.source}}};var Qe,Ze,et;re.parameters={...re.parameters,docs:{...(Qe=re.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(et=(Ze=re.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,nt,rt;ie.parameters={...ie.parameters,docs:{...(tt=ie.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(rt=(nt=ie.parameters)==null?void 0:nt.docs)==null?void 0:rt.source}}};var it,st,ot;se.parameters={...se.parameters,docs:{...(it=se.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
}`,...(ot=(st=se.parameters)==null?void 0:st.docs)==null?void 0:ot.source}}};var lt,at,ct;oe.parameters={...oe.parameters,docs:{...(lt=oe.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
}`,...(ct=(at=oe.parameters)==null?void 0:at.docs)==null?void 0:ct.source}}};var dt,pt,ut;le.parameters={...le.parameters,docs:{...(dt=le.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(ut=(pt=le.parameters)==null?void 0:pt.docs)==null?void 0:ut.source}}};var mt,ft,yt;ae.parameters={...ae.parameters,docs:{...(mt=ae.parameters)==null?void 0:mt.docs,source:{originalSource:`{
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
}`,...(yt=(ft=ae.parameters)==null?void 0:ft.docs)==null?void 0:yt.source}}};var ht,Ct,St;ce.parameters={...ce.parameters,docs:{...(ht=ce.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
}`,...(St=(Ct=ce.parameters)==null?void 0:Ct.docs)==null?void 0:St.source}}};var Tt,Et,bt;de.parameters={...de.parameters,docs:{...(Tt=de.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
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
}`,...(bt=(Et=de.parameters)==null?void 0:Et.docs)==null?void 0:bt.source}}};var gt,vt,Lt;pe.parameters={...pe.parameters,docs:{...(gt=pe.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(Lt=(vt=pe.parameters)==null?void 0:vt.docs)==null?void 0:Lt.source}}};var Rt,Ft,jt;ue.parameters={...ue.parameters,docs:{...(Rt=ue.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
}`,...(jt=(Ft=ue.parameters)==null?void 0:Ft.docs)==null?void 0:jt.source}}};var At,_t,Mt;me.parameters={...me.parameters,docs:{...(At=me.parameters)==null?void 0:At.docs,source:{originalSource:`{
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
}`,...(Mt=(_t=me.parameters)==null?void 0:_t.docs)==null?void 0:Mt.source}}};var kt,Dt,xt;fe.parameters={...fe.parameters,docs:{...(kt=fe.parameters)==null?void 0:kt.docs,source:{originalSource:`{
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
}`,...(xt=(Dt=fe.parameters)==null?void 0:Dt.docs)==null?void 0:xt.source}}};var It,Ot,Nt;ye.parameters={...ye.parameters,docs:{...(It=ye.parameters)==null?void 0:It.docs,source:{originalSource:`{
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
}`,...(Nt=(Ot=ye.parameters)==null?void 0:Ot.docs)==null?void 0:Nt.source}}};var Pt,wt,Vt;he.parameters={...he.parameters,docs:{...(Pt=he.parameters)==null?void 0:Pt.docs,source:{originalSource:`{
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
}`,...(Vt=(wt=he.parameters)==null?void 0:wt.docs)==null?void 0:Vt.source}}};var Bt,Ht,Yt;Ce.parameters={...Ce.parameters,docs:{...(Bt=Ce.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
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
}`,...(Yt=(Ht=Ce.parameters)==null?void 0:Ht.docs)==null?void 0:Yt.source}}};var Gt,Wt,Ut;Se.parameters={...Se.parameters,docs:{...(Gt=Se.parameters)==null?void 0:Gt.docs,source:{originalSource:`{
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
}`,...(Ut=(Wt=Se.parameters)==null?void 0:Wt.docs)==null?void 0:Ut.source}}};var Xt,Kt,$t;Te.parameters={...Te.parameters,docs:{...(Xt=Te.parameters)==null?void 0:Xt.docs,source:{originalSource:`{
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
}`,...($t=(Kt=Te.parameters)==null?void 0:Kt.docs)==null?void 0:$t.source}}};var zt,Jt,qt;Ee.parameters={...Ee.parameters,docs:{...(zt=Ee.parameters)==null?void 0:zt.docs,source:{originalSource:`{
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
}`,...(qt=(Jt=Ee.parameters)==null?void 0:Jt.docs)==null?void 0:qt.source}}};var Qt,Zt,en;be.parameters={...be.parameters,docs:{...(Qt=be.parameters)==null?void 0:Qt.docs,source:{originalSource:`{
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
}`,...(en=(Zt=be.parameters)==null?void 0:Zt.docs)==null?void 0:en.source}}};var tn,nn,rn;ge.parameters={...ge.parameters,docs:{...(tn=ge.parameters)==null?void 0:tn.docs,source:{originalSource:`{
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
}`,...(rn=(nn=ge.parameters)==null?void 0:nn.docs)==null?void 0:rn.source}}};var sn,on,ln;ve.parameters={...ve.parameters,docs:{...(sn=ve.parameters)==null?void 0:sn.docs,source:{originalSource:`{
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
}`,...(ln=(on=ve.parameters)==null?void 0:on.docs)==null?void 0:ln.source}}};var an,cn,dn;Le.parameters={...Le.parameters,docs:{...(an=Le.parameters)==null?void 0:an.docs,source:{originalSource:`{
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
}`,...(dn=(cn=Le.parameters)==null?void 0:cn.docs)==null?void 0:dn.source}}};var pn,un,mn;Re.parameters={...Re.parameters,docs:{...(pn=Re.parameters)==null?void 0:pn.docs,source:{originalSource:`{
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
}`,...(mn=(un=Re.parameters)==null?void 0:un.docs)==null?void 0:mn.source}}};var fn,yn,hn;Fe.parameters={...Fe.parameters,docs:{...(fn=Fe.parameters)==null?void 0:fn.docs,source:{originalSource:`{
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
}`,...(hn=(yn=Fe.parameters)==null?void 0:yn.docs)==null?void 0:hn.source}}};var Cn,Sn,Tn;je.parameters={...je.parameters,docs:{...(Cn=je.parameters)==null?void 0:Cn.docs,source:{originalSource:`{
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
}`,...(Tn=(Sn=je.parameters)==null?void 0:Sn.docs)==null?void 0:Tn.source}}};const vs=["Default","IntegerNumberRangeRounding","WithObjectSet","AddFilterMode","WithAllFilterTypes","WithTitleAndIcon","WithResetButton","WithActiveFilterCount","WithSorting","CollapsiblePanel","KeywordSearch","WithColorMap","WithRenderValue","WithRenderValueAsReactNode","WithListogramDisplayModes","WithHiddenCounts","WithCheckbox","WithRemovableFilters","WithStaticValues","FullFeatured","WithLinkedPropertyFilters","CombinedWithObjectTable","WithCustomFilters","NoValueRendering","WithInitialFilterStates","WithResetButtonEmptyInitial","WithResetButtonNonEmptyInitial"];export{ie as AddFilterMode,de as CollapsiblePanel,ge as CombinedWithObjectTable,te as Default,Ee as FullFeatured,ne as IntegerNumberRangeRounding,pe as KeywordSearch,Le as NoValueRendering,ae as WithActiveFilterCount,se as WithAllFilterTypes,Ce as WithCheckbox,ue as WithColorMap,ve as WithCustomFilters,he as WithHiddenCounts,Re as WithInitialFilterStates,be as WithLinkedPropertyFilters,ye as WithListogramDisplayModes,re as WithObjectSet,Se as WithRemovableFilters,me as WithRenderValue,fe as WithRenderValueAsReactNode,le as WithResetButton,Fe as WithResetButtonEmptyInitial,je as WithResetButtonNonEmptyInitial,ce as WithSorting,Te as WithStaticValues,oe as WithTitleAndIcon,vs as __namedExportsOrder,gs as default};
