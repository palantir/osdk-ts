import{f as b,j as a,r as i}from"./iframe-B0U1IQX4.js";import{O as u}from"./object-table-DU-i9Wwo.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DiPVcWmm.js";import"./Table-DSvTXIVi.js";import"./index-D1KZRywE.js";import"./Dialog-C-t3ZORO.js";import"./cross-DuFcQq4i.js";import"./svgIconContainer-C5UOcoAR.js";import"./useBaseUiId-BYy3PLTZ.js";import"./InternalBackdrop-CR_tzpk3.js";import"./composite-CsiVeWul.js";import"./index-D9gCwCdH.js";import"./index-BCAnJ-ng.js";import"./index-cymf7Sk-.js";import"./useEventCallback-psrziwfU.js";import"./SkeletonBar-DG8DA1lc.js";import"./LoadingCell-DMH3wxy0.js";import"./ColumnConfigDialog-CAmdKZOw.js";import"./DraggableList-DIROkhvc.js";import"./search-TA6KQkXz.js";import"./Input-DxzIDyUo.js";import"./useControlled-CRRNdgyj.js";import"./Button-xPZvVWHf.js";import"./small-cross-BpMsA5cq.js";import"./ActionButton-0i0W7jAV.js";import"./Checkbox--a3P63C2.js";import"./useValueChanged-DjbPPhzb.js";import"./CollapsiblePanel-CDvcpi1D.js";import"./MultiColumnSortDialog-knebl6ML.js";import"./MenuTrigger-fTPJ_Gc5.js";import"./CompositeItem-DHef4_L4.js";import"./ToolbarRootContext-CcCkr_bi.js";import"./getDisabledMountTransitionStyles-B-Kz2nRd.js";import"./getPseudoElementBounds-CGPWBcaM.js";import"./chevron-down-DeePtBa4.js";import"./index-DF7Hoa49.js";import"./error-jOboOslV.js";import"./BaseCbacBanner-D30NdAjZ.js";import"./makeExternalStore-f14_qRGB.js";import"./Tooltip-B8U1i2GM.js";import"./PopoverPopup-CZIoD0Rp.js";import"./debounce-Cx5RzNC6.js";import"./useOsdkClient-B7fDZnt9.js";import"./tick-C4uqHxqI.js";import"./DropdownField-B4i07c_b.js";import"./isEqual-Ck562tyb.js";import"./withOsdkMetrics-CSt3jXAU.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
