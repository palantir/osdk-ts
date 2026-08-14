import{f as b,j as a,r as i}from"./iframe-BKIDvt-K.js";import{O as u}from"./object-table-BHTV2P9z.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-mI3tBMWP.js";import"./Table-DkpSR35_.js";import"./index-CrGl0mKT.js";import"./Dialog-DFWmCx4e.js";import"./cross-ZQbGVcUs.js";import"./svgIconContainer-DPW23OxO.js";import"./useBaseUiId-C9o0bL4p.js";import"./InternalBackdrop-5RCVmnT-.js";import"./composite-CQudhTJ9.js";import"./index-CC4pQ_7y.js";import"./index-DDZLkqmq.js";import"./index-CFReLSn_.js";import"./useEventCallback-ldBmTO9w.js";import"./SkeletonBar-CpXeghMb.js";import"./LoadingCell-BlJ8VdtH.js";import"./ColumnConfigDialog-n3ZPbTPe.js";import"./DraggableList-90FoAimS.js";import"./search-D85PJwgE.js";import"./Input-CEoxDAhD.js";import"./useControlled-BJ__83MY.js";import"./Button-DQ9OY2hI.js";import"./small-cross-DkHYyVsX.js";import"./ActionButton-C31vbNq1.js";import"./Checkbox-DL1FpdO7.js";import"./useValueChanged-DSjkwF1h.js";import"./CollapsiblePanel-ByITDqAC.js";import"./MultiColumnSortDialog-CDnWpuli.js";import"./MenuTrigger-Cs0oQJbr.js";import"./CompositeItem-Bk-qRhF5.js";import"./ToolbarRootContext-CbtqnU-s.js";import"./getDisabledMountTransitionStyles-BveNZaSb.js";import"./getPseudoElementBounds-BxYk8t8e.js";import"./chevron-down-DjDYprbt.js";import"./index-BmVXlrb-.js";import"./error-venNczME.js";import"./BaseCbacBanner-DiJ5ZmWM.js";import"./makeExternalStore-C22ZFOyU.js";import"./Tooltip-jKH0Fw_X.js";import"./PopoverPopup-BEqbOZj_.js";import"./debounce-BteKW-AL.js";import"./useOsdkClient-CIFuIhFw.js";import"./tick-B3k5R_JT.js";import"./DropdownField-Cc2vtwzQ.js";import"./isEqual-0dZgA1V5.js";import"./withOsdkMetrics-8E7XigZV.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
