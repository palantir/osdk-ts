import{f as b,j as a,r as i}from"./iframe-C-ZowQax.js";import{O as u}from"./object-table-BoFDvNT8.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BwoiUuS0.js";import"./Table-pAtwTM9K.js";import"./index-Be4hOd1B.js";import"./Dialog-DtLoQywW.js";import"./cross-Eu5MsQSw.js";import"./svgIconContainer-DOvH0cqq.js";import"./useBaseUiId-z3JC-8KB.js";import"./InternalBackdrop-Bq6YL1k4.js";import"./composite-DecXstOI.js";import"./index-Ds7XpPFE.js";import"./index-CLAxlO_0.js";import"./index-CIH23t0R.js";import"./useEventCallback-rnlsmwi1.js";import"./SkeletonBar-Bzw4W5us.js";import"./LoadingCell-BWWklX_C.js";import"./ColumnConfigDialog-CkG71Sl6.js";import"./DraggableList-DJpjIFcN.js";import"./search-IKabI-9R.js";import"./Input-DBndaIW5.js";import"./useControlled-BMJFbw6E.js";import"./Button-BvplgYnA.js";import"./small-cross-Bk6KAhb2.js";import"./ActionButton-Dgf6XiQc.js";import"./Checkbox-BG2a4QAU.js";import"./useValueChanged-Dwc1SDE4.js";import"./CollapsiblePanel-CgIdvyXZ.js";import"./MultiColumnSortDialog-CQWhwk_m.js";import"./MenuTrigger-pnLY5jLU.js";import"./CompositeItem-Boyopm8a.js";import"./ToolbarRootContext-qpt4Azan.js";import"./getDisabledMountTransitionStyles-DBO-O-Ga.js";import"./getPseudoElementBounds-DmT2yiee.js";import"./chevron-down-BB7K5vpo.js";import"./index-BDVpzpby.js";import"./error-DLiiLlwM.js";import"./BaseCbacBanner-DTZ9UsMw.js";import"./makeExternalStore-D6lqxyG2.js";import"./Tooltip-BWTRoX0F.js";import"./PopoverPopup-CG9CYd0u.js";import"./debounce-BAsjd_Of.js";import"./useOsdkClient-Cm53VtWi.js";import"./tick-JKwuhKLh.js";import"./DropdownField-BFfdkSQG.js";import"./isEqual-Dl3K-ctg.js";import"./withOsdkMetrics-nJkmP2WD.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
