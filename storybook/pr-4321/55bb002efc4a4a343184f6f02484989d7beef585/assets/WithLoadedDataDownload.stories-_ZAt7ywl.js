import{f as b,j as a,r as i}from"./iframe-B5RHZXsu.js";import{O as u}from"./object-table-Dkcx8iw6.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-tHX7vXiV.js";import"./Table-BhIIsFCs.js";import"./index-UZy2jxQz.js";import"./Dialog-udJgb8ju.js";import"./cross-BlEfWoOy.js";import"./svgIconContainer-B_LjJP-U.js";import"./useBaseUiId-CuPoV62G.js";import"./InternalBackdrop-DQlLfdJE.js";import"./composite-BR00GrWy.js";import"./index-VU42HTLU.js";import"./index-BHsGwZQS.js";import"./index-BiYhGcN8.js";import"./useEventCallback-CUl5eVDE.js";import"./SkeletonBar-DP2T5nTp.js";import"./LoadingCell-JwB4v6GZ.js";import"./ColumnConfigDialog-DkMRJkKy.js";import"./DraggableList-BRsM8x8B.js";import"./search-CznqLCy2.js";import"./Input-BXzrXoG1.js";import"./useControlled-DlsNgd8K.js";import"./Button-Cie7BQIA.js";import"./small-cross-D2pF67Rj.js";import"./ActionButton-y0Novnh7.js";import"./Checkbox-CzdYiTdt.js";import"./useValueChanged-BfhksQOL.js";import"./CollapsiblePanel-CCt5xsKY.js";import"./MultiColumnSortDialog-CQ5wDmsr.js";import"./MenuTrigger-CkEwNIFd.js";import"./CompositeItem-XiaPpMq3.js";import"./ToolbarRootContext-DwV7g7uX.js";import"./getDisabledMountTransitionStyles-BCopWTyc.js";import"./getPseudoElementBounds-CkNhuPMZ.js";import"./chevron-down-UdMSp5ir.js";import"./index-BlmshJoj.js";import"./error-BhBB_kyZ.js";import"./BaseCbacBanner-Dc5V3Lie.js";import"./makeExternalStore-82wrc-fZ.js";import"./Tooltip-DlHQ0CXj.js";import"./PopoverPopup-DfYrZwnF.js";import"./debounce-BxIoRoJ-.js";import"./useOsdkClient-ClQGOlrW.js";import"./tick-BcP6gfmV.js";import"./DropdownField-BnK7E9TF.js";import"./isEqual-pJA2XBQu.js";import"./withOsdkMetrics-VuSz_R8I.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
