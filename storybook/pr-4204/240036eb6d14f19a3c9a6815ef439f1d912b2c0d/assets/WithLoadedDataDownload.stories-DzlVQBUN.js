import{f as b,j as a,r as i}from"./iframe-C2bn1_9y.js";import{O as u}from"./object-table-CQxPAmKg.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BKCOmGZc.js";import"./Table-C4R5ME31.js";import"./index-Rse0ui84.js";import"./Dialog-Diug7YE5.js";import"./cross-D3-SLGNH.js";import"./svgIconContainer-DPC29kub.js";import"./useBaseUiId-BEW7P3cF.js";import"./InternalBackdrop-DHxqqy0U.js";import"./composite-DfH2wcee.js";import"./index-pp8KWnVv.js";import"./index-Dvlf4PX0.js";import"./index-CIcHY6Ua.js";import"./useEventCallback-DVSHSqJV.js";import"./SkeletonBar-CjAl8nh4.js";import"./LoadingCell-VuLTzYHZ.js";import"./ColumnConfigDialog-DgjE8Rki.js";import"./DraggableList-CcVbWkep.js";import"./search-BCScHNOJ.js";import"./Input-M9Th-rY9.js";import"./useControlled-BN9CT1rQ.js";import"./Button-DYwf6UQE.js";import"./small-cross-BbD3VZXI.js";import"./ActionButton-C1OuBZSx.js";import"./Checkbox-BcechQff.js";import"./useValueChanged-CitzyAfL.js";import"./CollapsiblePanel-BM0qN9C1.js";import"./MultiColumnSortDialog-BkDE4zFt.js";import"./MenuTrigger-DJvbYVk1.js";import"./CompositeItem-Dhse_QgT.js";import"./ToolbarRootContext-C-eiR_Mr.js";import"./getDisabledMountTransitionStyles-Cw6nwd_1.js";import"./getPseudoElementBounds-jQ_Lb5TR.js";import"./chevron-down-BOQ5t9w6.js";import"./index-C2JbH2_9.js";import"./error-DBJpIi5X.js";import"./BaseCbacBanner-CXDqxbSv.js";import"./makeExternalStore-DeVLvyOh.js";import"./Tooltip-AZ5zh1rm.js";import"./PopoverPopup-CtnZgejC.js";import"./debounce-VRVIwWBB.js";import"./useOsdkClient-CRP05prZ.js";import"./tick-CkUSwppG.js";import"./DropdownField-Czf-9CkU.js";import"./isEqual-V1FkRnTw.js";import"./withOsdkMetrics-B5yrVNzh.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
