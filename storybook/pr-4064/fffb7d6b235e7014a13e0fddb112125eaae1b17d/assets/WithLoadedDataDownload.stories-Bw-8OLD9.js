import{f as b,j as a,r as i}from"./iframe-Djgn3mMp.js";import{O as u}from"./object-table-Cwd88ac2.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BBzcmrCr.js";import"./Table-DPni56UU.js";import"./index-DMa22myD.js";import"./Dialog-CpMC_SRI.js";import"./cross-P-qahKgk.js";import"./svgIconContainer-BSc8qpEQ.js";import"./useBaseUiId-BpSKPnMp.js";import"./InternalBackdrop-DvFd7PWT.js";import"./composite-v_9iQLjO.js";import"./index-CXL1vt3n.js";import"./index-CX21NhuZ.js";import"./index-BcsqXVef.js";import"./useEventCallback-BdQ5ayqn.js";import"./SkeletonBar-uqnKmx5p.js";import"./LoadingCell-CsQeYTrB.js";import"./ColumnConfigDialog-YRUvF1AL.js";import"./DraggableList-CRGOc0hi.js";import"./search-BFidPBD3.js";import"./Input-DahsmOdu.js";import"./useControlled-Dodjbhjp.js";import"./Button-CJpjwaeJ.js";import"./small-cross-CoHv2Pfy.js";import"./ActionButton-DtQP3hsQ.js";import"./Checkbox-DbWH43Qv.js";import"./useValueChanged-FTGAX_kt.js";import"./CollapsiblePanel-BN6mK2LP.js";import"./MultiColumnSortDialog-CwBxRogq.js";import"./MenuTrigger-zPgdA44C.js";import"./CompositeItem-9M2opMvG.js";import"./ToolbarRootContext-D_OMSFCs.js";import"./getDisabledMountTransitionStyles-BGe123t6.js";import"./getPseudoElementBounds-B0_03GnG.js";import"./chevron-down-hMfe6qGf.js";import"./index-DXiVbOpv.js";import"./error-C4Sj7yvC.js";import"./BaseCbacBanner-Dgk3xGPG.js";import"./makeExternalStore-B1pTPZCa.js";import"./Tooltip-DcgPgXHU.js";import"./PopoverPopup-Ctx82q43.js";import"./debounce-BNjMaQq1.js";import"./useOsdkClient-Dbnxj5w_.js";import"./tick-Br1OP0c4.js";import"./DropdownField-s6aOcfqL.js";import"./isEqual-CtF3zBG8.js";import"./withOsdkMetrics-DZdRX6WM.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
