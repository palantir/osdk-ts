import{f as b,j as a,r as i}from"./iframe-DzWJ3tJf.js";import{O as u}from"./object-table-Bz7iI-Ye.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D60YPggq.js";import"./Table-kkUhVBB4.js";import"./index-jOIP15Dj.js";import"./Dialog-BGlkMOOL.js";import"./cross-CpclAF39.js";import"./svgIconContainer-NZX5zwbB.js";import"./useBaseUiId-B7BFDCom.js";import"./InternalBackdrop-DYkGzRer.js";import"./composite-BZh-eCsQ.js";import"./index-5-fC0lD_.js";import"./index-CZtqhO_b.js";import"./index-D4IY10Gn.js";import"./useEventCallback-CJtsemMV.js";import"./SkeletonBar-yALHjeEw.js";import"./LoadingCell-CrXDNdvR.js";import"./ColumnConfigDialog-JdeCx5Rx.js";import"./DraggableList-Bfwp7m6u.js";import"./search-GiMpebUt.js";import"./Input-9_-rD_6K.js";import"./useControlled-Qbs937Ua.js";import"./isEqual-DVM9u0ca.js";import"./isObject-BW4wDRVi.js";import"./Button-CTXwYA6d.js";import"./ActionButton-BdKawUax.js";import"./Checkbox--cGklhAL.js";import"./useValueChanged-BM6Ovdpe.js";import"./CollapsiblePanel-A3vtgCY0.js";import"./MultiColumnSortDialog-8-MZXVTR.js";import"./MenuTrigger-CAT0S7Uy.js";import"./CompositeItem-0GMeUwly.js";import"./ToolbarRootContext-RU1iJIsp.js";import"./getDisabledMountTransitionStyles-DVYPlgOw.js";import"./getPseudoElementBounds-CcvyTIsc.js";import"./chevron-down-C0NNvCS6.js";import"./index-CQvM6UYi.js";import"./error-tOl4PAnV.js";import"./BaseCbacBanner-LabUHbFe.js";import"./makeExternalStore-BlWDQNcY.js";import"./Tooltip-CLCbAZyz.js";import"./PopoverPopup-DN7FD26Y.js";import"./debounce-AtIUE0wB.js";import"./useOsdkClient-D0kFz6Qn.js";import"./tick-BbVCke-v.js";import"./DropdownField-DZY8cIEo.js";import"./withOsdkMetrics-oZAeB24-.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
