import{f as b,j as a,r as i}from"./iframe-BuDnfqKQ.js";import{O as u}from"./object-table-C29Cpgw-.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B6J6BeBc.js";import"./Table-CZu0_kzA.js";import"./index-B6xFqDwW.js";import"./Dialog-ClOQevqP.js";import"./cross-FLwBoLKf.js";import"./svgIconContainer-DN1WNNEt.js";import"./useBaseUiId-Cy8x85cF.js";import"./InternalBackdrop-DkXtTuDL.js";import"./composite-DOI6fCuf.js";import"./index-VpAGjtCA.js";import"./index-Bcup2US4.js";import"./index-DNpn1j7J.js";import"./useEventCallback-D_AQe9Gp.js";import"./SkeletonBar-D9mhSkMY.js";import"./LoadingCell-Bnzn1we7.js";import"./ColumnConfigDialog-77MIy4UO.js";import"./DraggableList-DCJMvK_P.js";import"./search-CoDCGLUE.js";import"./Input-fZvrHimm.js";import"./useControlled-BWRXH__P.js";import"./Button-Ckrw6oVp.js";import"./small-cross-CDW2_ykz.js";import"./ActionButton-Dsev2y4b.js";import"./Checkbox-B3uIo4CQ.js";import"./useValueChanged-B0zicMaZ.js";import"./CollapsiblePanel-DY0hwdGx.js";import"./MultiColumnSortDialog-DYraEMIQ.js";import"./MenuTrigger-D2IDN6Ne.js";import"./CompositeItem-Dc19RcBz.js";import"./ToolbarRootContext-DTTMwqZv.js";import"./getDisabledMountTransitionStyles-C7ybyuH6.js";import"./getPseudoElementBounds-DcYnu62v.js";import"./chevron-down-C4fOxkM5.js";import"./index-zf1BCIO_.js";import"./error-DtRlIBmm.js";import"./BaseCbacBanner-DV5GW8yv.js";import"./makeExternalStore-CDWi_CU5.js";import"./Tooltip-vIT7M_iB.js";import"./PopoverPopup-WRtj1oNl.js";import"./debounce-hk0kLUMs.js";import"./useOsdkClient-W2M41dpd.js";import"./tick-DGYqdZi_.js";import"./DropdownField-Cn3SsOCQ.js";import"./isEqual-YCz6Riny.js";import"./withOsdkMetrics-cl6CbOTk.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
