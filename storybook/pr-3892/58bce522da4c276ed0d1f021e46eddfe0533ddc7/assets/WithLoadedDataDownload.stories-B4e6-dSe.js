import{f as b,j as a,r as i}from"./iframe-BfMbsuTO.js";import{O as u}from"./object-table-CXvirFHf.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CvOWIyqc.js";import"./Table-BCtO7Tm4.js";import"./index-DK1QCnCo.js";import"./Dialog-qbU7sNxi.js";import"./cross-CKp_r7sS.js";import"./svgIconContainer-CLqHKPGt.js";import"./useBaseUiId-Cepz8rU_.js";import"./InternalBackdrop-DXRw1dZW.js";import"./composite-BfY9eDFq.js";import"./index-DTXKD30u.js";import"./index-xWp45YNg.js";import"./index-DXRgQkgl.js";import"./useEventCallback-D2WgD8Fc.js";import"./SkeletonBar-DFlFqo-D.js";import"./LoadingCell-BSezMWI2.js";import"./ColumnConfigDialog-BbRlGI2h.js";import"./DraggableList-CHP2UEGQ.js";import"./search-BJeF5SRa.js";import"./Input-Cj0x-U8m.js";import"./useControlled-B68j-m4m.js";import"./Button-pvHRSg6_.js";import"./small-cross-djyfeFmh.js";import"./ActionButton-CytU0bca.js";import"./Checkbox-Dzhl8s6O.js";import"./useValueChanged-DyIk8Xfw.js";import"./CollapsiblePanel-CPMXApTs.js";import"./MultiColumnSortDialog-DIu64B3r.js";import"./MenuTrigger-Bm3OeSUo.js";import"./CompositeItem-CQTgHCYc.js";import"./ToolbarRootContext-Dr3KNeMK.js";import"./getDisabledMountTransitionStyles-DggBnFeQ.js";import"./getPseudoElementBounds-WGFkMGwU.js";import"./chevron-down-DCzLtESR.js";import"./index-B-v6d6PY.js";import"./error-DD1JkUFX.js";import"./BaseCbacBanner-CiZFeI-A.js";import"./makeExternalStore-C1l5Ysjg.js";import"./Tooltip-DIC1LP32.js";import"./PopoverPopup-CV-IPSFd.js";import"./debounce-7sbKsZ6D.js";import"./useOsdkClient-DLOB0_Is.js";import"./tick-Bur9r6Ja.js";import"./DropdownField-DhX33T-q.js";import"./isEqual-BOxWcwph.js";import"./withOsdkMetrics-mlNsH_gV.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
