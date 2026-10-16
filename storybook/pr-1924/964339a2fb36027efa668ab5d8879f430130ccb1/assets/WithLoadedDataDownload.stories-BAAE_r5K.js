import{f as b,j as a,r as i}from"./iframe-D0LlCScw.js";import{O as u}from"./object-table-COIfwPKf.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BPYsHztA.js";import"./Table-CVrn8a7m.js";import"./index-R-OWCfkC.js";import"./Dialog-DHPBiuDP.js";import"./cross-BIKx7l1B.js";import"./svgIconContainer-CPd4FEGO.js";import"./useBaseUiId-Cnf8WH7W.js";import"./InternalBackdrop-DSzn_M6g.js";import"./composite-DawpNJ_k.js";import"./index-DXbsvYWy.js";import"./index-BZTOjdyb.js";import"./index-Dh6bu7y0.js";import"./useEventCallback-BHhry2Ze.js";import"./SkeletonBar-BM6j1C1a.js";import"./LoadingCell-4G6EJCyj.js";import"./ColumnConfigDialog-1N3jOgDU.js";import"./DraggableList-DX8ugLQU.js";import"./search-Dy9Bh6oJ.js";import"./Input-DguSmqlF.js";import"./useControlled-C-xRoLJo.js";import"./Button-Bfbc-efe.js";import"./small-cross-D12kpvdn.js";import"./ActionButton-CCgA1PS9.js";import"./Checkbox-DqcVMQmm.js";import"./useValueChanged-D4Cuolrk.js";import"./CollapsiblePanel-DGCQJ7r2.js";import"./MultiColumnSortDialog-6daUiyok.js";import"./MenuTrigger-bU6vvaQC.js";import"./CompositeItem-DSL5KLQJ.js";import"./ToolbarRootContext-DxaGXN87.js";import"./getDisabledMountTransitionStyles-DtmNom5N.js";import"./getPseudoElementBounds-lP1dSnSf.js";import"./chevron-down-D3xB8NyO.js";import"./index-Bynh9I8M.js";import"./error-g8Wu2PpH.js";import"./BaseCbacBanner-DPbFCEOT.js";import"./makeExternalStore-G-t7fMHO.js";import"./Tooltip-ozF9P0sc.js";import"./PopoverPopup-DPim281m.js";import"./debounce-BWX6LBdf.js";import"./useOsdkClient-BbcMY0OU.js";import"./tick-DOJuYt0r.js";import"./DropdownField-BsF9XJhY.js";import"./isEqual-DjcNAgH_.js";import"./withOsdkMetrics-Bwsdr4IU.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
