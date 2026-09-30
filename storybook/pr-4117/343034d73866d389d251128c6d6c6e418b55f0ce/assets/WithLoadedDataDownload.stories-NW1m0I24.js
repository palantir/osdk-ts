import{f as b,j as a,r as i}from"./iframe-CE_irqki.js";import{O as u}from"./object-table-BtpjRJ67.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B0wObQeK.js";import"./Table-C_YbgNlG.js";import"./index-CbZ4Cj79.js";import"./Dialog-fe6M2c65.js";import"./cross-CiDhEPuo.js";import"./svgIconContainer-co06VEp6.js";import"./useBaseUiId-Cuodx7xu.js";import"./InternalBackdrop-Dkqi7a0r.js";import"./composite-CCcrzfR2.js";import"./index-D0l0Hg2C.js";import"./index-C-NLbbDg.js";import"./index-_MWob-Zb.js";import"./useEventCallback-CUNobEcy.js";import"./SkeletonBar-BLmbpfxb.js";import"./LoadingCell-nunxEioL.js";import"./ColumnConfigDialog-AdaF-ihs.js";import"./DraggableList-DcFYfUSk.js";import"./search-BPF_4D3u.js";import"./Input-CQv_PU5A.js";import"./useControlled-BqInFAvQ.js";import"./Button-Do97WS9c.js";import"./small-cross-DBd0iCaF.js";import"./ActionButton-B_cFwAVF.js";import"./Checkbox-CJ-JBQSc.js";import"./useValueChanged-BA6THRKJ.js";import"./CollapsiblePanel-CzBB3n5y.js";import"./MultiColumnSortDialog-B-M_e88G.js";import"./MenuTrigger-CP0q2n0o.js";import"./CompositeItem-BnnmhO1F.js";import"./ToolbarRootContext-CDB_L_pZ.js";import"./getDisabledMountTransitionStyles-CYc6tB7S.js";import"./getPseudoElementBounds-QK10hLQz.js";import"./chevron-down-oqAS4iB6.js";import"./index-BrqtMSKB.js";import"./error-yF4FDunH.js";import"./BaseCbacBanner-D_xSicx0.js";import"./makeExternalStore-BFTnjumI.js";import"./Tooltip-C24crhHA.js";import"./PopoverPopup-BcZdQHxz.js";import"./debounce-CRdC3fBU.js";import"./useOsdkClient-DUBVzTuP.js";import"./tick-DeDyRDcO.js";import"./DropdownField-Cc5Zze2e.js";import"./isEqual-CY2x9raR.js";import"./withOsdkMetrics-TAUr-869.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
