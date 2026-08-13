import{f as b,j as a,r as i}from"./iframe-Ct3jhQ3b.js";import{O as u}from"./object-table-DcoD00Uh.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-COHmdbwf.js";import"./Table-DTuKtZkW.js";import"./index-CgPM3gA5.js";import"./Dialog-gEwPqwK4.js";import"./cross-He-PHYhY.js";import"./svgIconContainer-DvsmJFgi.js";import"./useBaseUiId-CJ7H8A6B.js";import"./InternalBackdrop-CUWmOGHP.js";import"./composite-vVcQOeOT.js";import"./index-CCZpef3e.js";import"./index-C89TlbH2.js";import"./index-CDi56eog.js";import"./useEventCallback-B6cGOJ6l.js";import"./SkeletonBar-xKpo9Z1Z.js";import"./LoadingCell-DOixDFMt.js";import"./ColumnConfigDialog-BGhaL0oB.js";import"./DraggableList-kARAxkem.js";import"./search-DmHt-KVR.js";import"./Input-hJWV4A37.js";import"./useControlled-CrEjWPz9.js";import"./isEqual-m4kELLk6.js";import"./isObject-BedEVD4j.js";import"./Button-BDlShN-U.js";import"./ActionButton-C4F15PRz.js";import"./Checkbox-4csc6eJV.js";import"./useValueChanged-BCXDfKlq.js";import"./CollapsiblePanel-9yNoItXE.js";import"./MultiColumnSortDialog-agoS4Ejo.js";import"./MenuTrigger-DsmfFaf8.js";import"./CompositeItem-B3RwG7sH.js";import"./ToolbarRootContext-CAsR0ulO.js";import"./getDisabledMountTransitionStyles-BGm_GsgA.js";import"./getPseudoElementBounds-BYnhVZJr.js";import"./chevron-down-Cr-g2sf1.js";import"./index-DyYuYiTt.js";import"./error-DbtsfcJt.js";import"./BaseCbacBanner-DvPWyofK.js";import"./makeExternalStore-B7M8VDNS.js";import"./Tooltip-BRvtEqVQ.js";import"./PopoverPopup-Xa7WFA5W.js";import"./toNumber-fhQmxxZE.js";import"./useOsdkClient-DDGUV8GT.js";import"./tick-Cr1zVoZU.js";import"./DropdownField-CqA69UfO.js";import"./withOsdkMetrics-fRAXYRw-.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
