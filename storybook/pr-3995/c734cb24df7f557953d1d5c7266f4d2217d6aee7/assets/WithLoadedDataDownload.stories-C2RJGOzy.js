import{f as b,j as a,r as i}from"./iframe-Bx-FSmYs.js";import{O as u}from"./object-table-Cv1yp6hD.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DgijergL.js";import"./Table-Dbp6APwZ.js";import"./index-xwvc2Shv.js";import"./Dialog-TQR3WEGg.js";import"./cross-BOo5QBm9.js";import"./svgIconContainer-CBLTX1NK.js";import"./useBaseUiId-BGi2L2nz.js";import"./InternalBackdrop-B8hquDAO.js";import"./composite-mmpRjkxT.js";import"./index-CIkpzaA0.js";import"./index-Ye47VGO5.js";import"./index-xtICGEp3.js";import"./useEventCallback-BGLusK4B.js";import"./SkeletonBar-BFUHP2GD.js";import"./LoadingCell-vwI2MB3B.js";import"./ColumnConfigDialog-1hcgSYsk.js";import"./DraggableList-DsHzmqx-.js";import"./search-CdlZ7Qxj.js";import"./Input-Cv-wNC9i.js";import"./useControlled-DFOJ9xFP.js";import"./Button--MuiOxa3.js";import"./small-cross-C5HaUcq8.js";import"./ActionButton-D6Z09ARR.js";import"./Checkbox-DBH3W9y2.js";import"./useValueChanged-CaNUz0pS.js";import"./CollapsiblePanel-D8RgHLfO.js";import"./MultiColumnSortDialog-NOQ-MfWj.js";import"./MenuTrigger-D8gV95KI.js";import"./CompositeItem-CMA7rFte.js";import"./ToolbarRootContext-DpyqD2o0.js";import"./getDisabledMountTransitionStyles-CvhueaJp.js";import"./getPseudoElementBounds-tUYGl_H1.js";import"./chevron-down-Buw4ucuN.js";import"./index-BY0uRhrX.js";import"./error-DdvC7qFd.js";import"./BaseCbacBanner-Ch_sTin_.js";import"./makeExternalStore-CCy_wMev.js";import"./Tooltip-LQkFV94i.js";import"./PopoverPopup-CKS7Qwq2.js";import"./debounce-D3Ov_i6N.js";import"./useOsdkClient-4GcPKkIA.js";import"./tick-DWhWBN2e.js";import"./DropdownField-BNciL4Ne.js";import"./isEqual-ErNB6Z1g.js";import"./withOsdkMetrics-UuLHfX-P.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
