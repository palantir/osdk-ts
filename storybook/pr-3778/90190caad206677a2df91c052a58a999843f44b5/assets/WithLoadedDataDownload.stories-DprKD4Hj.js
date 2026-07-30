import{f as b,j as a,r as i}from"./iframe-Cs0vjh1D.js";import{O as u}from"./object-table-B9QD2XwX.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BW6fmHbo.js";import"./Table-hdthW46X.js";import"./index-BRpQkU0f.js";import"./Dialog-svDsLJqH.js";import"./cross-BbGBkiuK.js";import"./svgIconContainer-UGeX2bOE.js";import"./useBaseUiId-CBGw6rf9.js";import"./InternalBackdrop-BZL4K5sB.js";import"./composite-BA2SFYHq.js";import"./index-Bsi3aTLo.js";import"./index-DszKNb2L.js";import"./index-I2-ks3cR.js";import"./useEventCallback-BEBfKyFP.js";import"./SkeletonBar-DRoTtTh8.js";import"./LoadingCell-CgHajKqn.js";import"./ColumnConfigDialog-BiXx2RD3.js";import"./DraggableList-Clfm8Udl.js";import"./search-gUhAvHQd.js";import"./Input-DS8FrlZU.js";import"./useControlled-D0eBDm4j.js";import"./isEqual-D0NYUuEo.js";import"./isObject-Cn8y_MRd.js";import"./Button-qASnNh7s.js";import"./ActionButton-DKr4sj1v.js";import"./Checkbox-CVh5Mw2R.js";import"./useValueChanged-BgOLFuV7.js";import"./CollapsiblePanel-C6QrXgfo.js";import"./MultiColumnSortDialog-Bs8NsRCP.js";import"./MenuTrigger-koUejPxM.js";import"./CompositeItem-B2PoMDzg.js";import"./ToolbarRootContext-C8XwSccZ.js";import"./getDisabledMountTransitionStyles-pUKZhWTR.js";import"./getPseudoElementBounds-D8W5OxLB.js";import"./chevron-down-C4fu_1o3.js";import"./index-43dZyclU.js";import"./error-DNXbMYR2.js";import"./BaseCbacBanner-D_aViP9a.js";import"./makeExternalStore-vOF9t-Ek.js";import"./Tooltip-C_VkPlpK.js";import"./PopoverPopup-k_iLhgPi.js";import"./toNumber-CCht9N4r.js";import"./useOsdkClient-Bj9T7Nsv.js";import"./tick-D3XFGJ8c.js";import"./DropdownField-BC_oma1F.js";import"./withOsdkMetrics-CN8GOW3l.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
