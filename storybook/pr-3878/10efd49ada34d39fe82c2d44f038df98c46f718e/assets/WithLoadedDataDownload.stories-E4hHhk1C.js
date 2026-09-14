import{f as b,j as a,r as i}from"./iframe-BIBiDLzG.js";import{O as u}from"./object-table-DO2-4StQ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-M-hMOyfR.js";import"./Table-CqMv3F_I.js";import"./index-DVl0wepy.js";import"./Dialog-BeJ4utiY.js";import"./cross-Bct1nQA0.js";import"./svgIconContainer-CoQwsTQZ.js";import"./useBaseUiId-uizV67he.js";import"./InternalBackdrop-D5m4v8WT.js";import"./composite-WJpwW_h1.js";import"./index-ChCEVhY0.js";import"./index-oK6fUSTy.js";import"./index-BpFwk2gn.js";import"./useEventCallback-BAwy8rT_.js";import"./SkeletonBar-BwxLZXkl.js";import"./LoadingCell-vKzjE125.js";import"./ColumnConfigDialog-DsX6HxUn.js";import"./DraggableList-DlSB-TLa.js";import"./search-Dp0L04CB.js";import"./Input-DjyK0ZMe.js";import"./useControlled-C1UaCMGh.js";import"./Button-C3sxjNx0.js";import"./small-cross-DhGfP6H8.js";import"./ActionButton-BNlBdLC6.js";import"./Checkbox-wdV7A-ZT.js";import"./useValueChanged-CzF2vCV8.js";import"./CollapsiblePanel-CZiuD1Hf.js";import"./MultiColumnSortDialog-mMx323K3.js";import"./MenuTrigger-BDmXfceM.js";import"./CompositeItem-DcFVDvs6.js";import"./ToolbarRootContext-DSpWAJaB.js";import"./getDisabledMountTransitionStyles-CwoXuUOt.js";import"./getPseudoElementBounds-CNxmiBte.js";import"./chevron-down-D9WTAz47.js";import"./index-CgV98ypJ.js";import"./error-VYeOdSiM.js";import"./BaseCbacBanner-BF3HYUIs.js";import"./makeExternalStore-CpzPkJRH.js";import"./Tooltip-uJ9PHc8e.js";import"./PopoverPopup-BWEg_lAC.js";import"./debounce-C6GUNjet.js";import"./useOsdkClient-L3-wMMON.js";import"./tick-KoHgs3il.js";import"./DropdownField-Dc7oRDG2.js";import"./isEqual-BO52wWTb.js";import"./withOsdkMetrics-BODaHo4W.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
