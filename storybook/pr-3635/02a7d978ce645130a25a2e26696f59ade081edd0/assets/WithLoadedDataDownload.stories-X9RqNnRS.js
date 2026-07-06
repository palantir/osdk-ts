import{f as b,j as a,r as i}from"./iframe-CrStxEBt.js";import{O as u}from"./object-table-CEd6jLTi.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-OXivx5LR.js";import"./Table-B_usf8_t.js";import"./index-BLl2iDe8.js";import"./Dialog-Bk8-uT3T.js";import"./cross-DyLZ40Fh.js";import"./svgIconContainer-j1fWGKcX.js";import"./useBaseUiId-CogM71FT.js";import"./InternalBackdrop-BiwdPM30.js";import"./composite--6YdIqZR.js";import"./index-BNPoFAe0.js";import"./index-CBFzq2qH.js";import"./index-C5De8DnS.js";import"./useEventCallback-9pXLGCxO.js";import"./SkeletonBar-DVsod05x.js";import"./LoadingCell-DtfK7E-1.js";import"./ColumnConfigDialog-4xYWKH2Y.js";import"./DraggableList-BkHhbTVD.js";import"./search-CxSWgc2D.js";import"./Input-DmUxztOr.js";import"./useControlled-CSKZxUDn.js";import"./Button-BeQDA-Bv.js";import"./small-cross-CZNE2D_n.js";import"./ActionButton-DUHVD-2Q.js";import"./Checkbox-CxCa2ZNV.js";import"./useValueChanged-FP7B4hAS.js";import"./CollapsiblePanel-Cr48CIKz.js";import"./MultiColumnSortDialog-8Apbbh2U.js";import"./MenuTrigger-CzwaXdFN.js";import"./CompositeItem-JYp2rF_I.js";import"./ToolbarRootContext-EXBGAu9_.js";import"./getDisabledMountTransitionStyles-CoHP5nQd.js";import"./getPseudoElementBounds-hOe6qsBG.js";import"./chevron-down-B1SYYrKy.js";import"./index-BLZClbzk.js";import"./error-BmWTvM3v.js";import"./BaseCbacBanner-CwKT1YPi.js";import"./makeExternalStore-OHO3xlfT.js";import"./Tooltip-IY4otmQn.js";import"./PopoverPopup-BrTs52PQ.js";import"./toNumber-CWTrEa2S.js";import"./useOsdkClient-NBVox5yl.js";import"./tick-SWHUChbg.js";import"./DropdownField-CfNvk6xw.js";import"./withOsdkMetrics-D0-v26p3.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
