import{f as b,j as a,r as i}from"./iframe-BD-LWr1p.js";import{O as u}from"./object-table-CJFF8n9s.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-dmgTD7Sy.js";import"./Table-DptuV1pu.js";import"./index-C4WNdzjX.js";import"./Dialog-BAiinTZl.js";import"./cross-ek8KuXfH.js";import"./svgIconContainer-CIg5fwF3.js";import"./useBaseUiId-wrsAqB_t.js";import"./InternalBackdrop-ajo3Ljj6.js";import"./composite-BuDBmEPr.js";import"./index-YTdZ8qtU.js";import"./index-DrMY-03p.js";import"./index-AdOgxmTZ.js";import"./useEventCallback-PxF8Exlt.js";import"./SkeletonBar-B5Pg2PMT.js";import"./LoadingCell-9De3Hx9v.js";import"./ColumnConfigDialog-D9RYQvmN.js";import"./DraggableList-54NtNGRb.js";import"./search-Cesj0Sn1.js";import"./Input-H0p-Kdle.js";import"./useControlled-S-BenCcy.js";import"./Button-DYW0znBH.js";import"./small-cross-BGYlQIQ0.js";import"./ActionButton-CGAk7BMh.js";import"./Checkbox-DXkgkmDI.js";import"./useValueChanged-DhWzb1ZN.js";import"./CollapsiblePanel-D1v8TPV_.js";import"./MultiColumnSortDialog-CTz5B5Bi.js";import"./MenuTrigger-Dre0mHpq.js";import"./CompositeItem-BT4SOs7q.js";import"./ToolbarRootContext-W9Cyg5bT.js";import"./getDisabledMountTransitionStyles-DfzQBBqR.js";import"./getPseudoElementBounds-CWc-7ein.js";import"./chevron-down-DZyBBtLC.js";import"./index-qpSIk4b9.js";import"./error-CGXE3NEO.js";import"./BaseCbacBanner-ZvEz-m-p.js";import"./makeExternalStore-BglmpTlj.js";import"./Tooltip-FW4vRfEH.js";import"./PopoverPopup-BnuLOZmM.js";import"./debounce-BACFrRsD.js";import"./useOsdkClient-CN3BmlPj.js";import"./tick-CxY1HILU.js";import"./DropdownField-CtG7SSoj.js";import"./isEqual-BpoUtECJ.js";import"./withOsdkMetrics-CbPUGjlt.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
