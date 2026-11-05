import{f as b,j as a,r as i}from"./iframe-_xCtEPM4.js";import{O as u}from"./object-table-CX2vqi2p.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BvkLr_T8.js";import"./Table-Bpb1awiB.js";import"./index-BBF2nMyv.js";import"./Dialog-DAIDfao_.js";import"./cross-YJjC_kdM.js";import"./svgIconContainer-5YMx1lyC.js";import"./useBaseUiId-qq3Q_R-A.js";import"./InternalBackdrop-Dhb2Gme1.js";import"./composite-RG9aVNdC.js";import"./index-Ch2OG5I0.js";import"./index-oRHr0Ey_.js";import"./index-Czl8XPIs.js";import"./useEventCallback-jAZccFQT.js";import"./SkeletonBar-BWH5Ax4a.js";import"./LoadingCell-wQaM50Dl.js";import"./ColumnConfigDialog-BJ2OMihb.js";import"./DraggableList-W2XCxLEj.js";import"./search-EgEnIgJy.js";import"./Input-CbxbAG1i.js";import"./useControlled-BqnjfWyt.js";import"./Button-B5hG9nBO.js";import"./small-cross-CbC-3xN6.js";import"./ActionButton-C2zs3wiy.js";import"./Checkbox-BSNrs3M6.js";import"./useValueChanged-MMHfjh9x.js";import"./CollapsiblePanel-ZHKipLnY.js";import"./MultiColumnSortDialog-CTjvt41u.js";import"./MenuTrigger-BDeOM6rc.js";import"./CompositeItem-C0afETt6.js";import"./ToolbarRootContext-B_pkS0jH.js";import"./getDisabledMountTransitionStyles-DbKz4kaQ.js";import"./getPseudoElementBounds-FFlb83uV.js";import"./chevron-down-Dgi1lUDW.js";import"./index-Dp_8qpaL.js";import"./error-CPk-KRIB.js";import"./BaseCbacBanner-9tAX29-P.js";import"./makeExternalStore-DP7fUFlc.js";import"./Tooltip-CRHJdF88.js";import"./isObject-BjXVlsmF.js";import"./debounce-BLKiEPm1.js";import"./useOsdkClient-CsHMVj33.js";import"./tick-BpxRmUp6.js";import"./DropdownField-DARaJilg.js";import"./isEqual-BODadTDI.js";import"./_baseIsEqual-CQEQ0Dmr.js";import"./withOsdkMetrics-Sswq0Wu_.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
