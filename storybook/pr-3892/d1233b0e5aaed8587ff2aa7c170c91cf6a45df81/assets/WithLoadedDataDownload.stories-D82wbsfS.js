import{f as b,j as a,r as i}from"./iframe-GWtObrnm.js";import{O as u}from"./object-table--6l4vffZ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BWY60TXQ.js";import"./Table-BQ1zpx0E.js";import"./index-BwNH4hN0.js";import"./Dialog-CI0TQ-8F.js";import"./cross-_OeeVUkl.js";import"./svgIconContainer-C5I--NmN.js";import"./useBaseUiId-B5mFb3Gq.js";import"./InternalBackdrop-BqoliDVa.js";import"./composite-BX2E-JQE.js";import"./index-7rbFwBSi.js";import"./index-srDgigbb.js";import"./index-C9ELI341.js";import"./useEventCallback-DvN5zfj5.js";import"./SkeletonBar-Cqq0MjJu.js";import"./LoadingCell-DMnrFECH.js";import"./ColumnConfigDialog-lED6sxnh.js";import"./DraggableList-Bkow3cL7.js";import"./search-DFtnP2n3.js";import"./Input-DbTcmmlC.js";import"./useControlled-Db3BVUkn.js";import"./Button-D7JIFKo-.js";import"./small-cross-FyI5Yi6m.js";import"./ActionButton-D7UP0pVF.js";import"./Checkbox-Dd_lHm_2.js";import"./useValueChanged-DgPToUuL.js";import"./CollapsiblePanel-D9mWGcC-.js";import"./MultiColumnSortDialog-JawDtGLn.js";import"./MenuTrigger-BP8DmnEO.js";import"./CompositeItem-BEBiorcp.js";import"./ToolbarRootContext-BQ6mFAZw.js";import"./getDisabledMountTransitionStyles-CNOyEiwp.js";import"./getPseudoElementBounds-CgZ6AS5C.js";import"./chevron-down-RsutKJrE.js";import"./index-CTogg8xs.js";import"./error-DkSINVNd.js";import"./BaseCbacBanner-CCMLdPZ7.js";import"./makeExternalStore-DZ29l_q8.js";import"./Tooltip-CIXs1ydu.js";import"./PopoverPopup-CovUEKXy.js";import"./debounce-BWOeh154.js";import"./useOsdkClient-B2mvuLv0.js";import"./tick-DttPsE9p.js";import"./DropdownField-BqSWZGsk.js";import"./isEqual-DI_6kQdr.js";import"./withOsdkMetrics-BdpD7DOf.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
