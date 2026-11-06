import{f as b,j as a,r as i}from"./iframe-CO_TqB81.js";import{O as u}from"./object-table-DnstM0F_.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Cb9TEUNK.js";import"./Table-CDGzwZIs.js";import"./index-BG1T9Qar.js";import"./Dialog-Bs62LDef.js";import"./cross-BWp6Y9Mg.js";import"./svgIconContainer-9GB5-wwK.js";import"./useBaseUiId-CQDh8HZx.js";import"./InternalBackdrop-XEvqPvZO.js";import"./composite-ksiLQPWX.js";import"./index-Vp2_lvOX.js";import"./index-BpkhN8QR.js";import"./index-C44jrtj9.js";import"./useEventCallback-Da1PZug2.js";import"./SkeletonBar-DfcLnHzw.js";import"./LoadingCell-7218JQWL.js";import"./ColumnConfigDialog-BKLIJzqe.js";import"./DraggableList-DcN0PPA5.js";import"./search-CL2g-V2W.js";import"./Input-C4_accH4.js";import"./useControlled-BzsK2z1m.js";import"./Button-DcLBkUW1.js";import"./small-cross-DJUC3vxT.js";import"./ActionButton-B2_yFJBm.js";import"./Checkbox-CQerHbWk.js";import"./useValueChanged-BRD8TdqI.js";import"./CollapsiblePanel-D_HvnvuL.js";import"./MultiColumnSortDialog-C12-E6um.js";import"./MenuTrigger-wpkt9osl.js";import"./CompositeItem-DiNcRYV6.js";import"./ToolbarRootContext-C89jM3yj.js";import"./getDisabledMountTransitionStyles-BDEY_Zeb.js";import"./getPseudoElementBounds-DqXRckai.js";import"./chevron-down-Cz7E_Xzc.js";import"./index-CZb0rJv3.js";import"./error-CQK0rvpI.js";import"./BaseCbacBanner-BfvZcEHl.js";import"./makeExternalStore-BrsByTNH.js";import"./Tooltip-9tmkcTTw.js";import"./PopoverPopup-CHZBqC1j.js";import"./debounce-qC38IiRW.js";import"./useOsdkClient-CJEtUc7d.js";import"./tick-DMb7PR_x.js";import"./DropdownField-DKbARUIc.js";import"./isEqual-B5R3h5go.js";import"./withOsdkMetrics-DUnq64Xh.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
