import{f as b,j as a,r as i}from"./iframe-DcmfU77k.js";import{O as u}from"./object-table-BOUdcugr.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-iUgfFPGb.js";import"./Table-Bu5SheTH.js";import"./index-D2kWKPAJ.js";import"./Dialog-CW8M2Z4_.js";import"./cross-ECmaaCGW.js";import"./svgIconContainer-DT6N8Ki8.js";import"./useBaseUiId-BoHkQsKU.js";import"./InternalBackdrop-BWvGtHcw.js";import"./composite-Bd0PbqGb.js";import"./index-BS3Mo4g_.js";import"./index-DWk8uxuI.js";import"./index-BtNUYRCp.js";import"./useEventCallback-CD3D3swh.js";import"./SkeletonBar-DFbUbhFB.js";import"./LoadingCell-U-CVMro_.js";import"./ColumnConfigDialog-DfL8P9dS.js";import"./DraggableList-qEcRmpKw.js";import"./search-Ai29WxXU.js";import"./Input-BADaHFeb.js";import"./useControlled-eRGHzZHW.js";import"./isEqual-DGAWDWzv.js";import"./isObject-BcoDpkFk.js";import"./Button-BglaF_Tj.js";import"./ActionButton-BTleJWXX.js";import"./Checkbox-CHQG3Nvh.js";import"./useValueChanged-CWm28iKl.js";import"./CollapsiblePanel-C-AdogU0.js";import"./MultiColumnSortDialog-Ditw7DtL.js";import"./MenuTrigger-DvwNaKoK.js";import"./CompositeItem-C3SNLcxf.js";import"./ToolbarRootContext-Dpg9_Vj3.js";import"./getDisabledMountTransitionStyles-B-GeruUr.js";import"./getPseudoElementBounds-D6T0I_AP.js";import"./chevron-down-DAzj8uTp.js";import"./index-D5ug52rE.js";import"./error-BE5jQAua.js";import"./BaseCbacBanner-DE-HzhxZ.js";import"./makeExternalStore-B7HcnYk0.js";import"./Tooltip-Cp82FIMP.js";import"./PopoverPopup-D34pufPa.js";import"./toNumber-CiUg3_fX.js";import"./useOsdkClient-ChRKxtfQ.js";import"./tick-69qwrrmf.js";import"./DropdownField-C6uw3M0I.js";import"./withOsdkMetrics-3Fje_1hu.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
