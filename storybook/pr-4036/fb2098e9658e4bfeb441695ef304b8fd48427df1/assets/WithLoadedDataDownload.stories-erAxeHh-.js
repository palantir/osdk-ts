import{f as b,j as a,r as i}from"./iframe-D_qRpeHj.js";import{O as u}from"./object-table-CKBjSPJ8.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D_9N_6Hv.js";import"./Table-BIBvJY_n.js";import"./index-ze-4_PID.js";import"./Dialog-CgqoPhCB.js";import"./cross-BxS6mKVf.js";import"./svgIconContainer-CoeSRgcf.js";import"./useBaseUiId-By5i2rdz.js";import"./InternalBackdrop-Dc_uxBhE.js";import"./composite-C0V0hw5E.js";import"./index-CZLowYbM.js";import"./index-DfyhkSOl.js";import"./index-C-sm0l73.js";import"./useEventCallback-Cv2yWZv2.js";import"./SkeletonBar-EN4eDWhb.js";import"./LoadingCell-CHXjbNSr.js";import"./ColumnConfigDialog-DB0wjUE8.js";import"./DraggableList-DWmayQdU.js";import"./search-BGYV6IKj.js";import"./Input-BNbV4MTG.js";import"./useControlled-Y53AopBQ.js";import"./Button-BV5h0__V.js";import"./small-cross-C2VJaSVZ.js";import"./ActionButton-Bs7eblYb.js";import"./Checkbox-CLK566Z3.js";import"./useValueChanged-DldrlgwL.js";import"./CollapsiblePanel-PgBvtzuh.js";import"./MultiColumnSortDialog-Brfh71ie.js";import"./MenuTrigger-DGpOysmP.js";import"./CompositeItem-B_Ho19nn.js";import"./ToolbarRootContext-Dkj0BbLv.js";import"./getDisabledMountTransitionStyles-ml_2UbZr.js";import"./getPseudoElementBounds-Dt8npt-l.js";import"./chevron-down-4vjSc27s.js";import"./index-DMf8On8K.js";import"./error-CushKjuF.js";import"./BaseCbacBanner-lQbmrV5k.js";import"./makeExternalStore-Cgf26SsV.js";import"./Tooltip-BDUJFrAT.js";import"./PopoverPopup-BEmt1_nM.js";import"./debounce-BbOjOfo_.js";import"./useOsdkClient-BidZgNy-.js";import"./tick-D_JbwVBf.js";import"./DropdownField-DV5YVhPE.js";import"./isEqual-WH4uvIP0.js";import"./withOsdkMetrics-B7kRIAyY.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
