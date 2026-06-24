import{f as b,j as a,r as i}from"./iframe-CsSxFWDQ.js";import{O as u}from"./object-table-QBTymlKu.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DvOrtwwR.js";import"./Table-BCPiRU-g.js";import"./index-bHhiJnAp.js";import"./Dialog-DUfYdiqX.js";import"./cross-CwfHYU2d.js";import"./svgIconContainer-TolvF2de.js";import"./useBaseUiId-DUDGopse.js";import"./InternalBackdrop-BYmAUfAM.js";import"./composite-BxaRNPUz.js";import"./index-DNlBzvBJ.js";import"./index-CpZweDHn.js";import"./index-D55aLDIZ.js";import"./useEventCallback-DMOlgOxd.js";import"./SkeletonBar-x4xEgTDu.js";import"./LoadingCell-Dz5udvq7.js";import"./ColumnConfigDialog-HAHysIwM.js";import"./DraggableList-D228peT2.js";import"./Input-B6Btc8sl.js";import"./useControlled-CQ3V8HFA.js";import"./Button-D_ru-NGk.js";import"./small-cross-DcNTcfjE.js";import"./ActionButton-BrOUU3nQ.js";import"./Checkbox-BNCHnL8t.js";import"./minus-DximBIV6.js";import"./useValueChanged-D7mFpDS9.js";import"./caret-down-DftJnr50.js";import"./CollapsiblePanel-CM4KxxUP.js";import"./MultiColumnSortDialog-Di001_t5.js";import"./MenuTrigger-DvOpwqek.js";import"./CompositeItem-CjvR8DtT.js";import"./ToolbarRootContext-CjwcIMdl.js";import"./getDisabledMountTransitionStyles-_YbkIdy_.js";import"./getPseudoElementBounds-Bzck1T4P.js";import"./chevron-down-CIfNPorN.js";import"./index-By5_arRA.js";import"./error-CanW8myJ.js";import"./BaseCbacBanner-BzqaeeLY.js";import"./makeExternalStore-hP3ZBOSn.js";import"./Tooltip-BUK-8kZd.js";import"./PopoverPopup-CgZH-BxN.js";import"./toNumber-CfLwZLLI.js";import"./useOsdkClient-BK36R_xL.js";import"./DropdownField-C8fuIL3d.js";import"./withOsdkMetrics-BTQnPSKf.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
