import{f as b,j as a,r as i}from"./iframe-DcYOqu2U.js";import{O as u}from"./object-table-BUJ0UBkR.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-S82--H9u.js";import"./Table-CdVuFRqi.js";import"./index-DiVuESi1.js";import"./Dialog-dtOt9m2Z.js";import"./cross-CDM50iQ0.js";import"./svgIconContainer-yWnKapjH.js";import"./useBaseUiId-BCzIH_us.js";import"./InternalBackdrop-CeJDAv-U.js";import"./composite-z-1xLKDd.js";import"./index-EYomkAWT.js";import"./index-0CesUQZv.js";import"./index-CknGzI9c.js";import"./useEventCallback-CcAOlUNX.js";import"./SkeletonBar-FDu5_K5F.js";import"./LoadingCell-DJEPgpK8.js";import"./ColumnConfigDialog-D87oUpOB.js";import"./DraggableList-BbaAj1ue.js";import"./search-DkFuHynJ.js";import"./Input-BDRGIKaZ.js";import"./useControlled-BUaPb3-r.js";import"./Button-_cT9fEiv.js";import"./small-cross-BTclTiS1.js";import"./ActionButton-CVvGpKcN.js";import"./Checkbox-Dc7MwXnE.js";import"./useValueChanged-CZEDJKXE.js";import"./CollapsiblePanel-DdleFq3w.js";import"./MultiColumnSortDialog-SDf46NGq.js";import"./MenuTrigger-B5vFtVv3.js";import"./CompositeItem-DDIaKXMB.js";import"./ToolbarRootContext-_iXFA-YU.js";import"./getDisabledMountTransitionStyles-csMlkapf.js";import"./getPseudoElementBounds-B3R2Xnt1.js";import"./chevron-down-CJhuOc7o.js";import"./index-DC8s7Au8.js";import"./error-CugXhAIj.js";import"./BaseCbacBanner-DvXGe8XZ.js";import"./makeExternalStore-DkFMYs8N.js";import"./Tooltip-CZmshqBI.js";import"./PopoverPopup-VAITxfkO.js";import"./debounce-B7Bz9Zmz.js";import"./useOsdkClient-DO7IEPKY.js";import"./tick-9LlYbapO.js";import"./DropdownField-DfYmYHBy.js";import"./isEqual-BBhQjzID.js";import"./withOsdkMetrics-D3ra-NNv.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
