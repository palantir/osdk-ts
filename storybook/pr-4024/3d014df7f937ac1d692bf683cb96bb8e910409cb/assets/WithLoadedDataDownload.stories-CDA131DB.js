import{f as b,j as a,r as i}from"./iframe-DsGELu4T.js";import{O as u}from"./object-table-CxvCywaa.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-XA-VDU9h.js";import"./Table-CPTYGU3L.js";import"./index-FibZOxqI.js";import"./Dialog-BL83Ywq7.js";import"./cross-oXbqlTg1.js";import"./svgIconContainer-CnDXZd3l.js";import"./useBaseUiId-Bgw27mqh.js";import"./InternalBackdrop-9Qoq3oRQ.js";import"./composite-CRl6169X.js";import"./index-BAMqZ9uk.js";import"./index-D5CaD6SI.js";import"./index-Dn7r5zta.js";import"./useEventCallback-EtST8PvD.js";import"./SkeletonBar-CkVB7Otp.js";import"./LoadingCell-CFQRgKPS.js";import"./ColumnConfigDialog-CJZYfrc3.js";import"./DraggableList-3tZbeJKF.js";import"./search-C-C2z-My.js";import"./Input-BiHcxxvv.js";import"./useControlled-hcbn-QvT.js";import"./Button-CoSq253i.js";import"./small-cross-L2Eps0bY.js";import"./ActionButton-c8pCj5XE.js";import"./Checkbox-CJpR6IEJ.js";import"./useValueChanged-CH7RDj0k.js";import"./CollapsiblePanel-B6Y0ESYf.js";import"./MultiColumnSortDialog-Bksh3D7y.js";import"./MenuTrigger-DBH_6DyT.js";import"./CompositeItem-0ZiilmCA.js";import"./ToolbarRootContext-rEV65r5F.js";import"./getDisabledMountTransitionStyles-iYmZWD6l.js";import"./getPseudoElementBounds-B7n1t-QY.js";import"./chevron-down-BZA6QViL.js";import"./index-Dl4r3eFQ.js";import"./error-CKgv5Cwb.js";import"./BaseCbacBanner-BVuDduVm.js";import"./makeExternalStore-B1xZJ4O7.js";import"./Tooltip-Cv_DgBwb.js";import"./PopoverPopup-B8yGkdSD.js";import"./debounce-CTNx07rU.js";import"./useOsdkClient-BHuTNu7Y.js";import"./tick-C3wj9HAZ.js";import"./DropdownField-Bar5e3Pn.js";import"./isEqual-CCdnBCja.js";import"./withOsdkMetrics-Q1C_QdTj.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
