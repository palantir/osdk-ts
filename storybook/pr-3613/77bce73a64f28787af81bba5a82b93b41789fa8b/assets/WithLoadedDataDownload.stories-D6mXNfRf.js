import{f as b,j as a,r as i}from"./iframe-p490nonH.js";import{O as u}from"./object-table-DuKryOyy.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BIcftnno.js";import"./Table-BNQvytfP.js";import"./index-52NS_aRn.js";import"./Dialog-CZn4i_u6.js";import"./cross-BDCEJ8IA.js";import"./svgIconContainer-C6RHrBFn.js";import"./useBaseUiId-VK_cNWma.js";import"./InternalBackdrop-DyqH1FTO.js";import"./composite-aw4zcgXT.js";import"./index-PVazNw2_.js";import"./index-pcbqRC2-.js";import"./index-BeIFyu_c.js";import"./useEventCallback-CXivFiSR.js";import"./SkeletonBar-FBAzzry5.js";import"./LoadingCell-DgSHPPO-.js";import"./ColumnConfigDialog-CLr6tv5_.js";import"./DraggableList-1Duf6TMs.js";import"./search-jVbUyNWV.js";import"./Input-YQC5y0gd.js";import"./useControlled-BWvN-8Kn.js";import"./Button-CG83dhiX.js";import"./small-cross-Dgysjyys.js";import"./ActionButton-C9TYqjaG.js";import"./Checkbox-k_6b16QU.js";import"./minus-DGZK7YQd.js";import"./tick-CKS_prOE.js";import"./useValueChanged-CsHFkbAL.js";import"./caret-down-CJmZiIQv.js";import"./CollapsiblePanel-DdRxBGRF.js";import"./MultiColumnSortDialog-CRPZ5Qku.js";import"./MenuTrigger-Dtk3Y48B.js";import"./CompositeItem-B5C5mptb.js";import"./ToolbarRootContext-C9wWIi1V.js";import"./getDisabledMountTransitionStyles-BrNcqc8B.js";import"./getPseudoElementBounds-TUp9sTIF.js";import"./chevron-down-DQOkHGl7.js";import"./index-BVCoQIzt.js";import"./error-DmWs_i4H.js";import"./BaseCbacBanner-CQPiIMUq.js";import"./makeExternalStore-CDK13bzX.js";import"./Tooltip-USZfb5_R.js";import"./PopoverPopup-NperHhXn.js";import"./toNumber-sRG4roAN.js";import"./useOsdkClient-CwmShQs7.js";import"./DropdownField-Cd0OsfLP.js";import"./withOsdkMetrics-xECZZGPA.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
