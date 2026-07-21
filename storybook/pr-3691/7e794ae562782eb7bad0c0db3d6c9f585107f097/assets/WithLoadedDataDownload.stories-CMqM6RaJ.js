import{f as b,j as a,r as i}from"./iframe-BHqX_OjB.js";import{O as u}from"./object-table-BeGG1yKZ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-iJZi-ya6.js";import"./Table-CwENpcCk.js";import"./index-BA2wo7jA.js";import"./Dialog-DPWWin87.js";import"./cross-DEJmigHM.js";import"./svgIconContainer-B7mFK-8J.js";import"./useBaseUiId-DGxwLPNF.js";import"./InternalBackdrop-Ce2HZFva.js";import"./composite-Dhxcl_Lf.js";import"./index-BhHOMf9A.js";import"./index-Bd0Tj_WK.js";import"./index-BZ_hJmKL.js";import"./useEventCallback-nQEPuB4K.js";import"./SkeletonBar-rjm4iN-a.js";import"./LoadingCell-CpJFSFAc.js";import"./ColumnConfigDialog-9uJvyGk7.js";import"./DraggableList-CqicDbWr.js";import"./search-BuNoiZLv.js";import"./Input-BHTNGOiI.js";import"./useControlled-CXhfBr_j.js";import"./Button-DKSmXupo.js";import"./small-cross-DMT1m2P-.js";import"./ActionButton-Cqo-APX_.js";import"./Checkbox-BM7P_0bn.js";import"./useValueChanged-BPWZsOWI.js";import"./CollapsiblePanel-CTlDLNE5.js";import"./MultiColumnSortDialog-Lsr9H_jg.js";import"./MenuTrigger-DyvzUeWR.js";import"./CompositeItem-foV6VRcu.js";import"./ToolbarRootContext-B5O_h2j5.js";import"./getDisabledMountTransitionStyles-ekMd1RGG.js";import"./getPseudoElementBounds-CO2RR8Oa.js";import"./chevron-down-pZMjawWL.js";import"./index-Dlpbs8yg.js";import"./error-Beb7Ue--.js";import"./BaseCbacBanner-BkrwLBMH.js";import"./makeExternalStore-DzepmK8L.js";import"./Tooltip-D-B7-JDL.js";import"./PopoverPopup-oDCsWMcp.js";import"./toNumber-C-r4ZWJv.js";import"./useOsdkClient-B9PErzj6.js";import"./tick-DP0tKAlL.js";import"./DropdownField-_pgdngP6.js";import"./withOsdkMetrics-mlBDJhuk.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
