import{f as b,j as a,r as i}from"./iframe-BFbL1Gdy.js";import{O as u}from"./object-table-BHlz1Qzb.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DHk8vu6g.js";import"./index-B-4LJO37.js";import"./Dialog-tRb13ISr.js";import"./cross-CiiI7JQR.js";import"./svgIconContainer-0lXizkcA.js";import"./useBaseUiId-B_dYCIar.js";import"./InternalBackdrop-CgS-H1_5.js";import"./composite-CD4lktG6.js";import"./index-DDIAvSNo.js";import"./index-B-e29tx4.js";import"./index-D8oWUzRK.js";import"./useEventCallback-C9L2xivg.js";import"./SkeletonBar-CaDduvDQ.js";import"./LoadingCell-CT0rQg-P.js";import"./ColumnConfigDialog-C_QfwcY9.js";import"./DraggableList-BKFkVBQK.js";import"./search-C8I8REFJ.js";import"./Input-CYN8k52N.js";import"./useControlled-ToeGQqG-.js";import"./Button-B0F0CQLE.js";import"./small-cross-Cx_rak8E.js";import"./ActionButton-CvItV4wZ.js";import"./Checkbox-BoNO07xy.js";import"./useValueChanged-CGdMW2jm.js";import"./CollapsiblePanel-dt7gQwV1.js";import"./MultiColumnSortDialog-CtqMqDMQ.js";import"./MenuTrigger-CeLKiBYE.js";import"./CompositeItem-Du8ycWHV.js";import"./ToolbarRootContext-DJCNS1t_.js";import"./getDisabledMountTransitionStyles-DQZbsbN5.js";import"./getPseudoElementBounds-CAtkH-xO.js";import"./chevron-down-BNkVC-pe.js";import"./index-DxV3WRGx.js";import"./error-CA9h5Tsj.js";import"./BaseCbacBanner-DabSZZE-.js";import"./makeExternalStore-Cttn8Ubc.js";import"./Tooltip-BzUCPYl_.js";import"./PopoverPopup-Dy-HzyQe.js";import"./Select-Ca8OZlWh.js";import"./useOsdkClient-CwGjW6j8.js";import"./tick-DI-jk0OK.js";import"./DropdownField-DnpT5rdQ.js";import"./useDebouncedCallback-Clj3Dq5C.js";import"./isEqual-C3incRMf.js";import"./_baseIsEqual-BUpM9Ple.js";import"./stableSerialize-DCEh1d6Y.js";import"./withOsdkMetrics-Ru8uoXDU.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],Ee={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Se=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Se as __namedExportsOrder,Ee as default};
