import{f as b,j as a,r as i}from"./iframe-AuAaB4HI.js";import{O as u}from"./object-table-Cd9572Ls.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-qH-vyE7r.js";import"./Table-DkVJx52C.js";import"./index-BKkpZaGC.js";import"./Dialog-C8RsVbkF.js";import"./cross-B_t7xRmp.js";import"./svgIconContainer-CNBq2Qvc.js";import"./useBaseUiId-C8uvXzmq.js";import"./InternalBackdrop-BY0s6ZkK.js";import"./composite-OHdH01L1.js";import"./index-De6CDc-m.js";import"./index-BGK8CIIz.js";import"./index-B03wNI31.js";import"./useEventCallback-CPYY-2RY.js";import"./SkeletonBar-DUAi2JRR.js";import"./LoadingCell-ClVQTm05.js";import"./ColumnConfigDialog--oHcFC6T.js";import"./DraggableList-B2jXnvo5.js";import"./search-MZDtJj7T.js";import"./Input-DkM5HnnT.js";import"./useControlled-D-wnjZuk.js";import"./Button-BkBIeHIG.js";import"./small-cross-BIOH-3UI.js";import"./ActionButton-Bce2G-nj.js";import"./Checkbox-CuISlYlI.js";import"./useValueChanged-BzNV50BT.js";import"./CollapsiblePanel-DJjrjh2j.js";import"./MultiColumnSortDialog-23Ke-zpJ.js";import"./MenuTrigger-Cj7fZqKT.js";import"./CompositeItem-BPZ7rSFH.js";import"./ToolbarRootContext-CDLutxqH.js";import"./getDisabledMountTransitionStyles-BoDOk_4Q.js";import"./getPseudoElementBounds-BUuKa4di.js";import"./chevron-down-C-dLVWDH.js";import"./index-fbOZd30r.js";import"./error-CZom1ueN.js";import"./BaseCbacBanner-CexzNDIA.js";import"./makeExternalStore-BZZHokGM.js";import"./Tooltip-DiHHkjyw.js";import"./PopoverPopup-uo-vkHCz.js";import"./debounce-DfeaP7BT.js";import"./useOsdkClient-BVW8BASE.js";import"./tick-DYRfQajR.js";import"./DropdownField-uNE4h0vC.js";import"./isEqual-B-7njsTG.js";import"./withOsdkMetrics-ChC8Do0m.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
