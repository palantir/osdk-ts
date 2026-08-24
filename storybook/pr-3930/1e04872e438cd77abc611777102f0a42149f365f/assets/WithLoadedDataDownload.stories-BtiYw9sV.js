import{f as b,j as a,r as i}from"./iframe-PnDOzCid.js";import{O as u}from"./object-table-D4EwzI8j.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BHN2PTV1.js";import"./Table-Dhykx4ye.js";import"./index-CTuOq2_n.js";import"./Dialog-nsTWjBko.js";import"./cross-CR6LhqMg.js";import"./svgIconContainer-DY8hFB-6.js";import"./useBaseUiId-Br9Pyha2.js";import"./InternalBackdrop-CuNeBhky.js";import"./composite-ssNpx6D9.js";import"./index-BBtHZFB8.js";import"./index-BPz2iuz0.js";import"./index-DmaFqf5D.js";import"./useEventCallback-CD9glGCH.js";import"./SkeletonBar-D4GaeW64.js";import"./LoadingCell-CozaopMH.js";import"./ColumnConfigDialog-5JVMlay9.js";import"./DraggableList-CM5iWscv.js";import"./search-C0Gxo9Ly.js";import"./Input-C2eDGT_k.js";import"./useControlled-B8PotZCC.js";import"./Button-ClDfXYXt.js";import"./small-cross-6gjgiPBS.js";import"./ActionButton-Cxcvr76B.js";import"./Checkbox-DXeuKucW.js";import"./useValueChanged-DvWNgcqY.js";import"./CollapsiblePanel-CgXH4PmC.js";import"./MultiColumnSortDialog-BBj9KWuk.js";import"./MenuTrigger-CzMzu05o.js";import"./CompositeItem-JOSb0DW0.js";import"./ToolbarRootContext-MEy76afQ.js";import"./getDisabledMountTransitionStyles-Bu2kofYy.js";import"./getPseudoElementBounds-C6qHOPfm.js";import"./chevron-down-B6MD1Z1F.js";import"./index-Sp2kgai2.js";import"./error-ChR6Rzxj.js";import"./BaseCbacBanner-BJuG5Mgr.js";import"./makeExternalStore-D0koECKe.js";import"./Tooltip-BvRJQXfz.js";import"./PopoverPopup-DtBxplNL.js";import"./debounce-DSTpoPBU.js";import"./useOsdkClient-Bwd7OyF1.js";import"./tick-_BdQKNVX.js";import"./DropdownField-CkGZrtLk.js";import"./isEqual-5k6Ef4JB.js";import"./withOsdkMetrics-CyQcXoDt.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
