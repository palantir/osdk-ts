import{f as b,j as a,r as i}from"./iframe-BqwXQKpA.js";import{O as u}from"./object-table-CuuBfL8J.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CPn3kR4s.js";import"./Table-DZ6bvBAp.js";import"./index-CYwWJaLD.js";import"./Dialog-Dp3EsUox.js";import"./cross-CedSfFXt.js";import"./svgIconContainer-r8u0NG4v.js";import"./useBaseUiId-DA7_UCFd.js";import"./InternalBackdrop-BKOhgmyu.js";import"./composite-Bp-cKdPO.js";import"./index-C72iR5_f.js";import"./index-jZeUOwty.js";import"./index-8nJMg384.js";import"./useEventCallback-Cv2hevdH.js";import"./SkeletonBar-ZCxSjfu7.js";import"./LoadingCell-DQMmvmgu.js";import"./ColumnConfigDialog-DCLkqrVc.js";import"./DraggableList-DqQhEMPD.js";import"./search-1XCyntXF.js";import"./Input-DTs9C08W.js";import"./useControlled-BcFAz7-u.js";import"./Button-DZqTJuVj.js";import"./small-cross-ClthSwzC.js";import"./ActionButton-BAZu2Krn.js";import"./Checkbox-D7v3Sdtf.js";import"./useValueChanged-CCMKETAO.js";import"./CollapsiblePanel-OwoGrBMO.js";import"./MultiColumnSortDialog-DtjY-7OY.js";import"./MenuTrigger-bU0oA_1O.js";import"./CompositeItem-DhjczCvx.js";import"./ToolbarRootContext-D7_GPkI_.js";import"./getDisabledMountTransitionStyles-BfGLnaja.js";import"./getPseudoElementBounds-DZfA0kMC.js";import"./chevron-down-Dhf3bz-4.js";import"./index-BmvdlYct.js";import"./error-CT5yNLGi.js";import"./BaseCbacBanner-BGfTp9D9.js";import"./makeExternalStore-CyyUqBSG.js";import"./Tooltip-Bk8ovUyB.js";import"./PopoverPopup-nFVTJuTn.js";import"./debounce-BqMuZJVi.js";import"./useOsdkClient-r71R63wR.js";import"./tick-BEDQHRbq.js";import"./DropdownField-QmoT8zOZ.js";import"./isEqual-CSC2yrxv.js";import"./withOsdkMetrics-p_rJ049m.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
