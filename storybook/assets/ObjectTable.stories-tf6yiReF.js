import{g as I,W as _n,O as Kn,R as h,a as bn,b as $n,r as u,f as Jn,j as l}from"./iframe-B9iLRF56.js";import{I as Ln,c as Yn,S as re,C as fn,u as Un,B as qn,g as Gn,b as Qn}from"./Table-K82JsZSR.js";import"./index-Br1Czp-l.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BaTJvFq9.js";const Zn=new _n,Xn=new Kn;function et(e,n){const t=["objectSet",I(e)];if(!n)return JSON.stringify(t);if(n.where&&t.push("where",Zn.canonicalize(n.where)),n.withProperties){const o=Object.keys(n.withProperties).sort();t.push("props",o)}return n.union&&n.union.length>0&&t.push("union",n.union.map(o=>I(o))),n.intersect&&n.intersect.length>0&&t.push("intersect",n.intersect.map(o=>I(o))),n.subtract&&n.subtract.length>0&&t.push("subtract",n.subtract.map(o=>I(o))),n.pivotTo&&t.push("pivotTo",n.pivotTo),n.orderBy&&t.push("orderBy",Xn.canonicalize(n.orderBy)),n.select&&n.select.length>0&&t.push("select",[...n.select].sort()),n.pageSize&&t.push("pageSize",n.pageSize),JSON.stringify(t)}function Z(e,n,t){let o=t;function s(){return o}return{subscribe:function(i){const c=e({next:a=>{o=a,i()},error:a=>{o={...o??{},error:a instanceof Error?a:new Error(String(a))},i()},complete:()=>{}});return()=>{c.unsubscribe()}},getSnapShot:s}}const nt="$__OBJECT__TYPE__PLACEHOLDER";function tt(e,n={}){const{observableClient:t}=h.useContext(bn),{enabled:o=!0,streamUpdates:s,...r}=n,i=o?e.$objectSetInternals.def.apiName:nt,c=h.useRef(i),a=h.useRef(),d=c.current!==i;d&&(c.current=i,a.current=void 0);const m=et(e,{where:r.where,withProperties:r.withProperties,union:r.union,intersect:r.intersect,subtract:r.subtract,pivotTo:r.pivotTo,pageSize:r.pageSize,orderBy:r.orderBy,select:r.$select}),{subscribe:f,getSnapShot:g}=h.useMemo(()=>{if(!o)return Z(()=>({unsubscribe:()=>{}}));const b=d?void 0:a.current;return Z(C=>t.observeObjectSet(e,{where:r.where,withProperties:r.withProperties,union:r.union,intersect:r.intersect,subtract:r.subtract,pivotTo:r.pivotTo,pageSize:r.pageSize,orderBy:r.orderBy,dedupeInterval:r.dedupeIntervalMs??2e3,autoFetchMore:r.autoFetchMore,streamUpdates:s,select:r.$select},C),void 0,b)},[o,t,m,s,d]),p=h.useSyncExternalStore(f,g);return p&&ne(p)&&(a.current=p),h.useMemo(()=>{const b=ne(p)?p:a.current;return{data:b==null?void 0:b.resolvedList,isLoading:!ne(p),error:b&&"error"in b?b.error:void 0,fetchMore:p!=null&&p.hasMore?p.fetchMore:void 0,objectSet:(p==null?void 0:p.objectSet)||e,totalCount:b==null?void 0:b.totalCount}},[p,e])}function ne(e){if(e!=null&&"error"in e)return!0;if((e==null?void 0:e.status)==null)return!1;switch(e.status){case"loaded":case"error":return!0;case"loading":case"init":return!1;default:return e.status,!1}}const ot={};function rt(e,n){const{observableClient:t}=h.useContext(bn),{pageSize:o,dedupeIntervalMs:s,withProperties:r,enabled:i=!0,rids:c,where:a,orderBy:d,streamUpdates:m,autoFetchMore:f,intersectWith:g,pivotTo:p,$select:b}=n??{},C=t.canonicalizeWhereClause(a??ot),D=h.useMemo(()=>C,[JSON.stringify(C)]),T=h.useMemo(()=>c,[JSON.stringify(c)]),x=h.useMemo(()=>r,[JSON.stringify(r)]),w=h.useMemo(()=>g,[JSON.stringify(g)]),E=h.useMemo(()=>d,[JSON.stringify(d)]),O=h.useMemo(()=>b,[JSON.stringify(b)]),{subscribe:N,getSnapShot:X}=h.useMemo(()=>Z(i?v=>t.observeList({type:e,rids:T,where:D,dedupeInterval:s??2e3,pageSize:o,orderBy:E,streamUpdates:m,withProperties:x,autoFetchMore:f,...w?{intersectWith:w}:{},...p?{pivotTo:p}:{},...O?{select:O}:{}},v):()=>({unsubscribe:()=>{}})),[i,t,e.apiName,e.type,T,D,s,o,E,m,x,f,w,p,O]),y=h.useSyncExternalStore(N,X);return h.useMemo(()=>{let v;return y&&"error"in y&&y.error?v=y.error:(y==null?void 0:y.status)==="error"&&(v=new Error("Failed to load objects")),{fetchMore:y!=null&&y.hasMore?y.fetchMore:void 0,error:v,data:y==null?void 0:y.resolvedList,isLoading:i?(y==null?void 0:y.status)==="loading"||(y==null?void 0:y.status)==="init"||!y:!1,isOptimistic:(y==null?void 0:y.isOptimistic)??!1,totalCount:y==null?void 0:y.totalCount}},[y,i])}function it(){return h.useContext($n).client}function st(e){const n=it(),[t,o]=h.useState(void 0),[s,r]=h.useState();return!t&&!s?(n.fetchMetadata(e).then(i=>{o(i)}).catch(i=>{const c=i instanceof Error?i.message:String(i);r(c)}),{loading:!0}):{loading:!1,metadata:t,error:s}}const ae={osdkEditableInput:"EditableCell-module__osdkEditableInput___2BjN5Q4P",osdkEditedInput:"EditableCell-module__osdkEditedInput___HxzrAqJz"},yn=["double","integer","long","float","decimal","byte","short"];function te(e){return e==null?"":typeof e=="object"?JSON.stringify(e):String(e)}function lt(e,n){if(!n||!yn.includes(n))return e;if(e==="")return null;const t=Number(e);return isNaN(t)?e:t}function at({initialValue:e,currentValue:n,cellId:t,dataType:o,onCellEdit:s,originalRowData:r,rowId:i,columnId:c}){const[a,d]=u.useState(te(n)),m=u.useRef(!1);u.useEffect(()=>{d(te(n))},[n]);const f=u.useCallback(()=>{if(m.current){m.current=!1;return}const C=lt(a,o);s(t,{rowId:i,columnId:c,newValue:C,oldValue:e,originalRowData:r})},[a,e,s,t,o,i,c,r]),g=u.useCallback(C=>{d(C)},[]),p=u.useCallback(C=>{C.key==="Enter"&&C.currentTarget.blur(),C.key==="Escape"&&(m.current=!0,d(te(n)),C.currentTarget.blur())},[n]),b=o&&yn.includes(o)?"number":"text";return h.createElement(Ln,{className:Yn(ae.osdkEditableInput,{[ae.osdkEditedInput]:n!==e}),type:b,value:a,onValueChange:g,onBlur:f,onKeyDown:p})}function ct(e){return JSON.stringify(e)}function ut(e){const n=e.table.options.meta,t=e.column.columnDef.meta;if(!(t!=null&&t.editable)||!(n!=null&&n.onCellEdit)||!(n!=null&&n.isInEditMode))return h.createElement(h.Fragment,null,e.getValue());const o=e.row.id,s=e.column.id,r=ct({rowId:o,columnId:s}),i=n.cellEdits,c=i==null?void 0:i[r],a=(c==null?void 0:c.newValue)??e.getValue();return h.createElement(at,{initialValue:e.getValue(),currentValue:a,cellId:r,dataType:t==null?void 0:t.dataType,onCellEdit:n.onCellEdit,originalRowData:e.row.original,rowId:o,columnId:s})}function dt(e,n){const{metadata:t,loading:o,error:s}=st(e);return{columns:u.useMemo(()=>{const i=t==null?void 0:t.properties;return n?pt(n,i):mt(i)},[n,t==null?void 0:t.properties]),loading:o,error:s}}function pt(e,n){return e.map(t=>{const{locator:o,width:s,minWidth:r,maxWidth:i,resizable:c,orderable:a,filterable:d,editable:m,renderCell:f,renderHeader:g,columnName:p}=t,b=o.type==="property"?n==null?void 0:n[o.id]:void 0,C=o.id,D=b!=null&&b.type&&typeof b.type=="string"?b.type:void 0;return{id:C,accessorKey:C,header:g??(p||(b==null?void 0:b.displayName)),meta:{columnName:p||(b==null?void 0:b.displayName),isVisible:t.isVisible!==!1,editable:m,dataType:D},size:s,...r?{minSize:r}:{},...i?{maxSize:i}:{},enableResizing:c,enableSorting:a,enableColumnFilter:d,cell:x=>{const w=x.row.original;return f?f(w,o):ut(x)}}})}function mt(e){return e?Object.entries(e).map(([n,t])=>({accessorKey:n,header:t.displayName??n})):[]}const bt=({columnDefinitions:e,hasSelectionColumn:n,onColumnsPinnedChanged:t})=>{const[o,s]=u.useState({left:[],right:[]});u.useEffect(()=>{const i=ft(e);s({left:[...n?[re]:[],...i.left??[]],right:[...i.right??[]]})},[e,n]);const r=u.useCallback(i=>{s(c=>{const a=typeof i=="function"?i(c):i;if(t){const m=yt(a).filter(f=>f.columnId!==re);t(m)}return a})},[t]);return{columnPinning:o,onColumnPinningChange:r}},ft=e=>e?e.reduce((t,{locator:o,pinned:s})=>{const r=o.id.toString();return s!=null&&s!=="none"?s==="left"?{...t,left:[...t.left??[],r]}:{...t,right:[...t.right??[],r]}:t},{left:[],right:[]}):{};function yt(e){return[...(e.left??[]).map(n=>({columnId:n,pinned:"left"})),...(e.right??[]).map(n=>({columnId:n,pinned:"right"}))]}const gt=({onColumnResize:e})=>{const[n,t]=u.useState({}),o=u.useCallback(s=>{t(r=>{const i=typeof s=="function"?s(r):s;if(e){for(const c of Object.keys(i))i[c]!==r[c]&&e(c,i[c]);for(const c of Object.keys(r))c in i||e(c,null)}return i})},[e]);return{columnSizing:n,onColumnSizingChange:o}},ht=({allColumns:e,onColumnVisibilityChanged:n})=>{const[t,o]=u.useState(()=>ce(e)),[s,r]=u.useState(()=>ue(e));u.useEffect(()=>{o(ce(e))},[e]),u.useEffect(()=>{r(ue(e))},[e]);const i=u.useCallback(a=>{o(d=>{const m=typeof a=="function"?a(d):a;if(n){const f=Object.entries(m).map(([g,p])=>({columnId:g,isVisible:p}));n(f)}return m})},[n]),c=u.useCallback(a=>{r(d=>typeof a=="function"?a(d):a)},[]);return{columnVisibility:t,onColumnVisibilityChange:i,columnOrder:s,onColumnOrderChange:c}},ce=e=>e.reduce((n,t)=>{var s;const o=t.id??t.accessorKey;return o?{...n,[o]:((s=t.meta)==null?void 0:s.isVisible)!==!1}:n},{}),ue=e=>e.map(n=>n.id??n.accessorKey).filter(n=>n!=null);function Ct({editMode:e="manual",onCellValueChanged:n,onSubmitEdits:t}){const[o,s]=u.useState(e==="always"),[r,i]=u.useState({}),c=u.useCallback((f,g)=>{g.newValue===g.oldValue?i(p=>{const{[f]:b,...C}=p;return C}):i(p=>({...p,[f]:g})),n==null||n(g)},[n]),a=u.useCallback(()=>{i({})},[]),d=u.useCallback(async()=>{const f=Object.values(r);return t?t(f):!1},[r,t]);return{cellEdits:r,onCellEdit:c,onSubmitEdits:t?d:void 0,clearEdits:a,editMode:e==="always"?{type:"always",isActive:!0}:{type:"manual",isActive:o,setActive:s}}}const de=50;function jt(e,n,t,o,s,r){const i=u.useMemo(()=>{if(!(!o||o.length===0))return o.reduce((g,p)=>(g[p.id]=p.desc?"desc":"asc",g),{})},[o]),c=u.useMemo(()=>{if(!n)return;const g=n.map(p=>p.locator).filter(p=>p.type==="rdp");if(g.length)return g.reduce((p,b)=>({...p,[b.id]:b.creator}),{})},[n]),a=e.type==="object",d=!!s&&a,m=tt(d?s:void 0,{...r,withProperties:c,where:t,orderBy:i,pageSize:de,enabled:d}),f=rt(e,{withProperties:c,pageSize:de,where:t,orderBy:i,enabled:!d});return d?{data:m.data,fetchMore:m.fetchMore,isLoading:m.isLoading,error:m.error,totalCount:m.totalCount,isOptimistic:!1}:f}const gn=e=>hn(e.$primaryKey),hn=e=>e.toString();function St({selectionMode:e="none",selectedRows:n,onRowSelection:t,data:o}){const[s,r]=u.useState({}),[i,c]=u.useState(null),a=n!==void 0,d=e!=="none",m=u.useMemo(()=>d?a&&n?oe(n):s:{},[d,a,n,s]),f=Object.values(m).filter(Boolean).length,g=(o==null?void 0:o.length)??0,p=g>0&&f===g,b=u.useCallback(()=>{if(!d||!o)return;const D=p?[]:o.map(T=>T.$primaryKey);a||r(oe(D)),t==null||t(D)},[d,o,p,a,t]),C=u.useCallback((D,T,x=!1)=>{if(!d||!o)return;let w=[];e==="single"?w=Tt({rowId:D,rowIndex:T,data:o,rowSelectionState:m}):x&&i!=null?(w=wt({rowIndex:T,data:o,lastSelectedRowIndex:i,rowSelectionState:m}),c(T)):(w=Dt({rowIndex:T,data:o,rowSelectionState:m}),Cn({rowIndex:T,data:o,rowSelectionState:m})||c(T)),a||r(oe(w)),t==null||t(w)},[d,o,e,i,a,m,t]);return{rowSelection:m,isAllSelected:p,enableRowSelection:d,hasSelection:f>0,onToggleAll:b,onToggleRow:C}}function Tt({rowId:e,rowIndex:n,data:t,rowSelectionState:o}){const s=t[n].$primaryKey;return o[e]?[]:[s]}function wt({lastSelectedRowIndex:e,rowIndex:n,data:t,rowSelectionState:o}){if(e!=null){const r=xt(t,e,n).map(a=>a.$primaryKey),c=[...ie(o,t)];return r.forEach(a=>{c.includes(a)||c.push(a)}),c}return[]}function Cn({rowIndex:e,data:n,rowSelectionState:t}){const o=n[e].$primaryKey;return ie(t,n).includes(o)}function Dt({rowIndex:e,data:n,rowSelectionState:t}){const o=n[e].$primaryKey,s=ie(t,n);return Cn({rowIndex:e,data:n,rowSelectionState:t})?s.filter(i=>i!==o):[...s,o]}function xt(e,n,t){const o=Math.min(n,t),s=Math.max(n,t),r=[];for(let i=o;i<=s;i++){const c=e[i];c&&r.push(c)}return r}function oe(e){return e.reduce((n,t)=>(n[hn(t)]=!0,n),{})}function ie(e,n){return n.filter(t=>e[gn(t)]).map(t=>t.$primaryKey)}function vt({isAllSelected:e,hasSelection:n,onToggleAll:t}){return h.createElement(fn,{indeterminate:n&&!e,checked:e,onCheckedChange:t,"aria-label":"Select all rows"})}function Et({row:e,onToggleRow:n}){const t=u.useCallback(s=>{s.stopPropagation();const r=s.shiftKey;n(e.id,e.index,r)},[n,e.id,e.index]),o=u.useCallback(s=>{if(s.key==="Enter"){const r=s.shiftKey;n(e.id,e.index,r)}},[n,e.id,e.index]);return h.createElement("div",{onClick:t,onKeyDown:o},h.createElement(fn,{checked:e.getIsSelected(),"aria-label":`Select row ${e.index+1}`}))}const Ot=({selectionMode:e,isAllSelected:n,hasSelection:t,onToggleAll:o,onToggleRow:s})=>{const r=u.useRef(n);r.current=n;const i=u.useRef(t);i.current=t;const c=u.useRef(o);c.current=o;const a=u.useRef(s);return a.current=s,u.useMemo(()=>e==="none"?null:{id:re,header:()=>e==="multiple"?h.createElement(vt,{isAllSelected:r.current,hasSelection:i.current,onToggleAll:c.current}):null,cell:({row:m})=>h.createElement(Et,{row:m,onToggleRow:a.current}),size:50,minSize:50,maxSize:50,enableSorting:!1,enableResizing:!1,enablePinning:!1},[e])},Nt=({orderBy:e,defaultOrderBy:n,onOrderByChanged:t})=>{const[o,s]=u.useState(()=>n?pe(n):[]),r=e!==void 0,i=u.useMemo(()=>e?pe(e):o,[e,o]),c=u.useCallback(a=>{const d=typeof a=="function"?a(i):a;if(r||s(d),t){const m=kt(d);t(m)}},[r,i,t]);return{sorting:i,onSortingChange:c}};function pe(e){return e.map(({property:n,direction:t})=>({id:n,desc:t==="desc"}))}function kt(e){return e.map(({id:n,desc:t})=>({property:n,direction:t?"desc":"asc"}))}const Rt=[];function S({objectType:e,objectSet:n,columnDefinitions:t,filter:o,objectSetOptions:s,orderBy:r,defaultOrderBy:i,onOrderByChanged:c,onColumnsPinnedChanged:a,onColumnResize:d,onRowSelection:m,renderCellContextMenu:f,selectionMode:g="none",selectedRows:p,onColumnVisibilityChanged:b,onCellValueChanged:C,onSubmitEdits:D,enableOrdering:T=!0,enableColumnPinning:x=!0,enableColumnResizing:w=!0,enableColumnConfig:E=!0,editMode:O="manual",...N}){const{columnSizing:X,onColumnSizingChange:y}=gt({onColumnResize:d}),{sorting:v,onSortingChange:jn}=Nt({orderBy:r,defaultOrderBy:i,onOrderByChanged:c}),{data:se,fetchMore:Sn,isLoading:Tn,error:wn}=jt(e,t,o,v,n,s),{columns:R,loading:Dn}=dt(e,t),{rowSelection:xn,isAllSelected:vn,hasSelection:En,onToggleAll:On,onToggleRow:Nn,enableRowSelection:le}=St({selectionMode:g,selectedRows:p,onRowSelection:m,data:se}),ee=Ot({selectionMode:g,isAllSelected:vn,hasSelection:En,onToggleAll:On,onToggleRow:Nn}),{columnVisibility:kn,onColumnVisibilityChange:Rn,columnOrder:Mn,onColumnOrderChange:In}=ht({allColumns:R,onColumnVisibilityChanged:b}),{columnPinning:Bn,onColumnPinningChange:Vn}=bt({columnDefinitions:t,hasSelectionColumn:le,onColumnsPinnedChanged:a}),Wn=u.useMemo(()=>ee?[ee,...R]:R,[ee,R]),M=Ct({editMode:O,onCellValueChanged:C,onSubmitEdits:D}),An=Un({data:se??Rt,columns:Wn,getCoreRowModel:Gn(),state:{columnVisibility:kn,columnOrder:Mn,rowSelection:xn,sorting:v,columnSizing:X,columnPinning:Bn},onSortingChange:jn,onColumnSizingChange:y,onColumnPinningChange:Vn,onColumnVisibilityChange:Rn,onColumnOrderChange:In,enableRowSelection:le,enableSorting:T,columnResizeMode:"onChange",columnResizeDirection:"ltr",manualSorting:!0,defaultColumn:{minSize:80},getRowId:gn,meta:{onCellEdit:M.onCellEdit,cellEdits:M.cellEdits,isInEditMode:M.editMode.isActive}}),zn=u.useCallback((Pn,Fn)=>f==null?void 0:f(Pn,Fn.getValue()),[f]),Hn=u.useMemo(()=>({showSortingItems:T,showPinningItems:x,showResizeItem:w,showConfigItem:E}),[T,x,w,E]);return h.createElement(qn,{table:An,isLoading:Tn||Dn,fetchNextPage:Sn,onRowClick:N.onRowClick,rowHeight:N.rowHeight,renderCellContextMenu:zn,className:N.className,error:wn,headerMenuFeatureFlags:Hn,editableConfig:M})}const j={type:"object",apiName:"Employee"},At={title:"Components/ObjectTable",component:S,parameters:{msw:{handlers:[...Jn.handlers]},controls:{expanded:!0}},argTypes:{objectType:{description:"The object or interface type of the object",control:!1},columnDefinitions:{description:"Ordered list of column definitions to show in the table. If not provided, all of the properties of the object type will be shown in default order.",control:"object"},filter:{description:"The current where clause to filter the objects in the table. If provided, the filter is controlled.",control:"object"},enableOrdering:{description:"Whether the table is sortable by the user.",control:"boolean",defaultValue:!0,table:{defaultValue:{summary:"true"}}},enableColumnPinning:{description:"Whether columns can be pinned by the user.",control:"boolean",defaultValue:!0,table:{defaultValue:{summary:"true"}}},enableColumnResizing:{description:"Whether columns can be resized by the user.",control:"boolean",defaultValue:!0,table:{defaultValue:{summary:"true"}}},enableColumnConfig:{description:"Whether the column configuration dialog for column visibility and ordering is available to the user.",control:"boolean",defaultValue:!0,table:{defaultValue:{summary:"true"}}},editMode:{description:"Controls the edit mode behavior of the table. 'always': Table is always in edit mode. 'manual': User can toggle edit mode on/off.",control:"select",options:["manual","always"],defaultValue:"manual",table:{defaultValue:{summary:"manual"}}},defaultOrderBy:{description:"The default order by clause to sort the objects in the table. If provided without orderBy prop, the sorting is uncontrolled. If both orderBy and defaultOrderBy are provided, orderBy takes precedence.",control:"object"},orderBy:{description:"The current order by clause to sort the objects in the table. If provided, the sorting is controlled. If both orderBy and defaultOrderBy are provided, orderBy takes precedence.",control:"object"},onOrderByChanged:{description:"Called when the order by clause is changed. Required when sorting is controlled.",control:!1,table:{category:"Events"}},onColumnVisibilityChanged:{description:"Called when the column visibility or ordering changed. If provided, the table will allow the user to show/hide columns.",control:!1,table:{category:"Events"}},onColumnsPinnedChanged:{description:"Called when the pinned columns change. If provided, the table will allow the user to pin/unpin columns.",control:!1,table:{category:"Events"}},onColumnResize:{description:"Called when a column is resized. Parameters: columnId - The ID of the resized column, newWidth - The new width of the column. When newWidth = null, the column size is reset.",control:!1,table:{category:"Events"}},onRowClick:{description:"Called when a row is clicked.",control:!1,table:{category:"Events"}},selectionMode:{description:"Selection mode for the table rows. If multiple, a checkbox will be shown for each row to allow selecting multiple rows as well as a top-level checkbox in the header to select all rows.",control:{type:"select"},options:["single","multiple","none"],defaultValue:"none",table:{defaultValue:{summary:"none"}}},selectedRows:{description:"The currently selected rows in the table. If provided, the row selection is controlled.",control:"object"},onRowSelection:{description:"Called when the row selection changes. Required when row selection is controlled.",control:!1,table:{category:"Events"}},renderCellContextMenu:{description:"If provided, will render this context menu when right clicking on a cell",control:!1,table:{category:"Advanced"}},rowHeight:{description:"The height of each row in pixels.",control:"number",defaultValue:40,table:{defaultValue:{summary:"40"}}},className:{description:"Additional CSS class name for the table",control:"text"}}},k=[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"emailPrimaryWork"},renderHeader:()=>"Email"},{locator:{type:"property",id:"jobTitle"},isVisible:!1},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"firstFullTimeStartDate"},width:200,renderHeader:()=>"Start Date",renderCell:e=>l.jsx("div",{children:e.firstFullTimeStartDate?new Date(e.firstFullTimeStartDate).toLocaleDateString():"No date"})},{locator:{type:"rdp",id:"managerName",creator:e=>e.pivotTo("lead").selectProperty("fullName")},renderHeader:()=>"Manager",renderCell:e=>"managerName"in e?l.jsx("span",{children:e.managerName}):l.jsx("span",{style:{color:"#999"},children:"No Manager"})}],B={args:{objectType:j},parameters:{docs:{source:{code:"<ObjectTable objectType={Employee} />"}}},render:e=>l.jsx("div",{className:"object-table-container",style:{height:"600px"},children:l.jsx(S,{...e})})},V={args:{objectType:j,columnDefinitions:k},parameters:{docs:{source:{code:`const columnDefinitions = [
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

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:e=>l.jsx("div",{className:"object-table-container",style:{height:"600px"},children:l.jsx(S,{...e})})},W={args:{objectType:j,selectionMode:"single"},parameters:{docs:{source:{code:'<ObjectTable objectType={Employee} selectionMode="single" />'}}},render:e=>l.jsx("div",{className:"object-table-container",style:{height:"600px"},children:l.jsx(S,{...e})})},A={args:{objectType:j,selectionMode:"multiple"},parameters:{docs:{source:{code:'<ObjectTable objectType={Employee} selectionMode="multiple" />'}}},render:e=>l.jsx("div",{className:"object-table-container",style:{height:"600px"},children:l.jsx(S,{...e})})},z={args:{objectType:j,renderCellContextMenu:(e,n)=>l.jsxs("div",{style:{background:"white",padding:8,border:"1px solid #d1d5db",boxShadow:"0 2px 8px 0 rgba(0, 0, 0, 0.1)",fontSize:13,borderRadius:4},children:[l.jsx("div",{style:{fontWeight:"bold",marginBottom:4},children:"Cell Value:"}),l.jsx("div",{children:n?String(n):"No Value"})]})},parameters:{docs:{source:{code:`<ObjectTable
  objectType={Employee}
  renderCellContextMenu={(_, cellValue) => (
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
  )}
/>`}}},render:e=>l.jsxs("div",{className:"object-table-container",style:{height:"600px"},children:[l.jsx("div",{style:{padding:"12px"},children:"Right click on any cell"}),l.jsx(S,{...e})]})},H={args:{objectType:j,columnDefinitions:k.map((e,n)=>({...e,width:n===0?250:n===1?300:150}))},render:e=>l.jsx("div",{className:"object-table-container",style:{height:"600px"},children:l.jsx(S,{...e})})},P={args:{objectType:j,defaultOrderBy:[{property:"fullName",direction:"desc"}]},parameters:{docs:{source:{code:`<ObjectTable
  objectType={Employee}
  defaultOrderBy={[{
    property: "fullName",
    direction: "desc",
  }]}
/>`}}},render:e=>l.jsx("div",{className:"object-table-container",style:{height:"600px"},children:l.jsx(S,{...e})})},F={args:{objectType:j,columnDefinitions:[{locator:{type:"property",id:"fullName"},pinned:"left"},{locator:{type:"property",id:"emailPrimaryWork"}},{locator:{type:"property",id:"jobTitle"}},{locator:{type:"property",id:"department"},pinned:"right"},{locator:{type:"property",id:"firstFullTimeStartDate"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:e=>l.jsx("div",{className:"object-table-container",style:{height:"600px"},children:l.jsx(S,{...e})})},_={parameters:{docs:{source:{code:`const customColumnDefinition = [
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
    `}}},args:{objectType:j,columnDefinitions:[...k.slice(0,3),{locator:{type:"custom",id:"actions"},renderHeader:()=>"Actions",renderCell:e=>l.jsxs("div",{style:{display:"flex",gap:"8px"},children:[l.jsx("button",{style:{padding:"4px 8px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:"pointer"},onClick:()=>alert(`View ${e.fullName}`),children:"View"}),l.jsx("button",{style:{padding:"4px 8px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:"pointer"},onClick:()=>alert(`Edit ${e.fullName}`),children:"Edit"})]}),orderable:!1,width:120}]},render:e=>l.jsx("div",{className:"object-table-container",style:{height:"600px"},children:l.jsx(S,{...e})})},K={args:{objectType:j,onRowClick:e=>{alert(`Clicked on ${e.fullName}`)}},parameters:{docs:{source:{code:`<ObjectTable
  objectType={Employee}
  onRowClick={(employee) => {
    alert(\`Clicked on \${employee["fullName"]}\`);
  }}
/>`}}},render:e=>l.jsx("div",{className:"object-table-container",style:{height:"600px"},children:l.jsx(S,{...e})})},$={parameters:{docs:{source:{code:`const [orderBy, setOrderBy] = useState<any>([
  { property: "fullName", direction: "asc" },
]);

return (
  <ObjectTable
    objectType={Employee}
    orderBy={orderBy}
    onOrderByChanged={setOrderBy}
  />
);`}}},render:()=>{const[e,n]=u.useState([{property:"fullName",direction:"asc"}]);return l.jsxs("div",{children:[l.jsxs("div",{style:{marginBottom:"16px"},children:[l.jsx("strong",{children:"Current Sort:"})," ",e.map((t,o)=>l.jsxs("span",{children:[t.property," (",t.direction,")",o<e.length-1&&", "]},o))]}),l.jsx("div",{className:"object-table-container",style:{height:"600px"},children:l.jsx(S,{objectType:j,orderBy:e,onOrderByChanged:n})})]})}},J={parameters:{docs:{source:{code:`const [selectedRows, setSelectedRows] = useState<any[]>([]);

return (
  <ObjectTable
    objectType={Employee}
    selectionMode="multiple"
    selectedRows={selectedRows}
    onRowSelection={setSelectedRows}
  />
);`}}},render:()=>{const[e,n]=u.useState([]);return l.jsxs("div",{children:[l.jsxs("div",{style:{marginBottom:"16px"},children:[l.jsx("strong",{children:"Selected:"})," ",e.length," employees",e.length>0&&l.jsx("button",{style:{marginLeft:"16px",padding:"4px 8px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:"pointer"},onClick:()=>n([]),children:"Clear Selection"})]}),l.jsx("div",{className:"object-table-container",style:{height:"600px"},children:l.jsx(S,{objectType:j,selectionMode:"multiple",selectedRows:e,onRowSelection:n})})]})}},L={args:{objectType:j,enableOrdering:!1,enableColumnPinning:!1,enableColumnResizing:!1,enableColumnConfig:!1},parameters:{docs:{source:{code:`<ObjectTable
  objectType={Employee}
  enableOrdering={false}
  enableColumnPinning={false}
  enableColumnResizing={false}
  enableColumnConfig={false}
/>`}}},render:e=>l.jsx("div",{className:"object-table-container",style:{height:"600px"},children:l.jsx(S,{...e})})},Y={args:{objectType:j,rowHeight:56},parameters:{docs:{source:{code:"<ObjectTable objectType={Employee} rowHeight={56} />"}}},render:e=>l.jsx("div",{className:"object-table-container",style:{height:"600px"},children:l.jsx(S,{...e})})},U={args:{objectType:j,columnDefinitions:[{locator:{type:"property",id:"fullName"},renderHeader:()=>l.jsx("a",{href:"#",className:"header-link",onClick:e=>{e.preventDefault(),alert("Employee Name column clicked!")},children:"Employee Name"})},{locator:{type:"property",id:"emailPrimaryWork"}},{locator:{type:"property",id:"jobTitle"},renderHeader:()=>"Job Title"},{locator:{type:"custom",id:"employment-status"},renderHeader:()=>"Employment Status",renderCell:e=>{const n=e.firstFullTimeStartDate,t=n&&new Date(n)<=new Date;return l.jsx("span",{className:`status-tag ${t?"active":"inactive"}`,children:t?"Active":"Inactive"})},width:140},{locator:{type:"property",id:"department"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:e=>l.jsx("div",{className:"object-table-container",style:{height:"600px"},children:l.jsx(S,{...e})})},q={parameters:{docs:{source:{code:`const [isColumnConfigOpen, setIsColumnConfigOpen] = useState(false);
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
);`}}},render:()=>{const e=[{locator:{type:"property",id:"fullName"},columnName:"Full Name"},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job Title"},{locator:{type:"property",id:"department"},columnName:"Department"}],[n,t]=u.useState(!1),[o,s]=u.useState(e),r=u.useMemo(()=>e.map(d=>({id:d.locator.id,name:d.columnName||d.locator.id})),[]),i=u.useMemo(()=>{const d={};return e.forEach(m=>{d[m.locator.id]=o.some(f=>f.locator.id===m.locator.id)}),d},[o]),c=u.useMemo(()=>o.map(d=>d.locator.id),[o]),a=u.useCallback(d=>{const m=[];d.forEach(({columnId:f,isVisible:g})=>{if(g){const p=e.find(b=>b.locator.id===f);p&&m.push(p)}}),s(m),t(!1)},[]);return l.jsxs("div",{style:{height:"600px",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{padding:"8px 0",marginBottom:8},children:l.jsx("button",{onClick:()=>t(!0),style:{padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Configure Columns"})}),l.jsx(S,{objectType:j,columnDefinitions:o,enableColumnConfig:!1}),l.jsx(Qn,{isOpen:n,onClose:()=>t(!1),columnOptions:r,currentVisibility:i,currentColumnOrder:c,onApply:a})]})}},G={args:{objectType:j,columnDefinitions:[{locator:{type:"property",id:"fullName"},editable:!0},...k.slice(1)],editMode:"manual"},parameters:{docs:{source:{code:`const columnDefinitions = [
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
  );`}}},render:e=>l.jsx("div",{className:"object-table-container",style:{height:"600px"},children:l.jsx(S,{...e,objectType:j})})},Q={args:{objectType:j,columnDefinitions:[...k,{locator:{type:"property",id:"fullName"},editable:!0}],onSubmitEdits:async()=>{alert("Submitting edits")}},parameters:{docs:{source:{code:`const columnDefinitions = [
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
  />`}}},render:e=>l.jsx("div",{className:"object-table-container",style:{height:"600px"},children:l.jsx(S,{...e,objectType:j})})};var me,be,fe;B.parameters={...B.parameters,docs:{...(me=B.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
      <ObjectTable {...args} />
    </div>
}`,...(fe=(be=B.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var ye,ge,he;V.parameters={...V.parameters,docs:{...(ye=V.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
      <ObjectTable {...args} />
    </div>
}`,...(he=(ge=V.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var Ce,je,Se;W.parameters={...W.parameters,docs:{...(Ce=W.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
      <ObjectTable {...args} />
    </div>
}`,...(Se=(je=W.parameters)==null?void 0:je.docs)==null?void 0:Se.source}}};var Te,we,De;A.parameters={...A.parameters,docs:{...(Te=A.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
      <ObjectTable {...args} />
    </div>
}`,...(De=(we=A.parameters)==null?void 0:we.docs)==null?void 0:De.source}}};var xe,ve,Ee;z.parameters={...z.parameters,docs:{...(xe=z.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
  renderCellContextMenu={(_, cellValue) => (
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
  )}
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
      <ObjectTable {...args} />
    </div>
}`,...(Ee=(ve=z.parameters)==null?void 0:ve.docs)==null?void 0:Ee.source}}};var Oe,Ne,ke;H.parameters={...H.parameters,docs:{...(Oe=H.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: columnDefinitions.map((col, index) => ({
      ...col,
      width: index === 0 ? 250 : index === 1 ? 300 : 150
    })) as any
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(ke=(Ne=H.parameters)==null?void 0:Ne.docs)==null?void 0:ke.source}}};var Re,Me,Ie;P.parameters={...P.parameters,docs:{...(Re=P.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
      <ObjectTable {...args} />
    </div>
}`,...(Ie=(Me=P.parameters)==null?void 0:Me.docs)==null?void 0:Ie.source}}};var Be,Ve,We;F.parameters={...F.parameters,docs:{...(Be=F.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
      <ObjectTable {...args} />
    </div>
}`,...(We=(Ve=F.parameters)==null?void 0:Ve.docs)==null?void 0:We.source}}};var Ae,ze,He;_.parameters={..._.parameters,docs:{...(Ae=_.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
      <ObjectTable {...args} />
    </div>
}`,...(He=(ze=_.parameters)==null?void 0:ze.docs)==null?void 0:He.source}}};var Pe,Fe,_e;K.parameters={...K.parameters,docs:{...(Pe=K.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
      <ObjectTable {...args} />
    </div>
}`,...(_e=(Fe=K.parameters)==null?void 0:Fe.docs)==null?void 0:_e.source}}};var Ke,$e,Je;$.parameters={...$.parameters,docs:{...(Ke=$.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(Je=($e=$.parameters)==null?void 0:$e.docs)==null?void 0:Je.source}}};var Le,Ye,Ue;J.parameters={...J.parameters,docs:{...(Le=J.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Ue=(Ye=J.parameters)==null?void 0:Ye.docs)==null?void 0:Ue.source}}};var qe,Ge,Qe;L.parameters={...L.parameters,docs:{...(qe=L.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
      <ObjectTable {...args} />
    </div>
}`,...(Qe=(Ge=L.parameters)==null?void 0:Ge.docs)==null?void 0:Qe.source}}};var Ze,Xe,en;Y.parameters={...Y.parameters,docs:{...(Ze=Y.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
      <ObjectTable {...args} />
    </div>
}`,...(en=(Xe=Y.parameters)==null?void 0:Xe.docs)==null?void 0:en.source}}};var nn,tn,on;U.parameters={...U.parameters,docs:{...(nn=U.parameters)==null?void 0:nn.docs,source:{originalSource:`{
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
      <ObjectTable {...args} />
    </div>
}`,...(on=(tn=U.parameters)==null?void 0:tn.docs)==null?void 0:on.source}}};var rn,sn,ln;q.parameters={...q.parameters,docs:{...(rn=q.parameters)==null?void 0:rn.docs,source:{originalSource:`{
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
}`,...(ln=(sn=q.parameters)==null?void 0:sn.docs)==null?void 0:ln.source}}};var an,cn,un;G.parameters={...G.parameters,docs:{...(an=G.parameters)==null?void 0:an.docs,source:{originalSource:`{
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
  } as any,
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
      <ObjectTable {...args} objectType={Employee} />
    </div>
}`,...(un=(cn=G.parameters)==null?void 0:cn.docs)==null?void 0:un.source}}};var dn,pn,mn;Q.parameters={...Q.parameters,docs:{...(dn=Q.parameters)==null?void 0:dn.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [...columnDefinitions, {
      locator: {
        type: "property",
        id: "fullName"
      },
      editable: true
    }],
    onSubmitEdits: async () => {
      alert("Submitting edits");
    }
  } as any,
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
      <ObjectTable {...args} objectType={Employee} />
    </div>
}`,...(mn=(pn=Q.parameters)==null?void 0:pn.docs)==null?void 0:mn.source}}};const zt=["Default","WithColumnDefinitions","SingleSelection","MultipleSelection","WithContextMenu","CustomColumnWidths","WithDefaultSorting","WithDefaultColumnPinning","WithCustomColumn","WithRowClickHandler","ControlledSorting","ControlledSelection","DisableAllHeaderMenuFeatures","CustomRowHeight","WithCustomRenderers","WithColumnConfigDialog","EditableTable","WithSubmitEditsButton"];export{J as ControlledSelection,$ as ControlledSorting,H as CustomColumnWidths,Y as CustomRowHeight,B as Default,L as DisableAllHeaderMenuFeatures,G as EditableTable,A as MultipleSelection,W as SingleSelection,q as WithColumnConfigDialog,V as WithColumnDefinitions,z as WithContextMenu,_ as WithCustomColumn,U as WithCustomRenderers,F as WithDefaultColumnPinning,P as WithDefaultSorting,K as WithRowClickHandler,Q as WithSubmitEditsButton,zt as __namedExportsOrder,At as default};
