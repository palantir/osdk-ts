import{f as b,j as a,r as i}from"./iframe-c92eWBTm.js";import{O as u}from"./object-table-Urt2J0sH.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C_mEB70A.js";import"./Table-D1liNC7d.js";import"./index-BNyL3dmc.js";import"./Dialog-BIitP0kQ.js";import"./cross-DLdKHUYj.js";import"./svgIconContainer-BR-sWY_B.js";import"./useBaseUiId-CZByDVJ8.js";import"./InternalBackdrop-Cjgj0ob4.js";import"./composite-DB4Ar6eT.js";import"./index-DNCjgZgw.js";import"./index-DpNu15BD.js";import"./index-CE_IpDOF.js";import"./useEventCallback-SiGShz6K.js";import"./SkeletonBar-5Mr_eOxZ.js";import"./LoadingCell-6WPtGaJN.js";import"./ColumnConfigDialog-CebDBM7r.js";import"./DraggableList-DI6uBsNq.js";import"./search-DUI8Keyd.js";import"./Input-DX2QK7C5.js";import"./useControlled-Caf6eOHS.js";import"./Button-BhSQs9el.js";import"./small-cross-B-PGSW1r.js";import"./ActionButton-D2-2fNqp.js";import"./Checkbox-BgbSeEa4.js";import"./useValueChanged-BTnCsynL.js";import"./CollapsiblePanel-B-G40PCw.js";import"./MultiColumnSortDialog-yr4c3WdG.js";import"./MenuTrigger-11hVYbaR.js";import"./CompositeItem-DP3vosw0.js";import"./ToolbarRootContext-BOIsQ_kh.js";import"./getDisabledMountTransitionStyles-CX00gzMZ.js";import"./getPseudoElementBounds-9oMqqWVm.js";import"./chevron-down-Bx1a8QAg.js";import"./index-wu_kXnGO.js";import"./error-10PygTue.js";import"./BaseCbacBanner-C6A-9fTV.js";import"./makeExternalStore-D7JaTI9q.js";import"./Tooltip-g3VbHlYI.js";import"./PopoverPopup-OY5zmnj_.js";import"./debounce-Q6oraD_R.js";import"./useOsdkClient-C_evHfwa.js";import"./tick-paWTMZXM.js";import"./DropdownField-B_YoHs2i.js";import"./isEqual-DfwbMjk2.js";import"./withOsdkMetrics-3UcJmunM.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
