import{f as b,j as a,r as i}from"./iframe-CrKPlwEU.js";import{O as u}from"./object-table-CvR6OxpR.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-haeFzdUn.js";import"./Table-DgE5klJe.js";import"./index-CpV23X_V.js";import"./Dialog-D19FsKBo.js";import"./cross-BOaN4EGV.js";import"./svgIconContainer-DeM85DcU.js";import"./useBaseUiId-3D9LSptD.js";import"./InternalBackdrop-CANy3XAr.js";import"./composite-chiYjW3e.js";import"./index-CuiFjKJ6.js";import"./index-Tf0Q6mNY.js";import"./index-FzYKWb4a.js";import"./useEventCallback-CrnEc3ig.js";import"./SkeletonBar-DHBToYCm.js";import"./LoadingCell-CEYS61L0.js";import"./ColumnConfigDialog-BRK66Wau.js";import"./DraggableList-DYCS6jmS.js";import"./search-Djn1cGPu.js";import"./Input-D5pWgixZ.js";import"./useControlled-BeRVPSrG.js";import"./Button-C2XUaQth.js";import"./small-cross-CeyGDtbC.js";import"./ActionButton-Dk7pYVbj.js";import"./Checkbox-DddYpv7L.js";import"./useValueChanged-B9MjiZal.js";import"./CollapsiblePanel-CkSGM0Jv.js";import"./MultiColumnSortDialog-9ZoqMut-.js";import"./MenuTrigger-BExeNii_.js";import"./CompositeItem-CWEcL4Np.js";import"./ToolbarRootContext-CqOU07W6.js";import"./getDisabledMountTransitionStyles-DT-8seTh.js";import"./getPseudoElementBounds-Bvl6KZtn.js";import"./chevron-down-B-Yd5sHs.js";import"./index-Dr_M4lxK.js";import"./error-DbcL_3Bp.js";import"./BaseCbacBanner-BTtW5FAV.js";import"./makeExternalStore-Drk2huTh.js";import"./Tooltip-C4p1lLDJ.js";import"./PopoverPopup-Ce9yvUeR.js";import"./debounce-l8Bh5wEB.js";import"./useOsdkClient-TsA83w7k.js";import"./tick-Ciq_5nwQ.js";import"./DropdownField-CU7FI4gK.js";import"./isEqual-C8BY78Y6.js";import"./withOsdkMetrics-CM1wTx4W.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
