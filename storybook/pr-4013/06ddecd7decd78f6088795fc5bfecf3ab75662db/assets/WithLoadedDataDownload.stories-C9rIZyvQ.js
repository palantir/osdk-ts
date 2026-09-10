import{f as b,j as a,r as i}from"./iframe-mrGpuMKA.js";import{O as u}from"./object-table-BiIiKzx_.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-bDWJHmtM.js";import"./Table-DqGvWfmy.js";import"./index-hISY08zN.js";import"./Dialog-DpVboJif.js";import"./cross-DPMi-K_N.js";import"./svgIconContainer-C-bY0sdP.js";import"./useBaseUiId-BkHLkay-.js";import"./InternalBackdrop-U3rubu2u.js";import"./composite-7erdXABz.js";import"./index-DMu33fvM.js";import"./index-Bqma_fPL.js";import"./index-DYAfevna.js";import"./useEventCallback-BPIHKofH.js";import"./SkeletonBar-DwNj8MYg.js";import"./LoadingCell-DrzDyWTO.js";import"./ColumnConfigDialog-DgOQeC4G.js";import"./DraggableList-D745B4C7.js";import"./search-Yrs_12vc.js";import"./Input-B84oc61c.js";import"./useControlled-Dq35lwdk.js";import"./Button-CQDVf8SZ.js";import"./small-cross-BiLUn5X_.js";import"./ActionButton-BM4rNAaR.js";import"./Checkbox-Bk7WJIlt.js";import"./useValueChanged-BZtpoNnx.js";import"./CollapsiblePanel-DDMWJLSE.js";import"./MultiColumnSortDialog-DNOtZGzF.js";import"./MenuTrigger-BQThW244.js";import"./CompositeItem-DUJu_nDn.js";import"./ToolbarRootContext-C5hM_2Bp.js";import"./getDisabledMountTransitionStyles-X6_-V5uQ.js";import"./getPseudoElementBounds-C8xxQ8d5.js";import"./chevron-down-CoivH60m.js";import"./index-OuRiGyxD.js";import"./error-DssOxS7p.js";import"./BaseCbacBanner-dJKflXBI.js";import"./makeExternalStore-Dc6_6-hA.js";import"./Tooltip-C8kXdT26.js";import"./PopoverPopup-QRxeem_z.js";import"./debounce-BKwdeDHg.js";import"./useOsdkClient-D4Z99yZb.js";import"./tick-BcvMJ5PG.js";import"./DropdownField-BqkHAkPF.js";import"./isEqual-D-2vVEF9.js";import"./withOsdkMetrics-MvJWQIwU.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
