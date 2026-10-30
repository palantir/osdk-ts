import{f as b,j as a,r as i}from"./iframe-CNys6KBx.js";import{O as u}from"./object-table-BfLdoutw.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DcEogYXL.js";import"./Table-DD93V6XD.js";import"./index-D7tprs46.js";import"./Dialog-C9KVN-g-.js";import"./cross-DDF5avjH.js";import"./svgIconContainer-DGw65FKz.js";import"./useBaseUiId-B9-57ZNF.js";import"./InternalBackdrop-DaYZqJ6W.js";import"./composite-CNZDZ4o2.js";import"./index-BtKHvXe7.js";import"./index-CWFx-0lx.js";import"./index-BgT_i-PY.js";import"./useEventCallback-4Kkat34w.js";import"./SkeletonBar-cVCCqAbl.js";import"./LoadingCell-nXw0Ntj_.js";import"./ColumnConfigDialog-Bds5G4qz.js";import"./DraggableList-D2UzlQr4.js";import"./search-BE8RO1z_.js";import"./Input-DzrtDPnO.js";import"./useControlled-DuXB4b_p.js";import"./Button-DP1rA9dA.js";import"./small-cross-CBtWnDqE.js";import"./ActionButton-B9ImGUQY.js";import"./Checkbox-BT-ZvEA1.js";import"./useValueChanged-BecJvcFH.js";import"./CollapsiblePanel-l0zk2FsM.js";import"./MultiColumnSortDialog-DKfcrJkt.js";import"./MenuTrigger-BsmgvmAp.js";import"./CompositeItem-CIQp4vV-.js";import"./ToolbarRootContext-D9QBq8Lb.js";import"./getDisabledMountTransitionStyles-DksinVNb.js";import"./getPseudoElementBounds-D1zecXmj.js";import"./chevron-down-DpfNuwKR.js";import"./index-zFsg_RaX.js";import"./error-DMVqHs2L.js";import"./BaseCbacBanner-2kf_waYQ.js";import"./makeExternalStore-T7wEnVBI.js";import"./Tooltip-Cf_AS3a1.js";import"./PopoverPopup-Bsmdq_sX.js";import"./debounce-BAsDe-b7.js";import"./useOsdkClient-D6IOk0So.js";import"./tick-CFpktK17.js";import"./DropdownField-axtbgAiC.js";import"./isEqual-DWLMKdRA.js";import"./withOsdkMetrics--pN-uRA4.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
