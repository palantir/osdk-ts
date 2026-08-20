import{f as b,j as a,r as i}from"./iframe-C5mCK2PO.js";import{O as u}from"./object-table-Csnyr5o0.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B71-F3-E.js";import"./Table-CAoCD-r3.js";import"./index-x2FMdUXO.js";import"./Dialog-BUKOY0Bm.js";import"./cross-C2KqS3Pb.js";import"./svgIconContainer-jCGuJEaw.js";import"./useBaseUiId-CRwAptA4.js";import"./InternalBackdrop-CiAJU9Y9.js";import"./composite-DhwPvOlp.js";import"./index-CXO1mTHj.js";import"./index-DqURmoPO.js";import"./index-DFhuUbBY.js";import"./useEventCallback-DyFcPFjY.js";import"./SkeletonBar-PJRGOQI5.js";import"./LoadingCell-CQE0kFzu.js";import"./ColumnConfigDialog-DC8fdFoU.js";import"./DraggableList-C6E2mjha.js";import"./search-QRaPLFIx.js";import"./Input-ClKT9i6x.js";import"./useControlled-B76SscLe.js";import"./Button-QzVHZwrk.js";import"./small-cross-CFmTQ2DK.js";import"./ActionButton-BXbp-XTu.js";import"./Checkbox-Byyu80XK.js";import"./useValueChanged-a0LJAptk.js";import"./CollapsiblePanel-CvCqtl8y.js";import"./MultiColumnSortDialog-9GFPfOFK.js";import"./MenuTrigger-CDg2Tml1.js";import"./CompositeItem-CcgiUeN1.js";import"./ToolbarRootContext-Bjoxw1BG.js";import"./getDisabledMountTransitionStyles-Bgm3-BfC.js";import"./getPseudoElementBounds-BP73-JGK.js";import"./chevron-down-DkRHA-R2.js";import"./index-BYdvbw5G.js";import"./error-9wJAHEot.js";import"./BaseCbacBanner-CCanzxJR.js";import"./makeExternalStore-Dpr3oewV.js";import"./Tooltip-JfIAa3Wv.js";import"./PopoverPopup-C9KSsLOP.js";import"./debounce-CypeZyyS.js";import"./useOsdkClient-BLLliW7s.js";import"./tick-uKXRfO2h.js";import"./DropdownField-B_zeyfsK.js";import"./isEqual-DmC_VlXk.js";import"./withOsdkMetrics-Cx5_Zqh1.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
