import{j as a}from"./jsx-runtime-BGtHMjva.js";import{I as Wn,c as Hn,S as oe,C as un,u as Pn,B as Fn,g as _n,b as Kn}from"./Table-BlHjGlvV.js";import{R as C,r as u}from"./index-B5zQSQc6.js";import{g as M,W as $n,O as Jn,a as dn,b as Ln}from"./OsdkContext2-CNst2BFb.js";import"./index-wWInmAgR.js";import{f as Yn}from"./fauxFoundry-7mUUkGnK.js";import"./iframe-CTx5u6NQ.js";import"./tiny-invariant-CopsF_GD.js";import"./index-_3jhwpOT.js";const Un=new $n,qn=new Jn;function Gn(e,n){const t=["objectSet",M(e)];if(!n)return JSON.stringify(t);if(n.where&&t.push("where",Un.canonicalize(n.where)),n.withProperties){const o=Object.keys(n.withProperties).sort();t.push("props",o)}return n.union&&n.union.length>0&&t.push("union",n.union.map(o=>M(o))),n.intersect&&n.intersect.length>0&&t.push("intersect",n.intersect.map(o=>M(o))),n.subtract&&n.subtract.length>0&&t.push("subtract",n.subtract.map(o=>M(o))),n.pivotTo&&t.push("pivotTo",n.pivotTo),n.orderBy&&t.push("orderBy",qn.canonicalize(n.orderBy)),n.select&&n.select.length>0&&t.push("select",[...n.select].sort()),n.pageSize&&t.push("pageSize",n.pageSize),JSON.stringify(t)}function G(e,n,t){let o=t;function l(){return o}return{subscribe:function(i){const c=e({next:s=>{o=s,i()},error:s=>{o={...o??{},error:s instanceof Error?s:new Error(String(s))},i()},complete:()=>{}});return()=>{c.unsubscribe()}},getSnapShot:l}}const Qn="$__OBJECT__TYPE__PLACEHOLDER";function Zn(e,n={}){const{observableClient:t}=C.useContext(dn),{enabled:o=!0,streamUpdates:l,...r}=n,i=o?e.$objectSetInternals.def.apiName:Qn,c=C.useRef(i),s=C.useRef(),d=c.current!==i;d&&(c.current=i,s.current=void 0);const m=Gn(e,{where:r.where,withProperties:r.withProperties,union:r.union,intersect:r.intersect,subtract:r.subtract,pivotTo:r.pivotTo,pageSize:r.pageSize,orderBy:r.orderBy,select:r.$select}),{subscribe:y,getSnapShot:h}=C.useMemo(()=>{if(!o)return G(()=>({unsubscribe:()=>{}}));const b=d?void 0:s.current;return G(j=>t.observeObjectSet(e,{where:r.where,withProperties:r.withProperties,union:r.union,intersect:r.intersect,subtract:r.subtract,pivotTo:r.pivotTo,pageSize:r.pageSize,orderBy:r.orderBy,dedupeInterval:r.dedupeIntervalMs??2e3,autoFetchMore:r.autoFetchMore,streamUpdates:l,select:r.$select},j),void 0,b)},[o,t,m,l,d]),p=C.useSyncExternalStore(y,h);return p&&ee(p)&&(s.current=p),C.useMemo(()=>{const b=ee(p)?p:s.current;return{data:b==null?void 0:b.resolvedList,isLoading:!ee(p),error:b&&"error"in b?b.error:void 0,fetchMore:p!=null&&p.hasMore?p.fetchMore:void 0,objectSet:(p==null?void 0:p.objectSet)||e,totalCount:b==null?void 0:b.totalCount}},[p,e])}function ee(e){if(e!=null&&"error"in e)return!0;if((e==null?void 0:e.status)==null)return!1;switch(e.status){case"loaded":case"error":return!0;case"loading":case"init":return!1;default:return e.status,!1}}const Xn={};function et(e,n){const{observableClient:t}=C.useContext(dn),{pageSize:o,dedupeIntervalMs:l,withProperties:r,enabled:i=!0,rids:c,where:s,orderBy:d,streamUpdates:m,autoFetchMore:y,intersectWith:h,pivotTo:p,$select:b}=n??{},j=t.canonicalizeWhereClause(s??Xn),D=C.useMemo(()=>j,[JSON.stringify(j)]),T=C.useMemo(()=>c,[JSON.stringify(c)]),v=C.useMemo(()=>r,[JSON.stringify(r)]),w=C.useMemo(()=>h,[JSON.stringify(h)]),E=C.useMemo(()=>d,[JSON.stringify(d)]),O=C.useMemo(()=>b,[JSON.stringify(b)]),{subscribe:N,getSnapShot:Z}=C.useMemo(()=>G(i?x=>t.observeList({type:e,rids:T,where:D,dedupeInterval:l??2e3,pageSize:o,orderBy:E,streamUpdates:m,withProperties:v,autoFetchMore:y,...w?{intersectWith:w}:{},...p?{pivotTo:p}:{},...O?{select:O}:{}},x):()=>({unsubscribe:()=>{}})),[i,t,e.apiName,e.type,T,D,l,o,E,m,v,y,w,p,O]),g=C.useSyncExternalStore(N,Z);return C.useMemo(()=>{let x;return g&&"error"in g&&g.error?x=g.error:(g==null?void 0:g.status)==="error"&&(x=new Error("Failed to load objects")),{fetchMore:g!=null&&g.hasMore?g.fetchMore:void 0,error:x,data:g==null?void 0:g.resolvedList,isLoading:i?(g==null?void 0:g.status)==="loading"||(g==null?void 0:g.status)==="init"||!g:!1,isOptimistic:(g==null?void 0:g.isOptimistic)??!1,totalCount:g==null?void 0:g.totalCount}},[g,i])}function nt(){return C.useContext(Ln).client}function tt(e){const n=nt(),[t,o]=C.useState(void 0),[l,r]=C.useState();return!t&&!l?(n.fetchMetadata(e).then(i=>{o(i)}).catch(i=>{const c=i instanceof Error?i.message:String(i);r(c)}),{loading:!0}):{loading:!1,metadata:t,error:l}}const se={osdkEditableInput:"EditableCell-module__osdkEditableInput___2BjN5Q4P",osdkEditedInput:"EditableCell-module__osdkEditedInput___HxzrAqJz"},pn=["double","integer","long","float","decimal","byte","short"];function ne(e){return e==null?"":typeof e=="object"?JSON.stringify(e):String(e)}function ot(e,n){if(!n||!pn.includes(n))return e;if(e==="")return null;const t=Number(e);return isNaN(t)?e:t}function rt({initialValue:e,currentValue:n,cellId:t,dataType:o,onCellEdit:l,originalRowData:r,rowId:i,columnId:c}){const[s,d]=u.useState(ne(n)),m=u.useRef(!1);u.useEffect(()=>{d(ne(n))},[n]);const y=u.useCallback(()=>{if(m.current){m.current=!1;return}const j=ot(s,o);l(t,{rowId:i,columnId:c,newValue:j,oldValue:e,originalRowData:r})},[s,e,l,t,o,i,c,r]),h=u.useCallback(j=>{d(j)},[]),p=u.useCallback(j=>{j.key==="Enter"&&j.currentTarget.blur(),j.key==="Escape"&&(m.current=!0,d(ne(n)),j.currentTarget.blur())},[n]),b=o&&pn.includes(o)?"number":"text";return C.createElement(Wn,{className:Hn(se.osdkEditableInput,{[se.osdkEditedInput]:n!==e}),type:b,value:s,onValueChange:h,onBlur:y,onKeyDown:p})}function it(e){return JSON.stringify(e)}function lt(e){const n=e.table.options.meta,t=e.column.columnDef.meta;if(!(t!=null&&t.editable)||!(n!=null&&n.onCellEdit)||!(n!=null&&n.isInEditMode))return C.createElement(C.Fragment,null,e.getValue());const o=e.row.id,l=e.column.id,r=it({rowId:o,columnId:l}),i=n.cellEdits,c=i==null?void 0:i[r],s=(c==null?void 0:c.newValue)??e.getValue();return C.createElement(rt,{initialValue:e.getValue(),currentValue:s,cellId:r,dataType:t==null?void 0:t.dataType,onCellEdit:n.onCellEdit,originalRowData:e.row.original,rowId:o,columnId:l})}function st(e,n){const{metadata:t,loading:o,error:l}=tt(e);return{columns:u.useMemo(()=>{const i=t==null?void 0:t.properties;return n?at(n,i):ct(i)},[n,t==null?void 0:t.properties]),loading:o,error:l}}function at(e,n){return e.map(t=>{const{locator:o,width:l,minWidth:r,maxWidth:i,resizable:c,orderable:s,filterable:d,editable:m,renderCell:y,renderHeader:h,columnName:p}=t,b=o.type==="property"?n==null?void 0:n[o.id]:void 0,j=o.id,D=b!=null&&b.type&&typeof b.type=="string"?b.type:void 0;return{id:j,accessorKey:j,header:h??(p||(b==null?void 0:b.displayName)),meta:{columnName:p||(b==null?void 0:b.displayName),isVisible:t.isVisible!==!1,editable:m,dataType:D},size:l,...r?{minSize:r}:{},...i?{maxSize:i}:{},enableResizing:c,enableSorting:s,enableColumnFilter:d,cell:v=>{const w=v.row.original;return y?y(w,o):lt(v)}}})}function ct(e){return e?Object.entries(e).map(([n,t])=>({accessorKey:n,header:t.displayName??n})):[]}const ut=({columnDefinitions:e,hasSelectionColumn:n,onColumnsPinnedChanged:t})=>{const[o,l]=u.useState({left:[],right:[]});u.useEffect(()=>{const i=dt(e);l({left:[...n?[oe]:[],...i.left??[]],right:[...i.right??[]]})},[e,n]);const r=u.useCallback(i=>{l(c=>{const s=typeof i=="function"?i(c):i;if(t){const m=pt(s).filter(y=>y.columnId!==oe);t(m)}return s})},[t]);return{columnPinning:o,onColumnPinningChange:r}},dt=e=>e?e.reduce((t,{locator:o,pinned:l})=>{const r=o.id.toString();return l!=null&&l!=="none"?l==="left"?{...t,left:[...t.left??[],r]}:{...t,right:[...t.right??[],r]}:t},{left:[],right:[]}):{};function pt(e){return[...(e.left??[]).map(n=>({columnId:n,pinned:"left"})),...(e.right??[]).map(n=>({columnId:n,pinned:"right"}))]}const mt=({onColumnResize:e})=>{const[n,t]=u.useState({}),o=u.useCallback(l=>{t(r=>{const i=typeof l=="function"?l(r):l;if(e){for(const c of Object.keys(i))i[c]!==r[c]&&e(c,i[c]);for(const c of Object.keys(r))c in i||e(c,null)}return i})},[e]);return{columnSizing:n,onColumnSizingChange:o}},bt=({allColumns:e,onColumnVisibilityChanged:n})=>{const[t,o]=u.useState(()=>ae(e)),[l,r]=u.useState(()=>ce(e));u.useEffect(()=>{o(ae(e))},[e]),u.useEffect(()=>{r(ce(e))},[e]);const i=u.useCallback(s=>{o(d=>{const m=typeof s=="function"?s(d):s;if(n){const y=Object.entries(m).map(([h,p])=>({columnId:h,isVisible:p}));n(y)}return m})},[n]),c=u.useCallback(s=>{r(d=>typeof s=="function"?s(d):s)},[]);return{columnVisibility:t,onColumnVisibilityChange:i,columnOrder:l,onColumnOrderChange:c}},ae=e=>e.reduce((n,t)=>{var l;const o=t.id??t.accessorKey;return o?{...n,[o]:((l=t.meta)==null?void 0:l.isVisible)!==!1}:n},{}),ce=e=>e.map(n=>n.id??n.accessorKey).filter(n=>n!=null);function yt({editMode:e="manual",onCellValueChanged:n,onSubmitEdits:t}){const[o,l]=u.useState(e==="always"),[r,i]=u.useState({}),c=u.useCallback((y,h)=>{h.newValue===h.oldValue?i(p=>{const{[y]:b,...j}=p;return j}):i(p=>({...p,[y]:h})),n==null||n(h)},[n]),s=u.useCallback(()=>{i({})},[]),d=u.useCallback(async()=>{const y=Object.values(r);return t?t(y):!1},[r,t]);return{cellEdits:r,onCellEdit:c,onSubmitEdits:t?d:void 0,clearEdits:s,editMode:e==="always"?{type:"always",isActive:!0}:{type:"manual",isActive:o,setActive:l}}}const ue=50;function ft(e,n,t,o,l,r){const i=u.useMemo(()=>{if(!(!o||o.length===0))return o.reduce((h,p)=>(h[p.id]=p.desc?"desc":"asc",h),{})},[o]),c=u.useMemo(()=>{if(!n)return;const h=n.map(p=>p.locator).filter(p=>p.type==="rdp");if(h.length)return h.reduce((p,b)=>({...p,[b.id]:b.creator}),{})},[n]),s=e.type==="object",d=!!l&&s,m=Zn(d?l:void 0,{...r,withProperties:c,where:t,orderBy:i,pageSize:ue,enabled:d}),y=et(e,{withProperties:c,pageSize:ue,where:t,orderBy:i,enabled:!d});return d?{data:m.data,fetchMore:m.fetchMore,isLoading:m.isLoading,error:m.error,totalCount:m.totalCount,isOptimistic:!1}:y}const mn=e=>bn(e.$primaryKey),bn=e=>e.toString();function gt({selectionMode:e="none",selectedRows:n,onRowSelection:t,data:o}){const[l,r]=u.useState({}),[i,c]=u.useState(null),s=n!==void 0,d=e!=="none",m=u.useMemo(()=>d?s&&n?te(n):l:{},[d,s,n,l]),y=Object.values(m).filter(Boolean).length,h=(o==null?void 0:o.length)??0,p=h>0&&y===h,b=u.useCallback(()=>{if(!d||!o)return;const D=p?[]:o.map(T=>T.$primaryKey);s||r(te(D)),t==null||t(D)},[d,o,p,s,t]),j=u.useCallback((D,T,v=!1)=>{if(!d||!o)return;let w=[];e==="single"?w=ht({rowId:D,rowIndex:T,data:o,rowSelectionState:m}):v&&i!=null?(w=Ct({rowIndex:T,data:o,lastSelectedRowIndex:i,rowSelectionState:m}),c(T)):(w=jt({rowIndex:T,data:o,rowSelectionState:m}),yn({rowIndex:T,data:o,rowSelectionState:m})||c(T)),s||r(te(w)),t==null||t(w)},[d,o,e,i,s,m,t]);return{rowSelection:m,isAllSelected:p,enableRowSelection:d,hasSelection:y>0,onToggleAll:b,onToggleRow:j}}function ht({rowId:e,rowIndex:n,data:t,rowSelectionState:o}){const l=t[n].$primaryKey;return o[e]?[]:[l]}function Ct({lastSelectedRowIndex:e,rowIndex:n,data:t,rowSelectionState:o}){if(e!=null){const r=St(t,e,n).map(s=>s.$primaryKey),c=[...re(o,t)];return r.forEach(s=>{c.includes(s)||c.push(s)}),c}return[]}function yn({rowIndex:e,data:n,rowSelectionState:t}){const o=n[e].$primaryKey;return re(t,n).includes(o)}function jt({rowIndex:e,data:n,rowSelectionState:t}){const o=n[e].$primaryKey,l=re(t,n);return yn({rowIndex:e,data:n,rowSelectionState:t})?l.filter(i=>i!==o):[...l,o]}function St(e,n,t){const o=Math.min(n,t),l=Math.max(n,t),r=[];for(let i=o;i<=l;i++){const c=e[i];c&&r.push(c)}return r}function te(e){return e.reduce((n,t)=>(n[bn(t)]=!0,n),{})}function re(e,n){return n.filter(t=>e[mn(t)]).map(t=>t.$primaryKey)}function Tt({isAllSelected:e,hasSelection:n,onToggleAll:t}){return C.createElement(un,{indeterminate:n&&!e,checked:e,onCheckedChange:t,"aria-label":"Select all rows"})}function wt({row:e,onToggleRow:n}){const t=u.useCallback(l=>{l.stopPropagation();const r=l.shiftKey;n(e.id,e.index,r)},[n,e.id,e.index]),o=u.useCallback(l=>{if(l.key==="Enter"){const r=l.shiftKey;n(e.id,e.index,r)}},[n,e.id,e.index]);return C.createElement("div",{onClick:t,onKeyDown:o},C.createElement(un,{checked:e.getIsSelected(),"aria-label":`Select row ${e.index+1}`}))}const Dt=({selectionMode:e,isAllSelected:n,hasSelection:t,onToggleAll:o,onToggleRow:l})=>{const r=u.useRef(n);r.current=n;const i=u.useRef(t);i.current=t;const c=u.useRef(o);c.current=o;const s=u.useRef(l);return s.current=l,u.useMemo(()=>e==="none"?null:{id:oe,header:()=>e==="multiple"?C.createElement(Tt,{isAllSelected:r.current,hasSelection:i.current,onToggleAll:c.current}):null,cell:({row:m})=>C.createElement(wt,{row:m,onToggleRow:s.current}),size:50,minSize:50,maxSize:50,enableSorting:!1,enableResizing:!1,enablePinning:!1},[e])},vt=({orderBy:e,defaultOrderBy:n,onOrderByChanged:t})=>{const[o,l]=u.useState(()=>n?de(n):[]),r=e!==void 0,i=u.useMemo(()=>e?de(e):o,[e,o]),c=u.useCallback(s=>{const d=typeof s=="function"?s(i):s;if(r||l(d),t){const m=xt(d);t(m)}},[r,i,t]);return{sorting:i,onSortingChange:c}};function de(e){return e.map(({property:n,direction:t})=>({id:n,desc:t==="desc"}))}function xt(e){return e.map(({id:n,desc:t})=>({property:n,direction:t?"desc":"asc"}))}const Et=[];function S({objectType:e,objectSet:n,columnDefinitions:t,filter:o,objectSetOptions:l,orderBy:r,defaultOrderBy:i,onOrderByChanged:c,onColumnsPinnedChanged:s,onColumnResize:d,onRowSelection:m,renderCellContextMenu:y,selectionMode:h="none",selectedRows:p,onColumnVisibilityChanged:b,onCellValueChanged:j,onSubmitEdits:D,enableOrdering:T=!0,enableColumnPinning:v=!0,enableColumnResizing:w=!0,enableColumnConfig:E=!0,editMode:O="manual",...N}){const{columnSizing:Z,onColumnSizingChange:g}=mt({onColumnResize:d}),{sorting:x,onSortingChange:fn}=vt({orderBy:r,defaultOrderBy:i,onOrderByChanged:c}),{data:ie,fetchMore:gn,isLoading:hn,error:Cn}=ft(e,t,o,x,n,l),{columns:k,loading:jn}=st(e,t),{rowSelection:Sn,isAllSelected:Tn,hasSelection:wn,onToggleAll:Dn,onToggleRow:vn,enableRowSelection:le}=gt({selectionMode:h,selectedRows:p,onRowSelection:m,data:ie}),X=Dt({selectionMode:h,isAllSelected:Tn,hasSelection:wn,onToggleAll:Dn,onToggleRow:vn}),{columnVisibility:xn,onColumnVisibilityChange:En,columnOrder:On,onColumnOrderChange:Nn}=bt({allColumns:k,onColumnVisibilityChanged:b}),{columnPinning:kn,onColumnPinningChange:Rn}=ut({columnDefinitions:t,hasSelectionColumn:le,onColumnsPinnedChanged:s}),Mn=u.useMemo(()=>X?[X,...k]:k,[X,k]),R=yt({editMode:O,onCellValueChanged:j,onSubmitEdits:D}),In=Pn({data:ie??Et,columns:Mn,getCoreRowModel:_n(),state:{columnVisibility:xn,columnOrder:On,rowSelection:Sn,sorting:x,columnSizing:Z,columnPinning:kn},onSortingChange:fn,onColumnSizingChange:g,onColumnPinningChange:Rn,onColumnVisibilityChange:En,onColumnOrderChange:Nn,enableRowSelection:le,enableSorting:T,columnResizeMode:"onChange",columnResizeDirection:"ltr",manualSorting:!0,defaultColumn:{minSize:80},getRowId:mn,meta:{onCellEdit:R.onCellEdit,cellEdits:R.cellEdits,isInEditMode:R.editMode.isActive}}),Bn=u.useCallback((An,zn)=>y==null?void 0:y(An,zn.getValue()),[y]),Vn=u.useMemo(()=>({showSortingItems:T,showPinningItems:v,showResizeItem:w,showConfigItem:E}),[T,v,w,E]);return C.createElement(Fn,{table:In,isLoading:hn||jn,fetchNextPage:gn,onRowClick:N.onRowClick,rowHeight:N.rowHeight,renderCellContextMenu:Bn,className:N.className,error:Cn,headerMenuFeatureFlags:Vn,editableConfig:R})}const f={type:"object",apiName:"Employee"},zt={title:"Components/ObjectTable",component:S,parameters:{msw:{handlers:[...Yn.handlers]},controls:{expanded:!0}},argTypes:{objectType:{description:"The object or interface type of the object",control:!1},columnDefinitions:{description:"Ordered list of column definitions to show in the table. If not provided, all of the properties of the object type will be shown in default order.",control:"object"},filter:{description:"The current where clause to filter the objects in the table. If provided, the filter is controlled.",control:"object"},enableOrdering:{description:"Whether the table is sortable by the user.",control:"boolean",defaultValue:!0,table:{defaultValue:{summary:"true"}}},enableColumnPinning:{description:"Whether columns can be pinned by the user.",control:"boolean",defaultValue:!0,table:{defaultValue:{summary:"true"}}},enableColumnResizing:{description:"Whether columns can be resized by the user.",control:"boolean",defaultValue:!0,table:{defaultValue:{summary:"true"}}},enableColumnConfig:{description:"Whether the column configuration dialog for column visibility and ordering is available to the user.",control:"boolean",defaultValue:!0,table:{defaultValue:{summary:"true"}}},editMode:{description:"Controls the edit mode behavior of the table. 'always': Table is always in edit mode. 'manual': User can toggle edit mode on/off.",control:"select",options:["manual","always"],defaultValue:"manual",table:{defaultValue:{summary:"manual"}}},defaultOrderBy:{description:"The default order by clause to sort the objects in the table. If provided without orderBy prop, the sorting is uncontrolled. If both orderBy and defaultOrderBy are provided, orderBy takes precedence.",control:"object"},orderBy:{description:"The current order by clause to sort the objects in the table. If provided, the sorting is controlled. If both orderBy and defaultOrderBy are provided, orderBy takes precedence.",control:"object"},onOrderByChanged:{description:"Called when the order by clause is changed. Required when sorting is controlled.",control:!1,table:{category:"Events"}},onColumnVisibilityChanged:{description:"Called when the column visibility or ordering changed. If provided, the table will allow the user to show/hide columns.",control:!1,table:{category:"Events"}},onColumnsPinnedChanged:{description:"Called when the pinned columns change. If provided, the table will allow the user to pin/unpin columns.",control:!1,table:{category:"Events"}},onColumnResize:{description:"Called when a column is resized. Parameters: columnId - The ID of the resized column, newWidth - The new width of the column. When newWidth = null, the column size is reset.",control:!1,table:{category:"Events"}},onRowClick:{description:"Called when a row is clicked.",control:!1,table:{category:"Events"}},selectionMode:{description:"Selection mode for the table rows. If multiple, a checkbox will be shown for each row to allow selecting multiple rows as well as a top-level checkbox in the header to select all rows.",control:{type:"select"},options:["single","multiple","none"],defaultValue:"none",table:{defaultValue:{summary:"none"}}},selectedRows:{description:"The currently selected rows in the table. If provided, the row selection is controlled.",control:"object"},onRowSelection:{description:"Called when the row selection changes. Required when row selection is controlled.",control:!1,table:{category:"Events"}},renderCellContextMenu:{description:"If provided, will render this context menu when right clicking on a cell",control:!1,table:{category:"Advanced"}},rowHeight:{description:"The height of each row in pixels.",control:"number",defaultValue:40,table:{defaultValue:{summary:"40"}}},className:{description:"Additional CSS class name for the table",control:"text"}}},Q=[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"emailPrimaryWork"},renderHeader:()=>"Email"},{locator:{type:"property",id:"jobTitle"},isVisible:!1},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"firstFullTimeStartDate"},width:200,renderHeader:()=>"Start Date",renderCell:e=>a.jsx("div",{children:e.firstFullTimeStartDate?new Date(e.firstFullTimeStartDate).toLocaleDateString():"No date"})},{locator:{type:"rdp",id:"managerName",creator:e=>e.pivotTo("lead").selectProperty("fullName")},renderHeader:()=>"Manager",renderCell:e=>"managerName"in e?a.jsx("span",{children:e.managerName}):a.jsx("span",{style:{color:"#999"},children:"No Manager"})}],I={args:{objectType:f},parameters:{docs:{source:{code:"<ObjectTable objectType={Employee} />"}}},render:e=>a.jsx("div",{className:"object-table-container",style:{height:"600px"},children:a.jsx(S,{objectType:f,...e})})},B={args:{objectType:f,columnDefinitions:Q},parameters:{docs:{source:{code:`const columnDefinitions = [
  {
    locator: { type: "property", id: "fullName" },
  },
  {
    locator: { type: "property", id: "emailPrimaryWork" },
    renderHeader: () => "Email",
  },
  {
    locator: { type: "property", id: "jobTitle" },
    isVisible: false,
  },
  {
    locator: { type: "property", id: "department" },
  },
  {
    locator: { type: "property", id: "firstFullTimeStartDate" },
    width: 200,
    renderHeader: () => "Start Date",
    renderCell: (object) => {
      return (
        <div>
          {object["firstFullTimeStartDate"]
            ? new Date(object["firstFullTimeStartDate"]).toLocaleDateString()
            : "No date"}
        </div>
      );
    },
  },
  {
    locator: {
      type: "rdp",
      id: "managerName",
      creator: (baseObjectSet) =>
        baseObjectSet.pivotTo("lead").selectProperty("fullName"),
    },
    renderHeader: () => "Manager",
    renderCell: (object) => {
      if ("managerName" in object) {
        return <span>{object["managerName"]}</span>;
      }
      return <span style={{ color: "#999" }}>No Manager</span>;
    },
  },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:e=>a.jsx("div",{className:"object-table-container",style:{height:"600px"},children:a.jsx(S,{objectType:f,...e})})},V={args:{objectType:f,selectionMode:"single"},parameters:{docs:{source:{code:'<ObjectTable objectType={Employee} selectionMode="single" />'}}},render:e=>a.jsx("div",{className:"object-table-container",style:{height:"600px"},children:a.jsx(S,{objectType:f,...e})})},A={args:{objectType:f,selectionMode:"multiple"},parameters:{docs:{source:{code:'<ObjectTable objectType={Employee} selectionMode="multiple" />'}}},render:e=>a.jsx("div",{className:"object-table-container",style:{height:"600px"},children:a.jsx(S,{objectType:f,...e})})},z={args:{objectType:f,renderCellContextMenu:(e,n)=>a.jsxs("div",{style:{background:"white",padding:8,border:"1px solid #d1d5db",boxShadow:"0 2px 8px 0 rgba(0, 0, 0, 0.1)",fontSize:13,borderRadius:4},children:[a.jsx("div",{style:{fontWeight:"bold",marginBottom:4},children:"Cell Value:"}),a.jsx("div",{children:n?String(n):"No Value"})]})},parameters:{docs:{source:{code:`<ObjectTable
  objectType={Employee}
  renderCellContextMenu={(_, cellValue) => {
    return (
      <div
        style={{
          background: "white",
          padding: 8,
          border: "1px solid #d1d5db",
          boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.1)",
          fontSize: 13,
          borderRadius: 4,
        }}
      >
        <div style={{ fontWeight: "bold", marginBottom: 4 }}>Cell Value:</div>
        <div>{cellValue ? String(cellValue) : "No Value"}</div>
      </div>
    );
  }}
/>`}}},render:e=>a.jsxs("div",{className:"object-table-container",style:{height:"600px"},children:[a.jsx("div",{style:{padding:"12px"},children:"Right click on any cell"}),a.jsx(S,{objectType:f,...e})]})},W={args:{objectType:f,defaultOrderBy:[{property:"fullName",direction:"desc"}]},parameters:{docs:{source:{code:`<ObjectTable
  objectType={Employee}
  defaultOrderBy={[{
    property: "fullName",
    direction: "desc",
  }]}
/>`}}},render:e=>a.jsx("div",{className:"object-table-container",style:{height:"600px"},children:a.jsx(S,{objectType:f,...e})})},H={args:{objectType:f,columnDefinitions:[{locator:{type:"property",id:"fullName"},pinned:"left"},{locator:{type:"property",id:"emailPrimaryWork"}},{locator:{type:"property",id:"jobTitle"}},{locator:{type:"property",id:"department"},pinned:"right"},{locator:{type:"property",id:"firstFullTimeStartDate"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
    ...columnDefinitions,
   {
      locator: { type: "property", id: "fullName" },
      pinned: "left",
    },
    {
      locator: { type: "property", id: "department" },
      pinned: "right",
    },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:e=>a.jsx("div",{className:"object-table-container",style:{height:"600px"},children:a.jsx(S,{objectType:f,...e})})},P={parameters:{docs:{source:{code:`const customColumnDefinition = [
      ...columnDefinitions,
      {
        locator: {
          type: "custom",
          id: "actions",
        },
        renderHeader: () => "Actions",
        renderCell: (object: any) => {
          return (
            <div style={{ display: "flex", gap: "8px" }}>
              <button
                onClick={() => {}}
              >
                View
              </button>
              <button
                onClick={() => {}}
              >
                Edit
              </button>
            </div>
          );
        },
        orderable: false,
        width: 120,
      },
    ]
    
    return  <ObjectTable objectType={Employee} columnDefinitions={customColumnDefinition} />
    `}}},args:{objectType:f,columnDefinitions:[...Q.slice(0,3),{locator:{type:"custom",id:"actions"},renderHeader:()=>"Actions",renderCell:e=>a.jsxs("div",{style:{display:"flex",gap:"8px"},children:[a.jsx("button",{style:{padding:"4px 8px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:"pointer"},onClick:()=>alert(`View ${e.fullName}`),children:"View"}),a.jsx("button",{style:{padding:"4px 8px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:"pointer"},onClick:()=>alert(`Edit ${e.fullName}`),children:"Edit"})]}),orderable:!1,width:120}]},render:e=>a.jsx("div",{className:"object-table-container",style:{height:"600px"},children:a.jsx(S,{objectType:f,...e})})},F={args:{objectType:f,onRowClick:e=>{alert(`Clicked on ${e.fullName}`)}},parameters:{docs:{source:{code:`<ObjectTable
  objectType={Employee}
  onRowClick={(employee) => {
    alert(\`Clicked on \${employee["fullName"]}\`);
  }}
/>`}}},render:e=>a.jsx("div",{className:"object-table-container",style:{height:"600px"},children:a.jsx(S,{objectType:f,...e})})},_={parameters:{docs:{source:{code:`const [orderBy, setOrderBy] = useState<any>([
  { property: "fullName", direction: "asc" },
]);

return (
  <ObjectTable
    objectType={Employee}
    orderBy={orderBy}
    onOrderByChanged={setOrderBy}
  />
);`}}},render:()=>{const[e,n]=u.useState([{property:"fullName",direction:"asc"}]);return a.jsxs("div",{children:[a.jsxs("div",{style:{marginBottom:"16px"},children:[a.jsx("strong",{children:"Current Sort:"})," ",e.map((t,o)=>a.jsxs("span",{children:[t.property," (",t.direction,")",o<e.length-1&&", "]},o))]}),a.jsx("div",{className:"object-table-container",style:{height:"600px"},children:a.jsx(S,{objectType:f,orderBy:e,onOrderByChanged:n})})]})}},K={parameters:{docs:{source:{code:`const [selectedRows, setSelectedRows] = useState<any[]>([]);

return (
  <ObjectTable
    objectType={Employee}
    selectionMode="multiple"
    selectedRows={selectedRows}
    onRowSelection={setSelectedRows}
  />
);`}}},render:()=>{const[e,n]=u.useState([]);return a.jsxs("div",{children:[a.jsxs("div",{style:{marginBottom:"16px"},children:[a.jsx("strong",{children:"Selected:"})," ",e.length," employees",e.length>0&&a.jsx("button",{style:{marginLeft:"16px",padding:"4px 8px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:"pointer"},onClick:()=>n([]),children:"Clear Selection"})]}),a.jsx("div",{className:"object-table-container",style:{height:"600px"},children:a.jsx(S,{objectType:f,selectionMode:"multiple",selectedRows:e,onRowSelection:n})})]})}},$={args:{objectType:f,enableOrdering:!1,enableColumnPinning:!1,enableColumnResizing:!1,enableColumnConfig:!1},parameters:{docs:{source:{code:`<ObjectTable
  objectType={Employee}
  enableOrdering={false}
  enableColumnPinning={false}
  enableColumnResizing={false}
  enableColumnConfig={false}
/>`}}},render:e=>a.jsx("div",{className:"object-table-container",style:{height:"600px"},children:a.jsx(S,{objectType:f,...e})})},J={args:{objectType:f,rowHeight:56},parameters:{docs:{source:{code:"<ObjectTable objectType={Employee} rowHeight={56} />"}}},render:e=>a.jsx("div",{className:"object-table-container",style:{height:"600px"},children:a.jsx(S,{objectType:f,...e})})},L={args:{objectType:f,columnDefinitions:[{locator:{type:"property",id:"fullName"},renderHeader:()=>a.jsx("a",{href:"#",className:"header-link",onClick:e=>{e.preventDefault(),alert("Employee Name column clicked!")},children:"Employee Name"})},{locator:{type:"property",id:"emailPrimaryWork"}},{locator:{type:"property",id:"jobTitle"},renderHeader:()=>"Job Title"},{locator:{type:"custom",id:"employment-status"},renderHeader:()=>"Employment Status",renderCell:e=>{const n=e.firstFullTimeStartDate,t=n&&new Date(n)<=new Date;return a.jsx("span",{className:`status-tag ${t?"active":"inactive"}`,children:t?"Active":"Inactive"})},width:140},{locator:{type:"property",id:"department"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
  {
    locator: { type: "property", id: "fullName" },
    renderHeader: () => (
      <a
        href="#"
        className="header-link"
        onClick={(e) => {
          e.preventDefault();
          alert("Employee Name column clicked!");
        }}
      >
        Employee Name
      </a>
    ),
  },
  {
    locator: { type: "property", id: "emailPrimaryWork" },
  },
  {
    locator: { type: "property", id: "jobTitle" },
    renderHeader: () => "Job Title",
  },
  {
    locator: {
      type: "custom",
      id: "employment-status",
    },
    renderHeader: () => "Employment Status",
    renderCell: (employee) => {
      const startDate = employee["firstFullTimeStartDate"];
      const isActive = startDate && new Date(startDate) <= new Date();

      return (
        <span className={\`status-tag \${isActive ? "active" : "inactive"}\`}>
          {isActive ? "Active" : "Inactive"}
        </span>
      );
    },
    width: 140,
  },
  {
    locator: { type: "property", id: "department" },
  },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:e=>a.jsx("div",{className:"object-table-container",style:{height:"600px"},children:a.jsx(S,{objectType:f,...e})})},Y={parameters:{docs:{source:{code:`const [isColumnConfigOpen, setIsColumnConfigOpen] = useState(false);
const [columnDefinitions, setColumnDefinitions] = useState(initialColumnDefinitions);

const handleApplyColumnConfig = useCallback(
  (columns: Array<{ columnId: string; isVisible: boolean }>) => {
    const newColumnDefinitions = [];
    columns.forEach(({ columnId, isVisible }) => {
      if (isVisible) {
        const colDef = initialColumnDefinitions.find(def => def.locator.id === columnId);
        if (colDef) {
          newColumnDefinitions.push(colDef);
        }
      }
    });
    setColumnDefinitions(newColumnDefinitions);
    setIsColumnConfigOpen(false);
  },
  [],
);

return (
  <>
    <button onClick={() => setIsColumnConfigOpen(true)}>
      Configure Columns
    </button>
    <ObjectTable
      objectType={Employee}
      columnDefinitions={columnDefinitions}
      enableColumnConfig={false}
    />
    <ColumnConfigDialog
      isOpen={isColumnConfigOpen}
      onClose={() => setIsColumnConfigOpen(false)}
      columnOptions={columnOptions}
      currentVisibility={currentVisibility}
      currentColumnOrder={currentColumnOrder}
      onApply={handleApplyColumnConfig}
    />
  </>
);`}}},render:()=>{const e=[{locator:{type:"property",id:"fullName"},columnName:"Full Name"},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job Title"},{locator:{type:"property",id:"department"},columnName:"Department"}],[n,t]=u.useState(!1),[o,l]=u.useState(e),r=u.useMemo(()=>e.map(d=>({id:d.locator.id,name:d.columnName||d.locator.id})),[]),i=u.useMemo(()=>{const d={};return e.forEach(m=>{d[m.locator.id]=o.some(y=>y.locator.id===m.locator.id)}),d},[o]),c=u.useMemo(()=>o.map(d=>d.locator.id),[o]),s=u.useCallback(d=>{const m=[];d.forEach(({columnId:y,isVisible:h})=>{if(h){const p=e.find(b=>b.locator.id===y);p&&m.push(p)}}),l(m),t(!1)},[]);return a.jsxs("div",{style:{height:"600px",display:"flex",flexDirection:"column"},children:[a.jsx("div",{style:{padding:"8px 0",marginBottom:8},children:a.jsx("button",{onClick:()=>t(!0),style:{padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Configure Columns"})}),a.jsx(S,{objectType:f,columnDefinitions:o,enableColumnConfig:!1}),a.jsx(Kn,{isOpen:n,onClose:()=>t(!1),columnOptions:r,currentVisibility:i,currentColumnOrder:c,onApply:s})]})}},U={args:{objectType:f,columnDefinitions:[{locator:{type:"property",id:"fullName"},editable:!0},...Q.slice(1)],editMode:"manual"},parameters:{docs:{source:{code:`const columnDefinitions = [
  ...columnDefinitions,
  {
    locator: {
      type: "property",
      id: "fullName",
    },
    editable: true,
  },
  ];

  return (
    <ObjectTable 
      objectType={Employee} 
      columnDefinitions={columnDefinitions} 
      editMode="manual" 
    />
  );`}}},render:e=>a.jsx("div",{className:"object-table-container",style:{height:"600px"},children:a.jsx(S,{objectType:f,...e})})},q={args:{objectType:f,columnDefinitions:[...Q,{locator:{type:"property",id:"fullName"},editable:!0}],onSubmitEdits:e=>(alert("Submitting edits"),!0)},parameters:{docs:{source:{code:`const columnDefinitions = [
  ...columnDefinitions,
  {
    locator: {
      type: "property",
      id: "fullName",
    },
    editable: true,
  },
  ];

  return <ObjectTable 
    objectType={Employee} 
    columnDefinitions={columnDefinitions} 
    onSubmitEdits={(edits) => {
        alert("Submitting edits");
        // Return true to indicate edits were successfully submitted and can be cleared from the table's edit state
        return true;
    }}
  />`}}},render:e=>a.jsx("div",{className:"object-table-container",style:{height:"600px"},children:a.jsx(S,{objectType:f,...e})})};var pe,me,be;I.parameters={...I.parameters,docs:{...(pe=I.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    objectType: Employee
  },
  parameters: {
    docs: {
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable objectType={Employee} {...args} />
    </div>
}`,...(be=(me=I.parameters)==null?void 0:me.docs)==null?void 0:be.source}}};var ye,fe,ge;B.parameters={...B.parameters,docs:{...(ye=B.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: columnDefinitions as any
  },
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
  {
    locator: { type: "property", id: "fullName" },
  },
  {
    locator: { type: "property", id: "emailPrimaryWork" },
    renderHeader: () => "Email",
  },
  {
    locator: { type: "property", id: "jobTitle" },
    isVisible: false,
  },
  {
    locator: { type: "property", id: "department" },
  },
  {
    locator: { type: "property", id: "firstFullTimeStartDate" },
    width: 200,
    renderHeader: () => "Start Date",
    renderCell: (object) => {
      return (
        <div>
          {object["firstFullTimeStartDate"]
            ? new Date(object["firstFullTimeStartDate"]).toLocaleDateString()
            : "No date"}
        </div>
      );
    },
  },
  {
    locator: {
      type: "rdp",
      id: "managerName",
      creator: (baseObjectSet) =>
        baseObjectSet.pivotTo("lead").selectProperty("fullName"),
    },
    renderHeader: () => "Manager",
    renderCell: (object) => {
      if ("managerName" in object) {
        return <span>{object["managerName"]}</span>;
      }
      return <span style={{ color: "#999" }}>No Manager</span>;
    },
  },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable objectType={Employee} {...args} />
    </div>
}`,...(ge=(fe=B.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var he,Ce,je;V.parameters={...V.parameters,docs:{...(he=V.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    selectionMode: "single"
  },
  parameters: {
    docs: {
      source: {
        code: \`<ObjectTable objectType={Employee} selectionMode="single" />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable objectType={Employee} {...args} />
    </div>
}`,...(je=(Ce=V.parameters)==null?void 0:Ce.docs)==null?void 0:je.source}}};var Se,Te,we;A.parameters={...A.parameters,docs:{...(Se=A.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    selectionMode: "multiple"
  },
  parameters: {
    docs: {
      source: {
        code: \`<ObjectTable objectType={Employee} selectionMode="multiple" />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable objectType={Employee} {...args} />
    </div>
}`,...(we=(Te=A.parameters)==null?void 0:Te.docs)==null?void 0:we.source}}};var De,ve,xe;z.parameters={...z.parameters,docs:{...(De=z.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    renderCellContextMenu: (_: any, cellValue: unknown) => {
      return <div style={{
        background: "white",
        padding: 8,
        border: "1px solid #d1d5db",
        boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.1)",
        fontSize: 13,
        borderRadius: 4
      }}>
          <div style={{
          fontWeight: "bold",
          marginBottom: 4
        }}>Cell Value:</div>
          <div>{cellValue ? String(cellValue) : "No Value"}</div>
        </div>;
    }
  },
  parameters: {
    docs: {
      source: {
        code: \`<ObjectTable
  objectType={Employee}
  renderCellContextMenu={(_, cellValue) => {
    return (
      <div
        style={{
          background: "white",
          padding: 8,
          border: "1px solid #d1d5db",
          boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.1)",
          fontSize: 13,
          borderRadius: 4,
        }}
      >
        <div style={{ fontWeight: "bold", marginBottom: 4 }}>Cell Value:</div>
        <div>{cellValue ? String(cellValue) : "No Value"}</div>
      </div>
    );
  }}
/>\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <div style={{
      padding: "12px"
    }}>Right click on any cell</div>
      <ObjectTable objectType={Employee} {...args} />
    </div>
}`,...(xe=(ve=z.parameters)==null?void 0:ve.docs)==null?void 0:xe.source}}};var Ee,Oe,Ne;W.parameters={...W.parameters,docs:{...(Ee=W.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    defaultOrderBy: [{
      property: "fullName",
      direction: "desc"
    }]
  },
  parameters: {
    docs: {
      source: {
        code: \`<ObjectTable
  objectType={Employee}
  defaultOrderBy={[{
    property: "fullName",
    direction: "desc",
  }]}
/>\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable objectType={Employee} {...args} />
    </div>
}`,...(Ne=(Oe=W.parameters)==null?void 0:Oe.docs)==null?void 0:Ne.source}}};var ke,Re,Me;H.parameters={...H.parameters,docs:{...(ke=H.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [{
      locator: {
        type: "property",
        id: "fullName"
      },
      pinned: "left"
    }, {
      locator: {
        type: "property",
        id: "emailPrimaryWork"
      }
    }, {
      locator: {
        type: "property",
        id: "jobTitle"
      }
    }, {
      locator: {
        type: "property",
        id: "department"
      },
      pinned: "right"
    }, {
      locator: {
        type: "property",
        id: "firstFullTimeStartDate"
      }
    }] as any
  },
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
    ...columnDefinitions,
   {
      locator: { type: "property", id: "fullName" },
      pinned: "left",
    },
    {
      locator: { type: "property", id: "department" },
      pinned: "right",
    },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable objectType={Employee} {...args} />
    </div>
}`,...(Me=(Re=H.parameters)==null?void 0:Re.docs)==null?void 0:Me.source}}};var Ie,Be,Ve;P.parameters={...P.parameters,docs:{...(Ie=P.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`const customColumnDefinition = [
      ...columnDefinitions,
      {
        locator: {
          type: "custom",
          id: "actions",
        },
        renderHeader: () => "Actions",
        renderCell: (object: any) => {
          return (
            <div style={{ display: "flex", gap: "8px" }}>
              <button
                onClick={() => {}}
              >
                View
              </button>
              <button
                onClick={() => {}}
              >
                Edit
              </button>
            </div>
          );
        },
        orderable: false,
        width: 120,
      },
    ]
    
    return  <ObjectTable objectType={Employee} columnDefinitions={customColumnDefinition} />
    \`
      }
    }
  },
  args: {
    objectType: Employee,
    columnDefinitions: [...columnDefinitions.slice(0, 3), {
      locator: {
        type: "custom",
        id: "actions"
      },
      renderHeader: () => "Actions",
      renderCell: (object: any) => {
        return <div style={{
          display: "flex",
          gap: "8px"
        }}>
              <button style={{
            padding: "4px 8px",
            fontSize: "12px",
            border: "1px solid #d1d5db",
            borderRadius: "4px",
            background: "white",
            cursor: "pointer"
          }} onClick={() => alert(\`View \${object["fullName"]}\`)}>
                View
              </button>
              <button style={{
            padding: "4px 8px",
            fontSize: "12px",
            border: "1px solid #d1d5db",
            borderRadius: "4px",
            background: "white",
            cursor: "pointer"
          }} onClick={() => alert(\`Edit \${object["fullName"]}\`)}>
                Edit
              </button>
            </div>;
      },
      orderable: false,
      width: 120
    }] as any
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable objectType={Employee} {...args} />
    </div>
}`,...(Ve=(Be=P.parameters)==null?void 0:Be.docs)==null?void 0:Ve.source}}};var Ae,ze,We;F.parameters={...F.parameters,docs:{...(Ae=F.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    onRowClick: (employee: any) => {
      alert(\`Clicked on \${employee["fullName"]}\`);
    }
  },
  parameters: {
    docs: {
      source: {
        code: \`<ObjectTable
  objectType={Employee}
  onRowClick={(employee) => {
    alert(\\\`Clicked on \\\${employee["fullName"]}\\\`);
  }}
/>\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable objectType={Employee} {...args} />
    </div>
}`,...(We=(ze=F.parameters)==null?void 0:ze.docs)==null?void 0:We.source}}};var He,Pe,Fe;_.parameters={..._.parameters,docs:{...(He=_.parameters)==null?void 0:He.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`const [orderBy, setOrderBy] = useState<any>([
  { property: "fullName", direction: "asc" },
]);

return (
  <ObjectTable
    objectType={Employee}
    orderBy={orderBy}
    onOrderByChanged={setOrderBy}
  />
);\`
      }
    }
  },
  render: () => {
    const [orderBy, setOrderBy] = useState<any>([{
      property: "fullName",
      direction: "asc"
    }]);
    return <div>
        <div style={{
        marginBottom: "16px"
      }}>
          <strong>Current Sort:</strong>{" "}
          {orderBy.map((o: any, i: number) => <span key={i}>
              {o.property} ({o.direction})
              {i < orderBy.length - 1 && ", "}
            </span>)}
        </div>
        <div className="object-table-container" style={{
        height: "600px"
      }}>
          <ObjectTable objectType={Employee} orderBy={orderBy} onOrderByChanged={setOrderBy} />
        </div>
      </div>;
  }
}`,...(Fe=(Pe=_.parameters)==null?void 0:Pe.docs)==null?void 0:Fe.source}}};var _e,Ke,$e;K.parameters={...K.parameters,docs:{...(_e=K.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`const [selectedRows, setSelectedRows] = useState<any[]>([]);

return (
  <ObjectTable
    objectType={Employee}
    selectionMode="multiple"
    selectedRows={selectedRows}
    onRowSelection={setSelectedRows}
  />
);\`
      }
    }
  },
  render: () => {
    const [selectedRows, setSelectedRows] = useState<any[]>([]);
    return <div>
        <div style={{
        marginBottom: "16px"
      }}>
          <strong>Selected:</strong> {selectedRows.length} employees
          {selectedRows.length > 0 && <button style={{
          marginLeft: "16px",
          padding: "4px 8px",
          fontSize: "12px",
          border: "1px solid #d1d5db",
          borderRadius: "4px",
          background: "white",
          cursor: "pointer"
        }} onClick={() => setSelectedRows([])}>
              Clear Selection
            </button>}
        </div>
        <div className="object-table-container" style={{
        height: "600px"
      }}>
          <ObjectTable objectType={Employee} selectionMode="multiple" selectedRows={selectedRows} onRowSelection={setSelectedRows} />
        </div>
      </div>;
  }
}`,...($e=(Ke=K.parameters)==null?void 0:Ke.docs)==null?void 0:$e.source}}};var Je,Le,Ye;$.parameters={...$.parameters,docs:{...(Je=$.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    enableOrdering: false,
    enableColumnPinning: false,
    enableColumnResizing: false,
    enableColumnConfig: false
  },
  parameters: {
    docs: {
      source: {
        code: \`<ObjectTable
  objectType={Employee}
  enableOrdering={false}
  enableColumnPinning={false}
  enableColumnResizing={false}
  enableColumnConfig={false}
/>\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable objectType={Employee} {...args} />
    </div>
}`,...(Ye=(Le=$.parameters)==null?void 0:Le.docs)==null?void 0:Ye.source}}};var Ue,qe,Ge;J.parameters={...J.parameters,docs:{...(Ue=J.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    rowHeight: 56
  },
  parameters: {
    docs: {
      source: {
        code: \`<ObjectTable objectType={Employee} rowHeight={56} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable objectType={Employee} {...args} />
    </div>
}`,...(Ge=(qe=J.parameters)==null?void 0:qe.docs)==null?void 0:Ge.source}}};var Qe,Ze,Xe;L.parameters={...L.parameters,docs:{...(Qe=L.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [{
      locator: {
        type: "property",
        id: "fullName"
      },
      renderHeader: () => <a href="#" className="header-link" onClick={e => {
        e.preventDefault();
        alert("Employee Name column clicked!");
      }}>
            Employee Name
          </a>
    }, {
      locator: {
        type: "property",
        id: "emailPrimaryWork"
      }
    }, {
      locator: {
        type: "property",
        id: "jobTitle"
      },
      renderHeader: () => "Job Title"
    }, {
      locator: {
        type: "custom",
        id: "employment-status"
      },
      renderHeader: () => "Employment Status",
      renderCell: (employee: any) => {
        const startDate = employee["firstFullTimeStartDate"];
        const isActive = startDate && new Date(startDate) <= new Date();
        return <span className={\`status-tag \${isActive ? "active" : "inactive"}\`}>
              {isActive ? "Active" : "Inactive"}
            </span>;
      },
      width: 140
    }, {
      locator: {
        type: "property",
        id: "department"
      }
    }] as any
  },
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
  {
    locator: { type: "property", id: "fullName" },
    renderHeader: () => (
      <a
        href="#"
        className="header-link"
        onClick={(e) => {
          e.preventDefault();
          alert("Employee Name column clicked!");
        }}
      >
        Employee Name
      </a>
    ),
  },
  {
    locator: { type: "property", id: "emailPrimaryWork" },
  },
  {
    locator: { type: "property", id: "jobTitle" },
    renderHeader: () => "Job Title",
  },
  {
    locator: {
      type: "custom",
      id: "employment-status",
    },
    renderHeader: () => "Employment Status",
    renderCell: (employee) => {
      const startDate = employee["firstFullTimeStartDate"];
      const isActive = startDate && new Date(startDate) <= new Date();

      return (
        <span className={\\\`status-tag \\\${isActive ? "active" : "inactive"}\\\`}>
          {isActive ? "Active" : "Inactive"}
        </span>
      );
    },
    width: 140,
  },
  {
    locator: { type: "property", id: "department" },
  },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable objectType={Employee} {...args} />
    </div>
}`,...(Xe=(Ze=L.parameters)==null?void 0:Ze.docs)==null?void 0:Xe.source}}};var en,nn,tn;Y.parameters={...Y.parameters,docs:{...(en=Y.parameters)==null?void 0:en.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`const [isColumnConfigOpen, setIsColumnConfigOpen] = useState(false);
const [columnDefinitions, setColumnDefinitions] = useState(initialColumnDefinitions);

const handleApplyColumnConfig = useCallback(
  (columns: Array<{ columnId: string; isVisible: boolean }>) => {
    const newColumnDefinitions = [];
    columns.forEach(({ columnId, isVisible }) => {
      if (isVisible) {
        const colDef = initialColumnDefinitions.find(def => def.locator.id === columnId);
        if (colDef) {
          newColumnDefinitions.push(colDef);
        }
      }
    });
    setColumnDefinitions(newColumnDefinitions);
    setIsColumnConfigOpen(false);
  },
  [],
);

return (
  <>
    <button onClick={() => setIsColumnConfigOpen(true)}>
      Configure Columns
    </button>
    <ObjectTable
      objectType={Employee}
      columnDefinitions={columnDefinitions}
      enableColumnConfig={false}
    />
    <ColumnConfigDialog
      isOpen={isColumnConfigOpen}
      onClose={() => setIsColumnConfigOpen(false)}
      columnOptions={columnOptions}
      currentVisibility={currentVisibility}
      currentColumnOrder={currentColumnOrder}
      onApply={handleApplyColumnConfig}
    />
  </>
);\`
      }
    }
  },
  render: () => {
    const initialColumnDefinitions: Array<ColumnDefinition<Employee, {}, {}>> = [{
      locator: {
        type: "property",
        id: "fullName"
      },
      columnName: "Full Name"
    }, {
      locator: {
        type: "property",
        id: "emailPrimaryWork"
      },
      columnName: "Email"
    }, {
      locator: {
        type: "property",
        id: "jobTitle"
      },
      columnName: "Job Title"
    }, {
      locator: {
        type: "property",
        id: "department"
      },
      columnName: "Department"
    }];
    const [isColumnConfigOpen, setIsColumnConfigOpen] = useState(false);
    const [columnDefinitions, setColumnDefinitions] = useState<Array<ColumnDefinition<Employee, {}, {}>>>(initialColumnDefinitions);
    const columnOptions = useMemo(() => initialColumnDefinitions.map(colDef => ({
      id: colDef.locator.id,
      name: colDef.columnName || colDef.locator.id
    })), []);
    const currentVisibility = useMemo(() => {
      const visibility: Record<string, boolean> = {};
      initialColumnDefinitions.forEach(colDef => {
        visibility[colDef.locator.id] = columnDefinitions.some(def => def.locator.id === colDef.locator.id);
      });
      return visibility;
    }, [columnDefinitions]);
    const currentColumnOrder = useMemo(() => columnDefinitions.map(colDef => colDef.locator.id), [columnDefinitions]);
    const handleApplyColumnConfig = useCallback((columns: Array<{
      columnId: string;
      isVisible: boolean;
    }>) => {
      const newColumnDefinitions: Array<ColumnDefinition<Employee, {}, {}>> = [];
      columns.forEach(({
        columnId,
        isVisible
      }) => {
        if (isVisible) {
          const colDef = initialColumnDefinitions.find(def => def.locator.id === columnId);
          if (colDef) {
            newColumnDefinitions.push(colDef);
          }
        }
      });
      setColumnDefinitions(newColumnDefinitions);
      setIsColumnConfigOpen(false);
    }, []);
    return <div style={{
      height: "600px",
      display: "flex",
      flexDirection: "column"
    }}>
        <div style={{
        padding: "8px 0",
        marginBottom: 8
      }}>
          <button onClick={() => setIsColumnConfigOpen(true)} style={{
          padding: "8px 16px",
          backgroundColor: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}>
            Configure Columns
          </button>
        </div>
        <ObjectTable objectType={Employee} columnDefinitions={columnDefinitions as any} enableColumnConfig={false} />
        <ColumnConfigDialog isOpen={isColumnConfigOpen} onClose={() => setIsColumnConfigOpen(false)} columnOptions={columnOptions} currentVisibility={currentVisibility} currentColumnOrder={currentColumnOrder} onApply={handleApplyColumnConfig} />
      </div>;
  }
}`,...(tn=(nn=Y.parameters)==null?void 0:nn.docs)==null?void 0:tn.source}}};var on,rn,ln;U.parameters={...U.parameters,docs:{...(on=U.parameters)==null?void 0:on.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [{
      locator: {
        type: "property",
        id: "fullName"
      },
      editable: true
    }, ...columnDefinitions.slice(1)],
    editMode: "manual"
  },
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
  ...columnDefinitions,
  {
    locator: {
      type: "property",
      id: "fullName",
    },
    editable: true,
  },
  ];

  return (
    <ObjectTable 
      objectType={Employee} 
      columnDefinitions={columnDefinitions} 
      editMode="manual" 
    />
  );\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable objectType={Employee} {...args} />
    </div>
}`,...(ln=(rn=U.parameters)==null?void 0:rn.docs)==null?void 0:ln.source}}};var sn,an,cn;q.parameters={...q.parameters,docs:{...(sn=q.parameters)==null?void 0:sn.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [...columnDefinitions, {
      locator: {
        type: "property",
        id: "fullName"
      },
      editable: true
    }],
    onSubmitEdits: (edits: CellEditInfo<Osdk.Instance<Employee>>[]) => {
      alert("Submitting edits");
      return true;
    }
  },
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
  ...columnDefinitions,
  {
    locator: {
      type: "property",
      id: "fullName",
    },
    editable: true,
  },
  ];

  return <ObjectTable 
    objectType={Employee} 
    columnDefinitions={columnDefinitions} 
    onSubmitEdits={(edits) => {
        alert("Submitting edits");
        // Return true to indicate edits were successfully submitted and can be cleared from the table's edit state
        return true;
    }}
  />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable objectType={Employee} {...args} />
    </div>
}`,...(cn=(an=q.parameters)==null?void 0:an.docs)==null?void 0:cn.source}}};const Wt=["Default","WithColumnDefinitions","SingleSelection","MultipleSelection","WithContextMenu","WithDefaultSorting","WithDefaultColumnPinning","WithCustomColumn","WithRowClickHandler","ControlledSorting","ControlledSelection","DisableAllHeaderMenuFeatures","CustomRowHeight","WithCustomRenderers","WithColumnConfigDialog","EditableTable","WithSubmitEditsButton"];export{K as ControlledSelection,_ as ControlledSorting,J as CustomRowHeight,I as Default,$ as DisableAllHeaderMenuFeatures,U as EditableTable,A as MultipleSelection,V as SingleSelection,Y as WithColumnConfigDialog,B as WithColumnDefinitions,z as WithContextMenu,P as WithCustomColumn,L as WithCustomRenderers,H as WithDefaultColumnPinning,W as WithDefaultSorting,F as WithRowClickHandler,q as WithSubmitEditsButton,Wt as __namedExportsOrder,zt as default};
