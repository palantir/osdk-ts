import{f as b,j as a,r as i}from"./iframe-CWeddnom.js";import{O as u}from"./object-table-Cmk1Tq7o.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-P6cBfe2q.js";import"./Table-CAg7JBCr.js";import"./index-Ce_LLk-c.js";import"./Dialog-DmJOQXeH.js";import"./cross-Dfng7QTU.js";import"./svgIconContainer-DmSfLyH4.js";import"./useBaseUiId-BHqcFBZd.js";import"./InternalBackdrop-CUe8mTus.js";import"./composite-4vKCxbin.js";import"./index-C-EhxOhv.js";import"./index-DmTK8ivk.js";import"./index-BKOWYi9Q.js";import"./useEventCallback-BLR7QFGQ.js";import"./SkeletonBar-DSJtFa11.js";import"./LoadingCell-DyoT1BNV.js";import"./ColumnConfigDialog-D4S5CB4u.js";import"./DraggableList-CJQgDYL-.js";import"./search-DgtO9tzy.js";import"./Input-DKw_pk-9.js";import"./useControlled-D25GPjW5.js";import"./Button-B3SaH4FN.js";import"./small-cross-BRS5cwBI.js";import"./ActionButton-lh-w21Ih.js";import"./Checkbox-DnottsQR.js";import"./useValueChanged-D1MsbkTY.js";import"./CollapsiblePanel-11i6tH5E.js";import"./MultiColumnSortDialog-DNGEJFI2.js";import"./MenuTrigger-D0XdkPwu.js";import"./CompositeItem-cY4WW7Zc.js";import"./ToolbarRootContext-Dr7NuLF0.js";import"./getDisabledMountTransitionStyles-CiLe7hHe.js";import"./getPseudoElementBounds-Gi24AHc2.js";import"./chevron-down-KrLWmTY_.js";import"./index-J0u8aPtF.js";import"./error-B2dkz28B.js";import"./BaseCbacBanner-HikvfUlP.js";import"./makeExternalStore-Cr_BtxbS.js";import"./Tooltip-CUH0BAfU.js";import"./PopoverPopup-CZL41Qwp.js";import"./debounce-COR7M_m6.js";import"./useOsdkClient-CkY_R6LW.js";import"./tick-nc1mWgQb.js";import"./DropdownField-BPGrCOqN.js";import"./isEqual-BOrxupAe.js";import"./withOsdkMetrics-DJ5t4kKo.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
