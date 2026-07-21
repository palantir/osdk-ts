import{f as b,j as a,r as i}from"./iframe-C6Gno_Aq.js";import{O as u}from"./object-table-Uy6QM309.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CHnjjJXQ.js";import"./Table-BHgZqqdr.js";import"./index-_m_JHKvg.js";import"./Dialog-Yc5UnJJe.js";import"./cross-DEBXdKEp.js";import"./svgIconContainer-BLTZNNpG.js";import"./useBaseUiId-CnO9l72w.js";import"./InternalBackdrop-BW1WOh88.js";import"./composite-BlxHHZlA.js";import"./index-Cjc07lz8.js";import"./index-DH-47JRN.js";import"./index-_ZcEUh5t.js";import"./useEventCallback-Bv9OLSoN.js";import"./SkeletonBar-B5LEab9A.js";import"./LoadingCell-CNIEnA8X.js";import"./ColumnConfigDialog-D8s8iUVs.js";import"./DraggableList-ChQ74AZk.js";import"./search-D577hEWx.js";import"./Input-DwspMHxQ.js";import"./useControlled-B0Ct5X_K.js";import"./isEqual-BNvlR8Lm.js";import"./isObject-C9uyR3jw.js";import"./Button-DdI2oTJ4.js";import"./ActionButton-CAN6YxmO.js";import"./Checkbox-BufqOQu-.js";import"./useValueChanged-CT5n8g_n.js";import"./CollapsiblePanel-a6ZSRc-u.js";import"./MultiColumnSortDialog-CnbRX7NB.js";import"./MenuTrigger-Cn05N57C.js";import"./CompositeItem-DE_b4Ah6.js";import"./ToolbarRootContext-Dt9qdQ1p.js";import"./getDisabledMountTransitionStyles-CalH2XBv.js";import"./getPseudoElementBounds-gRxFXJdK.js";import"./chevron-down-BrbcyY4P.js";import"./index-YErgbXSw.js";import"./error-CB9fHq9w.js";import"./BaseCbacBanner-DKB5-CYd.js";import"./makeExternalStore-0Avz4Dap.js";import"./Tooltip-B7Tp1rtY.js";import"./PopoverPopup-C62ERw9I.js";import"./toNumber-DwN3JQAn.js";import"./useOsdkClient-D51UiWcH.js";import"./tick-BN4chA2r.js";import"./DropdownField-OZmPo58H.js";import"./withOsdkMetrics--nrQLmcD.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
