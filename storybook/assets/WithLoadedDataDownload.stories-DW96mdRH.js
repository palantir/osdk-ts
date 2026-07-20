import{f as b,j as a,r as i}from"./iframe-B5v0vUXI.js";import{O as u}from"./object-table-BkfGcYQZ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-Cgdmbp6W.js";import"./index-CvFqYh-3.js";import"./Dialog-D_IzYFEj.js";import"./cross-YUgeJ--M.js";import"./svgIconContainer-C5Z2vPrm.js";import"./useBaseUiId-BsF4zk_0.js";import"./InternalBackdrop-C_bPnfQ2.js";import"./composite-DZ7boRnK.js";import"./index-3MPkyRzd.js";import"./index-CMCS9DrW.js";import"./index-CvfpqS5l.js";import"./useEventCallback-Cj2EQjO8.js";import"./SkeletonBar-Bo0coUbM.js";import"./LoadingCell-CFaXrNjM.js";import"./ColumnConfigDialog-39hNWvLN.js";import"./DraggableList-Cb6MegIS.js";import"./search-Kemz_XqC.js";import"./Input-CTukojuw.js";import"./useControlled-CpEwdjMu.js";import"./isEqual-DPTf9YgE.js";import"./isObject-D37ONkc8.js";import"./Button-8tyoJWc4.js";import"./ActionButton-D01u5wYt.js";import"./Checkbox-BUaR3bJV.js";import"./useValueChanged-Bpv0FVpU.js";import"./CollapsiblePanel-CSYV6ZMY.js";import"./MultiColumnSortDialog-BawVLOtC.js";import"./MenuTrigger-unQFsMEo.js";import"./CompositeItem-DYk5HRQt.js";import"./ToolbarRootContext-CUj1ZiHN.js";import"./getDisabledMountTransitionStyles-CWLzF503.js";import"./getPseudoElementBounds-sM3cClJE.js";import"./chevron-down-rGDhbi4C.js";import"./index-B_up1t_H.js";import"./error-K1wLn0w3.js";import"./BaseCbacBanner-Bgz5SGpI.js";import"./makeExternalStore-Cxkn3s2m.js";import"./Tooltip-B2STUGuM.js";import"./PopoverPopup-Du5W_kmM.js";import"./toNumber-DoT8tStv.js";import"./useOsdkClient-D8XI1G-5.js";import"./tick-GUNHcYaZ.js";import"./DropdownField-De4x1-jo.js";import"./withOsdkMetrics-D6qhNBkt.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
