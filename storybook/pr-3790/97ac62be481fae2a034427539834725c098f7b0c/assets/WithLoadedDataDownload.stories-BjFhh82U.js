import{f as b,j as a,r as i}from"./iframe-aLJ4vB0x.js";import{O as u}from"./object-table-kNLX58Gy.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B5sUmCwj.js";import"./Table-pvJic3D7.js";import"./index-DKvaEXHI.js";import"./Dialog-DqgHKDs7.js";import"./cross-BQrUWsOd.js";import"./svgIconContainer-873Hh3eJ.js";import"./useBaseUiId-BuIqAuhc.js";import"./InternalBackdrop-C8VDRsX0.js";import"./composite-D_Mqvp3m.js";import"./index-BkKRshEc.js";import"./index-CUJ1tB6w.js";import"./index-Ci1S4s1h.js";import"./useEventCallback-CRlpf0-k.js";import"./SkeletonBar-BpZFoT3c.js";import"./LoadingCell--ETL430z.js";import"./ColumnConfigDialog-BAZiSjIN.js";import"./DraggableList-Q8dBjOLy.js";import"./search-D07Efajj.js";import"./Input-DJfYdaTn.js";import"./useControlled-C7kgsGsI.js";import"./isEqual-CHmSc8tc.js";import"./isObject-QF1hCGtq.js";import"./Button-lNsDPS4F.js";import"./ActionButton-BlHGSvPb.js";import"./Checkbox-Dvuuxnei.js";import"./useValueChanged-CBTQynAn.js";import"./CollapsiblePanel-B6brJd3g.js";import"./MultiColumnSortDialog-DAzfgCd9.js";import"./MenuTrigger-DFNrJqmt.js";import"./CompositeItem-C0_6gg2t.js";import"./ToolbarRootContext-B7yBHeEe.js";import"./getDisabledMountTransitionStyles-BP0yyuUf.js";import"./getPseudoElementBounds-B9LyUeou.js";import"./chevron-down-D9U3DaSB.js";import"./index-xX1_mGTA.js";import"./error-BpshgP1A.js";import"./BaseCbacBanner-GQbEg4Hb.js";import"./makeExternalStore-CvU_QCPk.js";import"./Tooltip-CyXVTRKz.js";import"./PopoverPopup-CqmKqcO2.js";import"./toNumber-D-Bxva2b.js";import"./useOsdkClient-C9KBHoe2.js";import"./tick-C4oNvW0d.js";import"./DropdownField-CJ9WQEN_.js";import"./withOsdkMetrics-BqZomkcB.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
