import{f as b,j as a,r as i}from"./iframe-DPQWsr1M.js";import{O as u}from"./object-table-F349_EHD.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-o6KnyvDN.js";import"./Table-B_-DpvEY.js";import"./index-1D96oTTR.js";import"./Dialog-CeKQqDit.js";import"./cross-DuB_0bGf.js";import"./svgIconContainer-DIYWApzK.js";import"./useBaseUiId-Boyfwhpa.js";import"./InternalBackdrop-Dve4kKmR.js";import"./composite-CRXaqm95.js";import"./index-BoQJKO6s.js";import"./index-DX8vE8bR.js";import"./index-DphPtI9O.js";import"./useEventCallback-VIPtdgLJ.js";import"./SkeletonBar-jfrV_xdX.js";import"./LoadingCell-CMd-_e4c.js";import"./ColumnConfigDialog-2h1LjP2L.js";import"./DraggableList-vrCZ0rif.js";import"./search-whg2w3Mu.js";import"./Input-B3p7mp8A.js";import"./useControlled-cAinZOSm.js";import"./Button-bVhb01O1.js";import"./small-cross-IApkH4qL.js";import"./ActionButton-C6F9nGNw.js";import"./Checkbox-CBUYqYdF.js";import"./minus-CNCgh7Lw.js";import"./tick-UlujjfRs.js";import"./useValueChanged-Dkyk0U6p.js";import"./caret-down-t9cfxrIc.js";import"./CollapsiblePanel-CBTzAcIX.js";import"./MultiColumnSortDialog-COCk6bEC.js";import"./MenuTrigger-CMUOm0_1.js";import"./CompositeItem-DKs-nDTm.js";import"./ToolbarRootContext-DgzoeN19.js";import"./getDisabledMountTransitionStyles-9zJVlt-G.js";import"./getPseudoElementBounds-B7JVPAez.js";import"./chevron-down-D17DM69_.js";import"./index-BMd1dmez.js";import"./error-CWxwFwqY.js";import"./BaseCbacBanner-CCuos3gc.js";import"./makeExternalStore-CJXnY_nB.js";import"./Tooltip-CpJEa-q8.js";import"./PopoverPopup-Cc6DL6DZ.js";import"./toNumber-Cgalrlu3.js";import"./useOsdkClient-VKuPN8FR.js";import"./DropdownField-CExAfDQ1.js";import"./withOsdkMetrics-DA_bV2kQ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
