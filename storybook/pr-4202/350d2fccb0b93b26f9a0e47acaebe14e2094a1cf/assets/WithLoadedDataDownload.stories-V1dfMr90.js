import{f as b,j as a,r as i}from"./iframe-CXk0WqhB.js";import{O as u}from"./object-table-BwIitlZ-.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-ChjBfvhG.js";import"./Table-hlhNPiA-.js";import"./index-ML5mwP3e.js";import"./Dialog-D175c70A.js";import"./cross-BmemhmuM.js";import"./svgIconContainer-Dcyi3Q_X.js";import"./useBaseUiId-DHjZ3Omh.js";import"./InternalBackdrop-BrAyLlt0.js";import"./composite-ytyU9AJN.js";import"./index-CjxpfJC5.js";import"./index-BT6_XaBS.js";import"./index-Cl3j5frJ.js";import"./useEventCallback-CR9JbWGL.js";import"./SkeletonBar-BtOJaU67.js";import"./LoadingCell-CtVp_NO9.js";import"./ColumnConfigDialog-Cx47VDpv.js";import"./DraggableList-CRlURm1D.js";import"./search-BLVXHNks.js";import"./Input-D9BOnKAN.js";import"./useControlled-Bl28iO0R.js";import"./Button-Dic26hGY.js";import"./small-cross-DrkIqI6L.js";import"./ActionButton-B4JsRdej.js";import"./Checkbox-WVJiQYod.js";import"./useValueChanged-DVvNfwNT.js";import"./CollapsiblePanel-DanBkqbp.js";import"./MultiColumnSortDialog-CSetl6zk.js";import"./MenuTrigger-BtSPx0Au.js";import"./CompositeItem-04P4zIgd.js";import"./ToolbarRootContext-DTmHJOM7.js";import"./getDisabledMountTransitionStyles-DiTcMvjB.js";import"./getPseudoElementBounds-DF3ARm9q.js";import"./chevron-down-DQ2eC5iE.js";import"./index-_eczYP6a.js";import"./error-BWxZwg9W.js";import"./BaseCbacBanner-Bcvicwmd.js";import"./makeExternalStore-Ck8wEGfj.js";import"./Tooltip-CKZmJ4aV.js";import"./PopoverPopup-Cw8ntXH6.js";import"./debounce-B5lQDrQ7.js";import"./useOsdkClient-uAkJXHAY.js";import"./tick-CZjZA-Lg.js";import"./DropdownField-9i-_p9Wp.js";import"./isEqual-_eK1XH0Y.js";import"./withOsdkMetrics-ChxJang_.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
const PAGE_SIZE = ${f};

const handleDownload = async () => {
  const snapshot = await tableRef.current?.getSnapshot();
  if (!snapshot) {
    return;
  }

  const csv = toCsv(snapshot.columns, snapshot.rows);
  downloadCsv(csv, "employees.csv");
};

return (
  <>
    <button onClick={handleDownload}>Download as CSV</button>
    <ObjectTable
      objectType={Employee}
      columnDefinitions={employeeColumns}
      pageSize={PAGE_SIZE}
      tableRef={tableRef}
    />
  </>
);`}}},render:()=>a.jsx(C,{})};function C(){const e=i.useRef(null),[n,t]=i.useState(!1),r=i.useCallback(async()=>{var o;t(!0);try{const s=await((o=e.current)==null?void 0:o.getSnapshot());if(!s)return;await g(E(s.columns,s.rows),"employees.csv")}finally{t(!1)}},[]);return a.jsxs("div",{className:"object-table-container",style:{height:"600px",display:"flex",flexDirection:"column"},children:[a.jsx("div",{style:{padding:"8px 0",marginBottom:8},children:a.jsx("button",{disabled:n,onClick:r,type:"button",style:{...y,...n?{cursor:"not-allowed",opacity:.6}:null},children:n?"Downloading…":"Download as CSV"})}),a.jsx(u,{objectType:h,columnDefinitions:w,pageSize:f,tableRef:e})]})}function E(e,n){return[e.map(t=>c(t.name)).join(","),...n.map(t=>e.map(r=>c(S(t.getValue(r.id)))).join(","))].join(`
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/u.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Uses \`tableRef.current.getSnapshot()\` to build and download a CSV from the ObjectTable's data. The Full name column uses \`renderCell\`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an \`Error\` instance from \`row.getValue\`, which the CSV renders as a literal marker."
      },
      source: {
        code: \`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
const PAGE_SIZE = \${PAGE_SIZE};

const handleDownload = async () => {
  const snapshot = await tableRef.current?.getSnapshot();
  if (!snapshot) {
    return;
  }

  const csv = toCsv(snapshot.columns, snapshot.rows);
  downloadCsv(csv, "employees.csv");
};

return (
  <>
    <button onClick={handleDownload}>Download as CSV</button>
    <ObjectTable
      objectType={Employee}
      columnDefinitions={employeeColumns}
      pageSize={PAGE_SIZE}
      tableRef={tableRef}
    />
  </>
);\`
      }
    }
  },
  render: () => <LoadedDataDownloadExample />
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const we=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,we as __namedExportsOrder,ye as default};
