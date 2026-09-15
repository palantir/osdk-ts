import{f as b,j as a,r as i}from"./iframe-DugxyHXW.js";import{O as u}from"./object-table-7pPwAMRd.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-sKHH7dZZ.js";import"./Table-Fy8p0ukL.js";import"./index-BnymHSBX.js";import"./Dialog-hoMNh3xw.js";import"./cross-BSDPKBN8.js";import"./svgIconContainer-BhR3_WjC.js";import"./useBaseUiId-DXSoLqlj.js";import"./InternalBackdrop-C5PVGWxl.js";import"./composite-B6PfDTrv.js";import"./index-DEsgQO2-.js";import"./index-C1eIh-0N.js";import"./index-OCBhvrRs.js";import"./useEventCallback-BWN3beAb.js";import"./SkeletonBar-DTF20Ls3.js";import"./LoadingCell-Cs5Ui_Mh.js";import"./ColumnConfigDialog-BNfKn6pP.js";import"./DraggableList-Br-ROzH9.js";import"./search-HmVN54vs.js";import"./Input-D5dfXCf5.js";import"./useControlled-CrSksIZl.js";import"./Button-Dr2gNfRq.js";import"./small-cross-DLi0JibG.js";import"./ActionButton-PxTm-wqz.js";import"./Checkbox-DwqZQOlu.js";import"./useValueChanged-D8LItfM_.js";import"./CollapsiblePanel-EgTSYgZn.js";import"./MultiColumnSortDialog-CFQFDd5R.js";import"./MenuTrigger-CTsDP6tB.js";import"./CompositeItem-V75ZZ8Nq.js";import"./ToolbarRootContext-Cl7j9rKh.js";import"./getDisabledMountTransitionStyles-DB3JFAJ8.js";import"./getPseudoElementBounds-Ck5edXWa.js";import"./chevron-down-BHed8mrw.js";import"./index-BbAAxPka.js";import"./error-DAzclkpO.js";import"./BaseCbacBanner-BO6UZWW2.js";import"./makeExternalStore-WS2cTnp-.js";import"./Tooltip-GeR-nHC8.js";import"./PopoverPopup-lrG87DA3.js";import"./debounce-SsrRBLaw.js";import"./useOsdkClient-CjZHpbU9.js";import"./tick-BpCxOvMz.js";import"./DropdownField-Dd9c5Emh.js";import"./isEqual-8_9WHdsY.js";import"./withOsdkMetrics-x8dgsXC7.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
