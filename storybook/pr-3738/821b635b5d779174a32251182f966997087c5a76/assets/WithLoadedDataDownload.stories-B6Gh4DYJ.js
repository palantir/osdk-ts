import{f as b,j as a,r as i}from"./iframe-CL4UessJ.js";import{O as u}from"./object-table-CJwFPYLh.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-X9tQ-Ro6.js";import"./Table-DO5t5QF4.js";import"./index-CuQscTLS.js";import"./Dialog-DVpuAAE2.js";import"./cross-BrJ6ooB2.js";import"./svgIconContainer-CMOMNq3G.js";import"./useBaseUiId-C0g9vfON.js";import"./InternalBackdrop-00goDF2v.js";import"./composite-C9gZWjPR.js";import"./index-CZ6Gtb-I.js";import"./index-D5nMUh2o.js";import"./index-kfQfKf2J.js";import"./useEventCallback-CA3T4Nsf.js";import"./SkeletonBar-DSJ7-8PM.js";import"./LoadingCell-BgKbszPV.js";import"./ColumnConfigDialog-nG9nW_3F.js";import"./DraggableList-C5JmjFNf.js";import"./search-CFrkmuc2.js";import"./Input-CbgCfohB.js";import"./useControlled-C4g4Ro2e.js";import"./isEqual-hG_4ZrXX.js";import"./isObject-B6GdqpCO.js";import"./Button-DCwXYkIS.js";import"./ActionButton-Bu1kVHNE.js";import"./Checkbox-BqP3g_e1.js";import"./useValueChanged-Ch0VU4Mt.js";import"./CollapsiblePanel-BuDLVEY8.js";import"./MultiColumnSortDialog-DyGiUi9Z.js";import"./MenuTrigger-D3QIkUB3.js";import"./CompositeItem-BJ8h2cBk.js";import"./ToolbarRootContext-YHEW-YfH.js";import"./getDisabledMountTransitionStyles-DzgvcXWi.js";import"./getPseudoElementBounds-BiPncuNY.js";import"./chevron-down-CzML4mqe.js";import"./index-Cy3rUIcf.js";import"./error-DLILtTPf.js";import"./BaseCbacBanner-Caz8BT1D.js";import"./makeExternalStore-Bhe8UyWJ.js";import"./Tooltip-DD4f5V0W.js";import"./PopoverPopup-DUxb0nTQ.js";import"./toNumber-DdBj21PM.js";import"./useOsdkClient-DwhWuET8.js";import"./tick-jILTcEB0.js";import"./DropdownField-C1hWyFZ3.js";import"./withOsdkMetrics-B0fTd-84.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
