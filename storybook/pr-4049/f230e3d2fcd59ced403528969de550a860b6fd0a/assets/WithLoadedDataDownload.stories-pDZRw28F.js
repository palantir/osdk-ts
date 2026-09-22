import{f as b,j as a,r as i}from"./iframe-CxxM9p3K.js";import{O as u}from"./object-table-BCOM_Q_i.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Clfhc9e2.js";import"./Table-CERILenu.js";import"./index-BFBsPuy5.js";import"./Dialog-CeAU4pGS.js";import"./cross-DVlZmvQu.js";import"./svgIconContainer-BDX64ThR.js";import"./useBaseUiId-6hcgy7hR.js";import"./InternalBackdrop-CLXXO-pE.js";import"./composite-DnTfWsZ7.js";import"./index-Cmw2FWOc.js";import"./index-U9rL3bD6.js";import"./index-ChdzrcBL.js";import"./useEventCallback-twJMSJh5.js";import"./SkeletonBar-BmxyWPnR.js";import"./LoadingCell-C31Aag0D.js";import"./ColumnConfigDialog-BvvSCjGt.js";import"./DraggableList-0r1jvYcu.js";import"./search-BLctbnBP.js";import"./Input-BEL6yzPH.js";import"./useControlled-BM7wy7zH.js";import"./Button-BSoYYLdN.js";import"./small-cross-BeQrGWQ3.js";import"./ActionButton-VAbO0Pky.js";import"./Checkbox-1FKOIi3w.js";import"./useValueChanged-DOWNQBb0.js";import"./CollapsiblePanel-BS-lVxoG.js";import"./MultiColumnSortDialog-k8mQSZef.js";import"./MenuTrigger-CdIkBQVS.js";import"./CompositeItem-D91fXLRV.js";import"./ToolbarRootContext-DrjoHCqu.js";import"./getDisabledMountTransitionStyles-DTSBvSw4.js";import"./getPseudoElementBounds-DYfgqtqr.js";import"./chevron-down-jQiKIGSz.js";import"./index-DXQ0Y341.js";import"./error-CFTb0-g7.js";import"./BaseCbacBanner-DeC626Ph.js";import"./makeExternalStore-Ryz_3n-W.js";import"./Tooltip-CDs-lAuM.js";import"./PopoverPopup-DAq0-7NO.js";import"./debounce-CX8zVuen.js";import"./useOsdkClient-CYTSjB1o.js";import"./tick-BPFcYePS.js";import"./DropdownField-nXSmGKVx.js";import"./isEqual-3hwHAxpd.js";import"./withOsdkMetrics-axCUhS1P.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
