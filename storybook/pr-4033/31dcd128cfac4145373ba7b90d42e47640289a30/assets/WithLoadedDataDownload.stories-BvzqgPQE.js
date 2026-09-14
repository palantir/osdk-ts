import{f as b,j as a,r as i}from"./iframe-B-owY9Z7.js";import{O as u}from"./object-table-CefKw-8F.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-9dohNchO.js";import"./Table-D7Chhi4i.js";import"./index-B6FNdyul.js";import"./Dialog-DucCbSyW.js";import"./cross-DAeYv9DV.js";import"./svgIconContainer-SVfmpuZH.js";import"./useBaseUiId-BuygkMJa.js";import"./InternalBackdrop-Qs9WBPXA.js";import"./composite-CruT5ftQ.js";import"./index-D6Mlo6-X.js";import"./index-BLL9qzqo.js";import"./index-Bd9R8qyi.js";import"./useEventCallback-DEuppmtE.js";import"./SkeletonBar-Dt6LDg3E.js";import"./LoadingCell-D77Tuzfg.js";import"./ColumnConfigDialog-XbxNc6BS.js";import"./DraggableList-h04GfC5d.js";import"./search-CeJ8ph1L.js";import"./Input-DO0-uKR0.js";import"./useControlled-DU5wctnz.js";import"./Button-CdoyG0J5.js";import"./small-cross-6e-BgKCt.js";import"./ActionButton-BILzU60N.js";import"./Checkbox-DmR4JKqW.js";import"./useValueChanged-CKB_GaD4.js";import"./CollapsiblePanel-C-QRWB1j.js";import"./MultiColumnSortDialog-CmYfhF5I.js";import"./MenuTrigger-Q8tox6sB.js";import"./CompositeItem-Czc0ACb3.js";import"./ToolbarRootContext-PF-H9oB3.js";import"./getDisabledMountTransitionStyles-B2Uy8nCz.js";import"./getPseudoElementBounds-xcUg61qv.js";import"./chevron-down-KtY7GIs6.js";import"./index-CHVvDRh4.js";import"./error-BnApDvy6.js";import"./BaseCbacBanner-CN-44h_1.js";import"./makeExternalStore-DCMzogXn.js";import"./Tooltip-CSFV9ySu.js";import"./PopoverPopup-BP7HKGIF.js";import"./debounce-8Cu2Gz8K.js";import"./useOsdkClient-BO3W3UoD.js";import"./tick-DndUclkL.js";import"./DropdownField-Br6lY0cs.js";import"./isEqual-C7NIFCJ6.js";import"./withOsdkMetrics-D7Kd4RWC.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
