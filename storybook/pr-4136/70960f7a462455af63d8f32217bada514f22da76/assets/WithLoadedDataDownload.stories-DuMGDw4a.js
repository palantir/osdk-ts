import{f as b,j as a,r as i}from"./iframe-CPz-wzhp.js";import{O as u}from"./object-table-Nhfkur6o.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B3PLv50W.js";import"./Table-CJIoNyJZ.js";import"./index-CtV6ZPdt.js";import"./Dialog-DZNqhh4A.js";import"./cross-DRBzl1mu.js";import"./svgIconContainer-B99gTCIO.js";import"./useBaseUiId-bEyq9hSb.js";import"./InternalBackdrop-BrVnOHT7.js";import"./composite-Dda615xV.js";import"./index-DzRVDHUw.js";import"./index-BRVvkZ9q.js";import"./index-q41jJGqb.js";import"./useEventCallback-D-a5Riu5.js";import"./SkeletonBar-CCqJKh0H.js";import"./LoadingCell-COTwWinn.js";import"./ColumnConfigDialog-C24FYH5u.js";import"./DraggableList-Drwzm63S.js";import"./search-CPfH1VP1.js";import"./Input-BO6jo4k5.js";import"./useControlled-7vp-sIj7.js";import"./Button-6LWfTNU-.js";import"./small-cross-CUpJa2rI.js";import"./ActionButton-DvbMI2E1.js";import"./Checkbox-CXS8nVFq.js";import"./useValueChanged-sLT7_-gz.js";import"./CollapsiblePanel-Bv-tJbaL.js";import"./MultiColumnSortDialog-ByJpRQ7x.js";import"./MenuTrigger-Ce4bdmjT.js";import"./CompositeItem-t2T-QHuZ.js";import"./ToolbarRootContext-ClJ_sUWs.js";import"./getDisabledMountTransitionStyles-Bznae3H_.js";import"./getPseudoElementBounds-zuJ-zqHd.js";import"./chevron-down-BNy5Nzph.js";import"./index-CbuVsfr5.js";import"./error-BD3e32HB.js";import"./BaseCbacBanner-BwcFXt-1.js";import"./makeExternalStore-Ba5nMm5U.js";import"./Tooltip-MzGB87hV.js";import"./PopoverPopup-Bh7nIoKv.js";import"./debounce-DaKFtC_V.js";import"./useOsdkClient-eahsPVnP.js";import"./tick-C0JYyDJw.js";import"./DropdownField-BJnpWJam.js";import"./isEqual-DFPP44u1.js";import"./withOsdkMetrics-BXgZN6T2.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
