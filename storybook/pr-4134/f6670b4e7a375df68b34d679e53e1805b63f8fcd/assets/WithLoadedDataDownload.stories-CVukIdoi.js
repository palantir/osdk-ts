import{f as b,j as a,r as i}from"./iframe-Bjs833GT.js";import{O as u}from"./object-table-C3IgKZNw.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BlVzQ63h.js";import"./Table-mE-X7H78.js";import"./index-ouW-uxFy.js";import"./Dialog-CeGZ1o7-.js";import"./cross-odZi7HLt.js";import"./svgIconContainer-B50GNB1l.js";import"./useBaseUiId-azhLq6E8.js";import"./InternalBackdrop-CSh59UaV.js";import"./composite-DAp8GgCU.js";import"./index-Cd4CH7YJ.js";import"./index-BIIN4O4s.js";import"./index-gqB7KI61.js";import"./useEventCallback-DAOuva_s.js";import"./SkeletonBar-COXh_K_A.js";import"./LoadingCell-CL6pGTYf.js";import"./ColumnConfigDialog-RzjwFmne.js";import"./DraggableList-Cb1vAsrp.js";import"./search-Bz3i30zB.js";import"./Input-jDIiSSPg.js";import"./useControlled-T6eskrKs.js";import"./Button-Bi0CmGS9.js";import"./small-cross-4PvqsLte.js";import"./ActionButton-BV_FUyjV.js";import"./Checkbox-h8zMlZRj.js";import"./useValueChanged-BcoiLIU-.js";import"./CollapsiblePanel-CEYd-Yeh.js";import"./MultiColumnSortDialog-B-Q3xx7z.js";import"./MenuTrigger-B6rWoPMu.js";import"./CompositeItem-BOsNn8o6.js";import"./ToolbarRootContext-Gv05lgLU.js";import"./getDisabledMountTransitionStyles-DbnX7M-z.js";import"./getPseudoElementBounds-BYukSd76.js";import"./chevron-down-DSKsXuZi.js";import"./index-Ci1PABP6.js";import"./error-D5mhWRkN.js";import"./BaseCbacBanner-BtOiRQiw.js";import"./makeExternalStore-DPdJKiEp.js";import"./Tooltip-Bjp4iv0K.js";import"./PopoverPopup-D62GG8Vu.js";import"./debounce-BQr-vi9c.js";import"./useOsdkClient-Bk2k7B_F.js";import"./tick-ujL-DBFL.js";import"./DropdownField-CCWswJAt.js";import"./isEqual-BarWzeE3.js";import"./withOsdkMetrics-CZSiJ0-9.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
