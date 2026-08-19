import{f as b,j as a,r as i}from"./iframe-B7MJ_I4S.js";import{O as u}from"./object-table-DEsqGytw.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Cov2K-k_.js";import"./Table-PbcymcR5.js";import"./index-C9xfkj2b.js";import"./Dialog-C8e3T8Vj.js";import"./cross-BTDYOKg8.js";import"./svgIconContainer-DK_hyPcz.js";import"./useBaseUiId-DV-TM7_o.js";import"./InternalBackdrop-RHfoBc4O.js";import"./composite-KA45R7op.js";import"./index-CZX5DcZe.js";import"./index-XczBWBXZ.js";import"./index-BQpFGUDq.js";import"./useEventCallback-MU_qS0LW.js";import"./SkeletonBar-AHFXhlYX.js";import"./LoadingCell-FHMd-CkD.js";import"./ColumnConfigDialog-CJs2XIZN.js";import"./DraggableList-BhwhcR2z.js";import"./search-Cf_AT2nS.js";import"./Input-DOi3h0W_.js";import"./useControlled-CXNm2xWR.js";import"./Button-BFw5rIiu.js";import"./small-cross-B-ffW1dD.js";import"./ActionButton-CyF4LZse.js";import"./Checkbox-BTtDSBH6.js";import"./useValueChanged-LN6HBF8u.js";import"./CollapsiblePanel-QOVGqbFt.js";import"./MultiColumnSortDialog-C6rKg7tu.js";import"./MenuTrigger-5xPBbdgO.js";import"./CompositeItem-4qcJnRqN.js";import"./ToolbarRootContext-BhG2wJHB.js";import"./getDisabledMountTransitionStyles-BIpfSkRt.js";import"./getPseudoElementBounds-i52E9W4X.js";import"./chevron-down-CsWhq03e.js";import"./index-DJVv4RIW.js";import"./error-BDRA02ra.js";import"./BaseCbacBanner-CtfAUEFc.js";import"./makeExternalStore-D-74d3Y_.js";import"./Tooltip-Dopd5vwg.js";import"./PopoverPopup-CE7yq2WN.js";import"./debounce-Clf5E167.js";import"./useOsdkClient-BqlAWOQt.js";import"./tick-DmPLJZVn.js";import"./DropdownField-C_4-TvJW.js";import"./isEqual-NQ_TKohX.js";import"./withOsdkMetrics-hrRyl2Up.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
