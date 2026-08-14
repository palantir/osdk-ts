import{f as b,j as a,r as i}from"./iframe-BcJO5Es9.js";import{O as u}from"./object-table-CXB6ageE.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CNqrSMrD.js";import"./Table-Ct6H-Odv.js";import"./index-D8zcFWOc.js";import"./Dialog-Cq0luLg-.js";import"./cross--P-I0ZkN.js";import"./svgIconContainer-0GuNzj2t.js";import"./useBaseUiId-C-k1aU7Y.js";import"./InternalBackdrop-Daw3hx3z.js";import"./composite-DPnLVqwa.js";import"./index-Cz5vlqVU.js";import"./index-DGYuc6nD.js";import"./index-CgaU1Mv5.js";import"./useEventCallback-qQBTb4zt.js";import"./SkeletonBar-SloCT5_B.js";import"./LoadingCell-BlzvGQe9.js";import"./ColumnConfigDialog-Df5ImCwa.js";import"./DraggableList-DwoSnA8e.js";import"./search-Q8aG5QMJ.js";import"./Input-8svXG8BP.js";import"./useControlled-CHN1pvcO.js";import"./Button-CmxEtBkN.js";import"./small-cross-DwoR8P_C.js";import"./ActionButton-Dd7X93sQ.js";import"./Checkbox-D5yelIY9.js";import"./useValueChanged-RvJvZ_Cg.js";import"./CollapsiblePanel-Cbn1Pxju.js";import"./MultiColumnSortDialog-CXxzUhP5.js";import"./MenuTrigger-pcHAjet2.js";import"./CompositeItem-B0brZGqV.js";import"./ToolbarRootContext-Bz5wpC0n.js";import"./getDisabledMountTransitionStyles-D45SEq1w.js";import"./getPseudoElementBounds-D8yU25vd.js";import"./chevron-down-BeaiUZln.js";import"./index-BGEt1deN.js";import"./error-D43ZO7i7.js";import"./BaseCbacBanner-DfZjQn6s.js";import"./makeExternalStore-CxoTebDy.js";import"./Tooltip-DQHXhc1k.js";import"./PopoverPopup-BVaQ5qjk.js";import"./debounce-Dvhb1WX-.js";import"./useOsdkClient-Du4zQHa2.js";import"./tick-9lyxa2jh.js";import"./DropdownField-C9_fke66.js";import"./isEqual-DDTFGPGr.js";import"./withOsdkMetrics-V7GcuCIR.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
