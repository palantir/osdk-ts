import{j as s}from"./jsx-runtime-BGtHMjva.js";import{I as Hn,c as Pn,S as oe,C as dn,u as Fn,B as _n,g as Kn,b as $n}from"./Table-BlHjGlvV.js";import{R as C,r as u}from"./index-B5zQSQc6.js";import{g as I,W as Jn,O as Ln,a as pn,b as Yn}from"./OsdkContext2-COR5IxFc.js";import"./index-wWInmAgR.js";import{f as Un}from"./fauxFoundry-7mUUkGnK.js";import"./iframe-CbcPmXcS.js";import"./tiny-invariant-CopsF_GD.js";import"./index-_3jhwpOT.js";const qn=new Jn,Gn=new Ln;function Qn(e,n){const t=["objectSet",I(e)];if(!n)return JSON.stringify(t);if(n.where&&t.push("where",qn.canonicalize(n.where)),n.withProperties){const o=Object.keys(n.withProperties).sort();t.push("props",o)}return n.union&&n.union.length>0&&t.push("union",n.union.map(o=>I(o))),n.intersect&&n.intersect.length>0&&t.push("intersect",n.intersect.map(o=>I(o))),n.subtract&&n.subtract.length>0&&t.push("subtract",n.subtract.map(o=>I(o))),n.pivotTo&&t.push("pivotTo",n.pivotTo),n.orderBy&&t.push("orderBy",Gn.canonicalize(n.orderBy)),n.select&&n.select.length>0&&t.push("select",[...n.select].sort()),n.pageSize&&t.push("pageSize",n.pageSize),JSON.stringify(t)}function G(e,n,t){let o=t;function r(){return o}return{subscribe:function(l){const a=e({next:c=>{o=c,l()},error:c=>{o={...o??{},error:c instanceof Error?c:new Error(String(c))},l()},complete:()=>{}});return()=>{a.unsubscribe()}},getSnapShot:r}}const Zn="$__OBJECT__TYPE__PLACEHOLDER";function Xn(e,n={}){const{observableClient:t}=C.useContext(pn),{enabled:o=!0,streamUpdates:r,...i}=n,l=o?e.$objectSetInternals.def.apiName:Zn,a=C.useRef(l),c=C.useRef(),d=a.current!==l;d&&(a.current=l,c.current=void 0);const m=Qn(e,{where:i.where,withProperties:i.withProperties,union:i.union,intersect:i.intersect,subtract:i.subtract,pivotTo:i.pivotTo,pageSize:i.pageSize,orderBy:i.orderBy,select:i.$select}),{subscribe:y,getSnapShot:h}=C.useMemo(()=>{if(!o)return G(()=>({unsubscribe:()=>{}}));const b=d?void 0:c.current;return G(j=>t.observeObjectSet(e,{where:i.where,withProperties:i.withProperties,union:i.union,intersect:i.intersect,subtract:i.subtract,pivotTo:i.pivotTo,pageSize:i.pageSize,orderBy:i.orderBy,dedupeInterval:i.dedupeIntervalMs??2e3,autoFetchMore:i.autoFetchMore,streamUpdates:r,select:i.$select},j),void 0,b)},[o,t,m,r,d]),p=C.useSyncExternalStore(y,h);return p&&ee(p)&&(c.current=p),C.useMemo(()=>{const b=ee(p)?p:c.current;return{data:b==null?void 0:b.resolvedList,isLoading:!ee(p),error:b&&"error"in b?b.error:void 0,fetchMore:p!=null&&p.hasMore?p.fetchMore:void 0,objectSet:(p==null?void 0:p.objectSet)||e,totalCount:b==null?void 0:b.totalCount}},[p,e])}function ee(e){if(e!=null&&"error"in e)return!0;if((e==null?void 0:e.status)==null)return!1;switch(e.status){case"loaded":case"error":return!0;case"loading":case"init":return!1;default:return e.status,!1}}const et={};function nt(e,n){const{observableClient:t}=C.useContext(pn),{pageSize:o,dedupeIntervalMs:r,withProperties:i,enabled:l=!0,rids:a,where:c,orderBy:d,streamUpdates:m,autoFetchMore:y,intersectWith:h,pivotTo:p,$select:b}=n??{},j=t.canonicalizeWhereClause(c??et),x=C.useMemo(()=>j,[JSON.stringify(j)]),w=C.useMemo(()=>a,[JSON.stringify(a)]),S=C.useMemo(()=>i,[JSON.stringify(i)]),v=C.useMemo(()=>h,[JSON.stringify(h)]),D=C.useMemo(()=>d,[JSON.stringify(d)]),O=C.useMemo(()=>b,[JSON.stringify(b)]),{subscribe:Z,getSnapShot:N}=C.useMemo(()=>G(l?E=>t.observeList({type:e,rids:w,where:x,dedupeInterval:r??2e3,pageSize:o,orderBy:D,streamUpdates:m,withProperties:S,autoFetchMore:y,...v?{intersectWith:v}:{},...p?{pivotTo:p}:{},...O?{select:O}:{}},E):()=>({unsubscribe:()=>{}})),[l,t,e.apiName,e.type,w,x,r,o,D,m,S,y,v,p,O]),g=C.useSyncExternalStore(Z,N);return C.useMemo(()=>{let E;return g&&"error"in g&&g.error?E=g.error:(g==null?void 0:g.status)==="error"&&(E=new Error("Failed to load objects")),{fetchMore:g!=null&&g.hasMore?g.fetchMore:void 0,error:E,data:g==null?void 0:g.resolvedList,isLoading:l?(g==null?void 0:g.status)==="loading"||(g==null?void 0:g.status)==="init"||!g:!1,isOptimistic:(g==null?void 0:g.isOptimistic)??!1,totalCount:g==null?void 0:g.totalCount}},[g,l])}function tt(){return C.useContext(Yn).client}function ot(e){const n=tt(),[t,o]=C.useState(void 0),[r,i]=C.useState();return!t&&!r?(n.fetchMetadata(e).then(l=>{o(l)}).catch(l=>{const a=l instanceof Error?l.message:String(l);i(a)}),{loading:!0}):{loading:!1,metadata:t,error:r}}const ae={osdkEditableInput:"EditableCell-module__osdkEditableInput___2BjN5Q4P",osdkEditedInput:"EditableCell-module__osdkEditedInput___HxzrAqJz"},mn=["double","integer","long","float","decimal","byte","short"];function ne(e){return e==null?"":typeof e=="object"?JSON.stringify(e):String(e)}function rt(e,n){if(!n||!mn.includes(n))return e;if(e==="")return null;const t=Number(e);return isNaN(t)?e:t}function it({initialValue:e,currentValue:n,cellId:t,dataType:o,onCellEdit:r,originalRowData:i,rowId:l,columnId:a}){const[c,d]=u.useState(ne(n)),m=u.useRef(!1);u.useEffect(()=>{d(ne(n))},[n]);const y=u.useCallback(()=>{if(m.current){m.current=!1;return}const j=rt(c,o);r(t,{rowId:l,columnId:a,newValue:j,oldValue:e,originalRowData:i})},[c,e,r,t,o,l,a,i]),h=u.useCallback(j=>{d(j)},[]),p=u.useCallback(j=>{j.key==="Enter"&&j.currentTarget.blur(),j.key==="Escape"&&(m.current=!0,d(ne(n)),j.currentTarget.blur())},[n]),b=o&&mn.includes(o)?"number":"text";return C.createElement(Hn,{className:Pn(ae.osdkEditableInput,{[ae.osdkEditedInput]:n!==e}),type:b,value:c,onValueChange:h,onBlur:y,onKeyDown:p})}function lt(e){return JSON.stringify(e)}function st(e){const n=e.table.options.meta,t=e.column.columnDef.meta;if(!(t!=null&&t.editable)||!(n!=null&&n.onCellEdit)||!(n!=null&&n.isInEditMode))return C.createElement(C.Fragment,null,e.getValue());const o=e.row.id,r=e.column.id,i=lt({rowId:o,columnId:r}),l=n.cellEdits,a=l==null?void 0:l[i],c=(a==null?void 0:a.newValue)??e.getValue();return C.createElement(it,{initialValue:e.getValue(),currentValue:c,cellId:i,dataType:t==null?void 0:t.dataType,onCellEdit:n.onCellEdit,originalRowData:e.row.original,rowId:o,columnId:r})}function at(e,n){const{metadata:t,loading:o,error:r}=ot(e);return{columns:u.useMemo(()=>{const l=t==null?void 0:t.properties;return n?ct(n,l):ut(l)},[n,t==null?void 0:t.properties]),loading:o,error:r}}function ct(e,n){return e.map(t=>{const{locator:o,width:r,minWidth:i,maxWidth:l,resizable:a,orderable:c,filterable:d,editable:m,renderCell:y,renderHeader:h,columnName:p}=t,b=o.type==="property"?n==null?void 0:n[o.id]:void 0,j=o.id,x=b!=null&&b.type&&typeof b.type=="string"?b.type:void 0;return{id:j,accessorKey:j,header:h??(p||(b==null?void 0:b.displayName)),meta:{columnName:p||(b==null?void 0:b.displayName),isVisible:t.isVisible!==!1,editable:m,dataType:x},size:r,...i?{minSize:i}:{},...l?{maxSize:l}:{},enableResizing:a,enableSorting:c,enableColumnFilter:d,cell:S=>{const v=S.row.original;return y?y(v,o):st(S)}}})}function ut(e){return e?Object.entries(e).map(([n,t])=>({accessorKey:n,header:t.displayName??n})):[]}const dt=({columnDefinitions:e,hasSelectionColumn:n,onColumnsPinnedChanged:t})=>{const[o,r]=u.useState({left:[],right:[]});u.useEffect(()=>{const l=pt(e);r({left:[...n?[oe]:[],...l.left??[]],right:[...l.right??[]]})},[e,n]);const i=u.useCallback(l=>{r(a=>{const c=typeof l=="function"?l(a):l;if(t){const m=mt(c).filter(y=>y.columnId!==oe);t(m)}return c})},[t]);return{columnPinning:o,onColumnPinningChange:i}},pt=e=>e?e.reduce((t,{locator:o,pinned:r})=>{const i=o.id.toString();return r!=null&&r!=="none"?r==="left"?{...t,left:[...t.left??[],i]}:{...t,right:[...t.right??[],i]}:t},{left:[],right:[]}):{};function mt(e){return[...(e.left??[]).map(n=>({columnId:n,pinned:"left"})),...(e.right??[]).map(n=>({columnId:n,pinned:"right"}))]}const bt=({onColumnResize:e})=>{const[n,t]=u.useState({}),o=u.useCallback(r=>{t(i=>{const l=typeof r=="function"?r(i):r;if(e){for(const a of Object.keys(l))l[a]!==i[a]&&e(a,l[a]);for(const a of Object.keys(i))a in l||e(a,null)}return l})},[e]);return{columnSizing:n,onColumnSizingChange:o}},yt=({allColumns:e,onColumnVisibilityChanged:n})=>{const[t,o]=u.useState(()=>ce(e)),[r,i]=u.useState(()=>ue(e));u.useEffect(()=>{o(ce(e))},[e]),u.useEffect(()=>{i(ue(e))},[e]);const l=u.useCallback(c=>{o(d=>{const m=typeof c=="function"?c(d):c;if(n){const y=Object.entries(m).map(([h,p])=>({columnId:h,isVisible:p}));n(y)}return m})},[n]),a=u.useCallback(c=>{i(d=>typeof c=="function"?c(d):c)},[]);return{columnVisibility:t,onColumnVisibilityChange:l,columnOrder:r,onColumnOrderChange:a}},ce=e=>e.reduce((n,t)=>{var r;const o=t.id??t.accessorKey;return o?{...n,[o]:((r=t.meta)==null?void 0:r.isVisible)!==!1}:n},{}),ue=e=>e.map(n=>n.id??n.accessorKey).filter(n=>n!=null);function ft({editMode:e="manual",onCellValueChanged:n,onSubmitEdits:t}){const[o,r]=u.useState(e==="always"),[i,l]=u.useState({}),a=u.useCallback((y,h)=>{h.newValue===h.oldValue?l(p=>{const{[y]:b,...j}=p;return j}):l(p=>({...p,[y]:h})),n==null||n(h)},[n]),c=u.useCallback(()=>{l({})},[]),d=u.useCallback(async()=>{const y=Object.values(i);return t?t(y):!1},[i,t]);return{cellEdits:i,onCellEdit:a,onSubmitEdits:t?d:void 0,clearEdits:c,editMode:e==="always"?{type:"always",isActive:!0}:{type:"manual",isActive:o,setActive:r}}}const de=50;function gt(e,n,t,o,r,i){const l=u.useMemo(()=>{if(!(!o||o.length===0))return o.reduce((h,p)=>(h[p.id]=p.desc?"desc":"asc",h),{})},[o]),a=u.useMemo(()=>{if(!n)return;const h=n.map(p=>p.locator).filter(p=>p.type==="rdp");if(h.length)return h.reduce((p,b)=>({...p,[b.id]:b.creator}),{})},[n]),c=e.type==="object",d=!!r&&c,m=Xn(d?r:void 0,{...i,withProperties:a,where:t,orderBy:l,pageSize:de,enabled:d}),y=nt(e,{withProperties:a,pageSize:de,where:t,orderBy:l,enabled:!d});return d?{data:m.data,fetchMore:m.fetchMore,isLoading:m.isLoading,error:m.error,totalCount:m.totalCount,isOptimistic:!1}:y}const bn=e=>yn(e.$primaryKey),yn=e=>e.toString();function ht({selectionMode:e="none",selectedRows:n,isAllSelected:t,onRowSelection:o,data:r}){const[i,l]=u.useState({}),[a,c]=u.useState(null),d=n!==void 0,m=e!=="none",y=u.useMemo(()=>{if(!m)return{};if(d){const w=t?(r??[]).map(S=>S.$primaryKey):n;return te(w)}return i},[m,d,n,t,i,r]),h=Object.values(y).filter(Boolean).length,p=(r==null?void 0:r.length)??0,b=d&&t!==void 0?t:p>0&&h===p,j=u.useCallback(()=>{if(!m||!r)return;const w=b?[]:r.map(S=>S.$primaryKey);d||l(te(w)),o==null||o(w,!0)},[m,r,b,d,o]),x=u.useCallback((w,S,v=!1)=>{if(!m||!r)return;let D=[];e==="single"?D=Ct({rowId:w,rowIndex:S,data:r,rowSelectionState:y}):v&&a!=null?(D=jt({rowIndex:S,data:r,lastSelectedRowIndex:a,rowSelectionState:y}),c(S)):(D=St({rowIndex:S,data:r,rowSelectionState:y}),fn({rowIndex:S,data:r,rowSelectionState:y})||c(S)),d||l(te(D)),o==null||o(D,!1)},[m,r,e,d,o,y,a]);return{rowSelection:y,isAllSelected:b,enableRowSelection:m,hasSelection:b||h>0,onToggleAll:j,onToggleRow:x}}function Ct({rowId:e,rowIndex:n,data:t,rowSelectionState:o}){const r=t[n].$primaryKey;return o[e]?[]:[r]}function jt({lastSelectedRowIndex:e,rowIndex:n,data:t,rowSelectionState:o}){if(e!=null){const i=Tt(t,e,n).map(c=>c.$primaryKey),a=[...re(o,t)];return i.forEach(c=>{a.includes(c)||a.push(c)}),a}return[]}function fn({rowIndex:e,data:n,rowSelectionState:t}){const o=n[e].$primaryKey;return re(t,n).includes(o)}function St({rowIndex:e,data:n,rowSelectionState:t}){const o=n[e].$primaryKey,r=re(t,n);return fn({rowIndex:e,data:n,rowSelectionState:t})?r.filter(l=>l!==o):[...r,o]}function Tt(e,n,t){const o=Math.min(n,t),r=Math.max(n,t),i=[];for(let l=o;l<=r;l++){const a=e[l];a&&i.push(a)}return i}function te(e){return e.reduce((n,t)=>(n[yn(t)]=!0,n),{})}function re(e,n){return n.filter(t=>e[bn(t)]).map(t=>t.$primaryKey)}function wt({isAllSelected:e,hasSelection:n,onToggleAll:t}){return C.createElement(dn,{indeterminate:n&&!e,checked:e,onCheckedChange:t,"aria-label":"Select all rows"})}function Dt({row:e,onToggleRow:n}){const t=u.useCallback(r=>{r.stopPropagation();const i=r.shiftKey;n(e.id,e.index,i)},[n,e.id,e.index]),o=u.useCallback(r=>{if(r.key==="Enter"){const i=r.shiftKey;n(e.id,e.index,i)}},[n,e.id,e.index]);return C.createElement("div",{onClick:t,onKeyDown:o},C.createElement(dn,{checked:e.getIsSelected(),"aria-label":`Select row ${e.index+1}`}))}const vt=({selectionMode:e,isAllSelected:n,hasSelection:t,onToggleAll:o,onToggleRow:r})=>{const i=u.useRef(n);i.current=n;const l=u.useRef(t);l.current=t;const a=u.useRef(o);a.current=o;const c=u.useRef(r);return c.current=r,u.useMemo(()=>e==="none"?null:{id:oe,header:()=>e==="multiple"?C.createElement(wt,{isAllSelected:i.current,hasSelection:l.current,onToggleAll:a.current}):null,cell:({row:m})=>C.createElement(Dt,{row:m,onToggleRow:c.current}),size:50,minSize:50,maxSize:50,enableSorting:!1,enableResizing:!1,enablePinning:!1},[e])},xt=({orderBy:e,defaultOrderBy:n,onOrderByChanged:t})=>{const[o,r]=u.useState(()=>n?pe(n):[]),i=e!==void 0,l=u.useMemo(()=>e?pe(e):o,[e,o]),a=u.useCallback(c=>{const d=typeof c=="function"?c(l):c;if(i||r(d),t){const m=Et(d);t(m)}},[i,l,t]);return{sorting:l,onSortingChange:a}};function pe(e){return e.map(({property:n,direction:t})=>({id:n,desc:t==="desc"}))}function Et(e){return e.map(({id:n,desc:t})=>({property:n,direction:t?"desc":"asc"}))}const Ot=[];function T({objectType:e,objectSet:n,columnDefinitions:t,filter:o,objectSetOptions:r,orderBy:i,defaultOrderBy:l,onOrderByChanged:a,onColumnsPinnedChanged:c,onColumnResize:d,onRowSelection:m,renderCellContextMenu:y,selectionMode:h="none",selectedRows:p,isAllSelected:b,onColumnVisibilityChanged:j,onCellValueChanged:x,onSubmitEdits:w,enableOrdering:S=!0,enableColumnPinning:v=!0,enableColumnResizing:D=!0,enableColumnConfig:O=!0,editMode:Z="manual",...N}){const{columnSizing:g,onColumnSizingChange:E}=bt({onColumnResize:d}),{sorting:ie,onSortingChange:gn}=xt({orderBy:i,defaultOrderBy:l,onOrderByChanged:a}),{data:le,fetchMore:hn,isLoading:Cn,error:jn}=gt(e,t,o,ie,n,r),{columns:k,loading:Sn}=at(e,t),{rowSelection:Tn,isAllSelected:wn,hasSelection:Dn,onToggleAll:vn,onToggleRow:xn,enableRowSelection:se}=ht({selectionMode:h,selectedRows:p,isAllSelected:b,onRowSelection:m,data:le}),X=vt({selectionMode:h,isAllSelected:wn,hasSelection:Dn,onToggleAll:vn,onToggleRow:xn}),{columnVisibility:En,onColumnVisibilityChange:On,columnOrder:Nn,onColumnOrderChange:kn}=yt({allColumns:k,onColumnVisibilityChanged:j}),{columnPinning:Rn,onColumnPinningChange:In}=dt({columnDefinitions:t,hasSelectionColumn:se,onColumnsPinnedChanged:c}),Mn=u.useMemo(()=>X?[X,...k]:k,[X,k]),R=ft({editMode:Z,onCellValueChanged:x,onSubmitEdits:w}),Bn=Fn({data:le??Ot,columns:Mn,getCoreRowModel:Kn(),state:{columnVisibility:En,columnOrder:Nn,rowSelection:Tn,sorting:ie,columnSizing:g,columnPinning:Rn},onSortingChange:gn,onColumnSizingChange:E,onColumnPinningChange:In,onColumnVisibilityChange:On,onColumnOrderChange:kn,enableRowSelection:se,enableSorting:S,columnResizeMode:"onChange",columnResizeDirection:"ltr",manualSorting:!0,defaultColumn:{minSize:80},getRowId:bn,meta:{onCellEdit:R.onCellEdit,cellEdits:R.cellEdits,isInEditMode:R.editMode.isActive}}),An=u.useCallback((zn,Wn)=>y==null?void 0:y(zn,Wn.getValue()),[y]),Vn=u.useMemo(()=>({showSortingItems:S,showPinningItems:v,showResizeItem:D,showConfigItem:O}),[S,v,D,O]);return C.createElement(_n,{table:Bn,isLoading:Cn||Sn,fetchNextPage:hn,onRowClick:N.onRowClick,rowHeight:N.rowHeight,renderCellContextMenu:An,className:N.className,error:jn,headerMenuFeatureFlags:Vn,editableConfig:R})}const f={type:"object",apiName:"Employee"},Wt={title:"Components/ObjectTable",component:T,parameters:{msw:{handlers:[...Un.handlers]},controls:{expanded:!0}},argTypes:{objectType:{description:"The object or interface type of the object",control:!1},columnDefinitions:{description:"Ordered list of column definitions to show in the table. If not provided, all of the properties of the object type will be shown in default order.",control:"object"},filter:{description:"The current where clause to filter the objects in the table. If provided, the filter is controlled.",control:"object"},enableOrdering:{description:"Whether the table is sortable by the user.",control:"boolean",defaultValue:!0,table:{defaultValue:{summary:"true"}}},enableColumnPinning:{description:"Whether columns can be pinned by the user.",control:"boolean",defaultValue:!0,table:{defaultValue:{summary:"true"}}},enableColumnResizing:{description:"Whether columns can be resized by the user.",control:"boolean",defaultValue:!0,table:{defaultValue:{summary:"true"}}},enableColumnConfig:{description:"Whether the column configuration dialog for column visibility and ordering is available to the user.",control:"boolean",defaultValue:!0,table:{defaultValue:{summary:"true"}}},editMode:{description:"Controls the edit mode behavior of the table. 'always': Table is always in edit mode. 'manual': User can toggle edit mode on/off.",control:"select",options:["manual","always"],defaultValue:"manual",table:{defaultValue:{summary:"manual"}}},defaultOrderBy:{description:"The default order by clause to sort the objects in the table. If provided without orderBy prop, the sorting is uncontrolled. If both orderBy and defaultOrderBy are provided, orderBy takes precedence.",control:"object"},orderBy:{description:"The current order by clause to sort the objects in the table. If provided, the sorting is controlled. If both orderBy and defaultOrderBy are provided, orderBy takes precedence.",control:"object"},onOrderByChanged:{description:"Called when the order by clause is changed. Required when sorting is controlled.",control:!1,table:{category:"Events"}},onColumnVisibilityChanged:{description:"Called when the column visibility or ordering changed. If provided, the table will allow the user to show/hide columns.",control:!1,table:{category:"Events"}},onColumnsPinnedChanged:{description:"Called when the pinned columns change. If provided, the table will allow the user to pin/unpin columns.",control:!1,table:{category:"Events"}},onColumnResize:{description:"Called when a column is resized. Parameters: columnId - The ID of the resized column, newWidth - The new width of the column. When newWidth = null, the column size is reset.",control:!1,table:{category:"Events"}},onRowClick:{description:"Called when a row is clicked.",control:!1,table:{category:"Events"}},selectionMode:{description:"Selection mode for the table rows. If multiple, a checkbox will be shown for each row to allow selecting multiple rows as well as a top-level checkbox in the header to select all rows.",control:{type:"select"},options:["single","multiple","none"],defaultValue:"none",table:{defaultValue:{summary:"none"}}},selectedRows:{description:"The currently selected rows in the table. If provided, the row selection is controlled.",control:"object"},onRowSelection:{description:"Called when the row selection changes. Required when row selection is controlled.",control:!1,table:{category:"Events"}},renderCellContextMenu:{description:"If provided, will render this context menu when right clicking on a cell",control:!1,table:{category:"Advanced"}},rowHeight:{description:"The height of each row in pixels.",control:"number",defaultValue:40,table:{defaultValue:{summary:"40"}}},className:{description:"Additional CSS class name for the table",control:"text"}}},Q=[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"emailPrimaryWork"},renderHeader:()=>"Email"},{locator:{type:"property",id:"jobTitle"},isVisible:!1},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"firstFullTimeStartDate"},width:200,renderHeader:()=>"Start Date",renderCell:e=>s.jsx("div",{children:e.firstFullTimeStartDate?new Date(e.firstFullTimeStartDate).toLocaleDateString():"No date"})},{locator:{type:"rdp",id:"managerName",creator:e=>e.pivotTo("lead").selectProperty("fullName")},renderHeader:()=>"Manager",renderCell:e=>"managerName"in e?s.jsx("span",{children:e.managerName}):s.jsx("span",{style:{color:"#999"},children:"No Manager"})}],M={args:{objectType:f},parameters:{docs:{source:{code:"<ObjectTable objectType={Employee} />"}}},render:e=>s.jsx("div",{className:"object-table-container",style:{height:"600px"},children:s.jsx(T,{objectType:f,...e})})},B={args:{objectType:f,columnDefinitions:Q},parameters:{docs:{source:{code:`const columnDefinitions = [
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

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:e=>s.jsx("div",{className:"object-table-container",style:{height:"600px"},children:s.jsx(T,{objectType:f,...e})})},A={args:{objectType:f,selectionMode:"single"},parameters:{docs:{source:{code:'<ObjectTable objectType={Employee} selectionMode="single" />'}}},render:e=>s.jsx("div",{className:"object-table-container",style:{height:"600px"},children:s.jsx(T,{objectType:f,...e})})},V={args:{objectType:f,selectionMode:"multiple"},parameters:{docs:{source:{code:'<ObjectTable objectType={Employee} selectionMode="multiple" />'}}},render:e=>s.jsx("div",{className:"object-table-container",style:{height:"600px"},children:s.jsx(T,{objectType:f,...e})})},z={args:{objectType:f,renderCellContextMenu:(e,n)=>s.jsxs("div",{style:{background:"white",padding:8,border:"1px solid #d1d5db",boxShadow:"0 2px 8px 0 rgba(0, 0, 0, 0.1)",fontSize:13,borderRadius:4},children:[s.jsx("div",{style:{fontWeight:"bold",marginBottom:4},children:"Cell Value:"}),s.jsx("div",{children:n?String(n):"No Value"})]})},parameters:{docs:{source:{code:`<ObjectTable
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
/>`}}},render:e=>s.jsxs("div",{className:"object-table-container",style:{height:"600px"},children:[s.jsx("div",{style:{padding:"12px"},children:"Right click on any cell"}),s.jsx(T,{objectType:f,...e})]})},W={args:{objectType:f,defaultOrderBy:[{property:"fullName",direction:"desc"}]},parameters:{docs:{source:{code:`<ObjectTable
  objectType={Employee}
  defaultOrderBy={[{
    property: "fullName",
    direction: "desc",
  }]}
/>`}}},render:e=>s.jsx("div",{className:"object-table-container",style:{height:"600px"},children:s.jsx(T,{objectType:f,...e})})},H={args:{objectType:f,columnDefinitions:[{locator:{type:"property",id:"fullName"},pinned:"left"},{locator:{type:"property",id:"emailPrimaryWork"}},{locator:{type:"property",id:"jobTitle"}},{locator:{type:"property",id:"department"},pinned:"right"},{locator:{type:"property",id:"firstFullTimeStartDate"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:e=>s.jsx("div",{className:"object-table-container",style:{height:"600px"},children:s.jsx(T,{objectType:f,...e})})},P={parameters:{docs:{source:{code:`const customColumnDefinition = [
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
    `}}},args:{objectType:f,columnDefinitions:[...Q.slice(0,3),{locator:{type:"custom",id:"actions"},renderHeader:()=>"Actions",renderCell:e=>s.jsxs("div",{style:{display:"flex",gap:"8px"},children:[s.jsx("button",{style:{padding:"4px 8px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:"pointer"},onClick:()=>alert(`View ${e.fullName}`),children:"View"}),s.jsx("button",{style:{padding:"4px 8px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:"pointer"},onClick:()=>alert(`Edit ${e.fullName}`),children:"Edit"})]}),orderable:!1,width:120}]},render:e=>s.jsx("div",{className:"object-table-container",style:{height:"600px"},children:s.jsx(T,{objectType:f,...e})})},F={args:{objectType:f,onRowClick:e=>{alert(`Clicked on ${e.fullName}`)}},parameters:{docs:{source:{code:`<ObjectTable
  objectType={Employee}
  onRowClick={(employee) => {
    alert(\`Clicked on \${employee["fullName"]}\`);
  }}
/>`}}},render:e=>s.jsx("div",{className:"object-table-container",style:{height:"600px"},children:s.jsx(T,{objectType:f,...e})})},_={parameters:{docs:{source:{code:`const [orderBy, setOrderBy] = useState<any>([
  { property: "fullName", direction: "asc" },
]);

return (
  <ObjectTable
    objectType={Employee}
    orderBy={orderBy}
    onOrderByChanged={setOrderBy}
  />
);`}}},render:()=>{const[e,n]=u.useState([{property:"fullName",direction:"asc"}]);return s.jsxs("div",{children:[s.jsxs("div",{style:{marginBottom:"16px"},children:[s.jsx("strong",{children:"Current Sort:"})," ",e.map((t,o)=>s.jsxs("span",{children:[t.property," (",t.direction,")",o<e.length-1&&", "]},o))]}),s.jsx("div",{className:"object-table-container",style:{height:"600px"},children:s.jsx(T,{objectType:f,orderBy:e,onOrderByChanged:n})})]})}},K={parameters:{docs:{source:{code:`const [selectedRows, setSelectedRows] = useState<any[]>([]);

return (
  <ObjectTable
    objectType={Employee}
    selectionMode="multiple"
    selectedRows={selectedRows}
    onRowSelection={setSelectedRows}
  />
);`}}},render:()=>{const[e,n]=u.useState([]),[t,o]=u.useState(!1),r=u.useCallback((i,l)=>{n(i),l!==void 0&&o(l)},[]);return s.jsxs("div",{children:[s.jsxs("div",{style:{marginBottom:"16px"},children:[s.jsx("strong",{children:"Selected:"})," ",t?"All Employees":`${e.length} employees`,e.length>0&&s.jsx("button",{style:{marginLeft:"16px",padding:"4px 8px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:"pointer"},onClick:()=>{n([]),o(!1)},children:"Clear Selection"})]}),s.jsx("div",{className:"object-table-container",style:{height:"600px"},children:s.jsx(T,{objectType:f,selectionMode:"multiple",selectedRows:e,onRowSelection:r})})]})}},$={args:{objectType:f,enableOrdering:!1,enableColumnPinning:!1,enableColumnResizing:!1,enableColumnConfig:!1},parameters:{docs:{source:{code:`<ObjectTable
  objectType={Employee}
  enableOrdering={false}
  enableColumnPinning={false}
  enableColumnResizing={false}
  enableColumnConfig={false}
/>`}}},render:e=>s.jsx("div",{className:"object-table-container",style:{height:"600px"},children:s.jsx(T,{objectType:f,...e})})},J={args:{objectType:f,rowHeight:56},parameters:{docs:{source:{code:"<ObjectTable objectType={Employee} rowHeight={56} />"}}},render:e=>s.jsx("div",{className:"object-table-container",style:{height:"600px"},children:s.jsx(T,{objectType:f,...e})})},L={args:{objectType:f,columnDefinitions:[{locator:{type:"property",id:"fullName"},renderHeader:()=>s.jsx("a",{href:"#",className:"header-link",onClick:e=>{e.preventDefault(),alert("Employee Name column clicked!")},children:"Employee Name"})},{locator:{type:"property",id:"emailPrimaryWork"}},{locator:{type:"property",id:"jobTitle"},renderHeader:()=>"Job Title"},{locator:{type:"custom",id:"employment-status"},renderHeader:()=>"Employment Status",renderCell:e=>{const n=e.firstFullTimeStartDate,t=n&&new Date(n)<=new Date;return s.jsx("span",{className:`status-tag ${t?"active":"inactive"}`,children:t?"Active":"Inactive"})},width:140},{locator:{type:"property",id:"department"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:e=>s.jsx("div",{className:"object-table-container",style:{height:"600px"},children:s.jsx(T,{objectType:f,...e})})},Y={parameters:{docs:{source:{code:`const [isColumnConfigOpen, setIsColumnConfigOpen] = useState(false);
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
);`}}},render:()=>{const e=[{locator:{type:"property",id:"fullName"},columnName:"Full Name"},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job Title"},{locator:{type:"property",id:"department"},columnName:"Department"}],[n,t]=u.useState(!1),[o,r]=u.useState(e),i=u.useMemo(()=>e.map(d=>({id:d.locator.id,name:d.columnName||d.locator.id})),[]),l=u.useMemo(()=>{const d={};return e.forEach(m=>{d[m.locator.id]=o.some(y=>y.locator.id===m.locator.id)}),d},[o]),a=u.useMemo(()=>o.map(d=>d.locator.id),[o]),c=u.useCallback(d=>{const m=[];d.forEach(({columnId:y,isVisible:h})=>{if(h){const p=e.find(b=>b.locator.id===y);p&&m.push(p)}}),r(m),t(!1)},[]);return s.jsxs("div",{style:{height:"600px",display:"flex",flexDirection:"column"},children:[s.jsx("div",{style:{padding:"8px 0",marginBottom:8},children:s.jsx("button",{onClick:()=>t(!0),style:{padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Configure Columns"})}),s.jsx(T,{objectType:f,columnDefinitions:o,enableColumnConfig:!1}),s.jsx($n,{isOpen:n,onClose:()=>t(!1),columnOptions:i,currentVisibility:l,currentColumnOrder:a,onApply:c})]})}},U={args:{objectType:f,columnDefinitions:[{locator:{type:"property",id:"fullName"},editable:!0},...Q.slice(1)],editMode:"manual"},parameters:{docs:{source:{code:`const columnDefinitions = [
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
  );`}}},render:e=>s.jsx("div",{className:"object-table-container",style:{height:"600px"},children:s.jsx(T,{objectType:f,...e})})},q={args:{objectType:f,columnDefinitions:[...Q,{locator:{type:"property",id:"fullName"},editable:!0}],onSubmitEdits:e=>(alert("Submitting edits"),!0)},parameters:{docs:{source:{code:`const columnDefinitions = [
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
  />`}}},render:e=>s.jsx("div",{className:"object-table-container",style:{height:"600px"},children:s.jsx(T,{objectType:f,...e})})};var me,be,ye;M.parameters={...M.parameters,docs:{...(me=M.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ye=(be=M.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var fe,ge,he;B.parameters={...B.parameters,docs:{...(fe=B.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(he=(ge=B.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var Ce,je,Se;A.parameters={...A.parameters,docs:{...(Ce=A.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Se=(je=A.parameters)==null?void 0:je.docs)==null?void 0:Se.source}}};var Te,we,De;V.parameters={...V.parameters,docs:{...(Te=V.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(De=(we=V.parameters)==null?void 0:we.docs)==null?void 0:De.source}}};var ve,xe,Ee;z.parameters={...z.parameters,docs:{...(ve=z.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(Ee=(xe=z.parameters)==null?void 0:xe.docs)==null?void 0:Ee.source}}};var Oe,Ne,ke;W.parameters={...W.parameters,docs:{...(Oe=W.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(ke=(Ne=W.parameters)==null?void 0:Ne.docs)==null?void 0:ke.source}}};var Re,Ie,Me;H.parameters={...H.parameters,docs:{...(Re=H.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Me=(Ie=H.parameters)==null?void 0:Ie.docs)==null?void 0:Me.source}}};var Be,Ae,Ve;P.parameters={...P.parameters,docs:{...(Be=P.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Ve=(Ae=P.parameters)==null?void 0:Ae.docs)==null?void 0:Ve.source}}};var ze,We,He;F.parameters={...F.parameters,docs:{...(ze=F.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(He=(We=F.parameters)==null?void 0:We.docs)==null?void 0:He.source}}};var Pe,Fe,_e;_.parameters={..._.parameters,docs:{...(Pe=_.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(_e=(Fe=_.parameters)==null?void 0:Fe.docs)==null?void 0:_e.source}}};var Ke,$e,Je;K.parameters={...K.parameters,docs:{...(Ke=K.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
    const [isSelectAll, setIsSelectAll] = useState<boolean>(false);
    const handleRowSelection = useCallback((selectedRows: any[], isSelectAll?: boolean) => {
      setSelectedRows(selectedRows);
      if (isSelectAll !== undefined) {
        setIsSelectAll(isSelectAll);
      }
    }, []);
    return <div>
        <div style={{
        marginBottom: "16px"
      }}>
          <strong>Selected:</strong>{" "}
          {isSelectAll ? "All Employees" : \`\${selectedRows.length} employees\`}
          {selectedRows.length > 0 && <button style={{
          marginLeft: "16px",
          padding: "4px 8px",
          fontSize: "12px",
          border: "1px solid #d1d5db",
          borderRadius: "4px",
          background: "white",
          cursor: "pointer"
        }} onClick={() => {
          setSelectedRows([]);
          setIsSelectAll(false);
        }}>
              Clear Selection
            </button>}
        </div>
        <div className="object-table-container" style={{
        height: "600px"
      }}>
          <ObjectTable objectType={Employee} selectionMode="multiple" selectedRows={selectedRows} onRowSelection={handleRowSelection} />
        </div>
      </div>;
  }
}`,...(Je=($e=K.parameters)==null?void 0:$e.docs)==null?void 0:Je.source}}};var Le,Ye,Ue;$.parameters={...$.parameters,docs:{...(Le=$.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Ue=(Ye=$.parameters)==null?void 0:Ye.docs)==null?void 0:Ue.source}}};var qe,Ge,Qe;J.parameters={...J.parameters,docs:{...(qe=J.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Qe=(Ge=J.parameters)==null?void 0:Ge.docs)==null?void 0:Qe.source}}};var Ze,Xe,en;L.parameters={...L.parameters,docs:{...(Ze=L.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(en=(Xe=L.parameters)==null?void 0:Xe.docs)==null?void 0:en.source}}};var nn,tn,on;Y.parameters={...Y.parameters,docs:{...(nn=Y.parameters)==null?void 0:nn.docs,source:{originalSource:`{
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
}`,...(on=(tn=Y.parameters)==null?void 0:tn.docs)==null?void 0:on.source}}};var rn,ln,sn;U.parameters={...U.parameters,docs:{...(rn=U.parameters)==null?void 0:rn.docs,source:{originalSource:`{
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
}`,...(sn=(ln=U.parameters)==null?void 0:ln.docs)==null?void 0:sn.source}}};var an,cn,un;q.parameters={...q.parameters,docs:{...(an=q.parameters)==null?void 0:an.docs,source:{originalSource:`{
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
}`,...(un=(cn=q.parameters)==null?void 0:cn.docs)==null?void 0:un.source}}};const Ht=["Default","WithColumnDefinitions","SingleSelection","MultipleSelection","WithContextMenu","WithDefaultSorting","WithDefaultColumnPinning","WithCustomColumn","WithRowClickHandler","ControlledSorting","ControlledSelection","DisableAllHeaderMenuFeatures","CustomRowHeight","WithCustomRenderers","WithColumnConfigDialog","EditableTable","WithSubmitEditsButton"];export{K as ControlledSelection,_ as ControlledSorting,J as CustomRowHeight,M as Default,$ as DisableAllHeaderMenuFeatures,U as EditableTable,V as MultipleSelection,A as SingleSelection,Y as WithColumnConfigDialog,B as WithColumnDefinitions,z as WithContextMenu,P as WithCustomColumn,L as WithCustomRenderers,H as WithDefaultColumnPinning,W as WithDefaultSorting,F as WithRowClickHandler,q as WithSubmitEditsButton,Ht as __namedExportsOrder,Wt as default};
