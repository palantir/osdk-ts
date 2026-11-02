import{f as b,j as a,r as i}from"./iframe-B0Q7ew8Z.js";import{O as u}from"./object-table-CnvSGGFW.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BW4DoD-q.js";import"./index-B3euQAxX.js";import"./Dialog-WbYUxlgJ.js";import"./cross-CuUHaT77.js";import"./svgIconContainer-DHqtFPi_.js";import"./useBaseUiId-DTpiFHLl.js";import"./InternalBackdrop-C_e4Amrk.js";import"./composite-C38hBHQ1.js";import"./index-LgXgW0tz.js";import"./index-DDwtoaNx.js";import"./index-CdLLvF95.js";import"./useEventCallback-CfEmFQFo.js";import"./SkeletonBar-8Z-HAmIt.js";import"./LoadingCell-rvCJgKBp.js";import"./ColumnConfigDialog-XOh1gpvr.js";import"./DraggableList-DNdEOp6h.js";import"./search-ftQvRLI-.js";import"./Input-g4yPu6B6.js";import"./useControlled-BS_Eo8Jr.js";import"./Button-DJ9AZpJd.js";import"./small-cross-DfX0mXVC.js";import"./ActionButton-DGWgotCn.js";import"./Checkbox-B4CnmWRO.js";import"./useValueChanged-DtBaEsJ9.js";import"./CollapsiblePanel-CXKPpa6L.js";import"./MultiColumnSortDialog-DGOR6vtP.js";import"./MenuTrigger-WLHl3M4-.js";import"./CompositeItem-CVqNqknj.js";import"./ToolbarRootContext-C1mulGkb.js";import"./getDisabledMountTransitionStyles-CW0hcLTx.js";import"./getPseudoElementBounds-BqkVMi-w.js";import"./chevron-down-CPWeMG22.js";import"./index-MLSRGr_T.js";import"./error-DCkSicSK.js";import"./BaseCbacBanner-Bzf8VEwK.js";import"./makeExternalStore-DfcRwF-H.js";import"./Tooltip-DwBPcoAB.js";import"./PopoverPopup-BDARVRq8.js";import"./debounce-CyMb4iRa.js";import"./useOsdkClient-BcJFc_0Y.js";import"./tick-CnmVaPy0.js";import"./DropdownField-CxXuqhZR.js";import"./isEqual-DF47nHyu.js";import"./withOsdkMetrics-xWaVFLHz.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
