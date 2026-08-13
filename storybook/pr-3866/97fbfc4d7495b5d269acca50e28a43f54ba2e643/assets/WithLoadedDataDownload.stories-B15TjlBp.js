import{f as b,j as a,r as i}from"./iframe-CYhZfT3_.js";import{O as u}from"./object-table-DCRgSSGC.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DuW2ZL9O.js";import"./Table-CXcwYSnZ.js";import"./index-Bsk-T9AU.js";import"./Dialog-Tc2_deC_.js";import"./cross-BJdfjTua.js";import"./svgIconContainer-BpN9N_JA.js";import"./useBaseUiId-DZSo-im9.js";import"./InternalBackdrop-DfBwjCGc.js";import"./composite-BPx_h-nk.js";import"./index-BKmbfABs.js";import"./index-BthbUhg9.js";import"./index-C-WRNz3E.js";import"./useEventCallback-CunyUO5F.js";import"./SkeletonBar-Dx8fHgLa.js";import"./LoadingCell-CZR7iFmp.js";import"./ColumnConfigDialog-D7ZisgWP.js";import"./DraggableList-BbR3WdJ2.js";import"./search-CgpKnjTm.js";import"./Input-kdaFhJQC.js";import"./useControlled-Cx72k2R7.js";import"./Button-B7yZuVYQ.js";import"./small-cross-C5sJSYZw.js";import"./ActionButton-DaZ8p3ZP.js";import"./Checkbox-DMnLA1rT.js";import"./useValueChanged-CUgB0lPb.js";import"./CollapsiblePanel-BejYuaCH.js";import"./MultiColumnSortDialog-DfskZs5F.js";import"./MenuTrigger-BWA5hG1d.js";import"./CompositeItem-CqWJQP_Z.js";import"./ToolbarRootContext-C__wJlPO.js";import"./getDisabledMountTransitionStyles-DV9NgReY.js";import"./getPseudoElementBounds-DeuZh7pR.js";import"./chevron-down-DkFotZE7.js";import"./index-BrJQ0JzU.js";import"./error-DWSHrAom.js";import"./BaseCbacBanner-DHWoPqU5.js";import"./makeExternalStore-BbuDQhcx.js";import"./Tooltip-DsiXQ8gP.js";import"./PopoverPopup-BuTn7Bh_.js";import"./toNumber-CuILyFQS.js";import"./useOsdkClient-BJBOx_dn.js";import"./tick-BVznHvW2.js";import"./DropdownField-C7hB0VQ9.js";import"./withOsdkMetrics-BU-eC2Yy.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
