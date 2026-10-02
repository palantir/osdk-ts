import{f as b,j as a,r as i}from"./iframe-826Gs96o.js";import{O as u}from"./object-table-Thljzijj.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dy1PefeT.js";import"./Table-DCXP7kJp.js";import"./index-DxFbtAl2.js";import"./Dialog-BlwK3Qsn.js";import"./cross-CGVnPFvE.js";import"./svgIconContainer-C9llsudM.js";import"./useBaseUiId-Dg5t7t_V.js";import"./InternalBackdrop-xUOOm_9M.js";import"./composite-CfFzeQqA.js";import"./index-CjQrbWNq.js";import"./index-DuT9KNdT.js";import"./index-Bs21FMkz.js";import"./useEventCallback-BJHP1M_f.js";import"./SkeletonBar-B0AWztU4.js";import"./LoadingCell-B_nwXWP8.js";import"./ColumnConfigDialog-B9ixCZfi.js";import"./DraggableList-s-AQ20Te.js";import"./search-BZHAnhvn.js";import"./Input-DI6TXQQJ.js";import"./useControlled-BpCUWNpJ.js";import"./Button-DNoJUNAB.js";import"./small-cross-C8UmW7Hs.js";import"./ActionButton-DDJP6dlY.js";import"./Checkbox-I9jrKPP8.js";import"./useValueChanged-DENmBLV7.js";import"./CollapsiblePanel-DuQd7Yzu.js";import"./MultiColumnSortDialog-D0tYMKqS.js";import"./MenuTrigger-gSFbsB9W.js";import"./CompositeItem-CcW3IcXa.js";import"./ToolbarRootContext-CHa8QnRi.js";import"./getDisabledMountTransitionStyles-DGBLiCd8.js";import"./getPseudoElementBounds-K8yHl1as.js";import"./chevron-down-DTD0XUuq.js";import"./index-BpqO_0Z6.js";import"./error-BRJ8RgcR.js";import"./BaseCbacBanner-BD75tGsg.js";import"./makeExternalStore-vPmU5su8.js";import"./Tooltip-1a4YvbvY.js";import"./PopoverPopup-CAuY5cHw.js";import"./debounce-R32f75fq.js";import"./useOsdkClient-CAEYuMrw.js";import"./tick-Cz6w76NV.js";import"./DropdownField-D4QNZQ_M.js";import"./isEqual-nMBzRr3Z.js";import"./withOsdkMetrics-BKsd8iS7.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
