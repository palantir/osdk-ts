import{f as b,j as a,r as i}from"./iframe-DjEgLMAM.js";import{O as u}from"./object-table-CosS6UUS.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DBKhXP9g.js";import"./Table-CKUDW4sS.js";import"./index-CLtpJQXX.js";import"./Dialog-Du4xq6Yu.js";import"./cross-BNPbY7gE.js";import"./svgIconContainer-DPeNF_UO.js";import"./useBaseUiId-BXDGWuI9.js";import"./InternalBackdrop-D9cEwsto.js";import"./composite-DVEjK_io.js";import"./index-D3Kghrq9.js";import"./index-dHz_CGkU.js";import"./index-DOqCS51R.js";import"./useEventCallback-DHGFeAXn.js";import"./SkeletonBar-D2r_O6mT.js";import"./LoadingCell-kEpFANUv.js";import"./ColumnConfigDialog-BG4a9MGb.js";import"./DraggableList-BXkqRorB.js";import"./search-Bi5j0QCK.js";import"./Input-bGFjEjrx.js";import"./useControlled-BGAnsKbE.js";import"./Button-DVwb7n6r.js";import"./small-cross-CN7W264h.js";import"./ActionButton-Ckoj7S1n.js";import"./Checkbox-OcCZ0VMp.js";import"./minus-CoGa4U-N.js";import"./tick-D5fsYElO.js";import"./useValueChanged-CPBAOKRR.js";import"./caret-down-D7wsVUN3.js";import"./CollapsiblePanel-Do9zSkRp.js";import"./MultiColumnSortDialog-BOt6dm6C.js";import"./MenuTrigger-6DbC-Mca.js";import"./CompositeItem-arDxfIMH.js";import"./ToolbarRootContext-lfQd9qNq.js";import"./getDisabledMountTransitionStyles-7GowVRvk.js";import"./getPseudoElementBounds-8rzY-lFF.js";import"./chevron-down-2a8AGLFW.js";import"./index-CjAAAxt8.js";import"./error-B6MFoLtV.js";import"./BaseCbacBanner-hd0zYs27.js";import"./makeExternalStore-CNwpHCO5.js";import"./Tooltip-DtcMJE6i.js";import"./PopoverPopup-BKGyFSVw.js";import"./toNumber-DaIaDLwD.js";import"./useOsdkClient-DQVe2lux.js";import"./DropdownField-DtrDTEHr.js";import"./withOsdkMetrics-bSyJUBQf.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
