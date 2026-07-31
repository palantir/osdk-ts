import{f as b,j as a,r as i}from"./iframe-BIlQe-_e.js";import{O as u}from"./object-table-Bebvc8ca.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BFh2Wy6v.js";import"./Table-BWx_Tlsd.js";import"./index-DyQxAk9R.js";import"./Dialog-RpHf0uzn.js";import"./cross-CmtgrNNa.js";import"./svgIconContainer-CnLOcakL.js";import"./useBaseUiId-Lc4z0DNa.js";import"./InternalBackdrop-D0_cKxNn.js";import"./composite-CXGKVIWm.js";import"./index-KCNI5t5s.js";import"./index-DpNXYgWj.js";import"./index-HpxznOGw.js";import"./useEventCallback-BUux2rPj.js";import"./SkeletonBar-DdTqPQUn.js";import"./LoadingCell-DDRHLt1N.js";import"./ColumnConfigDialog-Jac7HBrJ.js";import"./DraggableList-Be3rI4xp.js";import"./search-CvXaJDz5.js";import"./Input-DUUbREQT.js";import"./useControlled-BXHG-GT_.js";import"./isEqual-CysZ8GPX.js";import"./isObject-KXgKHR5w.js";import"./Button-BIbJzGLK.js";import"./ActionButton-CyvzC9uY.js";import"./Checkbox-BCZr5C4i.js";import"./useValueChanged-u9UTocIj.js";import"./CollapsiblePanel-B0R9sRzS.js";import"./MultiColumnSortDialog-BvJABZRG.js";import"./MenuTrigger-BrM5S858.js";import"./CompositeItem-CMnAuhM-.js";import"./ToolbarRootContext-BiHeKQZa.js";import"./getDisabledMountTransitionStyles-BLsKgdzx.js";import"./getPseudoElementBounds-M2Ec4uwN.js";import"./chevron-down-CkrYyXCx.js";import"./index-D1LAJk1I.js";import"./error-BCCPbpND.js";import"./BaseCbacBanner-DGsBlBEg.js";import"./makeExternalStore-Dm1wHibL.js";import"./Tooltip-DLimuesN.js";import"./PopoverPopup-DhXjlyY4.js";import"./toNumber-DGKs9c9J.js";import"./useOsdkClient-Cv8dxDy4.js";import"./tick-BK1SF6OQ.js";import"./DropdownField-CmlfBBm0.js";import"./withOsdkMetrics-DGZYkXqG.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
