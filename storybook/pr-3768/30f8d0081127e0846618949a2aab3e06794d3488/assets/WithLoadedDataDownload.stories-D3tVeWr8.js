import{f as b,j as a,r as i}from"./iframe-BPejH73A.js";import{O as u}from"./object-table-BM1W0EFU.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DroWujke.js";import"./Table-BQaqgvCi.js";import"./index-B90tI0ID.js";import"./Dialog-DRUUi3Wp.js";import"./cross-DBEmAhHS.js";import"./svgIconContainer-CEusbL27.js";import"./useBaseUiId-CFfBCCWK.js";import"./InternalBackdrop-DSQpswgn.js";import"./composite-_PR9ooYN.js";import"./index-2yc_vRjp.js";import"./index-CbqreBW3.js";import"./index-DBYivAkQ.js";import"./useEventCallback-1Utq1QRF.js";import"./SkeletonBar-D6Oa3KA0.js";import"./LoadingCell-CBo5MV-z.js";import"./ColumnConfigDialog-CpLlA6jk.js";import"./DraggableList-ClUkgDHl.js";import"./search-Dr4m-uvV.js";import"./Input-BzT6UcMr.js";import"./useControlled-CsZk8XdE.js";import"./isEqual-bb9A_F_C.js";import"./isObject-C7-47GMK.js";import"./Button-Ckubio33.js";import"./ActionButton-D1_EuqHU.js";import"./Checkbox--6IOVxGe.js";import"./useValueChanged-B-XYYeM4.js";import"./CollapsiblePanel-BgkKbEQJ.js";import"./MultiColumnSortDialog-BfNxIUal.js";import"./MenuTrigger-gLOb7BVs.js";import"./CompositeItem-CePwhpAH.js";import"./ToolbarRootContext-BfoWDH0x.js";import"./getDisabledMountTransitionStyles-CbVOYQ3J.js";import"./getPseudoElementBounds-BT3Ejfqn.js";import"./chevron-down-B-cXR2Ke.js";import"./index-CxUM6NOw.js";import"./error-Cd-jBlIi.js";import"./BaseCbacBanner-hFdTFYmC.js";import"./makeExternalStore-BSENvNfl.js";import"./Tooltip-DPw8xUBx.js";import"./PopoverPopup-DPrLdIK8.js";import"./toNumber-YHv5OcAe.js";import"./useOsdkClient-CCc85gpw.js";import"./tick-BeQLtX8e.js";import"./DropdownField-CPQHI8OE.js";import"./withOsdkMetrics-Wb8pNEXr.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
