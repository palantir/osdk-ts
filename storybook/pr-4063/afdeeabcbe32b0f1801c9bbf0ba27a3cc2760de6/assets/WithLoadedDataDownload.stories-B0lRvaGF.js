import{f as b,j as a,r as i}from"./iframe-Cb7UimVT.js";import{O as u}from"./object-table-Bl6p5AkH.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DGUTmafK.js";import"./Table-CPp9NhPo.js";import"./index-BIGxdzOf.js";import"./Dialog-Cg5ukvNW.js";import"./cross-CSr-jiik.js";import"./svgIconContainer-ByYucP5b.js";import"./useBaseUiId-iGVUlg7M.js";import"./InternalBackdrop-DFmtA5di.js";import"./composite-DbE7UY6k.js";import"./index-BOZbfH9s.js";import"./index-DSTszXnE.js";import"./index-DvKhcYIs.js";import"./useEventCallback-B_YCllCJ.js";import"./SkeletonBar-SWTHAMDy.js";import"./LoadingCell-Dl7N8ehE.js";import"./ColumnConfigDialog-DAMmLI1o.js";import"./DraggableList-IRlLZjUg.js";import"./search-CFBfi85w.js";import"./Input-k33bDy71.js";import"./useControlled-rmviEhSc.js";import"./Button-DpmbPgxa.js";import"./small-cross-kV31ju_J.js";import"./ActionButton-C961uo5z.js";import"./Checkbox-BGKCkJG7.js";import"./useValueChanged-CWhjY4_u.js";import"./CollapsiblePanel-leyJJrVG.js";import"./MultiColumnSortDialog-xFTI6C2S.js";import"./MenuTrigger-SRM0JwgO.js";import"./CompositeItem-BWbQHkr6.js";import"./ToolbarRootContext-BZu2CGWG.js";import"./getDisabledMountTransitionStyles-CWTpf6lp.js";import"./getPseudoElementBounds-1Qmdk9bj.js";import"./chevron-down-DGQwsfv-.js";import"./index-DWXDMbEi.js";import"./error-DCdQoOyW.js";import"./BaseCbacBanner-pvyRvv-D.js";import"./makeExternalStore-CitLye_P.js";import"./Tooltip-A0fu90b6.js";import"./PopoverPopup-Bw13Ouax.js";import"./debounce-BawLAvkZ.js";import"./useOsdkClient-C4al__C_.js";import"./tick-4A7mewJX.js";import"./DropdownField-ij81B06R.js";import"./isEqual-CQHqDVQt.js";import"./withOsdkMetrics-BMDPVH0d.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
