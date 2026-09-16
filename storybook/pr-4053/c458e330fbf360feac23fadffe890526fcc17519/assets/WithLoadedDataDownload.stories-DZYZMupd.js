import{f as b,j as a,r as i}from"./iframe-C1CKZi3d.js";import{O as u}from"./object-table-DcBSNvfE.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CjKKPLuI.js";import"./Table-D3YAmEYz.js";import"./index-22zkYmfP.js";import"./Dialog-dWuSBYO5.js";import"./cross-DgfaXAP1.js";import"./svgIconContainer-5vjXCpW3.js";import"./useBaseUiId-kwR7401f.js";import"./InternalBackdrop-CQIAa_cE.js";import"./composite-BHop2ulG.js";import"./index-BaUESoup.js";import"./index-TnDt-8d7.js";import"./index-Z2n3umrQ.js";import"./useEventCallback-BlUSuMKe.js";import"./SkeletonBar-DxYmE8LG.js";import"./LoadingCell-3i-RVTzi.js";import"./ColumnConfigDialog-B8E6aKW_.js";import"./DraggableList-IaJYya1-.js";import"./search-Crhz7pqe.js";import"./Input-B9v9dpXG.js";import"./useControlled-DsloswUn.js";import"./Button-C8GCJke3.js";import"./small-cross-HkAOyTJK.js";import"./ActionButton-fTBY13Di.js";import"./Checkbox-y9WdOHPb.js";import"./useValueChanged-CDUxAEZl.js";import"./CollapsiblePanel-DEPs9Vux.js";import"./MultiColumnSortDialog-Biocbc61.js";import"./MenuTrigger-BuXfTXAg.js";import"./CompositeItem-D6jDCgAH.js";import"./ToolbarRootContext-DaCQoKRW.js";import"./getDisabledMountTransitionStyles-BEchivte.js";import"./getPseudoElementBounds-BNheb4Iy.js";import"./chevron-down-x4h-9kMe.js";import"./index-Bxl9BKgt.js";import"./error-CvIXlX6i.js";import"./BaseCbacBanner-as2b2fdQ.js";import"./makeExternalStore-B-NF9qcV.js";import"./Tooltip-D_3BkBEK.js";import"./PopoverPopup-CDFsG2BZ.js";import"./debounce-D14wviNn.js";import"./useOsdkClient-CZN2Sm0O.js";import"./tick-Bf2DRJjf.js";import"./DropdownField-CnUC2D2t.js";import"./isEqual-DOxjg893.js";import"./withOsdkMetrics-DM8OHQYr.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
