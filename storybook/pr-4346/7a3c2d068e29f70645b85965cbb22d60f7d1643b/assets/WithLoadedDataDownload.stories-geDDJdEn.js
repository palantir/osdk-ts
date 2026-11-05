import{f as b,j as a,r as i}from"./iframe-C0MgyNRE.js";import{O as u}from"./object-table-BLliszwm.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DQoH0Nuo.js";import"./Table-BqUvw1je.js";import"./index---acoC-r.js";import"./Dialog-DhukfYta.js";import"./cross-CDqB6Pmb.js";import"./svgIconContainer-BKLjPPf4.js";import"./useBaseUiId-Q4ONINdB.js";import"./InternalBackdrop-rlHdNk5g.js";import"./composite-BfZwON16.js";import"./index-AZR5iI7Q.js";import"./index-C-iYCFDc.js";import"./index-DVx8jUCi.js";import"./useEventCallback-D9l2Sgfp.js";import"./SkeletonBar-CTwZ2QYa.js";import"./LoadingCell-DxXNh-zl.js";import"./ColumnConfigDialog-DxvHuOv6.js";import"./DraggableList-DP2OraGG.js";import"./search-CnqYke8S.js";import"./Input-BAC6a1Nu.js";import"./useControlled-BBrJL19c.js";import"./Button-DPYKSMTC.js";import"./small-cross-gL4Blcc6.js";import"./ActionButton-DcSbKUFA.js";import"./Checkbox-DWFxIo3E.js";import"./useValueChanged-rqsds79W.js";import"./CollapsiblePanel-DBgZ58Ev.js";import"./MultiColumnSortDialog-D0RWAJ94.js";import"./MenuTrigger-CCqSXm39.js";import"./CompositeItem-4Z6N9TGd.js";import"./ToolbarRootContext-DTiKt-1r.js";import"./getDisabledMountTransitionStyles-DOeog0sh.js";import"./getPseudoElementBounds-f4HbG8Fm.js";import"./chevron-down-3JGU9uXG.js";import"./index-DLQpaEnR.js";import"./error-DWVeEt8h.js";import"./BaseCbacBanner-BCZLghhn.js";import"./makeExternalStore-CJPI6JTX.js";import"./Tooltip-BhEegg2P.js";import"./isObject-BQeCy5y1.js";import"./debounce-Bi1ZMfOq.js";import"./useOsdkClient-Ccq50_Dk.js";import"./tick-8uJq1GYC.js";import"./DropdownField-GlOSN0XT.js";import"./isEqual-DYvTBXV4.js";import"./_baseIsEqual-CEtqIxGI.js";import"./withOsdkMetrics-DhnlLT_e.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
