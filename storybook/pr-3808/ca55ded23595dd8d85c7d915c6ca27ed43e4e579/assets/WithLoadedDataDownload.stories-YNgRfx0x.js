import{f as b,j as a,r as i}from"./iframe-B4TxBOgD.js";import{O as u}from"./object-table-BXUU4i3s.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BImTr8XW.js";import"./Table-Cl9fVu8V.js";import"./index-CewbiS0-.js";import"./Dialog-BqbO7wc8.js";import"./cross-hsr1UFQF.js";import"./svgIconContainer-BdVqbaHA.js";import"./useBaseUiId-DGDWvpff.js";import"./InternalBackdrop-Cb9YWrJj.js";import"./composite-CdnlLAO5.js";import"./index-Da0oW1Pt.js";import"./index-BQOT9bMM.js";import"./index-yw2IcMRc.js";import"./useEventCallback-C8aiku-x.js";import"./SkeletonBar-DG8Xm3s9.js";import"./LoadingCell-B4nls2yn.js";import"./ColumnConfigDialog-D_K60j1r.js";import"./DraggableList-BPsTmD45.js";import"./search-B3z6PcWR.js";import"./Input-BegfCSSS.js";import"./useControlled-C5WozG_u.js";import"./isEqual-DHGC0vVF.js";import"./isObject-CFmOY1gj.js";import"./Button-C3hoplQB.js";import"./ActionButton-CU3iPuAb.js";import"./Checkbox-Cfg5IKtW.js";import"./useValueChanged-DU2ktiK8.js";import"./CollapsiblePanel-lVLOzwx5.js";import"./MultiColumnSortDialog-D9upH0BI.js";import"./MenuTrigger-C65x4IPJ.js";import"./CompositeItem-D_uU8YUN.js";import"./ToolbarRootContext-SUr-GoJT.js";import"./getDisabledMountTransitionStyles-B_1CmVQ9.js";import"./getPseudoElementBounds-Cqn9HlA0.js";import"./chevron-down-9K24iL1H.js";import"./index-DL0nRe0P.js";import"./error-BpJdqfq0.js";import"./BaseCbacBanner-BxYpzwz6.js";import"./makeExternalStore-7PAAW5FV.js";import"./Tooltip-W37lKcMg.js";import"./PopoverPopup-wxIHZwOO.js";import"./toNumber-CWrjRpqY.js";import"./useOsdkClient-qMlSffSE.js";import"./tick-Cy11cge5.js";import"./DropdownField-Bzz5Z8gc.js";import"./withOsdkMetrics-D8u8gP3a.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
