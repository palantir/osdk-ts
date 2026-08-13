import{f as b,j as a,r as i}from"./iframe-iUGaKF-g.js";import{O as u}from"./object-table-BeD6fwla.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C5QJwAu5.js";import"./Table-C4RNDYAH.js";import"./index-biVvCra3.js";import"./Dialog-Bwv5xC9X.js";import"./cross-BFNp-6V_.js";import"./svgIconContainer-D9SYWNzR.js";import"./useBaseUiId-Bf0uFdSS.js";import"./InternalBackdrop-DdW_D627.js";import"./composite-BdFuHmfd.js";import"./index-CABXZzlk.js";import"./index-CoBHmv7L.js";import"./index-Cof45HYg.js";import"./useEventCallback-C5wssiyI.js";import"./SkeletonBar-rf2cqXI-.js";import"./LoadingCell-VJOGm1a0.js";import"./ColumnConfigDialog-CCPWvcTE.js";import"./DraggableList-BY7dHUoN.js";import"./search-Bn0ITWKa.js";import"./Input-ChMcCw-p.js";import"./useControlled-BHtZ5WxN.js";import"./Button-DOHDr1Yv.js";import"./small-cross-BBd4zvtL.js";import"./ActionButton-C7IaQGOT.js";import"./Checkbox-CQTlFCNu.js";import"./useValueChanged-BzjxvPA-.js";import"./CollapsiblePanel-BziHNyai.js";import"./MultiColumnSortDialog-D1Z559Ip.js";import"./MenuTrigger-BwLCZgAB.js";import"./CompositeItem-BJtdPIpL.js";import"./ToolbarRootContext-CsWu5MBg.js";import"./getDisabledMountTransitionStyles-C6suAbyK.js";import"./getPseudoElementBounds-D3JDCaRV.js";import"./chevron-down-D6OM1qR9.js";import"./index-DIFFZVPL.js";import"./error-BPV1DyS9.js";import"./BaseCbacBanner-LmEMDQ7B.js";import"./makeExternalStore-DYociY-T.js";import"./Tooltip-CQC9ZA-1.js";import"./PopoverPopup-CjX0FeDE.js";import"./debounce-JprLheFU.js";import"./useOsdkClient-cV4LfF2W.js";import"./tick-BKSCw9Ac.js";import"./DropdownField-C0bAgzFB.js";import"./isEqual-B7Me7IYR.js";import"./withOsdkMetrics-BvgX9Hqp.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
