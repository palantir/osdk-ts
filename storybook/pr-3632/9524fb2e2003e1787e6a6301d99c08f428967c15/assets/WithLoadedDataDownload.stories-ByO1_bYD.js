import{f as b,j as a,r as i}from"./iframe-CLbUNDDQ.js";import{O as u}from"./object-table-CuuVT9ev.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Ddvl-xLL.js";import"./Table-JOBTwLzG.js";import"./index-DdSZk3vu.js";import"./Dialog-DshYN0R_.js";import"./cross-Bvgv53c_.js";import"./svgIconContainer-bWFwhvyx.js";import"./useBaseUiId-Duy4oCBe.js";import"./InternalBackdrop-BwARBFHX.js";import"./composite-DWZ-xHoQ.js";import"./index-jgSOSH1p.js";import"./index-BWIEmGIo.js";import"./index-B-4S9GGK.js";import"./useEventCallback-BqjZcdZb.js";import"./SkeletonBar-Bp0nzIS9.js";import"./LoadingCell-D-xjQPsS.js";import"./ColumnConfigDialog-CM_oNPQ2.js";import"./DraggableList-DuPg5WZM.js";import"./search-CYwpcKR9.js";import"./Input-BKJXytVV.js";import"./useControlled-Bmx5uuBa.js";import"./Button-Bqk3M9e4.js";import"./small-cross-CSDp80lk.js";import"./ActionButton-DuwGztn6.js";import"./Checkbox-DtLTuUr6.js";import"./useValueChanged-CZGSzN5r.js";import"./CollapsiblePanel-D6vzvP9y.js";import"./MultiColumnSortDialog-C0LKm0xp.js";import"./MenuTrigger-nWjPMBsu.js";import"./CompositeItem-CF7zNtiQ.js";import"./ToolbarRootContext-4PSRkTRf.js";import"./getDisabledMountTransitionStyles-DFFXKTxY.js";import"./getPseudoElementBounds-BZIjlYHk.js";import"./chevron-down-D5iTV8xG.js";import"./index-Bum4KHd8.js";import"./error-Cwe5UK3L.js";import"./BaseCbacBanner-CqVzqhkF.js";import"./makeExternalStore-C653oAyg.js";import"./Tooltip-DWVh-X4w.js";import"./PopoverPopup-DbwjwqXm.js";import"./toNumber-riHn02yU.js";import"./useOsdkClient-BJSWtTvW.js";import"./tick-D8aZ0Iwi.js";import"./DropdownField-D_9_MHJv.js";import"./withOsdkMetrics-GOg6BWns.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
