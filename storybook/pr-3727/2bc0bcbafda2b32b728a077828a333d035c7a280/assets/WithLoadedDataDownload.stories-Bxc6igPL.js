import{f as b,j as a,r as i}from"./iframe-0rqtpzMT.js";import{O as u}from"./object-table-Cz3d6cZe.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C-4TUSMQ.js";import"./Table-CPD5Qdu0.js";import"./index-BkI2yq5W.js";import"./Dialog-BIUze-o4.js";import"./cross-CJIAGxzU.js";import"./svgIconContainer-Cy8TuwcG.js";import"./useBaseUiId-BAMevgqu.js";import"./InternalBackdrop-D2IP-y2h.js";import"./composite-vErU7hi9.js";import"./index-BP9VSl-L.js";import"./index-BG27IzRI.js";import"./index-Ce1cZGPe.js";import"./useEventCallback-BioThUPP.js";import"./SkeletonBar-DAYQdUnn.js";import"./LoadingCell-SEVVEEnE.js";import"./ColumnConfigDialog-CmGZWqIs.js";import"./DraggableList-21ie_-fF.js";import"./search-DRt2tHKM.js";import"./Input-DbYHqXSd.js";import"./useControlled-Bj0iKUJ5.js";import"./isEqual-6k5RWrRD.js";import"./isObject-BojdEPtU.js";import"./Button-BWPtdaY9.js";import"./ActionButton-DtlPIL4m.js";import"./Checkbox-C8mdSx2i.js";import"./useValueChanged-DhKnwWoS.js";import"./CollapsiblePanel-DYhS8ISy.js";import"./MultiColumnSortDialog-BEli9Ysz.js";import"./MenuTrigger-DgXmgsNo.js";import"./CompositeItem-BEzpzojI.js";import"./ToolbarRootContext-C5RokYlI.js";import"./getDisabledMountTransitionStyles-Dk7Hgksp.js";import"./getPseudoElementBounds-z5gFyQuS.js";import"./chevron-down-BqYHuFRP.js";import"./index-2cq3jVVy.js";import"./error-cQ5-x4_F.js";import"./BaseCbacBanner-CfteBbCK.js";import"./makeExternalStore-olQJIU6f.js";import"./Tooltip-BjJLMpJP.js";import"./PopoverPopup-MHUJEvl_.js";import"./toNumber-pnfxMpiK.js";import"./useOsdkClient-CF7NBAgG.js";import"./tick-iyaG4Gbd.js";import"./DropdownField-BORP45DY.js";import"./withOsdkMetrics-B7-f_PGX.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
