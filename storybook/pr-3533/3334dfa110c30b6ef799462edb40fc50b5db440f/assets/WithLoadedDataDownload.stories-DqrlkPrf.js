import{f as b,j as a,r as i}from"./iframe-CA-Jjb_4.js";import{O as u}from"./object-table-Drrgi5kP.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dlg8xDbu.js";import"./Table-DOCna2dk.js";import"./index-Dyq1yN2P.js";import"./Dialog-CQdzJTme.js";import"./cross-nIVu7cIH.js";import"./svgIconContainer-4_T2DW_5.js";import"./useBaseUiId-GEkCbLBa.js";import"./InternalBackdrop-x5swkGiG.js";import"./composite-DkkadWpi.js";import"./index-h9yothYB.js";import"./index-IoaE0ABN.js";import"./index-BazR9_Vz.js";import"./useEventCallback-ciejQDaf.js";import"./SkeletonBar-nvRv2IsI.js";import"./LoadingCell-DDXdwUC3.js";import"./ColumnConfigDialog-BQlXFKxo.js";import"./DraggableList-Nhu5bqHk.js";import"./Input-D4Z6Ca-A.js";import"./useControlled-DNgMRgiK.js";import"./Button-BAILxeBw.js";import"./small-cross-BD54D7Y6.js";import"./ActionButton-CUxXKwb9.js";import"./Checkbox-DL9jdoDS.js";import"./minus-B-rGvElJ.js";import"./useValueChanged-DaajwA1Q.js";import"./caret-down-DWQ_CaDk.js";import"./CollapsiblePanel-DLNyGQ--.js";import"./MultiColumnSortDialog-BGi_bI7B.js";import"./MenuTrigger-xBbZeGp-.js";import"./CompositeItem-nLj1em87.js";import"./ToolbarRootContext-BGkdwiqh.js";import"./getDisabledMountTransitionStyles-BLkeUHBi.js";import"./getPseudoElementBounds-DSQvbWHW.js";import"./chevron-down-DtscOPHU.js";import"./index-OZkYm-sB.js";import"./error-3yVMcNOG.js";import"./BaseCbacBanner-kl4lJH79.js";import"./makeExternalStore-On9lnaHk.js";import"./Tooltip-IQN0eDi9.js";import"./PopoverPopup--hrqpxhS.js";import"./toNumber-_TjmtEZU.js";import"./useOsdkClient-D81JF1Wn.js";import"./DropdownField-TWFmldJV.js";import"./withOsdkMetrics-BKi74qF8.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
