import{f as b,j as a,r as i}from"./iframe-CL0v58YA.js";import{O as u}from"./object-table-Bq2bBPP-.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-YA1d6Ini.js";import"./Table-Cn0a8GAw.js";import"./index-Dbld71_D.js";import"./Dialog-CGLv1Gw3.js";import"./cross-CMjnlyn3.js";import"./svgIconContainer-C5xAXPyT.js";import"./useBaseUiId-C-B8c9Tq.js";import"./InternalBackdrop-BoEb1M5v.js";import"./composite-CnlM0z75.js";import"./index-B8Uk-bLz.js";import"./index-BvbkTHlh.js";import"./index-DXxGeQJl.js";import"./useEventCallback-BiRlE1G0.js";import"./SkeletonBar-aBATL-Tf.js";import"./LoadingCell-ClwklxX8.js";import"./ColumnConfigDialog-w4AQPypf.js";import"./DraggableList-CZJxf7TB.js";import"./search-1eZ8caHB.js";import"./Input-mgnWKdmk.js";import"./useControlled-CSC850so.js";import"./Button-D8zbKIcq.js";import"./small-cross-BtqQFOUy.js";import"./ActionButton-Bu4dL35R.js";import"./Checkbox-tY51RlBx.js";import"./useValueChanged-ByhtVHRE.js";import"./CollapsiblePanel-D2eGim3y.js";import"./MultiColumnSortDialog-CrDQobkj.js";import"./MenuTrigger-vBnLao72.js";import"./CompositeItem-DUAhoOI3.js";import"./ToolbarRootContext-Dar2Ujz6.js";import"./getDisabledMountTransitionStyles-Cjmtv4nr.js";import"./getPseudoElementBounds-DAXSaCVq.js";import"./chevron-down-BBB2aEWM.js";import"./index-B86UewVM.js";import"./error-DDQ2JALg.js";import"./BaseCbacBanner-C9gquFsU.js";import"./makeExternalStore-Bhj1U_Xf.js";import"./Tooltip-BzQZnpRI.js";import"./PopoverPopup-Xz0YTDkc.js";import"./debounce-CYoIEdAM.js";import"./useOsdkClient-C1SbSG22.js";import"./tick-DJs20ou9.js";import"./DropdownField-BclOEnPv.js";import"./isEqual-NoqYCfyd.js";import"./withOsdkMetrics-B3RxtapX.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
