import{f as b,j as a,r as i}from"./iframe-C9dvvK0s.js";import{O as u}from"./object-table-DaHHjOXS.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-iV6YG4Aw.js";import"./Table-BLfd7O6r.js";import"./index-CCl1SyK9.js";import"./Dialog-0kQYGq6h.js";import"./cross-DoooZe2s.js";import"./svgIconContainer-DzOculqA.js";import"./useBaseUiId-Br_MFpl1.js";import"./InternalBackdrop-CY6nwryu.js";import"./composite-C5a4BBeY.js";import"./index-R2ywC05c.js";import"./index-CkMTtaTO.js";import"./index-BPDZ_eNv.js";import"./useEventCallback-nJzbHflb.js";import"./SkeletonBar-BMLWORuN.js";import"./LoadingCell-CoPu1qnX.js";import"./ColumnConfigDialog-468qWQtg.js";import"./DraggableList-Dr7qvY_0.js";import"./search-t3Hkw5qC.js";import"./Input-VMFQEfqY.js";import"./useControlled-N1u5Cna7.js";import"./Button-yjOlms4F.js";import"./small-cross-Ci6IDqJ5.js";import"./ActionButton-DTtodqv-.js";import"./Checkbox-Blnnfp9K.js";import"./useValueChanged-DmetHvwJ.js";import"./CollapsiblePanel-ND7ZCoK2.js";import"./MultiColumnSortDialog-ED6hIEfv.js";import"./MenuTrigger-eYIaD5Ue.js";import"./CompositeItem-Bcug-Hhc.js";import"./ToolbarRootContext-B-a5UJLi.js";import"./getDisabledMountTransitionStyles-Ozj0mzgv.js";import"./getPseudoElementBounds-Bdrnt6aT.js";import"./chevron-down-Cc5gCW9T.js";import"./index-DdkJNkIB.js";import"./error-QUoX6T23.js";import"./BaseCbacBanner-B4CqUt8g.js";import"./makeExternalStore-DRTRnKjE.js";import"./Tooltip-CZkWbmpg.js";import"./PopoverPopup-Cj3n7Ars.js";import"./debounce-Z8v5BBST.js";import"./useOsdkClient-Cyoc-pgH.js";import"./tick-B8uN_Iao.js";import"./DropdownField-DOA4KkgG.js";import"./isEqual-Cpll-d8H.js";import"./withOsdkMetrics-dCYtoeio.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
