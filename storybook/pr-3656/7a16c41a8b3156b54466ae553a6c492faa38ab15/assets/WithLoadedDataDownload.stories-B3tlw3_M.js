import{f as b,j as a,r as i}from"./iframe-DKbJD91Q.js";import{O as u}from"./object-table-Bz8vFHVi.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DqUkcmYs.js";import"./Table-C2uh5p9N.js";import"./index-Bngq8Vi1.js";import"./Dialog-zV6aNcse.js";import"./cross-DbPHs0j6.js";import"./svgIconContainer-4juTmAGa.js";import"./useBaseUiId-BYQ6OaKE.js";import"./InternalBackdrop-DHhYXE8o.js";import"./composite-B4mRtSK_.js";import"./index-ClmDs36c.js";import"./index-qEUIoyPR.js";import"./index-Co_s3NbU.js";import"./useEventCallback-DP-pMMBQ.js";import"./SkeletonBar-s7R9-r-5.js";import"./LoadingCell-DEXZV4Ns.js";import"./ColumnConfigDialog-C-0sEpbQ.js";import"./DraggableList-DyZQev71.js";import"./search-BII4tWc4.js";import"./Input-Cse94nI4.js";import"./useControlled-Cz4_lCzM.js";import"./Button-BKABdA37.js";import"./small-cross-B8_kEvwb.js";import"./ActionButton-DtmjBSER.js";import"./Checkbox-CyNeM_l2.js";import"./useValueChanged-6tNJJjQc.js";import"./CollapsiblePanel-DbXKH0s3.js";import"./MultiColumnSortDialog-B5cdBjRT.js";import"./MenuTrigger-XDvFLA6T.js";import"./CompositeItem-BeSf6rF_.js";import"./ToolbarRootContext-nYK4s239.js";import"./getDisabledMountTransitionStyles-DxJPU7-_.js";import"./getPseudoElementBounds-WskQBVr2.js";import"./chevron-down-CO9asE2V.js";import"./index-CpBu1bAg.js";import"./error-5yLXSKBF.js";import"./BaseCbacBanner--QOzANdB.js";import"./makeExternalStore-B_vkRC4b.js";import"./Tooltip-DSkkwxAT.js";import"./PopoverPopup-yMSy_0W6.js";import"./toNumber-CVka2v-_.js";import"./useOsdkClient-RBVhBv2k.js";import"./tick-CW_kQbdt.js";import"./DropdownField-CG6dkBaP.js";import"./withOsdkMetrics-CuRRWFHy.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
