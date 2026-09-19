import{f as b,j as a,r as i}from"./iframe-BTDvHL3g.js";import{O as u}from"./object-table-576gGb0G.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D9Z_UkK8.js";import"./Table-9TYSBCCH.js";import"./index-C2WocGyz.js";import"./Dialog-BQPrnvyl.js";import"./cross-Cp0W9YlM.js";import"./svgIconContainer-Dt86stim.js";import"./useBaseUiId-Ca42jcOp.js";import"./InternalBackdrop-DvugTWWQ.js";import"./composite-CR_T3dDP.js";import"./index-CtTeoyvV.js";import"./index-Cs7K0AYs.js";import"./index-CI1rDDbd.js";import"./useEventCallback-Djm2_lIv.js";import"./SkeletonBar-4ynmEfK8.js";import"./LoadingCell-BFOetmvd.js";import"./ColumnConfigDialog-5dKyG8cs.js";import"./DraggableList-BHPi9scr.js";import"./search-BZZDgwTx.js";import"./Input-B9motj4l.js";import"./useControlled-DZa6FNla.js";import"./Button-2AhFByte.js";import"./small-cross-AHNwKH-0.js";import"./ActionButton-DKYyXSbF.js";import"./Checkbox-5N-YWdQP.js";import"./useValueChanged-LafOKdn0.js";import"./CollapsiblePanel-Xwe8c9pF.js";import"./MultiColumnSortDialog-BjjGFOba.js";import"./MenuTrigger-BDQiKkfp.js";import"./CompositeItem-SQA_IIyG.js";import"./ToolbarRootContext-D_KZXAup.js";import"./getDisabledMountTransitionStyles-BdwhjLM3.js";import"./getPseudoElementBounds-DRV3tTt5.js";import"./chevron-down-B2G_smGI.js";import"./index-B7w2hjNg.js";import"./error-7FvWp7D0.js";import"./BaseCbacBanner-R7ys_q2e.js";import"./makeExternalStore-D99Ax1Zi.js";import"./Tooltip-CUxqTMTK.js";import"./PopoverPopup-DgDU7fL-.js";import"./debounce-CuJqoMgC.js";import"./useOsdkClient-BUTuIt2q.js";import"./tick-pW-8BtNc.js";import"./DropdownField-BQkHbNRZ.js";import"./isEqual-ByQ8noGx.js";import"./withOsdkMetrics-BVhEzQUJ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
