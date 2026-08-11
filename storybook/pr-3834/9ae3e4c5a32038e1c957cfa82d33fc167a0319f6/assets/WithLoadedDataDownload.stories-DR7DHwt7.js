import{f as b,j as a,r as i}from"./iframe-BQQenncx.js";import{O as u}from"./object-table-DfbCwTiy.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DE2zdEQ0.js";import"./Table-Cmaah35x.js";import"./index-AEra5GjR.js";import"./Dialog-CiV-H6wX.js";import"./cross-CU5c5uos.js";import"./svgIconContainer-DKhBOnYU.js";import"./useBaseUiId-BgSJ0JuX.js";import"./InternalBackdrop-DUQAObxa.js";import"./composite-CU8fvfsg.js";import"./index-BVUmKt0T.js";import"./index-ly2aBA7A.js";import"./index-hWkQAxDW.js";import"./useEventCallback-B8NeoGCO.js";import"./SkeletonBar-BrFOAxeA.js";import"./LoadingCell-W9xuj7VH.js";import"./ColumnConfigDialog-DqnpXYNI.js";import"./DraggableList-Bc8uF3OC.js";import"./search-CgjP2Jwy.js";import"./Input-70viAAti.js";import"./useControlled-C13sOQuV.js";import"./isEqual-sa52SWWU.js";import"./isObject-Ds2zxCKN.js";import"./Button-hetyNd0y.js";import"./ActionButton-D6ggDCLc.js";import"./Checkbox-NVtkWJ8H.js";import"./useValueChanged-FwEMaXBy.js";import"./CollapsiblePanel-Db4XoTeG.js";import"./MultiColumnSortDialog-C3m8vwg6.js";import"./MenuTrigger-BeG6leMZ.js";import"./CompositeItem-vvPbfk0M.js";import"./ToolbarRootContext-Bu_SuW92.js";import"./getDisabledMountTransitionStyles-eVYX_BMX.js";import"./getPseudoElementBounds-BjNpuUcd.js";import"./chevron-down-Bog31CQQ.js";import"./index-CGPUvFpI.js";import"./error-DmbVq6Jg.js";import"./BaseCbacBanner-D89jOczY.js";import"./makeExternalStore-CkGykhKx.js";import"./Tooltip-0nOBWHFn.js";import"./PopoverPopup-Ht7DQmdg.js";import"./toNumber-B4TNDdae.js";import"./useOsdkClient-0MgZdaOJ.js";import"./tick-zu9zWfhb.js";import"./DropdownField-MuED612X.js";import"./withOsdkMetrics-At11PAU6.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
