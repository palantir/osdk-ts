import{f as b,j as a,r as i}from"./iframe-CNas8tCV.js";import{O as u}from"./object-table-C8i8aDbO.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BrLgTqj6.js";import"./Table-B7ttLNKA.js";import"./index-D7Ojgd4V.js";import"./Dialog-DeiQybmE.js";import"./cross-Cv9-zzS9.js";import"./svgIconContainer-Dzsoi_4S.js";import"./useBaseUiId-X471mJCy.js";import"./InternalBackdrop-Dlgf3ivC.js";import"./composite-CS_tSE92.js";import"./index-BTiHVZ1L.js";import"./index-BtptK3eI.js";import"./index-4W1N-_A-.js";import"./useEventCallback-D3bYPUkP.js";import"./SkeletonBar-BjIT0SZR.js";import"./LoadingCell-Df87zf6s.js";import"./ColumnConfigDialog-3HnFFO5a.js";import"./DraggableList-uSYcJ8Kc.js";import"./search-DUqjPedA.js";import"./Input-CU35V2TL.js";import"./useControlled-Cjala1q6.js";import"./Button-C6s7oiSJ.js";import"./small-cross-S20y_pnE.js";import"./ActionButton-BYItjPf7.js";import"./Checkbox-B9KqAtRO.js";import"./useValueChanged-CaoL13K8.js";import"./CollapsiblePanel-Beb9dGYt.js";import"./MultiColumnSortDialog-CFQ7cdiD.js";import"./MenuTrigger-BF5ACnWZ.js";import"./CompositeItem-DXu_k_QL.js";import"./ToolbarRootContext-DOnJZ6Oo.js";import"./getDisabledMountTransitionStyles-D9ttWYyq.js";import"./getPseudoElementBounds-C9ugQgZF.js";import"./chevron-down-Bdgupgh4.js";import"./index-dIUVuF_Q.js";import"./error-DC-jftfn.js";import"./BaseCbacBanner-CrucHGLg.js";import"./makeExternalStore-Bw1hiMWb.js";import"./Tooltip-CIpDyo_p.js";import"./PopoverPopup-DDaiQ5QG.js";import"./debounce-B3uOQazY.js";import"./useOsdkClient-B6N5Ynfx.js";import"./tick-olxLAyAM.js";import"./DropdownField-BX-yMOW5.js";import"./isEqual-BUaS9dIL.js";import"./withOsdkMetrics-DBguGQ7e.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
