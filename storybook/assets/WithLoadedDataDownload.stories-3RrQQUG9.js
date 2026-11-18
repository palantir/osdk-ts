import{f as b,j as a,r as i}from"./iframe-A3cFOKcN.js";import{O as u}from"./object-table-D6T5wWQI.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CxGinnZh.js";import"./index-BdisvGQs.js";import"./Dialog-IrmETrAM.js";import"./cross-BpCzBhcu.js";import"./svgIconContainer-Cx_x83Vw.js";import"./useBaseUiId-f8SNshup.js";import"./InternalBackdrop-CLQ76qla.js";import"./composite-CO4egJyo.js";import"./index-iwijohJb.js";import"./index-DC_i6GYR.js";import"./index-CwbCFpmW.js";import"./useEventCallback-DcGGf58T.js";import"./SkeletonBar-CFR5RV76.js";import"./LoadingCell-B-isKo1Q.js";import"./ColumnConfigDialog-C_I9U-JL.js";import"./DraggableList-eFQXa4c_.js";import"./search-CjzZlMWT.js";import"./Input-D8Sxy-AW.js";import"./useControlled-lPa7KKsj.js";import"./Button-BioOQfQu.js";import"./small-cross-E1MTPWPe.js";import"./ActionButton-D1a6Sq8f.js";import"./Checkbox-4H9IL8Qq.js";import"./useValueChanged-BSJmwQff.js";import"./CollapsiblePanel-kcqrPygQ.js";import"./MultiColumnSortDialog-D8ycB0c4.js";import"./MenuTrigger-tCW2Oivw.js";import"./CompositeItem-Brp6gpS6.js";import"./ToolbarRootContext-iK84Y3hB.js";import"./getDisabledMountTransitionStyles-CrBoc_TZ.js";import"./getPseudoElementBounds-DaGoMVcW.js";import"./chevron-down-BNVc1UKn.js";import"./index-C28TVULp.js";import"./error-oGpxxWLn.js";import"./BaseCbacBanner-BlxyISp5.js";import"./makeExternalStore-1BwNCmLf.js";import"./Tooltip-CdI3maSw.js";import"./PopoverPopup-DVMbRx4R.js";import"./Select-DHseJ8-J.js";import"./useOsdkClient-BpfPkxQE.js";import"./tick-DnihwVHh.js";import"./DropdownField-D-Vqq6xe.js";import"./useDebouncedCallback-BP589r5j.js";import"./isEqual-DQ5slpiQ.js";import"./_baseIsEqual-BLEcImby.js";import"./stableSerialize-Ck0v-oQz.js";import"./withOsdkMetrics-BHdLGHRT.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],Ee={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
