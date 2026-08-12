import{f as b,j as a,r as i}from"./iframe-DJNQVBhP.js";import{O as u}from"./object-table-B9t8qM78.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dd3_dQYh.js";import"./Table-Dx6f_VuV.js";import"./index-CphRLvVE.js";import"./Dialog-B9ctGsOx.js";import"./cross-DsRxB_p3.js";import"./svgIconContainer-DCiAh43S.js";import"./useBaseUiId-Cz2X2F5p.js";import"./InternalBackdrop-BZQ8c9pm.js";import"./composite-Ct6qnndE.js";import"./index-CmyN3uxX.js";import"./index-a7advLwQ.js";import"./index-D4qLI3jW.js";import"./useEventCallback-BM4mhydT.js";import"./SkeletonBar-DQOnWFIQ.js";import"./LoadingCell--U8WogEj.js";import"./ColumnConfigDialog-DMIwDHBp.js";import"./DraggableList-_Q-j7IUZ.js";import"./search-C_y30h_d.js";import"./Input-FTUus8ay.js";import"./useControlled-BkxsgPSI.js";import"./isEqual-ByhWP8Lo.js";import"./isObject-BhdOJrex.js";import"./Button-AHG0YTUa.js";import"./ActionButton-1kHfimgg.js";import"./Checkbox-jo06geF9.js";import"./useValueChanged-DYk1G5aa.js";import"./CollapsiblePanel-DPgiaCtq.js";import"./MultiColumnSortDialog-Dn3bXmK_.js";import"./MenuTrigger-D6_84Az4.js";import"./CompositeItem-BYt7z6Mp.js";import"./ToolbarRootContext-80wFuusO.js";import"./getDisabledMountTransitionStyles-DmO6f7A1.js";import"./getPseudoElementBounds-BXqYkt3j.js";import"./chevron-down-Cy7vDLtZ.js";import"./index-hfdoxJDN.js";import"./error-CeYxwre0.js";import"./BaseCbacBanner-CbOoO5AE.js";import"./makeExternalStore-DnBSFN8S.js";import"./Tooltip-C7rbNABY.js";import"./PopoverPopup-D7FpibGO.js";import"./toNumber-BRyyrH-m.js";import"./useOsdkClient-2kF2kDK1.js";import"./tick-D908gNrJ.js";import"./DropdownField-Drk0XneQ.js";import"./withOsdkMetrics-zXitcxEN.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
