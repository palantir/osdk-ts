import{f as b,j as a,r as i}from"./iframe-DPayKrhQ.js";import{O as u}from"./object-table-B9Cot5_e.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-qQf5mZcY.js";import"./Table-DpNUkHqO.js";import"./index-DWKYvG9V.js";import"./Dialog-DLJV3Let.js";import"./cross-C2IePcD5.js";import"./svgIconContainer-ENB8v_KB.js";import"./useBaseUiId-DNI8EcAR.js";import"./InternalBackdrop-_-1pH0uj.js";import"./composite-Cke6VlZT.js";import"./index-Xjpnzzz2.js";import"./index-BrP54DIT.js";import"./index-BDcq1o5X.js";import"./useEventCallback-B4jrKNvR.js";import"./SkeletonBar-BauOl873.js";import"./LoadingCell-B1RE063u.js";import"./ColumnConfigDialog-D8Gevhnq.js";import"./DraggableList-DdgzPp3Y.js";import"./search-DgJNyoZT.js";import"./Input-CNbFsRtW.js";import"./useControlled-SvDubTm2.js";import"./isEqual-C5d_5--M.js";import"./isObject-DL2rK0zG.js";import"./Button-CX965R45.js";import"./ActionButton-Dqf4PoFn.js";import"./Checkbox-DR9VQhFH.js";import"./useValueChanged-XcJizfeE.js";import"./CollapsiblePanel-0zIu0Nif.js";import"./MultiColumnSortDialog-CErS638w.js";import"./MenuTrigger-CL62zHVu.js";import"./CompositeItem-Bb4siO63.js";import"./ToolbarRootContext-2Pb0-xcD.js";import"./getDisabledMountTransitionStyles-CUQ_krqB.js";import"./getPseudoElementBounds-DMPlx4hK.js";import"./chevron-down-oMnKKoWq.js";import"./index-CUEs57Ga.js";import"./error-CXgnUpf7.js";import"./BaseCbacBanner-C-zOFOZW.js";import"./makeExternalStore-DNQ6k_aA.js";import"./Tooltip-B1kqF3D7.js";import"./PopoverPopup-DW1jv2JB.js";import"./toNumber-CJKhmsSm.js";import"./useOsdkClient-1yazevnu.js";import"./tick-Vlw-qjz7.js";import"./DropdownField-C1AjTguU.js";import"./withOsdkMetrics-BEB15fyq.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
