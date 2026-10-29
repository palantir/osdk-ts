import{f as b,j as a,r as i}from"./iframe-D6y6_Ifg.js";import{O as u}from"./object-table-nYNJPeZT.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DyU-boOC.js";import"./Table-D-Yj8yjp.js";import"./index-BGSHUEgZ.js";import"./Dialog-DDgjwDi0.js";import"./cross-DjwwagZM.js";import"./svgIconContainer-kSsZGyO3.js";import"./useBaseUiId-BqYaQHeS.js";import"./InternalBackdrop-Ddo5KuLP.js";import"./composite-DjaGlwPS.js";import"./index-DCLjYuV8.js";import"./index-BgYri-U-.js";import"./index-C3VTJ_3W.js";import"./useEventCallback-Ctt9oFuA.js";import"./SkeletonBar-CDnWHSD6.js";import"./LoadingCell-5nVC5W90.js";import"./ColumnConfigDialog-DhSn3u3u.js";import"./DraggableList-C0L-xZto.js";import"./search-Ds3QYjxm.js";import"./Input-yKev__cZ.js";import"./useControlled-BqujvQcb.js";import"./Button-CWXM-Cv5.js";import"./small-cross-BJjPBosz.js";import"./ActionButton-Drswk3OR.js";import"./Checkbox-Cj9nTQ8T.js";import"./useValueChanged-DgtVOjIu.js";import"./CollapsiblePanel-Cz_Uq3Uc.js";import"./MultiColumnSortDialog-D1J5klGK.js";import"./MenuTrigger-Cmsog5T9.js";import"./CompositeItem-DO83W1mC.js";import"./ToolbarRootContext-CGSlDNd6.js";import"./getDisabledMountTransitionStyles-uDupN6Zi.js";import"./getPseudoElementBounds-BpTbd1eR.js";import"./chevron-down-tZEFHgnG.js";import"./index-qwFFssEr.js";import"./error-kgzj6SX8.js";import"./BaseCbacBanner-BeXsIPJi.js";import"./makeExternalStore-ITPdtG8P.js";import"./Tooltip-CiApLGcm.js";import"./PopoverPopup-GQEpG8wD.js";import"./debounce-CShglMk9.js";import"./useOsdkClient-CSuFL6LS.js";import"./tick-3tfAK9_o.js";import"./DropdownField-B-Y7S6ow.js";import"./isEqual-lwrbts4r.js";import"./withOsdkMetrics-DLWDjTSp.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
