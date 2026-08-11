import{f as b,j as a,r as i}from"./iframe-CCe3oj1_.js";import{O as u}from"./object-table-CROb0HRq.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DFkWM7QD.js";import"./Table-DoIqAcaB.js";import"./index-BPyzy7qu.js";import"./Dialog-BFaMtkwF.js";import"./cross-BDTGYN03.js";import"./svgIconContainer-BcG3A1s1.js";import"./useBaseUiId-DWTWML2t.js";import"./InternalBackdrop-1uHa4FUe.js";import"./composite-DqbFj3tO.js";import"./index-DTGTU5kW.js";import"./index-CkYleNx0.js";import"./index-CQvhHm5l.js";import"./useEventCallback-QjNDkh9X.js";import"./SkeletonBar-BNlO8cb5.js";import"./LoadingCell-D34UfXj6.js";import"./ColumnConfigDialog-aR_PIIpd.js";import"./DraggableList-DrokCpor.js";import"./search-CNcIQLsn.js";import"./Input-B1ejoj9_.js";import"./useControlled-AVWP1zK_.js";import"./isEqual-BwtxOLUF.js";import"./isObject-BSF7yE2W.js";import"./Button-DYv7LQZU.js";import"./ActionButton-BWTIEXpg.js";import"./Checkbox-CjAK5ooC.js";import"./useValueChanged-CLC9UCU3.js";import"./CollapsiblePanel-BP-T8vPY.js";import"./MultiColumnSortDialog-DZt2E2UT.js";import"./MenuTrigger-CMuSifoI.js";import"./CompositeItem-DcCJzpjE.js";import"./ToolbarRootContext-D_9Dq2Dw.js";import"./getDisabledMountTransitionStyles-TfqTWo-i.js";import"./getPseudoElementBounds-DgTPtVsI.js";import"./chevron-down-5Odr2hDD.js";import"./index-DpZ-Ikd6.js";import"./error-gLdyLM8b.js";import"./BaseCbacBanner-CbF4nqNt.js";import"./makeExternalStore-ee2D0j5X.js";import"./Tooltip-C9jv0QeK.js";import"./PopoverPopup-B1NzfUu_.js";import"./toNumber-CAcNYWAx.js";import"./useOsdkClient-Dn8nHjzs.js";import"./tick-qjntkw8T.js";import"./DropdownField-Bdf2R4vw.js";import"./withOsdkMetrics-BE4radvo.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
