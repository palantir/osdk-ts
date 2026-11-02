import{f as b,j as a,r as i}from"./iframe-Cu1bkUV2.js";import{O as u}from"./object-table-DurmvQoB.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-ByBgFQo4.js";import"./Table-Y1FWE3IE.js";import"./index-D8Vgs137.js";import"./Dialog-DVWo0jsn.js";import"./cross-CpkrEpF5.js";import"./svgIconContainer-Dtkj8beD.js";import"./useBaseUiId-CsOE9eY7.js";import"./InternalBackdrop-C8f9FJlV.js";import"./composite-CI-SY_Qx.js";import"./index-BJrnppPH.js";import"./index-B9_oej9c.js";import"./index-CUR5Eq6E.js";import"./useEventCallback-BtQ8PHNi.js";import"./SkeletonBar-Bq8PEonM.js";import"./LoadingCell-zA0x8rnT.js";import"./ColumnConfigDialog-Bm2LYWhb.js";import"./DraggableList-BKF9Kuwl.js";import"./search-DrsueRnd.js";import"./Input-DJ6MiMh_.js";import"./useControlled-ZBCcjOJi.js";import"./Button-DZYZZvZz.js";import"./small-cross-B1S7LnfD.js";import"./ActionButton-DH9h44Al.js";import"./Checkbox-CJqLusV1.js";import"./useValueChanged-DYWR0khf.js";import"./CollapsiblePanel-zk9ZxzpR.js";import"./MultiColumnSortDialog-CUpRvVWU.js";import"./MenuTrigger-B1Lm0LL5.js";import"./CompositeItem-h8YISAEh.js";import"./ToolbarRootContext-BY5M87wV.js";import"./getDisabledMountTransitionStyles-Butv2vF5.js";import"./getPseudoElementBounds-BRoXmMe-.js";import"./chevron-down-BybrbSIU.js";import"./index-BqaXp55y.js";import"./error-IUDeQ-Lf.js";import"./BaseCbacBanner-0mX1MplM.js";import"./makeExternalStore-3zKJ5_AP.js";import"./Tooltip-CT4INsO4.js";import"./PopoverPopup-D2wQ8s1I.js";import"./debounce-BB3252tl.js";import"./useOsdkClient-BSCp6sZ5.js";import"./tick-BzU5rGKz.js";import"./DropdownField-Cx1jh9K8.js";import"./isEqual-DKH62cLk.js";import"./withOsdkMetrics-DT7zQxuO.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
