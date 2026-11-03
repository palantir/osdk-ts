import{f as b,j as a,r as i}from"./iframe-htyY8WGh.js";import{O as u}from"./object-table-CxeVRikb.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BZEQ7CCm.js";import"./Table-CBPb2Ax7.js";import"./index-9XAE-P5N.js";import"./Dialog-FXtxmKtu.js";import"./cross-zUtY8fYt.js";import"./svgIconContainer-DDCQ6k8x.js";import"./useBaseUiId-B5naUVoF.js";import"./InternalBackdrop-sMqyjWxo.js";import"./composite-DLA5e3bM.js";import"./index-BRbgX3T0.js";import"./index-BmvQUuUh.js";import"./index-DMt3BqCf.js";import"./useEventCallback-BPbziyI1.js";import"./SkeletonBar-Dr30uUnV.js";import"./LoadingCell-BZHL109m.js";import"./ColumnConfigDialog-BAxrkWGM.js";import"./DraggableList-Dw72zyKo.js";import"./search-BARUS6xQ.js";import"./Input-B_148gGT.js";import"./useControlled-jlfCPDon.js";import"./Button-CugfLHha.js";import"./small-cross-BG5UjiFv.js";import"./ActionButton-BGplWwX2.js";import"./Checkbox-CxNTxawd.js";import"./useValueChanged-BuXRFnHI.js";import"./CollapsiblePanel-D5f1Ks-a.js";import"./MultiColumnSortDialog-9e9gOjI_.js";import"./MenuTrigger-CM187Vaj.js";import"./CompositeItem-CuUp7unb.js";import"./ToolbarRootContext-CvT5UyxT.js";import"./getDisabledMountTransitionStyles-DNIZXeN8.js";import"./getPseudoElementBounds-ehODIuKj.js";import"./chevron-down-CPTHUdZ2.js";import"./index-DWZoNjEc.js";import"./error-B5cHozqr.js";import"./BaseCbacBanner-BVUw-7jj.js";import"./makeExternalStore-CvyNaZuu.js";import"./Tooltip-wud2Jc0O.js";import"./PopoverPopup-VfPjnT9d.js";import"./debounce-BFJO43v6.js";import"./useOsdkClient-bA8p7394.js";import"./tick-Oy4Dyy5w.js";import"./DropdownField-BgjFXt3p.js";import"./isEqual-CwYdE02M.js";import"./withOsdkMetrics-B5xof_Ab.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
