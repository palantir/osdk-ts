import{f as b,j as a,r as i}from"./iframe-BrTF0wQy.js";import{O as u}from"./object-table-CgrulwW1.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BrgL7riq.js";import"./Table-D8WRhJfJ.js";import"./index-CLIofpuq.js";import"./Dialog-CIyT0sDx.js";import"./cross-Dlqc_1ZY.js";import"./svgIconContainer-_Twg2KpW.js";import"./useBaseUiId-paQZpqMq.js";import"./InternalBackdrop-DTqnKF8D.js";import"./composite-CeMPnKRZ.js";import"./index-D3SuSheR.js";import"./index-nFJUSH9O.js";import"./index-BWpmmqhl.js";import"./useEventCallback-VkT7yqal.js";import"./SkeletonBar-BHt2XqQp.js";import"./LoadingCell-BYbY2f0u.js";import"./ColumnConfigDialog-CqVp89in.js";import"./DraggableList-BekO45lD.js";import"./search-CqSH1asp.js";import"./Input-BxbCwGL8.js";import"./useControlled-DhGBxpYo.js";import"./Button-BnRJeVMr.js";import"./small-cross-aXc1L9EQ.js";import"./ActionButton-C44yj7_9.js";import"./Checkbox-9FLkIUOf.js";import"./useValueChanged-BughKinG.js";import"./CollapsiblePanel-D86cBPU8.js";import"./MultiColumnSortDialog-CrH_UI_g.js";import"./MenuTrigger-JJndQNlM.js";import"./CompositeItem-Cz4Nt1SP.js";import"./ToolbarRootContext-vcL9onuR.js";import"./getDisabledMountTransitionStyles-BNArIVjE.js";import"./getPseudoElementBounds-_r6Nu2cP.js";import"./chevron-down-K7i3qdrh.js";import"./index-D3KaSgKX.js";import"./error-Csk-3gAP.js";import"./BaseCbacBanner-ewOQcDaW.js";import"./makeExternalStore-BDEao_Ea.js";import"./Tooltip-49_4-YPv.js";import"./PopoverPopup-CXeUmeNO.js";import"./debounce-DdMg5vR0.js";import"./useOsdkClient-CbbaCk5h.js";import"./tick-Bd4yE76w.js";import"./DropdownField-BdwvDz8K.js";import"./isEqual-BRp4klEC.js";import"./withOsdkMetrics-DXsXQf0j.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
