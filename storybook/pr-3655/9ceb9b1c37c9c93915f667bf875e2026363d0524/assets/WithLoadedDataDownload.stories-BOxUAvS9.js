import{f as b,j as a,r as i}from"./iframe-BQbGwNJm.js";import{O as u}from"./object-table-BognDTfg.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DZhVWGpL.js";import"./Table-Dyy12RoJ.js";import"./index-c-KUwE8v.js";import"./Dialog-DAsx1ved.js";import"./cross-1e7sKJ3H.js";import"./svgIconContainer-Bkd6Vdtd.js";import"./useBaseUiId-GT7f3Dl5.js";import"./InternalBackdrop-CIefoPyf.js";import"./composite-CXqMHlaT.js";import"./index-BwjBTWX5.js";import"./index-N7hAlELw.js";import"./index-CbWwUOkp.js";import"./useEventCallback-CAV2-487.js";import"./SkeletonBar-CK50ZYqu.js";import"./LoadingCell-BZdUw99S.js";import"./ColumnConfigDialog-DfjYbH1W.js";import"./DraggableList-0g-g5Ly1.js";import"./search-7Vs1LIzt.js";import"./Input-WeXDQawZ.js";import"./useControlled-DWqy833M.js";import"./Button-DIIydijW.js";import"./small-cross-BAgD33WR.js";import"./ActionButton-D6oe6z6v.js";import"./Checkbox-DXJIDB_i.js";import"./useValueChanged-BVXDdxok.js";import"./CollapsiblePanel-cFj0uu4h.js";import"./MultiColumnSortDialog-BDUUy0a7.js";import"./MenuTrigger-W5gm63Uc.js";import"./CompositeItem-DQ9TTb0x.js";import"./ToolbarRootContext-B__DhFIx.js";import"./getDisabledMountTransitionStyles-DWv_AR3l.js";import"./getPseudoElementBounds-Cm1LUEI-.js";import"./chevron-down-Bq756dsS.js";import"./index-BME3csC7.js";import"./error-Ds75ijE9.js";import"./BaseCbacBanner-DjlVE0Y-.js";import"./makeExternalStore-CVg3iLKT.js";import"./Tooltip-DlWEzy-7.js";import"./PopoverPopup-DRyQfEr-.js";import"./toNumber-DoezqP53.js";import"./useOsdkClient-83mNAUCk.js";import"./tick-13iDrFvx.js";import"./DropdownField-D7w2jCoh.js";import"./withOsdkMetrics-rD9P4-Mu.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
