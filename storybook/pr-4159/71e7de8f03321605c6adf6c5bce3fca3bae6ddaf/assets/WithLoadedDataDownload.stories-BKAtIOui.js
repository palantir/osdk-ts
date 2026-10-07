import{f as b,j as a,r as i}from"./iframe-CEat60Hp.js";import{O as u}from"./object-table-BCLmmaTi.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-LGTzr2gM.js";import"./Table-Bub_W-mz.js";import"./index-DyITJqpd.js";import"./Dialog-DROKoGMC.js";import"./cross-D-uWfUMG.js";import"./svgIconContainer-CN1a-FY8.js";import"./useBaseUiId-ClM_1fTm.js";import"./InternalBackdrop-B4asx7Ai.js";import"./composite-Ce22aUj6.js";import"./index-BKoym7aL.js";import"./index-C_WLSqh0.js";import"./index-DndZj0Gs.js";import"./useEventCallback-BnyMPdTZ.js";import"./SkeletonBar-BrLmTLmg.js";import"./LoadingCell-DXyX9_yJ.js";import"./ColumnConfigDialog-BO4pL0eI.js";import"./DraggableList-Bl_9-C_6.js";import"./search-COfQ1bXD.js";import"./Input-By_gu53Z.js";import"./useControlled-CZHKBSyi.js";import"./Button-CCDq6dgu.js";import"./small-cross-CUzjSNDu.js";import"./ActionButton-B24-6bCU.js";import"./Checkbox-CiKag_ve.js";import"./useValueChanged-CmG-WmUh.js";import"./CollapsiblePanel-BnqmfXh-.js";import"./MultiColumnSortDialog-BiFc0ET9.js";import"./MenuTrigger-CBcFJ7OF.js";import"./CompositeItem-ChZ-XSJC.js";import"./ToolbarRootContext-MdE91PHa.js";import"./getDisabledMountTransitionStyles-BGMhA--N.js";import"./getPseudoElementBounds-Bm7AaELE.js";import"./chevron-down-CbnQEPHn.js";import"./index-DO0PQOk2.js";import"./error-Us6LDG_u.js";import"./BaseCbacBanner-_8RGnGge.js";import"./makeExternalStore-DYDIpdrC.js";import"./Tooltip-DYd7gvd4.js";import"./PopoverPopup-CE6K_Cw0.js";import"./debounce-9GnBlJ2l.js";import"./useOsdkClient-BR1Urz0Q.js";import"./tick-jmlbvTuh.js";import"./DropdownField-dGzl7MKn.js";import"./isEqual-DcvmIx5z.js";import"./withOsdkMetrics-CSdFZ0uc.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
