import{f as b,j as a,r as i}from"./iframe-K0TCdsde.js";import{O as u}from"./object-table-M3n5hKDi.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dwgne7Il.js";import"./Table-C1XM_QKS.js";import"./index-DItHkTgY.js";import"./Dialog-B1DayVK3.js";import"./cross-DjsH4BEX.js";import"./svgIconContainer-Gp_WdiNB.js";import"./useBaseUiId-BMvE3UAz.js";import"./InternalBackdrop-D74UPcil.js";import"./composite-BDOTFVh5.js";import"./index-Ce5TUgVz.js";import"./index-BSQQlf89.js";import"./index-CC8neGBv.js";import"./useEventCallback-Bz_plcSd.js";import"./SkeletonBar-Brb8R_mA.js";import"./LoadingCell-BWzyKLCF.js";import"./ColumnConfigDialog-D_yPVd8N.js";import"./DraggableList-BqMr2Fp_.js";import"./search-FP5lKD6I.js";import"./Input-jHELzDU6.js";import"./useControlled-CpHTfHM_.js";import"./Button-vcsLfruM.js";import"./small-cross-vpbYh6K7.js";import"./ActionButton-De6D_lsR.js";import"./Checkbox-DCU9bxEE.js";import"./useValueChanged-wDqDSQMF.js";import"./CollapsiblePanel-CCOarC2c.js";import"./MultiColumnSortDialog-BK-e9qA_.js";import"./MenuTrigger-WTCUNXlT.js";import"./CompositeItem-CKtGokfX.js";import"./ToolbarRootContext-B08lxs8l.js";import"./getDisabledMountTransitionStyles-BmL_QtPR.js";import"./getPseudoElementBounds-DYoZN7nx.js";import"./chevron-down-BkK6PVnf.js";import"./index-DTPy9xIo.js";import"./error-C3B7tWvq.js";import"./BaseCbacBanner-BOLM0JoP.js";import"./makeExternalStore-sZwLQQxf.js";import"./Tooltip-DV12Jp8G.js";import"./PopoverPopup-DfnNNJDY.js";import"./debounce-GmSPsudP.js";import"./useOsdkClient-Cb96qSwW.js";import"./tick-D-0sxjMV.js";import"./DropdownField-D7fdjvLz.js";import"./isEqual-D6N9qcKt.js";import"./withOsdkMetrics-B9tQP4dB.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
