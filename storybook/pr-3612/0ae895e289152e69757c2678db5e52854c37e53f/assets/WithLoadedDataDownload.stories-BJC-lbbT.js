import{f as b,j as a,r as i}from"./iframe-BrKhH_8U.js";import{O as u}from"./object-table-BNOFGNWk.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CixVNBXc.js";import"./Table-DLttGiBp.js";import"./index-DLFRq0fk.js";import"./Dialog-DEHGX3K6.js";import"./cross-CERk_AYz.js";import"./svgIconContainer-BAvRxQfV.js";import"./useBaseUiId-DviDdHmF.js";import"./InternalBackdrop-BNulJ-pq.js";import"./composite-C8s_Cnxx.js";import"./index-Uf5yNz3F.js";import"./index-BDbogzKC.js";import"./index-C42lYyzv.js";import"./useEventCallback-Dd3_pbpa.js";import"./SkeletonBar-C1jV27I5.js";import"./LoadingCell-BRTEBXan.js";import"./ColumnConfigDialog-Cs9xBWST.js";import"./DraggableList-I1qdcQiB.js";import"./search-BdlbsWDT.js";import"./Input-D2QPVo1M.js";import"./useControlled-C9JrXNOF.js";import"./Button-C2inf5rY.js";import"./small-cross-CPMngEKl.js";import"./ActionButton-DPKa47L8.js";import"./Checkbox-9MPt7Cga.js";import"./minus-ZigxQGa9.js";import"./tick-C8S8Ags6.js";import"./useValueChanged-OP2_GtCD.js";import"./caret-down-Tmez1UL0.js";import"./CollapsiblePanel-D7Ba9Sqq.js";import"./MultiColumnSortDialog-LPLd9n2G.js";import"./MenuTrigger-C_cou5fl.js";import"./CompositeItem-BrVmYibG.js";import"./ToolbarRootContext-DuQ_a6L2.js";import"./getDisabledMountTransitionStyles-BwhtUX4y.js";import"./getPseudoElementBounds-BxNsMv44.js";import"./chevron-down-CrYvrwth.js";import"./index-BO650apv.js";import"./error-Bv15h-Vo.js";import"./BaseCbacBanner-qEO52bG0.js";import"./makeExternalStore-VG7HHRW4.js";import"./Tooltip-DgCH4J8j.js";import"./PopoverPopup-C1z34sRJ.js";import"./toNumber-Bjnj1Rko.js";import"./useOsdkClient-CTQRksOW.js";import"./DropdownField-uHnjGX9S.js";import"./withOsdkMetrics-mdCcmRVX.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
