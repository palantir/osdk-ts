import{f as b,j as a,r as i}from"./iframe-B28z8hIY.js";import{O as u}from"./object-table-DuX6yprJ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D8qOl9Xf.js";import"./Table-CkDfUUL2.js";import"./index-DMpY9C2v.js";import"./Dialog-Bp7hHvol.js";import"./cross-CDkShHPW.js";import"./svgIconContainer-Dhm8X-BV.js";import"./useBaseUiId-DM58hJy6.js";import"./InternalBackdrop-CeDlVTrh.js";import"./composite-DNMsan99.js";import"./index-djAwGKCo.js";import"./index-Bq3ZgDfN.js";import"./index-BlVCSLA8.js";import"./useEventCallback-DrAp6rDo.js";import"./SkeletonBar-DXYlcYZk.js";import"./LoadingCell-Djdd6Yw8.js";import"./ColumnConfigDialog-D9VX9ial.js";import"./DraggableList-CMVFvtRa.js";import"./search-CmPRdAAA.js";import"./Input-DcxMr_KP.js";import"./useControlled-ss5L4whE.js";import"./isEqual-CO9g_nbd.js";import"./isObject-DSQXr_fO.js";import"./Button-uH6gdAsd.js";import"./ActionButton-D748JeaI.js";import"./Checkbox-C6RfZG6k.js";import"./useValueChanged-tTHj3kBw.js";import"./CollapsiblePanel-BQoexJm7.js";import"./MultiColumnSortDialog-Bnz8XLD9.js";import"./MenuTrigger-BmcDv0Yc.js";import"./CompositeItem-Bq1q5tVI.js";import"./ToolbarRootContext-D22XPhTr.js";import"./getDisabledMountTransitionStyles-B48XXR4D.js";import"./getPseudoElementBounds-MzI8NVer.js";import"./chevron-down-D_GWy34J.js";import"./index-BZgkCUQe.js";import"./error-CObZLwnt.js";import"./BaseCbacBanner-D7jyfgJe.js";import"./makeExternalStore-Dcx7-1vD.js";import"./Tooltip-DdCN7MaI.js";import"./PopoverPopup-D6bOInCn.js";import"./toNumber-CS-3Wsgc.js";import"./useOsdkClient-CV7QSUV2.js";import"./tick-DSR81z-h.js";import"./DropdownField-CUOugPeD.js";import"./withOsdkMetrics-GTEGqRPt.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
