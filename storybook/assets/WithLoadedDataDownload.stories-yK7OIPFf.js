import{f as b,j as a,r as i}from"./iframe-DrnKYwzt.js";import{O as u}from"./object-table-B4WCOvbA.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-Dd5bbgTK.js";import"./index-DPIZfSwK.js";import"./Dialog-DVFQmxM_.js";import"./cross-DXIDkMuC.js";import"./svgIconContainer-DaVnGh9c.js";import"./useBaseUiId-CFsS7qRQ.js";import"./InternalBackdrop-DfWfg3ug.js";import"./composite-CCKcLmMF.js";import"./index-B5y8rxCa.js";import"./index-CiYDc6_L.js";import"./index-Bisa-WXs.js";import"./useEventCallback-B-Wg4m7c.js";import"./SkeletonBar-Cc2Dg58p.js";import"./LoadingCell-C4YHX9fn.js";import"./ColumnConfigDialog-Df86GpYG.js";import"./DraggableList-CH2Ns8QE.js";import"./search-CLh-nr8U.js";import"./Input-Bed63vhv.js";import"./useControlled-CTk87t76.js";import"./Button-QrXAKlJD.js";import"./small-cross-BLp7dord.js";import"./ActionButton-DnesRqE0.js";import"./Checkbox-C_Bhd5c0.js";import"./useValueChanged-DZ_zqBSU.js";import"./CollapsiblePanel-B6RPHT_f.js";import"./MultiColumnSortDialog-wpAUedQ9.js";import"./MenuTrigger-DUsLBEvk.js";import"./CompositeItem-DupeSBp8.js";import"./ToolbarRootContext-D8ABn96Q.js";import"./getDisabledMountTransitionStyles-Bl-wnC8C.js";import"./getPseudoElementBounds-xbPRU0lb.js";import"./chevron-down-BY9VCrZu.js";import"./index-7JqWaY13.js";import"./error-Cd40ldoN.js";import"./BaseCbacBanner-B6pNmjKQ.js";import"./makeExternalStore-DWwwitH0.js";import"./Tooltip-CUvdbu8d.js";import"./PopoverPopup-6Vyawomv.js";import"./debounce-B8UVLwl7.js";import"./useOsdkClient-BVIFxFY0.js";import"./tick-DGaDc00O.js";import"./DropdownField-BYEnn1vN.js";import"./isEqual-CBKxto0y.js";import"./withOsdkMetrics-CulCESkd.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
