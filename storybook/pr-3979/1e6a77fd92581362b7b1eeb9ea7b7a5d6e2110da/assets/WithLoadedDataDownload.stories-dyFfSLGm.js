import{f as b,j as a,r as i}from"./iframe-E5iWaRrU.js";import{O as u}from"./object-table-DYYLM9YB.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dqk_s4rt.js";import"./Table-SRHZ8Wnm.js";import"./index-C3_SZq7Z.js";import"./Dialog-CPf2pgV9.js";import"./cross-JL-akl7t.js";import"./svgIconContainer-DEuUBUqq.js";import"./useBaseUiId-D4npvdT-.js";import"./InternalBackdrop-DDD6NSDl.js";import"./composite-Bz9wP40Z.js";import"./index-DceoitFi.js";import"./index-BbXCDRNC.js";import"./index-D75HgB7Y.js";import"./useEventCallback-CyXvLOTQ.js";import"./SkeletonBar-YbzI2HU-.js";import"./LoadingCell-CZW3NZst.js";import"./ColumnConfigDialog-C84EhSb0.js";import"./DraggableList-Dzp4AhOv.js";import"./search-ChBTd86p.js";import"./Input-C3CP2H26.js";import"./useControlled-Df4M33J1.js";import"./Button-Cat6_J_5.js";import"./small-cross-WUKc4wzh.js";import"./ActionButton-CxLb80et.js";import"./Checkbox-Dyq6vKsd.js";import"./useValueChanged-EVQifgYs.js";import"./CollapsiblePanel-BrkpisiN.js";import"./MultiColumnSortDialog-DT7WuJBk.js";import"./MenuTrigger-Bi3Tv-Yx.js";import"./CompositeItem-DMa2K3iN.js";import"./ToolbarRootContext-CBnKcEyp.js";import"./getDisabledMountTransitionStyles-yQAdsL-J.js";import"./getPseudoElementBounds-CQAue5bo.js";import"./chevron-down-BkyonfV4.js";import"./index-DSBMRtFR.js";import"./error-DXOYczi7.js";import"./BaseCbacBanner-BKWsBk-N.js";import"./makeExternalStore-HEA345T9.js";import"./Tooltip-BMHXT91H.js";import"./PopoverPopup-CPj_RJ75.js";import"./debounce-B9bcrHjS.js";import"./useOsdkClient-CYVurRKB.js";import"./tick-BpTe-h6v.js";import"./DropdownField-Cjcq2217.js";import"./isEqual-DrYLE_W0.js";import"./withOsdkMetrics-h-AdLa11.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
