import{f as b,j as a,r as i}from"./iframe-XVdSRdYM.js";import{O as u}from"./object-table-CEL2rgG7.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-5LuScNJD.js";import"./Table-DWAifrPh.js";import"./index-C2ivEAZV.js";import"./Dialog-BepDqyHC.js";import"./cross-CzyEZNkf.js";import"./svgIconContainer-uLfsWncC.js";import"./useBaseUiId-Dlt6DqI4.js";import"./InternalBackdrop-DbMODp_Y.js";import"./composite-DBuUY9ee.js";import"./index-Cfi10bou.js";import"./index-QGskbwQm.js";import"./index-CykSWG_i.js";import"./useEventCallback-C4-tGlAr.js";import"./SkeletonBar-DvnTxtJ5.js";import"./LoadingCell--3ipj902.js";import"./ColumnConfigDialog-Cdr8s9zJ.js";import"./DraggableList-Bpwfcb0p.js";import"./search-BJXk2GGs.js";import"./Input-D4RzPdfS.js";import"./useControlled-CX3K2Yu8.js";import"./Button-BEC_kD0_.js";import"./small-cross-DGMs2rNv.js";import"./ActionButton-ChhRQGCN.js";import"./Checkbox-gGN1HW6y.js";import"./minus-DR_EdrwW.js";import"./tick-B4Ri8ZTT.js";import"./useValueChanged-ls-8OXwm.js";import"./caret-down-B01Q-F3N.js";import"./CollapsiblePanel-CCcYfQOY.js";import"./MultiColumnSortDialog-DdCWgxWS.js";import"./MenuTrigger-CyNntqRn.js";import"./CompositeItem-C9ApRMR9.js";import"./ToolbarRootContext-DtMV81G6.js";import"./getDisabledMountTransitionStyles-BmGctt2H.js";import"./getPseudoElementBounds-vxzaeGmR.js";import"./chevron-down-C6RPEPY3.js";import"./index-bVkwzNKK.js";import"./error-BrefKBay.js";import"./BaseCbacBanner-Drtfo7dh.js";import"./makeExternalStore-BtJEFL-1.js";import"./Tooltip-DSLwrZu_.js";import"./PopoverPopup-iRAj8-GM.js";import"./toNumber-NN0hbuhN.js";import"./useOsdkClient-MoMpYDqn.js";import"./DropdownField-CtX7FF47.js";import"./withOsdkMetrics-CL3fvcxx.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
