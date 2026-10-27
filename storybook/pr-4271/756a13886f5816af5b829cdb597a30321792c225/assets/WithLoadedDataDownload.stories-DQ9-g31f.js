import{f as b,j as a,r as i}from"./iframe-D150H4vz.js";import{O as u}from"./object-table-DP4wjFEO.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BarckMkV.js";import"./Table-gGJNwpbp.js";import"./index-cVrSJLbz.js";import"./Dialog-GeD2sG_1.js";import"./cross-6mUh6O0a.js";import"./svgIconContainer-VUxlTV2E.js";import"./useBaseUiId-BEwnCbr0.js";import"./InternalBackdrop-D-pm-OPY.js";import"./composite-B_0CI6wq.js";import"./index-Cy-heBPu.js";import"./index-N3sDVMXC.js";import"./index-B1h1Ffvc.js";import"./useEventCallback-CBWL1hY-.js";import"./SkeletonBar-CvwasmzM.js";import"./LoadingCell-CV767y0j.js";import"./ColumnConfigDialog-BVWNFeUZ.js";import"./DraggableList-Bzc3U9HD.js";import"./search-B_D2n4ON.js";import"./Input-D0LXp2w8.js";import"./useControlled-lhlupqEn.js";import"./Button-wEOF9kbC.js";import"./small-cross-OFGcSSBP.js";import"./ActionButton-YzMno_H9.js";import"./Checkbox-CXCLecrd.js";import"./useValueChanged-CN5YLtWf.js";import"./CollapsiblePanel-CA9S5PKs.js";import"./MultiColumnSortDialog-BFMBTEvA.js";import"./MenuTrigger-CxpIKNcn.js";import"./CompositeItem-iPCNYUwO.js";import"./ToolbarRootContext-G9KEnSun.js";import"./getDisabledMountTransitionStyles-5KUPlXNs.js";import"./getPseudoElementBounds-CVhzJWTU.js";import"./chevron-down-BtdYGIbe.js";import"./index-CwtLN-AV.js";import"./error-EjSx_YOh.js";import"./BaseCbacBanner-DH3oT3a9.js";import"./makeExternalStore-BIWQlVyv.js";import"./Tooltip-BMJ7R0dC.js";import"./PopoverPopup-B10GF7su.js";import"./debounce-_Huulw1P.js";import"./useOsdkClient-Dsa6FFc4.js";import"./tick-CYEAeUON.js";import"./DropdownField-StYPCDOl.js";import"./isEqual-Cu2b5RlF.js";import"./withOsdkMetrics-BMpR6FdW.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
