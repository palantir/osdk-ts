import{f as b,j as a,r as i}from"./iframe-BfxMX6cT.js";import{O as u}from"./object-table-Dy7UyFzj.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BPDao22J.js";import"./Table-C92nfJIb.js";import"./index-D5QdHG6c.js";import"./Dialog-BjV9jDBU.js";import"./cross-BQzi9cCY.js";import"./svgIconContainer-B11i6ssl.js";import"./useBaseUiId-Diys5Rd8.js";import"./InternalBackdrop-CzfUVdiw.js";import"./composite-CX7YV8L_.js";import"./index-CgOKnRwH.js";import"./index-DGcqs1ai.js";import"./index-CxMUUWdA.js";import"./useEventCallback-CBWmqZQL.js";import"./SkeletonBar-CcSf93cH.js";import"./LoadingCell-lQ3kMXKt.js";import"./ColumnConfigDialog-BmCXnw3W.js";import"./DraggableList-tDSTIq02.js";import"./search-D1ZDVnFF.js";import"./Input-C-zjcWJd.js";import"./useControlled-AEJbE5Jc.js";import"./Button-4wSek2R3.js";import"./small-cross-DukaMdQz.js";import"./ActionButton-DDdXpm0C.js";import"./Checkbox-D8LsxsuS.js";import"./useValueChanged-MAwDQy-M.js";import"./CollapsiblePanel-DC0pzIEf.js";import"./MultiColumnSortDialog-C39kjkmj.js";import"./MenuTrigger-6JM3TOuY.js";import"./CompositeItem-BPbSYDgv.js";import"./ToolbarRootContext-DYeN6dWB.js";import"./getDisabledMountTransitionStyles-CUDtZPwG.js";import"./getPseudoElementBounds-CDkHDgNY.js";import"./chevron-down-3tdgVjjI.js";import"./index-DBgFz0Qc.js";import"./error-Cw0OZsfU.js";import"./BaseCbacBanner-qin0DxGa.js";import"./makeExternalStore-Cp6FC4H6.js";import"./Tooltip-CALVvbNy.js";import"./PopoverPopup-BTJRWa40.js";import"./debounce-BMvGLHn1.js";import"./useOsdkClient-B0mdKYcq.js";import"./tick-BZki_9Xu.js";import"./DropdownField-D9jSS7VG.js";import"./isEqual-CiQuOF5j.js";import"./withOsdkMetrics-DLVxiL_Q.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
