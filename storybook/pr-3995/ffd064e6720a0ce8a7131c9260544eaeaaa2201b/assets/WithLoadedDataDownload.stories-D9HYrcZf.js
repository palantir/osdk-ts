import{f as b,j as a,r as i}from"./iframe-CI9rENOr.js";import{O as u}from"./object-table-CAxgCc-0.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C65H2kRp.js";import"./Table-EHNGcZrz.js";import"./index-BaGMdRan.js";import"./Dialog-Ce3Y_ozd.js";import"./cross-DbBPFO7V.js";import"./svgIconContainer-BcUTFG9y.js";import"./useBaseUiId-sOlDVMc5.js";import"./InternalBackdrop-BeCVxxfg.js";import"./composite-DmfEV9z-.js";import"./index-DgVrz3v8.js";import"./index-2mtmcLVe.js";import"./index-B9k7nzsO.js";import"./useEventCallback-DONfxHkp.js";import"./SkeletonBar-DyVv9MEu.js";import"./LoadingCell-Dq1hVZcx.js";import"./ColumnConfigDialog-C7Ca5yIB.js";import"./DraggableList-BMHfoMK5.js";import"./search-C3IyHFqm.js";import"./Input-DVQjs6N1.js";import"./useControlled-Cem_rLXf.js";import"./Button-DhFEEkGk.js";import"./small-cross-CAdXuenP.js";import"./ActionButton-sBlmA4ya.js";import"./Checkbox-BiUdICo7.js";import"./useValueChanged-B6kyVGgr.js";import"./CollapsiblePanel-C5gNOdt3.js";import"./MultiColumnSortDialog-CrNi1rXh.js";import"./MenuTrigger-BvjuuXCg.js";import"./CompositeItem-C1H6xqvv.js";import"./ToolbarRootContext-ZE_LxgeM.js";import"./getDisabledMountTransitionStyles-DLh69aYy.js";import"./getPseudoElementBounds-Coe-9CHL.js";import"./chevron-down-CcfRnQgG.js";import"./index-C7fkS1TJ.js";import"./error-DGU8szJe.js";import"./BaseCbacBanner-CAd-xBRe.js";import"./makeExternalStore-BWkGDDsC.js";import"./Tooltip-BRvvJEEZ.js";import"./PopoverPopup-CdXPv9sE.js";import"./debounce-r7EOKfq-.js";import"./useOsdkClient-D_P69Zxs.js";import"./tick-DYP7mVbi.js";import"./DropdownField-BtgmtoFd.js";import"./isEqual-Cy550gAP.js";import"./withOsdkMetrics-DCX_NY4O.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
