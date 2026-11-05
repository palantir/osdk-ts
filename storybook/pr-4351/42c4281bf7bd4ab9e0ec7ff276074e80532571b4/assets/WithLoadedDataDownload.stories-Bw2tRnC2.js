import{f as b,j as a,r as i}from"./iframe-5l1aTQWB.js";import{O as u}from"./object-table-DCJbpV5Z.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CV54w-MR.js";import"./Table-C0wRTyVx.js";import"./index-CabVKWfS.js";import"./Dialog-CtVtzfGi.js";import"./cross-DVFwGI58.js";import"./svgIconContainer-DUWwpavS.js";import"./useBaseUiId-D2qSGviR.js";import"./InternalBackdrop-DeDePDLT.js";import"./composite-BN-nzUC2.js";import"./index-CWUPxEVH.js";import"./index-U5dtIGUV.js";import"./index-BEY7C58E.js";import"./useEventCallback-j88OK98j.js";import"./SkeletonBar-DiikPYcf.js";import"./LoadingCell-BFYv-WM9.js";import"./ColumnConfigDialog-Ck03PSW2.js";import"./DraggableList-Dkk5QDNO.js";import"./search-ocH4sH9r.js";import"./Input-DVZngs_7.js";import"./useControlled-Dv35mSy4.js";import"./Button-BbI-ZrrT.js";import"./small-cross-BXD20tqW.js";import"./ActionButton-CVgbfgT7.js";import"./Checkbox-DE6eRYi2.js";import"./useValueChanged-BrsMGCOc.js";import"./CollapsiblePanel-DnkZmCML.js";import"./MultiColumnSortDialog-DYr3NZ_x.js";import"./MenuTrigger-C6uan-J9.js";import"./CompositeItem-CiQq9b_9.js";import"./ToolbarRootContext-DpNaqsW8.js";import"./getDisabledMountTransitionStyles-Ci8kZ5Aj.js";import"./getPseudoElementBounds-By38X9zr.js";import"./chevron-down-C-oTZ5aG.js";import"./index-BKm5H3zL.js";import"./error-Cor_ktfQ.js";import"./BaseCbacBanner-pfccwWJ8.js";import"./makeExternalStore-Bp08F5QN.js";import"./Tooltip-CMn9P59Q.js";import"./PopoverPopup-qOi5AuS_.js";import"./debounce-BirimW28.js";import"./useOsdkClient-DcsBDEeF.js";import"./tick-PuqFX_ts.js";import"./DropdownField-B8Mkz462.js";import"./isEqual-BijnOwND.js";import"./withOsdkMetrics-B5w28mdE.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
