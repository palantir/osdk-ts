import{f as b,j as a,r as i}from"./iframe-MqLOwkyt.js";import{O as u}from"./object-table-BHkETUN5.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BI4FsuTE.js";import"./Table-DqqKcIb5.js";import"./index-CYsLXWAq.js";import"./Dialog-_xEsZnGL.js";import"./cross-CrEHvwXy.js";import"./svgIconContainer-CpAJhJ6x.js";import"./useBaseUiId-xxBCoKYK.js";import"./InternalBackdrop-wUQuVyKv.js";import"./composite-NEozLeoL.js";import"./index-B53EBtE1.js";import"./index-DYFGinsg.js";import"./index-C3pKlSiY.js";import"./useEventCallback-Cw57MZdH.js";import"./SkeletonBar-BnG9_9qz.js";import"./LoadingCell-D1NCsd33.js";import"./ColumnConfigDialog-D2wyI7o0.js";import"./DraggableList-CWMagUrS.js";import"./search-CxS15Af3.js";import"./Input-CquXhMGI.js";import"./useControlled-DHUJWjTK.js";import"./Button-CBsI2feD.js";import"./small-cross-CvOnK5fR.js";import"./ActionButton-_HVLo196.js";import"./Checkbox-CCqzArHE.js";import"./useValueChanged-e8AMyRv1.js";import"./CollapsiblePanel-C5mk5Aup.js";import"./MultiColumnSortDialog-XR2vQqAi.js";import"./MenuTrigger-Dw8fe9Ph.js";import"./CompositeItem-cvG07j6P.js";import"./ToolbarRootContext-YqisKJxJ.js";import"./getDisabledMountTransitionStyles-B3gQ57ui.js";import"./getPseudoElementBounds-BRF46eiy.js";import"./chevron-down-CCwfXTdl.js";import"./index-D1QWFyFj.js";import"./error-CN-8K1J8.js";import"./BaseCbacBanner-BMffm3ay.js";import"./makeExternalStore-DNVCbBN4.js";import"./Tooltip-CMpFEXG9.js";import"./PopoverPopup-ixK-S_Jv.js";import"./debounce-DCOl06T4.js";import"./useOsdkClient-DyeTERCd.js";import"./tick-3f1cvuZk.js";import"./DropdownField-BVO8q73p.js";import"./isEqual-ZdngOk8z.js";import"./withOsdkMetrics-D3nMdfcR.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
