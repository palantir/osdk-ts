import{f as b,j as a,r as i}from"./iframe-C_0-Ny_N.js";import{O as u}from"./object-table-DGQgtl_w.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Cs_UzwR6.js";import"./Table-Dgvo0A5I.js";import"./index-BCapEaKB.js";import"./Dialog-BbxXOlT6.js";import"./cross-Dhbxwhb2.js";import"./svgIconContainer-DAGFJod5.js";import"./useBaseUiId-B7Keq3x8.js";import"./InternalBackdrop-DSC0itKR.js";import"./composite-BKxtxXCT.js";import"./index-Bewi1ToU.js";import"./index-D3nPMosa.js";import"./index-DCJ2O27O.js";import"./useEventCallback-CHNZdE5h.js";import"./SkeletonBar-CoeG_Gyn.js";import"./LoadingCell-DR0WPrbM.js";import"./ColumnConfigDialog-CkHl9bEd.js";import"./DraggableList-Do4A-fJS.js";import"./search-BKcV1gVw.js";import"./Input-BF9DmCeg.js";import"./useControlled-DmQkJsyf.js";import"./Button-g8Y5a3bQ.js";import"./small-cross-CFI7QvS0.js";import"./ActionButton-D9LJ1Y0h.js";import"./Checkbox-CDawQgr1.js";import"./useValueChanged-CdL69oAW.js";import"./CollapsiblePanel-CL0PnPaH.js";import"./MultiColumnSortDialog-C19wCna8.js";import"./MenuTrigger-NDFVm2E2.js";import"./CompositeItem-BeOy_iQJ.js";import"./ToolbarRootContext-DkY9S2-W.js";import"./getDisabledMountTransitionStyles-CpRzurrr.js";import"./getPseudoElementBounds-NZN6UuUV.js";import"./chevron-down-C0ibfMMv.js";import"./index-CrSkVWMy.js";import"./error-DAsTyxDt.js";import"./BaseCbacBanner-CdzWkyww.js";import"./makeExternalStore-CXzzR7o8.js";import"./Tooltip-CSoPyId7.js";import"./PopoverPopup-CA1dNHn3.js";import"./debounce-CsMAmyDS.js";import"./useOsdkClient-qcjIUx1B.js";import"./tick-CZldnOuP.js";import"./DropdownField-DvVkFAtM.js";import"./isEqual-dkeqRnY_.js";import"./withOsdkMetrics-rrME1YBQ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
