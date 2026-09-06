import{f as b,j as a,r as i}from"./iframe-Cudgp9Yf.js";import{O as u}from"./object-table-CppCACw-.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-4hrz9kvN.js";import"./Table-Cl3DbiIH.js";import"./index-81BYSLtR.js";import"./Dialog-940Ccla2.js";import"./cross-revkGSiW.js";import"./svgIconContainer-DHLyM821.js";import"./useBaseUiId-XTaLWo4v.js";import"./InternalBackdrop-DxBXy5tl.js";import"./composite-Cva0Dc4a.js";import"./index-CbHdBm0Y.js";import"./index-CSHUtoE8.js";import"./index-HepSRimU.js";import"./useEventCallback-DzHSKCot.js";import"./SkeletonBar-yGKH_f6h.js";import"./LoadingCell-Cj-LC_sA.js";import"./ColumnConfigDialog-NrJmvS8r.js";import"./DraggableList-0VYER9jf.js";import"./search-D0hS-0xo.js";import"./Input-Bh8eu1mD.js";import"./useControlled-CwtIgUOg.js";import"./Button-tVyqWp8F.js";import"./small-cross-ChbJVPJX.js";import"./ActionButton-Du3E86TK.js";import"./Checkbox-j-a3CiYd.js";import"./useValueChanged-CUGYJ1mb.js";import"./CollapsiblePanel-D77NNtaO.js";import"./MultiColumnSortDialog-ChhiEUPX.js";import"./MenuTrigger-BMd3jK89.js";import"./CompositeItem-DmRElDN_.js";import"./ToolbarRootContext-B8H-v8xY.js";import"./getDisabledMountTransitionStyles-55j4z-MY.js";import"./getPseudoElementBounds-DtfdtuS3.js";import"./chevron-down-DyPkH6YY.js";import"./index-Tl8UCzrU.js";import"./error-I8BNM1L0.js";import"./BaseCbacBanner-D1UIM2bR.js";import"./makeExternalStore-DJw3BgKy.js";import"./Tooltip-BxRrglwZ.js";import"./PopoverPopup-LJZGYOwd.js";import"./debounce-Crn7KrL-.js";import"./useOsdkClient-zsU2AVrV.js";import"./tick-C8BQHCqe.js";import"./DropdownField-CSgsAkCS.js";import"./isEqual-Cmzyg9o0.js";import"./withOsdkMetrics-BT2RZEDY.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
