import{f as b,j as a,r as i}from"./iframe-B-N2-r-P.js";import{O as u}from"./object-table-_fbsy6dU.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D4Q0vOys.js";import"./Table-Bya1lDge.js";import"./index-Bo0hoe2f.js";import"./Dialog-DXd_1Yoc.js";import"./cross-Dj5vzrKC.js";import"./svgIconContainer-BP_Cyky3.js";import"./useBaseUiId-RRwSV0tF.js";import"./InternalBackdrop-DZCbNm3h.js";import"./composite-33K9WpJB.js";import"./index-DGpxl1lF.js";import"./index-Byx-03Es.js";import"./index-DEaJRpmz.js";import"./useEventCallback-DMShMpKI.js";import"./SkeletonBar-DWUI-Mzt.js";import"./LoadingCell-tbnkos6I.js";import"./ColumnConfigDialog-BGWYEQ3m.js";import"./DraggableList-Cm36A5XS.js";import"./search-DUpQ9VPH.js";import"./Input-B4_FJ4FZ.js";import"./useControlled-Bs9QYkJN.js";import"./Button-6zOkUJKB.js";import"./small-cross-DlV2wPTV.js";import"./ActionButton-CRtQoTxR.js";import"./Checkbox-DdpgXF4Z.js";import"./minus-qMa9QIgZ.js";import"./tick-SshItay0.js";import"./useValueChanged-BY9nod_a.js";import"./caret-down-CcRq_LZX.js";import"./CollapsiblePanel-2_KSJbBo.js";import"./MultiColumnSortDialog-BmcIpZa5.js";import"./MenuTrigger-jerYu0NQ.js";import"./CompositeItem-BXK3omay.js";import"./ToolbarRootContext-J4sGFDfu.js";import"./getDisabledMountTransitionStyles-DgWtRyxN.js";import"./getPseudoElementBounds-kFcYL4u5.js";import"./chevron-down-BQ_F75_V.js";import"./index-zUJNAcfu.js";import"./error-NjgVHdy_.js";import"./BaseCbacBanner-BdOocO2p.js";import"./makeExternalStore-DzKj_2bA.js";import"./Tooltip-Be8ah-o6.js";import"./PopoverPopup-CBSw_bgP.js";import"./toNumber-BJJSNncG.js";import"./useOsdkClient-CEtKxgQY.js";import"./DropdownField-ByvxgQg4.js";import"./withOsdkMetrics-D-Yn5mSP.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
