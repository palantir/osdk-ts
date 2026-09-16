import{f as b,j as a,r as i}from"./iframe-CWKtkIUB.js";import{O as u}from"./object-table-5R7mlYop.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-ipGJxtLm.js";import"./Table-C5DJbWx6.js";import"./index-DmJxPlh_.js";import"./Dialog-D-A3RiqJ.js";import"./cross-DEu5gm-s.js";import"./svgIconContainer-CNCTNhPA.js";import"./useBaseUiId-B8eULTI6.js";import"./InternalBackdrop-DGmr5HTr.js";import"./composite-CLrQ0Pw0.js";import"./index-Pd0hKwBH.js";import"./index-CDK29Ulj.js";import"./index-B7xDDX9i.js";import"./useEventCallback-CiKQuPHs.js";import"./SkeletonBar-loAgoXS5.js";import"./LoadingCell-Ctm-dPkr.js";import"./ColumnConfigDialog-ti5A_XUc.js";import"./DraggableList-D8bzxM_t.js";import"./search-D674kfs0.js";import"./Input-CX60mJQX.js";import"./useControlled-BMMn65Nk.js";import"./Button-BfO_B2Gb.js";import"./small-cross-BACObYvZ.js";import"./ActionButton-BoSuUP-h.js";import"./Checkbox-tCScO48D.js";import"./useValueChanged-C5pU5icH.js";import"./CollapsiblePanel-wQjTDLAh.js";import"./MultiColumnSortDialog-thIR0zTv.js";import"./MenuTrigger-DA9injW0.js";import"./CompositeItem-C2bCi6DR.js";import"./ToolbarRootContext-DoNt8TAQ.js";import"./getDisabledMountTransitionStyles-B3rYUkCj.js";import"./getPseudoElementBounds-W7L9XS3F.js";import"./chevron-down-lIwS08X8.js";import"./index-BG-YC_yo.js";import"./error-y4GKwRxO.js";import"./BaseCbacBanner-DAKVcN5l.js";import"./makeExternalStore-Cwu6Hqp2.js";import"./Tooltip-BPBtSQy6.js";import"./PopoverPopup-D7gPsbnN.js";import"./debounce-D1aK-pGn.js";import"./useOsdkClient-u9q269DO.js";import"./tick-c3wuZ6gm.js";import"./DropdownField-KGWqFfVd.js";import"./isEqual-C9GDj2JT.js";import"./withOsdkMetrics-LG6-R3uz.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
