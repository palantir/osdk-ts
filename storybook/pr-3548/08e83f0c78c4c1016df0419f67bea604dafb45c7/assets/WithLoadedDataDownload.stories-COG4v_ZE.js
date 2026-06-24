import{f as b,j as a,r as i}from"./iframe-83F8flfy.js";import{O as u}from"./object-table-BbM7PmGp.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B_s0NEdB.js";import"./Table-B5R8ec5Z.js";import"./index-DfkZKDju.js";import"./Dialog-D6h3g271.js";import"./cross-DXerdfS4.js";import"./svgIconContainer-DIKDfch6.js";import"./useBaseUiId-9G_Jb_68.js";import"./InternalBackdrop-BULytgl2.js";import"./composite-BuuHAsAY.js";import"./index-DKygYrjw.js";import"./index-ZIuRylts.js";import"./index-D_LTAE9d.js";import"./useEventCallback-BdkPmNKP.js";import"./SkeletonBar-DzYvI18U.js";import"./LoadingCell-DaZLPR0S.js";import"./ColumnConfigDialog-DVve4CXr.js";import"./DraggableList-B7umXzDM.js";import"./Input-DEEiLvzF.js";import"./useControlled-BFnd4CoS.js";import"./Button-BsrKZpMb.js";import"./small-cross-lAnVDEu9.js";import"./ActionButton-CPXXWY-m.js";import"./Checkbox-DTr9soov.js";import"./minus-B2Z1geiR.js";import"./useValueChanged-D67bfJ7F.js";import"./caret-down-Db-Ew4XC.js";import"./CollapsiblePanel-BmTf3Xsn.js";import"./MultiColumnSortDialog-DpK_Qpty.js";import"./MenuTrigger-Cu1EVqpx.js";import"./CompositeItem-ALHHMHbO.js";import"./ToolbarRootContext-BsBzW-qT.js";import"./getDisabledMountTransitionStyles-mILr8dqM.js";import"./getPseudoElementBounds-BInUCyfn.js";import"./chevron-down-C5IkZ22r.js";import"./index-C12wJsS5.js";import"./error-DQEmY2MR.js";import"./BaseCbacBanner-BwEIfYMh.js";import"./makeExternalStore-tIcgo_v2.js";import"./Tooltip-ZEfULwgM.js";import"./PopoverPopup-CNsKMuUC.js";import"./toNumber-CX2bVpwy.js";import"./useOsdkClient-Bkjj3fZX.js";import"./DropdownField-BFOutgfM.js";import"./withOsdkMetrics-VwwOgy9O.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
