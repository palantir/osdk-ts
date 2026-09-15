import{f as b,j as a,r as i}from"./iframe-DcCQS0_6.js";import{O as u}from"./object-table-IW6qzE0i.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-xWYT_d-N.js";import"./Table-DFemE_x6.js";import"./index-CbMk7YoF.js";import"./Dialog-DpW59sOk.js";import"./cross-CUczp16a.js";import"./svgIconContainer-DW0Yd1WX.js";import"./useBaseUiId-Dh-QEy1V.js";import"./InternalBackdrop-Cjy1b8s5.js";import"./composite-CzrpQp13.js";import"./index-DV2Nx4iz.js";import"./index-DH8eBQ7L.js";import"./index-B12KGdMo.js";import"./useEventCallback-uOZ5ZH80.js";import"./SkeletonBar-D5ep4ew5.js";import"./LoadingCell-hpqWg47X.js";import"./ColumnConfigDialog-BzJpbiPU.js";import"./DraggableList-BwYzjIhu.js";import"./search-I8gByOwV.js";import"./Input-DQQsT43v.js";import"./useControlled-DjePpHNj.js";import"./Button-9wNHK-eW.js";import"./small-cross-J9_U438b.js";import"./ActionButton-DUjUq-0F.js";import"./Checkbox--MKRLD2P.js";import"./useValueChanged-LgJH2RSM.js";import"./CollapsiblePanel-Bw4GjZXS.js";import"./MultiColumnSortDialog-D7WAM6sg.js";import"./MenuTrigger-lqNk6ztm.js";import"./CompositeItem-f5BJQE98.js";import"./ToolbarRootContext-Bj_28nw4.js";import"./getDisabledMountTransitionStyles-hcUT6CF_.js";import"./getPseudoElementBounds-hK_15JJS.js";import"./chevron-down-lL-kgNIS.js";import"./index-rRkZkhHF.js";import"./error-DZqUEnyZ.js";import"./BaseCbacBanner-Dl9pCWQu.js";import"./makeExternalStore-D7kaYs9c.js";import"./Tooltip-BhO1PItx.js";import"./PopoverPopup-4ZQ0qIW9.js";import"./debounce-CV8PblDi.js";import"./useOsdkClient-DjIuCtk_.js";import"./tick-B04vkzTg.js";import"./DropdownField-D9LBoico.js";import"./isEqual-qXfBCwDA.js";import"./withOsdkMetrics-CT48WTCf.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
