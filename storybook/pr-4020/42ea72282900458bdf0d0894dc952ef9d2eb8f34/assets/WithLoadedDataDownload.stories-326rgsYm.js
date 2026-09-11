import{f as b,j as a,r as i}from"./iframe-BAOOmxmu.js";import{O as u}from"./object-table-lyOdhbIm.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BIm_Fr-4.js";import"./Table-oXFWfW38.js";import"./index-QY-KQRXF.js";import"./Dialog-D-qSwK9V.js";import"./cross-h2O47eJg.js";import"./svgIconContainer-Bp5LkjRC.js";import"./useBaseUiId-B4ZR21gm.js";import"./InternalBackdrop-CM1IsXud.js";import"./composite-DMwFPLnT.js";import"./index-DDBX-eT9.js";import"./index-20cLn6S1.js";import"./index-BoMMojJ9.js";import"./useEventCallback-DWFrmsqt.js";import"./SkeletonBar-CC4f_ujB.js";import"./LoadingCell-PBZuzgBJ.js";import"./ColumnConfigDialog-BYk1h3uX.js";import"./DraggableList-BKwbFcH0.js";import"./search-D68AVNns.js";import"./Input-d_-ySvYA.js";import"./useControlled-CuqfVZxX.js";import"./Button-btye1J53.js";import"./small-cross-DGk8qS5c.js";import"./ActionButton-Cfr9kbRA.js";import"./Checkbox-De9kV-mT.js";import"./useValueChanged-BSyPbCHB.js";import"./CollapsiblePanel-BN5oNg3z.js";import"./MultiColumnSortDialog-BdHUNwu9.js";import"./MenuTrigger-Di4mAf04.js";import"./CompositeItem-BPZd139z.js";import"./ToolbarRootContext-C5dbAl4m.js";import"./getDisabledMountTransitionStyles-raUh3s1U.js";import"./getPseudoElementBounds-CUG0gOL4.js";import"./chevron-down-Dwrs1hNu.js";import"./index-DyTfUGkB.js";import"./error-BswP0WVl.js";import"./BaseCbacBanner-B-I3Tp0k.js";import"./makeExternalStore-DNiKFXrW.js";import"./Tooltip-BkO9PIng.js";import"./PopoverPopup-CJ9iUHSY.js";import"./debounce-YjlmO8bW.js";import"./useOsdkClient-Cb63-21m.js";import"./tick-BQoQRlmD.js";import"./DropdownField-C3tYCGBa.js";import"./isEqual-C_qKHYvW.js";import"./withOsdkMetrics-C7ktc4nn.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
