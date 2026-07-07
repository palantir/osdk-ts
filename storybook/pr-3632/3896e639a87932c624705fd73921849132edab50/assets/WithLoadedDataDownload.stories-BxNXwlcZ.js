import{f as b,j as a,r as i}from"./iframe-CYW5dms5.js";import{O as u}from"./object-table-CUqbUV1v.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-olK7XJq_.js";import"./Table-oxJcIij4.js";import"./index-BvCsYRnS.js";import"./Dialog-C5eD7p8X.js";import"./cross-C1GpBADO.js";import"./svgIconContainer-Co2y6FkV.js";import"./useBaseUiId-D11MneQi.js";import"./InternalBackdrop-BcF92kYa.js";import"./composite-pL0XyzxB.js";import"./index-qKsGl0BM.js";import"./index-IvQmYIWP.js";import"./index-Cv7h8pdy.js";import"./useEventCallback-BvEcOCdA.js";import"./SkeletonBar-Ajk3Z7S8.js";import"./LoadingCell-oKEwqOJf.js";import"./ColumnConfigDialog-fMTHJiGQ.js";import"./DraggableList-DI1mSYfo.js";import"./search-DyatV9DG.js";import"./Input-275Rxpul.js";import"./useControlled-qlmpqfTt.js";import"./Button-BAONyfmh.js";import"./small-cross-B2EmL1jx.js";import"./ActionButton-CwYo_LDI.js";import"./Checkbox-BRhtm6mX.js";import"./useValueChanged-CqHTYvle.js";import"./CollapsiblePanel-BiuwxjVW.js";import"./MultiColumnSortDialog-Bq8rV5_5.js";import"./MenuTrigger-SiIov3D7.js";import"./CompositeItem-C3KWzmte.js";import"./ToolbarRootContext-CPizw2Pk.js";import"./getDisabledMountTransitionStyles-HZk_UelZ.js";import"./getPseudoElementBounds-CxDcIV1b.js";import"./chevron-down-3TYRtgLT.js";import"./index-Bf5Jk6iU.js";import"./error-B205EXeR.js";import"./BaseCbacBanner-UO9ZxyiS.js";import"./makeExternalStore-Bi9cPtCd.js";import"./Tooltip-CG7TR7jA.js";import"./PopoverPopup-BdlDhbcI.js";import"./toNumber-CqOrSTkx.js";import"./useOsdkClient-B1xHsvfR.js";import"./tick-CgjDXCqf.js";import"./DropdownField-DMS8Je6P.js";import"./withOsdkMetrics-Bs9W2n9P.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
