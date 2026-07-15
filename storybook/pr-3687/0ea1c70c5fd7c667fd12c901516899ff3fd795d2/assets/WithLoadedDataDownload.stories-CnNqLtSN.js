import{f as b,j as a,r as i}from"./iframe-D8D8Fd7N.js";import{O as u}from"./object-table-DH9ZWNO9.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-HfLRyj_M.js";import"./Table-CkK7dK6q.js";import"./index-DawESuRM.js";import"./Dialog-B9p53XJl.js";import"./cross-Bczuw6HZ.js";import"./svgIconContainer-D6lNkQ7D.js";import"./useBaseUiId-qsdqGWpP.js";import"./InternalBackdrop-vckT6C2q.js";import"./composite-CIUikIoi.js";import"./index-DYipZiVM.js";import"./index-QS9SuPH9.js";import"./index-ujJmo4t9.js";import"./useEventCallback-CV2KFr39.js";import"./SkeletonBar-BuPwnctq.js";import"./LoadingCell-CD496AsM.js";import"./ColumnConfigDialog-1XXyYxbO.js";import"./DraggableList-BEQ9YfSM.js";import"./search-CzCT0qg7.js";import"./Input-5Zfe1Eu4.js";import"./useControlled-BTUrnS98.js";import"./Button-DFUhNqlH.js";import"./small-cross-DwEe5MKj.js";import"./ActionButton-DsB4Pm_I.js";import"./Checkbox-uiCOOFhS.js";import"./useValueChanged-DiVS3QGH.js";import"./CollapsiblePanel-ConJwcAa.js";import"./MultiColumnSortDialog-B4s3BUoE.js";import"./MenuTrigger-zrzWzPXX.js";import"./CompositeItem-BdVAy7o5.js";import"./ToolbarRootContext-V4KuPQFG.js";import"./getDisabledMountTransitionStyles-B2IVlD7B.js";import"./getPseudoElementBounds-DX3UnMTv.js";import"./chevron-down-CWk43xwC.js";import"./index-D0UWbO9T.js";import"./error-BqsCvt66.js";import"./BaseCbacBanner-DWhDv7ql.js";import"./makeExternalStore-BrMWIuuv.js";import"./Tooltip-B5zpuG_4.js";import"./PopoverPopup-BqmJX3WX.js";import"./toNumber-DHtwRWdQ.js";import"./useOsdkClient-CNmxTVZh.js";import"./tick-B5msijB4.js";import"./DropdownField-Dw3kxcfr.js";import"./withOsdkMetrics-CtnhpNYC.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
