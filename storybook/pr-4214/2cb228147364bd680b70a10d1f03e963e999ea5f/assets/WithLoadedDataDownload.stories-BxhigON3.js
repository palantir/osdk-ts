import{f as b,j as a,r as i}from"./iframe-Ch9GCQZw.js";import{O as u}from"./object-table-udIH3ti7.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DnJKIcik.js";import"./Table-BO8sOs9i.js";import"./index-BWo0Chvm.js";import"./Dialog-Cti3TihL.js";import"./cross-BBG8uB8A.js";import"./svgIconContainer-DaQYNeFs.js";import"./useBaseUiId-BHSh6ZdF.js";import"./InternalBackdrop-DiQHfJed.js";import"./composite-B_lrLvaS.js";import"./index-CoyQ9qTH.js";import"./index-DpdzW1OH.js";import"./index-CooRRF-s.js";import"./useEventCallback-BmWtV1Ho.js";import"./SkeletonBar-Df6Ulzih.js";import"./LoadingCell-CmRzlKg4.js";import"./ColumnConfigDialog-BpaIJfKX.js";import"./DraggableList-Db-hzNij.js";import"./search-Bgjfk80F.js";import"./Input-M42Jtpmt.js";import"./useControlled-DlKs0eKw.js";import"./Button-lGY5omo3.js";import"./small-cross-Avc7MGqG.js";import"./ActionButton-Cb3Wx3py.js";import"./Checkbox-Bk0OPOIj.js";import"./useValueChanged-DuDVOcc4.js";import"./CollapsiblePanel-BXjVu9cP.js";import"./MultiColumnSortDialog-eX_F_Wyx.js";import"./MenuTrigger-D-ZULnhu.js";import"./CompositeItem-lOcuUhYq.js";import"./ToolbarRootContext-CxoySA_i.js";import"./getDisabledMountTransitionStyles-BRB-pv4J.js";import"./getPseudoElementBounds-DIP85sgc.js";import"./chevron-down-D219skL8.js";import"./index-BPwpWSia.js";import"./error-CMZUpiIv.js";import"./BaseCbacBanner-Bn0YyQ_S.js";import"./makeExternalStore-CXGYFkuo.js";import"./Tooltip-DC42mvHN.js";import"./PopoverPopup-C3k9he2s.js";import"./debounce-CoINGggm.js";import"./useOsdkClient-CbQE4lpc.js";import"./tick-n5pxQxar.js";import"./DropdownField-BkydTfoJ.js";import"./isEqual-DE8dU3SQ.js";import"./withOsdkMetrics-DaboQw0b.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
