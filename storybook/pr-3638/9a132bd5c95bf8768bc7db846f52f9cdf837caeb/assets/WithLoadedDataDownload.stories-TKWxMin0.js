import{f as b,j as a,r as i}from"./iframe-CgaSJGms.js";import{O as u}from"./object-table-BAyjctPo.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DlGsqh-w.js";import"./Table-DveZeMXa.js";import"./index-p12yqEBA.js";import"./Dialog-DaLLSO_3.js";import"./cross-DRCEb7OP.js";import"./svgIconContainer-C3Ibj-cG.js";import"./useBaseUiId-D39DBVIB.js";import"./InternalBackdrop-CKvA9-Mq.js";import"./composite-CHM_Xrlu.js";import"./index-C8zT0CUI.js";import"./index-D9n3c3GT.js";import"./index-m450MFHl.js";import"./useEventCallback-Bv3Qwh0U.js";import"./SkeletonBar-BtO-oRoE.js";import"./LoadingCell-BdYrBaaT.js";import"./ColumnConfigDialog-C2XnVZvp.js";import"./DraggableList-CElAX1bR.js";import"./search-egRdoocF.js";import"./Input-cn_9g4lx.js";import"./useControlled-B0Odcszh.js";import"./Button-BrX3zqVY.js";import"./small-cross-BRuITACP.js";import"./ActionButton-DDXYNB3A.js";import"./Checkbox-Bv3Q47qr.js";import"./useValueChanged-B9DLMhOL.js";import"./CollapsiblePanel-l9ept7Ku.js";import"./MultiColumnSortDialog-CgGS2eHt.js";import"./MenuTrigger-CCjxHt9L.js";import"./CompositeItem-BD5vHMJe.js";import"./ToolbarRootContext-ByCsV2PG.js";import"./getDisabledMountTransitionStyles-CXaOoWuT.js";import"./getPseudoElementBounds-BQpXq_rw.js";import"./chevron-down-C_cLuLFO.js";import"./index-DOHBMT4I.js";import"./error-Dn_buZBL.js";import"./BaseCbacBanner-D8VmfF-2.js";import"./makeExternalStore-DR9huws8.js";import"./Tooltip-BMkqJJUI.js";import"./PopoverPopup-Cg2MC_3O.js";import"./toNumber-BnVugD9X.js";import"./useOsdkClient-Co1FOZGz.js";import"./tick-DrFwkT40.js";import"./DropdownField-CCFEjd-y.js";import"./withOsdkMetrics-ztqZgSAs.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
