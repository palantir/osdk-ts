import{f as b,j as a,r as i}from"./iframe-2o2kyJSw.js";import{O as u}from"./object-table-azDEgYl1.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CiJwpqMw.js";import"./Table-CmFdThQv.js";import"./index-CitRnrnM.js";import"./Dialog-BBfLfR--.js";import"./cross-B_lTfXfQ.js";import"./svgIconContainer-CuK8KMCF.js";import"./useBaseUiId-CpKlAOSJ.js";import"./InternalBackdrop-BikInMxN.js";import"./composite-BjSIx71V.js";import"./index-2rHOwy8w.js";import"./index-CiEsaZes.js";import"./index-DXtnwcW_.js";import"./useEventCallback-C5UTCvLQ.js";import"./SkeletonBar-DGXXhlfa.js";import"./LoadingCell-C2GrCxA_.js";import"./ColumnConfigDialog-CsuV_WmL.js";import"./DraggableList-DraN2KjT.js";import"./search-BjDFLGmu.js";import"./Input-DYGxrYIz.js";import"./useControlled-BXgT251S.js";import"./Button-BNZyyCXs.js";import"./small-cross-BjWdTVSE.js";import"./ActionButton-C6ImwtAS.js";import"./Checkbox-Dgyqqw4w.js";import"./useValueChanged-CBr85hPL.js";import"./CollapsiblePanel-B3UwMjFD.js";import"./MultiColumnSortDialog-3J1w479l.js";import"./MenuTrigger-DO2xD1uK.js";import"./CompositeItem-CeKYfb90.js";import"./ToolbarRootContext-VK9eZ2Nh.js";import"./getDisabledMountTransitionStyles-BI6VDTRC.js";import"./getPseudoElementBounds-e4sYnubV.js";import"./chevron-down-DzSskaX4.js";import"./index--X-EHlCl.js";import"./error-B6s9JUe9.js";import"./BaseCbacBanner-stKdaGYj.js";import"./makeExternalStore-D2otK5Vr.js";import"./Tooltip-CIdYWoah.js";import"./PopoverPopup-TKZ7g6pB.js";import"./debounce-BFnvX-XD.js";import"./useOsdkClient-BuSNta0K.js";import"./tick-_kgMfq2D.js";import"./DropdownField-C_tiYhOd.js";import"./isEqual-DepNuDvP.js";import"./withOsdkMetrics-BmpmfXN7.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
