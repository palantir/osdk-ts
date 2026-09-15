import{f as b,j as a,r as i}from"./iframe-DzKgN3qu.js";import{O as u}from"./object-table-CtK_8iNA.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Bq44pRuA.js";import"./Table-Dq_QyDjJ.js";import"./index-BdOs7mw_.js";import"./Dialog-BhJBc9hc.js";import"./cross-qDkjCQ52.js";import"./svgIconContainer-XLXcJGX1.js";import"./useBaseUiId-Dv29B-pr.js";import"./InternalBackdrop-DTv9GrXy.js";import"./composite-CC7knVWa.js";import"./index-Gldmiip-.js";import"./index-C67GGcUR.js";import"./index-D_SumSez.js";import"./useEventCallback-99uro0ic.js";import"./SkeletonBar-Dfz2-rCc.js";import"./LoadingCell-DeR0iF42.js";import"./ColumnConfigDialog-DEMeT5_5.js";import"./DraggableList-jDIz54JI.js";import"./search-C4jktGRC.js";import"./Input-CzkZobpW.js";import"./useControlled-DrMtPDwW.js";import"./Button-M7h6gJdh.js";import"./small-cross-Bmj1XADt.js";import"./ActionButton-CBtqi0Iz.js";import"./Checkbox-CH2QnWUk.js";import"./useValueChanged-D1zVaC1g.js";import"./CollapsiblePanel-kVIjS7dE.js";import"./MultiColumnSortDialog-Ca2fIzUt.js";import"./MenuTrigger-CwWJZA0k.js";import"./CompositeItem-yqIim0nf.js";import"./ToolbarRootContext-CCsiwlz9.js";import"./getDisabledMountTransitionStyles-D5tdzTrF.js";import"./getPseudoElementBounds-C962SI_-.js";import"./chevron-down-vPjMV4aO.js";import"./index-DZ2KvGi_.js";import"./error-T16LD8HE.js";import"./BaseCbacBanner-zK1R8vcJ.js";import"./makeExternalStore-DmfOAvnN.js";import"./Tooltip-CA-Q7zym.js";import"./PopoverPopup-DvBaLRqn.js";import"./debounce-CygZGtiO.js";import"./useOsdkClient-DtuTQNsD.js";import"./tick-BFOPMsDc.js";import"./DropdownField-Dgeq7PS2.js";import"./isEqual-CVocfjt0.js";import"./withOsdkMetrics-CgGyBohZ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
