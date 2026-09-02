import{f as b,j as a,r as i}from"./iframe-CQw56iWo.js";import{O as u}from"./object-table-_b87z9yg.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Cb-iTVGL.js";import"./Table-BjVQv3Ut.js";import"./index-BbcRXNNj.js";import"./Dialog-DQjpS1ko.js";import"./cross-Nlfk9xaA.js";import"./svgIconContainer-CJszD9JX.js";import"./useBaseUiId-wSHMnGD-.js";import"./InternalBackdrop-Il8xAP3p.js";import"./composite-CrcBBrnx.js";import"./index-3NrBg7OY.js";import"./index-B-4hZkSR.js";import"./index-DnT2_768.js";import"./useEventCallback-D5srKw5L.js";import"./SkeletonBar-BF1cQEzt.js";import"./LoadingCell-CV9XZ9Uc.js";import"./ColumnConfigDialog-COYitlC3.js";import"./DraggableList-CBeAoOWH.js";import"./search-BeZpj5L6.js";import"./Input-BjEM47WF.js";import"./useControlled-Brc4EdI6.js";import"./Button-CE9o7PIg.js";import"./small-cross-CnTvk0Kj.js";import"./ActionButton-2adJk00V.js";import"./Checkbox-CfsX_vZH.js";import"./useValueChanged-DGcNWuA7.js";import"./CollapsiblePanel-Dw6R1hci.js";import"./MultiColumnSortDialog-CZ4APG3L.js";import"./MenuTrigger-hUaCMsAR.js";import"./CompositeItem-B1bezKZw.js";import"./ToolbarRootContext-R1fb82vZ.js";import"./getDisabledMountTransitionStyles-CVZQPl4y.js";import"./getPseudoElementBounds-BX5Pi7co.js";import"./chevron-down-Df0py7y_.js";import"./index-C5iZ-ss4.js";import"./error-C5hkCc6v.js";import"./BaseCbacBanner-Dp2SlZsT.js";import"./makeExternalStore-CCwV61OO.js";import"./Tooltip-CtxV_51G.js";import"./PopoverPopup-BgEulf2-.js";import"./debounce-CNCpWjWV.js";import"./useOsdkClient-9L2S2s7W.js";import"./tick-CPHWizrD.js";import"./DropdownField-BNLfoGtV.js";import"./isEqual-DvLhOnOz.js";import"./withOsdkMetrics-D9HOSlTb.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
