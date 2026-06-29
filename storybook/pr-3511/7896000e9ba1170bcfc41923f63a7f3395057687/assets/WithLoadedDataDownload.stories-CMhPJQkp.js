import{f as b,j as a,r as i}from"./iframe-DIdaxOLR.js";import{O as u}from"./object-table-CoNh2y9z.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Cv4ocMnk.js";import"./Table-DB_Pn8nL.js";import"./index-GvktmLB_.js";import"./Dialog-CFXiRv5w.js";import"./cross-BQQs13Fl.js";import"./svgIconContainer-DafxEzdg.js";import"./useBaseUiId-CcZqXfAF.js";import"./InternalBackdrop-C6fSx2lF.js";import"./composite-DHu_NJDJ.js";import"./index-ClaFPr-d.js";import"./index-D0nZjEcy.js";import"./index-BOfidV88.js";import"./useEventCallback-DvQzswKu.js";import"./SkeletonBar-CEfHE6Vg.js";import"./LoadingCell-CGPIxHw2.js";import"./ColumnConfigDialog-BAWOhrfg.js";import"./DraggableList-D42ewjP4.js";import"./search-ByfIaBTs.js";import"./Input-q_83M2dQ.js";import"./useControlled-BZuFqG0t.js";import"./Button-CiOiDF7a.js";import"./small-cross-Bo01nl37.js";import"./ActionButton-MrPg5-WH.js";import"./Checkbox-CGbZ49eF.js";import"./minus-BEFJu42F.js";import"./tick-gO7fBjm5.js";import"./useValueChanged-byV6LFGg.js";import"./caret-down-DYkX4qcH.js";import"./CollapsiblePanel-CiLlfFdA.js";import"./MultiColumnSortDialog-Cq_W0MDf.js";import"./MenuTrigger-CWidFxXi.js";import"./CompositeItem-C1xIO8ne.js";import"./ToolbarRootContext-B2mSYT1Q.js";import"./getDisabledMountTransitionStyles-DbnZLkOT.js";import"./getPseudoElementBounds-ZSRKgaeb.js";import"./chevron-down-Ci9EmqSi.js";import"./index-cjkh6zoM.js";import"./error-CNRMUlL9.js";import"./BaseCbacBanner-CvE-uEpn.js";import"./makeExternalStore-D3CLRkNX.js";import"./Tooltip-CeS-D6Fh.js";import"./PopoverPopup-Bqq3eFq9.js";import"./toNumber-BMQI3xcp.js";import"./useOsdkClient-DXI1lmzk.js";import"./DropdownField-BtLop8D7.js";import"./withOsdkMetrics-CynymlIC.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
