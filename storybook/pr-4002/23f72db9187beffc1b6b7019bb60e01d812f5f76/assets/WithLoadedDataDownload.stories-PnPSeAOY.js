import{f as b,j as a,r as i}from"./iframe-BDntCMEH.js";import{O as u}from"./object-table-DkahZF98.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B50VuOmN.js";import"./Table-I_BYhXVu.js";import"./index-B0z8RHyd.js";import"./Dialog-DkKixsHY.js";import"./cross-BH8OF0Bn.js";import"./svgIconContainer-B6ralbiB.js";import"./useBaseUiId-BTqLhW0i.js";import"./InternalBackdrop-3bsfmQ8K.js";import"./composite-BQ7qlaUQ.js";import"./index-CX_hrFB8.js";import"./index-BOofLcNJ.js";import"./index-BBkRPYMA.js";import"./useEventCallback-CJ1ECKuN.js";import"./SkeletonBar-DhuVeAjE.js";import"./LoadingCell-B4T88guZ.js";import"./ColumnConfigDialog-BBIUIVmY.js";import"./DraggableList-CIf_sqx2.js";import"./search-CYEButG9.js";import"./Input-CXpC2-sJ.js";import"./useControlled-B173rJPI.js";import"./Button-Bpn7C7dn.js";import"./small-cross-Ctkk7cRd.js";import"./ActionButton-t5HQKASd.js";import"./Checkbox-BAC3zYHO.js";import"./useValueChanged-DfkXLlVn.js";import"./CollapsiblePanel-DwIUcnuv.js";import"./MultiColumnSortDialog-F9a2YiSr.js";import"./MenuTrigger-4e4OHRuu.js";import"./CompositeItem-BTJTpSwe.js";import"./ToolbarRootContext-C8N9jA7J.js";import"./getDisabledMountTransitionStyles-karZ8d_E.js";import"./getPseudoElementBounds-C0nyJPqP.js";import"./chevron-down-BxBh9Dqz.js";import"./index-BQKiMfv1.js";import"./error-CAncZcqv.js";import"./BaseCbacBanner-CrHhWkuw.js";import"./makeExternalStore-j3YsZMxz.js";import"./Tooltip-zHG5lzOj.js";import"./PopoverPopup-C4ooFr_6.js";import"./debounce-CkhlBaHF.js";import"./useOsdkClient-R1XeaFqw.js";import"./tick-Dc8_NDDZ.js";import"./DropdownField-B9EyhDn4.js";import"./isEqual-Yrh3LO4w.js";import"./withOsdkMetrics-DaoCVVMK.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
