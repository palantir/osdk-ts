import{f as b,j as a,r as i}from"./iframe-B-bk2LeB.js";import{O as u}from"./object-table-CKI5_fiJ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C5FV7gVn.js";import"./Table-ChXILAnh.js";import"./index-DM05yPFc.js";import"./Dialog-Cyseorwu.js";import"./cross-Dz9kcW5U.js";import"./svgIconContainer-DtjTERAf.js";import"./useBaseUiId-BqQwfV5F.js";import"./InternalBackdrop-Bqcr7z6s.js";import"./composite-KF47FU0W.js";import"./index-CFVQhoyp.js";import"./index-BAxgKpjF.js";import"./index-CN8fTgwp.js";import"./useEventCallback-CMyVFkb9.js";import"./SkeletonBar-Dx6EvkAG.js";import"./LoadingCell-CtdIIGJx.js";import"./ColumnConfigDialog-CkSK-e0b.js";import"./DraggableList-Cpy66XQF.js";import"./search-DOZ8pXMB.js";import"./Input-ICkfGpEo.js";import"./useControlled-B1_v0SLc.js";import"./isEqual-BLlMpy2R.js";import"./isObject-C-YWAbu1.js";import"./Button-9uVrFS16.js";import"./ActionButton-aB2eaoFb.js";import"./Checkbox-DfojlPWp.js";import"./useValueChanged-C1MDQvYd.js";import"./CollapsiblePanel-BxtuR-CO.js";import"./MultiColumnSortDialog-BWpOEGQt.js";import"./MenuTrigger-2PDNdEOq.js";import"./CompositeItem-Bdc6unAH.js";import"./ToolbarRootContext-CAqP7Cj2.js";import"./getDisabledMountTransitionStyles-C0ZICQNR.js";import"./getPseudoElementBounds-CMdxa0l-.js";import"./chevron-down-BXFs_ff_.js";import"./index-BBA5_LrS.js";import"./error-ufSJKQSy.js";import"./BaseCbacBanner-DUXJNRl6.js";import"./makeExternalStore-y8FAd1tx.js";import"./Tooltip-DnN5uGkl.js";import"./PopoverPopup-CwszAPLS.js";import"./toNumber-CiUeINfn.js";import"./useOsdkClient-D8s7jZW_.js";import"./tick-BYXgge_f.js";import"./DropdownField-Bwp0SNdz.js";import"./withOsdkMetrics-D6eXjUPL.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
