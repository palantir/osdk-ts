var $n=Object.defineProperty;var Jn=(e,n,i)=>n in e?$n(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i;var xe=(e,n,i)=>Jn(e,typeof n!="symbol"?n+"":n,i);import{r,R as c,f as Qn,j as t}from"./iframe-spd48L9e.js";import{S as qn}from"./MultiColumnSortDialog--UDlnDd7.js";import{b as Zn,s as ei,c as ti,f as ni,d as O,S as ii,R as Ke,O as ri,e as si,C as oi,E as li,h as ai,i as ci,g as X,u as di,a as ze,F as ui,j as pi}from"./getFilterLabel-Ax2Bo_84.js";import{c as K}from"./index-D76FqBFx.js";import{u as mi,b as fi,c as $e,P as yi,s as Ci,K as hi,d as Si,a as bi,e as Ti,f as Ei,g as gi,v as vi,h as Fi}from"./DraggableList-DcwGa7Ts.js";import{B as P}from"./Button-Dgp6H7LY.js";import{I as Ri}from"./Input-BV2tRR2B.js";import{w as Li}from"./withOsdkMetrics-DTrk7QK1.js";import{O as _e}from"./object-table-4zAc_DQg.js";import{E as u}from"./Employee-BAk2o20h.js";import{u as Me}from"./useOsdkClient-D3dsNUQk.js";import"./preload-helper-BFjVmB4B.js";import"./ActionButton-DnXS_vpH.js";import"./Dialog-BMaxN-dw.js";import"./cross-B_42C3x3.js";import"./svgIconContainer-dGho0Jkc.js";import"./useBaseUiId-DM99VqwW.js";import"./InternalBackdrop-CsXrvUm-.js";import"./composite-BAgBz66m.js";import"./index-BxdQnIFl.js";import"./index-WIu1AXsN.js";import"./index-DqCRma0O.js";import"./MenuTrigger-C9sVdEwt.js";import"./CompositeItem-C_U8l9iM.js";import"./ToolbarRootContext-C4qPqoAG.js";import"./getDisabledMountTransitionStyles-FOakMbK5.js";import"./getPseudoElementBounds-9oBVHTKV.js";import"./caret-down-CJ6vkUD-.js";import"./Switch-DQWEzfQQ.js";import"./toNumber-CmsPrq3j.js";import"./PopoverPopup-BaHnJEaN.js";import"./useValueChanged-D1tMRj-a.js";import"./useControlled-CJw-Rypa.js";import"./assertUnreachable-tCT10eXl.js";import"./index-ClnMgKgk.js";import"./Checkbox-DBTqgrJK.js";import"./minus-CkJvUZR4.js";import"./SkeletonBar-CxrzVd58.js";import"./makeExternalStore-DdoyYIi-.js";import"./chevron-down-DJMO9Hg2.js";import"./small-cross-Camvb-sX.js";import"./useRegisterUserAgent-BDL4H1ns.js";import"./Table-Dnht7T78.js";import"./LoadingCell-Cereq5oh.js";import"./ColumnConfigDialog-vuQgU1qY.js";import"./CollapsiblePanel-CO_mxuFY.js";import"./index-CzWa6Irc.js";import"./error-OKMHhgjK.js";import"./Tooltip-CfRFcyjb.js";import"./useEventCallback-DSvmAYS4.js";const W={filterList:"FilterList-module__filterList___wmzCNbkH",filterListCollapsed:"FilterList-module__filterListCollapsed___CGrK9txF",expandedContent:"FilterList-module__expandedContent___aEk2i2At",scrollableContent:"FilterList-module__scrollableContent___F3O1nfAo",hiddenContent:"FilterList-module__hiddenContent___PHKe-yWc",expandButton:"FilterList-module__expandButton___-QlY8-ot",collapsedLabel:"FilterList-module__collapsedLabel___QA0UtRts",addButtonContainer:"FilterList-module__addButtonContainer___kq300FEV",addButton:"FilterList-module__addButton___oD4yvwyZ"},Z={content:"FilterListContent-module__content___fG0EgVp6",dragOverlay:"FilterListContent-module__dragOverlay___Tjd1YpmI"},we={errorContainer:"ErrorBoundary-module__errorContainer___FIguBDDu",errorMessage:"ErrorBoundary-module__errorMessage___jUsXUqFA",retryButton:"ErrorBoundary-module__retryButton___PZVWZOm7"};class Ai extends r.Component{constructor(){super(...arguments);xe(this,"state",{hasError:!1,error:null});xe(this,"handleRetry",()=>{this.setState({hasError:!1,error:null})})}static getDerivedStateFromError(i){return{hasError:!0,error:i}}componentDidCatch(i,s){var o,a;console.error("[ErrorBoundary]",i),console.error("[ErrorBoundary] Component stack:",s.componentStack),(a=(o=this.props).onError)==null||a.call(o,i)}render(){return this.state.hasError?this.props.fallback?this.props.fallback:c.createElement("div",{className:we.errorContainer},c.createElement("p",{className:we.errorMessage},this.props.errorMessage??"Something went wrong"),c.createElement(P,{className:we.retryButton,onClick:this.handleRetry,"aria-label":"Retry"},"Retry")):this.props.children}}function ji(){return c.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true"},c.createElement("circle",{cx:"5.5",cy:"3.5",r:"1.5"}),c.createElement("circle",{cx:"10.5",cy:"3.5",r:"1.5"}),c.createElement("circle",{cx:"5.5",cy:"8",r:"1.5"}),c.createElement("circle",{cx:"10.5",cy:"8",r:"1.5"}),c.createElement("circle",{cx:"5.5",cy:"12.5",r:"1.5"}),c.createElement("circle",{cx:"10.5",cy:"12.5",r:"1.5"}))}function Ne(){return Ne=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var s in i)({}).hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},Ne.apply(null,arguments)}function _i({definition:e,filterKey:n,label:i,filterState:s,onFilterStateChanged:o,onFilterRemoved:a,renderInput:d,searchField:l,dragHandleAttributes:C,dragHandleListeners:f,className:h,style:v}){const[R,b]=r.useState({type:"closed"}),[D,M]=r.useState(!1),p=r.useCallback(A=>{o(n,A)},[n,o]),y=r.useCallback(()=>{b(A=>A.type==="closed"?{type:"open",query:""}:{type:"closed"})},[]),S=r.useCallback(A=>{b({type:"open",query:A.target.value})},[]),L=r.useCallback(()=>{b({type:"open",query:""})},[]),k=r.useCallback(()=>{a==null||a(n)},[n,a]),H=r.useCallback(()=>{M(A=>!A)},[]),x=r.useCallback(A=>{A==null||A.focus({preventScroll:!0})},[]),w=r.useMemo(()=>Zn(s),[s]),Y=ei(w),F=ti(w)&&l!==!1,E=ni(s),g=R.type==="open",_=R.type==="open"?R.query:"",N=R.type==="open"?R.query:void 0;return c.createElement("div",{className:K(O.filterItem,h),style:v,"data-has-selection":E||void 0},c.createElement("div",{className:O.itemHeader},C&&c.createElement(P,Ne({className:O.dragHandle,"aria-label":`Reorder ${i}`},C,f),c.createElement(ji,null)),c.createElement("span",{className:O.itemLabel},i),F&&c.createElement(P,{className:O.headerActionButton,onClick:y,"aria-label":"Search values","aria-pressed":g},c.createElement(ii,null)),a&&c.createElement(P,{className:O.headerActionButton,onClick:k,"aria-label":`Remove ${i} filter`},c.createElement(Ke,null)),Y&&c.createElement(P,{className:O.headerActionButton,onClick:H,"aria-label":"More actions","aria-pressed":D},c.createElement(ri,null))),g&&c.createElement("div",{className:O.searchRow},c.createElement(Ri,{type:"text",className:O.searchInput,value:_,onChange:S,placeholder:"Search property values...","aria-label":"Search property values",ref:x}),_&&c.createElement(P,{type:"button",className:O.searchClearButton,onClick:L,"aria-label":"Clear search"},c.createElement(Ke,null))),c.createElement("div",{className:O.itemContent},c.createElement(Ai,{errorMessage:"Error loading filter"},d({definition:e,filterKey:n,filterState:s,onFilterStateChanged:p,searchQuery:N,excludeRowOpen:D}))))}const Pe=r.memo(_i);function Mi({id:e,definition:n,filterKey:i,label:s,filterState:o,onFilterStateChanged:a,onFilterRemoved:d,renderInput:l,searchField:C}){const{attributes:f,listeners:h,setNodeRef:v,transform:R,transition:b,isDragging:D}=mi({id:e}),M=r.useMemo(()=>({transform:fi.Transform.toString(R),transition:b??void 0}),[R,b]);return c.createElement("div",{ref:v,style:M,className:K(D&&O.dragging)},c.createElement(Pe,{definition:n,filterKey:i,label:s,filterState:o,onFilterStateChanged:a,onFilterRemoved:d,renderInput:l,searchField:C,dragHandleAttributes:f,dragHandleListeners:h}))}const ki=r.memo(Mi),Di=({transform:e})=>({...e,x:0}),Oi={distance:8},Ii=[Di],xi={role:"button",tabIndex:-1,"aria-disabled":!0,"aria-pressed":void 0,"aria-roledescription":"sortable","aria-describedby":""};function wi({filterDefinitions:e,filterStates:n,onFilterStateChanged:i,onFilterRemoved:s,onOrderChange:o,renderInput:a,getFilterKey:d,getFilterLabel:l,enableSorting:C,className:f,style:h}){const[v,R]=r.useState(null),b=r.useMemo(()=>C&&e?e.map(F=>d(F)):[],[C,e,d]),D=$e(yi,{activationConstraint:Oi}),M=$e(hi,{coordinateGetter:Ci}),p=Si(D,M),y=v!=null?b.indexOf(String(v)):-1,S=y>=0&&e?e[y]:void 0,L=r.useMemo(()=>S?d(S):void 0,[S,d]),k=r.useCallback(F=>{R(F.active.id)},[]),H=r.useCallback(F=>{R(null);const{active:E,over:g}=F;if(!g||E.id===g.id)return;const _=b.indexOf(String(E.id)),N=b.indexOf(String(g.id));if(_!==-1&&N!==-1){const A=bi(b,_,N);o==null||o(A)}},[b,o]),x=r.useCallback(()=>{R(null)},[]),w=r.useMemo(()=>{const F=E=>{const g=b.indexOf(String(E)),_=g>=0?e==null?void 0:e[g]:void 0;return _?l(_):"filter"};return{onDragStart({active:E}){return`Picked up ${F(E.id)} filter`},onDragOver({over:E}){return E?`Moved to position ${b.indexOf(String(E.id))+1} of ${b.length}`:"Not over a droppable area"},onDragEnd({active:E,over:g}){const _=F(E.id);if(g&&E.id!==g.id){const N=b.indexOf(String(g.id));return`Dropped ${_} filter at position ${N+1}`}return`Dropped ${_} filter back in its original position`},onDragCancel({active:E}){return`Cancelled dragging ${F(E.id)} filter`}}},[e,b,l]),Y=r.useMemo(()=>({announcements:w}),[w]);return!e||e.length===0?c.createElement("div",{className:K(Z.content,f),style:h,"data-empty":"true"}):C?c.createElement("div",{className:K(Z.content,f),style:h},c.createElement(Ti,{sensors:p,collisionDetection:Ei,modifiers:Ii,onDragStart:k,onDragEnd:H,onDragCancel:x,accessibility:Y},c.createElement(gi,{items:b,strategy:vi},e.map((F,E)=>{const g=b[E],_=d(F),N=l(F),A=n.get(_);return c.createElement(ki,{key:g,id:g,definition:F,filterKey:_,label:N,filterState:A,onFilterStateChanged:i,onFilterRemoved:s,renderInput:a,searchField:F.searchField})})),c.createElement(Fi,{dropAnimation:null,className:Z.dragOverlay},S&&L&&c.createElement(Pe,{definition:S,filterKey:L,label:l(S),filterState:n.get(L),onFilterStateChanged:i,onFilterRemoved:s,renderInput:a,searchField:S.searchField,dragHandleAttributes:xi})))):c.createElement("div",{className:K(Z.content,f),style:h},e.map(F=>{const E=d(F),g=n.get(E);return c.createElement(Pe,{key:E,definition:F,filterKey:E,label:l(F),filterState:g,onFilterStateChanged:i,onFilterRemoved:s,renderInput:a,searchField:F.searchField})}))}const G={header:"FilterListHeader-module__header___dkKc0CO-",titleContainer:"FilterListHeader-module__titleContainer___KaePpQIx",title:"FilterListHeader-module__title___xqfWfSzK",titleIcon:"FilterListHeader-module__titleIcon___MQy-dec8",activeCount:"FilterListHeader-module__activeCount___GyBsnsQL",actions:"FilterListHeader-module__actions___YZA7zmGc",collapseButton:"FilterListHeader-module__collapseButton___N1-sj3B3",resetButton:"FilterListHeader-module__resetButton___jLcUypov"};function Ni({title:e,titleIcon:n,collapsed:i=!1,onCollapsedChange:s,showResetButton:o,onReset:a,showActiveFilterCount:d,activeFilterCount:l=0,canReset:C,hasVisibilityChanges:f=!1}){const h=r.useCallback(()=>{s==null||s(!i)},[s,i]),v=C!=null?!C:l===0&&!f;return c.createElement("div",{className:G.header},c.createElement("div",{className:G.titleContainer},n&&c.createElement("span",{className:G.titleIcon},n),e&&c.createElement("span",{className:G.title},e),d&&l>0&&c.createElement("span",{className:G.activeCount},"(",l,")")),c.createElement("div",{className:G.actions},o&&c.createElement(P,{className:G.resetButton,onClick:a,disabled:v},c.createElement(si,null)," Reset filters"),s!=null&&c.createElement(P,{className:G.collapseButton,onClick:h,"aria-expanded":!i,"aria-label":i?"Expand filters":"Collapse filters"},c.createElement(oi,null))))}const Pi=r.memo(Ni);function Vi(e){const{title:n,titleIcon:i,collapsed:s=!1,onCollapsedChange:o,filterDefinitions:a,filterStates:d,onFilterStateChanged:l,renderInput:C,getFilterKey:f,getFilterLabel:h,activeFilterCount:v,onReset:R,onFilterAdded:b,onFilterRemoved:D,onOrderChange:M,showResetButton:p=!1,showActiveFilterCount:y=!1,canReset:S,hasVisibilityChanges:L,enableSorting:k,className:H,renderAddFilterButton:x}=e,[w,Y]=r.useState(null),F=r.useCallback(()=>{o==null||o(!1)},[o]),E=s&&o!=null;return c.createElement("div",{className:K(W.filterList,H)},E&&c.createElement("div",{className:W.filterListCollapsed,"data-collapsed":"true"},c.createElement(P,{className:W.expandButton,onClick:F,"aria-label":"Expand filters"},c.createElement(li,null)),c.createElement("span",{className:W.collapsedLabel},n??"Filters")),c.createElement("div",{ref:Y,className:K(W.expandedContent,E&&W.hiddenContent),"data-active-count":v},c.createElement(ai,{value:w},(n||i||p||y||o)&&c.createElement(Pi,{title:n,titleIcon:i,collapsed:s,onCollapsedChange:o,showResetButton:p,onReset:R,showActiveFilterCount:y,activeFilterCount:v,canReset:S,hasVisibilityChanges:L}),c.createElement("div",{className:W.scrollableContent},c.createElement(wi,{filterDefinitions:a,filterStates:d,onFilterStateChanged:l,onFilterRemoved:D,onOrderChange:M,renderInput:C,getFilterKey:f,getFilterLabel:h,enableSorting:k})),(x!=null||b!=null)&&c.createElement("div",{className:W.addButtonContainer},x?x():c.createElement(P,{type:"button",className:W.addButton,onClick:b},"+ Add filter")))))}const Bi={trigger:"AddFilterPopover-module__trigger___8QQBrzPo"};function Wi({hiddenDefinitions:e,onShowFilter:n,renderTrigger:i}){const s=ci();return c.createElement(qn,{items:e,onItemSelected:n,trigger:i!=null?i():"+ Add filter",triggerClassName:i==null?Bi.trigger:void 0,searchPlaceholder:"Search filters",emptyMessage:"No matching filters",collisionBoundary:s})}const Hi=r.memo(Wi);function Gi(e,n){const i=r.useMemo(()=>(e==null?void 0:e.map(X))??[],[e]),s=r.useMemo(()=>(e==null?void 0:e.filter(p=>p.isVisible!==!1).map(X))??[],[e]),[o,a]=r.useState(()=>s);r.useEffect(()=>{a(s)},[s]);const d=r.useRef(n);d.current=n;const l=r.useCallback(p=>{if(!d.current)return;const y=new Set(p),S=i.filter(L=>!y.has(L));d.current(p,S)},[i]),C=r.useMemo(()=>{const p=new Map;if(e==null)return p;for(const y of e)p.set(X(y),y);return p},[e]),{visibleDefinitions:f,hiddenDefinitions:h}=r.useMemo(()=>{if(e==null)return{visibleDefinitions:[],hiddenDefinitions:[]};const p=new Set(o),y=[],S=[];for(const L of o){const k=C.get(L);k!=null&&y.push(k)}for(const L of i)if(!p.has(L)){const k=C.get(L);k!=null&&S.push(k)}return{visibleDefinitions:y,hiddenDefinitions:S}},[e,C,o,i]),v=r.useCallback(p=>{a(y=>{if(y.includes(p))return y;const S=[...y,p];return l(S),S})},[l]),R=r.useCallback(p=>{a(y=>{const S=y.filter(L=>L!==p);return l(S),S})},[l]),b=r.useCallback(p=>{a(y=>p.length===y.length&&p.every((S,L)=>S===y[L])?y:(l(p),p))},[l]),D=r.useCallback(()=>{a(p=>s.length===p.length&&s.every((y,S)=>y===p[S])?p:(l(s),s))},[s,l]),M=r.useMemo(()=>o.length!==s.length?!0:!o.every((p,y)=>p===s[y]),[o,s]);return{visibleDefinitions:f,hiddenDefinitions:h,showFilter:v,hideFilter:R,reorderVisible:b,hasVisibilityChanges:M,resetVisibility:D}}const Yi={};function Ui(e){const{objectType:n,objectSet:i,title:s,titleIcon:o,collapsed:a,onCollapsedChange:d,filterDefinitions:l,addFilterMode:C="uncontrolled",showResetButton:f=!1,onReset:h,showActiveFilterCount:v=!1,showFilteredOutValues:R=!1,className:b,enableSorting:D,onFilterAdded:M,onFilterRemoved:p,onFilterVisibilityChange:y,renderAddFilterButton:S}=e,{filterStates:L,setFilterState:k,clearFilterState:H,perFilterWhereClauses:x,perFilterLinkedFilters:w,activeFilterCount:Y,hasChangesFromInitial:F,reset:E}=di(e),g=C==="uncontrolled",_=r.useCallback((j,q)=>{if(!y)return;const Ie=[...j.map(J=>({filterKey:J,isVisible:!0})),...q.map(J=>({filterKey:J,isVisible:!1}))];y(Ie)},[y]),{visibleDefinitions:N,hiddenDefinitions:A,showFilter:We,hideFilter:He,reorderVisible:Ge,hasVisibilityChanges:Pn,resetVisibility:Ye}=Gi(l,g?_:void 0),Vn=r.useCallback(()=>{E(),Ye(),h==null||h()},[E,Ye,h]),Bn=r.useMemo(()=>{if(l!=null)return l.filter(j=>j.isVisible!==!1)},[l]),Wn=g?N:Bn,Hn=r.useCallback(j=>{H(j),g&&He(j),p==null||p(j)},[H,g,He,p]),Ue=r.useCallback(j=>{We(j),M==null||M(j,l??[])},[We,M,l]),Gn=r.useCallback(j=>{Ge(j)},[Ge]),Xe=r.useMemo(()=>A.map(j=>({key:X(j),label:ze(j)})),[A]),Yn=r.useMemo(()=>g?A.length===0?void 0:()=>c.createElement(Hi,{hiddenDefinitions:Xe,onShowFilter:Ue,renderTrigger:S}):S,[g,A.length,Xe,Ue,S]),Un=g?Hn:p,Xn=r.useCallback(({definition:j,filterKey:q,filterState:Ie,onFilterStateChanged:J,searchQuery:Kn,excludeRowOpen:zn})=>c.createElement(ui,{objectType:n,objectSet:i,definition:j,filterState:Ie,onFilterStateChanged:J,whereClause:x.get(q)??Yi,linkedFilters:w.get(q)??pi,showFilteredOutValues:R,searchQuery:Kn,excludeRowOpen:zn}),[n,i,x,w,R]);return c.createElement(Vi,{title:s,titleIcon:o,collapsed:a,onCollapsedChange:d,filterDefinitions:Wn,filterStates:L,onFilterStateChanged:k,renderInput:Xn,getFilterKey:X,getFilterLabel:ze,activeFilterCount:Y,onReset:Vn,showResetButton:f,showActiveFilterCount:v,canReset:F||Pn,enableSorting:D,onFilterRemoved:Un,onOrderChange:Gn,className:b,renderAddFilterButton:Yn})}const m=Li(Ui,"FilterList"),{useArgs:Dn}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:U}=__STORYBOOK_MODULE_TEST__,$={type:"PROPERTY",id:"department",key:"department",label:"Department",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},Ve={type:"PROPERTY",id:"team",key:"team",label:"Team",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},On={type:"PROPERTY",id:"fullName",key:"fullName",label:"Full Name",filterComponent:"CONTAINS_TEXT",filterState:{type:"CONTAINS_TEXT"}},In={type:"PROPERTY",id:"firstFullTimeStartDate",key:"firstFullTimeStartDate",label:"Start Date",filterComponent:"DATE_RANGE",filterState:{type:"DATE_RANGE"},clickToFilter:!0,formatDate:e=>e.toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric"})},ke={type:"PROPERTY",id:"employeeNumber",key:"employeeNumber",label:"Employee Number",filterComponent:"NUMBER_RANGE",filterState:{type:"NUMBER_RANGE"},clickToFilter:!0},Q={type:"PROPERTY",id:"locationCity",key:"locationCity",label:"Location City",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},Be={type:"PROPERTY",id:"jobTitle-multi",key:"jobTitle",label:"Job Title",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}},I=[$,Ve,On,In,Be,ke,Q],T={width:320,height:600},V={display:"flex",gap:16},B={flex:1},z={marginTop:8,padding:12,background:"#f5f5f5",borderRadius:4,fontSize:12,overflow:"auto",maxHeight:560},De={display:"flex",gap:16,height:600},Oe={width:320,flexShrink:0},xn=t.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:t.jsx("path",{d:"M1 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1.5a1 1 0 0 1-.293.707L10 8.914V13a1 1 0 0 1-.553.894l-2 1A1 1 0 0 1 6 14v-5.086L1.293 4.207A1 1 0 0 1 1 3.5V2z"})}),_s={title:"Components/FilterList",component:m,tags:["beta"],args:{title:"Filters",enableSorting:!1,showResetButton:!1,showActiveFilterCount:!1,collapsed:!1,onFilterClauseChanged:U(),onFilterStateChanged:U(),onFilterAdded:U(),onFilterRemoved:U(),onFilterVisibilityChange:U(),onCollapsedChange:U(),onReset:U()},parameters:{msw:{handlers:[...Qn.handlers]},controls:{expanded:!0}},argTypes:{objectType:{description:"The object type definition for the objects being filtered",control:!1},objectSet:{description:"Optional object set to scope aggregation queries",control:!1},filterDefinitions:{description:"Array of filter definitions. If not provided, all filterable properties are auto-discovered.",control:!1},title:{description:"Title displayed in the filter list header",control:"text"},titleIcon:{description:"Icon displayed next to the title",control:!1},filterClause:{description:"The current where clause. If provided, the filter clause is controlled.",control:!1},onFilterClauseChanged:{description:"Called when the filter clause changes. Required in controlled mode.",control:!1,table:{category:"Events"}},onFilterStateChanged:{description:"Called when an individual filter's state changes",control:!1,table:{category:"Events"}},enableSorting:{description:"Enable drag-and-drop reordering of filters",control:"boolean",table:{defaultValue:{summary:"false"}}},collapsed:{description:"Whether the filter list panel is collapsed",control:"boolean"},onCollapsedChange:{description:"Called when the collapsed state changes",control:!1,table:{category:"Events"}},showResetButton:{description:"Show reset filters button in header",control:"boolean",table:{defaultValue:{summary:"false"}}},onReset:{description:"Called when the reset button is clicked",control:!1,table:{category:"Events"}},showActiveFilterCount:{description:"Show count of active filters in header",control:"boolean",table:{defaultValue:{summary:"false"}}},onFilterAdded:{description:"Called when a filter is added. If provided, users can add filters.",control:!1,table:{category:"Events"}},onFilterRemoved:{description:"Called when a filter is removed. If provided, users can remove filters.",control:!1,table:{category:"Events"}},onFilterVisibilityChange:{description:"Called when filter visibility or ordering changes (reorder, add, remove).",control:!1,table:{category:"Events"}},addFilterMode:{description:'Controls how filter add/remove is managed. "uncontrolled" manages visibility internally; "controlled" leaves it to the consumer.',control:"select",options:["controlled","uncontrolled"],table:{category:"Advanced",defaultValue:{summary:'"uncontrolled"'}}},renderAddFilterButton:{description:"Custom render function for the add filter button.",control:!1,table:{category:"Advanced"}},initialFilterStates:{description:"Initial filter states for hydrating from external storage. Merged over definition defaults on mount.",control:!1,table:{category:"Advanced"}},className:{description:"Additional CSS class name",control:"text"}}},ee={parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:({objectType:e,objectSet:n,...i})=>{const s=r.useMemo(()=>[$,Q],[]);return t.jsx("div",{style:T,children:t.jsx(m,{objectType:u,filterDefinitions:s,...i})})}},te={parameters:{docs:{description:{story:"Repro for the integer-typed `NUMBER_RANGE` rounding fix. `employeeNumber` is an `integer` property, so histogram bucket boundaries — `(maxValue - minValue) / 20` — are usually fractional. Click any bar in the histogram. The Min/Max boxes must show whole integers (e.g. `657495073`), not fractional values (e.g. `657495073.4`)."}}},render:({objectType:e,objectSet:n,...i})=>{const s=r.useMemo(()=>[ke],[]);return t.jsx("div",{style:T,children:t.jsx(m,{objectType:u,filterDefinitions:s,...i})})}};function Xi(e){const n=Me(),i=r.useMemo(()=>n(u).where({department:"Marketing"}),[n]),s=r.useMemo(()=>[Ve,Q],[]);return t.jsx("div",{style:T,children:t.jsx(m,{objectType:u,objectSet:i,filterDefinitions:s,...e})})}const ne={parameters:{docs:{description:{story:"Pass an `objectSet` prop to scope filter aggregations to a subset of objects. Here the object set is filtered to Marketing department employees, so the listogram counts reflect only that subset."},source:{code:`const client = useOsdkClient();
const objectSet = client(Employee).where({ department: "Marketing" });

<FilterList
  objectType={Employee}
  objectSet={objectSet}
  filterDefinitions={[
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:e=>t.jsx(Xi,{...e})};function Ki(e){const n=r.useMemo(()=>[$,Ve,{...On,isVisible:!1},{...In,isVisible:!1},{...ke,isVisible:!1},{...Q,isVisible:!1}],[]);return t.jsx("div",{style:T,children:t.jsx(m,{objectType:u,filterDefinitions:n,addFilterMode:"uncontrolled",...e})})}const ie={args:{showResetButton:!0},parameters:{docs:{source:{code:`const filterDefinitions = [
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
/>`}}},render:e=>t.jsx(Ki,{...e})};function zi(e){const[n,i]=r.useState(void 0),s=e.onFilterClauseChanged,o=r.useCallback(a=>{i(a),s==null||s(a)},[s]);return t.jsxs("div",{style:V,children:[t.jsx("div",{style:T,children:t.jsx(m,{objectType:u,filterDefinitions:I,...e,filterClause:n,onFilterClauseChanged:o})}),t.jsxs("div",{style:B,children:[t.jsx("strong",{children:"Filter Clause (JSON):"}),t.jsx("pre",{style:z,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const re={parameters:{docs:{description:{story:"All filter component types with a controlled where clause. Hover filter items to reveal search and exclude actions."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>`}}},render:e=>t.jsx(zi,{...e})},se={args:{title:"Employee Filters"},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  titleIcon={<svg>...</svg>}
/>`}}},render:({objectType:e,objectSet:n,...i})=>t.jsx("div",{style:T,children:t.jsx(m,{objectType:u,filterDefinitions:I,titleIcon:xn,...i})})};function $i(e){const n=e.onReset,i=r.useCallback(()=>{console.log("Reset clicked"),n==null||n()},[n]);return t.jsx("div",{style:T,children:t.jsx(m,{objectType:u,filterDefinitions:I,...e,onReset:i})})}const oe={args:{showResetButton:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showResetButton={true}
  onReset={() => console.log("Reset clicked")}
/>`}}},render:e=>t.jsx($i,{...e})},le={args:{showActiveFilterCount:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showActiveFilterCount={true}
/>`}}},render:({objectType:e,objectSet:n,...i})=>t.jsx("div",{style:T,children:t.jsx(m,{objectType:u,filterDefinitions:I,...i})})},ae={args:{enableSorting:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  enableSorting={true}
/>`}}},render:({objectType:e,objectSet:n,...i})=>t.jsx("div",{style:T,children:t.jsx(m,{objectType:u,filterDefinitions:I,...i})})};function Ji(e){return t.jsx("div",{style:T,children:t.jsx(m,{objectType:u,filterDefinitions:I,...e})})}const ce={args:{title:"Employee Filters",showActiveFilterCount:!0},parameters:{docs:{description:{story:"Click the collapse button to minimize the filter panel. Active filter count is shown in the collapsed state."},source:{code:`const [collapsed, setCollapsed] = useState(false);

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  collapsed={collapsed}
  onCollapsedChange={setCollapsed}
  showActiveFilterCount={true}
/>`}}},render:e=>{const[,n]=Dn(),i=e.onCollapsedChange,s=r.useCallback(o=>{n({collapsed:o}),i==null||i(o)},[n,i]);return t.jsx(Ji,{...e,onCollapsedChange:s})}},de={parameters:{docs:{source:{code:`const filterDefinitions = [
  { type: "KEYWORD_SEARCH", properties: ["fullName", "department", "jobTitle", "locationCity"], label: "Search" },
  { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:({objectType:e,objectSet:n,...i})=>{const s=r.useMemo(()=>[{type:"KEYWORD_SEARCH",properties:["fullName","department","jobTitle","locationCity"],label:"Search"},$,Q],[]);return t.jsx("div",{style:T,children:t.jsx(m,{objectType:u,filterDefinitions:s,...i})})}};function Qi(e){const n=r.useMemo(()=>[{type:"PROPERTY",id:"department-no-color",key:"department",label:"Department (default colors)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]),i=r.useMemo(()=>[{type:"PROPERTY",id:"department-color",key:"department",label:"Department (custom colors)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},colorMap:{Marketing:"#e74c3c",Operations:"#2ecc71",Finance:"#3498db",Product:"#f39c12"}}],[]);return t.jsxs("div",{style:V,children:[t.jsx("div",{style:T,children:t.jsx(m,{objectType:u,filterDefinitions:n,...e})}),t.jsx("div",{style:T,children:t.jsx(m,{objectType:u,filterDefinitions:i,...e})})]})}const ue={parameters:{docs:{source:{code:`// Without colorMap: all bars use the default theme color
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

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>t.jsx(Qi,{...e})},wn={Marketing:"Marketing Dept.",Operations:"Ops Team",Finance:"Finance & Accounting",Product:"Product Group"};function qi(e){const n=r.useMemo(()=>[{type:"PROPERTY",id:"department-default",key:"department",label:"Department (default)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]),i=r.useMemo(()=>[{type:"PROPERTY",id:"department-custom",key:"department",label:"Department (custom render)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},renderValue:s=>wn[s]??s},{type:"PROPERTY",id:"team-custom",key:"team",label:"Team (custom render)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},renderValue:s=>s.toUpperCase()}],[]);return t.jsxs("div",{style:V,children:[t.jsx("div",{style:T,children:t.jsx(m,{objectType:u,filterDefinitions:n,...e})}),t.jsx("div",{style:T,children:t.jsx(m,{objectType:u,filterDefinitions:i,...e})})]})}const pe={parameters:{docs:{description:{story:"Use `renderValue` to customize how filter values are displayed and searched. The returned string replaces the raw value for display and search matching. Works with LISTOGRAM, MULTI_SELECT, and SINGLE_SELECT components."},source:{code:`const DEPARTMENT_LABELS = {
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

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>t.jsx(qi,{...e})},Zi={Marketing:"#f97316",Operations:"#3b82f6",Finance:"#10b981",Product:"#a855f7"},er={display:"inline-flex",alignItems:"center",gap:8},tr={display:"inline-block",width:10,height:10,borderRadius:"50%",flexShrink:0};function nr({value:e}){const n=Zi[e]??"#94a3b8";return t.jsxs("span",{style:er,children:[t.jsx("span",{style:{...tr,background:n}}),t.jsx("span",{children:wn[e]??e})]})}function ir(e){const n=r.useMemo(()=>[{type:"PROPERTY",id:"department-swatch",key:"department",label:"Department (JSX)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},renderValue:i=>t.jsx(nr,{value:i})},{type:"PROPERTY",id:"team-link",key:"team",label:"Team (anchor JSX)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},renderValue:i=>t.jsx("a",{href:`#/team/${encodeURIComponent(i)}`,onClick:s=>s.preventDefault(),style:{color:"#2563eb",textDecoration:"underline"},children:i})}],[]);return t.jsx("div",{style:T,children:t.jsx(m,{objectType:u,filterDefinitions:n,...e})})}const me={parameters:{docs:{description:{story:"`renderValue` may return any `ReactNode`, not just a string. Use this to render avatars, anchors, status pills, or any custom JSX inside listogram rows, dropdown items, and chips. When the function returns non-string JSX, search matching falls back to the raw value."},source:{code:`const filterDefinitions = [
  {
    type: "PROPERTY",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
    renderValue: (value) => <DepartmentSwatch value={value} />,
  },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>t.jsx(ir,{...e})};function rr(e){const n=r.useMemo(()=>[{type:"PROPERTY",id:"dept-full",key:"department",label:"full: label + bar + count",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"full"}}],[]),i=r.useMemo(()=>[{type:"PROPERTY",id:"dept-count",key:"department",label:"count: label + count (no bar)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"count"}}],[]),s=r.useMemo(()=>[{type:"PROPERTY",id:"dept-minimal",key:"department",label:"minimal: label only",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"}}],[]);return t.jsxs("div",{style:V,children:[t.jsx("div",{style:T,children:t.jsx(m,{objectType:u,filterDefinitions:n,...e})}),t.jsx("div",{style:T,children:t.jsx(m,{objectType:u,filterDefinitions:i,...e})}),t.jsx("div",{style:T,children:t.jsx(m,{objectType:u,filterDefinitions:s,...e})})]})}const fe={parameters:{docs:{source:{code:`// "full" (default): label + colored bar + count number
// "count": label + count number (no bar)
// "minimal": label only (no bar, no count)

const filterDefinitions = [
  { ..., listogramConfig: { displayMode: "full" } },
  { ..., listogramConfig: { displayMode: "count" } },
  { ..., listogramConfig: { displayMode: "minimal" } },
];`}}},render:e=>t.jsx(rr,{...e})};function sr(e){const n=r.useMemo(()=>[{type:"PROPERTY",id:"dept-with-count",key:"department",label:"Department (counts visible)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},{type:"PROPERTY",id:"team-with-count",key:"team",label:"Team (counts visible)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}}],[]),i=r.useMemo(()=>[{type:"PROPERTY",id:"dept-no-count",key:"department",label:"Department (counts hidden)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},showCount:!1},{type:"PROPERTY",id:"team-no-count",key:"team",label:"Team (counts hidden)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},showCount:!1}],[]);return t.jsxs("div",{style:V,children:[t.jsx("div",{style:T,children:t.jsx(m,{objectType:u,filterDefinitions:n,...e})}),t.jsx("div",{style:T,children:t.jsx(m,{objectType:u,filterDefinitions:i,...e})})]})}const ye={parameters:{docs:{description:{story:"Use `showCount: false` on individual filter definitions to hide aggregation counts in LISTOGRAM and MULTI_SELECT inputs. Bar visualizations in LISTOGRAM are preserved."},source:{code:`// showCount defaults to true; set false to hide counts per filter
const filterDefinitions = [
  { ..., filterComponent: "LISTOGRAM", showCount: false },
  { ..., filterComponent: "MULTI_SELECT", showCount: false },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:e=>t.jsx(sr,{...e})};function or(e){const n=r.useMemo(()=>[{type:"PROPERTY",id:"department-checkbox",key:"department",label:"Department",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},{type:"PROPERTY",id:"team-checkbox",key:"team",label:"Team",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]);return t.jsx("div",{style:T,children:t.jsx(m,{objectType:u,filterDefinitions:n,...e})})}const Ce={parameters:{docs:{description:{story:"Listogram rows always include a checkbox for multi-select. Selecting values checks the checkbox and highlights the row. Use the exclude toggle (three-dot menu) to invert selections."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:e=>t.jsx(or,{...e})};function lr(e){const[n,i]=r.useState(void 0),s=e.onFilterRemoved,o=r.useCallback(l=>{console.log("Removed filter:",l),s==null||s(l)},[s]),a=e.onFilterClauseChanged,d=r.useCallback(l=>{i(l),a==null||a(l)},[a]);return t.jsxs("div",{style:De,children:[t.jsx("div",{style:Oe,children:t.jsx(m,{objectType:u,filterDefinitions:I,...e,onFilterRemoved:o,filterClause:n,onFilterClauseChanged:d})}),t.jsx("div",{style:B,children:t.jsx(_e,{objectType:u,filter:n})})]})}const he={args:{title:"Employee Filters",showResetButton:!0,showActiveFilterCount:!0,enableSorting:!0},parameters:{docs:{source:{code:`const [filterClause, setFilterClause] = useState(undefined);

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
</div>`}}},render:e=>t.jsx(lr,{...e})};function ar(e){const n=Me(),i=r.useMemo(()=>n(u).where({department:"Marketing"}),[n]),[s,o]=r.useState(void 0),a=e.onFilterClauseChanged,d=r.useCallback(l=>{o(l),a==null||a(l)},[a]);return t.jsxs("div",{style:De,children:[t.jsx("div",{style:Oe,children:t.jsx(m,{objectType:u,objectSet:i,filterDefinitions:I,...e,filterClause:s,onFilterClauseChanged:d})}),t.jsx("div",{style:B,children:t.jsx(_e,{objectType:u,objectSet:i,filter:s})})]})}const Se={args:{title:"Marketing Employees",showResetButton:!0,showActiveFilterCount:!0},parameters:{docs:{description:{story:"Demonstrates using a pre-filtered objectSet to scope both FilterList aggregations and ObjectTable data to a subset of employees."},source:{code:`const client = useOsdkClient();
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
/>`}}},render:e=>t.jsx(ar,{...e})};function cr(e){const[n,i]=r.useState(I),s=e.onFilterRemoved,o=r.useCallback(a=>{i(d=>d.filter(l=>"key"in l?l.key!==a:!0)),s==null||s(a)},[s]);return t.jsx("div",{style:T,children:t.jsx(m,{objectType:u,filterDefinitions:n,...e,onFilterRemoved:o})})}const be={name:"Removable Filters",args:{title:"Removable Filters",showActiveFilterCount:!0},parameters:{docs:{description:{story:"When `onFilterRemoved` is provided, each filter item shows a remove button (X) on hover. Clicking it removes the filter from the list."},source:{code:`const [definitions, setDefinitions] = useState(filterDefinitions);

const handleFilterRemoved = (filterKey) => {
  setDefinitions(prev => prev.filter(def => def.key !== filterKey));
};

<FilterList
  objectType={Employee}
  filterDefinitions={definitions}
  onFilterRemoved={handleFilterRemoved}
  title="Removable Filters"
/>`}}},render:e=>t.jsx(cr,{...e})};function dr(e){const[n,i]=r.useState(void 0),s=r.useMemo(()=>[{type:"STATIC_VALUES",key:"department",label:"Department (static)",filterComponent:"LISTOGRAM",values:["Marketing","Operations","Finance","Product"],filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"}},{type:"STATIC_VALUES",key:"locationCity",label:"Office Location",filterComponent:"SINGLE_SELECT",values:["New York","San Francisco","London","Tokyo"],filterState:{type:"SELECT",selectedValues:[]}},{type:"STATIC_VALUES",key:"team",label:"Team (multi-select)",filterComponent:"MULTI_SELECT",values:["Alpha","Beta","Gamma","Delta"],filterState:{type:"SELECT",selectedValues:[]}},{type:"STATIC_VALUES",id:"custom-status",key:"status",label:"Status (custom clause)",filterComponent:"LISTOGRAM",values:["Active","Inactive"],filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"},toWhereClause:d=>{if(d.type!=="EXACT_MATCH"||d.values.length===0)return;const l=d.values,C=l.includes("Active"),f=l.includes("Inactive");if(C&&f)return{$or:[{employeeStatus:"Active"},{employeeStatus:"Inactive"}]};if(C)return{employeeStatus:"Active"};if(f)return{employeeStatus:"Inactive"}}}],[]),o=e.onFilterClauseChanged,a=r.useCallback(d=>{i(d),o==null||o(d)},[o]);return t.jsxs("div",{style:V,children:[t.jsx("div",{style:T,children:t.jsx(m,{objectType:u,filterDefinitions:s,...e,filterClause:n,onFilterClauseChanged:a})}),t.jsxs("div",{style:B,children:[t.jsx("strong",{children:"Filter Clause (JSON):"}),t.jsx("pre",{style:z,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const Te={parameters:{docs:{description:{story:"Use `STATIC_VALUES` filter definitions to provide a fixed list of values instead of fetching from OSDK aggregation. Supports LISTOGRAM, SINGLE_SELECT, MULTI_SELECT, and TEXT_TAGS components. Optionally provide a `toWhereClause` function for custom clause generation."},source:{code:`const filterDefinitions = [
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
/>`}}},render:e=>t.jsx(dr,{...e})};function ur(e){const[n,i]=r.useState(void 0),[s,o]=r.useState(I),a=e.onFilterRemoved,d=r.useCallback(v=>{o(R=>R.filter(b=>"key"in b?b.key!==v:!0)),a==null||a(v)},[a]),l=e.onReset,C=r.useCallback(()=>{o(I),l==null||l()},[l]),f=e.onFilterClauseChanged,h=r.useCallback(v=>{i(v),f==null||f(v)},[f]);return t.jsxs("div",{style:De,children:[t.jsx("div",{style:Oe,children:t.jsx(m,{objectType:u,filterDefinitions:s,titleIcon:xn,...e,onReset:C,onFilterRemoved:d,filterClause:n,onFilterClauseChanged:h})}),t.jsx("div",{style:B,children:t.jsx(_e,{objectType:u,filter:n})})]})}const Ee={name:"Full Featured",args:{title:"Employee Filters",showResetButton:!0,showActiveFilterCount:!0,enableSorting:!0},parameters:{docs:{description:{story:"Demonstrates all filter list features together: collapse, reset, active count, sorting, removable filters, per-filter search, exclude toggle, and controlled where clause driving an ObjectTable."},source:{code:`// All features combined: collapse, sort, search, exclude, remove, reset

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
/>`}}},render:e=>{const[,n]=Dn(),i=e.onCollapsedChange,s=r.useCallback(o=>{n({collapsed:o}),i==null||i(o)},[n,i]);return t.jsx(ur,{...e,onCollapsedChange:s})}};function pr(e){const[n,i]=r.useState(void 0),s=r.useMemo(()=>[{type:"HAS_LINK",linkName:"lead",label:"Has Manager",filterState:{type:"hasLink",hasLink:!1}}],[]),o=e.onFilterClauseChanged,a=r.useCallback(d=>{i(d),o==null||o(d)},[o]);return t.jsxs("div",{style:V,children:[t.jsx("div",{style:T,children:t.jsx(m,{objectType:u,filterDefinitions:s,...e,filterClause:n,onFilterClauseChanged:a})}),t.jsxs("div",{style:B,children:[t.jsx("strong",{children:"Filter Clause (JSON):"}),t.jsx("pre",{style:z,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const ge={name:"Linked Property Filters",parameters:{docs:{description:{story:"Demonstrates filtering on properties of linked objects. HAS_LINK filters objects based on whether they have a linked object. "},source:{code:`// HAS_LINK and LINKED_PROPERTY filter definitions
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
/>`}}},render:e=>t.jsx(pr,{...e})},mr={type:"PROPERTY",id:"combined-department",key:"department",label:"Department",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},fr={type:"PROPERTY",id:"combined-locationCity",key:"locationCity",label:"Location City",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}},yr={type:"LINKED_PROPERTY",id:"combined-lead-name",linkName:"lead",reverseLinkName:"peeps",linkedPropertyKey:"fullName",linkedFilterComponent:"MULTI_SELECT",linkedFilterState:{type:"SELECT",selectedValues:[]},filterState:{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:[]}},label:"Manager Name"},Cr=[yr,mr,fr];function hr(e){const n=Me(),i=r.useMemo(()=>n(u),[n]),[s,o]=r.useState(void 0),[a,d]=r.useState(i),l=e.onFilterClauseChanged,C=r.useCallback(f=>{o(f),l==null||l(f)},[l]);return t.jsxs("div",{style:De,children:[t.jsx("div",{style:Oe,children:t.jsx(m,{...e,objectType:u,objectSet:i,filterDefinitions:Cr,filterClause:s,onFilterClauseChanged:C,onEffectiveObjectSet:d,showFilteredOutValues:!0})}),t.jsx("div",{style:B,children:t.jsx(_e,{objectType:u,objectSet:a})})]})}const ve={name:"Combined linked + direct filters (zero-count filtered-out rows)",parameters:{docs:{description:{story:"A linked filter (Manager Name) and direct property filters coexist in one FilterList. Pass the unfiltered scope as `objectSet`; FilterList applies the linked-filter narrowing internally and emits the fully-narrowed `ObjectSet` via `onEffectiveObjectSet` for the table. With `showFilteredOutValues`, direct-facet values absent under the active linked filter render as greyed-out count=0 filtered-out rows."},source:{code:`const baseObjectSet = useMemo(() => client(Employee), [client]);
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
<ObjectTable objectType={Employee} objectSet={effectiveObjectSet} />`}}},render:e=>t.jsx(hr,{...e})};function Sr({filterState:e,onFilterStateChanged:n}){const i=r.useCallback(o=>{const a=o.target.value;n({type:"custom",customState:{value:a}})},[n]),s=r.useCallback(()=>{n({type:"custom",customState:{value:""}})},[n]);return t.jsxs("div",{style:{padding:"12px 0",display:"flex",gap:"8px"},children:[t.jsx("input",{type:"text",value:e.customState.value,onChange:i,placeholder:"Enter name substring...",style:{flex:1,padding:"6px 8px",fontSize:"14px",border:"1px solid #ccc",borderRadius:"4px"}}),e.customState.value&&t.jsx("button",{onClick:s,style:{padding:"6px 12px",fontSize:"12px",backgroundColor:"#f5f5f5",border:"1px solid #ccc",borderRadius:"4px",cursor:"pointer"},children:"Clear"})]})}function br(e){const[n,i]=r.useState(void 0),s=r.useMemo(()=>[{type:"CUSTOM",key:"custom-name-contains",label:"Name Contains",filterComponent:"CUSTOM",filterState:{type:"custom",customState:{value:""}},renderInput:({filterState:d,onFilterStateChanged:l})=>t.jsx(Sr,{filterState:d,onFilterStateChanged:l}),toWhereClause:d=>{var C;const l=(C=d.customState)==null?void 0:C.value;if(l)return{fullName:{$containsAnyTerm:l}}}}],[]),o=e.onFilterClauseChanged,a=r.useCallback(d=>{i(d),o==null||o(d)},[o]);return t.jsxs("div",{style:V,children:[t.jsx("div",{style:T,children:t.jsx(m,{objectType:u,filterDefinitions:s,...e,filterClause:n,onFilterClauseChanged:a})}),t.jsxs("div",{style:B,children:[t.jsx("strong",{children:"Filter Clause (JSON):"}),t.jsx("pre",{style:z,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const Fe={name:"Custom Filters",parameters:{docs:{description:{story:"Custom filters provide full control over filtering logic and UI. The 'Name Contains' filter uses `renderInput` for a simple custom input. "},source:{code:`// Custom filter with renderInput
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
/>`}}},render:e=>t.jsx(br,{...e})},Tr={type:"PROPERTY",id:"department-multi",key:"department",label:"Department",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}},Er={type:"PROPERTY",id:"department-single",key:"department",label:"Department (single)",filterComponent:"SINGLE_SELECT",filterState:{type:"SELECT",selectedValues:[]}},gr=[$,Tr,Er,ke],Re={name:"No value rendering",parameters:{docs:{description:{story:"Empty/null filter values render via the canonical `<NoValueLabel />` component — italic, muted, with the literal text 'No value' — across listogram buckets, single-select dropdown options, multi-select dropdown options, and multi-select chips. The mock dataset includes one Employee with `department: \"\"` so the No value row is visible in the listogram."}}},render:()=>t.jsx("div",{style:T,children:t.jsx(m,{objectType:u,filterDefinitions:gr})})},vr={type:"PROPERTY",id:"locationCity-single",key:"locationCity",label:"Location City (single)",filterComponent:"SINGLE_SELECT",filterState:{type:"SELECT",selectedValues:[]}},Fr={type:"LINKED_PROPERTY",linkName:"lead",reverseLinkName:"peeps",linkedPropertyKey:"department",linkedFilterComponent:"MULTI_SELECT",linkedFilterState:{type:"SELECT",selectedValues:[]},filterState:{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:[]}},label:"Manager Department (linked multi)"},Rr={type:"LINKED_PROPERTY",linkName:"lead",reverseLinkName:"peeps",linkedPropertyKey:"locationCity",linkedFilterComponent:"SINGLE_SELECT",linkedFilterState:{type:"SELECT",selectedValues:[]},filterState:{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:[]}},label:"Manager City (linked single)"},Lr=new Map([["department",{type:"EXACT_MATCH",values:["Marketing","Research"]}],["jobTitle-multi",{type:"SELECT",selectedValues:["Marketing Manager","Chief Scientist"]}],["locationCity-single",{type:"SELECT",selectedValues:["Berlin"]}],["linkedProperty:lead:department",{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:["Marketing","Research"]}}],["linkedProperty:lead:locationCity",{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:["Berlin"]}}]]),Ar=[$,Be,vr,Fr,Rr];function jr(e){const n=Me(),i=r.useMemo(()=>n(u),[n]),[s,o]=r.useState(void 0),a=r.useCallback(d=>{o(d)},[]);return t.jsxs("div",{style:V,children:[t.jsx("div",{style:T,children:t.jsx(m,{...e,objectType:u,objectSet:i,filterDefinitions:Ar,initialFilterStates:Lr,onFilterClauseChanged:a})}),t.jsxs("div",{style:B,children:[t.jsx("h4",{children:"Active where clause"}),t.jsx("pre",{style:z,children:s?JSON.stringify(s,null,2):"(none)"})]})]})}const Le={name:"With initial filter states",parameters:{docs:{description:{story:"Pass `initialFilterStates` to hydrate filters from saved state (e.g. localStorage or URL params). Selections are restored on mount, including values that currently have zero matching rows — they appear with a count of 0 so users can see and clear them. Demonstrated across LISTOGRAM, MULTI_SELECT, SINGLE_SELECT, and LINKED_PROPERTY filters."},source:{code:`// "Research", "Chief Scientist", and "Berlin" are not in the current
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
/>`}}},render:e=>t.jsx(jr,{...e})},Je=[$,Be],_r=new Map([["department",{type:"EXACT_MATCH",values:["Engineering"]}],["jobTitle-multi",{type:"SELECT",selectedValues:["Software Engineer"]}]]);function Qe(e){const n=[...e.keys()].sort(),i={};for(const s of n){const o=e.get(s);o!==void 0&&(i[s]=o)}return JSON.stringify(i,null,2)}function Nn({initialFilterStates:e,storyArgs:n}){const i=r.useMemo(()=>{const f=new Map;for(const h of Je)h.type==="PROPERTY"&&h.filterState&&f.set(X(h),h.filterState);if(e)for(const[h,v]of e)f.set(h,v);return f},[e]),[s,o]=r.useState(()=>new Map(i)),a=n.onFilterStateChanged,d=r.useCallback((f,h)=>{o(v=>{const R=new Map(v);return R.set(X(f),h),R}),a==null||a(f,h)},[a]),l=n.onReset,C=r.useCallback(()=>{o(new Map(i)),l==null||l()},[l,i]);return t.jsxs("div",{style:V,children:[t.jsx("div",{style:T,children:t.jsx(m,{...n,objectType:u,filterDefinitions:Je,initialFilterStates:e,showResetButton:!0,onFilterStateChanged:d,onReset:C})}),t.jsxs("div",{style:B,children:[t.jsx("h4",{children:"Filter state dump"}),t.jsx("pre",{"data-testid":"filter-state-dump",style:z,children:Qe(s)}),t.jsx("h4",{children:"Initial snapshot"}),t.jsx("pre",{"data-testid":"filter-state-initial",style:z,children:Qe(i)})]})]})}function Mr(e){return t.jsx(Nn,{storyArgs:e})}const Ae={args:{showResetButton:!0},parameters:{docs:{description:{story:"Reset button is disabled-by-default until the user diverges from the initial (empty string) snapshot. After clicking reset the filter state returns to the initial snapshot and the button disables itself again."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showResetButton={true}
/>`}}},render:e=>t.jsx(Mr,{...e})};function kr(e){return t.jsx(Nn,{storyArgs:e,initialFilterStates:_r})}const je={args:{showResetButton:!0},parameters:{docs:{description:{story:"Reset button stays disabled on mount even though there are active selections, because the live filter state matches the initial snapshot. Changing a selection enables the button; clicking it restores the initial snapshot, not an empty state."},source:{code:`const savedStates = new Map([
  ["department", { type: "EXACT_MATCH", values: ["Engineering"] }],
  ["jobTitle-multi", { type: "SELECT", selectedValues: ["Software Engineer"] }],
]);

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  initialFilterStates={savedStates}
  showResetButton={true}
/>`}}},render:e=>t.jsx(kr,{...e})};var qe,Ze,et;ee.parameters={...ee.parameters,docs:{...(qe=ee.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(et=(Ze=ee.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,nt,it;te.parameters={...te.parameters,docs:{...(tt=te.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(it=(nt=te.parameters)==null?void 0:nt.docs)==null?void 0:it.source}}};var rt,st,ot;ne.parameters={...ne.parameters,docs:{...(rt=ne.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(ot=(st=ne.parameters)==null?void 0:st.docs)==null?void 0:ot.source}}};var lt,at,ct;ie.parameters={...ie.parameters,docs:{...(lt=ie.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
}`,...(ct=(at=ie.parameters)==null?void 0:at.docs)==null?void 0:ct.source}}};var dt,ut,pt;re.parameters={...re.parameters,docs:{...(dt=re.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(pt=(ut=re.parameters)==null?void 0:ut.docs)==null?void 0:pt.source}}};var mt,ft,yt;se.parameters={...se.parameters,docs:{...(mt=se.parameters)==null?void 0:mt.docs,source:{originalSource:`{
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
}`,...(yt=(ft=se.parameters)==null?void 0:ft.docs)==null?void 0:yt.source}}};var Ct,ht,St;oe.parameters={...oe.parameters,docs:{...(Ct=oe.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
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
}`,...(St=(ht=oe.parameters)==null?void 0:ht.docs)==null?void 0:St.source}}};var bt,Tt,Et;le.parameters={...le.parameters,docs:{...(bt=le.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(Et=(Tt=le.parameters)==null?void 0:Tt.docs)==null?void 0:Et.source}}};var gt,vt,Ft;ae.parameters={...ae.parameters,docs:{...(gt=ae.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(Ft=(vt=ae.parameters)==null?void 0:vt.docs)==null?void 0:Ft.source}}};var Rt,Lt,At;ce.parameters={...ce.parameters,docs:{...(Rt=ce.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
}`,...(At=(Lt=ce.parameters)==null?void 0:Lt.docs)==null?void 0:At.source}}};var jt,_t,Mt;de.parameters={...de.parameters,docs:{...(jt=de.parameters)==null?void 0:jt.docs,source:{originalSource:`{
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
}`,...(Mt=(_t=de.parameters)==null?void 0:_t.docs)==null?void 0:Mt.source}}};var kt,Dt,Ot;ue.parameters={...ue.parameters,docs:{...(kt=ue.parameters)==null?void 0:kt.docs,source:{originalSource:`{
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
}`,...(Ot=(Dt=ue.parameters)==null?void 0:Dt.docs)==null?void 0:Ot.source}}};var It,xt,wt;pe.parameters={...pe.parameters,docs:{...(It=pe.parameters)==null?void 0:It.docs,source:{originalSource:`{
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
}`,...(wt=(xt=pe.parameters)==null?void 0:xt.docs)==null?void 0:wt.source}}};var Nt,Pt,Vt;me.parameters={...me.parameters,docs:{...(Nt=me.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
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
}`,...(Vt=(Pt=me.parameters)==null?void 0:Pt.docs)==null?void 0:Vt.source}}};var Bt,Wt,Ht;fe.parameters={...fe.parameters,docs:{...(Bt=fe.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
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
}`,...(Ht=(Wt=fe.parameters)==null?void 0:Wt.docs)==null?void 0:Ht.source}}};var Gt,Yt,Ut;ye.parameters={...ye.parameters,docs:{...(Gt=ye.parameters)==null?void 0:Gt.docs,source:{originalSource:`{
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
}`,...(Ut=(Yt=ye.parameters)==null?void 0:Yt.docs)==null?void 0:Ut.source}}};var Xt,Kt,zt;Ce.parameters={...Ce.parameters,docs:{...(Xt=Ce.parameters)==null?void 0:Xt.docs,source:{originalSource:`{
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
}`,...(zt=(Kt=Ce.parameters)==null?void 0:Kt.docs)==null?void 0:zt.source}}};var $t,Jt,Qt;he.parameters={...he.parameters,docs:{...($t=he.parameters)==null?void 0:$t.docs,source:{originalSource:`{
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
}`,...(Qt=(Jt=he.parameters)==null?void 0:Jt.docs)==null?void 0:Qt.source}}};var qt,Zt,en;Se.parameters={...Se.parameters,docs:{...(qt=Se.parameters)==null?void 0:qt.docs,source:{originalSource:`{
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
}`,...(en=(Zt=Se.parameters)==null?void 0:Zt.docs)==null?void 0:en.source}}};var tn,nn,rn;be.parameters={...be.parameters,docs:{...(tn=be.parameters)==null?void 0:tn.docs,source:{originalSource:`{
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
}`,...(rn=(nn=be.parameters)==null?void 0:nn.docs)==null?void 0:rn.source}}};var sn,on,ln;Te.parameters={...Te.parameters,docs:{...(sn=Te.parameters)==null?void 0:sn.docs,source:{originalSource:`{
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
}`,...(ln=(on=Te.parameters)==null?void 0:on.docs)==null?void 0:ln.source}}};var an,cn,dn;Ee.parameters={...Ee.parameters,docs:{...(an=Ee.parameters)==null?void 0:an.docs,source:{originalSource:`{
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
}`,...(dn=(cn=Ee.parameters)==null?void 0:cn.docs)==null?void 0:dn.source}}};var un,pn,mn;ge.parameters={...ge.parameters,docs:{...(un=ge.parameters)==null?void 0:un.docs,source:{originalSource:`{
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
}`,...(mn=(pn=ge.parameters)==null?void 0:pn.docs)==null?void 0:mn.source}}};var fn,yn,Cn;ve.parameters={...ve.parameters,docs:{...(fn=ve.parameters)==null?void 0:fn.docs,source:{originalSource:`{
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
}`,...(Cn=(yn=ve.parameters)==null?void 0:yn.docs)==null?void 0:Cn.source}}};var hn,Sn,bn;Fe.parameters={...Fe.parameters,docs:{...(hn=Fe.parameters)==null?void 0:hn.docs,source:{originalSource:`{
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
}`,...(bn=(Sn=Fe.parameters)==null?void 0:Sn.docs)==null?void 0:bn.source}}};var Tn,En,gn;Re.parameters={...Re.parameters,docs:{...(Tn=Re.parameters)==null?void 0:Tn.docs,source:{originalSource:`{
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
}`,...(gn=(En=Re.parameters)==null?void 0:En.docs)==null?void 0:gn.source}}};var vn,Fn,Rn;Le.parameters={...Le.parameters,docs:{...(vn=Le.parameters)==null?void 0:vn.docs,source:{originalSource:`{
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
}`,...(Rn=(Fn=Le.parameters)==null?void 0:Fn.docs)==null?void 0:Rn.source}}};var Ln,An,jn;Ae.parameters={...Ae.parameters,docs:{...(Ln=Ae.parameters)==null?void 0:Ln.docs,source:{originalSource:`{
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
}`,...(jn=(An=Ae.parameters)==null?void 0:An.docs)==null?void 0:jn.source}}};var _n,Mn,kn;je.parameters={...je.parameters,docs:{...(_n=je.parameters)==null?void 0:_n.docs,source:{originalSource:`{
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
}`,...(kn=(Mn=je.parameters)==null?void 0:Mn.docs)==null?void 0:kn.source}}};const Ms=["Default","IntegerNumberRangeRounding","WithObjectSet","AddFilterMode","WithAllFilterTypes","WithTitleAndIcon","WithResetButton","WithActiveFilterCount","WithSorting","CollapsiblePanel","KeywordSearch","WithColorMap","WithRenderValue","WithRenderValueAsReactNode","WithListogramDisplayModes","WithHiddenCounts","WithCheckbox","CombinedWithObjectTable","CombinedWithFilteredObjectSet","WithRemovableFilters","WithStaticValues","FullFeatured","WithHasLinkFilter","CombinedWithLinkedFilter","WithCustomFilters","NoValueRendering","WithInitialFilterStates","WithResetButtonEmptyInitial","WithResetButtonNonEmptyInitial"];export{ie as AddFilterMode,ce as CollapsiblePanel,Se as CombinedWithFilteredObjectSet,ve as CombinedWithLinkedFilter,he as CombinedWithObjectTable,ee as Default,Ee as FullFeatured,te as IntegerNumberRangeRounding,de as KeywordSearch,Re as NoValueRendering,le as WithActiveFilterCount,re as WithAllFilterTypes,Ce as WithCheckbox,ue as WithColorMap,Fe as WithCustomFilters,ge as WithHasLinkFilter,ye as WithHiddenCounts,Le as WithInitialFilterStates,fe as WithListogramDisplayModes,ne as WithObjectSet,be as WithRemovableFilters,pe as WithRenderValue,me as WithRenderValueAsReactNode,oe as WithResetButton,Ae as WithResetButtonEmptyInitial,je as WithResetButtonNonEmptyInitial,ae as WithSorting,Te as WithStaticValues,se as WithTitleAndIcon,Ms as __namedExportsOrder,_s as default};
