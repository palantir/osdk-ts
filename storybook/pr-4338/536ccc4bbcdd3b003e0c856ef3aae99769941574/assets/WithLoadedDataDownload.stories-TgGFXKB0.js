import{f as b,j as a,r as i}from"./iframe-B89B5CWM.js";import{O as u}from"./object-table-TjXxeS7e.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BQ99I6nt.js";import"./Table-aohPUUE9.js";import"./index-D9SW0Yle.js";import"./Dialog-CMpT43wb.js";import"./cross-BbpWCkxQ.js";import"./svgIconContainer-ChPhhCD3.js";import"./useBaseUiId-DtDRBSq4.js";import"./InternalBackdrop-COfUIr0S.js";import"./composite-B50sO1rH.js";import"./index-BWtJkqTj.js";import"./index-m1HPcpqW.js";import"./index-DbCSIb3h.js";import"./useEventCallback-HaOgpImO.js";import"./SkeletonBar-pSM_YdGu.js";import"./LoadingCell-DduVSPo-.js";import"./ColumnConfigDialog-fER75DAD.js";import"./DraggableList-DbtN4p1h.js";import"./search-BIvcGDFg.js";import"./Input-BTItB3zo.js";import"./useControlled-oTZtcuwA.js";import"./Button-Y1tATrz0.js";import"./small-cross-C8bFb-MH.js";import"./ActionButton-6QvyZFZ4.js";import"./Checkbox-BFETg0bp.js";import"./useValueChanged-DITF5IQQ.js";import"./CollapsiblePanel-CfrpUeu3.js";import"./MultiColumnSortDialog-Cg_KezFK.js";import"./MenuTrigger-B-fi0xS8.js";import"./CompositeItem-CiUmrhhL.js";import"./ToolbarRootContext-BUhhyvqJ.js";import"./getDisabledMountTransitionStyles-CtMZVl1t.js";import"./getPseudoElementBounds-CKOvD078.js";import"./chevron-down-C8YyWC3O.js";import"./index-B5gePnV1.js";import"./error-yAZoJobu.js";import"./BaseCbacBanner-lKvwV7ea.js";import"./makeExternalStore-Dng9Dmlv.js";import"./Tooltip-DCjqoaml.js";import"./PopoverPopup-DefmT2bE.js";import"./debounce-Dl_IbEsP.js";import"./useOsdkClient-uulAZQLf.js";import"./tick-D72Jsudk.js";import"./DropdownField-Cq54mmNu.js";import"./isEqual-DhYcQb9B.js";import"./withOsdkMetrics-Cct9f3WN.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
