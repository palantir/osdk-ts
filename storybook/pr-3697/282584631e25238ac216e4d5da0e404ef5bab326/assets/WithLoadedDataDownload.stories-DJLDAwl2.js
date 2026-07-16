import{f as b,j as a,r as i}from"./iframe-CWkABBma.js";import{O as u}from"./object-table-D-KvH3jr.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DQRRuufD.js";import"./Table-BdRocScX.js";import"./index-3ehC8OdM.js";import"./Dialog-D5C49Lu-.js";import"./cross-BGjCAIVz.js";import"./svgIconContainer-D5adoGHw.js";import"./useBaseUiId-CPgz5i84.js";import"./InternalBackdrop-DvWivivO.js";import"./composite-B06WlP90.js";import"./index-gt44mxyL.js";import"./index-CtzvA1bZ.js";import"./index-RuzafOwh.js";import"./useEventCallback-B0Esa7bp.js";import"./SkeletonBar-DrzHk6S1.js";import"./LoadingCell-7EynM7tG.js";import"./ColumnConfigDialog-D0l_gWh3.js";import"./DraggableList-B0Rabszq.js";import"./search-B0C2G-JS.js";import"./Input-CLhjhXb0.js";import"./useControlled-DYSGp6Q0.js";import"./Button-CWqRBSs3.js";import"./small-cross-DOqMgDFO.js";import"./ActionButton-Bu0fs7dh.js";import"./Checkbox-_QeN3Wmt.js";import"./useValueChanged-EI-tZeY0.js";import"./CollapsiblePanel-DRD0fGlP.js";import"./MultiColumnSortDialog-D7F2yuCO.js";import"./MenuTrigger-COoo83bD.js";import"./CompositeItem-0Boub15Y.js";import"./ToolbarRootContext-BK7_v0HT.js";import"./getDisabledMountTransitionStyles-Bd0ty3vN.js";import"./getPseudoElementBounds-wP3Otyiq.js";import"./chevron-down-HsrWGWGQ.js";import"./index-CgKDqhfF.js";import"./error-DCDpRlQh.js";import"./BaseCbacBanner-DXIwQMsu.js";import"./makeExternalStore-BC2H5EJJ.js";import"./Tooltip-B6tBT2GI.js";import"./PopoverPopup-BiCOY9S3.js";import"./toNumber-cTak21z2.js";import"./useOsdkClient-DDsjTWlX.js";import"./tick-DlPVe4Li.js";import"./DropdownField-Cxinprvc.js";import"./withOsdkMetrics-B1J9h4Fq.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
