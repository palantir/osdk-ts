import{f as b,j as a,r as i}from"./iframe-BCQQ5idH.js";import{O as u}from"./object-table-CiAWSjw6.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-coqosfEI.js";import"./Table-BjsGcEug.js";import"./index-nevoWaco.js";import"./Dialog-C5qQPBcK.js";import"./cross-CEa64cbV.js";import"./svgIconContainer-CKj1NjbI.js";import"./useBaseUiId-DiDvWzye.js";import"./InternalBackdrop-N2Ue8An6.js";import"./composite-D0UtEOtq.js";import"./index-B3YRQCj_.js";import"./index-D04-iFGI.js";import"./index-BzNe3PgQ.js";import"./useEventCallback-Ba_k9sT5.js";import"./SkeletonBar-C04_QzCc.js";import"./LoadingCell-CxctrIdy.js";import"./ColumnConfigDialog-9haTRGzY.js";import"./DraggableList-BbZm-3gx.js";import"./search-BBu7BPS5.js";import"./Input-C6nfWZbz.js";import"./useControlled-Cq_GfurO.js";import"./Button-CEig4mHb.js";import"./small-cross-BGKOGZvf.js";import"./ActionButton-DHvPjza2.js";import"./Checkbox-B6jpZoN4.js";import"./useValueChanged-D3kLtDwA.js";import"./CollapsiblePanel-GdXVEA_b.js";import"./MultiColumnSortDialog-CtgSOTwj.js";import"./MenuTrigger-C0kxST0T.js";import"./CompositeItem-ldRXr3Bh.js";import"./ToolbarRootContext-BXYKMrbO.js";import"./getDisabledMountTransitionStyles-BQ29FsW-.js";import"./getPseudoElementBounds-Ckqa6CIQ.js";import"./chevron-down-DUkETYvc.js";import"./index-CLw5_nKq.js";import"./error-CJVmwm75.js";import"./BaseCbacBanner-8gebQmnF.js";import"./makeExternalStore-DUkSZpJS.js";import"./Tooltip-O_DZ5X_J.js";import"./PopoverPopup-dla5XZcT.js";import"./debounce-C1U5cA8k.js";import"./useOsdkClient-B5gZh-Vy.js";import"./tick--0MwaCEo.js";import"./DropdownField-DO1VI0xx.js";import"./isEqual-BbjsSR4E.js";import"./withOsdkMetrics-SGz3lb0q.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
