import{f as b,j as a,r as i}from"./iframe-DWBCJ7r1.js";import{O as u}from"./object-table-D-H9Ni8G.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BmktTq8T.js";import"./Table-BYbHxE5i.js";import"./index-Bhg8EF8N.js";import"./Dialog-BmWYe064.js";import"./cross-D7B_UIT5.js";import"./svgIconContainer-BKXE3QcR.js";import"./useBaseUiId-CJSadFy5.js";import"./InternalBackdrop-DMys-hvU.js";import"./composite-DVYVQNYP.js";import"./index-1w6N5pNx.js";import"./index-DxYGP2pA.js";import"./index-CZMyUemG.js";import"./useEventCallback-CWWvHrCN.js";import"./SkeletonBar-Db53rKFO.js";import"./LoadingCell-DpHWL9O8.js";import"./ColumnConfigDialog-CJuiy-vf.js";import"./DraggableList-D2Qu3fRi.js";import"./search-DqkstfId.js";import"./Input-CZ8A1Blk.js";import"./useControlled-CgT0Br7i.js";import"./Button-Dgs8-VaM.js";import"./small-cross-Cjpte_iC.js";import"./ActionButton-Z2VeE3Uj.js";import"./Checkbox-CH5ZZV2y.js";import"./useValueChanged-CsMSYAYh.js";import"./CollapsiblePanel-A9XCTmYP.js";import"./MultiColumnSortDialog-C8u3k-0f.js";import"./MenuTrigger-DLMUtzeY.js";import"./CompositeItem-BxdZFWZc.js";import"./ToolbarRootContext-Bk6-lFFc.js";import"./getDisabledMountTransitionStyles-Do_SU4wJ.js";import"./getPseudoElementBounds-B2ErL88K.js";import"./chevron-down-CIAO6ol2.js";import"./index-YbLBVrX6.js";import"./error-BEytdPL1.js";import"./BaseCbacBanner-BQkah_yF.js";import"./makeExternalStore-UKXCXYtC.js";import"./Tooltip-7U4L14FS.js";import"./PopoverPopup-DSB0f6RX.js";import"./debounce-D1paW6Zp.js";import"./useOsdkClient-CTU6gC87.js";import"./tick-DZoSDnYy.js";import"./DropdownField-BKAtqCjR.js";import"./isEqual-BxhW_R9e.js";import"./withOsdkMetrics-BPF8go43.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
