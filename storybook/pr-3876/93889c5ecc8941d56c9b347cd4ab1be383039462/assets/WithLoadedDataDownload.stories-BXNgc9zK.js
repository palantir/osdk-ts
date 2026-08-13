import{f as b,j as a,r as i}from"./iframe-B8ibQjKF.js";import{O as u}from"./object-table-9vqfk3fk.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CMD4l3O3.js";import"./Table-f9R4UMOG.js";import"./index-B--aNSCd.js";import"./Dialog-BSpD68-v.js";import"./cross-uGZs9fgx.js";import"./svgIconContainer-DuFhrdn4.js";import"./useBaseUiId-BxWBC6a-.js";import"./InternalBackdrop-CCxZSbaK.js";import"./composite-CAyfL59E.js";import"./index-BCjJY3yP.js";import"./index-DBfTlL85.js";import"./index-DrgkSuUF.js";import"./useEventCallback-DePWrBVy.js";import"./SkeletonBar-DE8ZQ6J2.js";import"./LoadingCell-Bp02iLbu.js";import"./ColumnConfigDialog-DZlI4Qsl.js";import"./DraggableList-ByHOcy7f.js";import"./search-Cf8PmQT0.js";import"./Input-B1tchOJx.js";import"./useControlled-Cii-y7gH.js";import"./Button-A4muZh2M.js";import"./small-cross-DdjbaLVn.js";import"./ActionButton-DqU28EvH.js";import"./Checkbox-CA6_XMTm.js";import"./useValueChanged-7WVLzbi3.js";import"./CollapsiblePanel-z3aLJBjW.js";import"./MultiColumnSortDialog-CfWO-If5.js";import"./MenuTrigger-CJ44DmRX.js";import"./CompositeItem-BRMst1Om.js";import"./ToolbarRootContext-CK_0JlCI.js";import"./getDisabledMountTransitionStyles-BJ46NQkw.js";import"./getPseudoElementBounds-xIxeLL80.js";import"./chevron-down-DnT6V3B_.js";import"./index-CS7J2oP3.js";import"./error-B5tJ6HNC.js";import"./BaseCbacBanner-Dpz_8FPC.js";import"./makeExternalStore-PzBycvZ3.js";import"./Tooltip-BT2aBHPW.js";import"./PopoverPopup-B0Ae0Now.js";import"./debounce-CE6scw_c.js";import"./useOsdkClient-CNSoK_jG.js";import"./tick-CNDf03QZ.js";import"./DropdownField-ChRNI13x.js";import"./isEqual-CMa4Cmoc.js";import"./withOsdkMetrics-DLhXO-aP.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
