import{f as b,j as a,r as i}from"./iframe-CPyJpJV3.js";import{O as u}from"./object-table-DaTov1VA.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BvTlYPt-.js";import"./Table-BW5Gfq_6.js";import"./index-CCBRf6K7.js";import"./Dialog-DINtI5iy.js";import"./cross-YpKbhgG7.js";import"./svgIconContainer-BVg4uZ_a.js";import"./useBaseUiId-BE1FwJpN.js";import"./InternalBackdrop-D3Y8t6K0.js";import"./composite-CxH0eoEz.js";import"./index-Ds70Lr5a.js";import"./index-CcX6hWx6.js";import"./index-CZqI40TL.js";import"./useEventCallback-BcjJIdZL.js";import"./SkeletonBar-B_rmO7CU.js";import"./LoadingCell-DvMH1bNi.js";import"./ColumnConfigDialog-DAW7Vr9b.js";import"./DraggableList-CfsP9DV2.js";import"./search-C_SizRhc.js";import"./Input-DmeWRyym.js";import"./useControlled-B21cgT_m.js";import"./Button-CMM3K_74.js";import"./small-cross-DadSzmt5.js";import"./ActionButton-CyC5RjST.js";import"./Checkbox-jETR2T8J.js";import"./useValueChanged-ChG8kRbK.js";import"./CollapsiblePanel-DsxFLKKu.js";import"./MultiColumnSortDialog-B5LPJ1uN.js";import"./MenuTrigger-BPwRTJnH.js";import"./CompositeItem-aCyuzOz7.js";import"./ToolbarRootContext-lu3yZz9D.js";import"./getDisabledMountTransitionStyles-Bgb8GtSw.js";import"./getPseudoElementBounds-Q92BQcBU.js";import"./chevron-down-fZFgM6nc.js";import"./index-B0OCIQRa.js";import"./error-unHp6fXd.js";import"./BaseCbacBanner-DFDMj4mk.js";import"./makeExternalStore-CWLDTFqJ.js";import"./Tooltip-BR_mAU-7.js";import"./PopoverPopup-CzPhkEDU.js";import"./toNumber-ZA_0HHSR.js";import"./useOsdkClient-CjsatSHW.js";import"./tick-8PKVsUmx.js";import"./DropdownField-DpZtQO0f.js";import"./withOsdkMetrics-BuMST-fT.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
