import{f as b,j as a,r as i}from"./iframe-CZ6kIwVs.js";import{O as u}from"./object-table-DUTK7ErW.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-7ZMJfvLO.js";import"./Table-ClJWP7oZ.js";import"./index-DI8fXOjY.js";import"./Dialog-C2Fh148t.js";import"./cross-D1S37vKD.js";import"./svgIconContainer-DnYA5NkM.js";import"./useBaseUiId-C8GyANar.js";import"./InternalBackdrop-CG-AIdNq.js";import"./composite-ZguSvKQK.js";import"./index-D-O5Mu3x.js";import"./index-CeIvWQQV.js";import"./index-Sa9k0vw4.js";import"./useEventCallback-AXc9OhMC.js";import"./SkeletonBar-DirsOHoC.js";import"./LoadingCell-DWGeO2Vc.js";import"./ColumnConfigDialog-z8uEyuDJ.js";import"./DraggableList-DY7O392e.js";import"./search-BEog5Q0_.js";import"./Input-BNiQQ7Yq.js";import"./useControlled-DYYKJrdL.js";import"./Button-D2YNSXqx.js";import"./small-cross-BRCq_Kda.js";import"./ActionButton-CCbXIhyD.js";import"./Checkbox-vpsJYbE_.js";import"./useValueChanged-BFS0ZGwF.js";import"./CollapsiblePanel-lqHD1Tly.js";import"./MultiColumnSortDialog-CwX6ASC_.js";import"./MenuTrigger-DahAPyz2.js";import"./CompositeItem-C5Mndviw.js";import"./ToolbarRootContext-DwX-_42A.js";import"./getDisabledMountTransitionStyles-bhu6Mdmh.js";import"./getPseudoElementBounds-BCP_KMb6.js";import"./chevron-down-CfJcExH9.js";import"./index-CRcSFsCM.js";import"./error-Be3f2oAD.js";import"./BaseCbacBanner-DxnCPOHJ.js";import"./makeExternalStore-CcH4sGc5.js";import"./Tooltip-CWcrOYKW.js";import"./PopoverPopup-5xXF3ZfI.js";import"./debounce-ZXxDT22C.js";import"./useOsdkClient-D_Xa4Rm7.js";import"./tick-ClDAkRZz.js";import"./DropdownField-CWvFDQGS.js";import"./isEqual-B__f9IMX.js";import"./withOsdkMetrics-CJa04cyG.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
