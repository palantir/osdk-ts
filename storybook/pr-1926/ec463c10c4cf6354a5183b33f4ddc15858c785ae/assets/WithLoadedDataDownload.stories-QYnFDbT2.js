import{f as b,j as a,r as i}from"./iframe-D7UqPUqg.js";import{O as u}from"./object-table-Ccj2Z9JG.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Cn4dnxMR.js";import"./Table-D5_Y2AlI.js";import"./index-B1myIupO.js";import"./Dialog-Bzp9Dmji.js";import"./cross-Bj6j_CtG.js";import"./svgIconContainer-CDkwNXGT.js";import"./useBaseUiId-cZ22buUA.js";import"./InternalBackdrop-BU5zmbya.js";import"./composite-CksaxzsE.js";import"./index-zv9FWzoH.js";import"./index-CvRiwgND.js";import"./index-DCkE7DLE.js";import"./useEventCallback-DpQrdmgu.js";import"./SkeletonBar-rSY0Z5ln.js";import"./LoadingCell-CoRNkiv5.js";import"./ColumnConfigDialog-Dx0cIFlH.js";import"./DraggableList-DFWysaF6.js";import"./search-Da0O3BMF.js";import"./Input-DUMT1c48.js";import"./useControlled-BvzqTfft.js";import"./Button-zkNcwcgB.js";import"./small-cross-DrNCWiY1.js";import"./ActionButton-TjtigKOe.js";import"./Checkbox-B2WomC0w.js";import"./useValueChanged-D2bDRlLV.js";import"./CollapsiblePanel-BpT5d_FH.js";import"./MultiColumnSortDialog-BfdqZFkJ.js";import"./MenuTrigger-YTDJD5O0.js";import"./CompositeItem-DTU093CG.js";import"./ToolbarRootContext-CLsWTMgH.js";import"./getDisabledMountTransitionStyles-Sn4rIzKN.js";import"./getPseudoElementBounds-D3vL17pM.js";import"./chevron-down-DzpLubs1.js";import"./index-BLUZuP7j.js";import"./error-n93hCEyg.js";import"./BaseCbacBanner-Qr9lUCXK.js";import"./makeExternalStore-hhxh63bW.js";import"./Tooltip-DRRdorsF.js";import"./PopoverPopup-CCdaFP9f.js";import"./debounce-DIX7Ivt7.js";import"./useOsdkClient-DnJBDK7E.js";import"./tick-ZzmVR9ck.js";import"./DropdownField-BUbtVZGf.js";import"./isEqual-BHekBUsP.js";import"./withOsdkMetrics-CutvgG7T.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
