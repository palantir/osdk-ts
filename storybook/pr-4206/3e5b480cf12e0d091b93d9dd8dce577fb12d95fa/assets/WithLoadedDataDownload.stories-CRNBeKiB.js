import{f as b,j as a,r as i}from"./iframe-Cul2E1vG.js";import{O as u}from"./object-table-CIO2ioDr.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper--6M4Khrx.js";import"./Table-Bum8c-iM.js";import"./index-Bn5VDq5b.js";import"./Dialog-DlflpEpN.js";import"./cross-C6zh1HjN.js";import"./svgIconContainer-mVJAcMp8.js";import"./useBaseUiId-BQIQ8jck.js";import"./InternalBackdrop-m5F5-2dG.js";import"./composite-SNvyYtRl.js";import"./index-cnCRVpDv.js";import"./index-B39_Zfhs.js";import"./index-BgP6GmOx.js";import"./useEventCallback-DWZk488X.js";import"./SkeletonBar-XecFs5pz.js";import"./LoadingCell-TNVaOATH.js";import"./ColumnConfigDialog-DOH9iw-n.js";import"./DraggableList-CHj5NpTN.js";import"./search-BwSeGY7Y.js";import"./Input-DRePQ-W6.js";import"./useControlled-CzFr7QRD.js";import"./Button-oDRXfShn.js";import"./small-cross-DLuZoUhq.js";import"./ActionButton-BcIcAh2z.js";import"./Checkbox-DVjhvMN4.js";import"./useValueChanged-B-W2cV9q.js";import"./CollapsiblePanel-BalN1idY.js";import"./MultiColumnSortDialog-CFEpc927.js";import"./MenuTrigger-KvGWfiFl.js";import"./CompositeItem-CvRXWH1T.js";import"./ToolbarRootContext-3DRfEU0Q.js";import"./getDisabledMountTransitionStyles-D8gt5JL7.js";import"./getPseudoElementBounds-Bzvith0Z.js";import"./chevron-down-zZ58BLda.js";import"./index-C8CW-UMA.js";import"./error-Bp_j0tyg.js";import"./BaseCbacBanner-DueaaImF.js";import"./makeExternalStore-Dw-8aD8B.js";import"./Tooltip-DXd-c-BV.js";import"./PopoverPopup-DOy0S3uG.js";import"./debounce-DapI4ZKL.js";import"./useOsdkClient-DJKFKBMb.js";import"./tick-CiTQftSD.js";import"./DropdownField-BbPTQMjY.js";import"./isEqual-Cm_OyyYX.js";import"./withOsdkMetrics-Cv3w3vr0.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
