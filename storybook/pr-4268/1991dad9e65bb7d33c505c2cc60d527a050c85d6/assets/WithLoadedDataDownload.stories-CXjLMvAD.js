import{f as b,j as a,r as i}from"./iframe-BaflQOGd.js";import{O as u}from"./object-table-rBYFG3dL.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-p4HJijQg.js";import"./Table-BZhq6jNP.js";import"./index-Cdh_dFWj.js";import"./Dialog-sEWbFpCS.js";import"./cross-BGrOCP65.js";import"./svgIconContainer-C8p2nfID.js";import"./useBaseUiId-pk7UMSg-.js";import"./InternalBackdrop-BXpufEJp.js";import"./composite-Bz466JDP.js";import"./index-BbhGUNVZ.js";import"./index-8FM1YS3J.js";import"./index-gtiiyw16.js";import"./useEventCallback-CKswwic-.js";import"./SkeletonBar-p10R1lcv.js";import"./LoadingCell-CH2uP32b.js";import"./ColumnConfigDialog-DFdfDYob.js";import"./DraggableList-BBK4Chui.js";import"./search-BBcvVFuT.js";import"./Input-C7CjAQyY.js";import"./useControlled-BHd0pcmo.js";import"./Button-Bdo2X4x8.js";import"./small-cross-CskAyC0y.js";import"./ActionButton-DIqkcEFC.js";import"./Checkbox-Sizrw6ib.js";import"./useValueChanged-BkzyuB8t.js";import"./CollapsiblePanel-BDr9gif1.js";import"./MultiColumnSortDialog-CmnGKHoe.js";import"./MenuTrigger-CEe5FZ0H.js";import"./CompositeItem-nIPenTO0.js";import"./ToolbarRootContext-CwJdNdBU.js";import"./getDisabledMountTransitionStyles-Zf4kfjLM.js";import"./getPseudoElementBounds-CHW9P6Nq.js";import"./chevron-down-Cnmtw8e6.js";import"./index-DxGtCk42.js";import"./error-DIEj2ztu.js";import"./BaseCbacBanner-BGXh1-EF.js";import"./makeExternalStore-C2juSaVb.js";import"./Tooltip-BRluqZVE.js";import"./PopoverPopup-wC024HyS.js";import"./debounce-Bxc3LUXI.js";import"./useOsdkClient-BRi0iGfs.js";import"./tick-DGqr-KEb.js";import"./DropdownField-BKcx8XSW.js";import"./isEqual-CHlDy3oh.js";import"./withOsdkMetrics-CP1M_ZfY.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
