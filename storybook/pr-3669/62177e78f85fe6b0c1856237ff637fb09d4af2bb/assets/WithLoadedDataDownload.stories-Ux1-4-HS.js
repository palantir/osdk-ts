import{f as b,j as a,r as i}from"./iframe-BdVamoeG.js";import{O as u}from"./object-table-BfuEkomR.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dye3EO5e.js";import"./Table-nADog-9Q.js";import"./index-DuW1XknK.js";import"./Dialog-EsWbjWp0.js";import"./cross-_ryZ0HJ8.js";import"./svgIconContainer-Cu8qhMAy.js";import"./useBaseUiId-C2AcVyH_.js";import"./InternalBackdrop-CwPOB4M-.js";import"./composite-CE_k4VJ_.js";import"./index-BkHR2uR4.js";import"./index-C2-3XFYc.js";import"./index-CofVZtm0.js";import"./useEventCallback-CwSwR97T.js";import"./SkeletonBar-D5P7N9S8.js";import"./LoadingCell-WZvLGDSF.js";import"./ColumnConfigDialog-8itlYiid.js";import"./DraggableList-7GGzXSgR.js";import"./search-BUrwIQwE.js";import"./Input-COSsUxY7.js";import"./useControlled-DtLfw4KF.js";import"./Button-DgF6VF4p.js";import"./small-cross-0RJUhrTi.js";import"./ActionButton-CFfFC32u.js";import"./Checkbox-CVPMe_Qq.js";import"./useValueChanged-CtTLAlwG.js";import"./CollapsiblePanel-CwS0rpOF.js";import"./MultiColumnSortDialog-BfzBEpnu.js";import"./MenuTrigger-ZqTgETJa.js";import"./CompositeItem-uLqgt7zO.js";import"./ToolbarRootContext-DI6SIN63.js";import"./getDisabledMountTransitionStyles-BFK3lfLB.js";import"./getPseudoElementBounds-DRB1feQZ.js";import"./chevron-down-VlFmUn0p.js";import"./index-zD8e3upo.js";import"./error-fKbIgIk_.js";import"./BaseCbacBanner-C4MD5vW4.js";import"./makeExternalStore-BSWGLQXv.js";import"./Tooltip-BS_wYXbH.js";import"./PopoverPopup-DBa6XEP1.js";import"./toNumber-DWHFqoZ9.js";import"./useOsdkClient-DYCIb1h1.js";import"./tick-CUu48cDh.js";import"./DropdownField-CW85attA.js";import"./withOsdkMetrics-N3-MvQLc.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
