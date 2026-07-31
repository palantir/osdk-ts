import{f as b,j as a,r as i}from"./iframe-BO5nIFL0.js";import{O as u}from"./object-table-z13Q5_s7.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Byzzz28m.js";import"./Table-C42TRl45.js";import"./index-35ki7-Fy.js";import"./Dialog-ClcVFzEO.js";import"./cross-DB2PwsTQ.js";import"./svgIconContainer-CCohatq7.js";import"./useBaseUiId-WJQc9a5f.js";import"./InternalBackdrop-CfomXrTc.js";import"./composite-DHPIcUre.js";import"./index-BAvGYYuM.js";import"./index-CnZy_Djg.js";import"./index-DXF71g3x.js";import"./useEventCallback-BBKOS5QY.js";import"./SkeletonBar-COem--l-.js";import"./LoadingCell-BR4FtUWn.js";import"./ColumnConfigDialog-kvkughQ9.js";import"./DraggableList-id8D9Qse.js";import"./search-D6UctYzP.js";import"./Input-CbgheE8R.js";import"./useControlled-BymPsR7w.js";import"./isEqual-Ccnfufx7.js";import"./isObject-CLOeC-oN.js";import"./Button-DbsXRm21.js";import"./ActionButton-7mz2JyIw.js";import"./Checkbox-CNeugPLz.js";import"./useValueChanged-CY3fQIPq.js";import"./CollapsiblePanel-C9Imjw4U.js";import"./MultiColumnSortDialog-CD2JhBDw.js";import"./MenuTrigger-BcPjrXj3.js";import"./CompositeItem-B_e5r9wc.js";import"./ToolbarRootContext-DfhUwAFa.js";import"./getDisabledMountTransitionStyles-DB76-VLH.js";import"./getPseudoElementBounds-RB9RdRLr.js";import"./chevron-down-dkXODqVq.js";import"./index-BUXFO2wu.js";import"./error-ZVb7iWyg.js";import"./BaseCbacBanner-B5xkK0S4.js";import"./makeExternalStore-CZCTIsA8.js";import"./Tooltip-tv05UBzh.js";import"./PopoverPopup-CJg2meX_.js";import"./toNumber-cp78ICze.js";import"./useOsdkClient-ChLOXtjV.js";import"./tick-CHc8oJrg.js";import"./DropdownField-DcVGt7_G.js";import"./withOsdkMetrics-BH7Yc5xr.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
