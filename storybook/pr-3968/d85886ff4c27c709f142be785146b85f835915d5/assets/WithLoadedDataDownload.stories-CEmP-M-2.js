import{f as b,j as a,r as i}from"./iframe-DwvgFPBy.js";import{O as u}from"./object-table-CXKpt07o.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CtrM-3nz.js";import"./Table-Cm0rz_NM.js";import"./index-ChfnPNU9.js";import"./Dialog-DLD-dzbs.js";import"./cross-C1oe8vnK.js";import"./svgIconContainer-BgKykxWQ.js";import"./useBaseUiId-CHF1IBcr.js";import"./InternalBackdrop-y3P75jrX.js";import"./composite-DuoDUKUH.js";import"./index-DUsIeEWR.js";import"./index-DngtPiIB.js";import"./index-Ci5_X35m.js";import"./useEventCallback-CIsii_JD.js";import"./SkeletonBar-Bn99OlYx.js";import"./LoadingCell-BRbaSXfJ.js";import"./ColumnConfigDialog-Dcl4ko7X.js";import"./DraggableList-DSK4wI_k.js";import"./search--SWXDnoj.js";import"./Input-DlFD1yhx.js";import"./useControlled-De5DdgKM.js";import"./Button-C57imQCz.js";import"./small-cross-DpGXyKJ4.js";import"./ActionButton-C-TLgUTf.js";import"./Checkbox-2PgC4d7Q.js";import"./useValueChanged-Bcki-2R3.js";import"./CollapsiblePanel-D7GWkiYF.js";import"./MultiColumnSortDialog-D1zVQuJa.js";import"./MenuTrigger-C-ZbLY8r.js";import"./CompositeItem-DAydT348.js";import"./ToolbarRootContext-CV_vZDG6.js";import"./getDisabledMountTransitionStyles-DtUQJxPB.js";import"./getPseudoElementBounds-CKc4TuSq.js";import"./chevron-down-OGN5YYQ1.js";import"./index-C2pnKJHd.js";import"./error-BqWzkB-Q.js";import"./BaseCbacBanner-DWENoj45.js";import"./makeExternalStore-DVeA--Ja.js";import"./Tooltip-C7bhQ5Z_.js";import"./PopoverPopup-CsviCyMF.js";import"./debounce-DnXDfGow.js";import"./useOsdkClient-iGOi41gt.js";import"./tick-BXa19xuR.js";import"./DropdownField-BidCZ1Wu.js";import"./isEqual-DFbmaofx.js";import"./withOsdkMetrics-qh2Z3PSD.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
