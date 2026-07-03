import{f as b,j as a,r as i}from"./iframe-DQN-Pq2T.js";import{O as u}from"./object-table-CmeVp8n1.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-ClfwPwjs.js";import"./Table-BpU0vAJ6.js";import"./index-Chu8aKzj.js";import"./Dialog-Dj2BCQ8N.js";import"./cross-3ovuSxzt.js";import"./svgIconContainer-BP9Z-tDZ.js";import"./useBaseUiId-DkaPH0Rf.js";import"./InternalBackdrop-BygPAN2W.js";import"./composite-Dbvdjp0t.js";import"./index-Bp1bTyR_.js";import"./index-Cce1HCVa.js";import"./index-ChGfHgET.js";import"./useEventCallback-DYYlu-m6.js";import"./SkeletonBar-BE3I8MoQ.js";import"./LoadingCell-Dsx3HKoS.js";import"./ColumnConfigDialog-E60CVnkB.js";import"./DraggableList-DmfXfJbM.js";import"./search-CoQIVL1G.js";import"./Input-TdFqwFJ9.js";import"./useControlled-8x2p57kR.js";import"./Button-BY76ulQB.js";import"./small-cross-B-2QeqQn.js";import"./ActionButton-CBkhyQTC.js";import"./Checkbox-Drs7IfGF.js";import"./useValueChanged-hm5_Lcsk.js";import"./CollapsiblePanel-Dfy6-tFp.js";import"./MultiColumnSortDialog-bTl9ud3S.js";import"./MenuTrigger-DuJcmvYA.js";import"./CompositeItem-D-EwU_cS.js";import"./ToolbarRootContext-De5GksnA.js";import"./getDisabledMountTransitionStyles-C0v-gC6m.js";import"./getPseudoElementBounds-CLo3dBn9.js";import"./chevron-down-Bf5jOaiw.js";import"./index-B-hvhj9n.js";import"./error-D2knBKFU.js";import"./BaseCbacBanner-FyyDsrjU.js";import"./makeExternalStore-B1QPW6-K.js";import"./Tooltip-BsnTz5C5.js";import"./PopoverPopup-DZ6yf8Vp.js";import"./toNumber-DrM8AWaT.js";import"./useOsdkClient-Dj_nXCJ7.js";import"./tick-D2NTJYm4.js";import"./DropdownField-COktRTPB.js";import"./withOsdkMetrics-C7yAfJYl.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
