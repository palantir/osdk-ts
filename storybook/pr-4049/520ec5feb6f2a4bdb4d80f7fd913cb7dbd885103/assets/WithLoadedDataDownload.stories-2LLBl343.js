import{f as b,j as a,r as i}from"./iframe-CJFgfqJQ.js";import{O as u}from"./object-table-BIKPZuQr.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CB2bVH8w.js";import"./Table-BfIW66aU.js";import"./index-BDuqkffg.js";import"./Dialog-D4LsLmkw.js";import"./cross-CGqAK_rm.js";import"./svgIconContainer-SiM3kExX.js";import"./useBaseUiId-KMobehZg.js";import"./InternalBackdrop-DVgaqM5_.js";import"./composite-D_U5DxNy.js";import"./index-D8JNb3--.js";import"./index-DCMHFOQf.js";import"./index-Dmlu-QeK.js";import"./useEventCallback-DwOB9kEk.js";import"./SkeletonBar-dUsinxB7.js";import"./LoadingCell-zvH6oYga.js";import"./ColumnConfigDialog-CSyGSnFa.js";import"./DraggableList-DHvtlonC.js";import"./search-DdMhLoUU.js";import"./Input-DmfjYINK.js";import"./useControlled-HhXb2sFD.js";import"./Button-cr6PNOy5.js";import"./small-cross-Bvt4-Cci.js";import"./ActionButton-qaoG7oqA.js";import"./Checkbox-DKqm-Ws3.js";import"./useValueChanged-DDVfSaOH.js";import"./CollapsiblePanel-B5YF5ZIm.js";import"./MultiColumnSortDialog-B88gd12P.js";import"./MenuTrigger-BYgin9ek.js";import"./CompositeItem-8xWeC0Vv.js";import"./ToolbarRootContext-DJb0kYMX.js";import"./getDisabledMountTransitionStyles-B5vF6vDs.js";import"./getPseudoElementBounds-BJ_KrdWI.js";import"./chevron-down-DGQA7IYp.js";import"./index-DFjPXJ5y.js";import"./error-DUmxQ8UR.js";import"./BaseCbacBanner-DbRUrc0m.js";import"./makeExternalStore-v_n6tY7p.js";import"./Tooltip-Dv9997-7.js";import"./PopoverPopup-Cs5VOili.js";import"./debounce-CeHNcT_D.js";import"./useOsdkClient-DsGPKyv1.js";import"./tick-DFl5nZ0u.js";import"./DropdownField-DwonOWM7.js";import"./isEqual-CMNbp24S.js";import"./withOsdkMetrics-DL4u8lDZ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
