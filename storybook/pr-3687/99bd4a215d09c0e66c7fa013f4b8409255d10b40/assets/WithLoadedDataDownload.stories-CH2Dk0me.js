import{f as b,j as a,r as i}from"./iframe-C0YRWbnk.js";import{O as u}from"./object-table-AmQb__dw.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DJm-S9xr.js";import"./Table-CVU5LB2q.js";import"./index-D-GnFbFW.js";import"./Dialog-DRjVCbeZ.js";import"./cross-CtvSxEum.js";import"./svgIconContainer-Bv3t7ToX.js";import"./useBaseUiId-9LAdo2XB.js";import"./InternalBackdrop-CjwNw09K.js";import"./composite-DCtqrRFQ.js";import"./index-C_1SSvBg.js";import"./index-2U3G7mDw.js";import"./index-CZufCJZg.js";import"./useEventCallback-CEIb15fu.js";import"./SkeletonBar-DUZZjN8L.js";import"./LoadingCell-wLzRPnjf.js";import"./ColumnConfigDialog-BZyHzZki.js";import"./DraggableList-Co-YfEbA.js";import"./search-BPkPp-4N.js";import"./Input-Dn7f8cPG.js";import"./useControlled-C38K3gha.js";import"./Button-8q1iQczr.js";import"./small-cross-CLMWf_d1.js";import"./ActionButton-BoR70zkC.js";import"./Checkbox-cfIefF3r.js";import"./useValueChanged-9EgBHqKW.js";import"./CollapsiblePanel-CmN-x7VT.js";import"./MultiColumnSortDialog-DQC_kCF9.js";import"./MenuTrigger-g5OjvY9M.js";import"./CompositeItem-BSQSWm01.js";import"./ToolbarRootContext-BLdmsZs5.js";import"./getDisabledMountTransitionStyles-COzR0vnM.js";import"./getPseudoElementBounds-BU2acqT4.js";import"./chevron-down-DJVFIxzo.js";import"./index-BqSO3L2_.js";import"./error-BU7Rjf2b.js";import"./BaseCbacBanner-D-0C2zeU.js";import"./makeExternalStore-gx_YSkq8.js";import"./Tooltip-DsWQPGgC.js";import"./PopoverPopup-BSfpGeN5.js";import"./toNumber-BSrtxBPW.js";import"./useOsdkClient-C6OZedtw.js";import"./tick-Cz9uYA9f.js";import"./DropdownField-CdKDbdJt.js";import"./withOsdkMetrics-DI8dqYrl.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
