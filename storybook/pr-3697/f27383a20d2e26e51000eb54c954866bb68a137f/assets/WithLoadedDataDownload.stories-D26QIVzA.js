import{f as b,j as a,r as i}from"./iframe-BEe86n4U.js";import{O as u}from"./object-table-D3bK0xh5.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BEIWHMRh.js";import"./Table-YF2Uuna7.js";import"./index-BRPS5kQN.js";import"./Dialog-BsqCdrap.js";import"./cross-CGE59l7y.js";import"./svgIconContainer-BSAbTZeZ.js";import"./useBaseUiId-COFpfmx-.js";import"./InternalBackdrop-Bbyztf9B.js";import"./composite-M2AhhIdq.js";import"./index-9tHl4QLQ.js";import"./index-CUqsLrV_.js";import"./index-CFU7E__T.js";import"./useEventCallback-pvIUGJ3U.js";import"./SkeletonBar-D8GYqCJs.js";import"./LoadingCell-DC4_KheS.js";import"./ColumnConfigDialog-CEzCrz1H.js";import"./DraggableList-R8owu7NJ.js";import"./search-BXLW1X4v.js";import"./Input-DR5ncoJh.js";import"./useControlled-BaRzcD7g.js";import"./Button-BRKltiu1.js";import"./small-cross-CREnvszv.js";import"./ActionButton-2hvjBSdZ.js";import"./Checkbox-BPfKFUPW.js";import"./useValueChanged-CB58YuvK.js";import"./CollapsiblePanel-DAzVOwwy.js";import"./MultiColumnSortDialog-DYBUtlrk.js";import"./MenuTrigger-BwL5aEy_.js";import"./CompositeItem-DsazHw-F.js";import"./ToolbarRootContext-LTTvJeUA.js";import"./getDisabledMountTransitionStyles-ZuSivMX1.js";import"./getPseudoElementBounds-Cb-punMf.js";import"./chevron-down-DdOOrteF.js";import"./index-J5AGxzO_.js";import"./error-CApQS-Gj.js";import"./BaseCbacBanner-Cnp-s4-J.js";import"./makeExternalStore-CHd-KfbE.js";import"./Tooltip-D4ILXtbb.js";import"./PopoverPopup-BO4u0aFX.js";import"./toNumber-DSEuvXpJ.js";import"./useOsdkClient-if-6C0ow.js";import"./tick-zFi1znjf.js";import"./DropdownField-DBq1vGil.js";import"./withOsdkMetrics-qx1-RMV_.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
