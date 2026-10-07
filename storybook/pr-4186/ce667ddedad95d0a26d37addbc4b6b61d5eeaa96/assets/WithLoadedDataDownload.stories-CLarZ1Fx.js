import{f as b,j as a,r as i}from"./iframe-wJSBANRY.js";import{O as u}from"./object-table-dHKlunb9.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B2Ho1hLQ.js";import"./Table-CTD02Af2.js";import"./index-BcqSzCju.js";import"./Dialog-CV6-j9YY.js";import"./cross-iKlVZHPy.js";import"./svgIconContainer-Ci6LfE3v.js";import"./useBaseUiId-DWH3HBR0.js";import"./InternalBackdrop-PNyvHwph.js";import"./composite-CrDIQ1mA.js";import"./index-v1Sv6Skf.js";import"./index-BVhp-lLY.js";import"./index-CQ_EW3Gy.js";import"./useEventCallback-DGk7LQxu.js";import"./SkeletonBar-CDnrAFCZ.js";import"./LoadingCell-Cn8isCsC.js";import"./ColumnConfigDialog-DMxKVsSi.js";import"./DraggableList-Bd0kJQ_h.js";import"./search-D4rdWSgZ.js";import"./Input-Cn5YrDjO.js";import"./useControlled-BvO6L4jZ.js";import"./Button-Bs-O5zId.js";import"./small-cross-Cpe-iFEE.js";import"./ActionButton-DdrPB5Lk.js";import"./Checkbox-BX830qPl.js";import"./useValueChanged-CZAIb2ZW.js";import"./CollapsiblePanel-DCeDgGvN.js";import"./MultiColumnSortDialog-Ox4I1sUH.js";import"./MenuTrigger-BWDSVjYX.js";import"./CompositeItem-CMcnLQ_L.js";import"./ToolbarRootContext-ChwiRPwn.js";import"./getDisabledMountTransitionStyles-DDRBIdQ3.js";import"./getPseudoElementBounds-MQP3kSmu.js";import"./chevron-down-Cwjazhdf.js";import"./index-pP0t4O08.js";import"./error-ByPPsGV9.js";import"./BaseCbacBanner-COwBtUHw.js";import"./makeExternalStore-Cdabd0ud.js";import"./Tooltip-hpUjH5hm.js";import"./PopoverPopup-BZ8qTaMK.js";import"./debounce-ByAeDhuR.js";import"./useOsdkClient-DWkxVc6G.js";import"./tick-DVG2gobP.js";import"./DropdownField-DUCR4Hdj.js";import"./isEqual-BaPqpVgX.js";import"./withOsdkMetrics-DYFTNSHn.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
