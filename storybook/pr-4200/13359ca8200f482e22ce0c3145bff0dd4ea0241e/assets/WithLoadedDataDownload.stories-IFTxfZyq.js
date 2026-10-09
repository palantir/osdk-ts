import{f as b,j as a,r as i}from"./iframe-CHlNqADV.js";import{O as u}from"./object-table-Bz1O0psn.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-ChuInVZg.js";import"./Table-DSVdoqZo.js";import"./index-Bf2fBgJU.js";import"./Dialog-CUe0f-N6.js";import"./cross-CuFYXv7r.js";import"./svgIconContainer-BDP_fhkF.js";import"./useBaseUiId-DYvtoeJl.js";import"./InternalBackdrop-L9tv4-K0.js";import"./composite-DktMQB3d.js";import"./index-ChdJCR6a.js";import"./index-A-SGLt67.js";import"./index-BH1I75dT.js";import"./useEventCallback-DjyoxhV1.js";import"./SkeletonBar-Bqq4C_Xz.js";import"./LoadingCell-EwnPi-q5.js";import"./ColumnConfigDialog-DxDbIYPV.js";import"./DraggableList-C8q6Bo9V.js";import"./search-kgQIq9W2.js";import"./Input-CRkTA9js.js";import"./useControlled-D7wM_LXO.js";import"./Button-C2n7qnnT.js";import"./small-cross-DxzGq3IE.js";import"./ActionButton-DeQmFSZA.js";import"./Checkbox-BStfIwWS.js";import"./useValueChanged-DNlrhM8D.js";import"./CollapsiblePanel-CqIVhAsV.js";import"./MultiColumnSortDialog-CBGhSZ7z.js";import"./MenuTrigger-CbvpRhV-.js";import"./CompositeItem-Cfdppx_k.js";import"./ToolbarRootContext-CUs10wim.js";import"./getDisabledMountTransitionStyles-B6MFKsrU.js";import"./getPseudoElementBounds-Dzxtf5td.js";import"./chevron-down-DJ0NZq7q.js";import"./index-BCBHNrII.js";import"./error-B_eFesCr.js";import"./BaseCbacBanner-L5OpTRFG.js";import"./makeExternalStore-C006dyrV.js";import"./Tooltip-BybVAEch.js";import"./PopoverPopup-CPS07fp6.js";import"./debounce-C1-IqOWQ.js";import"./useOsdkClient-BUpa-g5c.js";import"./tick-BGYvlHNw.js";import"./DropdownField-BHM3Py0i.js";import"./isEqual-5lz-MWW-.js";import"./withOsdkMetrics-Dhrl7hco.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
