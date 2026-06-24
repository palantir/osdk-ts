import{f as b,j as a,r as i}from"./iframe-BbiirmN6.js";import{O as u}from"./object-table-DUXRUWiy.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Doqq2m3i.js";import"./Table-Q0AN-TgL.js";import"./index-B94rWRxl.js";import"./Dialog-CUEeLdBg.js";import"./cross-rR2antC_.js";import"./svgIconContainer-BHB5pHcv.js";import"./useBaseUiId-C_S4ohxT.js";import"./InternalBackdrop-CmQbu_o7.js";import"./composite-Bh3AGWNF.js";import"./index-i6fTQz_j.js";import"./index-5rH6bU5k.js";import"./index-DsZYp5CU.js";import"./useEventCallback-CZDBL2sm.js";import"./SkeletonBar-BCK4XPeD.js";import"./LoadingCell-CkcAvezK.js";import"./ColumnConfigDialog-B3svpHlZ.js";import"./DraggableList-D-8uH2aY.js";import"./Input-CviTufyp.js";import"./useControlled-DUtulQ-j.js";import"./Button-DjXVdpwU.js";import"./small-cross-BvLdtlqO.js";import"./ActionButton-BDboFoIW.js";import"./Checkbox-BL_u64zz.js";import"./minus-05QtpRmD.js";import"./useValueChanged-DNLfRwfl.js";import"./caret-down-CTXK8anC.js";import"./CollapsiblePanel-DoAY_QkV.js";import"./MultiColumnSortDialog-D8znRPvm.js";import"./MenuTrigger-DHK9RPM8.js";import"./CompositeItem-Ceq4ZC0D.js";import"./ToolbarRootContext-DwapeTKT.js";import"./getDisabledMountTransitionStyles-BMGROm2n.js";import"./getPseudoElementBounds-D3PQa8l0.js";import"./chevron-down-0wMbM-ig.js";import"./index-DLmuEeEW.js";import"./error-BEFOUHlm.js";import"./BaseCbacBanner-Dds_Wssq.js";import"./makeExternalStore-DMbt8zLZ.js";import"./Tooltip-x3zvtPxY.js";import"./PopoverPopup-CfU6eQWU.js";import"./toNumber-BaW_vqQD.js";import"./useOsdkClient-CqvT4R04.js";import"./DropdownField-DoApMHHa.js";import"./withOsdkMetrics-Cq69iokh.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
