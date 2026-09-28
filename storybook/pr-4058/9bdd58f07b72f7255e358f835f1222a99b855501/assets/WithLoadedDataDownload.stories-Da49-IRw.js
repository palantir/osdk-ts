import{f as b,j as a,r as i}from"./iframe-BoQuj6Ft.js";import{O as u}from"./object-table-GNC1D2ug.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DFHoCRfY.js";import"./Table-CDFpwVxP.js";import"./index-B3vkyGje.js";import"./Dialog-DW-h_BPY.js";import"./cross-DIlflA87.js";import"./svgIconContainer-D1Y91RJ2.js";import"./useBaseUiId-DKKiKBjO.js";import"./InternalBackdrop-DgOgxUR-.js";import"./composite-CvoBvof0.js";import"./index-BQDMsvBO.js";import"./index-BUrjWVUX.js";import"./index-DsXJv-A-.js";import"./useEventCallback-DnyNlyEn.js";import"./SkeletonBar-nJu3VKHu.js";import"./LoadingCell-Djs5NpLk.js";import"./ColumnConfigDialog-UHepu_B4.js";import"./DraggableList-Bsl9deDL.js";import"./search-DxfJTzvK.js";import"./Input-BrV6l60a.js";import"./useControlled-DfpvXrbD.js";import"./Button-CVGCG-PX.js";import"./small-cross-PzH5JPQr.js";import"./ActionButton-ZwUOGMpg.js";import"./Checkbox-Caya9tIR.js";import"./useValueChanged-DxKn8kpX.js";import"./CollapsiblePanel-CDq3d3lQ.js";import"./MultiColumnSortDialog-DB1LaGMz.js";import"./MenuTrigger-BheayIBg.js";import"./CompositeItem-DPojjMsZ.js";import"./ToolbarRootContext-Civm9m7-.js";import"./getDisabledMountTransitionStyles-CAOvj7ui.js";import"./getPseudoElementBounds-W6TVi3du.js";import"./chevron-down-DuDBYDyj.js";import"./index-Cye0oCf9.js";import"./error-ovbXz9QM.js";import"./BaseCbacBanner-C7FvseMr.js";import"./makeExternalStore-ILzBw2IP.js";import"./Tooltip-RUFZkZKo.js";import"./PopoverPopup-CtGLWZkC.js";import"./debounce-DKOD7ARd.js";import"./useOsdkClient-BlIU4lOf.js";import"./tick-Cdn4730X.js";import"./DropdownField-B9wcQ97-.js";import"./isEqual-B9kgXbB2.js";import"./withOsdkMetrics-Bww6KylD.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
