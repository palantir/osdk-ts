import{f as b,j as a,r as i}from"./iframe-D4YDcgkV.js";import{O as u}from"./object-table-CQVl6PEc.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DCpW9ncL.js";import"./Table-CC9yKcnM.js";import"./index-8cY8PtKc.js";import"./Dialog--FEoWfuM.js";import"./cross-Behni1B5.js";import"./svgIconContainer-COB7RfBn.js";import"./useBaseUiId-Ce1LHnbR.js";import"./InternalBackdrop-QtP5wFDT.js";import"./composite-B2mz0pd-.js";import"./index-BDXEDFqG.js";import"./index-D59BFBqo.js";import"./index-D43eNy-E.js";import"./useEventCallback-BwE5rOmy.js";import"./SkeletonBar-CzsWUOUE.js";import"./LoadingCell-BBX5gfRn.js";import"./ColumnConfigDialog-BJ_ASjlT.js";import"./DraggableList-CVz1UPCT.js";import"./search-DK0Hi7mb.js";import"./Input-Ddw8KtcR.js";import"./useControlled-Bj0_koJm.js";import"./Button--v4W1QZO.js";import"./small-cross-BbdSAPDn.js";import"./ActionButton-CvGZig-A.js";import"./Checkbox-DoYKUy50.js";import"./useValueChanged-CI55RSfr.js";import"./CollapsiblePanel-CSS__w8o.js";import"./MultiColumnSortDialog-BYHB62Sd.js";import"./MenuTrigger-CYLhsVUK.js";import"./CompositeItem-CnYlQOQU.js";import"./ToolbarRootContext-BCQVnjEL.js";import"./getDisabledMountTransitionStyles-8crufxW_.js";import"./getPseudoElementBounds-B5M65vT3.js";import"./chevron-down-BuYLfoea.js";import"./index-DFYfgBX1.js";import"./error-CiQk9egS.js";import"./BaseCbacBanner-BUp57Dg7.js";import"./makeExternalStore-CBSa4JL4.js";import"./Tooltip-mhyE4ARD.js";import"./PopoverPopup-IdL2xFMr.js";import"./debounce-Dfrp39m8.js";import"./useOsdkClient-JcjdO1LI.js";import"./tick-LVA-wE2q.js";import"./DropdownField-BQkaE1vz.js";import"./isEqual-CVZJBzTI.js";import"./withOsdkMetrics-BfFmFbhV.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
