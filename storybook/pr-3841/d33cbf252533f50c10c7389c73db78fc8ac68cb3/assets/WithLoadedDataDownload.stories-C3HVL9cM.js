import{f as b,j as a,r as i}from"./iframe-B8G1jItW.js";import{O as u}from"./object-table-k-UfENXm.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B1IURV7o.js";import"./Table-BwElsE2a.js";import"./index-DB13g_6W.js";import"./Dialog-CsnA13_u.js";import"./cross-CZEt4CQ9.js";import"./svgIconContainer-CB3cR2O2.js";import"./useBaseUiId-S4IVgEx3.js";import"./InternalBackdrop-C20G---M.js";import"./composite-DlSXVEG5.js";import"./index-ad9AYhfW.js";import"./index-COXmaWmi.js";import"./index-HEN-Pfmt.js";import"./useEventCallback-sCqLMStA.js";import"./SkeletonBar-DP27X8f1.js";import"./LoadingCell-8me7lGG_.js";import"./ColumnConfigDialog-BK8EX9Ja.js";import"./DraggableList-CKwGoZCZ.js";import"./search-GKgaZqTV.js";import"./Input-D7bf_syM.js";import"./useControlled-Bxr4Vh5_.js";import"./Button-Bq6MDfzu.js";import"./small-cross-DqO0yT6m.js";import"./ActionButton-avzkQ9at.js";import"./Checkbox-BTIiX3dV.js";import"./useValueChanged-DNSQAzpI.js";import"./CollapsiblePanel-Dh2wBANq.js";import"./MultiColumnSortDialog-Dw3NJlo9.js";import"./MenuTrigger-jLSwLtFH.js";import"./CompositeItem-DppqfLhH.js";import"./ToolbarRootContext-DNpt4PCI.js";import"./getDisabledMountTransitionStyles-BSxcypJ-.js";import"./getPseudoElementBounds-F1Xvk9J_.js";import"./chevron-down-CSSbm5fQ.js";import"./index-w8Xrn1oV.js";import"./error-BcGqswAb.js";import"./BaseCbacBanner-B1FxIqOJ.js";import"./makeExternalStore-ByyfvAII.js";import"./Tooltip-BSwHpWu9.js";import"./PopoverPopup-B695G3fz.js";import"./debounce-OG7_ZmsP.js";import"./useOsdkClient-DBY3KNGZ.js";import"./tick-Bs7VXaZc.js";import"./DropdownField-lFeyoiMB.js";import"./isEqual-BL8MlQOH.js";import"./withOsdkMetrics-Bg8xFEho.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
