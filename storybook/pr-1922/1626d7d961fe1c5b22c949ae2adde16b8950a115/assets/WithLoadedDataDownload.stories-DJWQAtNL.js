import{f as b,j as a,r as i}from"./iframe-CxT5Jan_.js";import{O as u}from"./object-table-UW4KPqzS.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B2aJWYzQ.js";import"./Table-COCtIDyb.js";import"./index-Dtz5PgLF.js";import"./Dialog-CCC2rkEz.js";import"./cross-CN6xf_dQ.js";import"./svgIconContainer-hCqCvGhu.js";import"./useBaseUiId-B-OQdXnZ.js";import"./InternalBackdrop-BNvBplbQ.js";import"./composite-DGmZ6kEt.js";import"./index-DMUTvrAf.js";import"./index-odz-bzs8.js";import"./index-VTk_L-CK.js";import"./useEventCallback-DJgEXQnv.js";import"./SkeletonBar-DO5a1Cj6.js";import"./LoadingCell-C99H8f55.js";import"./ColumnConfigDialog-EyJedUwR.js";import"./DraggableList-D8pu-QX3.js";import"./search-CDYNfwYQ.js";import"./Input-uXNf_zLb.js";import"./useControlled-HfGVJvVO.js";import"./Button-g3dA2T-X.js";import"./small-cross-DOBtvqtk.js";import"./ActionButton-Drinm68p.js";import"./Checkbox-C6faQSvd.js";import"./useValueChanged-B-mq1KuU.js";import"./CollapsiblePanel-CS3WD6U4.js";import"./MultiColumnSortDialog-C-bdESQG.js";import"./MenuTrigger-6y7n_vAV.js";import"./CompositeItem-DLM-dgwp.js";import"./ToolbarRootContext-BXaU4Z9h.js";import"./getDisabledMountTransitionStyles-BDF0Bffw.js";import"./getPseudoElementBounds-WZiK9BcL.js";import"./chevron-down-CJ808Qtk.js";import"./index-qScKd8ht.js";import"./error-ABOYqx1m.js";import"./BaseCbacBanner-CKAihuJM.js";import"./makeExternalStore-z4BPzaiv.js";import"./Tooltip-BCH3arb9.js";import"./PopoverPopup-BEr_vAbM.js";import"./debounce-BM3c7HzB.js";import"./useOsdkClient-BdjKd_qM.js";import"./tick-B08JakEq.js";import"./DropdownField-j_jVFNln.js";import"./isEqual-D_Z0bU5y.js";import"./withOsdkMetrics-Dv_WEx2y.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
