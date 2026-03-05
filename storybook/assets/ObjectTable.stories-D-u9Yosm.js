import{j as c}from"./jsx-runtime-Br7o5rOt.js";import{I as In,S as Z,C as en,u as Bn,B as Mn,g as Vn,b as zn}from"./Table-BRGl7kF4.js";import{R as h,r as u}from"./index-CracEMlZ.js";import{g as k,O as nn,a as Wn,f as An}from"./fauxFoundry-BW5M8Rdd.js";import{W as Hn,O as Pn}from"./WhereClauseCanonicalizer-h-wRdnts.js";import"./index-4aAU_u7E.js";import"./tiny-invariant-CopsF_GD.js";import"./index-WJ_p-_f8.js";const Fn=new Hn,Kn=new Pn;function _n(e,n){const t=["objectSet",k(e)];if(!n)return JSON.stringify(t);if(n.where&&t.push("where",Fn.canonicalize(n.where)),n.withProperties){const o=Object.keys(n.withProperties).sort();t.push("props",o)}return n.union&&n.union.length>0&&t.push("union",n.union.map(o=>k(o))),n.intersect&&n.intersect.length>0&&t.push("intersect",n.intersect.map(o=>k(o))),n.subtract&&n.subtract.length>0&&t.push("subtract",n.subtract.map(o=>k(o))),n.pivotTo&&t.push("pivotTo",n.pivotTo),n.orderBy&&t.push("orderBy",Kn.canonicalize(n.orderBy)),n.pageSize&&t.push("pageSize",n.pageSize),JSON.stringify(t)}function J(e,n,t){let o=t;function l(){return o}return{subscribe:function(i){const a=e({next:s=>{o=s,i()},error:s=>{o={...o??{},error:s instanceof Error?s:new Error(String(s))},i()},complete:()=>{}});return()=>{a.unsubscribe()}},getSnapShot:l}}const $n="$__OBJECT__TYPE__PLACEHOLDER";function Ln(e,n={}){const{observableClient:t}=h.useContext(nn),{enabled:o=!0,streamUpdates:l,...r}=n,i=o?e.$objectSetInternals.def.apiName:$n,a=h.useRef(i),s=h.useRef(),d=a.current!==i;d&&(a.current=i,s.current=void 0);const p=_n(e,{where:r.where,withProperties:r.withProperties,union:r.union,intersect:r.intersect,subtract:r.subtract,pivotTo:r.pivotTo,pageSize:r.pageSize,orderBy:r.orderBy}),{subscribe:g,getSnapShot:f}=h.useMemo(()=>{if(!o)return J(()=>({unsubscribe:()=>{}}));const b=d?void 0:s.current;return J(v=>t.observeObjectSet(e,{where:r.where,withProperties:r.withProperties,union:r.union,intersect:r.intersect,subtract:r.subtract,pivotTo:r.pivotTo,pageSize:r.pageSize,orderBy:r.orderBy,dedupeInterval:r.dedupeIntervalMs??2e3,autoFetchMore:r.autoFetchMore,streamUpdates:l},v),void 0,b)},[o,t,p,l,d]),m=h.useSyncExternalStore(g,f);return m&&q(m)&&(s.current=m),h.useMemo(()=>{const b=q(m)?m:s.current;return{data:b==null?void 0:b.resolvedList,isLoading:!q(m),error:b&&"error"in b?b.error:void 0,fetchMore:m!=null&&m.hasMore?m.fetchMore:void 0,objectSet:(m==null?void 0:m.objectSet)||e,totalCount:b==null?void 0:b.totalCount}},[m,e])}function q(e){if(e!=null&&"error"in e)return!0;if((e==null?void 0:e.status)==null)return!1;switch(e.status){case"loaded":case"error":return!0;case"loading":case"init":return!1;default:return e.status,!1}}const Jn={};function Un(e,n){const{observableClient:t}=h.useContext(nn),{pageSize:o,dedupeIntervalMs:l,withProperties:r,enabled:i=!0,rids:a,where:s,orderBy:d,streamUpdates:p,autoFetchMore:g,intersectWith:f,pivotTo:m}=n??{},b=t.canonicalizeWhereClause(s??Jn),v=h.useMemo(()=>b,[JSON.stringify(b)]),T=h.useMemo(()=>a,[JSON.stringify(a)]),j=h.useMemo(()=>r,[JSON.stringify(r)]),x=h.useMemo(()=>f,[JSON.stringify(f)]),w=h.useMemo(()=>d,[JSON.stringify(d)]),{subscribe:E,getSnapShot:O}=h.useMemo(()=>J(i?D=>t.observeList({type:e,rids:T,where:v,dedupeInterval:l??2e3,pageSize:o,orderBy:w,streamUpdates:p,withProperties:j,autoFetchMore:g,...x?{intersectWith:x}:{},...m?{pivotTo:m}:{}},D):()=>({unsubscribe:()=>{}})),[i,t,e.apiName,e.type,T,v,l,o,w,p,j,g,x,m]),y=h.useSyncExternalStore(E,O);return h.useMemo(()=>{let D;return y&&"error"in y&&y.error?D=y.error:(y==null?void 0:y.status)==="error"&&(D=new Error("Failed to load objects")),{fetchMore:y!=null&&y.hasMore?y.fetchMore:void 0,error:D,data:y==null?void 0:y.resolvedList,isLoading:i?(y==null?void 0:y.status)==="loading"||(y==null?void 0:y.status)==="init"||!y:!1,isOptimistic:(y==null?void 0:y.isOptimistic)??!1,totalCount:y==null?void 0:y.totalCount}},[y,i])}function Yn(){return h.useContext(Wn).client}function qn(e){const n=Yn(),[t,o]=h.useState(void 0),[l,r]=h.useState();return!t&&!l?(n.fetchMetadata(e).then(i=>{o(i)}).catch(i=>{const a=i instanceof Error?i.message:String(i);r(a)}),{loading:!0}):{loading:!1,metadata:t,error:l}}const Gn={osdkEditableInput:"EditableCell-module__osdkEditableInput___2BjN5Q4P"},tn=["double","integer","long","float","decimal","byte","short"];function G(e){return e==null?"":typeof e=="object"?JSON.stringify(e):String(e)}function Qn(e,n){if(!n||!tn.includes(n))return e;if(e==="")return null;const t=Number(e);return isNaN(t)?e:t}function Zn({initialValue:e,currentValue:n,cellId:t,dataType:o,onCellEdit:l}){const[r,i]=u.useState(G(n)),a=u.useRef(!1);u.useEffect(()=>{i(G(n))},[n]);const s=u.useCallback(()=>{if(a.current){a.current=!1;return}const f=Qn(r,o);l==null||l(t,{newValue:f,oldValue:e})},[r,e,l,t,o]),d=u.useCallback(f=>{i(f)},[]),p=u.useCallback(f=>{f.key==="Enter"&&f.currentTarget.blur(),f.key==="Escape"&&(a.current=!0,i(G(n)),f.currentTarget.blur())},[n]),g=o&&tn.includes(o)?"number":"text";return h.createElement(In,{className:Gn.osdkEditableInput,type:g,value:r,onValueChange:d,onBlur:s,onKeyDown:p})}function Xn(e){return JSON.stringify(e)}function et(e){const n=JSON.parse(e);if(typeof n=="object"&&n!=null&&"rowId"in n&&"columnId"in n)return n;throw new Error("Parsed cellId does not have required properties")}function nt(e){const n=e.table.options.meta,t=e.column.columnDef.meta;if(!(t!=null&&t.editable)||!(n!=null&&n.onCellEdit))return h.createElement(h.Fragment,null,e.getValue());const o=e.row.id,l=e.column.id,r=Xn({rowId:o,columnId:l}),i=n.cellEdits,a=i==null?void 0:i[r],s=(a==null?void 0:a.newValue)??e.getValue();return h.createElement(Zn,{initialValue:e.getValue(),currentValue:s,cellId:r,dataType:t==null?void 0:t.dataType,onCellEdit:n.onCellEdit})}function tt(e,n){const{metadata:t,loading:o,error:l}=qn(e);return{columns:u.useMemo(()=>{const i=t==null?void 0:t.properties;return n?ot(n,i):rt(i)},[n,t==null?void 0:t.properties]),loading:o,error:l}}function ot(e,n){return e.map(t=>{const{locator:o,width:l,minWidth:r,maxWidth:i,resizable:a,orderable:s,filterable:d,editable:p,renderCell:g,renderHeader:f,columnName:m}=t,b=o.type==="property"?n==null?void 0:n[o.id]:void 0,v=o.id,T=b!=null&&b.type&&typeof b.type=="string"?b.type:void 0;return{id:v,accessorKey:v,header:f??(m||(b==null?void 0:b.displayName)),meta:{columnName:m||(b==null?void 0:b.displayName),isVisible:t.isVisible!==!1,editable:p,dataType:T},size:l,...r?{minSize:r}:{},...i?{maxSize:i}:{},enableResizing:a,enableSorting:s,enableColumnFilter:d,cell:x=>{const w=x.row.original;return g?g(w,o):nt(x)}}})}function rt(e){return e?Object.entries(e).map(([n,t])=>({accessorKey:n,header:t.displayName??n})):[]}const it=({columnDefinitions:e,hasSelectionColumn:n,onColumnsPinnedChanged:t})=>{const[o,l]=u.useState({left:[],right:[]});u.useEffect(()=>{const i=lt(e);l({left:[...n?[Z]:[],...i.left??[]],right:[...i.right??[]]})},[e,n]);const r=u.useCallback(i=>{l(a=>{const s=typeof i=="function"?i(a):i;if(t){const p=st(s).filter(g=>g.columnId!==Z);t(p)}return s})},[t]);return{columnPinning:o,onColumnPinningChange:r}},lt=e=>e?e.reduce((t,{locator:o,pinned:l})=>{const r=o.id.toString();return l!=null&&l!=="none"?l==="left"?{...t,left:[...t.left??[],r]}:{...t,right:[...t.right??[],r]}:t},{left:[],right:[]}):{};function st(e){return[...(e.left??[]).map(n=>({columnId:n,pinned:"left"})),...(e.right??[]).map(n=>({columnId:n,pinned:"right"}))]}const at=({onColumnResize:e})=>{const[n,t]=u.useState({}),o=u.useCallback(l=>{t(r=>{const i=typeof l=="function"?l(r):l;if(e){for(const a of Object.keys(i))i[a]!==r[a]&&e(a,i[a]);for(const a of Object.keys(r))a in i||e(a,null)}return i})},[e]);return{columnSizing:n,onColumnSizingChange:o}},ct=({allColumns:e,onColumnVisibilityChanged:n})=>{const[t,o]=u.useState(()=>ie(e)),[l,r]=u.useState(()=>le(e));u.useEffect(()=>{o(ie(e))},[e]),u.useEffect(()=>{r(le(e))},[e]);const i=u.useCallback(s=>{o(d=>{const p=typeof s=="function"?s(d):s;if(n){const g=Object.entries(p).map(([f,m])=>({columnId:f,isVisible:m}));n(g)}return p})},[n]),a=u.useCallback(s=>{r(d=>typeof s=="function"?s(d):s)},[]);return{columnVisibility:t,onColumnVisibilityChange:i,columnOrder:l,onColumnOrderChange:a}},ie=e=>e.reduce((n,t)=>{var l;const o=t.id??t.accessorKey;return o?{...n,[o]:((l=t.meta)==null?void 0:l.isVisible)!==!1}:n},{}),le=e=>e.map(n=>n.id??n.accessorKey).filter(n=>n!=null);function ut({onCellValueChanged:e,onSubmitEdits:n}){const[t,o]=u.useState({}),l=u.useCallback((a,s)=>{const d=et(a);s.newValue===s.oldValue?o(p=>{const{[a]:g,...f}=p;return f}):o(p=>({...p,[a]:s})),e==null||e(d,s)},[e]),r=u.useCallback(()=>{o({})},[]),i=u.useCallback(async()=>{await(n==null?void 0:n(t))},[t,n]);return{cellEdits:t,handleCellEdit:l,handleSubmitEdits:i,clearEdits:r}}const se=50;function dt(e,n,t,o,l,r){const i=u.useMemo(()=>{if(!(!o||o.length===0))return o.reduce((f,m)=>(f[m.id]=m.desc?"desc":"asc",f),{})},[o]),a=u.useMemo(()=>{if(!n)return;const f=n.map(m=>m.locator).filter(m=>m.type==="rdp");if(f.length)return f.reduce((m,b)=>({...m,[b.id]:b.creator}),{})},[n]),s=e.type==="object",d=!!l&&s,p=Ln(d?l:void 0,{...r,withProperties:a,where:t,orderBy:i,pageSize:se,enabled:d}),g=Un(e,{withProperties:a,pageSize:se,where:t,orderBy:i,enabled:!d});return d?(console.debug("Using useObjectSet for data fetching in ObjectTable because objectSet is provided and objectType is an object."),{data:p.data,fetchMore:p.fetchMore,isLoading:p.isLoading,error:p.error,totalCount:p.totalCount,isOptimistic:!1}):(console.debug("Using useOsdkObjects for data fetching in ObjectTable because objectSet is not provided or objectType is an interface."),g)}const on=e=>rn(e.$primaryKey),rn=e=>e.toString();function pt({selectionMode:e="none",selectedRows:n,onRowSelection:t,data:o}){const[l,r]=u.useState({}),[i,a]=u.useState(null),s=n!==void 0,d=e!=="none",p=u.useMemo(()=>d?s&&n?Q(n):l:{},[d,s,n,l]),g=Object.values(p).filter(Boolean).length,f=(o==null?void 0:o.length)??0,m=f>0&&g===f,b=u.useCallback(()=>{if(!d||!o)return;const T=m?[]:o.map(j=>j.$primaryKey);s||r(Q(T)),t==null||t(T)},[d,o,m,s,t]),v=u.useCallback((T,j,x=!1)=>{if(!d||!o)return;let w=[];e==="single"?w=mt({rowId:T,rowIndex:j,data:o,rowSelectionState:p}):x&&i!=null?(w=bt({rowIndex:j,data:o,lastSelectedRowIndex:i,rowSelectionState:p}),a(j)):(w=ft({rowIndex:j,data:o,rowSelectionState:p}),ln({rowIndex:j,data:o,rowSelectionState:p})||a(j)),s||r(Q(w)),t==null||t(w)},[d,o,e,i,s,p,t]);return{rowSelection:p,isAllSelected:m,enableRowSelection:d,hasSelection:g>0,onToggleAll:b,onToggleRow:v}}function mt({rowId:e,rowIndex:n,data:t,rowSelectionState:o}){const l=t[n].$primaryKey;return o[e]?[]:[l]}function bt({lastSelectedRowIndex:e,rowIndex:n,data:t,rowSelectionState:o}){if(e!=null){const r=yt(t,e,n).map(s=>s.$primaryKey),a=[...X(o,t)];return r.forEach(s=>{a.includes(s)||a.push(s)}),a}return[]}function ln({rowIndex:e,data:n,rowSelectionState:t}){const o=n[e].$primaryKey;return X(t,n).includes(o)}function ft({rowIndex:e,data:n,rowSelectionState:t}){const o=n[e].$primaryKey,l=X(t,n);return ln({rowIndex:e,data:n,rowSelectionState:t})?l.filter(i=>i!==o):[...l,o]}function yt(e,n,t){const o=Math.min(n,t),l=Math.max(n,t),r=[];for(let i=o;i<=l;i++){const a=e[i];a&&r.push(a)}return r}function Q(e){return e.reduce((n,t)=>(n[rn(t)]=!0,n),{})}function X(e,n){return n.filter(t=>e[on(t)]).map(t=>t.$primaryKey)}function gt({isAllSelected:e,hasSelection:n,onToggleAll:t}){return h.createElement(en,{indeterminate:n&&!e,checked:e,onCheckedChange:t,"aria-label":"Select all rows"})}function ht({row:e,onToggleRow:n}){const t=u.useCallback(l=>{l.stopPropagation();const r=l.shiftKey;n(e.id,e.index,r)},[n,e.id,e.index]),o=u.useCallback(l=>{if(l.key==="Enter"){const r=l.shiftKey;n(e.id,e.index,r)}},[n,e.id,e.index]);return h.createElement("div",{onClick:t,onKeyDown:o},h.createElement(en,{checked:e.getIsSelected(),"aria-label":`Select row ${e.index+1}`}))}const Ct=({selectionMode:e,isAllSelected:n,hasSelection:t,onToggleAll:o,onToggleRow:l})=>{const r=u.useRef(n);r.current=n;const i=u.useRef(t);i.current=t;const a=u.useRef(o);a.current=o;const s=u.useRef(l);return s.current=l,u.useMemo(()=>e==="none"?null:{id:Z,header:()=>e==="multiple"?h.createElement(gt,{isAllSelected:r.current,hasSelection:i.current,onToggleAll:a.current}):null,cell:({row:p})=>h.createElement(ht,{row:p,onToggleRow:s.current}),size:50,minSize:50,maxSize:50,enableSorting:!1,enableResizing:!1,enablePinning:!1},[e])},jt=({orderBy:e,defaultOrderBy:n,onOrderByChanged:t})=>{const[o,l]=u.useState(()=>n?ae(n):[]),r=e!==void 0,i=u.useMemo(()=>e?ae(e):o,[e,o]),a=u.useCallback(s=>{const d=typeof s=="function"?s(i):s;if(r||l(d),t){const p=St(d);t(p)}},[r,i,t]);return{sorting:i,onSortingChange:a}};function ae(e){return e.map(({property:n,direction:t})=>({id:n,desc:t==="desc"}))}function St(e){return e.map(({id:n,desc:t})=>({property:n,direction:t?"desc":"asc"}))}function S({objectType:e,objectSet:n,columnDefinitions:t,filter:o,objectSetOptions:l,orderBy:r,defaultOrderBy:i,onOrderByChanged:a,onColumnsPinnedChanged:s,onColumnResize:d,onRowSelection:p,renderCellContextMenu:g,selectionMode:f="none",selectedRows:m,onColumnVisibilityChanged:b,onCellValueChanged:v,onSubmitEdits:T,enableOrdering:j=!0,enableColumnPinning:x=!0,enableColumnResizing:w=!0,enableColumnConfig:E=!0,...O}){const{columnSizing:y,onColumnSizingChange:D}=at({onColumnResize:d}),{cellEdits:U,clearEdits:ee,handleCellEdit:an,handleSubmitEdits:ne}=ut({onCellValueChanged:v,onSubmitEdits:T}),{sorting:te,onSortingChange:cn}=jt({orderBy:r,defaultOrderBy:i,onOrderByChanged:a}),{data:oe,fetchMore:un,isLoading:dn,error:pn}=dt(e,t,o,te,n,l),{columns:N,loading:mn}=tt(e,t),{rowSelection:bn,isAllSelected:fn,hasSelection:yn,onToggleAll:gn,onToggleRow:hn,enableRowSelection:re}=pt({selectionMode:f,selectedRows:m,onRowSelection:p,data:oe}),Y=Ct({selectionMode:f,isAllSelected:fn,hasSelection:yn,onToggleAll:gn,onToggleRow:hn}),{columnVisibility:Cn,onColumnVisibilityChange:jn,columnOrder:Sn,onColumnOrderChange:Tn}=ct({allColumns:N,onColumnVisibilityChanged:b}),{columnPinning:wn,onColumnPinningChange:vn}=it({columnDefinitions:t,hasSelectionColumn:re,onColumnsPinnedChanged:s}),xn=u.useMemo(()=>Y?[Y,...N]:N,[Y,N]),Dn=Bn({data:oe??[],columns:xn,getCoreRowModel:Vn(),state:{columnVisibility:Cn,columnOrder:Sn,rowSelection:bn,sorting:te,columnSizing:y,columnPinning:wn},onSortingChange:cn,onColumnSizingChange:D,onColumnPinningChange:vn,onColumnVisibilityChange:jn,onColumnOrderChange:Tn,enableRowSelection:re,enableSorting:j,columnResizeMode:"onChange",columnResizeDirection:"ltr",manualSorting:!0,defaultColumn:{minSize:80},getRowId:on,meta:{onCellEdit:an,cellEdits:U}}),On=u.useCallback((kn,Rn)=>g==null?void 0:g(kn,Rn.getValue()),[g]),En=u.useMemo(()=>({showSortingItems:j,showPinningItems:x,showResizeItem:w,showConfigItem:E}),[j,x,w,E]),Nn=u.useMemo(()=>{if(T)return{onSubmitEdits:ne,clearEdits:ee,cellEdits:U}},[T,ne,ee,U]);return h.createElement(Mn,{table:Dn,isLoading:dn||mn,fetchNextPage:un,onRowClick:O.onRowClick,rowHeight:O.rowHeight,renderCellContextMenu:On,className:O.className,error:pn,headerMenuFeatureFlags:En,editableConfig:Nn})}const C={type:"object",apiName:"Employee"},kt={title:"Components/ObjectTable",component:S,parameters:{msw:{handlers:[...An.handlers]},controls:{expanded:!0}},argTypes:{objectType:{description:"The object or interface type of the object",control:!1},columnDefinitions:{description:"Ordered list of column definitions to show in the table. If not provided, all of the properties of the object type will be shown in default order.",control:"object"},filter:{description:"The current where clause to filter the objects in the table. If provided, the filter is controlled.",control:"object"},enableOrdering:{description:"Whether the table is sortable by the user.",control:"boolean",defaultValue:!0,table:{defaultValue:{summary:"true"}}},enableColumnPinning:{description:"Whether columns can be pinned by the user.",control:"boolean",defaultValue:!0,table:{defaultValue:{summary:"true"}}},enableColumnResizing:{description:"Whether columns can be resized by the user.",control:"boolean",defaultValue:!0,table:{defaultValue:{summary:"true"}}},enableColumnConfig:{description:"Whether the column configuration dialog for column visibility and ordering is available to the user.",control:"boolean",defaultValue:!0,table:{defaultValue:{summary:"true"}}},defaultOrderBy:{description:"The default order by clause to sort the objects in the table. If provided without orderBy prop, the sorting is uncontrolled. If both orderBy and defaultOrderBy are provided, orderBy takes precedence.",control:"object"},orderBy:{description:"The current order by clause to sort the objects in the table. If provided, the sorting is controlled. If both orderBy and defaultOrderBy are provided, orderBy takes precedence.",control:"object"},onOrderByChanged:{description:"Called when the order by clause is changed. Required when sorting is controlled.",control:!1,table:{category:"Events"}},onColumnVisibilityChanged:{description:"Called when the column visibility or ordering changed. If provided, the table will allow the user to show/hide columns.",control:!1,table:{category:"Events"}},onColumnsPinnedChanged:{description:"Called when the pinned columns change. If provided, the table will allow the user to pin/unpin columns.",control:!1,table:{category:"Events"}},onColumnResize:{description:"Called when a column is resized. Parameters: columnId - The ID of the resized column, newWidth - The new width of the column. When newWidth = null, the column size is reset.",control:!1,table:{category:"Events"}},onRowClick:{description:"Called when a row is clicked.",control:!1,table:{category:"Events"}},selectionMode:{description:"Selection mode for the table rows. If multiple, a checkbox will be shown for each row to allow selecting multiple rows as well as a top-level checkbox in the header to select all rows.",control:{type:"select"},options:["single","multiple","none"],defaultValue:"none",table:{defaultValue:{summary:"none"}}},selectedRows:{description:"The currently selected rows in the table. If provided, the row selection is controlled.",control:"object"},onRowSelection:{description:"Called when the row selection changes. Required when row selection is controlled.",control:!1,table:{category:"Events"}},renderCellContextMenu:{description:"If provided, will render this context menu when right clicking on a cell",control:!1,table:{category:"Advanced"}},rowHeight:{description:"The height of each row in pixels.",control:"number",defaultValue:40,table:{defaultValue:{summary:"40"}}},className:{description:"Additional CSS class name for the table",control:"text"}}},sn=[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"emailPrimaryWork"},renderHeader:()=>"Email"},{locator:{type:"property",id:"jobTitle"},isVisible:!1},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"firstFullTimeStartDate"},width:200,renderHeader:()=>"Start Date",renderCell:e=>c.jsx("div",{children:e.firstFullTimeStartDate?new Date(e.firstFullTimeStartDate).toLocaleDateString():"No date"})},{locator:{type:"rdp",id:"managerName",creator:e=>e.pivotTo("lead").selectProperty("fullName")},renderHeader:()=>"Manager",renderCell:e=>"managerName"in e?c.jsx("span",{children:e.managerName}):c.jsx("span",{style:{color:"#999"},children:"No Manager"})}],R={args:{objectType:C},parameters:{docs:{source:{code:"<ObjectTable objectType={Employee} />"}}},render:e=>c.jsx("div",{className:"object-table-container",style:{height:"600px"},children:c.jsx(S,{objectType:C,...e})})},I={args:{objectType:C,columnDefinitions:sn},parameters:{docs:{source:{code:`const columnDefinitions = [
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

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:e=>c.jsx("div",{className:"object-table-container",style:{height:"600px"},children:c.jsx(S,{objectType:C,...e})})},B={args:{objectType:C,selectionMode:"single"},parameters:{docs:{source:{code:'<ObjectTable objectType={Employee} selectionMode="single" />'}}},render:e=>c.jsx("div",{className:"object-table-container",style:{height:"600px"},children:c.jsx(S,{objectType:C,...e})})},M={args:{objectType:C,selectionMode:"multiple"},parameters:{docs:{source:{code:'<ObjectTable objectType={Employee} selectionMode="multiple" />'}}},render:e=>c.jsx("div",{className:"object-table-container",style:{height:"600px"},children:c.jsx(S,{objectType:C,...e})})},V={args:{objectType:C,renderCellContextMenu:(e,n)=>c.jsxs("div",{style:{background:"white",padding:8,border:"1px solid #d1d5db",boxShadow:"0 2px 8px 0 rgba(0, 0, 0, 0.1)",fontSize:13,borderRadius:4},children:[c.jsx("div",{style:{fontWeight:"bold",marginBottom:4},children:"Cell Value:"}),c.jsx("div",{children:n?String(n):"No Value"})]})},parameters:{docs:{source:{code:`<ObjectTable
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
/>`}}},render:e=>c.jsxs("div",{className:"object-table-container",style:{height:"600px"},children:[c.jsx("div",{style:{padding:"12px"},children:"Right click on any cell"}),c.jsx(S,{objectType:C,...e})]})},z={args:{objectType:C,defaultOrderBy:[{property:"fullName",direction:"desc"}]},parameters:{docs:{source:{code:`<ObjectTable
  objectType={Employee}
  defaultOrderBy={[{
    property: "fullName",
    direction: "desc",
  }]}
/>`}}},render:e=>c.jsx("div",{className:"object-table-container",style:{height:"600px"},children:c.jsx(S,{objectType:C,...e})})},W={args:{objectType:C,columnDefinitions:[{locator:{type:"property",id:"fullName"},pinned:"left"},{locator:{type:"property",id:"emailPrimaryWork"}},{locator:{type:"property",id:"jobTitle"}},{locator:{type:"property",id:"department"},pinned:"right"},{locator:{type:"property",id:"firstFullTimeStartDate"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:e=>c.jsx("div",{className:"object-table-container",style:{height:"600px"},children:c.jsx(S,{objectType:C,...e})})},A={parameters:{docs:{source:{code:`const customColumnDefinition = [
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
    `}}},args:{objectType:C,columnDefinitions:[...sn.slice(0,3),{locator:{type:"custom",id:"actions"},renderHeader:()=>"Actions",renderCell:e=>c.jsxs("div",{style:{display:"flex",gap:"8px"},children:[c.jsx("button",{style:{padding:"4px 8px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:"pointer"},onClick:()=>alert(`View ${e.fullName}`),children:"View"}),c.jsx("button",{style:{padding:"4px 8px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:"pointer"},onClick:()=>alert(`Edit ${e.fullName}`),children:"Edit"})]}),orderable:!1,width:120}]},render:e=>c.jsx("div",{className:"object-table-container",style:{height:"600px"},children:c.jsx(S,{objectType:C,...e})})},H={args:{objectType:C,onRowClick:e=>{alert(`Clicked on ${e.fullName}`)}},parameters:{docs:{source:{code:`<ObjectTable
  objectType={Employee}
  onRowClick={(employee) => {
    alert(\`Clicked on \${employee["fullName"]}\`);
  }}
/>`}}},render:e=>c.jsx("div",{className:"object-table-container",style:{height:"600px"},children:c.jsx(S,{objectType:C,...e})})},P={parameters:{docs:{source:{code:`const [orderBy, setOrderBy] = useState<any>([
  { property: "fullName", direction: "asc" },
]);

return (
  <ObjectTable
    objectType={Employee}
    orderBy={orderBy}
    onOrderByChanged={setOrderBy}
  />
);`}}},render:()=>{const[e,n]=u.useState([{property:"fullName",direction:"asc"}]);return c.jsxs("div",{children:[c.jsxs("div",{style:{marginBottom:"16px"},children:[c.jsx("strong",{children:"Current Sort:"})," ",e.map((t,o)=>c.jsxs("span",{children:[t.property," (",t.direction,")",o<e.length-1&&", "]},o))]}),c.jsx("div",{className:"object-table-container",style:{height:"600px"},children:c.jsx(S,{objectType:C,orderBy:e,onOrderByChanged:n})})]})}},F={parameters:{docs:{source:{code:`const [selectedRows, setSelectedRows] = useState<any[]>([]);

return (
  <ObjectTable
    objectType={Employee}
    selectionMode="multiple"
    selectedRows={selectedRows}
    onRowSelection={setSelectedRows}
  />
);`}}},render:()=>{const[e,n]=u.useState([]);return c.jsxs("div",{children:[c.jsxs("div",{style:{marginBottom:"16px"},children:[c.jsx("strong",{children:"Selected:"})," ",e.length," employees",e.length>0&&c.jsx("button",{style:{marginLeft:"16px",padding:"4px 8px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:"pointer"},onClick:()=>n([]),children:"Clear Selection"})]}),c.jsx("div",{className:"object-table-container",style:{height:"600px"},children:c.jsx(S,{objectType:C,selectionMode:"multiple",selectedRows:e,onRowSelection:n})})]})}},K={args:{objectType:C,enableOrdering:!1,enableColumnPinning:!1,enableColumnResizing:!1,enableColumnConfig:!1},parameters:{docs:{source:{code:`<ObjectTable
  objectType={Employee}
  enableOrdering={false}
  enableColumnPinning={false}
  enableColumnResizing={false}
  enableColumnConfig={false}
/>`}}},render:e=>c.jsx("div",{className:"object-table-container",style:{height:"600px"},children:c.jsx(S,{objectType:C,...e})})},_={args:{objectType:C,rowHeight:56},parameters:{docs:{source:{code:"<ObjectTable objectType={Employee} rowHeight={56} />"}}},render:e=>c.jsx("div",{className:"object-table-container",style:{height:"600px"},children:c.jsx(S,{objectType:C,...e})})},$={args:{objectType:C,columnDefinitions:[{locator:{type:"property",id:"fullName"},renderHeader:()=>c.jsx("a",{href:"#",className:"header-link",onClick:e=>{e.preventDefault(),alert("Employee Name column clicked!")},children:"Employee Name"})},{locator:{type:"property",id:"emailPrimaryWork"}},{locator:{type:"property",id:"jobTitle"},renderHeader:()=>"Job Title"},{locator:{type:"custom",id:"employment-status"},renderHeader:()=>"Employment Status",renderCell:e=>{const n=e.firstFullTimeStartDate,t=n&&new Date(n)<=new Date;return c.jsx("span",{className:`status-tag ${t?"active":"inactive"}`,children:t?"Active":"Inactive"})},width:140},{locator:{type:"property",id:"department"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:e=>c.jsx("div",{className:"object-table-container",style:{height:"600px"},children:c.jsx(S,{objectType:C,...e})})},L={parameters:{docs:{source:{code:`const [isColumnConfigOpen, setIsColumnConfigOpen] = useState(false);
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
);`}}},render:()=>{const e=[{locator:{type:"property",id:"fullName"},columnName:"Full Name"},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job Title"},{locator:{type:"property",id:"department"},columnName:"Department"}],[n,t]=u.useState(!1),[o,l]=u.useState(e),r=u.useMemo(()=>e.map(d=>({id:d.locator.id,name:d.columnName||d.locator.id})),[]),i=u.useMemo(()=>{const d={};return e.forEach(p=>{d[p.locator.id]=o.some(g=>g.locator.id===p.locator.id)}),d},[o]),a=u.useMemo(()=>o.map(d=>d.locator.id),[o]),s=u.useCallback(d=>{const p=[];d.forEach(({columnId:g,isVisible:f})=>{if(f){const m=e.find(b=>b.locator.id===g);m&&p.push(m)}}),l(p),t(!1)},[]);return c.jsxs("div",{style:{height:"600px",display:"flex",flexDirection:"column"},children:[c.jsx("div",{style:{padding:"8px 0",marginBottom:8},children:c.jsx("button",{onClick:()=>t(!0),style:{padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Configure Columns"})}),c.jsx(S,{objectType:C,columnDefinitions:o,enableColumnConfig:!1}),c.jsx(zn,{isOpen:n,onClose:()=>t(!1),columnOptions:r,currentVisibility:i,currentColumnOrder:a,onApply:s})]})}};var ce,ue,de;R.parameters={...R.parameters,docs:{...(ce=R.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(de=(ue=R.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var pe,me,be;I.parameters={...I.parameters,docs:{...(pe=I.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(be=(me=I.parameters)==null?void 0:me.docs)==null?void 0:be.source}}};var fe,ye,ge;B.parameters={...B.parameters,docs:{...(fe=B.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(ge=(ye=B.parameters)==null?void 0:ye.docs)==null?void 0:ge.source}}};var he,Ce,je;M.parameters={...M.parameters,docs:{...(he=M.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(je=(Ce=M.parameters)==null?void 0:Ce.docs)==null?void 0:je.source}}};var Se,Te,we;V.parameters={...V.parameters,docs:{...(Se=V.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(we=(Te=V.parameters)==null?void 0:Te.docs)==null?void 0:we.source}}};var ve,xe,De;z.parameters={...z.parameters,docs:{...(ve=z.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(De=(xe=z.parameters)==null?void 0:xe.docs)==null?void 0:De.source}}};var Oe,Ee,Ne;W.parameters={...W.parameters,docs:{...(Oe=W.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Ne=(Ee=W.parameters)==null?void 0:Ee.docs)==null?void 0:Ne.source}}};var ke,Re,Ie;A.parameters={...A.parameters,docs:{...(ke=A.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Ie=(Re=A.parameters)==null?void 0:Re.docs)==null?void 0:Ie.source}}};var Be,Me,Ve;H.parameters={...H.parameters,docs:{...(Be=H.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Ve=(Me=H.parameters)==null?void 0:Me.docs)==null?void 0:Ve.source}}};var ze,We,Ae;P.parameters={...P.parameters,docs:{...(ze=P.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Ae=(We=P.parameters)==null?void 0:We.docs)==null?void 0:Ae.source}}};var He,Pe,Fe;F.parameters={...F.parameters,docs:{...(He=F.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Fe=(Pe=F.parameters)==null?void 0:Pe.docs)==null?void 0:Fe.source}}};var Ke,_e,$e;K.parameters={...K.parameters,docs:{...(Ke=K.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...($e=(_e=K.parameters)==null?void 0:_e.docs)==null?void 0:$e.source}}};var Le,Je,Ue;_.parameters={..._.parameters,docs:{...(Le=_.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Ue=(Je=_.parameters)==null?void 0:Je.docs)==null?void 0:Ue.source}}};var Ye,qe,Ge;$.parameters={...$.parameters,docs:{...(Ye=$.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(Ge=(qe=$.parameters)==null?void 0:qe.docs)==null?void 0:Ge.source}}};var Qe,Ze,Xe;L.parameters={...L.parameters,docs:{...(Qe=L.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(Xe=(Ze=L.parameters)==null?void 0:Ze.docs)==null?void 0:Xe.source}}};const Rt=["Default","WithColumnDefinitions","SingleSelection","MultipleSelection","WithContextMenu","WithDefaultSorting","WithDefaultColumnPinning","WithCustomColumn","WithRowClickHandler","ControlledSorting","ControlledSelection","DisableAllHeaderMenuFeatures","CustomRowHeight","WithCustomRenderers","WithColumnConfigDialog"];export{F as ControlledSelection,P as ControlledSorting,_ as CustomRowHeight,R as Default,K as DisableAllHeaderMenuFeatures,M as MultipleSelection,B as SingleSelection,L as WithColumnConfigDialog,I as WithColumnDefinitions,V as WithContextMenu,A as WithCustomColumn,$ as WithCustomRenderers,W as WithDefaultColumnPinning,z as WithDefaultSorting,H as WithRowClickHandler,Rt as __namedExportsOrder,kt as default};
