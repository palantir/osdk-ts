import{f as b,j as a,r as i}from"./iframe-Cp-OZSnu.js";import{O as u}from"./object-table-CfyXoB90.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D0TF71Jy.js";import"./Table-CiWJGaSH.js";import"./index-CkF9JaVm.js";import"./Dialog-B4l2mtAg.js";import"./cross-B5c-VWRK.js";import"./svgIconContainer-CxRnbkUR.js";import"./useBaseUiId-IikVfOCL.js";import"./InternalBackdrop-vW5OBAT0.js";import"./composite-D2o-jxlM.js";import"./index-JtC5fr_f.js";import"./index-XQPE0BXO.js";import"./index-DwAKCp0R.js";import"./useEventCallback-DfdH9uyV.js";import"./SkeletonBar-5PqapGnZ.js";import"./LoadingCell-BScpMvgF.js";import"./ColumnConfigDialog-B57JUt_x.js";import"./DraggableList-C5K3BPEc.js";import"./search-BXFPe1aS.js";import"./Input-BS6nNy2e.js";import"./useControlled-IGbL1OgU.js";import"./Button-10bMmHGl.js";import"./small-cross-Bs17Z7ts.js";import"./ActionButton-zOvyMBGx.js";import"./Checkbox-B8Husi45.js";import"./useValueChanged-BU4ePFF5.js";import"./CollapsiblePanel-CbpCiDEW.js";import"./MultiColumnSortDialog-By7JDjRb.js";import"./MenuTrigger-BVMeq6Rj.js";import"./CompositeItem-7Cd8Z46E.js";import"./ToolbarRootContext-DfeiVioE.js";import"./getDisabledMountTransitionStyles-D4MlkAs5.js";import"./getPseudoElementBounds-CUEq49CO.js";import"./chevron-down-CqsW6wc2.js";import"./index-C46CdtdM.js";import"./error-o2ED4R93.js";import"./BaseCbacBanner-DWZMW_NS.js";import"./makeExternalStore-D9rplt6T.js";import"./Tooltip-BG7Ajslr.js";import"./PopoverPopup-BOe11Gw9.js";import"./debounce-DdIQASxO.js";import"./useOsdkClient-BOP-wcoz.js";import"./tick-D0gf4TUf.js";import"./DropdownField-DvuC2_FB.js";import"./isEqual-pN97cfTT.js";import"./withOsdkMetrics-DSHyV5CB.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
