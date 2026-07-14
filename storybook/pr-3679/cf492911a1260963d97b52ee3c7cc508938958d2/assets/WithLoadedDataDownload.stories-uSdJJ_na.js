import{f as b,j as a,r as i}from"./iframe-D-LDqwFV.js";import{O as u}from"./object-table-Cgb6lv6L.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CQgjpoET.js";import"./Table-BWYgNYHH.js";import"./index-CDUltvKd.js";import"./Dialog-BfL_mXoF.js";import"./cross-CglMTmlH.js";import"./svgIconContainer-Dil5nr73.js";import"./useBaseUiId-IB9AIj0E.js";import"./InternalBackdrop-31qkVWL2.js";import"./composite-DcNZJmK6.js";import"./index-D2AFFczo.js";import"./index-BOBRfhg4.js";import"./index-DkKhN_Ou.js";import"./useEventCallback-CsaUHiOM.js";import"./SkeletonBar-D7H6O_5a.js";import"./LoadingCell-ohQoDaJO.js";import"./ColumnConfigDialog-CAdENlxm.js";import"./DraggableList-BSkDBDLN.js";import"./search-ujkrvjg4.js";import"./Input-9ImZUvVS.js";import"./useControlled-CqgLyap4.js";import"./Button-Cf09MQ3n.js";import"./small-cross-DA_9rcKW.js";import"./ActionButton--EqVUHGY.js";import"./Checkbox-K9EywQHS.js";import"./useValueChanged-CKDuijgO.js";import"./CollapsiblePanel-DdnIAGif.js";import"./MultiColumnSortDialog-CxuLHB52.js";import"./MenuTrigger-By4Th-BX.js";import"./CompositeItem-BwEwnpvu.js";import"./ToolbarRootContext-DabkRgUu.js";import"./getDisabledMountTransitionStyles-O0Rtl36Q.js";import"./getPseudoElementBounds-C9zJCLRB.js";import"./chevron-down-cBxLir_w.js";import"./index-nLq2NWR7.js";import"./error-C0LfW5Cp.js";import"./BaseCbacBanner-CKKPDZZN.js";import"./makeExternalStore-CwOQofhM.js";import"./Tooltip-W2QSXUEY.js";import"./PopoverPopup-DxitMFqS.js";import"./toNumber-E10t2HF5.js";import"./useOsdkClient-BpdDW5BI.js";import"./tick-DqCtZR8d.js";import"./DropdownField-CGa5NZsq.js";import"./withOsdkMetrics-Dt7kn6iD.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
