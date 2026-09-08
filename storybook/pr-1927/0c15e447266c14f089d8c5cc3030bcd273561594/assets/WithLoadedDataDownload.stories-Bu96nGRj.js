import{f as b,j as a,r as i}from"./iframe-QQ9Fs_tc.js";import{O as u}from"./object-table-Qwse69C6.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B4fYryDC.js";import"./Table-XvNUOy3B.js";import"./index-DkrQDtS2.js";import"./Dialog-BidFhY0J.js";import"./cross-DmvM--6P.js";import"./svgIconContainer-DTxq_i5h.js";import"./useBaseUiId-1r5VJFrp.js";import"./InternalBackdrop-CV3kvSS-.js";import"./composite-2UwVI9RX.js";import"./index-D63-R6ut.js";import"./index-DsjkNNfA.js";import"./index-DN5mWcju.js";import"./useEventCallback-UDwFt7_R.js";import"./SkeletonBar-bIWrP7Fa.js";import"./LoadingCell-5E5jRK52.js";import"./ColumnConfigDialog-DsKPIw6u.js";import"./DraggableList-DsZqtxDJ.js";import"./search-BSq4Mlrv.js";import"./Input-CucLW42P.js";import"./useControlled-36aB-sGp.js";import"./Button-DJziOx5S.js";import"./small-cross-CwQDMn6h.js";import"./ActionButton-D_tYhxEf.js";import"./Checkbox-BQqiVQMr.js";import"./useValueChanged-zGcUW3kI.js";import"./CollapsiblePanel-B9w9s6OF.js";import"./MultiColumnSortDialog-CWeOA6_H.js";import"./MenuTrigger-ZsgrxCHv.js";import"./CompositeItem-Bl0uQaQG.js";import"./ToolbarRootContext-YsoXVLyq.js";import"./getDisabledMountTransitionStyles-2ojh7cGB.js";import"./getPseudoElementBounds-DXdFGrw3.js";import"./chevron-down-Bgnu4jc9.js";import"./index-C32oDOmG.js";import"./error-DTTckfDx.js";import"./BaseCbacBanner-D46qbUJD.js";import"./makeExternalStore-kQ-0-i1V.js";import"./Tooltip-BPNAr5X_.js";import"./PopoverPopup-LQKhjub2.js";import"./debounce-Ds7iogVo.js";import"./useOsdkClient-DtjCwYRE.js";import"./tick-fiXJSjT8.js";import"./DropdownField-B-kw3xxE.js";import"./isEqual-DKOAC8cr.js";import"./withOsdkMetrics-MEpQgkcH.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
