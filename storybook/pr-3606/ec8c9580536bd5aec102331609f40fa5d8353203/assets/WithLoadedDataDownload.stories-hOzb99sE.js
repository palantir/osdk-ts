import{f as b,j as a,r as i}from"./iframe-CLDlJA2S.js";import{O as u}from"./object-table-BAT4tGPN.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CXVvapeK.js";import"./Table-DRzUfYRg.js";import"./index-CjWLHdP7.js";import"./Dialog-06NnbNCM.js";import"./cross-w5tFrasF.js";import"./svgIconContainer-Bsv-V3VT.js";import"./useBaseUiId-DU0FaGpG.js";import"./InternalBackdrop-Bm-vCytl.js";import"./composite-omEez6mY.js";import"./index-C2706k_4.js";import"./index-2FUSAzUu.js";import"./index-BZ8xoYyc.js";import"./useEventCallback-C6G-Ar9n.js";import"./SkeletonBar-CbEfOYgg.js";import"./LoadingCell-CV7LjkC-.js";import"./ColumnConfigDialog-DecVN42d.js";import"./DraggableList-BAwTGc7i.js";import"./search-po_EH-M7.js";import"./Input-BUSNukVX.js";import"./useControlled-BRi2dXMQ.js";import"./Button-C_dQ-nxq.js";import"./small-cross-DOjoh-Q7.js";import"./ActionButton-D7zlIEVX.js";import"./Checkbox-CblVaNDF.js";import"./minus-DFMFtxEr.js";import"./tick-COYt_DtG.js";import"./useValueChanged-DLxu2TWG.js";import"./caret-down-BJ87WUX8.js";import"./CollapsiblePanel-5fM7l2S4.js";import"./MultiColumnSortDialog-Dd8CIvnf.js";import"./MenuTrigger-CvxBrx8M.js";import"./CompositeItem-hgFX3c_J.js";import"./ToolbarRootContext-B2WobvF0.js";import"./getDisabledMountTransitionStyles-CJuxgz3c.js";import"./getPseudoElementBounds-DjA5KB5j.js";import"./chevron-down-91Nhm8NY.js";import"./index-DBhRc1iV.js";import"./error-DWCbKEr9.js";import"./BaseCbacBanner-CSd9JGF7.js";import"./makeExternalStore-DY7VlyDS.js";import"./Tooltip-BPQZResH.js";import"./PopoverPopup-CihAIc9G.js";import"./toNumber-D_68cKX9.js";import"./useOsdkClient-CNGNJc-v.js";import"./DropdownField-LzJdDihR.js";import"./withOsdkMetrics-v1XnYU5Y.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
