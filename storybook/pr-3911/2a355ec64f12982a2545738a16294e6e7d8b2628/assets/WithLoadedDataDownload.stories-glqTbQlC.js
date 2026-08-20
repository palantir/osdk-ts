import{f as b,j as a,r as i}from"./iframe-DmXP0LlD.js";import{O as u}from"./object-table-BjMOKbCg.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Jf9pG1wK.js";import"./Table-Y9GfFRHB.js";import"./index-CZJiQUDL.js";import"./Dialog-CVsym47h.js";import"./cross-BrUjdQ5Z.js";import"./svgIconContainer-B-RvFu1q.js";import"./useBaseUiId-E5ZPLTjy.js";import"./InternalBackdrop-ChZQi1ES.js";import"./composite-DJUOEQiI.js";import"./index-DOc2Q07X.js";import"./index-CLUklD_q.js";import"./index-DJxwbR4M.js";import"./useEventCallback-Bja2Ayv3.js";import"./SkeletonBar-BFpqVqU_.js";import"./LoadingCell-CBmyY9EE.js";import"./ColumnConfigDialog-DEw4qskw.js";import"./DraggableList-Crfi2BHG.js";import"./search-Cd_hr6P9.js";import"./Input-nRL7PDkG.js";import"./useControlled-DVwcpHQh.js";import"./Button-CsgASgcA.js";import"./small-cross-BwaFhREm.js";import"./ActionButton-Dv0Ng1hy.js";import"./Checkbox-CPNQrtye.js";import"./useValueChanged-CmWjf2b_.js";import"./CollapsiblePanel-DyjWRvYh.js";import"./MultiColumnSortDialog-IJrMRGR8.js";import"./MenuTrigger-BU378CbM.js";import"./CompositeItem-BpyDnYwk.js";import"./ToolbarRootContext-CexR2eUf.js";import"./getDisabledMountTransitionStyles-C5aF-19e.js";import"./getPseudoElementBounds-BJekTzuW.js";import"./chevron-down-IhoHRVVT.js";import"./index-kI9ab8J3.js";import"./error-BhRfzKmP.js";import"./BaseCbacBanner-B31x1InM.js";import"./makeExternalStore-SUGo_pfp.js";import"./Tooltip-gfc1TfD5.js";import"./PopoverPopup-8idE2mCI.js";import"./debounce-Dr04tHtc.js";import"./useOsdkClient-u9eb-Osv.js";import"./tick-BsfBlrl4.js";import"./DropdownField-D4q_CFxC.js";import"./isEqual-GVkQHx_o.js";import"./withOsdkMetrics-ChE2bbpo.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
