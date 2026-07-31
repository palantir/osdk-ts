import{f as b,j as a,r as i}from"./iframe-u83eKIrq.js";import{O as u}from"./object-table-CstgSJbN.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CAb23y7Q.js";import"./index-DAH5uwdU.js";import"./Dialog-WPnBM2ww.js";import"./cross-BQtpAbkF.js";import"./svgIconContainer-bWBjq6xN.js";import"./useBaseUiId-PA8l4EIZ.js";import"./InternalBackdrop-HlmO7rQ4.js";import"./composite-3XcAHwyh.js";import"./index-Byvi8c4H.js";import"./index-uZ0DL954.js";import"./index-BYUqOIx_.js";import"./useEventCallback-D5UKlND-.js";import"./SkeletonBar-CsMybwHV.js";import"./LoadingCell-BQ2WwuWY.js";import"./ColumnConfigDialog-MqAiddcO.js";import"./DraggableList-DoAWVMP-.js";import"./search-D9liKBNY.js";import"./Input-BSdYhVma.js";import"./useControlled-6FyMHK6P.js";import"./isEqual-COXKDF_-.js";import"./isObject-DSSIav4-.js";import"./Button-CdLpTr9e.js";import"./ActionButton-DYLdPsdu.js";import"./Checkbox-CbSXeNsV.js";import"./useValueChanged-DLxmyEKa.js";import"./CollapsiblePanel-ChYEXrik.js";import"./MultiColumnSortDialog-DUiRfpw5.js";import"./MenuTrigger-MfwaUfhz.js";import"./CompositeItem-C9wVVHjV.js";import"./ToolbarRootContext-0AKJJTto.js";import"./getDisabledMountTransitionStyles-B25FvRYf.js";import"./getPseudoElementBounds-CwdM8KDF.js";import"./chevron-down-iwF-GvDx.js";import"./index-jMor5Orb.js";import"./error-ASL9njaz.js";import"./BaseCbacBanner-BDO9PVXw.js";import"./makeExternalStore-C_DSvJXm.js";import"./Tooltip-BLxhet1u.js";import"./PopoverPopup-Cx5w2fOt.js";import"./toNumber-eKXy_LYW.js";import"./useOsdkClient-Bfml6VSk.js";import"./tick-BmvgPI_g.js";import"./DropdownField-DWkbu1wg.js";import"./withOsdkMetrics-v2D5VOnL.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
