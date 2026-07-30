import{f as b,j as a,r as i}from"./iframe-rq8NuSfP.js";import{O as u}from"./object-table-Tswkdilm.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CvJz_IUe.js";import"./Table-CGezPmZd.js";import"./index-ysoUH_JH.js";import"./Dialog-CJZ__yxs.js";import"./cross-BBqhm1p8.js";import"./svgIconContainer-DztQZTqt.js";import"./useBaseUiId-Bf-Z0IHd.js";import"./InternalBackdrop-CQ13XFOG.js";import"./composite-sl7bgooi.js";import"./index-B7xRuMiw.js";import"./index-CsgLYqAh.js";import"./index-CeRKYrT8.js";import"./useEventCallback-0iTg9u-J.js";import"./SkeletonBar-DY0bKr4Y.js";import"./LoadingCell-oWeSLE88.js";import"./ColumnConfigDialog-DE7lnRmq.js";import"./DraggableList-DDYXjOD7.js";import"./search-DWeYn3Qn.js";import"./Input-BIVs6kpr.js";import"./useControlled-CkaqNWIl.js";import"./isEqual-D6w6eBfH.js";import"./isObject-LqGLpNGT.js";import"./Button-DuL44OIq.js";import"./ActionButton-DfS5j_S1.js";import"./Checkbox-DIVGPwHV.js";import"./useValueChanged-t2VQXlNB.js";import"./CollapsiblePanel-BlfkVDoM.js";import"./MultiColumnSortDialog-2nBkzcbh.js";import"./MenuTrigger-Cg4wjv4b.js";import"./CompositeItem-Qabrm8X6.js";import"./ToolbarRootContext-DAlNjZIe.js";import"./getDisabledMountTransitionStyles-D29qu8tE.js";import"./getPseudoElementBounds-DLMPfxRO.js";import"./chevron-down-CfpMyllA.js";import"./index-0Ykzd783.js";import"./error-D6eViXnU.js";import"./BaseCbacBanner-BFnJR_Re.js";import"./makeExternalStore-DvD94buu.js";import"./Tooltip-CS9dv8wY.js";import"./PopoverPopup-BFyAfkPc.js";import"./toNumber-BOOCVMDJ.js";import"./useOsdkClient-DbA3yZIX.js";import"./tick-Jg4GGiJ3.js";import"./DropdownField-Cbab9S3i.js";import"./withOsdkMetrics-DHFbf_VX.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
