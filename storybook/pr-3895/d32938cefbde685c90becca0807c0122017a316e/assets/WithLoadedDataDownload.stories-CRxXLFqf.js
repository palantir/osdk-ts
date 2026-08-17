import{f as b,j as a,r as i}from"./iframe-UYCLthTQ.js";import{O as u}from"./object-table-DImQuH9S.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dz4E7M7Q.js";import"./Table-C2TWF7Cq.js";import"./index-D9-cjch2.js";import"./Dialog-DuoePkOB.js";import"./cross-BTIlSghM.js";import"./svgIconContainer-CSCo4VbW.js";import"./useBaseUiId-D_3Zahva.js";import"./InternalBackdrop-D-QyvJBW.js";import"./composite-CoPLS_PY.js";import"./index-MvHsJMCi.js";import"./index-CwqHoYwn.js";import"./index-DG3Dj0nZ.js";import"./useEventCallback-Dy795WfC.js";import"./SkeletonBar-Q06YcXYq.js";import"./LoadingCell-B2uS_rBv.js";import"./ColumnConfigDialog-xbncks_W.js";import"./DraggableList-5C_-7pLf.js";import"./search-O4v6z_KC.js";import"./Input-CEJvZIVl.js";import"./useControlled-BsiMxbV4.js";import"./Button-D_NPrqs2.js";import"./small-cross-DhT3GGuR.js";import"./ActionButton-bRkldw58.js";import"./Checkbox-qaZlBavv.js";import"./useValueChanged-TyLqj8UB.js";import"./CollapsiblePanel-C1s-WFkA.js";import"./MultiColumnSortDialog-CmD2Or6u.js";import"./MenuTrigger-DsIXfpa7.js";import"./CompositeItem-C4gD3gl2.js";import"./ToolbarRootContext-Dz0u6CZi.js";import"./getDisabledMountTransitionStyles-xim2gtNb.js";import"./getPseudoElementBounds-CgjC-nms.js";import"./chevron-down-CsxN-uGL.js";import"./index-DSgxSOB9.js";import"./error-Lq_gB-8h.js";import"./BaseCbacBanner-CT4YrDi4.js";import"./makeExternalStore-DTCTUDfU.js";import"./Tooltip-C6Y1hCeK.js";import"./PopoverPopup-hS14Tedr.js";import"./debounce-C6pOncFn.js";import"./useOsdkClient-DMikbfnK.js";import"./tick-BIgTeca4.js";import"./DropdownField-BWwVTe4_.js";import"./isEqual-F9ZP9YZl.js";import"./withOsdkMetrics-CbCyTjOI.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
