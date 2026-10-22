import{f as b,j as a,r as i}from"./iframe-DmoMQzpD.js";import{O as u}from"./object-table-c_BNjK3P.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-0xn3Nkw5.js";import"./Table-B64kdof3.js";import"./index-DPXokUby.js";import"./Dialog-VOeWPfhL.js";import"./cross-C9RHIJgp.js";import"./svgIconContainer-C0jxJ_1G.js";import"./useBaseUiId-BxnyJA2P.js";import"./InternalBackdrop-BsBLBzYe.js";import"./composite-RG7e36sI.js";import"./index-DUz5HI9G.js";import"./index-BXiJ_67x.js";import"./index-DmGCqnm3.js";import"./useEventCallback-FACcLVn-.js";import"./SkeletonBar-BhdoBlry.js";import"./LoadingCell-IS5e8M_0.js";import"./ColumnConfigDialog-DG9B0wa6.js";import"./DraggableList-BfGrODX6.js";import"./search-g9MHYdyd.js";import"./Input-CN7AavNu.js";import"./useControlled-C5PyKbe1.js";import"./Button-DawQ6LNI.js";import"./small-cross-B5QHLenC.js";import"./ActionButton-aUTPXbO1.js";import"./Checkbox-eJcqNJpv.js";import"./useValueChanged-BZ44jBcl.js";import"./CollapsiblePanel-C280Av3f.js";import"./MultiColumnSortDialog-1MmNuSWr.js";import"./MenuTrigger-DLJdCz9v.js";import"./CompositeItem-Drfjdgjy.js";import"./ToolbarRootContext-DyHioDsT.js";import"./getDisabledMountTransitionStyles-CJwnQjun.js";import"./getPseudoElementBounds-CFDjab3s.js";import"./chevron-down-vzowt2v5.js";import"./index-BM7Z1UL0.js";import"./error-CSsiItLy.js";import"./BaseCbacBanner-qjoLbGN0.js";import"./makeExternalStore-nzxHrE9v.js";import"./Tooltip-CjVXqByo.js";import"./PopoverPopup-7uRjXaTb.js";import"./debounce-CM9X_VMN.js";import"./useOsdkClient-ZQ1sGaOD.js";import"./tick-B2FvzgWn.js";import"./DropdownField-Cz44kW52.js";import"./isEqual-Df6IwIr9.js";import"./withOsdkMetrics-DGBLah1x.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
