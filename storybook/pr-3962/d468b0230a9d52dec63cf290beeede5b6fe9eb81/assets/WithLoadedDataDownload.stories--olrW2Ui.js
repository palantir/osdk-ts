import{f as b,j as a,r as i}from"./iframe-Cd3dv8cT.js";import{O as u}from"./object-table-DoNYRMGS.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BvamZNkq.js";import"./Table-BM2gsIQa.js";import"./index-DLxjxb8e.js";import"./Dialog-CmzL0RqW.js";import"./cross-Dn7ydKbM.js";import"./svgIconContainer-D-NoPjGJ.js";import"./useBaseUiId-BaOg2aY4.js";import"./InternalBackdrop-DvwCf0RH.js";import"./composite-CPkJv0Aj.js";import"./index-BhTIZT2w.js";import"./index-BxHsjHcu.js";import"./index-AY8LUDDe.js";import"./useEventCallback-C5kiz3QI.js";import"./SkeletonBar-CCoP-Q6v.js";import"./LoadingCell-Dz56vO0r.js";import"./ColumnConfigDialog-QrkIxj8p.js";import"./DraggableList-CH9K1l70.js";import"./search-DEQVu4Kn.js";import"./Input-BqALFs3C.js";import"./useControlled-qyMNC85h.js";import"./Button-BFlN4NNG.js";import"./small-cross-CFFZ3VmM.js";import"./ActionButton-DsAz2zkl.js";import"./Checkbox-B5AQpCuS.js";import"./useValueChanged-DO67l_ai.js";import"./CollapsiblePanel-2YcASTXk.js";import"./MultiColumnSortDialog-D9ppB96C.js";import"./MenuTrigger-DFOv8qBT.js";import"./CompositeItem-DmsI5HvC.js";import"./ToolbarRootContext-u0Mal7kP.js";import"./getDisabledMountTransitionStyles-Nf_x6EnO.js";import"./getPseudoElementBounds-rdicW1-a.js";import"./chevron-down-DhFVxk1n.js";import"./index-DSi4pYyx.js";import"./error-Dg3cLmkh.js";import"./BaseCbacBanner-DuV--lA_.js";import"./makeExternalStore-D4XV0ltY.js";import"./Tooltip-mZxcWJrw.js";import"./PopoverPopup-IaRSd_y_.js";import"./debounce-BezAcue0.js";import"./useOsdkClient-Cq-ObEKw.js";import"./tick-dgL1mLrc.js";import"./DropdownField-DJxZg7nO.js";import"./isEqual-DaKR_DAZ.js";import"./withOsdkMetrics-B9V-TBGu.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
