import{f as b,j as a,r as i}from"./iframe-jTK2SxfT.js";import{O as u}from"./object-table-DuYdPEbq.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-qQ4kAc2Q.js";import"./Table-CI6bE9BX.js";import"./index-Pz1htbT9.js";import"./Dialog-CxrPO91E.js";import"./cross-DrKqX7p4.js";import"./svgIconContainer-GdUN0nSr.js";import"./useBaseUiId--4cJ9Rmo.js";import"./InternalBackdrop-CqMji1ba.js";import"./composite-iOJ2PvUN.js";import"./index-BMtptVtR.js";import"./index-CSlECQqo.js";import"./index-BIecch-_.js";import"./useEventCallback-BXSFSqbt.js";import"./SkeletonBar-DhQdItRf.js";import"./LoadingCell-C_9TppnX.js";import"./ColumnConfigDialog-BYyn2yAH.js";import"./DraggableList-CocgqlAW.js";import"./search-DswSvB8a.js";import"./Input-C57k62_6.js";import"./useControlled-qZTm53K2.js";import"./Button-DS-hfsg1.js";import"./small-cross-dkyGS67d.js";import"./ActionButton-DQzcN8W-.js";import"./Checkbox-CAINAHVp.js";import"./useValueChanged-BPMD3jVI.js";import"./CollapsiblePanel-XMUuL-v2.js";import"./MultiColumnSortDialog-CGjau2t9.js";import"./MenuTrigger-DP_-62i6.js";import"./CompositeItem-Cq-oGUuG.js";import"./ToolbarRootContext-Cq-6mE15.js";import"./getDisabledMountTransitionStyles-D6i264P_.js";import"./getPseudoElementBounds-DVNAWduU.js";import"./chevron-down-B-85uVWr.js";import"./index-DyHfw1UB.js";import"./error-BtNAl0M5.js";import"./BaseCbacBanner-DyeqWZGP.js";import"./makeExternalStore-Cfa2Qg1q.js";import"./Tooltip-BbpwuXGl.js";import"./PopoverPopup-BLKdDIb7.js";import"./debounce-DtxvrnBI.js";import"./useOsdkClient-CQTQjoea.js";import"./tick-jbVXP2LR.js";import"./DropdownField-Bvdotu43.js";import"./isEqual-Duv6Tt10.js";import"./withOsdkMetrics-DXkox581.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
