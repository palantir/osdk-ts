import{f as b,j as a,r as i}from"./iframe-Cc5_drEC.js";import{O as u}from"./object-table-P_Tf1Dfl.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Bt1W59RD.js";import"./Table-DeQbLK8q.js";import"./index-D-UZOeKX.js";import"./Dialog-C1aseqgF.js";import"./cross-CJA5t11o.js";import"./svgIconContainer-DUNbWJiK.js";import"./useBaseUiId-DZZTvEON.js";import"./InternalBackdrop-00ofXWi4.js";import"./composite-DTAuCieW.js";import"./index-IxLV6xZ7.js";import"./index-fYCa685o.js";import"./index-DLbXZ__j.js";import"./useEventCallback-Nwtw5ePR.js";import"./SkeletonBar-DdEJM8wE.js";import"./LoadingCell-C5h29HP8.js";import"./ColumnConfigDialog-TW1lwUkG.js";import"./DraggableList-BzFzeCoL.js";import"./search-C_Y495lk.js";import"./Input-BXNkfVg0.js";import"./useControlled-DzeayCVC.js";import"./Button-CLepS3ZY.js";import"./small-cross-ChmHXfGU.js";import"./ActionButton-w_opMWjJ.js";import"./Checkbox-DKu8ib_9.js";import"./useValueChanged-C8wUi11i.js";import"./CollapsiblePanel-CxbXkZUA.js";import"./MultiColumnSortDialog-CM1JEO4R.js";import"./MenuTrigger-BqkP-pKp.js";import"./CompositeItem-Zf76mXhE.js";import"./ToolbarRootContext-B17vRDJw.js";import"./getDisabledMountTransitionStyles-CWBpGJQ9.js";import"./getPseudoElementBounds-BgIULFkV.js";import"./chevron-down-DaAY8kxc.js";import"./index-DpTIc79B.js";import"./error-CgtKdKTE.js";import"./BaseCbacBanner-CtMCVqmc.js";import"./makeExternalStore-8Ml87JDf.js";import"./Tooltip-DLAYmbQY.js";import"./PopoverPopup-NaPF7hSd.js";import"./debounce-DfK46y7C.js";import"./useOsdkClient-C_6tjczz.js";import"./tick-CMjsKL7k.js";import"./DropdownField-DP_8eQpa.js";import"./isEqual-DuFq13IR.js";import"./withOsdkMetrics-uMhaipzm.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
