import{f as b,j as a,r as i}from"./iframe--rHM778H.js";import{O as u}from"./object-table-DEvcxJSc.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DpVBsV2L.js";import"./Table-BbpbHFt5.js";import"./index-BElFIwyB.js";import"./Dialog-7ZP0B0yF.js";import"./cross-CHXgNJax.js";import"./svgIconContainer-CjX9_w9R.js";import"./useBaseUiId-BT7Lgjzv.js";import"./InternalBackdrop-DHyESATu.js";import"./composite-CaRBo0mp.js";import"./index-B1NiRkYf.js";import"./index-D6fdAiU5.js";import"./index-CtcclfAS.js";import"./useEventCallback-CtvvOJjW.js";import"./SkeletonBar-CS_pei9f.js";import"./LoadingCell-D_OgPP-l.js";import"./ColumnConfigDialog-DR2lvB79.js";import"./DraggableList-Ck4YH1Wg.js";import"./search-ZsY-Nyc_.js";import"./Input-DqZJVW1Y.js";import"./useControlled-BERkl8jy.js";import"./Button-BOD28ASd.js";import"./small-cross-C70aYTmZ.js";import"./ActionButton-DK8p2X8j.js";import"./Checkbox-D5krlzgT.js";import"./useValueChanged-DvGNLe7a.js";import"./CollapsiblePanel-BPc-B49G.js";import"./MultiColumnSortDialog-odHCG5KR.js";import"./MenuTrigger-DyAGSfdx.js";import"./CompositeItem-5osJRFVq.js";import"./ToolbarRootContext-DNOQmnhU.js";import"./getDisabledMountTransitionStyles-DLn2tUEn.js";import"./getPseudoElementBounds-e0hNXxT9.js";import"./chevron-down-BlvURY3l.js";import"./index-CmizMsna.js";import"./error-CPHhJfnm.js";import"./BaseCbacBanner-B7-jqhl-.js";import"./makeExternalStore-CUNRgSrC.js";import"./Tooltip-DkjIu7bG.js";import"./PopoverPopup-DL06cZLQ.js";import"./debounce-CUpiJ6Vz.js";import"./useOsdkClient-CuCdO7SN.js";import"./tick-Bcv5PjwQ.js";import"./DropdownField-2stvnYri.js";import"./isEqual-BRXdJPDE.js";import"./withOsdkMetrics-DWwTgGIe.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
