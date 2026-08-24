import{f as b,j as a,r as i}from"./iframe-BPocqIVt.js";import{O as u}from"./object-table-BHDuSvAo.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DJuEbehX.js";import"./Table-CcZ4FuGS.js";import"./index-D8gxTUyX.js";import"./Dialog-ByPzxqeA.js";import"./cross-CP14YMB5.js";import"./svgIconContainer-lu5MT20R.js";import"./useBaseUiId-DHiAnipM.js";import"./InternalBackdrop-CZva0C0U.js";import"./composite-Bsm441N4.js";import"./index-DUErGcWd.js";import"./index-wB13koOt.js";import"./index-BSp8i_SU.js";import"./useEventCallback-aY1-PS5J.js";import"./SkeletonBar-DHiHMD5H.js";import"./LoadingCell-5yIIwy5g.js";import"./ColumnConfigDialog-BYI69Y6r.js";import"./DraggableList-CQhb22zm.js";import"./search-CPyRqeCk.js";import"./Input-DoB758NI.js";import"./useControlled-Cn9j2jZh.js";import"./Button-BAjtVZWF.js";import"./small-cross-DVc0tIFP.js";import"./ActionButton-5HFO0p1A.js";import"./Checkbox-DjeARGO6.js";import"./useValueChanged-DBh8PZxJ.js";import"./CollapsiblePanel-C4vE3Q24.js";import"./MultiColumnSortDialog-pxPrJnpy.js";import"./MenuTrigger-iVAxRcJM.js";import"./CompositeItem-uae9ym8T.js";import"./ToolbarRootContext-Bx5UxeGF.js";import"./getDisabledMountTransitionStyles-BszX_VbO.js";import"./getPseudoElementBounds-3m_HaT0i.js";import"./chevron-down-DzujtnRS.js";import"./index-QphKDK17.js";import"./error-SprCq_Ye.js";import"./BaseCbacBanner-DToPlCN2.js";import"./makeExternalStore-DNWt0sPl.js";import"./Tooltip-CAhNLUkJ.js";import"./PopoverPopup-BwNEzQB7.js";import"./debounce-CT4AXDLg.js";import"./useOsdkClient-Bm2y0aKf.js";import"./tick-a5SZvQAG.js";import"./DropdownField-CtOmtDd4.js";import"./isEqual-DA-bsXp9.js";import"./withOsdkMetrics-DyR4A0wB.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
