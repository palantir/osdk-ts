import{f as b,j as a,r as i}from"./iframe-BSBY3PjJ.js";import{O as u}from"./object-table-by3GvYNO.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DpSdlFS8.js";import"./Table-DyL3FyVA.js";import"./index-DK106w7q.js";import"./Dialog-D-VCZ-Xj.js";import"./cross-ChnkwhQq.js";import"./svgIconContainer-CVR7Tkh3.js";import"./useBaseUiId-BWCrzuEr.js";import"./InternalBackdrop-BAAE8sPY.js";import"./composite-iYZqsZLy.js";import"./index-DVvqS1th.js";import"./index-CKbXy3Dj.js";import"./index-tq3mLcAa.js";import"./useEventCallback-Cz9YIY33.js";import"./SkeletonBar-C6FAa51I.js";import"./LoadingCell-B1hHHivN.js";import"./ColumnConfigDialog-xZIDScDz.js";import"./DraggableList-BayLOggI.js";import"./search-D4Uipsbf.js";import"./Input-DLFn8nXq.js";import"./useControlled-Ki3OxTZR.js";import"./Button-DyRQe702.js";import"./small-cross-DYeQuCck.js";import"./ActionButton-C4rmndSw.js";import"./Checkbox-C0f3x1KO.js";import"./useValueChanged-srC6xFPd.js";import"./CollapsiblePanel-BIFNkFs4.js";import"./MultiColumnSortDialog-DhGJANiF.js";import"./MenuTrigger-C6BZNbBa.js";import"./CompositeItem-B9uKrben.js";import"./ToolbarRootContext-5qjYeV0P.js";import"./getDisabledMountTransitionStyles-CnzqGvPD.js";import"./getPseudoElementBounds-B4FwyunF.js";import"./chevron-down-BHUr8iy5.js";import"./index-YAOpnUoq.js";import"./error-iycxY9-l.js";import"./BaseCbacBanner-CPgeKTE0.js";import"./makeExternalStore-DU_ddruH.js";import"./Tooltip-BAR8Dcp7.js";import"./PopoverPopup-B_rMzGeU.js";import"./debounce-0JtHt6-L.js";import"./useOsdkClient-COaUlzkH.js";import"./tick-CwHYlOtH.js";import"./DropdownField-DL8lskl1.js";import"./isEqual-C70Oa3sU.js";import"./withOsdkMetrics-C3TRqwn-.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
