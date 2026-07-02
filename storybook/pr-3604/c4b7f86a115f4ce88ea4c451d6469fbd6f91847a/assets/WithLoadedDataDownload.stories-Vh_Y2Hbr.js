import{f as b,j as a,r as i}from"./iframe-DWIh2My5.js";import{O as u}from"./object-table-BjRYs2jX.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DY34mEM_.js";import"./Table-BaBZlUMO.js";import"./index-Dr0wFz6U.js";import"./Dialog-74oicJGg.js";import"./cross-C4nn9kt7.js";import"./svgIconContainer-BnRb4RdE.js";import"./useBaseUiId-BeqqY0Lp.js";import"./InternalBackdrop-wpO0j6ZL.js";import"./composite-B1E5hU3f.js";import"./index-C4ak3yd0.js";import"./index-RnszV6TD.js";import"./index-DSDz9GEB.js";import"./useEventCallback-DwIePs6j.js";import"./SkeletonBar-DlqS-1vY.js";import"./LoadingCell-Cz2CsOPZ.js";import"./ColumnConfigDialog-CtZvCV8h.js";import"./DraggableList-qK4a9iQ1.js";import"./search-BEMkdj45.js";import"./Input-CSwHlBdV.js";import"./useControlled-DoDxpg9c.js";import"./Button-na3Ft-Tz.js";import"./small-cross-CE4fDAR5.js";import"./ActionButton-C38Mxy5Z.js";import"./Checkbox-HWHi6p0m.js";import"./minus-DGZBEA7T.js";import"./tick-B-dIsewA.js";import"./useValueChanged-DnqCl0lW.js";import"./caret-down-DgJ1UFvO.js";import"./CollapsiblePanel-qUltwGfV.js";import"./MultiColumnSortDialog-tZXVnnRH.js";import"./MenuTrigger-CWWAu0qI.js";import"./CompositeItem-CR-9HIgj.js";import"./ToolbarRootContext-CvGk5N7v.js";import"./getDisabledMountTransitionStyles-B04wnOdp.js";import"./getPseudoElementBounds-CYjqwHHV.js";import"./chevron-down-DBmfy22Q.js";import"./index-ClQc1lw2.js";import"./error-DZJ58IBW.js";import"./BaseCbacBanner-6JODx7Er.js";import"./makeExternalStore-DMJmdL5l.js";import"./Tooltip-DlhLXTRo.js";import"./PopoverPopup-BkbEgiHB.js";import"./toNumber-BIO-lm5p.js";import"./useOsdkClient-zKxrJyOE.js";import"./DropdownField-BAO5CXTg.js";import"./withOsdkMetrics-BNsdErj_.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
