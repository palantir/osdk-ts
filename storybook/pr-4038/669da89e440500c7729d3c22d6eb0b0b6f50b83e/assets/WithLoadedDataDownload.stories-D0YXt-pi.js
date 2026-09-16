import{f as b,j as a,r as i}from"./iframe-CFSd_ghT.js";import{O as u}from"./object-table-C-erOY28.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-ZllT-xST.js";import"./Table-Kg2JFIUp.js";import"./index-BVC2DtDE.js";import"./Dialog-D1UeKJjR.js";import"./cross-Pk2YzKDQ.js";import"./svgIconContainer-CuLuTWV9.js";import"./useBaseUiId-Bi512Q4g.js";import"./InternalBackdrop-KQmr3-ne.js";import"./composite-rhm-ES_j.js";import"./index-CX8cSHY9.js";import"./index-PmO53gZu.js";import"./index-CeP15cDX.js";import"./useEventCallback-DwcyWwyP.js";import"./SkeletonBar-DjQkHXkX.js";import"./LoadingCell-CEBP-9hU.js";import"./ColumnConfigDialog-BudUXmYY.js";import"./DraggableList-DiKHUeGr.js";import"./search-CiZh2SnD.js";import"./Input-B266R5K5.js";import"./useControlled-CUIixQM1.js";import"./Button-CII42J6y.js";import"./small-cross-DefbWUHG.js";import"./ActionButton-DyXI2aTY.js";import"./Checkbox-BCew5jIG.js";import"./useValueChanged-D-s1qoWy.js";import"./CollapsiblePanel-D8d1ogGm.js";import"./MultiColumnSortDialog-LJp1m9Qr.js";import"./MenuTrigger-MZrC_UOb.js";import"./CompositeItem-DvZYqwOH.js";import"./ToolbarRootContext-87swm1F0.js";import"./getDisabledMountTransitionStyles-LtEOHvLP.js";import"./getPseudoElementBounds-GHyUotEa.js";import"./chevron-down-CkZ0acRz.js";import"./index-C6yQCaVG.js";import"./error-QrCIC66e.js";import"./BaseCbacBanner-DorfSfUc.js";import"./makeExternalStore-BPSbFC_f.js";import"./Tooltip-Qcx9gV6X.js";import"./PopoverPopup-CZqjkl0j.js";import"./debounce-Cqi7OFEi.js";import"./useOsdkClient-C-wItY3f.js";import"./tick-Bd_VGJ-8.js";import"./DropdownField-BXoQO-Qa.js";import"./isEqual-D5p16SRy.js";import"./withOsdkMetrics-D3lDS6Ow.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
