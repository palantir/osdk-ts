import{f as b,j as a,r as i}from"./iframe-CUQ0qbyF.js";import{O as u}from"./object-table-BmmXU1lB.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B-Wc_5Ee.js";import"./Table-BdW9CqtL.js";import"./index-DryuTDyv.js";import"./Dialog-Bv18yf4C.js";import"./cross-D6dKkpU2.js";import"./svgIconContainer-ds5IMsUl.js";import"./useBaseUiId-BPEm72Vf.js";import"./InternalBackdrop-BkDqO-y4.js";import"./composite-DBJej9Y-.js";import"./index-5zNwloNO.js";import"./index-CwxNHNOO.js";import"./index-DB4kvDLN.js";import"./useEventCallback-BcyrUx-j.js";import"./SkeletonBar-B00rF3bq.js";import"./LoadingCell-BMv4Enny.js";import"./ColumnConfigDialog-zHi8ctuC.js";import"./DraggableList-Cr4tqpo8.js";import"./Input-DPpzVQIt.js";import"./useControlled-BuvaKmuN.js";import"./Button-CLDweaBF.js";import"./small-cross-B4YM-MfO.js";import"./ActionButton-1FPUKEC0.js";import"./Checkbox-CLDSYnuj.js";import"./minus-DDKkgXNN.js";import"./useValueChanged-CSJ4XsVa.js";import"./caret-down-ChvvPd6Q.js";import"./CollapsiblePanel-9w0uxEtW.js";import"./MultiColumnSortDialog-Cj3heAEA.js";import"./MenuTrigger-DHXjApW_.js";import"./CompositeItem-CoORs69-.js";import"./ToolbarRootContext-B7e0hFDq.js";import"./getDisabledMountTransitionStyles-CF23q7I-.js";import"./getPseudoElementBounds-B4eyjSOu.js";import"./chevron-down-CjITBNlh.js";import"./index-CWwhIJtL.js";import"./error-D-4knIf5.js";import"./BaseCbacBanner-B4CaMcbh.js";import"./makeExternalStore-zVDBRZXp.js";import"./Tooltip-CqBt_UJJ.js";import"./PopoverPopup-BKc4HZnG.js";import"./toNumber-3nL4eJe_.js";import"./useOsdkClient-TDJnxEXm.js";import"./DropdownField-C6EiUOot.js";import"./useStableShapeDefinition-BV3QRfN_.js";import"./withOsdkMetrics-DLsZYHBc.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
