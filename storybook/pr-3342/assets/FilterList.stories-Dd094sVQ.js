var Vn=Object.defineProperty;var Bn=(e,n,r)=>n in e?Vn(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r;var Oe=(e,n,r)=>Bn(e,typeof n!="symbol"?n+"":n,r);import{r as l,R as o,f as Hn,j as t}from"./iframe-DuVqCQ9Y.js";import{M as Wn,a as Gn,b as Yn,c as Un,d as Xn,e as Z,S as Kn}from"./MultiColumnSortDialog-Ue58lZz7.js";import{u as gn,O as zn,S as Ne,C as Ke,E as $n,R as vn,a as Fn,g as Jn,c as ze,s as qn,f as Qn,b as Zn,d as er,e as tr,F as nr,h as ee,i as rr,j as $e,k as ir}from"./getFilterLabel-B4DERZNe.js";import{c as V}from"./index-DUsGWmvk.js";import{u as lr,C as or,a as Je,P as sr,s as ar,K as cr,b as dr,c as ur,D as pr,d as mr,S as fr,v as yr,e as Cr}from"./DraggableList-BjuajZM0.js";import{B as G}from"./Button-DVFP8T0c.js";import{I as hr}from"./Input-BSnsWg-O.js";import{w as Sr}from"./withOsdkMetrics-D9ycNzlj.js";import{O as Be}from"./object-table-o4bESaRa.js";import{E as f}from"./Employee-BAk2o20h.js";import{u as He}from"./useOsdkClient-xuN2-A0r.js";import"./preload-helper-Dp1pzeXC.js";import"./ActionButton-BriqExXY.js";import"./Dialog-a5pWDL09.js";import"./cross-BHZFXa2C.js";import"./svgIconContainer-CpDyVwKR.js";import"./useBaseUiId-C52SIdJF.js";import"./InternalBackdrop-DzWWNKiw.js";import"./composite-C1USiBfe.js";import"./index-CRbZp6L0.js";import"./index-DLo6CZ5S.js";import"./index-BiR_x4ZX.js";import"./ToolbarRootContext-ClJbZpTE.js";import"./getPseudoElementBounds-DFoNrtmz.js";import"./useCompositeListItem-D-ombNlk.js";import"./CompositeItem-CapoO8lR.js";import"./getDisabledMountTransitionStyles-CHgDpiP2.js";import"./useFocus-CvUWYuj8.js";import"./caret-down-BdThZL3S.js";import"./useValueChanged-DpL5SrmB.js";import"./Switch-QPsdHGs7.js";import"./toNumber-a-v12rnK.js";import"./PopoverPopup-lJvr3KLR.js";import"./useControlled-B0_0JJXK.js";import"./assertUnreachable-tCT10eXl.js";import"./index-BtwbpoEL.js";import"./Checkbox-t5mR2M6J.js";import"./minus-Bt97TENS.js";import"./SkeletonBar-CSfoeWfb.js";import"./makeExternalStore-B76mClPQ.js";import"./small-cross-BgkCuy1M.js";import"./useRegisterUserAgent-DtBi-D8g.js";import"./Table-C3nTKAqo.js";import"./LoadingCell-aZz7cmz2.js";import"./ColumnConfigDialog-Bvh0T0Io.js";import"./CollapsiblePanel-BNckUWLt.js";import"./chevron-down-CARqZdRO.js";import"./index-c18zNpXk.js";import"./error-glRmYmUa.js";import"./Tooltip-DVwZBv8S.js";import"./useEventCallback-CVc05yBX.js";const W={filterList:"FilterList-module__filterList___wmzCNbkH",filterListCollapsed:"FilterList-module__filterListCollapsed___CGrK9txF",expandedContent:"FilterList-module__expandedContent___aEk2i2At",scrollableContent:"FilterList-module__scrollableContent___F3O1nfAo",hiddenContent:"FilterList-module__hiddenContent___PHKe-yWc",expandButton:"FilterList-module__expandButton___-QlY8-ot",collapsedLabel:"FilterList-module__collapsedLabel___QA0UtRts",addButtonContainer:"FilterList-module__addButtonContainer___kq300FEV",addButton:"FilterList-module__addButton___oD4yvwyZ"},re={content:"FilterListContent-module__content___fG0EgVp6",dragOverlay:"FilterListContent-module__dragOverlay___Tjd1YpmI"},xe={errorContainer:"ErrorBoundary-module__errorContainer___FIguBDDu",errorMessage:"ErrorBoundary-module__errorMessage___jUsXUqFA",retryButton:"ErrorBoundary-module__retryButton___PZVWZOm7"};class Er extends l.Component{constructor(){super(...arguments);Oe(this,"state",{hasError:!1,error:null});Oe(this,"handleRetry",()=>{this.setState({hasError:!1,error:null})})}static getDerivedStateFromError(r){return{hasError:!0,error:r}}componentDidCatch(r,i){var s,a;console.error("[ErrorBoundary]",r),console.error("[ErrorBoundary] Component stack:",i.componentStack),(a=(s=this.props).onError)==null||a.call(s,r)}render(){return this.state.hasError?this.props.fallback?this.props.fallback:o.createElement("div",{className:xe.errorContainer},o.createElement("p",{className:xe.errorMessage},this.props.errorMessage??"Something went wrong"),o.createElement(G,{className:xe.retryButton,onClick:this.handleRetry,"aria-label":"Retry"},"Retry")):this.props.children}}function Tr(){return o.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true"},o.createElement("circle",{cx:"5.5",cy:"3.5",r:"1.5"}),o.createElement("circle",{cx:"10.5",cy:"3.5",r:"1.5"}),o.createElement("circle",{cx:"5.5",cy:"8",r:"1.5"}),o.createElement("circle",{cx:"10.5",cy:"8",r:"1.5"}),o.createElement("circle",{cx:"5.5",cy:"12.5",r:"1.5"}),o.createElement("circle",{cx:"10.5",cy:"12.5",r:"1.5"}))}const x={filterItem:"FilterListItem-module__filterItem___fDBkbb7u",itemHeader:"FilterListItem-module__itemHeader___jp4epXg-",itemLabel:"FilterListItem-module__itemLabel___cEnbqE59",itemContent:"FilterListItem-module__itemContent___PfVHHhIy",dragHandle:"FilterListItem-module__dragHandle___BwFrILWs",headerActionButton:"FilterListItem-module__headerActionButton___x10Z2Kx0",headerActionButtonStart:"FilterListItem-module__headerActionButtonStart___pXCVAPBj",searchRow:"FilterListItem-module__searchRow___4fUrAgAm",searchInput:"FilterListItem-module__searchInput___v-qwznpk",searchClearButton:"FilterListItem-module__searchClearButton___HXHweIEa",dragging:"FilterListItem-module__dragging___S5-LGyfS"},k={positioner:"ItemOverflowMenu-module__positioner___AenWl-N6",popup:"ItemOverflowMenu-module__popup___-UKeMPCq",menuItem:"ItemOverflowMenu-module__menuItem___vc6O1UzQ",menuItemAction:"ItemOverflowMenu-module__menuItemAction___9Zt1Pu6e",menuItemIcon:"ItemOverflowMenu-module__menuItemIcon___nNdz87xj",separator:"ItemOverflowMenu-module__separator___yY4sT-wM"};function br({triggerClassName:e,triggerAriaLabel:n,filterLabel:r,showSearchInMenu:i,onSearchInMenu:s,showKeepExclude:a,isExcluding:d,onToggleExclude:c,showClearAll:p,onClearAll:E,showRemove:v,onRemove:_}){const j=gn();return!i&&!a&&!p&&!v?null:o.createElement(Wn,null,o.createElement(Gn,{className:e,"aria-label":n},o.createElement(zn,null)),o.createElement(Yn,null,o.createElement(Un,{className:k.positioner,sideOffset:4,align:"end",collisionBoundary:j},o.createElement(Xn,{className:k.popup},i&&o.createElement(o.Fragment,null,o.createElement(Z,{className:k.menuItem,onClick:s},o.createElement("span",{className:k.menuItemIcon},o.createElement(Ne,null)),"Search values"),(a||p||v)&&o.createElement("div",{className:k.separator})),a&&o.createElement(o.Fragment,null,o.createElement(Z,{className:k.menuItem,onClick:d?c:void 0,"data-active":!d||void 0},o.createElement("span",{className:k.menuItemIcon},!d&&o.createElement(Ke,null)),"Keep matching values"),o.createElement(Z,{className:k.menuItem,onClick:d?void 0:c,"data-active":d||void 0},o.createElement("span",{className:k.menuItemIcon},d?o.createElement(Ke,null):o.createElement($n,null)),"Exclude matching values"),(p||v)&&o.createElement("div",{className:k.separator})),p&&o.createElement(Z,{className:V(k.menuItem,k.menuItemAction),onClick:E},o.createElement("span",{className:k.menuItemIcon},o.createElement(vn,null)),"Clear all selections"),v&&o.createElement(Z,{className:V(k.menuItem,k.menuItemAction),onClick:_,"aria-label":`Remove ${r} filter`},o.createElement("span",{className:k.menuItemIcon},o.createElement(Fn,null)),"Remove filter")))))}const gr=l.memo(br);function we(){return we=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},we.apply(null,arguments)}function vr(e,n,r){if(!Zn(e))return"hidden";const i=r==null?void 0:r.search;return i===!1?"hidden":i==="header-start"||i==="header-end"||i==="menu"?i:i===void 0&&n===!1?"hidden":(r==null?void 0:r.placement)??"header-end"}function Fr({definition:e,filterKey:n,label:r,filterState:i,onFilterStateChanged:s,onFilterRemoved:a,renderInput:d,searchField:c,controls:p,dragHandleAttributes:E,dragHandleListeners:v,className:_,style:j}){const[R,h]=l.useState({type:"closed"}),D=l.useCallback(M=>{s(n,M)},[n,s]),u=l.useCallback(()=>{h(M=>M.type==="closed"?{type:"open",query:""}:{type:"closed"})},[]),y=l.useCallback(M=>{h({type:"open",query:M.target.value})},[]),b=l.useCallback(()=>{h({type:"open",query:""})},[]),g=l.useCallback(()=>{a==null||a(n)},[n,a]),A=l.useMemo(()=>Jn(i),[i]),U=(A==null?void 0:A.isExcluding)??!1,B=l.useCallback(()=>{if(i!=null){if(i.type==="linkedProperty"){const M=i.linkedFilterState;s(n,{type:"linkedProperty",linkedFilterState:{...M,isExcluding:!M.isExcluding}});return}s(n,{...i,isExcluding:!i.isExcluding})}},[n,i,s]),X=l.useCallback(()=>{const M=ze(i);M!=null&&s(n,M)},[n,i,s]),O=l.useCallback(M=>{M==null||M.focus({preventScroll:!0})},[]),H=vr(A,c,p),m=(p==null?void 0:p.overflow)!==!1,T=m&&qn(A),F=Qn(i),L=m&&F&&ze(i)!=null,P=m&&a!=null&&(p==null?void 0:p.remove)!==!1,N=R.type==="open",K=R.type==="open"?R.query:"",Ie=R.type==="open"?R.query:void 0;return o.createElement("div",{className:V(x.filterItem,_),style:j,"data-has-selection":F||void 0},o.createElement("div",{className:x.itemHeader},E&&o.createElement(G,we({className:x.dragHandle,"aria-label":`Reorder ${r}`},E,v),o.createElement(Tr,null)),H==="header-start"&&o.createElement(G,{className:V(x.headerActionButton,x.headerActionButtonStart),onClick:u,"aria-label":"Search values","aria-pressed":N},o.createElement(Ne,null)),o.createElement("span",{className:x.itemLabel},r),H==="header-end"&&o.createElement(G,{className:x.headerActionButton,onClick:u,"aria-label":"Search values","aria-pressed":N},o.createElement(Ne,null)),o.createElement(gr,{triggerClassName:x.headerActionButton,triggerAriaLabel:"More actions",filterLabel:r,showSearchInMenu:m&&H==="menu",onSearchInMenu:u,showKeepExclude:T,isExcluding:U,onToggleExclude:B,showClearAll:L,onClearAll:X,showRemove:P,onRemove:g})),N&&o.createElement("div",{className:x.searchRow},o.createElement(hr,{type:"text",className:x.searchInput,value:K,onChange:y,placeholder:"Search property values...","aria-label":"Search property values",ref:O}),K&&o.createElement(G,{type:"button",className:x.searchClearButton,onClick:b,"aria-label":"Clear search"},o.createElement(Fn,null))),o.createElement("div",{className:x.itemContent},o.createElement(Er,{errorMessage:"Error loading filter"},d({definition:e,filterKey:n,filterState:i,onFilterStateChanged:D,searchQuery:Ie,excludeRowOpen:!1}))))}const Ve=l.memo(Fr);function _r({id:e,definition:n,filterKey:r,label:i,filterState:s,onFilterStateChanged:a,onFilterRemoved:d,renderInput:c,searchField:p,controls:E}){const{attributes:v,listeners:_,setNodeRef:j,transform:R,transition:h,isDragging:D}=lr({id:e}),u=l.useMemo(()=>({transform:or.Transform.toString(R),transition:h??void 0}),[R,h]);return o.createElement("div",{ref:j,style:u,className:V(D&&x.dragging)},o.createElement(Ve,{definition:n,filterKey:r,label:i,filterState:s,onFilterStateChanged:a,onFilterRemoved:d,renderInput:c,searchField:p,controls:E,dragHandleAttributes:v,dragHandleListeners:_}))}const Rr=l.memo(_r),Ar=({transform:e})=>({...e,x:0}),Lr={distance:8},jr=[Ar],Mr={role:"button",tabIndex:-1,"aria-disabled":!0,"aria-pressed":void 0,"aria-roledescription":"sortable","aria-describedby":""},Pe={};function Ir({filterDefinitions:e,filterStates:n,onFilterStateChanged:r,onFilterRemoved:i,onOrderChange:s,renderInput:a,getFilterKey:d,getFilterLabel:c,getFilterControls:p,enableSorting:E,className:v,style:_}){const[j,R]=l.useState(null),h=l.useMemo(()=>E&&e?e.map(m=>d(m)):[],[E,e,d]),D=Je(sr,{activationConstraint:Lr}),u=Je(cr,{coordinateGetter:ar}),y=dr(D,u),b=j!=null?h.indexOf(String(j)):-1,g=b>=0&&e?e[b]:void 0,A=l.useMemo(()=>g?d(g):void 0,[g,d]),U=l.useCallback(m=>{R(m.active.id)},[]),B=l.useCallback(m=>{R(null);const{active:T,over:F}=m;if(!F||T.id===F.id)return;const L=h.indexOf(String(T.id)),P=h.indexOf(String(F.id));if(L!==-1&&P!==-1){const N=ur(h,L,P);s==null||s(N)}},[h,s]),X=l.useCallback(()=>{R(null)},[]),O=l.useMemo(()=>({onDragStart({active:m}){const T=h.indexOf(String(m.id)),F=T>=0&&e?e[T]:void 0;return`Picked up ${F?c(F):"filter"} filter`},onDragOver({over:m}){return m?`Moved to position ${h.indexOf(String(m.id))+1} of ${h.length}`:"Not over a droppable area"},onDragEnd({active:m,over:T}){const F=h.indexOf(String(m.id)),L=F>=0&&e?e[F]:void 0,P=L?c(L):"filter";if(T&&m.id!==T.id){const N=h.indexOf(String(T.id));return`Dropped ${P} filter at position ${N+1}`}return`Dropped ${P} filter back in its original position`},onDragCancel({active:m}){const T=h.indexOf(String(m.id)),F=T>=0&&e?e[T]:void 0;return`Cancelled dragging ${F?c(F):"filter"} filter`}}),[e,h,c]),H=l.useMemo(()=>({announcements:O}),[O]);return!e||e.length===0?o.createElement("div",{className:V(re.content,v),style:_,"data-empty":"true"}):E?o.createElement("div",{className:V(re.content,v),style:_},o.createElement(pr,{sensors:y,collisionDetection:mr,modifiers:jr,onDragStart:U,onDragEnd:B,onDragCancel:X,accessibility:H},o.createElement(fr,{items:h,strategy:yr},e.map((m,T)=>{const F=h[T],L=d(m),P=c(m),N=n.get(L),K=p?p(m):Pe;return o.createElement(Rr,{key:F,id:F,definition:m,filterKey:L,label:P,filterState:N,onFilterStateChanged:r,onFilterRemoved:i,renderInput:a,searchField:K.searchField,controls:K.controls})})),o.createElement(Cr,{dropAnimation:null,className:re.dragOverlay},g&&A&&(()=>{const m=p?p(g):Pe;return o.createElement(Ve,{definition:g,filterKey:A,label:c(g),filterState:n.get(A),onFilterStateChanged:r,onFilterRemoved:i,renderInput:a,searchField:m.searchField,controls:m.controls,dragHandleAttributes:Mr})})()))):o.createElement("div",{className:V(re.content,v),style:_},e.map(m=>{const T=d(m),F=n.get(T),L=p?p(m):Pe;return o.createElement(Ve,{key:T,definition:m,filterKey:T,label:c(m),filterState:F,onFilterStateChanged:r,onFilterRemoved:i,renderInput:a,searchField:L.searchField,controls:L.controls})}))}const z={header:"FilterListHeader-module__header___dkKc0CO-",titleContainer:"FilterListHeader-module__titleContainer___KaePpQIx",title:"FilterListHeader-module__title___xqfWfSzK",titleIcon:"FilterListHeader-module__titleIcon___MQy-dec8",activeCount:"FilterListHeader-module__activeCount___GyBsnsQL",actions:"FilterListHeader-module__actions___YZA7zmGc",collapseButton:"FilterListHeader-module__collapseButton___N1-sj3B3",resetButton:"FilterListHeader-module__resetButton___jLcUypov"};function kr({title:e,titleIcon:n,collapsed:r=!1,onCollapsedChange:i,showResetButton:s,onReset:a,showActiveFilterCount:d,activeFilterCount:c=0,hasVisibilityChanges:p=!1}){const E=l.useCallback(()=>{i==null||i(!r)},[i,r]);return o.createElement("div",{className:z.header},o.createElement("div",{className:z.titleContainer},n&&o.createElement("span",{className:z.titleIcon},n),e&&o.createElement("span",{className:z.title},e),d&&c>0&&o.createElement("span",{className:z.activeCount},"(",c,")")),o.createElement("div",{className:z.actions},s&&o.createElement(G,{className:z.resetButton,onClick:a,disabled:c===0&&!p},o.createElement(vn,null)," Reset filters"),i!=null&&o.createElement(G,{className:z.collapseButton,onClick:E,"aria-expanded":!r,"aria-label":r?"Expand filters":"Collapse filters"},o.createElement(er,null))))}const Dr=l.memo(kr);function Or(e){const{title:n,titleIcon:r,collapsed:i=!1,onCollapsedChange:s,filterDefinitions:a,filterStates:d,onFilterStateChanged:c,renderInput:p,getFilterKey:E,getFilterLabel:v,getFilterControls:_,activeFilterCount:j,onReset:R,onFilterAdded:h,onFilterRemoved:D,onOrderChange:u,showResetButton:y=!1,showActiveFilterCount:b=!1,hasVisibilityChanges:g,enableSorting:A,className:U,renderAddFilterButton:B}=e,[X,O]=l.useState(null),H=l.useCallback(()=>{s==null||s(!1)},[s]),m=i&&s!=null;return o.createElement("div",{className:V(W.filterList,U)},m&&o.createElement("div",{className:W.filterListCollapsed,"data-collapsed":"true"},o.createElement(G,{className:W.expandButton,onClick:H,"aria-label":"Expand filters"},o.createElement(tr,null)),o.createElement("span",{className:W.collapsedLabel},n??"Filters")),o.createElement("div",{ref:O,className:V(W.expandedContent,m&&W.hiddenContent),"data-active-count":j},o.createElement(nr,{value:X},(n||r||y||b||s)&&o.createElement(Dr,{title:n,titleIcon:r,collapsed:i,onCollapsedChange:s,showResetButton:y,onReset:R,showActiveFilterCount:b,activeFilterCount:j,hasVisibilityChanges:g}),o.createElement("div",{className:W.scrollableContent},o.createElement(Ir,{filterDefinitions:a,filterStates:d,onFilterStateChanged:c,onFilterRemoved:D,onOrderChange:u,renderInput:p,getFilterKey:E,getFilterLabel:v,getFilterControls:_,enableSorting:A})),(B!=null||h!=null)&&o.createElement("div",{className:W.addButtonContainer},B?B():o.createElement(G,{type:"button",className:W.addButton,onClick:h},"+ Add filter")))))}const xr={trigger:"AddFilterPopover-module__trigger___8QQBrzPo"};function Pr({hiddenDefinitions:e,onShowFilter:n,renderTrigger:r}){const i=gn();return o.createElement(Kn,{items:e,onItemSelected:n,trigger:r!=null?r():"+ Add filter",triggerClassName:r==null?xr.trigger:void 0,searchPlaceholder:"Search filters",emptyMessage:"No matching filters",collisionBoundary:i})}const Nr=l.memo(Pr);function wr(e,n){const r=l.useMemo(()=>(e==null?void 0:e.map(ee))??[],[e]),i=l.useMemo(()=>(e==null?void 0:e.filter(u=>u.isVisible!==!1).map(ee))??[],[e]),[s,a]=l.useState(()=>i);l.useEffect(()=>{a(i)},[i]);const d=l.useRef(n);d.current=n;const c=l.useCallback(u=>{if(!d.current)return;const y=new Set(u),b=r.filter(g=>!y.has(g));d.current(u,b)},[r]),p=l.useMemo(()=>{const u=new Map;if(e==null)return u;for(const y of e)u.set(ee(y),y);return u},[e]),{visibleDefinitions:E,hiddenDefinitions:v}=l.useMemo(()=>{if(e==null)return{visibleDefinitions:[],hiddenDefinitions:[]};const u=new Set(s),y=[],b=[];for(const g of s){const A=p.get(g);A!=null&&y.push(A)}for(const g of r)if(!u.has(g)){const A=p.get(g);A!=null&&b.push(A)}return{visibleDefinitions:y,hiddenDefinitions:b}},[e,p,s,r]),_=l.useCallback(u=>{a(y=>{if(y.includes(u))return y;const b=[...y,u];return c(b),b})},[c]),j=l.useCallback(u=>{a(y=>{const b=y.filter(g=>g!==u);return c(b),b})},[c]),R=l.useCallback(u=>{a(y=>u.length===y.length&&u.every((b,g)=>b===y[g])?y:(c(u),u))},[c]),h=l.useCallback(()=>{a(u=>i.length===u.length&&i.every((y,b)=>y===u[b])?u:(c(i),i))},[i,c]),D=l.useMemo(()=>s.length!==i.length?!0:!s.every((u,y)=>u===i[y]),[s,i]);return{visibleDefinitions:E,hiddenDefinitions:v,showFilter:_,hideFilter:j,reorderVisible:R,hasVisibilityChanges:D,resetVisibility:h}}function Vr(e){return{searchField:e.searchField,controls:e.controls}}function Br(e){const{objectType:n,objectSet:r,title:i,titleIcon:s,collapsed:a,onCollapsedChange:d,filterDefinitions:c,addFilterMode:p="uncontrolled",showResetButton:E=!1,onReset:v,showActiveFilterCount:_=!1,className:j,enableSorting:R,onFilterAdded:h,onFilterRemoved:D,onFilterVisibilityChange:u,renderAddFilterButton:y}=e,{filterStates:b,setFilterState:g,clearFilterState:A,perFilterWhereClauses:U,activeFilterCount:B,reset:X}=rr(e),O=p==="uncontrolled",H=l.useCallback((I,ke)=>{if(!u)return;const De=[...I.map(Q=>({filterKey:Q,isVisible:!0})),...ke.map(Q=>({filterKey:Q,isVisible:!1}))];u(De)},[u]),{visibleDefinitions:m,hiddenDefinitions:T,showFilter:F,hideFilter:L,reorderVisible:P,hasVisibilityChanges:N,resetVisibility:K}=wr(c,O?H:void 0),Ie=l.useCallback(()=>{X(),K(),v==null||v()},[X,K,v]),M=l.useMemo(()=>{if(c!=null)return c.filter(I=>I.isVisible!==!1)},[c]),In=O?m:M,kn=l.useCallback(I=>{A(I),O&&L(I),D==null||D(I)},[A,O,L,D]),Ue=l.useCallback(I=>{F(I),h==null||h(I,c??[])},[F,h,c]),Dn=l.useCallback(I=>{P(I)},[P]),Xe=l.useMemo(()=>T.map(I=>({key:ee(I),label:$e(I)})),[T]),On=l.useMemo(()=>O?T.length===0?void 0:()=>o.createElement(Nr,{hiddenDefinitions:Xe,onShowFilter:Ue,renderTrigger:y}):y,[O,T.length,Xe,Ue,y]),xn=O?kn:D,Pn=l.useCallback(({definition:I,filterKey:ke,filterState:De,onFilterStateChanged:Q,searchQuery:Nn,excludeRowOpen:wn})=>o.createElement(ir,{objectType:n,objectSet:r,definition:I,filterState:De,onFilterStateChanged:Q,whereClause:U.get(ke)??{},searchQuery:Nn,excludeRowOpen:wn}),[n,r,U]);return o.createElement(Or,{title:i,titleIcon:s,collapsed:a,onCollapsedChange:d,filterDefinitions:In,filterStates:b,onFilterStateChanged:g,renderInput:Pn,getFilterKey:ee,getFilterLabel:$e,getFilterControls:Vr,activeFilterCount:B,onReset:Ie,showResetButton:E,showActiveFilterCount:_,hasVisibilityChanges:N,enableSorting:R,onFilterRemoved:xn,onOrderChange:Dn,className:j,renderAddFilterButton:On})}const C=Sr(Br,"FilterList"),{useArgs:_n}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:J}=__STORYBOOK_MODULE_TEST__,q={type:"PROPERTY",id:"department",key:"department",label:"Department",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},We={type:"PROPERTY",id:"team",key:"team",label:"Team",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},Rn={type:"PROPERTY",id:"fullName",key:"fullName",label:"Full Name",filterComponent:"CONTAINS_TEXT",filterState:{type:"CONTAINS_TEXT"}},An={type:"PROPERTY",id:"firstFullTimeStartDate",key:"firstFullTimeStartDate",label:"Start Date",filterComponent:"DATE_RANGE",filterState:{type:"DATE_RANGE"},clickToFilter:!0},Me={type:"PROPERTY",id:"employeeNumber",key:"employeeNumber",label:"Employee Number",filterComponent:"NUMBER_RANGE",filterState:{type:"NUMBER_RANGE"},clickToFilter:!0},te={type:"PROPERTY",id:"locationCity",key:"locationCity",label:"Location City",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},Ln={type:"PROPERTY",id:"jobTitle-multi",key:"jobTitle",label:"Job Title",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}},w=[q,We,Rn,An,Ln,Me,te],S={width:320,height:600},Y={display:"flex",gap:16},$={flex:1},ne={marginTop:8,padding:12,background:"#f5f5f5",borderRadius:4,fontSize:12,overflow:"auto",maxHeight:560},Ge={display:"flex",gap:16,height:600},Ye={width:320,flexShrink:0},jn=t.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:t.jsx("path",{d:"M1 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1.5a1 1 0 0 1-.293.707L10 8.914V13a1 1 0 0 1-.553.894l-2 1A1 1 0 0 1 6 14v-5.086L1.293 4.207A1 1 0 0 1 1 3.5V2z"})}),hl={title:"Beta/FilterList",component:C,args:{title:"Filters",enableSorting:!1,showResetButton:!1,showActiveFilterCount:!1,collapsed:!1,onFilterClauseChanged:J(),onFilterStateChanged:J(),onFilterAdded:J(),onFilterRemoved:J(),onFilterVisibilityChange:J(),onCollapsedChange:J(),onReset:J()},parameters:{msw:{handlers:[...Hn.handlers]},controls:{expanded:!0}},argTypes:{objectType:{description:"The object type definition for the objects being filtered",control:!1},objectSet:{description:"Optional object set to scope aggregation queries",control:!1},filterDefinitions:{description:"Array of filter definitions. If not provided, all filterable properties are auto-discovered.",control:!1},title:{description:"Title displayed in the filter list header",control:"text"},titleIcon:{description:"Icon displayed next to the title",control:!1},filterClause:{description:"The current where clause. If provided, the filter clause is controlled.",control:!1},onFilterClauseChanged:{description:"Called when the filter clause changes. Required in controlled mode.",control:!1,table:{category:"Events"}},onFilterStateChanged:{description:"Called when an individual filter's state changes",control:!1,table:{category:"Events"}},enableSorting:{description:"Enable drag-and-drop reordering of filters",control:"boolean",table:{defaultValue:{summary:"false"}}},collapsed:{description:"Whether the filter list panel is collapsed",control:"boolean"},onCollapsedChange:{description:"Called when the collapsed state changes",control:!1,table:{category:"Events"}},showResetButton:{description:"Show reset filters button in header",control:"boolean",table:{defaultValue:{summary:"false"}}},onReset:{description:"Called when the reset button is clicked",control:!1,table:{category:"Events"}},showActiveFilterCount:{description:"Show count of active filters in header",control:"boolean",table:{defaultValue:{summary:"false"}}},onFilterAdded:{description:"Called when a filter is added. If provided, users can add filters.",control:!1,table:{category:"Events"}},onFilterRemoved:{description:"Called when a filter is removed. If provided, users can remove filters.",control:!1,table:{category:"Events"}},onFilterVisibilityChange:{description:"Called when filter visibility or ordering changes (reorder, add, remove).",control:!1,table:{category:"Events"}},addFilterMode:{description:'Controls how filter add/remove is managed. "uncontrolled" manages visibility internally; "controlled" leaves it to the consumer.',control:"select",options:["controlled","uncontrolled"],table:{category:"Advanced",defaultValue:{summary:'"uncontrolled"'}}},renderAddFilterButton:{description:"Custom render function for the add filter button.",control:!1,table:{category:"Advanced"}},initialFilterStates:{description:"Initial filter states for hydrating from external storage. Merged over definition defaults on mount.",control:!1,table:{category:"Advanced"}},className:{description:"Additional CSS class name",control:"text"}}},ie={parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:({objectType:e,objectSet:n,...r})=>{const i=l.useMemo(()=>[q,te],[]);return t.jsx("div",{style:S,children:t.jsx(C,{objectType:f,filterDefinitions:i,...r})})}},le={parameters:{docs:{description:{story:"Repro for the integer-typed `NUMBER_RANGE` rounding fix. `employeeNumber` is an `integer` property, so histogram bucket boundaries — `(maxValue - minValue) / 20` — are usually fractional. Click any bar in the histogram. The Min/Max boxes must show whole integers (e.g. `657495073`), not fractional values (e.g. `657495073.4`)."}}},render:({objectType:e,objectSet:n,...r})=>{const i=l.useMemo(()=>[Me],[]);return t.jsx("div",{style:S,children:t.jsx(C,{objectType:f,filterDefinitions:i,...r})})}};function Hr(e){const n=He(),r=l.useMemo(()=>n(f).where({department:"Marketing"}),[n]),i=l.useMemo(()=>[We,te],[]);return t.jsx("div",{style:S,children:t.jsx(C,{objectType:f,objectSet:r,filterDefinitions:i,...e})})}const oe={parameters:{docs:{description:{story:"Pass an `objectSet` prop to scope filter aggregations to a subset of objects. Here the object set is filtered to Marketing department employees, so the listogram counts reflect only that subset."},source:{code:`const client = useOsdkClient();
const objectSet = client(Employee).where({ department: "Marketing" });

<FilterList
  objectType={Employee}
  objectSet={objectSet}
  filterDefinitions={[
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:e=>t.jsx(Hr,{...e})};function Wr(e){const n=l.useMemo(()=>[q,We,{...Rn,isVisible:!1},{...An,isVisible:!1},{...Me,isVisible:!1},{...te,isVisible:!1}],[]);return t.jsx("div",{style:S,children:t.jsx(C,{objectType:f,filterDefinitions:n,addFilterMode:"uncontrolled",...e})})}const se={args:{showResetButton:!0},parameters:{docs:{source:{code:`const filterDefinitions = [
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
/>`}}},render:e=>t.jsx(Wr,{...e})};function Gr(e){const[n,r]=l.useState(void 0),i=e.onFilterClauseChanged,s=l.useCallback(a=>{r(a),i==null||i(a)},[i]);return t.jsxs("div",{style:Y,children:[t.jsx("div",{style:S,children:t.jsx(C,{objectType:f,filterDefinitions:w,...e,filterClause:n,onFilterClauseChanged:s})}),t.jsxs("div",{style:$,children:[t.jsx("strong",{children:"Filter Clause (JSON):"}),t.jsx("pre",{style:ne,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const ae={parameters:{docs:{description:{story:"All filter component types with a controlled where clause. Hover filter items to reveal search and exclude actions."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>`}}},render:e=>t.jsx(Gr,{...e})},ce={args:{title:"Employee Filters"},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  titleIcon={<svg>...</svg>}
/>`}}},render:({objectType:e,objectSet:n,...r})=>t.jsx("div",{style:S,children:t.jsx(C,{objectType:f,filterDefinitions:w,titleIcon:jn,...r})})};function Yr(e){const n=e.onReset,r=l.useCallback(()=>{console.log("Reset clicked"),n==null||n()},[n]);return t.jsx("div",{style:S,children:t.jsx(C,{objectType:f,filterDefinitions:w,...e,onReset:r})})}const de={args:{showResetButton:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showResetButton={true}
  onReset={() => console.log("Reset clicked")}
/>`}}},render:e=>t.jsx(Yr,{...e})},ue={args:{showActiveFilterCount:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showActiveFilterCount={true}
/>`}}},render:({objectType:e,objectSet:n,...r})=>t.jsx("div",{style:S,children:t.jsx(C,{objectType:f,filterDefinitions:w,...r})})},pe={args:{enableSorting:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  enableSorting={true}
/>`}}},render:({objectType:e,objectSet:n,...r})=>t.jsx("div",{style:S,children:t.jsx(C,{objectType:f,filterDefinitions:w,...r})})};function Ur(e){return t.jsx("div",{style:S,children:t.jsx(C,{objectType:f,filterDefinitions:w,...e})})}const me={args:{title:"Employee Filters",showActiveFilterCount:!0},parameters:{docs:{description:{story:"Click the collapse button to minimize the filter panel. Active filter count is shown in the collapsed state."},source:{code:`const [collapsed, setCollapsed] = useState(false);

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  collapsed={collapsed}
  onCollapsedChange={setCollapsed}
  showActiveFilterCount={true}
/>`}}},render:e=>{const[,n]=_n(),r=e.onCollapsedChange,i=l.useCallback(s=>{n({collapsed:s}),r==null||r(s)},[n,r]);return t.jsx(Ur,{...e,onCollapsedChange:i})}},fe={parameters:{docs:{source:{code:`const filterDefinitions = [
  { type: "KEYWORD_SEARCH", properties: ["fullName", "department", "jobTitle", "locationCity"], label: "Search" },
  { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:({objectType:e,objectSet:n,...r})=>{const i=l.useMemo(()=>[{type:"KEYWORD_SEARCH",properties:["fullName","department","jobTitle","locationCity"],label:"Search"},q,te],[]);return t.jsx("div",{style:S,children:t.jsx(C,{objectType:f,filterDefinitions:i,...r})})}};function Xr(e){const n=l.useMemo(()=>[{type:"PROPERTY",id:"department-no-color",key:"department",label:"Department (default colors)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]),r=l.useMemo(()=>[{type:"PROPERTY",id:"department-color",key:"department",label:"Department (custom colors)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},colorMap:{Marketing:"#e74c3c",Operations:"#2ecc71",Finance:"#3498db",Product:"#f39c12"}}],[]);return t.jsxs("div",{style:Y,children:[t.jsx("div",{style:S,children:t.jsx(C,{objectType:f,filterDefinitions:n,...e})}),t.jsx("div",{style:S,children:t.jsx(C,{objectType:f,filterDefinitions:r,...e})})]})}const ye={parameters:{docs:{source:{code:`// Without colorMap: all bars use the default theme color
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

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>t.jsx(Xr,{...e})},Mn={Marketing:"Marketing Dept.",Operations:"Ops Team",Finance:"Finance & Accounting",Product:"Product Group"};function Kr(e){const n=l.useMemo(()=>[{type:"PROPERTY",id:"department-default",key:"department",label:"Department (default)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]),r=l.useMemo(()=>[{type:"PROPERTY",id:"department-custom",key:"department",label:"Department (custom render)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},renderValue:i=>Mn[i]??i},{type:"PROPERTY",id:"team-custom",key:"team",label:"Team (custom render)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},renderValue:i=>i.toUpperCase()}],[]);return t.jsxs("div",{style:Y,children:[t.jsx("div",{style:S,children:t.jsx(C,{objectType:f,filterDefinitions:n,...e})}),t.jsx("div",{style:S,children:t.jsx(C,{objectType:f,filterDefinitions:r,...e})})]})}const Ce={parameters:{docs:{description:{story:"Use `renderValue` to customize how filter values are displayed and searched. The returned string replaces the raw value for display and search matching. Works with LISTOGRAM, MULTI_SELECT, and SINGLE_SELECT components."},source:{code:`const DEPARTMENT_LABELS = {
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

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>t.jsx(Kr,{...e})},zr={Marketing:"#f97316",Operations:"#3b82f6",Finance:"#10b981",Product:"#a855f7"},$r={display:"inline-flex",alignItems:"center",gap:8},Jr={display:"inline-block",width:10,height:10,borderRadius:"50%",flexShrink:0};function qr({value:e}){const n=zr[e]??"#94a3b8";return t.jsxs("span",{style:$r,children:[t.jsx("span",{style:{...Jr,background:n}}),t.jsx("span",{children:Mn[e]??e})]})}function Qr(e){const n=l.useMemo(()=>[{type:"PROPERTY",id:"department-swatch",key:"department",label:"Department (JSX)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},renderValue:r=>t.jsx(qr,{value:r})},{type:"PROPERTY",id:"team-link",key:"team",label:"Team (anchor JSX)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},renderValue:r=>t.jsx("a",{href:`#/team/${encodeURIComponent(r)}`,onClick:i=>i.preventDefault(),style:{color:"#2563eb",textDecoration:"underline"},children:r})}],[]);return t.jsx("div",{style:S,children:t.jsx(C,{objectType:f,filterDefinitions:n,...e})})}const he={parameters:{docs:{description:{story:"`renderValue` may return any `ReactNode`, not just a string. Use this to render avatars, anchors, status pills, or any custom JSX inside listogram rows, dropdown items, and chips. When the function returns non-string JSX, search matching falls back to the raw value."},source:{code:`const filterDefinitions = [
  {
    type: "PROPERTY",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
    renderValue: (value) => <DepartmentSwatch value={value} />,
  },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>t.jsx(Qr,{...e})};function Zr(e){const n=l.useMemo(()=>[{type:"PROPERTY",id:"dept-full",key:"department",label:"full: label + bar + count",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"full"}}],[]),r=l.useMemo(()=>[{type:"PROPERTY",id:"dept-count",key:"department",label:"count: label + count (no bar)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"count"}}],[]),i=l.useMemo(()=>[{type:"PROPERTY",id:"dept-minimal",key:"department",label:"minimal: label only",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"}}],[]);return t.jsxs("div",{style:Y,children:[t.jsx("div",{style:S,children:t.jsx(C,{objectType:f,filterDefinitions:n,...e})}),t.jsx("div",{style:S,children:t.jsx(C,{objectType:f,filterDefinitions:r,...e})}),t.jsx("div",{style:S,children:t.jsx(C,{objectType:f,filterDefinitions:i,...e})})]})}const Se={parameters:{docs:{source:{code:`// "full" (default): label + colored bar + count number
// "count": label + count number (no bar)
// "minimal": label only (no bar, no count)

const filterDefinitions = [
  { ..., listogramConfig: { displayMode: "full" } },
  { ..., listogramConfig: { displayMode: "count" } },
  { ..., listogramConfig: { displayMode: "minimal" } },
];`}}},render:e=>t.jsx(Zr,{...e})};function ei(e){const n=l.useMemo(()=>[{type:"PROPERTY",id:"dept-with-count",key:"department",label:"Department (counts visible)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},{type:"PROPERTY",id:"team-with-count",key:"team",label:"Team (counts visible)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}}],[]),r=l.useMemo(()=>[{type:"PROPERTY",id:"dept-no-count",key:"department",label:"Department (counts hidden)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},showCount:!1},{type:"PROPERTY",id:"team-no-count",key:"team",label:"Team (counts hidden)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},showCount:!1}],[]);return t.jsxs("div",{style:Y,children:[t.jsx("div",{style:S,children:t.jsx(C,{objectType:f,filterDefinitions:n,...e})}),t.jsx("div",{style:S,children:t.jsx(C,{objectType:f,filterDefinitions:r,...e})})]})}const Ee={parameters:{docs:{description:{story:"Use `showCount: false` on individual filter definitions to hide aggregation counts in LISTOGRAM and MULTI_SELECT inputs. Bar visualizations in LISTOGRAM are preserved."},source:{code:`// showCount defaults to true; set false to hide counts per filter
const filterDefinitions = [
  { ..., filterComponent: "LISTOGRAM", showCount: false },
  { ..., filterComponent: "MULTI_SELECT", showCount: false },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>t.jsx(ei,{...e})};function ti(e){const n=l.useMemo(()=>[{type:"PROPERTY",id:"department-checkbox",key:"department",label:"Department",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},{type:"PROPERTY",id:"team-checkbox",key:"team",label:"Team",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]);return t.jsx("div",{style:S,children:t.jsx(C,{objectType:f,filterDefinitions:n,...e})})}const Te={parameters:{docs:{description:{story:"Listogram rows always include a checkbox for multi-select. Selecting values checks the checkbox and highlights the row. Use the exclude toggle (three-dot menu) to invert selections."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:e=>t.jsx(ti,{...e})};function ni(e){const[n,r]=l.useState(void 0),i=e.onFilterRemoved,s=l.useCallback(c=>{console.log("Removed filter:",c),i==null||i(c)},[i]),a=e.onFilterClauseChanged,d=l.useCallback(c=>{r(c),a==null||a(c)},[a]);return t.jsxs("div",{style:Ge,children:[t.jsx("div",{style:Ye,children:t.jsx(C,{objectType:f,filterDefinitions:w,...e,onFilterRemoved:s,filterClause:n,onFilterClauseChanged:d})}),t.jsx("div",{style:$,children:t.jsx(Be,{objectType:f,filter:n})})]})}const be={args:{title:"Employee Filters",showResetButton:!0,showActiveFilterCount:!0,enableSorting:!0},parameters:{docs:{source:{code:`const [filterClause, setFilterClause] = useState(undefined);

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
</div>`}}},render:e=>t.jsx(ni,{...e})};function ri(e){const n=He(),r=l.useMemo(()=>n(f).where({department:"Marketing"}),[n]),[i,s]=l.useState(void 0),a=e.onFilterClauseChanged,d=l.useCallback(c=>{s(c),a==null||a(c)},[a]);return t.jsxs("div",{style:Ge,children:[t.jsx("div",{style:Ye,children:t.jsx(C,{objectType:f,objectSet:r,filterDefinitions:w,...e,filterClause:i,onFilterClauseChanged:d})}),t.jsx("div",{style:$,children:t.jsx(Be,{objectType:f,objectSet:r,filter:i})})]})}const ge={args:{title:"Marketing Employees",showResetButton:!0,showActiveFilterCount:!0},parameters:{docs:{description:{story:"Demonstrates using a pre-filtered objectSet to scope both FilterList aggregations and ObjectTable data to a subset of employees."},source:{code:`const client = useOsdkClient();
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
/>`}}},render:e=>t.jsx(ri,{...e})};function ii(e){const[n,r]=l.useState(w),i=e.onFilterRemoved,s=l.useCallback(a=>{r(d=>d.filter(c=>"key"in c?c.key!==a:!0)),i==null||i(a)},[i]);return t.jsx("div",{style:S,children:t.jsx(C,{objectType:f,filterDefinitions:n,...e,onFilterRemoved:s})})}const ve={name:"Removable Filters",args:{title:"Removable Filters",showActiveFilterCount:!0},parameters:{docs:{description:{story:"When `onFilterRemoved` is provided, each filter item shows a remove button (X) on hover. Clicking it removes the filter from the list."},source:{code:`const [definitions, setDefinitions] = useState(filterDefinitions);

const handleFilterRemoved = (filterKey) => {
  setDefinitions(prev => prev.filter(def => def.key !== filterKey));
};

<FilterList
  objectType={Employee}
  filterDefinitions={definitions}
  onFilterRemoved={handleFilterRemoved}
  title="Removable Filters"
/>`}}},render:e=>t.jsx(ii,{...e})};function li(e){const[n,r]=l.useState(void 0),i=l.useMemo(()=>[{type:"STATIC_VALUES",key:"department",label:"Department (static)",filterComponent:"LISTOGRAM",values:["Marketing","Operations","Finance","Product"],filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"}},{type:"STATIC_VALUES",key:"locationCity",label:"Office Location",filterComponent:"SINGLE_SELECT",values:["New York","San Francisco","London","Tokyo"],filterState:{type:"SELECT",selectedValues:[]}},{type:"STATIC_VALUES",key:"team",label:"Team (multi-select)",filterComponent:"MULTI_SELECT",values:["Alpha","Beta","Gamma","Delta"],filterState:{type:"SELECT",selectedValues:[]}},{type:"STATIC_VALUES",id:"custom-status",key:"status",label:"Status (custom clause)",filterComponent:"LISTOGRAM",values:["Active","Inactive"],filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"},toWhereClause:d=>{if(d.type!=="EXACT_MATCH"||d.values.length===0)return;const c=d.values,p=c.includes("Active"),E=c.includes("Inactive");if(p&&E)return{$or:[{employeeStatus:"Active"},{employeeStatus:"Inactive"}]};if(p)return{employeeStatus:"Active"};if(E)return{employeeStatus:"Inactive"}}}],[]),s=e.onFilterClauseChanged,a=l.useCallback(d=>{r(d),s==null||s(d)},[s]);return t.jsxs("div",{style:Y,children:[t.jsx("div",{style:S,children:t.jsx(C,{objectType:f,filterDefinitions:i,...e,filterClause:n,onFilterClauseChanged:a})}),t.jsxs("div",{style:$,children:[t.jsx("strong",{children:"Filter Clause (JSON):"}),t.jsx("pre",{style:ne,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const Fe={parameters:{docs:{description:{story:"Use `STATIC_VALUES` filter definitions to provide a fixed list of values instead of fetching from OSDK aggregation. Supports LISTOGRAM, SINGLE_SELECT, MULTI_SELECT, and TEXT_TAGS components. Optionally provide a `toWhereClause` function for custom clause generation."},source:{code:`const filterDefinitions = [
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
/>`}}},render:e=>t.jsx(li,{...e})};function oi(e){const[n,r]=l.useState(void 0),[i,s]=l.useState(w),a=e.onFilterRemoved,d=l.useCallback(_=>{s(j=>j.filter(R=>"key"in R?R.key!==_:!0)),a==null||a(_)},[a]),c=e.onReset,p=l.useCallback(()=>{s(w),c==null||c()},[c]),E=e.onFilterClauseChanged,v=l.useCallback(_=>{r(_),E==null||E(_)},[E]);return t.jsxs("div",{style:Ge,children:[t.jsx("div",{style:Ye,children:t.jsx(C,{objectType:f,filterDefinitions:i,titleIcon:jn,...e,onReset:p,onFilterRemoved:d,filterClause:n,onFilterClauseChanged:v})}),t.jsx("div",{style:$,children:t.jsx(Be,{objectType:f,filter:n})})]})}const _e={name:"Full Featured",args:{title:"Employee Filters",showResetButton:!0,showActiveFilterCount:!0,enableSorting:!0},parameters:{docs:{description:{story:"Demonstrates all filter list features together: collapse, reset, active count, sorting, removable filters, per-filter search, exclude toggle, and controlled where clause driving an ObjectTable."},source:{code:`// All features combined: collapse, sort, search, exclude, remove, reset

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
/>`}}},render:e=>{const[,n]=_n(),r=e.onCollapsedChange,i=l.useCallback(s=>{n({collapsed:s}),r==null||r(s)},[n,r]);return t.jsx(oi,{...e,onCollapsedChange:i})}};function si(e){const[n,r]=l.useState(void 0),i=l.useMemo(()=>[{type:"HAS_LINK",linkName:"lead",label:"Has Manager",filterState:{type:"hasLink",hasLink:!1}}],[]),s=e.onFilterClauseChanged,a=l.useCallback(d=>{r(d),s==null||s(d)},[s]);return t.jsxs("div",{style:Y,children:[t.jsx("div",{style:S,children:t.jsx(C,{objectType:f,filterDefinitions:i,...e,filterClause:n,onFilterClauseChanged:a})}),t.jsxs("div",{style:$,children:[t.jsx("strong",{children:"Filter Clause (JSON):"}),t.jsx("pre",{style:ne,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const Re={name:"Linked Property Filters",parameters:{docs:{description:{story:"Demonstrates filtering on properties of linked objects. HAS_LINK filters objects based on whether they have a linked object. "},source:{code:`// HAS_LINK and LINKED_PROPERTY filter definitions
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
/>`}}},render:e=>t.jsx(si,{...e})};function ai({filterState:e,onFilterStateChanged:n}){const r=l.useCallback(s=>{const a=s.target.value;n({type:"custom",customState:{value:a}})},[n]),i=l.useCallback(()=>{n({type:"custom",customState:{value:""}})},[n]);return t.jsxs("div",{style:{padding:"12px 0",display:"flex",gap:"8px"},children:[t.jsx("input",{type:"text",value:e.customState.value,onChange:r,placeholder:"Enter name substring...",style:{flex:1,padding:"6px 8px",fontSize:"14px",border:"1px solid #ccc",borderRadius:"4px"}}),e.customState.value&&t.jsx("button",{onClick:i,style:{padding:"6px 12px",fontSize:"12px",backgroundColor:"#f5f5f5",border:"1px solid #ccc",borderRadius:"4px",cursor:"pointer"},children:"Clear"})]})}function ci(e){const[n,r]=l.useState(void 0),i=l.useMemo(()=>[{type:"CUSTOM",key:"custom-name-contains",label:"Name Contains",filterComponent:"CUSTOM",filterState:{type:"custom",customState:{value:""}},renderInput:({filterState:d,onFilterStateChanged:c})=>t.jsx(ai,{filterState:d,onFilterStateChanged:c}),toWhereClause:d=>{var p;const c=(p=d.customState)==null?void 0:p.value;if(c)return{fullName:{$containsAnyTerm:c}}}}],[]),s=e.onFilterClauseChanged,a=l.useCallback(d=>{r(d),s==null||s(d)},[s]);return t.jsxs("div",{style:Y,children:[t.jsx("div",{style:S,children:t.jsx(C,{objectType:f,filterDefinitions:i,...e,filterClause:n,onFilterClauseChanged:a})}),t.jsxs("div",{style:$,children:[t.jsx("strong",{children:"Filter Clause (JSON):"}),t.jsx("pre",{style:ne,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const Ae={name:"Custom Filters",parameters:{docs:{description:{story:"Custom filters provide full control over filtering logic and UI. The 'Name Contains' filter uses `renderInput` for a simple custom input. "},source:{code:`// Custom filter with renderInput
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
/>`}}},render:e=>t.jsx(ci,{...e})},di={type:"PROPERTY",id:"department-multi",key:"department",label:"Department",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}},ui={type:"PROPERTY",id:"department-single",key:"department",label:"Department (single)",filterComponent:"SINGLE_SELECT",filterState:{type:"SELECT",selectedValues:[]}},pi=[q,di,ui,Me],Le={name:"No value rendering",parameters:{docs:{description:{story:"Empty/null filter values render via the canonical `<NoValueLabel />` component — italic, muted, with the literal text 'No value' — across listogram buckets, single-select dropdown options, multi-select dropdown options, and multi-select chips. The mock dataset includes one Employee with `department: \"\"` so the No value row is visible in the listogram."}}},render:()=>t.jsx("div",{style:S,children:t.jsx(C,{objectType:f,filterDefinitions:pi})})},mi={type:"PROPERTY",id:"locationCity-single",key:"locationCity",label:"Location City (single)",filterComponent:"SINGLE_SELECT",filterState:{type:"SELECT",selectedValues:[]}},fi={type:"LINKED_PROPERTY",linkName:"lead",linkedPropertyKey:"department",linkedFilterComponent:"MULTI_SELECT",linkedFilterState:{type:"SELECT",selectedValues:[]},filterState:{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:[]}},label:"Manager Department (linked multi)"},yi={type:"LINKED_PROPERTY",linkName:"lead",linkedPropertyKey:"locationCity",linkedFilterComponent:"SINGLE_SELECT",linkedFilterState:{type:"SELECT",selectedValues:[]},filterState:{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:[]}},label:"Manager City (linked single)"},Ci=new Map([["department",{type:"EXACT_MATCH",values:["Marketing","Research"]}],["jobTitle-multi",{type:"SELECT",selectedValues:["Marketing Manager","Chief Scientist"]}],["locationCity-single",{type:"SELECT",selectedValues:["Berlin"]}],["linkedProperty:lead:department",{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:["Marketing","Research"]}}],["linkedProperty:lead:locationCity",{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:["Berlin"]}}]]),hi=[q,Ln,mi,fi,yi];function Si(e){const n=He(),r=l.useMemo(()=>n(f),[n]),[i,s]=l.useState(void 0),a=l.useCallback(d=>{s(d)},[]);return t.jsxs("div",{style:Y,children:[t.jsx("div",{style:S,children:t.jsx(C,{...e,objectType:f,objectSet:r,filterDefinitions:hi,initialFilterStates:Ci,onFilterClauseChanged:a})}),t.jsxs("div",{style:$,children:[t.jsx("h4",{children:"Active where clause"}),t.jsx("pre",{style:ne,children:i?JSON.stringify(i,null,2):"(none)"})]})]})}const je={name:"With initial filter states",parameters:{docs:{description:{story:"Pass `initialFilterStates` to hydrate filters from saved state (e.g. localStorage or URL params). Selections are restored on mount, including values that currently have zero matching rows — they appear with a count of 0 so users can see and clear them. Demonstrated across LISTOGRAM, MULTI_SELECT, SINGLE_SELECT, and LINKED_PROPERTY filters."},source:{code:`// "Research", "Chief Scientist", and "Berlin" are not in the current
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
/>`}}},render:e=>t.jsx(Si,{...e})};var qe,Qe,Ze;ie.parameters={...ie.parameters,docs:{...(qe=ie.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Ze=(Qe=ie.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source}}};var et,tt,nt;le.parameters={...le.parameters,docs:{...(et=le.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(nt=(tt=le.parameters)==null?void 0:tt.docs)==null?void 0:nt.source}}};var rt,it,lt;oe.parameters={...oe.parameters,docs:{...(rt=oe.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(lt=(it=oe.parameters)==null?void 0:it.docs)==null?void 0:lt.source}}};var ot,st,at;se.parameters={...se.parameters,docs:{...(ot=se.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(at=(st=se.parameters)==null?void 0:st.docs)==null?void 0:at.source}}};var ct,dt,ut;ae.parameters={...ae.parameters,docs:{...(ct=ae.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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
}`,...(ut=(dt=ae.parameters)==null?void 0:dt.docs)==null?void 0:ut.source}}};var pt,mt,ft;ce.parameters={...ce.parameters,docs:{...(pt=ce.parameters)==null?void 0:pt.docs,source:{originalSource:`{
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
}`,...(ft=(mt=ce.parameters)==null?void 0:mt.docs)==null?void 0:ft.source}}};var yt,Ct,ht;de.parameters={...de.parameters,docs:{...(yt=de.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
}`,...(ht=(Ct=de.parameters)==null?void 0:Ct.docs)==null?void 0:ht.source}}};var St,Et,Tt;ue.parameters={...ue.parameters,docs:{...(St=ue.parameters)==null?void 0:St.docs,source:{originalSource:`{
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
}`,...(Tt=(Et=ue.parameters)==null?void 0:Et.docs)==null?void 0:Tt.source}}};var bt,gt,vt;pe.parameters={...pe.parameters,docs:{...(bt=pe.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(vt=(gt=pe.parameters)==null?void 0:gt.docs)==null?void 0:vt.source}}};var Ft,_t,Rt;me.parameters={...me.parameters,docs:{...(Ft=me.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
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
}`,...(Rt=(_t=me.parameters)==null?void 0:_t.docs)==null?void 0:Rt.source}}};var At,Lt,jt;fe.parameters={...fe.parameters,docs:{...(At=fe.parameters)==null?void 0:At.docs,source:{originalSource:`{
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
}`,...(jt=(Lt=fe.parameters)==null?void 0:Lt.docs)==null?void 0:jt.source}}};var Mt,It,kt;ye.parameters={...ye.parameters,docs:{...(Mt=ye.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
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
}`,...(kt=(It=ye.parameters)==null?void 0:It.docs)==null?void 0:kt.source}}};var Dt,Ot,xt;Ce.parameters={...Ce.parameters,docs:{...(Dt=Ce.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
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
}`,...(xt=(Ot=Ce.parameters)==null?void 0:Ot.docs)==null?void 0:xt.source}}};var Pt,Nt,wt;he.parameters={...he.parameters,docs:{...(Pt=he.parameters)==null?void 0:Pt.docs,source:{originalSource:`{
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
}`,...(wt=(Nt=he.parameters)==null?void 0:Nt.docs)==null?void 0:wt.source}}};var Vt,Bt,Ht;Se.parameters={...Se.parameters,docs:{...(Vt=Se.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
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
}`,...(Ht=(Bt=Se.parameters)==null?void 0:Bt.docs)==null?void 0:Ht.source}}};var Wt,Gt,Yt;Ee.parameters={...Ee.parameters,docs:{...(Wt=Ee.parameters)==null?void 0:Wt.docs,source:{originalSource:`{
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
}`,...(Yt=(Gt=Ee.parameters)==null?void 0:Gt.docs)==null?void 0:Yt.source}}};var Ut,Xt,Kt;Te.parameters={...Te.parameters,docs:{...(Ut=Te.parameters)==null?void 0:Ut.docs,source:{originalSource:`{
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
}`,...(Kt=(Xt=Te.parameters)==null?void 0:Xt.docs)==null?void 0:Kt.source}}};var zt,$t,Jt;be.parameters={...be.parameters,docs:{...(zt=be.parameters)==null?void 0:zt.docs,source:{originalSource:`{
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
}`,...(Jt=($t=be.parameters)==null?void 0:$t.docs)==null?void 0:Jt.source}}};var qt,Qt,Zt;ge.parameters={...ge.parameters,docs:{...(qt=ge.parameters)==null?void 0:qt.docs,source:{originalSource:`{
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
}`,...(Zt=(Qt=ge.parameters)==null?void 0:Qt.docs)==null?void 0:Zt.source}}};var en,tn,nn;ve.parameters={...ve.parameters,docs:{...(en=ve.parameters)==null?void 0:en.docs,source:{originalSource:`{
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
}`,...(nn=(tn=ve.parameters)==null?void 0:tn.docs)==null?void 0:nn.source}}};var rn,ln,on;Fe.parameters={...Fe.parameters,docs:{...(rn=Fe.parameters)==null?void 0:rn.docs,source:{originalSource:`{
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
}`,...(on=(ln=Fe.parameters)==null?void 0:ln.docs)==null?void 0:on.source}}};var sn,an,cn;_e.parameters={..._e.parameters,docs:{...(sn=_e.parameters)==null?void 0:sn.docs,source:{originalSource:`{
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
}`,...(cn=(an=_e.parameters)==null?void 0:an.docs)==null?void 0:cn.source}}};var dn,un,pn;Re.parameters={...Re.parameters,docs:{...(dn=Re.parameters)==null?void 0:dn.docs,source:{originalSource:`{
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
}`,...(pn=(un=Re.parameters)==null?void 0:un.docs)==null?void 0:pn.source}}};var mn,fn,yn;Ae.parameters={...Ae.parameters,docs:{...(mn=Ae.parameters)==null?void 0:mn.docs,source:{originalSource:`{
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
}`,...(yn=(fn=Ae.parameters)==null?void 0:fn.docs)==null?void 0:yn.source}}};var Cn,hn,Sn;Le.parameters={...Le.parameters,docs:{...(Cn=Le.parameters)==null?void 0:Cn.docs,source:{originalSource:`{
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
}`,...(Sn=(hn=Le.parameters)==null?void 0:hn.docs)==null?void 0:Sn.source}}};var En,Tn,bn;je.parameters={...je.parameters,docs:{...(En=je.parameters)==null?void 0:En.docs,source:{originalSource:`{
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
}`,...(bn=(Tn=je.parameters)==null?void 0:Tn.docs)==null?void 0:bn.source}}};const Sl=["Default","IntegerNumberRangeRounding","WithObjectSet","AddFilterMode","WithAllFilterTypes","WithTitleAndIcon","WithResetButton","WithActiveFilterCount","WithSorting","CollapsiblePanel","KeywordSearch","WithColorMap","WithRenderValue","WithRenderValueAsReactNode","WithListogramDisplayModes","WithHiddenCounts","WithCheckbox","CombinedWithObjectTable","CombinedWithFilteredObjectSet","WithRemovableFilters","WithStaticValues","FullFeatured","WithHasLinkFilter","WithCustomFilters","NoValueRendering","WithInitialFilterStates"];export{se as AddFilterMode,me as CollapsiblePanel,ge as CombinedWithFilteredObjectSet,be as CombinedWithObjectTable,ie as Default,_e as FullFeatured,le as IntegerNumberRangeRounding,fe as KeywordSearch,Le as NoValueRendering,ue as WithActiveFilterCount,ae as WithAllFilterTypes,Te as WithCheckbox,ye as WithColorMap,Ae as WithCustomFilters,Re as WithHasLinkFilter,Ee as WithHiddenCounts,je as WithInitialFilterStates,Se as WithListogramDisplayModes,oe as WithObjectSet,ve as WithRemovableFilters,Ce as WithRenderValue,he as WithRenderValueAsReactNode,de as WithResetButton,pe as WithSorting,Fe as WithStaticValues,ce as WithTitleAndIcon,Sl as __namedExportsOrder,hl as default};
