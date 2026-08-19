import{f as b,j as a,r as i}from"./iframe-Cjl6pIXM.js";import{O as u}from"./object-table-C5wUUf6H.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-ezBh--Yr.js";import"./Table-HtOX_Zds.js";import"./index-nWF7o5I3.js";import"./Dialog-vaNoy1Ni.js";import"./cross-C6Wnpl4f.js";import"./svgIconContainer-BIGcTem8.js";import"./useBaseUiId-CIUrQjM5.js";import"./InternalBackdrop-E6QkGXBh.js";import"./composite-CSFuaGEl.js";import"./index-CvQTdrcx.js";import"./index-wBonjv3U.js";import"./index-B8TidmZn.js";import"./useEventCallback-Be4lFJqY.js";import"./SkeletonBar-C6XzUOHz.js";import"./LoadingCell-B4cWFoWh.js";import"./ColumnConfigDialog-DMVfZVMY.js";import"./DraggableList-w1sfBb1U.js";import"./search-B0QVdf5C.js";import"./Input-By7ENoXN.js";import"./useControlled-CLbZj6xc.js";import"./Button-Dq2yQQ1D.js";import"./small-cross-DQntl9zq.js";import"./ActionButton-CVqXGMBk.js";import"./Checkbox-B09x16pJ.js";import"./useValueChanged-CWal0wZX.js";import"./CollapsiblePanel-D_NOfXCt.js";import"./MultiColumnSortDialog-KQSySUEb.js";import"./MenuTrigger-mVDB8gok.js";import"./CompositeItem-BdjQ3x20.js";import"./ToolbarRootContext-YT_m9B5L.js";import"./getDisabledMountTransitionStyles-DLd4dts7.js";import"./getPseudoElementBounds-2s7Inf1W.js";import"./chevron-down-z7gQuHi2.js";import"./index-DxUk46hk.js";import"./error-BeMd-CqJ.js";import"./BaseCbacBanner-DvKnURtP.js";import"./makeExternalStore--4ZQvYdt.js";import"./Tooltip-Dqwh4OEI.js";import"./PopoverPopup-B3bKQ-2O.js";import"./debounce-Co3YNhbE.js";import"./useOsdkClient-CO1OiFv7.js";import"./tick-DK_NXSKS.js";import"./DropdownField-BKwKAV3h.js";import"./isEqual-CnpYb7jD.js";import"./withOsdkMetrics-6LH9jlrw.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
