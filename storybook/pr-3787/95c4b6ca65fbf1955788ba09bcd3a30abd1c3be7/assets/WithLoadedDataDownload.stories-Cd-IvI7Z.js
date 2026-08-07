import{f as b,j as a,r as i}from"./iframe-CsyA0Bys.js";import{O as u}from"./object-table-DKXoIvwf.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-KfZ568TX.js";import"./Table-CkkZtWXC.js";import"./index-BxyPqXWo.js";import"./Dialog-C4huEMMf.js";import"./cross-w7PsKmF1.js";import"./svgIconContainer-DaiSunt0.js";import"./useBaseUiId-DvYZt6lA.js";import"./InternalBackdrop-BGyyYpcl.js";import"./composite-BqX-duXl.js";import"./index-BgAZAXfa.js";import"./index--UUGPORc.js";import"./index-B6tCWI8M.js";import"./useEventCallback-C6V46umO.js";import"./SkeletonBar-DUoV5IXh.js";import"./LoadingCell-BSzubWHe.js";import"./ColumnConfigDialog-D1ScqPPe.js";import"./DraggableList-BzSrNu1D.js";import"./search-45t1HcTK.js";import"./Input-CRzWdgdg.js";import"./useControlled-Bo2Cmprh.js";import"./isEqual-Cj7osBnf.js";import"./isObject-CKDvM3HJ.js";import"./Button-6-1YrzTD.js";import"./ActionButton-EYuh1PNc.js";import"./Checkbox-ygCyTm5_.js";import"./useValueChanged-BRLlAh0p.js";import"./CollapsiblePanel-DWFI6paa.js";import"./MultiColumnSortDialog-BSlmLUh3.js";import"./MenuTrigger-DrHL6axm.js";import"./CompositeItem-CL1_i0UZ.js";import"./ToolbarRootContext-zz45WkNS.js";import"./getDisabledMountTransitionStyles-CO4DEx-A.js";import"./getPseudoElementBounds-C5GdHQ1I.js";import"./chevron-down-Dfm6xDjd.js";import"./index-BnVBTYNX.js";import"./error-B7vEDe1J.js";import"./BaseCbacBanner-CCr22KxZ.js";import"./makeExternalStore-CjIFX2gB.js";import"./Tooltip-DakP11QU.js";import"./PopoverPopup-g6LpsQ1J.js";import"./toNumber-CQrFFewn.js";import"./useOsdkClient-Bfd4ZluK.js";import"./tick-CY-3TnK1.js";import"./DropdownField-D3h01OJB.js";import"./withOsdkMetrics-CoF3qvtY.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
