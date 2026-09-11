import{f as b,j as a,r as i}from"./iframe-2MyeaUzD.js";import{O as u}from"./object-table-LkCsGfkb.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DUn0LkVX.js";import"./Table-DjOWDljB.js";import"./index-NZSVMLpP.js";import"./Dialog-CWDCbvJz.js";import"./cross-CXnhgyvc.js";import"./svgIconContainer-4EX1EfK4.js";import"./useBaseUiId-C0j-SKXM.js";import"./InternalBackdrop-COkt2S-3.js";import"./composite-BVz7tfSY.js";import"./index-Bm-PBo3A.js";import"./index-Ce4PKvPC.js";import"./index-DkVuFE1I.js";import"./useEventCallback-Dm3fVohy.js";import"./SkeletonBar-DIegnhq_.js";import"./LoadingCell-pnT9nXLW.js";import"./ColumnConfigDialog-CxlYZzEl.js";import"./DraggableList-D1634nan.js";import"./search-CpIfmgVn.js";import"./Input-DXMdlMds.js";import"./useControlled-DCne3Llm.js";import"./Button-3arTFTpt.js";import"./small-cross-Blk5AoHi.js";import"./ActionButton-CMwQlm1r.js";import"./Checkbox-B0hGpm5s.js";import"./useValueChanged-B2kp3VOe.js";import"./CollapsiblePanel-_qMM1pI0.js";import"./MultiColumnSortDialog-BbfjJS_D.js";import"./MenuTrigger-3uPegHGQ.js";import"./CompositeItem-D8KecaIg.js";import"./ToolbarRootContext-zLrFE9v8.js";import"./getDisabledMountTransitionStyles-DxjEMg4T.js";import"./getPseudoElementBounds-DpBykgdb.js";import"./chevron-down-4RG-YjeV.js";import"./index-jXeA9SgF.js";import"./error-CSdXVQDA.js";import"./BaseCbacBanner-QsJ11sde.js";import"./makeExternalStore-VoU3rgtf.js";import"./Tooltip-BfB-ALwV.js";import"./PopoverPopup-DOf8tSzj.js";import"./debounce-Y3DExDk1.js";import"./useOsdkClient-CYYcDDNv.js";import"./tick-ftcla-3R.js";import"./DropdownField-DOIFNVft.js";import"./isEqual-C8MbmCUf.js";import"./withOsdkMetrics-CFGA0PEe.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
