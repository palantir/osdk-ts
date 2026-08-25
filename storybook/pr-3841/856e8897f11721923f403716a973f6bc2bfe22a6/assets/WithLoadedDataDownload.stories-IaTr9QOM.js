import{f as b,j as a,r as i}from"./iframe-Li1-lWs7.js";import{O as u}from"./object-table-CjDY3c5S.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CGmo2FMo.js";import"./Table-DNTTlJ15.js";import"./index-DoD8b1_q.js";import"./Dialog-clI1gzeX.js";import"./cross-DMmA-RfG.js";import"./svgIconContainer-CVRufNNl.js";import"./useBaseUiId-Br9Ryls1.js";import"./InternalBackdrop-D9X1KC0Z.js";import"./composite-JV6W8eaJ.js";import"./index-B_W4EPm5.js";import"./index-7QzYiAri.js";import"./index-D8Tk9Xkv.js";import"./useEventCallback-CkXzoATD.js";import"./SkeletonBar-KeXvglh_.js";import"./LoadingCell-CQgaEp-a.js";import"./ColumnConfigDialog-D6bJWZ62.js";import"./DraggableList-CcrcGGcJ.js";import"./search-DMt9s_ci.js";import"./Input-DM_Alj7t.js";import"./useControlled-CCuESsXx.js";import"./Button-8SX-EUR0.js";import"./small-cross-DXbOoBXF.js";import"./ActionButton-CEMN0Zdb.js";import"./Checkbox-DEiq_oH5.js";import"./useValueChanged-DilJhcWz.js";import"./CollapsiblePanel-C1kmCMJF.js";import"./MultiColumnSortDialog-BeKEe_uK.js";import"./MenuTrigger-DZnftTrY.js";import"./CompositeItem-BwUkyu_e.js";import"./ToolbarRootContext-DsnXZPtT.js";import"./getDisabledMountTransitionStyles-BQJYWB5I.js";import"./getPseudoElementBounds-Ppn7heVn.js";import"./chevron-down-BDBeFFgf.js";import"./index-BjEz7scL.js";import"./error-BiqjEWby.js";import"./BaseCbacBanner-DTvtqYPX.js";import"./makeExternalStore-CWQvlKnh.js";import"./Tooltip-DTKsc1QU.js";import"./PopoverPopup-CqHFde_Q.js";import"./debounce-CxboYieA.js";import"./useOsdkClient-B91Jh8bD.js";import"./tick-DR1AzeWG.js";import"./DropdownField-6i2nL-Zb.js";import"./isEqual-CK2JvR_Y.js";import"./withOsdkMetrics-_pRQ_AuF.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
