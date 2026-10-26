import{f as b,j as a,r as i}from"./iframe-1hfaDqWf.js";import{O as u}from"./object-table-BVsmr5UF.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-De53aV0r.js";import"./Table-BOdn1qRs.js";import"./index-BhraWcfW.js";import"./Dialog-DF70jFlI.js";import"./cross-BxuxKn8r.js";import"./svgIconContainer-CfNLFLUV.js";import"./useBaseUiId-Deq2cxJf.js";import"./InternalBackdrop-Bwl2SQmc.js";import"./composite-DJvOABdy.js";import"./index-CltX__3l.js";import"./index-CNJ7D8B4.js";import"./index-DUbuCag1.js";import"./useEventCallback-aip0Q_23.js";import"./SkeletonBar-9TZgIuFD.js";import"./LoadingCell-B01RldSR.js";import"./ColumnConfigDialog-DSrNDSyO.js";import"./DraggableList-DVDPuNDG.js";import"./search-ChOCRi6Z.js";import"./Input-D17xgaxz.js";import"./useControlled-D0I97nL6.js";import"./Button-CnBcagCx.js";import"./small-cross-C628jtsy.js";import"./ActionButton-DAT1D4My.js";import"./Checkbox-5hahDlkG.js";import"./useValueChanged-CdYXSfOs.js";import"./CollapsiblePanel-BZNELsDM.js";import"./MultiColumnSortDialog-DTOCkBGF.js";import"./MenuTrigger-QDFe4v67.js";import"./CompositeItem-CmCZmC8c.js";import"./ToolbarRootContext-BuC21FlU.js";import"./getDisabledMountTransitionStyles-Dk0hinap.js";import"./getPseudoElementBounds-DLRZ8Oik.js";import"./chevron-down-oC6N0Ou5.js";import"./index-B722iX7j.js";import"./error-BGVtNtZh.js";import"./BaseCbacBanner-C8GCPmG0.js";import"./makeExternalStore-CiOsLXpf.js";import"./Tooltip-CP0SUwq-.js";import"./PopoverPopup-CFLZ0LEF.js";import"./debounce-Bqvjn-gC.js";import"./useOsdkClient-D6tvv9UM.js";import"./tick-aJFXUkvZ.js";import"./DropdownField-K3jo3x1W.js";import"./isEqual-DbAISukP.js";import"./withOsdkMetrics-pFp3tsBC.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
