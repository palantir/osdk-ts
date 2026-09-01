import{f as b,j as a,r as i}from"./iframe-D7UfG5lN.js";import{O as u}from"./object-table-eNKoCF02.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-fsR8YlZl.js";import"./Table-CsU_D9jD.js";import"./index-CX_4Y7_E.js";import"./Dialog-DSMt8zro.js";import"./cross-BqS1fcFn.js";import"./svgIconContainer-DJd8wnEJ.js";import"./useBaseUiId-DO-f1Z6D.js";import"./InternalBackdrop-BIiS9BIy.js";import"./composite-CgMpynF4.js";import"./index-lBcmGDx7.js";import"./index-F7_7yuPT.js";import"./index-Bvzrvbs2.js";import"./useEventCallback-qxrAFbQA.js";import"./SkeletonBar-B31eMzse.js";import"./LoadingCell-DfcZnJS5.js";import"./ColumnConfigDialog-W0ouTFm6.js";import"./DraggableList-B9ySW3pf.js";import"./search-DtcC4DIl.js";import"./Input-CWcjnHAg.js";import"./useControlled-9hlnEbGI.js";import"./Button-Bwe_2Hp9.js";import"./small-cross-ClVjQsKL.js";import"./ActionButton-bYa-rsQ8.js";import"./Checkbox-DjxkizG9.js";import"./useValueChanged-D2v-_P-u.js";import"./CollapsiblePanel-CVdAsYYQ.js";import"./MultiColumnSortDialog-7qmaHD4E.js";import"./MenuTrigger-CbkBKjZX.js";import"./CompositeItem-fbZDtKEs.js";import"./ToolbarRootContext-49Q9r-mz.js";import"./getDisabledMountTransitionStyles-B0aARxvK.js";import"./getPseudoElementBounds-COopDBiV.js";import"./chevron-down-6NKtD6R3.js";import"./index-C29X8ucR.js";import"./error-CNylSIIz.js";import"./BaseCbacBanner-DbAWaE4h.js";import"./makeExternalStore-CCIQpKDE.js";import"./Tooltip-Ab7jqY7P.js";import"./PopoverPopup-DMAHYwOJ.js";import"./debounce-DZ3i5AHh.js";import"./useOsdkClient-CzIUie5K.js";import"./tick-ZztQqfup.js";import"./DropdownField-D-knyklq.js";import"./isEqual-Cj0yvF_6.js";import"./withOsdkMetrics-C0ALIoPR.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
