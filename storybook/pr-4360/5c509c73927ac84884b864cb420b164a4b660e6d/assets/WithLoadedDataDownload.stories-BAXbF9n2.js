import{f as b,j as a,r as i}from"./iframe-BXxdMdy7.js";import{O as u}from"./object-table-CNkhkpH_.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CzdKpJOA.js";import"./Table-C2G7jwul.js";import"./index-BD4H0T12.js";import"./Dialog-DRHeSsTe.js";import"./cross-IC7VDHMx.js";import"./svgIconContainer-Cxa1Q93_.js";import"./useBaseUiId-CWV-_dal.js";import"./InternalBackdrop-DlV4ogxj.js";import"./composite-D8jBtBX-.js";import"./index-CHD8ML8j.js";import"./index-Bnop5Sxj.js";import"./index-C1UlsJzQ.js";import"./useEventCallback-B6HVMKXw.js";import"./SkeletonBar-wwZqpQeQ.js";import"./LoadingCell-D2ajqtvp.js";import"./ColumnConfigDialog-CPQQZ7e-.js";import"./DraggableList-DFo1VqJq.js";import"./search-BBZ4C5jZ.js";import"./Input-CqSjd8ip.js";import"./useControlled-BP-Dvf9O.js";import"./Button--SPNZNsz.js";import"./small-cross-D4fjM2kv.js";import"./ActionButton-ILi5qKYn.js";import"./Checkbox-92mH5DWz.js";import"./useValueChanged-CsAG0mUs.js";import"./CollapsiblePanel-DueIufvn.js";import"./MultiColumnSortDialog-lOlNrxYg.js";import"./MenuTrigger-6So7C7lu.js";import"./CompositeItem-DWha1o73.js";import"./ToolbarRootContext-CIB517xc.js";import"./getDisabledMountTransitionStyles-DvVBqQ0t.js";import"./getPseudoElementBounds-By8aQjXl.js";import"./chevron-down-CYALw_cH.js";import"./index-DS2LC4Xn.js";import"./error-xwnNQugq.js";import"./BaseCbacBanner-CdVh5FXB.js";import"./makeExternalStore-BdrikpT6.js";import"./Tooltip-BqajjhQu.js";import"./isObject-FTD3a_NI.js";import"./debounce-B5PrGahk.js";import"./useOsdkClient-9NpW0bp7.js";import"./tick-BiqOz0tA.js";import"./DropdownField-B_3SnluF.js";import"./isEqual-LLnZruSB.js";import"./_baseIsEqual-DfBqWpeE.js";import"./withOsdkMetrics-LqvHVeDk.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
