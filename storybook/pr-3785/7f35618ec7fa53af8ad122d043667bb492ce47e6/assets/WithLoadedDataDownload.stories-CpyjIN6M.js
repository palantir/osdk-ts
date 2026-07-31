import{f as b,j as a,r as i}from"./iframe-iYC6vAB_.js";import{O as u}from"./object-table-B7XVPyF5.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Br5mua1v.js";import"./Table-rO63C4On.js";import"./index-DpOo1606.js";import"./Dialog-DW6s5zNf.js";import"./cross-BrbS3Icp.js";import"./svgIconContainer-D-ZasT0L.js";import"./useBaseUiId-B9eyS0D0.js";import"./InternalBackdrop-7PMuJeV1.js";import"./composite-v77FsArx.js";import"./index-QX0Uv_MK.js";import"./index-Dz2p1JfI.js";import"./index-DWu-8pfX.js";import"./useEventCallback-BGSAbgMA.js";import"./SkeletonBar-Ct_r8P3y.js";import"./LoadingCell-CizPVaWx.js";import"./ColumnConfigDialog-BVvYjqpJ.js";import"./DraggableList-BgljoLpl.js";import"./search-BDtw4QLY.js";import"./Input-BWavTvGX.js";import"./useControlled-C6rc4bi8.js";import"./isEqual-BvnyoED8.js";import"./isObject-DsmXICAg.js";import"./Button-CYu6aPyK.js";import"./ActionButton-XdMdSvPG.js";import"./Checkbox-ChuAqLvm.js";import"./useValueChanged-DBkFN2BU.js";import"./CollapsiblePanel-CoFoYim3.js";import"./MultiColumnSortDialog-DEkKEvGx.js";import"./MenuTrigger-CCgnUVbi.js";import"./CompositeItem-BMBEvSZ_.js";import"./ToolbarRootContext-DM4XCCSQ.js";import"./getDisabledMountTransitionStyles-BbjC2268.js";import"./getPseudoElementBounds-BDlA4Lv9.js";import"./chevron-down-BGy8KVlz.js";import"./index-_Y1lHNIx.js";import"./error-D4wx1m5V.js";import"./BaseCbacBanner-KGPFmWJj.js";import"./makeExternalStore-Ci4r-VA-.js";import"./Tooltip-DC0-jila.js";import"./PopoverPopup-DPOgv1BI.js";import"./toNumber-CGIbY5q9.js";import"./useOsdkClient-KtJ7es4q.js";import"./tick-qPYquHw-.js";import"./DropdownField-BQ1K9Kux.js";import"./withOsdkMetrics-qijyDy6X.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
