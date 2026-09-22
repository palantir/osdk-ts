import{f as b,j as a,r as i}from"./iframe-BlDiaW1h.js";import{O as u}from"./object-table-Ce-hqaoS.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-PtL6Kd_x.js";import"./Table-Ca7ofY9H.js";import"./index-DfWhxneD.js";import"./Dialog-C0LenXNZ.js";import"./cross-e0aRrlM-.js";import"./svgIconContainer-kniEZwHz.js";import"./useBaseUiId-CNzKZZyr.js";import"./InternalBackdrop-CknQDtg2.js";import"./composite-RC4cbmpt.js";import"./index-CaosaIAK.js";import"./index-ClB2daRU.js";import"./index-C44_u6Fw.js";import"./useEventCallback-DsUQ3PVF.js";import"./SkeletonBar-CPfB3dvv.js";import"./LoadingCell-4skw1OEJ.js";import"./ColumnConfigDialog-DrvuPspn.js";import"./DraggableList-BbYQHNIJ.js";import"./search-BTwweTf6.js";import"./Input-Bii20VeK.js";import"./useControlled-DBQ0gE6b.js";import"./Button-BcWNCj5I.js";import"./small-cross-1dCALZ0r.js";import"./ActionButton-DCdCIlKP.js";import"./Checkbox-BFzsHOZs.js";import"./useValueChanged-Ig3qxvFS.js";import"./CollapsiblePanel-BeO6_bQ6.js";import"./MultiColumnSortDialog-DY1R-uWF.js";import"./MenuTrigger-CAVJV5J3.js";import"./CompositeItem-OhI6t6UV.js";import"./ToolbarRootContext-B0Ir569T.js";import"./getDisabledMountTransitionStyles-Oq1-yxTZ.js";import"./getPseudoElementBounds-IJPs3uLW.js";import"./chevron-down-CQlGXejk.js";import"./index-DIgLDkvV.js";import"./error-DI0bgW6O.js";import"./BaseCbacBanner-Bp7AuwxH.js";import"./makeExternalStore-BGsi_gFr.js";import"./Tooltip-Cay9QyIc.js";import"./PopoverPopup-CQXuiQcH.js";import"./debounce-Byq2NX1_.js";import"./useOsdkClient-0OHPk9sh.js";import"./tick-a-bDbPLS.js";import"./DropdownField-RavzYQu_.js";import"./isEqual-B5seZJ2p.js";import"./withOsdkMetrics-BxS0W9JC.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
