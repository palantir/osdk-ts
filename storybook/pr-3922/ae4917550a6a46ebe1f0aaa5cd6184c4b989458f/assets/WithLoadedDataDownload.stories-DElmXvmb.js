import{f as b,j as a,r as i}from"./iframe-cVISvyfe.js";import{O as u}from"./object-table-CfPdI04T.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CV7QtPzK.js";import"./Table-B2UA_DCP.js";import"./index-Cp1JV-_2.js";import"./Dialog-B9Yyrz7z.js";import"./cross-BQcZgDu4.js";import"./svgIconContainer-BLZRnc85.js";import"./useBaseUiId-CkxMnH4M.js";import"./InternalBackdrop-PhrF7f-Y.js";import"./composite-pva2vyCm.js";import"./index-BqMrmVK2.js";import"./index-mfykt0Ga.js";import"./index-CSmwm2LA.js";import"./useEventCallback-QAsE75sQ.js";import"./SkeletonBar-CbuqG1qR.js";import"./LoadingCell-1PHAs7Pa.js";import"./ColumnConfigDialog-CgrHgHAw.js";import"./DraggableList-7Qhjocb-.js";import"./search-Ck4999wE.js";import"./Input-6utg62a_.js";import"./useControlled-_y7ng7_J.js";import"./Button-CXrCi2Zt.js";import"./small-cross-Bd7ODnfC.js";import"./ActionButton-CU5q3Svh.js";import"./Checkbox-DyJCrmM1.js";import"./useValueChanged-Ceh5Fuv-.js";import"./CollapsiblePanel-Tbw4mP0W.js";import"./MultiColumnSortDialog-CciSkKfg.js";import"./MenuTrigger-BbBy_ec1.js";import"./CompositeItem-BIYi67JM.js";import"./ToolbarRootContext-Kuy8kCkh.js";import"./getDisabledMountTransitionStyles-Dff_0x3d.js";import"./getPseudoElementBounds-JGOI8eqt.js";import"./chevron-down-CuCy4Lvp.js";import"./index-BwvBu9MX.js";import"./error-BPDzH4j4.js";import"./BaseCbacBanner-FANvmh6A.js";import"./makeExternalStore-Bt321Qwa.js";import"./Tooltip-C4wgS6jm.js";import"./PopoverPopup-0BqC9snu.js";import"./debounce-beaBvIAK.js";import"./useOsdkClient-TzGlUFiU.js";import"./tick-Nt4YSm9S.js";import"./DropdownField-BZ37aPXN.js";import"./isEqual-DKSKQ7M9.js";import"./withOsdkMetrics-CKuQj_0t.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
