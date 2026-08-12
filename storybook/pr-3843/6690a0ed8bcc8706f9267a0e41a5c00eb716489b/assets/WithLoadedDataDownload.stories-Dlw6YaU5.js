import{f as b,j as a,r as i}from"./iframe-BrhV0PUK.js";import{O as u}from"./object-table-Z4cmqtj5.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DCSdbV6c.js";import"./Table-Bz5nJ9Ny.js";import"./index-CYSE8e1n.js";import"./Dialog-BZ4hSjWa.js";import"./cross-CsjK0wnB.js";import"./svgIconContainer-BaPcQU1s.js";import"./useBaseUiId-ar5Lsdrx.js";import"./InternalBackdrop-DO2ikwN0.js";import"./composite-Ds9WVBvD.js";import"./index-CF0KaaTI.js";import"./index-C_GiEd2c.js";import"./index-BYkfd9Z2.js";import"./useEventCallback-DS55l13S.js";import"./SkeletonBar-BWicLY9L.js";import"./LoadingCell-C3tlvEjv.js";import"./ColumnConfigDialog-Bg4tV_Z3.js";import"./DraggableList-TdP2A-Xp.js";import"./search-sMra4T2I.js";import"./Input-DMkARyQa.js";import"./useControlled-6A1CqUP6.js";import"./isEqual-BlP1cLoz.js";import"./isObject-CbbeAem9.js";import"./Button-D7_ffq5-.js";import"./ActionButton-U-WlZ3SG.js";import"./Checkbox-CMJOfmnq.js";import"./useValueChanged-Bnxfc6U1.js";import"./CollapsiblePanel-E470J13C.js";import"./MultiColumnSortDialog-DKnzOvLW.js";import"./MenuTrigger-WGUempeG.js";import"./CompositeItem-wFOdGMSc.js";import"./ToolbarRootContext-Db_LnSee.js";import"./getDisabledMountTransitionStyles-BlAu_peX.js";import"./getPseudoElementBounds-BZ7D0NBY.js";import"./chevron-down-Be_vCZl2.js";import"./index-BoJTlJdl.js";import"./error-ZZJFbw6u.js";import"./BaseCbacBanner-Bw9MfsJv.js";import"./makeExternalStore-DaqSmfhW.js";import"./Tooltip-6rvPTKBG.js";import"./PopoverPopup-Bzkl8xuj.js";import"./toNumber-DTQ1Vb4r.js";import"./useOsdkClient-BYy0RPqe.js";import"./tick-D16kJw8f.js";import"./DropdownField-DUfUJeW4.js";import"./withOsdkMetrics-dDB_t-WN.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
