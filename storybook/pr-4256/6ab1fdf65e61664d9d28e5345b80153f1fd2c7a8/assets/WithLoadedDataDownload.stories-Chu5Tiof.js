import{f as b,j as a,r as i}from"./iframe-BUAKey-b.js";import{O as u}from"./object-table-Btb1NcEU.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-8ONSILo-.js";import"./Table-v9Wirb0W.js";import"./index-C_XWLLnL.js";import"./Dialog-BklgDVkJ.js";import"./cross-DIKNxaCS.js";import"./svgIconContainer-R7EcdMMS.js";import"./useBaseUiId-C8Y4NjI4.js";import"./InternalBackdrop-DBedaqK2.js";import"./composite-B5eojsZ9.js";import"./index-0X59r-jL.js";import"./index-BVUJd12s.js";import"./index-BOoWcbcQ.js";import"./useEventCallback-DB_YKX3R.js";import"./SkeletonBar-DGJh5kUn.js";import"./LoadingCell-CcTUe4FR.js";import"./ColumnConfigDialog-DxUdtHxn.js";import"./DraggableList-WR8qNa8F.js";import"./search-BpOSeHLA.js";import"./Input-XOa6KB6m.js";import"./useControlled-DbbiJxEI.js";import"./Button-BiKKO9jr.js";import"./small-cross-CsGj_6WB.js";import"./ActionButton-DbyswEM_.js";import"./Checkbox-DnMOAb9A.js";import"./useValueChanged-CJ3EpaVI.js";import"./CollapsiblePanel-CJyeuEr2.js";import"./MultiColumnSortDialog-DDLKVEP1.js";import"./MenuTrigger-DWa9A5uG.js";import"./CompositeItem-D3aderF4.js";import"./ToolbarRootContext-CFT1kSbY.js";import"./getDisabledMountTransitionStyles-Ckfz4xV-.js";import"./getPseudoElementBounds-CEULC0ey.js";import"./chevron-down-B1umsHcu.js";import"./index-BxV1QnRa.js";import"./error-K70cMOqt.js";import"./BaseCbacBanner-BfuGodE8.js";import"./makeExternalStore-BoGnPwwN.js";import"./Tooltip-CAd6Fq_j.js";import"./PopoverPopup-B29eQZ64.js";import"./debounce-TB1Vypf1.js";import"./useOsdkClient-De86zlhT.js";import"./tick-DdBTMVZy.js";import"./DropdownField-wtjKeadJ.js";import"./isEqual-DKRu4Yn9.js";import"./withOsdkMetrics-CgOQk5ql.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
