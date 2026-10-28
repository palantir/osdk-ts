import{f as b,j as a,r as i}from"./iframe-C8k3uumS.js";import{O as u}from"./object-table-EZOB7GFm.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dj6SQCER.js";import"./Table-NqTGUUle.js";import"./index-Da9JAcME.js";import"./Dialog-DJIAnjKL.js";import"./cross-Dp2ox1xu.js";import"./svgIconContainer-Dj-Mm7D3.js";import"./useBaseUiId-DFXqCjvq.js";import"./InternalBackdrop-aU7kJmwR.js";import"./composite-DxAUAqur.js";import"./index-DzwHbvl0.js";import"./index-DjlNroqj.js";import"./index-DZnZB0mi.js";import"./useEventCallback-fbvYUM-2.js";import"./SkeletonBar-abAgXsnv.js";import"./LoadingCell-Tiia-8Ir.js";import"./ColumnConfigDialog-CmxDqqkp.js";import"./DraggableList-DgviW2i0.js";import"./search-DKEa9C8l.js";import"./Input--AleI5pt.js";import"./useControlled-C2PJbUNw.js";import"./Button-CBL5cv9S.js";import"./small-cross-Ce-hROYd.js";import"./ActionButton-BMUSg4X7.js";import"./Checkbox-B-gD_A1e.js";import"./useValueChanged-Dqs1inlY.js";import"./CollapsiblePanel-Dt19Mdgf.js";import"./MultiColumnSortDialog-mxFmSdR4.js";import"./MenuTrigger-C8wkes2i.js";import"./CompositeItem-DZbgQ7y8.js";import"./ToolbarRootContext-BVd3nTMD.js";import"./getDisabledMountTransitionStyles-DfVVkl0j.js";import"./getPseudoElementBounds-BPwV_7bA.js";import"./chevron-down-Biem--ni.js";import"./index-CEB9MiMS.js";import"./error-DgFxq49l.js";import"./BaseCbacBanner-CbsjZeyt.js";import"./makeExternalStore-Xdq9roG-.js";import"./Tooltip-BGHZdQle.js";import"./PopoverPopup-qnEIN4P4.js";import"./debounce-Nfw019PW.js";import"./useOsdkClient-BvDl_R1k.js";import"./tick-B-xbQpjH.js";import"./DropdownField-cT1ROS8v.js";import"./isEqual-DlqCCDtd.js";import"./withOsdkMetrics-zb3RyNQY.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
