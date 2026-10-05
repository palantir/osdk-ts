import{f as b,j as a,r as i}from"./iframe-S5f-tHYc.js";import{O as u}from"./object-table-Ci-xIoS3.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CloBdclc.js";import"./Table-BCQUo_-N.js";import"./index-BjvFrMm8.js";import"./Dialog-Dza_Kh2Q.js";import"./cross-CW1FGrOP.js";import"./svgIconContainer-B4-msPtU.js";import"./useBaseUiId-BlrIsTLC.js";import"./InternalBackdrop-CLYIK4GL.js";import"./composite-541HdLvk.js";import"./index-1qViAGfj.js";import"./index-Cnu8xOcy.js";import"./index-CyzOmN0R.js";import"./useEventCallback-DLlqjfcw.js";import"./SkeletonBar-CkCJtsPM.js";import"./LoadingCell-B01Vuagz.js";import"./ColumnConfigDialog-BhYUMQ86.js";import"./DraggableList-B500BrHc.js";import"./search-CIBDynw6.js";import"./Input-DxXCBH_8.js";import"./useControlled-CL7wd5vL.js";import"./Button-FHTr9kOT.js";import"./small-cross-7E36Oaag.js";import"./ActionButton-DQaroWT8.js";import"./Checkbox-DkSL5Wdt.js";import"./useValueChanged-CA0bh4r8.js";import"./CollapsiblePanel-CBgNvisu.js";import"./MultiColumnSortDialog-Dhsa1G2b.js";import"./MenuTrigger-DAWQwhs-.js";import"./CompositeItem-Dg4eVuBQ.js";import"./ToolbarRootContext-DjBkFXc0.js";import"./getDisabledMountTransitionStyles-ZM0SJ2dg.js";import"./getPseudoElementBounds-BWWWPD0F.js";import"./chevron-down-Cgu3kTNg.js";import"./index--nob6yM3.js";import"./error-Dr3zRmrC.js";import"./BaseCbacBanner-BK0aUKAm.js";import"./makeExternalStore-DqL_g-L_.js";import"./Tooltip-C7N2M5Yu.js";import"./PopoverPopup-CzRxRT6J.js";import"./debounce-CMuMdGaR.js";import"./useOsdkClient-DYs9h0g-.js";import"./tick-1JQLMtoH.js";import"./DropdownField-CosoAnxz.js";import"./isEqual-C9oin3_9.js";import"./withOsdkMetrics-BbapYe7K.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
