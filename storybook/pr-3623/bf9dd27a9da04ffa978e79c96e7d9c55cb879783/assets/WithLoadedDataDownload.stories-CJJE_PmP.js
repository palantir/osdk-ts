import{f as b,j as a,r as i}from"./iframe-BQr7m57P.js";import{O as u}from"./object-table-C57qx4ff.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Don5t6xJ.js";import"./Table-EfWCKk9D.js";import"./index-H8nXahHz.js";import"./Dialog-BU6VJV9n.js";import"./cross-YqVZ7uQZ.js";import"./svgIconContainer-Dm9cfv8p.js";import"./useBaseUiId-BF6EbEou.js";import"./InternalBackdrop-kYoqShZV.js";import"./composite-B8gb6eS7.js";import"./index-BbJO5frt.js";import"./index-CXQ_prqI.js";import"./index-bsFZ-ldO.js";import"./useEventCallback-BkE7xqkb.js";import"./SkeletonBar-BQ_Hd7A2.js";import"./LoadingCell-DDw3MAdj.js";import"./ColumnConfigDialog-DO1b3TqC.js";import"./DraggableList-yFyqiU0h.js";import"./search-DZCrf5le.js";import"./Input-DRJZ9z-s.js";import"./useControlled-Tpu3D55U.js";import"./Button-DZYEtZfL.js";import"./small-cross-CGcCVIq0.js";import"./ActionButton-BWh8FWZI.js";import"./Checkbox-tj9Mze2J.js";import"./useValueChanged-DMB88MVD.js";import"./CollapsiblePanel-DyQsQEDO.js";import"./MultiColumnSortDialog-Cm3FUPpQ.js";import"./MenuTrigger-CVATy_Lw.js";import"./CompositeItem-BxDlztsz.js";import"./ToolbarRootContext-uOhSmZ0o.js";import"./getDisabledMountTransitionStyles-DesZ7vro.js";import"./getPseudoElementBounds-CNAZ7jbb.js";import"./chevron-down-Co2tg5mU.js";import"./index-qrG-6oRl.js";import"./error-Ceo_ap97.js";import"./BaseCbacBanner-CJ9ygZ9-.js";import"./makeExternalStore-BlNc40mf.js";import"./Tooltip-BsHbg2L5.js";import"./PopoverPopup-DHckLWh-.js";import"./toNumber-Da4CLOD5.js";import"./useOsdkClient-C5abaWOk.js";import"./tick-DhTUR2iT.js";import"./DropdownField-KCCjPXaj.js";import"./withOsdkMetrics-D9SI-c98.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
