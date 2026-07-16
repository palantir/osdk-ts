import{f as b,j as a,r as i}from"./iframe-C7RbzeK7.js";import{O as u}from"./object-table-Dj8pv0FW.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dbj4vdNE.js";import"./Table-CJWXpaHL.js";import"./index-BK_nkc1Q.js";import"./Dialog-Cb9A_hox.js";import"./cross-TlwZaFD6.js";import"./svgIconContainer-D1OlHHBH.js";import"./useBaseUiId-Dvti5PKd.js";import"./InternalBackdrop-D8iTiehl.js";import"./composite-Cru-yikx.js";import"./index-DafpuAji.js";import"./index-JI73MFaz.js";import"./index-F_qFw2Bo.js";import"./useEventCallback-1yR6nOEs.js";import"./SkeletonBar-B3hf4NTK.js";import"./LoadingCell-B1oaoG8w.js";import"./ColumnConfigDialog-BqSagdYT.js";import"./DraggableList-d9I2Y_WY.js";import"./search-BRSriY8I.js";import"./Input-Ctm1nILd.js";import"./useControlled-B79A5d4I.js";import"./Button-BXsqc2zz.js";import"./small-cross-Df7PaOWf.js";import"./ActionButton-F6I3wNM9.js";import"./Checkbox-CJYybRCk.js";import"./useValueChanged-B_5NuDXs.js";import"./CollapsiblePanel-DMTXaRca.js";import"./MultiColumnSortDialog-BIoJvKc0.js";import"./MenuTrigger-Bycaeh9U.js";import"./CompositeItem-Byg1oty-.js";import"./ToolbarRootContext-Dms0sPDt.js";import"./getDisabledMountTransitionStyles-BlpK5gXj.js";import"./getPseudoElementBounds-CuSQM-tk.js";import"./chevron-down-DziG3VI9.js";import"./index-CYdIyBr8.js";import"./error-BnlTpVJP.js";import"./BaseCbacBanner-tvQB3BE3.js";import"./makeExternalStore-DOnwaLXN.js";import"./Tooltip-H3OId366.js";import"./PopoverPopup-tnvDzFos.js";import"./toNumber-C_kM_uQg.js";import"./useOsdkClient-BUbwAWeH.js";import"./tick-CnVNJJmF.js";import"./DropdownField-BJobWkaf.js";import"./withOsdkMetrics-DEUiXF0c.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
