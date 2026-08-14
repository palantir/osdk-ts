import{f as b,j as a,r as i}from"./iframe-0eC9Hb1Q.js";import{O as u}from"./object-table-D7oZIRCE.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CyETt7By.js";import"./Table-D5uZHd5s.js";import"./index-CRE2XHsU.js";import"./Dialog-B8_GHTyL.js";import"./cross-D9zq7TFg.js";import"./svgIconContainer-C7W98r5m.js";import"./useBaseUiId-B_2ELJP8.js";import"./InternalBackdrop-BOAibfmR.js";import"./composite-Cd_XCN96.js";import"./index-CvdbH2x8.js";import"./index-D9GA0kdv.js";import"./index-iV2dELQ1.js";import"./useEventCallback-C0tClelP.js";import"./SkeletonBar-eBdcJl3t.js";import"./LoadingCell-CZ-mwP2y.js";import"./ColumnConfigDialog-ro3mDikH.js";import"./DraggableList-DlG1vA6n.js";import"./search-F24JokU_.js";import"./Input-CIgrvflx.js";import"./useControlled-D5GxZ6C-.js";import"./Button-C1ygc_il.js";import"./small-cross-DFLTLzz0.js";import"./ActionButton-B6EzioXF.js";import"./Checkbox-JWIuZaTI.js";import"./useValueChanged-C5Z4l0Hz.js";import"./CollapsiblePanel-Cq_F2eVy.js";import"./MultiColumnSortDialog-EPeOeL4H.js";import"./MenuTrigger-BagA7P2M.js";import"./CompositeItem-CV7hu4fC.js";import"./ToolbarRootContext-afkGU23n.js";import"./getDisabledMountTransitionStyles-CjHO1xCK.js";import"./getPseudoElementBounds-BhgXRSlJ.js";import"./chevron-down-BTFePERp.js";import"./index-BiegP6go.js";import"./error-lpXmTpCf.js";import"./BaseCbacBanner-Do2SxMD9.js";import"./makeExternalStore-CP3jPB6B.js";import"./Tooltip-Du2WyMOU.js";import"./PopoverPopup-Cbgij3G0.js";import"./debounce-DT3Sn9e2.js";import"./useOsdkClient-B7nV8p0s.js";import"./tick-DklGyNLw.js";import"./DropdownField-Ba8uSvbB.js";import"./isEqual-DGiSGIUH.js";import"./withOsdkMetrics-COXmoufD.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
