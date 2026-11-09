import{f as b,j as a,r as i}from"./iframe-DqApX63y.js";import{O as u}from"./object-table-k6yie7EH.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Bec-Ia2T.js";import"./Table-mx-XmHdE.js";import"./index-CyvkUScE.js";import"./Dialog-tPn2JCm2.js";import"./cross-C5bmvSOT.js";import"./svgIconContainer-6cRzMh8j.js";import"./useBaseUiId-BKFVtTe-.js";import"./InternalBackdrop-Cd1LmBcA.js";import"./composite-CRmy7_bC.js";import"./index-BOcOla9y.js";import"./index-DRbiLs21.js";import"./index-BGUtfM2L.js";import"./useEventCallback-C_EHeE0y.js";import"./SkeletonBar-2kheKNw1.js";import"./LoadingCell-ZDlToWio.js";import"./ColumnConfigDialog-CbxnvofP.js";import"./DraggableList-Bs6SyKf_.js";import"./search-DWIX6Qtd.js";import"./Input-DEWSCfWZ.js";import"./useControlled-dziTOMb-.js";import"./Button-ChF1ZUI_.js";import"./small-cross-BEgcJVSc.js";import"./ActionButton-BzlJmtNl.js";import"./Checkbox-NWXpl7_I.js";import"./useValueChanged-wUg0BzA8.js";import"./CollapsiblePanel-C9_n_dCM.js";import"./MultiColumnSortDialog-CVqVBYa3.js";import"./MenuTrigger-BK05k8J1.js";import"./CompositeItem-D1qVgSi4.js";import"./ToolbarRootContext-Dv213T19.js";import"./getDisabledMountTransitionStyles-CD9PvG5g.js";import"./getPseudoElementBounds-DusJxNbj.js";import"./chevron-down-DvNVUZis.js";import"./index-Drho1d5n.js";import"./error-D4Jl5yqC.js";import"./BaseCbacBanner-DPtOi32v.js";import"./makeExternalStore-71T0xGUT.js";import"./Tooltip-DQ7QRGY9.js";import"./isObject-nTfM7xAK.js";import"./debounce-B7mULt91.js";import"./useOsdkClient-C4IDXCsH.js";import"./tick-cBZZmDLW.js";import"./DropdownField-lulEEiGG.js";import"./isEqual-_JgNSLLj.js";import"./_baseIsEqual-CIcCZrpL.js";import"./withOsdkMetrics-K4E-rs8a.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
