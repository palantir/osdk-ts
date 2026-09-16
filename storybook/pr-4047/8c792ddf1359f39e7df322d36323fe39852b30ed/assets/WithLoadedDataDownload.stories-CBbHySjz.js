import{f as b,j as a,r as i}from"./iframe-BUf-CLqY.js";import{O as u}from"./object-table-Dyvh2IGr.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-riapeqtP.js";import"./Table-CzS-rh25.js";import"./index-C_MybgQ3.js";import"./Dialog-lZrjoHin.js";import"./cross-CGc-Hcb9.js";import"./svgIconContainer-DU0Ye5dG.js";import"./useBaseUiId-gpzCx-rm.js";import"./InternalBackdrop-C5ZNKnCf.js";import"./composite-ByB7nSsB.js";import"./index-CrCMLvTm.js";import"./index-DvN6Rba3.js";import"./index-B3D2SnAc.js";import"./useEventCallback-BywkN-Ff.js";import"./SkeletonBar-DFo16lR0.js";import"./LoadingCell-CdUbXIXo.js";import"./ColumnConfigDialog-BxDZ3Dv6.js";import"./DraggableList-B4cd4Qb-.js";import"./search-pVr5xk4n.js";import"./Input-DnSUiNyS.js";import"./useControlled-DEV21H7B.js";import"./Button-cOSWZtuo.js";import"./small-cross-CSJnPQqY.js";import"./ActionButton-BBw0Te-_.js";import"./Checkbox-C46p_nfP.js";import"./useValueChanged-MJAskWLg.js";import"./CollapsiblePanel-UPRERRAW.js";import"./MultiColumnSortDialog-Cf13_Nd2.js";import"./MenuTrigger-x9K-Wus0.js";import"./CompositeItem-Cjz_Qy2T.js";import"./ToolbarRootContext-tqZMT8gQ.js";import"./getDisabledMountTransitionStyles-BCAFuXq1.js";import"./getPseudoElementBounds-DzYucCEu.js";import"./chevron-down-CRvVeW5r.js";import"./index-CD5GlWla.js";import"./error-CZVIneLk.js";import"./BaseCbacBanner-CmW41sxI.js";import"./makeExternalStore-BFB7Uams.js";import"./Tooltip-Cm_gslQX.js";import"./PopoverPopup-BlmOLchB.js";import"./debounce-B-iF24A7.js";import"./useOsdkClient-ctroE3hm.js";import"./tick-B2EggPvK.js";import"./DropdownField-Sb9cC2Wv.js";import"./isEqual-BL-FfRPo.js";import"./withOsdkMetrics-BtUVOcAG.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
