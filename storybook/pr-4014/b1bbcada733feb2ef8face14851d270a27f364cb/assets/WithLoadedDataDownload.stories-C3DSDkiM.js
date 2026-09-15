import{f as b,j as a,r as i}from"./iframe-DlVDy023.js";import{O as u}from"./object-table-CPAm_TLy.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DJFhMTqE.js";import"./Table-j2_rfAjy.js";import"./index-B3fXiAQb.js";import"./Dialog-BGV1_4Fw.js";import"./cross-mcjuSBTc.js";import"./svgIconContainer-s-JQVLQ9.js";import"./useBaseUiId-BKw8YauT.js";import"./InternalBackdrop-D_CBn7dT.js";import"./composite-BLhg11U-.js";import"./index-LVqexgrH.js";import"./index-C3j1YyMW.js";import"./index-BjgwtoXC.js";import"./useEventCallback-SgtlW3mH.js";import"./SkeletonBar-B2rGYxr9.js";import"./LoadingCell-DOnLUlr2.js";import"./ColumnConfigDialog-CDGOT_Fh.js";import"./DraggableList-fs8A0IHu.js";import"./search-Dlo_g8mx.js";import"./Input-DaMbbLWO.js";import"./useControlled-Dii3KKCf.js";import"./Button-CPiBfc-M.js";import"./small-cross-yv-Uq6dQ.js";import"./ActionButton-B_l7y5Oe.js";import"./Checkbox-BbcpH0v_.js";import"./useValueChanged-LxRYviJx.js";import"./CollapsiblePanel-lLYHy2Fj.js";import"./MultiColumnSortDialog-qHU4Amng.js";import"./MenuTrigger-BJKqFBK7.js";import"./CompositeItem-CCYoAgW2.js";import"./ToolbarRootContext--DNvLQWo.js";import"./getDisabledMountTransitionStyles-Cn73GRue.js";import"./getPseudoElementBounds-BIvWT8t6.js";import"./chevron-down-CjY3inSa.js";import"./index-BzvLJ1CU.js";import"./error-DOacZup1.js";import"./BaseCbacBanner-ekdnej3L.js";import"./makeExternalStore-DF_bocEY.js";import"./Tooltip-bH5NED12.js";import"./PopoverPopup-Cv9ybNd5.js";import"./debounce-Hj0VluNc.js";import"./useOsdkClient-De-2KVrO.js";import"./tick-geEvKQPJ.js";import"./DropdownField-fDoWtAsS.js";import"./isEqual-BUPS7RB4.js";import"./withOsdkMetrics-zKe3req1.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
