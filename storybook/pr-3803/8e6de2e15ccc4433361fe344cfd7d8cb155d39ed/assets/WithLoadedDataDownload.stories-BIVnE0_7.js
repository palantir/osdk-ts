import{f as b,j as a,r as i}from"./iframe-DvFHgo-w.js";import{O as u}from"./object-table-Bpvq3r6J.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DZBzpRSG.js";import"./Table-XamTJzer.js";import"./index-ChNfdrgg.js";import"./Dialog-IHlWMBtY.js";import"./cross-DFuwFxaR.js";import"./svgIconContainer-DkmBAWI4.js";import"./useBaseUiId-Cihl7qhL.js";import"./InternalBackdrop-CxHwCrRD.js";import"./composite-btXM50Z8.js";import"./index-DmnXV9iA.js";import"./index-CHdUuSLF.js";import"./index-BBJBZUVP.js";import"./useEventCallback-CjzJPV8w.js";import"./SkeletonBar-K9w0OW_M.js";import"./LoadingCell-BuEuuL24.js";import"./ColumnConfigDialog-JNJ9PysK.js";import"./DraggableList-DPMyKnoA.js";import"./search-DGnENIqF.js";import"./Input-Dj67-Kk5.js";import"./useControlled-B1Ceoypd.js";import"./isEqual-CDhU7mjX.js";import"./isObject-BAFCTc-o.js";import"./Button-KyTimgm1.js";import"./ActionButton-Cgv_I3G1.js";import"./Checkbox-TcgZHOqM.js";import"./useValueChanged-DtlQijU6.js";import"./CollapsiblePanel-BI4Hwsiz.js";import"./MultiColumnSortDialog-DqGFzRPB.js";import"./MenuTrigger-ClHfegt_.js";import"./CompositeItem-CRFhwAMt.js";import"./ToolbarRootContext-BYIu0onP.js";import"./getDisabledMountTransitionStyles-BoeOMGGq.js";import"./getPseudoElementBounds-ZFE8fkVM.js";import"./chevron-down-CQiqre5K.js";import"./index-BtbK7qTH.js";import"./error-CuZ6e4Lo.js";import"./BaseCbacBanner-DkuvZFbJ.js";import"./makeExternalStore-N_K02grM.js";import"./Tooltip-B_ZOzs7F.js";import"./PopoverPopup-DLLk2q3N.js";import"./toNumber-ByPSC-tB.js";import"./useOsdkClient-BlFqS2fR.js";import"./tick-DVnP0HcX.js";import"./DropdownField-ptwTRj3O.js";import"./withOsdkMetrics-B88V5tRU.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
