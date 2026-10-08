import{f as b,j as a,r as i}from"./iframe-BQiIs3LK.js";import{O as u}from"./object-table-T4goorN8.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dw2jPLDK.js";import"./Table-DseHNMSU.js";import"./index-z86HRZpN.js";import"./Dialog-C4NP9gdP.js";import"./cross-BBOEsUzu.js";import"./svgIconContainer-De2PI1mj.js";import"./useBaseUiId-CLlcPdwB.js";import"./InternalBackdrop-CMbNIGM4.js";import"./composite-CMA2GnO4.js";import"./index-D61lICmk.js";import"./index-zzfNqQm7.js";import"./index-OK0CF_qs.js";import"./useEventCallback-Q6WE3pG5.js";import"./SkeletonBar-BakbpVs6.js";import"./LoadingCell-CAdes-UV.js";import"./ColumnConfigDialog-ANSH7ooC.js";import"./DraggableList-DBzvUx3G.js";import"./search-CwMbCA9x.js";import"./Input-CZoH0d1X.js";import"./useControlled-CUE02bZW.js";import"./Button-mut1rbst.js";import"./small-cross-CG4zdxxi.js";import"./ActionButton-6eqsHTiZ.js";import"./Checkbox-CCoQAGLp.js";import"./useValueChanged-ClDHkrux.js";import"./CollapsiblePanel-C-iaOM6m.js";import"./MultiColumnSortDialog-DJKsNSEv.js";import"./MenuTrigger-CS0F-rlF.js";import"./CompositeItem-B87J6QYh.js";import"./ToolbarRootContext-BJUtIxN4.js";import"./getDisabledMountTransitionStyles-uWkBK1pF.js";import"./getPseudoElementBounds-CjaTZFDC.js";import"./chevron-down-DNRgePmp.js";import"./index-CGjn93Dw.js";import"./error-Cm3qz5vo.js";import"./BaseCbacBanner-M7Tp4sQm.js";import"./makeExternalStore-CZnmcOAZ.js";import"./Tooltip-UKYFeKFX.js";import"./PopoverPopup-D7zJiBr2.js";import"./debounce-ncyQhy3A.js";import"./useOsdkClient-ByCOtk2g.js";import"./tick-BiIYLlxf.js";import"./DropdownField-BpZnmzBW.js";import"./isEqual-CCG3YC-I.js";import"./withOsdkMetrics-CvdPVaRc.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
