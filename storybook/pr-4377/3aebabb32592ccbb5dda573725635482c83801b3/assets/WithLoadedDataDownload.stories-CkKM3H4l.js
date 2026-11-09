import{f as b,j as a,r as i}from"./iframe-DgulMOaF.js";import{O as u}from"./object-table-BE9PrV5Q.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dl5VLDEn.js";import"./Table-iEMVH5EZ.js";import"./index-dtvh1Mr6.js";import"./Dialog-CCiglHdn.js";import"./cross-y6EWAWli.js";import"./svgIconContainer-Ba3T_jNO.js";import"./useBaseUiId-BS6Gc1dg.js";import"./InternalBackdrop-Ly5OJmUB.js";import"./composite-Cb3XgmrA.js";import"./index-PgG1IVJP.js";import"./index-CNbeLsb0.js";import"./index-JiBe7OC4.js";import"./useEventCallback-DZy8oh12.js";import"./SkeletonBar-C8sXh3Sa.js";import"./LoadingCell-s4-j_O0M.js";import"./ColumnConfigDialog-iGQ7_TVF.js";import"./DraggableList-CNw9V9JY.js";import"./search-TtbfO7CA.js";import"./Input-CtG2S7FH.js";import"./useControlled-CvnKakZJ.js";import"./Button-DlQAkLGN.js";import"./small-cross-BGpqY9GM.js";import"./ActionButton-swW5gfvP.js";import"./Checkbox-C1sExpKl.js";import"./useValueChanged-RALpMVtl.js";import"./CollapsiblePanel-d1WdyLj1.js";import"./MultiColumnSortDialog-3gdPQP_r.js";import"./MenuTrigger-BSmaq8rG.js";import"./CompositeItem-D1z33XFc.js";import"./ToolbarRootContext-fgw45yYw.js";import"./getDisabledMountTransitionStyles-DCKwnIRA.js";import"./getPseudoElementBounds-Bs14F1Jl.js";import"./chevron-down-ClbU1eSU.js";import"./index-qbkePvxR.js";import"./error-ddwbLDxk.js";import"./BaseCbacBanner-Yjl8pPyk.js";import"./makeExternalStore-DI6My3xA.js";import"./Tooltip-BMCI_jgq.js";import"./isObject-Beq8HikT.js";import"./debounce-C6yDT9Ro.js";import"./useOsdkClient-BO4WVOaj.js";import"./tick-Dcu7xHQ4.js";import"./DropdownField-D_qIBFAn.js";import"./isEqual-B-zwh2La.js";import"./_baseIsEqual-CBffLuYw.js";import"./withOsdkMetrics-Baexeub2.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
