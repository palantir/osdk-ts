import{f as b,j as a,r as i}from"./iframe-g6xxvyIV.js";import{O as u}from"./object-table-BWyD-xVP.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-VtRw9ZxB.js";import"./Table-CWYryIq-.js";import"./index-CswLMQ0k.js";import"./Dialog-gHaoBoVV.js";import"./cross-ClaRDnYq.js";import"./svgIconContainer-TEGni_EK.js";import"./useBaseUiId-DXMdH-da.js";import"./InternalBackdrop-B2kPN_TW.js";import"./composite-CidrPxyb.js";import"./index-B1T8sIVD.js";import"./index-Df1hA2tb.js";import"./index-BqNrJX4d.js";import"./useEventCallback-Q7tlTXVx.js";import"./SkeletonBar-CIK4W8nM.js";import"./LoadingCell-Cf0gPIJl.js";import"./ColumnConfigDialog-TZ-5NdgB.js";import"./DraggableList-TxpAQF2V.js";import"./search-CoUKVa3J.js";import"./Input-DvVClOUT.js";import"./useControlled-DBzkXlO9.js";import"./Button-BX2PLV5j.js";import"./small-cross-DuwCmfeY.js";import"./ActionButton-B6C4Psnv.js";import"./Checkbox-CVKZIi-z.js";import"./useValueChanged-DvWpAsov.js";import"./CollapsiblePanel-RFMs-0SV.js";import"./MultiColumnSortDialog-Dq269Ur2.js";import"./MenuTrigger-BOmmKr51.js";import"./CompositeItem-D8bzrW1A.js";import"./ToolbarRootContext-CnYeU0vp.js";import"./getDisabledMountTransitionStyles-AFQK8iPs.js";import"./getPseudoElementBounds-COVW9G6p.js";import"./chevron-down-CkRfYs8Z.js";import"./index-DuMOiw4h.js";import"./error-BGoiu4dF.js";import"./BaseCbacBanner-y5Sk3JyZ.js";import"./makeExternalStore-BrS-ebeG.js";import"./Tooltip-82FaG7gZ.js";import"./PopoverPopup-MFr_6M87.js";import"./debounce-D2Twfe4R.js";import"./useOsdkClient-DQW7wz7c.js";import"./tick-BcR7azTr.js";import"./DropdownField-B2rbjyzb.js";import"./isEqual-D1gQH29y.js";import"./withOsdkMetrics-CfHIwfTt.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
