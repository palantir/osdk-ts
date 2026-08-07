import{f as b,j as a,r as i}from"./iframe-CsnoPo4e.js";import{O as u}from"./object-table-Dldqrjjm.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-UQcfqh8j.js";import"./Table-BTxYy1_w.js";import"./index-DZ3qlG1l.js";import"./Dialog-5YgEm-s6.js";import"./cross-BPR_-69Q.js";import"./svgIconContainer-CFRCp5eS.js";import"./useBaseUiId-Dk3ss80W.js";import"./InternalBackdrop-BY7A23Y2.js";import"./composite-BdrpEZOa.js";import"./index-BFy79Amf.js";import"./index-Bq5UoBBM.js";import"./index-BYQYU-5a.js";import"./useEventCallback-Cx9_0ZLB.js";import"./SkeletonBar-Dzn2oFUr.js";import"./LoadingCell-D7DEjcGg.js";import"./ColumnConfigDialog-BoXAbGCb.js";import"./DraggableList-eg49cQQG.js";import"./search-CZllTW2C.js";import"./Input-CSBvwDxa.js";import"./useControlled-CZuH-mvg.js";import"./isEqual-C_gmFGsA.js";import"./isObject-BWSgJwU1.js";import"./Button-DLN9VIMw.js";import"./ActionButton-BA8Yg624.js";import"./Checkbox-WULFa6we.js";import"./useValueChanged-DyrHwSjM.js";import"./CollapsiblePanel-h2tgmdHK.js";import"./MultiColumnSortDialog-CemaFyHy.js";import"./MenuTrigger-CvpENYNt.js";import"./CompositeItem-Bd6jvFk6.js";import"./ToolbarRootContext-DniWRCBD.js";import"./getDisabledMountTransitionStyles-DOU6cUq0.js";import"./getPseudoElementBounds-mePDcOZc.js";import"./chevron-down-2qd0pr4B.js";import"./index-JQtzoL2b.js";import"./error-GZDgkGyI.js";import"./BaseCbacBanner-CzbfLvv9.js";import"./makeExternalStore-3T-oM2Ef.js";import"./Tooltip-CN-YZsrK.js";import"./PopoverPopup-D2DNd5Pp.js";import"./toNumber-f0pSYljt.js";import"./useOsdkClient-u5ArgWr9.js";import"./tick-CXkXamOG.js";import"./DropdownField-DDmAlRJk.js";import"./withOsdkMetrics-D6nE0GJ0.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
