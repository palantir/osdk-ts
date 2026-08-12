import{f as b,j as a,r as i}from"./iframe-CaOZVcM8.js";import{O as u}from"./object-table-8ZGrdFEw.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D0asL9_c.js";import"./Table-BROqB3UG.js";import"./index-Cq1u-AUb.js";import"./Dialog-Et_k2l9v.js";import"./cross-Del0U5pN.js";import"./svgIconContainer-LtpSeem8.js";import"./useBaseUiId-C3rnqgEW.js";import"./InternalBackdrop-D45PVC85.js";import"./composite-UvHTpcfI.js";import"./index-CcwMdyCi.js";import"./index-B6bqOoQj.js";import"./index-Dw2jEAhz.js";import"./useEventCallback-B6Zwe-wE.js";import"./SkeletonBar-Bu3sbZh3.js";import"./LoadingCell-BwEHRORR.js";import"./ColumnConfigDialog-B1PAVXTv.js";import"./DraggableList-Cd4sq2Wi.js";import"./search-Dh7gn4ku.js";import"./Input-C37Wm2cQ.js";import"./useControlled-D0eeOXz6.js";import"./isEqual-QzLyq6rt.js";import"./isObject-Bxuk0Ej2.js";import"./Button-DfAjosPZ.js";import"./ActionButton-BZ8dpD4a.js";import"./Checkbox-CE2DnI7r.js";import"./useValueChanged-DqofQ2rH.js";import"./CollapsiblePanel-D7-TBzeE.js";import"./MultiColumnSortDialog-DvBCFSAX.js";import"./MenuTrigger-CcWrsBQb.js";import"./CompositeItem-wSB1_NEO.js";import"./ToolbarRootContext-DPhLluaF.js";import"./getDisabledMountTransitionStyles-BkVn_us3.js";import"./getPseudoElementBounds-CGbb6tSs.js";import"./chevron-down-Dg4eiZWX.js";import"./index-C8V7bNNg.js";import"./error-bQoKO1DQ.js";import"./BaseCbacBanner-YcCJKmaz.js";import"./makeExternalStore-B3ffe9bA.js";import"./Tooltip-BOZwpeu7.js";import"./PopoverPopup-D6MLvU0e.js";import"./toNumber-hPX3fc-Q.js";import"./useOsdkClient-gsXgeqXO.js";import"./tick-BiliVS_P.js";import"./DropdownField-ssb7GK8d.js";import"./withOsdkMetrics-D3Xg8FtT.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
