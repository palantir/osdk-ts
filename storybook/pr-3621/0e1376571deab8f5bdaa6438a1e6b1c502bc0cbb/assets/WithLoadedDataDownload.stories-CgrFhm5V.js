import{f as b,j as a,r as i}from"./iframe-ChVPmkYp.js";import{O as u}from"./object-table-D06CgsYN.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-jbV1HaAE.js";import"./Table-BT0SebxY.js";import"./index-Dfx1UfXH.js";import"./Dialog-DBcPFuJj.js";import"./cross-AMwzmsFp.js";import"./svgIconContainer-BmCqI7gA.js";import"./useBaseUiId-RI_mTyEl.js";import"./InternalBackdrop-DDa70aCC.js";import"./composite-uKN5GTPZ.js";import"./index-BIQEV1z8.js";import"./index-Ct8PPI2V.js";import"./index-BaEd0kFC.js";import"./useEventCallback-DUdvfY8o.js";import"./SkeletonBar-pU7OA31c.js";import"./LoadingCell-s2_s5Lu8.js";import"./ColumnConfigDialog-CQq6TO6q.js";import"./DraggableList-DCsee0ok.js";import"./search-BsrdhH6y.js";import"./Input-3RD0Ojm7.js";import"./useControlled-CeVHUzb6.js";import"./Button-BsTIeQ16.js";import"./small-cross-DZIz93WJ.js";import"./ActionButton-3GHwkKhs.js";import"./Checkbox--BWQNCOT.js";import"./useValueChanged-CK3sRrR9.js";import"./CollapsiblePanel-CZnfRHhR.js";import"./MultiColumnSortDialog-CVmkiudm.js";import"./MenuTrigger-CIwkoBYe.js";import"./CompositeItem-BRVs3V1O.js";import"./ToolbarRootContext-BkI8pu11.js";import"./getDisabledMountTransitionStyles-BlM0kqhl.js";import"./getPseudoElementBounds-Dwx1pfIS.js";import"./chevron-down-DD8cifJj.js";import"./index-CMHuiwLz.js";import"./error-JTe4qU1R.js";import"./BaseCbacBanner-B0zzEdNC.js";import"./makeExternalStore-Bfbb1GZW.js";import"./Tooltip-CWx41uQd.js";import"./PopoverPopup-CK-_Kr0i.js";import"./toNumber-D97_Fil0.js";import"./useOsdkClient-TgsHZR2S.js";import"./tick-C8ZFboh2.js";import"./DropdownField-B8UYXklh.js";import"./withOsdkMetrics-Ck8R0SUE.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
