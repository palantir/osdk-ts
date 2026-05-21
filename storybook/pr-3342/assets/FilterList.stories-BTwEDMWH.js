var wn=Object.defineProperty;var Vn=(e,n,r)=>n in e?wn(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r;var Oe=(e,n,r)=>Vn(e,typeof n!="symbol"?n+"":n,r);import{r as l,R as o,f as Bn,j as t}from"./iframe-D_EUmaph.js";import{M as Hn,a as Wn,b as Gn,c as Yn,d as Un,e as Z,S as Xn}from"./MultiColumnSortDialog-wpXTlXv0.js";import{u as bn,O as Kn,S as Pe,C as Xe,E as zn,R as gn,a as vn,g as $n,c as Ke,s as Jn,f as qn,b as Qn,d as Zn,e as er,F as tr,h as ee,i as nr,j as ze,k as rr}from"./getFilterLabel-ByvZf_By.js";import{c as B}from"./index-2oD7dIRE.js";import{u as ir,C as lr,a as $e,P as or,s as sr,K as ar,b as cr,c as dr,D as ur,d as pr,S as mr,v as fr,e as yr}from"./DraggableList-BKnEpP4o.js";import{B as G}from"./Button-BEXEbcea.js";import{I as Cr}from"./Input-sq65U7oK.js";import{w as hr}from"./withOsdkMetrics-dgHEMJ9k.js";import{O as Ve}from"./object-table-CIuLBtab.js";import{E as p}from"./Employee-BAk2o20h.js";import{u as Be}from"./useOsdkClient-BsI1dohB.js";import"./preload-helper-Dp1pzeXC.js";import"./ActionButton-CU_-E58k.js";import"./Dialog-Cr7AYep-.js";import"./cross-DL6Y-j5o.js";import"./svgIconContainer-wbniBoWP.js";import"./useBaseUiId-B055awP1.js";import"./InternalBackdrop-BxHPHPML.js";import"./composite-Dpqmu7J8.js";import"./index-D-ZFfBay.js";import"./index-mpvlGTne.js";import"./index-7N9wqyCL.js";import"./ToolbarRootContext-8004L6JZ.js";import"./getPseudoElementBounds-BQzv0r7b.js";import"./useCompositeListItem-DJKUxpuX.js";import"./CompositeItem-KNxs7MnO.js";import"./getDisabledMountTransitionStyles-dDqvBQLZ.js";import"./useFocus-DIX1ctlF.js";import"./caret-down-BzxkETCu.js";import"./useValueChanged-UN1WmfY-.js";import"./Switch-CrJxrJQw.js";import"./toNumber-BNJuLdY-.js";import"./PopoverPopup-8PwLVnqX.js";import"./useControlled-ChEdLc1B.js";import"./assertUnreachable-tCT10eXl.js";import"./index-BtwbpoEL.js";import"./Checkbox-BDiSmyDj.js";import"./minus-Cr2Ra6wg.js";import"./SkeletonBar-CEV6U6Eq.js";import"./makeExternalStore-BlbPtFkF.js";import"./small-cross-SJOCPcLL.js";import"./useRegisterUserAgent-CRVaE7Q-.js";import"./Table-BiYB01jd.js";import"./LoadingCell-CwlUxbBd.js";import"./ColumnConfigDialog-fVArcUST.js";import"./CollapsiblePanel-BR2eIzj3.js";import"./chevron-down-B5a15l1V.js";import"./index-_p6h-7m7.js";import"./error-vlUnTgRU.js";import"./Tooltip-DrJGKuX5.js";import"./useEventCallback-B_DnOcMS.js";const W={filterList:"FilterList-module__filterList___wmzCNbkH",filterListCollapsed:"FilterList-module__filterListCollapsed___CGrK9txF",expandedContent:"FilterList-module__expandedContent___aEk2i2At",scrollableContent:"FilterList-module__scrollableContent___F3O1nfAo",hiddenContent:"FilterList-module__hiddenContent___PHKe-yWc",expandButton:"FilterList-module__expandButton___-QlY8-ot",collapsedLabel:"FilterList-module__collapsedLabel___QA0UtRts",addButtonContainer:"FilterList-module__addButtonContainer___kq300FEV",addButton:"FilterList-module__addButton___oD4yvwyZ"},re={content:"FilterListContent-module__content___fG0EgVp6",dragOverlay:"FilterListContent-module__dragOverlay___Tjd1YpmI"},xe={errorContainer:"ErrorBoundary-module__errorContainer___FIguBDDu",errorMessage:"ErrorBoundary-module__errorMessage___jUsXUqFA",retryButton:"ErrorBoundary-module__retryButton___PZVWZOm7"};class Sr extends l.Component{constructor(){super(...arguments);Oe(this,"state",{hasError:!1,error:null});Oe(this,"handleRetry",()=>{this.setState({hasError:!1,error:null})})}static getDerivedStateFromError(r){return{hasError:!0,error:r}}componentDidCatch(r,i){var s,a;console.error("[ErrorBoundary]",r),console.error("[ErrorBoundary] Component stack:",i.componentStack),(a=(s=this.props).onError)==null||a.call(s,r)}render(){return this.state.hasError?this.props.fallback?this.props.fallback:o.createElement("div",{className:xe.errorContainer},o.createElement("p",{className:xe.errorMessage},this.props.errorMessage??"Something went wrong"),o.createElement(G,{className:xe.retryButton,onClick:this.handleRetry,"aria-label":"Retry"},"Retry")):this.props.children}}function Er(){return o.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true"},o.createElement("circle",{cx:"5.5",cy:"3.5",r:"1.5"}),o.createElement("circle",{cx:"10.5",cy:"3.5",r:"1.5"}),o.createElement("circle",{cx:"5.5",cy:"8",r:"1.5"}),o.createElement("circle",{cx:"10.5",cy:"8",r:"1.5"}),o.createElement("circle",{cx:"5.5",cy:"12.5",r:"1.5"}),o.createElement("circle",{cx:"10.5",cy:"12.5",r:"1.5"}))}const x={filterItem:"FilterListItem-module__filterItem___fDBkbb7u",itemHeader:"FilterListItem-module__itemHeader___jp4epXg-",itemLabel:"FilterListItem-module__itemLabel___cEnbqE59",itemContent:"FilterListItem-module__itemContent___PfVHHhIy",dragHandle:"FilterListItem-module__dragHandle___BwFrILWs",headerActionButton:"FilterListItem-module__headerActionButton___x10Z2Kx0",headerActionButtonStart:"FilterListItem-module__headerActionButtonStart___pXCVAPBj",searchRow:"FilterListItem-module__searchRow___4fUrAgAm",searchInput:"FilterListItem-module__searchInput___v-qwznpk",searchClearButton:"FilterListItem-module__searchClearButton___HXHweIEa",dragging:"FilterListItem-module__dragging___S5-LGyfS"},k={positioner:"ItemOverflowMenu-module__positioner___AenWl-N6",popup:"ItemOverflowMenu-module__popup___-UKeMPCq",menuItem:"ItemOverflowMenu-module__menuItem___vc6O1UzQ",menuItemAction:"ItemOverflowMenu-module__menuItemAction___9Zt1Pu6e",menuItemIcon:"ItemOverflowMenu-module__menuItemIcon___nNdz87xj",separator:"ItemOverflowMenu-module__separator___yY4sT-wM"};function Tr({triggerClassName:e,triggerAriaLabel:n,filterLabel:r,showSearchInMenu:i,onSearchInMenu:s,showKeepExclude:a,isExcluding:d,onToggleExclude:c,showClearAll:m,onClearAll:T,showRemove:v,onRemove:F}){const A=bn();return!i&&!a&&!m&&!v?null:o.createElement(Hn,null,o.createElement(Wn,{className:e,"aria-label":n},o.createElement(Kn,null)),o.createElement(Gn,null,o.createElement(Yn,{className:k.positioner,sideOffset:4,align:"end",collisionBoundary:A},o.createElement(Un,{className:k.popup},i&&o.createElement(o.Fragment,null,o.createElement(Z,{className:k.menuItem,onClick:s},o.createElement("span",{className:k.menuItemIcon},o.createElement(Pe,null)),"Search values"),(a||m||v)&&o.createElement("div",{className:k.separator})),a&&o.createElement(o.Fragment,null,o.createElement(Z,{className:k.menuItem,onClick:d?c:void 0,"data-active":!d||void 0},o.createElement("span",{className:k.menuItemIcon},!d&&o.createElement(Xe,null)),"Keep matching values"),o.createElement(Z,{className:k.menuItem,onClick:d?void 0:c,"data-active":d||void 0},o.createElement("span",{className:k.menuItemIcon},d?o.createElement(Xe,null):o.createElement(zn,null)),"Exclude matching values"),(m||v)&&o.createElement("div",{className:k.separator})),m&&o.createElement(Z,{className:B(k.menuItem,k.menuItemAction),onClick:T},o.createElement("span",{className:k.menuItemIcon},o.createElement(gn,null)),"Clear all selections"),v&&o.createElement(Z,{className:B(k.menuItem,k.menuItemAction),onClick:F,"aria-label":`Remove ${r} filter`},o.createElement("span",{className:k.menuItemIcon},o.createElement(vn,null)),"Remove filter")))))}const br=l.memo(Tr);function Ne(){return Ne=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},Ne.apply(null,arguments)}function gr(e,n,r){if(!Qn(e))return"hidden";const i=r==null?void 0:r.search;return i===!1?"hidden":i==="header-start"||i==="header-end"||i==="menu"?i:i===void 0&&n===!1?"hidden":(r==null?void 0:r.placement)??"header-end"}function vr({definition:e,filterKey:n,label:r,filterState:i,onFilterStateChanged:s,onFilterRemoved:a,renderInput:d,searchField:c,controls:m,dragHandleAttributes:T,dragHandleListeners:v,className:F,style:A}){const[y,L]=l.useState({type:"closed"}),D=l.useCallback(j=>{s(n,j)},[n,s]),u=l.useCallback(()=>{L(j=>j.type==="closed"?{type:"open",query:""}:{type:"closed"})},[]),C=l.useCallback(j=>{L({type:"open",query:j.target.value})},[]),S=l.useCallback(()=>{L({type:"open",query:""})},[]),_=l.useCallback(()=>{a==null||a(n)},[n,a]),R=l.useMemo(()=>$n(i),[i]),w=(R==null?void 0:R.isExcluding)??!1,K=l.useCallback(()=>{if(i!=null){if(i.type==="linkedProperty"){const j=i.linkedFilterState;s(n,{type:"linkedProperty",linkedFilterState:{...j,isExcluding:!j.isExcluding}});return}s(n,{...i,isExcluding:!i.isExcluding})}},[n,i,s]),H=l.useCallback(()=>{const j=Ke(i);j!=null&&s(n,j)},[n,i,s]),O=l.useCallback(j=>{j==null||j.focus({preventScroll:!0})},[]),f=gr(R,c,m),b=(m==null?void 0:m.overflow)!==!1,g=b&&Jn(R),I=qn(i),P=b&&I&&Ke(i)!=null,V=b&&a!=null&&(m==null?void 0:m.remove)!==!1,J=y.type==="open",q=y.type==="open"?y.query:"",Ie=y.type==="open"?y.query:void 0;return o.createElement("div",{className:B(x.filterItem,F),style:A,"data-has-selection":I||void 0},o.createElement("div",{className:x.itemHeader},T&&o.createElement(G,Ne({className:x.dragHandle,"aria-label":`Reorder ${r}`},T,v),o.createElement(Er,null)),f==="header-start"&&o.createElement(G,{className:B(x.headerActionButton,x.headerActionButtonStart),onClick:u,"aria-label":"Search values","aria-pressed":J},o.createElement(Pe,null)),o.createElement("span",{className:x.itemLabel},r),f==="header-end"&&o.createElement(G,{className:x.headerActionButton,onClick:u,"aria-label":"Search values","aria-pressed":J},o.createElement(Pe,null)),o.createElement(br,{triggerClassName:x.headerActionButton,triggerAriaLabel:"More actions",filterLabel:r,showSearchInMenu:b&&f==="menu",onSearchInMenu:u,showKeepExclude:g,isExcluding:w,onToggleExclude:K,showClearAll:P,onClearAll:H,showRemove:V,onRemove:_})),J&&o.createElement("div",{className:x.searchRow},o.createElement(Cr,{type:"text",className:x.searchInput,value:q,onChange:C,placeholder:"Search property values...","aria-label":"Search property values",ref:O}),q&&o.createElement(G,{type:"button",className:x.searchClearButton,onClick:S,"aria-label":"Clear search"},o.createElement(vn,null))),o.createElement("div",{className:x.itemContent},o.createElement(Sr,{errorMessage:"Error loading filter"},d({definition:e,filterKey:n,filterState:i,onFilterStateChanged:D,searchQuery:Ie,excludeRowOpen:!1}))))}const we=l.memo(vr);function Fr({id:e,definition:n,filterKey:r,label:i,filterState:s,onFilterStateChanged:a,onFilterRemoved:d,renderInput:c,searchField:m,controls:T}){const{attributes:v,listeners:F,setNodeRef:A,transform:y,transition:L,isDragging:D}=ir({id:e}),u=l.useMemo(()=>({transform:lr.Transform.toString(y),transition:L??void 0}),[y,L]);return o.createElement("div",{ref:A,style:u,className:B(D&&x.dragging)},o.createElement(we,{definition:n,filterKey:r,label:i,filterState:s,onFilterStateChanged:a,onFilterRemoved:d,renderInput:c,searchField:m,controls:T,dragHandleAttributes:v,dragHandleListeners:F}))}const _r=l.memo(Fr),Rr=({transform:e})=>({...e,x:0}),Ar={distance:8},Lr=[Rr],jr={role:"button",tabIndex:-1,"aria-disabled":!0,"aria-pressed":void 0,"aria-roledescription":"sortable","aria-describedby":""};function Mr({filterDefinitions:e,filterStates:n,onFilterStateChanged:r,onFilterRemoved:i,onOrderChange:s,renderInput:a,getFilterKey:d,getFilterLabel:c,enableSorting:m,className:T,style:v}){const[F,A]=l.useState(null),y=l.useMemo(()=>m&&e?e.map(f=>d(f)):[],[m,e,d]),L=$e(or,{activationConstraint:Ar}),D=$e(ar,{coordinateGetter:sr}),u=cr(L,D),C=F!=null?y.indexOf(String(F)):-1,S=C>=0&&e?e[C]:void 0,_=l.useMemo(()=>S?d(S):void 0,[S,d]),R=l.useCallback(f=>{A(f.active.id)},[]),w=l.useCallback(f=>{A(null);const{active:b,over:g}=f;if(!g||b.id===g.id)return;const I=y.indexOf(String(b.id)),P=y.indexOf(String(g.id));if(I!==-1&&P!==-1){const V=dr(y,I,P);s==null||s(V)}},[y,s]),K=l.useCallback(()=>{A(null)},[]),H=l.useMemo(()=>({onDragStart({active:f}){const b=y.indexOf(String(f.id)),g=b>=0&&e?e[b]:void 0;return`Picked up ${g?c(g):"filter"} filter`},onDragOver({over:f}){return f?`Moved to position ${y.indexOf(String(f.id))+1} of ${y.length}`:"Not over a droppable area"},onDragEnd({active:f,over:b}){const g=y.indexOf(String(f.id)),I=g>=0&&e?e[g]:void 0,P=I?c(I):"filter";if(b&&f.id!==b.id){const V=y.indexOf(String(b.id));return`Dropped ${P} filter at position ${V+1}`}return`Dropped ${P} filter back in its original position`},onDragCancel({active:f}){const b=y.indexOf(String(f.id)),g=b>=0&&e?e[b]:void 0;return`Cancelled dragging ${g?c(g):"filter"} filter`}}),[e,y,c]),O=l.useMemo(()=>({announcements:H}),[H]);return!e||e.length===0?o.createElement("div",{className:B(re.content,T),style:v,"data-empty":"true"}):m?o.createElement("div",{className:B(re.content,T),style:v},o.createElement(ur,{sensors:u,collisionDetection:pr,modifiers:Lr,onDragStart:R,onDragEnd:w,onDragCancel:K,accessibility:O},o.createElement(mr,{items:y,strategy:fr},e.map((f,b)=>{const g=y[b],I=d(f),P=c(f),V=n.get(I);return o.createElement(_r,{key:g,id:g,definition:f,filterKey:I,label:P,filterState:V,onFilterStateChanged:r,onFilterRemoved:i,renderInput:a,searchField:f.searchField,controls:f.controls})})),o.createElement(yr,{dropAnimation:null,className:re.dragOverlay},S&&_&&o.createElement(we,{definition:S,filterKey:_,label:c(S),filterState:n.get(_),onFilterStateChanged:r,onFilterRemoved:i,renderInput:a,searchField:S.searchField,controls:S.controls,dragHandleAttributes:jr})))):o.createElement("div",{className:B(re.content,T),style:v},e.map(f=>{const b=d(f),g=n.get(b);return o.createElement(we,{key:b,definition:f,filterKey:b,label:c(f),filterState:g,onFilterStateChanged:r,onFilterRemoved:i,renderInput:a,searchField:f.searchField,controls:f.controls})}))}const U={header:"FilterListHeader-module__header___dkKc0CO-",titleContainer:"FilterListHeader-module__titleContainer___KaePpQIx",title:"FilterListHeader-module__title___xqfWfSzK",titleIcon:"FilterListHeader-module__titleIcon___MQy-dec8",activeCount:"FilterListHeader-module__activeCount___GyBsnsQL",actions:"FilterListHeader-module__actions___YZA7zmGc",collapseButton:"FilterListHeader-module__collapseButton___N1-sj3B3",resetButton:"FilterListHeader-module__resetButton___jLcUypov"};function Ir({title:e,titleIcon:n,collapsed:r=!1,onCollapsedChange:i,showResetButton:s,onReset:a,showActiveFilterCount:d,activeFilterCount:c=0,hasVisibilityChanges:m=!1}){const T=l.useCallback(()=>{i==null||i(!r)},[i,r]);return o.createElement("div",{className:U.header},o.createElement("div",{className:U.titleContainer},n&&o.createElement("span",{className:U.titleIcon},n),e&&o.createElement("span",{className:U.title},e),d&&c>0&&o.createElement("span",{className:U.activeCount},"(",c,")")),o.createElement("div",{className:U.actions},s&&o.createElement(G,{className:U.resetButton,onClick:a,disabled:c===0&&!m},o.createElement(gn,null)," Reset filters"),i!=null&&o.createElement(G,{className:U.collapseButton,onClick:T,"aria-expanded":!r,"aria-label":r?"Expand filters":"Collapse filters"},o.createElement(Zn,null))))}const kr=l.memo(Ir);function Dr(e){const{title:n,titleIcon:r,collapsed:i=!1,onCollapsedChange:s,filterDefinitions:a,filterStates:d,onFilterStateChanged:c,renderInput:m,getFilterKey:T,getFilterLabel:v,activeFilterCount:F,onReset:A,onFilterAdded:y,onFilterRemoved:L,onOrderChange:D,showResetButton:u=!1,showActiveFilterCount:C=!1,hasVisibilityChanges:S,enableSorting:_,className:R,renderAddFilterButton:w}=e,[K,H]=l.useState(null),O=l.useCallback(()=>{s==null||s(!1)},[s]),f=i&&s!=null;return o.createElement("div",{className:B(W.filterList,R)},f&&o.createElement("div",{className:W.filterListCollapsed,"data-collapsed":"true"},o.createElement(G,{className:W.expandButton,onClick:O,"aria-label":"Expand filters"},o.createElement(er,null)),o.createElement("span",{className:W.collapsedLabel},n??"Filters")),o.createElement("div",{ref:H,className:B(W.expandedContent,f&&W.hiddenContent),"data-active-count":F},o.createElement(tr,{value:K},(n||r||u||C||s)&&o.createElement(kr,{title:n,titleIcon:r,collapsed:i,onCollapsedChange:s,showResetButton:u,onReset:A,showActiveFilterCount:C,activeFilterCount:F,hasVisibilityChanges:S}),o.createElement("div",{className:W.scrollableContent},o.createElement(Mr,{filterDefinitions:a,filterStates:d,onFilterStateChanged:c,onFilterRemoved:L,onOrderChange:D,renderInput:m,getFilterKey:T,getFilterLabel:v,enableSorting:_})),(w!=null||y!=null)&&o.createElement("div",{className:W.addButtonContainer},w?w():o.createElement(G,{type:"button",className:W.addButton,onClick:y},"+ Add filter")))))}const Or={trigger:"AddFilterPopover-module__trigger___8QQBrzPo"};function xr({hiddenDefinitions:e,onShowFilter:n,renderTrigger:r}){const i=bn();return o.createElement(Xn,{items:e,onItemSelected:n,trigger:r!=null?r():"+ Add filter",triggerClassName:r==null?Or.trigger:void 0,searchPlaceholder:"Search filters",emptyMessage:"No matching filters",collisionBoundary:i})}const Pr=l.memo(xr);function Nr(e,n){const r=l.useMemo(()=>(e==null?void 0:e.map(ee))??[],[e]),i=l.useMemo(()=>(e==null?void 0:e.filter(u=>u.isVisible!==!1).map(ee))??[],[e]),[s,a]=l.useState(()=>i);l.useEffect(()=>{a(i)},[i]);const d=l.useRef(n);d.current=n;const c=l.useCallback(u=>{if(!d.current)return;const C=new Set(u),S=r.filter(_=>!C.has(_));d.current(u,S)},[r]),m=l.useMemo(()=>{const u=new Map;if(e==null)return u;for(const C of e)u.set(ee(C),C);return u},[e]),{visibleDefinitions:T,hiddenDefinitions:v}=l.useMemo(()=>{if(e==null)return{visibleDefinitions:[],hiddenDefinitions:[]};const u=new Set(s),C=[],S=[];for(const _ of s){const R=m.get(_);R!=null&&C.push(R)}for(const _ of r)if(!u.has(_)){const R=m.get(_);R!=null&&S.push(R)}return{visibleDefinitions:C,hiddenDefinitions:S}},[e,m,s,r]),F=l.useCallback(u=>{a(C=>{if(C.includes(u))return C;const S=[...C,u];return c(S),S})},[c]),A=l.useCallback(u=>{a(C=>{const S=C.filter(_=>_!==u);return c(S),S})},[c]),y=l.useCallback(u=>{a(C=>u.length===C.length&&u.every((S,_)=>S===C[_])?C:(c(u),u))},[c]),L=l.useCallback(()=>{a(u=>i.length===u.length&&i.every((C,S)=>C===u[S])?u:(c(i),i))},[i,c]),D=l.useMemo(()=>s.length!==i.length?!0:!s.every((u,C)=>u===i[C]),[s,i]);return{visibleDefinitions:T,hiddenDefinitions:v,showFilter:F,hideFilter:A,reorderVisible:y,hasVisibilityChanges:D,resetVisibility:L}}function wr(e){const{objectType:n,objectSet:r,title:i,titleIcon:s,collapsed:a,onCollapsedChange:d,filterDefinitions:c,addFilterMode:m="uncontrolled",showResetButton:T=!1,onReset:v,showActiveFilterCount:F=!1,className:A,enableSorting:y,onFilterAdded:L,onFilterRemoved:D,onFilterVisibilityChange:u,renderAddFilterButton:C}=e,{filterStates:S,setFilterState:_,clearFilterState:R,perFilterWhereClauses:w,activeFilterCount:K,reset:H}=nr(e),O=m==="uncontrolled",f=l.useCallback((M,ke)=>{if(!u)return;const De=[...M.map(Q=>({filterKey:Q,isVisible:!0})),...ke.map(Q=>({filterKey:Q,isVisible:!1}))];u(De)},[u]),{visibleDefinitions:b,hiddenDefinitions:g,showFilter:I,hideFilter:P,reorderVisible:V,hasVisibilityChanges:J,resetVisibility:q}=Nr(c,O?f:void 0),Ie=l.useCallback(()=>{H(),q(),v==null||v()},[H,q,v]),j=l.useMemo(()=>{if(c!=null)return c.filter(M=>M.isVisible!==!1)},[c]),Mn=O?b:j,In=l.useCallback(M=>{R(M),O&&P(M),D==null||D(M)},[R,O,P,D]),Ye=l.useCallback(M=>{I(M),L==null||L(M,c??[])},[I,L,c]),kn=l.useCallback(M=>{V(M)},[V]),Ue=l.useMemo(()=>g.map(M=>({key:ee(M),label:ze(M)})),[g]),Dn=l.useMemo(()=>O?g.length===0?void 0:()=>o.createElement(Pr,{hiddenDefinitions:Ue,onShowFilter:Ye,renderTrigger:C}):C,[O,g.length,Ue,Ye,C]),On=O?In:D,xn=l.useCallback(({definition:M,filterKey:ke,filterState:De,onFilterStateChanged:Q,searchQuery:Pn,excludeRowOpen:Nn})=>o.createElement(rr,{objectType:n,objectSet:r,definition:M,filterState:De,onFilterStateChanged:Q,whereClause:w.get(ke)??{},searchQuery:Pn,excludeRowOpen:Nn}),[n,r,w]);return o.createElement(Dr,{title:i,titleIcon:s,collapsed:a,onCollapsedChange:d,filterDefinitions:Mn,filterStates:S,onFilterStateChanged:_,renderInput:xn,getFilterKey:ee,getFilterLabel:ze,activeFilterCount:K,onReset:Ie,showResetButton:T,showActiveFilterCount:F,hasVisibilityChanges:J,enableSorting:y,onFilterRemoved:On,onOrderChange:kn,className:A,renderAddFilterButton:Dn})}const h=hr(wr,"FilterList"),{useArgs:Fn}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:z}=__STORYBOOK_MODULE_TEST__,$={type:"PROPERTY",id:"department",key:"department",label:"Department",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},He={type:"PROPERTY",id:"team",key:"team",label:"Team",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},_n={type:"PROPERTY",id:"fullName",key:"fullName",label:"Full Name",filterComponent:"CONTAINS_TEXT",filterState:{type:"CONTAINS_TEXT"}},Rn={type:"PROPERTY",id:"firstFullTimeStartDate",key:"firstFullTimeStartDate",label:"Start Date",filterComponent:"DATE_RANGE",filterState:{type:"DATE_RANGE"},clickToFilter:!0},Me={type:"PROPERTY",id:"employeeNumber",key:"employeeNumber",label:"Employee Number",filterComponent:"NUMBER_RANGE",filterState:{type:"NUMBER_RANGE"},clickToFilter:!0},te={type:"PROPERTY",id:"locationCity",key:"locationCity",label:"Location City",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},An={type:"PROPERTY",id:"jobTitle-multi",key:"jobTitle",label:"Job Title",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}},N=[$,He,_n,Rn,An,Me,te],E={width:320,height:600},Y={display:"flex",gap:16},X={flex:1},ne={marginTop:8,padding:12,background:"#f5f5f5",borderRadius:4,fontSize:12,overflow:"auto",maxHeight:560},We={display:"flex",gap:16,height:600},Ge={width:320,flexShrink:0},Ln=t.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:t.jsx("path",{d:"M1 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1.5a1 1 0 0 1-.293.707L10 8.914V13a1 1 0 0 1-.553.894l-2 1A1 1 0 0 1 6 14v-5.086L1.293 4.207A1 1 0 0 1 1 3.5V2z"})}),yl={title:"Beta/FilterList",component:h,args:{title:"Filters",enableSorting:!1,showResetButton:!1,showActiveFilterCount:!1,collapsed:!1,onFilterClauseChanged:z(),onFilterStateChanged:z(),onFilterAdded:z(),onFilterRemoved:z(),onFilterVisibilityChange:z(),onCollapsedChange:z(),onReset:z()},parameters:{msw:{handlers:[...Bn.handlers]},controls:{expanded:!0}},argTypes:{objectType:{description:"The object type definition for the objects being filtered",control:!1},objectSet:{description:"Optional object set to scope aggregation queries",control:!1},filterDefinitions:{description:"Array of filter definitions. If not provided, all filterable properties are auto-discovered.",control:!1},title:{description:"Title displayed in the filter list header",control:"text"},titleIcon:{description:"Icon displayed next to the title",control:!1},filterClause:{description:"The current where clause. If provided, the filter clause is controlled.",control:!1},onFilterClauseChanged:{description:"Called when the filter clause changes. Required in controlled mode.",control:!1,table:{category:"Events"}},onFilterStateChanged:{description:"Called when an individual filter's state changes",control:!1,table:{category:"Events"}},enableSorting:{description:"Enable drag-and-drop reordering of filters",control:"boolean",table:{defaultValue:{summary:"false"}}},collapsed:{description:"Whether the filter list panel is collapsed",control:"boolean"},onCollapsedChange:{description:"Called when the collapsed state changes",control:!1,table:{category:"Events"}},showResetButton:{description:"Show reset filters button in header",control:"boolean",table:{defaultValue:{summary:"false"}}},onReset:{description:"Called when the reset button is clicked",control:!1,table:{category:"Events"}},showActiveFilterCount:{description:"Show count of active filters in header",control:"boolean",table:{defaultValue:{summary:"false"}}},onFilterAdded:{description:"Called when a filter is added. If provided, users can add filters.",control:!1,table:{category:"Events"}},onFilterRemoved:{description:"Called when a filter is removed. If provided, users can remove filters.",control:!1,table:{category:"Events"}},onFilterVisibilityChange:{description:"Called when filter visibility or ordering changes (reorder, add, remove).",control:!1,table:{category:"Events"}},addFilterMode:{description:'Controls how filter add/remove is managed. "uncontrolled" manages visibility internally; "controlled" leaves it to the consumer.',control:"select",options:["controlled","uncontrolled"],table:{category:"Advanced",defaultValue:{summary:'"uncontrolled"'}}},renderAddFilterButton:{description:"Custom render function for the add filter button.",control:!1,table:{category:"Advanced"}},initialFilterStates:{description:"Initial filter states for hydrating from external storage. Merged over definition defaults on mount.",control:!1,table:{category:"Advanced"}},className:{description:"Additional CSS class name",control:"text"}}},ie={parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:({objectType:e,objectSet:n,...r})=>{const i=l.useMemo(()=>[$,te],[]);return t.jsx("div",{style:E,children:t.jsx(h,{objectType:p,filterDefinitions:i,...r})})}},le={parameters:{docs:{description:{story:"Repro for the integer-typed `NUMBER_RANGE` rounding fix. `employeeNumber` is an `integer` property, so histogram bucket boundaries — `(maxValue - minValue) / 20` — are usually fractional. Click any bar in the histogram. The Min/Max boxes must show whole integers (e.g. `657495073`), not fractional values (e.g. `657495073.4`)."}}},render:({objectType:e,objectSet:n,...r})=>{const i=l.useMemo(()=>[Me],[]);return t.jsx("div",{style:E,children:t.jsx(h,{objectType:p,filterDefinitions:i,...r})})}};function Vr(e){const n=Be(),r=l.useMemo(()=>n(p).where({department:"Marketing"}),[n]),i=l.useMemo(()=>[He,te],[]);return t.jsx("div",{style:E,children:t.jsx(h,{objectType:p,objectSet:r,filterDefinitions:i,...e})})}const oe={parameters:{docs:{description:{story:"Pass an `objectSet` prop to scope filter aggregations to a subset of objects. Here the object set is filtered to Marketing department employees, so the listogram counts reflect only that subset."},source:{code:`const client = useOsdkClient();
const objectSet = client(Employee).where({ department: "Marketing" });

<FilterList
  objectType={Employee}
  objectSet={objectSet}
  filterDefinitions={[
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:e=>t.jsx(Vr,{...e})};function Br(e){const n=l.useMemo(()=>[$,He,{..._n,isVisible:!1},{...Rn,isVisible:!1},{...Me,isVisible:!1},{...te,isVisible:!1}],[]);return t.jsx("div",{style:E,children:t.jsx(h,{objectType:p,filterDefinitions:n,addFilterMode:"uncontrolled",...e})})}const se={args:{showResetButton:!0},parameters:{docs:{source:{code:`const filterDefinitions = [
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
/>`}}},render:e=>t.jsx(Br,{...e})};function Hr(e){const[n,r]=l.useState(void 0),i=e.onFilterClauseChanged,s=l.useCallback(a=>{r(a),i==null||i(a)},[i]);return t.jsxs("div",{style:Y,children:[t.jsx("div",{style:E,children:t.jsx(h,{objectType:p,filterDefinitions:N,...e,filterClause:n,onFilterClauseChanged:s})}),t.jsxs("div",{style:X,children:[t.jsx("strong",{children:"Filter Clause (JSON):"}),t.jsx("pre",{style:ne,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const ae={parameters:{docs:{description:{story:"All filter component types with a controlled where clause. Hover filter items to reveal search and exclude actions."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>`}}},render:e=>t.jsx(Hr,{...e})},ce={args:{title:"Employee Filters"},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  titleIcon={<svg>...</svg>}
/>`}}},render:({objectType:e,objectSet:n,...r})=>t.jsx("div",{style:E,children:t.jsx(h,{objectType:p,filterDefinitions:N,titleIcon:Ln,...r})})};function Wr(e){const n=e.onReset,r=l.useCallback(()=>{console.log("Reset clicked"),n==null||n()},[n]);return t.jsx("div",{style:E,children:t.jsx(h,{objectType:p,filterDefinitions:N,...e,onReset:r})})}const de={args:{showResetButton:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showResetButton={true}
  onReset={() => console.log("Reset clicked")}
/>`}}},render:e=>t.jsx(Wr,{...e})},ue={args:{showActiveFilterCount:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showActiveFilterCount={true}
/>`}}},render:({objectType:e,objectSet:n,...r})=>t.jsx("div",{style:E,children:t.jsx(h,{objectType:p,filterDefinitions:N,...r})})},pe={args:{enableSorting:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  enableSorting={true}
/>`}}},render:({objectType:e,objectSet:n,...r})=>t.jsx("div",{style:E,children:t.jsx(h,{objectType:p,filterDefinitions:N,...r})})};function Gr(e){return t.jsx("div",{style:E,children:t.jsx(h,{objectType:p,filterDefinitions:N,...e})})}const me={args:{title:"Employee Filters",showActiveFilterCount:!0},parameters:{docs:{description:{story:"Click the collapse button to minimize the filter panel. Active filter count is shown in the collapsed state."},source:{code:`const [collapsed, setCollapsed] = useState(false);

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  collapsed={collapsed}
  onCollapsedChange={setCollapsed}
  showActiveFilterCount={true}
/>`}}},render:e=>{const[,n]=Fn(),r=e.onCollapsedChange,i=l.useCallback(s=>{n({collapsed:s}),r==null||r(s)},[n,r]);return t.jsx(Gr,{...e,onCollapsedChange:i})}},fe={parameters:{docs:{source:{code:`const filterDefinitions = [
  { type: "KEYWORD_SEARCH", properties: ["fullName", "department", "jobTitle", "locationCity"], label: "Search" },
  { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:({objectType:e,objectSet:n,...r})=>{const i=l.useMemo(()=>[{type:"KEYWORD_SEARCH",properties:["fullName","department","jobTitle","locationCity"],label:"Search"},$,te],[]);return t.jsx("div",{style:E,children:t.jsx(h,{objectType:p,filterDefinitions:i,...r})})}};function Yr(e){const n=l.useMemo(()=>[{type:"PROPERTY",id:"department-no-color",key:"department",label:"Department (default colors)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]),r=l.useMemo(()=>[{type:"PROPERTY",id:"department-color",key:"department",label:"Department (custom colors)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},colorMap:{Marketing:"#e74c3c",Operations:"#2ecc71",Finance:"#3498db",Product:"#f39c12"}}],[]);return t.jsxs("div",{style:Y,children:[t.jsx("div",{style:E,children:t.jsx(h,{objectType:p,filterDefinitions:n,...e})}),t.jsx("div",{style:E,children:t.jsx(h,{objectType:p,filterDefinitions:r,...e})})]})}const ye={parameters:{docs:{source:{code:`// Without colorMap: all bars use the default theme color
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

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>t.jsx(Yr,{...e})},jn={Marketing:"Marketing Dept.",Operations:"Ops Team",Finance:"Finance & Accounting",Product:"Product Group"};function Ur(e){const n=l.useMemo(()=>[{type:"PROPERTY",id:"department-default",key:"department",label:"Department (default)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]),r=l.useMemo(()=>[{type:"PROPERTY",id:"department-custom",key:"department",label:"Department (custom render)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},renderValue:i=>jn[i]??i},{type:"PROPERTY",id:"team-custom",key:"team",label:"Team (custom render)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},renderValue:i=>i.toUpperCase()}],[]);return t.jsxs("div",{style:Y,children:[t.jsx("div",{style:E,children:t.jsx(h,{objectType:p,filterDefinitions:n,...e})}),t.jsx("div",{style:E,children:t.jsx(h,{objectType:p,filterDefinitions:r,...e})})]})}const Ce={parameters:{docs:{description:{story:"Use `renderValue` to customize how filter values are displayed and searched. The returned string replaces the raw value for display and search matching. Works with LISTOGRAM, MULTI_SELECT, and SINGLE_SELECT components."},source:{code:`const DEPARTMENT_LABELS = {
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

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>t.jsx(Ur,{...e})},Xr={Marketing:"#f97316",Operations:"#3b82f6",Finance:"#10b981",Product:"#a855f7"},Kr={display:"inline-flex",alignItems:"center",gap:8},zr={display:"inline-block",width:10,height:10,borderRadius:"50%",flexShrink:0};function $r({value:e}){const n=Xr[e]??"#94a3b8";return t.jsxs("span",{style:Kr,children:[t.jsx("span",{style:{...zr,background:n}}),t.jsx("span",{children:jn[e]??e})]})}function Jr(e){const n=l.useMemo(()=>[{type:"PROPERTY",id:"department-swatch",key:"department",label:"Department (JSX)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},renderValue:r=>t.jsx($r,{value:r})},{type:"PROPERTY",id:"team-link",key:"team",label:"Team (anchor JSX)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},renderValue:r=>t.jsx("a",{href:`#/team/${encodeURIComponent(r)}`,onClick:i=>i.preventDefault(),style:{color:"#2563eb",textDecoration:"underline"},children:r})}],[]);return t.jsx("div",{style:E,children:t.jsx(h,{objectType:p,filterDefinitions:n,...e})})}const he={parameters:{docs:{description:{story:"`renderValue` may return any `ReactNode`, not just a string. Use this to render avatars, anchors, status pills, or any custom JSX inside listogram rows, dropdown items, and chips. When the function returns non-string JSX, search matching falls back to the raw value."},source:{code:`const filterDefinitions = [
  {
    type: "PROPERTY",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
    renderValue: (value) => <DepartmentSwatch value={value} />,
  },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>t.jsx(Jr,{...e})};function qr(e){const n=l.useMemo(()=>[{type:"PROPERTY",id:"dept-full",key:"department",label:"full: label + bar + count",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"full"}}],[]),r=l.useMemo(()=>[{type:"PROPERTY",id:"dept-count",key:"department",label:"count: label + count (no bar)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"count"}}],[]),i=l.useMemo(()=>[{type:"PROPERTY",id:"dept-minimal",key:"department",label:"minimal: label only",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"}}],[]);return t.jsxs("div",{style:Y,children:[t.jsx("div",{style:E,children:t.jsx(h,{objectType:p,filterDefinitions:n,...e})}),t.jsx("div",{style:E,children:t.jsx(h,{objectType:p,filterDefinitions:r,...e})}),t.jsx("div",{style:E,children:t.jsx(h,{objectType:p,filterDefinitions:i,...e})})]})}const Se={parameters:{docs:{source:{code:`// "full" (default): label + colored bar + count number
// "count": label + count number (no bar)
// "minimal": label only (no bar, no count)

const filterDefinitions = [
  { ..., listogramConfig: { displayMode: "full" } },
  { ..., listogramConfig: { displayMode: "count" } },
  { ..., listogramConfig: { displayMode: "minimal" } },
];`}}},render:e=>t.jsx(qr,{...e})};function Qr(e){const n=l.useMemo(()=>[{type:"PROPERTY",id:"dept-with-count",key:"department",label:"Department (counts visible)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},{type:"PROPERTY",id:"team-with-count",key:"team",label:"Team (counts visible)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}}],[]),r=l.useMemo(()=>[{type:"PROPERTY",id:"dept-no-count",key:"department",label:"Department (counts hidden)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},showCount:!1},{type:"PROPERTY",id:"team-no-count",key:"team",label:"Team (counts hidden)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},showCount:!1}],[]);return t.jsxs("div",{style:Y,children:[t.jsx("div",{style:E,children:t.jsx(h,{objectType:p,filterDefinitions:n,...e})}),t.jsx("div",{style:E,children:t.jsx(h,{objectType:p,filterDefinitions:r,...e})})]})}const Ee={parameters:{docs:{description:{story:"Use `showCount: false` on individual filter definitions to hide aggregation counts in LISTOGRAM and MULTI_SELECT inputs. Bar visualizations in LISTOGRAM are preserved."},source:{code:`// showCount defaults to true; set false to hide counts per filter
const filterDefinitions = [
  { ..., filterComponent: "LISTOGRAM", showCount: false },
  { ..., filterComponent: "MULTI_SELECT", showCount: false },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>t.jsx(Qr,{...e})};function Zr(e){const n=l.useMemo(()=>[{type:"PROPERTY",id:"department-checkbox",key:"department",label:"Department",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},{type:"PROPERTY",id:"team-checkbox",key:"team",label:"Team",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]);return t.jsx("div",{style:E,children:t.jsx(h,{objectType:p,filterDefinitions:n,...e})})}const Te={parameters:{docs:{description:{story:"Listogram rows always include a checkbox for multi-select. Selecting values checks the checkbox and highlights the row. Use the exclude toggle (three-dot menu) to invert selections."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:e=>t.jsx(Zr,{...e})};function ei(e){const[n,r]=l.useState(void 0),i=e.onFilterRemoved,s=l.useCallback(c=>{console.log("Removed filter:",c),i==null||i(c)},[i]),a=e.onFilterClauseChanged,d=l.useCallback(c=>{r(c),a==null||a(c)},[a]);return t.jsxs("div",{style:We,children:[t.jsx("div",{style:Ge,children:t.jsx(h,{objectType:p,filterDefinitions:N,...e,onFilterRemoved:s,filterClause:n,onFilterClauseChanged:d})}),t.jsx("div",{style:X,children:t.jsx(Ve,{objectType:p,filter:n})})]})}const be={args:{title:"Employee Filters",showResetButton:!0,showActiveFilterCount:!0,enableSorting:!0},parameters:{docs:{source:{code:`const [filterClause, setFilterClause] = useState(undefined);

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
</div>`}}},render:e=>t.jsx(ei,{...e})};function ti(e){const n=Be(),r=l.useMemo(()=>n(p).where({department:"Marketing"}),[n]),[i,s]=l.useState(void 0),a=e.onFilterClauseChanged,d=l.useCallback(c=>{s(c),a==null||a(c)},[a]);return t.jsxs("div",{style:We,children:[t.jsx("div",{style:Ge,children:t.jsx(h,{objectType:p,objectSet:r,filterDefinitions:N,...e,filterClause:i,onFilterClauseChanged:d})}),t.jsx("div",{style:X,children:t.jsx(Ve,{objectType:p,objectSet:r,filter:i})})]})}const ge={args:{title:"Marketing Employees",showResetButton:!0,showActiveFilterCount:!0},parameters:{docs:{description:{story:"Demonstrates using a pre-filtered objectSet to scope both FilterList aggregations and ObjectTable data to a subset of employees."},source:{code:`const client = useOsdkClient();
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
/>`}}},render:e=>t.jsx(ti,{...e})};function ni(e){const[n,r]=l.useState(N),i=e.onFilterRemoved,s=l.useCallback(a=>{r(d=>d.filter(c=>"key"in c?c.key!==a:!0)),i==null||i(a)},[i]);return t.jsx("div",{style:E,children:t.jsx(h,{objectType:p,filterDefinitions:n,...e,onFilterRemoved:s})})}const ve={name:"Removable Filters",args:{title:"Removable Filters",showActiveFilterCount:!0},parameters:{docs:{description:{story:"When `onFilterRemoved` is provided, each filter item shows a remove button (X) on hover. Clicking it removes the filter from the list."},source:{code:`const [definitions, setDefinitions] = useState(filterDefinitions);

const handleFilterRemoved = (filterKey) => {
  setDefinitions(prev => prev.filter(def => def.key !== filterKey));
};

<FilterList
  objectType={Employee}
  filterDefinitions={definitions}
  onFilterRemoved={handleFilterRemoved}
  title="Removable Filters"
/>`}}},render:e=>t.jsx(ni,{...e})};function ri(e){const[n,r]=l.useState(void 0),i=l.useMemo(()=>[{type:"STATIC_VALUES",key:"department",label:"Department (static)",filterComponent:"LISTOGRAM",values:["Marketing","Operations","Finance","Product"],filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"}},{type:"STATIC_VALUES",key:"locationCity",label:"Office Location",filterComponent:"SINGLE_SELECT",values:["New York","San Francisco","London","Tokyo"],filterState:{type:"SELECT",selectedValues:[]}},{type:"STATIC_VALUES",key:"team",label:"Team (multi-select)",filterComponent:"MULTI_SELECT",values:["Alpha","Beta","Gamma","Delta"],filterState:{type:"SELECT",selectedValues:[]}},{type:"STATIC_VALUES",id:"custom-status",key:"status",label:"Status (custom clause)",filterComponent:"LISTOGRAM",values:["Active","Inactive"],filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"},toWhereClause:d=>{if(d.type!=="EXACT_MATCH"||d.values.length===0)return;const c=d.values,m=c.includes("Active"),T=c.includes("Inactive");if(m&&T)return{$or:[{employeeStatus:"Active"},{employeeStatus:"Inactive"}]};if(m)return{employeeStatus:"Active"};if(T)return{employeeStatus:"Inactive"}}}],[]),s=e.onFilterClauseChanged,a=l.useCallback(d=>{r(d),s==null||s(d)},[s]);return t.jsxs("div",{style:Y,children:[t.jsx("div",{style:E,children:t.jsx(h,{objectType:p,filterDefinitions:i,...e,filterClause:n,onFilterClauseChanged:a})}),t.jsxs("div",{style:X,children:[t.jsx("strong",{children:"Filter Clause (JSON):"}),t.jsx("pre",{style:ne,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const Fe={parameters:{docs:{description:{story:"Use `STATIC_VALUES` filter definitions to provide a fixed list of values instead of fetching from OSDK aggregation. Supports LISTOGRAM, SINGLE_SELECT, MULTI_SELECT, and TEXT_TAGS components. Optionally provide a `toWhereClause` function for custom clause generation."},source:{code:`const filterDefinitions = [
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
/>`}}},render:e=>t.jsx(ri,{...e})};function ii(e){const[n,r]=l.useState(void 0),[i,s]=l.useState(N),a=e.onFilterRemoved,d=l.useCallback(F=>{s(A=>A.filter(y=>"key"in y?y.key!==F:!0)),a==null||a(F)},[a]),c=e.onReset,m=l.useCallback(()=>{s(N),c==null||c()},[c]),T=e.onFilterClauseChanged,v=l.useCallback(F=>{r(F),T==null||T(F)},[T]);return t.jsxs("div",{style:We,children:[t.jsx("div",{style:Ge,children:t.jsx(h,{objectType:p,filterDefinitions:i,titleIcon:Ln,...e,onReset:m,onFilterRemoved:d,filterClause:n,onFilterClauseChanged:v})}),t.jsx("div",{style:X,children:t.jsx(Ve,{objectType:p,filter:n})})]})}const _e={name:"Full Featured",args:{title:"Employee Filters",showResetButton:!0,showActiveFilterCount:!0,enableSorting:!0},parameters:{docs:{description:{story:"Demonstrates all filter list features together: collapse, reset, active count, sorting, removable filters, per-filter search, exclude toggle, and controlled where clause driving an ObjectTable."},source:{code:`// All features combined: collapse, sort, search, exclude, remove, reset

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
/>`}}},render:e=>{const[,n]=Fn(),r=e.onCollapsedChange,i=l.useCallback(s=>{n({collapsed:s}),r==null||r(s)},[n,r]);return t.jsx(ii,{...e,onCollapsedChange:i})}};function li(e){const[n,r]=l.useState(void 0),i=l.useMemo(()=>[{type:"HAS_LINK",linkName:"lead",label:"Has Manager",filterState:{type:"hasLink",hasLink:!1}}],[]),s=e.onFilterClauseChanged,a=l.useCallback(d=>{r(d),s==null||s(d)},[s]);return t.jsxs("div",{style:Y,children:[t.jsx("div",{style:E,children:t.jsx(h,{objectType:p,filterDefinitions:i,...e,filterClause:n,onFilterClauseChanged:a})}),t.jsxs("div",{style:X,children:[t.jsx("strong",{children:"Filter Clause (JSON):"}),t.jsx("pre",{style:ne,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const Re={name:"Linked Property Filters",parameters:{docs:{description:{story:"Demonstrates filtering on properties of linked objects. HAS_LINK filters objects based on whether they have a linked object. "},source:{code:`// HAS_LINK and LINKED_PROPERTY filter definitions
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
/>`}}},render:e=>t.jsx(li,{...e})};function oi({filterState:e,onFilterStateChanged:n}){const r=l.useCallback(s=>{const a=s.target.value;n({type:"custom",customState:{value:a}})},[n]),i=l.useCallback(()=>{n({type:"custom",customState:{value:""}})},[n]);return t.jsxs("div",{style:{padding:"12px 0",display:"flex",gap:"8px"},children:[t.jsx("input",{type:"text",value:e.customState.value,onChange:r,placeholder:"Enter name substring...",style:{flex:1,padding:"6px 8px",fontSize:"14px",border:"1px solid #ccc",borderRadius:"4px"}}),e.customState.value&&t.jsx("button",{onClick:i,style:{padding:"6px 12px",fontSize:"12px",backgroundColor:"#f5f5f5",border:"1px solid #ccc",borderRadius:"4px",cursor:"pointer"},children:"Clear"})]})}function si(e){const[n,r]=l.useState(void 0),i=l.useMemo(()=>[{type:"CUSTOM",key:"custom-name-contains",label:"Name Contains",filterComponent:"CUSTOM",filterState:{type:"custom",customState:{value:""}},renderInput:({filterState:d,onFilterStateChanged:c})=>t.jsx(oi,{filterState:d,onFilterStateChanged:c}),toWhereClause:d=>{var m;const c=(m=d.customState)==null?void 0:m.value;if(c)return{fullName:{$containsAnyTerm:c}}}}],[]),s=e.onFilterClauseChanged,a=l.useCallback(d=>{r(d),s==null||s(d)},[s]);return t.jsxs("div",{style:Y,children:[t.jsx("div",{style:E,children:t.jsx(h,{objectType:p,filterDefinitions:i,...e,filterClause:n,onFilterClauseChanged:a})}),t.jsxs("div",{style:X,children:[t.jsx("strong",{children:"Filter Clause (JSON):"}),t.jsx("pre",{style:ne,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const Ae={name:"Custom Filters",parameters:{docs:{description:{story:"Custom filters provide full control over filtering logic and UI. The 'Name Contains' filter uses `renderInput` for a simple custom input. "},source:{code:`// Custom filter with renderInput
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
/>`}}},render:e=>t.jsx(si,{...e})},ai={type:"PROPERTY",id:"department-multi",key:"department",label:"Department",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}},ci={type:"PROPERTY",id:"department-single",key:"department",label:"Department (single)",filterComponent:"SINGLE_SELECT",filterState:{type:"SELECT",selectedValues:[]}},di=[$,ai,ci,Me],Le={name:"No value rendering",parameters:{docs:{description:{story:"Empty/null filter values render via the canonical `<NoValueLabel />` component — italic, muted, with the literal text 'No value' — across listogram buckets, single-select dropdown options, multi-select dropdown options, and multi-select chips. The mock dataset includes one Employee with `department: \"\"` so the No value row is visible in the listogram."}}},render:()=>t.jsx("div",{style:E,children:t.jsx(h,{objectType:p,filterDefinitions:di})})},ui={type:"PROPERTY",id:"locationCity-single",key:"locationCity",label:"Location City (single)",filterComponent:"SINGLE_SELECT",filterState:{type:"SELECT",selectedValues:[]}},pi={type:"LINKED_PROPERTY",linkName:"lead",linkedPropertyKey:"department",linkedFilterComponent:"MULTI_SELECT",linkedFilterState:{type:"SELECT",selectedValues:[]},filterState:{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:[]}},label:"Manager Department (linked multi)"},mi={type:"LINKED_PROPERTY",linkName:"lead",linkedPropertyKey:"locationCity",linkedFilterComponent:"SINGLE_SELECT",linkedFilterState:{type:"SELECT",selectedValues:[]},filterState:{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:[]}},label:"Manager City (linked single)"},fi=new Map([["department",{type:"EXACT_MATCH",values:["Marketing","Research"]}],["jobTitle-multi",{type:"SELECT",selectedValues:["Marketing Manager","Chief Scientist"]}],["locationCity-single",{type:"SELECT",selectedValues:["Berlin"]}],["linkedProperty:lead:department",{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:["Marketing","Research"]}}],["linkedProperty:lead:locationCity",{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:["Berlin"]}}]]),yi=[$,An,ui,pi,mi];function Ci(e){const n=Be(),r=l.useMemo(()=>n(p),[n]),[i,s]=l.useState(void 0),a=l.useCallback(d=>{s(d)},[]);return t.jsxs("div",{style:Y,children:[t.jsx("div",{style:E,children:t.jsx(h,{...e,objectType:p,objectSet:r,filterDefinitions:yi,initialFilterStates:fi,onFilterClauseChanged:a})}),t.jsxs("div",{style:X,children:[t.jsx("h4",{children:"Active where clause"}),t.jsx("pre",{style:ne,children:i?JSON.stringify(i,null,2):"(none)"})]})]})}const je={name:"With initial filter states",parameters:{docs:{description:{story:"Pass `initialFilterStates` to hydrate filters from saved state (e.g. localStorage or URL params). Selections are restored on mount, including values that currently have zero matching rows — they appear with a count of 0 so users can see and clear them. Demonstrated across LISTOGRAM, MULTI_SELECT, SINGLE_SELECT, and LINKED_PROPERTY filters."},source:{code:`// "Research", "Chief Scientist", and "Berlin" are not in the current
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
/>`}}},render:e=>t.jsx(Ci,{...e})};var Je,qe,Qe;ie.parameters={...ie.parameters,docs:{...(Je=ie.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Qe=(qe=ie.parameters)==null?void 0:qe.docs)==null?void 0:Qe.source}}};var Ze,et,tt;le.parameters={...le.parameters,docs:{...(Ze=le.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(tt=(et=le.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var nt,rt,it;oe.parameters={...oe.parameters,docs:{...(nt=oe.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(it=(rt=oe.parameters)==null?void 0:rt.docs)==null?void 0:it.source}}};var lt,ot,st;se.parameters={...se.parameters,docs:{...(lt=se.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
}`,...(st=(ot=se.parameters)==null?void 0:ot.docs)==null?void 0:st.source}}};var at,ct,dt;ae.parameters={...ae.parameters,docs:{...(at=ae.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(dt=(ct=ae.parameters)==null?void 0:ct.docs)==null?void 0:dt.source}}};var ut,pt,mt;ce.parameters={...ce.parameters,docs:{...(ut=ce.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(mt=(pt=ce.parameters)==null?void 0:pt.docs)==null?void 0:mt.source}}};var ft,yt,Ct;de.parameters={...de.parameters,docs:{...(ft=de.parameters)==null?void 0:ft.docs,source:{originalSource:`{
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
}`,...(Ct=(yt=de.parameters)==null?void 0:yt.docs)==null?void 0:Ct.source}}};var ht,St,Et;ue.parameters={...ue.parameters,docs:{...(ht=ue.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
}`,...(Et=(St=ue.parameters)==null?void 0:St.docs)==null?void 0:Et.source}}};var Tt,bt,gt;pe.parameters={...pe.parameters,docs:{...(Tt=pe.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
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
}`,...(gt=(bt=pe.parameters)==null?void 0:bt.docs)==null?void 0:gt.source}}};var vt,Ft,_t;me.parameters={...me.parameters,docs:{...(vt=me.parameters)==null?void 0:vt.docs,source:{originalSource:`{
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
}`,...(_t=(Ft=me.parameters)==null?void 0:Ft.docs)==null?void 0:_t.source}}};var Rt,At,Lt;fe.parameters={...fe.parameters,docs:{...(Rt=fe.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
}`,...(Lt=(At=fe.parameters)==null?void 0:At.docs)==null?void 0:Lt.source}}};var jt,Mt,It;ye.parameters={...ye.parameters,docs:{...(jt=ye.parameters)==null?void 0:jt.docs,source:{originalSource:`{
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
}`,...(It=(Mt=ye.parameters)==null?void 0:Mt.docs)==null?void 0:It.source}}};var kt,Dt,Ot;Ce.parameters={...Ce.parameters,docs:{...(kt=Ce.parameters)==null?void 0:kt.docs,source:{originalSource:`{
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
}`,...(Ot=(Dt=Ce.parameters)==null?void 0:Dt.docs)==null?void 0:Ot.source}}};var xt,Pt,Nt;he.parameters={...he.parameters,docs:{...(xt=he.parameters)==null?void 0:xt.docs,source:{originalSource:`{
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
}`,...(Nt=(Pt=he.parameters)==null?void 0:Pt.docs)==null?void 0:Nt.source}}};var wt,Vt,Bt;Se.parameters={...Se.parameters,docs:{...(wt=Se.parameters)==null?void 0:wt.docs,source:{originalSource:`{
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
}`,...(Bt=(Vt=Se.parameters)==null?void 0:Vt.docs)==null?void 0:Bt.source}}};var Ht,Wt,Gt;Ee.parameters={...Ee.parameters,docs:{...(Ht=Ee.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
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
}`,...(Gt=(Wt=Ee.parameters)==null?void 0:Wt.docs)==null?void 0:Gt.source}}};var Yt,Ut,Xt;Te.parameters={...Te.parameters,docs:{...(Yt=Te.parameters)==null?void 0:Yt.docs,source:{originalSource:`{
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
}`,...(Xt=(Ut=Te.parameters)==null?void 0:Ut.docs)==null?void 0:Xt.source}}};var Kt,zt,$t;be.parameters={...be.parameters,docs:{...(Kt=be.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
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
}`,...($t=(zt=be.parameters)==null?void 0:zt.docs)==null?void 0:$t.source}}};var Jt,qt,Qt;ge.parameters={...ge.parameters,docs:{...(Jt=ge.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
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
}`,...(Qt=(qt=ge.parameters)==null?void 0:qt.docs)==null?void 0:Qt.source}}};var Zt,en,tn;ve.parameters={...ve.parameters,docs:{...(Zt=ve.parameters)==null?void 0:Zt.docs,source:{originalSource:`{
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
}`,...(tn=(en=ve.parameters)==null?void 0:en.docs)==null?void 0:tn.source}}};var nn,rn,ln;Fe.parameters={...Fe.parameters,docs:{...(nn=Fe.parameters)==null?void 0:nn.docs,source:{originalSource:`{
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
}`,...(ln=(rn=Fe.parameters)==null?void 0:rn.docs)==null?void 0:ln.source}}};var on,sn,an;_e.parameters={..._e.parameters,docs:{...(on=_e.parameters)==null?void 0:on.docs,source:{originalSource:`{
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
}`,...(an=(sn=_e.parameters)==null?void 0:sn.docs)==null?void 0:an.source}}};var cn,dn,un;Re.parameters={...Re.parameters,docs:{...(cn=Re.parameters)==null?void 0:cn.docs,source:{originalSource:`{
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
}`,...(un=(dn=Re.parameters)==null?void 0:dn.docs)==null?void 0:un.source}}};var pn,mn,fn;Ae.parameters={...Ae.parameters,docs:{...(pn=Ae.parameters)==null?void 0:pn.docs,source:{originalSource:`{
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
}`,...(fn=(mn=Ae.parameters)==null?void 0:mn.docs)==null?void 0:fn.source}}};var yn,Cn,hn;Le.parameters={...Le.parameters,docs:{...(yn=Le.parameters)==null?void 0:yn.docs,source:{originalSource:`{
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
}`,...(hn=(Cn=Le.parameters)==null?void 0:Cn.docs)==null?void 0:hn.source}}};var Sn,En,Tn;je.parameters={...je.parameters,docs:{...(Sn=je.parameters)==null?void 0:Sn.docs,source:{originalSource:`{
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
}`,...(Tn=(En=je.parameters)==null?void 0:En.docs)==null?void 0:Tn.source}}};const Cl=["Default","IntegerNumberRangeRounding","WithObjectSet","AddFilterMode","WithAllFilterTypes","WithTitleAndIcon","WithResetButton","WithActiveFilterCount","WithSorting","CollapsiblePanel","KeywordSearch","WithColorMap","WithRenderValue","WithRenderValueAsReactNode","WithListogramDisplayModes","WithHiddenCounts","WithCheckbox","CombinedWithObjectTable","CombinedWithFilteredObjectSet","WithRemovableFilters","WithStaticValues","FullFeatured","WithHasLinkFilter","WithCustomFilters","NoValueRendering","WithInitialFilterStates"];export{se as AddFilterMode,me as CollapsiblePanel,ge as CombinedWithFilteredObjectSet,be as CombinedWithObjectTable,ie as Default,_e as FullFeatured,le as IntegerNumberRangeRounding,fe as KeywordSearch,Le as NoValueRendering,ue as WithActiveFilterCount,ae as WithAllFilterTypes,Te as WithCheckbox,ye as WithColorMap,Ae as WithCustomFilters,Re as WithHasLinkFilter,Ee as WithHiddenCounts,je as WithInitialFilterStates,Se as WithListogramDisplayModes,oe as WithObjectSet,ve as WithRemovableFilters,Ce as WithRenderValue,he as WithRenderValueAsReactNode,de as WithResetButton,pe as WithSorting,Fe as WithStaticValues,ce as WithTitleAndIcon,Cl as __namedExportsOrder,yl as default};
