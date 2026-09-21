import{f as b,j as a,r as i}from"./iframe-DsP96Xjx.js";import{O as u}from"./object-table-TkpdlQXd.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DwitJgNj.js";import"./Table-2WnmhRCG.js";import"./index-CCZQyGW1.js";import"./Dialog-BEgGVBxb.js";import"./cross-BeyCouG7.js";import"./svgIconContainer-DK5XvhMp.js";import"./useBaseUiId-CmljmHpR.js";import"./InternalBackdrop-C3nPSiVQ.js";import"./composite-j1sQv_62.js";import"./index-DOmZP-tW.js";import"./index-B7ldO9Ow.js";import"./index-BLLb1gnX.js";import"./useEventCallback-DFq_e--v.js";import"./SkeletonBar-BZJ5t8a8.js";import"./LoadingCell-ByQcafEp.js";import"./ColumnConfigDialog-BeauIrkr.js";import"./DraggableList-DvkSISyE.js";import"./search-CHKIWokO.js";import"./Input-Bp3qfxHC.js";import"./useControlled-OAEAKhSc.js";import"./Button-D7SLUTAS.js";import"./small-cross-DqTpJXLx.js";import"./ActionButton-DdUHOyw7.js";import"./Checkbox-BMAUUPAo.js";import"./useValueChanged-NP9GJqeg.js";import"./CollapsiblePanel-BSmym8_v.js";import"./MultiColumnSortDialog-B2Fk3pAJ.js";import"./MenuTrigger-Bo5akJPw.js";import"./CompositeItem-Bt-RplsU.js";import"./ToolbarRootContext-MS5BqpDI.js";import"./getDisabledMountTransitionStyles-BYYMCiyL.js";import"./getPseudoElementBounds-Bi6nNbbr.js";import"./chevron-down-BXNKs90J.js";import"./index-D94pbFc4.js";import"./error-BrJRNRov.js";import"./BaseCbacBanner-QY9kdETd.js";import"./makeExternalStore-m0KaaoZC.js";import"./Tooltip-80snLRYh.js";import"./PopoverPopup-qu2sjpZ7.js";import"./debounce-DOMkCj-B.js";import"./useOsdkClient-DGSsfpPV.js";import"./tick-DASReF7p.js";import"./DropdownField-CIyOjqZ7.js";import"./isEqual-C-16vm51.js";import"./withOsdkMetrics-CJFmOHw0.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
