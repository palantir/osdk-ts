import{f as b,j as a,r as i}from"./iframe-DFW0mMZ1.js";import{O as u}from"./object-table-R7dnPyqi.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Qawhc3UJ.js";import"./Table-DGsPlPM-.js";import"./index-o6yCYR6Q.js";import"./Dialog-C851Z3bl.js";import"./cross-BkPI5BMI.js";import"./svgIconContainer-VOBSJ15n.js";import"./useBaseUiId-CXLWSjxr.js";import"./InternalBackdrop-CuZzUJfU.js";import"./composite-C9QpehYt.js";import"./index-Ntq27F76.js";import"./index-CJTfQw-N.js";import"./index-COaiIhBP.js";import"./useEventCallback-CNw5BQ-r.js";import"./SkeletonBar-DShy_z54.js";import"./LoadingCell-gwaRAxxy.js";import"./ColumnConfigDialog-BSY2ydJx.js";import"./DraggableList-DklvKyYU.js";import"./search-B2NWGFRm.js";import"./Input-Bw8rrVtq.js";import"./useControlled-CgydVt6m.js";import"./Button-6FT0QBh6.js";import"./small-cross-B_2v8d0f.js";import"./ActionButton-v9LYexkg.js";import"./Checkbox-vEixf8ZR.js";import"./useValueChanged-Dudyqn1D.js";import"./CollapsiblePanel-qGqB2tFy.js";import"./MultiColumnSortDialog-DwG_JyW0.js";import"./MenuTrigger-BxsGm8l-.js";import"./CompositeItem-CKYwdTed.js";import"./ToolbarRootContext-BwtTYckl.js";import"./getDisabledMountTransitionStyles-C9arfdOC.js";import"./getPseudoElementBounds-Ds-CW1SQ.js";import"./chevron-down-s8opNKgU.js";import"./index-B7I1fXI4.js";import"./error-B3Dge2Yv.js";import"./BaseCbacBanner-Bo49Hg5y.js";import"./makeExternalStore-DQcTHSYH.js";import"./Tooltip-BX7Zc18a.js";import"./PopoverPopup-CzvtrhU_.js";import"./debounce-OIwexpuG.js";import"./useOsdkClient-DekGKRLB.js";import"./tick-DsrTm1u4.js";import"./DropdownField-UijvkKFV.js";import"./isEqual-DYRLDjBa.js";import"./withOsdkMetrics-CjCOoV_f.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
