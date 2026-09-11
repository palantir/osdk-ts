import{f as b,j as a,r as i}from"./iframe-B8lzwm22.js";import{O as u}from"./object-table-DShYpsaa.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DZpogDck.js";import"./Table-GHKreUtP.js";import"./index-V8AdOqgd.js";import"./Dialog-B16dHLiM.js";import"./cross-BjwwvSsI.js";import"./svgIconContainer-CXVvUd5F.js";import"./useBaseUiId-9i5seKgC.js";import"./InternalBackdrop-Dm3w5lyn.js";import"./composite-BgrU9ffv.js";import"./index-B1F9PCAn.js";import"./index-DA6AQTMf.js";import"./index-DKCrzgsd.js";import"./useEventCallback-DeeBfsBF.js";import"./SkeletonBar-Bas3_Wlo.js";import"./LoadingCell-DpSvjykH.js";import"./ColumnConfigDialog-DQQey7lW.js";import"./DraggableList-C5_mqVtU.js";import"./search-CJEfvURK.js";import"./Input-CzpDwduI.js";import"./useControlled-9IIZJlu3.js";import"./Button-DINiSESc.js";import"./small-cross-hDui4OeT.js";import"./ActionButton-CU9gdIlX.js";import"./Checkbox-DJmQzDug.js";import"./useValueChanged-B5KtwkUp.js";import"./CollapsiblePanel-Y638CsIO.js";import"./MultiColumnSortDialog-fcEhEsp0.js";import"./MenuTrigger-DrDkL1AE.js";import"./CompositeItem-DEvZ_JsZ.js";import"./ToolbarRootContext-8Dlenei2.js";import"./getDisabledMountTransitionStyles-CgeJIM6-.js";import"./getPseudoElementBounds-CCplqQNV.js";import"./chevron-down-98nms22W.js";import"./index-CBtK7PVB.js";import"./error-D8O5Gu9w.js";import"./BaseCbacBanner-BSveluQ8.js";import"./makeExternalStore-BIgSRA9g.js";import"./Tooltip-B9fsMvs_.js";import"./PopoverPopup-CAo52PJc.js";import"./debounce-DS0sFmBW.js";import"./useOsdkClient-BOXKzBN3.js";import"./tick-CC6mSPPg.js";import"./DropdownField-DzdO8ho7.js";import"./isEqual-CD-pZhR5.js";import"./withOsdkMetrics-BRdTEDjT.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
