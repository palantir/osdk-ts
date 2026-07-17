import{f as b,j as a,r as i}from"./iframe-DVuzAlfH.js";import{O as u}from"./object-table-BqMAGc9Z.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-VSftk98X.js";import"./Table-BtXXLShl.js";import"./index-G2Ae4Loa.js";import"./Dialog-eW1A1XHI.js";import"./cross-BfvpiQsM.js";import"./svgIconContainer-rlD9uYrP.js";import"./useBaseUiId-DCUs709h.js";import"./InternalBackdrop-DFzVfBjP.js";import"./composite-CFbRDSTc.js";import"./index-r_JxIcz1.js";import"./index-DN-x1yEJ.js";import"./index-D_MWv_15.js";import"./useEventCallback-3MOKJsOu.js";import"./SkeletonBar-DvvZZr34.js";import"./LoadingCell-ClCRGLny.js";import"./ColumnConfigDialog-KPSAbm_p.js";import"./DraggableList-_l-1ct_Q.js";import"./search-DF2gxwRx.js";import"./Input-BqYFFuO4.js";import"./useControlled-D-j9SdN7.js";import"./isEqual-s31p7ET5.js";import"./isObject-Dv5AOHe5.js";import"./Button-CKoJEZvW.js";import"./ActionButton-CpYCnTE2.js";import"./Checkbox-WP8iade2.js";import"./useValueChanged-CHHYK2fR.js";import"./CollapsiblePanel-siDfeqM1.js";import"./MultiColumnSortDialog-DsEnuCmd.js";import"./MenuTrigger-CMr2vMfM.js";import"./CompositeItem-CVRxwOF2.js";import"./ToolbarRootContext-sNDE-Hwv.js";import"./getDisabledMountTransitionStyles-CNqyO0ik.js";import"./getPseudoElementBounds-DXhjce3n.js";import"./chevron-down-7OzRGjeM.js";import"./index-Sj7yOGyv.js";import"./error-DiX46IHw.js";import"./BaseCbacBanner-Di4Z1xN1.js";import"./makeExternalStore-BTG-ldQg.js";import"./Tooltip-CFETiADe.js";import"./PopoverPopup-C_Zh2GEJ.js";import"./toNumber-BIb_RzLV.js";import"./useOsdkClient-DDiRZTIo.js";import"./tick-DbIm9rQh.js";import"./DropdownField-BcawetJU.js";import"./withOsdkMetrics-SWW3I-lj.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
