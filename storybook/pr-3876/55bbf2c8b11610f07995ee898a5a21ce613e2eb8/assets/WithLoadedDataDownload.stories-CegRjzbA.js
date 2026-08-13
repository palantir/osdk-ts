import{f as b,j as a,r as i}from"./iframe-C_rZf8VU.js";import{O as u}from"./object-table-CwP_L3yg.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BDRz06lj.js";import"./Table-DQaGNjjt.js";import"./index-0eoKNTmj.js";import"./Dialog-q1r-7MiE.js";import"./cross-C3Hnu-vp.js";import"./svgIconContainer-DQ_1btmp.js";import"./useBaseUiId-D4-miswd.js";import"./InternalBackdrop-BCxf0-By.js";import"./composite-CvGq7Rf9.js";import"./index-CV71ZL8j.js";import"./index-O2QWzze5.js";import"./index-B_8p8EH4.js";import"./useEventCallback-Dy0HhCrk.js";import"./SkeletonBar-DSYT3zdb.js";import"./LoadingCell-BSsS0iXL.js";import"./ColumnConfigDialog-uqYaCTA0.js";import"./DraggableList-DXpXY8d1.js";import"./search-5vADHBeS.js";import"./Input-B7jGxhwp.js";import"./useControlled-CAVvn1qm.js";import"./Button-DzuEmTO3.js";import"./small-cross-BSHgA079.js";import"./ActionButton-Na4bFdW8.js";import"./Checkbox-C7OL2cgq.js";import"./useValueChanged-BspZn8k7.js";import"./CollapsiblePanel-B5U_WwWE.js";import"./MultiColumnSortDialog-DqBAFtby.js";import"./MenuTrigger-Cg_3KtYd.js";import"./CompositeItem-BHXn5rIh.js";import"./ToolbarRootContext-ncvyqHVi.js";import"./getDisabledMountTransitionStyles-BEDXLny9.js";import"./getPseudoElementBounds-B1jeYaEO.js";import"./chevron-down-A3EFqNUF.js";import"./index-BlIltlDF.js";import"./error-C3qfOBR-.js";import"./BaseCbacBanner-D-ohkDMr.js";import"./makeExternalStore-a58P_dwm.js";import"./Tooltip-CxgKwOqt.js";import"./PopoverPopup-BFRd-H_J.js";import"./debounce-DCq12VV4.js";import"./useOsdkClient-Zp4XTgCz.js";import"./tick-CJhEW7Gm.js";import"./DropdownField-B8sfwSB7.js";import"./isEqual-C1BUS40T.js";import"./withOsdkMetrics-Br1MzUKy.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
