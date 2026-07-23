import{f as b,j as a,r as i}from"./iframe-oormcqx9.js";import{O as u}from"./object-table-4jf6Eq2_.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CeHU7rtX.js";import"./Table-BLvC4fWX.js";import"./index-DCXq5JH0.js";import"./Dialog-BRzlDNz3.js";import"./cross-H7XCkeCD.js";import"./svgIconContainer-CyP2LCr5.js";import"./useBaseUiId-BcGNqjed.js";import"./InternalBackdrop-DpxGYyDq.js";import"./composite-BHe_EgOO.js";import"./index-COGZ48XL.js";import"./index-DogEXY-D.js";import"./index-BHdHKlzU.js";import"./useEventCallback--dP_uxEo.js";import"./SkeletonBar-Dq2SiCUP.js";import"./LoadingCell-Bh7ntqai.js";import"./ColumnConfigDialog-DiAZXusV.js";import"./DraggableList-CHIagkDU.js";import"./search-CZYIhkOA.js";import"./Input-DMGdYTGk.js";import"./useControlled-DWm7-ZpP.js";import"./isEqual-CyGfiYdM.js";import"./isObject-DgI6tbTt.js";import"./Button-DU1T6ytp.js";import"./ActionButton-DDjbYHah.js";import"./Checkbox-B2CNlgAC.js";import"./useValueChanged-UVyQuc-4.js";import"./CollapsiblePanel-BfoIRfM_.js";import"./MultiColumnSortDialog-DYkGjZtJ.js";import"./MenuTrigger-iJ3LWieb.js";import"./CompositeItem-D5MBeLAi.js";import"./ToolbarRootContext-Bo-Cqcm4.js";import"./getDisabledMountTransitionStyles-BiE_7I5f.js";import"./getPseudoElementBounds-B_d2HgH3.js";import"./chevron-down-DcIDMGw-.js";import"./index-D7-W961b.js";import"./error-BAesG39E.js";import"./BaseCbacBanner-Bnps_Ygw.js";import"./makeExternalStore-DyXOF0Nw.js";import"./Tooltip-C721TSLJ.js";import"./PopoverPopup-NLWwp6SF.js";import"./toNumber-Bzi2NnDB.js";import"./useOsdkClient-CD5YQMi3.js";import"./tick-DVDtcXSn.js";import"./DropdownField-CX5_jjd1.js";import"./withOsdkMetrics-SBAUy0ec.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
