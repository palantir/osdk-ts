import{f as b,j as a,r as i}from"./iframe-BmwK0NB6.js";import{O as u}from"./object-table-BeuJFUAl.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CJI9HYts.js";import"./Table-ChWSbzv8.js";import"./index-NnjawErR.js";import"./Dialog-Cjov8EJt.js";import"./cross-hgFEJfRa.js";import"./svgIconContainer-DHRvXAx1.js";import"./useBaseUiId-DICqGIOz.js";import"./InternalBackdrop-BNdzkB7f.js";import"./composite-C06v5r-q.js";import"./index-DuWg3JLn.js";import"./index-DiZc7AlS.js";import"./index-DX06iv2-.js";import"./useEventCallback-DekRZM9z.js";import"./SkeletonBar-cj1km_Ew.js";import"./LoadingCell-ir3KaEX9.js";import"./ColumnConfigDialog-CinlVjur.js";import"./DraggableList-DsMXG4CE.js";import"./search-Dm097x9N.js";import"./Input-Bfu2n9eX.js";import"./useControlled-D_GkEGnz.js";import"./Button-C7GE2_Px.js";import"./small-cross-ZFjbIYNW.js";import"./ActionButton-DO9pXiqf.js";import"./Checkbox-Bm4hlpwh.js";import"./useValueChanged-CYhlDneB.js";import"./CollapsiblePanel-BlAI9gbe.js";import"./MultiColumnSortDialog-DQlwKNla.js";import"./MenuTrigger-CQQrfhyE.js";import"./CompositeItem-BHcZzMjK.js";import"./ToolbarRootContext-ReHQQSwk.js";import"./getDisabledMountTransitionStyles-D6uMoq56.js";import"./getPseudoElementBounds-7hGlU8g7.js";import"./chevron-down-YY61_NRW.js";import"./index-BpeS-KLN.js";import"./error-CHia6_Yv.js";import"./BaseCbacBanner-BxZMmDMR.js";import"./makeExternalStore-RuIAz4L3.js";import"./Tooltip-yGZeBWi0.js";import"./PopoverPopup-CMLgSpj-.js";import"./debounce-CVCv63C4.js";import"./useOsdkClient-UKqs4_2L.js";import"./tick-BXHwy8u9.js";import"./DropdownField-1ya05CQB.js";import"./isEqual-eMF9IvTP.js";import"./withOsdkMetrics-BVS2eODs.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
