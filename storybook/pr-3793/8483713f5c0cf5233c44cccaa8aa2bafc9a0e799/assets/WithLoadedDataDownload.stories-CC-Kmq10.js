import{f as b,j as a,r as i}from"./iframe-BpwQaCWI.js";import{O as u}from"./object-table-CH05AIGR.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Ce4Df6DJ.js";import"./Table-DGBWybdL.js";import"./index-NFv3j1Kg.js";import"./Dialog-BSaCnSag.js";import"./cross-rhRWeE7s.js";import"./svgIconContainer-CuioFaav.js";import"./useBaseUiId-C5AYGB4P.js";import"./InternalBackdrop-CeA1CBxo.js";import"./composite-CEBA9fRk.js";import"./index-DITs30Pt.js";import"./index-C7wtgwzA.js";import"./index-COz9BELM.js";import"./useEventCallback-IWP8tLQx.js";import"./SkeletonBar-BRdeXJTx.js";import"./LoadingCell-Dtbdc1RG.js";import"./ColumnConfigDialog-BIahiB4f.js";import"./DraggableList-CWV-fUSQ.js";import"./search-BFV-1IQp.js";import"./Input-cDQ-g7j4.js";import"./useControlled-B5EHNqku.js";import"./isEqual-DaDScgTk.js";import"./isObject-CRq5C3Ab.js";import"./Button-CF2CCiZI.js";import"./ActionButton-CzDRD5Y9.js";import"./Checkbox-D0yotXNX.js";import"./useValueChanged-CyvwbWm9.js";import"./CollapsiblePanel-CFUvSMen.js";import"./MultiColumnSortDialog-BWPCHdDX.js";import"./MenuTrigger-B4Jz4isr.js";import"./CompositeItem-DYXeZzjt.js";import"./ToolbarRootContext-3wDAKiuQ.js";import"./getDisabledMountTransitionStyles-CNXRSnjE.js";import"./getPseudoElementBounds-DStwRK1c.js";import"./chevron-down-Bq6hXrIQ.js";import"./index-DPdcJJ72.js";import"./error-DStggkKI.js";import"./BaseCbacBanner-eJjTQfwV.js";import"./makeExternalStore-BuiA034c.js";import"./Tooltip-DyA1KRF2.js";import"./PopoverPopup-B63ooC6C.js";import"./toNumber-1FjbIoRB.js";import"./useOsdkClient-DAenydGK.js";import"./tick-BNGdmLsY.js";import"./DropdownField-eOCoaJZL.js";import"./withOsdkMetrics-KUUyNHJj.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
