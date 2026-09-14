import{f as b,j as a,r as i}from"./iframe-DcH5xezC.js";import{O as u}from"./object-table-CCvnPiSH.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-zu47KBbI.js";import"./Table-Dy9KocsG.js";import"./index-DbAD30nX.js";import"./Dialog-B5-mrXFN.js";import"./cross-Chd2V34f.js";import"./svgIconContainer-B5leceMR.js";import"./useBaseUiId-Bbtq32g0.js";import"./InternalBackdrop-DyFOy9BL.js";import"./composite-DA4kpS88.js";import"./index-DRxO555y.js";import"./index-B91Y8CCx.js";import"./index--Rg5YMM0.js";import"./useEventCallback-CLRIu-kV.js";import"./SkeletonBar-CrKV3y2b.js";import"./LoadingCell-CWgQfXVP.js";import"./ColumnConfigDialog-CNCkRvcG.js";import"./DraggableList-BZ5chcCZ.js";import"./search-BF1ckEWB.js";import"./Input-CHJLRFkf.js";import"./useControlled-BYauL-0P.js";import"./Button-DWi0EVGU.js";import"./small-cross-VAMEtZ-6.js";import"./ActionButton-CqL2_MDd.js";import"./Checkbox-rpNWgGoa.js";import"./useValueChanged-CM-EGciU.js";import"./CollapsiblePanel-D0_hAvFL.js";import"./MultiColumnSortDialog-jPjtDQhP.js";import"./MenuTrigger-L8QBqhYV.js";import"./CompositeItem-D4A9PZVo.js";import"./ToolbarRootContext-DDNTKhTz.js";import"./getDisabledMountTransitionStyles-DP9RwCAa.js";import"./getPseudoElementBounds-Dlvy_Xcp.js";import"./chevron-down-cNoDE_3k.js";import"./index-C7e3Vf0D.js";import"./error-BKi4y-Uw.js";import"./BaseCbacBanner-Bq_TsmNs.js";import"./makeExternalStore-DyQTnfpK.js";import"./Tooltip-DJvrdrIe.js";import"./PopoverPopup-Bkoo-Q_-.js";import"./debounce-CGWpxv8T.js";import"./useOsdkClient-D5k8Tf4N.js";import"./tick-JU-3FL-Z.js";import"./DropdownField-CrN4lGdi.js";import"./isEqual-BqvZfAJd.js";import"./withOsdkMetrics-BohsC0KD.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
