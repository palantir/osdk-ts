import{f as b,j as a,r as i}from"./iframe-Cl70dWji.js";import{O as u}from"./object-table-DSKBKJEJ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-QiZ_zLcF.js";import"./Table-CT32E32c.js";import"./index-Ds00pONi.js";import"./Dialog-BQOFHT2N.js";import"./cross-BB7Pc46-.js";import"./svgIconContainer-BTNEBHys.js";import"./useBaseUiId-DOyYal5B.js";import"./InternalBackdrop-DrCY85f_.js";import"./composite-C748PZ0N.js";import"./index-C3QZTmM_.js";import"./index-CafCqYhX.js";import"./index-BNc2rzrN.js";import"./useEventCallback-CuVM_nnh.js";import"./SkeletonBar-ZZ-gHcd3.js";import"./LoadingCell-C4fmmZXT.js";import"./ColumnConfigDialog-D1JnnrAy.js";import"./DraggableList-Cy_C57Fv.js";import"./search-DF6sLdtJ.js";import"./Input-BXSbXZmI.js";import"./useControlled-Q9tFcpq6.js";import"./isEqual-C6EEvx8A.js";import"./isObject-DQR0yTql.js";import"./Button-D15y4J1a.js";import"./ActionButton-DewavcTR.js";import"./Checkbox-CMJRhaQz.js";import"./useValueChanged-BOJK3Ya0.js";import"./CollapsiblePanel-5JgopO6I.js";import"./MultiColumnSortDialog-D6_YMFCs.js";import"./MenuTrigger-BqxlSmck.js";import"./CompositeItem-BomeUMbI.js";import"./ToolbarRootContext-DqYG79A3.js";import"./getDisabledMountTransitionStyles-C6EScx01.js";import"./getPseudoElementBounds-DMThbFPG.js";import"./chevron-down-CVLu7rIR.js";import"./index-CoYvOkpA.js";import"./error-BlBC8OXl.js";import"./BaseCbacBanner-l6rCUghX.js";import"./makeExternalStore-BMmPmQBR.js";import"./Tooltip-CXyot0O5.js";import"./PopoverPopup-CoC_t-0L.js";import"./toNumber-BLVbDFpr.js";import"./useOsdkClient-DnZ3twwm.js";import"./tick-DgbGHwXk.js";import"./DropdownField-Bav9j6aq.js";import"./withOsdkMetrics-DW3ouCxC.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
