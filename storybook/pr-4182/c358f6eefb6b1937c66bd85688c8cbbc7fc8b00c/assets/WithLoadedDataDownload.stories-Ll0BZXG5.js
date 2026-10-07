import{f as b,j as a,r as i}from"./iframe-7g13v2jN.js";import{O as u}from"./object-table-C_lh3bVp.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CclsuuMH.js";import"./Table-CNrYfnyS.js";import"./index-BgJ1FFdq.js";import"./Dialog-B8lGpi4M.js";import"./cross-OMCp2mi_.js";import"./svgIconContainer-DukTjdz5.js";import"./useBaseUiId-C7XxkQYq.js";import"./InternalBackdrop-DWiXKM0G.js";import"./composite-B2zIsJ0R.js";import"./index-f0-b4s2g.js";import"./index-DlhSwHJN.js";import"./index-SelFJin-.js";import"./useEventCallback-5D6oIoIr.js";import"./SkeletonBar-DtbFqHqp.js";import"./LoadingCell-ziqIUc6u.js";import"./ColumnConfigDialog-CbLCeqM4.js";import"./DraggableList-P95jNEJk.js";import"./search-sAV5xLcY.js";import"./Input-CaqMv5Lb.js";import"./useControlled-B23KZW1l.js";import"./Button-Apw5WzKr.js";import"./small-cross-DO2vuBir.js";import"./ActionButton-BIcuEm-R.js";import"./Checkbox-Bf-1hh15.js";import"./useValueChanged-D9FXoZkK.js";import"./CollapsiblePanel-DdzzFDVY.js";import"./MultiColumnSortDialog-B3gYDQCx.js";import"./MenuTrigger-Aj7zB13g.js";import"./CompositeItem-B-yStqfF.js";import"./ToolbarRootContext-CE2CALLi.js";import"./getDisabledMountTransitionStyles-CW70_K2g.js";import"./getPseudoElementBounds-CunRcIqO.js";import"./chevron-down-CFQZfM99.js";import"./index-BfjN1GaO.js";import"./error-D4UXhq88.js";import"./BaseCbacBanner-DuFi7CbY.js";import"./makeExternalStore-Bri8hEZ2.js";import"./Tooltip-Dnj9fxoM.js";import"./PopoverPopup-BXniSYAa.js";import"./debounce-BEFTFyoa.js";import"./useOsdkClient-UG4YR_Hh.js";import"./tick-CRrNOkiB.js";import"./DropdownField-D0tQzFI8.js";import"./isEqual-CQ1Vajmu.js";import"./withOsdkMetrics-CxyFHZKX.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
