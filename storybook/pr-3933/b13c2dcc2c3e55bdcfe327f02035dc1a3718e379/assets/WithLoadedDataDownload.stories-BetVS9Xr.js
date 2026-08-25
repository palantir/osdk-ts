import{f as b,j as a,r as i}from"./iframe-DJmldxve.js";import{O as u}from"./object-table-Cdj1OBo_.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CfPw7BaZ.js";import"./Table-DLbCkB-8.js";import"./index-DD-0dH-p.js";import"./Dialog-d2jWPSNx.js";import"./cross-DmQC9xrL.js";import"./svgIconContainer-P7eEWIUa.js";import"./useBaseUiId-B4pZBY6q.js";import"./InternalBackdrop-CBiQ-iZm.js";import"./composite-CSkjak5h.js";import"./index-lnBxI4J8.js";import"./index-BGy7kKJa.js";import"./index-DHzhHmTz.js";import"./useEventCallback-CBIwa4BF.js";import"./SkeletonBar-B9qAZ7dG.js";import"./LoadingCell-CXGAa_W2.js";import"./ColumnConfigDialog-nF8osFOq.js";import"./DraggableList-BDi3Xc8h.js";import"./search-BDoaiW25.js";import"./Input-DVHmkR4v.js";import"./useControlled-CkquFaFo.js";import"./Button-DseRSSUk.js";import"./small-cross-DLY7Hev3.js";import"./ActionButton-BpeAPNCc.js";import"./Checkbox-DsAo_Msx.js";import"./useValueChanged-D4YcGJ5P.js";import"./CollapsiblePanel-Bi0MtyT6.js";import"./MultiColumnSortDialog-BC3vwMSc.js";import"./MenuTrigger-BIZPL6dI.js";import"./CompositeItem-DHs6pqwB.js";import"./ToolbarRootContext-QKXaQ_-N.js";import"./getDisabledMountTransitionStyles-Dp3LgcOf.js";import"./getPseudoElementBounds-CZjHe1bQ.js";import"./chevron-down-FLohmcIo.js";import"./index-CNroXRNE.js";import"./error-7UB6xqMv.js";import"./BaseCbacBanner-BiJ6rg8v.js";import"./makeExternalStore-D_byBCsj.js";import"./Tooltip-BnjrHWIU.js";import"./PopoverPopup-BUpDQbiA.js";import"./debounce-B2j6j5iZ.js";import"./useOsdkClient-UObDw9yg.js";import"./tick-CGvAH9hc.js";import"./DropdownField-CfZbuNVk.js";import"./isEqual-CCtCZxsR.js";import"./withOsdkMetrics-ChD8F_9J.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
