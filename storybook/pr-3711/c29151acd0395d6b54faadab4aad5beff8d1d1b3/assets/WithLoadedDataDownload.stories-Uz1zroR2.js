import{f as b,j as a,r as i}from"./iframe-ZHqX7REe.js";import{O as u}from"./object-table-Vh8oW-A8.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DpRAMuu6.js";import"./Table-Bhp-1ap9.js";import"./index-DfuwNCPz.js";import"./Dialog-Dw_2bPK3.js";import"./cross-BUpcGnSD.js";import"./svgIconContainer-CC2LHwK5.js";import"./useBaseUiId-CdVqE1St.js";import"./InternalBackdrop-5lRnhn2o.js";import"./composite-CPaOU4SS.js";import"./index-CMA1bUGM.js";import"./index-CJEXUC9y.js";import"./index-CaZ74q2f.js";import"./useEventCallback-DFAhL_tG.js";import"./SkeletonBar-B2lE7s5X.js";import"./LoadingCell-CN31CTiH.js";import"./ColumnConfigDialog-CyHjOFI_.js";import"./DraggableList-CuTzQGX5.js";import"./search-CfloQI9l.js";import"./Input-IE_JMD0V.js";import"./useControlled-CHDgDBvG.js";import"./isEqual-BVUaQcCA.js";import"./isObject-o4IhnsZF.js";import"./Button-kvIzLk26.js";import"./ActionButton-C2hfiwJt.js";import"./Checkbox-CFm9nvIc.js";import"./useValueChanged-Dpe9rZ1M.js";import"./CollapsiblePanel-DlY8HxoV.js";import"./MultiColumnSortDialog-D5Bn8DZi.js";import"./MenuTrigger-BTNXv_zW.js";import"./CompositeItem-CcRiLlTv.js";import"./ToolbarRootContext-27hv10N9.js";import"./getDisabledMountTransitionStyles-CV8tv2vS.js";import"./getPseudoElementBounds--oSEcpTd.js";import"./chevron-down-CZw5ptDU.js";import"./index-B7WI6jJb.js";import"./error-C_CdPU4N.js";import"./BaseCbacBanner-DfkU_8sF.js";import"./makeExternalStore-wzNUqb3R.js";import"./Tooltip-CzymwUB3.js";import"./PopoverPopup-ISI5MjGj.js";import"./toNumber-Ch8TQdeh.js";import"./useOsdkClient-Ujjfp2Zh.js";import"./tick-BjB7092B.js";import"./DropdownField-CaRb33S8.js";import"./withOsdkMetrics-DT1hhMh4.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
