import{f as b,j as a,r as i}from"./iframe-DOTdPJBy.js";import{O as u}from"./object-table-Cvktbl7a.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CORjxHe2.js";import"./Table-DRpmr99j.js";import"./index-7LsoLiQC.js";import"./Dialog-CV1LYgzP.js";import"./cross-m4Jtx501.js";import"./svgIconContainer-6XMQleNK.js";import"./useBaseUiId-CSa0UWdd.js";import"./InternalBackdrop-DNHBzMyX.js";import"./composite-DBLj_rqs.js";import"./index-DrAqVeQj.js";import"./index-DoVR9M-q.js";import"./index-DVc1s_km.js";import"./useEventCallback-DMJOBNH7.js";import"./SkeletonBar-C0cOwVEs.js";import"./LoadingCell-BOm33Zz_.js";import"./ColumnConfigDialog-CNXMHO4a.js";import"./DraggableList-GVkWro8x.js";import"./search-CQ447Er6.js";import"./Input-Bzm_LY5N.js";import"./useControlled-CEuBm35N.js";import"./Button-HfXhKbNv.js";import"./small-cross-ByN_OFW-.js";import"./ActionButton-Dl69JNtr.js";import"./Checkbox-CNBACtYZ.js";import"./useValueChanged-FqMJibv1.js";import"./CollapsiblePanel-BYNhB3x2.js";import"./MultiColumnSortDialog-D8qTQ-HE.js";import"./MenuTrigger-DjxBECOg.js";import"./CompositeItem-fENznLjR.js";import"./ToolbarRootContext-BMXrmtsD.js";import"./getDisabledMountTransitionStyles-BG-emIK6.js";import"./getPseudoElementBounds-Dx1WL7QY.js";import"./chevron-down-D9Jqe_yM.js";import"./index-YCEALnwo.js";import"./error-1dsahiX9.js";import"./BaseCbacBanner-C_qv5zih.js";import"./makeExternalStore-DXS9zRtb.js";import"./Tooltip-C72PQQIW.js";import"./PopoverPopup-DH-ybkjn.js";import"./debounce-CioZWleO.js";import"./useOsdkClient-C681iYsL.js";import"./tick-BFLKO0JY.js";import"./DropdownField-CCEf2ECL.js";import"./isEqual-C5BEqgHK.js";import"./withOsdkMetrics-w09EOhg9.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
