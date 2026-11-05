import{f as b,j as a,r as i}from"./iframe-2CZ5tyet.js";import{O as u}from"./object-table-DpRFI095.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-PdhlwSnk.js";import"./Table-CznV6T2W.js";import"./index-BEbGGmzC.js";import"./Dialog-CeWRMnMF.js";import"./cross-L_JwSQIU.js";import"./svgIconContainer-CNOiLZ-C.js";import"./useBaseUiId-DmeaPkXN.js";import"./InternalBackdrop-AEMlst0F.js";import"./composite-D3k21xgh.js";import"./index-DJ2zkz4W.js";import"./index-BzLD7IFo.js";import"./index-BLLQpwjF.js";import"./useEventCallback-BSE4SjR3.js";import"./SkeletonBar-CZIrexgF.js";import"./LoadingCell-hl43yvOQ.js";import"./ColumnConfigDialog-gbHfBktU.js";import"./DraggableList-D8xTIljs.js";import"./search-DVGk6bce.js";import"./Input-nyDT7hKf.js";import"./useControlled-Dh1VVbb0.js";import"./Button-eNpy85xj.js";import"./small-cross-DldLH4C7.js";import"./ActionButton-Bj84kgPY.js";import"./Checkbox-NvzeqK8d.js";import"./useValueChanged-B3VhTAWV.js";import"./CollapsiblePanel-DSL9tbZc.js";import"./MultiColumnSortDialog-haCwcxAA.js";import"./MenuTrigger-BEDWfK89.js";import"./CompositeItem-_M4T2kN5.js";import"./ToolbarRootContext-C-QqQ4cn.js";import"./getDisabledMountTransitionStyles-Gd7L8Xae.js";import"./getPseudoElementBounds-Xqurqd99.js";import"./chevron-down-9zPbKgFH.js";import"./index-DlBbVzYN.js";import"./error-_JBSJ8K6.js";import"./BaseCbacBanner-CtN12RyV.js";import"./makeExternalStore-47_tyIYI.js";import"./Tooltip-BmclmkMF.js";import"./PopoverPopup-BaNCTG4D.js";import"./debounce-C66p6rWC.js";import"./useOsdkClient-CiuR1H2l.js";import"./tick-BDMTisIM.js";import"./DropdownField-dfStdW8W.js";import"./isEqual-DYEOAiyn.js";import"./withOsdkMetrics-CV77OAmc.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
