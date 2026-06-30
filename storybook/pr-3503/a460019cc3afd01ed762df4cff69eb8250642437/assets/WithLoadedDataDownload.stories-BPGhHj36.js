import{f as b,j as a,r as i}from"./iframe-hA54k6Ra.js";import{O as u}from"./object-table-DATbYPk9.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B2ctPuK5.js";import"./Table-C6Le93p0.js";import"./index-CuWY2XwM.js";import"./Dialog-DshM5ho7.js";import"./cross-DT1vpwrk.js";import"./svgIconContainer-Bt5A1ZM1.js";import"./useBaseUiId-D7evU5vy.js";import"./InternalBackdrop-BOlZyT-O.js";import"./composite-CgGAQ8DQ.js";import"./index-CDT2pjS0.js";import"./index-BXS422Xk.js";import"./index-D8IXKVGJ.js";import"./useEventCallback-BC5x1cCq.js";import"./SkeletonBar-BAIGvG-Z.js";import"./LoadingCell-CHGMl8FX.js";import"./ColumnConfigDialog-DhEwez2r.js";import"./DraggableList-CexeqMm-.js";import"./search-DyXrHlWh.js";import"./Input-3RHKQlOe.js";import"./useControlled-CLK-WO_f.js";import"./Button-C0ZpVY7M.js";import"./small-cross-v7HF920m.js";import"./ActionButton-DZgI6ocs.js";import"./Checkbox-D3EYRL2O.js";import"./minus-Dr_q24S2.js";import"./tick-DNiFu8m0.js";import"./useValueChanged-BR8fXQcj.js";import"./caret-down-BN8v1Kvq.js";import"./CollapsiblePanel-ft0E0y03.js";import"./MultiColumnSortDialog-BHsGQef1.js";import"./MenuTrigger-kTMLfRVu.js";import"./CompositeItem-fKFw6KEZ.js";import"./ToolbarRootContext-CxUD8pdl.js";import"./getDisabledMountTransitionStyles-DH3VZr7b.js";import"./getPseudoElementBounds-CfZ-O487.js";import"./chevron-down--kw9M12S.js";import"./index-CGP2Zvg-.js";import"./error-Bt_KfG7R.js";import"./BaseCbacBanner-C7v8m2hS.js";import"./makeExternalStore-CNH7TiNm.js";import"./Tooltip-B7OcSX8I.js";import"./PopoverPopup-DoTgReHM.js";import"./toNumber-C2vgQYhv.js";import"./useOsdkClient-WG7fWoyT.js";import"./DropdownField-C8lw1oO5.js";import"./withOsdkMetrics-BYUsJTYh.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
