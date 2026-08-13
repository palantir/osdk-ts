import{f as b,j as a,r as i}from"./iframe-CujHdoKl.js";import{O as u}from"./object-table-D_vi4YBI.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DUcMUNOo.js";import"./Table-cStpRNvL.js";import"./index-aOGJb9q1.js";import"./Dialog-DcwrNfd-.js";import"./cross-BwDPZyT4.js";import"./svgIconContainer-D9IeJ3ww.js";import"./useBaseUiId-BHrXH9vn.js";import"./InternalBackdrop-DOOVvXRR.js";import"./composite-DHm2bjTW.js";import"./index-_eiMg_S8.js";import"./index-CDyeI7sk.js";import"./index-DCCCbT9H.js";import"./useEventCallback-f_wdHpNZ.js";import"./SkeletonBar-wclGXQ0s.js";import"./LoadingCell-DyYoqDgp.js";import"./ColumnConfigDialog-DZEB9m9U.js";import"./DraggableList-DHut7vra.js";import"./search-DMHXQU1s.js";import"./Input-CJ3jjDAP.js";import"./useControlled-BiZE5Ppy.js";import"./Button-C0UeLBcI.js";import"./small-cross-101h6MuH.js";import"./ActionButton-CABAWaY9.js";import"./Checkbox-DwUaOwDV.js";import"./useValueChanged-BctVuVQ0.js";import"./CollapsiblePanel-C8oABOT0.js";import"./MultiColumnSortDialog-qjR5VKQ8.js";import"./MenuTrigger-D4mBzRd2.js";import"./CompositeItem-D0zI7JSM.js";import"./ToolbarRootContext-wL6J-yBR.js";import"./getDisabledMountTransitionStyles-BoY6xuxX.js";import"./getPseudoElementBounds-CbCqB6i8.js";import"./chevron-down-BJYoVZT-.js";import"./index-Be1gSIYV.js";import"./error-DMVxncVX.js";import"./BaseCbacBanner-C2qSBH6V.js";import"./makeExternalStore-D0Tfgzjd.js";import"./Tooltip-Co9J038a.js";import"./PopoverPopup-B6Ev2xiA.js";import"./debounce-B7zx1OJa.js";import"./useOsdkClient-CXsx3bnP.js";import"./tick-CePMXaUu.js";import"./DropdownField-SGcuL_jM.js";import"./isEqual-CyLYkzQc.js";import"./withOsdkMetrics-DEAu1aG0.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
