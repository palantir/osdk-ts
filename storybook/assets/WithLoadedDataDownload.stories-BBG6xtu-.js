import{f as b,j as a,r as i}from"./iframe-KbQIFRGa.js";import{O as u}from"./object-table-A-4UVlPs.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DjBvGnlI.js";import"./index-oNQDT3pN.js";import"./Dialog-LTN4yp4-.js";import"./cross-DoOTv_Kw.js";import"./svgIconContainer-sykDQB1x.js";import"./useBaseUiId-C5Z8PN8H.js";import"./InternalBackdrop-hXLK1iL5.js";import"./composite-GGTk9X_4.js";import"./index-D106GrLT.js";import"./index-bW-kSRQs.js";import"./index-dFSZLdFi.js";import"./useEventCallback-n0URW7JS.js";import"./SkeletonBar-I3jGGBun.js";import"./LoadingCell-DC9Ucowt.js";import"./ColumnConfigDialog-C4HjDGjr.js";import"./DraggableList-DiR0P00x.js";import"./search-CWIUc-iX.js";import"./Input-DCRhBd7X.js";import"./useControlled-IL1laNWB.js";import"./Button-DJ-kvAuB.js";import"./small-cross-Bxoh5HWy.js";import"./ActionButton-DtiTD6NE.js";import"./Checkbox-D6Lt66gL.js";import"./useValueChanged-BsapA-Fb.js";import"./CollapsiblePanel-DrC-9h6Q.js";import"./MultiColumnSortDialog-MXCrgjw4.js";import"./MenuTrigger-02eyTE7O.js";import"./CompositeItem-Du9x_QN-.js";import"./ToolbarRootContext-DVI-t-Yd.js";import"./getDisabledMountTransitionStyles-B2mb34X0.js";import"./getPseudoElementBounds-C0gXzrnf.js";import"./chevron-down-sNT3G-Lr.js";import"./index-BwbXqol-.js";import"./error-BfNvRC5H.js";import"./BaseCbacBanner-C1tqFwkR.js";import"./makeExternalStore-CkNn2ki8.js";import"./Tooltip-BFeQnd1L.js";import"./PopoverPopup-yB1fiotD.js";import"./debounce-W5fS1vR_.js";import"./useOsdkClient-C5xzc4Kj.js";import"./tick-CchspkVg.js";import"./DropdownField-BLXTmoIg.js";import"./isEqual-CpUPP3_F.js";import"./withOsdkMetrics-CE7F9eew.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
