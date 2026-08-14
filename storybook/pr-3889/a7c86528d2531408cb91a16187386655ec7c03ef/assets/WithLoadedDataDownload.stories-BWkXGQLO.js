import{f as b,j as a,r as i}from"./iframe-Cpw76Sdc.js";import{O as u}from"./object-table-BRLY5aCa.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-8AbM0gOB.js";import"./Table-2dgTr2pA.js";import"./index-zPQhZCVL.js";import"./Dialog-BSbzRySi.js";import"./cross-CHILGXBp.js";import"./svgIconContainer-BD5xY0XD.js";import"./useBaseUiId-iIyXPd8a.js";import"./InternalBackdrop-CrzPvv-e.js";import"./composite-BiHZiM_o.js";import"./index-DyQIyZ_o.js";import"./index-CCh0UBc-.js";import"./index-mvHbpu9m.js";import"./useEventCallback-DwTyub1b.js";import"./SkeletonBar-BN28IWus.js";import"./LoadingCell-BAqjE1Zt.js";import"./ColumnConfigDialog-d5-jecqO.js";import"./DraggableList-xj-JSUxt.js";import"./search-C6EHfnm3.js";import"./Input-CtOgxGdW.js";import"./useControlled-JdKni9kg.js";import"./Button-CKa97gQA.js";import"./small-cross-CvcLh5v8.js";import"./ActionButton-DSv4OBq1.js";import"./Checkbox-B0Igi9Ut.js";import"./useValueChanged-CYl-xbrr.js";import"./CollapsiblePanel-kMyKToA5.js";import"./MultiColumnSortDialog-BfsEwFQ5.js";import"./MenuTrigger-B1YYjSiM.js";import"./CompositeItem-CvHmtrv6.js";import"./ToolbarRootContext-BkMaLa5M.js";import"./getDisabledMountTransitionStyles-mn_22XPf.js";import"./getPseudoElementBounds-C6mykXXF.js";import"./chevron-down-CZx_QJYn.js";import"./index-CDcUaHOJ.js";import"./error-Cf9QFWnN.js";import"./BaseCbacBanner-5_yWfNz5.js";import"./makeExternalStore-BBzTQwwa.js";import"./Tooltip-BpKwVBux.js";import"./PopoverPopup-CexomEcT.js";import"./debounce-B--H28BV.js";import"./useOsdkClient-CPHnoq0t.js";import"./tick-DGRCvyHI.js";import"./DropdownField-cOQ5lTMI.js";import"./isEqual-DDjWjXdA.js";import"./withOsdkMetrics-DWbYyS_O.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
