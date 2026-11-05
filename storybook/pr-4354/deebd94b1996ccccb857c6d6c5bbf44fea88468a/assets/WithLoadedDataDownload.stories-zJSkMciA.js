import{f as b,j as a,r as i}from"./iframe-s6qt4jCK.js";import{O as u}from"./object-table-De1PzSdd.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-9jiBPXEl.js";import"./Table-B73Bx19c.js";import"./index-D6YAKeyS.js";import"./Dialog-C6WxxT4y.js";import"./cross-z12JNlD1.js";import"./svgIconContainer-D4Tr3eBw.js";import"./useBaseUiId-BIc0eo6T.js";import"./InternalBackdrop-BYGdIn__.js";import"./composite-CPpi_uAC.js";import"./index-DVF-9r8u.js";import"./index-BcLYVVr4.js";import"./index-CQTw8n2D.js";import"./useEventCallback-DNF3ylqB.js";import"./SkeletonBar-D69vB7ej.js";import"./LoadingCell-B95L-pZY.js";import"./ColumnConfigDialog-DWLVWYmU.js";import"./DraggableList-DLQJhoX2.js";import"./search-CwDPAivc.js";import"./Input-DP0PAzjj.js";import"./useControlled-CTyuJ7Af.js";import"./Button-Kk03FIZS.js";import"./small-cross-D0AIe3u5.js";import"./ActionButton-CjYFa-2U.js";import"./Checkbox-CRpQdjwJ.js";import"./useValueChanged-BZVZmlsN.js";import"./CollapsiblePanel-Du2JeiGm.js";import"./MultiColumnSortDialog-GDfrw8ba.js";import"./MenuTrigger-BEUsd7am.js";import"./CompositeItem-cbLDCwSH.js";import"./ToolbarRootContext-nYUUEgez.js";import"./getDisabledMountTransitionStyles-Chz3YyJw.js";import"./getPseudoElementBounds-DXe2aI7J.js";import"./chevron-down-nr5MnKpi.js";import"./index-D2cPMVS8.js";import"./error-DrFA3py_.js";import"./BaseCbacBanner-DRm2kmou.js";import"./makeExternalStore-CRyGpLoG.js";import"./Tooltip-DjYQyP_H.js";import"./isObject-CZ9Ec7qs.js";import"./debounce-DH380oHP.js";import"./useOsdkClient-DGoGfdz1.js";import"./tick-YVdkfck4.js";import"./DropdownField-COSvrKxl.js";import"./isEqual-DFsXV7yQ.js";import"./_baseIsEqual-7XBh0Yb_.js";import"./withOsdkMetrics-C2Hl675L.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
