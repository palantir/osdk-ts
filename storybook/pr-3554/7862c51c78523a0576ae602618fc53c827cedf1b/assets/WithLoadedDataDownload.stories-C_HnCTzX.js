import{f as b,j as a,r as i}from"./iframe-DHrFp4_-.js";import{O as u}from"./object-table-B-jyUiAE.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Brgfwo0I.js";import"./Table-FCZA8zWQ.js";import"./index-Ru9Of4md.js";import"./Dialog-C5XKMdLn.js";import"./cross-hB8AS5s5.js";import"./svgIconContainer-BrP4ciVU.js";import"./useBaseUiId-BDpSa2Mu.js";import"./InternalBackdrop-CyCL4hXU.js";import"./composite-D84drrBx.js";import"./index-q_OtGgbA.js";import"./index-C0LuXSsL.js";import"./index-C4z_oo6G.js";import"./useEventCallback-CDnud8dZ.js";import"./SkeletonBar-Dxnx-55K.js";import"./LoadingCell-DsaWPCPF.js";import"./ColumnConfigDialog-N6yKpO14.js";import"./DraggableList-CGbElz5u.js";import"./Input-C4Kg3vT1.js";import"./useControlled-DHVl_CnQ.js";import"./Button-Bz_r43wc.js";import"./small-cross-D4-pSM9R.js";import"./ActionButton-BEmHqGsG.js";import"./Checkbox-DxMHtp1N.js";import"./minus-DG2yzxRt.js";import"./useValueChanged-D6uWfFLN.js";import"./caret-down-DgC-V3P3.js";import"./CollapsiblePanel-BQ8mWo3I.js";import"./MultiColumnSortDialog-D3mIWu4C.js";import"./MenuTrigger-N6mcELmF.js";import"./CompositeItem-ftOGY9QE.js";import"./ToolbarRootContext-Bf9HqSsT.js";import"./getDisabledMountTransitionStyles-Yfb7GuIk.js";import"./getPseudoElementBounds-eunDfOsS.js";import"./chevron-down-Bf3shBCs.js";import"./index-D4vCc_lg.js";import"./error-DOoAZI6I.js";import"./BaseCbacBanner-BPUwpAQe.js";import"./makeExternalStore-DYxoAObn.js";import"./Tooltip-B86MwdDR.js";import"./PopoverPopup-DtcI4pNt.js";import"./toNumber-CzIi66JE.js";import"./useOsdkClient-BWzLAKUZ.js";import"./DropdownField-CHJkd3fz.js";import"./withOsdkMetrics-BynLKkHM.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
