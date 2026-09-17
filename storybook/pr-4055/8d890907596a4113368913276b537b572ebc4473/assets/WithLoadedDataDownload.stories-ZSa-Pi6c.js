import{f as b,j as a,r as i}from"./iframe-D8ujQKLt.js";import{O as u}from"./object-table-F88ZK3D3.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DFSc6wRM.js";import"./Table-DSfHpMVD.js";import"./index-9VE5Mn4e.js";import"./Dialog-DDQcNK5N.js";import"./cross-DL4CxuoW.js";import"./svgIconContainer-CCFPJCSW.js";import"./useBaseUiId-DQIJbvft.js";import"./InternalBackdrop-DOlkcASB.js";import"./composite-CqKkE9Tf.js";import"./index-Df4arEo8.js";import"./index-4dyiHwoW.js";import"./index-DcCMilJn.js";import"./useEventCallback-LXYYJHZR.js";import"./SkeletonBar-DGLHZxCg.js";import"./LoadingCell-DJ4HAk4z.js";import"./ColumnConfigDialog-Cu1Jh9Bn.js";import"./DraggableList-D780i88F.js";import"./search-lCLNBJzK.js";import"./Input-BAcEpIh9.js";import"./useControlled-CNmeKwYL.js";import"./Button-DP0uEAZL.js";import"./small-cross-D2ydpxtR.js";import"./ActionButton-mq8eWvOP.js";import"./Checkbox-BDbPm4Oc.js";import"./useValueChanged-D9rrTa67.js";import"./CollapsiblePanel-CrroEgz8.js";import"./MultiColumnSortDialog-BWeQjT91.js";import"./MenuTrigger-Ccyf87By.js";import"./CompositeItem-D1_uZNYL.js";import"./ToolbarRootContext-DDpleV8W.js";import"./getDisabledMountTransitionStyles-DmViJQ0X.js";import"./getPseudoElementBounds-Bt81s7c9.js";import"./chevron-down-Dy0uKQHu.js";import"./index-DEgBJtF2.js";import"./error-e8Ui46gA.js";import"./BaseCbacBanner-x-LLCXPg.js";import"./makeExternalStore-BCYZ0dRc.js";import"./Tooltip-xRA7nyQ0.js";import"./PopoverPopup-BoTh3yWt.js";import"./debounce-Bq0XVY4d.js";import"./useOsdkClient-C0xSXgiQ.js";import"./tick-DqmzPeDQ.js";import"./DropdownField-BvV_qCDF.js";import"./isEqual-Dbwb_nfU.js";import"./withOsdkMetrics-CoHNSoOK.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
