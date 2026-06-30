import{f as b,j as a,r as i}from"./iframe-CLWfP4z2.js";import{O as u}from"./object-table-CktdgTKx.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BzrZStXC.js";import"./Table-en3Z-6O5.js";import"./index-BgBB7Z-e.js";import"./Dialog-BQ984uqG.js";import"./cross-C0Wr3hwd.js";import"./svgIconContainer-D69P_S4a.js";import"./useBaseUiId-C9NJB7nL.js";import"./InternalBackdrop-DxEooAZj.js";import"./composite-h9wyn-2l.js";import"./index-Chb7ww3q.js";import"./index-Bl6F4jYh.js";import"./index-B5mcrY2z.js";import"./useEventCallback-Cxz1JUxO.js";import"./SkeletonBar-BqAhseA4.js";import"./LoadingCell-slU_Veea.js";import"./ColumnConfigDialog-DMyoqLmI.js";import"./DraggableList-CvMjs_ud.js";import"./search-ODINC4xY.js";import"./Input-zzQ_1vwt.js";import"./useControlled-Bwb3lJEh.js";import"./Button-Bn4klNWu.js";import"./small-cross-DkXUHE_R.js";import"./ActionButton-BNGXvoI9.js";import"./Checkbox-B5HMcoh0.js";import"./minus-CmYTHzM7.js";import"./tick-CfFP_Gq6.js";import"./useValueChanged-DL4Bu8cu.js";import"./caret-down-CpVK74Eq.js";import"./CollapsiblePanel-DROaDhQ_.js";import"./MultiColumnSortDialog-CLYv0Bqc.js";import"./MenuTrigger-Div1oUqI.js";import"./CompositeItem-DYrmc6lS.js";import"./ToolbarRootContext-BmDtDt78.js";import"./getDisabledMountTransitionStyles-DOrVjuHn.js";import"./getPseudoElementBounds-I4YMh8Gs.js";import"./chevron-down-C1Pfmq_D.js";import"./index-Cm9O_44o.js";import"./error-Dy5ltek9.js";import"./BaseCbacBanner-hLGnPlc-.js";import"./makeExternalStore-Wc8F_bcH.js";import"./Tooltip-sihSziLo.js";import"./PopoverPopup-0gcjn5QI.js";import"./toNumber-DDw3dFfL.js";import"./useOsdkClient-Cg_T5tHQ.js";import"./DropdownField-Bc1UwhmK.js";import"./withOsdkMetrics-1Ht0Uux3.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
