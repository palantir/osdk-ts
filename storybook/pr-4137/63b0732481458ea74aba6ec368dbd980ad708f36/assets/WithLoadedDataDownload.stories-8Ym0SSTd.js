import{f as b,j as a,r as i}from"./iframe-CgaQrvJX.js";import{O as u}from"./object-table-zWPUlTUx.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B2Xmrc95.js";import"./Table-Bu9LGKjn.js";import"./index-Bzmlqe5w.js";import"./Dialog-CMx2bEhz.js";import"./cross-IeILlXDu.js";import"./svgIconContainer-DNetVQYr.js";import"./useBaseUiId-CIjmtvYO.js";import"./InternalBackdrop-BkdT6um9.js";import"./composite-B-SLP__V.js";import"./index-BwSc5cdS.js";import"./index-D_yqZm0V.js";import"./index-DUXtr9cN.js";import"./useEventCallback-CByTzmdM.js";import"./SkeletonBar-DLIA_RTq.js";import"./LoadingCell-BVf_3OyH.js";import"./ColumnConfigDialog-DPr1PGC7.js";import"./DraggableList-Ve3W3f6x.js";import"./search-BUTYKFlQ.js";import"./Input-DQR44Pu5.js";import"./useControlled-A1Soqi4e.js";import"./Button-BWSgruJ1.js";import"./small-cross-CClz0VbI.js";import"./ActionButton-B7LnHlzj.js";import"./Checkbox-d7IFsgOk.js";import"./useValueChanged-BNtiYy3l.js";import"./CollapsiblePanel-B7VLrLlP.js";import"./MultiColumnSortDialog-CYrgn_ax.js";import"./MenuTrigger-CiC5_Yxk.js";import"./CompositeItem-Dxj4Vwhq.js";import"./ToolbarRootContext-YVP2LXfw.js";import"./getDisabledMountTransitionStyles-BSI6iR4W.js";import"./getPseudoElementBounds-BD_yj4W1.js";import"./chevron-down-BU6VTUzE.js";import"./index-CTmg82ji.js";import"./error-DP9sVVUg.js";import"./BaseCbacBanner-BFsdrnBM.js";import"./makeExternalStore-BVbHcjBk.js";import"./Tooltip-C2TlaiS-.js";import"./PopoverPopup-CZsknx9j.js";import"./debounce-BrOWPCnK.js";import"./useOsdkClient-DwCcA5xy.js";import"./tick-Q1XgvJo3.js";import"./DropdownField-CwkJQmwG.js";import"./isEqual-B2SNskwK.js";import"./withOsdkMetrics-C3kX09Hw.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
