import{f as b,j as a,r as i}from"./iframe-BrffKLyp.js";import{O as u}from"./object-table-Dpu5k5SK.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BB6iUnWm.js";import"./Table-B_02uKRN.js";import"./index-DdTg6oKw.js";import"./Dialog-Ksl7yw-Q.js";import"./cross-Dp6LnhT2.js";import"./svgIconContainer-dbsVi0_7.js";import"./useBaseUiId-OXag9z4A.js";import"./InternalBackdrop-CnkFNeAc.js";import"./composite-B19juyCu.js";import"./index-BY-yZOS1.js";import"./index-BNYKUSid.js";import"./index-CKbA51qL.js";import"./useEventCallback-KlENmr3-.js";import"./SkeletonBar-BNhUv384.js";import"./LoadingCell-uuhgPaRC.js";import"./ColumnConfigDialog-DjoTRpTp.js";import"./DraggableList-DKtcAVy4.js";import"./search-DpKU3GOV.js";import"./Input-D50y4-4d.js";import"./useControlled-ByoWnUuY.js";import"./Button-BBZWD59x.js";import"./small-cross-CpyGHN9N.js";import"./ActionButton-C4PM5hyU.js";import"./Checkbox-DfzWclH1.js";import"./useValueChanged-CAUNudgK.js";import"./CollapsiblePanel-B88FbLvt.js";import"./MultiColumnSortDialog-OtGBhL2Z.js";import"./MenuTrigger-C1wZppHS.js";import"./CompositeItem-BfleHTK8.js";import"./ToolbarRootContext-B5DfTbi7.js";import"./getDisabledMountTransitionStyles-C9YJOWb9.js";import"./getPseudoElementBounds-vl7uyq45.js";import"./chevron-down-BEFoIyYv.js";import"./index-YnTFldk0.js";import"./error-y0lQ0i5v.js";import"./BaseCbacBanner-C1aMcfEF.js";import"./makeExternalStore-DG5GHaRJ.js";import"./Tooltip-Cnrxi8BQ.js";import"./PopoverPopup-qvwA2CT4.js";import"./debounce-CTTKbsgG.js";import"./useOsdkClient-VXDqhkKt.js";import"./tick-D7AFc6ML.js";import"./DropdownField-DYCm_r7c.js";import"./isEqual-DtGDNuhx.js";import"./withOsdkMetrics-rbdPxHeN.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
