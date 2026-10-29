import{f as b,j as a,r as i}from"./iframe-BJLBRZOh.js";import{O as u}from"./object-table-D6XTw50v.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BwUp_7F1.js";import"./Table-dj-3XM9K.js";import"./index-C9_BYSi8.js";import"./Dialog-w7wPINN3.js";import"./cross-DYYKBVG2.js";import"./svgIconContainer-CQ7lEg_v.js";import"./useBaseUiId-LHwOB3kw.js";import"./InternalBackdrop-Bg95Crdb.js";import"./composite-BxFzj_3L.js";import"./index-MgR6vtA5.js";import"./index-Cf7wbzeY.js";import"./index-DsPo5D0P.js";import"./useEventCallback-D_IWJpWQ.js";import"./SkeletonBar-CA0TLWsN.js";import"./LoadingCell-oMac1VC6.js";import"./ColumnConfigDialog-D8ziylzG.js";import"./DraggableList-D3U2xt4z.js";import"./search-lm4u23Jr.js";import"./Input-DotRyYSg.js";import"./useControlled-DvCQBOjX.js";import"./Button-B1QFNCxV.js";import"./small-cross-s83LmiPv.js";import"./ActionButton-DfBkhzDx.js";import"./Checkbox-Cf1eTA8o.js";import"./useValueChanged-DKvkRZw_.js";import"./CollapsiblePanel-DeNvoW95.js";import"./MultiColumnSortDialog-Bxs_R_QI.js";import"./MenuTrigger-DUpdUHK8.js";import"./CompositeItem-B-vP8lxH.js";import"./ToolbarRootContext-DhgC0mq4.js";import"./getDisabledMountTransitionStyles-CMTlxnVD.js";import"./getPseudoElementBounds-GUEr2WJt.js";import"./chevron-down-PUEKZFzz.js";import"./index-BxHhiHH9.js";import"./error-RXBYB8o8.js";import"./BaseCbacBanner-CqC4EUL0.js";import"./makeExternalStore-BWhFJ2a3.js";import"./Tooltip-BYFoA5Qd.js";import"./PopoverPopup-Cbo8QQ1w.js";import"./debounce-lfKLdo1S.js";import"./useOsdkClient-BnXpdimb.js";import"./tick-G0_utWJZ.js";import"./DropdownField-DLWbrKeC.js";import"./isEqual-Bm2E3Blo.js";import"./withOsdkMetrics-CUH6WGya.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
