import{f as b,j as a,r as i}from"./iframe-DfRsO-W_.js";import{O as u}from"./object-table-CP9JoLqJ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B1nnBqyx.js";import"./Table-x1N0vMog.js";import"./index-CQkS0c9h.js";import"./Dialog-CQuuouNU.js";import"./cross-CBNkzS8W.js";import"./svgIconContainer-DgyEbBbg.js";import"./useBaseUiId-t6nqxOAa.js";import"./InternalBackdrop-DexqjegU.js";import"./composite-BNASiMUs.js";import"./index-0fIzBmZ6.js";import"./index-COUiLxiP.js";import"./index-DAMwa_zH.js";import"./useEventCallback-B9H6hou4.js";import"./SkeletonBar-C4TEZaxd.js";import"./LoadingCell-jyJlJ8rZ.js";import"./ColumnConfigDialog-DuyPqMVs.js";import"./DraggableList-da0sxfAo.js";import"./search-DnesuR3u.js";import"./Input-BeFyt6Zg.js";import"./useControlled-DwMJ2aka.js";import"./Button-PGajkELE.js";import"./small-cross-BD6x5MXv.js";import"./ActionButton-DjurcGej.js";import"./Checkbox-L7hCldyi.js";import"./useValueChanged-CQ6Yx7cq.js";import"./CollapsiblePanel-DUX-GqzR.js";import"./MultiColumnSortDialog-fqDZVUuC.js";import"./MenuTrigger-DdmOX4vv.js";import"./CompositeItem-C6hDdpH4.js";import"./ToolbarRootContext-BRXAevlR.js";import"./getDisabledMountTransitionStyles-B2AXI69J.js";import"./getPseudoElementBounds-Ck1GK_Vt.js";import"./chevron-down-Cdf065g5.js";import"./index-DkHZL3b5.js";import"./error-3c9XVh4b.js";import"./BaseCbacBanner-CwLmqWu7.js";import"./makeExternalStore-C23Jsp2C.js";import"./Tooltip-1SCODkG_.js";import"./PopoverPopup-De149wyZ.js";import"./debounce-BAkgb8RS.js";import"./useOsdkClient-Da6wTJ7N.js";import"./tick-CjE9NPay.js";import"./DropdownField-CgS_exM3.js";import"./isEqual-BnnGO8J7.js";import"./withOsdkMetrics-D1y4-r1W.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
