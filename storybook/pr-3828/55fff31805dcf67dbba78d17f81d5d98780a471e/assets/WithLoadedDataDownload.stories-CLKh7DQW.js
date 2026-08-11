import{f as b,j as a,r as i}from"./iframe-DSmQkahV.js";import{O as u}from"./object-table-CkzZi9kY.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dze2_dsn.js";import"./Table-CllN2RPz.js";import"./index-BnRpZ-OB.js";import"./Dialog-LzIkvIDp.js";import"./cross-DONTzq6t.js";import"./svgIconContainer-C1VMrcU6.js";import"./useBaseUiId-DZaeVOmY.js";import"./InternalBackdrop-7blCXPeG.js";import"./composite-C0wZ3IJL.js";import"./index-DWtoRZwW.js";import"./index-CVy6K8lz.js";import"./index-CdpWi9dP.js";import"./useEventCallback-DhwsT0sf.js";import"./SkeletonBar-CiX-SKu5.js";import"./LoadingCell-C7TzhMU-.js";import"./ColumnConfigDialog-CkVnTZ7y.js";import"./DraggableList-DQD27J_u.js";import"./search-Dk49NEuy.js";import"./Input-HL00VtIO.js";import"./useControlled-Bc_9AmK8.js";import"./isEqual-CbqZ3cK7.js";import"./isObject-DAQa4V8v.js";import"./Button-Hhcevu4O.js";import"./ActionButton-BAa10iJB.js";import"./Checkbox-CU6hs7sG.js";import"./useValueChanged-BqVC1nP1.js";import"./CollapsiblePanel-BCdIFmjR.js";import"./MultiColumnSortDialog-DcQpZbn7.js";import"./MenuTrigger-B63seZ9q.js";import"./CompositeItem-L3IbO9d7.js";import"./ToolbarRootContext-CEbwg7y3.js";import"./getDisabledMountTransitionStyles-b9fKYi-W.js";import"./getPseudoElementBounds-BxgBGFYQ.js";import"./chevron-down-CfDyW5wu.js";import"./index-DO2tVBOL.js";import"./error-gQAP2laG.js";import"./BaseCbacBanner-BlXdT2_3.js";import"./makeExternalStore-C1pJ6Rb4.js";import"./Tooltip-BPdgoRaU.js";import"./PopoverPopup-CMKW7n-B.js";import"./toNumber-Inwhvwzt.js";import"./useOsdkClient-0hTdvzJX.js";import"./tick-Bbuj3ECR.js";import"./DropdownField-Bw9pwEcz.js";import"./withOsdkMetrics-ChMVQwAE.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
