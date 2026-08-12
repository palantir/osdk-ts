import{f as b,j as a,r as i}from"./iframe-DmJLQBd5.js";import{O as u}from"./object-table-E43KJI_n.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CoTlAjbz.js";import"./Table-DwTOTD2I.js";import"./index-V2vu0DX-.js";import"./Dialog-dllkLaXF.js";import"./cross-DNMFTXiP.js";import"./svgIconContainer-BIOjXbdo.js";import"./useBaseUiId-9PouUcpY.js";import"./InternalBackdrop-5gsghqXD.js";import"./composite-JydS1iwf.js";import"./index-BtdR2Hou.js";import"./index-D21gG2VV.js";import"./index-cuoVkR4F.js";import"./useEventCallback-byBYDvcL.js";import"./SkeletonBar-B9L_DStn.js";import"./LoadingCell-DcXqZJAC.js";import"./ColumnConfigDialog-DqG9YoD3.js";import"./DraggableList-C5manxDx.js";import"./search-DRPDmTbF.js";import"./Input-DND4jSO6.js";import"./useControlled-Brt8x5-e.js";import"./isEqual-DmiAgtts.js";import"./isObject-BWf8MA5A.js";import"./Button-CMc7chm1.js";import"./ActionButton-B4zZjGVU.js";import"./Checkbox-iqbJKU2o.js";import"./useValueChanged-CjIBuOlm.js";import"./CollapsiblePanel-6Z1QE5xZ.js";import"./MultiColumnSortDialog-X5jJ1kgE.js";import"./MenuTrigger-BkSsBu17.js";import"./CompositeItem-CI5jeQ9i.js";import"./ToolbarRootContext-D0YLC8MO.js";import"./getDisabledMountTransitionStyles-DLPDieqM.js";import"./getPseudoElementBounds-BBE3_y7N.js";import"./chevron-down--IKdXKG2.js";import"./index-D6zsaxaR.js";import"./error-8IdCo3sJ.js";import"./BaseCbacBanner-CUODHxmz.js";import"./makeExternalStore-ChPwoXju.js";import"./Tooltip-CVp9JHdj.js";import"./PopoverPopup-48aZ5vF1.js";import"./toNumber-Ize7j_rT.js";import"./useOsdkClient-Bl8Z_uxW.js";import"./tick-DKvhNy2w.js";import"./DropdownField-BOHi3o6l.js";import"./withOsdkMetrics-DhjGq0fZ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
