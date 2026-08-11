import{f as b,j as a,r as i}from"./iframe-BYxEOIgJ.js";import{O as u}from"./object-table-ZGMv6O3p.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CYfeVk8W.js";import"./Table-BQsMFTl4.js";import"./index-DKKaubsW.js";import"./Dialog-9IDRR8Td.js";import"./cross-BIhLN6o-.js";import"./svgIconContainer-BEmlyg-y.js";import"./useBaseUiId-nfkORe0E.js";import"./InternalBackdrop-DNuz-SJQ.js";import"./composite-Cx4sqESm.js";import"./index-tQSEfkeh.js";import"./index-BOJvayi6.js";import"./index-DwnZeONY.js";import"./useEventCallback-Wzc0f3SD.js";import"./SkeletonBar-DkY0CIx2.js";import"./LoadingCell-CQeIxM7f.js";import"./ColumnConfigDialog-C0b_e5gr.js";import"./DraggableList-WHk-6vds.js";import"./search-D-odk6X_.js";import"./Input-DjFm0Vep.js";import"./useControlled-CUdaOkZq.js";import"./isEqual-BhWNui4X.js";import"./isObject-LQOhNoGU.js";import"./Button-BD1cn9XN.js";import"./ActionButton--q9fC4uz.js";import"./Checkbox-B2UQUxW9.js";import"./useValueChanged-Bdy5pI-C.js";import"./CollapsiblePanel-Cq48y23I.js";import"./MultiColumnSortDialog-CxLVk_VS.js";import"./MenuTrigger-Cj5R0CGN.js";import"./CompositeItem-DmtenJN8.js";import"./ToolbarRootContext-49DlEGV6.js";import"./getDisabledMountTransitionStyles-C9TiHE4J.js";import"./getPseudoElementBounds-C8ySOvtU.js";import"./chevron-down-CrQY9uCp.js";import"./index-DHS4kq0m.js";import"./error-Cj50jG_k.js";import"./BaseCbacBanner-DeIJCNJT.js";import"./makeExternalStore-MdKyv_9V.js";import"./Tooltip-BGdIr3DT.js";import"./PopoverPopup-BjEwSVm1.js";import"./toNumber-CMjVeBac.js";import"./useOsdkClient-CNrMQGxQ.js";import"./tick-C7W402bP.js";import"./DropdownField-DOymprAa.js";import"./withOsdkMetrics-C8n5_A-t.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
