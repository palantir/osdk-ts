import{f as b,j as a,r as i}from"./iframe-hmluRZS5.js";import{O as u}from"./object-table-CONt86Aj.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DlYZq8_X.js";import"./Table-BgJ9BZ78.js";import"./index-DlmwBpMI.js";import"./Dialog-Dv_N4vZX.js";import"./cross-CF7Ek918.js";import"./svgIconContainer-Cr9UBTnz.js";import"./useBaseUiId-Ce6hVQyf.js";import"./InternalBackdrop-Di9g7CqC.js";import"./composite-Cz3P8fmc.js";import"./index-eMB_Bo_f.js";import"./index-Bc2sNs6_.js";import"./index-BK3acCXu.js";import"./useEventCallback-BdILOtut.js";import"./SkeletonBar-BBfDZCsO.js";import"./LoadingCell-PyopswjO.js";import"./ColumnConfigDialog-Bp9aFBFm.js";import"./DraggableList-UHVJUl4j.js";import"./search-CyNzQTjU.js";import"./Input-uUNDzlAG.js";import"./useControlled-CWtQ2etk.js";import"./Button-UcoIXCLv.js";import"./small-cross-DpGTHJxS.js";import"./ActionButton-BKy_pzqj.js";import"./Checkbox-BySPL-Yn.js";import"./useValueChanged-CzefFM-U.js";import"./CollapsiblePanel-D12S4ZDi.js";import"./MultiColumnSortDialog-D-iCjK2K.js";import"./MenuTrigger-F11Vn7_-.js";import"./CompositeItem-Bger7i4K.js";import"./ToolbarRootContext-BviESwyl.js";import"./getDisabledMountTransitionStyles-DeVJ0eo9.js";import"./getPseudoElementBounds-DrhntXY7.js";import"./chevron-down-BV1ESAvw.js";import"./index-CYwmlkYY.js";import"./error-B495uG_z.js";import"./BaseCbacBanner-Zj8kZ8T9.js";import"./makeExternalStore-DOooQeVW.js";import"./Tooltip-CkY5JgKY.js";import"./PopoverPopup-CFU_wLXE.js";import"./debounce-DA5oIsgA.js";import"./useOsdkClient-CWJVsVp6.js";import"./tick-QOD6m0sZ.js";import"./DropdownField-D2ft0pJb.js";import"./isEqual-DaXwjBhd.js";import"./withOsdkMetrics-BsviGqu5.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
