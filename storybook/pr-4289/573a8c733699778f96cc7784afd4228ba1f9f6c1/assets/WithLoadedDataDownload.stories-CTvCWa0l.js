import{f as b,j as a,r as i}from"./iframe-DrkKxiw5.js";import{O as u}from"./object-table-bi6_WaNf.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CoexQg1D.js";import"./Table-Cd3VvXH2.js";import"./index-9bu5FaWD.js";import"./Dialog-CLjuVpcT.js";import"./cross-CNIYbi9C.js";import"./svgIconContainer-BwjWYJj_.js";import"./useBaseUiId-NPWMEoN9.js";import"./InternalBackdrop-BHnmo_mI.js";import"./composite-BHNDyYYF.js";import"./index-BR2AMsRx.js";import"./index-YiUJ_53T.js";import"./index-B1tVzWT5.js";import"./useEventCallback-d78tTu5e.js";import"./SkeletonBar-DxwKfUAL.js";import"./LoadingCell-CLJBA_Lo.js";import"./ColumnConfigDialog-BU50e-BB.js";import"./DraggableList-CqrYiCET.js";import"./search-D4-R-e8V.js";import"./Input-DOgtVus-.js";import"./useControlled-BCrFB87J.js";import"./Button-CF-FMXcU.js";import"./small-cross-DmpTk7iL.js";import"./ActionButton-87-LtZRT.js";import"./Checkbox-BvfE16Cx.js";import"./useValueChanged-oqHjTNH5.js";import"./CollapsiblePanel-QmgD0n_V.js";import"./MultiColumnSortDialog-8pTNJexI.js";import"./MenuTrigger-kT5ygFWd.js";import"./CompositeItem-C5ekTE5F.js";import"./ToolbarRootContext-C8q64USb.js";import"./getDisabledMountTransitionStyles-C3Z8Tksw.js";import"./getPseudoElementBounds-BZjeQhGg.js";import"./chevron-down-DsVdM_C_.js";import"./index-0ErCHoJl.js";import"./error-C2HVZj6I.js";import"./BaseCbacBanner-DF6mIH5M.js";import"./makeExternalStore-D4NtYiCX.js";import"./Tooltip-DL2AUsJC.js";import"./PopoverPopup-6cHsVbHZ.js";import"./debounce-tRqZT1XJ.js";import"./useOsdkClient-2K-Ebyul.js";import"./tick-DLXEDZLW.js";import"./DropdownField-BgPaKr2p.js";import"./isEqual-1IpeczsO.js";import"./withOsdkMetrics-LuraraC5.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
