import{f as b,j as a,r as i}from"./iframe-DnMZhogX.js";import{O as u}from"./object-table-DKuYigWh.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D4NPUWDF.js";import"./Table-Du0QxviT.js";import"./index-C6vUCj3I.js";import"./Dialog-Coo3NzOA.js";import"./cross-B0Br0EiR.js";import"./svgIconContainer-BVAzBycF.js";import"./useBaseUiId-BQvmXl_6.js";import"./InternalBackdrop-bRjvxNXQ.js";import"./composite-C04hi1zy.js";import"./index-t2KVREOA.js";import"./index-CkhjCsS5.js";import"./index-C1Yu6uYj.js";import"./useEventCallback-CPVQW2c6.js";import"./SkeletonBar-BWUs5aOa.js";import"./LoadingCell-kkMdfEaE.js";import"./ColumnConfigDialog-DJri1zxJ.js";import"./DraggableList-vlwg7DuV.js";import"./search-Dq0e8pTI.js";import"./Input-LnfuE3I2.js";import"./useControlled-B2iKOn4D.js";import"./Button-DNd_NMyi.js";import"./small-cross-B3kXkk-5.js";import"./ActionButton-uko6JLNE.js";import"./Checkbox-sZn8KbS5.js";import"./useValueChanged-BNYopCoC.js";import"./CollapsiblePanel-CJMTMEOR.js";import"./MultiColumnSortDialog-DLt0iXml.js";import"./MenuTrigger-DshnL46j.js";import"./CompositeItem-r96J_nIs.js";import"./ToolbarRootContext-BocpL34Y.js";import"./getDisabledMountTransitionStyles-NTzjgmpy.js";import"./getPseudoElementBounds-2ZWhj0gz.js";import"./chevron-down-q0wNWe4O.js";import"./index-3k87IEg2.js";import"./error-DSDfnydb.js";import"./BaseCbacBanner-BqZmgPUx.js";import"./makeExternalStore-EsKTsg8A.js";import"./Tooltip-2H7h1LjR.js";import"./PopoverPopup-XYXFggLJ.js";import"./debounce-DRL1bJAs.js";import"./useOsdkClient-BnFs3xMf.js";import"./tick-BfcL4nFt.js";import"./DropdownField-mRbtMN2b.js";import"./isEqual-DBpRRl3J.js";import"./withOsdkMetrics-DSRao68Z.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
