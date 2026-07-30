import{f as b,j as a,r as i}from"./iframe-BpLfy_7x.js";import{O as u}from"./object-table-CL0RxuLw.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-hhne1Nkw.js";import"./Table-BwK3TnxG.js";import"./index-CI-PQox6.js";import"./Dialog-DMcE_XRG.js";import"./cross-PuYX_-t_.js";import"./svgIconContainer-BJcxFCQJ.js";import"./useBaseUiId-DLhvCT2w.js";import"./InternalBackdrop-Cg_--_dl.js";import"./composite-D6MrKr0W.js";import"./index-CqzGtbz4.js";import"./index-CS2EtUA3.js";import"./index-DwBmIhXs.js";import"./useEventCallback-BV_slrjv.js";import"./SkeletonBar-BzHVnwiO.js";import"./LoadingCell-Bk1UD4jE.js";import"./ColumnConfigDialog-BoVBRbX8.js";import"./DraggableList-zk1lRqcV.js";import"./search-CWqxR7My.js";import"./Input-B6V3A2xO.js";import"./useControlled-DQnuFJYA.js";import"./isEqual-BKD4Aek-.js";import"./isObject-CsyTGM2I.js";import"./Button-ByGcR2jl.js";import"./ActionButton-tsCNhUs0.js";import"./Checkbox-NjQGrJij.js";import"./useValueChanged-Bpm4XFJy.js";import"./CollapsiblePanel-nl4mApkG.js";import"./MultiColumnSortDialog-DjwA5Ul2.js";import"./MenuTrigger-CUguWp68.js";import"./CompositeItem-Dh49dnMe.js";import"./ToolbarRootContext-CZ4baxUR.js";import"./getDisabledMountTransitionStyles-BDsUR9tp.js";import"./getPseudoElementBounds-Cd9zz7lc.js";import"./chevron-down-BWdhcgKJ.js";import"./index-DsR_IMSl.js";import"./error-gXA04YBk.js";import"./BaseCbacBanner-2LazQZjv.js";import"./makeExternalStore-GYdWhjGR.js";import"./Tooltip-CvFV6amD.js";import"./PopoverPopup-C83W7I3e.js";import"./toNumber-DnkrpAWO.js";import"./useOsdkClient-m5GobuOi.js";import"./tick-Pu-HkBZn.js";import"./DropdownField-CZQQBYxn.js";import"./withOsdkMetrics-C4NgfUdQ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
