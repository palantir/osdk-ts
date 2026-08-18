import{f as b,j as a,r as i}from"./iframe-DE0qpqxN.js";import{O as u}from"./object-table-DbJ5S0zE.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CpAaridb.js";import"./Table-CLqUteim.js";import"./index-BKwUwpqE.js";import"./Dialog-CI3zVTB_.js";import"./cross-DXFMmm20.js";import"./svgIconContainer-Ba0TV_kf.js";import"./useBaseUiId-CudlGyea.js";import"./InternalBackdrop-CPiYpBeU.js";import"./composite-DRL_KXF5.js";import"./index-DfV4aiex.js";import"./index-Cck4Ig_M.js";import"./index-BPQvOeFd.js";import"./useEventCallback-BUxjmxXY.js";import"./SkeletonBar-CpvduLJa.js";import"./LoadingCell-DrGN3jNa.js";import"./ColumnConfigDialog-__eVGQmP.js";import"./DraggableList-LLON-zMc.js";import"./search-DXlkRNHA.js";import"./Input-Cn0Hq5K2.js";import"./useControlled-DrRmZYfs.js";import"./Button-DuyCMj3l.js";import"./small-cross-B02hAhCe.js";import"./ActionButton-DsCMa1vM.js";import"./Checkbox-BAKv0TEC.js";import"./useValueChanged-D7N_kAGm.js";import"./CollapsiblePanel-Uz1jEYN9.js";import"./MultiColumnSortDialog-CHy1ErXk.js";import"./MenuTrigger-9iXGtW5k.js";import"./CompositeItem-B_IgawVY.js";import"./ToolbarRootContext-BFw03ENT.js";import"./getDisabledMountTransitionStyles-CXCRcyvB.js";import"./getPseudoElementBounds-BN-ZpLZI.js";import"./chevron-down-mPM57H-_.js";import"./index-DDu7TN_e.js";import"./error-Bj6pw2ZK.js";import"./BaseCbacBanner-DhRcW7ia.js";import"./makeExternalStore-DvJ09sLw.js";import"./Tooltip-7iC2B0Kg.js";import"./PopoverPopup-D2VElQuj.js";import"./debounce-DcBnAUXM.js";import"./useOsdkClient-CZqafrN0.js";import"./tick-Cl1DbdH2.js";import"./DropdownField-BkMkjAtk.js";import"./isEqual-CthcIQ1v.js";import"./withOsdkMetrics-CjTPft6c.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
