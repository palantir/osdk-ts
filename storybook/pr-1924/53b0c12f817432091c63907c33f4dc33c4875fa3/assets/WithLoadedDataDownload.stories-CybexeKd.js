import{f as b,j as a,r as i}from"./iframe-De8gl-wb.js";import{O as u}from"./object-table-Bz2FDPwn.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CZp3UEUX.js";import"./Table-B1Cak9D7.js";import"./index-yM1iOqxa.js";import"./Dialog-CTd_Fh2m.js";import"./cross-Rb4_YcYg.js";import"./svgIconContainer-O0KE-yUX.js";import"./useBaseUiId-D2bKh7zK.js";import"./InternalBackdrop-CaA3mfgc.js";import"./composite-CsYpzAzm.js";import"./index-CZuFPKTq.js";import"./index-yZ2YDAwx.js";import"./index-adqLLECi.js";import"./useEventCallback-M_gVxY2G.js";import"./SkeletonBar-Cpr1mmtD.js";import"./LoadingCell-B5JUoAiW.js";import"./ColumnConfigDialog-D5-gNagN.js";import"./DraggableList-DWokTizm.js";import"./search-gqOR6dWB.js";import"./Input-jUEOhmQC.js";import"./useControlled-DGI8qUj-.js";import"./Button-C8NRJqZ9.js";import"./small-cross-DCeop5gl.js";import"./ActionButton-9l7y1yGD.js";import"./Checkbox-DBD54aFK.js";import"./useValueChanged-FUmu471A.js";import"./CollapsiblePanel-C9mOk4td.js";import"./MultiColumnSortDialog-DzcM_iH0.js";import"./MenuTrigger-r0ZzgG-T.js";import"./CompositeItem-CLhIql87.js";import"./ToolbarRootContext-RfA3FV7l.js";import"./getDisabledMountTransitionStyles-B1oXkIam.js";import"./getPseudoElementBounds-2piZIYla.js";import"./chevron-down-DwDibcrO.js";import"./index-CEZAAMx5.js";import"./error-DNa-KthT.js";import"./BaseCbacBanner-q7Lsj7j7.js";import"./makeExternalStore-BgPv4tiZ.js";import"./Tooltip-CUSzcSPf.js";import"./PopoverPopup-CQa18L3d.js";import"./debounce-CnDZcNXl.js";import"./useOsdkClient-DVrTO4hw.js";import"./tick-CsI3c4Q2.js";import"./DropdownField-CDqudMgk.js";import"./isEqual-BtVuQz1J.js";import"./withOsdkMetrics-Cqq5lG27.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
