import{f as b,j as a,r as i}from"./iframe-C6xDkpL_.js";import{O as u}from"./object-table-BmIyANTb.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BAViXO5q.js";import"./Table-BkA7ohuL.js";import"./index-C6MVQouO.js";import"./Dialog-Tlc2Lie8.js";import"./cross-DoloqHI6.js";import"./svgIconContainer-CdyNM_fM.js";import"./useBaseUiId-D6ssAiPF.js";import"./InternalBackdrop-CIQgYLLB.js";import"./composite-DFd1O6P2.js";import"./index-8nNjBhn6.js";import"./index-B9fL4M4R.js";import"./index-CLG4UISh.js";import"./useEventCallback-Di4B6FMR.js";import"./SkeletonBar-DRh7opHQ.js";import"./LoadingCell-C_2TOftE.js";import"./ColumnConfigDialog-Dy2SoZnr.js";import"./DraggableList-BSJIsgWC.js";import"./search-B146ryND.js";import"./Input-CwXgJ7o8.js";import"./useControlled-De-rJN5p.js";import"./isEqual-Can796Ty.js";import"./isObject-9R6-bCUW.js";import"./Button-CJGEFDOi.js";import"./ActionButton-B7kGoqvf.js";import"./Checkbox-BnUCpH5h.js";import"./useValueChanged-Bx12pUkB.js";import"./CollapsiblePanel-BfEKq3XZ.js";import"./MultiColumnSortDialog-CYWL3EVq.js";import"./MenuTrigger-tMnAO8Vt.js";import"./CompositeItem-C56Q588H.js";import"./ToolbarRootContext-CgrQlAcm.js";import"./getDisabledMountTransitionStyles-JYy7p7IX.js";import"./getPseudoElementBounds-DsBupB7o.js";import"./chevron-down-_i2-cqyT.js";import"./index-CJ9az84z.js";import"./error-BKQEETqk.js";import"./BaseCbacBanner-CG_0-BGI.js";import"./makeExternalStore-Bs5Z2Kjz.js";import"./Tooltip-D_XtxgOG.js";import"./PopoverPopup-DbLmRYYP.js";import"./toNumber-BN3QNian.js";import"./useOsdkClient-DksWv1NW.js";import"./tick-BGAw3EUG.js";import"./DropdownField-CMikhZK7.js";import"./withOsdkMetrics-CeWAAesK.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
