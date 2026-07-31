import{f as b,j as a,r as i}from"./iframe-CeQ9YtV4.js";import{O as u}from"./object-table-BxrQP0cJ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-LX8fJrHu.js";import"./Table-BqAJjUeM.js";import"./index--uV_mo53.js";import"./Dialog-k4lSz6IK.js";import"./cross-CmnPk6HR.js";import"./svgIconContainer-GQ1XFBl8.js";import"./useBaseUiId-MCv3qySg.js";import"./InternalBackdrop-BS-OEKdk.js";import"./composite-CeZ8ImGH.js";import"./index-B2gRy6GZ.js";import"./index-CGQM6Os1.js";import"./index-Yx5SIecJ.js";import"./useEventCallback-BtGRXxeV.js";import"./SkeletonBar-N-zsLKaX.js";import"./LoadingCell-BtQaK8Zr.js";import"./ColumnConfigDialog-EoETL9wH.js";import"./DraggableList-kbqdQ0kF.js";import"./search-D3yZFVGs.js";import"./Input-H4BR9uZl.js";import"./useControlled-Cy5Phl1t.js";import"./isEqual-DUgQY7Mu.js";import"./isObject-CS_a61Zd.js";import"./Button-uPcuQ9i2.js";import"./ActionButton-lddM9Wov.js";import"./Checkbox-D5dopIKN.js";import"./useValueChanged-BK8X04Vv.js";import"./CollapsiblePanel-CEweUmgi.js";import"./MultiColumnSortDialog-BZDt7V34.js";import"./MenuTrigger-C3B9uJvo.js";import"./CompositeItem-B8rBXA17.js";import"./ToolbarRootContext-CHRb4C_O.js";import"./getDisabledMountTransitionStyles-CL-pUnsN.js";import"./getPseudoElementBounds-CJ2J4ejo.js";import"./chevron-down-CacDCs_q.js";import"./index-BgMHbt7V.js";import"./error-DsKJBY0C.js";import"./BaseCbacBanner-VDVrikJN.js";import"./makeExternalStore-Vue07-gf.js";import"./Tooltip-BC79QeFs.js";import"./PopoverPopup-9OKXsxO2.js";import"./toNumber-BJy4K-hW.js";import"./useOsdkClient-DJu2PeSo.js";import"./tick-DMp0VIXe.js";import"./DropdownField-_8UThL_X.js";import"./withOsdkMetrics-Cjsqhpmc.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
