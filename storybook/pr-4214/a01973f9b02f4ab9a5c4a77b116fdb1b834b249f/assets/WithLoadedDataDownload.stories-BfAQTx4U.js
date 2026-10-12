import{f as b,j as a,r as i}from"./iframe-DQ-Ez-qG.js";import{O as u}from"./object-table-DI1IchAR.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DbSstiuK.js";import"./Table-0s9Hh2Qy.js";import"./index-BXE1O0xs.js";import"./Dialog-CybwZ66j.js";import"./cross-UZvPpSxI.js";import"./svgIconContainer-B-U6T-6a.js";import"./useBaseUiId-SgVzRrNW.js";import"./InternalBackdrop-DMP_qe1B.js";import"./composite-BiRiw1GR.js";import"./index-vFCgFCPf.js";import"./index-CKAmw6bu.js";import"./index-D0HpUEtr.js";import"./useEventCallback-BIHXGnti.js";import"./SkeletonBar-DugVqGn-.js";import"./LoadingCell-DATetjrQ.js";import"./ColumnConfigDialog-CSQmRJhb.js";import"./DraggableList-CdBCLWZn.js";import"./search-67zYXUAs.js";import"./Input-DJaKEaOT.js";import"./useControlled-CTxFJ2Pw.js";import"./Button-CEhBDWA2.js";import"./small-cross-BMEseqYj.js";import"./ActionButton-gGre5Rrx.js";import"./Checkbox-D_IiJIC9.js";import"./useValueChanged-Bp8kvkvX.js";import"./CollapsiblePanel-UEtpZfSu.js";import"./MultiColumnSortDialog-DkEwyEYT.js";import"./MenuTrigger-DOBbIFFg.js";import"./CompositeItem-DdY16ynU.js";import"./ToolbarRootContext-BlHD5nI1.js";import"./getDisabledMountTransitionStyles-CADlu38g.js";import"./getPseudoElementBounds-fzrtgOLH.js";import"./chevron-down-COv6kIer.js";import"./index-e-PI1xG5.js";import"./error-BvUwAVRc.js";import"./BaseCbacBanner-BhAOZWr2.js";import"./makeExternalStore-JHGUKVEV.js";import"./Tooltip-BPBaOiL7.js";import"./PopoverPopup-rO1C9fPG.js";import"./debounce-CqA-XlMm.js";import"./useOsdkClient-CFdl-q-C.js";import"./tick-Co47VK84.js";import"./DropdownField-DYQWWJ9Y.js";import"./isEqual-DJrJLYBW.js";import"./withOsdkMetrics-CUCSCii1.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
