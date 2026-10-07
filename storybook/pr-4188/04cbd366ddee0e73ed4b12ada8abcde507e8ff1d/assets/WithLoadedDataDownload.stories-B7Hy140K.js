import{f as b,j as a,r as i}from"./iframe-BV8H6lRC.js";import{O as u}from"./object-table-C6lRfVfE.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-FghdvxpP.js";import"./Table-JaytBHn3.js";import"./index-DU9RRfrb.js";import"./Dialog-DvRIB5zl.js";import"./cross-D92mjgqE.js";import"./svgIconContainer-B2TLggqZ.js";import"./useBaseUiId-Bch4RCf-.js";import"./InternalBackdrop-DFn2kFuw.js";import"./composite-6jNJwuj9.js";import"./index-fE68LmNS.js";import"./index-ByctvPor.js";import"./index-xKI30ir_.js";import"./useEventCallback-ZwAzgc5q.js";import"./SkeletonBar-BcrwqPs9.js";import"./LoadingCell-BZ-ka11a.js";import"./ColumnConfigDialog-Dv0fubDw.js";import"./DraggableList-CHaV7Vg7.js";import"./search-BlhwHZiG.js";import"./Input-B3KKnPgU.js";import"./useControlled-DFgYtmw-.js";import"./Button-cZssApwN.js";import"./small-cross-CB3FdAHS.js";import"./ActionButton-v2nTt39b.js";import"./Checkbox-B4TDd9O8.js";import"./useValueChanged-Bqcd_ocF.js";import"./CollapsiblePanel-h5yRCfis.js";import"./MultiColumnSortDialog-CHYeqK8V.js";import"./MenuTrigger-B-EwXmEp.js";import"./CompositeItem-CfY4xOZ4.js";import"./ToolbarRootContext-B0zqLD7S.js";import"./getDisabledMountTransitionStyles-CaNIdVg_.js";import"./getPseudoElementBounds-B3RJWnEx.js";import"./chevron-down-CmiHvm8d.js";import"./index-BSOrQZ_c.js";import"./error-Bt7eKOT3.js";import"./BaseCbacBanner-CV_DEHlP.js";import"./makeExternalStore-DXngIb0h.js";import"./Tooltip-BGLVmsTF.js";import"./PopoverPopup-MAImkRcc.js";import"./debounce-CcLYKazv.js";import"./useOsdkClient-DySK7kNm.js";import"./tick-M2SHJwUO.js";import"./DropdownField-DkGcdfin.js";import"./isEqual-DY2caHIP.js";import"./withOsdkMetrics-ybYt3TTQ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
