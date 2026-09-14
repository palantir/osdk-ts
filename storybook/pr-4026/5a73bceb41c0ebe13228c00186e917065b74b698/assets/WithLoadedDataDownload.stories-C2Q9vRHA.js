import{f as b,j as a,r as i}from"./iframe-DGk-Gwvb.js";import{O as u}from"./object-table-B1GB1Px_.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DZHE4yfF.js";import"./Table-CGvoeQiy.js";import"./index-CHt6784l.js";import"./Dialog-CoyTV2xE.js";import"./cross-Bv56pu7B.js";import"./svgIconContainer-DWhpBW2K.js";import"./useBaseUiId-CYF4ttQ0.js";import"./InternalBackdrop-2qC76XrM.js";import"./composite-UKbswMLH.js";import"./index--TUwCCTO.js";import"./index-Y3fUVY7j.js";import"./index-Dmy594Bz.js";import"./useEventCallback-2nXbXvpA.js";import"./SkeletonBar-C2y2uMzP.js";import"./LoadingCell-DsGqRk6L.js";import"./ColumnConfigDialog-BG7xCsyo.js";import"./DraggableList-e-Vui3PK.js";import"./search-DuL1IKxe.js";import"./Input-lpBjDH3J.js";import"./useControlled-BLk_1CnQ.js";import"./Button-D8mEnRQz.js";import"./small-cross-CqqiVSV9.js";import"./ActionButton-DrJeruLF.js";import"./Checkbox-DHlridbE.js";import"./useValueChanged-DAOfQ09L.js";import"./CollapsiblePanel-TiLElam_.js";import"./MultiColumnSortDialog-CLmgSm8M.js";import"./MenuTrigger-D6_BzbAC.js";import"./CompositeItem-CaGEr3lp.js";import"./ToolbarRootContext-DYa8q61O.js";import"./getDisabledMountTransitionStyles-DzmBA_gO.js";import"./getPseudoElementBounds-Caw7OuxZ.js";import"./chevron-down-F0KSYD0T.js";import"./index-BDWQvtVH.js";import"./error-CNFmOPSg.js";import"./BaseCbacBanner-DS4E-NQX.js";import"./makeExternalStore-DekmBIJm.js";import"./Tooltip-B8a6AeiL.js";import"./PopoverPopup-8NMKP2yH.js";import"./debounce-DdquZemZ.js";import"./useOsdkClient-nqMxZ_CW.js";import"./tick-Co26rO3c.js";import"./DropdownField-BarJItLo.js";import"./isEqual-Bny9H9I6.js";import"./withOsdkMetrics-B38cTpqn.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
