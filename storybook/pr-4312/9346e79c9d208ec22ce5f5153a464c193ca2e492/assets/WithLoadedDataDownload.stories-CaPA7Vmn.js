import{f as b,j as a,r as i}from"./iframe-DM1KpbCL.js";import{O as u}from"./object-table-BYpj4rmp.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B5lE_CeJ.js";import"./Table-CgY3wOOw.js";import"./index-CcTzWx10.js";import"./Dialog-BPu8yv4m.js";import"./cross-CnFtk43X.js";import"./svgIconContainer-D9_cFA2L.js";import"./useBaseUiId-BS0ydcCd.js";import"./InternalBackdrop-BafR-jVe.js";import"./composite-UHbWR1-V.js";import"./index-kvb1enIs.js";import"./index-Zf2bdMMR.js";import"./index-DzseGhFT.js";import"./useEventCallback-CPGZvpaV.js";import"./SkeletonBar-CIbWgRcz.js";import"./LoadingCell-B-S-snu4.js";import"./ColumnConfigDialog-BwmXpKR2.js";import"./DraggableList-BPHkcrGz.js";import"./search-CDaKZsSd.js";import"./Input-rJPz8yLN.js";import"./useControlled-BpM5Znsw.js";import"./Button-DbYUMIvf.js";import"./small-cross-D217SYw1.js";import"./ActionButton-CWh3vKDS.js";import"./Checkbox-B_lQ7cng.js";import"./useValueChanged-BvcJAZcs.js";import"./CollapsiblePanel-BCYCJ6Xx.js";import"./MultiColumnSortDialog-B1ICIl4b.js";import"./MenuTrigger-CAG7Bxtr.js";import"./CompositeItem-DEphRU8b.js";import"./ToolbarRootContext-kXKFrX_U.js";import"./getDisabledMountTransitionStyles-BnK3lh8Z.js";import"./getPseudoElementBounds-CmPQacu1.js";import"./chevron-down-B55CqhSV.js";import"./index-BzYLadhD.js";import"./error-BpWcPv0-.js";import"./BaseCbacBanner-B7JhimwT.js";import"./makeExternalStore-ZdV9YzEC.js";import"./Tooltip-DJZfHa2w.js";import"./PopoverPopup-B7nGMxdA.js";import"./debounce-CcYDWLT0.js";import"./useOsdkClient-2PfnP7RQ.js";import"./tick-Dp0UZtnJ.js";import"./DropdownField-ByM8k4kQ.js";import"./isEqual-CGEFIeDh.js";import"./withOsdkMetrics-Dzlv9-Px.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
