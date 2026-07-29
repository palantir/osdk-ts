var zn=Object.defineProperty;var $n=(e,n,r)=>n in e?zn(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r;var xe=(e,n,r)=>$n(e,typeof n!="symbol"?n+"":n,r);import{r as i,R as l,f as Jn,j as t}from"./iframe-CQsWIHX4.js";import{S as Qn}from"./MultiColumnSortDialog-MEZWV2Ob.js";import{b as qn,s as Zn,c as er,f as tr,d as I,S as nr,R as Ue,O as rr,e as ir,C as sr,E as or,h as lr,i as ar,g as $,u as cr,a as Xe,F as dr,j as ur}from"./getFilterLabel-DVPIZipt.js";import{c as X}from"./index-BZdihyUU.js";import{u as pr,b as mr,c as Ke,P as fr,s as yr,K as Cr,d as hr,a as Sr,e as Er,f as Tr,g as br,v as gr,h as vr}from"./DraggableList-YoSp78x2.js";import{B as w}from"./Button-Bo6XnFx1.js";import{I as Fr}from"./Input-DUNS0JHG.js";import{w as Rr}from"./withOsdkMetrics-Dr0Jc4WU.js";import{O as je}from"./object-table-42EhGgI6.js";import{E as u}from"./Employee-BAk2o20h.js";import{u as De}from"./useOsdkClient-D0dCL2UR.js";import"./preload-helper-DeHQ25bj.js";import"./InternalBackdrop-DVWpzKpj.js";import"./useBaseUiId-CJzjfth2.js";import"./composite-CEhoyh-F.js";import"./index-DeEfLW8W.js";import"./index-C95yrUQR.js";import"./index-DTvD48mG.js";import"./Dialog-Zw8T_QuQ.js";import"./cross-DCfjD-NF.js";import"./svgIconContainer-Dd6MU_-n.js";import"./MenuTrigger-B-QXBCIq.js";import"./CompositeItem-C-Iymisy.js";import"./ToolbarRootContext-DpcTF9uY.js";import"./getDisabledMountTransitionStyles-CTMxiaXi.js";import"./getPseudoElementBounds-CtMorKso.js";import"./caret-down-BJBXE8n8.js";import"./Switch-tgNVIECi.js";import"./toNumber-_MqBW0tU.js";import"./PopoverPopup-CU1pE2G_.js";import"./useValueChanged-K5xiKvco.js";import"./useControlled-CxfZAwQ1.js";import"./TimePicker-BqzVaGBp.js";import"./assertUnreachable-tCT10eXl.js";import"./index-DnziPUNh.js";import"./Checkbox-C4vBHX70.js";import"./minus-CjlsL_fG.js";import"./SkeletonBar-x9pMYkMS.js";import"./makeExternalStore-DgmnuSMR.js";import"./chevron-down-DvHb1q_7.js";import"./small-cross-DpAyXmKA.js";import"./useRegisterUserAgent-CCrFfThV.js";import"./Table-BnIjwo4i.js";import"./LoadingCell-DpTlmpS2.js";import"./ColumnConfigDialog-B5zAjitu.js";import"./CollapsiblePanel-BwxdrP1z.js";import"./index-CHIUmS75.js";import"./error-WhfxxdpJ.js";import"./Tooltip-4WGyZxYS.js";import"./useEventCallback-5Uw0jOOe.js";const V={filterList:"FilterList-module__filterList___wmzCNbkH",filterListCollapsed:"FilterList-module__filterListCollapsed___CGrK9txF",expandedContent:"FilterList-module__expandedContent___aEk2i2At",scrollableContent:"FilterList-module__scrollableContent___F3O1nfAo",hiddenContent:"FilterList-module__hiddenContent___PHKe-yWc",expandButton:"FilterList-module__expandButton___-QlY8-ot",collapsedLabel:"FilterList-module__collapsedLabel___QA0UtRts",addButtonContainer:"FilterList-module__addButtonContainer___kq300FEV",addButton:"FilterList-module__addButton___oD4yvwyZ"},Z={content:"FilterListContent-module__content___fG0EgVp6",dragOverlay:"FilterListContent-module__dragOverlay___Tjd1YpmI"},Ne={errorContainer:"ErrorBoundary-module__errorContainer___FIguBDDu",errorMessage:"ErrorBoundary-module__errorMessage___jUsXUqFA",retryButton:"ErrorBoundary-module__retryButton___PZVWZOm7"};class Ar extends i.Component{constructor(){super(...arguments);xe(this,"state",{hasError:!1,error:null});xe(this,"handleRetry",()=>{this.setState({hasError:!1,error:null})})}static getDerivedStateFromError(r){return{hasError:!0,error:r}}componentDidCatch(r,s){var o,c;console.error("[ErrorBoundary]",r),console.error("[ErrorBoundary] Component stack:",s.componentStack),(c=(o=this.props).onError)==null||c.call(o,r)}render(){return this.state.hasError?this.props.fallback?this.props.fallback:l.createElement("div",{className:Ne.errorContainer},l.createElement("p",{className:Ne.errorMessage},this.props.errorMessage??"Something went wrong"),l.createElement(w,{className:Ne.retryButton,onClick:this.handleRetry,"aria-label":"Retry"},"Retry")):this.props.children}}function Lr(){return l.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true"},l.createElement("circle",{cx:"5.5",cy:"3.5",r:"1.5"}),l.createElement("circle",{cx:"10.5",cy:"3.5",r:"1.5"}),l.createElement("circle",{cx:"5.5",cy:"8",r:"1.5"}),l.createElement("circle",{cx:"10.5",cy:"8",r:"1.5"}),l.createElement("circle",{cx:"5.5",cy:"12.5",r:"1.5"}),l.createElement("circle",{cx:"10.5",cy:"12.5",r:"1.5"}))}function Pe(){return Pe=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var s in r)({}).hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},Pe.apply(null,arguments)}function _r({definition:e,filterKey:n,label:r,filterState:s,onFilterStateChanged:o,onFilterRemoved:c,renderInput:d,searchField:a,dragHandleAttributes:y,dragHandleListeners:C,className:A,style:R}){const[g,T]=i.useState({type:"closed"}),[O,D]=i.useState(!1),p=i.useCallback(L=>{o(n,L)},[n,o]),f=i.useCallback(()=>{T(L=>L.type==="closed"?{type:"open",query:""}:{type:"closed"})},[]),h=i.useCallback(L=>{T({type:"open",query:L.target.value})},[]),F=i.useCallback(()=>{T({type:"open",query:""})},[]),k=i.useCallback(()=>{c==null||c(n)},[n,c]),N=i.useCallback(()=>{D(L=>!L)},[]),B=i.useCallback(L=>{L==null||L.focus({preventScroll:!0})},[]),P=i.useMemo(()=>qn(s),[s]),H=Zn(P),b=er(P)&&a!==!1,S=tr(s),v=g.type==="open",j=g.type==="open"?g.query:"",M=g.type==="open"?g.query:void 0;return l.createElement("div",{className:X(I.filterItem,A),style:R,"data-has-selection":S||void 0},l.createElement("div",{className:I.itemHeader},y&&l.createElement(w,Pe({className:I.dragHandle,"aria-label":`Reorder ${r}`},y,C),l.createElement(Lr,null)),l.createElement("span",{className:I.itemLabel},r),b&&l.createElement(w,{className:I.headerActionButton,onClick:f,"aria-label":"Search values","aria-pressed":v},l.createElement(nr,null)),c&&l.createElement(w,{className:I.headerActionButton,onClick:k,"aria-label":`Remove ${r} filter`},l.createElement(Ue,null)),H&&l.createElement(w,{className:I.headerActionButton,onClick:N,"aria-label":"More actions","aria-pressed":O},l.createElement(rr,null))),v&&l.createElement("div",{className:I.searchRow},l.createElement(Fr,{type:"text",className:I.searchInput,value:j,onChange:h,placeholder:"Search property values...","aria-label":"Search property values",ref:B}),j&&l.createElement(w,{type:"button",className:I.searchClearButton,onClick:F,"aria-label":"Clear search"},l.createElement(Ue,null))),l.createElement("div",{className:I.itemContent},l.createElement(Ar,{errorMessage:"Error loading filter"},d({definition:e,filterKey:n,filterState:s,onFilterStateChanged:p,searchQuery:M,excludeRowOpen:O}))))}const we=i.memo(_r);function jr({id:e,definition:n,filterKey:r,label:s,filterState:o,onFilterStateChanged:c,onFilterRemoved:d,renderInput:a,searchField:y}){const{attributes:C,listeners:A,setNodeRef:R,transform:g,transition:T,isDragging:O}=pr({id:e}),D=i.useMemo(()=>({transform:mr.Transform.toString(g),transition:T??void 0}),[g,T]);return l.createElement("div",{ref:R,style:D,className:X(O&&I.dragging)},l.createElement(we,{definition:n,filterKey:r,label:s,filterState:o,onFilterStateChanged:c,onFilterRemoved:d,renderInput:a,searchField:y,dragHandleAttributes:C,dragHandleListeners:A}))}const Dr=i.memo(jr),kr=({transform:e})=>({...e,x:0}),Mr={distance:8},Or=[kr],Ir={role:"button",tabIndex:-1,"aria-disabled":!0,"aria-pressed":void 0,"aria-roledescription":"sortable","aria-describedby":""};function xr({filterDefinitions:e,filterStates:n,onFilterStateChanged:r,onFilterRemoved:s,onOrderChange:o,renderInput:c,getFilterKey:d,getFilterLabel:a,enableSorting:y,className:C,style:A}){const[R,g]=i.useState(null),T=i.useMemo(()=>y&&e?e.map(b=>d(b)):[],[y,e,d]),O=Ke(fr,{activationConstraint:Mr}),D=Ke(Cr,{coordinateGetter:yr}),p=hr(O,D),f=R!=null?T.indexOf(String(R)):-1,h=f>=0&&e?e[f]:void 0,F=i.useMemo(()=>h?d(h):void 0,[h,d]),k=i.useCallback(b=>{g(b.active.id)},[]),N=i.useCallback(b=>{g(null);const{active:S,over:v}=b;if(!v||S.id===v.id)return;const j=T.indexOf(String(S.id)),M=T.indexOf(String(v.id));if(j!==-1&&M!==-1){const L=Sr(T,j,M);o==null||o(L)}},[T,o]),B=i.useCallback(()=>{g(null)},[]),P=i.useMemo(()=>{const b=S=>{const v=T.indexOf(String(S)),j=v>=0?e==null?void 0:e[v]:void 0;return j?a(j):"filter"};return{onDragStart({active:S}){return`Picked up ${b(S.id)} filter`},onDragOver({over:S}){return S?`Moved to position ${T.indexOf(String(S.id))+1} of ${T.length}`:"Not over a droppable area"},onDragEnd({active:S,over:v}){const j=b(S.id);if(v&&S.id!==v.id){const M=T.indexOf(String(v.id));return`Dropped ${j} filter at position ${M+1}`}return`Dropped ${j} filter back in its original position`},onDragCancel({active:S}){return`Cancelled dragging ${b(S.id)} filter`}}},[e,T,a]),H=i.useMemo(()=>({announcements:P}),[P]);return!e||e.length===0?l.createElement("div",{className:X(Z.content,C),style:A,"data-empty":"true"}):y?l.createElement("div",{className:X(Z.content,C),style:A},l.createElement(Er,{sensors:p,collisionDetection:Tr,modifiers:Or,onDragStart:k,onDragEnd:N,onDragCancel:B,accessibility:H},l.createElement(br,{items:T,strategy:gr},e.map((b,S)=>{const v=T[S],j=d(b),M=a(b),L=n.get(j);return l.createElement(Dr,{key:v,id:v,definition:b,filterKey:j,label:M,filterState:L,onFilterStateChanged:r,onFilterRemoved:s,renderInput:c,searchField:b.searchField})})),l.createElement(vr,{dropAnimation:null,className:Z.dragOverlay},h&&F&&l.createElement(we,{definition:h,filterKey:F,label:a(h),filterState:n.get(F),onFilterStateChanged:r,onFilterRemoved:s,renderInput:c,searchField:h.searchField,dragHandleAttributes:Ir})))):l.createElement("div",{className:X(Z.content,C),style:A},e.map(b=>{const S=d(b),v=n.get(S);return l.createElement(we,{key:S,definition:b,filterKey:S,label:a(b),filterState:v,onFilterStateChanged:r,onFilterRemoved:s,renderInput:c,searchField:b.searchField})}))}const Y={header:"FilterListHeader-module__header___dkKc0CO-",titleContainer:"FilterListHeader-module__titleContainer___KaePpQIx",title:"FilterListHeader-module__title___xqfWfSzK",titleIcon:"FilterListHeader-module__titleIcon___MQy-dec8",activeCount:"FilterListHeader-module__activeCount___GyBsnsQL",actions:"FilterListHeader-module__actions___YZA7zmGc",collapseButton:"FilterListHeader-module__collapseButton___N1-sj3B3",resetButton:"FilterListHeader-module__resetButton___jLcUypov"};function Nr({title:e,titleIcon:n,collapsed:r=!1,onCollapsedChange:s,showResetButton:o,onReset:c,showActiveFilterCount:d,activeFilterCount:a=0,hasVisibilityChanges:y=!1}){const C=i.useCallback(()=>{s==null||s(!r)},[s,r]);return l.createElement("div",{className:Y.header},l.createElement("div",{className:Y.titleContainer},n&&l.createElement("span",{className:Y.titleIcon},n),e&&l.createElement("span",{className:Y.title},e),d&&a>0&&l.createElement("span",{className:Y.activeCount},"(",a,")")),l.createElement("div",{className:Y.actions},o&&l.createElement(w,{className:Y.resetButton,onClick:c,disabled:a===0&&!y},l.createElement(ir,null)," Reset filters"),s!=null&&l.createElement(w,{className:Y.collapseButton,onClick:C,"aria-expanded":!r,"aria-label":r?"Expand filters":"Collapse filters"},l.createElement(sr,null))))}const Pr=i.memo(Nr);function wr(e){const{title:n,titleIcon:r,collapsed:s=!1,onCollapsedChange:o,filterDefinitions:c,filterStates:d,onFilterStateChanged:a,renderInput:y,getFilterKey:C,getFilterLabel:A,activeFilterCount:R,onReset:g,onFilterAdded:T,onFilterRemoved:O,onOrderChange:D,showResetButton:p=!1,showActiveFilterCount:f=!1,hasVisibilityChanges:h,enableSorting:F,className:k,renderAddFilterButton:N}=e,[B,P]=i.useState(null),H=i.useCallback(()=>{o==null||o(!1)},[o]),b=s&&o!=null;return l.createElement("div",{className:X(V.filterList,k)},b&&l.createElement("div",{className:V.filterListCollapsed,"data-collapsed":"true"},l.createElement(w,{className:V.expandButton,onClick:H,"aria-label":"Expand filters"},l.createElement(or,null)),l.createElement("span",{className:V.collapsedLabel},n??"Filters")),l.createElement("div",{ref:P,className:X(V.expandedContent,b&&V.hiddenContent),"data-active-count":R},l.createElement(lr,{value:B},(n||r||p||f||o)&&l.createElement(Pr,{title:n,titleIcon:r,collapsed:s,onCollapsedChange:o,showResetButton:p,onReset:g,showActiveFilterCount:f,activeFilterCount:R,hasVisibilityChanges:h}),l.createElement("div",{className:V.scrollableContent},l.createElement(xr,{filterDefinitions:c,filterStates:d,onFilterStateChanged:a,onFilterRemoved:O,onOrderChange:D,renderInput:y,getFilterKey:C,getFilterLabel:A,enableSorting:F})),(N!=null||T!=null)&&l.createElement("div",{className:V.addButtonContainer},N?N():l.createElement(w,{type:"button",className:V.addButton,onClick:T},"+ Add filter")))))}const Vr={trigger:"AddFilterPopover-module__trigger___8QQBrzPo"};function Gr({hiddenDefinitions:e,onShowFilter:n,renderTrigger:r}){const s=ar();return l.createElement(Qn,{items:e,onItemSelected:n,trigger:r!=null?r():"+ Add filter",triggerClassName:r==null?Vr.trigger:void 0,searchPlaceholder:"Search filters",emptyMessage:"No matching filters",collisionBoundary:s})}const Wr=i.memo(Gr);function Br(e,n){const r=i.useMemo(()=>(e==null?void 0:e.map($))??[],[e]),s=i.useMemo(()=>(e==null?void 0:e.filter(p=>p.isVisible!==!1).map($))??[],[e]),[o,c]=i.useState(()=>s);i.useEffect(()=>{c(s)},[s]);const d=i.useRef(n);d.current=n;const a=i.useCallback(p=>{if(!d.current)return;const f=new Set(p),h=r.filter(F=>!f.has(F));d.current(p,h)},[r]),y=i.useMemo(()=>{const p=new Map;if(e==null)return p;for(const f of e)p.set($(f),f);return p},[e]),{visibleDefinitions:C,hiddenDefinitions:A}=i.useMemo(()=>{if(e==null)return{visibleDefinitions:[],hiddenDefinitions:[]};const p=new Set(o),f=[],h=[];for(const F of o){const k=y.get(F);k!=null&&f.push(k)}for(const F of r)if(!p.has(F)){const k=y.get(F);k!=null&&h.push(k)}return{visibleDefinitions:f,hiddenDefinitions:h}},[e,y,o,r]),R=i.useCallback(p=>{c(f=>{if(f.includes(p))return f;const h=[...f,p];return a(h),h})},[a]),g=i.useCallback(p=>{c(f=>{const h=f.filter(F=>F!==p);return a(h),h})},[a]),T=i.useCallback(p=>{c(f=>p.length===f.length&&p.every((h,F)=>h===f[F])?f:(a(p),p))},[a]),O=i.useCallback(()=>{c(p=>s.length===p.length&&s.every((f,h)=>f===p[h])?p:(a(s),s))},[s,a]),D=i.useMemo(()=>o.length!==s.length?!0:!o.every((p,f)=>p===s[f]),[o,s]);return{visibleDefinitions:C,hiddenDefinitions:A,showFilter:R,hideFilter:g,reorderVisible:T,hasVisibilityChanges:D,resetVisibility:O}}const Yr={};function Hr(e){const{objectType:n,objectSet:r,title:s,titleIcon:o,collapsed:c,onCollapsedChange:d,filterDefinitions:a,addFilterMode:y="uncontrolled",showResetButton:C=!1,onReset:A,showActiveFilterCount:R=!1,showFilteredOutValues:g=!1,className:T,enableSorting:O,onFilterAdded:D,onFilterRemoved:p,onFilterVisibilityChange:f,renderAddFilterButton:h}=e,{filterStates:F,setFilterState:k,clearFilterState:N,perFilterWhereClauses:B,perFilterLinkedFilters:P,activeFilterCount:H,reset:b}=cr(e),S=y==="uncontrolled",v=i.useCallback((_,q)=>{if(!f)return;const Ie=[..._.map(z=>({filterKey:z,isVisible:!0})),...q.map(z=>({filterKey:z,isVisible:!1}))];f(Ie)},[f]),{visibleDefinitions:j,hiddenDefinitions:M,showFilter:L,hideFilter:Ge,reorderVisible:We,hasVisibilityChanges:Pn,resetVisibility:Be}=Br(a,S?v:void 0),wn=i.useCallback(()=>{b(),Be(),A==null||A()},[b,Be,A]),Vn=i.useMemo(()=>{if(a!=null)return a.filter(_=>_.isVisible!==!1)},[a]),Gn=S?j:Vn,Wn=i.useCallback(_=>{N(_),S&&Ge(_),p==null||p(_)},[N,S,Ge,p]),Ye=i.useCallback(_=>{L(_),D==null||D(_,a??[])},[L,D,a]),Bn=i.useCallback(_=>{We(_)},[We]),He=i.useMemo(()=>M.map(_=>({key:$(_),label:Xe(_)})),[M]),Yn=i.useMemo(()=>S?M.length===0?void 0:()=>l.createElement(Wr,{hiddenDefinitions:He,onShowFilter:Ye,renderTrigger:h}):h,[S,M.length,He,Ye,h]),Hn=S?Wn:p,Un=i.useCallback(({definition:_,filterKey:q,filterState:Ie,onFilterStateChanged:z,searchQuery:Xn,excludeRowOpen:Kn})=>l.createElement(dr,{objectType:n,objectSet:r,definition:_,filterState:Ie,onFilterStateChanged:z,whereClause:B.get(q)??Yr,linkedFilters:P.get(q)??ur,showFilteredOutValues:g,searchQuery:Xn,excludeRowOpen:Kn}),[n,r,B,P,g]);return l.createElement(wr,{title:s,titleIcon:o,collapsed:c,onCollapsedChange:d,filterDefinitions:Gn,filterStates:F,onFilterStateChanged:k,renderInput:Un,getFilterKey:$,getFilterLabel:Xe,activeFilterCount:H,onReset:wn,showResetButton:C,showActiveFilterCount:R,hasVisibilityChanges:Pn,enableSorting:O,onFilterRemoved:Hn,onOrderChange:Bn,className:T,renderAddFilterButton:Yn})}const m=Rr(Hr,"FilterList"),{useArgs:kn}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:U}=__STORYBOOK_MODULE_TEST__,K={type:"PROPERTY",id:"department",key:"department",label:"Department",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},Ve={type:"PROPERTY",id:"team",key:"team",label:"Team",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},Mn={type:"PROPERTY",id:"fullName",key:"fullName",label:"Full Name",filterComponent:"CONTAINS_TEXT",filterState:{type:"CONTAINS_TEXT"}},On={type:"PROPERTY",id:"firstFullTimeStartDate",key:"firstFullTimeStartDate",label:"Start Date",filterComponent:"DATE_RANGE",filterState:{type:"DATE_RANGE"},clickToFilter:!0},ke={type:"PROPERTY",id:"employeeNumber",key:"employeeNumber",label:"Employee Number",filterComponent:"NUMBER_RANGE",filterState:{type:"NUMBER_RANGE"},clickToFilter:!0},J={type:"PROPERTY",id:"locationCity",key:"locationCity",label:"Location City",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},In={type:"PROPERTY",id:"jobTitle-multi",key:"jobTitle",label:"Job Title",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}},x=[K,Ve,Mn,On,In,ke,J],E={width:320,height:600},G={display:"flex",gap:16},W={flex:1},Q={marginTop:8,padding:12,background:"#f5f5f5",borderRadius:4,fontSize:12,overflow:"auto",maxHeight:560},Me={display:"flex",gap:16,height:600},Oe={width:320,flexShrink:0},xn=t.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:t.jsx("path",{d:"M1 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1.5a1 1 0 0 1-.293.707L10 8.914V13a1 1 0 0 1-.553.894l-2 1A1 1 0 0 1 6 14v-5.086L1.293 4.207A1 1 0 0 1 1 3.5V2z"})}),As={title:"Components/FilterList",component:m,tags:["beta"],args:{title:"Filters",enableSorting:!1,showResetButton:!1,showActiveFilterCount:!1,collapsed:!1,onFilterClauseChanged:U(),onFilterStateChanged:U(),onFilterAdded:U(),onFilterRemoved:U(),onFilterVisibilityChange:U(),onCollapsedChange:U(),onReset:U()},parameters:{msw:{handlers:[...Jn.handlers]},controls:{expanded:!0}},argTypes:{objectType:{description:"The object type definition for the objects being filtered",control:!1},objectSet:{description:"Optional object set to scope aggregation queries",control:!1},filterDefinitions:{description:"Array of filter definitions. If not provided, all filterable properties are auto-discovered.",control:!1},title:{description:"Title displayed in the filter list header",control:"text"},titleIcon:{description:"Icon displayed next to the title",control:!1},filterClause:{description:"The current where clause. If provided, the filter clause is controlled.",control:!1},onFilterClauseChanged:{description:"Called when the filter clause changes. Required in controlled mode.",control:!1,table:{category:"Events"}},onFilterStateChanged:{description:"Called when an individual filter's state changes",control:!1,table:{category:"Events"}},enableSorting:{description:"Enable drag-and-drop reordering of filters",control:"boolean",table:{defaultValue:{summary:"false"}}},collapsed:{description:"Whether the filter list panel is collapsed",control:"boolean"},onCollapsedChange:{description:"Called when the collapsed state changes",control:!1,table:{category:"Events"}},showResetButton:{description:"Show reset filters button in header",control:"boolean",table:{defaultValue:{summary:"false"}}},onReset:{description:"Called when the reset button is clicked",control:!1,table:{category:"Events"}},showActiveFilterCount:{description:"Show count of active filters in header",control:"boolean",table:{defaultValue:{summary:"false"}}},onFilterAdded:{description:"Called when a filter is added. If provided, users can add filters.",control:!1,table:{category:"Events"}},onFilterRemoved:{description:"Called when a filter is removed. If provided, users can remove filters.",control:!1,table:{category:"Events"}},onFilterVisibilityChange:{description:"Called when filter visibility or ordering changes (reorder, add, remove).",control:!1,table:{category:"Events"}},addFilterMode:{description:'Controls how filter add/remove is managed. "uncontrolled" manages visibility internally; "controlled" leaves it to the consumer.',control:"select",options:["controlled","uncontrolled"],table:{category:"Advanced",defaultValue:{summary:'"uncontrolled"'}}},renderAddFilterButton:{description:"Custom render function for the add filter button.",control:!1,table:{category:"Advanced"}},initialFilterStates:{description:"Initial filter states for hydrating from external storage. Merged over definition defaults on mount.",control:!1,table:{category:"Advanced"}},className:{description:"Additional CSS class name",control:"text"}}},ee={parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:({objectType:e,objectSet:n,...r})=>{const s=i.useMemo(()=>[K,J],[]);return t.jsx("div",{style:E,children:t.jsx(m,{objectType:u,filterDefinitions:s,...r})})}},te={parameters:{docs:{description:{story:'Opt-in `dateShortcuts` rail for DATE_RANGE filters. `true` ships the built-in defaults; an array supplies custom `DateRangePickerShortcut`s (e.g. "Last 6 hours"). Single-date filters have no shortcut rail, matching Workshop.'}}},render:({objectType:e,objectSet:n,...r})=>{const s=i.useMemo(()=>[{type:"PROPERTY",id:"startDate-range-shortcuts",key:"firstFullTimeStartDate",label:"Start Date (DATE_RANGE, default shortcuts)",filterComponent:"DATE_RANGE",filterState:{type:"DATE_RANGE"},dateShortcuts:!0},{type:"PROPERTY",id:"startDate-range-custom-shortcuts",key:"firstFullTimeStartDate",label:"Start Date (DATE_RANGE, custom shortcuts)",filterComponent:"DATE_RANGE",filterState:{type:"DATE_RANGE"},dateShortcuts:[{label:"Last 6 hours",dateRange:o=>[new Date(o.getTime()-216e5),o]},{label:"Past week",dateRange:o=>[new Date(o.getTime()-6048e5),o]}]},{type:"PROPERTY",id:"startDate-single-plain",key:"firstFullTimeStartDate",label:"Start Date (SINGLE_DATE, no shortcut rail)",filterComponent:"SINGLE_DATE",filterState:{type:"SELECT",selectedValues:[]}}],[]);return t.jsx("div",{style:E,children:t.jsx(m,{objectType:u,filterDefinitions:s,...r})})}},ze={marginTop:8,padding:8,background:"#f5f5f5",borderRadius:4,fontSize:11,whiteSpace:"pre",fontFamily:"ui-monospace, SFMono-Regular, Menlo, monospace"},$e="startDate-range-shortcuts-verification",Je="startDate-single-shortcuts-verification";function Ur(e){const{onFilterStateChanged:n}=e,[r,s]=i.useState(void 0),[o,c]=i.useState(void 0),d=i.useMemo(()=>[{type:"PROPERTY",id:$e,key:"firstFullTimeStartDate",label:"Start Date (DATE_RANGE, all shortcuts)",filterComponent:"DATE_RANGE",filterState:{type:"DATE_RANGE"},dateShortcuts:!0},{type:"PROPERTY",id:Je,key:"firstFullTimeStartDate",label:"Start Date (SINGLE_DATE, no shortcut rail)",filterComponent:"SINGLE_DATE",filterState:{type:"SELECT",selectedValues:[]}}],[]),a=i.useCallback((y,C)=>{y.id===$e&&s(C),y.id===Je&&c(C),n!=null&&n(y,C)},[n]);return t.jsxs("div",{style:E,children:[t.jsx(m,{objectType:u,filterDefinitions:d,...e,onFilterStateChanged:a}),t.jsx("div",{"data-testid":"captured-filter-state-range",style:ze,children:r==null?"":JSON.stringify(r)}),t.jsx("div",{"data-testid":"captured-filter-state-single",style:ze,children:o==null?"":JSON.stringify(o)})]})}const ne={parameters:{docs:{description:{story:"Verification harness for relative date shortcuts. Exposes the captured FilterState for both a DATE_RANGE and a SINGLE_DATE filter via `data-testid` panels so the resolved range can be inspected after clicking a shortcut."}}},render:e=>t.jsx(Ur,{...e})},re={parameters:{docs:{description:{story:"Repro for the integer-typed `NUMBER_RANGE` rounding fix. `employeeNumber` is an `integer` property, so histogram bucket boundaries — `(maxValue - minValue) / 20` — are usually fractional. Click any bar in the histogram. The Min/Max boxes must show whole integers (e.g. `657495073`), not fractional values (e.g. `657495073.4`)."}}},render:({objectType:e,objectSet:n,...r})=>{const s=i.useMemo(()=>[ke],[]);return t.jsx("div",{style:E,children:t.jsx(m,{objectType:u,filterDefinitions:s,...r})})}};function Xr(e){const n=De(),r=i.useMemo(()=>n(u).where({department:"Marketing"}),[n]),s=i.useMemo(()=>[Ve,J],[]);return t.jsx("div",{style:E,children:t.jsx(m,{objectType:u,objectSet:r,filterDefinitions:s,...e})})}const ie={parameters:{docs:{description:{story:"Pass an `objectSet` prop to scope filter aggregations to a subset of objects. Here the object set is filtered to Marketing department employees, so the listogram counts reflect only that subset."},source:{code:`const client = useOsdkClient();
const objectSet = client(Employee).where({ department: "Marketing" });

<FilterList
  objectType={Employee}
  objectSet={objectSet}
  filterDefinitions={[
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:e=>t.jsx(Xr,{...e})};function Kr(e){const n=i.useMemo(()=>[K,Ve,{...Mn,isVisible:!1},{...On,isVisible:!1},{...ke,isVisible:!1},{...J,isVisible:!1}],[]);return t.jsx("div",{style:E,children:t.jsx(m,{objectType:u,filterDefinitions:n,addFilterMode:"uncontrolled",...e})})}const se={args:{showResetButton:!0},parameters:{docs:{source:{code:`const filterDefinitions = [
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
/>`}}},render:e=>t.jsx(Kr,{...e})};function zr(e){const[n,r]=i.useState(void 0),s=e.onFilterClauseChanged,o=i.useCallback(c=>{r(c),s==null||s(c)},[s]);return t.jsxs("div",{style:G,children:[t.jsx("div",{style:E,children:t.jsx(m,{objectType:u,filterDefinitions:x,...e,filterClause:n,onFilterClauseChanged:o})}),t.jsxs("div",{style:W,children:[t.jsx("strong",{children:"Filter Clause (JSON):"}),t.jsx("pre",{style:Q,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const oe={parameters:{docs:{description:{story:"All filter component types with a controlled where clause. Hover filter items to reveal search and exclude actions."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>`}}},render:e=>t.jsx(zr,{...e})},le={args:{title:"Employee Filters"},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  titleIcon={<svg>...</svg>}
/>`}}},render:({objectType:e,objectSet:n,...r})=>t.jsx("div",{style:E,children:t.jsx(m,{objectType:u,filterDefinitions:x,titleIcon:xn,...r})})};function $r(e){const n=e.onReset,r=i.useCallback(()=>{console.log("Reset clicked"),n==null||n()},[n]);return t.jsx("div",{style:E,children:t.jsx(m,{objectType:u,filterDefinitions:x,...e,onReset:r})})}const ae={args:{showResetButton:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showResetButton={true}
  onReset={() => console.log("Reset clicked")}
/>`}}},render:e=>t.jsx($r,{...e})},ce={args:{showActiveFilterCount:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showActiveFilterCount={true}
/>`}}},render:({objectType:e,objectSet:n,...r})=>t.jsx("div",{style:E,children:t.jsx(m,{objectType:u,filterDefinitions:x,...r})})},de={args:{enableSorting:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  enableSorting={true}
/>`}}},render:({objectType:e,objectSet:n,...r})=>t.jsx("div",{style:E,children:t.jsx(m,{objectType:u,filterDefinitions:x,...r})})};function Jr(e){return t.jsx("div",{style:E,children:t.jsx(m,{objectType:u,filterDefinitions:x,...e})})}const ue={args:{title:"Employee Filters",showActiveFilterCount:!0},parameters:{docs:{description:{story:"Click the collapse button to minimize the filter panel. Active filter count is shown in the collapsed state."},source:{code:`const [collapsed, setCollapsed] = useState(false);

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  collapsed={collapsed}
  onCollapsedChange={setCollapsed}
  showActiveFilterCount={true}
/>`}}},render:e=>{const[,n]=kn(),r=e.onCollapsedChange,s=i.useCallback(o=>{n({collapsed:o}),r==null||r(o)},[n,r]);return t.jsx(Jr,{...e,onCollapsedChange:s})}},pe={parameters:{docs:{source:{code:`const filterDefinitions = [
  { type: "KEYWORD_SEARCH", properties: ["fullName", "department", "jobTitle", "locationCity"], label: "Search" },
  { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:({objectType:e,objectSet:n,...r})=>{const s=i.useMemo(()=>[{type:"KEYWORD_SEARCH",properties:["fullName","department","jobTitle","locationCity"],label:"Search"},K,J],[]);return t.jsx("div",{style:E,children:t.jsx(m,{objectType:u,filterDefinitions:s,...r})})}};function Qr(e){const n=i.useMemo(()=>[{type:"PROPERTY",id:"department-no-color",key:"department",label:"Department (default colors)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]),r=i.useMemo(()=>[{type:"PROPERTY",id:"department-color",key:"department",label:"Department (custom colors)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},colorMap:{Marketing:"#e74c3c",Operations:"#2ecc71",Finance:"#3498db",Product:"#f39c12"}}],[]);return t.jsxs("div",{style:G,children:[t.jsx("div",{style:E,children:t.jsx(m,{objectType:u,filterDefinitions:n,...e})}),t.jsx("div",{style:E,children:t.jsx(m,{objectType:u,filterDefinitions:r,...e})})]})}const me={parameters:{docs:{source:{code:`// Without colorMap: all bars use the default theme color
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

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>t.jsx(Qr,{...e})},Nn={Marketing:"Marketing Dept.",Operations:"Ops Team",Finance:"Finance & Accounting",Product:"Product Group"};function qr(e){const n=i.useMemo(()=>[{type:"PROPERTY",id:"department-default",key:"department",label:"Department (default)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]),r=i.useMemo(()=>[{type:"PROPERTY",id:"department-custom",key:"department",label:"Department (custom render)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},renderValue:s=>Nn[s]??s},{type:"PROPERTY",id:"team-custom",key:"team",label:"Team (custom render)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},renderValue:s=>s.toUpperCase()}],[]);return t.jsxs("div",{style:G,children:[t.jsx("div",{style:E,children:t.jsx(m,{objectType:u,filterDefinitions:n,...e})}),t.jsx("div",{style:E,children:t.jsx(m,{objectType:u,filterDefinitions:r,...e})})]})}const fe={parameters:{docs:{description:{story:"Use `renderValue` to customize how filter values are displayed and searched. The returned string replaces the raw value for display and search matching. Works with LISTOGRAM, MULTI_SELECT, and SINGLE_SELECT components."},source:{code:`const DEPARTMENT_LABELS = {
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

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>t.jsx(qr,{...e})},Zr={Marketing:"#f97316",Operations:"#3b82f6",Finance:"#10b981",Product:"#a855f7"},ei={display:"inline-flex",alignItems:"center",gap:8},ti={display:"inline-block",width:10,height:10,borderRadius:"50%",flexShrink:0};function ni({value:e}){const n=Zr[e]??"#94a3b8";return t.jsxs("span",{style:ei,children:[t.jsx("span",{style:{...ti,background:n}}),t.jsx("span",{children:Nn[e]??e})]})}function ri(e){const n=i.useMemo(()=>[{type:"PROPERTY",id:"department-swatch",key:"department",label:"Department (JSX)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},renderValue:r=>t.jsx(ni,{value:r})},{type:"PROPERTY",id:"team-link",key:"team",label:"Team (anchor JSX)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},renderValue:r=>t.jsx("a",{href:`#/team/${encodeURIComponent(r)}`,onClick:s=>s.preventDefault(),style:{color:"#2563eb",textDecoration:"underline"},children:r})}],[]);return t.jsx("div",{style:E,children:t.jsx(m,{objectType:u,filterDefinitions:n,...e})})}const ye={parameters:{docs:{description:{story:"`renderValue` may return any `ReactNode`, not just a string. Use this to render avatars, anchors, status pills, or any custom JSX inside listogram rows, dropdown items, and chips. When the function returns non-string JSX, search matching falls back to the raw value."},source:{code:`const filterDefinitions = [
  {
    type: "PROPERTY",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
    renderValue: (value) => <DepartmentSwatch value={value} />,
  },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>t.jsx(ri,{...e})};function ii(e){const n=i.useMemo(()=>[{type:"PROPERTY",id:"dept-full",key:"department",label:"full: label + bar + count",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"full"}}],[]),r=i.useMemo(()=>[{type:"PROPERTY",id:"dept-count",key:"department",label:"count: label + count (no bar)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"count"}}],[]),s=i.useMemo(()=>[{type:"PROPERTY",id:"dept-minimal",key:"department",label:"minimal: label only",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"}}],[]);return t.jsxs("div",{style:G,children:[t.jsx("div",{style:E,children:t.jsx(m,{objectType:u,filterDefinitions:n,...e})}),t.jsx("div",{style:E,children:t.jsx(m,{objectType:u,filterDefinitions:r,...e})}),t.jsx("div",{style:E,children:t.jsx(m,{objectType:u,filterDefinitions:s,...e})})]})}const Ce={parameters:{docs:{source:{code:`// "full" (default): label + colored bar + count number
// "count": label + count number (no bar)
// "minimal": label only (no bar, no count)

const filterDefinitions = [
  { ..., listogramConfig: { displayMode: "full" } },
  { ..., listogramConfig: { displayMode: "count" } },
  { ..., listogramConfig: { displayMode: "minimal" } },
];`}}},render:e=>t.jsx(ii,{...e})};function si(e){const n=i.useMemo(()=>[{type:"PROPERTY",id:"dept-with-count",key:"department",label:"Department (counts visible)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},{type:"PROPERTY",id:"team-with-count",key:"team",label:"Team (counts visible)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}}],[]),r=i.useMemo(()=>[{type:"PROPERTY",id:"dept-no-count",key:"department",label:"Department (counts hidden)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},showCount:!1},{type:"PROPERTY",id:"team-no-count",key:"team",label:"Team (counts hidden)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},showCount:!1}],[]);return t.jsxs("div",{style:G,children:[t.jsx("div",{style:E,children:t.jsx(m,{objectType:u,filterDefinitions:n,...e})}),t.jsx("div",{style:E,children:t.jsx(m,{objectType:u,filterDefinitions:r,...e})})]})}const he={parameters:{docs:{description:{story:"Use `showCount: false` on individual filter definitions to hide aggregation counts in LISTOGRAM and MULTI_SELECT inputs. Bar visualizations in LISTOGRAM are preserved."},source:{code:`// showCount defaults to true; set false to hide counts per filter
const filterDefinitions = [
  { ..., filterComponent: "LISTOGRAM", showCount: false },
  { ..., filterComponent: "MULTI_SELECT", showCount: false },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>t.jsx(si,{...e})};function oi(e){const n=i.useMemo(()=>[{type:"PROPERTY",id:"department-checkbox",key:"department",label:"Department",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},{type:"PROPERTY",id:"team-checkbox",key:"team",label:"Team",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]);return t.jsx("div",{style:E,children:t.jsx(m,{objectType:u,filterDefinitions:n,...e})})}const Se={parameters:{docs:{description:{story:"Listogram rows always include a checkbox for multi-select. Selecting values checks the checkbox and highlights the row. Use the exclude toggle (three-dot menu) to invert selections."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:e=>t.jsx(oi,{...e})};function li(e){const[n,r]=i.useState(void 0),s=e.onFilterRemoved,o=i.useCallback(a=>{console.log("Removed filter:",a),s==null||s(a)},[s]),c=e.onFilterClauseChanged,d=i.useCallback(a=>{r(a),c==null||c(a)},[c]);return t.jsxs("div",{style:Me,children:[t.jsx("div",{style:Oe,children:t.jsx(m,{objectType:u,filterDefinitions:x,...e,onFilterRemoved:o,filterClause:n,onFilterClauseChanged:d})}),t.jsx("div",{style:W,children:t.jsx(je,{objectType:u,filter:n})})]})}const Ee={args:{title:"Employee Filters",showResetButton:!0,showActiveFilterCount:!0,enableSorting:!0},parameters:{docs:{source:{code:`const [filterClause, setFilterClause] = useState(undefined);

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
</div>`}}},render:e=>t.jsx(li,{...e})};function ai(e){const n=De(),r=i.useMemo(()=>n(u).where({department:"Marketing"}),[n]),[s,o]=i.useState(void 0),c=e.onFilterClauseChanged,d=i.useCallback(a=>{o(a),c==null||c(a)},[c]);return t.jsxs("div",{style:Me,children:[t.jsx("div",{style:Oe,children:t.jsx(m,{objectType:u,objectSet:r,filterDefinitions:x,...e,filterClause:s,onFilterClauseChanged:d})}),t.jsx("div",{style:W,children:t.jsx(je,{objectType:u,objectSet:r,filter:s})})]})}const Te={args:{title:"Marketing Employees",showResetButton:!0,showActiveFilterCount:!0},parameters:{docs:{description:{story:"Demonstrates using a pre-filtered objectSet to scope both FilterList aggregations and ObjectTable data to a subset of employees."},source:{code:`const client = useOsdkClient();
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
/>`}}},render:e=>t.jsx(ai,{...e})};function ci(e){const[n,r]=i.useState(x),s=e.onFilterRemoved,o=i.useCallback(c=>{r(d=>d.filter(a=>"key"in a?a.key!==c:!0)),s==null||s(c)},[s]);return t.jsx("div",{style:E,children:t.jsx(m,{objectType:u,filterDefinitions:n,...e,onFilterRemoved:o})})}const be={name:"Removable Filters",args:{title:"Removable Filters",showActiveFilterCount:!0},parameters:{docs:{description:{story:"When `onFilterRemoved` is provided, each filter item shows a remove button (X) on hover. Clicking it removes the filter from the list."},source:{code:`const [definitions, setDefinitions] = useState(filterDefinitions);

const handleFilterRemoved = (filterKey) => {
  setDefinitions(prev => prev.filter(def => def.key !== filterKey));
};

<FilterList
  objectType={Employee}
  filterDefinitions={definitions}
  onFilterRemoved={handleFilterRemoved}
  title="Removable Filters"
/>`}}},render:e=>t.jsx(ci,{...e})};function di(e){const[n,r]=i.useState(void 0),s=i.useMemo(()=>[{type:"STATIC_VALUES",key:"department",label:"Department (static)",filterComponent:"LISTOGRAM",values:["Marketing","Operations","Finance","Product"],filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"}},{type:"STATIC_VALUES",key:"locationCity",label:"Office Location",filterComponent:"SINGLE_SELECT",values:["New York","San Francisco","London","Tokyo"],filterState:{type:"SELECT",selectedValues:[]}},{type:"STATIC_VALUES",key:"team",label:"Team (multi-select)",filterComponent:"MULTI_SELECT",values:["Alpha","Beta","Gamma","Delta"],filterState:{type:"SELECT",selectedValues:[]}},{type:"STATIC_VALUES",id:"custom-status",key:"status",label:"Status (custom clause)",filterComponent:"LISTOGRAM",values:["Active","Inactive"],filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"},toWhereClause:d=>{if(d.type!=="EXACT_MATCH"||d.values.length===0)return;const a=d.values,y=a.includes("Active"),C=a.includes("Inactive");if(y&&C)return{$or:[{employeeStatus:"Active"},{employeeStatus:"Inactive"}]};if(y)return{employeeStatus:"Active"};if(C)return{employeeStatus:"Inactive"}}}],[]),o=e.onFilterClauseChanged,c=i.useCallback(d=>{r(d),o==null||o(d)},[o]);return t.jsxs("div",{style:G,children:[t.jsx("div",{style:E,children:t.jsx(m,{objectType:u,filterDefinitions:s,...e,filterClause:n,onFilterClauseChanged:c})}),t.jsxs("div",{style:W,children:[t.jsx("strong",{children:"Filter Clause (JSON):"}),t.jsx("pre",{style:Q,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const ge={parameters:{docs:{description:{story:"Use `STATIC_VALUES` filter definitions to provide a fixed list of values instead of fetching from OSDK aggregation. Supports LISTOGRAM, SINGLE_SELECT, MULTI_SELECT, and TEXT_TAGS components. Optionally provide a `toWhereClause` function for custom clause generation."},source:{code:`const filterDefinitions = [
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
/>`}}},render:e=>t.jsx(di,{...e})};function ui(e){const[n,r]=i.useState(void 0),[s,o]=i.useState(x),c=e.onFilterRemoved,d=i.useCallback(R=>{o(g=>g.filter(T=>"key"in T?T.key!==R:!0)),c==null||c(R)},[c]),a=e.onReset,y=i.useCallback(()=>{o(x),a==null||a()},[a]),C=e.onFilterClauseChanged,A=i.useCallback(R=>{r(R),C==null||C(R)},[C]);return t.jsxs("div",{style:Me,children:[t.jsx("div",{style:Oe,children:t.jsx(m,{objectType:u,filterDefinitions:s,titleIcon:xn,...e,onReset:y,onFilterRemoved:d,filterClause:n,onFilterClauseChanged:A})}),t.jsx("div",{style:W,children:t.jsx(je,{objectType:u,filter:n})})]})}const ve={name:"Full Featured",args:{title:"Employee Filters",showResetButton:!0,showActiveFilterCount:!0,enableSorting:!0},parameters:{docs:{description:{story:"Demonstrates all filter list features together: collapse, reset, active count, sorting, removable filters, per-filter search, exclude toggle, and controlled where clause driving an ObjectTable."},source:{code:`// All features combined: collapse, sort, search, exclude, remove, reset

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
/>`}}},render:e=>{const[,n]=kn(),r=e.onCollapsedChange,s=i.useCallback(o=>{n({collapsed:o}),r==null||r(o)},[n,r]);return t.jsx(ui,{...e,onCollapsedChange:s})}};function pi(e){const[n,r]=i.useState(void 0),s=i.useMemo(()=>[{type:"HAS_LINK",linkName:"lead",label:"Has Manager",filterState:{type:"hasLink",hasLink:!1}}],[]),o=e.onFilterClauseChanged,c=i.useCallback(d=>{r(d),o==null||o(d)},[o]);return t.jsxs("div",{style:G,children:[t.jsx("div",{style:E,children:t.jsx(m,{objectType:u,filterDefinitions:s,...e,filterClause:n,onFilterClauseChanged:c})}),t.jsxs("div",{style:W,children:[t.jsx("strong",{children:"Filter Clause (JSON):"}),t.jsx("pre",{style:Q,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const Fe={name:"Linked Property Filters",parameters:{docs:{description:{story:"Demonstrates filtering on properties of linked objects. HAS_LINK filters objects based on whether they have a linked object. "},source:{code:`// HAS_LINK and LINKED_PROPERTY filter definitions
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
/>`}}},render:e=>t.jsx(pi,{...e})},mi={type:"PROPERTY",id:"combined-department",key:"department",label:"Department",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},fi={type:"PROPERTY",id:"combined-locationCity",key:"locationCity",label:"Location City",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}},yi={type:"LINKED_PROPERTY",id:"combined-lead-name",linkName:"lead",reverseLinkName:"peeps",linkedPropertyKey:"fullName",linkedFilterComponent:"MULTI_SELECT",linkedFilterState:{type:"SELECT",selectedValues:[]},filterState:{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:[]}},label:"Manager Name"},Ci=[yi,mi,fi];function hi(e){const n=De(),r=i.useMemo(()=>n(u),[n]),[s,o]=i.useState(void 0),[c,d]=i.useState(r),a=e.onFilterClauseChanged,y=i.useCallback(C=>{o(C),a==null||a(C)},[a]);return t.jsxs("div",{style:Me,children:[t.jsx("div",{style:Oe,children:t.jsx(m,{...e,objectType:u,objectSet:r,filterDefinitions:Ci,filterClause:s,onFilterClauseChanged:y,onEffectiveObjectSet:d,showFilteredOutValues:!0})}),t.jsx("div",{style:W,children:t.jsx(je,{objectType:u,objectSet:c})})]})}const Re={name:"Combined linked + direct filters (zero-count filtered-out rows)",parameters:{docs:{description:{story:"A linked filter (Manager Name) and direct property filters coexist in one FilterList. Pass the unfiltered scope as `objectSet`; FilterList applies the linked-filter narrowing internally and emits the fully-narrowed `ObjectSet` via `onEffectiveObjectSet` for the table. With `showFilteredOutValues`, direct-facet values absent under the active linked filter render as greyed-out count=0 filtered-out rows."},source:{code:`const baseObjectSet = useMemo(() => client(Employee), [client]);
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
<ObjectTable objectType={Employee} objectSet={effectiveObjectSet} />`}}},render:e=>t.jsx(hi,{...e})};function Si({filterState:e,onFilterStateChanged:n}){const r=i.useCallback(o=>{const c=o.target.value;n({type:"custom",customState:{value:c}})},[n]),s=i.useCallback(()=>{n({type:"custom",customState:{value:""}})},[n]);return t.jsxs("div",{style:{padding:"12px 0",display:"flex",gap:"8px"},children:[t.jsx("input",{type:"text",value:e.customState.value,onChange:r,placeholder:"Enter name substring...",style:{flex:1,padding:"6px 8px",fontSize:"14px",border:"1px solid #ccc",borderRadius:"4px"}}),e.customState.value&&t.jsx("button",{onClick:s,style:{padding:"6px 12px",fontSize:"12px",backgroundColor:"#f5f5f5",border:"1px solid #ccc",borderRadius:"4px",cursor:"pointer"},children:"Clear"})]})}function Ei(e){const[n,r]=i.useState(void 0),s=i.useMemo(()=>[{type:"CUSTOM",key:"custom-name-contains",label:"Name Contains",filterComponent:"CUSTOM",filterState:{type:"custom",customState:{value:""}},renderInput:({filterState:d,onFilterStateChanged:a})=>t.jsx(Si,{filterState:d,onFilterStateChanged:a}),toWhereClause:d=>{var y;const a=(y=d.customState)==null?void 0:y.value;if(a)return{fullName:{$containsAnyTerm:a}}}}],[]),o=e.onFilterClauseChanged,c=i.useCallback(d=>{r(d),o==null||o(d)},[o]);return t.jsxs("div",{style:G,children:[t.jsx("div",{style:E,children:t.jsx(m,{objectType:u,filterDefinitions:s,...e,filterClause:n,onFilterClauseChanged:c})}),t.jsxs("div",{style:W,children:[t.jsx("strong",{children:"Filter Clause (JSON):"}),t.jsx("pre",{style:Q,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const Ae={name:"Custom Filters",parameters:{docs:{description:{story:"Custom filters provide full control over filtering logic and UI. The 'Name Contains' filter uses `renderInput` for a simple custom input. "},source:{code:`// Custom filter with renderInput
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
/>`}}},render:e=>t.jsx(Ei,{...e})},Ti={type:"PROPERTY",id:"department-multi",key:"department",label:"Department",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}},bi={type:"PROPERTY",id:"department-single",key:"department",label:"Department (single)",filterComponent:"SINGLE_SELECT",filterState:{type:"SELECT",selectedValues:[]}},gi=[K,Ti,bi,ke],Le={name:"No value rendering",parameters:{docs:{description:{story:"Empty/null filter values render via the canonical `<NoValueLabel />` component — italic, muted, with the literal text 'No value' — across listogram buckets, single-select dropdown options, multi-select dropdown options, and multi-select chips. The mock dataset includes one Employee with `department: \"\"` so the No value row is visible in the listogram."}}},render:()=>t.jsx("div",{style:E,children:t.jsx(m,{objectType:u,filterDefinitions:gi})})},vi={type:"PROPERTY",id:"locationCity-single",key:"locationCity",label:"Location City (single)",filterComponent:"SINGLE_SELECT",filterState:{type:"SELECT",selectedValues:[]}},Fi={type:"LINKED_PROPERTY",linkName:"lead",reverseLinkName:"peeps",linkedPropertyKey:"department",linkedFilterComponent:"MULTI_SELECT",linkedFilterState:{type:"SELECT",selectedValues:[]},filterState:{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:[]}},label:"Manager Department (linked multi)"},Ri={type:"LINKED_PROPERTY",linkName:"lead",reverseLinkName:"peeps",linkedPropertyKey:"locationCity",linkedFilterComponent:"SINGLE_SELECT",linkedFilterState:{type:"SELECT",selectedValues:[]},filterState:{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:[]}},label:"Manager City (linked single)"},Ai=new Map([["department",{type:"EXACT_MATCH",values:["Marketing","Research"]}],["jobTitle-multi",{type:"SELECT",selectedValues:["Marketing Manager","Chief Scientist"]}],["locationCity-single",{type:"SELECT",selectedValues:["Berlin"]}],["linkedProperty:lead:department",{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:["Marketing","Research"]}}],["linkedProperty:lead:locationCity",{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:["Berlin"]}}]]),Li=[K,In,vi,Fi,Ri];function _i(e){const n=De(),r=i.useMemo(()=>n(u),[n]),[s,o]=i.useState(void 0),c=i.useCallback(d=>{o(d)},[]);return t.jsxs("div",{style:G,children:[t.jsx("div",{style:E,children:t.jsx(m,{...e,objectType:u,objectSet:r,filterDefinitions:Li,initialFilterStates:Ai,onFilterClauseChanged:c})}),t.jsxs("div",{style:W,children:[t.jsx("h4",{children:"Active where clause"}),t.jsx("pre",{style:Q,children:s?JSON.stringify(s,null,2):"(none)"})]})]})}const _e={name:"With initial filter states",parameters:{docs:{description:{story:"Pass `initialFilterStates` to hydrate filters from saved state (e.g. localStorage or URL params). Selections are restored on mount, including values that currently have zero matching rows — they appear with a count of 0 so users can see and clear them. Demonstrated across LISTOGRAM, MULTI_SELECT, SINGLE_SELECT, and LINKED_PROPERTY filters."},source:{code:`// "Research", "Chief Scientist", and "Berlin" are not in the current
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
/>`}}},render:e=>t.jsx(_i,{...e})};var Qe,qe,Ze;ee.parameters={...ee.parameters,docs:{...(Qe=ee.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(Ze=(qe=ee.parameters)==null?void 0:qe.docs)==null?void 0:Ze.source}}};var et,tt,nt;te.parameters={...te.parameters,docs:{...(et=te.parameters)==null?void 0:et.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Opt-in \`dateShortcuts\` rail for DATE_RANGE filters. \`true\` ships the " + "built-in defaults; an array supplies custom \`DateRangePickerShortcut\`s " + "(e.g. \\"Last 6 hours\\"). Single-date filters have no shortcut rail, " + "matching Workshop."
      }
    }
  },
  render: ({
    objectType: _ot,
    objectSet: _os,
    ...args
  }) => {
    const filterDefinitions = useMemo((): FilterDefinitionUnion<Employee>[] => [{
      type: "PROPERTY",
      id: "startDate-range-shortcuts",
      key: "firstFullTimeStartDate",
      label: "Start Date (DATE_RANGE, default shortcuts)",
      filterComponent: "DATE_RANGE",
      filterState: {
        type: "DATE_RANGE"
      },
      dateShortcuts: true
    }, {
      type: "PROPERTY",
      id: "startDate-range-custom-shortcuts",
      key: "firstFullTimeStartDate",
      label: "Start Date (DATE_RANGE, custom shortcuts)",
      filterComponent: "DATE_RANGE",
      filterState: {
        type: "DATE_RANGE"
      },
      dateShortcuts: [{
        label: "Last 6 hours",
        dateRange: now => [new Date(now.getTime() - 6 * 60 * 60 * 1000), now]
      }, {
        label: "Past week",
        dateRange: now => [new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000), now]
      }]
    }, {
      type: "PROPERTY",
      id: "startDate-single-plain",
      key: "firstFullTimeStartDate",
      label: "Start Date (SINGLE_DATE, no shortcut rail)",
      filterComponent: "SINGLE_DATE",
      filterState: {
        type: "SELECT",
        selectedValues: []
      }
    }], []);
    return <div style={SIDEBAR_STYLE}>
        <FilterList objectType={Employee} filterDefinitions={filterDefinitions} {...args} />
      </div>;
  }
}`,...(nt=(tt=te.parameters)==null?void 0:tt.docs)==null?void 0:nt.source}}};var rt,it,st;ne.parameters={...ne.parameters,docs:{...(rt=ne.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Verification harness for relative date shortcuts. " + "Exposes the captured FilterState for both a DATE_RANGE and a " + "SINGLE_DATE filter via \`data-testid\` panels so the resolved " + "range can be inspected after clicking a shortcut."
      }
    }
  },
  render: args => <WithDateShortcutsVerificationStory {...args} />
}`,...(st=(it=ne.parameters)==null?void 0:it.docs)==null?void 0:st.source}}};var ot,lt,at;re.parameters={...re.parameters,docs:{...(ot=re.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(at=(lt=re.parameters)==null?void 0:lt.docs)==null?void 0:at.source}}};var ct,dt,ut;ie.parameters={...ie.parameters,docs:{...(ct=ie.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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
}`,...(ut=(dt=ie.parameters)==null?void 0:dt.docs)==null?void 0:ut.source}}};var pt,mt,ft;se.parameters={...se.parameters,docs:{...(pt=se.parameters)==null?void 0:pt.docs,source:{originalSource:`{
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
}`,...(ft=(mt=se.parameters)==null?void 0:mt.docs)==null?void 0:ft.source}}};var yt,Ct,ht;oe.parameters={...oe.parameters,docs:{...(yt=oe.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
}`,...(ht=(Ct=oe.parameters)==null?void 0:Ct.docs)==null?void 0:ht.source}}};var St,Et,Tt;le.parameters={...le.parameters,docs:{...(St=le.parameters)==null?void 0:St.docs,source:{originalSource:`{
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
}`,...(Tt=(Et=le.parameters)==null?void 0:Et.docs)==null?void 0:Tt.source}}};var bt,gt,vt;ae.parameters={...ae.parameters,docs:{...(bt=ae.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(vt=(gt=ae.parameters)==null?void 0:gt.docs)==null?void 0:vt.source}}};var Ft,Rt,At;ce.parameters={...ce.parameters,docs:{...(Ft=ce.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
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
}`,...(At=(Rt=ce.parameters)==null?void 0:Rt.docs)==null?void 0:At.source}}};var Lt,_t,jt;de.parameters={...de.parameters,docs:{...(Lt=de.parameters)==null?void 0:Lt.docs,source:{originalSource:`{
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
}`,...(jt=(_t=de.parameters)==null?void 0:_t.docs)==null?void 0:jt.source}}};var Dt,kt,Mt;ue.parameters={...ue.parameters,docs:{...(Dt=ue.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
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
}`,...(Mt=(kt=ue.parameters)==null?void 0:kt.docs)==null?void 0:Mt.source}}};var Ot,It,xt;pe.parameters={...pe.parameters,docs:{...(Ot=pe.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
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
}`,...(xt=(It=pe.parameters)==null?void 0:It.docs)==null?void 0:xt.source}}};var Nt,Pt,wt;me.parameters={...me.parameters,docs:{...(Nt=me.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
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
}`,...(wt=(Pt=me.parameters)==null?void 0:Pt.docs)==null?void 0:wt.source}}};var Vt,Gt,Wt;fe.parameters={...fe.parameters,docs:{...(Vt=fe.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
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
}`,...(Wt=(Gt=fe.parameters)==null?void 0:Gt.docs)==null?void 0:Wt.source}}};var Bt,Yt,Ht;ye.parameters={...ye.parameters,docs:{...(Bt=ye.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
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
}`,...(Ht=(Yt=ye.parameters)==null?void 0:Yt.docs)==null?void 0:Ht.source}}};var Ut,Xt,Kt;Ce.parameters={...Ce.parameters,docs:{...(Ut=Ce.parameters)==null?void 0:Ut.docs,source:{originalSource:`{
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
}`,...(Kt=(Xt=Ce.parameters)==null?void 0:Xt.docs)==null?void 0:Kt.source}}};var zt,$t,Jt;he.parameters={...he.parameters,docs:{...(zt=he.parameters)==null?void 0:zt.docs,source:{originalSource:`{
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
}`,...(Jt=($t=he.parameters)==null?void 0:$t.docs)==null?void 0:Jt.source}}};var Qt,qt,Zt;Se.parameters={...Se.parameters,docs:{...(Qt=Se.parameters)==null?void 0:Qt.docs,source:{originalSource:`{
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
}`,...(Zt=(qt=Se.parameters)==null?void 0:qt.docs)==null?void 0:Zt.source}}};var en,tn,nn;Ee.parameters={...Ee.parameters,docs:{...(en=Ee.parameters)==null?void 0:en.docs,source:{originalSource:`{
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
}`,...(nn=(tn=Ee.parameters)==null?void 0:tn.docs)==null?void 0:nn.source}}};var rn,sn,on;Te.parameters={...Te.parameters,docs:{...(rn=Te.parameters)==null?void 0:rn.docs,source:{originalSource:`{
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
}`,...(on=(sn=Te.parameters)==null?void 0:sn.docs)==null?void 0:on.source}}};var ln,an,cn;be.parameters={...be.parameters,docs:{...(ln=be.parameters)==null?void 0:ln.docs,source:{originalSource:`{
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
}`,...(cn=(an=be.parameters)==null?void 0:an.docs)==null?void 0:cn.source}}};var dn,un,pn;ge.parameters={...ge.parameters,docs:{...(dn=ge.parameters)==null?void 0:dn.docs,source:{originalSource:`{
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
}`,...(pn=(un=ge.parameters)==null?void 0:un.docs)==null?void 0:pn.source}}};var mn,fn,yn;ve.parameters={...ve.parameters,docs:{...(mn=ve.parameters)==null?void 0:mn.docs,source:{originalSource:`{
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
}`,...(yn=(fn=ve.parameters)==null?void 0:fn.docs)==null?void 0:yn.source}}};var Cn,hn,Sn;Fe.parameters={...Fe.parameters,docs:{...(Cn=Fe.parameters)==null?void 0:Cn.docs,source:{originalSource:`{
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
}`,...(Sn=(hn=Fe.parameters)==null?void 0:hn.docs)==null?void 0:Sn.source}}};var En,Tn,bn;Re.parameters={...Re.parameters,docs:{...(En=Re.parameters)==null?void 0:En.docs,source:{originalSource:`{
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
}`,...(bn=(Tn=Re.parameters)==null?void 0:Tn.docs)==null?void 0:bn.source}}};var gn,vn,Fn;Ae.parameters={...Ae.parameters,docs:{...(gn=Ae.parameters)==null?void 0:gn.docs,source:{originalSource:`{
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
}`,...(Fn=(vn=Ae.parameters)==null?void 0:vn.docs)==null?void 0:Fn.source}}};var Rn,An,Ln;Le.parameters={...Le.parameters,docs:{...(Rn=Le.parameters)==null?void 0:Rn.docs,source:{originalSource:`{
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
}`,...(Ln=(An=Le.parameters)==null?void 0:An.docs)==null?void 0:Ln.source}}};var _n,jn,Dn;_e.parameters={..._e.parameters,docs:{...(_n=_e.parameters)==null?void 0:_n.docs,source:{originalSource:`{
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
}`,...(Dn=(jn=_e.parameters)==null?void 0:jn.docs)==null?void 0:Dn.source}}};const Ls=["Default","WithDateShortcuts","WithDateShortcutsVerification","IntegerNumberRangeRounding","WithObjectSet","AddFilterMode","WithAllFilterTypes","WithTitleAndIcon","WithResetButton","WithActiveFilterCount","WithSorting","CollapsiblePanel","KeywordSearch","WithColorMap","WithRenderValue","WithRenderValueAsReactNode","WithListogramDisplayModes","WithHiddenCounts","WithCheckbox","CombinedWithObjectTable","CombinedWithFilteredObjectSet","WithRemovableFilters","WithStaticValues","FullFeatured","WithHasLinkFilter","CombinedWithLinkedFilter","WithCustomFilters","NoValueRendering","WithInitialFilterStates"];export{se as AddFilterMode,ue as CollapsiblePanel,Te as CombinedWithFilteredObjectSet,Re as CombinedWithLinkedFilter,Ee as CombinedWithObjectTable,ee as Default,ve as FullFeatured,re as IntegerNumberRangeRounding,pe as KeywordSearch,Le as NoValueRendering,ce as WithActiveFilterCount,oe as WithAllFilterTypes,Se as WithCheckbox,me as WithColorMap,Ae as WithCustomFilters,te as WithDateShortcuts,ne as WithDateShortcutsVerification,Fe as WithHasLinkFilter,he as WithHiddenCounts,_e as WithInitialFilterStates,Ce as WithListogramDisplayModes,ie as WithObjectSet,be as WithRemovableFilters,fe as WithRenderValue,ye as WithRenderValueAsReactNode,ae as WithResetButton,de as WithSorting,ge as WithStaticValues,le as WithTitleAndIcon,Ls as __namedExportsOrder,As as default};
