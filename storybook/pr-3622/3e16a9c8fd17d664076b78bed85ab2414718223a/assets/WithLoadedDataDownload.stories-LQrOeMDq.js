import{f as b,j as a,r as i}from"./iframe-eqI2Tp6U.js";import{O as u}from"./object-table-RXxNp8Oa.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C854kg2c.js";import"./Table-DF6pHPDX.js";import"./index-BQvj20dN.js";import"./Dialog-DRjdbwoz.js";import"./cross-BwZn1LQT.js";import"./svgIconContainer-CceqgUJ5.js";import"./useBaseUiId-BUPOa5yP.js";import"./InternalBackdrop-BwLVrEhh.js";import"./composite-ynT6IuNJ.js";import"./index-CZ3HCvN9.js";import"./index-BbGLmSZs.js";import"./index-D8w0NXIP.js";import"./useEventCallback-XTjkOuDM.js";import"./SkeletonBar-nX5C-Hmp.js";import"./LoadingCell-D9LLv4ya.js";import"./ColumnConfigDialog-DVkyZklA.js";import"./DraggableList-BfGL3K-h.js";import"./search-BTDUraC3.js";import"./Input-C5vJD5Vp.js";import"./useControlled-CvWZUFGS.js";import"./Button-B8Q21Qnn.js";import"./small-cross-DhXRq_IT.js";import"./ActionButton-CutNvpaL.js";import"./Checkbox-BltVKZ8a.js";import"./useValueChanged-C8xgAF1l.js";import"./CollapsiblePanel-BXEfh1A7.js";import"./MultiColumnSortDialog-Df7pYt6U.js";import"./MenuTrigger-BxnroB_h.js";import"./CompositeItem-Dh86pUX-.js";import"./ToolbarRootContext-DQKwC3ay.js";import"./getDisabledMountTransitionStyles-IuXyN76c.js";import"./getPseudoElementBounds-Iu56eXpl.js";import"./chevron-down-DESWDvR5.js";import"./index-CkexdKE9.js";import"./error-HIwS0nVv.js";import"./BaseCbacBanner-Bz3HImOF.js";import"./makeExternalStore-Bl270xTs.js";import"./Tooltip-CJdcLiLg.js";import"./PopoverPopup-Dg68_C7t.js";import"./toNumber-DuKyHq5e.js";import"./useOsdkClient-BIT-BsU_.js";import"./tick-DzlhWLO4.js";import"./DropdownField-Ncf3j8t_.js";import"./withOsdkMetrics-CEwxpbuR.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
