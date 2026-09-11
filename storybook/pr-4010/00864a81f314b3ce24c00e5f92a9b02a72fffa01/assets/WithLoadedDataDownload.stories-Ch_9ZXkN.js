import{f as b,j as a,r as i}from"./iframe-CtRHQTYJ.js";import{O as u}from"./object-table-Co1YG3YU.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-fhfz86w0.js";import"./Table-DrC-r9x3.js";import"./index-riCZd5Ar.js";import"./Dialog-BgLm7Z_4.js";import"./cross-DEABcOeY.js";import"./svgIconContainer-CnTR-ACc.js";import"./useBaseUiId-qkDK2XTS.js";import"./InternalBackdrop-CWaOdvE-.js";import"./composite-DuXOIKmO.js";import"./index-Fr7QusuU.js";import"./index-pqaS_ebL.js";import"./index-yCAZ2DAg.js";import"./useEventCallback-BIhF7inU.js";import"./SkeletonBar-DvxbY3ok.js";import"./LoadingCell-Dj6cXJnK.js";import"./ColumnConfigDialog-Biif9j1h.js";import"./DraggableList-B4zxhLs0.js";import"./search-BsaMQbW0.js";import"./Input-Civ7Ghzz.js";import"./useControlled-tah5fGcR.js";import"./Button-BqinPFLf.js";import"./small-cross-BpXb6yiG.js";import"./ActionButton-C_VR3Nw4.js";import"./Checkbox-DfxlNGGM.js";import"./useValueChanged-CKgwQ1DR.js";import"./CollapsiblePanel-WOW1j6DY.js";import"./MultiColumnSortDialog-Bi594TZ3.js";import"./MenuTrigger-B5CIkydJ.js";import"./CompositeItem-C6o3RrT-.js";import"./ToolbarRootContext-BObKP8Zm.js";import"./getDisabledMountTransitionStyles-fGFKvTKF.js";import"./getPseudoElementBounds-reWLTMCw.js";import"./chevron-down-DdzT4R3d.js";import"./index-BEVcgcQr.js";import"./error-7X7jIqwN.js";import"./BaseCbacBanner-JTAmQZoQ.js";import"./makeExternalStore-C5B573Wo.js";import"./Tooltip-C_nFk_LA.js";import"./PopoverPopup-DRdBjFn0.js";import"./debounce-BYWJGvRn.js";import"./useOsdkClient-Ws-Fn5Vr.js";import"./tick-D4iao2Tc.js";import"./DropdownField-BRYcu045.js";import"./isEqual-CLXUfsc9.js";import"./withOsdkMetrics-C6vvxMqe.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
