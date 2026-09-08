import{f as b,j as a,r as i}from"./iframe-lO6oHnL4.js";import{O as u}from"./object-table-9DuCQ3cd.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CZ1zKWtp.js";import"./Table-DMY1ZxT7.js";import"./index-Dl6F1U12.js";import"./Dialog-BmnLqCjA.js";import"./cross-CmTyvcmm.js";import"./svgIconContainer-BCDfPS-8.js";import"./useBaseUiId-B846_agE.js";import"./InternalBackdrop-CRBsd0Rp.js";import"./composite-BjZ2VOoR.js";import"./index-D1QV3ytK.js";import"./index-DwP6FR90.js";import"./index-BxwWnAcj.js";import"./useEventCallback-KTIDuvyR.js";import"./SkeletonBar-C2FZeoWT.js";import"./LoadingCell-CgqmsXgw.js";import"./ColumnConfigDialog-e8Nvt7tr.js";import"./DraggableList-DGwYVxk8.js";import"./search-BNOG_dw_.js";import"./Input-oxwV_krW.js";import"./useControlled-D27zJnZ2.js";import"./Button-8GX9Y-dN.js";import"./small-cross-BcxRCy93.js";import"./ActionButton-O8N4TA40.js";import"./Checkbox-BKHMpGsH.js";import"./useValueChanged-Cwy5ekip.js";import"./CollapsiblePanel-CYfUcVRr.js";import"./MultiColumnSortDialog-nvRpfudt.js";import"./MenuTrigger-DXR1k6sj.js";import"./CompositeItem-FdcQgDtf.js";import"./ToolbarRootContext-BfcKDhBA.js";import"./getDisabledMountTransitionStyles-Cx8i-UAD.js";import"./getPseudoElementBounds-CicDtyQT.js";import"./chevron-down-0zZDUaq4.js";import"./index-Cx18vdAy.js";import"./error-CA5mje1x.js";import"./BaseCbacBanner-IhJ9we9x.js";import"./makeExternalStore-CjtvZY1y.js";import"./Tooltip-BlvnSvUU.js";import"./PopoverPopup-ci5-n8v2.js";import"./debounce-CgoayCyT.js";import"./useOsdkClient-DHPHVa2B.js";import"./tick-xT1qICzH.js";import"./DropdownField-Db4HRbpT.js";import"./isEqual-GLgBae2P.js";import"./withOsdkMetrics-BoEX6J3t.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
