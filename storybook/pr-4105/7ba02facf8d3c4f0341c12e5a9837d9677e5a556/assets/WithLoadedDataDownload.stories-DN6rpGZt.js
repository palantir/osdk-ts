import{f as b,j as a,r as i}from"./iframe-zfG254O_.js";import{O as u}from"./object-table-DdTuYXq6.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BVR1mWVD.js";import"./Table-bJGCKuIo.js";import"./index-Wj2BR0GO.js";import"./Dialog-ClRyKcve.js";import"./cross-CetEVi0b.js";import"./svgIconContainer-QVUVb6tE.js";import"./useBaseUiId-DDNAeb_I.js";import"./InternalBackdrop-CzqyYOYM.js";import"./composite-DJ7hFQoT.js";import"./index-DqcYQoAX.js";import"./index-6IcmwpRJ.js";import"./index-CYmueTj6.js";import"./useEventCallback-CBXBr67p.js";import"./SkeletonBar-CZ4qcvgs.js";import"./LoadingCell-BSeA2jL5.js";import"./ColumnConfigDialog-DFiNFeKf.js";import"./DraggableList-BhXMEoLZ.js";import"./search-C1O_20Mr.js";import"./Input-DnoFtOsb.js";import"./useControlled-CYuH3Kw2.js";import"./Button-XkjDQhxK.js";import"./small-cross-BPAsGbUn.js";import"./ActionButton-C6sVQTm3.js";import"./Checkbox-BZvshDW-.js";import"./useValueChanged-CfrpKOZJ.js";import"./CollapsiblePanel-7gx9FNyA.js";import"./MultiColumnSortDialog-DF4qRTXJ.js";import"./MenuTrigger-DDjdPw8E.js";import"./CompositeItem-7b58zS75.js";import"./ToolbarRootContext-CfVpNXkd.js";import"./getDisabledMountTransitionStyles-DQWp1vNz.js";import"./getPseudoElementBounds-DaQ8_6-7.js";import"./chevron-down-omzDCKN7.js";import"./index-Cfc9ne_z.js";import"./error-CZvS_ur6.js";import"./BaseCbacBanner-BUYNHHUj.js";import"./makeExternalStore-Br87Teca.js";import"./Tooltip-1C_rhTkJ.js";import"./PopoverPopup-xGPdUl_L.js";import"./debounce-CDvtvBim.js";import"./useOsdkClient-CX8pU5qt.js";import"./tick-BSe8OeQ4.js";import"./DropdownField-Bk22B-qN.js";import"./isEqual-NQiw9Ucd.js";import"./withOsdkMetrics-BSCahypJ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
