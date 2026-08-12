import{f as b,j as a,r as i}from"./iframe-BPstW6ZE.js";import{O as u}from"./object-table-D-o69GE3.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C1yaL2qB.js";import"./Table-BEhBCAZB.js";import"./index-oeOs9xDH.js";import"./Dialog-GTZWMfmi.js";import"./cross-h_pVI4NA.js";import"./svgIconContainer-P3rHXEhC.js";import"./useBaseUiId-DQCTx5tU.js";import"./InternalBackdrop-CADeAroK.js";import"./composite-BvwNFg7y.js";import"./index-BsuF2ON3.js";import"./index-D870R5ia.js";import"./index-FqcPuEWk.js";import"./useEventCallback-BmRB3Hyu.js";import"./SkeletonBar-B-M25D9F.js";import"./LoadingCell-BiPmgVC8.js";import"./ColumnConfigDialog-BJyMcDsF.js";import"./DraggableList-CfhjYQXW.js";import"./search-luiRnVuA.js";import"./Input-CJQqoWu9.js";import"./useControlled-CMlf5svM.js";import"./isEqual-BXF6jkNC.js";import"./isObject-BlJ2n4Pj.js";import"./Button-DpEn25wX.js";import"./ActionButton-B4Ro7V7h.js";import"./Checkbox-DpRmUnIN.js";import"./useValueChanged-M_mFMCou.js";import"./CollapsiblePanel-BgN_u1EL.js";import"./MultiColumnSortDialog-B0sNZVI2.js";import"./MenuTrigger-Dcp8kl_G.js";import"./CompositeItem-DKvCwQV-.js";import"./ToolbarRootContext-6fjF2uPZ.js";import"./getDisabledMountTransitionStyles-DP6x3nVb.js";import"./getPseudoElementBounds-DSbLy3C-.js";import"./chevron-down-BAdvtM20.js";import"./index-DT1CG8gQ.js";import"./error-CcPkSYDi.js";import"./BaseCbacBanner-C45xgzQO.js";import"./makeExternalStore-BKSRaA4m.js";import"./Tooltip-B8gaSUFu.js";import"./PopoverPopup-maH0pGUs.js";import"./toNumber-DNIsRNAE.js";import"./useOsdkClient-DRaShh3l.js";import"./tick-CsxuT713.js";import"./DropdownField-AVjDHtIY.js";import"./withOsdkMetrics-D8kGTVyU.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
