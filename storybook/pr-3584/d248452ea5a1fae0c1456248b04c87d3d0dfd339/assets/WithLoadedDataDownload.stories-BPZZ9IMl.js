import{f as b,j as a,r as i}from"./iframe-BSDg5MOj.js";import{O as u}from"./object-table-CKmdx1SH.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DhhkxHce.js";import"./Table-CdNlcId-.js";import"./index-ChJoNBQZ.js";import"./Dialog-RZY7Myu9.js";import"./cross-GXuD0dq5.js";import"./svgIconContainer-BNfBxi5_.js";import"./useBaseUiId-B4d-vjpF.js";import"./InternalBackdrop-Ctu21wJT.js";import"./composite-Cp97NJVX.js";import"./index-BLIkDC4O.js";import"./index-gVxlpqjD.js";import"./index-CleziYPI.js";import"./useEventCallback-BkZhpuGk.js";import"./SkeletonBar-0Tt3lfEj.js";import"./LoadingCell-CxOY2vLw.js";import"./ColumnConfigDialog-DC5NTg-B.js";import"./DraggableList-DAcTSFqG.js";import"./search-BJIbBP2L.js";import"./Input-BHM1pTwl.js";import"./useControlled-BhwYl-lI.js";import"./Button-Db9WTFhm.js";import"./small-cross-CGlGMfPU.js";import"./ActionButton-E-tx4Y2R.js";import"./Checkbox-DNK2vdeN.js";import"./minus-WeODG8f9.js";import"./tick-DuGVnXdV.js";import"./useValueChanged-DgCdUxrR.js";import"./caret-down-CG5oCyvp.js";import"./CollapsiblePanel-C7Y7Tl72.js";import"./MultiColumnSortDialog-CWx2HwQs.js";import"./MenuTrigger-BGRyP-X4.js";import"./CompositeItem-DB7wPSIT.js";import"./ToolbarRootContext-BSJASkqf.js";import"./getDisabledMountTransitionStyles-RCMSVhJm.js";import"./getPseudoElementBounds-BqetYsh2.js";import"./chevron-down-CKEX1Ln_.js";import"./index-DJgtesb4.js";import"./error-i2Xe8-cu.js";import"./BaseCbacBanner-ChVgXezE.js";import"./makeExternalStore-DmzDi4Tz.js";import"./Tooltip-BnPEWasX.js";import"./PopoverPopup-_jhIb9C8.js";import"./toNumber-ZkCNquOk.js";import"./useOsdkClient-D3GIeLvA.js";import"./DropdownField-2K6H3KSc.js";import"./withOsdkMetrics-DUXW6H-S.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
