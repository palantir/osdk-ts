import{f as b,j as a,r as i}from"./iframe-b_8xiy3W.js";import{O as u}from"./object-table-DrPIl3Zi.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D0v6g8Db.js";import"./Table-DJR5OCUI.js";import"./index-oZ2AYheq.js";import"./Dialog-DznRX8R1.js";import"./cross-CALAWLOA.js";import"./svgIconContainer-ByDmaFbM.js";import"./useBaseUiId-DT31E3Yo.js";import"./InternalBackdrop-CLpVUHm8.js";import"./composite-cYMewAOc.js";import"./index-C8Xx4cgL.js";import"./index-xZwO_cAf.js";import"./index-BMWwnwmI.js";import"./useEventCallback-CAsu19Vq.js";import"./SkeletonBar-Bd96z6dI.js";import"./LoadingCell-Cu9MSHwe.js";import"./ColumnConfigDialog-BFWSuhw9.js";import"./DraggableList-xBM_bTxf.js";import"./search-CbAtzBKJ.js";import"./Input-Co7UsBkP.js";import"./useControlled-CAq9EV0h.js";import"./Button-CQKahg2d.js";import"./small-cross-BNQLIIyh.js";import"./ActionButton-CodfAc7s.js";import"./Checkbox-cHmIGIFt.js";import"./useValueChanged-CeFg2HVM.js";import"./CollapsiblePanel-D3gQHqx1.js";import"./MultiColumnSortDialog-CH-TfZDd.js";import"./MenuTrigger-CHuFRbAt.js";import"./CompositeItem-O5ez4ulJ.js";import"./ToolbarRootContext-BKksKq4U.js";import"./getDisabledMountTransitionStyles-CCClTCas.js";import"./getPseudoElementBounds-nU4-wp7y.js";import"./chevron-down-DItPxyzq.js";import"./index-BHrpVXex.js";import"./error-BHsdjMmH.js";import"./BaseCbacBanner-g3o59pg6.js";import"./makeExternalStore-c0rjbvLB.js";import"./Tooltip-Bamtogyy.js";import"./PopoverPopup-BtxX0L1I.js";import"./debounce-B2LvOlKd.js";import"./useOsdkClient-yfgmgRbP.js";import"./tick-HvfLanm4.js";import"./DropdownField-BCzLIobc.js";import"./isEqual-Cz2f4b96.js";import"./withOsdkMetrics-BpRFFsXx.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
