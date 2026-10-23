import{f as b,j as a,r as i}from"./iframe-BpdL9i9r.js";import{O as u}from"./object-table-D8EV8T58.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BGgpRwmn.js";import"./Table-KFE7UNSo.js";import"./index-BOBmNIkf.js";import"./Dialog-BYS7qVOM.js";import"./cross-B_FitAUD.js";import"./svgIconContainer-BYUaz7v8.js";import"./useBaseUiId-DRf0avcO.js";import"./InternalBackdrop-BMXRBBRn.js";import"./composite-BFfsCZEe.js";import"./index-Dh6vk7Lg.js";import"./index-CAZS1ZmE.js";import"./index-B2GBLWAK.js";import"./useEventCallback-Cv7ZNXWB.js";import"./SkeletonBar-acxIujrp.js";import"./LoadingCell-ixXOOpOP.js";import"./ColumnConfigDialog-B3GVMtic.js";import"./DraggableList-MiRYJus0.js";import"./search-C5Bpx8xV.js";import"./Input-yfdnK4QX.js";import"./useControlled-QZyhjlC2.js";import"./Button-BysZxDt3.js";import"./small-cross-CbVs9Rqg.js";import"./ActionButton-GDiRTL_d.js";import"./Checkbox-CRk0naPI.js";import"./useValueChanged-_ggW3wfM.js";import"./CollapsiblePanel-Bhllaees.js";import"./MultiColumnSortDialog-C_FOAodo.js";import"./MenuTrigger-xiavFyRB.js";import"./CompositeItem-DWqZMJZf.js";import"./ToolbarRootContext-B3r4TQUK.js";import"./getDisabledMountTransitionStyles-BPLTuK4K.js";import"./getPseudoElementBounds-WaWUWStD.js";import"./chevron-down-CmBeGku0.js";import"./index-CQPYqNM-.js";import"./error-BZRmZs4O.js";import"./BaseCbacBanner-D4pdI21N.js";import"./makeExternalStore-BVQoDSnU.js";import"./Tooltip-D5UgCEsg.js";import"./PopoverPopup-DvvB667y.js";import"./debounce-DTQhMy-X.js";import"./useOsdkClient-rNJRaM8P.js";import"./tick-DtX6b8Qy.js";import"./DropdownField-jH7MfoFT.js";import"./isEqual-DXMiZQC8.js";import"./withOsdkMetrics-DoqsagcU.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
