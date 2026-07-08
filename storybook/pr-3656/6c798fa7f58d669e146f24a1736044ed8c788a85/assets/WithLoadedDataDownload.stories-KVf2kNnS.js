import{f as b,j as a,r as i}from"./iframe-C3M0ibnK.js";import{O as u}from"./object-table-D9JMwwe4.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dq3I7SvT.js";import"./Table-84IQLpH3.js";import"./index-ZvOL7lZf.js";import"./Dialog-CjiEi5sN.js";import"./cross-BI4GsqjQ.js";import"./svgIconContainer-DSBQR884.js";import"./useBaseUiId-CYU0Aa4C.js";import"./InternalBackdrop-DkZGTAlN.js";import"./composite-CfxCIp6J.js";import"./index-D_rR43YW.js";import"./index-BiR5IGcB.js";import"./index-DTY7k1sO.js";import"./useEventCallback-DO2EGasC.js";import"./SkeletonBar-DurTd1uq.js";import"./LoadingCell-DcbcManN.js";import"./ColumnConfigDialog-DQnrxcDv.js";import"./DraggableList-CI5Up97b.js";import"./search-Bt4Jbvws.js";import"./Input-BWHvrmva.js";import"./useControlled-CdimtrKj.js";import"./Button-RX9yNhBH.js";import"./small-cross-C7pHjhMx.js";import"./ActionButton-DM1gFNyq.js";import"./Checkbox-DuyDYvpp.js";import"./useValueChanged-UQmINXLm.js";import"./CollapsiblePanel-BkoLCpYZ.js";import"./MultiColumnSortDialog-DR9Elpew.js";import"./MenuTrigger-07y3m-HA.js";import"./CompositeItem-DIOcFwHt.js";import"./ToolbarRootContext-DYEEOqxe.js";import"./getDisabledMountTransitionStyles-DznC3f7m.js";import"./getPseudoElementBounds-KvBbeMQM.js";import"./chevron-down-CAh4KlDn.js";import"./index-BrrzTLea.js";import"./error-AN1MG3rt.js";import"./BaseCbacBanner-Bh4ODgb5.js";import"./makeExternalStore-DxRwCjOF.js";import"./Tooltip-CS3vPVIk.js";import"./PopoverPopup-CiOpO3qb.js";import"./toNumber-B6VrvkIG.js";import"./useOsdkClient-CLik-i61.js";import"./tick--ioFs_19.js";import"./DropdownField-DJ6cZEpR.js";import"./withOsdkMetrics-Cvm9tXEj.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
