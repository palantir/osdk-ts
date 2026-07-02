import{f as b,j as a,r as i}from"./iframe-B1o_HM3e.js";import{O as u}from"./object-table-Cna1vPxa.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BLneRF-5.js";import"./Table-Code8Np3.js";import"./index-DQJ_Mips.js";import"./Dialog-DQU0hL0H.js";import"./cross-Dy0KHpn-.js";import"./svgIconContainer-SCKnx8mv.js";import"./useBaseUiId-BTvkIz_9.js";import"./InternalBackdrop-BYf-LqLk.js";import"./composite-B4vc5f3B.js";import"./index-C6oZuFHK.js";import"./index-BFqI2iWm.js";import"./index-BlQ_np7F.js";import"./useEventCallback-B0vMEuv-.js";import"./SkeletonBar-C8dASP17.js";import"./LoadingCell-BiY1m0Lt.js";import"./ColumnConfigDialog-DLwRdu-M.js";import"./DraggableList-aEpr5KMg.js";import"./search-BX6NTUq-.js";import"./Input-2gT9MM9i.js";import"./useControlled-reVxsWrk.js";import"./Button-X1eKFvis.js";import"./small-cross-Bs3zyzt9.js";import"./ActionButton-DOPw_tWb.js";import"./Checkbox-DSp6V7ct.js";import"./minus-BCrXrXbY.js";import"./tick-CSreC1u9.js";import"./useValueChanged-BYdSrB1K.js";import"./caret-down-BmxFjjQN.js";import"./CollapsiblePanel-CZbJVx7q.js";import"./MultiColumnSortDialog-ZWCf-0m8.js";import"./MenuTrigger-CWshcgkW.js";import"./CompositeItem-p_pExXHP.js";import"./ToolbarRootContext-CASyr8OY.js";import"./getDisabledMountTransitionStyles-BGuUm0lq.js";import"./getPseudoElementBounds-eU2wOyU-.js";import"./chevron-down-BxX8zzC2.js";import"./index-DGHWC0lM.js";import"./error-B99a3_sw.js";import"./BaseCbacBanner-DeKeFsW5.js";import"./makeExternalStore-D-0yZnT6.js";import"./Tooltip-92umf-wC.js";import"./PopoverPopup-RWNwj8K1.js";import"./toNumber-Cfw-h37Q.js";import"./useOsdkClient-CXXydos7.js";import"./DropdownField-D7e9cb8z.js";import"./withOsdkMetrics--GIbPR5k.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
