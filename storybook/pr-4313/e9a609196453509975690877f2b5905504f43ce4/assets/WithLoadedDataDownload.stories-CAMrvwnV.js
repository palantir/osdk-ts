import{f as b,j as a,r as i}from"./iframe-CiI5PS6K.js";import{O as u}from"./object-table-t7PnOjZV.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BScoV-ON.js";import"./Table-Bwu2eGJ5.js";import"./index-DTPqzTra.js";import"./Dialog-DnLyeJh7.js";import"./cross-DgjL-w3z.js";import"./svgIconContainer-tdqH8iqE.js";import"./useBaseUiId-DReynxDq.js";import"./InternalBackdrop-Coh6cB6j.js";import"./composite-BrOoGgaN.js";import"./index-CjZ-iEVj.js";import"./index-XzG81WZo.js";import"./index-CPJzMmpG.js";import"./useEventCallback-CyRG3rkJ.js";import"./SkeletonBar-BNIt8FzO.js";import"./LoadingCell-C75a2rZj.js";import"./ColumnConfigDialog-BuLkkFmQ.js";import"./DraggableList-DkKy9uqw.js";import"./search-BRtPHFLM.js";import"./Input-gM0suFmQ.js";import"./useControlled-C0rSVFZc.js";import"./Button-BP56zFTn.js";import"./small-cross-BvlJE0g7.js";import"./ActionButton-DmbyeOrm.js";import"./Checkbox-CURrvPm-.js";import"./useValueChanged-Dfh6smN1.js";import"./CollapsiblePanel-CL4hIKDt.js";import"./MultiColumnSortDialog-CM8G5v3Q.js";import"./MenuTrigger-Cgk5IHXF.js";import"./CompositeItem-D4PTMtSQ.js";import"./ToolbarRootContext-CTDjgR90.js";import"./getDisabledMountTransitionStyles-CRmjgyTc.js";import"./getPseudoElementBounds-CAN5gz0w.js";import"./chevron-down-F9mPI0PG.js";import"./index-DzwnFRrI.js";import"./error-Dp2Yeg1s.js";import"./BaseCbacBanner-CwxrNrzn.js";import"./makeExternalStore-BiFRWY5t.js";import"./Tooltip-RikTdx9n.js";import"./PopoverPopup-CME_dwGk.js";import"./debounce-DI-y3SNs.js";import"./useOsdkClient-DO_qV40A.js";import"./tick-NDqyjiXA.js";import"./DropdownField-D6IgbNva.js";import"./isEqual-Cza9X2E6.js";import"./withOsdkMetrics-BRB4GNZb.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
