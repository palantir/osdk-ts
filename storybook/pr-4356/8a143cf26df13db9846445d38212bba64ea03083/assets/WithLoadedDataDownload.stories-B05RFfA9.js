import{f as b,j as a,r as i}from"./iframe-CaPOT9dY.js";import{O as u}from"./object-table-qfLAuJ5S.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CSJav7MA.js";import"./Table-BJZtcsXN.js";import"./index-Ho8J3uum.js";import"./Dialog-CsbG8SLi.js";import"./cross-Cgcm5Piu.js";import"./svgIconContainer-4uAuruPa.js";import"./useBaseUiId-53CqlhMX.js";import"./InternalBackdrop-BbFTOoCN.js";import"./composite-D8pTE5q2.js";import"./index-DSxM7sDI.js";import"./index-93ZDer7j.js";import"./index-d9vg3R-3.js";import"./useEventCallback-CSKwn_Ie.js";import"./SkeletonBar-CBVZTqOR.js";import"./LoadingCell-VK71aZjr.js";import"./ColumnConfigDialog-CP96cicV.js";import"./DraggableList-BWgG_TiL.js";import"./search-BIzPRVvQ.js";import"./Input-BuXaNZ_G.js";import"./useControlled-Desmn_f_.js";import"./Button-D6M8kmX2.js";import"./small-cross-ZhzSbXj6.js";import"./ActionButton-CRVG5z67.js";import"./Checkbox-B9GRJgNz.js";import"./useValueChanged-oispFcSe.js";import"./CollapsiblePanel-tClOO0R1.js";import"./MultiColumnSortDialog-BHr2SJsZ.js";import"./MenuTrigger-Cb2AZf0p.js";import"./CompositeItem-BhgS6pAU.js";import"./ToolbarRootContext-DKDtUl7Y.js";import"./getDisabledMountTransitionStyles-CDxcKCec.js";import"./getPseudoElementBounds-Dkvs0jvh.js";import"./chevron-down-D1yx8BpO.js";import"./index-BAZzkEjb.js";import"./error-D6rGwYTa.js";import"./BaseCbacBanner-C4kARAgI.js";import"./makeExternalStore-B6NoTbNG.js";import"./Tooltip-Bh3th1RS.js";import"./PopoverPopup-MxHlhfA4.js";import"./debounce-CKJ32hy1.js";import"./useOsdkClient-DrLWF_Tb.js";import"./tick-BpCC2p4B.js";import"./DropdownField-BaMFvM0M.js";import"./isEqual-BBGsGrE4.js";import"./withOsdkMetrics-CqZfQr7E.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
