import{f as b,j as a,r as i}from"./iframe-lPbU9V6o.js";import{O as u}from"./object-table-CIp0ToWc.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CfcQGX_H.js";import"./Table-BJV2q72H.js";import"./index-BgY5H93d.js";import"./Dialog-DuRrc0QT.js";import"./cross-1MrZuHJo.js";import"./svgIconContainer-DdnoMbP6.js";import"./useBaseUiId-B5KMMy-h.js";import"./InternalBackdrop-BhwiTjVN.js";import"./composite-COK8eLgF.js";import"./index-D_uPtWn9.js";import"./index-Dw0sPzkR.js";import"./index-BQiDKTAm.js";import"./useEventCallback-CQBa0_96.js";import"./SkeletonBar-BqV2iuqD.js";import"./LoadingCell-lrdD8Ijg.js";import"./ColumnConfigDialog-CkGE76dh.js";import"./DraggableList-Cbah8ZBW.js";import"./search-BpuAyapl.js";import"./Input-Bs12mOix.js";import"./useControlled-DmJZYhoD.js";import"./Button-B8cvgo0T.js";import"./small-cross-BMajOB7A.js";import"./ActionButton-Ct_RY74Q.js";import"./Checkbox-C7E2drHm.js";import"./useValueChanged-D78zyaD8.js";import"./CollapsiblePanel-D3QrSoDf.js";import"./MultiColumnSortDialog-CVIfx6wW.js";import"./MenuTrigger-DLj-E7PY.js";import"./CompositeItem-vBOQ9KDG.js";import"./ToolbarRootContext-CioZEdCf.js";import"./getDisabledMountTransitionStyles-BP3w0PCy.js";import"./getPseudoElementBounds-C_eOrCbl.js";import"./chevron-down-BHa1JvBu.js";import"./index-CKx0DSN2.js";import"./error-Ba94mTx6.js";import"./BaseCbacBanner-B8fuQNun.js";import"./makeExternalStore-CvGEVSlU.js";import"./Tooltip-DX66rpSM.js";import"./PopoverPopup-Bdk46Ceq.js";import"./debounce-Cj3rKq4j.js";import"./useOsdkClient-DdgRVKHN.js";import"./tick-DR2B2bzz.js";import"./DropdownField-C-MLBQws.js";import"./isEqual-B1HSOOeH.js";import"./withOsdkMetrics-CF099yPb.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
