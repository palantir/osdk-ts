import{f as b,j as a,r as i}from"./iframe-BarfOKYJ.js";import{O as u}from"./object-table-BA95ot9T.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DhgTfoUj.js";import"./Table-CYwjXXf8.js";import"./index-DdXQxkq9.js";import"./Dialog-BObe6AXz.js";import"./cross-awiM4qkb.js";import"./svgIconContainer-CZ2JLaJP.js";import"./useBaseUiId-DPa9F6U_.js";import"./InternalBackdrop-CzqI8c2A.js";import"./composite-C6iH7oZR.js";import"./index-CylLJLDi.js";import"./index-BSz4BzcY.js";import"./index-8BqqJVP-.js";import"./useEventCallback-BM5lsma7.js";import"./SkeletonBar-DwtS4_5f.js";import"./LoadingCell-BZXewJRV.js";import"./ColumnConfigDialog-D8VaEYza.js";import"./DraggableList-PlZw6FYG.js";import"./search-C8DSNwE8.js";import"./Input-BuDULjbT.js";import"./useControlled-Bj7AFHc7.js";import"./Button-glJjOdf_.js";import"./small-cross-BpfwKVxt.js";import"./ActionButton-CLQTqINC.js";import"./Checkbox-CIvg_P1G.js";import"./useValueChanged-CeW4BP0G.js";import"./CollapsiblePanel-BLyrJB6N.js";import"./MultiColumnSortDialog-CNuD0TJX.js";import"./MenuTrigger-WpUQ5-iy.js";import"./CompositeItem-DtdptPgn.js";import"./ToolbarRootContext-BuAvit0a.js";import"./getDisabledMountTransitionStyles-BKNuGRXS.js";import"./getPseudoElementBounds-CoZE2llY.js";import"./chevron-down-CDrseuzZ.js";import"./index-BYqnSnwI.js";import"./error-D3ss51fq.js";import"./BaseCbacBanner-Lt4jf_3F.js";import"./makeExternalStore-Ddoj9Y3j.js";import"./Tooltip-BFgf2gEu.js";import"./PopoverPopup-CIFWoRMP.js";import"./debounce-BerZfsn6.js";import"./useOsdkClient-Bup81mrr.js";import"./tick-BdVYhETS.js";import"./DropdownField-CsNv8iOU.js";import"./isEqual-BDgUedTG.js";import"./withOsdkMetrics-B8r59qzx.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
