import{f as b,j as a,r as i}from"./iframe-CK5D4Vrc.js";import{O as u}from"./object-table-odZsr0rd.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper--rfFAAg9.js";import"./Table-B6H8EmOv.js";import"./index-DTCKW3FC.js";import"./Dialog-MAq9T2A5.js";import"./cross-DqRqsA-Z.js";import"./svgIconContainer-B-9rvjfq.js";import"./useBaseUiId-ChiwJHU0.js";import"./InternalBackdrop-Dbr5rYW1.js";import"./composite-EY5o54z0.js";import"./index-B0VFCsPS.js";import"./index-Bf8FWlfU.js";import"./index-vAIMW8Pw.js";import"./useEventCallback-CDnpJnS0.js";import"./SkeletonBar-DauQo2dk.js";import"./LoadingCell-CgV3bQ4z.js";import"./ColumnConfigDialog-izBtKiAL.js";import"./DraggableList-CanQdJdW.js";import"./search-CQswBcjf.js";import"./Input-BkbLF__D.js";import"./useControlled-EjNIu-gh.js";import"./Button-QI0ogqOo.js";import"./small-cross-CvPfbhzU.js";import"./ActionButton-CMbHUj5v.js";import"./Checkbox-BHP2yOKQ.js";import"./useValueChanged-Bmru0ySn.js";import"./CollapsiblePanel-B9cQatbS.js";import"./MultiColumnSortDialog-BFioXfJ3.js";import"./MenuTrigger-BHa9H6Qv.js";import"./CompositeItem-GR3Crn-r.js";import"./ToolbarRootContext-fQ8fBJNz.js";import"./getDisabledMountTransitionStyles-CKHIKkcN.js";import"./getPseudoElementBounds-D8b8g-_9.js";import"./chevron-down-Bfelo19f.js";import"./index-BRqooFTa.js";import"./error-BTGDM8SC.js";import"./BaseCbacBanner-Ca5YQ56m.js";import"./makeExternalStore-BGHIEiJx.js";import"./Tooltip-L8rEht9z.js";import"./PopoverPopup-Wqv_QtzO.js";import"./debounce-BESlaVbz.js";import"./useOsdkClient-DQg5y7FA.js";import"./tick-Dc4uWMLG.js";import"./DropdownField-C2vkPRGk.js";import"./isEqual-N3gXTKiL.js";import"./withOsdkMetrics-BNMaUBqJ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
