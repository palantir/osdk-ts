import{f as b,j as a,r as i}from"./iframe-CEjFXQ7i.js";import{O as u}from"./object-table-DSkg1M1h.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DLeq1RMI.js";import"./Table-B9fOVtho.js";import"./index-D6JFDMhk.js";import"./Dialog-DzFXgghC.js";import"./cross-D6CNu_FK.js";import"./svgIconContainer-BmnNwyNQ.js";import"./useBaseUiId-DIsNXkIK.js";import"./InternalBackdrop-cEsiiajq.js";import"./composite-YofervN4.js";import"./index-DRlQNLpD.js";import"./index-B-VVrHtR.js";import"./index-D4xdv--D.js";import"./useEventCallback-DO0KrF-A.js";import"./SkeletonBar-DT9hE4gv.js";import"./LoadingCell-D85PK5AJ.js";import"./ColumnConfigDialog-D46zVtcj.js";import"./DraggableList-BZyIdZBv.js";import"./search-BURF39r2.js";import"./Input-CyL2x7p2.js";import"./useControlled-Bactb4pm.js";import"./Button-4xVurfNi.js";import"./small-cross-OzagSQJN.js";import"./ActionButton-ChX-Jzpd.js";import"./Checkbox-C7AiSlR0.js";import"./useValueChanged-BcDYkwEW.js";import"./CollapsiblePanel-fy30LupE.js";import"./MultiColumnSortDialog-DtTQpKwf.js";import"./MenuTrigger-JipuUt4m.js";import"./CompositeItem-B1vfMTcy.js";import"./ToolbarRootContext-CM1Snkhx.js";import"./getDisabledMountTransitionStyles-CCQ6XSw9.js";import"./getPseudoElementBounds-CVu5NcY5.js";import"./chevron-down-B26wW5MT.js";import"./index-Dwcp4INV.js";import"./error-Bcog9g9V.js";import"./BaseCbacBanner-CprDDsaN.js";import"./makeExternalStore-79RiVGfc.js";import"./Tooltip-BN52KZ5N.js";import"./PopoverPopup-2vrtL-xw.js";import"./debounce-CTnh9aDY.js";import"./useOsdkClient-CvwDornw.js";import"./tick-lx03iSJA.js";import"./DropdownField-vSNq3qus.js";import"./isEqual-D3NHAHrR.js";import"./withOsdkMetrics-DOR5d9wI.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
