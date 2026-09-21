import{f as b,j as a,r as i}from"./iframe-DRBbLQEP.js";import{O as u}from"./object-table-sUL5tWKm.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Bt1-OzgM.js";import"./Table-rR_QztEz.js";import"./index-DKGchVF5.js";import"./Dialog-D9u2m3uG.js";import"./cross-CUrCvhqT.js";import"./svgIconContainer-DUoraq0-.js";import"./useBaseUiId-0Fcyn-Yx.js";import"./InternalBackdrop-TfRvWb5r.js";import"./composite-BQ1GsMvw.js";import"./index-6P3gaHhW.js";import"./index-DRFL7mOG.js";import"./index-BXLTNv1i.js";import"./useEventCallback-D23WH7I3.js";import"./SkeletonBar-CkkbWTlQ.js";import"./LoadingCell-BMEY3efX.js";import"./ColumnConfigDialog-Cpe2EKts.js";import"./DraggableList-CBNUak8l.js";import"./search-DM25wUgq.js";import"./Input-DCqgylfG.js";import"./useControlled-D-0ahwbd.js";import"./Button-YsHjEWcc.js";import"./small-cross-Qpn-pdOm.js";import"./ActionButton-xScfZGhC.js";import"./Checkbox-DiMmQyM_.js";import"./useValueChanged-B9a9bBNB.js";import"./CollapsiblePanel-CfADBTSn.js";import"./MultiColumnSortDialog-BEDY0mXN.js";import"./MenuTrigger-CI1ocvnA.js";import"./CompositeItem-DHU6LUkY.js";import"./ToolbarRootContext-Dq5VhD1u.js";import"./getDisabledMountTransitionStyles-CRFpWsUL.js";import"./getPseudoElementBounds-CEq_ua0q.js";import"./chevron-down-D9sfivXL.js";import"./index-BFx1Z8Pw.js";import"./error-Bly5Bi76.js";import"./BaseCbacBanner-DWPKuije.js";import"./makeExternalStore-DUU8gKNu.js";import"./Tooltip-BokzoO6e.js";import"./PopoverPopup-BNl-xY3a.js";import"./debounce-F863pl25.js";import"./useOsdkClient-4YE_Fd5v.js";import"./tick-N613LFVJ.js";import"./DropdownField-Dwy3SrHP.js";import"./isEqual-DmoAqAF3.js";import"./withOsdkMetrics-BqMyyD8f.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
