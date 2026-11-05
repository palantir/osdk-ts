import{f as b,j as a,r as i}from"./iframe-DZ1IfAc9.js";import{O as u}from"./object-table-n4fDDaZs.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-FioNmaYc.js";import"./Table-DAy0iIvq.js";import"./index-DlgarWWe.js";import"./Dialog-D6NnjYzR.js";import"./cross-9jSrVJX7.js";import"./svgIconContainer-BMPgpSIt.js";import"./useBaseUiId-D5mFLOde.js";import"./InternalBackdrop-71qlqQsM.js";import"./composite-naZtYWyA.js";import"./index-BqCJp_mQ.js";import"./index-Dm0H4d0k.js";import"./index-D8BPITj7.js";import"./useEventCallback-CivKyEqa.js";import"./SkeletonBar-Poc6NUlG.js";import"./LoadingCell-C25Ly4Io.js";import"./ColumnConfigDialog-Bv-NYj8T.js";import"./DraggableList-DTTybYEG.js";import"./search-DX_EHnIw.js";import"./Input-BVSO0T6H.js";import"./useControlled-CK492yS4.js";import"./Button-CEdONvfh.js";import"./small-cross-k0iuPUUj.js";import"./ActionButton-C59C2SC2.js";import"./Checkbox-B4MDdy_R.js";import"./useValueChanged-DOaXJk-l.js";import"./CollapsiblePanel-DFS5HvYG.js";import"./MultiColumnSortDialog-D2Zs5eyA.js";import"./MenuTrigger-BMDKhIr4.js";import"./CompositeItem-BRIYvu0B.js";import"./ToolbarRootContext-ATEsw9kW.js";import"./getDisabledMountTransitionStyles-CbTtYX3G.js";import"./getPseudoElementBounds-oqBrWOWr.js";import"./chevron-down-ClTS_TF6.js";import"./index-DqffqbdW.js";import"./error-CK66UUTY.js";import"./BaseCbacBanner-MlktgPHb.js";import"./makeExternalStore-DT9sfKcd.js";import"./Tooltip-BVGKe7Gt.js";import"./isObject-BzWFEdJL.js";import"./debounce--VQS0Dqu.js";import"./useOsdkClient-G1l4twLo.js";import"./tick-DJ6zublk.js";import"./DropdownField-Co-1Lqep.js";import"./isEqual-DYFiJ8mG.js";import"./_baseIsEqual-CfKgNQ0W.js";import"./withOsdkMetrics-DkI7OiMa.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
