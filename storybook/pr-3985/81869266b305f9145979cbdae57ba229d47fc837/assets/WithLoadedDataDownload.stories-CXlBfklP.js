import{f as b,j as a,r as i}from"./iframe-Bx31wN7l.js";import{O as u}from"./object-table-CUTVINjX.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-fuKytI2J.js";import"./Table-C6sxDE12.js";import"./index-DZxERBQ8.js";import"./Dialog-B_mHCcF-.js";import"./cross-ByPIg3cq.js";import"./svgIconContainer-CsmE7H8N.js";import"./useBaseUiId-BpE0KEfc.js";import"./InternalBackdrop-CXzy1IR-.js";import"./composite-Bx5EuYDq.js";import"./index-ec0TeVrD.js";import"./index-WQiMJ8U5.js";import"./index-eq9JihVj.js";import"./useEventCallback-BdwVQOgv.js";import"./SkeletonBar-CblG8V_N.js";import"./LoadingCell-q9KKR5qM.js";import"./ColumnConfigDialog-7tDXfpC1.js";import"./DraggableList-Dfq2W5_B.js";import"./search-BkXPkxMB.js";import"./Input-CQoFLmc7.js";import"./useControlled-BUc-d8tN.js";import"./Button-D8P70LO7.js";import"./small-cross-2gr1UHRE.js";import"./ActionButton-D3XLfflN.js";import"./Checkbox-Rzr3-pvM.js";import"./useValueChanged-LXU-Rlru.js";import"./CollapsiblePanel-C307MSn7.js";import"./MultiColumnSortDialog-BP03TXhe.js";import"./MenuTrigger-DlzBhBKN.js";import"./CompositeItem-CXKQZ3E9.js";import"./ToolbarRootContext-BEc0iwyp.js";import"./getDisabledMountTransitionStyles-I794iXBx.js";import"./getPseudoElementBounds-Cxm3qVX_.js";import"./chevron-down-Ca2LkDWe.js";import"./index-BrSdfPya.js";import"./error-BqlruEo6.js";import"./BaseCbacBanner-G-8ScpXv.js";import"./makeExternalStore-BiPnGhaA.js";import"./Tooltip-BHEJ_2jR.js";import"./PopoverPopup-DjXhzR73.js";import"./debounce-BfkSYXdV.js";import"./useOsdkClient-D1EBd0jQ.js";import"./tick-PN43AiNg.js";import"./DropdownField-B0i5mi2Z.js";import"./isEqual-CkX8CbxS.js";import"./withOsdkMetrics-DO2o0cgY.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
